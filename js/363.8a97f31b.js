"use strict";(self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[]).push([[363],{14796:function(e,t,a){a.d(t,{Z:function(){return u}});var l=a(66252),o=a(3577),i=a(49963);function n(e,t,a,n,d,s){const r=(0,l.up)("v-toolbar-title"),u=(0,l.up)("v-toolbar"),c=(0,l.up)("v-card-text"),m=(0,l.up)("v-spacer"),f=(0,l.up)("v-btn"),h=(0,l.up)("v-card-actions"),w=(0,l.up)("v-card"),g=(0,l.up)("v-dialog");return(0,l.wg)(),(0,l.j4)(g,{modelValue:e.dialog,"onUpdate:modelValue":t[0]||(t[0]=t=>e.dialog=t),"max-width":e.options.width,style:(0,o.j5)({zIndex:e.options.zIndex}),onKeydown:(0,i.D2)(s.cancel,["esc"]),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[(0,l.Wm)(u,{dark:"",color:e.options.color,dense:"",flat:""},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{class:"text-body-2 font-weight-bold grey--text"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(e.title),1)])),_:1})])),_:1},8,["color"]),(0,l.wy)((0,l.Wm)(c,{class:"pa-4 black--text",innerHTML:e.message},null,8,["innerHTML"]),[[i.F8,!!e.message]]),(0,l.Wm)(h,{class:"pt-3"},{default:(0,l.w5)((()=>[(0,l.Wm)(m),e.options.noconfirm?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(f,{key:0,color:"grey",text:"",class:"body-2 font-weight-bold",onClick:s.cancel},{default:(0,l.w5)((()=>[(0,l.Uk)("Cancel")])),_:1},8,["onClick"])),(0,l.Wm)(f,{color:"primary",class:"body-2 font-weight-bold",outlined:"",onClick:s.agree},{default:(0,l.w5)((()=>[(0,l.Uk)("OK")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue","max-width","style","onKeydown"])}var d={data:function(){return{dialog:!1,resolve:null,reject:null,message:null,title:null,options:{color:"grey lighten-3",width:400,zIndex:1008,noconfirm:!1}}},methods:{open(e,t,a){return this.dialog=!0,this.title=e,this.message=t,this.options=Object.assign(this.options,a),new Promise(((e,t)=>{this.resolve=e,this.reject=t}))},agree(){this.resolve(!0),this.dialog=!1},cancel(){this.resolve(!1),this.dialog=!1}}},s=a(48118);const r=(0,s.Z)(d,[["render",n]]);var u=r},11912:function(e,t,a){a.d(t,{Z:function(){return c}});var l=a(66252),o=a(3577);const i=(0,l._)("i",{class:"fas fa-magic fa-2x faa-horizontal animated"},null,-1),n={class:"ml-2"};function d(e,t,a,d,s,r){const u=(0,l.up)("v-layout"),c=(0,l.up)("v-card-text"),m=(0,l.up)("v-card"),f=(0,l.up)("v-container"),h=(0,l.up)("v-dialog");return(0,l.wg)(),(0,l.j4)(h,{modelValue:e.show,"onUpdate:modelValue":t[0]||(t[0]=t=>e.show=t),persistent:"",content:"","content-class":"centered-dialog"},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{"fill-height":""},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{color:"primary"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Wm)(u,{row:""},{default:(0,l.w5)((()=>[i,(0,l._)("h2",n,(0,o.zw)(a.message),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])}var s={name:"Loading",data:()=>({show:!1}),props:{value:{type:Boolean,default:!1},message:{type:String,default:"Summoning..."}},watch:{value:function(e){this.show=e}}},r=a(48118);const u=(0,r.Z)(s,[["render",d]]);var c=u},4189:function(e,t,a){a.d(t,{Z:function(){return s}});var l=a(66252);function o(e,t,a,o,i,n){const d=(0,l.up)("v-text-field");return(0,l.wg)(),(0,l.j4)(d,(0,l.dG)(e.$attrs,{autofocus:"",type:i.showPassword?"text":"password","append-icon":i.showPassword?"mdi:mdi-eye-off":"mdi:mdi-eye","onClick:append":t[0]||(t[0]=e=>i.showPassword=!i.showPassword)}),null,16,["type","append-icon"])}var i={data(){return{showPassword:!1}}},n=a(48118);const d=(0,n.Z)(i,[["render",o]]);var s=d},30363:function(e,t,a){a.r(t),a.d(t,{default:function(){return _}});var l=a(66252),o=a(3577),i=a(49963);const n=(0,l._)("strong",null,"DNS auth required: ",-1),d=(0,l._)("strong",null,"Missing DKIM",-1),s=(0,l._)("strong",null,"Missing SPF",-1),r={key:1},u={key:0};function c(e,t,a,c,m,f){const h=(0,l.up)("v-alert"),w=(0,l.up)("Loading"),g=(0,l.up)("v-btn"),p=(0,l.up)("v-card-text"),v=(0,l.up)("v-card"),k=(0,l.up)("v-col"),_=(0,l.up)("v-row"),y=(0,l.up)("v-layout"),W=(0,l.up)("v-switch"),x=(0,l.up)("v-card-title"),b=(0,l.up)("v-icon"),q=(0,l.up)("v-list-item-title"),D=(0,l.up)("v-list-item-subtitle"),C=(0,l.up)("v-list-item"),U=(0,l.up)("v-list"),V=(0,l.up)("v-card-actions"),j=(0,l.up)("v-text-field"),Z=(0,l.up)("PasswordField"),I=(0,l.up)("v-dialog"),P=(0,l.up)("Confirm");return(0,l.wg)(),(0,l.iD)("div",null,[m.error?((0,l.wg)(),(0,l.j4)(h,{key:0,type:"error",text:m.error},null,8,["text"])):(0,l.kq)("",!0),(0,l.Wm)(w,{value:m.loading},null,8,["value"]),(0,l.Wm)(v,{class:"pa-3",loading:m.fetching},{default:(0,l.w5)((()=>[m.authRequired?((0,l.wg)(),(0,l.j4)(y,{key:0,row:""},{default:(0,l.w5)((()=>[(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l.Wm)(k,null,{default:(0,l.w5)((()=>[(0,l.Wm)(v,{tile:"",flat:""},{default:(0,l.w5)((()=>[(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[n,(0,l.Wm)(g,{onClick:t[0]||(t[0]=e=>f.authPrompt())},{default:(0,l.w5)((()=>[(0,l.Uk)("Fix")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})):(0,l.kq)("",!0),!m.authRequired&&m.data.server&&m.data.dns&&m.data.dns.MX!=m.data.server.hostname?((0,l.wg)(),(0,l.j4)(y,{key:1,row:""},{default:(0,l.w5)((()=>[(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l.Wm)(k,{cols:"12"},{default:(0,l.w5)((()=>[(0,l.Wm)(v,{tile:"",flat:""},{default:(0,l.w5)((()=>[(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[(0,l._)("strong",null,"MX mismatch: "+(0,o.zw)(m.data.dns.MX)+" != "+(0,o.zw)(m.data.server.hostname),1),m.data.dns.not_set?((0,l.wg)(),(0,l.j4)(g,{key:0,onClick:t[1]||(t[1]=e=>f.fixDomainDns(m.data.domain))},{default:(0,l.w5)((()=>[(0,l.Uk)("Fix")])),_:1})):(0,l.kq)("",!0)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})):(0,l.kq)("",!0),m.data.dkim?.not_set?((0,l.wg)(),(0,l.j4)(y,{key:2,row:""},{default:(0,l.w5)((()=>[(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l.Wm)(k,{cols:"12"},{default:(0,l.w5)((()=>[(0,l.Wm)(v,{tile:"",flat:""},{default:(0,l.w5)((()=>[(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[d,m.data.dkim.not_set?((0,l.wg)(),(0,l.j4)(g,{key:0,onClick:t[2]||(t[2]=e=>f.fixDkim(m.data.domain))},{default:(0,l.w5)((()=>[(0,l.Uk)("Fix")])),_:1})):(0,l.kq)("",!0)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})):(0,l.kq)("",!0),!m.authRequired&&m.data.server&&m.data.spf&&m.data.spf.not_set&&!m.data.spf.SPF?((0,l.wg)(),(0,l.j4)(y,{key:3,row:""},{default:(0,l.w5)((()=>[(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l.Wm)(k,{cols:"12"},{default:(0,l.w5)((()=>[(0,l.Wm)(v,{tile:"",flat:""},{default:(0,l.w5)((()=>[(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[s,m.data.spf.not_set?((0,l.wg)(),(0,l.j4)(g,{key:0,onClick:t[3]||(t[3]=e=>f.fixSpf(m.data.domain))},{default:(0,l.w5)((()=>[(0,l.Uk)("Fix")])),_:1})):(0,l.kq)("",!0)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})):(0,l.kq)("",!0),m.data.server.mailserver?((0,l.wg)(),(0,l.j4)(x,{key:4,"primary-title":""},{default:(0,l.w5)((()=>[(0,l.Wm)(W,{modelValue:m.data.email,"onUpdate:modelValue":t[4]||(t[4]=e=>m.data.email=e),label:"Email",onChange:t[5]||(t[5]=e=>f.toggleEmail()),"hide-details":"",color:"primary"},null,8,["modelValue"])])),_:1})):(0,l.kq)("",!0)])),_:1},8,["loading"]),m.data.server.mailserver?((0,l.wg)(),(0,l.iD)("div",r,[(0,l.Wm)(v,{class:"mx-auto"},{default:(0,l.w5)((()=>[(0,l.Wm)(U,{"max-width":"600"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(m.data.emails,((e,a)=>((0,l.wg)(),(0,l.j4)(C,{key:`item-${a}`,title:e.name,subtitle:e.value,onClick:t=>f.editItem(e)},{append:(0,l.w5)((()=>[(0,l.Wm)(g,{icon:"",disabled:m.fetching,loading:m.fetching,onClick:[t=>f.deleteItem(e.user),t[6]||(t[6]=(0,i.iM)((()=>{}),["stop"]))]},{default:(0,l.w5)((()=>[(0,l.Wm)(b,{size:"small"},{default:(0,l.w5)((()=>[(0,l.Uk)("mdi:mdi-delete")])),_:1})])),_:2},1032,["disabled","loading","onClick"])])),default:(0,l.w5)((()=>[(0,l.Wm)(q,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(e.user)+" ",1),e.destination?((0,l.wg)(),(0,l.iD)("span",u,[(0,l.Wm)(b,null,{default:(0,l.w5)((()=>[(0,l.Uk)("fas fa-long-arrow-alt-right")])),_:1}),(0,l.Uk)(" "+(0,o.zw)(e.destination),1)])):(0,l.kq)("",!0)])),_:2},1024),(0,l.Wm)(D,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(f.prettyBytes(e.disk_usage)),1)])),_:2},1024)])),_:2},1032,["title","subtitle","onClick"])))),128))])),_:1}),(0,l.Wm)(V,null,{default:(0,l.w5)((()=>[(0,l.Wm)(g,{onClick:t[7]||(t[7]=e=>f.addEmail())},{default:(0,l.w5)((()=>[(0,l.Uk)(" Add email ")])),_:1})])),_:1})])),_:1}),(0,l.Wm)(I,{modelValue:m.drawer,"onUpdate:modelValue":t[12]||(t[12]=e=>m.drawer=e),"max-width":"600"},{default:(0,l.w5)((()=>[(0,l.Wm)(v,null,{default:(0,l.w5)((()=>[(0,l.Wm)(x,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Email account ")])),_:1}),(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[(0,l.Wm)(j,{modelValue:m.email.user,"onUpdate:modelValue":t[8]||(t[8]=e=>m.email.user=e),label:"Name",required:"",readonly:m.userReadonly},null,8,["modelValue","readonly"]),(0,l.Wm)(Z,{modelValue:m.email.password,"onUpdate:modelValue":t[9]||(t[9]=e=>m.email.password=e),label:"Password",required:""},null,8,["modelValue"]),(0,l.Wm)(j,{modelValue:m.email.destination,"onUpdate:modelValue":t[10]||(t[10]=e=>m.email.destination=e),label:"Forwarding",required:""},null,8,["modelValue"]),(0,l.Wm)(g,{disabled:!m.email.user,loading:m.fetching,color:"success",onClick:t[11]||(t[11]=e=>f.saveEmail()),text:"Save"},null,8,["disabled","loading"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])):(0,l.kq)("",!0),(0,l.Wm)(P,{ref:"confirm"},null,512)])}var m=a(1006),f=a(11912),h=a(72564),w=a(14796),g=a(4189),p={components:{Loading:f.Z,Confirm:w.Z,PasswordField:g.Z},data(){return{domainId:null,post:null,error:null,data:{email:!1,emails:[],server:{},records:{}},email:{},fetching:!1,loading:!1,rules:{required:e=>!!e||"Required.",min:e=>e.length>=8||"Min 8 characters",emailMatch:()=>"The email and password you entered don't match"},copyText:"Copy",drawer:!1,userReadonly:!1,timer:null,authRequired:!1}},created(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData(){var e=this;this.error="",this.domainId=this.$route.params.id,clearTimeout(e.timer),this.fetching=!0,m.Z.get("sites/"+this.domainId+"/email?v="+Date.now()).then((function(t){console.log(t),e.data=t.data.item,document.title="Email | "+e.data.domain,e.data.dns.updating&&(console.log("checking dns"),e.timer=setTimeout(e.fetchData,6e4))})).catch((function(e){console.log(e)})).finally((function(){e.fetching=!1}))},toggleEmail(){var e=this;this.error="",this.loading=!0,m.Z.post("sites/"+this.domainId+"/email",{update:1,status:this.data.email}).then((function(t){console.log(t),t.data.error?e.error=t.data.error:t.data.success&&e.fetchData()})).catch((function(e){console.log(e)})).finally((function(){e.fetching=!1,e.loading=!1}))},addEmail(){this.drawer=!0,this.userReadonly=!1,this.email={}},editItem(e){this.drawer=!0,this.userReadonly=!0,this.email=e},saveEmail(){var e=this;this.email.user&&(this.loading=!0,this.error="",m.Z.post("sites/"+this.domainId+"/email",this.email).then((function(t){console.log(t),t.data.success?(e.drawer=!1,e.fetchData()):(e.error=t.data.error,e.loading=!1)})).catch((function(e){console.log(e)})).finally((function(){e.loading=!1})))},deleteItem:async function(e){if(await this.$refs.confirm.open("Confirm","Delete "+e)){var t=this;this.loading=!0,this.error="",m.Z.post("sites/"+this.domainId+"/email",{delete:1,user:e}).then((function(e){console.log(e),e.data.success?t.fetchData():(t.error=e.data.error,t.loading=!1)})).catch((function(e){console.log(e)})).finally((function(){t.loading=!1}))}},fixDomainDns(){var e=this;this.error="",this.loading=!0,m.Z.post("sites/"+e.domainId+"/fixmx",{}).then((function(t){console.log(t),e.loading=!1,t.data.success?e.fetchData():"auth"==t.data.error?e.authRequired=!0:e.error=t.data.error})).catch((function(e){console.log(e)}))},fixDkim(){var e=this;this.error="",this.loading=!0,m.Z.post("sites/"+e.domainId+"/fixdkim",{}).then((function(t){console.log(t),e.loading=!1,t.data.success?e.fetchData():"auth"==t.data.error?e.authRequired=!0:e.error=t.data.error})).catch((function(e){console.log(e)}))},fixSpf(){var e=this;this.error="",this.loading=!0,m.Z.post("sites/"+e.domainId+"/fixspf",{}).then((function(t){console.log(t),e.loading=!1,t.data.success?e.fetchData():"auth"==t.data.error?e.authRequired=!0:e.error=t.data.error})).catch((function(e){console.log(e)}))},authPrompt(){this.authRequired=!1,window.open("https://serverwand.com/account/services/"+this.data.server.dns)},prettyBytes(e){return h.Z.prettyBytes(e)}},beforeUnmount(){clearTimeout(this.timer)}},v=a(48118);const k=(0,v.Z)(p,[["render",c]]);var _=k}}]);
//# sourceMappingURL=363.8a97f31b.js.map