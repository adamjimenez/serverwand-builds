"use strict";(self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[]).push([[2950],{11912:function(t,e,a){a.d(e,{Z:function(){return m}});var n=a(66252),l=a(3577);const o=(0,n._)("i",{class:"fas fa-magic fa-2x faa-horizontal animated"},null,-1),i={class:"ml-2"};function d(t,e,a,d,u,r){const s=(0,n.up)("v-layout"),m=(0,n.up)("v-card-text"),c=(0,n.up)("v-card"),f=(0,n.up)("v-container"),w=(0,n.up)("v-dialog");return(0,n.wg)(),(0,n.j4)(w,{modelValue:t.show,"onUpdate:modelValue":e[0]||(e[0]=e=>t.show=e),persistent:"",content:"","content-class":"centered-dialog"},{default:(0,n.w5)((()=>[(0,n.Wm)(f,{"fill-height":""},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{color:"primary"},{default:(0,n.w5)((()=>[(0,n.Wm)(m,null,{default:(0,n.w5)((()=>[(0,n.Wm)(s,{row:""},{default:(0,n.w5)((()=>[o,(0,n._)("h2",i,(0,l.zw)(a.message),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])}var u={name:"Loading",data:()=>({show:!1}),props:{value:{type:Boolean,default:!1},message:{type:String,default:"Summoning..."}},watch:{value:function(t){this.show=t}}},r=a(48118);const s=(0,r.Z)(u,[["render",d]]);var m=s},72950:function(t,e,a){a.r(e),a.d(e,{default:function(){return m}});var n=a(66252);const l=["innerHTML"];function o(t,e,a,o,i,d){const u=(0,n.up)("v-alert"),r=(0,n.up)("Loading"),s=(0,n.up)("v-icon"),m=(0,n.up)("v-list-item"),c=(0,n.up)("v-col"),f=(0,n.up)("v-btn"),w=(0,n.up)("v-row"),p=(0,n.up)("v-container"),h=(0,n.up)("v-tab"),v=(0,n.up)("v-tabs"),g=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)("div",null,[i.error?((0,n.wg)(),(0,n.j4)(u,{key:0,type:"error"},{default:(0,n.w5)((()=>[(0,n._)("div",{innerHTML:i.error},null,8,l)])),_:1})):(0,n.kq)("",!0),(0,n.Wm)(r,{value:i.fetching},null,8,["value"]),i.fetching?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(p,{key:1,fluid:""},{default:(0,n.w5)((()=>[(0,n.Wm)(w,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n.Wm)(m,{title:i.data.domain},{prepend:(0,n.w5)((()=>[(0,n.Wm)(s,{left:""},{default:(0,n.w5)((()=>[(0,n.Uk)("fas fa-globe")])),_:1})])),_:1},8,["title"])])),_:1}),(0,n.Wm)(c,{class:"d-flex align-center justify-end"},{default:(0,n.w5)((()=>[(0,n.Wm)(f,{href:"http://"+i.data.domain,target:"_blank",title:"Open site in new window",icon:"mdi:mdi-open-in-new",size:"small"},null,8,["href"])])),_:1})])),_:1})])),_:1})),(0,n.Wm)(v,null,{default:(0,n.w5)((()=>[(0,n.Wm)(h,{to:"/domains/"+i.domainId+"/summary"},{default:(0,n.w5)((()=>[(0,n.Uk)("Summary")])),_:1},8,["to"]),(0,n.Wm)(h,{to:"/domains/"+i.domainId+"/dns"},{default:(0,n.w5)((()=>[(0,n.Uk)("DNS")])),_:1},8,["to"]),(0,n.Wm)(h,{to:"/domains/"+i.domainId+"/settings"},{default:(0,n.w5)((()=>[(0,n.Uk)("Settings")])),_:1},8,["to"])])),_:1}),(0,n.Wm)(g)])}var i=a(1006),d=a(11912),u={components:{Loading:d.Z},data(){return{domainId:null,post:null,error:null,data:{server:{}},details:"",fetching:!1,aliasDrawer:!1}},created(){document.title="Domain",this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData(){var t=this;this.error="",this.domainId=this.$route.params.id,i.Z.get("domains/"+this.domainId).then((e=>{console.log(e),e.data.item&&(t.data=e.data.item),e.data.domain&&(document.title=t.data.domain)})).catch((t=>console.log(t))).finally((()=>t.fetching=!1))}}},r=a(48118);const s=(0,r.Z)(u,[["render",o]]);var m=s}}]);
//# sourceMappingURL=2950.c99ecda4.js.map