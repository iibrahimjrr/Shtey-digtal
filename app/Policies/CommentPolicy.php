<?php

namespace App\Policies;

use App\Models\Patient;
use App\Models\Comment;

class CommentPolicy
{
    public function delete(Patient $Patient, Comment $comment)
    {
        return $Patient->id === $comment->patient_id || $Patient->is_admin;
    }

    public function create(Patient $Patient)
    {
        return $Patient !== null;
    }
}
