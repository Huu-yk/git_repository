<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');

Route::get('/welcome',function(){
    return view('welcome');
})->name('welcome');


//首页
Route::get('/', function () {
    return view('videoHome');
});

//登录页
Route::get('auth/login',function (){
    return view('auth.login');
});

//个人主页
Route::get('/personal',function(){
    return view('personalpage');
})->middleware('auth')->name('personal');

//视频详情页
Route::get('/video/{id}',function (){
    return view('videoDetail');
});

//获取视频
Route::post('moviemgr/getDetail','MoviemgrController@getDetail');

//获取评论
Route::post('commentmgr/getComments','CommentmgrController@getComments');


//个人信息管理
Route::group(['middleware'=>'auth'],function (){

    //评论管理
    Route::post('commentmgr/postComments','CommentmgrController@postComments');
    Route::post('commentmgr/getMyComments','CommentmgrController@getMyComments');
    Route::post('commentmgr/deleteComment','CommentmgrController@deleteComment');
    //收藏管理
    Route::post('collectmgr/collectMovie','CollectmgrController@collectMovie');
    Route::post('collectmgr/getMyCollects','CollectmgrController@getMyCollects');
    Route::post('collectmgr/deleteCollect','CollectmgrController@deleteCollect');

    //个人资料管理
    Route::get('usermgr/getMyres','UsermgrController@getMyres');
    Route::post('usermgr/editMyres','UsermgrController@editMyres');

    //上传头像
    Route::post('upload/uploadImage','UploadFileController@uploadImage');
});


//后台管理
Route::group(['middleware'=>['auth','permission']],function(){
    //角色管理
    Route::get('rolemgr','RolemgrController@index');
    Route::post('rolemgr/removePer','RolemgrController@removePer');
    Route::post('rolemgr/appendPer','RolemgrController@appendPer');
    Route::post('rolemgr/useRole','RolemgrController@useRole');
    Route::post('rolemgr/delRole','RolemgrController@delRole');
    Route::post('rolemgr/editRole','RolemgrController@editRole');
    Route::post('rolemgr/addRole','RolemgrController@addRole');
    Route::post('rolemgr/setRole','RolemgrController@setRole');

    //权限管理
    Route::get('permgr','PermissionmgrController@index');
    Route::post('permgr/addPer','PermissionmgrController@addPer');
    Route::post('permgr/editPer','PermissionmgrController@editPer');
    Route::post('permgr/delPer','PermissionmgrController@delPer');
    Route::post('permgr/getNothave','PermissionmgrController@getNothave');
    Route::post('permgr/getPer','PermissionmgrController@getPer');

    //用户管理
    Route::get('usermgr/getadmin','UsermgrController@getAdmin');
    Route::resource('usermgr','UsermgrController');
    Route::resource('permission','PermissionController');

    //标签管理
    Route::get('tagmgr','TagmgrController@index');
    Route::post('tagmgr/addTag','TagmgrController@addTag');
    Route::post('tagmgr/editTag','TagmgrController@editTag');
    Route::post('tagmgr/deleteTag','TagmgrController@deleteTag');

    //电影管理
    Route::get('moviemgr','MoviemgrController@index');
    Route::post('moviemgr/addMovie','MoviemgrController@addMovie');
    Route::post('moviemgr/editMovie','MoviemgrController@editMovie');
    Route::post('moviemgr/deleteMovie','MoviemgrController@deleteMovie');
    Route::post('moviemgr/uploadImg','MoviemgrController@uploadImg');

    //上传电影图片
    Route::post('upload/uploadPhoto','UploadFileController@uploadPhoto');

    //评论管理
    Route::get('commentmgr/getAllComments','CommentmgrController@getAllComments');
    Route::post('commentmgr/delComment_be','CommentmgrController@delComment_be');

    //收藏管理
    Route::get('collectmgr/getAllCollects','CollectmgrController@getAllCollects');
    Route::post('collectmgr/delCollect_be','CollectmgrController@delCollect_be');
});












