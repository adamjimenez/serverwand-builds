"use strict";(self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[]).push([[6260,6663],{26301:function(e,t,o){o.d(t,{A:function(){return c}});var r=o(20641),i=o(90033),a=o(53751);function l(e,t,o,l,n,d){const s=(0,r.g2)("v-toolbar-title"),c=(0,r.g2)("v-toolbar"),u=(0,r.g2)("v-card-text"),h=(0,r.g2)("v-spacer"),m=(0,r.g2)("v-btn"),g=(0,r.g2)("v-card-actions"),p=(0,r.g2)("v-card"),f=(0,r.g2)("v-dialog");return(0,r.uX)(),(0,r.Wv)(f,{modelValue:e.dialog,"onUpdate:modelValue":t[0]||(t[0]=t=>e.dialog=t),"max-width":e.options.width,style:(0,i.Tr)({zIndex:e.options.zIndex}),onKeydown:(0,a.jR)(d.cancel,["esc"]),persistent:""},{default:(0,r.k6)((()=>[(0,r.bF)(p,null,{default:(0,r.k6)((()=>[(0,r.bF)(c,{dark:"",color:e.options.color,dense:"",flat:""},{default:(0,r.k6)((()=>[(0,r.bF)(s,{class:"text-body-2 font-weight-bold grey--text"},{default:(0,r.k6)((()=>[(0,r.eW)((0,i.v_)(e.title),1)])),_:1})])),_:1},8,["color"]),(0,r.bo)((0,r.bF)(u,{class:"pa-4 black--text",innerHTML:e.message},null,8,["innerHTML"]),[[a.aG,!!e.message]]),(0,r.bF)(g,{class:"pt-3"},{default:(0,r.k6)((()=>[(0,r.bF)(h),e.options.noconfirm?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.Wv)(m,{key:0,color:"grey",text:"",class:"body-2 font-weight-bold",onClick:d.cancel},{default:(0,r.k6)((()=>t[1]||(t[1]=[(0,r.eW)("Cancel")]))),_:1},8,["onClick"])),(0,r.bF)(m,{color:"primary",class:"body-2 font-weight-bold",outlined:"",onClick:d.agree},{default:(0,r.k6)((()=>t[2]||(t[2]=[(0,r.eW)("OK")]))),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue","max-width","style","onKeydown"])}var n={data:function(){return{dialog:!1,resolve:null,reject:null,message:null,title:null,options:{color:"grey lighten-3",width:400,zIndex:10008,noconfirm:!1}}},methods:{open(e,t,o){return t||(t=e,e="Confirm"),this.dialog=!0,this.title=e,this.message=t,this.options=Object.assign(this.options,o),new Promise(((e,t)=>{this.resolve=e,this.reject=t}))},agree(){this.resolve(!0),this.dialog=!1},cancel(){this.resolve(!1),this.dialog=!1}}},d=o(66262);const s=(0,d.A)(n,[["render",l]]);var c=s},81815:function(e,t,o){o.d(t,{A:function(){return d}});var r=o(20641);function i(e,t,o,i,a,l){const n=(0,r.g2)("v-icon"),d=(0,r.g2)("v-alert"),s=(0,r.g2)("v-dialog");return(0,r.uX)(),(0,r.Wv)(s,{modelValue:e.show,"onUpdate:modelValue":t[0]||(t[0]=t=>e.show=t),persistent:"",width:"600"},{default:(0,r.k6)((()=>[(0,r.bF)(d,{title:o.message,color:"primary"},{prepend:(0,r.k6)((()=>[(0,r.bF)(n,{icon:"fas fa-magic fa-2x faa-horizontal animated"})])),_:1},8,["title"])])),_:1},8,["modelValue"])}var a={name:"Loading",data:()=>({show:!1}),props:{value:{type:Boolean,default:!1},message:{type:String,default:"Summoning..."}},watch:{value:function(e){this.show=e}}},l=o(66262);const n=(0,l.A)(a,[["render",i]]);var d=n},9427:function(e,t,o){o.d(t,{A:function(){return c}});var r=o(20641),i=o(90033),a=o(53751);function l(e,t,o,l,n,d){const s=(0,r.g2)("v-toolbar-title"),c=(0,r.g2)("v-toolbar"),u=(0,r.g2)("v-card-text"),h=(0,r.g2)("v-spacer"),m=(0,r.g2)("v-btn"),g=(0,r.g2)("v-card-actions"),p=(0,r.g2)("v-card"),f=(0,r.g2)("v-dialog");return(0,r.uX)(),(0,r.Wv)(f,{modelValue:e.dialog,"onUpdate:modelValue":t[0]||(t[0]=t=>e.dialog=t),"max-width":e.options.width,style:(0,i.Tr)({zIndex:e.options.zIndex}),onKeydown:(0,a.jR)(d.cancel,["esc"]),persistent:""},{default:(0,r.k6)((()=>[(0,r.bF)(p,null,{default:(0,r.k6)((()=>[(0,r.bF)(c,{dark:"",color:e.options.color,dense:"",flat:""},{default:(0,r.k6)((()=>[(0,r.bF)(s,{class:"text-body-2 font-weight-bold grey--text"},{default:(0,r.k6)((()=>t[1]||(t[1]=[(0,r.eW)(" Permission Required ")]))),_:1})])),_:1},8,["color"]),(0,r.bo)((0,r.bF)(u,{class:"pa-4 black--text",innerHTML:e.message},null,8,["innerHTML"]),[[a.aG,!!e.message]]),(0,r.bF)(g,{class:"pt-3"},{default:(0,r.k6)((()=>[(0,r.bF)(h),e.options.noconfirm?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.Wv)(m,{key:0,color:"grey",text:"",class:"body-2 font-weight-bold",onClick:d.cancel},{default:(0,r.k6)((()=>t[2]||(t[2]=[(0,r.eW)("Cancel")]))),_:1},8,["onClick"])),(0,r.bF)(m,{color:"primary",class:"body-2 font-weight-bold",outlined:"",onClick:d.open},{default:(0,r.k6)((()=>t[3]||(t[3]=[(0,r.eW)("Review Permissions")]))),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue","max-width","style","onKeydown"])}var n={data:function(){return{provider:null,dialog:!1,resolve:null,reject:null,message:null,title:null,options:{color:"grey lighten-3",width:400,zIndex:10008,noconfirm:!1},window:null,timeout:null,popup:null}},methods:{check(e){if("auth"===e.error)return this.provider=e.provider,this.dialog=!0,new Promise(((e,t)=>{this.resolve=e,this.reject=t}))},agree(){this.resolve(!0),this.dialog=!1},cancel(){this.resolve(!1),this.dialog=!1},open(){this.popup=window.open("https://serverwand.com/account/services/"+this.provider),this.checkIfPopupWindowClosed()},checkIfPopupWindowClosed(){if(clearTimeout(this.timer),this.popup.closed)return this.agree();this.timer=setTimeout(this.checkIfPopupWindowClosed,1e3)}}},d=o(66262);const s=(0,d.A)(n,[["render",l]]);var c=s},36663:function(e,t,o){o.r(t),o.d(t,{default:function(){return f}});var r=o(20641),i=o(90033),a=o(53751);const l={key:0},n={style:{"max-width":"200px","text-overflow":"ellipsis",overflow:"hidden","white-space":"nowrap"}};function d(e,t,o,d,s,c){const u=(0,r.g2)("v-alert"),h=(0,r.g2)("Loading"),m=(0,r.g2)("v-btn"),g=(0,r.g2)("v-card-actions"),p=(0,r.g2)("v-card"),f=(0,r.g2)("v-data-table"),v=(0,r.g2)("v-select"),b=(0,r.g2)("v-text-field"),k=(0,r.g2)("v-card-text"),y=(0,r.g2)("v-dialog"),w=(0,r.g2)("Confirm"),F=(0,r.g2)("OAuth");return(0,r.uX)(),(0,r.CE)("div",null,[s.error?((0,r.uX)(),(0,r.Wv)(u,{key:0,type:"error",text:s.error},null,8,["text"])):(0,r.Q3)("",!0),(0,r.bF)(h,{value:s.loading},null,8,["value"]),(0,r.bF)(p,null,{default:(0,r.k6)((()=>[(0,r.bF)(g,null,{default:(0,r.k6)((()=>[(0,r.bF)(m,{onClick:t[0]||(t[0]=e=>c.addItem()),icon:"mdi:mdi-plus"})])),_:1})])),_:1}),(0,r.bF)(f,{headers:s.headers,items:s.data.records,class:"results","mobile-breakpoint":"0","onClick:row":c.editItem},{"item.type":(0,r.k6)((({item:e})=>[(0,r.Lk)("span",null,(0,i.v_)(e.type),1)])),"item.priority":(0,r.k6)((({item:e})=>["MX"===e.type?((0,r.uX)(),(0,r.CE)("span",l,(0,i.v_)(e.priority),1)):(0,r.Q3)("",!0)])),"item.target":(0,r.k6)((({item:e})=>[(0,r.Lk)("p",n,(0,i.v_)(e.target),1)])),"item.actions":(0,r.k6)((({item:e})=>[(0,r.bF)(m,{size:"small",onClick:(0,a.D$)((t=>c.deleteItem(e)),["stop"]),loading:s.loading===e.id,icon:"mdi:mdi-delete"},null,8,["onClick","loading"])])),_:1},8,["headers","items","onClick:row"]),(0,r.bF)(y,{modelValue:s.drawer,"onUpdate:modelValue":t[6]||(t[6]=e=>s.drawer=e),"max-width":"600"},{default:(0,r.k6)((()=>[(0,r.bF)(p,{title:"DNS Record"},{default:(0,r.k6)((()=>[(0,r.bF)(k,null,{default:(0,r.k6)((()=>[(0,r.bF)(v,{items:s.recordType,label:"Type",modelValue:s.record.type,"onUpdate:modelValue":t[1]||(t[1]=e=>s.record.type=e)},null,8,["items","modelValue"]),(0,r.bF)(b,{modelValue:s.record.name,"onUpdate:modelValue":t[2]||(t[2]=e=>s.record.name=e),label:"Hostname",required:""},null,8,["modelValue"]),(0,r.bF)(b,{modelValue:s.record.target,"onUpdate:modelValue":t[3]||(t[3]=e=>s.record.target=e),label:"Target",required:""},null,8,["modelValue"]),"MX"===s.record.type?((0,r.uX)(),(0,r.Wv)(b,{key:0,modelValue:s.record.priority,"onUpdate:modelValue":t[4]||(t[4]=e=>s.record.priority=e),label:"Priority",required:""},null,8,["modelValue"])):(0,r.Q3)("",!0),(0,r.bF)(m,{disabled:!c.isValid,loading:s.fetching,color:"success",onClick:t[5]||(t[5]=e=>c.saveItem())},{default:(0,r.k6)((()=>t[7]||(t[7]=[(0,r.eW)(" Save ")]))),_:1},8,["disabled","loading"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,r.bF)(w,{ref:"confirm"},null,512),(0,r.bF)(F,{ref:"oauth"},null,512)])}var s=o(74300),c=o(81815),u=o(26301),h=o(9427),m={components:{Loading:c.A,Confirm:u.A,OAuth:h.A},data(){return{domainId:null,post:null,error:null,data:{records:[]},details:"",loading:null,fetching:!1,rules:{required:e=>!!e||"Required.",min:e=>e.length>=8||"Min 8 characters",emailMatch:()=>"The email and password you entered don't match"},record:{},recordType:["A","CNAME","MX","TXT","SRV","NS"],drawer:!1,headers:[{title:"Type",key:"type"},{title:"Name",key:"name"},{title:"Target",key:"target"},{title:"Priority",key:"priority"},{title:"",key:"actions",sortable:!1}]}},created(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData(){this.error="",this.domainId=this.$route.params.id,this.fetching=!0,s.A.get("sites/"+this.domainId+"/records").then((async e=>{switch(console.log(e),await this.$refs.oauth.check(e.data)){case!0:return this.fetchData();case!1:return}this.data=e.data,document.title="DNS | "+this.data.domain,this.error=e.data.error})).catch((e=>{console.log(e)})).finally((()=>{this.fetching=!1}))},addItem(){this.record={},this.drawer=!0},saveItem(){if(this.record.type){this.details="",this.fetching=!0,this.error="";var e="sites/"+this.domainId+"/records";this.record.id&&(e+="/"+this.record.id),s.A.post(e,this.record).then((async e=>{switch(console.log(e),await this.$refs.oauth.check(e.data)){case!0:return this.saveItem();case!1:return}e.data.success?(this.drawer=!1,this.fetchData()):this.error=e.data.error})).catch((e=>{console.log(e),this.fetching=!1})).finally((()=>{this.fetching=!1}))}},editItem(e,t){this.record=JSON.parse(JSON.stringify(t.item)),this.drawer=!0},deleteItem:async function(e){await this.$refs.confirm.open("Delete record")&&(this.loading=e.id,this.error="",s.A.post("sites/"+this.domainId+"/records/"+e.id,{delete:1}).then((e=>{console.log(e),e.data.success?this.fetchData():this.error=e.data.error})).catch((e=>{console.log(e)})).finally((()=>{this.loading=null})))}},computed:{isValid:function(){return!!this.record.type&&(!!this.record.target&&!("MX"===this.record.type&&!this.record.priority))}}},g=o(66262);const p=(0,g.A)(m,[["render",d]]);var f=p}}]);
//# sourceMappingURL=6663.29ae26e7.js.map