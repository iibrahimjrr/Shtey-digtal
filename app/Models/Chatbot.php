<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Patient;

class Chatbot extends Model
{
    use HasFactory;

    protected $fillable = ['message', 'response', 'patient_id'];

    public function Patients(){
        return $this->belongsTo(Patient::class);
    }
}
