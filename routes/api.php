<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\ChatbotageController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\PageController;

Route::get('/patient', [UserController::class, 'index']);   // عرض جميع المستخدمين
Route::post('/patient', [UserController::class, 'store']);  // إنشاء مستخدم جديد
Route::get('/patient/{id}', [UserController::class, 'show']);  // عرض مستخدم معين
Route::put('/patient/{id}', [UserController::class, 'update']); // تحديث المستخدم
Route::delete('/patient/{id}', [UserController::class, 'destroy']); // حذف المستخدم

Route::get('/articles', [ArticleController::class, 'index']);  // عرض المقالات
Route::get('/article', [ArticleController::class, 'show']);   // عرض المقال

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('/comments', [CommentController::class, 'store']);  // إضافة تعليق
    Route::delete('/comments/{id}', [CommentController::class, 'destroy']); // حذف تعليق
    
    Route::middleware('admin')->group(function () {
        Route::put('/article', [ArticleController::class, 'update']);  // تحديث المقال
        Route::put('/pages/{id}', [PageController::class, 'update']); // تعديل صفحة
    });
});

Route::get('/comments', [CommentController::class, 'index']);   // عرض كل التعليقات

Route::get('/pages', [PageController::class, 'index']);   // عرض جميع الصفحات
Route::get('/pages/{id}', [PageController::class, 'show']);  // عرض صفحة معينة

Route::get('/chatbot', [ChatbotageController::class, 'index']);   // عرض الرسائل
Route::post('/chatbot', [ChatbotageController::class, 'store']);  // إرسال رسالة للشات بوت

// تسجيل الدخول والتسجيل والخروج
Route::middleware(['throttle:10,1'])->groub(function(){
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
});
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

Route::middleware(['cors'])->group(function () {
    Route::get('/test', function () {
        return response()->json(['message' => 'CORS enabled!']);
    });
});
