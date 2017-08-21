webpackJsonp([24],{

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(276)

var Component = __webpack_require__(150)(
  /* script */
  __webpack_require__(278),
  /* template */
  __webpack_require__(279),
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

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(277);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(151)("af00bcc2", content, false);
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

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
exports.push([module.i, "\n.ms-doc[data-v-5e165ba8]{\n    width:100%;\n    max-width: 980px;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif;\n}\n.ms-doc h3[data-v-5e165ba8]{\n    padding: 9px 10px 10px;\n    margin: 0;\n    font-size: 14px;\n    line-height: 17px;\n    background-color: #f5f5f5;\n    border: 1px solid #d8d8d8;\n    border-bottom: 0;\n    border-radius: 3px 3px 0 0;\n}\n.ms-doc article[data-v-5e165ba8]{\n    padding: 45px;\n    word-wrap: break-word;\n    background-color: #fff;\n    border: 1px solid #ddd;\n    border-bottom-right-radius: 3px;\n    border-bottom-left-radius: 3px;\n}\n.ms-doc article h1[data-v-5e165ba8]{\n    font-size:32px;\n    padding-bottom: 10px;\n    margin-bottom: 15px;\n    border-bottom: 1px solid #ddd;\n}\n.ms-doc article h2[data-v-5e165ba8] {\n    margin: 24px 0 16px;\n    font-weight: 600;\n    line-height: 1.25;\n    padding-bottom: 7px;\n    font-size: 24px;\n    border-bottom: 1px solid #eee;\n}\n.ms-doc article p[data-v-5e165ba8]{\n    margin-bottom: 15px;\n    line-height: 1.5;\n}\n.ms-doc article .el-checkbox[data-v-5e165ba8]{\n    margin-bottom: 5px;\n}\n", ""]);

/***/ }),

/***/ 278:
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
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {};
    }
});

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "crumbs"
  }, [_c('el-breadcrumb', {
    attrs: {
      "separator": "/"
    }
  }, [_c('el-breadcrumb-item', [_c('i', {
    staticClass: "el-icon-setting"
  }), _vm._v(" 自述")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "ms-doc"
  }, [_c('h3', [_vm._v("README.md")]), _vm._v(" "), _c('article', [_c('h1', [_vm._v("manage-system")]), _vm._v(" "), _c('p', [_vm._v("基于Vue.js 2.x系列 + Element UI 的后台管理系统解决方案")]), _vm._v(" "), _c('h2', [_vm._v("前言")]), _vm._v(" "), _c('p', [_vm._v("之前在公司用了Vue + Element组件库做了个后台管理系统，基本很多组件可以直接引用组件库的，但是也有一些需求无法满足。像图片裁剪上传、富文本编辑器、图表等这些在后台管理系统中很常见的功能，就需要引用其他的组件才能完成。从寻找组件，到使用组件的过程中，遇到了很多问题，也积累了宝贵的经验。所以我就把开发这个后台管理系统的经验，总结成这个后台管理系统解决方案。")]), _vm._v(" "), _c('p', [_vm._v("该方案作为一套多功能的后台框架模板，适用于绝大部分的后台管理系统（Web Management System）开发。基于vue.js,使用vue-cli脚手架快速生成项目目录，引用Element UI组件库，方便开发快速简洁好看的组件。分离颜色样式，支持手动切换主题色，而且很方便使用自定义主题色。")]), _vm._v(" "), _c('h2', [_vm._v("功能")]), _vm._v(" "), _c('el-checkbox', {
    attrs: {
      "disabled": "",
      "checked": ""
    }
  }, [_vm._v("Element UI")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('el-checkbox', {
    attrs: {
      "disabled": "",
      "checked": ""
    }
  }, [_vm._v("登录/注销")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('el-checkbox', {
    attrs: {
      "disabled": "",
      "checked": ""
    }
  }, [_vm._v("表格")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('el-checkbox', {
    attrs: {
      "disabled": "",
      "checked": ""
    }
  }, [_vm._v("表单")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('el-checkbox', {
    attrs: {
      "disabled": "",
      "checked": ""
    }
  }, [_vm._v("图表")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('el-checkbox', {
    attrs: {
      "disabled": "",
      "checked": ""
    }
  }, [_vm._v("富文本编辑器")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('el-checkbox', {
    attrs: {
      "disabled": "",
      "checked": ""
    }
  }, [_vm._v("markdown编辑器")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('el-checkbox', {
    attrs: {
      "disabled": "",
      "checked": ""
    }
  }, [_vm._v("图片拖拽/裁剪上传")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('el-checkbox', {
    attrs: {
      "disabled": "",
      "checked": ""
    }
  }, [_vm._v("支持切换主题色")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('el-checkbox', {
    attrs: {
      "disabled": "",
      "checked": ""
    }
  }, [_vm._v("列表拖拽排序")]), _vm._v(" "), _c('br')], 1)])])
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