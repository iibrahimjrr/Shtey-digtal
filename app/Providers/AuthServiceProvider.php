<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    
    protected $policies = [
        \App\Models\Article::class => \App\Policies\ArticlePolicy::class,
        \App\Models\Comment::class => \App\Policies\CommentPolicy::class,
        \App\Models\Page::class    => \App\Policies\PagePolicy::class,
    ];

    public function boot(): void
    {
        $this->registerPolicies();
    }
}
