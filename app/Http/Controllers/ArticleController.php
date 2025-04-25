<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Article;


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
