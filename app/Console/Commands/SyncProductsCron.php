<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class SyncProductsCron extends Command
{
    protected $signature = 'sync:products';
    protected $description = 'Run product synchronization';

    public function handle()
    {
        try {
            Log::info('Starting products sync');
            
            $response = Http::get(config('app.url') . '/sync-products');
            
            if ($response->successful()) {
                Log::info('Products sync started successfully');
                $this->info('Products sync started successfully');
                return Command::SUCCESS;
            }

            Log::error('Products sync failed: ' . $response->status());
            $this->error('Products sync failed: ' . $response->status());
            return Command::FAILURE;
        } catch (\Exception $e) {
            Log::error('Products sync failed: ' . $e->getMessage());
            $this->error('Products sync failed: ' . $e->getMessage());
            return Command::FAILURE;
        }
    }
}