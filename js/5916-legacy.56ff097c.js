"use strict";(self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[]).push([[5916],{11297:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(66252);function a(e,t,r,a,o,i){var u=(0,n.up)("v-icon"),l=(0,n.up)("v-alert"),s=(0,n.up)("v-dialog");return(0,n.wg)(),(0,n.j4)(s,{modelValue:e.show,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.show=t}),persistent:"",width:"600"},{default:(0,n.w5)((function(){return[(0,n.Wm)(l,{title:r.message,color:"primary"},{prepend:(0,n.w5)((function(){return[(0,n.Wm)(u,{icon:"fas fa-magic fa-2x faa-horizontal animated"})]})),_:1},8,["title"])]})),_:1},8,["modelValue"])}var o={name:"Loading",data:function(){return{show:!1}},props:{value:{type:Boolean,default:!1},message:{type:String,default:"Summoning..."}},watch:{value:function(e){this.show=e}}},i=r(83744);const u=(0,i.Z)(o,[["render",a]]);var l=u},35916:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});r(34284);var n=r(66252);function a(e,t,r,a,o,i){var u=(0,n.up)("v-alert"),l=(0,n.up)("Loading"),s=(0,n.up)("v-icon"),c=(0,n.up)("v-list-item"),d=(0,n.up)("v-data-table"),f=(0,n.up)("v-card");return(0,n.wg)(),(0,n.iD)("div",null,[o.error?((0,n.wg)(),(0,n.j4)(u,{key:0,type:"error",text:o.error},null,8,["text"])):(0,n.kq)("",!0),(0,n.Wm)(l,{value:o.loading},null,8,["value"]),(0,n.Wm)(f,{loading:o.fetching},{default:(0,n.w5)((function(){return[(0,n.Wm)(d,{headers:o.headers,items:o.filtered},{"item.name":(0,n.w5)((function(e){var t=e.item;return[(0,n.Wm)(c,{to:"/users/"+t.id+"/summary",title:t.name,class:"px-0"},(0,n.Nv)({_:2},[i.mobile?void 0:{name:"prepend",fn:(0,n.w5)((function(){return[(0,n.Wm)(s,null,{default:(0,n.w5)((function(){return[(0,n.Uk)("fas fa-user")]})),_:1})]})),key:"0"}]),1032,["to","title"])]})),_:1},8,["headers","items"])]})),_:1},8,["loading"])])}r(60228),r(47522),r(70560);var o=r(1006),i=r(11297),u=r(5455),l={components:{Loading:i.Z},data:function(){return{fetching:!1,loading:!1,error:"",filtered:[],items:[],servers:{},server:"*",headers:[{title:"Name ",key:"name"}]}},created:function(){document.title="Users",this.fetchData()},methods:{fetchData:function(){var e=this;this.error="",this.fetching=!0,o.Z.get("users/").then((function(t){if(console.log(t),t.data.error)return e.error=t.data.error,!1;e.items=t.data.items,t.data.items.forEach((function(t){e.filtered.push(t)}))})).catch((function(e){return console.log(e)})).finally((function(){e.fetching=!1,localStorage.server&&(e.server=localStorage.server)}))}},computed:{mobile:function(){var e=(0,u.AW)(),t=e.mobile;return t.value}}},s=r(83744);const c=(0,s.Z)(l,[["render",a]]);var d=c}}]);
//# sourceMappingURL=5916-legacy.56ff097c.js.map