"use strict";(self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[]).push([[3902,6260],{26301:function(t,e,n){n.d(e,{A:function(){return c}});var o=n(20641),r=n(90033),a=n(53751);function i(t,e,n,i,l,s){const d=(0,o.g2)("v-toolbar-title"),c=(0,o.g2)("v-toolbar"),u=(0,o.g2)("v-card-text"),h=(0,o.g2)("v-spacer"),g=(0,o.g2)("v-btn"),f=(0,o.g2)("v-card-actions"),m=(0,o.g2)("v-card"),p=(0,o.g2)("v-dialog");return(0,o.uX)(),(0,o.Wv)(p,{modelValue:t.dialog,"onUpdate:modelValue":e[0]||(e[0]=e=>t.dialog=e),"max-width":t.options.width,style:(0,r.Tr)({zIndex:t.options.zIndex}),onKeydown:(0,a.jR)(s.cancel,["esc"]),persistent:""},{default:(0,o.k6)((()=>[(0,o.bF)(m,null,{default:(0,o.k6)((()=>[(0,o.bF)(c,{dark:"",color:t.options.color,dense:"",flat:""},{default:(0,o.k6)((()=>[(0,o.bF)(d,{class:"text-body-2 font-weight-bold grey--text"},{default:(0,o.k6)((()=>[(0,o.eW)((0,r.v_)(t.title),1)])),_:1})])),_:1},8,["color"]),(0,o.bo)((0,o.bF)(u,{class:"pa-4 black--text",innerHTML:t.message},null,8,["innerHTML"]),[[a.aG,!!t.message]]),(0,o.bF)(f,{class:"pt-3"},{default:(0,o.k6)((()=>[(0,o.bF)(h),t.options.noconfirm?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.Wv)(g,{key:0,color:"grey",text:"",class:"body-2 font-weight-bold",onClick:s.cancel},{default:(0,o.k6)((()=>e[1]||(e[1]=[(0,o.eW)("Cancel")]))),_:1},8,["onClick"])),(0,o.bF)(g,{color:"primary",class:"body-2 font-weight-bold",outlined:"",onClick:s.agree},{default:(0,o.k6)((()=>e[2]||(e[2]=[(0,o.eW)("OK")]))),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue","max-width","style","onKeydown"])}var l={data:function(){return{dialog:!1,resolve:null,reject:null,message:null,title:null,options:{color:"grey lighten-3",width:400,zIndex:10008,noconfirm:!1}}},methods:{open(t,e,n){return e||(e=t,t="Confirm"),this.dialog=!0,this.title=t,this.message=e,this.options=Object.assign(this.options,n),new Promise(((t,e)=>{this.resolve=t,this.reject=e}))},agree(){this.resolve(!0),this.dialog=!1},cancel(){this.resolve(!1),this.dialog=!1}}},s=n(66262);const d=(0,s.A)(l,[["render",i]]);var c=d},81815:function(t,e,n){n.d(e,{A:function(){return s}});var o=n(20641);function r(t,e,n,r,a,i){const l=(0,o.g2)("v-icon"),s=(0,o.g2)("v-alert"),d=(0,o.g2)("v-dialog");return(0,o.uX)(),(0,o.Wv)(d,{modelValue:t.show,"onUpdate:modelValue":e[0]||(e[0]=e=>t.show=e),persistent:"",width:"600"},{default:(0,o.k6)((()=>[(0,o.bF)(s,{title:n.message,color:"primary"},{prepend:(0,o.k6)((()=>[(0,o.bF)(l,{icon:"fas fa-magic fa-2x faa-horizontal animated"})])),_:1},8,["title"])])),_:1},8,["modelValue"])}var a={name:"Loading",data:()=>({show:!1}),props:{value:{type:Boolean,default:!1},message:{type:String,default:"Summoning..."}},watch:{value:function(t){this.show=t}}},i=n(66262);const l=(0,i.A)(a,[["render",r]]);var s=l},23902:function(t,e,n){n.r(e),n.d(e,{default:function(){return u}});var o=n(20641);function r(t,e,n,r,a,i){const l=(0,o.g2)("Loading"),s=(0,o.g2)("v-btn"),d=(0,o.g2)("v-card-text"),c=(0,o.g2)("v-card"),u=(0,o.g2)("Confirm");return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.bF)(l,{value:a.loading},null,8,["value"]),(0,o.bF)(c,{loading:a.fetching},{default:(0,o.k6)((()=>[(0,o.bF)(c,{"max-width":"600"},{default:(0,o.k6)((()=>[(0,o.bF)(d,null,{default:(0,o.k6)((()=>[(0,o.bF)(s,{onClick:i.editItem,block:"",class:"mb-4"},{default:(0,o.k6)((()=>e[0]||(e[0]=[(0,o.eW)(" Edit ")]))),_:1},8,["onClick"]),(0,o.bF)(s,{disabled:a.dialog,loading:a.dialog,onClick:i.deleteItem,color:"error",block:""},{default:(0,o.k6)((()=>e[1]||(e[1]=[(0,o.eW)(" Delete ")]))),_:1},8,["disabled","loading","onClick"])])),_:1})])),_:1})])),_:1},8,["loading"]),(0,o.bF)(u,{ref:"confirm"},null,512)])}n(44114);var a=n(74300),i=n(81815),l=n(26301),s={components:{Loading:i.A,Confirm:l.A},data(){return{fetching:!1,loading:!1,error:"",data:{users:{}},dialog:!1,details:"",id:0}},created(){this.id=this.$route.params.id,this.fetchData()},methods:{fetchData(){this.error="",this.fetching=!0,a.A.get("domains/"+this.id).then((t=>{console.log(t),this.data=t.data.item,document.title="Settings | "+this.data.domain})).catch((t=>{console.log(t)})).finally((()=>{this.fetching=!1}))},editItem(){this.$router.push("/domains/"+this.$route.params.id+"/edit")},deleteItem:async function(){await this.$refs.confirm.open("Delete "+this.data.domain)&&(this.dialog=!0,this.loading=!0,a.A.post("domains/"+this.id,{delete:1}).then((t=>{console.log(t),t.data.error?this.error=t.data.error:this.$router.push("/domains/")})).catch((t=>{console.log(t)})).finally((()=>{this.dialog=!1,this.loading=!1})))}}},d=n(66262);const c=(0,d.A)(s,[["render",r]]);var u=c},34527:function(t,e,n){var o=n(43724),r=n(34376),a=TypeError,i=Object.getOwnPropertyDescriptor,l=o&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=l?function(t,e){if(r(t)&&!i(t,"length").writable)throw new a("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},96837:function(t){var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},34376:function(t,e,n){var o=n(22195);t.exports=Array.isArray||function(t){return"Array"===o(t)}},44114:function(t,e,n){var o=n(46518),r=n(48981),a=n(26198),i=n(34527),l=n(96837),s=n(79039),d=s((function(){return 4294967297!==[].push.call({length:4294967296},1)})),c=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},u=d||!c();o({target:"Array",proto:!0,arity:1,forced:u},{push:function(t){var e=r(this),n=a(e),o=arguments.length;l(n+o);for(var s=0;s<o;s++)e[n]=arguments[s],n++;return i(e,n),n}})}}]);
//# sourceMappingURL=3902.72cc8ec3.js.map