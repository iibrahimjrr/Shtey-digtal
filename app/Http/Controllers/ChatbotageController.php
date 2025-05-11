<?php

namespace App\Http\Controllers;

use App\Models\Chatbot;
use Illuminate\Http\Request;

class ChatbotageController extends Controller
{
    public function index() 
    {
        return response()->json(Chatbot::all());
    }

    public function store(Request $request)
    {
        $request->validate([
            'message'  =>  'required|string',
            'patient_id'  =>  'required|exists:patients,id'
        ]);

        $response = 'عايز ايه اؤمرني';
        $chatbotMessage = Chatbot::create([
            'patient_id' => $request->patient_id,
            'message' => $request->message,
            'response' => $response,
        ]);

        return response()->json($chatbotMessage, 201);

    }
}
