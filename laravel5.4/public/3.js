webpackJsonp([3],{

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(264)

var Component = __webpack_require__(149)(
  /* script */
  __webpack_require__(266),
  /* template */
  __webpack_require__(267),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\zendstudioworkspace\\laravel5.4\\resources\\assets\\js\\components\\page\\Rolemgr.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Rolemgr.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-85269d50", Component.options)
  } else {
    hotAPI.reload("data-v-85269d50", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(265);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(150)("57794606", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.14.5@css-loader/index.js!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-85269d50\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./Rolemgr.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.14.5@css-loader/index.js!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-85269d50\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./Rolemgr.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
exports.push([module.i, "\n.perlist-handle-box{\n    margin-bottom: 20px;\n}\n.rolemgr-handle-box{\n    margin-bottom: 20px;\n}\n.refresh_btn{\n    margin-left:0px !important;\n}\n", ""]);

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        var _ref;

        return _ref = {
            //角色列表数据
            rolelist: [],

            //角色列表总条数
            total: '',

            //状态位
            status: '',

            //多行选择
            multipleSelection: [],

            //单个角色数据
            role_row: [],
            role_row_id: '',

            //添加用户数据
            addRoleInfo: {
                name: '',
                label: '',
                description: ''
            },

            //模态框状态
            dialogAddFormVisible: false,
            dialogUseRoleVisible: false,
            dialogDeleteRoleVisible: false,
            dialogEditFormVisible: false,
            dialogPermissionVisible: false,
            dialogNotHaveVisible: false,

            // 启用/停用/删除
            roleid: '',
            use_status: '',

            //分页处理
            currpage: 1,
            currpage2: 1
        }, _defineProperty(_ref, 'total', 0), _defineProperty(_ref, 'total2', 0), _defineProperty(_ref, 'totaldata', []), _defineProperty(_ref, 'totaldata2', []), _defineProperty(_ref, 'pagesize', 5), _defineProperty(_ref, 'perlist', []), _defineProperty(_ref, 'nothavelist', []), _defineProperty(_ref, 'removePerid', ''), _ref;
    },

    created: function created() {

        this.getAllRoles();
    },
    mounted: function mounted() {},
    computed: {
        datalist: function datalist() {
            var self = this;
            return self.rolelist;
        }
    },
    methods: {
        getAllRoles: function getAllRoles() {
            this.axios.get('/rolemgr').then(function (response) {
                var temp = response.data.roles;
                //数据处理
                for (var i = 0; i < temp.length; i++) {
                    if (temp[i].this_status == 1) {
                        temp[i].this_status = "启用";
                    } else {
                        temp[i].this_status = "停用";
                    }
                }
                this.rolelist = temp;
                this.total = response.data.total;
                this.$message.success('获取成功！');
            }.bind(this)).catch(function (response) {
                this.$message.error('获取失败！');
                this.$message.error(response);
            }.bind(this));
        },
        addRole: function addRole() {
            //数据检查
            if (this.addRoleInfo.name == '') {
                this.$message.error('请填写名称！');
                return;
            }
            if (this.addRoleInfo.label == '') {
                this.$message.error('请填写标签！');
                return;
            }
            if (this.addRoleInfo.description == '') {
                this.$message.error('请填写描述！');
                return;
            }

            this.axios.post('/rolemgr/addRole', {
                'name': this.addRoleInfo.name,
                'label': this.addRoleInfo.label,
                'description': this.addRoleInfo.description
            }).then(function (response) {
                this.$message.success('添加成功！');
                this.addRoleInfo.name = '';
                this.addRoleInfo.label = '';
                this.addRoleInfo.description = '';
            }.bind(this)).catch(function (response) {
                console.log(response);
                this.$message.error('添加失败！');
            }.bind(this));

            this.dialogAddFormVisible = false;
        },
        isuseRole: function isuseRole(id, status) {
            this.roleid = id;
            this.use_status = status;
            this.dialogUseRoleVisible = true;
        },
        useRole: function useRole() {
            this.axios.post('/rolemgr/useRole', {
                roleid: this.roleid,
                set_status: this.use_status
            }).then(function (response) {
                this.$message.success('操作成功！');
                this.use_status = '';
                this.roleid = '';
                this.refresh();
            }.bind(this)).catch(function (response) {
                console.log(response);
                this.$message.error('操作失败！');
            }.bind(this));

            this.dialogUseRoleVisible = false;
        },
        iseditRole: function iseditRole(row) {
            this.role_row = row;
            this.dialogEditFormVisible = true;
        },
        editRole: function editRole() {
            //数据检查
            if (this.role_row.name == '') {
                this.$message.error('请填写名称！');
                return;
            }
            if (this.role_row.label == '') {
                this.$message.error('请填写标签！');
                return;
            }
            if (this.role_row.description == '') {
                this.$message.error('请填写描述！');
                return;
            }

            this.axios.post('/rolemgr/editRole', {
                'id': this.role_row.id,
                'name': this.role_row.name,
                'label': this.role_row.label,
                'description': this.role_row.description
            }).then(function (response) {
                this.$message.success('编辑成功！');
            }.bind(this)).catch(function (response) {
                console.log(response);
                this.$message.error('编辑失败！');
            }.bind(this));

            this.dialogEditFormVisible = false;
        },
        isdelRole: function isdelRole(id) {
            this.roleid = id;
            this.dialogDeleteRoleVisible = true;
        },
        delRole: function delRole() {
            this.axios.post('/rolemgr/delRole', {
                roleid: this.roleid
            }).then(function (response) {
                this.$message.success('操作成功！');
                this.roleid = '';
                this.refresh();
            }.bind(this)).catch(function (response) {
                console.log(response);
                this.$message.error('操作失败！');
            }.bind(this));

            this.dialogDeleteRoleVisible = false;
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
        handleCurrentChange2: function handleCurrentChange2(val) {
            this.currpage2 = val;
            var start = (val - 1) * this.pagesize;
            var end = start + this.pagesize - 1;
            var templist = [];
            this.total2 = this.totaldata2.length;
            for (var i = 0; i < this.total2; i++) {
                if (i >= start && i <= end) {
                    templist.push(this.totaldata2[i]);
                }
            }
            this.nothavelist = templist;
        },
        handleSelectionChange: function handleSelectionChange(val) {
            this.multipleSelection = val;
        },

        appendPermission: function appendPermission() {
            var len = this.multipleSelection.length;
            if (len != 0) {
                var requestUrl = '/rolemgr/appendPer';
                this.axios.post(requestUrl, {
                    role_id: this.role_row_id,
                    multiple: this.multipleSelection
                }).then(function (response) {
                    console.log(response);
                    this.$message.success('添加成功！');
                    this.dialogNotHaveVisible = false;
                    this.perlist_refersh();
                }.bind(this)).catch(function (response) {
                    this.$message.error('添加失败！');
                }.bind(this));
            } else {
                this.$message.warning('请选择要添加的权限！');
            }
        },
        showPermission: function showPermission(id) {
            this.role_row_id = id;
            this.axios.post('/permgr/getPer', {
                role_id: id
            }).then(function (response) {
                if (response.data != 0) {
                    this.totaldata = response.data;
                    this.total = this.totaldata.length;
                    this.handleCurrentChange(1);
                    this.$message.success('获取成功！');
                    this.dialogPermissionVisible = true;
                } else {
                    this.dialogPermissionVisible = true;
                    this.totaldata = [];
                    this.total = 0;
                    this.handleCurrentChange(1);
                    this.$message.info('该角色权限列表为空！');
                }
            }.bind(this)).catch(function (response) {
                console.log(response);
                this.$message.error('获取失败！');
            }.bind(this));
        },
        isnothavelist: function isnothavelist() {
            this.axios.post('/permgr/getNothave', {
                role_id: this.role_row_id
            }).then(function (response) {
                if (response.data != "") {
                    this.totaldata2 = response.data;
                    this.total2 = this.totaldata2.length;
                    this.handleCurrentChange2(1);
                    this.$message.success('获取成功！');
                    this.dialogNotHaveVisible = true;
                } else {
                    this.$message.info('该用户已有所有权限！');
                }
            }.bind(this)).catch(function (response) {
                console.log(response);
                this.$message.error('获取失败！');
            }.bind(this));
        },
        isremovePer: function isremovePer(id) {
            var _this = this;

            this.removePerid = id;
            this.$confirm('确定移除该权限？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(function () {
                _this.axios.post('/rolemgr/removePer', {
                    per_id: id,
                    role_id: _this.role_row_id
                }).then(function (response) {
                    this.$message({
                        type: 'success',
                        message: '移除成功!'
                    });
                    this.perlist_refersh();
                }.bind(_this)).catch(function (response) {
                    console.log(response);
                    this.$message({
                        type: 'error',
                        message: '移除失败!'
                    });
                }.bind(_this));
            }).catch(function () {});
        },
        refresh: function refresh() {
            this.getAllRoles();
        },
        perlist_refersh: function perlist_refersh() {
            this.showPermission(this.role_row_id);
        }
    },
    watch: {},
    filters: {}
});

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "crumbs"
  }, [_c('el-breadcrumb', [_c('el-breadcrumb-item', [_c('i', {
    staticClass: "fa fa-user-circle-o"
  }), _vm._v(" 角色管理")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "rolemgr-handle-box",
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
      "data": _vm.datalist,
      "border": ""
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "名称",
      "width": "120"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "label",
      "label": "标签",
      "width": "130"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "this_status",
      "label": "状态",
      "width": "120"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "description",
      "width": "120",
      "label": "描述"
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
      "width": "280"
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
              _vm.showPermission(scope.row.id)
            }
          }
        }, [_vm._v("权限")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "size": "small",
            "plain": true,
            "type": "success"
          },
          on: {
            "click": function($event) {
              _vm.iseditRole(scope.row)
            }
          }
        }, [_vm._v("编辑")]), _vm._v(" "), (scope.row.this_status == '启用') ? _c('el-button', {
          attrs: {
            "size": "small",
            "plain": true,
            "type": "warning"
          },
          on: {
            "click": function($event) {
              _vm.isuseRole(scope.row.id, 0)
            }
          }
        }, [_vm._v("停用")]) : _vm._e(), _vm._v(" "), (scope.row.this_status == '停用') ? _c('el-button', {
          attrs: {
            "size": "small",
            "plain": true,
            "type": "warning"
          },
          on: {
            "click": function($event) {
              _vm.isuseRole(scope.row.id, 1)
            }
          }
        }, [_vm._v("启用")]) : _vm._e(), _vm._v(" "), _c('el-button', {
          attrs: {
            "size": "small",
            "plain": true,
            "type": "danger"
          },
          on: {
            "click": function($event) {
              _vm.isdelRole(scope.row.id)
            }
          }
        }, [_vm._v("删除")])]
      }
    }])
  })], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "添加角色",
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
      value: (_vm.addRoleInfo.name),
      callback: function($$v) {
        _vm.addRoleInfo.name = $$v
      },
      expression: "addRoleInfo.name"
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
      value: (_vm.addRoleInfo.label),
      callback: function($$v) {
        _vm.addRoleInfo.label = $$v
      },
      expression: "addRoleInfo.label"
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
      value: (_vm.addRoleInfo.description),
      callback: function($$v) {
        _vm.addRoleInfo.description = $$v
      },
      expression: "addRoleInfo.description"
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
      "click": _vm.addRole
    }
  }, [_vm._v("确 定")])], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "编辑角色",
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
      "model": _vm.role_row,
      "label-width": "80px",
      "id": "role-list"
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
      value: (_vm.role_row.name),
      callback: function($$v) {
        _vm.role_row.name = $$v
      },
      expression: "role_row.name"
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
      value: (_vm.role_row.label),
      callback: function($$v) {
        _vm.role_row.label = $$v
      },
      expression: "role_row.label"
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
      value: (_vm.role_row.description),
      callback: function($$v) {
        _vm.role_row.description = $$v
      },
      expression: "role_row.description"
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
      "click": _vm.editRole
    }
  }, [_vm._v("确 定")])], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "visible": _vm.dialogUseRoleVisible,
      "size": "tiny"
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogUseRoleVisible = $event
      }
    }
  }, [(_vm.use_status == 0) ? _c('span', [_vm._v("确定停用该角色？")]) : _vm._e(), _vm._v(" "), (_vm.use_status == 1) ? _c('span', [_vm._v("确定启用该角色？")]) : _vm._e(), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.dialogUseRoleVisible = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "danger"
    },
    on: {
      "click": _vm.useRole
    }
  }, [_vm._v("确 定")])], 1)]), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "visible": _vm.dialogDeleteRoleVisible,
      "size": "tiny"
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogDeleteRoleVisible = $event
      }
    }
  }, [_c('span', [_vm._v("确定删除该角色？")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.dialogDeleteRoleVisible = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "danger"
    },
    on: {
      "click": _vm.delRole
    }
  }, [_vm._v("确 定")])], 1)]), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "角色权限",
      "visible": _vm.dialogPermissionVisible,
      "size": "small"
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogPermissionVisible = $event
      }
    }
  }, [_c('div', {
    staticClass: "perlist-handle-box",
    attrs: {
      "inline": true
    }
  }, [_c('el-button', {
    attrs: {
      "plain": true,
      "type": "info"
    },
    on: {
      "click": _vm.isnothavelist
    }
  }, [_vm._v("\n                添加\n            ")]), _vm._v(" "), _c('el-button', {
    staticClass: "refresh_btn",
    attrs: {
      "plain": true,
      "type": "success"
    },
    on: {
      "click": _vm.perlist_refersh
    }
  }, [_vm._v("\n                刷新\n            ")])], 1), _vm._v(" "), _c('div', [_c('el-table', {
    attrs: {
      "data": _vm.perlist,
      "border": ""
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "label",
      "label": "标签",
      "width": "120"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "名称"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "url_backend",
      "label": "后端路由"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "width": "100"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "size": "small",
            "type": "danger"
          },
          on: {
            "click": function($event) {
              _vm.isremovePer(scope.row.id)
            }
          }
        }, [_vm._v("移除")])]
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
  })], 1)], 1), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.dialogPermissionVisible = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "plain": true,
      "type": "info"
    },
    on: {
      "click": function($event) {
        _vm.dialogPermissionVisible = false
      }
    }
  }, [_vm._v("确 定")])], 1)]), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "visible": _vm.dialogDeleteRoleVisible,
      "size": "tiny"
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogDeleteRoleVisible = $event
      }
    }
  }, [_c('span', [_vm._v("确定删除该角色？")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.dialogDeleteRoleVisible = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "danger"
    },
    on: {
      "click": _vm.delRole
    }
  }, [_vm._v("确 定")])], 1)]), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "添加权限",
      "visible": _vm.dialogNotHaveVisible,
      "size": "tiny"
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogNotHaveVisible = $event
      }
    }
  }, [_c('div', [_c('el-table', {
    ref: "multipleTable",
    attrs: {
      "data": _vm.nothavelist,
      "border": ""
    },
    on: {
      "selection-change": _vm.handleSelectionChange
    }
  }, [_c('el-table-column', {
    attrs: {
      "type": "selection",
      "width": "55"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "label",
      "label": "标签",
      "width": "120"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "名称"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "paging"
  }, [_c('el-pagination', {
    staticClass: "pagination",
    attrs: {
      "current-page": _vm.currpage2,
      "page-size": _vm.pagesize,
      "layout": "total, prev, pager, next",
      "total": _vm.total2
    },
    on: {
      "current-change": _vm.handleCurrentChange2,
      "update:currentPage": function($event) {
        _vm.currpage2 = $event
      }
    }
  })], 1)], 1), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.dialogNotHaveVisible = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "plain": true,
      "type": "warning"
    },
    on: {
      "click": _vm.appendPermission
    }
  }, [_vm._v("添 加")])], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-85269d50", module.exports)
  }
}

/***/ })

});