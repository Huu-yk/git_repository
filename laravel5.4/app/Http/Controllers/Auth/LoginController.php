<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    //protected $redirectTo = '/admin';
    /*protected function redirectTo()
    {
        $user = Auth::user();
        if($user->can('access-backend'))
        {
            date_default_timezone_set('PRC');
            $ip = $_SERVER["REMOTE_ADDR"];
            DB::table('users')->where('id',Auth::id())->update([
                'login_ip' => $ip,
                'login_time' => date("Y-m-d H:i:s")
            ]);
            return '/admin';
        }
        else{
            return '/welcome';
        }
    }*/

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
}
