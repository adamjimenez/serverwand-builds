"use strict";(self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[]).push([[555,6260],{81815:function(e,t,a){a.d(t,{A:function(){return i}});var l=a(20641);function u(e,t,a,u,n,d){const r=(0,l.g2)("v-icon"),i=(0,l.g2)("v-alert"),o=(0,l.g2)("v-dialog");return(0,l.uX)(),(0,l.Wv)(o,{modelValue:e.show,"onUpdate:modelValue":t[0]||(t[0]=t=>e.show=t),persistent:"",width:"600"},{default:(0,l.k6)((()=>[(0,l.bF)(i,{title:a.message,color:"primary"},{prepend:(0,l.k6)((()=>[(0,l.bF)(r,{icon:"fas fa-magic fa-2x faa-horizontal animated"})])),_:1},8,["title"])])),_:1},8,["modelValue"])}var n={name:"Loading",data:()=>({show:!1}),props:{value:{type:Boolean,default:!1},message:{type:String,default:"Summoning..."}},watch:{value:function(e){this.show=e}}},d=a(66262);const r=(0,d.A)(n,[["render",u]]);var i=r},40555:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var l=a(20641),u=a(90033);function n(e,t,a,n,d,r){const i=(0,l.g2)("v-alert"),o=(0,l.g2)("Loading"),s=(0,l.g2)("v-list-item-title"),f=(0,l.g2)("v-list-item-subtitle"),c=(0,l.g2)("v-list-item"),h=(0,l.g2)("v-list"),m=(0,l.g2)("v-card");return(0,l.uX)(),(0,l.CE)("div",null,[d.error?((0,l.uX)(),(0,l.Wv)(i,{key:0,type:"error"},{default:(0,l.k6)((()=>[(0,l.eW)((0,u.v_)(d.error),1)])),_:1})):(0,l.Q3)("",!0),(0,l.bF)(o,{value:d.loading},null,8,["value"]),(0,l.bF)(m,{class:"pa-3",loading:d.fetching},{default:(0,l.k6)((()=>[(0,l.bF)(h,{lines:"two"},{default:(0,l.k6)((()=>[(0,l.bF)(c,null,{default:(0,l.k6)((()=>[(0,l.bF)(s,null,{default:(0,l.k6)((()=>t[0]||(t[0]=[(0,l.eW)(" Name ")]))),_:1}),(0,l.bF)(f,null,{default:(0,l.k6)((()=>[(0,l.eW)((0,u.v_)(d.data.name),1)])),_:1})])),_:1}),(0,l.bF)(c,null,{default:(0,l.k6)((()=>[(0,l.bF)(s,null,{default:(0,l.k6)((()=>t[1]||(t[1]=[(0,l.eW)(" Surname ")]))),_:1}),(0,l.bF)(f,null,{default:(0,l.k6)((()=>[(0,l.eW)((0,u.v_)(d.data.surname),1)])),_:1})])),_:1}),(0,l.bF)(c,null,{default:(0,l.k6)((()=>[(0,l.bF)(s,null,{default:(0,l.k6)((()=>t[2]||(t[2]=[(0,l.eW)(" Email ")]))),_:1}),(0,l.bF)(f,null,{default:(0,l.k6)((()=>[(0,l.eW)((0,u.v_)(d.data.email),1)])),_:1})])),_:1}),(0,l.bF)(c,null,{default:(0,l.k6)((()=>[(0,l.bF)(s,null,{default:(0,l.k6)((()=>t[3]||(t[3]=[(0,l.eW)(" Address ")]))),_:1}),(0,l.bF)(f,null,{default:(0,l.k6)((()=>[(0,l.eW)((0,u.v_)(d.data.address),1)])),_:1})])),_:1}),(0,l.bF)(c,null,{default:(0,l.k6)((()=>[(0,l.bF)(s,null,{default:(0,l.k6)((()=>t[4]||(t[4]=[(0,l.eW)(" City ")]))),_:1}),(0,l.bF)(f,null,{default:(0,l.k6)((()=>[(0,l.eW)((0,u.v_)(d.data.city),1)])),_:1})])),_:1}),(0,l.bF)(c,null,{default:(0,l.k6)((()=>[(0,l.bF)(s,null,{default:(0,l.k6)((()=>t[5]||(t[5]=[(0,l.eW)(" Postcode ")]))),_:1}),(0,l.bF)(f,null,{default:(0,l.k6)((()=>[(0,l.eW)((0,u.v_)(d.data.postcode),1)])),_:1})])),_:1}),(0,l.bF)(c,null,{default:(0,l.k6)((()=>[(0,l.bF)(s,null,{default:(0,l.k6)((()=>t[6]||(t[6]=[(0,l.eW)(" Telephone ")]))),_:1}),(0,l.bF)(f,null,{default:(0,l.k6)((()=>[(0,l.eW)((0,u.v_)(d.data.tel),1)])),_:1})])),_:1})])),_:1})])),_:1},8,["loading"])])}var d=a(74300),r=a(81815),i={components:{Loading:r.A},data(){return{userId:null,post:null,error:null,data:{},details:"",loading:!1,fetching:!1,password:"",rules:{required:e=>!!e||"Required.",min:e=>e.length>=8||"Min 8 characters",emailMatch:()=>"The email and password you entered don't match"},authRequired:!1}},created(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData(e){this.error="",this.userId=this.$route.params.id,this.fetching=!0,d.A.get("users/"+this.userId+"/summary",{clearCacheEntry:e}).then((e=>{console.log(e),this.data=e.data.item,document.title="Summary | "+this.data.name})).catch((e=>console.log(e))).finally((()=>this.fetching=!1))}}},o=a(66262);const s=(0,o.A)(i,[["render",n]]);var f=s}}]);
//# sourceMappingURL=555.bf09ea3e.js.map