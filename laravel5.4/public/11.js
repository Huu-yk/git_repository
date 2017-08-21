webpackJsonp([11],{

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(149)(
  /* script */
  __webpack_require__(239),
  /* template */
  __webpack_require__(251),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\zendstudioworkspace\\laravel5.4\\resources\\assets\\js\\components\\common\\Home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Home.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6f41c306", Component.options)
  } else {
    hotAPI.reload("data-v-6f41c306", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Header_vue__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Sidebar_vue__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Sidebar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Sidebar_vue__);
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        vHead: __WEBPACK_IMPORTED_MODULE_0__Header_vue___default.a, vSidebar: __WEBPACK_IMPORTED_MODULE_1__Sidebar_vue___default.a
    }
});

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(241)

var Component = __webpack_require__(149)(
  /* script */
  __webpack_require__(243),
  /* template */
  __webpack_require__(244),
  /* scopeId */
  "data-v-a71a08aa",
  /* cssModules */
  null
)
Component.options.__file = "D:\\zendstudioworkspace\\laravel5.4\\resources\\assets\\js\\components\\common\\Header.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Header.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a71a08aa", Component.options)
  } else {
    hotAPI.reload("data-v-a71a08aa", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(242);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(150)("46864d15", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.14.5@css-loader/index.js!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-a71a08aa\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./Header.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.14.5@css-loader/index.js!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-a71a08aa\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./Header.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
exports.push([module.i, "\n.header[data-v-a71a08aa] {\n    position: relative;\n    box-sizing: border-box;\n    width: 100%;\n    height: 70px;\n    font-size: 22px;\n    line-height: 70px;\n    color: #fff;\n}\n.header .logo[data-v-a71a08aa]{\n    float: left;\n    width:250px;\n    text-align: center;\n}\n.user-info[data-v-a71a08aa] {\n    float: right;\n    padding-right: 50px;\n    font-size: 16px;\n    color: #fff;\n}\n.user-info .el-dropdown-link[data-v-a71a08aa]{\n    position: relative;\n    display: inline-block;\n    padding-left: 50px;\n    color: #fff;\n    cursor: pointer;\n    vertical-align: middle;\n}\n.user-info .user-logo[data-v-a71a08aa]{\n    position: absolute;\n    left:0;\n    top:15px;\n    width:40px;\n    height:40px;\n    border-radius: 50%;\n}\n.el-dropdown-menu__item[data-v-a71a08aa]{\n    text-align: center;\n}\n", ""]);

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            name: ''
        };
    },

    created: function created() {
        this.getMyresources();
    },
    computed: {
        username: function username() {
            //let username = localStorage.getItem('ms_username');
            var self = this;
            return self.name;
        }
    },
    methods: {
        handleCommand: function handleCommand(command) {
            if (command == 'loginout') {
                //localStorage.removeItem('ms_username')
                this.axios.post('/logout').then(function (response) {
                    window.location.href = "/";
                }).catch(function (response) {
                    console.log(response);
                });
            }
            if (command == 'myresources') {
                window.location.href = '/personal';
            }
        },

        getMyresources: function getMyresources() {
            this.axios.get('/usermgr/getMyres').then(function (response) {
                this.name = response.data.name;
            }.bind(this)).catch(function (response) {
                console.log(response);
            }.bind(this));
        }
    }
});

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "header"
  }, [_c('div', {
    staticClass: "logo"
  }, [_vm._v("后台管理系统")]), _vm._v(" "), _c('div', {
    staticClass: "user-info"
  }, [_c('el-dropdown', {
    attrs: {
      "trigger": "click"
    },
    on: {
      "command": _vm.handleCommand
    }
  }, [_c('span', {
    staticClass: "el-dropdown-link"
  }, [_c('img', {
    staticClass: "user-logo",
    attrs: {
      "src": __webpack_require__(245)
    }
  }), _vm._v("\n                " + _vm._s(_vm.name) + "\n            ")]), _vm._v(" "), _c('el-dropdown-menu', {
    slot: "dropdown"
  }, [_c('el-dropdown-item', {
    attrs: {
      "command": "myresources"
    }
  }, [_vm._v("个人资料")]), _vm._v(" "), _c('el-dropdown-item', {
    attrs: {
      "command": "loginout"
    }
  }, [_vm._v("退出")])], 1)], 1)], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-a71a08aa", module.exports)
  }
}

/***/ }),

