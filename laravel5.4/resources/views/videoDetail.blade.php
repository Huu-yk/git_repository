<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>哆啦A梦：南极大冒险</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link href="../css/app.css"  rel="stylesheet">
    <link href="../css/plugin.css" rel="stylesheet">
    <link href="../themes/default/css/umeditor.css" type="text/css" rel="stylesheet">
    <link href="../css/video/video_detail.css" rel="stylesheet">
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
                                <a href="/personal" style="padding-right: 0">Personal&nbsp;&nbsp;&nbsp;</a>
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
                                <a href="/personal" style="padding-right: 0">Personal&nbsp;&nbsp;&nbsp;</a>
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

            <div class="row clearfix" style="margin-top: 60px">
                <div class="col-md-8 column">
                    <div id='myplayer'></div>
                </div>
                <div class="col-md-4 column">
                    <div class="panel panel-success">
                        <div class="panel-heading">
                            <h3 class="panel-title">电影介绍</h3>
                        </div>
                        <table class="table table-bordered table-hover">
                            <tr><td width="100px">片 名</td><td v-text="videodata.name"></td></tr>
                            <tr><td>标 签</td><td v-text="videodata.tag_name"></td></tr>
                            <tr><td>片 长</td><td v-text="videodata.running_time"></td></tr>
                            <tr><td>地 区</td><td v-text="videodata.area"></td></tr>
                            <tr><td>星 级</td><td v-text="videodata.star"></td></tr>
                            <tr><td>上映时间</td><td v-text="videodata.release_time"></td></tr>
                            <tr><td>播放次数</td><td>23</td></tr>
                            <tr><td>评论数量</td><td>2</td></tr>
                            <tr><td>影片介绍</td><td v-text="videodata.introduce"></td></tr>
                        </table>
                    </div>
                </div>
            </div>

            <div class="row clearfix">
                <div class="col-md-12 column">
                    <div class="col-md-offset-3">
                        <div class="btn-group btn-group-lg" style="margin-top: 20px">
                            <button class="btn btn-default like" type="button" @click="click_like"><em class="fa fa-heart-o fa-lg"></em> 喜 欢</button>
                            <button class="btn btn-default collect" type="button" @click="collectMovie"><em class="fa fa-paperclip fa-lg"></em> 收藏电影</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row clearfix">
                <div class="col-md-12 column">
                    <h3 class="text-left">
                        评 论 区
                    </h3>
                    <div v-if="commentsdata">
                        <div class="media well" v-for="comment in commentsdata">
                            <a href="#" class="pull-left"><img src="../images/default7.jpg" class="media-object img-circle" alt='' /></a>
                            <div class="media-body">
                                <div style="display: inline">
                                    <span v-text="comment.name" style="font-size: 20px;"></span>&nbsp;&nbsp;
                                    <span v-text="comment.posted_time"></span>
                                </div>
                                </br>
                                <span v-text="comment.content"></span>
                            </div>
                        </div>
                    </div>
                    <div v-if="!commentsdata">
                        <div class="media well">
                            <div class="media-body">
                                <div style="display: inline">
                                    <span>暂无评论</span>&nbsp;&nbsp;
                                </div>
                                </br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row clearfix">
                <div class="col-md-12 column">
                    <h4 class="text-left">
                       发 表 评 论
                    </h4>
                    <div><script type="text/plain" id="myEditor" style="width:1140px;height:240px;">
                        <p></p>
                    </script></div>
                    <div class="clear"></div>
                    <div>
                        <button type="button" class="btn btn-primary" @click="submit_comment" style="float:right;margin:15px 10px 20px 0">发表评论</button>
                    </div>
                </div>
            </div>


            <button class="btn btn-primary btn-lg hidden" id="showModal" data-toggle="modal" data-target="#promptModal"></button>
            <div class="modal fade" id="promptModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h5 class="modal-title" id="myModalLabel">提示</h5>
                        </div>
                        <div class="modal-body">请先登录!</div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">取 消</button>
                            <button type="button" class="btn btn-primary" @click="toLogin">登 录</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
</body>
<script src="../js/jquery-3.2.1.min.js"></script>
<script src="../third-party/template.min.js"></script>
<script src="../js/bootstrap.min.js"></script>
<script src="../js/toastr.js"></script>
<script src="../umeditor.config.js" charset="utf-8" ></script>
<script src="../umeditor.min.js" charset="utf-8"></script>
<script src="../lang/zh-cn/zh-cn.js"></script>
<script src="../js/vue.js"></script>
<script src="../js/axios.js"></script>
<script src="../js//jwplayer/jwplayer.js"></script>
<script src="../js/jwplayer/jwplayer.controls.js"></script>
<script>jwplayer.key="1XjAHokrtWKykp8f4kSZSg4wQI0BgQlvblMGKA==";</script>
<script src="../js/video/video_detail.js"></script>
<script src="../js/video/video_umeditor.js"></script>
</html>