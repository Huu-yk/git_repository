<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="fa fa-home"></i> 自述</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="ms-doc">
            <h3>README.md</h3>
            <article>
                <h1>manage-system</h1>
                <p>Laravel5.4 + Vue2 + ElementUI 后台管理系统</p>
                <h2>前言</h2>
                <p>基于Laravel5.4，Vue2，ElementUI开发的后台SPA</p>
                <p>基于Bootstrap3，Vue2 设计前台页面</p>
                <h2>要点</h2>
                <el-checkbox disabled checked>Laravel 组件权限控制</el-checkbox>
                <br>
                <el-checkbox disabled checked>Laravel RESTful控制器</el-checkbox>
                <br>
                <h2>功能</h2>
                <el-checkbox disabled checked>登录/注册/注销/重置密码</el-checkbox>
                <br>
                <el-checkbox disabled checked>用户管理</el-checkbox>
                <br>
                <el-checkbox disabled checked>角色管理</el-checkbox>
                <br>
                <el-checkbox disabled checked>权限管理</el-checkbox>
                <br>
                <el-checkbox disabled checked>标签管理</el-checkbox>
                <br>
                <el-checkbox disabled checked>电影管理</el-checkbox>
                <br>
                <el-checkbox disabled checked>评论管理</el-checkbox>
                <br>
                <el-checkbox disabled checked>收藏管理</el-checkbox>
                <br>
            </article>
        </div>

    </div>
</template>

<script>
    export default {
        data: function(){
            return {}
        }
    }
</script>

<style scoped>
    .ms-doc{
        width:100%;
        max-width: 980px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    }
    .ms-doc h3{
        padding: 9px 10px 10px;
        margin: 0;
        font-size: 14px;
        line-height: 17px;
        background-color: #f5f5f5;
        border: 1px solid #d8d8d8;
        border-bottom: 0;
        border-radius: 3px 3px 0 0;
    }
    .ms-doc article{
        padding: 45px;
        word-wrap: break-word;
        background-color: #fff;
        border: 1px solid #ddd;
        border-bottom-right-radius: 3px;
        border-bottom-left-radius: 3px;
    }
    .ms-doc article h1{
        font-size:32px;
        padding-bottom: 10px;
        margin-bottom: 15px;
        border-bottom: 1px solid #ddd;
    }
    .ms-doc article h2 {
        margin: 24px 0 16px;
        font-weight: 600;
        line-height: 1.25;
        padding-bottom: 7px;
        font-size: 24px;
        border-bottom: 1px solid #eee;
    }
    .ms-doc article p{
        margin-bottom: 15px;
        line-height: 1.5;
    }
    .ms-doc article .el-checkbox{
        margin-bottom: 5px;
    }
</style>