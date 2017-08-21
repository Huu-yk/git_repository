<template>
    <div class="header">
        <div class="logo">后台管理系统</div>
        <div class="user-info">
            <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                    <img class="user-logo" src="../../../img/head.jpg">
                    {{name}}
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="myresources">个人资料</el-dropdown-item>
                    <el-dropdown-item command="loginout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                name: ''
            }
        },
        created:function(){
            this.getMyresources()
        },
        computed:{
            username(){
                //let username = localStorage.getItem('ms_username');
                const self = this
                return self.name
            }
        },
        methods:{
            handleCommand(command) {
                if(command == 'loginout'){
                    //localStorage.removeItem('ms_username')
                    this.axios.post('/logout')
                        .then(function (response) {
                            window.location.href="/";
                        })
                        .catch(function (response) {
                            console.log(response)
                        });
                }
                if(command == 'myresources'){
                    window.location.href = '/personal'
                }
            },
            getMyresources:function(){
                this.axios.get('/usermgr/getMyres')
                    .then(function (response) {
                        this.name = response.data.name
                    }.bind(this))
                    .catch(function (response) {
                        console.log(response)
                    }.bind(this));
            }
        }
    }
</script>
<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        line-height: 70px;
        color: #fff;
    }
    .header .logo{
        float: left;
        width:250px;
        text-align: center;
    }
    .user-info {
        float: right;
        padding-right: 50px;
        font-size: 16px;
        color: #fff;
    }
    .user-info .el-dropdown-link{
        position: relative;
        display: inline-block;
        padding-left: 50px;
        color: #fff;
        cursor: pointer;
        vertical-align: middle;
    }
    .user-info .user-logo{
        position: absolute;
        left:0;
        top:15px;
        width:40px;
        height:40px;
        border-radius: 50%;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
</style>
