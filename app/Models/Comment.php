<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Patient;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = ['comment', 'patient_id'];

    public function Patients(){
        return $this->belongsTo(Patient::class);
    }
}
