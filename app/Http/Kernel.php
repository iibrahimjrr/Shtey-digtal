<?php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{
    /** (Global Middleware)
     * @var array<int, class-string>
     */
    protected $middleware = [
        \Illuminate\Http\Middleware\TrustHosts::class,
        \Illuminate\Http\Middleware\TrustProxies::class,
        \Illuminate\Foundation\Http\Middleware\TransformsRequest::class,
        \Illuminate\Foundation\Http\Middleware\ValidatePostSize::class,
        \Illuminate\Foundation\Http\Middleware\CheckForMaintenanceMode::class,
        \Illuminate\Http\Middleware\HandleCors::class,
        \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
        \App\Http\Middleware\CorsMiddleware::class,
    ];

    /** (Groups Middleware)
     * @var array<string, array<int, string>>
     */
    protected $middlewareGroups = [
        'web' => [
            \App\Http\Middleware\EncryptCookies::class,
            \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
            \Illuminate\Session\Middleware\StartSession::class,
            \Illuminate\View\Middleware\ShareErrorsFromSession::class,
            \Illuminate\Foundation\Http\Middleware\VerifyCsrfToken::class,
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
        ],
    
    /** (Api Middleware) */    
        'api' => [
            \Illuminate\Routing\Middleware\ThrottleRequests::class.':api',
            \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,'throttle:api',
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
            \Illuminate\Routing\Middleware\ThrottleRequests::class.':60,1',
        ],
    ];

    /** (Route Middleware)
     * @var array<string, string>
     */
    protected $routeMiddleware = [
        'checkArticleOwner' => \App\Http\Middleware\CheckArticleOwner::class,
        'auth'              => \App\Http\Middleware\Authenticate::class,
        'admin'             => \App\Http\Middleware\AdminMiddleware::class,
    ];
}
