<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Models\Comment;
use Laravel\Sanctum\HasApiTokens;

class Patient extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'patients';
    protected $fillable = ['name', 'username', 'email', 'password', 'age', 'role'];
    protected $hidden   = ['password'];

    public function comments(){
        return $this->hasMany(Comment::class);
    }
    
}
