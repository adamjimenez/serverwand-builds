"use strict";(self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[]).push([[9710],{11912:function(e,a,l){l.d(a,{Z:function(){return m}});var t=l(66252),r=l(3577);const d=(0,t._)("i",{class:"fas fa-magic fa-2x faa-horizontal animated"},null,-1),o={class:"ml-2"};function i(e,a,l,i,s,n){const u=(0,t.up)("v-layout"),m=(0,t.up)("v-card-text"),p=(0,t.up)("v-card"),c=(0,t.up)("v-container"),v=(0,t.up)("v-dialog");return(0,t.wg)(),(0,t.j4)(v,{modelValue:e.show,"onUpdate:modelValue":a[0]||(a[0]=a=>e.show=a),persistent:"",content:"","content-class":"centered-dialog"},{default:(0,t.w5)((()=>[(0,t.Wm)(c,{"fill-height":""},{default:(0,t.w5)((()=>[(0,t.Wm)(p,{color:"primary"},{default:(0,t.w5)((()=>[(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t.Wm)(u,{row:""},{default:(0,t.w5)((()=>[d,(0,t._)("h2",o,(0,r.zw)(l.message),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])}var s={name:"Loading",data:()=>({show:!1}),props:{value:{type:Boolean,default:!1},message:{type:String,default:"Summoning..."}},watch:{value:function(e){this.show=e}}},n=l(48118);const u=(0,n.Z)(s,[["render",i]]);var m=u},69710:function(e,a,l){l.r(a),l.d(a,{default:function(){return h}});var t=l(66252);const r={key:2},d={key:3},o={key:0},i=(0,t._)("i",{class:"fas fa-magic fa-2x faa-horizontal animated"},null,-1),s=(0,t._)("h2",{style:{"margin-left":"10px"}},"Spellcasting...",-1),n=["innerHTML"];function u(e,a,l,u,m,p){const c=(0,t.up)("v-alert"),v=(0,t.up)("Loading"),g=(0,t.up)("v-card-title"),h=(0,t.up)("v-card-subtitle"),f=(0,t.up)("v-list"),k=(0,t.up)("v-select"),w=(0,t.up)("v-text-field"),V=(0,t.up)("v-checkbox"),b=(0,t.up)("v-btn"),_=(0,t.up)("v-form"),y=(0,t.up)("v-card-text"),I=(0,t.up)("v-card"),q=(0,t.up)("v-layout"),W=(0,t.up)("v-progress-linear"),U=(0,t.up)("v-dialog"),S=(0,t.up)("v-navigation-drawer");return(0,t.wg)(),(0,t.iD)("div",null,[e.error?((0,t.wg)(),(0,t.j4)(c,{key:0,type:"error",text:e.error},null,8,["text"])):(0,t.kq)("",!0),(0,t.Wm)(v,{value:e.loading},null,8,["value"]),(0,t.Wm)(I,{loading:e.fetching,class:"pb-5"},{default:(0,t.w5)((()=>[(0,t.Wm)(g,null,{default:(0,t.w5)((()=>[(0,t.Uk)("Server details")])),_:1}),e.serverId?(0,t.kq)("",!0):((0,t.wg)(),(0,t.j4)(h,{key:0},{default:(0,t.w5)((()=>[(0,t.Uk)(" Choose a VPS provider below or connect to a server freshly installed with Ubuntu ")])),_:1})),(0,t.Wm)(y,null,{default:(0,t.w5)((()=>[(0,t.Wm)(f,{items:e.items,"onClick:select":p.getOptions},null,8,["items","onClick:select"]),e.data.provider||e.serverId?((0,t.wg)(),(0,t.j4)(_,{key:0,ref:"form",modelValue:e.valid,"onUpdate:modelValue":a[13]||(a[13]=a=>e.valid=a),class:"mt-5"},{default:(0,t.w5)((()=>[e.unclaimed.length?((0,t.wg)(),(0,t.j4)(k,{key:0,modelValue:e.data.unclaimed,"onUpdate:modelValue":a[0]||(a[0]=a=>e.data.unclaimed=a),items:e.unclaimed,label:"Server"},null,8,["modelValue","items"])):(0,t.kq)("",!0),(0,t.Wm)(w,{modelValue:e.data.name,"onUpdate:modelValue":a[1]||(a[1]=a=>e.data.name=a),label:"Name",rules:[e.rules.required,e.rules.alphanumeric],required:""},null,8,["modelValue","rules"]),"custom"===e.data.provider||this.serverId>0?((0,t.wg)(),(0,t.j4)(w,{key:1,modelValue:e.data.ip,"onUpdate:modelValue":a[2]||(a[2]=a=>e.data.ip=a),rules:[e.rules.required,e.rules.ip],label:"Server IP"},null,8,["modelValue","rules"])):(0,t.kq)("",!0),"custom"===e.data.provider||"vultr"===e.data.provider||e.unclaimed.length?(0,t.kq)("",!0):((0,t.wg)(),(0,t.iD)("div",r,[e.serverId?(0,t.kq)("",!0):((0,t.wg)(),(0,t.j4)(k,{key:0,modelValue:e.data.region,"onUpdate:modelValue":a[3]||(a[3]=a=>e.data.region=a),items:e.regions,label:"Region"},null,8,["modelValue","items"])),e.serverId?(0,t.kq)("",!0):((0,t.wg)(),(0,t.j4)(k,{key:1,modelValue:e.data.type,"onUpdate:modelValue":a[4]||(a[4]=a=>e.data.type=a),items:e.types,label:"Type"},null,8,["modelValue","items"])),!e.serverId&&e.images.length?((0,t.wg)(),(0,t.j4)(k,{key:2,modelValue:e.data.image,"onUpdate:modelValue":a[5]||(a[5]=a=>e.data.image=a),items:e.images,label:"Image"},null,8,["modelValue","items"])):(0,t.kq)("",!0)])),"custom"==e.data.provider||"vultr"==e.data.provider?((0,t.wg)(),(0,t.iD)("div",d,[(0,t.Wm)(w,{disabled:e.serverId>0,modelValue:e.data.hostname,"onUpdate:modelValue":a[6]||(a[6]=a=>e.data.hostname=a),label:"Host name",rules:[e.rules.required],required:""},null,8,["disabled","modelValue","rules"]),"custom"==e.data.provider?((0,t.wg)(),(0,t.iD)("div",o,[(0,t.Wm)(w,{disabled:e.serverId>0,modelValue:e.data.user,"onUpdate:modelValue":a[7]||(a[7]=a=>e.data.user=a),label:"Username",rules:[e.rules.required],required:""},null,8,["disabled","modelValue","rules"]),(0,t.Wm)(w,{type:"password",disabled:e.serverId>0,modelValue:e.data.pass,"onUpdate:modelValue":a[8]||(a[8]=a=>e.data.pass=a),label:"Password",required:""},null,8,["disabled","modelValue"])])):(0,t.kq)("",!0)])):(0,t.kq)("",!0),e.serverId>0||"custom"==e.data.provider?((0,t.wg)(),(0,t.j4)(w,{key:4,modelValue:e.data.port,"onUpdate:modelValue":a[9]||(a[9]=a=>e.data.port=a),label:"Port",required:""},null,8,["modelValue"])):(0,t.kq)("",!0),"custom"===e.data.provider||e.serverId>0?((0,t.wg)(),(0,t.j4)(k,{key:5,modelValue:e.data.dns,"onUpdate:modelValue":a[10]||(a[10]=a=>e.data.dns=a),items:e.dns,label:"DNS provider"},null,8,["modelValue","items"])):(0,t.kq)("",!0),e.data.dns?((0,t.wg)(),(0,t.j4)(k,{key:6,modelValue:e.data.provider_token,"onUpdate:modelValue":a[11]||(a[11]=a=>e.data.provider_token=a),items:e.provider_tokens,label:"DNS provider API token (optional)"},null,8,["modelValue","items"])):(0,t.kq)("",!0),(0,t.Wm)(V,{modelValue:e.data.mailserver,"onUpdate:modelValue":a[12]||(a[12]=a=>e.data.mailserver=a),label:"Mailserver"},null,8,["modelValue"]),(0,t.Wm)(b,{disabled:!e.valid,loading:e.dialog,color:"success",onClick:p.validate},{default:(0,t.w5)((()=>[(0,t.Uk)(" Save ")])),_:1},8,["disabled","loading","onClick"])])),_:1},8,["modelValue"])):(0,t.kq)("",!0)])),_:1})])),_:1},8,["loading"]),(0,t.Wm)(U,{modelValue:e.dialog,"onUpdate:modelValue":a[15]||(a[15]=a=>e.dialog=a),persistent:"",width:"300"},{default:(0,t.w5)((()=>[(0,t.Wm)(I,{color:"primary",dark:""},{default:(0,t.w5)((()=>[(0,t.Wm)(y,null,{default:(0,t.w5)((()=>[(0,t.Wm)(q,{class:"pt-5"},{default:(0,t.w5)((()=>[i,s])),_:1}),(0,t.Wm)(W,{indeterminate:0==e.progress,modelValue:e.progress,"onUpdate:modelValue":a[14]||(a[14]=a=>e.progress=a),color:"white",class:"mb-0"},null,8,["indeterminate","modelValue"]),(0,t._)("div",{innerHTML:e.details},null,8,n)])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(S,{modelValue:e.drawer,"onUpdate:modelValue":a[18]||(a[18]=a=>e.drawer=a),temporary:"",right:"",app:""},{default:(0,t.w5)((()=>[(0,t.Wm)(I,null,{default:(0,t.w5)((()=>[(0,t.Wm)(g,null,{default:(0,t.w5)((()=>[(0,t.Uk)(" API token ")])),_:1}),(0,t.Wm)(y,null,{default:(0,t.w5)((()=>[(0,t.Wm)(w,{modelValue:e.provider_token.label,"onUpdate:modelValue":a[16]||(a[16]=a=>e.provider_token.label=a),label:"Label",required:""},null,8,["modelValue"]),(0,t.Wm)(w,{modelValue:e.provider_token.token,"onUpdate:modelValue":a[17]||(a[17]=a=>e.provider_token.token=a),label:"Token",required:""},null,8,["modelValue"]),(0,t.Wm)(b,{disabled:e.fetching,loading:e.fetching,color:"success",onClick:p.submitToken},{default:(0,t.w5)((()=>[(0,t.Uk)(" Save ")])),_:1},8,["disabled","loading","onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}l(57658);var m=l(1006),p=l(11912),c={components:{Loading:p.Z},data:()=>({fetching:!1,loading:!1,valid:!0,data:{images:[],unclaimed:[],provider:"",name:"New-server",hostname:"",user:"root",pass:"",port:"22",webserver:!0,mailserver:!1},dns:[{title:"Linode",value:"linode"},{title:"Digital Ocean",value:"digitalocean"},{title:"Other",value:""}],provider_tokens:[{title:"Add new",value:"new"}],rules:{alphanumeric:e=>/^[a-zA-Z0-9_-]+$/g.test(e)||"Must contain alphanumeric characters only",required:e=>!!e||"Required.",port:e=>!e||/^\d+(:\d+)?$/.test(e)||"1-65535",ip:e=>!e||/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(e)||"Invalid IP address"},provider_token:{},drawer:!1,dialog:!1,details:"",serverId:0,error:"",progress:0,regions:[],types:[],images:[],unclaimed:[],items:[{title:"Linode",value:"linode",props:{prependIcon:"fab fa-linode"}},{title:"DigitalOcean",value:"digitalocean",props:{prependIcon:"fab fa-digital-ocean"}},{title:"Vultr",value:"vultr",props:{prependIcon:"fas fa-server"}},{title:"Ubuntu server",value:"custom",props:{prependIcon:"fab fa-ubuntu"}}],isOpen:!1,provider:"Choose"}),created(){document.title="Server details",this.$route.params.id&&(this.serverId=this.$route.params.id),this.fetchData(),this.$route.query.ip&&(this.data.hostname=this.$route.query.ip,this.data.provider="vultr",this.provider="vultr")},watch:{"data.provider_token":function(){"new"===this.data.provider_token&&(this.drawer=!0,this.data.provider_token="",this.provider_token["provider"]=this.data.dns)}},methods:{fetchData(){var e=this;this.error="",this.loading=!0,m.Z.get("servers/"+this.serverId).then((function(a){console.log(a),e.serverId&&(e.data=a.data.item)})).catch((function(e){console.log(e)})).finally((function(){e.loading=!1})),m.Z.get("providers/tokens").then((function(a){console.log(a),e.provider_tokens.splice(1),a.data.tokens&&a.data.tokens.forEach((function(a){e.provider_tokens.push({text:a.label,value:a.id})}))})).catch((function(a){e.error=a})).finally((function(){e.loading=!1}))},install(){var e=this;e.dialog=!0,e.details="";var a="servers/"+e.serverId+"/install?webserver=1";e.data.mailserver&&(a+="&mailserver=1"),m.Z.event(a,(a=>{e.details=a.msg+"...",a.progress&&(e.progress=a.progress)}),(a=>{e.error=a}),(()=>{e.dialog=!1,e.error||e.$router.push("/servers/"+e.serverId+"/summary")}))},validate:async function(){var e=this;const{valid:a}=await this.$refs.form.validate();a&&(this.details="",this.dialog=!0,this.error="",e.data.unclaimed>0&&(e.serverId=e.data.unclaimed),console.log("save server"),console.log(e.serverId),e.serverId?m.Z.post("servers/"+e.serverId+"/update",this.data).then((function(){e.install()})).catch((function(e){console.log(e)})):m.Z.post("servers/create",this.data).then((function(a){console.log(a),a.data.success?a.data.id&&(e.serverId=a.data.id,e.serverId&&e.install()):(e.error=a.data.error,e.dialog=!1)})).catch((function(a){console.log(a),e.dialog=!1})))},getOptions(e,a){let l=e.id;if(this.data.provider=l,this.provider=l,"custom"!==l&&"vultr"!==l){var t;a||(t=window.open("loading"));var r=this;this.loading=!0,r.regions=[],r.images=[],r.types=[],r.unclaimed=[],m.Z.post("providers/?cmd=options",{provider:l}).then((function(d){if(console.log(d),d.data.require_auth&&!a){t.location="https://serverwand.com/account/services/"+l;var o=setInterval((function(){if(t.closed)return clearInterval(o),void r.getOptions(e,!0)}),500)}else d.data.require_auth||(t&&t.close(),r.regions=d.data.options.regions,r.images=d.data.options.images,r.types=d.data.options.types,d.data.unclaimed.forEach((e=>{r.unclaimed.push({title:e.label,value:e.id})})))})).catch((function(e){t&&t.close(),console.log(e)})).finally((function(){r.loading=!1}))}},submitToken(){var e=this;m.Z.post("providers/tokens",this.provider_token).then((function(a){a.data.error?e.error=a.data.error:(e.drawer=!1,e.fetchData())})).catch((function(a){e.error=a}))}}},v=l(48118);const g=(0,v.Z)(c,[["render",u]]);var h=g}}]);
//# sourceMappingURL=9710.755bd97a.js.map