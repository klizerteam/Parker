<?php

namespace App\Jobs;

use App\Models\AkeneoParkerSyncLog;
use App\Services\AkeneoService;
use App\Services\ParkerService;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use App\Models\BatchSyncLog;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Arr;

class ProcessProductSync implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $products;
    protected $syncLogId;
    protected $batchId;
    protected $logFilePath;
    protected $errorlogFilePath;
    protected $akeneoService;
    protected $parkerService;
    protected $syncLog;
    protected $batchLogs;
   

    public function __construct($products, $syncLogId,$batchId, $logFilePath, $errorlogFilePath,$batchLogs)
    {
        $this->products = $products;
        $this->syncLogId = $syncLogId;
        $this->batchId = $batchId;
        $this->logFilePath = $logFilePath;
        $this->errorlogFilePath = $errorlogFilePath;
        $this->batchLogs = $batchLogs;
    }

    public function handle(AkeneoService $akeneoService, ParkerService $parkerService)
    {
        $logFilePath =  $this->logFilePath;
        $errorlogFilePath =  $this->errorlogFilePath;
        $failureCount = 0;
        $successCount = 0;
        $batchLog = BatchSyncLog::find($this->batchId);
        $syncLog = AkeneoParkerSyncLog::find($this->syncLogId);
        
        try {
            if (!$batchLog) {
                $this->addLogEntry($logFilePath,$errorlogFilePath, "Batch log with ID {$this->batchId} not found.", 'ERROR');
            }
    
            if (empty($this->products)) {
                $this->addLogEntry($logFilePath,$errorlogFilePath, "No products found - 404 ", 'ERROR');  
            }

            $totalProducts = count($this->products);  

            foreach ($this->products as $sku) {
                try {
                    $product = $parkerService->getProductDetails($sku); 
                    if(!isset($product['technical']) && !isset($product['divisionId']) && !isset($product['marketing'])){
                        if(!isset($product['part'])){
                            $this->addLogEntry($logFilePath,$errorlogFilePath, "No Information: {$sku} - ", 'INFO');
                            $batchLog->increment('processed_count');
                            continue;
                        }else{
                            $this->addLogEntry($logFilePath,$errorlogFilePath, "No Information: {$sku} - " , 'INFO');
                            $batchLog->increment('processed_count');
                            continue;
                        }
                    }
                    $this->processProduct($product, $sku, $this->batchLogs, $logFilePath,$errorlogFilePath,$akeneoService,$parkerService);
                    $this->addLogEntry($logFilePath,$errorlogFilePath, "Successfully processed SKU: {$sku}", 'INFO');
                    $successCount++;
                } catch (\Exception $e) {
                    $this->addLogEntry($logFilePath,$errorlogFilePath, "Error processing SKU: {$sku} - " . $e->getMessage(), 'ERROR');
                    $failureCount++;
                }
            }

        } catch (\Exception $e) {
            $this->addLogEntry($logFilePath,$errorlogFilePath, "Error processing Batch - " . $e->getMessage(), 'ERROR');
                    $failureCount++;
        }
        
        $batchLog->update([
            'status' => 'completed',
            'success_count' => $successCount,
            'failure_count' => $failureCount,
            'completed_at' => now(),
        ]);   
        $this->checkAndUpdateSyncStatus($syncLog,$logFilePath,$errorlogFilePath);
    }

    private function processProduct($product, $sku, BatchSyncLog $syncLog, $logFilePath,$errorlogFilePath,AkeneoService $akeneoService, ParkerService $parkerService)
    {
        /* Dynamic Image Creation Start */
        $this->addLogEntry($logFilePath,$errorlogFilePath, "Processing Image for SKU: {$sku}", 'INFO');
        $getImage = $parkerService->getProductImage($sku);
        try {
            if ($getImage->original['success']) {
                $imageUrl = $getImage->original['file_url'];
                $filename = $getImage->original['file_name'];
                $akeneoService->uploadMediaFile($sku, $imageUrl, $filename);
                Storage::disk('public')->delete($filename);
            }
        } catch (\Exception $e) {
            $this->addLogEntry($logFilePath,$errorlogFilePath, "Error processing Image: {$sku} - " . $e->getMessage(), 'ERROR');
        }
        $this->addLogEntry($logFilePath,$errorlogFilePath, "Image Processing Completed for SKU: {$sku}", 'INFO');
        /* Dynamic Image Creation End */


        /* Dynamic Category Creation Start */
        $this->addLogEntry($logFilePath,$errorlogFilePath, "Processing Category for SKU: {$sku}", 'INFO');
        $category = isset($product['product_series']) && array_key_exists('categories', $product['product_series']) ? $product['product_series']['categories'] : [];

        if(!empty($category)){
            $categoryName = array_column($category, 'name');
            $categoryResponce = $this->categoryGenerator($category, $sku, $akeneoService,$parkerService);
            foreach($categoryResponce as $errorResponce){
                $this->addLogEntry($logFilePath,$errorlogFilePath, $errorResponce, 'ERROR');
            }
            $familyName = end($categoryName);
        }
        else{
            $familyName = isset($product['divisionId']) ? $product['divisionId'] : '';
        }
        $this->addLogEntry($logFilePath,$errorlogFilePath, "Category Processing Completed for SKU: {$sku}", 'INFO');
        /* Dynamic Category Creation Ends */


        /* Dynamic Family Creation Start */
        $this->addLogEntry($logFilePath,$errorlogFilePath, "Processing Family for SKU: {$sku}", 'INFO');
        $familyResponce = $this->familyGenerator($familyName, $sku, $akeneoService,$parkerService);
        foreach($familyResponce as $errorResponce){
            $this->addLogEntry($logFilePath,$errorlogFilePath, $errorResponce, 'ERROR');
        }
        $this->addLogEntry($logFilePath,$errorlogFilePath, "Family Processing Completed for SKU: {$sku}", 'INFO');
        /* Dynamic Family Creation End */

        $familyCode = $this->sanitizeString($familyName);
        
        /* Default Attributes Creation Start */
        $this->addLogEntry($logFilePath, $errorlogFilePath, "Processing Default Attributes for SKU: {$sku}", 'INFO');
        
        $defaultAttributeResponce = $this->defaultAttributeGenerator($product, $sku, $familyCode, $akeneoService,$parkerService);
        foreach($defaultAttributeResponce as $errorResponce){
            $this->addLogEntry($logFilePath,$errorlogFilePath, $errorResponce, 'ERROR');
        }
        $this->addLogEntry($logFilePath, $errorlogFilePath , "Attributes Processing Completed for SKU: {$sku}", 'INFO');
        /* Default Attributes Creation End */


        /* Dynamic Attributes Creation Start */
        $this->addLogEntry($logFilePath,$errorlogFilePath, "Processing Attributes for SKU: {$sku}", 'INFO');
        if(isset($product['technical'])){
            $descriptiveParts = array_key_exists('descriptive', $product['technical']) && isset($product['technical']['descriptive']['part']) ? $product['technical']['descriptive']['part'] : [];
            $definingParts = array_key_exists('defining', $product['technical']) && isset($product['technical']['defining']['part']) ? $product['technical']['defining']['part'] : [];
            $parts = array_merge($descriptiveParts, $definingParts); 
        }
        $attributeResponce = $this->attributeGenerator($parts, $familyCode, $sku, $akeneoService,$parkerService);
        foreach($attributeResponce as $errorResponce){
            $this->addLogEntry($logFilePath,$errorlogFilePath, $errorResponce, 'ERROR');
        }
        $this->addLogEntry($logFilePath,$errorlogFilePath, "Attributes Processing Completed for SKU: {$sku}", 'INFO');
        /* Dynamic Attributes Creation End */

        $syncLog->increment('processed_count');
    }

    private function categoryGenerator($categoryTree, $productIdentifier,AkeneoService $akeneoService, ParkerService $parkerService){

        $updatedCategoryCode = [];
        
        $categoryName = array_column($categoryTree, 'name');

        $defaultParentCategory = 'shop_by_category';

        $errorMessageArr = [];

        try{
            foreach($categoryName as $category){
                $categoryCode = $this->sanitizeString($category);
                array_push($updatedCategoryCode, $categoryCode);
                $parentCategory = Arr::first($categoryName) == $category ? $defaultParentCategory : $this->sanitizeString(Arr::first($categoryName));

                // Step 1: Check if category exists
                $categoriesResponse = $akeneoService->fetchCategories($categoryCode);

                if ($categoriesResponse['code'] === 404) {
                    // Step 2: Create category if it doesn't exist
                    $createCategoryResponse = $akeneoService->createCategories($parentCategory, $categoryCode, $category);
                    if(!is_null($createCategoryResponse)){
                            array_push($errorMessageArr,$createCategoryResponse['message']);
                    }
                }
            }

            // Step 3: Assign category to product
            $updateProductCategoryResponse = $akeneoService->updateProductCategories($productIdentifier, $updatedCategoryCode);

            if(!is_null($updateProductCategoryResponse)){
                array_push($errorMessageArr,$updateProductCategoryResponse['message']);
            }
        }
        catch (\Exception $e) {
                array_push($errorMessageArr,$e->getMessage());
        }
        return $errorMessageArr;
    }

    private function familyGenerator($familyName, $productIdentifier,AkeneoService $akeneoService, ParkerService $parkerService){
    
        $familyCode = $this->sanitizeString($familyName);
        $errorMessageArr = [];
        try{
            // Step 1: Check if Family exists
            $familyResponse = $akeneoService->fetchFamily($familyCode);
                if ($familyResponse['code'] === 404) {
                    // Step 2: Create Family if it doesn't exist
                    $createFamilyResponse = $akeneoService->createFamilies($familyCode, $familyName);
                    if(!is_null($createFamilyResponse)){
                            array_push($errorMessageArr,$createFamilyResponse['message']);
                    }
                }

            // Step 3: Assign Family to product
            $updateProductFamilyResponse = $akeneoService->updateProductFamily($productIdentifier, $familyCode);
            if(!is_null($updateProductFamilyResponse)){
                array_push($errorMessageArr,$updateProductFamilyResponse['message']);
            }
        }catch (\Exception $e) {
                array_push($errorMessageArr,$e->getMessage());
        }
        return $errorMessageArr;
    }

    public function defaultAttributeGenerator($product, $productIdentifier, $familyCode,AkeneoService $akeneoService, ParkerService $parkerService)
    {
        $attributeGroupCode = 'parker_attributes';
        $errorMessageArr = [];
        try{

            $attributeGroupResponse = $akeneoService->fetchAttributeGroup($attributeGroupCode);

            if(isset($product['product_series'])){
                $product['product_series_id'] = array_key_exists('id', $product['product_series']) && isset($product['product_series']['id']) ? $product['product_series']['id'] : '';
            
                $product['product_series_url'] = array_key_exists('url', $product['product_series']) ? $product['product_series']['url'] : '';

                $product['product_series_code'] = array_key_exists('code', $product['product_series']) ? $product['product_series']['code'] : '';
            }
            if(isset($product['marketing'])){
                $product['part_short_description'] = array_key_exists('part', $product['marketing']) ? $product['marketing']['part']['short_description'] : '';

                $product['part_long_description'] = array_key_exists('part', $product['marketing']) ? $product['marketing']['part']['long_description'] : '';

                $product['product_series_short_description'] = array_key_exists('product_series', $product['marketing']) ? $product['marketing']['product_series']['short_decription'] : '';

                $product['product_series_long_description'] = array_key_exists('product_series', $product['marketing']) ? $product['marketing']['product_series']['long_decription'] : '';

                $product['product_series_name'] = array_key_exists('product_series', $product['marketing']) ? $product['marketing']['product_series']['name'] : '';

                if(array_key_exists('part', $product['marketing']) && isset($product['marketing']['part']['images']['full'])){
                    $fullImage = 'https:'.$product['marketing']['part']['images']['full'];
                }
                if(array_key_exists('part', $product['marketing']) && isset($product['marketing']['part']['support_assets'])){
                    $supportAssets = json_encode($product['marketing']['part']['support_assets']);
                }

                $product['marketing_product_image'] = isset($fullImage) ? $fullImage : '';
                $product['support_assets'] = isset($supportAssets) ? $supportAssets : '';
                $product['part_url'] = isset($product['part']) ? $product['part'] : '';
                $product['division_id'] = isset($product['divisionId']) ? $product['divisionId'] : '';
            }

            $attributesData = [];

            foreach($attributeGroupResponse['attributes'] as $attributeCode){
                
                $attributesData[$attributeCode] = [
                    [
                        "locale" => null,
                        "scope" => null,
                        "data" => $product[$attributeCode]
                    ]
                ];
            }

            // Assign attributes to family
            $familyPayload = [
                "attributes" => $attributeGroupResponse['attributes']
            ];

            $attributeFamilyResponse = $akeneoService->updateFamilyAttribute($familyCode, $familyPayload);
            if(!is_null($attributeFamilyResponse)){
                array_push($errorMessageArr,$attributeFamilyResponse['message']);
            }

            // Update product attribute value
            $attributeProductResponse = $akeneoService->updateProductAttribute($productIdentifier, $attributesData);
            if(!is_null($attributeProductResponse)){
                array_push($errorMessageArr,$attributeProductResponse['message']);
            }
        }catch (\Exception $e) {
                array_push($errorMessageArr,$e->getMessage());
        }
        return $errorMessageArr;

    }

    public function attributeGenerator($parts,$familyCode, $productIdentifier,AkeneoService $akeneoService, ParkerService $parkerService)
    {
        $uniqeAttributeArray = [];

        $attributeGroup = 'technical';

        $errorMessageArr = [];
        try{
            foreach ($parts as $part) {
              $key = array_search($part['attributeName'], array_column($uniqeAttributeArray , 'attributeName'));
              if ($key === false) {
                  array_push($uniqeAttributeArray, $part);
              }else { 
                    if($uniqeAttributeArray[$key]['value'] != $part['value']){
                      $uniqeAttributeArray[$key]['value'] .= ",". $part['value'];
                    }
              }
            }

            $attributeCodes = [];
            $attributesData = [];
            foreach ($uniqeAttributeArray as $attribute) {
                $attributeCode = $this->sanitizeString($attribute['attributeName']);
                $attributeName = $attribute['attributeName'];
                $values = explode(',', $attribute['value']); 
                $isMultiSelect = count($values) > 1;

                $attributeType = "pim_catalog_multiselect";
                
                // Create the attribute
                $attributePayload = [
                    "code" => $attributeCode,
                    "type" => $attributeType,
                    "group" => $attributeGroup,
                    "labels" => [
                        "en_US" => $attributeName
                    ]
                ];

                // Step 1: Check if attribute exists
                $attributeResponse = $akeneoService->fetchAttribute($attributeCode);

                if ($attributeResponse['code'] === 404) {
                    // Step 2: Create Attribute if it doesn't exist
                     $createAttributeResponse = $akeneoService->createAttributes($attributePayload);
                     if(!is_null($createAttributeResponse)){
                        array_push($errorMessageArr,$createAttributeResponse['message']);
                    }
                }


                // Store attribute for family assignment
                $attributeCodes[] = $attributeCode;
               
                $optionCodes = [];

                // Add options dynamically
                foreach ($values as $value) {
                    $value = trim($value);
                    $optionCode = $this->sanitizeString($value);

                    $optionPayload = [
                        "code" => $optionCode,
                        "attribute" => $attributeCode,
                        "labels" => [
                            "en_US" => $value
                        ]
                    ];

                    // Step 1: Check if attribute option exists
                    $attributeOptionResponse = $akeneoService->fetchAttributeOption($attributeCode, $optionCode);

                    if ($attributeOptionResponse['code'] === 404) {
                        // Step 2: Create Attribute Option if it doesn't exist
                        $createAttributeOptionResponse = $akeneoService->createAttributeOptions($attributeCode, $optionPayload);
                        if(!is_null($createAttributeOptionResponse)){
                            array_push($errorMessageArr,$createAttributeOptionResponse['message']);
                        }
                    }

                    if (!in_array($optionCode, $optionCodes)) {
                        $optionCodes[] = $optionCode; // Store for product update
                    }

                    $attributesData[$attributeCode] = [
                        [
                            "locale" => null,
                            "scope" => null,
                            "data" => $optionCodes
                        ]
                    ];
                    
                }
            }

            // Assign attributes to family
            $familyPayload = [
                "attributes" => $attributeCodes
            ];

            $attributeFamilyResponse = $akeneoService->updateFamilyAttribute($familyCode, $familyPayload);

            if(!is_null($attributeFamilyResponse)){
                array_push($errorMessageArr,$attributeFamilyResponse['message']);
            }

            // Update product attribute value
            $attributeProductResponse = $akeneoService->updateProductAttribute($productIdentifier, $attributesData);

            if(!is_null($attributeProductResponse)){
                array_push($errorMessageArr,$attributeProductResponse['message']);
            }
        }catch (\Exception $e) {
                array_push($errorMessageArr,$e->getMessage());
        }
        return $errorMessageArr;
    }  
    protected function checkAndUpdateSyncStatus(AkeneoParkerSyncLog $syncLog, $logFilePath,$errorlogFilePath)
    {
        $completedBatches = BatchSyncLog::where('sync_log_id', $syncLog->id)
            ->where('status', 'completed')
            ->count();

        $totalBatches = BatchSyncLog::where('sync_log_id', $syncLog->id)->count();
        
        if ($completedBatches === $totalBatches) {
            $syncLog->update([
                'status' => 'completed',
                'end_date' => now()
            ]);
            $this->addLogEntry($logFilePath,$errorlogFilePath, "Sync process completed successfully", 'INFO');
        }
    } 
    private function addLogEntry($logFilePath,$errorlogFilePath, $message, $type)
    {
        $timestamp = now()->format('Y-m-d H:i:s');
        $logEntry = "[{$timestamp}] [{$type}] {$message}";
        Storage::disk('public')->append($this->logFilePath, $logEntry);
        $syncLog = AkeneoParkerSyncLog::find($this->syncLogId);
        if($type == 'ERROR'){
            Storage::disk('public')->append($this->errorlogFilePath, $logEntry);
            $syncLog->update([
                'status' => 'Failed',
            ]); 
             
        }
    }
    
    private function sanitizeString($input) {

        $output = preg_replace('/[^a-zA-Z0-9]+/', '_', $input);
        $output = trim($output, '_');
        $output = strtolower($output);
        return $output;
    }

}
