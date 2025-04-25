<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserController extends Controller
{
    public function index(){
        return response()->json(User::all());
    }

    public function store(Request $request){
        $validated = $request->validate([
            'name'     => 'required',
            'username' => 'required|unique:users',
            'email'    => 'required|unique:users',
            'password' => 'required|min:10',
            'age'      => 'nullable|integer'
        ]);

        $user = User::create([
            'name'     => $request->name,
            'username' => $request->username,
            'email'    => $request->email,
            'age'      => $request->age,
            'password' => Hash::make($request->password),
        ]);

        return response()->json($user, 201);
    }

    public function show($id){
        return response()->json(User::findOrFail($id));
    }

    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->update($request->all());
        return response()->json($user);
    }
    
    public function destroy($id){
        User::findOrFail($id)->delete();
        return response()->json(['message' => 'المستخدم اتمسح يا']);
    }
}
