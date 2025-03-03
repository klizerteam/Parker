<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AkeneoController;
use App\Http\Controllers\IntegrationController;
use App\Http\Controllers\SyncLogController;

Route::get('/', function () {
    return redirect()->route('login');
});

Route::prefix('api')->group(function () {
    // Sync Logs API endpoints
    Route::get('/sync-logs', [SyncLogController::class, 'index']);
    Route::get('/sync-logs/{id}', [SyncLogController::class, 'show']);
    Route::get('/last-sync', [SyncLogController::class, 'LastSyncTime']);
    Route::get('/sync-fail-email', [SyncLogController::class, 'SyncMail']);
    Route::post('/syncPerProduct', [IntegrationController::class, 'syncPerProduct']);
    Route::get('/loadsku', [IntegrationController::class, 'loadSKU']);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::prefix('akeneo')->group(function () {
    Route::get('/products', [AkeneoController::class, 'getProducts']);
    Route::post('/products/create', [AkeneoController::class, 'createProduct']);
    Route::post('/sync-product', [AkeneoController::class, 'syncProductToAkeneo']); 
    Route::put('/product/{productIdentifier}/update-attributes', [AkeneoController::class, 'updateProductAttributes']);

});


Route::get('/sync-products', [IntegrationController::class, 'syncProducts']);
// $router->get('/sync-products', 'IntegrationController@syncProducts');
require __DIR__.'/auth.php';
