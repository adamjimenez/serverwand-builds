"use strict";(self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[]).push([[5280],{44948:function(e,a,t){t.d(a,{Z:function(){return f}});var l=t(66252),n=t(3577);const o={key:0},d={key:0},s={key:1},u={key:2};function i(e,a,t,i,r,m){const c=(0,l.up)("v-icon"),w=(0,l.up)("v-btn"),f=(0,l.up)("v-card-title"),p=(0,l.up)("v-select"),v=(0,l.up)("v-text-field"),h=(0,l.up)("v-card-text"),g=(0,l.up)("v-card"),k=(0,l.up)("v-dialog");return(0,l.wg)(),(0,l.iD)("span",null,[t.hideText?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("span",o,[t.yesno?((0,l.wg)(),(0,l.iD)("span",d,(0,n.zw)(t.val?"Yes":"No"),1)):t.password?((0,l.wg)(),(0,l.iD)("span",s,(0,n.zw)("******"))):((0,l.wg)(),(0,l.iD)("span",u,(0,n.zw)(t.val),1))])),(0,l.Wm)(w,{icon:"",onClick:a[0]||(a[0]=e=>m.edit(t.val))},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{small:""},{default:(0,l.w5)((()=>[(0,l.Uk)("mdi:mdi-pencil")])),_:1})])),_:1}),(0,l.Wm)(k,{app:"",modelValue:r.dialog,"onUpdate:modelValue":a[4]||(a[4]=e=>r.dialog=e)},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{loading:r.fetching},{default:(0,l.w5)((()=>[(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Edit "+(0,n.zw)(t.label),1)])),_:1}),(0,l.Wm)(h,null,{default:(0,l.w5)((()=>[t.yesno?((0,l.wg)(),(0,l.j4)(p,{key:0,modelValue:r.data.val,"onUpdate:modelValue":a[1]||(a[1]=e=>r.data.val=e),items:r.yesnoItems,label:t.label,autofocus:"",error:r.errors.length>0,"error-messages":r.errors},null,8,["modelValue","items","label","error","error-messages"])):((0,l.wg)(),(0,l.j4)(v,{key:1,modelValue:r.data.val,"onUpdate:modelValue":a[2]||(a[2]=e=>r.data.val=e),label:t.label,autofocus:"",type:!t.password||r.showPassword?"text":"password","append-icon":t.password?r.showPassword?"mdi:mdi-eye-off":"mdi:mdi-eye":"","onClick:append":a[3]||(a[3]=e=>r.showPassword=!r.showPassword),"error-messages":r.errors},null,8,["modelValue","label","type","append-icon","error-messages"])),(0,l.Wm)(w,{color:"primary",onClick:m.save},{default:(0,l.w5)((()=>[(0,l.Uk)(" Save ")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["loading"])])),_:1},8,["modelValue"])])}var r=t(1006),m={props:{name:null,val:null,label:null,password:Boolean,hideText:Boolean,path:null,yesno:Boolean},data(){return{fetching:!1,dialog:!1,data:{val:null},showPassword:!1,yesnoItems:[{title:"Yes",value:1},{title:"No",value:0}],errors:[]}},watch:{val:function(e){this.data.val=e}},methods:{edit(){this.data.val=this.val,this.dialog=!0},save(){this.fetching=!0,this.errors=[];var e={};e[this.name]=this.data.val;var a=this;r.Z.post(this.path,e).then((e=>{console.log(e),e.data.success?(a.dialog=!1,a.$emit("save")):a.errors.push(e.data.error)})).catch((e=>console.log(e))).finally((()=>a.fetching=!1))}}},c=t(48118);const w=(0,c.Z)(m,[["render",i]]);var f=w},74377:function(e,a,t){t.d(a,{Z:function(){return m}});var l=t(66252),n=t(3577);const o=(0,l._)("i",{class:"fas fa-magic fa-2x faa-horizontal animated"},null,-1),d={class:"ml-2"};function s(e,a,t,s,u,i){const r=(0,l.up)("v-layout"),m=(0,l.up)("v-card-text"),c=(0,l.up)("v-card"),w=(0,l.up)("v-container"),f=(0,l.up)("v-dialog");return(0,l.wg)(),(0,l.j4)(f,{modelValue:e.show,"onUpdate:modelValue":a[0]||(a[0]=a=>e.show=a),persistent:"",content:"","content-class":"centered-dialog"},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{"fill-height":""},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{color:"primary"},{default:(0,l.w5)((()=>[(0,l.Wm)(m,null,{default:(0,l.w5)((()=>[(0,l.Wm)(r,{row:""},{default:(0,l.w5)((()=>[o,(0,l._)("h2",d,(0,n.zw)(t.message),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])}var u={name:"Loading",data:()=>({show:!1}),props:{value:{type:Boolean,default:!1},message:{type:String,default:"Summoning..."}},watch:{value:function(e){this.show=e}}},i=t(48118);const r=(0,i.Z)(u,[["render",s]]);var m=r},55280:function(e,a,t){t.r(a),t.d(a,{default:function(){return v}});var l=t(66252),n=t(3577);const o={key:0},d={key:1},s=(0,l._)("p",null,"Registrar not connected",-1),u=[s];function i(e,a,t,s,i,r){const m=(0,l.up)("v-alert"),c=(0,l.up)("Loading"),w=(0,l.up)("v-list-item-title"),f=(0,l.up)("v-list-item-subtitle"),p=(0,l.up)("v-list-item"),v=(0,l.up)("Edit"),h=(0,l.up)("v-list"),g=(0,l.up)("v-card");return(0,l.wg)(),(0,l.iD)("div",null,[i.error?((0,l.wg)(),(0,l.j4)(m,{key:0,type:"error",text:i.error},null,8,["text"])):(0,l.kq)("",!0),(0,l.Wm)(c,{value:i.loading},null,8,["value"]),(0,l.Wm)(g,{class:"pa-3",loading:i.fetching},{default:(0,l.w5)((()=>[i.data.info?((0,l.wg)(),(0,l.iD)("div",o,[(0,l.Wm)(h,{lines:"two"},{default:(0,l.w5)((()=>[(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Created ")])),_:1}),(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(i.data.info?.created),1)])),_:1})])),_:1}),(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Expires ")])),_:1}),(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(i.data.info?.expires),1)])),_:1})])),_:1}),(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Auto renew ")])),_:1}),(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[(0,l.Wm)(v,{val:i.data.info?.auto_renew,label:"Auto renew",name:"auto_renew",path:"domains/"+this.domainId+"/update",yesno:""},null,8,["val","path"])])),_:1})])),_:1}),i.data.info?.locked?((0,l.wg)(),(0,l.j4)(p,{key:0},{default:(0,l.w5)((()=>[(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Locked ")])),_:1}),(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(i.data.info?.locked),1)])),_:1})])),_:1})):(0,l.kq)("",!0),i.data.info?.status?((0,l.wg)(),(0,l.j4)(p,{key:1},{default:(0,l.w5)((()=>[(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Status ")])),_:1}),(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(i.data.info?.status),1)])),_:1})])),_:1})):(0,l.kq)("",!0),(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Nameservers ")])),_:1}),(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.data.info?.nameservers,((e,a)=>((0,l.wg)(),(0,l.iD)("div",{key:a},(0,n.zw)(e),1)))),128))])),_:1})])),_:1})])),_:1})])):((0,l.wg)(),(0,l.iD)("div",d,u))])),_:1},8,["loading"])])}var r=t(1006),m=t(74377),c=t(44948),w={components:{Loading:m.Z,Edit:c.Z},data(){return{domainId:null,post:null,error:null,data:{info:{nameservers:{nameserver:{}}}},details:"",loading:!1,fetching:!1}},created(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData(e){var a=this;this.error="",this.domainId=this.$route.params.id,clearTimeout(a.timer),this.fetching=!0,r.Z.get("domains/"+this.domainId+"/summary",{clearCacheEntry:e}).then((function(e){console.log(e),e.data.item&&(a.data=e.data.item),a.data.domain&&(document.title="Summary | "+a.data.domain)})).catch((function(e){console.log(e)})).finally((function(){a.fetching=!1}))}}},f=t(48118);const p=(0,f.Z)(w,[["render",i]]);var v=p}}]);
//# sourceMappingURL=5280.ac50cf57.js.map