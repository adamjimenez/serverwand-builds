"use strict";(self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[]).push([[3482],{90947:function(e,t,l){l.d(t,{Z:function(){return u}});var a=l(66252),i=l(3577),n=l(49963);function o(e,t,l,o,r,d){const s=(0,a.up)("v-toolbar-title"),u=(0,a.up)("v-toolbar"),c=(0,a.up)("v-card-text"),m=(0,a.up)("v-spacer"),f=(0,a.up)("v-btn"),h=(0,a.up)("v-card-actions"),g=(0,a.up)("v-card"),p=(0,a.up)("v-dialog");return(0,a.wg)(),(0,a.j4)(p,{modelValue:e.dialog,"onUpdate:modelValue":t[0]||(t[0]=t=>e.dialog=t),"max-width":e.options.width,style:(0,i.j5)({zIndex:e.options.zIndex}),onKeydown:(0,n.D2)(d.cancel,["esc"]),persistent:""},{default:(0,a.w5)((()=>[(0,a.Wm)(g,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u,{dark:"",color:e.options.color,dense:"",flat:""},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{class:"text-body-2 font-weight-bold grey--text"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(e.title),1)])),_:1})])),_:1},8,["color"]),(0,a.wy)((0,a.Wm)(c,{class:"pa-4 black--text",innerHTML:e.message},null,8,["innerHTML"]),[[n.F8,!!e.message]]),(0,a.Wm)(h,{class:"pt-3"},{default:(0,a.w5)((()=>[(0,a.Wm)(m),e.options.noconfirm?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(f,{key:0,color:"grey",text:"",class:"body-2 font-weight-bold",onClick:d.cancel},{default:(0,a.w5)((()=>[(0,a.Uk)("Cancel")])),_:1},8,["onClick"])),(0,a.Wm)(f,{color:"primary",class:"body-2 font-weight-bold",outlined:"",onClick:d.agree},{default:(0,a.w5)((()=>[(0,a.Uk)("OK")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue","max-width","style","onKeydown"])}var r={data:function(){return{dialog:!1,resolve:null,reject:null,message:null,title:null,options:{color:"grey lighten-3",width:400,zIndex:1008,noconfirm:!1}}},methods:{open(e,t,l){return this.dialog=!0,this.title=e,this.message=t,this.options=Object.assign(this.options,l),new Promise(((e,t)=>{this.resolve=e,this.reject=t}))},agree(){this.resolve(!0),this.dialog=!1},cancel(){this.resolve(!1),this.dialog=!1}}},d=l(48118);const s=(0,d.Z)(r,[["render",o]]);var u=s},74377:function(e,t,l){l.d(t,{Z:function(){return c}});var a=l(66252),i=l(3577);const n=(0,a._)("i",{class:"fas fa-magic fa-2x faa-horizontal animated"},null,-1),o={class:"ml-2"};function r(e,t,l,r,d,s){const u=(0,a.up)("v-layout"),c=(0,a.up)("v-card-text"),m=(0,a.up)("v-card"),f=(0,a.up)("v-container"),h=(0,a.up)("v-dialog");return(0,a.wg)(),(0,a.j4)(h,{modelValue:e.show,"onUpdate:modelValue":t[0]||(t[0]=t=>e.show=t),persistent:"",content:"","content-class":"centered-dialog"},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{"fill-height":""},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{color:"primary"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u,{row:""},{default:(0,a.w5)((()=>[n,(0,a._)("h2",o,(0,i.zw)(l.message),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])}var d={name:"Loading",data:()=>({show:!1}),props:{value:{type:Boolean,default:!1},message:{type:String,default:"Summoning..."}},watch:{value:function(e){this.show=e}}},s=l(48118);const u=(0,s.Z)(d,[["render",r]]);var c=u},73482:function(e,t,l){l.r(t),l.d(t,{default:function(){return m}});var a=l(66252),i=l(49963);function n(e,t,l,n,o,r){const d=(0,a.up)("v-alert"),s=(0,a.up)("Loading"),u=(0,a.up)("v-icon"),c=(0,a.up)("v-btn"),m=(0,a.up)("v-list-item"),f=(0,a.up)("v-list"),h=(0,a.up)("v-card"),g=(0,a.up)("v-card-title"),p=(0,a.up)("v-text-field"),v=(0,a.up)("v-card-text"),w=(0,a.up)("v-form"),b=(0,a.up)("v-dialog"),W=(0,a.up)("Confirm");return(0,a.wg)(),(0,a.iD)("div",null,[o.error?((0,a.wg)(),(0,a.j4)(d,{key:0,type:"error",text:o.error},null,8,["text"])):(0,a.kq)("",!0),(0,a.Wm)(s,{value:o.loading},null,8,["value"]),(0,a.Wm)(h,{class:"pa-3",loading:o.fetching},{default:(0,a.w5)((()=>[(0,a.Wm)(f,null,{default:(0,a.w5)((()=>[(0,a.Wm)(f,{group:""},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.data.variables,((e,l)=>((0,a.wg)(),(0,a.j4)(m,{key:`item-${l}`,title:e.name,subtitle:e.value,onClick:t=>r.editItem(e)},{append:(0,a.w5)((()=>[(0,a.Wm)(c,{icon:"",disabled:o.fetching,loading:o.fetching,onClick:[t=>r.deleteItem(e.line),t[0]||(t[0]=(0,i.iM)((()=>{}),["stop"]))]},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{size:"small"},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi:mdi-delete")])),_:1})])),_:2},1032,["disabled","loading","onClick"])])),_:2},1032,["title","subtitle","onClick"])))),128))])),_:1})])),_:1})])),_:1},8,["loading"]),(0,a.Wm)(h,null,{default:(0,a.w5)((()=>[(0,a._)("div",null,[(0,a.Wm)(g,{"primary-title":""},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{onClick:t[1]||(t[1]=e=>r.addItem())},{default:(0,a.w5)((()=>[(0,a.Uk)(" Add variable ")])),_:1})])),_:1})])])),_:1}),(0,a.Wm)(b,{modelValue:o.drawer,"onUpdate:modelValue":t[6]||(t[6]=e=>o.drawer=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(h,null,{default:(0,a.w5)((()=>[(0,a.Wm)(w,{modelValue:o.valid,"onUpdate:modelValue":t[5]||(t[5]=e=>o.valid=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(g,null,{default:(0,a.w5)((()=>[(0,a.Uk)(" Variable ")])),_:1}),(0,a.Wm)(v,null,{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(p,{modelValue:o.item.line,"onUpdate:modelValue":t[2]||(t[2]=e=>o.item.line=e),label:"Line"},null,8,["modelValue"]),[[i.F8,!1]]),(0,a.Wm)(p,{modelValue:o.item.name,"onUpdate:modelValue":t[3]||(t[3]=e=>o.item.name=e),label:"Name",required:"",rules:[o.rules.required,o.rules.alphanumeric]},null,8,["modelValue","rules"]),(0,a.Wm)(p,{modelValue:o.item.value,"onUpdate:modelValue":t[4]||(t[4]=e=>o.item.value=e),label:"Value",required:"",rules:[o.rules.required,o.rules.alphanumeric]},null,8,["modelValue","rules"]),(0,a.Wm)(c,{disabled:!o.valid,loading:o.fetching,color:"success",onClick:r.saveItem},{default:(0,a.w5)((()=>[(0,a.Uk)(" Save ")])),_:1},8,["disabled","loading","onClick"])])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(W,{ref:"confirm"},null,512)])}var o=l(1006),r=l(74377),d=l(90947),s={components:{Loading:r.Z,Confirm:d.Z},data(){return{error:"",fetching:!1,loading:!1,drawer:!1,data:{users:{}},item:{name:"",value:""},variables:[],rules:{required:e=>!!e||"Required.",alphanumeric:e=>/^[a-zA-Z0-9-_]+$/g.test(e)||"Must contain a-z characters only"},valid:!1}},created(){this.siteId=this.$route.params.id,this.fetchData()},methods:{fetchData(){var e=this;this.error="",this.fetching=!0,o.Z.get("sites/"+this.siteId+"/variables").then((function(t){if(console.log(t),t.data.error)return e.error=t.data.error,!1;e.data=t.data.item,document.title="Variables | "+e.data.name})).catch((function(e){console.log(e)})).finally((function(){e.fetching=!1}))},addItem(){this.item={},this.drawer=!0},editItem(e){this.item=JSON.parse(JSON.stringify(e)),this.drawer=!0},deleteItem:async function(e){if(await this.$refs.confirm.open("Confirm","Delete Variable?")&&res){var t=this;this.fetching=!0,this.error="",o.Z.post("sites/"+this.siteId+"/variables",{line:e}).then((function(e){console.log(e),e.data.success?t.fetchData():(t.fetching=!1,t.error=e.data.error)})).catch((function(e){t.fetching=!1,console.log(e)}))}},saveItem(){var e=this;this.error="",this.$refs.form.validate()&&(this.fetching=!0,o.Z.post("sites/"+this.siteId+"/variables",this.item).then((function(t){console.log(t),t.data.error?(e.fetching=!1,e.error=t.data.error):(e.drawer=!1,e.fetchData())})).catch((function(t){e.fetching=!1,console.log(t)})))}}},u=l(48118);const c=(0,u.Z)(s,[["render",n]]);var m=c}}]);
//# sourceMappingURL=3482.5b0cec40.js.map