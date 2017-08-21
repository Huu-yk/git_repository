<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class RolemgrController extends Controller
{

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
        if($user->can('access-rolemgr')){
            try{

                $total= DB::select('select count(*) num from roles');
                if(!$total){
                    throw new \Exception("error1!");
                }
                $roles = DB::select('select * from roles');
                if(!$roles){
                    throw new \Exception("error2!");
                }
                $Ret = [
                    'total'=>$total,
                    'roles'=>$roles
                ];
                return $Ret;
            } catch (\Exception $e){
                echo $e->getMessage();
                echo $e->getCode();
            }
        }
    }

    public function setRole(Request $request)
    {
        $user = Auth::user();
        if($user->can('allow-setrole')){
            try{
                //开启事务
                DB::beginTransaction();
                $id = $request->get('user_id');
                $rolename = $request->get('role_name');

                if($rolename == '管理员'){
                    $roleid = 1;
                }
                if($rolename == '超级会员'){
                    $roleid = 2;
                }
                if($rolename == '撤销身份'){
                    $result = DB::delete('delete from role_user where user_id = ?',[$id]);
                    if(!$result){
                        throw new \Exception("error1!");
                    }
                    DB::commit();
                    return;
                }
                $result = DB::insert('insert into role_user (user_id,role_id) values (?,?)',[$id,$roleid]);
                if(!$result){
                    throw new \Exception("error1!");
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


    public function addRole(Request $request)
    {
        $user = Auth::user();
        if($user->can('allow-addrole')){
            try{
                //开启事务
                DB::beginTransaction();
                $name = $request->get('name');
                $label = $request->get('label');
                $description = $request->get('description');

                $result = DB::insert('insert into roles (name,label,description,updated_at) values (?,?,?,now())',[$name,$label,$description]);

                if(!$result){
                    throw new \Exception("error1!");
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


    public function editRole(Request $request)
    {
        $user = Auth::user();
        if($user->can('allow-editrole')){
            try{
                //开启事务
                DB::beginTransaction();
                $id = $request->get('id');
                $name = $request->get('name');
                $label = $request->get('label');
                $description = $request->get('description');

                $result = DB::update('update roles set name = ?,label = ?,description = ?,updated_at = now() where id = ? ',[$name,$label,$description,$id]);

                if(!$result){
                    throw new \Exception("error1!");
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

    public function useRole(Request $request)
    {
        $user = Auth::user();
        if($user->can('allow-addrole')){
            try{
                //开启事务
                DB::beginTransaction();
                $roleid = $request->get('roleid');
                $set_status = $request->get('set_status');

                $result = DB::update('update roles set this_status = ? where id = ?',[$set_status,$roleid]);

                if(!$result){
                    throw new \Exception("error1!");
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


    public function delRole(Request $request)
    {
        $user = Auth::user();
        if($user->can('allow-delrole')){
            try{
                //开启事务
                DB::beginTransaction();
                $roleid = $request->get('roleid');

                $result = DB::delete('delete from roles where id = ?',[$roleid]);

                if(!$result){
                    throw new \Exception("error1!");
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

    public function appendPer(Request $request)
    {
        $user = Auth::user();
        if($user->can('allow-appendper')){
            try{
                //开启事务
                DB::beginTransaction();
                $roleid = $request->get('role_id');
                $multiple = $request->get('multiple');

                //return $roleid;
                foreach ($multiple as $key => $value){
                    //查询是否已有该权限
                    //return $value['id'];
                    $ret = DB::select('select id from permission_role where permission_id = ? and role_id = ?',[$value['id'],$roleid]);
                    if($ret == null){
                        $result = DB::insert('insert into permission_role (permission_id,role_id) values (?,?)',[$value['id'],$roleid]);
                        if(!$result){
                            throw new \Exception("error1!");
                        }
                    }
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

    public function removePer(Request $request)
    {
        $user = Auth::user();
        if($user->can('allow-removeper')){
            try{
                //开启事务
                DB::beginTransaction();
                $roleid = $request->get('role_id');
                $perid = $request->get('per_id');

                $result = DB::delete('delete from permission_role where permission_id = ? and role_id = ?',[$perid,$roleid]);
                if(!$result){
                    throw new \Exception("error1!");
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
}
