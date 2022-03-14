<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('crypto', [\App\Http\Controllers\Controller::class, 'getCrypto']);
Route::post('auth/register', [\App\Http\Controllers\AuthController::class, 'register']);
Route::post('auth/login', [\App\Http\Controllers\AuthController::class, 'login']);
Route::group(['middleware' => 'jwt.auth'], function(){
	Route::post('auth/logout', [\App\Http\Controllers\AuthController::class, 'logout']);
	Route::get('auth/user', [\App\Http\Controllers\AuthController::class, 'user']);
});
Route::group(['middleware' => 'jwt.refresh'], function(){
	Route::get('auth/refresh', [\App\Http\Controllers\AuthController::class, 'refresh']);
});
