"use strict";(self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[]).push([[5948],{11912:function(a,t,e){e.d(t,{Z:function(){return f}});var n=e(66252),l=e(3577);const o=(0,n._)("i",{class:"fas fa-magic fa-2x faa-horizontal animated"},null,-1),d={class:"ml-2"};function s(a,t,e,s,i,u){const r=(0,n.up)("v-layout"),f=(0,n.up)("v-card-text"),m=(0,n.up)("v-card"),p=(0,n.up)("v-container"),w=(0,n.up)("v-dialog");return(0,n.wg)(),(0,n.j4)(w,{modelValue:a.show,"onUpdate:modelValue":t[0]||(t[0]=t=>a.show=t),persistent:"",content:"","content-class":"centered-dialog"},{default:(0,n.w5)((()=>[(0,n.Wm)(p,{"fill-height":""},{default:(0,n.w5)((()=>[(0,n.Wm)(m,{color:"primary"},{default:(0,n.w5)((()=>[(0,n.Wm)(f,null,{default:(0,n.w5)((()=>[(0,n.Wm)(r,{row:""},{default:(0,n.w5)((()=>[o,(0,n._)("h2",d,(0,l.zw)(e.message),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])}var i={name:"Loading",data:()=>({show:!1}),props:{value:{type:Boolean,default:!1},message:{type:String,default:"Summoning..."}},watch:{value:function(a){this.show=a}}},u=e(48118);const r=(0,u.Z)(i,[["render",s]]);var f=r},43964:function(a,t,e){e.d(t,{Z:function(){return i}});var n=e(66252);function l(a,t,e,l,o,d){const s=(0,n.up)("v-icon");return"wordpress"===e.app?((0,n.wg)(),(0,n.j4)(s,{key:0},{default:(0,n.w5)((()=>[(0,n.Uk)("fab fa-wordpress")])),_:1})):"git"===e.app?((0,n.wg)(),(0,n.j4)(s,{key:1},{default:(0,n.w5)((()=>[(0,n.Uk)("fab fa-git")])),_:1})):"node"===e.app?((0,n.wg)(),(0,n.j4)(s,{key:2},{default:(0,n.w5)((()=>[(0,n.Uk)("fab fa-node-js")])),_:1})):"joomla"===e.app?((0,n.wg)(),(0,n.j4)(s,{key:3},{default:(0,n.w5)((()=>[(0,n.Uk)("fab fa-joomla")])),_:1})):"drupal"===e.app?((0,n.wg)(),(0,n.j4)(s,{key:4},{default:(0,n.w5)((()=>[(0,n.Uk)("fab fa-drupal")])),_:1})):"magento"===e.app?((0,n.wg)(),(0,n.j4)(s,{key:5},{default:(0,n.w5)((()=>[(0,n.Uk)("fab fa-magento")])),_:1})):"roundcube"===e.app?((0,n.wg)(),(0,n.j4)(s,{key:6},{default:(0,n.w5)((()=>[(0,n.Uk)("fas fa-envelope")])),_:1})):"shiftlib"===e.app?((0,n.wg)(),(0,n.j4)(s,{key:7},{default:(0,n.w5)((()=>[(0,n.Uk)("fas fa-user-edit")])),_:1})):((0,n.wg)(),(0,n.j4)(s,{key:8},{default:(0,n.w5)((()=>[(0,n.Uk)("fas fa-sitemap")])),_:1}))}var o={props:{app:null}},d=e(48118);const s=(0,d.Z)(o,[["render",l]]);var i=s},95948:function(a,t,e){e.r(t),e.d(t,{default:function(){return w}});var n=e(66252),l=e(3577);const o=["innerHTML"],d=["href"];function s(a,t,e,s,i,u){const r=(0,n.up)("v-alert"),f=(0,n.up)("Loading"),m=(0,n.up)("SiteIcon"),p=(0,n.up)("v-list-item-title"),w=(0,n.up)("router-link"),c=(0,n.up)("v-list-item-subtitle"),k=(0,n.up)("v-btn"),h=(0,n.up)("v-list-item"),v=(0,n.up)("v-tab"),g=(0,n.up)("v-tabs"),_=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)("div",null,[i.error?((0,n.wg)(),(0,n.j4)(r,{key:0,type:"error"},{default:(0,n.w5)((()=>[(0,n._)("div",{innerHTML:i.error},null,8,o)])),_:1})):(0,n.kq)("",!0),(0,n.Wm)(f,{value:i.fetching},null,8,["value"]),(0,n.Wm)(h,{title:i.data.name,subtitle:i.data.hostname},{prepend:(0,n.w5)((()=>[(0,n.Wm)(m,{app:i.data.app},null,8,["app"])])),append:(0,n.w5)((()=>[(0,n.Wm)(k,{color:"success",href:i.data.shiftedit_url,target:"_blank",title:"Open in ShiftEdit IDE",icon:"mdi:mdi-code-braces",size:"small"},null,8,["href"])])),default:(0,n.w5)((()=>[(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[(0,n._)("a",{href:"http://"+i.data.domain,target:"_blank"},(0,l.zw)(i.data.domain),9,d)])),_:1}),(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n.Wm)(w,{to:"/servers/"+i.data.server.id+"/summary"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,l.zw)(i.data.server.name),1)])),_:1},8,["to"])])),_:1})])),_:1},8,["title","subtitle"]),(0,n.Wm)(g,null,{default:(0,n.w5)((()=>[(0,n.Wm)(v,{to:"/sites/"+i.domainId+"/summary"},{default:(0,n.w5)((()=>[(0,n.Uk)("Summary")])),_:1},8,["to"]),(0,n.Wm)(v,{to:"/sites/"+i.domainId+"/database"},{default:(0,n.w5)((()=>[(0,n.Uk)("Database")])),_:1},8,["to"]),(0,n.Wm)(v,{to:"/sites/"+i.domainId+"/variables"},{default:(0,n.w5)((()=>[(0,n.Uk)("Variables")])),_:1},8,["to"]),(0,n.Wm)(v,{to:"/sites/"+i.domainId+"/aliases"},{default:(0,n.w5)((()=>[(0,n.Uk)("Aliases")])),_:1},8,["to"]),(0,n.Wm)(v,{to:"/sites/"+i.domainId+"/email"},{default:(0,n.w5)((()=>[(0,n.Uk)("Email")])),_:1},8,["to"]),(0,n.Wm)(v,{to:"/sites/"+i.domainId+"/apps"},{default:(0,n.w5)((()=>[(0,n.Uk)("Apps")])),_:1},8,["to"]),(0,n.Wm)(v,{to:"/sites/"+i.domainId+"/dns"},{default:(0,n.w5)((()=>[(0,n.Uk)("DNS")])),_:1},8,["to"]),(0,n.Wm)(v,{to:"/sites/"+i.domainId+"/backups"},{default:(0,n.w5)((()=>[(0,n.Uk)("Backups")])),_:1},8,["to"]),(0,n.Wm)(v,{to:"/sites/"+i.domainId+"/settings"},{default:(0,n.w5)((()=>[(0,n.Uk)("Settings")])),_:1},8,["to"])])),_:1}),(0,n.Wm)(_)])}var i=e(1006),u=e(11912),r=e(43964),f={components:{Loading:u.Z,SiteIcon:r.Z},data(){return{domainId:null,post:null,error:null,data:{server:{}},details:"",fetching:!1,aliasDrawer:!1}},created(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData(){var a=this;this.error="",this.domainId=this.$route.params.id,i.Z.get("sites/"+this.domainId).then((t=>{console.log(t),t.data.item&&(a.data=t.data.item)})).catch((a=>console.log(a))).finally((()=>a.fetching=!1))}}},m=e(48118);const p=(0,m.Z)(f,[["render",s]]);var w=p}}]);
//# sourceMappingURL=5948.131d1f5d.js.map