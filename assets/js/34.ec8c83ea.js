(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{857:function(t,i,e){},933:function(t,i,e){"use strict";e(857)},996:function(t,i,e){"use strict";e.r(i);e(233),e(231),e(64);var s={props:{value:{type:String},imgName:{type:String,default:""},imgType:{type:String,default:"jpg"},imgBoxHeight:{type:Number,default:180},number:{type:Number,default:0},list:{type:Array,default:function(){return[]}}},data:function(){return{imgsArr:[]}},mounted:function(){if(this.list.length>0)this.imgsArr=this.list;else for(var t=1;t<=this.number;t++)this.imgsArr.push("http://cdn.chenyingshuang.cn/".concat(this.value).concat(this.imgName).concat(t,".").concat(this.imgType,"?imageMogr2/auto-orient"))},methods:{getSrcList:function(t){return this.imgsArr.slice(t).concat(this.imgsArr.slice(0,t))}}},r=(e(933),e(63)),n=Object(r.a)(s,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"photo-list"},t._l(t.imgsArr,(function(i,s){return e("el-image",{key:i,style:{height:t.imgBoxHeight+"px"},attrs:{previewSrcList:t.getSrcList(s),src:i,fit:"cover",lazy:""}},[e("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[e("i",{staticClass:"el-icon-picture-outline"})]),t._v(" "),e("div",{staticClass:"loading-image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[e("i",{staticClass:"el-icon-loading"})])])})),1)}),[],!1,null,"facf3db8",null);i.default=n.exports}}]);