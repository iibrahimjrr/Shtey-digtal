<?php

use App\Models\Patient;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

Patient::factory()->create([
    'name' => 'Test Patient',
    'email' => 'test@example.com',
    'email_verified_at' => now(), 
    'password' => Hash::make('password'), 
    'remember_token' => Str::random(10), 
]);
