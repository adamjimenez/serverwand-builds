"use strict";(self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[]).push([[4397],{11912:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(66252),l=a(3577);const r=(0,n._)("i",{class:"fas fa-magic fa-2x faa-horizontal animated"},null,-1),s={class:"ml-2"};function o(e,t,a,o,u,i){const m=(0,n.up)("v-layout"),d=(0,n.up)("v-card-text"),c=(0,n.up)("v-card"),f=(0,n.up)("v-container"),h=(0,n.up)("v-dialog");return(0,n.wg)(),(0,n.j4)(h,{modelValue:e.show,"onUpdate:modelValue":t[0]||(t[0]=t=>e.show=t),persistent:"",content:"","content-class":"centered-dialog"},{default:(0,n.w5)((()=>[(0,n.Wm)(f,{"fill-height":""},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{color:"primary"},{default:(0,n.w5)((()=>[(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(m,{row:""},{default:(0,n.w5)((()=>[r,(0,n._)("h2",s,(0,l.zw)(a.message),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])}var u={name:"Loading",data:()=>({show:!1}),props:{value:{type:Boolean,default:!1},message:{type:String,default:"Summoning..."}},watch:{value:function(e){this.show=e}}},i=a(48118);const m=(0,i.Z)(u,[["render",o]]);var d=m},74397:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var n=a(66252),l=a(3577);function r(e,t,a,r,s,o){const u=(0,n.up)("v-alert"),i=(0,n.up)("Loading"),m=(0,n.up)("v-list-item-subtitle"),d=(0,n.up)("v-icon"),c=(0,n.up)("v-list-item"),f=(0,n.up)("v-data-table"),h=(0,n.up)("v-card");return(0,n.wg)(),(0,n.iD)("div",null,[s.error?((0,n.wg)(),(0,n.j4)(u,{key:0,type:"error",text:s.error},null,8,["text"])):(0,n.kq)("",!0),(0,n.Wm)(i,{value:s.loading},null,8,["value"]),(0,n.Wm)(h,{loading:s.fetching},{default:(0,n.w5)((()=>[(0,n.Wm)(f,{headers:s.headers,items:s.items},{"item.name":(0,n.w5)((({item:e})=>[(0,n.Wm)(c,{to:"/teams/"+e.id+"/members",title:e.name,class:"px-0"},(0,n.Nv)({default:(0,n.w5)((()=>[(0,n.Wm)(m,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,l.zw)(e.members.length)+" member"+(0,l.zw)(1!=e.members.length?"s":"")+", "+(0,l.zw)(e.servers.length)+" server"+(0,l.zw)(1!=e.servers.length?"s":""),1)])),_:2},1024)])),_:2},[o.mobile?void 0:{name:"prepend",fn:(0,n.w5)((()=>[(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Uk)("fas fa-users")])),_:1})])),key:"0"}]),1032,["to","title"])])),_:1},8,["headers","items"])])),_:1},8,["loading"])])}var s=a(1006),o=a(11912),u=a(5455),i={components:{Loading:o.Z},data(){return{fetching:!1,loading:!1,error:null,items:[],headers:[{title:"Name",key:"name"}]}},created(){document.title="Teams",this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData(){var e=this;this.error="",this.fetching=!0,s.Z.get("teams/").then((t=>{console.log(t),e.items=t.data.items})).catch((e=>console.log(e))).finally((()=>e.fetching=!1))}},computed:{mobile:function(){const{mobile:e}=(0,u.AW)();return e.value}}},m=a(48118);const d=(0,m.Z)(i,[["render",r]]);var c=d}}]);
//# sourceMappingURL=4397.a3028327.js.map