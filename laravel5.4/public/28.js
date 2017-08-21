webpackJsonp([28],{

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(745)

var Component = __webpack_require__(150)(
  /* script */
  __webpack_require__(747),
  /* template */
  __webpack_require__(296),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\zendstudioworkspace\\laravel5.4\\resources\\assets\\js\\components\\page\\Collectmgr.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Collectmgr.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-29273da8", Component.options)
  } else {
    hotAPI.reload("data-v-29273da8", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "table"
  }, [_c('div', {
    staticClass: "crumbs"
  }, [_c('el-breadcrumb', {
    attrs: {
      "separator": "/"
    }
  }, [_c('el-breadcrumb-item', [_c('i', {
    staticClass: "fa fa-star-o"
  }), _vm._v(" 收藏管理")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "collectmgr-handle-box",
    attrs: {
      "inline": true
    }
  }, [_c('el-button', {
    staticClass: "refresh_btn",
    attrs: {
      "plain": true,
      "type": "success"
    },
    on: {
      "click": _vm.refresh
    }
  }, [_vm._v("\n            刷新\n        ")])], 1), _vm._v(" "), _c('el-table', {
    attrs: {
      "data": _vm.collectdata,
      "border": ""
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "user_name",
      "label": "用户名称",
      "width": "150"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "movie_name",
      "label": "电影名称",
      "width": "150"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "collect_time",
      "label": "收藏时间"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "width": "120"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "size": "small",
            "plain": true,
            "type": "danger"
          },
          on: {
            "click": function($event) {
              _vm.isdelCollect(scope.row.id)
            }
          }
        }, [_vm._v("取消收藏")])]
      }
    }])
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-29273da8", module.exports)
  }
}

/***/ }),

/***/ 745:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(746);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(151)("7af15271", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.14.5@css-loader/index.js!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-29273da8\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./Collectmgr.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.14.5@css-loader/index.js!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-29273da8\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./Collectmgr.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 746:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
exports.push([module.i, "\n.collectmgr-handle-box{\n    margin-bottom: 20px;\n}\n.refresh_btn{\n    margin-left:0px !important;\n}\n", ""]);

/***/ }),

/***/ 747:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            collectdata: []
        };
    },

    created: function created() {
        this.getAllCollects();
    },
    methods: {
        getAllCollects: function getAllCollects() {
            this.axios.get('/collectmgr/getAllCollects').then(function (response) {
                this.collectdata = response.data;
                this.$message.success('获取成功！');
            }.bind(this)).catch(function (response) {
                console.log(response);
                this.$message.error('获取失败！');
            }.bind(this));
        },
        isdelCollect: function isdelCollect(id) {
            var _this = this;

            this.$confirm('确定取消该收藏？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(function () {
                _this.axios.post('/collectmgr/delCollect_be', {
                    collectid: id
                }).then(function (response) {
                    if (response.data == null || response.data == '') {
                        this.$message({
                            type: 'success',
                            message: '操作成功!'
                        });
                    } else {
                        this.$message.error('操作失败！');
                    }
                }.bind(_this)).catch(function (response) {
                    console.log(response);
                    this.$message({
                        type: 'error',
                        message: '操作失败!'
                    });
                }.bind(_this));
            }).catch(function () {});
        },
        refresh: function refresh() {
            this.getAllCollects();
        }
    },
    watch: {},
    filters: {}
});

/***/ })

});