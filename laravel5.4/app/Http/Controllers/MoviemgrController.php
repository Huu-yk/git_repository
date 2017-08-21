<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class MoviemgrController extends Controller
{

    public function index()
    {
        try{
            $result = DB::select('select t.name tag_name,m.* from movie m left join tags t on m.tag_id = t.id');
            if(!$result){
                throw new \Exception("error1!");
            }
            return $result;
        } catch (\Exception $e){
            echo $e->getMessage();
            echo $e->getCode();
        }
    }

    public function getDetail(Request $request)
    {
        try{
            $id = $request->get('vid');
            $result = DB::select('select t.name tag_name,m.* from movie m,tags t where m.id = ? and m.tag_id = t.id',[$id]);
            if(!$result){
                throw new \Exception("error1!");
            }
            return $result;
        } catch (\Exception $e){
            echo $e->getMessage();
            echo $e->getCode();
        }
    }

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


    public function addMovie(Request $request)
    {
        $user = Auth::user();
        if($user->can('allow-addmovie')){
            try{

                $name = $request->get('name');
                $tag_name = $request->get('tag_name');
                $area = $request->get('area');
                $running_time = $request->get('running_time');
                $release_time = $request->get('release_time');
                $star = $request->get('star');
                $introduce = $request->get('introduce');
                $photolist = $request->get('photolist');


                //数据处理
                if($tag_name == "Tag1"){
                    $tag_id = 1;
                }
                if($tag_name == "Tag2"){
                    $tag_id = 2;
                }

                DB::beginTransaction();

                $result = DB::insert('insert into movie (name,tag_id,running_time,area,star,release_time,introduce) values (?,?,?,?,?,?,?)',
                                [$name,$tag_id,$running_time,$area,$star,$release_time,$introduce]);
                if (!$result) {
                    throw new \Exception("error1!");
                }


                if($photolist){
                    $movieid = DB::select('select id from movie where name = ?',[$name]);
                    foreach ($photolist as $key=>$value){
                        $url = '../video/images/'.$value;
                        $result2 = DB::insert('insert into movie_photos (movie_id,url) values (?,?)',[$movieid[0]->id,$url]);
                        if(!$result2){
                            throw new \Exception("error2!");
                        }
                    }

                }
                DB::commit();
            } catch (\Exception $e){
                DB::rollback();
                echo $e->getMessage();
                echo $e->getCode();
            }
        }
    }


    public function editMovie(Request $request)
    {
        $user = Auth::user();
        if($user->can('allow-editmovie')){
            try{
                $id = $request->get('id');
                $name = $request->get('name');
                $tag_name = $request->get('tag_name');
                $area = $request->get('area');
                $running_time = $request->get('running_time');
                $release_time = $request->get('release_time');
                $uri = $request->get('uri');
                $star = $request->get('star');
                $introduce = $request->get('introduce');

                //数据处理
                if($tag_name == "Tag1"){
                    $tag_id = 1;
                }
                if($tag_name == "Tag2"){
                    $tag_id = 2;
                }
                DB::beginTransaction();

                $result = DB::update('update movie set name = ?,tag_id = ?,area = ?,running_time = ?,release_time = ?,uri = ?,star = ?,introduce = ? where id = ?',
                            [$name,$tag_id,$area,$running_time,$release_time,$uri,$star,$introduce,$id]);
                if(!$result){
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


    public function deleteMovie(Request $request)
    {
        $user = Auth::user();
        if($user->can('allow-delmovie')){
            try{
                $id = $request->get('movieid');
                DB::beginTransaction();
                $result = DB::delete('delete from movie where id = ?',[$id]);
                if(!$result){
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

    public function uploadImg(Request $request)
    {
        $user = Auth::user();
        if($user->can('allow-uploadphoto')){
            try{
                $id = $request->get('movieid');
                $photolist = $request->get('photolist');

                DB::beginTransaction();
                if($photolist)
                {
                    foreach ($photolist as $key=>$value){
                        $url = '../video/images/'.$value;

                        //检查是否已存在图片
                        $ret = DB::select('select id from movie_photos where url = ? and movie_id = ?',[$url,$id]);
                        if($ret != null){
                            continue;
                        }
                        $result = DB::insert('insert into movie_photos (movie_id,url) values (?,?)',[$id,$url]);
                        if(!$result){
                            throw new \Exception("error2!");
                        }
                    }
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
