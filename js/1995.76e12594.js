"use strict";(self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[]).push([[1995],{11297:function(e,t,a){a.d(t,{Z:function(){return s}});var r=a(66252);function i(e,t,a,i,n,o){const l=(0,r.up)("v-icon"),s=(0,r.up)("v-alert"),u=(0,r.up)("v-dialog");return(0,r.wg)(),(0,r.j4)(u,{modelValue:e.show,"onUpdate:modelValue":t[0]||(t[0]=t=>e.show=t),persistent:"",width:"600"},{default:(0,r.w5)((()=>[(0,r.Wm)(s,{title:a.message,color:"primary"},{prepend:(0,r.w5)((()=>[(0,r.Wm)(l,{icon:"fas fa-magic fa-2x faa-horizontal animated"})])),_:1},8,["title"])])),_:1},8,["modelValue"])}var n={name:"Loading",data:()=>({show:!1}),props:{value:{type:Boolean,default:!1},message:{type:String,default:"Summoning..."}},watch:{value:function(e){this.show=e}}},o=a(83744);const l=(0,o.Z)(n,[["render",i]]);var s=l},71995:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var r=a(66252),i=a(3577);function n(e,t,a,n,o,l){const s=(0,r.up)("v-alert"),u=(0,r.up)("Loading"),d=(0,r.up)("v-icon"),m=(0,r.up)("v-list-item"),c=(0,r.up)("v-data-table"),f=(0,r.up)("v-card"),h=(0,r.up)("v-col"),p=(0,r.up)("v-row"),g=(0,r.up)("v-layout");return(0,r.wg)(),(0,r.j4)(g,{row:""},{default:(0,r.w5)((()=>[(0,r.Wm)(p,null,{default:(0,r.w5)((()=>[(0,r.Wm)(h,{cols:"12"},{default:(0,r.w5)((()=>[o.error?((0,r.wg)(),(0,r.j4)(s,{key:0,type:"error",text:o.error},null,8,["text"])):(0,r.kq)("",!0),(0,r.Wm)(u,{value:o.loading},null,8,["value"]),(0,r.Wm)(f,{flat:"",loading:o.fetching},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{headers:l.headers,items:o.filtered},{"item.domain":(0,r.w5)((({item:e})=>[(0,r.Wm)(m,{to:"/domains/"+e.id+"/summary",title:e.domain,class:"px-0"},(0,r.Nv)({_:2},[l.mobile?void 0:{name:"prepend",fn:(0,r.w5)((()=>[(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Uk)("fas fa-globe")])),_:1})])),key:"0"}]),1032,["to","title"])])),"item.registrar":(0,r.w5)((({item:e})=>[(0,r.Uk)((0,i.zw)(e.registrar?o.registrars[e.registrar].label:""),1)])),"item.auto_renew":(0,r.w5)((({item:e})=>[(0,r.Uk)((0,i.zw)(e.auto_renew?"Yes":""),1)])),_:1},8,["headers","items"])])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})}a(70560);var o=a(1006),l=a(11297),s=a(5455),u={components:{Loading:l.Z},data(){return{fetching:!1,loading:!1,error:"",filtered:[],registrars:[],items:[],searchPanel:[!1],search:"",selected:[]}},created(){document.title="Domains",this.fetchData()},computed:{mobile:function(){const{mobile:e}=(0,s.AW)();return e.value},headers:function(){var e=[{title:"Domain ",key:"domain"}];return this.mobile||e.push({title:"Registrar ",key:"registrar"},{title:"Auto renew ",key:"auto_renew"}),e}},methods:{fetchData(){var e=this;this.error="",this.fetching=!0,o.Z.get("domains/").then((t=>{if(console.log(t),t.data.error)return e.error=t.data.error,!1;e.items=t.data.items,t.data.provider_tokens.forEach((t=>{e.registrars[t.id]=t})),t.data.items.forEach((t=>{e.filtered.push(t)}))})).catch((e=>console.log(e))).finally((()=>e.fetching=!1))}}},d=a(83744);const m=(0,d.Z)(u,[["render",n]]);var c=m}}]);
//# sourceMappingURL=1995.76e12594.js.map