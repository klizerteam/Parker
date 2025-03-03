<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Arr;
use App\Models\AkeneoParkerSyncLog;
use Carbon\Carbon;

class AkeneoService {
    private $baseUrl;
    private $clientId;
    private $clientSecret;
    private $username;
    private $password;
    protected $accessToken;
    private $parker_product;
    private $channel;
    private $defaultP21Attribute;
    private $productImageAttribute;

    public function __construct() {
        $this->baseUrl = env('AKENEO_URL');
        $this->clientId = env('AKENEO_CLIENT_ID');
        $this->clientSecret = env('AKENEO_SECRET');
        $this->username = env('AKENEO_USERNAME');
        $this->password = env('AKENEO_PASSWORD');
        $this->accessToken = $this->getAccessToken();
        $this->channel = 'default';
        $this->defaultP21Attribute = 'p21_attributes';
        $this->defaultParkerAttribute = 'parker_attributes';
        $this->productImageAttribute = 'Product_Image';
    }

    public function getAccessToken() {
        $response = Http::asForm()->post("{$this->baseUrl}/api/oauth/v1/token", [
            'grant_type' => 'password',
            'username' => $this->username,
            'password' => $this->password,
            'client_id' => $this->clientId,
            'client_secret' => $this->clientSecret,
        ]);

        return $response->json()['access_token'] ?? null;
    }

    public function fetchParkerProduct() {
        $page = 1; 
        $itemsPerPage = 100;
        $allProducts = [];
    
        try {
            do {
                $response = Http::withToken($this->accessToken)->get(env('AKENEO_URL') . '/api/rest/v1/products-uuid', [
                    'search' => '{"Parker_Product":[{"operator":"NOT EMPTY","value":"","scope":""}]}',
                    // 'search_locale' => 'en_US',
                    'page' => $page,
                    'items_per_page' => $itemsPerPage,
                ]);
              
                
                if (!$response->successful()) {
                    return $this->handleApiError($response);
                }
    
                $data = $response->json();
                $allProducts = array_merge($allProducts, $data['_embedded']['items'] ?? []);
                $nextPageUrl = $data['_links']['next']['href'] ?? null;
                $page++;
    
            } while ($nextPageUrl);

            $lastBeforeEntry = AkeneoParkerSyncLog::orderBy('id', 'desc')
            ->skip(1)
            ->first();
           
            $lastSyncDate = '1970-01-01 00:00:00' ;
            if(isset($lastBeforeEntry)){
                $lastSyncDate = $lastBeforeEntry->end_date;
            }
          
            $skus = array_filter(array_map(function ($item) use ($lastSyncDate) {
                $productUpdateTime = $item['updated'];
                $lastSync = Carbon::parse($lastSyncDate);
                $lastproductUpdate = Carbon::parse($productUpdateTime);
            
                if (isset($item['values']['Parker_Product'][0]['data']) && $lastSync->lt($lastproductUpdate)) {
                    return $item['values']['Parker_Product'][0]['data'];
                }
                return null;
            }, $allProducts));
      
            return response()->json([
                'success' => true,
                'parkerList' => $skus,
                'pagination' => $data['_links'] ?? []
            ], 200);
    
        } catch (RequestException $e) {
            return $this->handleException('Akeneo API Request Exception', $e);
    
        } catch (\Exception $e) {
            return $this->handleException('Unexpected Error in Akeneo API', $e);
        }
    }

    public function fetchCategories($categoryCode) {
        $response = Http::withToken($this->accessToken)
            ->get("{$this->baseUrl}/api/rest/v1/categories/{$categoryCode}");

        return $response->json();
    }

    public function createCategories($parentCategory, $categoryCode, $categoryName) {
        $response = Http::withToken($this->accessToken)
            ->post("{$this->baseUrl}/api/rest/v1/categories", [
            'code' => $categoryCode,
            'parent' => $parentCategory,
            'labels'=> [
                "en_US" => $categoryName
            ]
        ]);

        return $response->json();
    }

    public function fetchAttribute($attributeCode) {
        $response = Http::withToken($this->accessToken)
            ->get("{$this->baseUrl}/api/rest/v1/attributes/{$attributeCode}");

        return $response->json();
    }

    public function createAttributes($attributePayload) {
        $response = Http::withToken($this->accessToken)
            ->post("{$this->baseUrl}/api/rest/v1/attributes", $attributePayload);
        return $response->json();
    }

    public function fetchAttributeOption($attributeCode, $optionCode) {
        $response = Http::withToken($this->accessToken)
            ->get("{$this->baseUrl}/api/rest/v1/attributes/{$attributeCode}/options/{$optionCode}");
        return $response->json();
    }

    public function fetchAttributeGroup($attributeGroupCode) {
        $response = Http::withToken($this->accessToken)
            ->get("{$this->baseUrl}/api/rest/v1/attribute-groups/{$attributeGroupCode}");
        return $response->json();
    }

    public function createAttributeOptions($attributeCode, $optionPayload) {
        $response = Http::withToken($this->accessToken)->post("{$this->baseUrl}/api/rest/v1/attributes/{$attributeCode}/options", $optionPayload);
        return $response->json();
                
    }

