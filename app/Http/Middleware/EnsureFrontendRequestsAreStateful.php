<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class EnsureFrontendRequestsAreStateful
{
    public function handle(Request $request, Closure $next)
    {
        if ($request->expectsJson()) {
            return $next($request);
        }

        abort(403, 'لاؤة');
    }
}
