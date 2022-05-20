"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[116],{2824:(t,a,e)=>{e.d(a,{Z:()=>n});var s=e(3645),i=e.n(s)()((function(t){return t[1]}));i.push([t.id,".cabinet__avatar[data-v-81fa162e]{border-radius:10em;overflow:hidden}.cabinet__avatar img[data-v-81fa162e]{max-width:100%;vertical-align:top}.balance[data-v-81fa162e]{padding-bottom:15px}.balance__image img[data-v-81fa162e]{max-width:100%;vertical-align:top}.balance__count[data-v-81fa162e]{color:#fff;font-size:18px;font-weight:400}.balance__symbol[data-v-81fa162e]{color:#818f98;font-size:15px;font-weight:400}.balance__total b[data-v-81fa162e]{display:inline-block;padding-top:4px}.table[data-v-81fa162e]{border:none;margin-bottom:0}.table th[data-v-81fa162e]{background:#041d2e;box-shadow:none;color:#818f98;font-size:15px;font-weight:400;padding:12px 20px;text-transform:uppercase}.table tbody[data-v-81fa162e],.table td[data-v-81fa162e],.table th[data-v-81fa162e]{border:none}.table td[data-v-81fa162e]{background:#031f31;box-shadow:none;color:#b7c2c9;font-size:17px;font-weight:400;padding:20px}",""]);const n=i},6116:(t,a,e)=>{e.r(a),e.d(a,{default:()=>d});function s(t,a){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,a){if(!t)return;if("string"==typeof t)return i(t,a);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(t,a)}(t))||a&&t&&"number"==typeof t.length){e&&(t=e);var s=0,n=function(){};return{s:n,n:function(){return s>=t.length?{done:!0}:{done:!1,value:t[s++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return l=t.done,t},e:function(t){c=!0,o=t},f:function(){try{l||null==e.return||e.return()}finally{if(c)throw o}}}}function i(t,a){(null==a||a>t.length)&&(a=t.length);for(var e=0,s=new Array(a);e<a;e++)s[e]=t[e];return s}const n={name:"Overview",data:function(){return{balance:[{symbol:"BTC",count:.013212},{symbol:"ETH",count:.013212},{symbol:"USDT",count:.013212}],orderName:["id","time","type","amount","status","balance"],orders:[{id:1,time:"2021-12-06 18:57:20",type:"Promo-code",amount:"0.012 BTC",status:"Completed",balance:"0.012 BTC"},{id:2,time:"2021-12-06 18:57:20",type:"Promo-code",amount:"0.012 BTC",status:"Completed",balance:"0.012 BTC"}]}},computed:{getTotalCount:function(){var t,a=this,e=0,i=s(this.$store.getters.getCryptoFull);try{var n=function(){var s=t.value,i=_.find(a.balance,(function(t){return t.symbol.toUpperCase()===s.symbol}));i&&(e+=i.count*s.quote.USD.price)};for(i.s();!(t=i.n()).done;)n()}catch(t){i.e(t)}finally{i.f()}return e}}};var o=e(3379),l=e.n(o),c=e(2824),r={insert:"head",singleton:!1};l()(c.Z,r);c.Z.locals;const d=(0,e(1900).Z)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-lg-6"},[e("div",{staticClass:"cabinet__wrap"},[e("div",{staticClass:"cabinet__head"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-2"},[e("div",{staticClass:"cabinet__avatar"},[e("img",{attrs:{src:t.$store.getters.getUser.avatar||"/img/no-avatar.png",alt:t.$store.getters.getUser.email}})])]),t._v(" "),e("div",{staticClass:"col-12 col-md-6 pt-3 pt-md-0"},[e("div",{staticClass:"cabinet__title"},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.$t("cabinet.kompozitum"))+"\n\t\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"cabinet__desc"},[e("svg",{attrs:{width:"20",height:"17",viewBox:"0 0 20 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M20 2.5C20 1.4 19.1 0.5 18 0.5H2C0.9 0.5 0 1.4 0 2.5V14.5C0 15.6 0.9 16.5 2 16.5H18C19.1 16.5 20 15.6 20 14.5V2.5ZM18 2.5L10 7.49L2 2.5H18ZM18 14.5H2V4.5L10 9.5L18 4.5V14.5Z",fill:"#4FE2C3"}})]),t._v(" "),e("span",[t._v(t._s(t.$store.getters.getUser.email))])])]),t._v(" "),e("div",{staticClass:"col-12 col-md-4 pt-3 pt-md-0"},[e("div",{staticClass:"cabinet__title text-md-end"},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.$t("cabinet.total_log"))+"\n\t\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"cabinet__desc text-md-end"},[t._v("9 Time (Today 1 Times)")])])])]),t._v(" "),e("div",{staticClass:"cabinet__body"},[e("div",{staticClass:"cabinet__title"},[t._v("\n\t\t\t\t\t"+t._s(t.$t("cabinet.use_bonus_promo_code"))+"\n\t\t\t\t")]),t._v(" "),e("form",{staticClass:"row pt-2"},[t._m(0),t._v(" "),e("div",{staticClass:"col-12 col-md-4"},[e("button",{staticClass:"button button_green button_cabinet"},[t._v(t._s(t.$t("cabinet.activate")))])])])])])]),t._v(" "),e("div",{staticClass:"col-12 col-lg-6"},[e("div",{staticClass:"cabinet__wrap"},[e("div",{staticClass:"cabinet__head"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"cabinet__title"},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.$t("cabinet.available_balance"))+"\n\t\t\t\t\t\t")])])]),t._v(" "),e("div",{staticClass:"row",staticStyle:{"padding-top":"18px"}},t._l(t.balance,(function(a,s){return e("div",{key:s,staticClass:"col-6 col-md-4"},[e("div",{staticClass:"balance"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-4"},[e("div",{staticClass:"balance__image"},[e("img",{attrs:{src:"/img/crypto/"+a.symbol.toLowerCase()+".png",alt:a.symbol}})])]),t._v(" "),e("div",{staticClass:"col-8"},[e("div",{staticClass:"balance__count"},[t._v(t._s(a.count))]),t._v(" "),e("div",{staticClass:"balance__symbol"},[t._v(t._s(a.symbol.toUpperCase()))])])])])])})),0)]),t._v(" "),e("div",{staticClass:"cabinet__body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-4"},[e("div",{staticClass:"balance__total"},[e("span",{staticClass:"cabinet__desc"},[t._v(t._s(t.$t("cabinet.total_equity")))]),t._v(" "),e("br"),t._v(" "),e("b",{staticClass:"cabinet__title"},[t._v(t._s(t.getTotalCount.toFixed(4))+" USD")])])]),t._v(" "),e("div",{staticClass:"col-12 col-md-8"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-6"},[e("router-link",{staticClass:"button button_green button_cabinet",attrs:{to:"lk/deposit"}},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.$t("lkMenu.deposit"))+"\n\t\t\t\t\t\t\t\t")])],1),t._v(" "),e("div",{staticClass:"col-12 col-md-6 pt-2 pt-md-0"},[e("router-link",{staticClass:"button button_red button_cabinet",attrs:{to:"lk/withdraw"}},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.$t("lkMenu.withdraw"))+"\n\t\t\t\t\t\t\t\t")])],1)])])])])])]),t._v(" "),e("div",{staticClass:"col-12"},[e("div",{staticClass:"cabinet__wrap"},[e("div",{staticClass:"cabinet__head"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"cabinet__title"},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.$t("cabinet.transactions_history"))+"\n\t\t\t\t\t\t")])])])]),t._v(" "),e("div",{staticClass:"cabinet__body cabinet__body_full"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table "},[e("thead",[e("tr",t._l(t.orderName,(function(a,s){return e("th",{key:s},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(t.$t("cabinet.table."+a))+"\n\t\t\t\t\t\t\t\t\t")])})),0)]),t._v(" "),e("tbody",t._l(t.orders,(function(a,s){return e("tr",{key:s},t._l(a,(function(a,s,i){return e("td",{key:i},[t._v(t._s(a))])})),0)})),0)])])])])])])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col-12 col-md-8 auth__item"},[a("input",{attrs:{type:"text",placeholder:"Enter promo-code"}})])}],!1,null,"81fa162e",null).exports}}]);