<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UsermgrController extends Controller
{


    public function __construct(){

        $this->middleware('auth');

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    /**
     * 获取除管理员外的所有用户
     */
    public function index()
    {
        $user = Auth::user();
        if($user->can('access-usermgr')){
            try{
                $count = DB::select('select count(*) from users where id not in (select user_id from role_user where role_id = ?)',[1]);
                if (!$count) {
                    throw new \Exception("error1!");
                }

                $superuser = DB::select('select u.id,u.name,u.email,u.birthday,u.login_ip,u.login_time,u.sex,u.telephone,
                             u.address,u.education,\'2\' as role_id,\'超级会员\' as description from users u 
                             where id in (select user_id from role_user where role_id not in (1))');
                if (!$superuser) {
                    throw new \Exception("error2!");
                }


                $common = DB::select('select u.id,u.name,u.email,u.birthday,u.login_ip,u.login_time,u.sex,u.telephone,
                          u.address,u.education,\'\' as role_id,\'普通会员\' as description from users u 
                          where id not in (select user_id from role_user)');
                if (!$common) {
                    throw new \Exception("error3!");
                }

                //$users = $common;

                $users = array_merge($superuser,$common);

                $Ret = [
                    'count'=>$count,
                    'users'=>$users
                ];
                return $Ret;
            } catch (\Exception $e){
                echo $e->getMessage();
                echo $e->getCode();
            }
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = Auth::user();
        if($user->can('allow-adduser')){
            //开启事务
            DB::beginTransaction();
            try{
                $name = $request->get('name');
                $email = $request->get('email');
                $sex = $request->get('sex');
                $tele = $request->get('tele');
                $birth = $request->get('birth');
                $edu = $request->get('edu');
                $address = $request->get('address');

                //设置默认密码
                $psd = Hash::make('123456');

                $result = DB::insert('insert into users (name,email,password,sex,telephone,birthday,address,education) 
                          values (?,?,?,?,?,?,?,?)',[$name,$email,$psd,$sex,$tele,$birth,$address,$edu]);

                if (!$result) {
                    DB::rollback();
                    throw new \Exception('error!');
                }
                DB::commit();
            } catch (\Exception $e){
                //事务回滚
                DB::rollback();
                echo $e->getMessage();
                echo $e->getCode();
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = Auth::user();
        if($user->can('allow-edituser')){
            //开启事务
            DB::beginTransaction();
            try{

                $name = $request->get('name');
                $sex = $request->get('sex');
                $tele = $request->get('tele');
                $birth = $request->get('birth');
                $edu = $request->get('edu');
                $address = $request->get('address');

                $result = DB::update('update users set name = ?,sex = ?,telephone = ?,birthday = ?,education = ?,address = ? where id = ?',
                    [$name,$sex,$tele,$birth,$edu,$address,$id]);
                if (!$result) {
                    //Exception类接收的参数
                    //$message = "", $code = 0, Exception $previous = null
                    throw new \Exception('error!');
                }
                DB::commit();
            } catch (\Exception $e){
                //事务回滚
                DB::rollback();
                echo $e->getMessage();
                echo $e->getCode();
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = Auth::user();
        if($user->can('allow-deluser')){
            //开启事务
            DB::beginTransaction();
            try{
                $result = DB::delete('delete from users where id = ?',[$id]);
                if(!$result){
                    throw new \Exception('error!');
                }
                DB::commit();
            }catch(\Exception $e){
                //事务回滚
                DB::rollback();
                echo $e->getMessage();
                echo $e->getCode();
            }

        }
    }



    public function getAdmin()
    {
        $user = Auth::user();
        if($user->can('access-usermgr')){
            try{
                $result = DB::select('select u.id,u.name,u.email,u.birthday,u.login_ip,u.login_time,u.sex,u.telephone,u.address 
                          from users u,role_user ru where ru.role_id = 1 and ru.user_id = u.id ');
                if(!$result){
                    throw new \Exception('error!');
                }
                return $result;
            }catch (\Exception $e){
                echo $e->getMessage();
                echo $e->getCode();
            }
        }
    }


    public function getMyres()
    {
        $user = Auth::user();
        return $user;
    }

    public function editMyres(Request $request)
    {
        try{
            $id = $request->get('id');
            $name = $request->get('name');
            $email = $request->get('email');
            $tele = $request->get('tele');
            $sex = $request->get('sex');
            $birth = $request->get('birth');
            $edu = $request->get('edu');
            $address = $request->get('address');

            DB::beginTransaction();
            $result = DB::update('update users set name = ?,telephone = ?,sex = ?,birthday = ?,education = ?,
                        address = ?,updated_at = now() where id = ?',[$name,$tele,$sex,$birth,$edu,$address,$id]);
            if(!$result){
                DB::rollback();
                throw new \Exception('error!');
            }
            DB::commit();
        }catch (\Exception $e){
            DB::rollback();
            echo $e->getMessage();
            echo $e->getCode();
        }
    }
}
