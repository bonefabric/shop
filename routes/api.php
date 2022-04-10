<?php
declare(strict_types=1);

use App\Http\Controllers\Api\V1\AuthController;
use App\Http\Controllers\Api\V1\GoodsController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'v1'], function () {

    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::group(['middleware' => 'auth:sanctum'], function () {

        Route::get('/user', [AuthController::class, 'user']);

        Route::apiResource('goods', GoodsController::class);
    });
});
