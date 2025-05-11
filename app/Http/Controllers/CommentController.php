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
            'comment'     => 'required',
            'patient_id'  => 'required|exists:patients,id',
        ]);


        $comment = Comment::create($request->all());
        return response()->json($comment, 201);    
    }

    public function destroy($id)
    {
        Comment::findOrFail($id)->delete();
        return response()->json(['Message' => 'التعليق اتسمحك']);
    }
}    
