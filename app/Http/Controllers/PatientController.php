<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\Patient;

class PatientController extends Controller
{
    public function index(){
        return response()->json(Patient::all());
    }

    public function store(Request $request){
        $request->validate([
            'name'     => 'required',
            'username' => 'required|unique:patients',
            'email'    => 'required|unique:patients',
            'password' => 'required|min:10',
            'age'      => 'nullable|integer'
        ]);

        $Patient = Patient::create([
            'name'     => $request->name,
            'username' => $request->username,
            'email'    => $request->email,
            'age'      => $request->age,
            'password' => Hash::make($request->password),
        ]);

        return response()->json($Patient, 201);
    }

    public function show($id){
        return response()->json(Patient::findOrFail($id));
    }

    public function update(Request $request, $id)
    {
        $Patient = Patient::findOrFail($id);
        $Patient->update($request->all());
        return response()->json($Patient);
    }
    
    public function destroy($id){
        Patient::findOrFail($id)->delete();
        return response()->json(['message' => 'المستخدم اتمسح ']);
    }
}
