"use strict";(self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[]).push([[8701],{90947:function(e,t,a){a.d(t,{Z:function(){return u}});var o=a(66252),l=a(3577),n=a(49963);function i(e,t,a,i,r,s){const d=(0,o.up)("v-toolbar-title"),u=(0,o.up)("v-toolbar"),c=(0,o.up)("v-card-text"),m=(0,o.up)("v-spacer"),f=(0,o.up)("v-btn"),h=(0,o.up)("v-card-actions"),g=(0,o.up)("v-card"),p=(0,o.up)("v-dialog");return(0,o.wg)(),(0,o.j4)(p,{modelValue:e.dialog,"onUpdate:modelValue":t[0]||(t[0]=t=>e.dialog=t),"max-width":e.options.width,style:(0,l.j5)({zIndex:e.options.zIndex}),onKeydown:(0,n.D2)(s.cancel,["esc"]),persistent:""},{default:(0,o.w5)((()=>[(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[(0,o.Wm)(u,{dark:"",color:e.options.color,dense:"",flat:""},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{class:"text-body-2 font-weight-bold grey--text"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)(e.title),1)])),_:1})])),_:1},8,["color"]),(0,o.wy)((0,o.Wm)(c,{class:"pa-4 black--text",innerHTML:e.message},null,8,["innerHTML"]),[[n.F8,!!e.message]]),(0,o.Wm)(h,{class:"pt-3"},{default:(0,o.w5)((()=>[(0,o.Wm)(m),e.options.noconfirm?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(f,{key:0,color:"grey",text:"",class:"body-2 font-weight-bold",onClick:s.cancel},{default:(0,o.w5)((()=>[(0,o.Uk)("Cancel")])),_:1},8,["onClick"])),(0,o.Wm)(f,{color:"primary",class:"body-2 font-weight-bold",outlined:"",onClick:s.agree},{default:(0,o.w5)((()=>[(0,o.Uk)("OK")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue","max-width","style","onKeydown"])}var r={data:function(){return{dialog:!1,resolve:null,reject:null,message:null,title:null,options:{color:"grey lighten-3",width:400,zIndex:1008,noconfirm:!1}}},methods:{open(e,t,a){return this.dialog=!0,this.title=e,this.message=t,this.options=Object.assign(this.options,a),new Promise(((e,t)=>{this.resolve=e,this.reject=t}))},agree(){this.resolve(!0),this.dialog=!1},cancel(){this.resolve(!1),this.dialog=!1}}},s=a(48118);const d=(0,s.Z)(r,[["render",i]]);var u=d},48236:function(e,t,a){a.d(t,{Z:function(){return c}});var o=a(66252),l=a(3577);const n=(0,o._)("i",{class:"fas fa-magic fa-2x faa-horizontal animated"},null,-1),i={style:{"margin-left":"10px"}};function r(e,t,a,r,s,d){const u=(0,o.up)("v-layout"),c=(0,o.up)("v-card-text"),m=(0,o.up)("v-card"),f=(0,o.up)("v-container"),h=(0,o.up)("v-dialog");return(0,o.wg)(),(0,o.j4)(h,{modelValue:e.show,"onUpdate:modelValue":t[0]||(t[0]=t=>e.show=t),persistent:"",content:"","content-class":"centered-dialog"},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{"fill-height":""},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{color:"primary",dark:""},{default:(0,o.w5)((()=>[(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Wm)(u,{row:""},{default:(0,o.w5)((()=>[n,(0,o._)("h2",i,(0,l.zw)(a.message),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])}var s={name:"Loading",data:()=>({show:!1}),props:{value:{type:Boolean,default:!1},message:{type:String,default:"Summoning..."}},watch:{value:function(e){this.show=e}}},d=a(48118);const u=(0,d.Z)(s,[["render",r]]);var c=u},68701:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var o=a(66252);function l(e,t,a,l,n,i){const r=(0,o.up)("Loading"),s=(0,o.up)("v-btn"),d=(0,o.up)("v-card-title"),u=(0,o.up)("v-card"),c=(0,o.up)("Confirm");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(r,{value:n.loading},null,8,["value"]),(0,o.Wm)(u,{class:"pa-3",loading:n.fetching},{default:(0,o.w5)((()=>[(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Wm)(d,{"primary-title":""},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{onClick:i.editItem},{default:(0,o.w5)((()=>[(0,o.Uk)(" Edit ")])),_:1},8,["onClick"])])),_:1})])),_:1}),(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Wm)(d,{"primary-title":""},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{disabled:n.dialog,loading:n.dialog,onClick:i.deleteItem,color:"error"},{default:(0,o.w5)((()=>[(0,o.Uk)(" Delete ")])),_:1},8,["disabled","loading","onClick"])])),_:1})])),_:1})])),_:1},8,["loading"]),(0,o.Wm)(c,{ref:"confirm"},null,512)])}var n=a(1006),i=a(48236),r=a(90947),s={components:{Loading:i.Z,Confirm:r.Z},data(){return{fetching:!1,loading:!1,error:"",data:{users:{}},dialog:!1,details:"",id:0}},created(){this.id=this.$route.params.id,this.fetchData()},methods:{fetchData(){var e=this;this.error="",this.fetching=!0,n.Z.get("users/"+this.id).then((t=>{console.log(t),e.data=t.data.item,document.title="Settings | "+e.data.name})).catch((e=>console.log(e))).finally((()=>e.fetching=!1))},editItem(){this.$router.push("/users/"+this.$route.params.id+"/edit")},deleteItem:async function(){if(await this.$refs.confirm.open("Confirm","Delete "+this.data.name)){var e=this;this.dialog=!0,this.loading=!0,n.Z.post("users/"+this.id,{delete:1}).then((t=>{console.log(t),t.data.error?e.error=t.data.error:e.$router.push("/users/")})).catch((e=>console.log(e))).finally((()=>{e.dialog=!1,e.loading=!1}))}}}},d=a(48118);const u=(0,d.Z)(s,[["render",l]]);var c=u}}]);
//# sourceMappingURL=8701.41193c1d.js.map