var vm = new Vue({
    el:'#the_body',
    data:{
        //视频信息
        videodata:[],
        videoid:'',

        //评论信息
        commentsdata:[],
        comment_text:'',

        //用户信息
        userinfo:[],
    },
    created:function () {
        this.getMovieDetail()
        this.getComments()
    },
    computed:{
        
    },
    methods:{
        playTrailer:function(video) {
            var jwplayerInit = jwplayer('myplayer');
            jwplayerInit.setup({
                flashplayer: '../js/jwplayer/jwplayer.flash.swf',
                file: video,
                width: '760',
                height: '428'
            });
            jwplayerInit.setConfig([{
                repeat: true,
                autostart: true,
                mute: false,
                volume: 100
            }]);
        },
        getMovieDetail:function(){
            var str = window.location.pathname
            this.videoid = str.substring(7,str.length)
            this.videoid = parseInt(this.videoid)
            axios.post('/moviemgr/getDetail',{
                vid:this.videoid
            }).then(function (response) {
                console.log(response)
                var arr = response.data
                if(arr instanceof Array) {
                    this.videodata = response.data[0]
                    this.playTrailer(this.videodata.uri)
                }else{
                    console.log(response)
                }
            }.bind(this)).catch(function (response) {
                console.log(response)
            }.bind(this))
        },
        getComments:function () {
            axios.post('/commentmgr/getComments',{
                vid:this.videoid
            }).then(function (response) {
                this.commentsdata = response.data.comments_data
                this.userinfo = response.data.user
            }.bind(this)).catch(function (response) {
                console.log(response)
            }.bind(this))
        },
        submit_comment:function(){
            if(this.userinfo == ''||this.userinfo == null){
                $('#showModal').click()
            }else{
                var text = UM.getEditor('myEditor').getContent()
                text = text.substring(0,text.length-7)
                axios.post('/commentmgr/postComments',{
                    vid:this.videoid,
                    uid:this.userinfo.id,
                    content:text
                }).then(function (response) {
                    toastr.success('发表评论成功!')
                    this.getComments()
                    UM.getEditor('myEditor').setContent('<p></p>')
                }.bind(this)).catch(function (response) {
                    console.log(response)
                }.bind(this))

            }
        },
        collectMovie:function () {
            if(this.userinfo == ''||this.userinfo == null){
                $('#showModal').click()
            }else{
                if($(".collect").hasClass('btn-default')){
                    $(".collect").addClass('btn-warning')
                    $(".collect").removeClass('btn-default')
                }
                axios.post('/collectmgr/collectMovie',{
                    vid:this.videoid,
                    uid:this.userinfo.id
                }).then(function (response) {
                    toastr.success('收藏成功!')
                }.bind(this)).catch(function (response) {
                    console.log(response)
                }.bind(this))
            }
        },
        click_like:function () {
                if($(".like").hasClass('btn-default')) {
                    $(".like").addClass('btn-danger')
                    $(".like").removeClass('btn-default')
                    toastr.success('感谢您的支持！')
                }
        },
        toLogin:function(){
            window.location.href = '/login'
        }
    },
    watch:{

    },
    filters:{

    }
})