"use strict";(self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[]).push([[2992],{11912:function(e,t,a){a.d(t,{Z:function(){return f}});var r=a(66252),s=a(3577);const l=(0,r._)("i",{class:"fas fa-magic fa-2x faa-horizontal animated"},null,-1),n={class:"ml-2"};function i(e,t,a,i,o,u){const d=(0,r.up)("v-layout"),f=(0,r.up)("v-card-text"),p=(0,r.up)("v-card"),c=(0,r.up)("v-container"),m=(0,r.up)("v-dialog");return(0,r.wg)(),(0,r.j4)(m,{modelValue:e.show,"onUpdate:modelValue":t[0]||(t[0]=t=>e.show=t),persistent:"",content:"","content-class":"centered-dialog"},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{"fill-height":""},{default:(0,r.w5)((()=>[(0,r.Wm)(p,{color:"primary"},{default:(0,r.w5)((()=>[(0,r.Wm)(f,null,{default:(0,r.w5)((()=>[(0,r.Wm)(d,{row:""},{default:(0,r.w5)((()=>[l,(0,r._)("h2",n,(0,s.zw)(a.message),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])}var o={name:"Loading",data:()=>({show:!1}),props:{value:{type:Boolean,default:!1},message:{type:String,default:"Summoning..."}},watch:{value:function(e){this.show=e}}},u=a(48118);const d=(0,u.Z)(o,[["render",i]]);var f=d},43964:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(66252);function s(e,t,a,s,l,n){const i=(0,r.up)("v-icon");return"wordpress"===a.app?((0,r.wg)(),(0,r.j4)(i,{key:0},{default:(0,r.w5)((()=>[(0,r.Uk)("fab fa-wordpress")])),_:1})):"git"===a.app?((0,r.wg)(),(0,r.j4)(i,{key:1},{default:(0,r.w5)((()=>[(0,r.Uk)("fab fa-git")])),_:1})):"node"===a.app?((0,r.wg)(),(0,r.j4)(i,{key:2},{default:(0,r.w5)((()=>[(0,r.Uk)("fab fa-node-js")])),_:1})):"joomla"===a.app?((0,r.wg)(),(0,r.j4)(i,{key:3},{default:(0,r.w5)((()=>[(0,r.Uk)("fab fa-joomla")])),_:1})):"drupal"===a.app?((0,r.wg)(),(0,r.j4)(i,{key:4},{default:(0,r.w5)((()=>[(0,r.Uk)("fab fa-drupal")])),_:1})):"magento"===a.app?((0,r.wg)(),(0,r.j4)(i,{key:5},{default:(0,r.w5)((()=>[(0,r.Uk)("fab fa-magento")])),_:1})):"roundcube"===a.app?((0,r.wg)(),(0,r.j4)(i,{key:6},{default:(0,r.w5)((()=>[(0,r.Uk)("fas fa-envelope")])),_:1})):"shiftlib"===a.app?((0,r.wg)(),(0,r.j4)(i,{key:7},{default:(0,r.w5)((()=>[(0,r.Uk)("fas fa-user-edit")])),_:1})):((0,r.wg)(),(0,r.j4)(i,{key:8},{default:(0,r.w5)((()=>[(0,r.Uk)("fas fa-sitemap")])),_:1}))}var l={props:{app:null}},n=a(48118);const i=(0,n.Z)(l,[["render",s]]);var o=i},82992:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var r=a(66252),s=a(3577);const l={key:0},n={key:0};function i(e,t,a,i,o,u){const d=(0,r.up)("v-alert"),f=(0,r.up)("Loading"),p=(0,r.up)("v-select"),c=(0,r.up)("v-card-text"),m=(0,r.up)("v-card"),w=(0,r.up)("SiteIcon"),v=(0,r.up)("v-list-item"),h=(0,r.up)("v-data-table"),g=(0,r.up)("v-col"),k=(0,r.up)("v-row"),y=(0,r.up)("v-layout");return(0,r.wg)(),(0,r.j4)(y,{row:""},{default:(0,r.w5)((()=>[(0,r.Wm)(k,null,{default:(0,r.w5)((()=>[(0,r.Wm)(g,{cols:"12"},{default:(0,r.w5)((()=>[o.error?((0,r.wg)(),(0,r.j4)(d,{key:0,type:"error",text:o.error},null,8,["text"])):(0,r.kq)("",!0),(0,r.Wm)(f,{value:o.loading},null,8,["value"]),(0,r.Wm)(m,{flat:"",loading:o.fetching,title:"Sites"},{default:(0,r.w5)((()=>[(0,r.Wm)(m,{flat:""},{default:(0,r.w5)((()=>[(0,r.Wm)(c,null,{default:(0,r.w5)((()=>[(0,r.Wm)(p,{modelValue:o.server,"onUpdate:modelValue":t[0]||(t[0]=e=>o.server=e),items:o.server_opts,label:"Server","hide-details":""},null,8,["modelValue","items"])])),_:1})])),_:1}),(0,r.Wm)(h,{headers:u.headers,items:o.filtered},{"item.domain":(0,r.w5)((({item:e})=>[(0,r.Wm)(v,{to:"/sites/"+e.raw.id+"/summary",title:e.raw.domain,subtitle:o.servers[e.raw.server],class:"px-0"},(0,r.Nv)({_:2},[u.mobile?void 0:{name:"prepend",fn:(0,r.w5)((()=>[(0,r.Wm)(w,{app:e.raw.app},null,8,["app"])])),key:"0"}]),1032,["to","title","subtitle"])])),"item.usage":(0,r.w5)((({item:e})=>[e.raw.usage>0?((0,r.wg)(),(0,r.iD)("div",l,(0,s.zw)(u.prettyBytes(1024*e.raw.usage)),1)):(0,r.kq)("",!0)])),"item.transfer":(0,r.w5)((({item:e})=>[e.raw.transfer>0?((0,r.wg)(),(0,r.iD)("div",n,(0,s.zw)(u.prettyBytes(1024*e.raw.transfer)),1)):(0,r.kq)("",!0)])),_:1},8,["headers","items"])])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})}a(57658);var o=a(1006),u=a(72564),d=a(11912),f=a(43964),p=a(5455),c={components:{Loading:d.Z,SiteIcon:f.Z},data(){return{fetching:!1,loading:!1,error:"",filtered:[],items:[],servers:{},server:"*",server_opts:[{title:"All",value:"*"}],searchPanel:[!1],search:"",selected:[]}},computed:{mobile:function(){const{mobile:e}=(0,p.AW)();return e.value},headers:function(){var e=[{title:"Site",key:"domain"}];return this.mobile||e.push({title:"IP",key:"ip"},{title:"MX",key:"mx"},{title:"Size",key:"usage"},{title:"Transfer",key:"transfer"}),e}},created(){document.title="Sites",this.fetchData()},watch:{server:function(){this.filtered=[],this.items.forEach((e=>{"*"!==this.server&&e.server!=this.server||this.filtered.push(e)})),localStorage.server=this.server}},methods:{fetchData(){var e=this;this.error="",this.fetching=!0,o.Z.get("sites/").then((function(t){if(console.log(t),t.data.error)return e.error=t.data.error,!1;e.items=t.data.items,t.data.items.forEach((t=>{e.filtered.push(t)})),o.Z.get("servers/").then((function(t){t.data.items.forEach((t=>{e.server_opts.push({title:t.name,value:t.id}),e.servers[t.id]=t.name}))}))})).catch((function(e){console.log(e)})).finally((function(){e.fetching=!1,localStorage.server&&(e.server=localStorage.server)}))},prettyBytes(e){return u.Z.prettyBytes(e)}}},m=a(48118);const w=(0,m.Z)(c,[["render",i]]);var v=w}}]);
//# sourceMappingURL=2992.1c02449a.js.map