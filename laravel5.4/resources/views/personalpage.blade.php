<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Personal</title>
    <link href="../css/app.css" rel="stylesheet">
    <link href="../css/plugin.css" rel="stylesheet">
    <link href="../css/fileinput/fileinput.css" rel="stylesheet">
</head>
<body >
<div class="container" id="the_body">
    <div class="row clearfix">
        <div class="col-md-12 column">
            <nav class="navbar navbar-default navbar-inverse navbar-fixed-top " role="navigation" >
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button> <a class="navbar-brand" href="/">Here</a>
                </div>

                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <form class="navbar-form navbar-left" role="search">
                        <div class="form-group">
                            <input type="text" class="form-control" autofocus>
                        </div> <button type="submit" class="btn btn-default"><i class="fa fa-search fa-lg"></i></button>
                    </form>
                    <ul class="nav navbar-nav navbar-right">
                        @if(Auth::user()!='' && Auth::user()->can('access-backend'))
                            <li>
                                <a href="/home" style="padding-right: 0">Backend&nbsp;&nbsp;&nbsp;</a>
                            </li>
                            <li><a style="padding:14px 0px;">/</a></li>
                            <li>
                                <a href="/" style="padding-right: 0">Home&nbsp;&nbsp;&nbsp;</a>
                            </li>
                            <li><a style="padding:14px 15px 14px 0px;">/</a></li>
                            <li>
                                <a href="{{ route('logout') }}"
                                   onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();" style="padding-left: 0px;padding-right: 25px">
                                    Logout
                                </a>
                                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                    {{ csrf_field() }}
                                </form>
                            </li>
                        @elseif(Auth::user()!='')
                            <li>
                                <a href="/" style="padding-right: 0">Home&nbsp;&nbsp;&nbsp;</a>
                            </li>
                            <li><a style="padding:14px 15px 14px 0px;">/</a></li>
                            <li>
                                <a href="{{ route('logout') }}"
                                   onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();" style="padding-left: 0px;padding-right: 25px">
                                    Logout
                                </a>
                                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                    {{ csrf_field() }}
                                </form>
                            </li>
                        @else
                            <li>
                                <a href="/login">Login&nbsp;&nbsp;&nbsp;</a>
                            </li>
                        @endif
                    </ul>
                </div>
            </nav>

            <div class="container" style="margin-top: 60px">
                <div class="row clearfix">
                    <div class="col-md-8 column">
                        <div class="tabbable" id="tabs-854940">
                            <ul class="nav nav-tabs">
                                <li class="active">
                                    <a href="#myresources" data-toggle="tab">个人资料</a>
                                </li>
                                <li>
                                    <a href="#mycomments" data-toggle="tab" @click="getMycomments">评论管理</a>
                                </li>
                                <li>
                                    <a href="#mycollects" data-toggle="tab" @click="getMycollects">收藏管理</a>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <div class="tab-pane active" id="myresources">
                                    <div style="margin-top: 20px">
                                        <div class="col-md-5 column">
                                            <form class="form-horizontal" role="form">
                                                <div class="form-group">
                                                    <label for="username" class="col-sm-2 control-label myres">名称</label>
                                                    <div class="col-sm-10">
                                                        <input class="form-control" id="username" v-model="userinfo.name" type="text" readonly style="width: 250px"/>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="email" class="col-sm-2 control-label myres">邮箱</label>
                                                    <div class="col-sm-10">
                                                        <input class="form-control" id="email" v-model="userinfo.email" type="text" readonly style="width: 250px"/>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="telephone" class="col-sm-2 control-label myres">电话</label>
                                                    <div class="col-sm-10">
                                                        <input class="form-control" id="telephone" v-model="userinfo.telephone" type="text" readonly style="width: 250px"/>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="education" class="col-sm-2 control-label myres">头像</label>
                                                    <div class="col-sm-10" v-if="userinfo.head_portrait!=null">
                                                        <a href="javascript:;" data-toggle="modal" data-target="#uploadImgModal" title="点击更改"><img :src="userinfo.head_portrait" width="64px" height="64px"></a>
                                                    </div>
                                                    <div class="col-sm-10" v-if="userinfo.head_portrait==null">
                                                        <button class="btn btn-primary" data-toggle="modal" data-target="#uploadImgModal">上传</button>
                                                    </div>
                                                </div>

                                            </form>
                                        </div>
                                        <div class="col-md-4 column">
                                            <form class="form-horizontal" role="form">
                                                <div class="form-group">
                                                    <label for="sex" class="col-sm-2 control-label myres">性别</label>
                                                    <div class="col-sm-10">
                                                        <input class="form-control" id="sex" v-model="userinfo.sex" type="text" readonly style="width: 250px"/>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="birthday" class="col-sm-2 control-label myres">生日</label>
                                                    <div class="col-sm-10">
                                                        <input class="form-control" id="birthday" v-model="userinfo.birthday" type="text" readonly style="width: 250px"/>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="education" class="col-sm-2 control-label myres">学历</label>
                                                    <div class="col-sm-10">
                                                        <input class="form-control" id="education" type="text" v-model="userinfo.education" readonly style="width: 250px"/>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="address" class="col-sm-2 control-label myres">地址</label>
                                                    <div class="col-sm-10">
                                                        <input class="form-control" id="address" type="text" v-model="userinfo.address" readonly style="width: 250px"/>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <div class="col-sm-offset-2 col-sm-10">
                                                        <button class="btn btn-primary" data-toggle="modal" data-target="#edit">编 辑</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                </div>
                                <div class="tab-pane" id="mycomments">
                                    <div>
                                        <table class="table table-striped">
                                            <caption>评论列表</caption>
                                            <thead>
                                            <tr >
                                                <th>视频名称</th>
                                                <th>评论时间</th>
                                                <th>评论内容</th>
                                                <th>操作</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr v-for="c in commentsdata">
                                                <td v-text="c.name"></td>
                                                <td v-text="c.posted_time"></td>
                                                <td v-text="c.content"></td>
                                                <td><button class="btn btn-danger btn-sm" @click="deleteComment(c.id)">删除</button></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="tab-pane" id="mycollects">
                                    <div>
                                        <table class="table table-striped">
                                            <caption>收藏列表</caption>
                                            <thead>
                                            <tr >
                                                <th>视频名称</th>
                                                <th>收藏时间</th>
                                                <th>操作</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr v-for="c in collectsdata">
                                                <td v-text="c.name"></td>
                                                <td v-text="c.collect_time"></td>
                                                <td><button class="btn btn-danger btn-sm" @click="deleteCollect(c.id)">取消收藏</button></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div class="modal fade" id="uploadImgModal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h5 class="modal-title" id="myModalLabel">提示</h5>
                </div>
                <div class="col-md-12">
                    <form enctype="multipart/form-data" method="POST" style="margin-top: 10px" action="/upload/uploadImage">
                        {{ csrf_field() }}
                        <input id="file-uploadimg" class="file" type="file" name="myimage" multiple data-min-file-count="1" data-show-upload="false" >
                        <div id="errorBlock" class="help-block"></div>
                        <br>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">取 消</button>
                    <!--<button type="button" class="btn btn-primary" >上 传</button>-->
                </div>
            </div>
        </div>
    </div>


    <div class="modal fade" id="edit" tabindex="-1" role="dialog"  aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title" id="myModalLabel">编辑信息</h4>
                </div>
                <div >
                    <div class="col-md-12" style="margin-top: 10px;">
                    <div class="col-md-6 column">
                        <form class="form-horizontal" role="form">
                            <div class="form-group" style="margin-bottom:0px">
                                <label for="username" class="col-sm-2 control-label editform" >名称</label>
                                <div class="col-sm-10">
                                    <input class="form-control" id="username" v-model="userinfo.name" type="text" />
                                </div>
                            </div>
                            <div class="form-group" style="margin-bottom:0px">
                                <label for="email" class="col-sm-2 control-label editform" >邮箱</label>
                                <div class="col-sm-10">
                                    <input class="form-control" id="email" v-model="userinfo.email" type="text"  />
                                </div>
                            </div>
                            <div class="form-group" style="margin-bottom:0px">
                                <label for="address" class="col-sm-2 control-label editform" >地址</label>
                                <div class="col-sm-10">
                                    <input class="form-control" id="address" type="text" v-model="userinfo.address" />
                                </div>
                            </div>
                            <div class="form-group" style="margin-bottom:0px">
                                <label for="education" class="col-sm-2 control-label editform" >头像</label>
                                <div class="col-sm-10">
                                    <img alt="64x64" width="80px" height="80px" src="../images/default7.jpg" />
                                </div>
                            </div>

                        </form>
                    </div>
                    <div class="col-md-6 column">
                        <form class="form-horizontal" role="form">
                            <div class="form-group" style="margin-bottom:0px">
                                <label for="sex" class="col-sm-2 control-label editform" >性别</label>
                                <div class="col-sm-10">
                                    <input class="form-control" id="sex" v-model="userinfo.sex" type="text"  />
                                </div>
                            </div>
                            <div class="form-group" style="margin-bottom:0px">
                                <label for="telephone" class="col-sm-2 control-label editform" >电话</label>
                                <div class="col-sm-10">
                                    <input class="form-control" id="telephone" v-model="userinfo.telephone" type="text"  />
                                </div>
                            </div>
                            <div class="form-group" style="margin-bottom:0px">
                                <label for="birthday" class="col-sm-2 control-label editform" >生日</label>
                                <div class="col-sm-10">
                                    <input class="form-control" id="birthday" v-model="userinfo.birthday" type="text" />
                                </div>
                            </div>
                            <div class="form-group" style="margin-bottom:0px">
                                <label for="edu" class="col-sm-2 control-label editform" >学历</label>
                                <div class="col-sm-10">
                                    <input class="form-control" id="edu" v-model="userinfo.education" type="text" />
                                </div>
                            </div>

                        </form>
                    </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal" @click="editMyres">保存</button>
                </div>
            </div>
        </div>
    </div>


</div>
</body>
<script src="../js/jquery-3.2.1.min.js"></script>
<script src="../js/bootstrap.min.js"></script>
<script src="../js/toastr.js"></script>
<script src="../js/vue.js"></script>
<script src="../js/axios.js"></script>
<script src="../js/fileinput/fileinput.js"></script>
<script src="../js/personal/personal_detail.js"></script>
<style>
    .editform{
        padding-right: 0px;
        height: 64px;
        padding-left: 0px;
        padding-bottom: 0px;
        width: 30px;
    }
    .myres{
        padding-right: 0px;
        height: 64px;
        padding-left: 0px;
        padding-bottom: 0px;
        width: 30px;
    }
</style>
</html>

