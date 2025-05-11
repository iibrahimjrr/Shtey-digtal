<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\Patient;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'name'     => 'required|string|max:50',
            'username' => 'required|string|max:50|unique:patients',
            'email'    => 'required|string|email|max:255|unique:patients',
            'password' => 'required|string|min:8',
            'age'      => 'nullable|integer|max:150',
            'role'     => 'nullable|in:admin,patient'
        ]);
    
        $Patient = Patient::create([
            'name'     => $request->name,
            'username' => $request->username,
            'email'    => $request->email,
            'password' => Hash::make($request->password),
            'age'      => $request->age,
            'role'     => $request->role ?? 'Patient', 
        ]);
    
        $token = $Patient->createToken('auth_token')->plainTextToken;
    
        return response()->json([
            'message' => 'الاكونت اتعمل ',
            'token'   => $token,
            'Patient' => $Patient,
        ], 201, ['Content-Type' => 'application/json']);
    }
    
    public function login(Request $request)
    {
        $request->validate([
            'email'    => 'required|string|email',
            'password' => 'required|string',
        ]);

        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json(['message' => 'اه يا حرامي حاطط بيانات غلط'], 401);
        }

        $Patient = Auth::user();
        $token = $Patient->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'ادخل يا حبيبي',
            'token'   => $token,
            'Patient' => $Patient,
        ], 200, ['Content-Type' => 'application/json']);
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete(); 

        return response()->json([
            'message' => 'مع السلامه يا حبيبي ابقى تعلاا تاني',
        ], 200, ['Content-Type' => 'application/json']);
    }
}
