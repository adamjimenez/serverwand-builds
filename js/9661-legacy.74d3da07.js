"use strict";(self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[]).push([[9661],{64574:function(e,t,n){n.d(t,{Z:function(){return c}});var o=n(66252),r=n(3577),i=n(49963);function l(e,t,n,l,a,u){var d=(0,o.up)("v-toolbar-title"),c=(0,o.up)("v-toolbar"),s=(0,o.up)("v-card-text"),f=(0,o.up)("v-spacer"),m=(0,o.up)("v-btn"),p=(0,o.up)("v-card-actions"),v=(0,o.up)("v-card"),h=(0,o.up)("v-dialog");return(0,o.wg)(),(0,o.j4)(h,{modelValue:e.dialog,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.dialog=t}),"max-width":e.options.width,style:(0,r.j5)({zIndex:e.options.zIndex}),onKeydown:(0,i.D2)(u.cancel,["esc"]),persistent:""},{default:(0,o.w5)((function(){return[(0,o.Wm)(v,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(c,{dark:"",color:e.options.color,dense:"",flat:""},{default:(0,o.w5)((function(){return[(0,o.Wm)(d,{class:"text-body-2 font-weight-bold grey--text"},{default:(0,o.w5)((function(){return[(0,o.Uk)((0,r.zw)(e.title),1)]})),_:1})]})),_:1},8,["color"]),(0,o.wy)((0,o.Wm)(s,{class:"pa-4 black--text",innerHTML:e.message},null,8,["innerHTML"]),[[i.F8,!!e.message]]),(0,o.Wm)(p,{class:"pt-3"},{default:(0,o.w5)((function(){return[(0,o.Wm)(f),e.options.noconfirm?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(m,{key:0,color:"grey",text:"",class:"body-2 font-weight-bold",onClick:u.cancel},{default:(0,o.w5)((function(){return[(0,o.Uk)("Cancel")]})),_:1},8,["onClick"])),(0,o.Wm)(m,{color:"primary",class:"body-2 font-weight-bold",outlined:"",onClick:u.agree},{default:(0,o.w5)((function(){return[(0,o.Uk)("OK")]})),_:1},8,["onClick"])]})),_:1})]})),_:1})]})),_:1},8,["modelValue","max-width","style","onKeydown"])}n(60228);var a={data:function(){return{dialog:!1,resolve:null,reject:null,message:null,title:null,options:{color:"grey lighten-3",width:400,zIndex:10008,noconfirm:!1}}},methods:{open:function(e,t,n){var o=this;return t||(t=e,e="Confirm"),this.dialog=!0,this.title=e,this.message=t,this.options=Object.assign(this.options,n),new Promise((function(e,t){o.resolve=e,o.reject=t}))},agree:function(){this.resolve(!0),this.dialog=!1},cancel:function(){this.resolve(!1),this.dialog=!1}}},u=n(83744);const d=(0,u.Z)(a,[["render",l]]);var c=d},11297:function(e,t,n){n.d(t,{Z:function(){return u}});var o=n(66252);function r(e,t,n,r,i,l){var a=(0,o.up)("v-icon"),u=(0,o.up)("v-alert"),d=(0,o.up)("v-dialog");return(0,o.wg)(),(0,o.j4)(d,{modelValue:e.show,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.show=t}),persistent:"",width:"600"},{default:(0,o.w5)((function(){return[(0,o.Wm)(u,{title:n.message,color:"primary"},{prepend:(0,o.w5)((function(){return[(0,o.Wm)(a,{icon:"fas fa-magic fa-2x faa-horizontal animated"})]})),_:1},8,["title"])]})),_:1},8,["modelValue"])}var i={name:"Loading",data:function(){return{show:!1}},props:{value:{type:Boolean,default:!1},message:{type:String,default:"Summoning..."}},watch:{value:function(e){this.show=e}}},l=n(83744);const a=(0,l.Z)(i,[["render",r]]);var u=a},29661:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var o=n(66252),r=n(49963);function i(e,t,n,i,l,a){var u=(0,o.up)("v-alert"),d=(0,o.up)("Loading"),c=(0,o.up)("v-btn"),s=(0,o.up)("v-card-actions"),f=(0,o.up)("v-icon"),m=(0,o.up)("v-list-item"),p=(0,o.up)("v-list"),v=(0,o.up)("v-card"),h=(0,o.up)("v-select"),w=(0,o.up)("v-text-field"),g=(0,o.up)("v-card-text"),k=(0,o.up)("v-dialog"),_=(0,o.up)("Confirm");return(0,o.wg)(),(0,o.iD)("div",null,[l.error?((0,o.wg)(),(0,o.j4)(u,{key:0,type:"error",text:l.error},null,8,["text"])):(0,o.kq)("",!0),(0,o.Wm)(d,{value:l.fetching},null,8,["value"]),(0,o.Wm)(v,{class:"mx-auto"},{default:(0,o.w5)((function(){return[(0,o.Wm)(s,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(c,{onClick:t[0]||(t[0]=function(e){return a.addItem()}),icon:"mdi:mdi-plus"})]})),_:1}),(0,o.Wm)(p,{group:"","max-width":"600"},{default:(0,o.w5)((function(){return[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.items,(function(e,t){return(0,o.wg)(),(0,o.j4)(m,{key:"item-".concat(t),value:e,title:e.label},{append:(0,o.w5)((function(){return[(0,o.Wm)(c,{disabled:l.dialog,loading:l.loading===e.id,onClick:(0,r.iM)((function(t){return a.deleteItem(e.id)}),["stop"])},{default:(0,o.w5)((function(){return[(0,o.Wm)(f,{size:"small"},{default:(0,o.w5)((function(){return[(0,o.Uk)("mdi:mdi-delete")]})),_:1})]})),_:2},1032,["disabled","loading","onClick"])]})),_:2},1032,["value","title"])})),128))]})),_:1})]})),_:1}),(0,o.Wm)(k,{modelValue:l.drawer,"onUpdate:modelValue":t[6]||(t[6]=function(e){return l.drawer=e})},{default:(0,o.w5)((function(){return[(0,o.Wm)(v,{title:"API token "},{default:(0,o.w5)((function(){return[(0,o.Wm)(g,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(h,{modelValue:l.provider_token.provider,"onUpdate:modelValue":t[1]||(t[1]=function(e){return l.provider_token.provider=e}),items:l.providers,label:"Provider"},null,8,["modelValue","items"]),(0,o.Wm)(w,{modelValue:l.provider_token.label,"onUpdate:modelValue":t[2]||(t[2]=function(e){return l.provider_token.label=e}),label:"Label",required:""},null,8,["modelValue"]),"nominet"===l.provider_token.provider?((0,o.wg)(),(0,o.j4)(w,{key:0,modelValue:l.provider_token.username,"onUpdate:modelValue":t[3]||(t[3]=function(e){return l.provider_token.username=e}),label:"Username",required:""},null,8,["modelValue"])):(0,o.kq)("",!0),"nominet"===l.provider_token.provider?((0,o.wg)(),(0,o.j4)(w,{key:1,modelValue:l.provider_token.password,"onUpdate:modelValue":t[4]||(t[4]=function(e){return l.provider_token.password=e}),label:"Password",type:"password",required:""},null,8,["modelValue"])):(0,o.kq)("",!0),(0,o.Wm)(w,{modelValue:l.provider_token.token,"onUpdate:modelValue":t[5]||(t[5]=function(e){return l.provider_token.token=e}),label:"Token",required:""},null,8,["modelValue"]),(0,o.Wm)(c,{disabled:!l.provider_token.provider||""==l.provider_token.label||""==l.provider_token.token,loading:l.fetching,color:"success",onClick:a.submitToken},{default:(0,o.w5)((function(){return[(0,o.Uk)(" Save ")]})),_:1},8,["disabled","loading","onClick"])]})),_:1})]})),_:1})]})),_:1},8,["modelValue"]),(0,o.Wm)(_,{ref:"confirm"},null,512)])}var l=n(50124),a=n(48534),u=(n(60228),n(1006)),d=n(11297),c=n(64574),s={components:{Loading:d.Z,Confirm:c.Z},data:function(){return{error:"",data:{label:""},providers:[{title:"Linode",value:"linode"},{title:"Digital Ocean",value:"digitalocean"},{title:"NameSilo",value:"namesilo"},{title:"Nominet",value:"nominet"}],items:[],dialog:!1,details:"",fetching:!0,loading:null,server:{name:""},provider_token:{provider:"",label:"",token:""},drawer:!1}},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;this.error="",this.fetching=!0,u.Z.get("providers/tokens").then((function(t){console.log(t),e.items=t.data.tokens,document.title="Tokens"})).catch((function(t){e.error=t})).finally((function(){e.fetching=!1}))},addItem:function(){this.data.label="",this.drawer=!0},deleteItem:function(){var e=(0,a.Z)((0,l.Z)().mark((function e(t){var n;return(0,l.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$refs.confirm.open("Are you sure you want to delete this item?");case 2:if(e.sent){e.next=4;break}return e.abrupt("return");case 4:n=this,this.error="",this.loading=t,u.Z.post("providers/tokens/"+t,{delete:1}).then((function(e){console.log(e),e.data.error?n.error=e.data.error:n.fetchData()})).catch((function(e){console.log(e)})).finally((function(){n.loading=null}));case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),submitToken:function(){var e=this;u.Z.post("providers/tokens",this.provider_token).then((function(t){t.data.error?e.error=t.data.error:(e.drawer=!1,e.fetchData())})).catch((function(t){e.error=t}))}}},f=n(83744);const m=(0,f.Z)(s,[["render",i]]);var p=m}}]);
//# sourceMappingURL=9661-legacy.74d3da07.js.map