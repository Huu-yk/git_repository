webpackJsonp([31],{

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(280)

var Component = __webpack_require__(150)(
  /* script */
  __webpack_require__(282),
  /* template */
  __webpack_require__(283),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\zendstudioworkspace\\laravel5.4\\resources\\assets\\js\\components\\page\\Adminmgr.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Adminmgr.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-39f86f3a", Component.options)
  } else {
    hotAPI.reload("data-v-39f86f3a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(281);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(151)("10008fb4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.14.5@css-loader/index.js!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-39f86f3a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./Adminmgr.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.14.5@css-loader/index.js!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-39f86f3a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./Adminmgr.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
exports.push([module.i, "\n.adminmgr-handle-box{\n    margin-bottom: 20px;\n}\n.refresh_btn{\n    margin-left:0px !important;\n}\n", ""]);

/***/ }),

/***/ 282:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            //所有用户数据
            userlist: [],

            //时间选择器
            date_picker: '',

            //单个用户数据
            user_row: [],

            //模态框显示状态
            dialogEditFormVisible: false,
            dialogRepealVisible: false,
            dialogDeleteVisible: false,

            //撤销角色
            repeal_id: '',

            //删除用户
            del_id: ''
        };
    },

    created: function created() {
        this.getAllAdmin();
    },
    computed: {
        datalist: function datalist() {
            var self = this;
            return self.userlist;
        }
    },
    methods: {
        getAllAdmin: function getAllAdmin() {
            this.axios.get('/usermgr/getadmin').then(function (response) {
                this.userlist = response.data;
                this.$message.success('获取成功！');
            }.bind(this)).catch(function (response) {
                console.log(response);
                this.$message.error(response);
            }.bind(this));
        },
        iseditUser: function iseditUser(row) {
            this.dialogEditFormVisible = true;
            this.user_row = row;
            this.date_picker = row.birthday;
        },
        editUser: function editUser() {
            //数据检查
            var mytele = /^[1][3,4,5,7,8][0-9]{9}$/;
            if (this.user_row.telephone != '') {
                if (!mytele.test(this.user_row.telephone)) {
                    this.$message.error('手机号码格式错误！');
                    return;
                }
            }
            if (this.user_row.name == '') {
                this.$message.error('请输入名称！');
                return;
            }

            var requestUrl = '/usermgr/' + this.user_row.id;
            this.axios.patch(requestUrl, {
                name: this.user_row.name,
                sex: this.user_row.sex,
                tele: this.user_row.telephone,
                birth: this.date_picker,
                edu: this.user_row.education,
                address: this.user_row.address
            }).then(function (response) {
                this.$message.success('编辑成功！');
            }.bind(this)).catch(function (response) {
                this.$message.error('编辑失败！');
                this.$message.error(response);
            }.bind(this));
            this.dialogEditFormVisible = false;
        },
        isdelUser: function isdelUser(id) {
            this.del_id = id;
            this.dialogDeleteVisible = true;
        },
        delUser: function delUser() {
            var requestUrl = '/usermgr/' + this.del_id;
            this.axios.delete(requestUrl).then(function (response) {
                this.$message.success('删除成功！');
            }.bind(this)).catch(function (response) {
                this.$message.error('删除失败！');
                this.$message.error(response);
            }.bind(this));
            this.dialogDeleteVisible = false;
        },
        isrepealUser: function isrepealUser(id) {
            this.repeal_id = id;
            this.dialogRepealVisible = true;
        },
        repealUser: function repealUser() {
            console.log(this.repeal_id);
            //var requestUrl  = '/usermgr/'+ this.del_id
            /*this.axios.delete(requestUrl).then(function (response) {
                this.$message.success('删除成功！')
            }.bind(this)).catch(function (response) {
                this.$message.error('删除失败！')
                this.$message.error(response)
            }.bind(this));*/
            this.dialogRepealVisible = false;
        },
        disabledDate: function disabledDate() {
            //console.log(time.getTime() < Date.now() - 8.64e7);
            return false;
        },

        refresh: function refresh() {
            this.getAllAdmin();
        }
    },
    watch: {},
    filters: {}
});

/***/ }),

