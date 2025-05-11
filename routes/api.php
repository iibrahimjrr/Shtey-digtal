<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\ChatbotageController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\MessageController;
use Illuminate\Support\Facades\Route;

//  patients
Route::get('/patients', [PatientController::class, 'index']);
Route::post('/patients', [PatientController::class, 'store']);
Route::get('/patients/{id}', [PatientController::class, 'show']);
Route::put('/patients/{id}', [PatientController::class, 'update']);
Route::delete('/patients/{id}', [PatientController::class, 'destroy']);

//  Articles 
Route::get('/articles', [ArticleController::class, 'show']);
Route::get('/articles/{id}', [ArticleController::class, 'update']);

// Comments 
Route::get('/comments', [CommentController::class, 'index']);

//  Pages 
Route::get('/pages', [PageController::class, 'index']);
Route::get('/pages/{id}', [PageController::class, 'show']);

//  Chatbot 
Route::get('/chatbot', [ChatbotageController::class, 'index']);
Route::post('/chatbot', [ChatbotageController::class, 'store']);

// messages
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/messages', [MessageController::class, 'index']);   
    Route::post('/messages', [MessageController::class, 'store']); 
});

//  Auth Routes 
Route::middleware(['throttle:60,1'])->group(function () {
    Route::any('/register', [AuthController::class, 'register']);
    Route::any('/login', [AuthController::class, 'login']);
});
Route::middleware('auth:sanctum')->any('/logout', [AuthController::class, 'logout']);

//  Protected Routes with Policies 
Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('/comments', [CommentController::class, 'store'])
        ->middleware('can:create,App\Models\Comment');

    Route::delete('/comments/{comment}', [CommentController::class, 'destroy'])
        ->middleware('can:delete,comment');

    Route::put('/pages/{page}', [PageController::class, 'update'])
        ->middleware('can:update,page');

    Route::put('/articles/{article}', [ArticleController::class, 'update'])
        ->middleware('can:update,article');
});
