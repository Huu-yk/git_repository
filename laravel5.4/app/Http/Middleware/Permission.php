<?php

namespace App\Http\Middleware;


use Illuminate\Support\Facades\Auth;
use Closure;

class Permission
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $user = Auth::user();


        if($user->can('access-backend'))
        {
            return $next($request);
        }
        else{
            exit;
        }


    }
}
