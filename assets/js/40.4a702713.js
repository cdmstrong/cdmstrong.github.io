(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{1010:function(n,t,i){"use strict";i.r(t);var a={data:function(){return{loading:!0,friendList:[]}},mounted:function(){this.getInfo()},methods:{getInfo:function(){this.loading=!0;var n=this;this.$http({method:"GET",url:"/json/friend.json"}).then((function(t){n.friendList=t.data,n.loading=!1})).catch((function(n){console.log(n)}))},localhref:function(n){window.open(n)}}},s=(i(957),i(63)),e=Object(s.a)(a,(function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"friend-wrap"},[i("main",[n._m(0),n._v(" "),i("div",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticClass:"friend-card-wrap-box"},[i("div",{staticClass:"friend-card-wrap"},n._l(n.friendList,(function(t){return i("div",{key:t.href+t.icon,staticClass:"friend-card",on:{click:function(i){return n.localhref(t.href)}}},[i("div",[i("img",{attrs:{src:t.icon,alt:""}}),n._v(" "),i("div",[i("a",[n._v(n._s(t.name))]),n._v(" "),i("p",[n._v(n._s(t.description))])])])])})),0)]),n._v(" "),i("div",{staticClass:"valine-wrap"},[i("base-valine")],1)])])}),[function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"rule-card"},[i("p",{staticStyle:{"font-size":"20px","margin-bottom":"30px"}},[n._v("友链，申请规则")]),n._v(" "),i("p",[n._v("\n        如果要和本站交换友链，请按照以下格式发送到\n        "),i("a",{attrs:{href:"mailto:664652740@qq.com"}},[n._v("664652740@qq.com")]),n._v("，或在下方留言区留言\n      ")]),n._v(" "),i("div",{staticClass:"format-wrap"},[i("p",[n._v("名字： 野宁新之助")]),n._v(" "),i("p",[n._v("\n          地址：\n          "),i("a",{attrs:{href:"https://www.sanghangning.cn"}},[n._v("https://www.sanghangning.cn")])]),n._v(" "),i("p",[n._v("描述： 说说我的生活")]),n._v(" "),i("p",[n._v("头像： https://cdn.chenyingshuang.cn/index/avatar.jpg")])])])}],!1,null,"bb4c31c8",null);t.default=e.exports},871:function(n,t,i){},957:function(n,t,i){"use strict";i(871)}}]);