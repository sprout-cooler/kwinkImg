(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-529e"],{"/FF1":function(t,e,n){"use strict";var a=n("fIZt");n.n(a).a},K264:function(t,e,n){"use strict";n.r(e);var a=n("Kos7"),s=n("aFx9"),o=n("MQ60"),r={name:"MenuConfig",display:"Two Lists",order:1,components:{draggable:n.n(o).a},data:function(){return{show:!1,tableData:[],used:[],cancel:[],loading:!0}},watch:{siteBase:function(){console.log("hello")},config:function(){console.log("change")}},created:function(){this.loadStore()},methods:{loadStore:function(){var t=this;Object(s.d)().then(function(e){var n=0,a=0;e.list.forEach(function(e){e.status?(t.used[n]=e,n++):(t.cancel[a]=e,a++)})}).then(function(){t.show=!0,t.loading=!1,console.log(t.used)})},resetLink:function(t){this.sinaEx="https://ws3.sinaimg.cn/"+t+"/0072Vf1pgy1foxk7j6oxuj31hc0u0k6u"},reset:function(t){var e=this;Object(a.d)(t).then(function(t){e.$message({message:"修改成功",type:"success"})})},add:function(){this.list.push({name:"Juan"})},replace:function(){this.list=[{name:"Edgard"}]},clone:function(t){return{name:t.name+" cloned"}},log:function(t){window.console.log(t)},resetMenu:function(){var t=this,e={enable:this.used,disable:this.cancel};Object(a.e)(e).then(function(e){t.$message({message:"修改成功",type:"success"})})}}},i=(n("/FF1"),n("KHd+")),c=Object(i.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dashboard-editor-container"},[n("el-row",{attrs:{gutter:8}},[n("el-col",{staticClass:"box",attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[n("el-card",{},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",{staticStyle:{"font-size":"25px"}},[n("svg-icon",{attrs:{"icon-class":"menu"}}),t._v(" 菜单管理")],1),t._v(" "),n("el-button",{staticStyle:{float:"right"},attrs:{type:"success",plain:"",round:"",icon:"el-icon-success"},on:{click:t.resetMenu}},[t._v("保存")])],1),t._v(" "),t.loading?n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br")]):t._e(),t._v(" "),n("transition",{attrs:{name:"el-fade-in-linear"}},[t.show?n("div",[n("el-row",[n("el-col",{staticStyle:{margin:"10px"},attrs:{xs:24,sm:24,md:11,lg:11,xl:11}},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v("启用的图床")])]),t._v(" "),n("draggable",{staticClass:"list-group",attrs:{list:t.used,group:"people"},on:{change:t.log}},[t._l(t.used,function(e,a){return n("el-card",{key:e.name,staticClass:"list-card-group-item",attrs:{shadow:"hover"}},[n("span",[n("svg-icon",{staticStyle:{color:"#3fb911"},attrs:{"icon-class":e.icon}}),t._v("\n                        "+t._s(e.name)+" "),n("el-tag",{attrs:{type:"danger",size:"mini"}},[t._v(t._s(e.rank))]),t._v(" "),n("el-tag",{attrs:{type:"success",size:"mini"}},[t._v(t._s(a+1))])],1)])}),t._v(" "),n("el-card",{staticStyle:{background:"#fafafa"},attrs:{slot:"header",shadow:"never",role:"group"},slot:"header"},[n("svg-icon",{staticStyle:{color:"#3fb911"},attrs:{"icon-class":"start"}}),t._v(" 开放使用的图床拖动于此\n                    ")],1)],2)],1)],1),t._v(" "),n("el-col",{staticStyle:{margin:"10px"},attrs:{xs:24,sm:24,md:11,lg:11,xl:11}},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v("未启用的图床")])]),t._v(" "),n("draggable",{staticClass:"list-group",attrs:{list:t.cancel,group:"people"},on:{change:t.log}},[t._l(t.cancel,function(e){return n("el-card",{key:e.name,staticClass:"list-card-group-item",attrs:{shadow:"hover"}},[n("span",[n("svg-icon",{staticStyle:{color:"#f4516c"},attrs:{"icon-class":e.icon}}),t._v("\n                        "+t._s(e.name)+" "),n("el-tag",{attrs:{type:"success",size:"mini"}},[t._v(t._s(e.id))])],1)])}),t._v(" "),n("el-card",{staticStyle:{background:"#fafafa"},attrs:{slot:"header",shadow:"never",role:"group"},slot:"header"},[n("svg-icon",{staticStyle:{color:"#f4516c"},attrs:{"icon-class":"stop"}}),t._v(" 停止使用的图床拖动于此\n                    ")],1)],2)],1)],1)],1)],1):t._e()])],1)],1)],1)],1)},[],!1,null,null,null);c.options.__file="menu.vue";e.default=c.exports},Kos7:function(t,e,n){"use strict";n.d(e,"b",function(){return s}),n.d(e,"d",function(){return o}),n.d(e,"e",function(){return r}),n.d(e,"c",function(){return i}),n.d(e,"g",function(){return c}),n.d(e,"h",function(){return l}),n.d(e,"a",function(){return u}),n.d(e,"f",function(){return d});var a=n("t3Un");function s(){return Object(a.a)({url:"/admin/get_rsa_key",method:"get"})}function o(t){return Object(a.a)({url:"/admin/update_site_config",method:"post",data:t})}function r(t){return Object(a.a)({url:"/admin/update_menu",method:"post",data:t})}function i(t){return Object(a.a)({url:"/options/stores",method:"get",params:t})}function c(t,e){return console.log(t),Object(a.a)({url:"/admin/update_stores_options/"+e,method:"post",data:t})}function l(t){return Object(a.a)({url:"/admin/update_store/",method:"post",data:t})}function u(t){return Object(a.a)({url:"/options/info",method:"get",params:t})}function d(t,e){return Object(a.a)({url:"/options/update?key="+e.key+"&group="+e.group,method:"post",data:t})}},aFx9:function(t,e,n){"use strict";n.d(e,"c",function(){return s}),n.d(e,"a",function(){return o}),n.d(e,"d",function(){return r}),n.d(e,"f",function(){return i}),n.d(e,"e",function(){return c}),n.d(e,"b",function(){return l});var a=n("t3Un");function s(t){return Object(a.a)({url:"/admin/get_images_list",method:"get",params:t})}function o(t){return Object(a.a)({url:"/admin/del_images",method:"post",data:{id:t}})}function r(){return Object(a.a)({url:"/admin/get_store_list",method:"get"})}function i(t){return Object(a.a)({url:"/admin/sync_images",method:"post",data:{list:t}})}function c(t){return Object(a.a)({url:"/admin/get_sync_images",method:"get",params:t})}function l(t){return Object(a.a)({url:"/admin/del_sync_images",method:"post",data:{id:t}})}},fIZt:function(t,e,n){}}]);