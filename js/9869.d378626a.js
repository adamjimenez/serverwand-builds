"use strict";(self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[]).push([[9869],{64574:function(e,t,a){a.d(t,{Z:function(){return c}});var i=a(66252),l=a(3577),s=a(49963);function o(e,t,a,o,n,r){const d=(0,i.up)("v-toolbar-title"),c=(0,i.up)("v-toolbar"),u=(0,i.up)("v-card-text"),h=(0,i.up)("v-spacer"),m=(0,i.up)("v-btn"),f=(0,i.up)("v-card-actions"),p=(0,i.up)("v-card"),g=(0,i.up)("v-dialog");return(0,i.wg)(),(0,i.j4)(g,{modelValue:e.dialog,"onUpdate:modelValue":t[0]||(t[0]=t=>e.dialog=t),"max-width":e.options.width,style:(0,l.j5)({zIndex:e.options.zIndex}),onKeydown:(0,s.D2)(r.cancel,["esc"]),persistent:""},{default:(0,i.w5)((()=>[(0,i.Wm)(p,null,{default:(0,i.w5)((()=>[(0,i.Wm)(c,{dark:"",color:e.options.color,dense:"",flat:""},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{class:"text-body-2 font-weight-bold grey--text"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,l.zw)(e.title),1)])),_:1})])),_:1},8,["color"]),(0,i.wy)((0,i.Wm)(u,{class:"pa-4 black--text",innerHTML:e.message},null,8,["innerHTML"]),[[s.F8,!!e.message]]),(0,i.Wm)(f,{class:"pt-3"},{default:(0,i.w5)((()=>[(0,i.Wm)(h),e.options.noconfirm?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(m,{key:0,color:"grey",text:"",class:"body-2 font-weight-bold",onClick:r.cancel},{default:(0,i.w5)((()=>[(0,i.Uk)("Cancel")])),_:1},8,["onClick"])),(0,i.Wm)(m,{color:"primary",class:"body-2 font-weight-bold",outlined:"",onClick:r.agree},{default:(0,i.w5)((()=>[(0,i.Uk)("OK")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue","max-width","style","onKeydown"])}var n={data:function(){return{dialog:!1,resolve:null,reject:null,message:null,title:null,options:{color:"grey lighten-3",width:400,zIndex:10008,noconfirm:!1}}},methods:{open(e,t,a){return t||(t=e,e="Confirm"),this.dialog=!0,this.title=e,this.message=t,this.options=Object.assign(this.options,a),new Promise(((e,t)=>{this.resolve=e,this.reject=t}))},agree(){this.resolve(!0),this.dialog=!1},cancel(){this.resolve(!1),this.dialog=!1}}},r=a(83744);const d=(0,r.Z)(n,[["render",o]]);var c=d},11297:function(e,t,a){a.d(t,{Z:function(){return r}});var i=a(66252);function l(e,t,a,l,s,o){const n=(0,i.up)("v-icon"),r=(0,i.up)("v-alert"),d=(0,i.up)("v-dialog");return(0,i.wg)(),(0,i.j4)(d,{modelValue:e.show,"onUpdate:modelValue":t[0]||(t[0]=t=>e.show=t),persistent:"",width:"600"},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{title:a.message,color:"primary"},{prepend:(0,i.w5)((()=>[(0,i.Wm)(n,{icon:"fas fa-magic fa-2x faa-horizontal animated"})])),_:1},8,["title"])])),_:1},8,["modelValue"])}var s={name:"Loading",data:()=>({show:!1}),props:{value:{type:Boolean,default:!1},message:{type:String,default:"Summoning..."}},watch:{value:function(e){this.show=e}}},o=a(83744);const n=(0,o.Z)(s,[["render",l]]);var r=n},19869:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var i=a(66252),l=a(49963);const s={key:0},o={key:1};function n(e,t,a,n,r,d){const c=(0,i.up)("v-alert"),u=(0,i.up)("Loading"),h=(0,i.up)("v-btn"),m=(0,i.up)("v-card-actions"),f=(0,i.up)("v-list-item-subtitle"),p=(0,i.up)("v-icon"),g=(0,i.up)("v-tooltip"),w=(0,i.up)("v-list-item-action"),v=(0,i.up)("v-list-item"),k=(0,i.up)("v-list"),b=(0,i.up)("v-card"),W=(0,i.up)("v-text-field"),y=(0,i.up)("v-checkbox"),x=(0,i.up)("v-card-text"),_=(0,i.up)("v-dialog"),D=(0,i.up)("Confirm");return(0,i.wg)(),(0,i.iD)("div",null,[r.error?((0,i.wg)(),(0,i.j4)(c,{key:0,type:"error",text:r.error},null,8,["text"])):(0,i.kq)("",!0),(0,i.Wm)(u,{value:r.loading},null,8,["value"]),(0,i.Wm)(b,{loading:r.fetching},{default:(0,i.w5)((()=>[(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i.Wm)(h,{onClick:t[0]||(t[0]=e=>d.addAlias()),icon:"mdi:mdi-plus"})])),_:1}),(0,i.Wm)(k,{"max-width":"600"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.data.aliases,((e,t)=>((0,i.wg)(),(0,i.j4)(v,{key:`item-${t}`,title:e.domain,subtitle:e.value},{append:(0,i.w5)((()=>[e.dns.A!=r.data.server.ip?((0,i.wg)(),(0,i.j4)(w,{key:0},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{text:"Fix DNS mismatch "+e.dns.A+" => "+r.data.server.ip},{activator:(0,i.w5)((({props:t})=>[(0,i.Wm)(h,(0,i.dG)(t,{icon:"",onClick:t=>d.fixAliasDns(e.domain)}),{default:(0,i.w5)((()=>[(0,i.Wm)(p,{size:"x-small"},{default:(0,i.w5)((()=>[(0,i.Uk)("fas fa-wrench")])),_:1})])),_:2},1040,["onClick"])])),_:2},1032,["text"])])),_:2},1024)):(0,i.kq)("",!0),(0,i.Wm)(w,null,{default:(0,i.w5)((()=>[(0,i.Wm)(h,{disabled:r.fetching,loading:r.loading===e.name,onClick:(0,l.iM)((t=>d.deleteAlias(e.domain)),["stop"]),icon:"mdi:mdi-delete",size:"small"},null,8,["disabled","loading","onClick"])])),_:2},1024)])),default:(0,i.w5)((()=>[(0,i.Wm)(f,null,{default:(0,i.w5)((()=>[e.redirect?((0,i.wg)(),(0,i.iD)("span",s," Redirect ")):((0,i.wg)(),(0,i.iD)("span",o," Alias "))])),_:2},1024)])),_:2},1032,["title","subtitle"])))),128))])),_:1})])),_:1},8,["loading"]),(0,i.Wm)(_,{modelValue:r.drawer,"onUpdate:modelValue":t[4]||(t[4]=e=>r.drawer=e),"max-width":"600"},{default:(0,i.w5)((()=>[(0,i.Wm)(b,{title:"Domain alias"},{default:(0,i.w5)((()=>[(0,i.Wm)(x,null,{default:(0,i.w5)((()=>[(0,i.Wm)(W,{modelValue:r.alias.alias,"onUpdate:modelValue":t[1]||(t[1]=e=>r.alias.alias=e),label:"Alias",required:"",autofocus:""},null,8,["modelValue"]),(0,i.Wm)(y,{modelValue:r.alias.dns,"onUpdate:modelValue":t[2]||(t[2]=e=>r.alias.dns=e),label:"Configure DNS",disabled:""==r.data.server.dns},null,8,["modelValue","disabled"]),(0,i.Wm)(y,{modelValue:r.alias.redirect,"onUpdate:modelValue":t[3]||(t[3]=e=>r.alias.redirect=e),label:"Redirect"},null,8,["modelValue"]),(0,i.Wm)(h,{disabled:!r.alias.alias,loading:r.fetching,color:"success",onClick:d.submitAlias,text:"Save"},null,8,["disabled","loading","onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(D,{ref:"confirm"},null,512)])}var r=a(1006),d=a(11297),c=a(64574),u={components:{Loading:d.Z,Confirm:c.Z},data(){return{siteId:null,post:null,error:null,data:{disk_usage:0,server:{},app:{}},details:"",fetching:!1,loading:null,passwordPanel:[!1],passwordFormValid:!0,rules:{required:e=>!!e||"Required.",min:e=>e.length>=8||"Min 8 characters",emailMatch:()=>"The email and password you entered don't match"},alias:{alias:"",redirect:!1,dns:!1},drawer:!1,timer:null}},created(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData(){this.error="",this.siteId=this.$route.params.id,clearTimeout(this.timer),this.fetching=!0,r.Z.get("sites/"+this.siteId+"/aliases").then((e=>{console.log(e),this.data=e.data.item,document.title="Aliases | "+this.data.domain,this.data.aliases.forEach((e=>{if(e.dns.updating)return console.log("checking dns"),void(this.timer=setTimeout(this.fetchData,6e4))}))})).catch((e=>{console.log(e)})).finally((()=>{this.fetching=!1}))},addAlias(){this.alias={},this.drawer=!0},submitAlias(){this.saveAlias()},saveAlias(e){var t;this.alias.alias&&(this.details="",this.fetching=!0,this.error="",!e&&this.alias.dns&&(t=window.open("/loading")),console.log(this.alias),r.Z.post("sites/"+this.siteId+"/aliases",this.alias).then((a=>{if(console.log(a),a.data.success)t&&t.close(),this.drawer=!1,this.fetchData();else if("auth"!=a.data.error||e)this.error=a.data.error;else{t.location="https://serverwand.com/account/services/"+this.data.server.dns;var i=setInterval((()=>{if(t.closed)return clearInterval(i),void this.saveAlias(!0)}),500)}})).catch((e=>{console.log(e),this.fetching=!1})).finally((()=>{this.fetching=!1})))},deleteAlias:async function(e){await this.$refs.confirm.open("Delete "+e)&&(this.fetching=!0,this.error="",this.loading=e,r.Z.post("sites/"+this.siteId+"/aliases",{delete:1,alias:e}).then((e=>{console.log(e),e.data.success?this.fetchData():this.error=e.data.error})).catch((e=>{console.log(e),this.fetching=!1})).finally((()=>{this.loading=null})))},fixAliasDns(e,t){this.details="",this.fetching=!0,this.error="",r.Z.post("sites/"+this.siteId+"/fixaliasdns",{alias:e}).then((a=>{if(console.log(a),a.data.success)this.fetchData();else if("auth"!=a.data.error||t)this.error=a.data.error;else{let t=window.open("https://serverwand.com/account/services/"+this.data.server.dns),a=setInterval((()=>{if(t.closed)return clearInterval(a),void this.fixAliasDns(e,!0)}),500)}})).catch((e=>{console.log(e),this.fetching=!1})).finally((()=>{this.fetching=!1}))}},beforeUnmount(){clearTimeout(this.timer)}},h=a(83744);const m=(0,h.Z)(u,[["render",n]]);var f=m}}]);
//# sourceMappingURL=9869.d378626a.js.map