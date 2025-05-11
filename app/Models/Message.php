<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $fillable = ['patient_id', 'doctors_id', 'content', 'is_bot'];

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }

    public function doctors()
    {
        return $this->belongsTo(Doctor::class);
    }
}
