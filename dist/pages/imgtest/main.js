require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([5],{

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(91);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7efe1d03_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(94);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(92)
}
var normalizeComponent = __webpack_require__(6)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7efe1d03"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7efe1d03_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/imgtest/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7efe1d03", Component.options)
  } else {
    hotAPI.reload("data-v-7efe1d03", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 92:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      img: '',
      videoSrc: '',
      ctx: null,
      showCamera: false
    };
  },
  onLoad: function onLoad() {
    this.ctx = wx.createCameraContext();
  },

  methods: {
    // 选取文件
    chosePhoto: function chosePhoto() {
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: function success(res) {
          // tempFilePath可以作为img标签的src属性显示图片
          this.img = res.tempFilePaths;
        }
      });
    },
    showPhoto: function showPhoto() {
      this.showCamera = true;
    },
    takePhoto: function takePhoto() {
      var _this = this;

      this.ctx.takePhoto({
        quality: 'high',
        success: function success(res) {
          _this.img = res.tempImagePath;
        }
      });
    },
    preview: function preview() {
      if (this.img === '') {
        wx.showToast({
          title: '无图片可预览',
          icon: 'none'
        });
        return;
      }
      wx.previewImage({
        urls: [this.img]
      });
    },
    startRecord: function startRecord() {
      this.ctx.startRecord({
        success: function success(res) {
          console.log('startRecord');
        }
      });
    },
    stopRecord: function stopRecord() {
      var _this2 = this;

      this.ctx.stopRecord({
        success: function success(res) {
          debugger;
          _this2.img = res.tempThumbPath;
          _this2.videoSrc = res.tempVideoPath;
        }
      });
    },
    error: function error(e) {
      console.log(e.detail);
    }
  }
});

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container btns"
  }, [(_vm.showCamera) ? _c('camera', {
    staticStyle: {
      "width": "100%",
      "height": "300px"
    },
    attrs: {
      "device-position": "back",
      "flash": "off",
      "binderror": "error",
      "mpcomid": '0'
    }
  }) : _vm._e(), _vm._v(" "), _c('button', {
    staticClass: "p10 mt10",
    attrs: {
      "type": "primary",
      "eventid": '0'
    },
    on: {
      "click": _vm.chosePhoto
    }
  }, [_vm._v("选取相册")]), _vm._v(" "), _c('button', {
    staticClass: "p10 mt10",
    attrs: {
      "type": "primary",
      "eventid": '1'
    },
    on: {
      "click": _vm.showPhoto
    }
  }, [_vm._v("拍照")]), _vm._v(" "), _c('button', {
    staticClass: "p10 mt10",
    attrs: {
      "type": "primary",
      "eventid": '2'
    },
    on: {
      "click": _vm.takePhoto
    }
  }, [_vm._v("咔嚓")]), _vm._v(" "), _c('button', {
    staticClass: "p10 mt10",
    attrs: {
      "type": "primary",
      "eventid": '3'
    },
    on: {
      "click": _vm.startRecord
    }
  }, [_vm._v("开始录像")]), _vm._v(" "), _c('button', {
    staticClass: "p10 mt10",
    attrs: {
      "type": "primary",
      "eventid": '4'
    },
    on: {
      "click": _vm.stopRecord
    }
  }, [_vm._v("结束录像")]), _vm._v(" "), _c('div', {
    staticClass: "mt10",
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": _vm.preview
    }
  }, [_vm._v("预览")]), _vm._v(" "), (_vm.img != '') ? _c('img', {
    attrs: {
      "src": _vm.img,
      "eventid": '6'
    },
    on: {
      "click": _vm.preview
    }
  }) : _vm._e(), _vm._v(" "), (_vm.videoSrc != '') ? _c('video', {
    staticClass: "video",
    attrs: {
      "src": _vm.videoSrc
    }
  }) : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7efe1d03", esExports)
  }
}

/***/ })

},[90]);
//# sourceMappingURL=main.js.map