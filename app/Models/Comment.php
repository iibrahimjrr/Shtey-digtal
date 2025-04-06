<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\User;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = ['comment', 'user_id'];

    public function users(){
        return $this->belongsTo(User::class);
    }
}
