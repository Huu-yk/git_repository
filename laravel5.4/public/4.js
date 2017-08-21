webpackJsonp([4],{

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(252)

var Component = __webpack_require__(149)(
  /* script */
  __webpack_require__(254),
  /* template */
  __webpack_require__(255),
  /* scopeId */
  "data-v-5e165ba8",
  /* cssModules */
  null
)
Component.options.__file = "D:\\zendstudioworkspace\\laravel5.4\\resources\\assets\\js\\components\\page\\Readme.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Readme.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5e165ba8", Component.options)
  } else {
    hotAPI.reload("data-v-5e165ba8", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(253);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(150)("af00bcc2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.14.5@css-loader/index.js!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5e165ba8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./Readme.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.14.5@css-loader/index.js!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5e165ba8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./Readme.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
exports.push([module.i, "\n.ms-doc[data-v-5e165ba8]{\n    width:100%;\n    max-width: 980px;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif;\n}\n.ms-doc h3[data-v-5e165ba8]{\n    padding: 9px 10px 10px;\n    margin: 0;\n    font-size: 14px;\n    line-height: 17px;\n    background-color: #f5f5f5;\n    border: 1px solid #d8d8d8;\n    border-bottom: 0;\n    border-radius: 3px 3px 0 0;\n}\n.ms-doc article[data-v-5e165ba8]{\n    padding: 45px;\n    word-wrap: break-word;\n    background-color: #fff;\n    border: 1px solid #ddd;\n    border-bottom-right-radius: 3px;\n    border-bottom-left-radius: 3px;\n}\n.ms-doc article h1[data-v-5e165ba8]{\n    font-size:32px;\n    padding-bottom: 10px;\n    margin-bottom: 15px;\n    border-bottom: 1px solid #ddd;\n}\n.ms-doc article h2[data-v-5e165ba8] {\n    margin: 24px 0 16px;\n    font-weight: 600;\n    line-height: 1.25;\n    padding-bottom: 7px;\n    font-size: 24px;\n    border-bottom: 1px solid #eee;\n}\n.ms-doc article p[data-v-5e165ba8]{\n    margin-bottom: 15px;\n    line-height: 1.5;\n}\n.ms-doc article .el-checkbox[data-v-5e165ba8]{\n    margin-bottom: 5px;\n}\n", ""]);

/***/ }),

/***/ 254:
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
        return {};
    }
});

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "crumbs"
  }, [_c('el-breadcrumb', {
    attrs: {
      "separator": "/"
    }
  }, [_c('el-breadcrumb-item', [_c('i', {
    staticClass: "fa fa-home"
  }), _vm._v(" 自述")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "ms-doc"
  }, [_c('h3', [_vm._v("README.md")]), _vm._v(" "), _c('article', [_c('h1', [_vm._v("manage-system")]), _vm._v(" "), _c('p', [_vm._v("Laravel5.4 + Vue2 + ElementUI 后台管理系统")]), _vm._v(" "), _c('h2', [_vm._v("前言")]), _vm._v(" "), _c('p', [_vm._v("基于Laravel5.4，Vue2，ElementUI开发的后台SPA")]), _vm._v(" "), _c('p', [_vm._v("基于Bootstrap3，Vue2 设计前台页面")]), _vm._v(" "), _c('h2', [_vm._v("要点")]), _vm._v(" "), _c('el-checkbox', {
    attrs: {
      "disabled": "",
      "checked": ""
    }
  }, [_vm._v("Laravel 组件权限控制")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('el-checkbox', {
    attrs: {
      "disabled": "",
      "checked": ""
    }
  }, [_vm._v("Laravel RESTful控制器")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('h2', [_vm._v("功能")]), _vm._v(" "), _c('el-checkbox', {
    attrs: {
      "disabled": "",
      "checked": ""
    }
  }, [_vm._v("登录/注册/注销/重置密码")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('el-checkbox', {
    attrs: {
      "disabled": "",
      "checked": ""
    }
  }, [_vm._v("用户管理")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('el-checkbox', {
    attrs: {
      "disabled": "",
      "checked": ""
    }
  }, [_vm._v("角色管理")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('el-checkbox', {
    attrs: {
      "disabled": "",
      "checked": ""
    }
  }, [_vm._v("权限管理")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('el-checkbox', {
    attrs: {
      "disabled": "",
      "checked": ""
    }
  }, [_vm._v("电影管理")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('el-checkbox', {
    attrs: {
      "disabled": "",
      "checked": ""
    }
  }, [_vm._v("评论管理")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('el-checkbox', {
    attrs: {
      "disabled": "",
      "checked": ""
    }
  }, [_vm._v("收藏管理")]), _vm._v(" "), _c('br')], 1)])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5e165ba8", module.exports)
  }
}

/***/ })

});