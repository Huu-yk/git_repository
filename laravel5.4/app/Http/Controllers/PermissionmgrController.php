<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class PermissionmgrController extends Controller
{

    public function index()
    {
        $user = Auth::user();
        if($user->can('access-permgr')){
            try{

                $result = DB::select('select * from permissions');

                if(!$result){
                    throw new \Exception("error1!");
                }

                return $result;
            } catch (\Exception $e){
                echo $e->getMessage();
                echo $e->getCode();
            }
        }

    }

    /*
     * 根据角色role_id获取权限列表
     */
    public function getPer(Request $request){
        $user = Auth::user();
        if($user->can('allow-getper')){
            try{

                $roleid = $request->get('role_id');


                $per_list = array();
                //根据角色id查询权限id
                $Ret = DB::select('select permission_id from permission_role where role_id = ?',[$roleid]);
                //return $Ret;
                if(!$Ret){
                    return '0';
                    throw new \Exception("error1!");
                }

                foreach ($Ret as $key => $value){
                    $perRet = DB::select('select * from permissions where id = ?',[$value->permission_id]);

                    if(!$perRet){
                        throw new \Exception("error2!");
                    }
                    $per_list[] = $perRet[0];
                }

                return $per_list;
            } catch (\Exception $e){
                echo $e->getMessage();
                echo $e->getCode();
            }
        }
    }


    /*
     * 获取角色未有的权限
     * */
    public function getNothave(Request $request){
        $user = Auth::user();
        if($user->can('allow-getnothave')) {
            try {
                $roleid = $request->get('role_id');
                $nothave = array();

                //根据角色id查询未有权限id
                $Ret = DB::select('select * from permissions');
                if (!$Ret) {
                    throw new \Exception("error1!");
                }
                foreach ($Ret as $key => $value) {
                    $roleidRet = DB::select('select role_id from permission_role where permission_id = ?', [$value->id]);
                    if (!$roleidRet) {
                        $nothave[] = $Ret[$key];
                    } else {
                        foreach ($roleidRet as $k => $v) {
                            if ($v->role_id == $roleid) {
                                break;
                            }
                            if ($k == sizeof($roleidRet) - 1) {
                                $nothave[] = $Ret[$key];
                            }
                        }
                    }
                }
                return $nothave;
            } catch (\Exception $e) {
                echo $e->getMessage();
                echo $e->getCode();
            }
        }
    }

    /*
     * 添加权限
     * */
    public function addPer(Request $request){
        $user = Auth::user();
        if($user->can('allow-addper')){
            try{

                $name = $request->get('name');
                $label = $request->get('label');
                $url = $request->get('url');
                $url_backend = $request->get('url_backend');
                $description = $request->get('description');

                DB::beginTransaction();

                $result = DB::insert('insert into permissions (name,label,url,url_backend,description,created_at) values (?,?,?,?,?,now())',
                                [$name,$label,$url,$url_backend,$description]);
                if (!$result) {
                    throw new \Exception("error1!");
                }

                DB::commit();
            } catch (\Exception $e){
                DB::rollback();
                echo $e->getMessage();
                echo $e->getCode();
            }
        }
    }


    /*
     * 编辑权限
     * */
    public function editPer(Request $request){
        $user = Auth::user();
        if($user->can('allow-editper')){
            try{

                $id = $request->get('id');
                $name = $request->get('name');
                $label = $request->get('label');
                $url = $request->get('url');
                $url_backend = $request->get('url_backend');
                $description = $request->get('description');

                DB::beginTransaction();

                $result = DB::update('update permissions set name = ?,label = ?,url = ?,url_backend = ?,description = ?,updated_at = now() where id = ?',
                    [$name,$label,$url,$url_backend,$description,$id]);

                if (!$result) {
                    throw new \Exception("error1!");
                }

                DB::commit();
            } catch (\Exception $e){
                DB::rollback();
                echo $e->getMessage();
                echo $e->getCode();
            }
        }
    }


    /*
    * 删除权限
    * */
    public function delPer(Request $request){
        $user = Auth::user();
        if($user->can('allow-delper')){
            try{

                $delid = $request->get('per_id');

                DB::beginTransaction();

                $result = DB::delete('delete from permissions where id = ?',[$delid]);

                if (!$result) {
                    throw new \Exception("error1!");
                }

                DB::commit();
            } catch (\Exception $e){
                DB::rollback();
                echo $e->getMessage();
                echo $e->getCode();
            }
        }
    }
}
