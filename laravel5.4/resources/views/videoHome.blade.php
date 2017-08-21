<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>电影网首页</title>
    <link href="../css/app.css" rel="stylesheet">
    <link href="../css/plugin.css" rel="stylesheet">
</head>
<body>
<div class="container">
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

        </div>
    </div>

    <div class="container" style="margin-top: 55px;">
        <div class="row clearfix">
            <div class="col-md-12 column">
                <div class="carousel slide" id="carousel-67097">
                    <ol class="carousel-indicators">
                        <li data-slide-to="0" data-target="#carousel-67097" class="active">
                        </li>
                        <li data-slide-to="1" data-target="#carousel-67097">
                        </li>
                        <li data-slide-to="2" data-target="#carousel-67097" >
                        </li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="item active">
                            <a href="/video/1">
                            <img alt="" src="../images/default.jpg" /></a>
                            <div class="carousel-caption">
                                <h4>

                                </h4>
                                <p>
                                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                                </p>
                            </div>
                        </div>
                        <div class="item">
                            <a href="/video/1">
                                <img alt="" src="../images/default1.jpg" /></a>
                            <div class="carousel-caption">
                                <h4>

                                </h4>
                                <p>
                                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                                </p>
                            </div>
                        </div>
                        <div class="item ">
                            <a href="/video/1">
                                <img alt="" src="../images/default2.jpg" /></a>
                            <div class="carousel-caption">
                                <h4>

                                </h4>
                                <p>
                                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                                </p>
                            </div>
                        </div>
                    </div> <a class="left carousel-control" href="#carousel-67097" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a> <a class="right carousel-control" href="#carousel-67097" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a>
                </div>
            </div>
        </div>
    </div>

    <div class="container" style="margin-top: 30px;">
        <div class="row clearfix">
            <div class="col-md-12 column">
                <div class="col-md-offset-1 col-md-8">
                <table class="table table-condensed table-hover">
                    <thead>

                    </thead>
                    <tbody>
                    <tr>
                        <td width="100px">
                            电影标签
                        </td>
                        <td>
                            <span class="label label-default" style="margin-right:10px;">动作片</span>
                            <span class="label label-primary" style="margin-right:10px;">剧情片</span>
                            <span class="label label-success" style="margin-right:10px;">喜剧片</span>
                            <span class="label label-info" style="margin-right:10px;">科幻片</span>
                            <span class="label label-warning" style="margin-right:10px;">恐怖片</span>
                            <span class="label label-danger" style="margin-right:10px;">战争片</span>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            电影星级
                        </td>
                        <td >
                            <span class="label label-warning" style="margin-right:10px;">5星</span>
                            <span class="label label-warning" style="margin-right:10px;">4星</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            上映时间
                        </td>
                        <td >
                            <span class="label label-default" style="margin-right:10px;">最近</span>
                            <span class="label label-default" style="margin-right:10px;">更早</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            播放数量
                        </td>
                        <td >
                            <span class="label label-success" style="margin-right:10px;">从高到低</span>
                            <span class="label label-danger" style="margin-right:10px;">从低到高</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            评论数量
                        </td>
                        <td >
                            <span class="label label-success" style="margin-right:10px;">从高到低</span>
                            <span class="label label-danger" style="margin-right:10px;">从低到高</span>
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    </div>

    <div class="container" style="margin-top: 20px;">
        <div class="row clearfix">
            <div class="col-md-12 column">
                <h3 class="text-left">
                   动画
                </h3>
                <div class="row">
                    <div class="col-md-4">
                        <div class="thumbnail">
                            <img alt="300x200" style="width: 300px;height: 450px;"  src="../photos/6.jpg" />
                            <div class="caption">
                                <h3>
                                    你的名字。
                                </h3>
                                <p>
                                    在远离大都会的小山村，住着巫女世家出身的高中女孩宫水三叶（上白石萌音 配音）。校园和家庭的原因本就让她充满烦恼，而近一段时间发生的奇怪事件，又让三叶摸不清头脑。不知从何时起，三叶在梦中就会变成一个住在东京的高中男孩。那里有陌生的同学和朋友，有亲切的前辈和繁华的街道，一切都是如此诱人而真实。另一方面，住在东京的高中男孩立花泷（神木隆之介 配音）则总在梦里来到陌生的小山村，以女孩子的身份过着全新的生活。许是受那颗神秘彗星的影响，立花和三叶在梦中交换了身份。他们以他者的角度体验着对方的人生，这期间有愤怒、有欢笑也有暖心。只是两人并不知道，身份交换的背后隐藏着重大而锥心的秘密……
                                </p>
                                <p>
                                    <a class="btn btn-primary" href="/video/1"><i class="fa fa-play">  &nbsp;播 放</i></a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="thumbnail">
                            <img alt="300x200" style="width: 300px;height: 450px;"  src="../photos/2.jpg" />
                            <div class="caption">
                                <h3>
                                    哆啦A梦：南极大冒险
                                </h3>
                                <p>
                                    夏天来了，经不住大雄（大原惠美 配音）的百般纠缠，哆啦A梦（水田山葵 配音）第一次同意带着小伙伴们来到南极，并建造了专属的南极乐园。 没想到这场消夏之旅，被偶然发现的金环打断，快乐的旅程就此中止，他们来到十万年前的南极。这一次，哆啦A梦面临生死考验，地球也面临全面冻结的危险。没有了哆啦A梦，小伙伴们只能团结一心，才能拯救地球！
                                </p>
                                <p>
                                    <a class="btn btn-primary" href="/video/1"><i class="fa fa-play">  &nbsp;播 放</i></a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="thumbnail">
                            <img alt="300x200" style="width: 300px;height: 450px;"  src="../photos/7.jpg" />
                            <div class="caption">
                                <h3>
                                    大鱼海棠
                                </h3>
                                <p>
                                    所有活着的人类，都是海里一条巨大的鱼；出生的时候他们从海的此岸出发。他们的生命就像横越大海，有时相遇，有时分开……死的时候，他们便到了岸，各去各的世界。

                                    　　四十五亿年前，这个星球上，只有一片汪洋大海，和一群古老的大鱼。在与人类世界平行的空间里，生活着一个规规矩矩、遵守秩序的族群，他们为神工作，掌管世界万物运行规律，也掌管人类的灵魂。他们的天空与人类世界的大海相连。他们既不是神，也不是人，他们是“其他人”。

                                    　　十六岁生日那天，居住在“神之围楼”里的一个名叫椿（季冠霖 配音）的女孩变作一条海豚到人间巡礼，被大海中的一张网困住，一个人类男孩因为救她而落入深海死去。为了报恩，为了让人类男孩复活，她需要在自己的世界里，历经种种困难与阻碍，帮助死后男孩的灵魂——一条拇指那么大的小鱼，成长为一条比鲸更巨大的鱼并回归大海。
                                </p>
                                <p>
                                    <a class="btn btn-primary" href="/video/1"><i class="fa fa-play">  &nbsp;播 放</i></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="container" style="margin-top: 20px;">
        <div class="row clearfix">
            <div class="col-md-12 column">
                <h3 class="text-left">
                   其他
                </h3>
                <div class="row">
                    <div class="col-md-4">
                        <div class="thumbnail">
                            <img alt="300x200" src="../photos/1.jpg" style="width: 300px;height: 450px;" />
                            <div class="caption">
                                <h3>
                                    摔跤吧！爸爸
                                </h3>
                                <p>
                                    马哈维亚·辛格·珀尕（阿米尔·汗 Aamir Khan 饰）曾是印度国家摔跤冠军，因生活所迫放弃摔跤。他希望让儿子可以帮他完成梦想——赢得世界级金牌。结果生了四个女儿本以为梦想就此破碎的辛格却意外发现女儿身上的惊人天赋，看到冠军希望的他决定不能让女儿的天赋浪费，像其他女孩一样只能洗衣做饭过一生 ，再三考虑之后，与妻子约定一年时间按照摔跤手的标准训练两个女儿：换掉裙子 、剪掉了长发，让她们练习摔跤，并赢得一个又一个冠军，最终赢来了成为榜样激励千千万万女性的机会……
                                </p>
                                <p>
                                    <a class="btn btn-primary" href="/video/1"><i class="fa fa-play">  &nbsp;播 放</i></a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="thumbnail">
                            <img alt="300x200" style="width: 300px;height: 450px;"  src="../photos/3.jpg" />
                            <div class="caption">
                                <h3>
                                    神奇女侠
                                </h3>
                                <p>
                                    戴安娜（盖尔·加朵 Gal Gadot 饰）是女王希波吕忒（康妮·尼尔森 Connie Nielsen 饰）的女儿，自幼生活在天堂岛上。巨大的屏障将这座岛屿同外界的纷纷扰扰隔开犹如一个世外桃源，而岛上生活着的亦都是女性。在女武官安提奥普（罗宾·莱特 Robin Wright 饰）的教导之下，戴安娜习得了高强的武艺，而她的体内，似乎隐藏着某种强大的未知力量。

                                    　　一场意外中，一位名为史蒂夫（克里斯·派恩 Chris Pine 饰）的男子来到了岛上，从他口中，戴安娜得知外面的世界正在经历战争的磨难，而造成这一切的罪魁祸首，是战神阿瑞斯（大卫·休里斯 David Thewlis 饰）。为了拯救人类于水火之中，戴安娜依然拿起了长剑与盾牌，发誓要彻底摧毁阿瑞斯的阴谋。
                                </p>
                                <p>
                                    <a class="btn btn-primary" href="/video/1"><i class="fa fa-play">  &nbsp;播 放</i></a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="thumbnail">
                            <img alt="300x200" style="width: 300px;height: 450px;"  src="../photos/4.jpg" />
                            <div class="caption">
                                <h3>
                                    嫌疑人X的献身
                                </h3>
                                <p>
                                    在刑警学院任职的物理天才唐川（王凯 饰）与中学教师石泓（张鲁一 饰）年少相识，因彼此对数学的共同兴趣而惺惺相惜，多年后唐川在调查一桩杀人案时， 身为石泓邻居的陈婧（林心如 饰）被列入警方的“嫌疑人”之中，石泓与唐川因此再度重逢，而唐川却在调查中发现了更大的秘密……被迫站在对立面的唐川、石泓由此展开了一场高智商对决，一步步推动故事走向既震撼人心又令人扼腕的结局。
                                </p>
                                <p>
                                    <a class="btn btn-primary" href="/video/1"><i class="fa fa-play">  &nbsp;播 放</i></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</div>
