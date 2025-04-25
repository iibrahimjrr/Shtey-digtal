<?php

namespace App\Http\Controllers;

use App\Models\Doctor;
use App\Models\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function index(Request $request){
        $message = Message::where('patient_id', $request->user()->id)
            ->orderBy('created_at')
            ->get();
            
        return response()->json($message);
    }

    public function store(Request $request){
        $request->validate([
            'content'    => 'required|string',
            'doctors_id' => 'nullable|exists:doctors,id'
        ]);

        $doctor = Doctor::find($request->doctors_id);
        
        // if doctor not online
        if (!$doctor || !$doctor->is_online){
            $patientmessage = Message::create([
                'patient_id' => $request->user()->id,
                'content' => $request->content,
                'is_bot' => false
            ]);

            $botmessage = Message::create([
                'patient_id' => $request->user()->id,
                'content' => 'الدكتور مش موجود دلوقت اؤمرني',
                'is_bot' => true
            ]);

            return response()->json([
                'patient_message' => $patientmessage,
                'bot_message' => $botmessage
            ],201);
        }

        // if doctor online
        $message = Doctor::create([
            'patient_id' => $request->user()->id,
            'doctors_id' => $request->id,
            'content'    => $request->content,
            'is_bot'     => false,
        ]);
        return response()->json($message, 201);

    }
}
