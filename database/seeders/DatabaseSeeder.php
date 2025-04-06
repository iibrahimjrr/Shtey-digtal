<?php

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

User::factory()->create([
    'name' => 'Test User',
    'email' => 'test@example.com',
    'email_verified_at' => now(), 
    'password' => Hash::make('password'), 
    'remember_token' => Str::random(10), 
]);
