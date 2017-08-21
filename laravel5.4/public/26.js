webpackJsonp([26],{

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(301)

var Component = __webpack_require__(150)(
  /* script */
  __webpack_require__(303),
  /* template */
  __webpack_require__(304),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\zendstudioworkspace\\laravel5.4\\resources\\assets\\js\\components\\page\\Moviemgr.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Moviemgr.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d654c53c", Component.options)
  } else {
    hotAPI.reload("data-v-d654c53c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(302);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(151)("4f640190", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.14.5@css-loader/index.js!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-d654c53c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./Moviemgr.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.14.5@css-loader/index.js!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-d654c53c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./Moviemgr.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
exports.push([module.i, "\n.moviemgr-handle-box{\n    margin-bottom: 20px;\n}\n.refresh_btn{\n    margin-left:0px !important;\n}\n", ""]);

/***/ }),

/***/ 303:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            //基础数据
            moviedata: [],

            //编辑电影
            editMovieInfo: [],

            //模态框状态
            dialogEditMovieVisible: false,
            dialogIntroduceVisible: false,
            dialogUploadImgVisible: false,

            //查看简介
            introducetext: '',

            files: [],
            dialogImageUrl: '',
            dialogVisible: false,
            photolist: [],
            movieid: ''
        };
    },

    created: function created() {
        this.getAllmovies();
    },
    computed: {},
    methods: {
        getAllmovies: function getAllmovies() {
            this.axios.get('/moviemgr').then(function (response) {
                this.moviedata = response.data;
                this.$message.success('获取成功！');
            }.bind(this)).catch(function (response) {
                this.$message.error('获取失败！');
            }.bind(this));
        },
        iseditMovie: function iseditMovie(row) {
            this.editMovieInfo = row;
            this.dialogEditMovieVisible = true;
        },
        editMovie: function editMovie() {
            //数据检查
            if (this.editMovieInfo.name == "" || this.editMovieInfo.name == null) {
                this.$message.warning('请输入片名！');
                return;
            }
            if (this.editMovieInfo.tag_name == "" || this.editMovieInfo.tag_name == null) {
                this.$message.warning('请选择标签！');
                return;
            }
            if (isNaN(this.editMovieInfo.running_time)) {
                this.$message.warning('片长必须为数字！');
                return;
            }
            if (this.editMovieInfo.area == "" || this.editMovieInfo.area == null) {
                this.$message.warning('请输入地区！');
                return;
            }
            if (this.editMovieInfo.release_time == "" || this.editMovieInfo.release_time == null) {
                this.$message.warning('请选择上映时间！');
                return;
            }

            //日期处理
            var release_date = this.editMovieInfo.release_time;
            var day = this.moment(release_date).format("YYYY-MM-DD");

            this.axios.post('moviemgr/editMovie', {
                id: this.editMovieInfo.id,
                name: this.editMovieInfo.name,
                tag_name: this.editMovieInfo.tag_name,
                area: this.editMovieInfo.area,
                release_time: day,
                star: this.editMovieInfo.star,
                uri: this.editMovieInfo.uri,
                running_time: this.editMovieInfo.running_time,
                introduce: this.editMovieInfo.introduce
            }).then(function (response) {
                this.$message.success('编辑成功！');
                this.dialogEditMovieVisible = false;
                this.getAllmovies();
            }.bind(this)).catch(function (response) {
                this.$message.error('编辑失败！');
                console.log(response);
            }.bind(this));
        },
        isdeleteMovie: function isdeleteMovie(id) {
            var _this = this;

            this.$confirm('确定删除该电影？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(function () {
                _this.axios.post('moviemgr/deleteMovie', {
                    movieid: id
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
        isintroduce: function isintroduce(text) {
            this.introducetext = text;
            this.dialogIntroduceVisible = true;
        },
        handleRemove: function handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePictureCardPreview: function handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        handleSuccess: function handleSuccess(response, file, filelist) {
            this.$message.success('上传成功！');
            this.photolist.push(file.name);
        },
        handleError: function handleError(err, file, filelist) {
            this.$message.error('上传失败！');
            console.log(err);
            console.log(file);
            console.log(filelist);
        },

        isuploadImg: function isuploadImg(id) {
            this.movieid = id;
            this.dialogUploadImgVisible = true;
        },
        uploadImg: function uploadImg() {
            this.axios.post('moviemgr/uploadImg', {
                movieid: this.movieid,
                photolist: this.photolist
            }).then(function (response) {
                console.log(response);
                this.$message.success('操作成功！');
                this.photolist = [];
                this.files = [];
                this.dialogImageUrl = '';
                this.dialogVisible = false;
            }.bind(this)).catch(function (response) {
                this.$message.error('操作失败！');
                console.log(response);
            }.bind(this));

            this.dialogUploadImgVisible = false;
        },
        disabledDate: function disabledDate() {
            return false;
        },

        refresh: function refresh() {
            this.getAllmovies();
        }
    },
    watch: {},
    filters: {}
});

/***/ }),

