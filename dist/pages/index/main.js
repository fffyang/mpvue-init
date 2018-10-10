require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([3],{

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(95);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5307a380_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(99);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(96)
}
var normalizeComponent = __webpack_require__(9)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5307a380"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5307a380_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5307a380", Component.options)
  } else {
    hotAPI.reload("data-v-5307a380", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 96:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_global_store__ = __webpack_require__(41);


//
//
//
//
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
      userInfo: {},
      code: '',
      isAgree: true
    };
  },
  onLoad: function onLoad() {
    this.getUserInfo();
  },
  mounted: function mounted() {
    this.getSetting();
  },

  methods: {
    // 页面跳转
    routerLink: function routerLink(path) {
      wx.navigateTo({ url: path });
    },
    bindGetUserInfo: function bindGetUserInfo(e) {
      // console.log(e.mp.detail.rawData)
      if (e.mp.detail.rawData) {
        this.isAgree = true;
        // 用户按了允许授权按钮
        console.log('用户按了允许授权按钮');
      } else {
        // 用户按了拒绝按钮
        console.log('用户按了拒绝按钮');
      }
    },

    // 查看用户是否授权
    getSetting: function getSetting() {
      var _this = this;

      wx.getSetting({
        success: function success(res) {
          if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              success: function success(res) {
                _this.isAgree = true;
                console.log(res.userInfo);
                // 用户已经授权过
                console.log('用户已经授权过');
              }
            });
          } else {
            _this.isAgree = false;
            console.log('用户还未授权过');
          }
        }
      });
    },

    // 获取用户信息
    getUserInfo: function getUserInfo() {
      var _this2 = this;

      wx.login({
        success: function success(res) {
          // 返回code
          _this2.code = res.code;
          console.log('code', _this2.code);
          wx.getUserInfo({
            success: function success(res) {
              _this2.userInfo = _this2.$new(res.userInfo);
              console.log('user', _this2.userInfo);
            }
          });
        }
      });
    },

    // 测试api
    testApi: function testApi() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var datas;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this3.$get('https://api.weixin.qq.com/sns/jscode2session', {
                  appid: 'wx084b1e5fc068635c',
                  secret: '0df3179f4469b584e97310551bf0cc69',
                  js_code: _this3.code,
                  grant_type: 'authorization_code'
                });

              case 2:
                datas = _context.sent;

                console.log('userKey', datas);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this3);
      }))();
    }
  },
  computed: {
    count: function count() {
      return __WEBPACK_IMPORTED_MODULE_2__stores_global_store__["a" /* default */].state.count;
    }
  }
});

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [(!_vm.isAgree) ? _c('button', {
    staticClass: "p10",
    attrs: {
      "open-type": "getUserInfo",
      "eventid": '0'
    },
    on: {
      "getuserinfo": _vm.bindGetUserInfo
    }
  }, [_vm._v("获取权限")]) : _vm._e(), _vm._v(" "), (_vm.userInfo.avatarUrl && _vm.userInfo.avatarUrl != '') ? _c('image', {
    staticClass: "user-logo",
    attrs: {
      "src": _vm.userInfo.avatarUrl,
      "mode": "widthFix"
    }
  }) : _vm._e(), _vm._v(" "), _c('p', {
    staticClass: "text-center mb20"
  }, [_vm._v(_vm._s(_vm.userInfo.nickName))]), _vm._v(" "), _c('div', [_vm._v("计数结果：" + _vm._s(_vm.count))]), _vm._v(" "), _c('a', {
    staticClass: "navlink mt10",
    attrs: {
      "href": "/pages/test1/main?test='test'"
    }
  }, [_vm._v("进入计数器页面")]), _vm._v(" "), _c('button', {
    staticClass: "mt10 p10",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.routerLink('/pages/test1/main?test=test')
      }
    }
  }, [_vm._v("跳转计数器页面")]), _vm._v(" "), _c('button', {
    staticClass: "mt10 p10",
    attrs: {
      "type": "primary",
      "eventid": '2'
    },
    on: {
      "click": _vm.testApi
    }
  }, [_vm._v("http测试")]), _vm._v(" "), _c('button', {
    staticClass: "mt10 p10",
    attrs: {
      "type": "primary",
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.routerLink('/pages/imgtest/main')
      }
    }
  }, [_vm._v("图片测试")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5307a380", esExports)
  }
}

/***/ })

},[94]);
//# sourceMappingURL=main.js.map