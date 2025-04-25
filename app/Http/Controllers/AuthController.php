<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthController extends Controller
{
    
    public function register(Request $request)
    {
        $request->validate([
            'name'     => 'required|string|max:50',
            'username' => 'required|string|max:50|unique:users',
            'email'    => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
            'age'      => 'nullable|integer|max=2',
            'role'     => 'nullable|in:admin,user'
        ]);
    
        $user = User::create([
            'name'     => $request->name,
            'username' => $request->username,
            'email'    => $request->email,
            'password' => Hash::make($request->password),
            'age'      => $request->age,
            'role'     => $request->role ?? 'user', 
        ]);
    
        $token = $user->createToken('auth_token')->plainTextToken;
    
        return response()->json([
            'message' => 'الاكونت اتعمل ',
            'token'   => $token,
            'user'    => $user,
        ]);
    }
    

    
    public function login(Request $request)
    {
        $request->validate([
            'email'    => 'required|string|email',
            'password' => 'required|string',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'اه يا حرامي حاطط بيانات غلط'], 401);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'ادخل يا حبيبي',
            'token'   => $token,
            'user'    => $user,
        ]);
    }

    
    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();
        return response()->json(['message' => 'مع السلامه ابقى تعلا تاني']);
    }
}
