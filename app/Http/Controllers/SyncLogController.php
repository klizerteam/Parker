<?php

namespace App\Http\Controllers;

use App\Models\AkeneoParkerSyncLog;
use App\Models\BatchSyncLog;
use Illuminate\Http\Request;
use Carbon\Carbon;


class SyncLogController extends Controller
{
    /**
     * Get all sync logs with their batch details
     */
    public function index(Request $request)
    {
        // Get the main sync logs with batch relationship
        $syncLogs = AkeneoParkerSyncLog::with(['batchLogs', 'createdByUser'])
            ->orderBy('created_at', 'desc')
            ->get()
            ->map(function ($syncLog) {
                // Format the data for the frontend table
                $processed = $syncLog->batchLogs->sum('processed_count');
                $failure = $syncLog->batchLogs->sum('failure_count');
                return [
                    'id' => $syncLog->id,
                    'start_date' => $syncLog->start_date ? Carbon::parse($syncLog->start_date)->format('m/d/Y, h:i A') : null,
                    'end_date' => $syncLog->end_date ? Carbon::parse($syncLog->end_date)->format('m/d/Y, h:i A') : null,
                    'status' => $syncLog->status,
                    'total' => $syncLog->total,
                    'processed' => $processed,
                    'failure' => $failure,
                    'created_by' => $syncLog->createdByUser ? $syncLog->createdByUser->name : 'System',
                    'progress' => $syncLog->total > 0 ? round((($processed+$failure) / $syncLog->total) * 100, 1) : 0,
                    'duration' => $this->calculateDuration($syncLog),
                    // Sub rows for the expandable table
                    'subRows' => $syncLog->batchLogs->map(function ($batchLog) {
                        return [
                            'batch_id' => $batchLog->id,
                            'batch_number' => $batchLog->batch_number,
                            'product_count' => $batchLog->batch_product_count,
                            'processed_count' => $batchLog->processed_count,
                            'failure_count' => $batchLog->failure_count,
                            'status' => $batchLog->status,
                            'progress' => $batchLog->batch_product_count > 0 
                                ? round(($batchLog->processed_count / $batchLog->batch_product_count) * 100, 1) 
                                : 0,
                            'created_at' => $batchLog->created_at->format('Y-m-d H:i:s'),
                            'updated_at' => $batchLog->updated_at->format('Y-m-d H:i:s')
                        ];
                    }),
                    // Additional metadata for the expanded view
                    'syncDetails' => [
                        'syncId' => "SYNC-" . $syncLog->id,
                        'connectionName' => $syncLog->connection_id ? $syncLog->connection_id : 'Unknown',
                        'error_log' => $syncLog->error_log,
                        'log' => $syncLog->log,
                        'createdAt' => $syncLog->created_at->format('Y-m-d H:i:s'),
                        'hasErrorLog' => !empty($syncLog->error_log)
                        
                    ],
                    'created_at' => Carbon::parse($syncLog->created_at)->format('m/d/Y, h:i A'),
                    'updated_at' => Carbon::parse($syncLog->updated_at)->format('m/d/Y, h:i A'),
                ];
            });

        return response()->json($syncLogs);
    }

    /**
     * Get details for a specific sync log
     */
    public function show($id)
    {
        $syncLog = AkeneoParkerSyncLog::with(['batchLogs', 'createdByUser'])
            ->findOrFail($id);
            $processed = $syncLog->batchLogs->sum('processed_count');
            $failure = $syncLog->batchLogs->sum('failure_count');   
        // Return detailed information about this specific log
        $response = [
            'id' => $syncLog->id,
            'start_date' => $syncLog->start_date ? Carbon::parse($syncLog->start_date)->format('m/d/Y, h:i A') : null,
            'end_date' => $syncLog->end_date ? Carbon::parse($syncLog->end_date)->format('m/d/Y, h:i A') : null,
            'status' => $syncLog->status,
            'total' => $syncLog->total,
            'processed' => $processed,
            'failure' => $failure,
            'created_by' => $syncLog->createdByUser ? $syncLog->createdByUser->name : 'System',
            'progress' => $syncLog->total > 0 ? round((($processed+$failure) / $syncLog->total) * 100, 1) : 0,
            'duration' => $this->calculateDuration($syncLog),
            'batches' => $syncLog->batchLogs->map(function ($batchLog) {
                return [
                    'batch_id' => $batchLog->id,
                    'batch_number' => $batchLog->batch_number,
                    'product_count' => $batchLog->batch_product_count,
                    'processed_count' => $batchLog->processed_count,
                    'failure_count' => $batchLog->failure_count,
                    'status' => $batchLog->status,
                    'progress' => $batchLog->batch_product_count > 0 
                        ? round(($batchLog->processed_count / $batchLog->batch_product_count) * 100, 1) 
                        : 0,
                    'created_at' => $batchLog->created_at->format('Y-m-d H:i:s'),
                    'updated_at' => $batchLog->updated_at->format('Y-m-d H:i:s')
                ];
            }),
            'log' => $syncLog->log,
            'error_log' => $syncLog->error_log,
            'created_at' => Carbon::parse($syncLog->created_at)->format('m/d/Y, h:i A'),
            'updated_at' => Carbon::parse($syncLog->updated_at)->format('m/d/Y, h:i A'),
        ];

        return response()->json($response);
    }

    /**
     * Calculate duration between start and end date
     */
    public function LastSyncTime(){
        $lastSync = AkeneoParkerSyncLog::whereNotNull('end_date')
    ->orderBy('end_date', 'desc')
    ->first();
    $durationTime = "";
    if(!empty($lastSync->end_date)){
        $durationTime = $lastSync->end_date;
    }
    $lastSyncTime = $lastSync ? Carbon::parse($lastSync->end_date)->format('m/d/Y, h:i A') : 'No Completed Sync';

    return response()->json([
        'last_sync_time' => $lastSyncTime,
        'duration'=>$this->calculateLastDuration($durationTime)
    ]);

    }
    private function calculateDuration($syncLog)
    {
        if (!$syncLog->start_date) {
            return 'Not started';
        }
        
        $endDate = $syncLog->end_date ?? now();
        $duration = $syncLog->start_date->diffInSeconds($endDate);
        
        if ($duration < 60) {
            return round($duration,0) . ' seconds';
        } elseif ($duration < 3600) {
            return floor($duration / 60) . 'm ' . ($duration % 60) . 's';
        } else {
            $hours = floor($duration / 3600);
            $minutes = floor(($duration % 3600) / 60);
            $seconds = $duration % 60;
            return $hours . 'H ' . $minutes . 'm ' . $seconds . 's';
        }
    }
    private function calculateLastDuration($last)
    {
        if (!$last) {
            return 'Not started';
        }
        
        $endDate = now();
        $start_date = $last;
        $duration = $start_date->diffInSeconds($endDate);
        
        if ($duration < 60) {
            return round($duration,0) . ' seconds ago';
        } elseif ($duration < 3600) {
            return floor($duration / 60) . 'm ' . ($duration % 60) . 's ago';
        } else {
            $hours = floor($duration / 3600);
            $minutes = floor(($duration % 3600) / 60);
            $seconds = $duration % 60;
            return $hours . 'H ' . $minutes . 'm ' . $seconds . 's ago';
        }
    }
   
}