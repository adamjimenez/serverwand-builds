"use strict";(self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[]).push([[9941],{90947:function(t,e,n){n.d(e,{Z:function(){return d}});var a=n(66252),o=n(3577),i=n(49963);function r(t,e,n,r,u,l){var c=(0,a.up)("v-toolbar-title"),d=(0,a.up)("v-toolbar"),s=(0,a.up)("v-card-text"),f=(0,a.up)("v-spacer"),m=(0,a.up)("v-btn"),h=(0,a.up)("v-card-actions"),p=(0,a.up)("v-card"),g=(0,a.up)("v-dialog");return(0,a.wg)(),(0,a.j4)(g,{modelValue:t.dialog,"onUpdate:modelValue":e[0]||(e[0]=function(e){return t.dialog=e}),"max-width":t.options.width,style:(0,o.j5)({zIndex:t.options.zIndex}),onKeydown:(0,i.D2)(l.cancel,["esc"]),persistent:""},{default:(0,a.w5)((function(){return[(0,a.Wm)(p,null,{default:(0,a.w5)((function(){return[(0,a.Wm)(d,{dark:"",color:t.options.color,dense:"",flat:""},{default:(0,a.w5)((function(){return[(0,a.Wm)(c,{class:"text-body-2 font-weight-bold grey--text"},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,o.zw)(t.title),1)]})),_:1})]})),_:1},8,["color"]),(0,a.wy)((0,a.Wm)(s,{class:"pa-4 black--text",innerHTML:t.message},null,8,["innerHTML"]),[[i.F8,!!t.message]]),(0,a.Wm)(h,{class:"pt-3"},{default:(0,a.w5)((function(){return[(0,a.Wm)(f),t.options.noconfirm?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(m,{key:0,color:"grey",text:"",class:"body-2 font-weight-bold",onClick:l.cancel},{default:(0,a.w5)((function(){return[(0,a.Uk)("Cancel")]})),_:1},8,["onClick"])),(0,a.Wm)(m,{color:"primary",class:"body-2 font-weight-bold",outlined:"",onClick:l.agree},{default:(0,a.w5)((function(){return[(0,a.Uk)("OK")]})),_:1},8,["onClick"])]})),_:1})]})),_:1})]})),_:1},8,["modelValue","max-width","style","onKeydown"])}n(41539);var u={data:function(){return{dialog:!1,resolve:null,reject:null,message:null,title:null,options:{color:"grey lighten-3",width:400,zIndex:1008,noconfirm:!1}}},methods:{open:function(t,e,n){var a=this;return this.dialog=!0,this.title=t,this.message=e,this.options=Object.assign(this.options,n),new Promise((function(t,e){a.resolve=t,a.reject=e}))},agree:function(){this.resolve(!0),this.dialog=!1},cancel:function(){this.resolve(!1),this.dialog=!1}}},l=n(48118);const c=(0,l.Z)(u,[["render",r]]);var d=c},48236:function(t,e,n){n.d(e,{Z:function(){return s}});var a=n(66252),o=n(3577),i=(0,a._)("i",{class:"fas fa-magic fa-2x faa-horizontal animated"},null,-1),r={style:{"margin-left":"10px"}};function u(t,e,n,u,l,c){var d=(0,a.up)("v-layout"),s=(0,a.up)("v-card-text"),f=(0,a.up)("v-card"),m=(0,a.up)("v-container"),h=(0,a.up)("v-dialog");return(0,a.wg)(),(0,a.j4)(h,{modelValue:t.show,"onUpdate:modelValue":e[0]||(e[0]=function(e){return t.show=e}),persistent:"",content:"","content-class":"centered-dialog"},{default:(0,a.w5)((function(){return[(0,a.Wm)(m,{"fill-height":""},{default:(0,a.w5)((function(){return[(0,a.Wm)(f,{color:"primary",dark:""},{default:(0,a.w5)((function(){return[(0,a.Wm)(s,null,{default:(0,a.w5)((function(){return[(0,a.Wm)(d,{row:""},{default:(0,a.w5)((function(){return[i,(0,a._)("h2",r,(0,o.zw)(n.message),1)]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1},8,["modelValue"])}var l={name:"Loading",data:function(){return{show:!1}},props:{value:{type:Boolean,default:!1},message:{type:String,default:"Summoning..."}},watch:{value:function(t){this.show=t}}},c=n(48118);const d=(0,c.Z)(l,[["render",u]]);var s=d},49941:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var a=n(66252),o=n(3577);function i(t,e,n,i,r,u){var l=(0,a.up)("Loading"),c=(0,a.up)("v-icon"),d=(0,a.up)("v-btn"),s=(0,a.up)("v-data-table"),f=(0,a.up)("v-card"),m=(0,a.up)("v-card-title"),h=(0,a.up)("v-text-field"),p=(0,a.up)("v-select"),g=(0,a.up)("v-card-text"),w=(0,a.up)("v-dialog"),v=(0,a.up)("Confirm");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(l,{value:r.loading},null,8,["value"]),(0,a.Wm)(f,{class:"pa-3",loading:r.fetching},{default:(0,a.w5)((function(){return[(0,a.Wm)(s,{headers:r.headers,items:r.subscriptions,class:"results","mobile-breakpoint":"0","onClick:row":u.editItem},{"item.created":(0,a.w5)((function(t){var e=t.item;return[(0,a.Uk)((0,o.zw)(u.formatDate(e.created)),1)]})),"item.actions":(0,a.w5)((function(t){var e=t.item;return[(0,a.Wm)(d,{icon:"",disabled:r.fetching,loading:r.fetching,onClick:function(t){return u.deleteItem(e.id)}},{default:(0,a.w5)((function(){return[(0,a.Wm)(c,{small:""},{default:(0,a.w5)((function(){return[(0,a.Uk)("delete")]})),_:1})]})),_:2},1032,["disabled","loading","onClick"])]})),_:1},8,["headers","items","onClick:row"])]})),_:1},8,["loading"]),(0,a.Wm)(f,null,{default:(0,a.w5)((function(){return[(0,a._)("div",null,[(0,a.Wm)(m,{"primary-title":""},{default:(0,a.w5)((function(){return[(0,a.Wm)(d,{onClick:e[0]||(e[0]=function(t){return u.addItem()})},{default:(0,a.w5)((function(){return[(0,a.Uk)(" Add subscription ")]})),_:1})]})),_:1})])]})),_:1}),(0,a.Wm)(w,{modelValue:r.drawer,"onUpdate:modelValue":e[3]||(e[3]=function(t){return r.drawer=t})},{default:(0,a.w5)((function(){return[(0,a.Wm)(f,null,{default:(0,a.w5)((function(){return[(0,a.Wm)(m,null,{default:(0,a.w5)((function(){return[(0,a.Uk)(" Subscription ")]})),_:1}),(0,a.Wm)(g,null,{default:(0,a.w5)((function(){return[(0,a.Wm)(h,{modelValue:r.data.domain,"onUpdate:modelValue":e[1]||(e[1]=function(t){return r.data.domain=t}),label:"Domain",required:""},null,8,["modelValue"]),(0,a.Wm)(p,{modelValue:r.data.product,"onUpdate:modelValue":e[2]||(e[2]=function(t){return r.data.product=t}),items:r.products,label:"Product"},null,8,["modelValue","items"]),(0,a.Wm)(d,{disabled:!r.data.domain||!r.data.product,loading:r.loading,color:"success",onClick:u.saveItem},{default:(0,a.w5)((function(){return[(0,a.Uk)(" Save ")]})),_:1},8,["disabled","loading","onClick"])]})),_:1})]})),_:1})]})),_:1},8,["modelValue"]),(0,a.Wm)(v,{ref:"confirm"},null,512)])}var r=n(6835),u=n(48534),l=(n(41539),n(54747),n(68309),n(38862),n(1006)),c=n(48236),d=n(90947),s=n(72564),f={components:{Loading:c.Z,Confirm:d.Z},data:function(){return{fetching:!1,loading:!1,id:null,error:null,data:{},subscriptions:[],dialog:!1,details:"",rules:{required:function(t){return!!t||"Required."},min:function(t){return t.length>=8||"Min 8 characters"}},domain:{name:""},drawer:!1,products:[],headers:[{title:"Domain",key:"domain"},{title:"Name",key:"name"},{title:"Created",key:"created",class:"d-none d-sm-table-cell",cellClass:"d-none d-sm-table-cell"}]}},created:function(){this.id=this.$route.params.id,this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;this.error="",this.fetching=!0,l.Z.get("users/"+this.id+"/subscriptions").then((function(e){console.log(e),t.subscriptions=e.data.subscriptions,document.title="Subscriptions"})).catch((function(t){console.log(t)})).finally((function(){t.fetching=!1})),l.Z.get("settings/products").then((function(e){console.log(e),e.data.products.forEach((function(e){t.products.push({title:e.name,value:e.id})}))})).catch((function(e){t.error=e})).finally((function(){t.fetching=!1}))},addItem:function(){this.data={},this.drawer=!0},editItem:function(t){this.data=JSON.parse(JSON.stringify(t)),this.drawer=!0},saveItem:function(){var t=this;if(this.data.product){this.details="",this.dialog=!0,this.error="";var e="users/"+this.id+"/subscriptions";this.data.id&&(e+="/"+this.data.id),l.Z.post(e,this.data).then((function(e){console.log(e),e.data.success?(t.data.subscription="",t.drawer=!1,t.fetchData()):t.error=e.data.error})).catch((function(e){console.log(e),t.dialog=!1})).finally((function(){t.dialog=!1}))}},deleteItem:function(){var t=(0,u.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$refs.confirm.open("Confirm","Delete "+e.id);case 2:if(!t.sent){t.next=8;break}n=this,this.error="",this.dialog=!0,this.loading=!0,l.Z.post("users/"+this.id+"/subscriptions/"+e.id,{delete:1}).then((function(t){console.log(t),t.data.error?n.error=t.data.error:n.fetchData()})).catch((function(t){console.log(t)})).finally((function(){n.dialog=!1,n.loading=!1}));case 8:case 9:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),formatDate:function(t){return s.Z.formatDate(t)}}},m=n(48118);const h=(0,m.Z)(f,[["render",i]]);var p=h}}]);
//# sourceMappingURL=9941-legacy.a7297eb7.js.map