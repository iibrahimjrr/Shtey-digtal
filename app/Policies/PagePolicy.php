<?php

namespace App\Policies;

use App\Models\Patient;
use App\Models\Page;

class PagePolicy
{
    public function update(Patient $Patient, Page $page)
    {
        return $Patient->is_admin;
    }
}
