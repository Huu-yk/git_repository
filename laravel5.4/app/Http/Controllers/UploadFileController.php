<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class UploadFileController extends Controller
{
    public function index()
    {

    }

    //上传头像
    public function uploadImage(Request $request)
    {
        if(!$request->hasFile('myimage')){
            exit('上传文件为空！');
        }
        $file =  $request->file('myimage');
        if(!$file->isValid()){
            exit('文件上传出错！');
        }
        $filename = $file->getClientOriginalName();
        $file->storeAs('images', $filename, 'uploadFiles');

        $path = '../images/'.$filename;

        try{
            //开启事务
            DB::beginTransaction();
            $id = Auth::id();
            $result = DB::update('update users set head_portrait = ? where id = ?',[$path,$id]);
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

        return redirect()->route('personal');
    }

    //上传电影图片
    public function uploadPhoto(Request $request)
    {
        $user = Auth::user();
        if($user->can('allow-uploadphoto')){
            if(!$request->hasFile('moviePhoto')){
                return response()->json(['code' => 'error'],422);
                exit('上传文件为空！');
            }
            $file =  $request->file('moviePhoto');
            if(!$file->isValid()){
                return response()->json(['code' => 'error'],422);
                exit('文件上传出错！');
            }

            $filename = $file->getClientOriginalName();
            $file->storeAs('images', $filename, 'uploadMoviePhoto');

            return response()->json(['code' => 'success'],200);
        }
    }

}
