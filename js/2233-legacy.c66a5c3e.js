(self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[]).push([[2233],{90947:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(66252),i=n(3577),o=n(49963);function l(e,t,n,l,u,a){var c=(0,r.up)("v-toolbar-title"),s=(0,r.up)("v-toolbar"),d=(0,r.up)("v-card-text"),f=(0,r.up)("v-spacer"),p=(0,r.up)("v-btn"),m=(0,r.up)("v-card-actions"),g=(0,r.up)("v-card"),h=(0,r.up)("v-dialog");return(0,r.wg)(),(0,r.j4)(h,{modelValue:e.dialog,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.dialog=t}),"max-width":e.options.width,style:(0,i.j5)({zIndex:e.options.zIndex}),onKeydown:(0,o.D2)(a.cancel,["esc"]),persistent:""},{default:(0,r.w5)((function(){return[(0,r.Wm)(g,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(s,{dark:"",color:e.options.color,dense:"",flat:""},{default:(0,r.w5)((function(){return[(0,r.Wm)(c,{class:"text-body-2 font-weight-bold grey--text"},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,i.zw)(e.title),1)]})),_:1})]})),_:1},8,["color"]),(0,r.wy)((0,r.Wm)(d,{class:"pa-4 black--text",innerHTML:e.message},null,8,["innerHTML"]),[[o.F8,!!e.message]]),(0,r.Wm)(m,{class:"pt-3"},{default:(0,r.w5)((function(){return[(0,r.Wm)(f),e.options.noconfirm?(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)(p,{key:0,color:"grey",text:"",class:"body-2 font-weight-bold",onClick:a.cancel},{default:(0,r.w5)((function(){return[(0,r.Uk)("Cancel")]})),_:1},8,["onClick"])),(0,r.Wm)(p,{color:"primary",class:"body-2 font-weight-bold",outlined:"",onClick:a.agree},{default:(0,r.w5)((function(){return[(0,r.Uk)("OK")]})),_:1},8,["onClick"])]})),_:1})]})),_:1})]})),_:1},8,["modelValue","max-width","style","onKeydown"])}n(41539);var u={data:function(){return{dialog:!1,resolve:null,reject:null,message:null,title:null,options:{color:"grey lighten-3",width:400,zIndex:1008,noconfirm:!1}}},methods:{open:function(e,t,n){var r=this;return this.dialog=!0,this.title=e,this.message=t,this.options=Object.assign(this.options,n),new Promise((function(e,t){r.resolve=e,r.reject=t}))},agree:function(){this.resolve(!0),this.dialog=!1},cancel:function(){this.resolve(!1),this.dialog=!1}}},a=n(48118);const c=(0,a.Z)(u,[["render",l]]);var s=c},71644:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(66252),i=n(3577),o=n(49963),l={key:1};function u(e,t,n,u,a,c){var s=(0,r.up)("v-alert"),d=(0,r.up)("v-switch"),f=(0,r.up)("v-icon"),p=(0,r.up)("v-btn"),m=(0,r.up)("v-list-item"),g=(0,r.up)("v-list"),h=(0,r.up)("v-card-title"),v=(0,r.up)("v-card"),w=(0,r.up)("v-text-field"),x=(0,r.up)("v-card-text"),y=(0,r.up)("v-form"),b=(0,r.up)("v-dialog"),k=(0,r.up)("Confirm");return(0,r.wg)(),(0,r.iD)("div",null,[a.error?((0,r.wg)(),(0,r.j4)(s,{key:0,type:"error"},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,i.zw)(a.error),1)]})),_:1})):(0,r.kq)("",!0),(0,r.Wm)(d,{modelValue:a.data.active,"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.data.active=e}),label:"IP restrictions",onChange:c.toggle,class:"mx-3",color:"primary"},null,8,["modelValue","onChange"]),a.data.active?((0,r.wg)(),(0,r.iD)("div",l,[(0,r.Wm)(g,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(g,{group:""},{default:(0,r.w5)((function(){return[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.items,(function(e,t){return(0,r.wg)(),(0,r.j4)(m,{key:"item-".concat(t),title:e.ip,subtitle:e.label},{append:(0,r.w5)((function(){return[(0,r.Wm)(p,{icon:"",disabled:a.fetching,loading:a.fetching,onClick:(0,o.iM)((function(t){return c.deleteItem(e.line)}),["stop"])},{default:(0,r.w5)((function(){return[(0,r.Wm)(f,{size:"small"},{default:(0,r.w5)((function(){return[(0,r.Uk)("mdi:mdi-delete")]})),_:1})]})),_:2},1032,["disabled","loading","onClick"])]})),_:2},1032,["title","subtitle"])})),128))]})),_:1})]})),_:1}),(0,r.Wm)(v,null,{default:(0,r.w5)((function(){return[(0,r._)("div",null,[(0,r.Wm)(h,{"primary-title":""},{default:(0,r.w5)((function(){return[(0,r.Wm)(p,{onClick:t[1]||(t[1]=function(e){return c.addItem()})},{default:(0,r.w5)((function(){return[(0,r.Uk)(" Add IP ")]})),_:1})]})),_:1})])]})),_:1})])):(0,r.kq)("",!0),(0,r.Wm)(b,{app:"",modelValue:a.drawer,"onUpdate:modelValue":t[5]||(t[5]=function(e){return a.drawer=e}),temporary:"",right:""},{default:(0,r.w5)((function(){return[(0,r.Wm)(v,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(y,{modelValue:a.valid,"onUpdate:modelValue":t[4]||(t[4]=function(e){return a.valid=e})},{default:(0,r.w5)((function(){return[(0,r.Wm)(h,null,{default:(0,r.w5)((function(){return[(0,r.Uk)(" IP ")]})),_:1}),(0,r.Wm)(x,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(w,{modelValue:a.item.label,"onUpdate:modelValue":t[2]||(t[2]=function(e){return a.item.label=e}),label:"Label",required:"",rules:[a.rules.required]},null,8,["modelValue","rules"]),(0,r.Wm)(w,{modelValue:a.item.ip,"onUpdate:modelValue":t[3]||(t[3]=function(e){return a.item.ip=e}),label:"IP address",required:"",rules:[a.rules.required,a.rules.ip]},null,8,["modelValue","rules"]),(0,r.Wm)(p,{disabled:!a.valid,loading:a.fetching,color:"success",onClick:c.saveItem},{default:(0,r.w5)((function(){return[(0,r.Uk)(" Save ")]})),_:1},8,["disabled","loading","onClick"])]})),_:1})]})),_:1},8,["modelValue"])]})),_:1})]})),_:1},8,["modelValue"]),(0,r.Wm)(k,{ref:"confirm"},null,512)])}var a=n(6835),c=n(48534),s=(n(74916),n(77601),n(41539),n(1006)),d=n(90947),f={components:{Confirm:d.Z},props:{serverId:null,active:null,items:null,path:null},data:function(){return{data:{active:null},item:{},fetching:!1,drawer:!1,rules:{required:function(e){return!!e||"Required."},ip:function(e){return!e||/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(e)||"Invalid IP address"}},error:null,valid:!1}},watch:{active:function(e){this.data.active=e}},methods:{toggle:function(){var e=this;this.fetching=!0,this.error="",s.Z.post(this.path,{active:this.data.active}).then((function(t){console.log(t),t.data.success||(e.error=t.data.error)})).catch((function(e){console.log(e)})).finally((function(){e.fetching=!1,e.$emit("save")}))},addItem:function(){this.item={},this.drawer=!0},deleteItem:function(){var e=(0,c.Z)((0,a.Z)().mark((function e(t){var n,r=this;return(0,a.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$refs.confirm.open("Confirm","Are you sure you want to delete this item?");case 2:if(!e.sent){e.next=4;break}res&&(n=this,this.fetching=!0,this.error="",s.Z.post(this.path,{line:t}).then((function(e){console.log(e),e.data.success||(n.error=e.data.error)})).catch((function(e){console.log(e)})).finally((function(){r.fetching=!1,n.$emit("save")})));case 4:case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),saveItem:function(){var e=this,t=this;this.error="",this.fetching=!0,s.Z.post(this.path,this.item).then((function(e){console.log(e),e.data.error?t.error=e.data.error:(t.drawer=!1,t.$emit("save"))})).catch((function(e){return console.log(e)})).finally((function(){e.fetching=!1}))}}},p=n(48118);const m=(0,p.Z)(f,[["render",u]]);var g=m},48236:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(66252),i=n(3577),o=(0,r._)("i",{class:"fas fa-magic fa-2x faa-horizontal animated"},null,-1),l={style:{"margin-left":"10px"}};function u(e,t,n,u,a,c){var s=(0,r.up)("v-layout"),d=(0,r.up)("v-card-text"),f=(0,r.up)("v-card"),p=(0,r.up)("v-container"),m=(0,r.up)("v-dialog");return(0,r.wg)(),(0,r.j4)(m,{modelValue:e.show,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.show=t}),persistent:"",content:"","content-class":"centered-dialog"},{default:(0,r.w5)((function(){return[(0,r.Wm)(p,{"fill-height":""},{default:(0,r.w5)((function(){return[(0,r.Wm)(f,{color:"primary",dark:""},{default:(0,r.w5)((function(){return[(0,r.Wm)(d,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(s,{row:""},{default:(0,r.w5)((function(){return[o,(0,r._)("h2",l,(0,i.zw)(n.message),1)]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1},8,["modelValue"])}var a={name:"Loading",data:function(){return{show:!1}},props:{value:{type:Boolean,default:!1},message:{type:String,default:"Summoning..."}},watch:{value:function(e){this.show=e}}},c=n(48118);const s=(0,c.Z)(a,[["render",u]]);var d=s},22261:function(e,t,n){"use strict";var r=n(46916),i=n(1702),o=n(41340),l=n(67066),u=n(52999),a=n(72309),c=n(70030),s=n(29909).get,d=n(9441),f=n(38173),p=a("native-string-replace",String.prototype.replace),m=RegExp.prototype.exec,g=m,h=i("".charAt),v=i("".indexOf),w=i("".replace),x=i("".slice),y=function(){var e=/a/,t=/b*/g;return r(m,e,"a"),r(m,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),b=u.BROKEN_CARET,k=void 0!==/()??/.exec("")[1],I=y||k||b||d||f;I&&(g=function(e){var t,n,i,u,a,d,f,I=this,_=s(I),W=o(e),C=_.raw;if(C)return C.lastIndex=I.lastIndex,t=r(g,C,W),I.lastIndex=C.lastIndex,t;var V=_.groups,U=b&&I.sticky,E=r(l,I),R=I.source,Z=0,j=W;if(U&&(E=w(E,"y",""),-1===v(E,"g")&&(E+="g"),j=x(W,I.lastIndex),I.lastIndex>0&&(!I.multiline||I.multiline&&"\n"!==h(W,I.lastIndex-1))&&(R="(?: "+R+")",j=" "+j,Z++),n=new RegExp("^(?:"+R+")",E)),k&&(n=new RegExp("^"+R+"$(?!\\s)",E)),y&&(i=I.lastIndex),u=r(m,U?n:I,j),U?u?(u.input=x(u.input,Z),u[0]=x(u[0],Z),u.index=I.lastIndex,I.lastIndex+=u[0].length):I.lastIndex=0:y&&u&&(I.lastIndex=I.global?u.index+u[0].length:i),k&&u&&u.length>1&&r(p,u[0],n,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(u[a]=void 0)})),u&&V)for(u.groups=d=c(null),a=0;a<V.length;a++)f=V[a],d[f[0]]=u[f[1]];return u}),e.exports=g},67066:function(e,t,n){"use strict";var r=n(19670);e.exports=function(){var e=r(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},52999:function(e,t,n){var r=n(47293),i=n(17854),o=i.RegExp,l=r((function(){var e=o("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),u=l||r((function(){return!o("a","y").sticky})),a=l||r((function(){var e=o("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:a,MISSED_STICKY:u,UNSUPPORTED_Y:l}},9441:function(e,t,n){var r=n(47293),i=n(17854),o=i.RegExp;e.exports=r((function(){var e=o(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},38173:function(e,t,n){var r=n(47293),i=n(17854),o=i.RegExp;e.exports=r((function(){var e=o("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},74916:function(e,t,n){"use strict";var r=n(82109),i=n(22261);r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},77601:function(e,t,n){"use strict";n(74916);var r=n(82109),i=n(17854),o=n(46916),l=n(1702),u=n(60614),a=n(70111),c=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),s=i.Error,d=l(/./.test);r({target:"RegExp",proto:!0,forced:!c},{test:function(e){var t=this.exec;if(!u(t))return d(this,e);var n=o(t,this,e);if(null!==n&&!a(n))throw new s("RegExp exec method returned something other than an Object or null");return!!n}})}}]);
//# sourceMappingURL=2233-legacy.c66a5c3e.js.map