<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class CollectmgrController extends Controller
{
    public function collectMovie(Request $request)
    {
        try{
            DB::beginTransaction();
            $movieid = $request->get('vid');
            $userid = $request->get('uid');
            $result = DB::insert('insert into collect (user_id,movie_id,collect_time) values (?,?,now())',[$userid,$movieid]);
            if (!$result) {
                DB::rollback();
                throw new \Exception('error!');
            }
            DB::commit();
        } catch (\Exception $e){
            DB::rollback();
            echo $e->getMessage();
            echo $e->getCode();
        }
    }

    public function getMyCollects(Request $request)
    {
        try{
            $userid = $request->get('uid');
            $result = DB::select('select * from (select m.name,c.* from collect c LEFT JOIN movie m on m.id = c.movie_id) a where a.user_id = ?',[$userid]);
            if (!$result) {
                return '0';
            }
            return $result;
        } catch (\Exception $e){
            echo $e->getMessage();
            echo $e->getCode();
        }
    }

    public function deleteCollect(Request $request)
    {
        try{
            DB::beginTransaction();
            $id = $request->get('collectid');
            $result = DB::delete('delete from collect where id = ? ',[$id]);
            if (!$result) {
                DB::rollback();
                throw new \Exception('error!');
            }
            DB::commit();
        } catch (\Exception $e){
            DB::rollback();
            echo $e->getMessage();
            echo $e->getCode();
        }
    }

    public function getAllCollects()
    {
        $user = Auth::user();
        if($user->can('allow-getallcollects')){
            try{
                $result = DB::select('select a.*,u.name user_name from (select m.name movie_name,c.* from collect c LEFT JOIN movie m on m.id=c.movie_id) a LEFT JOIN users u on a.user_id = u.id');
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

    public function delCollect_be(Request $request)
    {
        $user = Auth::user();
        if($user->can('allow-delcollect')){
            try{
                DB::beginTransaction();
                $id = $request->get('collectid');
                $result = DB::delete('delete from collect where id = ?',[$id]);
                if (!$result) {
                    DB::rollback();
                    throw new \Exception('error!');
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
