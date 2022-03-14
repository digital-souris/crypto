"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[794],{2635:(t,e,a)=>{a.d(e,{Z:()=>r});var o=a(3645),s=a.n(o)()((function(t){return t[1]}));s.push([t.id,'.table a[data-v-d7d2b17a]{color:#4fe2c3;text-decoration:none}.table th[data-v-d7d2b17a]{color:#818f98;font-size:15px;font-weight:400;padding-bottom:10px}.table td[data-v-d7d2b17a]{color:#b7c2c9;font-size:15px;padding-bottom:20px;position:relative}.table td[data-v-d7d2b17a]:before{bottom:0;content:"";height:10px;left:0;position:absolute;right:0;width:100%}.table img[data-v-d7d2b17a]{max-width:42px;vertical-align:middle}.table span[data-v-d7d2b17a]{margin-left:12px;vertical-align:middle}.crypto__change[data-v-d7d2b17a]{border:1px solid;border-radius:8px;font-size:12px;font-style:normal;font-weight:400;padding:4px}.crypto__change_true[data-v-d7d2b17a]{border-color:#4fe2c3;color:#4fe2c3}.crypto__change_false[data-v-d7d2b17a]{border-color:red;color:red}',""]);const r=s},1794:(t,e,a)=>{a.r(e),a.d(e,{default:()=>l});const o={name:"TradingList"};var s=a(3379),r=a.n(s),d=a(2635),n={insert:"head",singleton:!1};r()(d.Z,n);d.Z.locals;const l=(0,a(1900).Z)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section section_padding section_first"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12",staticStyle:{"overflow-x":"auto"}},[a("table",{staticClass:"table table-responsive table-borderless",staticStyle:{"margin-top":"40px"}},[a("thead",[a("tr",[a("th",[t._v(t._s(t.$t("table.name")))]),t._v(" "),a("th",[t._v(t._s(t.$t("table.mtk_cap")))]),t._v(" "),a("th",[t._v(t._s(t.$t("table.ticker")))]),t._v(" "),a("th",[t._v(t._s(t.$t("table.price")))]),t._v(" "),a("th",[t._v(t._s(t.$t("table.trade_vol")))]),t._v(" "),a("th",[t._v(t._s(t.$t("table.dynamics")))])])]),t._v(" "),a("tbody",t._l(t.$store.getters.getCryptoFull,(function(e){return a("tr",{key:e.id},[a("td",[a("router-link",{attrs:{to:"/trading-item?course="+e.symbol}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/img/crypto/"+e.symbol.toLowerCase()+".png",expression:"'/img/crypto/' +crypto.symbol.toLowerCase()+ '.png'"}],attrs:{alt:e.symbol}}),t._v(" "),a("span",[t._v(t._s(e.name))])])],1),t._v(" "),a("td",[t._v(t._s(e.quote.USD.market_cap))]),t._v(" "),a("td",[t._v(t._s(e.symbol))]),t._v(" "),a("td",[t._v("\n\t\t\t\t\t\t\t$"+t._s(e.quote.USD.price.toFixed(5))+"\n\t\t\t\t\t\t")]),t._v(" "),a("td",[t._v(t._s(e.cmc_rank))]),t._v(" "),a("td",[a("div",{staticClass:"crypto__change text-center",class:e.quote.USD.percent_change_1h>0?"crypto__change_true":"crypto__change_false"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.quote.USD.percent_change_1h.toFixed(2))+" %\n\t\t\t\t\t\t\t")])])])})),0)])])])])])}),[],!1,null,"d7d2b17a",null).exports}}]);