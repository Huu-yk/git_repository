import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
        routes: [
            {
                path: '/',
                redirect:'/readme'
                //component:''
            },
            {
                path: '/readme',
                component: resolve => require(['../components/common/Home.vue'], resolve),
                    children:[
                    {
                        path: '/',
                        component: resolve => require(['../components/page/Readme.vue'], resolve)
                    },
                    {
                        path: '/usermgr',
                        meta:{
                            auth:true
                        },
                        component: resolve => require(['../components/page/Usermgr.vue'], resolve)
                    },
                    {
                        path: '/adminmgr',
                        meta:{
                            auth:true
                        },
                        component: resolve => require(['../components/page/Adminmgr.vue'], resolve)
                    },
                    {
                        path: '/rolemgr',
                        meta:{
                            auth:true
                        },
                        component: resolve => require(['../components/page/Rolemgr.vue'], resolve)
                    },
                    {
                        path: '/permgr',
                        meta:{
                            auth:true
                        },
                        component: resolve => require(['../components/page/Permgr.vue'], resolve)
                    },
                    {
                        path: '/uploadmovie',
                        meta:{
                            auth:true
                        },
                        component: resolve => require(['../components/page/UploadMovie.vue'], resolve)
                    },
                    {
                        path: '/collectmgr',
                        meta:{
                            auth:true
                        },
                        component: resolve => require(['../components/page/Collectmgr.vue'], resolve)
                    },
                    {
                        path: '/commentmgr',
                        meta:{
                            auth:true
                        },
                        component: resolve => require(['../components/page/Commentmgr.vue'], resolve)
                    },
                    {
                        path: '/moviemgr',
                        meta:{
                            auth:true
                        },
                        component: resolve => require(['../components/page/Moviemgr.vue'], resolve)
                    },
                    {
                        path: '/tagmgr',
                        meta:{
                            auth:true
                        },
                        component: resolve => require(['../components/page/Tagmgr.vue'], resolve)
                    },
                ]
            },
        ]
    })

