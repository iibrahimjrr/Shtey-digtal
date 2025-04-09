<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\ChatbotageController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;

//  Users 
Route::get('/patient', [UserController::class, 'index']);
Route::post('/patient', [UserController::class, 'store']);
Route::get('/patient/{id}', [UserController::class, 'show']);
Route::put('/patient/{id}', [UserController::class, 'update']);
Route::delete('/patient/{id}', [UserController::class, 'destroy']);

//  Articles 
Route::get('/articles', [ArticleController::class, 'index']);
Route::get('/articles/{id}', [ArticleController::class, 'show']);

// Comments 
Route::get('/comments', [CommentController::class, 'index']);

//  Pages 
Route::get('/pages', [PageController::class, 'index']);
Route::get('/pages/{id}', [PageController::class, 'show']);

//  Chatbot 
Route::get('/chatbot', [ChatbotageController::class, 'index']);
Route::post('/chatbot', [ChatbotageController::class, 'store']);

//  Auth Routes 
Route::middleware(['throttle:60,1'])->group(function () {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
});
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

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
