"use strict";(self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[]).push([[6538],{64574:function(n,e,t){t.d(e,{Z:function(){return d}});var i=t(66252),o=t(3577),l=t(49963);function u(n,e,t,u,a,r){var c=(0,i.up)("v-toolbar-title"),d=(0,i.up)("v-toolbar"),s=(0,i.up)("v-card-text"),f=(0,i.up)("v-spacer"),m=(0,i.up)("v-btn"),h=(0,i.up)("v-card-actions"),v=(0,i.up)("v-card"),w=(0,i.up)("v-dialog");return(0,i.wg)(),(0,i.j4)(w,{modelValue:n.dialog,"onUpdate:modelValue":e[0]||(e[0]=function(e){return n.dialog=e}),"max-width":n.options.width,style:(0,o.j5)({zIndex:n.options.zIndex}),onKeydown:(0,l.D2)(r.cancel,["esc"]),persistent:""},{default:(0,i.w5)((function(){return[(0,i.Wm)(v,null,{default:(0,i.w5)((function(){return[(0,i.Wm)(d,{dark:"",color:n.options.color,dense:"",flat:""},{default:(0,i.w5)((function(){return[(0,i.Wm)(c,{class:"text-body-2 font-weight-bold grey--text"},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,o.zw)(n.title),1)]})),_:1})]})),_:1},8,["color"]),(0,i.wy)((0,i.Wm)(s,{class:"pa-4 black--text",innerHTML:n.message},null,8,["innerHTML"]),[[l.F8,!!n.message]]),(0,i.Wm)(h,{class:"pt-3"},{default:(0,i.w5)((function(){return[(0,i.Wm)(f),n.options.noconfirm?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(m,{key:0,color:"grey",text:"",class:"body-2 font-weight-bold",onClick:r.cancel},{default:(0,i.w5)((function(){return[(0,i.Uk)("Cancel")]})),_:1},8,["onClick"])),(0,i.Wm)(m,{color:"primary",class:"body-2 font-weight-bold",outlined:"",onClick:r.agree},{default:(0,i.w5)((function(){return[(0,i.Uk)("OK")]})),_:1},8,["onClick"])]})),_:1})]})),_:1})]})),_:1},8,["modelValue","max-width","style","onKeydown"])}t(60228);var a={data:function(){return{dialog:!1,resolve:null,reject:null,message:null,title:null,options:{color:"grey lighten-3",width:400,zIndex:10008,noconfirm:!1}}},methods:{open:function(n,e,t){var i=this;return e||(e=n,n="Confirm"),this.dialog=!0,this.title=n,this.message=e,this.options=Object.assign(this.options,t),new Promise((function(n,e){i.resolve=n,i.reject=e}))},agree:function(){this.resolve(!0),this.dialog=!1},cancel:function(){this.resolve(!1),this.dialog=!1}}},r=t(83744);const c=(0,r.Z)(a,[["render",u]]);var d=c},11297:function(n,e,t){t.d(e,{Z:function(){return r}});var i=t(66252);function o(n,e,t,o,l,u){var a=(0,i.up)("v-icon"),r=(0,i.up)("v-alert"),c=(0,i.up)("v-dialog");return(0,i.wg)(),(0,i.j4)(c,{modelValue:n.show,"onUpdate:modelValue":e[0]||(e[0]=function(e){return n.show=e}),persistent:"",width:"600"},{default:(0,i.w5)((function(){return[(0,i.Wm)(r,{title:t.message,color:"primary"},{prepend:(0,i.w5)((function(){return[(0,i.Wm)(a,{icon:"fas fa-magic fa-2x faa-horizontal animated"})]})),_:1},8,["title"])]})),_:1},8,["modelValue"])}var l={name:"Loading",data:function(){return{show:!1}},props:{value:{type:Boolean,default:!1},message:{type:String,default:"Summoning..."}},watch:{value:function(n){this.show=n}}},u=t(83744);const a=(0,u.Z)(l,[["render",o]]);var r=a},36538:function(n,e,t){t.r(e),t.d(e,{default:function(){return W}});t(59749),t(86544),t(34284);var i=t(66252),o=t(3577),l=t(49963),u={class:"mt-5"},a=(0,i._)("br",null,null,-1),r=(0,i._)("br",null,null,-1),c=(0,i._)("br",null,null,-1),d=(0,i._)("br",null,null,-1);function s(n,e,t,s,f,m){var h=(0,i.up)("Loading"),v=(0,i.up)("v-btn"),w=(0,i.up)("v-card-actions"),p=(0,i.up)("v-icon"),g=(0,i.up)("v-data-table"),k=(0,i.up)("v-card"),_=(0,i.up)("v-text-field"),W=(0,i.up)("v-col"),y=(0,i.up)("v-row"),b=(0,i.up)("v-container"),U=(0,i.up)("v-form"),V=(0,i.up)("v-card-text"),C=(0,i.up)("v-dialog"),x=(0,i.up)("v-card-title"),z=(0,i.up)("Confirm");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(h,{value:f.loading},null,8,["value"]),(0,i.Wm)(k,{class:"pa-3",loading:f.fetching},{default:(0,i.w5)((function(){return[(0,i.Wm)(w,null,{default:(0,i.w5)((function(){return[(0,i.Wm)(v,{onClick:e[0]||(e[0]=function(n){return m.addItem()}),icon:"mdi:mdi-plus"})]})),_:1}),(0,i.Wm)(g,{headers:f.headers,items:f.invoices,class:"results","mobile-breakpoint":"0","onClick:row":e[1]||(e[1]=function(n,e){m.view(e.item)})},{"item.created":(0,i.w5)((function(n){var e=n.item;return[(0,i.Uk)((0,o.zw)(m.formatDate(e.created)),1)]})),"item.actions":(0,i.w5)((function(n){var e=n.item;return[(0,i.Wm)(v,{icon:"",disabled:f.fetching,loading:f.loading===e.id,onClick:(0,l.iM)((function(n){return m.deleteItem(e)}),["stop"])},{default:(0,i.w5)((function(){return[(0,i.Wm)(p,{size:"small"},{default:(0,i.w5)((function(){return[(0,i.Uk)("mdi:mdi-delete")]})),_:1})]})),_:2},1032,["disabled","loading","onClick"])]})),_:1},8,["headers","items"])]})),_:1},8,["loading"]),(0,i.Wm)(C,{modelValue:f.dialog,"onUpdate:modelValue":e[3]||(e[3]=function(n){return f.dialog=n}),"max-width":"800"},{default:(0,i.w5)((function(){return[(0,i.Wm)(k,{title:"Invoice"},{default:(0,i.w5)((function(){return[(0,i.Wm)(V,null,{default:(0,i.w5)((function(){return[(0,i.Wm)(U,null,{default:(0,i.w5)((function(){return[(0,i.Wm)(b,{fluid:""},{default:(0,i.w5)((function(){return[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(f.data.items,(function(n,t){return(0,i.wg)(),(0,i.j4)(y,{key:t},{default:(0,i.w5)((function(){return[(0,i.Wm)(W,{cols:"12",md:"3"},{default:(0,i.w5)((function(){return[(0,i.Wm)(_,{modelValue:n.domain,"onUpdate:modelValue":function(e){return n.domain=e},label:"Domain",required:""},null,8,["modelValue","onUpdate:modelValue"])]})),_:2},1024),(0,i.Wm)(W,{cols:"12",md:"4"},{default:(0,i.w5)((function(){return[(0,i.Wm)(_,{modelValue:n.description,"onUpdate:modelValue":function(e){return n.description=e},label:"Description",required:""},null,8,["modelValue","onUpdate:modelValue"])]})),_:2},1024),(0,i.Wm)(W,{cols:"12",md:"3"},{default:(0,i.w5)((function(){return[(0,i.Wm)(_,{modelValue:n.amount,"onUpdate:modelValue":function(e){return n.amount=e},label:"Amount",required:""},null,8,["modelValue","onUpdate:modelValue"])]})),_:2},1024),(0,i.Wm)(W,{cols:"12",md:"2"},{default:(0,i.w5)((function(){return[t>0?((0,i.wg)(),(0,i.j4)(v,{key:0,onClick:function(n){return m.removeRow(t)},icon:"fas fa-minus"},null,8,["onClick"])):(0,i.kq)("",!0),t+1===f.data.items.length?((0,i.wg)(),(0,i.j4)(v,{key:1,onClick:e[2]||(e[2]=function(n){return m.addRow()}),icon:"fas fa-plus"})):(0,i.kq)("",!0)]})),_:2},1024)]})),_:2},1024)})),128))]})),_:1})]})),_:1}),(0,i._)("div",u,[(0,i.Wm)(v,{loading:f.loading,color:"success",onClick:m.saveItem},{default:(0,i.w5)((function(){return[(0,i.Uk)(" Save ")]})),_:1},8,["loading","onClick"])])]})),_:1})]})),_:1})]})),_:1},8,["modelValue"]),(0,i.Wm)(C,{modelValue:f.dialogInvoice,"onUpdate:modelValue":e[4]||(e[4]=function(n){return f.dialogInvoice=n}),"max-width":"800"},{default:(0,i.w5)((function(){return[(0,i.Wm)(k,null,{default:(0,i.w5)((function(){return[(0,i.Wm)(x,null,{default:(0,i.w5)((function(){return[(0,i.Uk)(" Invoice "+(0,o.zw)(f.invoice_id),1)]})),_:1}),(0,i.Wm)(V,null,{default:(0,i.w5)((function(){return[(0,i.Wm)(U,null,{default:(0,i.w5)((function(){return[(0,i.Wm)(b,null,{default:(0,i.w5)((function(){return[(0,i._)("div",null,[(0,i.Uk)((0,o.zw)(f.invoice.company),1),a,(0,i.Uk)(" "+(0,o.zw)(f.invoice.name)+" "+(0,o.zw)(f.invoice.surnname),1),r,(0,i.Uk)(" "+(0,o.zw)(f.invoice.address),1),c,(0,i.Uk)(" "+(0,o.zw)(f.invoice.city),1),d,(0,i.Uk)(" "+(0,o.zw)(f.invoice.postcode),1)]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(f.invoice.items,(function(n,e){return(0,i.wg)(),(0,i.j4)(y,{key:e},{default:(0,i.w5)((function(){return[(0,i.Wm)(W,{cols:"12",md:"3"},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,o.zw)(n.domain),1)]})),_:2},1024),(0,i.Wm)(W,{cols:"12",md:"3"},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,o.zw)(n.description),1)]})),_:2},1024),(0,i.Wm)(W,{cols:"12",md:"3"},{default:(0,i.w5)((function(){return[(0,i.Uk)(" £"+(0,o.zw)(n.amount),1)]})),_:2},1024)]})),_:2},1024)})),128)),(0,i.Wm)(y,null,{default:(0,i.w5)((function(){return[(0,i.Wm)(W,{cols:"12",md:"3"}),(0,i.Wm)(W,{cols:"12",md:"3"},{default:(0,i.w5)((function(){return[(0,i.Uk)(" Total: ")]})),_:1}),(0,i.Wm)(W,{cols:"12",md:"3"},{default:(0,i.w5)((function(){return[(0,i.Uk)(" £"+(0,o.zw)(f.invoice.total),1)]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1},8,["modelValue"]),(0,i.Wm)(z,{ref:"confirm"},null,512)])}var f=t(50124),m=t(48534),h=(t(60228),t(70560),t(62506),t(1006)),v=t(11297),w=t(64574),p=t(72564),g={components:{Loading:v.Z,Confirm:w.Z},data:function(){return{fetching:!1,loading:null,id:null,error:null,data:{items:[{}]},invoice:{},invoices:[],dialog:!1,dialogInvoice:!1,invoice_id:null,details:"",rules:{required:function(n){return!!n||"Required."},min:function(n){return n.length>=8||"Min 8 characters"}},domain:{name:""},headers:[{title:"Invoice ",key:"id"},{title:"Date ",key:"created"},{title:"Total ",key:"total"},{title:"Status ",key:"payment_status",class:"d-none d-sm-table-cell",cellClass:"d-none d-sm-table-cell"},{title:" ",key:"actions"}]}},created:function(){this.id=this.$route.params.id,this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var n=this;this.error="",this.fetching=!0,h.Z.get("users/"+this.id+"/invoices").then((function(e){console.log(e),n.invoices=e.data.invoices,document.title="Invoices"})).catch((function(n){console.log(n)})).finally((function(){n.fetching=!1}))},addItem:function(){this.domain.name="",this.dialog=!0},saveItem:function(){var n=this;this.data.items.length&&(this.details="",this.dialog=!0,this.error="",h.Z.post("users/"+this.id+"/invoices",this.data).then((function(e){console.log(e),e.data.success?(n.data.invoice="",n.dialog=!1,n.fetchData()):n.error=e.data.error})).catch((function(n){console.log(n)})))},deleteItem:function(){var n=(0,m.Z)((0,f.Z)().mark((function n(e){var t;return(0,f.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,this.$refs.confirm.open("Delete "+e.id);case 2:if(n.sent){n.next=4;break}return n.abrupt("return");case 4:t=this,this.error="",this.dialog=!0,this.loading=e.id,h.Z.post("users/"+this.id+"/invoices",{delete:1,invoice:e.id}).then((function(n){console.log(n),n.data.error?t.error=n.data.error:t.fetchData()})).catch((function(n){console.log(n)})).finally((function(){t.dialog=!1,t.loading=null}));case 9:case"end":return n.stop()}}),n,this)})));function e(e){return n.apply(this,arguments)}return e}(),addRow:function(){this.data.items.push({})},removeRow:function(n){this.data.items.splice(n,1)},view:function(n){this.invoice_id=n.id;var e=this;e.fetching=!0,h.Z.get("users/"+this.id+"/invoices/"+this.invoice_id).then((function(n){e.invoice=n.data.invoice,e.dialogInvoice=!0})).catch((function(n){console.log(n)})).finally((function(){e.fetching=!1}))},formatDate:function(n){return p.Z.formatDate(n)}}},k=t(83744);const _=(0,k.Z)(g,[["render",s]]);var W=_},98494:function(n,e,t){var i=t(23691),o=TypeError;n.exports=function(n,e){if(!delete n[e])throw new o("Cannot delete property "+i(e)+" of "+i(n))}},62506:function(n,e,t){var i=t(79989),o=t(90690),l=t(27578),u=t(68700),a=t(6310),r=t(5649),c=t(55565),d=t(27120),s=t(76522),f=t(98494),m=t(29042),h=m("splice"),v=Math.max,w=Math.min;i({target:"Array",proto:!0,forced:!h},{splice:function(n,e){var t,i,m,h,p,g,k=o(this),_=a(k),W=l(n,_),y=arguments.length;for(0===y?t=i=0:1===y?(t=0,i=_-W):(t=y-2,i=w(v(u(e),0),_-W)),c(_+t-i),m=d(k,i),h=0;h<i;h++)p=W+h,p in k&&s(m,h,k[p]);if(m.length=i,t<i){for(h=W;h<_-i;h++)p=h+i,g=h+t,p in k?k[g]=k[p]:f(k,g);for(h=_;h>_-i+t;h--)f(k,h-1)}else if(t>i)for(h=_-i;h>W;h--)p=h+i-1,g=h+t-1,p in k?k[g]=k[p]:f(k,g);for(h=0;h<t;h++)k[h+W]=arguments[h+2];return r(k,_-i+t),m}})}}]);
//# sourceMappingURL=6538-legacy.61b664c2.js.map