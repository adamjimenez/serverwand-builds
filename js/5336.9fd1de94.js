"use strict";(self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[]).push([[5336],{14796:function(e,t,a){a.d(t,{Z:function(){return u}});var l=a(66252),o=a(3577),s=a(49963);function i(e,t,a,i,n,r){const d=(0,l.up)("v-toolbar-title"),u=(0,l.up)("v-toolbar"),c=(0,l.up)("v-card-text"),h=(0,l.up)("v-spacer"),m=(0,l.up)("v-btn"),p=(0,l.up)("v-card-actions"),f=(0,l.up)("v-card"),v=(0,l.up)("v-dialog");return(0,l.wg)(),(0,l.j4)(v,{modelValue:e.dialog,"onUpdate:modelValue":t[0]||(t[0]=t=>e.dialog=t),"max-width":e.options.width,style:(0,o.j5)({zIndex:e.options.zIndex}),onKeydown:(0,s.D2)(r.cancel,["esc"]),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[(0,l.Wm)(u,{dark:"",color:e.options.color,dense:"",flat:""},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{class:"text-body-2 font-weight-bold grey--text"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(e.title),1)])),_:1})])),_:1},8,["color"]),(0,l.wy)((0,l.Wm)(c,{class:"pa-4 black--text",innerHTML:e.message},null,8,["innerHTML"]),[[s.F8,!!e.message]]),(0,l.Wm)(p,{class:"pt-3"},{default:(0,l.w5)((()=>[(0,l.Wm)(h),e.options.noconfirm?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(m,{key:0,color:"grey",text:"",class:"body-2 font-weight-bold",onClick:r.cancel},{default:(0,l.w5)((()=>[(0,l.Uk)("Cancel")])),_:1},8,["onClick"])),(0,l.Wm)(m,{color:"primary",class:"body-2 font-weight-bold",outlined:"",onClick:r.agree},{default:(0,l.w5)((()=>[(0,l.Uk)("OK")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue","max-width","style","onKeydown"])}var n={data:function(){return{dialog:!1,resolve:null,reject:null,message:null,title:null,options:{color:"grey lighten-3",width:400,zIndex:1008,noconfirm:!1}}},methods:{open(e,t,a){return this.dialog=!0,this.title=e,this.message=t,this.options=Object.assign(this.options,a),new Promise(((e,t)=>{this.resolve=e,this.reject=t}))},agree(){this.resolve(!0),this.dialog=!1},cancel(){this.resolve(!1),this.dialog=!1}}},r=a(48118);const d=(0,r.Z)(n,[["render",i]]);var u=d},2682:function(e,t,a){a.d(t,{Z:function(){return u}});var l=a(66252),o=a(3577);const s={ref:"container"};function i(e,t,a,i,n,r){const d=(0,l.up)("v-tooltip"),u=(0,l.up)("v-icon"),c=(0,l.up)("v-btn");return(0,l.wg)(),(0,l.iD)("span",s,[a.text?((0,l.wg)(),(0,l.j4)(d,{key:0,text:n.copyText,top:""},{activator:(0,l.w5)((({props:e})=>[(0,l._)("span",(0,l.dG)(e,{onClick:t[0]||(t[0]=e=>r.copy(a.val)),onMouseleave:t[1]||(t[1]=(...e)=>r.resetCopyText&&r.resetCopyText(...e))}),(0,o.zw)(a.label?a.label:a.val),17)])),_:1},8,["text"])):((0,l.wg)(),(0,l.j4)(d,{key:1,text:n.copyText,top:""},{activator:(0,l.w5)((({props:e})=>[(0,l.Wm)(c,(0,l.dG)(e,{icon:"",onClick:t[2]||(t[2]=e=>r.copy(a.val)),onMouseleave:r.resetCopyText}),{default:(0,l.w5)((()=>[(0,l.Wm)(u,{size:"small"},{default:(0,l.w5)((()=>[(0,l.Uk)("mdi:mdi-content-copy")])),_:1})])),_:2},1040,["onMouseleave"])])),_:1},8,["text"]))],512)}var n={props:{label:null,val:null,text:Boolean},data(){return{copyText:"Copy"}},methods:{copy(e){var t=document.createElement("textarea");this.$refs["container"].appendChild(t),t.setAttribute("id","clipboard"),t.value=e,t.select(),document.execCommand("Copy"),t.parentNode.removeChild(t),this.copyText="Copied"},resetCopyText(){var e=this;setTimeout((()=>e.copyText="Copy"),500)}}},r=a(48118);const d=(0,r.Z)(n,[["render",i]]);var u=d},71706:function(e,t,a){a.d(t,{Z:function(){return p}});var l=a(66252),o=a(3577);const s={key:0},i={key:0},n={key:1},r={key:2};function d(e,t,a,d,u,c){const h=(0,l.up)("v-icon"),m=(0,l.up)("v-btn"),p=(0,l.up)("v-card-title"),f=(0,l.up)("v-select"),v=(0,l.up)("v-text-field"),w=(0,l.up)("v-card-text"),g=(0,l.up)("v-card"),y=(0,l.up)("v-dialog");return(0,l.wg)(),(0,l.iD)("span",null,[a.hideText?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("span",s,[a.yesno?((0,l.wg)(),(0,l.iD)("span",i,(0,o.zw)(a.val?"Yes":"No"),1)):a.password?((0,l.wg)(),(0,l.iD)("span",n,(0,o.zw)("******"))):((0,l.wg)(),(0,l.iD)("span",r,(0,o.zw)(a.val),1))])),(0,l.Wm)(m,{icon:"",onClick:t[0]||(t[0]=e=>c.edit(a.val))},{default:(0,l.w5)((()=>[(0,l.Wm)(h,{small:""},{default:(0,l.w5)((()=>[(0,l.Uk)("mdi:mdi-pencil")])),_:1})])),_:1}),(0,l.Wm)(y,{app:"",modelValue:u.dialog,"onUpdate:modelValue":t[4]||(t[4]=e=>u.dialog=e)},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{loading:u.fetching},{default:(0,l.w5)((()=>[(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Edit "+(0,o.zw)(a.label),1)])),_:1}),(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[a.yesno?((0,l.wg)(),(0,l.j4)(f,{key:0,modelValue:u.data.val,"onUpdate:modelValue":t[1]||(t[1]=e=>u.data.val=e),items:u.yesnoItems,label:a.label,autofocus:"",error:u.errors.length>0,"error-messages":u.errors},null,8,["modelValue","items","label","error","error-messages"])):((0,l.wg)(),(0,l.j4)(v,{key:1,modelValue:u.data.val,"onUpdate:modelValue":t[2]||(t[2]=e=>u.data.val=e),label:a.label,autofocus:"",type:!a.password||u.showPassword?"text":"password","append-icon":a.password?u.showPassword?"mdi:mdi-eye-off":"mdi:mdi-eye":"","onClick:append":t[3]||(t[3]=e=>u.showPassword=!u.showPassword),"error-messages":u.errors},null,8,["modelValue","label","type","append-icon","error-messages"])),(0,l.Wm)(m,{color:"primary",onClick:c.save},{default:(0,l.w5)((()=>[(0,l.Uk)(" Save ")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["loading"])])),_:1},8,["modelValue"])])}a(57658);var u=a(1006),c={props:{name:null,val:null,label:null,password:Boolean,hideText:Boolean,path:null,yesno:Boolean},data(){return{fetching:!1,dialog:!1,data:{val:null},showPassword:!1,yesnoItems:[{title:"Yes",value:1},{title:"No",value:0}],errors:[]}},watch:{val:function(e){this.data.val=e}},methods:{edit(){this.data.val=this.val,this.dialog=!0},save(){this.fetching=!0,this.errors=[];var e={};e[this.name]=this.data.val;var t=this;u.Z.post(this.path,e).then((e=>{console.log(e),e.data.success?(t.dialog=!1,t.$emit("save")):t.errors.push(e.data.error)})).catch((e=>console.log(e))).finally((()=>t.fetching=!1))}}},h=a(48118);const m=(0,h.Z)(c,[["render",d]]);var p=m},82079:function(e,t,a){a.d(t,{Z:function(){return m}});var l=a(66252),o=a(3577),s=a(49963);const i={key:1};function n(e,t,a,n,r,d){const u=(0,l.up)("v-alert"),c=(0,l.up)("v-switch"),h=(0,l.up)("v-icon"),m=(0,l.up)("v-btn"),p=(0,l.up)("v-list-item"),f=(0,l.up)("v-list"),v=(0,l.up)("v-text-field"),w=(0,l.up)("v-card-text"),g=(0,l.up)("v-form"),y=(0,l.up)("v-card"),k=(0,l.up)("v-dialog"),_=(0,l.up)("Confirm");return(0,l.wg)(),(0,l.j4)(y,null,{default:(0,l.w5)((()=>[(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[r.error?((0,l.wg)(),(0,l.j4)(u,{key:0,type:"error"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(r.error),1)])),_:1})):(0,l.kq)("",!0),(0,l.Wm)(c,{modelValue:r.data.active,"onUpdate:modelValue":t[0]||(t[0]=e=>r.data.active=e),label:"IP restrictions",onChange:d.toggle,color:"primary","hide-details":""},null,8,["modelValue","onChange"]),r.data.active?((0,l.wg)(),(0,l.iD)("div",i,[(0,l.Wm)(f,{"max-width":"300"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.items,((e,t)=>((0,l.wg)(),(0,l.j4)(p,{key:`item-${t}`,title:e.ip,subtitle:e.label},{append:(0,l.w5)((()=>[(0,l.Wm)(m,{icon:"",disabled:r.fetching,loading:r.fetching,onClick:(0,s.iM)((t=>d.deleteItem(e.line)),["stop"])},{default:(0,l.w5)((()=>[(0,l.Wm)(h,{size:"small"},{default:(0,l.w5)((()=>[(0,l.Uk)("mdi:mdi-delete")])),_:1})])),_:2},1032,["disabled","loading","onClick"])])),_:2},1032,["title","subtitle"])))),128))])),_:1}),(0,l.Wm)(m,{onClick:t[1]||(t[1]=e=>d.addItem())},{default:(0,l.w5)((()=>[(0,l.Uk)(" Add IP ")])),_:1})])):(0,l.kq)("",!0),(0,l.Wm)(k,{app:"",modelValue:r.drawer,"onUpdate:modelValue":t[5]||(t[5]=e=>r.drawer=e),temporary:"",right:""},{default:(0,l.w5)((()=>[(0,l.Wm)(y,{title:"IP"},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{modelValue:r.valid,"onUpdate:modelValue":t[4]||(t[4]=e=>r.valid=e)},{default:(0,l.w5)((()=>[(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[(0,l.Wm)(v,{modelValue:r.item.label,"onUpdate:modelValue":t[2]||(t[2]=e=>r.item.label=e),label:"Label",required:"",rules:[r.rules.required]},null,8,["modelValue","rules"]),(0,l.Wm)(v,{modelValue:r.item.ip,"onUpdate:modelValue":t[3]||(t[3]=e=>r.item.ip=e),label:"IP address",required:"",rules:[r.rules.required,r.rules.ip]},null,8,["modelValue","rules"]),(0,l.Wm)(m,{disabled:!r.valid,loading:r.fetching,color:"success",onClick:d.saveItem},{default:(0,l.w5)((()=>[(0,l.Uk)(" Save ")])),_:1},8,["disabled","loading","onClick"])])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(_,{ref:"confirm"},null,512)])),_:1})])),_:1})}var r=a(1006),d=a(14796),u={components:{Confirm:d.Z},props:{serverId:null,active:null,items:null,path:null},data(){return{data:{active:null},item:{},fetching:!1,drawer:!1,rules:{required:e=>!!e||"Required.",ip:e=>!e||/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(e)||"Invalid IP address"},error:null,valid:!1}},watch:{active:function(e){this.data.active=e}},methods:{toggle(){var e=this;this.fetching=!0,this.error="",r.Z.post(this.path,{active:this.data.active}).then((function(t){console.log(t),t.data.success||(e.error=t.data.error)})).catch((function(e){console.log(e)})).finally((function(){e.fetching=!1,e.$emit("save")}))},addItem(){this.item={},this.drawer=!0},deleteItem:async function(e){if(await this.$refs.confirm.open("Confirm","Are you sure you want to delete this item?")&&res){var t=this;this.fetching=!0,this.error="",r.Z.post(this.path,{line:e}).then((function(e){console.log(e),e.data.success||(t.error=e.data.error)})).catch((function(e){console.log(e)})).finally((()=>{this.fetching=!1,t.$emit("save")}))}},saveItem(){var e=this;this.error="",this.fetching=!0,r.Z.post(this.path,this.item).then((t=>{console.log(t),t.data.error?e.error=t.data.error:(e.drawer=!1,e.$emit("save"))})).catch((e=>console.log(e))).finally((()=>{this.fetching=!1}))}}},c=a(48118);const h=(0,c.Z)(u,[["render",n]]);var m=h},11912:function(e,t,a){a.d(t,{Z:function(){return c}});var l=a(66252),o=a(3577);const s=(0,l._)("i",{class:"fas fa-magic fa-2x faa-horizontal animated"},null,-1),i={class:"ml-2"};function n(e,t,a,n,r,d){const u=(0,l.up)("v-layout"),c=(0,l.up)("v-card-text"),h=(0,l.up)("v-card"),m=(0,l.up)("v-container"),p=(0,l.up)("v-dialog");return(0,l.wg)(),(0,l.j4)(p,{modelValue:e.show,"onUpdate:modelValue":t[0]||(t[0]=t=>e.show=t),persistent:"",content:"","content-class":"centered-dialog"},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{"fill-height":""},{default:(0,l.w5)((()=>[(0,l.Wm)(h,{color:"primary"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Wm)(u,{row:""},{default:(0,l.w5)((()=>[s,(0,l._)("h2",i,(0,o.zw)(a.message),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])}var r={name:"Loading",data:()=>({show:!1}),props:{value:{type:Boolean,default:!1},message:{type:String,default:"Summoning..."}},watch:{value:function(e){this.show=e}}},d=a(48118);const u=(0,d.Z)(r,[["render",n]]);var c=u},45336:function(e,t,a){a.r(t),a.d(t,{default:function(){return x}});var l=a(66252),o=a(3577);const s=(0,l._)("strong",null,"DNS auth required: ",-1),i=(0,l._)("i",{class:"fas fa-folder-open"},null,-1),n={key:0},r={key:0};function d(e,t,a,d,u,c){const h=(0,l.up)("v-alert"),m=(0,l.up)("v-btn"),p=(0,l.up)("Loading"),f=(0,l.up)("DNS"),v=(0,l.up)("v-list-item-title"),w=(0,l.up)("v-list-item-subtitle"),g=(0,l.up)("v-list-item"),y=(0,l.up)("Copy"),k=(0,l.up)("Edit"),_=(0,l.up)("v-switch"),W=(0,l.up)("v-divider"),b=(0,l.up)("IPRestrictions"),x=(0,l.up)("v-list"),C=(0,l.up)("v-card");return(0,l.wg)(),(0,l.iD)("div",null,[u.error?((0,l.wg)(),(0,l.j4)(h,{key:0,type:"error",text:u.error},null,8,["text"])):(0,l.kq)("",!0),u.authRequired?((0,l.wg)(),(0,l.j4)(h,{key:1,class:"ma-0"},{default:(0,l.w5)((()=>[s,(0,l.Wm)(m,{onClick:t[0]||(t[0]=e=>c.authPrompt())},{default:(0,l.w5)((()=>[(0,l.Uk)("Fix")])),_:1})])),_:1})):(0,l.kq)("",!0),(0,l.Wm)(p,{value:u.loading},null,8,["value"]),(0,l.Wm)(C,{class:"pa-3"},{default:(0,l.w5)((()=>[(0,l.Wm)(C,{"max-width":"400"},{default:(0,l.w5)((()=>[(0,l.Wm)(x,{lines:"two"},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{server:u.data.server},null,8,["server"]),(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l.Wm)(v,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Disk Usage ")])),_:1}),(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(c.prettyBytes(1024*u.data.disk_usage)),1)])),_:1})])),_:1}),(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l.Wm)(v,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Data Transfer ")])),_:1}),(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(c.prettyBytes(1024*u.data.transfer)),1)])),_:1})])),_:1}),(0,l.Wm)(g,{title:"FTP Host",subtitle:u.data.domain},{subtitle:(0,l.w5)((()=>[(0,l.Wm)(y,{val:u.data.domain,text:""},null,8,["val"])])),_:1},8,["subtitle"]),(0,l.Wm)(g,{title:"Username",subtitle:u.data.domain},{subtitle:(0,l.w5)((()=>[(0,l.Wm)(y,{val:u.data.domain,text:""},null,8,["val"])])),_:1},8,["subtitle"]),(0,l.Wm)(g,{title:"Password",subtitle:"******"},{subtitle:(0,l.w5)((()=>[(0,l.Wm)(y,{val:u.data.ftp_password,label:"******",text:""},null,8,["val"])])),append:(0,l.w5)((()=>[(0,l.Wm)(k,{val:u.data.ftp_password,label:"FTP Password",name:"password",password:"",path:"sites/"+this.siteId+"/update",onSave:t[1]||(t[1]=e=>c.fetchData(!0)),hideText:""},null,8,["val","path"])])),_:1}),(0,l.Wm)(g,{title:"Path"},{append:(0,l.w5)((()=>[(0,l.Wm)(m,{icon:"",to:"/servers/"+u.data.server?.id+"/Files#"+c.path},{default:(0,l.w5)((()=>[i])),_:1},8,["to"])])),default:(0,l.w5)((()=>[(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[(0,l.Wm)(y,{val:c.path,text:""},null,8,["val"])])),_:1})])),_:1}),u.data.origin?((0,l.wg)(),(0,l.iD)("div",n,[(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l.Wm)(v,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Password protection ")])),_:1}),(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[(0,l.Wm)(_,{modelValue:u.data.auth.active,"onUpdate:modelValue":t[2]||(t[2]=e=>u.data.auth.active=e),label:"Active",onChange:t[3]||(t[3]=e=>c.toggleAuth())},null,8,["modelValue"])])),_:1})])),_:1}),(0,l.Wm)(W),u.data.auth.active?((0,l.wg)(),(0,l.iD)("div",r,[(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l.Wm)(v,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Username ")])),_:1}),(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(u.data.auth.username)+" ",1),(0,l.Wm)(y,{val:u.data.auth.username,text:""},null,8,["val"])])),_:1})])),_:1}),(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l.Wm)(v,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Password ")])),_:1}),(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(u.data.auth.password)+" ",1),(0,l.Wm)(k,{val:u.data.auth.password,label:"Auth Password",name:"password",password:"",path:"sites/"+this.siteId+"/auth",onSave:t[4]||(t[4]=e=>c.fetchData(!0))},null,8,["val","path"])])),_:1})])),_:1})])):(0,l.kq)("",!0)])):(0,l.kq)("",!0),(0,l.Wm)(b,{active:u.data.ip_restrictions.active,items:u.data.ip_restrictions.ips,path:"sites/"+this.siteId+"/iprestrictions",onSave:t[5]||(t[5]=e=>c.fetchData(!0))},null,8,["active","items","path"])])),_:1})])),_:1})])),_:1})])}var u=a(1006),c=a(72564),h=a(11912),m=a(2682),p=a(71706),f=a(82079);const v=(0,l._)("strong",null,"Checking DNS..",-1);function w(e,t,a,o,s,i){const n=(0,l.up)("v-list-item"),r=(0,l.up)("v-btn");return(0,l.wg)(),(0,l.iD)("div",null,[!s.data.dns||s.data.dns?.updating?((0,l.wg)(),(0,l.j4)(n,{key:0,class:"mb-3"},{default:(0,l.w5)((()=>[v])),_:1})):s.authRequired||s.data.dns?.A==a.server.ip?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(n,{key:1,title:"DNS mismatch",subtitle:(s.data.dns?.A?s.data.dns?.A:"blank")+" != "+a.server.ip},{default:(0,l.w5)((()=>[s.data.dns?.not_set?((0,l.wg)(),(0,l.j4)(r,{key:0,onClick:t[0]||(t[0]=e=>i.fixDomainDns(s.data.domain))},{default:(0,l.w5)((()=>[(0,l.Uk)("Fix")])),_:1})):(0,l.kq)("",!0)])),_:1},8,["subtitle"]))])}var g={props:{server:null},data(){return{authRequired:!1,data:{},fetching:!1}},created(){this.fetchData()},methods:{fetchData(e){var t=this;this.error="",this.siteId=this.$route.params.id,clearTimeout(t.timer),this.fetching=!0,u.Z.get("sites/"+this.siteId+"/dns",{clearCacheEntry:e}).then((function(e){console.log(e),t.data=e.data})).catch((function(e){console.log(e)})).finally((function(){t.fetching=!1}))},fixDomainDns(){var e=this;this.error="",this.loading=!0,u.Z.post("sites/"+e.siteId+"/fixdns",{}).then((function(t){console.log(t),e.loading=!1,t.data.success?e.fetchData(!0):"auth"==t.data.error?e.authRequired=!0:e.error=t.data.error})).catch((function(e){console.log(e)}))},authPrompt(){this.authRequired=!1,window.open("https://serverwand.com/account/services/"+this.data.server.dns)},toggleAuth(){var e=this;this.fetching=!0,this.error="",u.Z.post("sites/"+this.siteId+"/auth",{status:this.data.auth.active}).then((function(t){console.log(t),t.data.success?e.fetchData(!0):e.error=t.data.error})).catch((function(e){console.log(e)})).finally((function(){e.fetching=!1}))}}},y=a(48118);const k=(0,y.Z)(g,[["render",w]]);var _=k,W={components:{Loading:h.Z,Copy:m.Z,Edit:p.Z,IPRestrictions:f.Z,DNS:_},data(){return{siteId:null,post:null,error:null,data:{disk_usage:0,transfer:0,server:{},app:{},dns:{},auth:{},ip_restrictions:{}},details:"",loading:!1,fetching:!1,passwordPanel:[!1],passwordFormValid:!0,showPassword:!1,password:"",rules:{required:e=>!!e||"Required.",min:e=>e.length>=8||"Min 8 characters",emailMatch:()=>"The email and password you entered don't match"},alias:{domain:"",dns:!0},copyText:"Copy",timer:null,authRequired:!1}},created(){this.fetchData()},watch:{$route:"fetchData"},computed:{path:function(){return"/var/www/vhosts/"+this.data.domain+"/"}},methods:{fetchData(e){var t=this;this.error="",this.siteId=this.$route.params.id,clearTimeout(t.timer),this.fetching=!0,u.Z.get("sites/"+this.siteId+"/summary",{clearCacheEntry:e}).then((function(e){console.log(e),e.data.item&&(t.data=e.data.item),t.data.domain&&(document.title="Summary | "+t.data.domain)})).catch((function(e){console.log(e)})).finally((function(){t.fetching=!1,t.data.dns&&t.data.dns.updating&&(console.log("checking dns"),t.timer=setTimeout((function(){t.fetchData(!0)}),1e4))}))},fixDomainDns(){var e=this;this.error="",this.loading=!0,u.Z.post("sites/"+e.siteId+"/fixdns",{}).then((function(t){console.log(t),e.loading=!1,t.data.success?e.fetchData(!0):"auth"==t.data.error?e.authRequired=!0:e.error=t.data.error})).catch((function(e){console.log(e)}))},authPrompt(){this.authRequired=!1,window.open("https://serverwand.com/account/services/"+this.data.server.dns)},toggleAuth(){var e=this;this.fetching=!0,this.error="",u.Z.post("sites/"+this.siteId+"/auth",{status:this.data.auth.active}).then((function(t){console.log(t),t.data.success?e.fetchData(!0):e.error=t.data.error})).catch((function(e){console.log(e)})).finally((function(){e.fetching=!1}))},prettyBytes(e){return c.Z.prettyBytes(e)}}};const b=(0,y.Z)(W,[["render",d]]);var x=b}}]);
//# sourceMappingURL=5336.9fd1de94.js.map