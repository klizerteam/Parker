<?php

namespace App\Http\Controllers;
use App\Http\Controllers\SyncLogController;
use App\Jobs\ProcessProductSync;
use App\Models\AkeneoParkerSyncLog;
use App\Models\BatchSyncLog;
use App\Services\AkeneoService;
use App\Services\ParkerService;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Arr;
use Illuminate\Bus\Batch;
use Illuminate\Support\Facades\Bus;
use Mail;
use App\Mail\SyncFailMail;  
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

    class IntegrationController extends Controller {
        private $akeneoService;
        private $parkerService;
        private $logFilePath;
        private $errorlogFilePath;
        protected $synclogcontroller;

        public function __construct(AkeneoService $akeneoService, ParkerService $parkerService,SyncLogController $synclogcontroller) {
            $this->akeneoService = $akeneoService;
            $this->parkerService = $parkerService;
            $this->synclogcontroller = $synclogcontroller;
            $this->logFilePath = "";
            $this->errorlogFilePath = "";
        }

        public function syncProducts(){
            $logFilePath = $this->createLogFile();
            $errorlogFilePath = $this->createErrorLogFile();
            $this->logFilePath = $logFilePath;
            $this->errorlogFilePath = $errorlogFilePath;

            $this->addLogEntry($logFilePath,$errorlogFilePath, "Sync started", 'INFO');
            if(AkeneoParkerSyncLog::where('status', 'processing')->exists()){
                $this->addLogEntry($logFilePath,$errorlogFilePath, "A sync is already in progress", 'ERROR');
                return response()->json(['message' => 'A sync is already in progress.','status'=>'error'], 200);
            }

            $lastSync = AkeneoParkerSyncLog::orderBy('created_at', 'desc')->first();

            if($lastSync && in_array($lastSync->status, ['processing', 'failed'])){
                $this->addLogEntry($logFilePath,$errorlogFilePath, "Previous sync failed or is still running", 'ERROR');
                return response()->json(['message' => 'Previous sync failed or is still running.','status'=>'error'], 200);
            }
           
            $syncLog = AkeneoParkerSyncLog::create([
                'connection_id' => 1,
                'start_date' => now(),
                'status' => 'processing',
                'total' => 0,
                'failure' => 0,
                'processed' => 0,
                'created_by' => auth()->id() ?? 1,
            ]);
        
            $syncLog->update(['log' => asset("storage/{$logFilePath}")]);
            $syncLog->update(['error_log' => asset("storage/{$errorlogFilePath}")]);
         
            if(!$this->akeneoService->getAccessToken()){
                $this->addLogEntry($logFilePath,$errorlogFilePath, "Failed to authenticate with Akeneo ", 'ERROR');
                $this->StatusUpdate($syncLog, "Failed");
                return response()->json(['message' => 'Failed to authenticate with Akeneo','status'=>'error'], 200);
            }
           
            $response = $this->akeneoService->fetchParkerProduct();
            $products = $response->original['parkerList'] ?? [];
            $totalProducts = count($products);                                                                          
            if ($totalProducts == 0) {
                $this->addLogEntry($logFilePath,$errorlogFilePath, "No products to Sync", 'ERROR');  
                $this->StatusUpdate($syncLog, "No-Prod-Sync");
                return response()->json(['message' => 'No products to Sync','status'=>'error'], 200);
            }
            $syncLog->update(['total' => $totalProducts]);

            $batchCount = 4;
            $batchSize = ceil($totalProducts / $batchCount);

            $chunks = array_chunk($products, $batchSize);
            $batchJobs = [];

            $jobs = [];
            foreach ($chunks as $batchNumber => $batch) {
                $batchLog = BatchSyncLog::create([
                    'sync_log_id' => $syncLog->id,
                    'batch_number' => $batchNumber + 1,
                    'batch_product_count'=> count($batch),
                    'status' => 'processing',
                    'processed_count' => 0,
                    'failure_count' => 0,
                ]);
               $jobs[] = ProcessProductSync::dispatch($batch, $syncLog->id, $batchLog->id,$this->logFilePath,$this->errorlogFilePath,$batchLog)->onQueue('alpha');
            }
            return response()->json(['message' => 'Product sync initiated with batches.','status'=>'success']);
        }

        public function syncPerProduct(Request $request){
            $input = $request->input('data');
            $logFilePath = $this->createLogFile();
            $errorlogFilePath = $this->createErrorLogFile();
            $this->logFilePath = $logFilePath;
            $this->errorlogFilePath = $errorlogFilePath;

            $this->addLogEntry($logFilePath,$errorlogFilePath, "Sync started", 'INFO');
                 if (AkeneoParkerSyncLog::where('status', 'processing')->exists()) {
                $this->addLogEntry($logFilePath,$errorlogFilePath, "A sync is already in progress", 'ERROR');
                return response()->json(['message' => 'A sync is already in progress.','status'=>'error'], 200);
            }
           
            $syncLog = AkeneoParkerSyncLog::create([
                'connection_id' => 1,
                'start_date' => now(),
                'status' => 'processing',
                'total' => 0,
                'failure' => 0,
                'processed' => 0,
                'created_by' => auth()->id() ?? 1,
            ]);
        
            $syncLog->update(['log' => asset("storage/{$logFilePath}")]);
            $syncLog->update(['error_log' => asset("storage/{$errorlogFilePath}")]);
         
            if (!$this->akeneoService->getAccessToken()) {
                $this->addLogEntry($logFilePath,$errorlogFilePath, "Failed to authenticate with Akeneo ", 'ERROR');
                $this->StatusUpdate($syncLog, "Failed");
                return response()->json(['message' => 'Failed to authenticate with Akeneo','status'=>'error'], 200);
            }
           
            $products = [$input];
            
            $totalProducts = count($products);
            if ($totalProducts == 0) {
                $this->addLogEntry($logFilePath,$errorlogFilePath, "No products to Sync", 'ERROR');  
                $this->StatusUpdate($syncLog, "No-Prod-Sync");
                return response()->json(['message' => 'No products to Sync','status'=>'error'], 200);
            }
            $syncLog->update(['total' => $totalProducts]);

            $batchCount = 4;
            $batchSize = ceil($totalProducts / $batchCount);

            $chunks = array_chunk($products, $batchSize);
            $batchJobs = [];

            $jobs = [];
            foreach ($chunks as $batchNumber => $batch) {
                
                $batchLog = BatchSyncLog::create([
                    'sync_log_id' => $syncLog->id,
                    'batch_number' => $batchNumber + 1,
                    'batch_product_count'=>count($batch),
                    'status' => 'processing',
                    'processed_count' => 0,
                    'failure_count' => 0,
                ]);
               $jobs[] = ProcessProductSync::dispatch($batch, $syncLog->id, $batchLog->id,$this->logFilePath,$this->errorlogFilePath,$batchLog);
               
            }
            return response()->json(['message' => 'Product sync initiated with batches.','status'=>'success']);
        }

        private function addLogEntry($logFilePath, $errorlogFilePath, $message, $type){
            $timestamp = now()->format('Y-m-d H:i:s');
            $logEntry = "[{$timestamp}] [{$type}] {$message}" . PHP_EOL;
            Storage::disk('public')->append($this->logFilePath, $logEntry);
            if($type == 'ERROR'){
                    Storage::disk('public')->append($this->errorlogFilePath, $logEntry);
            }
        }
       
        private function createLogFile()
        {
            $logDir = 'logs/sync';
            if (!Storage::disk('public')->exists($logDir)) {
                Storage::disk('public')->makeDirectory($logDir);
            }

            $logFileName = "akeneo_parker_sync_" . now()->format('Y-m-d_H-i-s') . ".log";
            $logFilePath = "{$logDir}/{$logFileName}";

            Storage::disk('public')->put($logFilePath, '');

            return $logFilePath;
        }
        private function createErrorLogFile()
        {
            $logDir = 'logs/sync/error';
            if (!Storage::disk('public')->exists($logDir)) {
                Storage::disk('public')->makeDirectory($logDir);
            }

            $logFileName = "akeneo_parker_sync_error_" . now()->format('Y-m-d_H-i-s') . ".log";
            $logFilePath = "{$logDir}/{$logFileName}";

            Storage::disk('public')->put($logFilePath, '');

            return $logFilePath;
        }
        private function StatusUpdate(AkeneoParkerSyncLog $syncLog, $status){
            $syncLog->update([
                'status' => $status,
                'end_date' => now()
            ]);
        }

        public function loadSKU(Request $request){
            // Validate the request (ensure 'query' is provided)
                $request->validate([
                    'query' => 'nullable|string|min:3', // Only fetch if at least 3 chars are typed
                    'page' => 'nullable|integer|min:1',
                    'items_per_page' => 'nullable|integer|min:1|max:100',
                ]);

                // Retrieve Akeneo credentials from .env
                $akeneoUrl = env('AKENEO_URL');
                $accessToken = $this->akeneoService->getAccessToken(); 

                if (!$akeneoUrl || !$accessToken) {
                    return response()->json(['error' => 'Missing Akeneo credentials'], 500);
                }

                // Extract search term from request
                $searchTerm = $request->input('query', '');
                $page = $request->input('page', 1);
                $itemsPerPage = $request->input('items_per_page', 10);

                // Construct search filter
                $searchFilters = [
                    'Parker_Product' => [['operator' => 'NOT EMPTY', 'value' => '']],
                ];

                // If query exists, add SKU identifier filter
                if (!empty($searchTerm)) {
                    $searchFilters['identifier'] = [['operator' => 'CONTAINS', 'value' => $searchTerm]];
                }

                try {
                    // Call Akeneo API
                    $response = Http::withToken($accessToken)->get("$akeneoUrl/api/rest/v1/products-uuid", [
                        'search' => json_encode($searchFilters),
                        'page' => $page,
                        'items_per_page' => $itemsPerPage,
                    ]);

                    // Check if request was successful
                    if ($response->failed()) {
                        return response()->json(['error' => 'Failed to fetch SKUs', 'details' => $response->json()], 500);
                    }

                    // Return SKUs to React frontend
                    return response()->json($response->json());
                } catch (\Exception $e) {
                    return response()->json(['error' => 'Exception occurred', 'message' => $e->getMessage()], 500);
                }
            }
        }