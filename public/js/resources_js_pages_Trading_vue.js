"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Trading_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Trading.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Trading.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_trading_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-trading-view */ "./node_modules/vue-trading-view/dist/vue-trading-view.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Trading",
  data: function data() {
    return {
      showTrading: true,
      options: {
        "width": '100%',
        "height": 610,
        // "symbol": "BINANCE:BTCUSD",
        "interval": "1",
        "timezone": "Europe/Moscow",
        "theme": "dark",
        "style": "1",
        "locale": "ru",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "hide_side_toolbar": false,
        "calendar": true
      }
    };
  },
  computed: {
    getLocale: function getLocale() {
      return this.$i18n.locale;
    },
    getCourse: function getCourse() {
      return this.$route.query.course;
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.options.locale = this.$i18n.locale;
    console.log(this.getCourse);
    this.showTrading = false;
    setTimeout(function () {
      _this.options.symbol = "BINANCE:" + _this.getCourse + "USD";
      _this.showTrading = true;
    }, 10);
  },
  watch: {
    getLocale: function getLocale() {
      var _this2 = this;

      this.options.locale = this.$i18n.locale;
      this.showTrading = false;
      setTimeout(function () {
        return _this2.showTrading = true;
      }, 10);
    },
    getCourse: function getCourse() {
      this.options.symbol = "BINANCE:" + this.getCourse + "USD";
    }
  },
  components: {
    VueTradingView: vue_trading_view__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./resources/js/pages/Trading.vue":
/*!****************************************!*\
  !*** ./resources/js/pages/Trading.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Trading_vue_vue_type_template_id_72e5e528_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Trading.vue?vue&type=template&id=72e5e528&scoped=true& */ "./resources/js/pages/Trading.vue?vue&type=template&id=72e5e528&scoped=true&");
/* harmony import */ var _Trading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Trading.vue?vue&type=script&lang=js& */ "./resources/js/pages/Trading.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Trading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Trading_vue_vue_type_template_id_72e5e528_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Trading_vue_vue_type_template_id_72e5e528_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "72e5e528",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Trading.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Trading.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/pages/Trading.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Trading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Trading.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Trading.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Trading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Trading.vue?vue&type=template&id=72e5e528&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/Trading.vue?vue&type=template&id=72e5e528&scoped=true& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Trading_vue_vue_type_template_id_72e5e528_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Trading_vue_vue_type_template_id_72e5e528_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Trading_vue_vue_type_template_id_72e5e528_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Trading.vue?vue&type=template&id=72e5e528&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Trading.vue?vue&type=template&id=72e5e528&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Trading.vue?vue&type=template&id=72e5e528&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Trading.vue?vue&type=template&id=72e5e528&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "section section_first" }, [
    _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-12" },
          [
            _vm.showTrading
              ? _c("VueTradingView", { attrs: { options: _vm.options } })
              : _vm._e(),
          ],
          1
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-trading-view/dist/vue-trading-view.esm.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-trading-view/dist/vue-trading-view.esm.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "install": () => (/* binding */ install)
/* harmony export */ });
(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();




var SCRIPT_ID = 'tradingview-widget-script';
var CONTAINER_ID = 'vue-trading-view';

var component = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":_vm.container_id}})},staticRenderFns: [],
  name: 'VueTradingView',
  data: function data() {
    return {
      container_id: CONTAINER_ID
    };
  },
  props: {
    options: String
  },
  methods: {
    canUseDOM: function canUseDOM() {
      return typeof window !== 'undefined' && window.document && window.document.createElement;
    },
    getScriptElement: function getScriptElement() {
      return document.getElementById(SCRIPT_ID);
    },
    updateOnloadListener: function updateOnloadListener(onload) {
      var script = this.getScriptElement();
      var oldOnload = script.onload;
      return script.onload = function () {
        oldOnload();
        onload();
      };
    },
    scriptExists: function scriptExists() {
      return this.getScriptElement() !== null;
    },
    appendScript: function appendScript(onload) {
      if (!this.canUseDOM()) {
        onload();
        return;
      }

      if (this.scriptExists()) {
        if (typeof TradingView === 'undefined') {
          this.updateOnloadListener(onload);
          return;
        }
        onload();
        return;
      }
      var script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'https://s3.tradingview.com/tv.js';
      script.onload = onload;
      document.getElementsByTagName('head')[0].appendChild(script);
    },
    initWidget: function initWidget() {
      if (typeof TradingView === 'undefined') {
        return;
      }

      new window.TradingView.widget(
        Object.assign({ container_id: this.container_id }, this.options)
      );
    },
  },
  mounted: function mounted() {
    this.appendScript(this.initWidget);
  },
}

// Import vue component

// install function executed by Vue.use()
function install(Vue) {
	if (install.installed) { return; }
	install.installed = true;
	Vue.component('VueTradingView', component);
}

// Create module definition for Vue.use()
var plugin = {
	install: install,
};

// To auto-install when vue is found
var GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof __webpack_require__.g !== 'undefined') {
	GlobalVue = __webpack_require__.g.Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component);



/***/ })

}]);