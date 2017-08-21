webpackJsonp([21],{

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(296)

var Component = __webpack_require__(149)(
  /* script */
  __webpack_require__(298),
  /* template */
  __webpack_require__(295),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\zendstudioworkspace\\laravel5.4\\resources\\assets\\js\\components\\page\\Tagmgr.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Tagmgr.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3770c238", Component.options)
  } else {
    hotAPI.reload("data-v-3770c238", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "crumbs"
  }, [_c('el-breadcrumb', [_c('el-breadcrumb-item', [_c('i', {
    staticClass: "fa fa-tags"
  }), _vm._v(" 标签管理")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "tagmgr-handle-box",
    attrs: {
      "inline": true
    }
  }, [_c('el-button', {
    attrs: {
      "type": "info"
    },
    on: {
      "click": function($event) {
        _vm.dialogAddFormVisible = true
      }
    }
  }, [_vm._v("\n            新增\n        ")]), _vm._v(" "), _c('el-button', {
    staticClass: "refresh_btn",
    attrs: {
      "type": "success"
    },
    on: {
      "click": _vm.refresh
    }
  }, [_vm._v("\n            刷新\n        ")])], 1), _vm._v(" "), _c('el-table', {
    attrs: {
      "data": _vm.tagsdata,
      "border": ""
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "标签名",
      "width": "150"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "description",
      "label": "描述",
      "width": "250"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "created_at",
      "label": "创建时间"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "updated_at",
      "label": "更新时间"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "width": "160"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "size": "small",
            "plain": true,
            "type": "success"
          },
          on: {
            "click": function($event) {
              _vm.iseditTag(scope.row)
            }
          }
        }, [_vm._v("编辑")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "size": "small",
            "plain": true,
            "type": "danger"
          },
          on: {
            "click": function($event) {
              _vm.isdelTag(scope.row.id)
            }
          }
        }, [_vm._v("删除")])]
      }
    }])
  })], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "添加标签",
      "visible": _vm.dialogAddFormVisible,
      "size": "tiny"
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogAddFormVisible = $event
      }
    }
  }, [_c('el-form', {
    attrs: {
      "label-width": "80px"
    }
  }, [_c('el-row', [_c('el-col', {
    attrs: {
      "span": 15
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "标签名"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    model: {
      value: (_vm.addTagInfo.name),
      callback: function($$v) {
        _vm.addTagInfo.name = $$v
      },
      expression: "addTagInfo.name"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('el-row', [_c('el-col', {
    attrs: {
      "span": 15
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "描述"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "type": "textarea",
      "rows": 2
    },
    model: {
      value: (_vm.addTagInfo.description),
      callback: function($$v) {
        _vm.addTagInfo.description = $$v
      },
      expression: "addTagInfo.description"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.dialogAddFormVisible = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "danger"
    },
    on: {
      "click": _vm.addTag
    }
  }, [_vm._v("确 定")])], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "编辑标签",
      "visible": _vm.dialogEditFormVisible,
      "size": "tiny"
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogEditFormVisible = $event
      }
    }
  }, [_c('el-form', {
    attrs: {
      "label-width": "80px"
    }
  }, [_c('el-row', [_c('el-col', {
    attrs: {
      "span": 15
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "标签名"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    model: {
      value: (_vm.editTagInfo.name),
      callback: function($$v) {
        _vm.editTagInfo.name = $$v
      },
      expression: "editTagInfo.name"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('el-row', [_c('el-col', {
    attrs: {
      "span": 15
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "描述"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "type": "textarea",
      "rows": 2
    },
    model: {
      value: (_vm.editTagInfo.description),
      callback: function($$v) {
        _vm.editTagInfo.description = $$v
      },
      expression: "editTagInfo.description"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.dialogEditFormVisible = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "danger"
    },
    on: {
      "click": _vm.editTag
    }
  }, [_vm._v("确 定")])], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3770c238", module.exports)
  }
}

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(297);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(150)("41de1c84", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.14.5@css-loader/index.js!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-3770c238\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./Tagmgr.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.14.5@css-loader/index.js!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-3770c238\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./Tagmgr.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
exports.push([module.i, "\n.tagmgr-handle-box{\n    margin-bottom: 20px;\n}\n.refresh_btn{\n    margin-left:0px !important;\n}\n", ""]);

/***/ }),

/***/ 298:
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
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            tagsdata: [],

            addTagInfo: {
                name: '',
                description: ''
            },

            editTagInfo: [],

            dialogAddFormVisible: false,
            dialogEditFormVisible: false
        };
    },

    created: function created() {
        this.getTags();
    },
    methods: {
        getTags: function getTags() {
            this.axios.get('/tagmgr').then(function (response) {
                this.tagsdata = response.data;
                this.$message.success('获取成功！');
            }.bind(this)).catch(function (response) {
                this.$message.error('获取失败！');
            }.bind(this));
        },
        addTag: function addTag() {
            //数据处理
            if (this.addTagInfo.name == "" || this.addTagInfo.name == null) {
                this.$message.warning('请输入标签名！');
                return;
            }
            if (this.addTagInfo.description == "" || this.addTagInfo.description == null) {
                this.$message.warning('请填写描述！');
                return;
            }

            this.axios.post('/tagmgr/addTag', {
                name: this.addTagInfo.name,
                description: this.addTagInfo.description
            }).then(function (response) {
                this.$message.success('添加成功！');
                this.dialogAddFormVisible = false;
                this.refresh();
            }.bind(this)).catch(function (response) {
                console.log(response);
                this.$message.error('添加失败！');
            }.bind(this));
        },
        iseditTag: function iseditTag(row) {
            this.editTagInfo = row;
            this.dialogEditFormVisible = true;
        },
        editTag: function editTag() {
            //数据处理
            if (this.editTagInfo.name == "" || this.editTagInfo.name == null) {
                this.$message.warning('请输入标签名！');
                return;
            }
            if (this.editTagInfo.description == "" || this.editTagInfo.description == null) {
                this.$message.warning('请填写描述！');
                return;
            }

            this.axios.post('/tagmgr/editTag', {
                id: this.editTagInfo.id,
                name: this.editTagInfo.name,
                description: this.editTagInfo.description
            }).then(function (response) {
                this.$message.success('编辑成功！');
                this.dialogEditFormVisible = false;
                this.refresh();
            }.bind(this)).catch(function (response) {
                console.log(response);
                this.$message.error('编辑失败！');
            }.bind(this));
        },
        isdelTag: function isdelTag(id) {
            var _this = this;

            this.$confirm('确定删除该标签？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(function () {
                _this.axios.post('/tagmgr/deleteTag', {
                    id: id
                }).then(function (response) {
                    if (response.data == null || response.data == '') {
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                    } else {
                        this.$message.error('操作失败！');
                    }
                }.bind(_this)).catch(function (response) {
                    console.log(response);
                    this.$message({
                        type: 'error',
                        message: '删除失败!'
                    });
                }.bind(_this));
            }).catch(function () {});
        },
        refresh: function refresh() {
            this.getTags();
        }
    },
    watch: {},
    filters: {}
});

/***/ })

});