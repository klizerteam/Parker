<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(){
        Schema::create('akeneo_parker_sync_logs', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('connection_id')->nullable();
            $table->timestamp('start_date')->nullable();
            $table->timestamp('end_date')->nullable();
            $table->string('status')->default('pending'); // pending, processing, success, failed
            $table->integer('total')->default(0);
            $table->integer('failure')->default(0);
            $table->integer('processed')->default(0);
            $table->unsignedBigInteger('created_by')->nullable();
            $table->text('log')->nullable();
            $table->text('error_log')->nullable();
            $table->timestamps();
        });
    }                                                                           

    public function down(){
        Schema::dropIfExists('akeneo_parker_sync_logs');
    }
};
