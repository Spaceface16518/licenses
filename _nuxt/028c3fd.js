(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{241:function(t,e,n){"use strict";n.r(e);var r=n(6),c=(n(37),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("licenses").only(["title","spdx-id","slug","featured"]).fetch();case 3:return r=e.sent,e.abrupt("return",{licenses:r});case 5:case"end":return e.stop()}}),e)})))()}}),l=n(48),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("h1",[t._v("Licenses")]),t._v(" "),n("ul",{staticClass:"py-4 text-lg list-disc ml-2"},t._l(t.licenses,(function(e){return n("li",{key:e["spdx-id"],staticClass:"p-1"},[n("NuxtLink",{staticClass:"text-gray-900 dark:text-gray-200",attrs:{to:"/"+e.slug}},[t._v("\n        "+t._s(e.title)+"\n        "),n("span",{staticClass:"text-gray-400"},[t._v("("+t._s(e["spdx-id"])+")")])]),t._v(" "),e.featured?n("span",[t._v("⭐")]):t._e()],1)})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);