/***/ 245:
/***/ (function(module, exports) {

module.exports = "/images/head.jpg?5b5d4d3b9a8261ec2f595c9a2ca50965";

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(247)

var Component = __webpack_require__(149)(
  /* script */
  __webpack_require__(249),
  /* template */
  __webpack_require__(250),
  /* scopeId */
  "data-v-f50648a4",
  /* cssModules */
  null
)
Component.options.__file = "D:\\zendstudioworkspace\\laravel5.4\\resources\\assets\\js\\components\\common\\Sidebar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Sidebar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f50648a4", Component.options)
  } else {
    hotAPI.reload("data-v-f50648a4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(248);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(150)("c210d6d0", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.14.5@css-loader/index.js!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-f50648a4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./Sidebar.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.14.5@css-loader/index.js!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-f50648a4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./Sidebar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
exports.push([module.i, "\n.sidebar[data-v-f50648a4]{\n    display: block;\n    position: absolute;\n    width: 250px;\n    left: 0;\n    top: 70px;\n    bottom:0;\n    background: #2E363F;\n}\n.sidebar > ul[data-v-f50648a4] {\n    height:100%;\n}\n", ""]);

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
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
        };
    },

    computed: {
        onRoutes: function onRoutes() {
            return this.$route.path.replace('/', '');
        }
    },
    created: function created() {
        this.setUrl();
    },
    methods: {
        getPermissionUrl: function getPermissionUrl() {
            //this.setUrl(this.accessurl)
        },
        setUrl: function setUrl() {
            var url = this.accessurl;
            var len = url.length;
            for (var i = 0; i < len; i++) {
                if (url[i]['url'] == '/readme') {
                    this.items.push({
                        icon: 'fa fa-home fa-lg fa-fw',
                        index: 'readme',
                        title: '自述'
                    });
                }
                if (url[i]['url'] == '/usermgr') {
                    this.items.push({
                        icon: 'fa fa-user fa-lg fa-fw',
                        index: (i + 1).toString(),
                        title: '用户管理',
                        subs: [{
                            index: 'usermgr',
                            title: '会员管理'
                        }, {
                            index: 'adminmgr',
                            title: '管理员管理'
                        }]
                    });
                }
                if (url[i]['url'] == '/rolemgr') {
                    this.items.push({
                        icon: 'fa fa-user-circle-o fa-lg fa-fw',
                        index: 'rolemgr',
                        title: '角色管理'

                    });
                }
                if (url[i]['url'] == '/permgr') {
                    this.items.push({
                        icon: 'fa fa-paperclip fa-lg fa-fw',
                        index: 'permgr',
                        title: '权限管理'

                    });
                }
                if (url[i]['url'] == '/tagmgr') {
                    this.items.push({
                        icon: 'fa fa-tags fa-lg fa-fw',
                        index: 'tagmgr',
                        title: '标签管理'

                    });
                }
                if (url[i]['url'] == '/moviemgr') {
                    this.items.push({
                        icon: 'fa fa-video-camera fa-lg fa-fw',
                        index: (i + 1).toString(),
                        title: '电影管理',
                        subs: [{
                            index: 'uploadmovie',
                            title: '上传电影'
                        }, {
                            index: 'moviemgr',
                            title: '电影列表'
                        }]
                    });
                }
                if (url[i]['url'] == '/commentmgr') {
                    this.items.push({
                        icon: 'fa fa-info-circle fa-lg fa-fw',
                        index: 'commentmgr',
                        title: '评论管理'

                    });
                }
                if (url[i]['url'] == '/collectmgr') {
                    this.items.push({
                        icon: 'fa fa-star-o fa-lg fa-fw',
                        index: 'collectmgr',
                        title: '收藏管理'
                    });
                }
            }
        },
        checkCurrentUrl: function checkCurrentUrl() {}
    }
});

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "sidebar"
  }, [_c('el-menu', {
    staticClass: "el-menu-vertical-demo",
    attrs: {
      "default-active": _vm.onRoutes,
      "theme": "dark",
      "unique-opened": "",
      "router": ""
    }
  }, [_vm._l((_vm.items), function(item) {
    return [(item.subs) ? [_c('el-submenu', {
      attrs: {
        "index": item.index
      }
    }, [_c('template', {
      slot: "title"
    }, [_c('i', {
      class: item.icon
    }), _vm._v(_vm._s(item.title))]), _vm._v(" "), _vm._l((item.subs), function(subItem, i) {
      return _c('el-menu-item', {
        key: i,
        attrs: {
          "index": subItem.index
        }
      }, [_vm._v(_vm._s(subItem.title) + "\n                    ")])
    })], 2)] : [_c('el-menu-item', {
      attrs: {
        "index": item.index
      }
    }, [_c('i', {
      class: item.icon
    }), _vm._v(_vm._s(item.title) + "\n                ")])]]
  })], 2)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-f50648a4", module.exports)
  }
}

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrapper"
  }, [_c('v-head'), _vm._v(" "), _c('v-sidebar'), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('transition', {
    attrs: {
      "name": "move",
      "mode": "out-in"
    }
  }, [_c('router-view')], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6f41c306", module.exports)
  }
}

/***/ })

});