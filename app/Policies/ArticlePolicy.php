<?php

namespace App\Policies;

use App\Models\Patient;
use App\Models\Article;

class ArticlePolicy
{
    public function update(Patient $Patient, Article $article)
    {
        return $Patient->is_admin;
    }
}
