
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

window.Vue = require('vue');
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import router from './router'
import axios from 'axios'
import 'element-ui/lib/theme-default/index.css'
import moment from 'moment'

//import VueResource from 'vue-resource'
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.prototype.moment = moment
Vue.prototype.axios = axios

//前端全局url
var url = [];



//获取权限范围可访问的url
axios.get('/permission')
    .then(function (response) {
        this.url = response.data;
        Vue.prototype.accessurl = this.url
        if(this.url != ''){
            setTimeout(showpage,500);
            function showpage() {
                var app = new Vue({
                    el: '#app',
                    router,
                    template:'<App/>',
                    components:{ App }
                });
            }
        }
    }.bind(this))
    .catch(function (response) {
        console.log(response);
    });

/*
* Vue 路由入口钩子函数
*/
router.beforeEach((to,from,next) => {
    if(to.matched.some( m => m.meta.auth)){
        // 对路由进行验证
        for (var value of this.url) {
            if(value['url'] == to.path){
                next();
            }
        }
    }else{
        next()
    }
});



