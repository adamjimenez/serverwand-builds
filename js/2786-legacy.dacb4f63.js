"use strict";(self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[]).push([[2786],{48236:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(66252),a=n(3577),u=(0,r._)("i",{class:"fas fa-magic fa-2x faa-horizontal animated"},null,-1),o={style:{"margin-left":"10px"}};function i(e,t,n,i,l,c){var s=(0,r.up)("v-layout"),d=(0,r.up)("v-card-text"),f=(0,r.up)("v-card"),v=(0,r.up)("v-container"),m=(0,r.up)("v-dialog");return(0,r.wg)(),(0,r.j4)(m,{modelValue:e.show,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.show=t}),persistent:"",content:"","content-class":"centered-dialog"},{default:(0,r.w5)((function(){return[(0,r.Wm)(v,{"fill-height":""},{default:(0,r.w5)((function(){return[(0,r.Wm)(f,{color:"primary",dark:""},{default:(0,r.w5)((function(){return[(0,r.Wm)(d,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(s,{row:""},{default:(0,r.w5)((function(){return[u,(0,r._)("h2",o,(0,a.zw)(n.message),1)]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1},8,["modelValue"])}var l={name:"Loading",data:function(){return{show:!1}},props:{value:{type:Boolean,default:!1},message:{type:String,default:"Summoning..."}},watch:{value:function(e){this.show=e}}},c=n(48118);const s=(0,c.Z)(l,[["render",i]]);var d=s},32786:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});n(68309);var r=n(66252),a=n(3577);function u(e,t,n,u,o,i){var l=(0,r.up)("v-alert"),c=(0,r.up)("Loading"),s=(0,r.up)("v-switch"),d=(0,r.up)("v-list-item-title"),f=(0,r.up)("v-list-item"),v=(0,r.up)("v-list"),m=(0,r.up)("v-card");return(0,r.wg)(),(0,r.iD)("div",null,[o.error?((0,r.wg)(),(0,r.j4)(l,{key:0,type:"error"},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,a.zw)(o.error),1)]})),_:1})):(0,r.kq)("",!0),(0,r.Wm)(c,{value:o.loading},null,8,["value"]),(0,r.Wm)(m,{class:"pa-3",loading:o.fetching},{default:(0,r.w5)((function(){return[(0,r.Wm)(v,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(v,{group:""},{default:(0,r.w5)((function(){return[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.items,(function(e,t){return(0,r.wg)(),(0,r.j4)(f,{key:"item-".concat(t),value:e},{default:(0,r.w5)((function(){return[(0,r.Wm)(d,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(s,{modelValue:e.active,"onUpdate:modelValue":function(t){return e.active=t},label:e.name,onChange:function(t){return i.toggle(e)},color:"primary"},null,8,["modelValue","onUpdate:modelValue","label","onChange"])]})),_:2},1024)]})),_:2},1032,["value"])})),128))]})),_:1})]})),_:1})]})),_:1},8,["loading"])])}n(41539);var o=n(1006),i=n(48236),l={components:{Loading:i.Z},data:function(){return{error:"",items:{},fetching:!1,loading:!1,serverId:0}},created:function(){this.serverId=this.$route.params.id,this.fetchData()},methods:{fetchData:function(){var e=this;this.error="",this.fetching=!0,o.Z.get("servers/"+this.serverId+"/services").then((function(t){if(console.log(t),t.data.error)return e.error=t.data.error,!1;e.items=t.data.services,e.data=t.data.item,document.title="Services | "+e.data.name})).catch((function(e){return console.log(e)})).finally((function(){return e.fetching=!1}))},toggle:function(e){var t=this;this.loading=!0,this.error="";var n=e.active?"start":"stop";o.Z.post("servers/"+this.serverId+"/services",{name:e.name,action:n}).then((function(e){console.log(e),e.data.success?t.fetchData():t.error=e.data.error})).catch((function(e){return console.log(e)})).finally((function(){return t.loading=!1}))}}},c=n(48118);const s=(0,c.Z)(l,[["render",u]]);var d=s}}]);
//# sourceMappingURL=2786-legacy.dacb4f63.js.map