<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class TagmgrController extends Controller
{

    public function index()
    {
        $user = Auth::user();
        if($user->can('access-tagmgr')){
            try{


                $result = DB::select('select * from tags');
                if(!$result){
                    throw new \Exception("error2!");
                }

                return $result;
            } catch (\Exception $e){
                echo $e->getMessage();
                echo $e->getCode();
            }
        }
    }

    public function addTag(Request $request)
    {
        $user = Auth::user();
        if($user->can('allow-addtag')){
            try{
                //开启事务
                DB::beginTransaction();
                $name = $request->get('name');
                $description = $request->get('description');

                $result = DB::insert('insert into tags (name,description,created_at,updated_at) values (?,?,now(),now())',[$name,$description]);

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


    public function editTag(Request $request)
    {
        $user = Auth::user();
        if($user->can('allow-edittag')){
            try{
                //开启事务
                DB::beginTransaction();
                $id = $request->get('id');
                $name = $request->get('name');
                $description = $request->get('description');

                $result = DB::update('update tags set name = ?,description = ?,updated_at = now() where id = ? ',[$name,$description,$id]);

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


    public function deleteTag(Request $request)
    {
        $user = Auth::user();
        if($user->can('allow-deltag')){
            try{
                //开启事务
                DB::beginTransaction();
                $id = $request->get('id');
                $result = DB::update('delete from tags where id = ?',[$id]);
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
