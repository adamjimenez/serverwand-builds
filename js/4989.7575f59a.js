"use strict";(self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[]).push([[4989],{64574:function(e,t,o){o.d(t,{Z:function(){return c}});var a=o(66252),r=o(3577),l=o(49963);function n(e,t,o,n,i,d){const s=(0,a.up)("v-toolbar-title"),c=(0,a.up)("v-toolbar"),u=(0,a.up)("v-card-text"),m=(0,a.up)("v-spacer"),h=(0,a.up)("v-btn"),p=(0,a.up)("v-card-actions"),f=(0,a.up)("v-card"),g=(0,a.up)("v-dialog");return(0,a.wg)(),(0,a.j4)(g,{modelValue:e.dialog,"onUpdate:modelValue":t[0]||(t[0]=t=>e.dialog=t),"max-width":e.options.width,style:(0,r.j5)({zIndex:e.options.zIndex}),onKeydown:(0,l.D2)(d.cancel,["esc"]),persistent:""},{default:(0,a.w5)((()=>[(0,a.Wm)(f,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c,{dark:"",color:e.options.color,dense:"",flat:""},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{class:"text-body-2 font-weight-bold grey--text"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.title),1)])),_:1})])),_:1},8,["color"]),(0,a.wy)((0,a.Wm)(u,{class:"pa-4 black--text",innerHTML:e.message},null,8,["innerHTML"]),[[l.F8,!!e.message]]),(0,a.Wm)(p,{class:"pt-3"},{default:(0,a.w5)((()=>[(0,a.Wm)(m),e.options.noconfirm?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(h,{key:0,color:"grey",text:"",class:"body-2 font-weight-bold",onClick:d.cancel},{default:(0,a.w5)((()=>[(0,a.Uk)("Cancel")])),_:1},8,["onClick"])),(0,a.Wm)(h,{color:"primary",class:"body-2 font-weight-bold",outlined:"",onClick:d.agree},{default:(0,a.w5)((()=>[(0,a.Uk)("OK")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue","max-width","style","onKeydown"])}var i={data:function(){return{dialog:!1,resolve:null,reject:null,message:null,title:null,options:{color:"grey lighten-3",width:400,zIndex:10008,noconfirm:!1}}},methods:{open(e,t,o){return t||(t=e,e="Confirm"),this.dialog=!0,this.title=e,this.message=t,this.options=Object.assign(this.options,o),new Promise(((e,t)=>{this.resolve=e,this.reject=t}))},agree(){this.resolve(!0),this.dialog=!1},cancel(){this.resolve(!1),this.dialog=!1}}},d=o(83744);const s=(0,d.Z)(i,[["render",n]]);var c=s},11297:function(e,t,o){o.d(t,{Z:function(){return d}});var a=o(66252);function r(e,t,o,r,l,n){const i=(0,a.up)("v-icon"),d=(0,a.up)("v-alert"),s=(0,a.up)("v-dialog");return(0,a.wg)(),(0,a.j4)(s,{modelValue:e.show,"onUpdate:modelValue":t[0]||(t[0]=t=>e.show=t),persistent:"",width:"600"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{title:o.message,color:"primary"},{prepend:(0,a.w5)((()=>[(0,a.Wm)(i,{icon:"fas fa-magic fa-2x faa-horizontal animated"})])),_:1},8,["title"])])),_:1},8,["modelValue"])}var l={name:"Loading",data:()=>({show:!1}),props:{value:{type:Boolean,default:!1},message:{type:String,default:"Summoning..."}},watch:{value:function(e){this.show=e}}},n=o(83744);const i=(0,n.Z)(l,[["render",r]]);var d=i},47713:function(e,t,o){o.d(t,{Z:function(){return c}});var a=o(66252),r=o(3577),l=o(49963);function n(e,t,o,n,i,d){const s=(0,a.up)("v-toolbar-title"),c=(0,a.up)("v-toolbar"),u=(0,a.up)("v-card-text"),m=(0,a.up)("v-spacer"),h=(0,a.up)("v-btn"),p=(0,a.up)("v-card-actions"),f=(0,a.up)("v-card"),g=(0,a.up)("v-dialog");return(0,a.wg)(),(0,a.j4)(g,{modelValue:e.dialog,"onUpdate:modelValue":t[0]||(t[0]=t=>e.dialog=t),"max-width":e.options.width,style:(0,r.j5)({zIndex:e.options.zIndex}),onKeydown:(0,l.D2)(d.cancel,["esc"]),persistent:""},{default:(0,a.w5)((()=>[(0,a.Wm)(f,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c,{dark:"",color:e.options.color,dense:"",flat:""},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{class:"text-body-2 font-weight-bold grey--text"},{default:(0,a.w5)((()=>[(0,a.Uk)(" Permission Required ")])),_:1})])),_:1},8,["color"]),(0,a.wy)((0,a.Wm)(u,{class:"pa-4 black--text",innerHTML:e.message},null,8,["innerHTML"]),[[l.F8,!!e.message]]),(0,a.Wm)(p,{class:"pt-3"},{default:(0,a.w5)((()=>[(0,a.Wm)(m),e.options.noconfirm?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(h,{key:0,color:"grey",text:"",class:"body-2 font-weight-bold",onClick:d.cancel},{default:(0,a.w5)((()=>[(0,a.Uk)("Cancel")])),_:1},8,["onClick"])),(0,a.Wm)(h,{color:"primary",class:"body-2 font-weight-bold",outlined:"",onClick:d.open},{default:(0,a.w5)((()=>[(0,a.Uk)("Review Permissions")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue","max-width","style","onKeydown"])}var i={data:function(){return{provider:null,dialog:!1,resolve:null,reject:null,message:null,title:null,options:{color:"grey lighten-3",width:400,zIndex:10008,noconfirm:!1},window:null,timeout:null}},methods:{check(e){if("auth"===e.error)return this.provider=e.provider,this.dialog=!0,new Promise(((e,t)=>{this.resolve=e,this.reject=t}))},agree(){this.resolve(!0),this.dialog=!1},cancel(){this.resolve(!1),this.dialog=!1},open(){var e=this,t=window.open("https://serverwand.com/account/services/"+this.provider);function o(){if(clearTimeout(e.timer),t.closed)return e.agree();e.timer=setTimeout(o,1e3)}o()}}},d=o(83744);const s=(0,d.Z)(i,[["render",n]]);var c=s},44989:function(e,t,o){o.r(t),o.d(t,{default:function(){return f}});var a=o(66252),r=o(3577),l=o(49963);const n={key:0};function i(e,t,o,i,d,s){const c=(0,a.up)("v-alert"),u=(0,a.up)("Loading"),m=(0,a.up)("v-btn"),h=(0,a.up)("v-data-table"),p=(0,a.up)("v-card-actions"),f=(0,a.up)("v-card"),g=(0,a.up)("v-select"),w=(0,a.up)("v-text-field"),v=(0,a.up)("v-card-text"),y=(0,a.up)("v-dialog"),k=(0,a.up)("Confirm"),b=(0,a.up)("OAuth");return(0,a.wg)(),(0,a.iD)("div",null,[d.error?((0,a.wg)(),(0,a.j4)(c,{key:0,type:"error",text:d.error},null,8,["text"])):(0,a.kq)("",!0),(0,a.Wm)(u,{value:d.loading},null,8,["value"]),(0,a.Wm)(h,{headers:d.headers,items:d.data.records,class:"results"},{"item.type":(0,a.w5)((({item:e})=>[(0,a._)("span",null,(0,r.zw)(e.type),1)])),"item.priority":(0,a.w5)((({item:e})=>["MX"===e.type?((0,a.wg)(),(0,a.iD)("span",n,(0,r.zw)(e.priority),1)):(0,a.kq)("",!0)])),"item.actions":(0,a.w5)((({item:e})=>[(0,a.Wm)(m,{size:"small",onClick:(0,l.iM)((t=>s.deleteItem(e)),["stop"]),loading:d.loading===e.id,icon:"mdi:mdi-delete"},null,8,["onClick","loading"])])),_:1},8,["headers","items"]),(0,a.Wm)(f,null,{default:(0,a.w5)((()=>[(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m,{onClick:t[0]||(t[0]=e=>s.addItem())},{default:(0,a.w5)((()=>[(0,a.Uk)(" Add DNS Record ")])),_:1})])),_:1})])),_:1}),(0,a.Wm)(y,{modelValue:d.drawer,"onUpdate:modelValue":t[5]||(t[5]=e=>d.drawer=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{title:"DNS Record"},{default:(0,a.w5)((()=>[(0,a.Wm)(v,null,{default:(0,a.w5)((()=>[(0,a.Wm)(g,{items:d.recordType,label:"Type",modelValue:d.record.type,"onUpdate:modelValue":t[1]||(t[1]=e=>d.record.type=e)},null,8,["items","modelValue"]),(0,a.Wm)(w,{modelValue:d.record.name,"onUpdate:modelValue":t[2]||(t[2]=e=>d.record.name=e),label:"Hostname",required:""},null,8,["modelValue"]),(0,a.Wm)(w,{modelValue:d.record.target,"onUpdate:modelValue":t[3]||(t[3]=e=>d.record.target=e),label:"Target",required:""},null,8,["modelValue"]),"MX"===d.record.type?((0,a.wg)(),(0,a.j4)(w,{key:0,modelValue:d.record.priority,"onUpdate:modelValue":t[4]||(t[4]=e=>d.record.priority=e),label:"Priority",required:""},null,8,["modelValue"])):(0,a.kq)("",!0),(0,a.Wm)(m,{disabled:d.fetching,loading:d.fetching,color:"success",onClick:s.submitItem},{default:(0,a.w5)((()=>[(0,a.Uk)(" Save ")])),_:1},8,["disabled","loading","onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(k,{ref:"confirm"},null,512),(0,a.Wm)(b,{ref:"oauth"},null,512)])}var d=o(1006),s=o(11297),c=o(64574),u=o(47713),m={components:{Loading:s.Z,Confirm:c.Z,OAuth:u.Z},data(){return{domainId:null,post:null,error:null,data:{records:[]},details:"",loading:null,fetching:!1,rules:{required:e=>!!e||"Required.",min:e=>e.length>=8||"Min 8 characters",emailMatch:()=>"The email and password you entered don't match"},record:{},recordType:["A","CNAME","MX","TXT","SRV","NS"],drawer:!1,headers:[{title:"Type ",key:"type"},{title:"Name ",key:"name"},{title:"Target ",key:"target"},{title:"Priority ",key:"priority"},{title:"",key:"actions",sortable:!1}]}},created(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData(){var e=this;this.error="",this.domainId=this.$route.params.id,this.fetching=!0,d.Z.get("domains/"+this.domainId+"/records").then((async function(t){switch(console.log(t),await e.$refs.oauth.check(t.data)){case!0:return e.fetchData();case!1:return}e.data=t.data,document.title="DNS | "+e.data.item.domain,e.error=t.data.error})).catch((function(e){console.log(e)})).finally((function(){e.fetching=!1}))},addItem(){this.record={},this.drawer=!0},submitItem(){this.saveItem()},saveItem(){var e=this;if(this.record.type){this.details="",this.fetching=!0,this.error="";var t="domains/"+this.domainId+"/records";this.record.id&&(t+="/"+this.record.id),d.Z.post(t,this.record).then((async function(t){switch(console.log(t),await e.$refs.oauth.check(t.data)){case!0:return e.saveItem();case!1:return}t.data.success?(e.drawer=!1,e.fetchData()):e.error=t.data.error})).catch((function(t){console.log(t),e.fetching=!1})).finally((function(){e.fetching=!1}))}},editItem(e){this.record=JSON.parse(JSON.stringify(e)),this.drawer=!0},deleteItem:async function(e){if(await this.$refs.confirm.open("Delete record?")){this.loading=e.id,this.error="";var t=this;d.Z.post("domains/"+this.domainId+"/records/"+e.id,{delete:1}).then((function(e){console.log(e),e.data.success?t.fetchData():t.error=e.data.error})).catch((function(e){console.log(e)})).finally((function(){t.loading=null}))}}}},h=o(83744);const p=(0,h.Z)(m,[["render",i]]);var f=p}}]);
//# sourceMappingURL=4989.7575f59a.js.map