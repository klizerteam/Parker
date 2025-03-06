<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;

class ParkerService {
    private $baseUrl;
    private $apiKey;

    public function __construct() {
        $this->baseUrl = env('PARKER_API_URL'); 
        $this->apiKey = env('PARKER_API_KEY');
    }

    public function getProductDetails($partNumber) {

        $part = str_replace('/', '%2F', $partNumber);
        $finalPart = str_replace('#', '%23', $part);

        $url = "{$this->baseUrl}/prod/ecomm/product/part/{$finalPart}";

        $response = Http::withHeaders([
            'Ocp-Apim-Subscription-Key' => $this->apiKey,
            'Cache-Control' => 'no-cache',
            'Connection'=> 'keep-alive'
        ])->get($url, array_merge([
            'marketing' => 'true',
            'logistics' => 'false',
            'technical' => 'true',
            'language' => 'en',
            'includeObsolete' => 'false'
        ]));


        $data = $response->json();
        return $data;
    }
    public function getProductImage($sku) {
        $skuValue = $this->sanitizeString($sku);
        $part = str_replace('/', '%2F', $sku);
        $finalPart = str_replace('#', '%23', $part);
        
        $url = $this->baseUrl."/prod/partImage/downloadPartImage/{$finalPart}";
        $response = Http::withHeaders([
            'Ocp-Apim-Subscription-Key' => $this->apiKey,
            'Cache-Control' => 'no-cache'
        ])->get($url);
        
        if($response->status() == '200'){
            $imageContent = $response->body();
            $filename = "product_{$skuValue}_" . time() . '.jpg';
            $path = Storage::disk('public')->put($filename, $imageContent);
            $imageUrl = asset(Storage::url($filename));
            return response()->json([
                'file_url'=>$imageUrl,
                'file_name'=>$filename,
                'success'=>true,
                'message' => 'Image downloaded successfully!',
                'image_path' => $path,
            ]);
        }else{
            return response()->json([
                'message' => 'Failed to download image.',
                'error' => $response->status(),
            ], $response->status());                                                    
        }
    }

    private function sanitizeString($input) {
        
        $output = preg_replace('/[^a-zA-Z0-9]+/', '_', $input);

        $output = trim($output, '_');

        $output = strtolower($output);

        return $output;
    }
}
