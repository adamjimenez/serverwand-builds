"use strict";(self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[]).push([[2876],{64574:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(66252),i=n(3577),a=n(49963);function l(e,t,n,l,o,u){var s=(0,r.up)("v-toolbar-title"),c=(0,r.up)("v-toolbar"),d=(0,r.up)("v-card-text"),f=(0,r.up)("v-spacer"),m=(0,r.up)("v-btn"),p=(0,r.up)("v-card-actions"),g=(0,r.up)("v-card"),h=(0,r.up)("v-dialog");return(0,r.wg)(),(0,r.j4)(h,{modelValue:e.dialog,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.dialog=t}),"max-width":e.options.width,style:(0,i.j5)({zIndex:e.options.zIndex}),onKeydown:(0,a.D2)(u.cancel,["esc"]),persistent:""},{default:(0,r.w5)((function(){return[(0,r.Wm)(g,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(c,{dark:"",color:e.options.color,dense:"",flat:""},{default:(0,r.w5)((function(){return[(0,r.Wm)(s,{class:"text-body-2 font-weight-bold grey--text"},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,i.zw)(e.title),1)]})),_:1})]})),_:1},8,["color"]),(0,r.wy)((0,r.Wm)(d,{class:"pa-4 black--text",innerHTML:e.message},null,8,["innerHTML"]),[[a.F8,!!e.message]]),(0,r.Wm)(p,{class:"pt-3"},{default:(0,r.w5)((function(){return[(0,r.Wm)(f),e.options.noconfirm?(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)(m,{key:0,color:"grey",text:"",class:"body-2 font-weight-bold",onClick:u.cancel},{default:(0,r.w5)((function(){return[(0,r.Uk)("Cancel")]})),_:1},8,["onClick"])),(0,r.Wm)(m,{color:"primary",class:"body-2 font-weight-bold",outlined:"",onClick:u.agree},{default:(0,r.w5)((function(){return[(0,r.Uk)("OK")]})),_:1},8,["onClick"])]})),_:1})]})),_:1})]})),_:1},8,["modelValue","max-width","style","onKeydown"])}n(60228);var o={data:function(){return{dialog:!1,resolve:null,reject:null,message:null,title:null,options:{color:"grey lighten-3",width:400,zIndex:10008,noconfirm:!1}}},methods:{open:function(e,t,n){var r=this;return t||(t=e,e="Confirm"),this.dialog=!0,this.title=e,this.message=t,this.options=Object.assign(this.options,n),new Promise((function(e,t){r.resolve=e,r.reject=t}))},agree:function(){this.resolve(!0),this.dialog=!1},cancel:function(){this.resolve(!1),this.dialog=!1}}},u=n(83744);const s=(0,u.Z)(o,[["render",l]]);var c=s},32876:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});n(34284);var r=n(66252),i=n(49963);function a(e,t,n,a,l,o){var u=(0,r.up)("v-alert"),s=(0,r.up)("v-btn"),c=(0,r.up)("v-card-actions"),d=(0,r.up)("v-list-item"),f=(0,r.up)("v-list"),m=(0,r.up)("v-card"),p=(0,r.up)("v-text-field"),g=(0,r.up)("v-card-text"),h=(0,r.up)("v-form"),v=(0,r.up)("v-dialog"),x=(0,r.up)("Confirm");return(0,r.wg)(),(0,r.iD)("div",null,[l.error?((0,r.wg)(),(0,r.j4)(u,{key:0,type:"error",text:l.error},null,8,["text"])):(0,r.kq)("",!0),(0,r.Wm)(m,{loading:l.fetching},{default:(0,r.w5)((function(){return[(0,r.Wm)(c,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(s,{onClick:t[0]||(t[0]=function(e){return o.addItem()}),icon:"mdi:mdi-plus"})]})),_:1}),(0,r.Wm)(f,{"max-width":"600"},{default:(0,r.w5)((function(){return[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(l.data.variables,(function(e,t){return(0,r.wg)(),(0,r.j4)(d,{key:"item-".concat(t),title:e.name,subtitle:e.value,onClick:function(t){return o.editItem(e)}},{append:(0,r.w5)((function(){return[(0,r.Wm)(s,{disabled:l.fetching,loading:l.loading===e.line,onClick:(0,i.iM)((function(t){return o.deleteItem(e.line)}),["stop"]),icon:"mdi:mdi-delete",size:"small"},null,8,["disabled","loading","onClick"])]})),_:2},1032,["title","subtitle","onClick"])})),128))]})),_:1})]})),_:1},8,["loading"]),(0,r.Wm)(v,{modelValue:l.drawer,"onUpdate:modelValue":t[5]||(t[5]=function(e){return l.drawer=e}),"max-width":"600"},{default:(0,r.w5)((function(){return[(0,r.Wm)(m,{title:"Variable"},{default:(0,r.w5)((function(){return[(0,r.Wm)(h,{modelValue:l.valid,"onUpdate:modelValue":t[4]||(t[4]=function(e){return l.valid=e}),ref:"form"},{default:(0,r.w5)((function(){return[(0,r.Wm)(g,null,{default:(0,r.w5)((function(){return[(0,r.wy)((0,r.Wm)(p,{modelValue:l.item.line,"onUpdate:modelValue":t[1]||(t[1]=function(e){return l.item.line=e}),label:"Line"},null,8,["modelValue"]),[[i.F8,!1]]),(0,r.Wm)(p,{modelValue:l.item.name,"onUpdate:modelValue":t[2]||(t[2]=function(e){return l.item.name=e}),label:"Name",required:"",rules:[l.rules.required,l.rules.alphanumeric],autofocus:""},null,8,["modelValue","rules"]),(0,r.Wm)(p,{modelValue:l.item.value,"onUpdate:modelValue":t[3]||(t[3]=function(e){return l.item.value=e}),label:"Value",required:"",rules:[l.rules.required,l.rules.alphanumeric]},null,8,["modelValue","rules"]),(0,r.Wm)(s,{disabled:!l.valid,loading:"save"===l.loading,color:"success",onClick:o.saveItem},{default:(0,r.w5)((function(){return[(0,r.Uk)(" Save ")]})),_:1},8,["disabled","loading","onClick"])]})),_:1})]})),_:1},8,["modelValue"])]})),_:1})]})),_:1},8,["modelValue"]),(0,r.Wm)(x,{ref:"confirm"},null,512)])}var l=n(50124),o=n(48534),u=(n(64043),n(7409),n(60228),n(69358),n(48324),n(1006)),s=n(64574),c={components:{Confirm:s.Z},data:function(){return{error:"",fetching:!1,loading:null,drawer:!1,data:{users:{}},item:{name:"",value:""},variables:[],rules:{required:function(e){return!!e||"Required."},alphanumeric:function(e){return/^[a-zA-Z0-9-_!]+$/g.test(e)||"Must contain alphanumeric characters only"}},valid:!1}},created:function(){this.siteId=this.$route.params.id,this.fetchData()},methods:{fetchData:function(){var e=this;this.error="",this.fetching=!0,u.Z.get("sites/"+this.siteId+"/variables").then((function(t){if(console.log(t),t.data.error)return e.error=t.data.error,!1;e.data=t.data.item,document.title="Variables | "+e.data.name})).catch((function(e){console.log(e)})).finally((function(){e.fetching=!1}))},addItem:function(){this.item={},this.drawer=!0},editItem:function(e){this.item=JSON.parse(JSON.stringify(e)),this.drawer=!0},deleteItem:function(){var e=(0,o.Z)((0,l.Z)().mark((function e(t){var n;return(0,l.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$refs.confirm.open("Delete Variable?");case 2:if(e.sent){e.next=4;break}return e.abrupt("return");case 4:n=this,this.loading=t,this.error="",u.Z.post("sites/"+this.siteId+"/variables",{line:t}).then((function(e){console.log(e),e.data.success?n.fetchData():(n.fetching=!1,n.error=e.data.error)})).catch((function(e){console.log(e)})).finally((function(){n.loading=null}));case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),saveItem:function(){var e=this;this.error="",this.$refs.form.validate()&&(this.loading="save",u.Z.post("sites/"+this.siteId+"/variables",this.item).then((function(t){console.log(t),t.data.error?e.error=t.data.error:(e.drawer=!1,e.fetchData())})).catch((function(t){e.loading=null,console.log(t)})))}}},d=n(83744);const f=(0,d.Z)(c,[["render",a]]);var m=f},56308:function(e,t,n){var r=n(22615),i=n(68844),a=n(34327),l=n(69633),o=n(87901),u=n(83430),s=n(25391),c=n(618).get,d=n(62100),f=n(26738),m=u("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,g=p,h=i("".charAt),v=i("".indexOf),x=i("".replace),w=i("".slice),b=function(){var e=/a/,t=/b*/g;return r(p,e,"a"),r(p,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),I=o.BROKEN_CARET,y=void 0!==/()??/.exec("")[1],k=b||y||I||d||f;k&&(g=function(e){var t,n,i,o,u,d,f,k=this,W=c(k),V=a(e),C=W.raw;if(C)return C.lastIndex=k.lastIndex,t=r(g,C,V),k.lastIndex=C.lastIndex,t;var _=W.groups,E=I&&k.sticky,R=r(l,k),U=k.source,S=0,Z=V;if(E&&(R=x(R,"y",""),-1===v(R,"g")&&(R+="g"),Z=w(V,k.lastIndex),k.lastIndex>0&&(!k.multiline||k.multiline&&"\n"!==h(V,k.lastIndex-1))&&(U="(?: "+U+")",Z=" "+Z,S++),n=new RegExp("^(?:"+U+")",R)),y&&(n=new RegExp("^"+U+"$(?!\\s)",R)),b&&(i=k.lastIndex),o=r(p,E?n:k,Z),E?o?(o.input=w(o.input,S),o[0]=w(o[0],S),o.index=k.lastIndex,k.lastIndex+=o[0].length):k.lastIndex=0:b&&o&&(k.lastIndex=k.global?o.index+o[0].length:i),y&&o&&o.length>1&&r(m,o[0],n,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(o[u]=void 0)})),o&&_)for(o.groups=d=s(null),u=0;u<_.length;u++)f=_[u],d[f[0]]=o[f[1]];return o}),e.exports=g},69633:function(e,t,n){var r=n(85027);e.exports=function(){var e=r(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},87901:function(e,t,n){var r=n(3689),i=n(19037),a=i.RegExp,l=r((function(){var e=a("a","y");return e.lastIndex=2,null!==e.exec("abcd")})),o=l||r((function(){return!a("a","y").sticky})),u=l||r((function(){var e=a("^r","gy");return e.lastIndex=2,null!==e.exec("str")}));e.exports={BROKEN_CARET:u,MISSED_STICKY:o,UNSUPPORTED_Y:l}},62100:function(e,t,n){var r=n(3689),i=n(19037),a=i.RegExp;e.exports=r((function(){var e=a(".","s");return!(e.dotAll&&e.test("\n")&&"s"===e.flags)}))},26738:function(e,t,n){var r=n(3689),i=n(19037),a=i.RegExp;e.exports=r((function(){var e=a("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},64043:function(e,t,n){var r=n(79989),i=n(56308);r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},7409:function(e,t,n){n(64043);var r=n(79989),i=n(22615),a=n(69985),l=n(85027),o=n(34327),u=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),s=/./.test;r({target:"RegExp",proto:!0,forced:!u},{test:function(e){var t=l(this),n=o(e),r=t.exec;if(!a(r))return i(s,t,n);var u=i(r,t,n);return null!==u&&(l(u),!0)}})}}]);
//# sourceMappingURL=2876-legacy.efe7f33e.js.map