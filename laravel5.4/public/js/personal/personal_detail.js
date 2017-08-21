var vm = new Vue({
    el:'#the_body',
    data:{
        userinfo:[],
        commentsdata:[],
        collectsdata:[],

    },
    created:function () {
        this.getMyres()
    },
    computed:{

    },
    methods:{
        getMyres:function () {
          axios.get('/usermgr/getMyres')
              .then(function (response) {
              this.userinfo = response.data
          }.bind(this)).catch(function (response) {
              console.log(response)
          }.bind(this))
        },
        editMyres:function(){
            //数据处理
            if(this.userinfo.sex != null || this.userinfo.sex != ''){
                if(this.userinfo.sex != '男' && this.userinfo.sex != '女' ){
                    toastr.warning('请填写正确的性别！')
                    return
                }
            }
            var mytele=/^[1][3,4,5,7,8][0-9]{9}$/;
            if(this.userinfo.telephone != ''){
                if(!mytele.test(this.userinfo.telephone)){
                    toastr.error('手机号码格式错误！')
                    return
                }
            }
            if(this.userinfo.name == ''){
                toastr.error('请输入名称！')
                return
            }

            axios.post('/usermgr/editMyres',{
                id:this.userinfo.id,
                name:this.userinfo.name,
                tele:this.userinfo.telephone,
                sex:this.userinfo.sex,
                birth:this.userinfo.birthday,
                edu:this.userinfo.education,
                address:this.userinfo.address
            }).then(function (response) {
                toastr.success('编辑成功！')
                this.getMyres()
            }.bind(this)).catch(function (response) {
                toastr.error('编辑失败！')
            }.bind(this))
        },
        getMycomments:function () {
            axios.post('/commentmgr/getMyComments',{
                uid:this.userinfo.id
            }).then(function (response) {
                if(response.data != 0){
                    this.commentsdata = response.data
                    toastr.success('获取成功！')
                }else{
                    this.commentsdata = []
                    toastr.success('列表为空！')
                }
            }.bind(this)).catch(function (response) {
                console.log(response)
                toastr.error('获取失败！')
            }.bind(this))
        },
        deleteComment:function(id){
            axios.post('/commentmgr/deleteComment',{
                commentid:id
            }).then(function (response) {
                toastr.success('删除成功！')
                this.getMycomments()
            }.bind(this)).catch(function (response) {
                toastr.error('删除失败！')
            }.bind(this))
        },
        getMycollects:function () {
            axios.post('/collectmgr/getMyCollects',{
                uid:this.userinfo.id
            }).then(function (response) {
                if(response.data != 0){
                    this.collectsdata = response.data
                    toastr.success('获取成功！')
                }else{
                    this.collectsdata = []
                    toastr.success('列表为空！')
                }
            }.bind(this)).catch(function (response) {
                console.log(response)
                toastr.error('获取失败！')
            }.bind(this))
        },
        deleteCollect:function (id) {
            axios.post('/collectmgr/deleteCollect',{
                collectid:id
            }).then(function (response) {
                toastr.success('操作成功！')
                this.getMycollects()
            }.bind(this)).catch(function (response) {
                toastr.error('操作失败！')
            }.bind(this))
        },
    },
    watch:{

    },
    filters:{

    }
})