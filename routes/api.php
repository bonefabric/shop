<?php
declare(strict_types=1);

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'v1'], function () {

    Route::group(['middleware' => 'auth:sanctum'], function () {

        Route::get('/user', function (Request $request) {
            return $request->user();
        });
    });
});
