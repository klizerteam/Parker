<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class AkeneoParkerSyncLog extends Model {
    use HasFactory;

    protected $fillable = [
        'connection_id', 'start_date', 'end_date', 'status', 
        'total', 'failure', 'processed', 'created_by', 'log','error_log'
    ];
    protected $casts = [
        'start_date' => 'datetime',
        'end_date' => 'datetime',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
    public function batchLogs(): HasMany
    {
        return $this->hasMany(BatchSyncLog::class, 'sync_log_id');
    }
    public function createdByUser()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
}
