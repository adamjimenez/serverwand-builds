"use strict";(self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[]).push([[3692,7416],{64574:function(e,t,s){s.d(t,{Z:function(){return u}});var a=s(66252),o=s(3577),l=s(49963);function i(e,t,s,i,n,r){const d=(0,a.up)("v-toolbar-title"),u=(0,a.up)("v-toolbar"),c=(0,a.up)("v-card-text"),m=(0,a.up)("v-spacer"),h=(0,a.up)("v-btn"),p=(0,a.up)("v-card-actions"),w=(0,a.up)("v-card"),f=(0,a.up)("v-dialog");return(0,a.wg)(),(0,a.j4)(f,{modelValue:e.dialog,"onUpdate:modelValue":t[0]||(t[0]=t=>e.dialog=t),"max-width":e.options.width,style:(0,o.j5)({zIndex:e.options.zIndex}),onKeydown:(0,l.D2)(r.cancel,["esc"]),persistent:""},{default:(0,a.w5)((()=>[(0,a.Wm)(w,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u,{dark:"",color:e.options.color,dense:"",flat:""},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{class:"text-body-2 font-weight-bold grey--text"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.title),1)])),_:1})])),_:1},8,["color"]),(0,a.wy)((0,a.Wm)(c,{class:"pa-4 black--text",innerHTML:e.message},null,8,["innerHTML"]),[[l.F8,!!e.message]]),(0,a.Wm)(p,{class:"pt-3"},{default:(0,a.w5)((()=>[(0,a.Wm)(m),e.options.noconfirm?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(h,{key:0,color:"grey",text:"",class:"body-2 font-weight-bold",onClick:r.cancel},{default:(0,a.w5)((()=>[(0,a.Uk)("Cancel")])),_:1},8,["onClick"])),(0,a.Wm)(h,{color:"primary",class:"body-2 font-weight-bold",outlined:"",onClick:r.agree},{default:(0,a.w5)((()=>[(0,a.Uk)("OK")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue","max-width","style","onKeydown"])}var n={data:function(){return{dialog:!1,resolve:null,reject:null,message:null,title:null,options:{color:"grey lighten-3",width:400,zIndex:10008,noconfirm:!1}}},methods:{open(e,t,s){return t||(t=e,e="Confirm"),this.dialog=!0,this.title=e,this.message=t,this.options=Object.assign(this.options,s),new Promise(((e,t)=>{this.resolve=e,this.reject=t}))},agree(){this.resolve(!0),this.dialog=!1},cancel(){this.resolve(!1),this.dialog=!1}}},r=s(83744);const d=(0,r.Z)(n,[["render",i]]);var u=d},3735:function(e,t,s){s.d(t,{Z:function(){return u}});var a=s(66252),o=s(3577);const l={ref:"container"};function i(e,t,s,i,n,r){const d=(0,a.up)("v-tooltip"),u=(0,a.up)("v-icon"),c=(0,a.up)("v-btn");return(0,a.wg)(),(0,a.iD)("span",l,[s.text?((0,a.wg)(),(0,a.j4)(d,{key:0,text:n.copyText,top:""},{activator:(0,a.w5)((({props:e})=>[(0,a._)("span",(0,a.dG)(e,{onClick:t[0]||(t[0]=e=>r.copy(s.val)),onMouseleave:t[1]||(t[1]=(...e)=>r.resetCopyText&&r.resetCopyText(...e))}),(0,o.zw)(s.label?s.label:s.val),17)])),_:1},8,["text"])):((0,a.wg)(),(0,a.j4)(d,{key:1,text:n.copyText,top:""},{activator:(0,a.w5)((({props:e})=>[(0,a.Wm)(c,(0,a.dG)(e,{icon:"",onClick:t[2]||(t[2]=e=>r.copy(s.val)),onMouseleave:r.resetCopyText}),{default:(0,a.w5)((()=>[(0,a.Wm)(u,{size:"small"},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi:mdi-content-copy")])),_:1})])),_:2},1040,["onMouseleave"])])),_:1},8,["text"]))],512)}var n={props:{label:null,val:null,text:Boolean},data(){return{copyText:"Copy"}},methods:{copy(e){const t=document.createElement("textarea");this.$refs["container"].appendChild(t),t.setAttribute("id","clipboard"),t.value=e,t.select(),document.execCommand("Copy"),t.parentNode.removeChild(t),this.copyText="Copied"},resetCopyText(){setTimeout((()=>this.copyText="Copy"),500)}}},r=s(83744);const d=(0,r.Z)(n,[["render",i]]);var u=d},11297:function(e,t,s){s.d(t,{Z:function(){return r}});var a=s(66252);function o(e,t,s,o,l,i){const n=(0,a.up)("v-icon"),r=(0,a.up)("v-alert"),d=(0,a.up)("v-dialog");return(0,a.wg)(),(0,a.j4)(d,{modelValue:e.show,"onUpdate:modelValue":t[0]||(t[0]=t=>e.show=t),persistent:"",width:"600"},{default:(0,a.w5)((()=>[(0,a.Wm)(r,{title:s.message,color:"primary"},{prepend:(0,a.w5)((()=>[(0,a.Wm)(n,{icon:"fas fa-magic fa-2x faa-horizontal animated"})])),_:1},8,["title"])])),_:1},8,["modelValue"])}var l={name:"Loading",data:()=>({show:!1}),props:{value:{type:Boolean,default:!1},message:{type:String,default:"Summoning..."}},watch:{value:function(e){this.show=e}}},i=s(83744);const n=(0,i.Z)(l,[["render",o]]);var r=n},70850:function(e,t,s){s.d(t,{Z:function(){return r}});var a=s(66252);function o(e,t,s,o,l,i){const n=(0,a.up)("v-text-field");return(0,a.wg)(),(0,a.j4)(n,(0,a.dG)(e.$attrs,{type:l.showPassword?"text":"password","append-icon":l.showPassword?"mdi:mdi-eye-off":"mdi:mdi-eye","onClick:append":t[0]||(t[0]=e=>l.showPassword=!l.showPassword)}),null,16,["type","append-icon"])}var l={data(){return{showPassword:!1}}},i=s(83744);const n=(0,i.Z)(l,[["render",o]]);var r=n},67416:function(e,t,s){s.r(t),s.d(t,{default:function(){return r}});var a=s(66252);function o(e,t){const s=(0,a.up)("router-view"),o=(0,a.up)("v-container"),l=(0,a.up)("v-main"),i=(0,a.up)("v-app");return(0,a.wg)(),(0,a.j4)(i,null,{default:(0,a.w5)((()=>[(0,a.Wm)(l,null,{default:(0,a.w5)((()=>[(0,a.Wm)(o,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s)])),_:1})])),_:1})])),_:1})}var l=s(83744);const i={},n=(0,l.Z)(i,[["render",o]]);var r=n},33692:function(e,t,s){s.r(t),s.d(t,{default:function(){return b}});var a=s(66252),o=s(49963),l=s(3577);const i=(0,a._)("div",null,"Public SSH key",-1),n=(0,a._)("div",null,"Authorized keys",-1);function r(e,t,s,r,d,u){const c=(0,a.up)("v-alert"),m=(0,a.up)("Loading"),h=(0,a.up)("v-btn"),p=(0,a.up)("TogglePasswordAuthentication"),w=(0,a.up)("v-card-actions"),f=(0,a.up)("v-icon"),g=(0,a.up)("v-list-item"),y=(0,a.up)("v-list"),v=(0,a.up)("v-card"),k=(0,a.up)("v-tab"),_=(0,a.up)("v-tabs"),b=(0,a.up)("v-text-field"),W=(0,a.up)("PasswordField"),x=(0,a.up)("v-switch"),C=(0,a.up)("v-window-item"),V=(0,a.up)("v-list-item-subtitle"),U=(0,a.up)("Copy"),I=(0,a.up)("v-window"),D=(0,a.up)("v-card-text"),Z=(0,a.up)("v-dialog"),S=(0,a.up)("Confirm");return(0,a.wg)(),(0,a.iD)("div",null,[d.error?((0,a.wg)(),(0,a.j4)(c,{key:0,type:"error",text:d.error},null,8,["text"])):(0,a.kq)("",!0),(0,a.Wm)(m,{value:d.loading},null,8,["value"]),(0,a.Wm)(v,{loading:d.fetching},{default:(0,a.w5)((()=>[(0,a.Wm)(w,null,{default:(0,a.w5)((()=>[(0,a.Wm)(h,{onClick:u.addItem,class:"mr-3",icon:"mdi:mdi-plus"},null,8,["onClick"]),(0,a.Wm)(p,{serverId:d.serverId,passwordAuthentication:d.data.password_authentication},null,8,["serverId","passwordAuthentication"])])),_:1}),(0,a.Wm)(y,{"max-width":"600"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(d.data.users,((e,t)=>((0,a.wg)(),(0,a.j4)(g,{key:`item-${t}`,title:e.name,subtitle:e.label,onClick:t=>u.editItem(e)},{append:(0,a.w5)((()=>[e.name===d.data.ssh_username?((0,a.wg)(),(0,a.j4)(f,{key:0,size:"x-small",title:"Default SSH user",color:"primary",icon:"fas fa-check",class:"mx-1",onClick:(0,o.iM)(u.clearSSHUser,["stop"])},null,8,["onClick"])):(0,a.kq)("",!0),e.sudo?((0,a.wg)(),(0,a.j4)(f,{key:1,size:"x-small",title:"Sudo privileges",color:"primary",icon:"fas fa-crown",class:"mx-1"})):((0,a.wg)(),(0,a.j4)(f,{key:2,size:"x-small",title:"Non-sudo user",color:"primary",icon:"fas fa-user",class:"mx-1"})),e.sudo_without_password?((0,a.wg)(),(0,a.j4)(f,{key:3,size:"x-small",title:"Sudo without password",color:"primary",icon:"fas\n                fa-lock-open",class:"mx-1"})):((0,a.wg)(),(0,a.j4)(f,{key:4,size:"x-small",color:"primary",title:"Sudo with password",icon:"fas fa-lock",class:"mx-1"})),(0,a.Wm)(h,{disabled:d.loading,loading:d.loading===e.name,onClick:(0,o.iM)((t=>u.deleteItem(e.name)),["stop"]),size:"small",icon:"mdi:mdi-delete"},null,8,["disabled","loading","onClick"])])),_:2},1032,["title","subtitle","onClick"])))),128))])),_:1})])),_:1},8,["loading"]),(0,a.Wm)(Z,{modelValue:d.userDrawer,"onUpdate:modelValue":t[6]||(t[6]=e=>d.userDrawer=e),"max-width":"600"},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{title:"System user"},{default:(0,a.w5)((()=>[(0,a.Wm)(_,{modelValue:d.tab,"onUpdate:modelValue":t[0]||(t[0]=e=>d.tab=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(k,{value:"settings"},{default:(0,a.w5)((()=>[(0,a.Uk)("Settings")])),_:1}),(0,a.Wm)(k,{value:"keys",disabled:d.system_user.new},{default:(0,a.w5)((()=>[(0,a.Uk)("Keys")])),_:1},8,["disabled"])])),_:1},8,["modelValue"]),(0,a.Wm)(D,null,{default:(0,a.w5)((()=>[(0,a.Wm)(I,{modelValue:d.tab,"onUpdate:modelValue":t[5]||(t[5]=e=>d.tab=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(C,{value:"settings"},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{modelValue:d.system_user.name,"onUpdate:modelValue":t[1]||(t[1]=e=>d.system_user.name=e),label:"User",readonly:!d.system_user.new,required:"",autofocus:""},null,8,["modelValue","readonly"]),(0,a.Wm)(W,{modelValue:d.system_user.password,"onUpdate:modelValue":t[2]||(t[2]=e=>d.system_user.password=e),label:"Password",required:"",autocomplete:"new-password"},null,8,["modelValue"]),(0,a.Wm)(x,{modelValue:d.system_user.sudo,"onUpdate:modelValue":t[3]||(t[3]=e=>d.system_user.sudo=e),label:"sudo",color:"primary","hide-details":""},null,8,["modelValue"]),(0,a.Wm)(x,{disabled:!d.system_user.sudo,modelValue:d.system_user.sudo_without_password,"onUpdate:modelValue":t[4]||(t[4]=e=>d.system_user.sudo_without_password=e),label:"sudo without password",color:"primary","hide-details":""},null,8,["disabled","modelValue"]),(0,a.Wm)(h,{disabled:!d.system_user.name,loading:d.loading,color:"success",onClick:u.saveUser,class:"mt-5"},{default:(0,a.w5)((()=>[(0,a.Uk)(" Save ")])),_:1},8,["disabled","loading","onClick"])])),_:1}),(0,a.Wm)(C,{value:"keys"},{default:(0,a.w5)((()=>[i,(0,a.Wm)(y,null,{default:(0,a.w5)((()=>[(0,a.Wm)(g,null,{append:(0,a.w5)((()=>[d.user.key?((0,a.wg)(),(0,a.j4)(h,{key:0,icon:"",disabled:d.fetching,loading:d.fetching},{default:(0,a.w5)((()=>[(0,a.Wm)(U,{val:d.user.key},null,8,["val"])])),_:1},8,["disabled","loading"])):(0,a.kq)("",!0)])),default:(0,a.w5)((()=>[(0,a.Wm)(V,{style:{"white-space":"nowrap"}},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(d.user.key),1)])),_:1})])),_:1})])),_:1}),n,d.fetching?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(y,{key:0},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(d.keys,((e,t)=>((0,a.wg)(),(0,a.j4)(g,{key:`item-${t}`,title:e.name},{append:(0,a.w5)((()=>[(0,a.Wm)(h,{icon:"",disabled:d.fetching,loading:d.fetching},{default:(0,a.w5)((()=>[(0,a.Wm)(U,{val:e.key},null,8,["val"])])),_:2},1032,["disabled","loading"]),(0,a.Wm)(h,{icon:"mdi:mdi-delete",size:"small",disabled:d.fetching,loading:d.loading===e.line,onClick:(0,o.iM)((t=>u.deleteKey(e.line)),["stop"])},null,8,["disabled","loading","onClick"])])),default:(0,a.w5)((()=>[(0,a.Wm)(V,{style:{"white-space":"nowrap"}},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.key),1)])),_:2},1024)])),_:2},1032,["title"])))),128))])),_:1})),(0,a.Wm)(h,{onClick:u.addKey,icon:"mdi:mdi-plus"},null,8,["onClick"])])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(Z,{modelValue:d.keyDrawer,"onUpdate:modelValue":t[8]||(t[8]=e=>d.keyDrawer=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{title:"Upload key for "+d.user.name},{default:(0,a.w5)((()=>[(0,a.Wm)(D,null,{default:(0,a.w5)((()=>[(0,a.Wm)(b,{modelValue:d.key,"onUpdate:modelValue":t[7]||(t[7]=e=>d.key=e),label:"Public key"},null,8,["modelValue"]),(0,a.Wm)(h,{disabled:!d.key,loading:d.fetching,color:"success",onClick:u.saveKey},{default:(0,a.w5)((()=>[(0,a.Uk)(" Save ")])),_:1},8,["disabled","loading","onClick"])])),_:1})])),_:1},8,["title"])])),_:1},8,["modelValue"]),(0,a.Wm)(S,{ref:"confirm"},null,512)])}var d=s(1006),u=s(11297),c=s(3735);function m(e,t,s,o,l,i){const n=(0,a.up)("v-icon"),r=(0,a.up)("v-tooltip"),d=(0,a.up)("v-switch");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(d,{modelValue:l.data.passwordAuthentication,"onUpdate:modelValue":t[0]||(t[0]=e=>l.data.passwordAuthentication=e),label:"Password Authentication",onChange:i.togglePasswordAuthentication,"hide-details":"",color:"primary",loading:l.loading},{append:(0,a.w5)((()=>[(0,a.Wm)(r,{location:"top",text:"We recommend password authentication is\n            disabled in favour of key authentication."},{activator:(0,a.w5)((({props:e})=>[(0,a.Wm)(n,(0,a.dG)({color:"primary"},e),{default:(0,a.w5)((()=>[(0,a.Uk)(" mdi:mdi-information ")])),_:2},1040)])),_:1})])),_:1},8,["modelValue","onChange","loading"])])}var h=s(67416),p={components:{Template:h["default"]},props:{serverId:null,passwordAuthentication:null},watch:{passwordAuthentication:function(e){this.data.passwordAuthentication=e}},data(){return{loading:null,data:{passwordAuthentication:!1}}},created(){this.data.passwordAuthentication=this.passwordAuthentication},methods:{togglePasswordAuthentication(){this.error="",this.loading=!0,d.Z.post("servers/"+this.serverId+"/password_authentication",{save:1,enable:this.data.passwordAuthentication}).then((e=>{console.log(e),e.data.error?this.error=e.data.error:e.data.success&&this.$emit("complete")})).catch((e=>{console.log(e)})).finally((()=>{this.loading=null}))}}},w=s(83744);const f=(0,w.Z)(p,[["render",m]]);var g=f,y=s(64574),v=s(70850),k={components:{Loading:u.Z,Copy:c.Z,TogglePasswordAuthentication:g,Confirm:y.Z,PasswordField:v.Z},data(){return{tab:null,error:"",data:{users:{}},system_user:{user:"",password:"",key:"",sudo:!1,sudo_without_password:!1},details:"",loading:null,fetching:!1,userDrawer:!1,keyDrawer:!1,serverId:0,user:"",keys:[],key:""}},created(){this.serverId=this.$route.params.id,this.fetchData()},methods:{fetchData(){this.error="",this.fetching=!0,d.Z.get("servers/"+this.serverId+"/systemusers?detailed=1").then((e=>{if(console.log(e),e.data.error)return this.error=e.data.error,!1;this.data=e.data.item,document.title="System users | "+this.data.name})).catch((e=>{console.log(e)})).finally((()=>{this.fetching=!1}))},addItem(){this.system_user={name:"",password:"",key:"",sudo:!1,new:!0},this.tab="settings",this.userDrawer=!0},editItem(e){this.user=e,this.fetching=!0,this.tab="settings",d.Z.get("servers/"+this.serverId+"/systemusers/"+this.user.name).then((e=>{console.log(e),this.keys=e.data.keys,this.fetching=!1})).catch((e=>{console.log(e),this.fetching=!1})).finally((()=>{this.system_user=e,this.userDrawer=!0}))},deleteItem:async function(e){if(await this.$refs.confirm.open("Delete "+e+"?"))return this.loading=e,this.error="",d.Z.post("servers/"+this.serverId+"/systemusers",{user:e}).then((e=>{console.log(e),e.data.success?this.fetchData():this.error=e.data.error})).catch((e=>{console.log(e)})).finally((()=>{this.loading=null})),!1},saveUser(){this.system_user.name&&(this.details="",this.fetching=!0,this.error="",d.Z.post("servers/"+this.serverId+"/systemusers",this.system_user).then((e=>{console.log(e),e.data.success?(this.userDrawer=!1,this.fetchData()):(this.error=e.data.error,this.fetching=!1)})).catch((e=>{console.log(e),this.fetching=!1})))},deleteKey:async function(e){await this.$refs.confirm.open("Delete key?")&&(this.loading=e,this.error="",d.Z.post("servers/"+this.serverId+"/systemusers/"+this.user.name,{line:e}).then((e=>{console.log(e),e.data.success?(this.editItem(this.user),this.tab="keys"):(this.fetching=!1,this.error=e.data.error)})).catch((e=>{this.fetching=!1,console.log(e)})).finally((()=>{this.loading=null})))},addKey(){this.keyDrawer=!0},saveKey(){this.fetching=!0,this.error="",d.Z.post("servers/"+this.serverId+"/systemusers/"+this.user.name,{key:this.key}).then((e=>{console.log(e),e.data.success?(this.keyDrawer=!1,this.editItem(this.user),this.tab="keys"):(this.fetching=!1,this.error=e.data.error)})).catch((e=>{this.fetching=!1,console.log(e)}))},clearSSHUser:async function(){await this.$refs.confirm.open("Clear the default SSH user used for terminal access?")&&(this.fetching=!0,d.Z.post("servers/"+this.serverId+"/savesshuser",{ssh_username:""}).then((e=>{console.log(e),e.data.success?this.$emit("complete"):this.error=e.data.error})).catch((e=>console.log(e))).finally((()=>this.fetching=!1)))}}};const _=(0,w.Z)(k,[["render",r]]);var b=_}}]);
//# sourceMappingURL=3692.eddd115a.js.map