/***/ 283:
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
    staticClass: "fa fa-user"
  }), _vm._v(" 用户管理")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("管理员管理")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "adminmgr-handle-box",
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
      "data": _vm.datalist,
      "border": ""
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "姓名",
      "width": "120"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "email",
      "label": "邮箱",
      "width": "200"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "login_ip",
      "label": "最近登陆IP",
      "width": "130"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "login_time",
      "sortable": "",
      "label": "最近登陆时间"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "width": "220"
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
              _vm.iseditUser(scope.row)
            }
          }
        }, [_vm._v("编辑")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "size": "small",
            "plain": true,
            "type": "warning"
          },
          on: {
            "click": function($event) {
              _vm.isrepealUser(scope.row.id)
            }
          }
        }, [_vm._v("撤销")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "size": "small",
            "plain": true,
            "type": "danger"
          },
          on: {
            "click": function($event) {
              _vm.isdelUser(scope.row.id)
            }
          }
        }, [_vm._v("删除")])]
      }
    }])
  })], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "编辑用户信息",
      "visible": _vm.dialogEditFormVisible
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogEditFormVisible = $event
      }
    }
  }, [_c('el-form', {
    attrs: {
      "model": _vm.user_row,
      "label-width": "80px"
    }
  }, [_c('el-row', [_c('el-col', {
    attrs: {
      "span": 10
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
      value: (_vm.user_row.name),
      callback: function($$v) {
        _vm.user_row.name = $$v
      },
      expression: "user_row.name"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 12
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "性别"
    }
  }, [_c('el-select', {
    staticStyle: {
      "width": "200px"
    },
    model: {
      value: (_vm.user_row.sex),
      callback: function($$v) {
        _vm.user_row.sex = $$v
      },
      expression: "user_row.sex"
    }
  }, [(_vm.user_row.sex == '女') ? _c('el-option', {
    attrs: {
      "value": "男"
    }
  }, [_vm._v("男")]) : _vm._e(), _vm._v(" "), (_vm.user_row.sex == '男') ? _c('el-option', {
    attrs: {
      "value": "女"
    }
  }, [_vm._v("女")]) : _vm._e()], 1)], 1)], 1)], 1), _vm._v(" "), _c('el-row', [_c('el-col', {
    attrs: {
      "span": 10
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "邮箱"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "disabled": true
    },
    model: {
      value: (_vm.user_row.email),
      callback: function($$v) {
        _vm.user_row.email = $$v
      },
      expression: "user_row.email"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 12
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "生日"
    }
  }, [_c('el-date-picker', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "type": "date",
      "placeholder": "选择日期",
      "picker-options": _vm.disabledDate
    },
    model: {
      value: (_vm.date_picker),
      callback: function($$v) {
        _vm.date_picker = $$v
      },
      expression: "date_picker"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('el-row', [_c('el-col', {
    attrs: {
      "span": 10
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "电话"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    model: {
      value: (_vm.user_row.telephone),
      callback: function($$v) {
        _vm.user_row.telephone = $$v
      },
      expression: "user_row.telephone"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 12
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "学历"
    }
  }, [_c('el-select', {
    staticStyle: {
      "width": "200px"
    },
    model: {
      value: (_vm.user_row.education),
      callback: function($$v) {
        _vm.user_row.education = $$v
      },
      expression: "user_row.education"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "本科",
      "value": "本科"
    }
  }, [_vm._v("本科")]), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "硕士",
      "value": "硕士"
    }
  }, [_vm._v("硕士")]), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "博士",
      "value": "博士"
    }
  }, [_vm._v("博士")]), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "专科",
      "value": "专科"
    }
  }, [_vm._v("专科")]), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "高中",
      "value": "高中"
    }
  }, [_vm._v("高中")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('el-row', [_c('el-form-item', {
    attrs: {
      "label": "地址"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "467px"
    },
    model: {
      value: (_vm.user_row.address),
      callback: function($$v) {
        _vm.user_row.address = $$v
      },
      expression: "user_row.address"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('div', {
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
      "type": "primary"
    },
    on: {
      "click": _vm.editUser
    }
  }, [_vm._v("确 定")])], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "visible": _vm.dialogRepealVisible,
      "size": "tiny"
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogRepealVisible = $event
      }
    }
  }, [_c('span', [_vm._v("确定撤销角色？")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.dialogRepealVisible = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "danger"
    },
    on: {
      "click": _vm.repealUser
    }
  }, [_vm._v("确 定")])], 1)]), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "提示",
      "visible": _vm.dialogDeleteVisible,
      "size": "tiny"
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogDeleteVisible = $event
      }
    }
  }, [_c('span', [_vm._v("确定删除该用户？")]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.dialogDeleteVisible = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "danger"
    },
    on: {
      "click": _vm.delUser
    }
  }, [_vm._v("确 定")])], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-39f86f3a", module.exports)
  }
}

/***/ })

});