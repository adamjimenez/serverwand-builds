"use strict";(self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[]).push([[8269],{11912:function(e,a,t){t.d(a,{Z:function(){return c}});var r=t(66252),l=t(3577);const n=(0,r._)("i",{class:"fas fa-magic fa-2x faa-horizontal animated"},null,-1),o={class:"ml-2"};function s(e,a,t,s,i,d){const u=(0,r.up)("v-layout"),c=(0,r.up)("v-card-text"),h=(0,r.up)("v-card"),v=(0,r.up)("v-container"),m=(0,r.up)("v-dialog");return(0,r.wg)(),(0,r.j4)(m,{modelValue:e.show,"onUpdate:modelValue":a[0]||(a[0]=a=>e.show=a),persistent:"",content:"","content-class":"centered-dialog"},{default:(0,r.w5)((()=>[(0,r.Wm)(v,{"fill-height":""},{default:(0,r.w5)((()=>[(0,r.Wm)(h,{color:"primary"},{default:(0,r.w5)((()=>[(0,r.Wm)(c,null,{default:(0,r.w5)((()=>[(0,r.Wm)(u,{row:""},{default:(0,r.w5)((()=>[n,(0,r._)("h2",o,(0,l.zw)(t.message),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])}var i={name:"Loading",data:()=>({show:!1}),props:{value:{type:Boolean,default:!1},message:{type:String,default:"Summoning..."}},watch:{value:function(e){this.show=e}}},d=t(48118);const u=(0,d.Z)(i,[["render",s]]);var c=u},38269:function(e,a,t){t.r(a),t.d(a,{default:function(){return u}});var r=t(66252);function l(e,a,t,l,n,o){const s=(0,r.up)("v-alert"),i=(0,r.up)("Loading"),d=(0,r.up)("v-switch"),u=(0,r.up)("v-list-item"),c=(0,r.up)("v-list"),h=(0,r.up)("v-card");return(0,r.wg)(),(0,r.iD)("div",null,[n.error?((0,r.wg)(),(0,r.j4)(s,{key:0,type:"error",text:n.error},null,8,["text"])):(0,r.kq)("",!0),(0,r.Wm)(i,{value:n.loading},null,8,["value"]),(0,r.Wm)(h,{class:"pa-3",loading:n.fetching},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{group:"","max-width":"600"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.items,((e,a)=>((0,r.wg)(),(0,r.j4)(u,{key:`item-${a}`,value:e},{default:(0,r.w5)((()=>[(0,r.Wm)(d,{modelValue:e.active,"onUpdate:modelValue":a=>e.active=a,label:e.name,onChange:a=>o.toggle(e),color:"primary","hide-details":""},null,8,["modelValue","onUpdate:modelValue","label","onChange"])])),_:2},1032,["value"])))),128))])),_:1})])),_:1},8,["loading"])])}var n=t(1006),o=t(11912),s={components:{Loading:o.Z},data(){return{error:"",items:{},fetching:!1,loading:!1,serverId:0}},created(){this.serverId=this.$route.params.id,this.fetchData()},methods:{fetchData(){var e=this;this.error="",this.fetching=!0,n.Z.get("servers/"+this.serverId+"/services").then((a=>{if(console.log(a),a.data.error)return e.error=a.data.error,!1;e.items=a.data.services,e.data=a.data.item,document.title="Services | "+e.data.name})).catch((e=>console.log(e))).finally((()=>e.fetching=!1))},toggle(e){var a=this;this.loading=!0,this.error="";var t=e.active?"start":"stop";n.Z.post("servers/"+this.serverId+"/services",{name:e.name,action:t}).then((e=>{console.log(e),e.data.success?a.fetchData():a.error=e.data.error})).catch((e=>console.log(e))).finally((()=>a.loading=!1))}}},i=t(48118);const d=(0,i.Z)(s,[["render",l]]);var u=d}}]);
//# sourceMappingURL=8269.0126d696.js.map