    public function updateProductCategories($productIdentifier, $updatedCategoryCode) {
        $response = Http::withToken($this->accessToken)
            ->patch("{$this->baseUrl}/api/rest/v1/products/{$productIdentifier}", [
            'categories' => $updatedCategoryCode
        ]);
        return $response->json();
    }

    public function fetchFamily($familyCode) {
        $response = Http::withToken($this->accessToken)
            ->get("{$this->baseUrl}/api/rest/v1/families/{$familyCode}");
        return $response->json();
    }

    public function createFamilies($familyCode, $familyName) {
        $response = Http::withToken($this->accessToken)
            ->post("{$this->baseUrl}/api/rest/v1/families", [
            'code' => $familyCode,
            'labels'=> [
                "en_US" => $familyName
            ]
        ]);
        return $response->json();
    }

    public function updateProductFamily($productIdentifier, $familyCode) {

        $response = Http::withToken($this->accessToken)
            ->patch("{$this->baseUrl}/api/rest/v1/products/{$productIdentifier}", [
            'family' => $familyCode
        ]);
        return $response->json();
    }

    public function updateFamilyAttribute($familyCode, $attributeCodes) {
        $defaultP21AttributeResponse = Http::withToken($this->accessToken)
            ->get("{$this->baseUrl}/api/rest/v1/attribute-groups/{$this->defaultP21Attribute}");

        $defaultP21Attribute = $defaultP21AttributeResponse->json()['attributes'];

        $defaultParkerAttributeResponse = Http::withToken($this->accessToken)
            ->get("{$this->baseUrl}/api/rest/v1/attribute-groups/{$this->defaultParkerAttribute}");

        $defaultParkerAttribute = $defaultParkerAttributeResponse->json()['attributes'];

        $defaultAttributes = array_merge($defaultP21Attribute, $defaultParkerAttribute);

        $mergedAttributes = array_merge($attributeCodes['attributes'], $defaultAttributes);

        if (!in_array("sku", $mergedAttributes)) {
            array_push($mergedAttributes, "sku");
        }

        $data = [
            "attributes" => $mergedAttributes, 
            "attribute_requirements" => [
                $this->channel => ["sku"] 
            ],
            "attribute_as_image"=> $this->productImageAttribute,
            "attribute_as_label" => "sku" 
        ];

        $response = Http::withToken($this->accessToken)
            ->patch("{$this->baseUrl}/api/rest/v1/families/{$familyCode}", $data);
            
        return $response->json();
                
    }

    public function updateProductAttribute($productIdentifier, $attributesData)
    {

        $data = [
            "values" => $attributesData
        ];
        $response = Http::withToken($this->accessToken)
            ->patch("{$this->baseUrl}/api/rest/v1/products/{$productIdentifier}", $data);
        return $response->json();
    }

    
    private function handleApiError($response) {
        $statusCode = $response->status();
        $errorMessage = $response->body();
    
        Log::error("Akeneo API Error", [
            'status' => $statusCode,
            'response' => $errorMessage
        ]);
    
        $errorMessages = [
            400 => 'Bad Request: Invalid parameters or request structure.',
            401 => 'Unauthorized: Invalid or expired access token. Please reauthenticate.',
            403 => 'Forbidden: You do not have permission to access this resource.',
            404 => 'Not Found: The requested resource does not exist.',
            422 => 'Unprocessable Entity: Validation error in request data.',
            429 => 'Rate Limit Exceeded: Too many requests. Please try again later.',
            500 => 'Server Error: Akeneo is currently unavailable. Please try again later.',
            502 => 'Bad Gateway: The server received an invalid response.',
            503 => 'Service Unavailable: Akeneo is temporarily down.',
            504 => 'Gateway Timeout: Akeneo took too long to respond.'
        ];
    
        $message = $errorMessages[$statusCode] ?? 'Unexpected API error occurred.';
    
        return response()->json([
            'error' => true,
            'message' => $message,
            'details' => $errorMessage
        ], $statusCode);    
    }
    
    private function handleException($logMessage, \Exception $e) {
        Log::error($logMessage, ['error' => $e->getMessage()]);
        return response()->json([
            'error' => true,
            'message' => 'An unexpected error occurred. Please try again later.'
        ], 500);
    }
    
    public function uploadMediaFile($productIdentifier, $imagePath, $filename)
    {
        $apiUrl = $this->baseUrl.'/api/rest/v1/media-files';
        $productData = [
            "identifier" => $productIdentifier,
            "attribute" => $this->productImageAttribute,
            "scope" => null, 
            "locale" => null
        ];
        $response = Http::withToken($this->accessToken)
        ->attach('file', file_get_contents($imagePath), basename($imagePath))
        ->attach('product', json_encode($productData))
        ->post($apiUrl);

        if ($response->successful()) {
            return response()->json([
                'message' => $response->body(),
                'success' => $response->status(),
            ], $response->status());    
        } else {
            return response()->json([
                'message' => "Error uploading media: " . $response->body(),
                'error' => $response->status(),
            ], $response->status());       
        }
    }
}
