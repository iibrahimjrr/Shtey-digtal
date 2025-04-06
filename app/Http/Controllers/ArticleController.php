<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Article;
use App\Policies\ArticlePolicy;
use Illuminate\Support\Facades\Auth;

class ArticleController extends Controller
{
    public function show() 
    {
        return response()->json(Article::first());
    }


    public function update(Request $request) {
        $article = Article::firstOrFail();
        $article->update($request->all());
        return response()->json($article);
    }
}
