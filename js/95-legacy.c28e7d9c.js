"use strict";(self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[]).push([[95],{74377:function(e,t,r){r.d(t,{Z:function(){return f}});var n=r(66252),a=r(3577),u=(0,n._)("i",{class:"fas fa-magic fa-2x faa-horizontal animated"},null,-1),i={class:"ml-2"};function o(e,t,r,o,l,s){var c=(0,n.up)("v-layout"),f=(0,n.up)("v-card-text"),d=(0,n.up)("v-card"),m=(0,n.up)("v-container"),w=(0,n.up)("v-dialog");return(0,n.wg)(),(0,n.j4)(w,{modelValue:e.show,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.show=t}),persistent:"",content:"","content-class":"centered-dialog"},{default:(0,n.w5)((function(){return[(0,n.Wm)(m,{"fill-height":""},{default:(0,n.w5)((function(){return[(0,n.Wm)(d,{color:"primary"},{default:(0,n.w5)((function(){return[(0,n.Wm)(f,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(c,{row:""},{default:(0,n.w5)((function(){return[u,(0,n._)("h2",i,(0,a.zw)(r.message),1)]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1},8,["modelValue"])}var l={name:"Loading",data:function(){return{show:!1}},props:{value:{type:Boolean,default:!1},message:{type:String,default:"Summoning..."}},watch:{value:function(e){this.show=e}}},s=r(48118);const c=(0,s.Z)(l,[["render",o]]);var f=c},80095:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var n=r(66252),a=r(3577);function u(e,t,r,u,i,o){var l=(0,n.up)("v-alert"),s=(0,n.up)("Loading"),c=(0,n.up)("v-icon"),f=(0,n.up)("v-list-item"),d=(0,n.up)("v-data-table"),m=(0,n.up)("v-card"),w=(0,n.up)("v-col"),h=(0,n.up)("v-row"),v=(0,n.up)("v-layout");return(0,n.wg)(),(0,n.j4)(v,{row:""},{default:(0,n.w5)((function(){return[(0,n.Wm)(h,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(w,{cols:"12"},{default:(0,n.w5)((function(){return[i.error?((0,n.wg)(),(0,n.j4)(l,{key:0,type:"error",text:i.error},null,8,["text"])):(0,n.kq)("",!0),(0,n.Wm)(s,{value:i.loading},null,8,["value"]),(0,n.Wm)(m,{flat:"",loading:i.fetching,title:"Domains"},{default:(0,n.w5)((function(){return[(0,n.Wm)(d,{headers:o.headers,items:i.filtered,class:"results"},{"item.domain":(0,n.w5)((function(e){var t=e.item;return[(0,n.Wm)(f,{to:"/domains/"+t.raw.id+"/summary",title:t.raw.domain},{prepend:(0,n.w5)((function(){return[(0,n.Wm)(c,null,{default:(0,n.w5)((function(){return[(0,n.Uk)("fas fa-globe")]})),_:1})]})),_:2},1032,["to","title"])]})),"item.registrar":(0,n.w5)((function(e){var t=e.item;return[(0,n.Uk)((0,a.zw)(t.raw.registrar?i.registrars[t.raw.registrar].label:""),1)]})),"item.auto_renew":(0,n.w5)((function(e){var t=e.item;return[(0,n.Uk)((0,a.zw)(t.raw.auto_renew?"Yes":""),1)]})),_:1},8,["headers","items"])]})),_:1},8,["loading"])]})),_:1})]})),_:1})]})),_:1})}r(41539),r(54747);var i=r(1006),o=r(74377),l=r(5455),s={components:{Loading:o.Z},data:function(){return{fetching:!1,loading:!1,error:"",filtered:[],registrars:[],items:[],searchPanel:[!1],search:"",selected:[]}},created:function(){document.title="Domains",this.fetchData()},computed:{mobile:function(){var e=(0,l.AW)(),t=e.mobile;return t.value},headers:function(){var e=[{title:"Domain ",key:"domain"}];return this.mobile||e.push({title:"Registrar ",key:"registrar"},{title:"Auto renew ",key:"auto_renew"}),e}},methods:{fetchData:function(){var e=this;this.error="",this.fetching=!0,i.Z.get("domains/").then((function(t){if(console.log(t),t.data.error)return e.error=t.data.error,!1;e.items=t.data.items,t.data.provider_tokens.forEach((function(t){e.registrars[t.id]=t})),t.data.items.forEach((function(t){e.filtered.push(t)}))})).catch((function(e){return console.log(e)})).finally((function(){return e.fetching=!1}))}}},c=r(48118);const f=(0,c.Z)(s,[["render",u]]);var d=f}}]);
//# sourceMappingURL=95-legacy.c28e7d9c.js.map