<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBatchSyncLogsTable extends Migration
{
    public function up()
    {
        Schema::create('batch_sync_logs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('sync_log_id')->constrained('akeneo_parker_sync_logs')->onDelete('cascade');
            $table->integer('batch_number');
            $table->integer('batch_product_count')->default(0);
            $table->integer('processed_count')->default(0);
            $table->integer('failure_count')->default(0);
            $table->enum('status', ['processing', 'completed', 'failed'])->default('processing');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('batch_sync_logs');
    }
}
