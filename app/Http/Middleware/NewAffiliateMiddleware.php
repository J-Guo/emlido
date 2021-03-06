<?php

namespace App\Http\Middleware;

use Closure;

class NewAffiliateMiddleware
{
    /**
     * check whether affiliate has created his profile or not
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        //get current affiliate
        $user = $request->user();

        //if use has not created profile
        if($user->display_name == null)
            return redirect('aprofile/create')
                ->with('message','We know you are exciting but please create your profile first');
        else
            return $next($request);
    }
}
