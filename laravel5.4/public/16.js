webpackJsonp([16],{

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(268)

var Component = __webpack_require__(149)(
  /* script */
  __webpack_require__(270),
  /* template */
  __webpack_require__(271),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\zendstudioworkspace\\laravel5.4\\resources\\assets\\js\\components\\page\\Permgr.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Permgr.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2e09a755", Component.options)
  } else {
    hotAPI.reload("data-v-2e09a755", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(269);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(150)("9c6e8834", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.14.5@css-loader/index.js!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2e09a755\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./Permgr.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.14.5@css-loader/index.js!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2e09a755\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./Permgr.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
exports.push([module.i, "\n.permgr-handle-box{\n    margin-bottom: 20px;\n}\n.refresh_btn{\n    margin-left:0px !important;\n}\n.paging{\n    float:right;\n}\n.search-input{\n    float: right;\n    width:200px;\n}\n", ""]);

/***/ }),

/***/ 270:
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
            //权限列表
            perlist: [],

            //分页处理
            currpage: 1,
            total: 0,
            totaldata: [],
            pagesize: 9,

            //搜索框
            searchWord: '',

            //模态框状态
            dialogAddFormVisible: false,
            dialogEditFormVisible: false,

            //添加权限数据
            addPerInfo: {
                name: '',
                label: '',
                url: '',
                url_backend: '',
                description: ''
            },

            //编辑权限
            per_row: []

        };
    },

    created: function created() {
        this.getAllPermissions();
    },
    computed: {
        //搜索框过滤器
        datalist: function datalist() {
            var self = this;
            if (self.searchWord != '') {
                self.total = 0;
                return self.totaldata.filter(function (permission) {
                    if (permission.name.indexOf(self.searchWord) > -1 || permission.label.indexOf(self.searchWord) > -1) {
                        self.total++;
                        return permission;
                    }
                });
            } else {
                self.total = self.totaldata.length;
                return self.perlist;
            }
        }
    },
    methods: {
        getAllPermissions: function getAllPermissions() {
            this.axios.get('/permgr').then(function (response) {
                this.totaldata = response.data;
                this.total = this.totaldata.length;
                this.handleCurrentChange(1);
                this.$message.success('获取成功！');
            }.bind(this)).catch(function (response) {
                console.log(response);
                this.$message.error('获取失败！');
            }.bind(this));
        },
        handleCurrentChange: function handleCurrentChange(val) {
            this.currpage = val;
            var start = (val - 1) * this.pagesize;
            var end = start + this.pagesize - 1;
            var templist = [];
            this.total = this.totaldata.length;
            for (var i = 0; i < this.total; i++) {
                if (i >= start && i <= end) {
                    templist.push(this.totaldata[i]);
                }
            }
            this.perlist = templist;
        },
        addPer: function addPer() {
            //数据检查
            if (this.addPerInfo.name == null || this.addPerInfo.name == '') {
                this.$message.warning('请填写名称！');
                return;
            }
            if (this.addPerInfo.label == null || this.addPerInfo.label == '') {
                this.$message.warning('请填写标签！');
                return;
            }

            this.axios.post('/permgr/addPer', {
                name: this.addPerInfo.name,
                label: this.addPerInfo.label,
                url: this.addPerInfo.url,
                url_backend: this.addPerInfo.url_backend,
                description: this.addPerInfo.description
            }).then(function (response) {
                this.$message.success('添加成功！');
            }.bind(this)).catch(function (response) {
                console.log(response);
                this.$message.error('添加失败！');
            }.bind(this));
            this.dialogAddFormVisible = false;
        },
        iseditPer: function iseditPer(row) {
            this.per_row = row;
            this.dialogEditFormVisible = true;
        },
        editPer: function editPer() {
            //数据检查
            if (this.per_row.name == null || this.per_row.name == '') {
                this.$message.warning('请填写名称！');
                return;
            }
            if (this.per_row.label == null || this.per_row.label == '') {
                this.$message.warning('请填写标签！');
                return;
            }

            this.axios.post('/permgr/editPer', {
                id: this.per_row.id,
                name: this.per_row.name,
                label: this.per_row.label,
                url: this.per_row.url,
                url_backend: this.per_row.url_backend,
                description: this.per_row.description
            }).then(function (response) {
                this.$message.success('编辑成功！');
            }.bind(this)).catch(function (response) {
                console.log(response);
                this.$message.error('编辑失败！');
            }.bind(this));
            this.dialogEditFormVisible = false;
        },
        isdelPer: function isdelPer(id) {
            var _this = this;

            this.$confirm('确定删除该权限？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(function () {
                _this.axios.post('/permgr/delPer', {
                    per_id: id
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
        search: function search() {},
        refresh: function refresh() {
            this.currpage = 1;
            this.total = 0;
            this.totaldata = [];
            this.getAllPermissions();
        }
    },
    watch: {},
    filters: {}
});

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "crumbs"
  }, [_c('el-breadcrumb', [_c('el-breadcrumb-item', [_c('i', {
    staticClass: "fa fa-paperclip"
  }), _vm._v(" 权限管理")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "permgr-handle-box",
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
  }, [_vm._v("\n            刷新\n        ")]), _vm._v(" "), _c('el-input', {
    staticClass: "search-input",
    attrs: {
      "placeholder": "搜索关键词",
      "icon": "search",
      "on-icon-click": _vm.search
    },
    model: {
      value: (_vm.searchWord),
      callback: function($$v) {
        _vm.searchWord = $$v
      },
      expression: "searchWord"
    }
  })], 1), _vm._v(" "), _c('el-table', {
    ref: "multipleTable",
    attrs: {
      "border": "",
      "data": _vm.datalist
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "名称",
      "width": "150"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "label",
      "label": "标签",
      "width": "120"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "url",
      "label": "前端路由",
      "width": "120"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "url_backend",
      "label": "后端路由",
      "width": "160"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "description",
      "label": "描述",
      "width": "130"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "updated_at",
      "sortable": "",
      "label": "更新时间"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "width": "140"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "size": "small",
            "plain": true,
            "type": "info"
          },
          on: {
            "click": function($event) {
              _vm.iseditPer(scope.row)
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
              _vm.isdelPer(scope.row.id)
            }
          }
        }, [_vm._v("删除")])]
      }
    }])
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "paging"
  }, [_c('el-pagination', {
    staticClass: "pagination",
    attrs: {
      "current-page": _vm.currpage,
      "page-size": _vm.pagesize,
      "layout": "total, prev, pager, next",
      "total": _vm.total
    },
    on: {
      "current-change": _vm.handleCurrentChange,
      "update:currentPage": function($event) {
        _vm.currpage = $event
      }
    }
  })], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "添加权限",
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
      "label": "名称"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    model: {
      value: (_vm.addPerInfo.name),
      callback: function($$v) {
        _vm.addPerInfo.name = $$v
      },
      expression: "addPerInfo.name"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('el-row', [_c('el-col', {
    attrs: {
      "span": 15
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "标签"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    model: {
      value: (_vm.addPerInfo.label),
      callback: function($$v) {
        _vm.addPerInfo.label = $$v
      },
      expression: "addPerInfo.label"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('el-row', [_c('el-col', {
    attrs: {
      "span": 15
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "前端路由"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    model: {
      value: (_vm.addPerInfo.url),
      callback: function($$v) {
        _vm.addPerInfo.url = $$v
      },
      expression: "addPerInfo.url"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('el-row', [_c('el-col', {
    attrs: {
      "span": 15
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "后端路由"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    model: {
      value: (_vm.addPerInfo.url_backend),
      callback: function($$v) {
        _vm.addPerInfo.url_backend = $$v
      },
      expression: "addPerInfo.url_backend"
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
      "autosize": {
        minRows: 2,
        maxRows: 4
      }
    },
    model: {
      value: (_vm.addPerInfo.description),
      callback: function($$v) {
        _vm.addPerInfo.description = $$v
      },
      expression: "addPerInfo.description"
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
      "type": "info"
    },
    on: {
      "click": _vm.addPer
    }
  }, [_vm._v("确 定")])], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "编辑权限",
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
      "model": _vm.per_row,
      "label-width": "80px"
    }
  }, [_c('el-row', [_c('el-col', {
    attrs: {
      "span": 15
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "名称"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    model: {
      value: (_vm.per_row.name),
      callback: function($$v) {
        _vm.per_row.name = $$v
      },
      expression: "per_row.name"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('el-row', [_c('el-col', {
    attrs: {
      "span": 15
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "标签"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    model: {
      value: (_vm.per_row.label),
      callback: function($$v) {
        _vm.per_row.label = $$v
      },
      expression: "per_row.label"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('el-row', [_c('el-col', {
    attrs: {
      "span": 15
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "前端路由"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    model: {
      value: (_vm.per_row.url),
      callback: function($$v) {
        _vm.per_row.url = $$v
      },
      expression: "per_row.url"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('el-row', [_c('el-col', {
    attrs: {
      "span": 15
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "后端路由"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    model: {
      value: (_vm.per_row.url_backend),
      callback: function($$v) {
        _vm.per_row.url_backend = $$v
      },
      expression: "per_row.url_backend"
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
      "autosize": {
        minRows: 2,
        maxRows: 4
      }
    },
    model: {
      value: (_vm.per_row.description),
      callback: function($$v) {
        _vm.per_row.description = $$v
      },
      expression: "per_row.description"
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
      "type": "info"
    },
    on: {
      "click": _vm.editPer
    }
  }, [_vm._v("确 定")])], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2e09a755", module.exports)
  }
}

/***/ })

});