<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
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
            return view('homepage');

        }
        else{
            return view('personalpage');
        }

    }
}