</body>
<style>
    p {
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        word-break: break-all;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
    }
</style>
<script src="../js/jquery-3.2.1.min.js"></script>
<script src="../js/bootstrap.min.js"></script>
<script>
    var scrolltotop={
        setting:{
            startline:100, //起始行
            scrollto:0, //滚动到指定位置
            scrollduration:400, //滚动过渡时间
            fadeduration:[500,100] //淡出淡现消失
        },
        controlHTML:'<img src="../images/totop.png" style="width:50px; height:50px; border:0;" />', //返回顶部按钮

        controlattrs: { offsetx: (jQuery(window).width() - 1112) / 2 - 46, offsety: 93 }, //返回按钮固定位置
        anchorkeyword:"#top",
        state:{
            isvisible:false,
            shouldvisible:false
        },scrollup:function(){
            if(!this.cssfixedsupport){
                this.$control.css({opacity:0});
            }
            var dest=isNaN(this.setting.scrollto)?this.setting.scrollto:parseInt(this.setting.scrollto);
            if(typeof dest=="string"&&jQuery("#"+dest).length==1){
                dest=jQuery("#"+dest).offset().top;
            }else{
                dest=0;
            }
            this.$body.animate({scrollTop:dest},this.setting.scrollduration);
        },keepfixed:function(){
            var $window = jQuery(window);
            var controlx=$window.scrollLeft()+$window.width()-this.$control.width()-this.controlattrs.offsetx;
            var controly = $window.scrollTop() + $window.height() - this.$control.height() - this.controlattrs.offsety;
            this.$control.css({left:controlx+"px",top:controly+"px"});
        },togglecontrol:function(){
            var scrolltop=jQuery(window).scrollTop();
            if(!this.cssfixedsupport){
                this.keepfixed();
            }
            this.state.shouldvisible=(scrolltop>=this.setting.startline)?true:false;
            if(this.state.shouldvisible&&!this.state.isvisible){
                this.$control.stop().animate({opacity:1},this.setting.fadeduration[0]);
                this.state.isvisible=true;
            }else{
                if(this.state.shouldvisible==false&&this.state.isvisible){
                    this.$control.stop().animate({opacity:0},this.setting.fadeduration[1]);
                    this.state.isvisible=false;
                }
            }
        },init:function(){
            jQuery(document).ready(function ($) {
                var mainobj=scrolltotop;
                var iebrws=document.all;
                mainobj.cssfixedsupport=!iebrws||iebrws&&document.compatMode=="CSS1Compat"&&window.XMLHttpRequest;
                mainobj.$body=(window.opera)?(document.compatMode=="CSS1Compat"?$("html"):$("body")):$("html,body");
                mainobj.$control=$('<div id="topcontrol">'+mainobj.controlHTML+"</div>").css({position:mainobj.cssfixedsupport?"fixed":"absolute",bottom:mainobj.controlattrs.offsety,right:mainobj.controlattrs.offsetx,opacity:0,cursor:"pointer"}).attr({title:"返回顶部"}).click(function(){mainobj.scrollup();return false;}).appendTo("body");if(document.all&&!window.XMLHttpRequest&&mainobj.$control.text()!=""){mainobj.$control.css({width:mainobj.$control.width()});}mainobj.togglecontrol();
                $('a[href="'+mainobj.anchorkeyword+'"]').click(function(){mainobj.scrollup();return false;});
                $(window).bind("scroll resize",function(e){mainobj.togglecontrol();});
            });
        }};
    scrolltotop.init();
</script>
</html>

