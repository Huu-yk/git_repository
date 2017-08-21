webpackJsonp([13],{

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(272)

var Component = __webpack_require__(149)(
  /* script */
  __webpack_require__(274),
  /* template */
  __webpack_require__(275),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\zendstudioworkspace\\laravel5.4\\resources\\assets\\js\\components\\page\\UploadMovie.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UploadMovie.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2d34f3a5", Component.options)
  } else {
    hotAPI.reload("data-v-2d34f3a5", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(273);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(150)("f68f7bf4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.14.5@css-loader/index.js!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2d34f3a5\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./UploadMovie.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.14.5@css-loader/index.js!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2d34f3a5\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./UploadMovie.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
exports.push([module.i, "\n.uploadForm{\n    margin-top: 30px;\n}\n.el-rate{\n    margin-top:8px !important;\n}\n", ""]);

/***/ }),

/***/ 274:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            value2: null,
            value3: null,
            files: [],
            dialogImageUrl: '',
            dialogVisible: false,
            photolist: [],

            addMovieInfo: {
                name: '',
                tag_name: '',
                area: '',
                running_time: '',
                release_time: '',
                star: 0,
                introduce: ''
            }

        };
    },

    created: function created() {},
    computed: {},
    methods: {
        disabledDate: function disabledDate() {
            return false;
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
        addMovie: function addMovie() {
            //数据检查
            if (this.addMovieInfo.name == "" || this.addMovieInfo.name == null) {
                this.$message.warning('请输入片名！');
                return;
            }
            if (this.addMovieInfo.tag_name == "" || this.addMovieInfo.tag_name == null) {
                this.$message.warning('请选择标签！');
                return;
            }
            if (isNaN(this.addMovieInfo.running_time)) {
                this.$message.warning('片长必须为数字！');
                return;
            }
            if (this.addMovieInfo.area == "" || this.addMovieInfo.area == null) {
                this.$message.warning('请输入地区！');
                return;
            }
            if (this.addMovieInfo.release_time == "" || this.addMovieInfo.release_time == null) {
                this.$message.warning('请选择上映时间！');
                return;
            }

            //日期处理
            var release_date = this.addMovieInfo.release_time;
            var day = this.moment(release_date).format("YYYY-MM-DD");

            this.axios.post('moviemgr/addMovie', {
                name: this.addMovieInfo.name,
                tag_name: this.addMovieInfo.tag_name,
                area: this.addMovieInfo.area,
                release_time: day,
                star: this.addMovieInfo.star,
                running_time: this.addMovieInfo.running_time,
                introduce: this.addMovieInfo.introduce,
                photolist: this.photolist
            }).then(function (response) {
                this.$message.success('添加成功！');
            }.bind(this)).catch(function (response) {
                this.$message.error('添加失败！');
                console.log(response);
            }.bind(this));
        }
    },
    watch: {},
    filters: {}
});

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "crumbs"
  }, [_c('el-breadcrumb', {
    attrs: {
      "separator": "/"
    }
  }, [_c('el-breadcrumb-item', [_c('i', {
    staticClass: "fa fa-user"
  }), _vm._v(" 电影管理")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("上传电影")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "uploadForm"
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
      "width": "300px"
    },
    model: {
      value: (_vm.addMovieInfo.name),
      callback: function($$v) {
        _vm.addMovieInfo.name = $$v
      },
      expression: "addMovieInfo.name"
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
      "width": "300px"
    },
    model: {
      value: (_vm.addMovieInfo.tag_name),
      callback: function($$v) {
        _vm.addMovieInfo.tag_name = $$v
      },
      expression: "addMovieInfo.tag_name"
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
      "width": "300px"
    },
    model: {
      value: (_vm.addMovieInfo.area),
      callback: function($$v) {
        _vm.addMovieInfo.area = $$v
      },
      expression: "addMovieInfo.area"
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
      "width": "300px"
    },
    attrs: {
      "type": "date",
      "placeholder": "选择日期",
      "picker-options": _vm.disabledDate
    },
    model: {
      value: (_vm.addMovieInfo.release_time),
      callback: function($$v) {
        _vm.addMovieInfo.release_time = $$v
      },
      expression: "addMovieInfo.release_time"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('el-row', [_c('el-col', {
    attrs: {
      "span": 10
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "片长"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "300px"
    },
    model: {
      value: (_vm.addMovieInfo.running_time),
      callback: function($$v) {
        _vm.addMovieInfo.running_time = $$v
      },
      expression: "addMovieInfo.running_time"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 12
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "简介"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "300px"
    },
    attrs: {
      "type": "textarea",
      "rows": 2
    },
    model: {
      value: (_vm.addMovieInfo.introduce),
      callback: function($$v) {
        _vm.addMovieInfo.introduce = $$v
      },
      expression: "addMovieInfo.introduce"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('el-row', [_c('el-col', {
    attrs: {
      "span": 10
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "星级"
    }
  }, [_c('div', {
    staticClass: "block"
  }, [_c('el-rate', {
    attrs: {
      "allow-half": true,
      "colors": ['#99A9BF', '#F7BA2A', '#FF9900']
    },
    model: {
      value: (_vm.addMovieInfo.star),
      callback: function($$v) {
        _vm.addMovieInfo.star = $$v
      },
      expression: "addMovieInfo.star"
    }
  })], 1)])], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 12
    }
  }, [_c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "reset"
    }
  }, [_vm._v("重 置")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.addMovie
    }
  }, [_vm._v("提 交")])], 1)], 1)], 1), _vm._v(" "), _c('el-row', [_c('el-col', {
    attrs: {
      "span": 10
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "图片"
    }
  }, [_c('el-upload', {
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
  })])], 1)], 1)], 1)], 1)], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2d34f3a5", module.exports)
  }
}

/***/ })

});