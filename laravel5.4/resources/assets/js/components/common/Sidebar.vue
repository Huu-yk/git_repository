<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    /*{
                        icon: 'el-icon-circle-check',
                        index: 'readme',
                        title: '自述'
                    },
                    {
                        icon: 'fa fa-user fa-lg ',
                        index: '2',
                        title: '用户管理',
                        subs: [
                            {
                                index: 'usermgr',
                                title: '会员管理'
                            },
                        ]
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '3',
                        title: '表格',
                        subs: [
                            {
                                index: 'basetable',
                                title: '基础表格'
                            },
                            {
                                index: 'vuetable',
                                title: 'Vue表格组件'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '4',
                        title: '表单',
                        subs: [
                            {
                                index: 'baseform',
                                title: '基本表单'
                            },
                            {
                                index: 'vueeditor',
                                title: '编辑器'
                            },
                            {
                                index: 'markdown',
                                title: 'markdown'
                            },
                            {
                                index: 'upload',
                                title: '文件上传'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-star-on',
                        index: 'basecharts',
                        title: '图表'
                    },
                    {
                        icon: 'el-icon-upload2',
                        index: 'drag',
                        title: '拖拽'
                    }*/
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
        created:function(){
            this.setUrl()
        },
        methods:{
            getPermissionUrl:function () {
                //this.setUrl(this.accessurl)
            },
            setUrl:function(){
                var url = this.accessurl;
                var len = url.length
                for(var i=0;i<len;i++){
                    if(url[i]['url'] == '/readme'){
                        this.items.push({
                            icon: 'fa fa-home fa-lg fa-fw',
                            index: 'readme',
                            title: '自述'
                        })
                    }
                    if(url[i]['url'] == '/usermgr'){
                        this.items.push({
                            icon: 'fa fa-user fa-lg fa-fw',
                            index: (i+1).toString(),
                            title: '用户管理',
                            subs: [
                                {
                                    index: 'usermgr',
                                    title: '会员管理'
                                },
                                {
                                    index: 'adminmgr',
                                    title: '管理员管理'
                                },
                            ]
                        })
                    }
                    if(url[i]['url'] == '/rolemgr'){
                        this.items.push({
                            icon: 'fa fa-user-circle-o fa-lg fa-fw',
                            index: 'rolemgr',
                            title: '角色管理',

                        })
                    }
                    if(url[i]['url'] == '/permgr'){
                        this.items.push({
                            icon: 'fa fa-paperclip fa-lg fa-fw',
                            index: 'permgr',
                            title: '权限管理',

                        })
                    }
                    if(url[i]['url'] == '/tagmgr'){
                        this.items.push({
                            icon: 'fa fa-tags fa-lg fa-fw',
                            index: 'tagmgr',
                            title: '标签管理',

                        })
                    }
                    if(url[i]['url'] == '/moviemgr'){
                        this.items.push({
                            icon: 'fa fa-video-camera fa-lg fa-fw',
                            index: (i+1).toString(),
                            title: '电影管理',
                            subs: [
                                {
                                    index: 'uploadmovie',
                                    title: '上传电影'
                                },
                                {
                                    index: 'moviemgr',
                                    title: '电影列表'
                                },
                            ]
                        })
                    }
                    if(url[i]['url'] == '/commentmgr'){
                        this.items.push({
                            icon: 'fa fa-info-circle fa-lg fa-fw',
                            index: 'commentmgr',
                            title: '评论管理',

                        })
                    }
                    if(url[i]['url'] == '/collectmgr'){
                        this.items.push({
                            icon: 'fa fa-star-o fa-lg fa-fw',
                            index: 'collectmgr',
                            title: '收藏管理',
                        })
                    }

                }
            },
            checkCurrentUrl:function(){

            }
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #2E363F;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
