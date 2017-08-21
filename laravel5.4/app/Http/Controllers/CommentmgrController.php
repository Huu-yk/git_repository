<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class CommentmgrController extends Controller
{
    public function getComments(Request $request)
    {
        try{
            $id = $request->get('vid');
            $result = DB::select('select a.* from (select u.name,c.* from comments c LEFT JOIN users u on u.id = c.user_id) a where a.movie_id = ?',[$id]);
            if(!$result){
                throw new \Exception("error1!");
            }

            //判断用户是否登陆
            if(Auth::user() != ''){
                $arrinfo = [
                    'comments_data'=>$result,
                    'user'=>Auth::user()
                ];
                return $arrinfo;
            }else{
                $arrinfo = [
                    'comments_data'=>$result,
                    'user'=>''
                ];
                return $arrinfo;
            }

        } catch (\Exception $e){
            echo $e->getMessage();
            echo $e->getCode();
        }
    }


    public function postComments(Request $request)
    {
        try{
            DB::beginTransaction();
            $movieid = $request->get('vid');
            $userid = $request->get('uid');
            $content = $request->get('content');
            $result = DB::insert('insert into comments (user_id,movie_id,content,posted_time) values (?,?,?,now())',[$userid,$movieid,$content]);
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


    public function getMyComments(Request $request)
    {
        try{
            $userid = $request->get('uid');
            $result = DB::select('select * from (select m.name,c.* from comments c LEFT JOIN movie m on m.id = c.movie_id) a where a.user_id = ?',[$userid]);
            if (!$result) {
               return '0';
            }
            return $result;
        } catch (\Exception $e){
            echo $e->getMessage();
            echo $e->getCode();
        }
    }

    public function deleteComment(Request $request)
    {
        try{
            DB::beginTransaction();
            $id = $request->get('commentid');
            $result = DB::delete('delete from comments where id = ?',[$id]);
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

    public function getAllComments()
    {
        $user = Auth::user();
        if($user->can('allow-getallcomments')){
            try{
                $result = DB::select('select a.*,u.name user_name from (select m.name movie_name,c.* from comments c LEFT JOIN movie m on m.id=c.movie_id) a LEFT JOIN users u on a.user_id = u.id');
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

    public function delComment_be(Request $request)
    {
        $user = Auth::user();
        if($user->can('allow-delcomment')){
            try{
                DB::beginTransaction();
                $id = $request->get('commentid');
                $result = DB::delete('delete from comments where id = ?',[$id]);
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
