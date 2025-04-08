<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Page;

class PagePolicy
{
    public function update(User $user, Page $page)
    {
        return $user->is_admin;
    }
}
