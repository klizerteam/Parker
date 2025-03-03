<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class BatchSyncLog extends Model
{
    use HasFactory;

    protected $table = 'batch_sync_logs';

    protected $fillable = [
        'sync_log_id',
        'batch_number',
        'processed_count',
        'failure_count',
        'status',
        'batch_product_count'
    ];

    protected $casts = [
        'processed_count' => 'integer',
        'failure_count' => 'integer',
        'batch_product_count' => 'integer',
    ];

   
    public function syncLog(): BelongsTo
    {
        return $this->belongsTo(AkeneoParkerSyncLog::class, 'sync_log_id');
    }
}
