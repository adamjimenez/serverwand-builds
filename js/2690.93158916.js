"use strict";(self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[]).push([[2690],{64574:function(e,t,o){o.d(t,{Z:function(){return s}});var l=o(66252),a=o(3577),n=o(49963);function r(e,t,o,r,i,d){const u=(0,l.up)("v-toolbar-title"),s=(0,l.up)("v-toolbar"),c=(0,l.up)("v-card-text"),m=(0,l.up)("v-spacer"),p=(0,l.up)("v-btn"),v=(0,l.up)("v-card-actions"),f=(0,l.up)("v-card"),h=(0,l.up)("v-dialog");return(0,l.wg)(),(0,l.j4)(h,{modelValue:e.dialog,"onUpdate:modelValue":t[0]||(t[0]=t=>e.dialog=t),"max-width":e.options.width,style:(0,a.j5)({zIndex:e.options.zIndex}),onKeydown:(0,n.D2)(d.cancel,["esc"]),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[(0,l.Wm)(s,{dark:"",color:e.options.color,dense:"",flat:""},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{class:"text-body-2 font-weight-bold grey--text"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,a.zw)(e.title),1)])),_:1})])),_:1},8,["color"]),(0,l.wy)((0,l.Wm)(c,{class:"pa-4 black--text",innerHTML:e.message},null,8,["innerHTML"]),[[n.F8,!!e.message]]),(0,l.Wm)(v,{class:"pt-3"},{default:(0,l.w5)((()=>[(0,l.Wm)(m),e.options.noconfirm?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(p,{key:0,color:"grey",text:"",class:"body-2 font-weight-bold",onClick:d.cancel},{default:(0,l.w5)((()=>[(0,l.Uk)("Cancel")])),_:1},8,["onClick"])),(0,l.Wm)(p,{color:"primary",class:"body-2 font-weight-bold",outlined:"",onClick:d.agree},{default:(0,l.w5)((()=>[(0,l.Uk)("OK")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue","max-width","style","onKeydown"])}var i={data:function(){return{dialog:!1,resolve:null,reject:null,message:null,title:null,options:{color:"grey lighten-3",width:400,zIndex:10008,noconfirm:!1}}},methods:{open(e,t,o){return t||(t=e,e="Confirm"),this.dialog=!0,this.title=e,this.message=t,this.options=Object.assign(this.options,o),new Promise(((e,t)=>{this.resolve=e,this.reject=t}))},agree(){this.resolve(!0),this.dialog=!1},cancel(){this.resolve(!1),this.dialog=!1}}},d=o(83744);const u=(0,d.Z)(i,[["render",r]]);var s=u},11297:function(e,t,o){o.d(t,{Z:function(){return d}});var l=o(66252);function a(e,t,o,a,n,r){const i=(0,l.up)("v-icon"),d=(0,l.up)("v-alert"),u=(0,l.up)("v-dialog");return(0,l.wg)(),(0,l.j4)(u,{modelValue:e.show,"onUpdate:modelValue":t[0]||(t[0]=t=>e.show=t),persistent:"",width:"600"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{title:o.message,color:"primary"},{prepend:(0,l.w5)((()=>[(0,l.Wm)(i,{icon:"fas fa-magic fa-2x faa-horizontal animated"})])),_:1},8,["title"])])),_:1},8,["modelValue"])}var n={name:"Loading",data:()=>({show:!1}),props:{value:{type:Boolean,default:!1},message:{type:String,default:"Summoning..."}},watch:{value:function(e){this.show=e}}},r=o(83744);const i=(0,r.Z)(n,[["render",a]]);var d=i},92690:function(e,t,o){o.r(t),o.d(t,{default:function(){return m}});var l=o(66252),a=o(49963);function n(e,t,o,n,r,i){const d=(0,l.up)("v-alert"),u=(0,l.up)("Loading"),s=(0,l.up)("v-btn"),c=(0,l.up)("v-card-actions"),m=(0,l.up)("v-list-item"),p=(0,l.up)("v-list"),v=(0,l.up)("v-card"),f=(0,l.up)("v-select"),h=(0,l.up)("v-text-field"),g=(0,l.up)("v-card-text"),w=(0,l.up)("v-dialog"),k=(0,l.up)("Confirm");return(0,l.wg)(),(0,l.iD)("div",null,[r.error?((0,l.wg)(),(0,l.j4)(d,{key:0,type:"error",text:r.error},null,8,["text"])):(0,l.kq)("",!0),(0,l.Wm)(u,{value:r.fetching},null,8,["value"]),(0,l.Wm)(v,{class:"mx-auto"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Wm)(s,{onClick:t[0]||(t[0]=e=>i.addItem()),icon:"mdi:mdi-plus"})])),_:1}),(0,l.Wm)(p,{group:"","max-width":"600"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.items,((e,t)=>((0,l.wg)(),(0,l.j4)(m,{key:`item-${t}`,value:e,title:e.label},{append:(0,l.w5)((()=>[(0,l.Wm)(s,{disabled:r.dialog,loading:r.loading===e.id,onClick:(0,a.iM)((t=>i.deleteItem(e.id)),["stop"]),size:"small",icon:"mdi:mdi-delete"},null,8,["disabled","loading","onClick"])])),_:2},1032,["value","title"])))),128))])),_:1})])),_:1}),(0,l.Wm)(w,{modelValue:r.drawer,"onUpdate:modelValue":t[6]||(t[6]=e=>r.drawer=e),"max-width":"600"},{default:(0,l.w5)((()=>[(0,l.Wm)(v,{title:"API token "},{default:(0,l.w5)((()=>[(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l.Wm)(f,{modelValue:r.provider_token.provider,"onUpdate:modelValue":t[1]||(t[1]=e=>r.provider_token.provider=e),items:r.providers,label:"Provider"},null,8,["modelValue","items"]),(0,l.Wm)(h,{modelValue:r.provider_token.label,"onUpdate:modelValue":t[2]||(t[2]=e=>r.provider_token.label=e),label:"Label",required:""},null,8,["modelValue"]),"nominet"===r.provider_token.provider?((0,l.wg)(),(0,l.j4)(h,{key:0,modelValue:r.provider_token.username,"onUpdate:modelValue":t[3]||(t[3]=e=>r.provider_token.username=e),label:"Username",required:""},null,8,["modelValue"])):(0,l.kq)("",!0),"nominet"===r.provider_token.provider?((0,l.wg)(),(0,l.j4)(h,{key:1,modelValue:r.provider_token.password,"onUpdate:modelValue":t[4]||(t[4]=e=>r.provider_token.password=e),label:"Password",type:"password",required:""},null,8,["modelValue"])):(0,l.kq)("",!0),(0,l.Wm)(h,{modelValue:r.provider_token.token,"onUpdate:modelValue":t[5]||(t[5]=e=>r.provider_token.token=e),label:"Token",required:""},null,8,["modelValue"]),(0,l.Wm)(s,{disabled:!r.provider_token.provider||""==r.provider_token.label||""==r.provider_token.token,loading:r.fetching,color:"success",onClick:i.submitToken},{default:(0,l.w5)((()=>[(0,l.Uk)(" Save ")])),_:1},8,["disabled","loading","onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(k,{ref:"confirm"},null,512)])}var r=o(1006),i=o(11297),d=o(64574),u={components:{Loading:i.Z,Confirm:d.Z},data(){return{error:"",data:{label:""},providers:[{title:"Linode",value:"linode"},{title:"Digital Ocean",value:"digitalocean"},{title:"NameSilo",value:"namesilo"},{title:"Nominet",value:"nominet"}],items:[],dialog:!1,details:"",fetching:!0,loading:null,server:{name:""},provider_token:{provider:null,label:"",token:""},drawer:!1}},created(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData(){var e=this;this.error="",this.fetching=!0,r.Z.get("providers/tokens").then((function(t){console.log(t),e.items=t.data.tokens,document.title="Tokens"})).catch((function(t){e.error=t})).finally((function(){e.fetching=!1}))},addItem(){this.data.label="",this.drawer=!0},deleteItem:async function(e){if(await this.$refs.confirm.open("Are you sure you want to delete this item?")){var t=this;this.error="",this.loading=e,r.Z.post("providers/tokens/"+e,{delete:1}).then((function(e){console.log(e),e.data.error?t.error=e.data.error:t.fetchData()})).catch((function(e){console.log(e)})).finally((function(){t.loading=null}))}},submitToken(){var e=this;r.Z.post("providers/tokens",this.provider_token).then((function(t){t.data.error?e.error=t.data.error:(e.drawer=!1,e.fetchData())})).catch((function(t){e.error=t}))}}},s=o(83744);const c=(0,s.Z)(u,[["render",n]]);var m=c}}]);
//# sourceMappingURL=2690.93158916.js.map