"use strict";(self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[]).push([[914],{76284:function(t,e,o){o.d(e,{Z:function(){return u}});var a=o(66252),n=o(3577),l=o(49963);function i(t,e,o,i,d,r){const s=(0,a.up)("v-toolbar-title"),u=(0,a.up)("v-toolbar"),c=(0,a.up)("v-card-text"),f=(0,a.up)("v-spacer"),m=(0,a.up)("v-btn"),h=(0,a.up)("v-card-actions"),g=(0,a.up)("v-card"),p=(0,a.up)("v-dialog");return(0,a.wg)(),(0,a.j4)(p,{modelValue:t.dialog,"onUpdate:modelValue":e[0]||(e[0]=e=>t.dialog=e),"max-width":t.options.width,style:(0,n.j5)({zIndex:t.options.zIndex}),onKeydown:(0,l.D2)(r.cancel,["esc"]),persistent:""},{default:(0,a.w5)((()=>[(0,a.Wm)(g,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u,{dark:"",color:t.options.color,dense:"",flat:""},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{class:"text-body-2 font-weight-bold grey--text"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(t.title),1)])),_:1})])),_:1},8,["color"]),(0,a.wy)((0,a.Wm)(c,{class:"pa-4 black--text",innerHTML:t.message},null,8,["innerHTML"]),[[l.F8,!!t.message]]),(0,a.Wm)(h,{class:"pt-3"},{default:(0,a.w5)((()=>[(0,a.Wm)(f),t.options.noconfirm?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(m,{key:0,color:"grey",text:"",class:"body-2 font-weight-bold",onClick:r.cancel},{default:(0,a.w5)((()=>[(0,a.Uk)("Cancel")])),_:1},8,["onClick"])),(0,a.Wm)(m,{color:"primary",class:"body-2 font-weight-bold",outlined:"",onClick:r.agree},{default:(0,a.w5)((()=>[(0,a.Uk)("OK")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue","max-width","style","onKeydown"])}var d={data:function(){return{dialog:!1,resolve:null,reject:null,message:null,title:null,options:{color:"grey lighten-3",width:400,zIndex:10008,noconfirm:!1}}},methods:{open(t,e,o){return e||(e=t,t="Confirm"),this.dialog=!0,this.title=t,this.message=e,this.options=Object.assign(this.options,o),new Promise(((t,e)=>{this.resolve=t,this.reject=e}))},agree(){this.resolve(!0),this.dialog=!1},cancel(){this.resolve(!1),this.dialog=!1}}},r=o(48118);const s=(0,r.Z)(d,[["render",i]]);var u=s},11912:function(t,e,o){o.d(e,{Z:function(){return c}});var a=o(66252),n=o(3577);const l=(0,a._)("i",{class:"fas fa-magic fa-2x faa-horizontal animated"},null,-1),i={class:"ml-2"};function d(t,e,o,d,r,s){const u=(0,a.up)("v-layout"),c=(0,a.up)("v-card-text"),f=(0,a.up)("v-card"),m=(0,a.up)("v-container"),h=(0,a.up)("v-dialog");return(0,a.wg)(),(0,a.j4)(h,{modelValue:t.show,"onUpdate:modelValue":e[0]||(e[0]=e=>t.show=e),persistent:"",content:"","content-class":"centered-dialog"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{"fill-height":""},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{color:"primary"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u,{row:""},{default:(0,a.w5)((()=>[l,(0,a._)("h2",i,(0,n.zw)(o.message),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])}var r={name:"Loading",data:()=>({show:!1}),props:{value:{type:Boolean,default:!1},message:{type:String,default:"Summoning..."}},watch:{value:function(t){this.show=t}}},s=o(48118);const u=(0,s.Z)(r,[["render",d]]);var c=u},90914:function(t,e,o){o.r(e),o.d(e,{default:function(){return c}});var a=o(66252);function n(t,e,o,n,l,i){const d=(0,a.up)("Loading"),r=(0,a.up)("v-btn"),s=(0,a.up)("v-card-title"),u=(0,a.up)("v-card"),c=(0,a.up)("Confirm");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(d,{value:l.loading},null,8,["value"]),(0,a.Wm)(u,{class:"pa-3",loading:l.fetching},{default:(0,a.w5)((()=>[(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,{"primary-title":""},{default:(0,a.w5)((()=>[(0,a.Wm)(r,{onClick:i.editItem},{default:(0,a.w5)((()=>[(0,a.Uk)(" Edit ")])),_:1},8,["onClick"])])),_:1})])),_:1}),(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,{"primary-title":""},{default:(0,a.w5)((()=>[(0,a.Wm)(r,{disabled:l.dialog,loading:l.dialog,onClick:i.deleteItem,color:"error"},{default:(0,a.w5)((()=>[(0,a.Uk)(" Delete ")])),_:1},8,["disabled","loading","onClick"])])),_:1})])),_:1})])),_:1},8,["loading"]),(0,a.Wm)(c,{ref:"confirm"},null,512)])}o(57658);var l=o(1006),i=o(11912),d=o(76284),r={components:{Loading:i.Z,Confirm:d.Z},data(){return{fetching:!1,loading:!1,error:"",data:{users:{}},dialog:!1,details:"",id:0}},created(){this.id=this.$route.params.id,this.fetchData()},methods:{fetchData(){var t=this;this.error="",this.fetching=!0,l.Z.get("domains/"+this.id).then((function(e){console.log(e),t.data=e.data.item,document.title="Settings | "+t.data.domain})).catch((function(t){console.log(t)})).finally((function(){t.fetching=!1}))},editItem(){this.$router.push("/domains/"+this.$route.params.id+"/edit")},deleteItem:async function(){if(await this.$refs.confirm.open("Delete "+this.data.domain)){var t=this;this.dialog=!0,this.loading=!0,l.Z.post("domains/"+this.id,{delete:1}).then((function(e){console.log(e),e.data.error?t.error=e.data.error:t.$router.push("/domains/")})).catch((function(t){console.log(t)})).finally((function(){t.dialog=!1,t.loading=!1}))}}}},s=o(48118);const u=(0,s.Z)(r,[["render",n]]);var c=u}}]);
//# sourceMappingURL=914.1e83e6e1.js.map