/***/ 304:
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
    staticClass: "fa fa-video-camera"
  }), _vm._v(" 电影管理")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "moviemgr-handle-box",
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
      "data": _vm.moviedata,
      "border": ""
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "片名",
      "width": "120"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "tag_name",
      "label": "标签",
      "width": "120"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "running_time",
      "label": "片长(分钟)",
      "width": "120"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "area",
      "label": "地区"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "star",
      "label": "星级"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "release_time",
      "label": "上映时间",
      "width": "120"
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
              _vm.iseditMovie(scope.row)
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
              _vm.isdeleteMovie(scope.row.id)
            }
          }
        }, [_vm._v("删除")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "size": "small",
            "plain": true,
            "type": "warning"
          },
          on: {
            "click": function($event) {
              _vm.isintroduce(scope.row.introduce)
            }
          }
        }, [_vm._v("简介")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "size": "small",
            "plain": true,
            "type": "success"
          },
          on: {
            "click": function($event) {
              _vm.isuploadImg(scope.row.id)
            }
          }
        }, [_vm._v("上传图片")])]
      }
    }])
  })], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "编辑电影",
      "visible": _vm.dialogEditMovieVisible
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogEditMovieVisible = $event
      }
    }
  }, [_c('el-form', {
    attrs: {
      "label-width": "80px"
    }
  }, [_c('el-row', [_c('el-col', {
    attrs: {
      "span": 10
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "片名"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    model: {
      value: (_vm.editMovieInfo.name),
      callback: function($$v) {
        _vm.editMovieInfo.name = $$v
      },
      expression: "editMovieInfo.name"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 12
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "标签"
    }
  }, [_c('el-select', {
    staticStyle: {
      "width": "200px"
    },
    model: {
      value: (_vm.editMovieInfo.tag_name),
      callback: function($$v) {
        _vm.editMovieInfo.tag_name = $$v
      },
      expression: "editMovieInfo.tag_name"
    }
  }, [_c('el-option', {
    attrs: {
      "value": "Tag1"
    }
  }, [_vm._v("Tag1")]), _vm._v(" "), _c('el-option', {
    attrs: {
      "value": "Tag2"
    }
  }, [_vm._v("Tag2")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('el-row', [_c('el-col', {
    attrs: {
      "span": 10
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "地区"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    model: {
      value: (_vm.editMovieInfo.area),
      callback: function($$v) {
        _vm.editMovieInfo.area = $$v
      },
      expression: "editMovieInfo.area"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 12
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "上映"
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
      value: (_vm.editMovieInfo.release_time),
      callback: function($$v) {
        _vm.editMovieInfo.release_time = $$v
      },
      expression: "editMovieInfo.release_time"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('el-row', [_c('el-col', {
    attrs: {
      "span": 10
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "星级"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    model: {
      value: (_vm.editMovieInfo.star),
      callback: function($$v) {
        _vm.editMovieInfo.star = $$v
      },
      expression: "editMovieInfo.star"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 12
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "片长"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    model: {
      value: (_vm.editMovieInfo.running_time),
      callback: function($$v) {
        _vm.editMovieInfo.running_time = $$v
      },
      expression: "editMovieInfo.running_time"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('el-row', [_c('el-col', {
    attrs: {
      "span": 22
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "uri"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "467px"
    },
    model: {
      value: (_vm.editMovieInfo.uri),
      callback: function($$v) {
        _vm.editMovieInfo.uri = $$v
      },
      expression: "editMovieInfo.uri"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('el-row', [_c('el-col', {
    attrs: {
      "span": 22
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "简介"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "467px"
    },
    attrs: {
      "type": "textarea",
      "rows": 3
    },
    model: {
      value: (_vm.editMovieInfo.introduce),
      callback: function($$v) {
        _vm.editMovieInfo.introduce = $$v
      },
      expression: "editMovieInfo.introduce"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.dialogEditMovieVisible = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.editMovie
    }
  }, [_vm._v("确 定")])], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "电影简介",
      "visible": _vm.dialogIntroduceVisible
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogIntroduceVisible = $event
      }
    }
  }, [_c('div', [_c('p', [_vm._v(_vm._s(_vm.introducetext))])]), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.dialogIntroduceVisible = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.editMovie
    }
  }, [_vm._v("确 定")])], 1)]), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "上传电影图片",
      "visible": _vm.dialogUploadImgVisible
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogUploadImgVisible = $event
      }
    }
  }, [_c('el-form', [_c('el-row', [_c('el-col', {
    attrs: {
      "span": 22
    }
  }, [_c('el-form-item', [_c('el-upload', {
    attrs: {
      "action": "upload/uploadPhoto",
      "list-type": "picture-card",
      "on-preview": _vm.handlePictureCardPreview,
      "on-error": _vm.handleError,
      "on-success": _vm.handleSuccess,
      "on-remove": _vm.handleRemove,
      "name": "moviePhoto"
    }
  }, [_c('i', {
    staticClass: "el-icon-plus"
  })]), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "size": "tiny"
    },
    model: {
      value: (_vm.dialogVisible),
      callback: function($$v) {
        _vm.dialogVisible = $$v
      },
      expression: "dialogVisible"
    }
  }, [_c('img', {
    attrs: {
      "width": "100%",
      "src": _vm.dialogImageUrl,
      "alt": ""
    }
  })])], 1)], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.dialogUploadImgVisible = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.uploadImg
    }
  }, [_vm._v("确 定")])], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-d654c53c", module.exports)
  }
}

/***/ })

});