"use strict";(self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[]).push([[2808],{64574:function(e,t,n){n.d(t,{Z:function(){return d}});var o=n(66252),i=n(3577),r=n(49963);function a(e,t,n,a,l,u){var s=(0,o.up)("v-toolbar-title"),d=(0,o.up)("v-toolbar"),c=(0,o.up)("v-card-text"),f=(0,o.up)("v-spacer"),m=(0,o.up)("v-btn"),h=(0,o.up)("v-card-actions"),p=(0,o.up)("v-card"),w=(0,o.up)("v-dialog");return(0,o.wg)(),(0,o.j4)(w,{modelValue:e.dialog,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.dialog=t}),"max-width":e.options.width,style:(0,i.j5)({zIndex:e.options.zIndex}),onKeydown:(0,r.D2)(u.cancel,["esc"]),persistent:""},{default:(0,o.w5)((function(){return[(0,o.Wm)(p,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(d,{dark:"",color:e.options.color,dense:"",flat:""},{default:(0,o.w5)((function(){return[(0,o.Wm)(s,{class:"text-body-2 font-weight-bold grey--text"},{default:(0,o.w5)((function(){return[(0,o.Uk)((0,i.zw)(e.title),1)]})),_:1})]})),_:1},8,["color"]),(0,o.wy)((0,o.Wm)(c,{class:"pa-4 black--text",innerHTML:e.message},null,8,["innerHTML"]),[[r.F8,!!e.message]]),(0,o.Wm)(h,{class:"pt-3"},{default:(0,o.w5)((function(){return[(0,o.Wm)(f),e.options.noconfirm?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(m,{key:0,color:"grey",text:"",class:"body-2 font-weight-bold",onClick:u.cancel},{default:(0,o.w5)((function(){return[(0,o.Uk)("Cancel")]})),_:1},8,["onClick"])),(0,o.Wm)(m,{color:"primary",class:"body-2 font-weight-bold",outlined:"",onClick:u.agree},{default:(0,o.w5)((function(){return[(0,o.Uk)("OK")]})),_:1},8,["onClick"])]})),_:1})]})),_:1})]})),_:1},8,["modelValue","max-width","style","onKeydown"])}n(60228);var l={data:function(){return{dialog:!1,resolve:null,reject:null,message:null,title:null,options:{color:"grey lighten-3",width:400,zIndex:10008,noconfirm:!1}}},methods:{open:function(e,t,n){var o=this;return t||(t=e,e="Confirm"),this.dialog=!0,this.title=e,this.message=t,this.options=Object.assign(this.options,n),new Promise((function(e,t){o.resolve=e,o.reject=t}))},agree:function(){this.resolve(!0),this.dialog=!1},cancel:function(){this.resolve(!1),this.dialog=!1}}},u=n(83744);const s=(0,u.Z)(l,[["render",a]]);var d=s},11297:function(e,t,n){n.d(t,{Z:function(){return u}});var o=n(66252);function i(e,t,n,i,r,a){var l=(0,o.up)("v-icon"),u=(0,o.up)("v-alert"),s=(0,o.up)("v-dialog");return(0,o.wg)(),(0,o.j4)(s,{modelValue:e.show,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.show=t}),persistent:"",width:"600"},{default:(0,o.w5)((function(){return[(0,o.Wm)(u,{title:n.message,color:"primary"},{prepend:(0,o.w5)((function(){return[(0,o.Wm)(l,{icon:"fas fa-magic fa-2x faa-horizontal animated"})]})),_:1},8,["title"])]})),_:1},8,["modelValue"])}var r={name:"Loading",data:function(){return{show:!1}},props:{value:{type:Boolean,default:!1},message:{type:String,default:"Summoning..."}},watch:{value:function(e){this.show=e}}},a=n(83744);const l=(0,a.Z)(r,[["render",i]]);var u=l},44599:function(e,t,n){n.d(t,{Z:function(){return d}});var o=n(66252),i=n(3577),r=n(49963);function a(e,t,n,a,l,u){var s=(0,o.up)("v-toolbar-title"),d=(0,o.up)("v-toolbar"),c=(0,o.up)("v-card-text"),f=(0,o.up)("v-spacer"),m=(0,o.up)("v-btn"),h=(0,o.up)("v-card-actions"),p=(0,o.up)("v-card"),w=(0,o.up)("v-dialog");return(0,o.wg)(),(0,o.j4)(w,{modelValue:e.dialog,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.dialog=t}),"max-width":e.options.width,style:(0,i.j5)({zIndex:e.options.zIndex}),onKeydown:(0,r.D2)(u.cancel,["esc"]),persistent:""},{default:(0,o.w5)((function(){return[(0,o.Wm)(p,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(d,{dark:"",color:e.options.color,dense:"",flat:""},{default:(0,o.w5)((function(){return[(0,o.Wm)(s,{class:"text-body-2 font-weight-bold grey--text"},{default:(0,o.w5)((function(){return[(0,o.Uk)(" Permission Required ")]})),_:1})]})),_:1},8,["color"]),(0,o.wy)((0,o.Wm)(c,{class:"pa-4 black--text",innerHTML:e.message},null,8,["innerHTML"]),[[r.F8,!!e.message]]),(0,o.Wm)(h,{class:"pt-3"},{default:(0,o.w5)((function(){return[(0,o.Wm)(f),e.options.noconfirm?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(m,{key:0,color:"grey",text:"",class:"body-2 font-weight-bold",onClick:u.cancel},{default:(0,o.w5)((function(){return[(0,o.Uk)("Cancel")]})),_:1},8,["onClick"])),(0,o.Wm)(m,{color:"primary",class:"body-2 font-weight-bold",outlined:"",onClick:u.open},{default:(0,o.w5)((function(){return[(0,o.Uk)("Review Permissions")]})),_:1},8,["onClick"])]})),_:1})]})),_:1})]})),_:1},8,["modelValue","max-width","style","onKeydown"])}n(60228);var l={data:function(){return{provider:null,dialog:!1,resolve:null,reject:null,message:null,title:null,options:{color:"grey lighten-3",width:400,zIndex:10008,noconfirm:!1},window:null,timeout:null,popup:null}},methods:{check:function(e){var t=this;if("auth"===e.error)return this.provider=e.provider,this.dialog=!0,new Promise((function(e,n){t.resolve=e,t.reject=n}))},agree:function(){this.resolve(!0),this.dialog=!1},cancel:function(){this.resolve(!1),this.dialog=!1},open:function(){this.popup=window.open("https://serverwand.com/account/services/"+this.provider),this.checkIfPopupWindowClosed()},checkIfPopupWindowClosed:function(){if(clearTimeout(this.timer),this.popup.closed)return this.agree();this.timer=setTimeout(this.checkIfPopupWindowClosed,1e3)}}},u=n(83744);const s=(0,u.Z)(l,[["render",a]]);var d=s},70850:function(e,t,n){n.d(t,{Z:function(){return u}});var o=n(66252);function i(e,t,n,i,r,a){var l=(0,o.up)("v-text-field");return(0,o.wg)(),(0,o.j4)(l,(0,o.dG)(e.$attrs,{type:r.showPassword?"text":"password","append-icon":r.showPassword?"mdi:mdi-eye-off":"mdi:mdi-eye","onClick:append":t[0]||(t[0]=function(e){return r.showPassword=!r.showPassword})}),null,16,["type","append-icon"])}var r={data:function(){return{showPassword:!1}}},a=n(83744);const l=(0,a.Z)(r,[["render",i]]);var u=l},2808:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});n(34284);var o=n(66252),i=n(49963),r=n(3577),a={key:0};function l(e,t,n,l,u,s){var d=(0,o.up)("v-alert"),c=(0,o.up)("Loading"),f=(0,o.up)("v-btn"),m=(0,o.up)("v-switch"),h=(0,o.up)("v-card-actions"),p=(0,o.up)("v-card"),w=(0,o.up)("v-icon"),g=(0,o.up)("v-list-item-title"),v=(0,o.up)("v-list-item-subtitle"),k=(0,o.up)("v-list-item"),y=(0,o.up)("v-list"),x=(0,o.up)("v-text-field"),b=(0,o.up)("PasswordField"),W=(0,o.up)("v-card-text"),_=(0,o.up)("v-dialog"),C=(0,o.up)("Confirm"),Z=(0,o.up)("OAuth");return(0,o.wg)(),(0,o.iD)("div",null,[u.error?((0,o.wg)(),(0,o.j4)(d,{key:0,type:"error",text:u.error},null,8,["text"])):(0,o.kq)("",!0),(0,o.Wm)(c,{value:u.loading},null,8,["value"]),(0,o._)("div",null,[(0,o.Wm)(p,{loading:u.fetching},{default:(0,o.w5)((function(){return[(0,o.Wm)(h,null,{default:(0,o.w5)((function(){var e,n,i,r;return[u.data.server.mailserver?((0,o.wg)(),(0,o.j4)(f,{key:0,onClick:t[0]||(t[0]=function(e){return s.addEmail()}),icon:"mdi:mdi-plus"})):(0,o.kq)("",!0),null!==(e=u.data.dns)&&void 0!==e&&e.not_set?((0,o.wg)(),(0,o.j4)(f,{key:1,onClick:t[1]||(t[1]=function(e){return s.fixDNS("mx")}),title:u.data.dns.MX+" != "+u.data.server.hostname},{default:(0,o.w5)((function(){return[(0,o.Uk)("Fix MX mismatch")]})),_:1},8,["title"])):(0,o.kq)("",!0),null!==(n=u.data.dkim)&&void 0!==n&&n.not_set?((0,o.wg)(),(0,o.j4)(f,{key:2,onClick:t[2]||(t[2]=function(e){return s.fixDNS("dkim")})},{default:(0,o.w5)((function(){return[(0,o.Uk)("Fix Missing DKIM")]})),_:1})):(0,o.kq)("",!0),null!==(i=u.data.spf)&&void 0!==i&&i.not_set?((0,o.wg)(),(0,o.j4)(f,{key:3,onClick:t[3]||(t[3]=function(e){return s.fixDNS("spf")})},{default:(0,o.w5)((function(){return[(0,o.Uk)("Fix Missing SPF")]})),_:1})):(0,o.kq)("",!0),null!==(r=u.data.dmarc)&&void 0!==r&&r.not_set?((0,o.wg)(),(0,o.j4)(f,{key:4,onClick:t[4]||(t[4]=function(e){return s.fixDNS("dmarc")})},{default:(0,o.w5)((function(){return[(0,o.Uk)("Fix Missing DMARC")]})),_:1})):(0,o.kq)("",!0),u.data.server.mailserver?((0,o.wg)(),(0,o.j4)(m,{key:5,modelValue:u.data.email,"onUpdate:modelValue":t[5]||(t[5]=function(e){return u.data.email=e}),label:"Email",onChange:t[6]||(t[6]=function(e){return s.toggleEmail()}),"hide-details":"",color:"primary"},null,8,["modelValue"])):(0,o.kq)("",!0)]})),_:1})]})),_:1},8,["loading"]),(0,o.Wm)(p,{class:"mx-auto"},{default:(0,o.w5)((function(){return[(0,o.Wm)(y,{"max-width":"600"},{default:(0,o.w5)((function(){return[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(u.data.emails,(function(e,n){return(0,o.wg)(),(0,o.j4)(k,{key:"item-".concat(n),title:e.name,subtitle:e.value,onClick:function(t){return s.editItem(e)}},{append:(0,o.w5)((function(){return[(0,o.Wm)(f,{icon:"",disabled:u.fetching,loading:u.loading===e.user,onClick:[function(t){return s.deleteItem(e.user)},t[7]||(t[7]=(0,i.iM)((function(){}),["stop"]))]},{default:(0,o.w5)((function(){return[(0,o.Wm)(w,{size:"small",icon:"mdi:mdi-delete"})]})),_:2},1032,["disabled","loading","onClick"])]})),default:(0,o.w5)((function(){return[(0,o.Wm)(g,null,{default:(0,o.w5)((function(){return[(0,o.Uk)((0,r.zw)(e.user)+" ",1),e.destination?((0,o.wg)(),(0,o.iD)("span",a,[(0,o.Wm)(w,null,{default:(0,o.w5)((function(){return[(0,o.Uk)("fas fa-long-arrow-alt-right")]})),_:1}),(0,o.Uk)(" "+(0,r.zw)(e.destination),1)])):(0,o.kq)("",!0)]})),_:2},1024),(0,o.Wm)(v,null,{default:(0,o.w5)((function(){return[(0,o.Uk)((0,r.zw)(s.prettyBytes(e.disk_usage)),1)]})),_:2},1024)]})),_:2},1032,["title","subtitle","onClick"])})),128))]})),_:1})]})),_:1}),(0,o.Wm)(_,{modelValue:u.drawer,"onUpdate:modelValue":t[12]||(t[12]=function(e){return u.drawer=e}),"max-width":"600"},{default:(0,o.w5)((function(){return[(0,o.Wm)(p,{title:"Email account"},{default:(0,o.w5)((function(){return[(0,o.Wm)(W,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(x,{modelValue:u.email.user,"onUpdate:modelValue":t[8]||(t[8]=function(e){return u.email.user=e}),label:"Name",required:"",readonly:u.userReadonly,autofocus:""},null,8,["modelValue","readonly"]),(0,o.Wm)(b,{modelValue:u.email.password,"onUpdate:modelValue":t[9]||(t[9]=function(e){return u.email.password=e}),label:"Password",required:""},null,8,["modelValue"]),(0,o.Wm)(x,{modelValue:u.email.destination,"onUpdate:modelValue":t[10]||(t[10]=function(e){return u.email.destination=e}),label:"Forwarding",required:""},null,8,["modelValue"]),(0,o.Wm)(f,{disabled:!u.email.user,loading:u.fetching,color:"success",onClick:t[11]||(t[11]=function(e){return s.saveEmail()}),text:"Save"},null,8,["disabled","loading"])]})),_:1})]})),_:1})]})),_:1},8,["modelValue"])]),(0,o.Wm)(C,{ref:"confirm"},null,512),(0,o.Wm)(Z,{ref:"oauth"},null,512)])}var u=n(50124),s=n(48534),d=n(95082),c=(n(60228),n(1006)),f=n(11297),m=n(72564),h=n(64574),p=n(70850),w=n(44599),g={components:{Loading:f.Z,Confirm:h.Z,PasswordField:p.Z,OAuth:w.Z},data:function(){return{domainId:null,post:null,error:null,data:{email:!1,emails:[],server:{},records:{}},email:{},fetching:!1,loading:null,rules:{required:function(e){return!!e||"Required."},min:function(e){return e.length>=8||"Min 8 characters"},emailMatch:function(){return"The email and password you entered don't match"}},copyText:"Copy",drawer:!1,userReadonly:!1,timer:null,authRequired:!1}},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;this.error="",this.domainId=this.$route.params.id,clearTimeout(this.timer),this.fetching=!0,c.Z.get("sites/"+this.domainId+"/email?v="+Date.now()).then((function(t){console.log(t),e.data=t.data.item,document.title="Email | "+e.data.domain,e.data.dns.updating&&(console.log("checking dns"),e.timer=setTimeout(e.fetchData,6e4))})).catch((function(e){console.log(e)})).finally((function(){e.fetching=!1}))},toggleEmail:function(){var e=this;this.error="",this.loading=!0,c.Z.post("sites/"+this.domainId+"/email",{update:1,status:this.data.email}).then((function(t){console.log(t),t.data.error?e.error=t.data.error:t.data.success&&e.fetchData()})).catch((function(e){console.log(e)})).finally((function(){e.fetching=!1,e.loading=!1}))},addEmail:function(){this.drawer=!0,this.userReadonly=!1,this.email={}},editItem:function(e){this.drawer=!0,this.userReadonly=!0,this.email=(0,d.Z)({},e)},saveEmail:function(){var e=this;this.email.user&&(this.loading=!0,this.error="",c.Z.post("sites/"+this.domainId+"/email",this.email).then((function(t){console.log(t),t.data.success?(e.drawer=!1,e.fetchData()):(e.error=t.data.error,e.loading=!1)})).catch((function(e){console.log(e)})).finally((function(){e.loading=!1})))},deleteItem:function(){var e=(0,s.Z)((0,u.Z)().mark((function e(t){var n=this;return(0,u.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$refs.confirm.open("Delete "+t);case 2:if(e.sent){e.next=4;break}return e.abrupt("return");case 4:this.error="",this.loading=t,c.Z.post("sites/"+this.domainId+"/email",{delete:1,user:t}).then((function(e){console.log(e),e.data.success?n.fetchData():(n.error=e.data.error,n.loading=!1)})).catch((function(e){console.log(e)})).finally((function(){n.loading=!1,n.loading=null}));case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),fixDNS:function(e){var t=this;this.error="",this.loading=!0,c.Z.post("sites/"+this.domainId+"/fix"+e,{}).then(function(){var n=(0,s.Z)((0,u.Z)().mark((function n(o){return(0,u.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log(o),t.loading=!1,n.next=4,t.$refs.oauth.check(o.data);case 4:n.t0=n.sent,n.next=!0===n.t0?7:!1===n.t0?8:9;break;case 7:return n.abrupt("return",t.fixDNS(e));case 8:return n.abrupt("return");case 9:o.data.success?t.fetchData():t.error=o.data.error;case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()).catch((function(e){console.log(e)}))},prettyBytes:function(e){return m.Z.prettyBytes(e)}},beforeUnmount:function(){clearTimeout(this.timer)}},v=n(83744);const k=(0,v.Z)(g,[["render",l]]);var y=k}}]);
//# sourceMappingURL=2808-legacy.2cd80655.js.map