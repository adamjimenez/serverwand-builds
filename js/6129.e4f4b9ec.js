"use strict";(self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[]).push([[6129],{87474:function(a,e,t){t.d(e,{Z:function(){return u}});var l=t(66252),o=t(3577);const n={ref:"container"};function d(a,e,t,d,s,r){const i=(0,l.up)("v-tooltip"),u=(0,l.up)("v-icon"),p=(0,l.up)("v-btn");return(0,l.wg)(),(0,l.iD)("span",n,[t.text?((0,l.wg)(),(0,l.j4)(i,{key:0,text:s.copyText,top:""},{activator:(0,l.w5)((({props:a})=>[(0,l._)("span",(0,l.dG)(a,{onClick:e[0]||(e[0]=a=>r.copy(t.val)),onMouseleave:e[1]||(e[1]=(...a)=>r.resetCopyText&&r.resetCopyText(...a))}),(0,o.zw)(t.val),17)])),_:1},8,["text"])):((0,l.wg)(),(0,l.j4)(i,{key:1,text:s.copyText,top:""},{activator:(0,l.w5)((({props:a})=>[(0,l.Wm)(p,(0,l.dG)(a,{icon:"",onClick:e[2]||(e[2]=a=>r.copy(t.val)),onMouseleave:r.resetCopyText}),{default:(0,l.w5)((()=>[(0,l.Wm)(u,{size:"small"},{default:(0,l.w5)((()=>[(0,l.Uk)("mdi:mdi-content-copy")])),_:1})])),_:2},1040,["onMouseleave"])])),_:1},8,["text"]))],512)}var s={props:{val:null,text:Boolean},data(){return{copyText:"Copy"}},methods:{copy(a){var e=document.createElement("textarea");this.$refs["container"].appendChild(e),e.setAttribute("id","clipboard"),e.value=a,e.select(),document.execCommand("Copy"),e.parentNode.removeChild(e),this.copyText="Copied"},resetCopyText(){var a=this;setTimeout((()=>a.copyText="Copy"),500)}}},r=t(48118);const i=(0,r.Z)(s,[["render",d]]);var u=i},20122:function(a,e,t){t.d(e,{Z:function(){return m}});var l=t(66252),o=t(3577);const n={key:0},d={key:1},s={key:2};function r(a,e,t,r,i,u){const p=(0,l.up)("v-icon"),c=(0,l.up)("v-btn"),m=(0,l.up)("v-card-title"),v=(0,l.up)("v-select"),w=(0,l.up)("v-text-field"),h=(0,l.up)("v-card-text"),f=(0,l.up)("v-card"),g=(0,l.up)("v-dialog");return(0,l.wg)(),(0,l.iD)("span",null,[t.yesno?((0,l.wg)(),(0,l.iD)("span",n,(0,o.zw)(t.val?"Yes":"No"),1)):t.password?((0,l.wg)(),(0,l.iD)("span",d,(0,o.zw)("******"))):t.hideText?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("span",s,(0,o.zw)(t.val),1)),(0,l.Wm)(c,{icon:"",onClick:e[0]||(e[0]=a=>u.edit(t.val))},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{small:""},{default:(0,l.w5)((()=>[(0,l.Uk)("mdi:mdi-pencil")])),_:1})])),_:1}),(0,l.Wm)(g,{app:"",modelValue:i.dialog,"onUpdate:modelValue":e[4]||(e[4]=a=>i.dialog=a)},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{loading:i.fetching},{default:(0,l.w5)((()=>[(0,l.Wm)(m,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Edit "+(0,o.zw)(t.label),1)])),_:1}),(0,l.Wm)(h,null,{default:(0,l.w5)((()=>[t.yesno?((0,l.wg)(),(0,l.j4)(v,{key:0,modelValue:i.data.val,"onUpdate:modelValue":e[1]||(e[1]=a=>i.data.val=a),items:i.yesnoItems,label:t.label,autofocus:"",error:i.errors.length>0,"error-messages":i.errors},null,8,["modelValue","items","label","error","error-messages"])):((0,l.wg)(),(0,l.j4)(w,{key:1,modelValue:i.data.val,"onUpdate:modelValue":e[2]||(e[2]=a=>i.data.val=a),label:t.label,autofocus:"",type:!t.password||i.showPassword?"text":"password","append-icon":t.password?i.showPassword?"mdi:mdi-eye-off":"mdi:mdi-eye":"","onClick:append":e[3]||(e[3]=a=>i.showPassword=!i.showPassword),"error-messages":i.errors},null,8,["modelValue","label","type","append-icon","error-messages"])),(0,l.Wm)(c,{color:"primary",onClick:u.save},{default:(0,l.w5)((()=>[(0,l.Uk)(" Save ")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["loading"])])),_:1},8,["modelValue"])])}var i=t(1006),u={props:{name:null,val:null,label:null,password:Boolean,hideText:Boolean,path:null,yesno:Boolean},data(){return{fetching:!1,dialog:!1,data:{val:null},showPassword:!1,yesnoItems:[{title:"Yes",value:1},{title:"No",value:0}],errors:[]}},watch:{val:function(a){this.data.val=a}},methods:{edit(){this.data.val=this.val,this.dialog=!0},save(){this.fetching=!0,this.errors=[];var a={};a[this.name]=this.data.val;var e=this;i.Z.post(this.path,a).then((a=>{console.log(a),a.data.success?(e.val=e.data.val,e.dialog=!1,e.$emit("save")):e.errors.push(a.data.error)})).catch((a=>console.log(a))).finally((()=>e.fetching=!1))}}},p=t(48118);const c=(0,p.Z)(u,[["render",r]]);var m=c},48236:function(a,e,t){t.d(e,{Z:function(){return p}});var l=t(66252),o=t(3577);const n=(0,l._)("i",{class:"fas fa-magic fa-2x faa-horizontal animated"},null,-1),d={style:{"margin-left":"10px"}};function s(a,e,t,s,r,i){const u=(0,l.up)("v-layout"),p=(0,l.up)("v-card-text"),c=(0,l.up)("v-card"),m=(0,l.up)("v-container"),v=(0,l.up)("v-dialog");return(0,l.wg)(),(0,l.j4)(v,{modelValue:a.show,"onUpdate:modelValue":e[0]||(e[0]=e=>a.show=e),persistent:"",content:"","content-class":"centered-dialog"},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{"fill-height":""},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{color:"primary",dark:""},{default:(0,l.w5)((()=>[(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[(0,l.Wm)(u,{row:""},{default:(0,l.w5)((()=>[n,(0,l._)("h2",d,(0,o.zw)(t.message),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])}var r={name:"Loading",data:()=>({show:!1}),props:{value:{type:Boolean,default:!1},message:{type:String,default:"Summoning..."}},watch:{value:function(a){this.show=a}}},i=t(48118);const u=(0,i.Z)(r,[["render",s]]);var p=u},86129:function(a,e,t){t.r(e),t.d(e,{default:function(){return g}});var l=t(66252),o=t(3577);const n={key:0},d={key:1},s=["action"],r=["value"],i={type:"submit"};function u(a,e,t,u,p,c){const m=(0,l.up)("v-alert"),v=(0,l.up)("Loading"),w=(0,l.up)("v-btn"),h=(0,l.up)("v-icon"),f=(0,l.up)("v-list-item-title"),g=(0,l.up)("v-list-item"),y=(0,l.up)("Copy"),_=(0,l.up)("v-list-item-subtitle"),b=(0,l.up)("Edit"),k=(0,l.up)("v-list"),W=(0,l.up)("v-card");return(0,l.wg)(),(0,l.iD)("div",null,[p.error?((0,l.wg)(),(0,l.j4)(m,{key:0,type:"error"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(p.error),1)])),_:1})):(0,l.kq)("",!0),(0,l.Wm)(v,{value:p.loading},null,8,["value"]),(0,l.Wm)(W,{class:"pa-3",loading:p.fetching},{default:(0,l.w5)((()=>[0==p.data.db_name?((0,l.wg)(),(0,l.iD)("div",n,[(0,l.Wm)(w,{disabled:""!=p.loading,loading:"database"==p.loading,onClick:c.addDatabase},{default:(0,l.w5)((()=>[(0,l.Uk)(" Add Database ")])),_:1},8,["disabled","loading","onClick"])])):((0,l.wg)(),(0,l.iD)("div",d,[(0,l.Wm)(k,{lines:"two"},{default:(0,l.w5)((()=>[(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[(0,l._)("form",{action:"http://"+p.data.server.ip+"/phpmyadmin/",method:"post",target:"_blank"},[(0,l._)("input",{type:"hidden",name:"pma_username",value:p.data.db_name},null,8,r),(0,l._)("button",i,[(0,l.Uk)(" PhpMyAdmin "),(0,l.Wm)(h,{right:""},{default:(0,l.w5)((()=>[(0,l.Uk)("mdi:mdi-open-in-new")])),_:1})])],8,s)])),_:1})])),_:1}),(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[(0,l.Uk)("DB Name")])),_:1}),(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(p.data.db_name)+" ",1),(0,l.Wm)(y,{val:p.data.db_name},null,8,["val"])])),_:1})])),_:1}),(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[(0,l.Uk)("DB Username")])),_:1}),(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(p.data.db_name)+" ",1),(0,l.Wm)(y,{val:p.data.db_name},null,8,["val"])])),_:1})])),_:1}),(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[(0,l.Uk)("DB Password")])),_:1}),(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(p.data.db_password)+" ",1),(0,l.Wm)(b,{val:p.data.db_password,label:"DB Password",name:"password",password:"",path:"sites/"+this.domainId+"/database"},null,8,["val","path"])])),_:1})])),_:1})])),_:1})]))])),_:1},8,["loading"])])}var p=t(1006),c=t(48236),m=t(87474),v=t(20122),w={components:{Loading:c.Z,Copy:m.Z,Edit:v.Z},data(){return{domainId:null,post:null,error:null,data:{disk_usage:0,server:{},app:{}},details:"",loading:!1,fetching:!1,dbPasswordPanel:[!1],dbPasswordFormValid:!0,showDbPassword:!1,password:"",dbPassword:"",rules:{required:a=>!!a||"Required.",min:a=>a.length>=8||"Min 8 characters",emailMatch:()=>"The email and password you entered don't match"},copyText:"Copy"}},created(){this.fetchData()},methods:{fetchData(){var a=this;this.error="",this.fetching=!0,this.domainId=this.$route.params.id,p.Z.get("sites/"+this.domainId+"/database").then((function(e){console.log(e),a.data=e.data.item,document.title="Database | "+a.data.domain})).catch((function(a){console.log(a)})).finally((function(){a.fetching=!1}))},addDatabase(){var a=this;this.error="",this.loading=!0,p.Z.post("sites/"+this.domainId+"/database",{save:1}).then((function(e){console.log(e),e.data.error?a.error=e.data.error:a.fetchData()})).catch((function(a){console.log(a)})).finally((function(){a.fetching=!1,a.loading=!1}))}}},h=t(48118);const f=(0,h.Z)(w,[["render",u]]);var g=f}}]);
//# sourceMappingURL=6129.e4f4b9ec.js.map