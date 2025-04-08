<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Article;

class ArticlePolicy
{
    public function update(User $user, Article $article)
    {
        return $user->is_admin;
    }
}
