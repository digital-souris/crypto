"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Login_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Login.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Login.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Login",
  data: function data() {
    return {
      form: {
        Login: [{
          name: 'email',
          value: '',
          type: 'email'
        }, {
          name: 'password',
          value: '',
          type: 'password'
        }],
        Register: [{
          name: 'email',
          value: '',
          type: 'email'
        }, {
          name: 'password',
          value: '',
          type: 'password'
        }, {
          name: 'password_confirmation',
          value: '',
          type: 'password'
        }]
      },
      errors: null
    };
  },
  methods: {
    sendForm: function sendForm() {
      var _this = this;

      this.errors = null;
      var data = {};

      var _iterator = _createForOfIteratorHelper(this.form[this.$route.name]),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          data[item.name] = item.value;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (this.$route.name === 'Register') {
        this.axios.post('/auth/register', data).then(function () {
          _this.$router.push('/login');
        })["catch"](function (e) {
          _this.errors = e.response.data.errors;
        });
      } else if (this.$route.name === 'Login') {
        this.axios.post('/auth/login', data).then(function (resp) {
          localStorage.setItem('token', resp.data.access_token);
          localStorage.setItem('tokenTime', moment__WEBPACK_IMPORTED_MODULE_0___default()().add(resp.data.expires_in, 'second').format('TTl'));
          _this.axios.defaults.headers.common = {
            'Authorization': "bearer ".concat(resp.data.access_token)
          };

          _this.$store.commit('changeUser', resp.data.user);

          _this.$router.push('/');
        })["catch"](function (e) {
          _this.$notify({
            type: 'error',
            text: _this.$t('notify.login')
          });
        });
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/Login.vue":
/*!**************************************!*\
  !*** ./resources/js/pages/Login.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Login_vue_vue_type_template_id_3b6adb30_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=3b6adb30&scoped=true& */ "./resources/js/pages/Login.vue?vue&type=template&id=3b6adb30&scoped=true&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/pages/Login.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_3b6adb30_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Login_vue_vue_type_template_id_3b6adb30_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3b6adb30",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Login.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Login.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/pages/Login.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Login.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Login.vue?vue&type=template&id=3b6adb30&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/Login.vue?vue&type=template&id=3b6adb30&scoped=true& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_3b6adb30_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_3b6adb30_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_3b6adb30_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=template&id=3b6adb30&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Login.vue?vue&type=template&id=3b6adb30&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Login.vue?vue&type=template&id=3b6adb30&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Login.vue?vue&type=template&id=3b6adb30&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "auth" }, [
            _c("div", { staticClass: "auth__wrapper" }, [
              _c("div", { staticClass: "auth__head" }, [
                _c("div", { staticClass: "auth__title" }, [
                  _vm._v(
                    "\n\t\t\t\t\t\t\t\t" +
                      _vm._s(_vm.$t("authPage." + _vm.$route.name + ".title")) +
                      "\n\t\t\t\t\t\t\t"
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "auth__body" }, [
                _c(
                  "form",
                  {
                    attrs: { autocomplete: "off" },
                    on: {
                      submit: function ($event) {
                        $event.preventDefault()
                        return _vm.sendForm.apply(null, arguments)
                      },
                    },
                  },
                  [
                    _vm._l(_vm.form[_vm.$route.name], function (item, index) {
                      return _c(
                        "div",
                        { key: index, staticClass: "auth__item" },
                        [
                          item.type === "checkbox"
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: item.value,
                                    expression: "item.value",
                                  },
                                ],
                                attrs: {
                                  name: item.name,
                                  placeholder: _vm.$t(
                                    "authPage.form." + item.name
                                  ),
                                  type: "checkbox",
                                },
                                domProps: {
                                  checked: Array.isArray(item.value)
                                    ? _vm._i(item.value, null) > -1
                                    : item.value,
                                },
                                on: {
                                  change: function ($event) {
                                    var $$a = item.value,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = null,
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          _vm.$set(
                                            item,
                                            "value",
                                            $$a.concat([$$v])
                                          )
                                      } else {
                                        $$i > -1 &&
                                          _vm.$set(
                                            item,
                                            "value",
                                            $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1))
                                          )
                                      }
                                    } else {
                                      _vm.$set(item, "value", $$c)
                                    }
                                  },
                                },
                              })
                            : item.type === "radio"
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: item.value,
                                    expression: "item.value",
                                  },
                                ],
                                attrs: {
                                  name: item.name,
                                  placeholder: _vm.$t(
                                    "authPage.form." + item.name
                                  ),
                                  type: "radio",
                                },
                                domProps: { checked: _vm._q(item.value, null) },
                                on: {
                                  change: function ($event) {
                                    return _vm.$set(item, "value", null)
                                  },
                                },
                              })
                            : _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: item.value,
                                    expression: "item.value",
                                  },
                                ],
                                attrs: {
                                  name: item.name,
                                  placeholder: _vm.$t(
                                    "authPage.form." + item.name
                                  ),
                                  type: item.type,
                                },
                                domProps: { value: item.value },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(item, "value", $event.target.value)
                                  },
                                },
                              }),
                          _vm._v(" "),
                          _vm.errors && _vm.errors[item.name]
                            ? _c("div", { staticClass: "auth__error" }, [
                                _vm._v(_vm._s(_vm.errors[item.name][0])),
                              ])
                            : _vm._e(),
                        ]
                      )
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "auth__button" }, [
                      _c(
                        "button",
                        { staticClass: "button button_green button_auth" },
                        [
                          _vm._v(
                            _vm._s(_vm.$t("authPage.button." + _vm.$route.name))
                          ),
                        ]
                      ),
                    ]),
                  ],
                  2
                ),
              ]),
            ]),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);