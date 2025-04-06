<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;

class CommentController extends Controller
{
    public function index() 
    {
        return response()->json(Comment::all());
    }


    public function store(Request $request)
    {
        $request->validate([
            'comment'    => 'required',
            'user_id'    => 'required|exists:users,id',
        ]);


        $comment = Comment::create($request->all());
        return response()->json($comment, 201);    
    }

    public function destroy($id)
    {
        Comment::findOrFail($id)->delete();
        return response()->json(['Message' => 'التعليق اتسمح يا قلب اخوك']);
    }
}    
