"use strict";(self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[]).push([[6260,9175],{26301:function(e,t,l){l.d(t,{A:function(){return c}});var a=l(20641),o=l(90033),i=l(53751);function n(e,t,l,n,d,r){const s=(0,a.g2)("v-toolbar-title"),c=(0,a.g2)("v-toolbar"),u=(0,a.g2)("v-card-text"),h=(0,a.g2)("v-spacer"),g=(0,a.g2)("v-btn"),p=(0,a.g2)("v-card-actions"),m=(0,a.g2)("v-card"),f=(0,a.g2)("v-dialog");return(0,a.uX)(),(0,a.Wv)(f,{modelValue:e.dialog,"onUpdate:modelValue":t[0]||(t[0]=t=>e.dialog=t),"max-width":e.options.width,style:(0,o.Tr)({zIndex:e.options.zIndex}),onKeydown:(0,i.jR)(r.cancel,["esc"]),persistent:""},{default:(0,a.k6)((()=>[(0,a.bF)(m,null,{default:(0,a.k6)((()=>[(0,a.bF)(c,{dark:"",color:e.options.color,dense:"",flat:""},{default:(0,a.k6)((()=>[(0,a.bF)(s,{class:"text-body-2 font-weight-bold grey--text"},{default:(0,a.k6)((()=>[(0,a.eW)((0,o.v_)(e.title),1)])),_:1})])),_:1},8,["color"]),(0,a.bo)((0,a.bF)(u,{class:"pa-4 black--text",innerHTML:e.message},null,8,["innerHTML"]),[[i.aG,!!e.message]]),(0,a.bF)(p,{class:"pt-3"},{default:(0,a.k6)((()=>[(0,a.bF)(h),e.options.noconfirm?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.Wv)(g,{key:0,color:"grey",text:"",class:"body-2 font-weight-bold",onClick:r.cancel},{default:(0,a.k6)((()=>t[1]||(t[1]=[(0,a.eW)("Cancel")]))),_:1},8,["onClick"])),(0,a.bF)(g,{color:"primary",class:"body-2 font-weight-bold",outlined:"",onClick:r.agree},{default:(0,a.k6)((()=>t[2]||(t[2]=[(0,a.eW)("OK")]))),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue","max-width","style","onKeydown"])}var d={data:function(){return{dialog:!1,resolve:null,reject:null,message:null,title:null,options:{color:"grey lighten-3",width:400,zIndex:10008,noconfirm:!1}}},methods:{open(e,t,l){return t||(t=e,e="Confirm"),this.dialog=!0,this.title=e,this.message=t,this.options=Object.assign(this.options,l),new Promise(((e,t)=>{this.resolve=e,this.reject=t}))},agree(){this.resolve(!0),this.dialog=!1},cancel(){this.resolve(!1),this.dialog=!1}}},r=l(66262);const s=(0,r.A)(d,[["render",n]]);var c=s},46865:function(e,t,l){l.d(t,{A:function(){return c}});var a=l(20641),o=l(90033);const i={ref:"container"};function n(e,t,l,n,d,r){const s=(0,a.g2)("v-tooltip"),c=(0,a.g2)("v-icon"),u=(0,a.g2)("v-btn");return(0,a.uX)(),(0,a.CE)("span",i,[l.text?((0,a.uX)(),(0,a.Wv)(s,{key:0,text:d.copyText,top:""},{activator:(0,a.k6)((({props:e})=>[(0,a.Lk)("span",(0,a.v6)(e,{onClick:t[0]||(t[0]=e=>r.copy(l.val)),onMouseleave:t[1]||(t[1]=(...e)=>r.resetCopyText&&r.resetCopyText(...e))}),(0,o.v_)(l.label?l.label:l.val),17)])),_:1},8,["text"])):((0,a.uX)(),(0,a.Wv)(s,{key:1,text:d.copyText,top:""},{activator:(0,a.k6)((({props:e})=>[(0,a.bF)(u,(0,a.v6)(e,{icon:"",onClick:t[2]||(t[2]=e=>r.copy(l.val)),onMouseleave:r.resetCopyText}),{default:(0,a.k6)((()=>[(0,a.bF)(c,{size:"small"},{default:(0,a.k6)((()=>t[3]||(t[3]=[(0,a.eW)("mdi:mdi-content-copy")]))),_:1})])),_:2},1040,["onMouseleave"])])),_:1},8,["text"]))],512)}var d={props:{title:null,label:null,val:null,text:Boolean},data(){return{defaultText:"Copy",copyText:""}},methods:{copy(e){const t=document.createElement("textarea");this.$refs["container"].appendChild(t),t.setAttribute("id","clipboard"),t.value=e,t.select(),document.execCommand("Copy"),t.parentNode.removeChild(t),this.copyText="Copied"},resetCopyText(){setTimeout((()=>this.copyText=this.defaultText),500)}},mounted:function(){this.title&&(this.defaultText=this.title),this.copyText=this.defaultText}},r=l(66262);const s=(0,r.A)(d,[["render",n]]);var c=s},81815:function(e,t,l){l.d(t,{A:function(){return r}});var a=l(20641);function o(e,t,l,o,i,n){const d=(0,a.g2)("v-icon"),r=(0,a.g2)("v-alert"),s=(0,a.g2)("v-dialog");return(0,a.uX)(),(0,a.Wv)(s,{modelValue:e.show,"onUpdate:modelValue":t[0]||(t[0]=t=>e.show=t),persistent:"",width:"600"},{default:(0,a.k6)((()=>[(0,a.bF)(r,{title:l.message,color:"primary"},{prepend:(0,a.k6)((()=>[(0,a.bF)(d,{icon:"fas fa-magic fa-2x faa-horizontal animated"})])),_:1},8,["title"])])),_:1},8,["modelValue"])}var i={name:"Loading",data:()=>({show:!1}),props:{value:{type:Boolean,default:!1},message:{type:String,default:"Summoning..."}},watch:{value:function(e){this.show=e}}},n=l(66262);const d=(0,n.A)(i,[["render",o]]);var r=d},59175:function(e,t,l){l.r(t),l.d(t,{default:function(){return p}});var a=l(20641),o=l(53751),i=l(90033);function n(e,t,l,n,d,r){const s=(0,a.g2)("v-alert"),c=(0,a.g2)("Loading"),u=(0,a.g2)("v-btn"),h=(0,a.g2)("v-card-actions"),g=(0,a.g2)("v-list-item"),p=(0,a.g2)("v-list"),m=(0,a.g2)("v-card"),f=(0,a.g2)("v-text-field"),v=(0,a.g2)("v-card-text"),b=(0,a.g2)("v-dialog"),k=(0,a.g2)("Copy"),y=(0,a.g2)("Confirm");return(0,a.uX)(),(0,a.CE)("div",null,[d.error?((0,a.uX)(),(0,a.Wv)(s,{key:0,type:"error",text:d.error},null,8,["text"])):(0,a.Q3)("",!0),(0,a.bF)(c,{value:d.fetching},null,8,["value"]),(0,a.bF)(m,{class:"mx-auto"},{default:(0,a.k6)((()=>[(0,a.bF)(h,null,{default:(0,a.k6)((()=>[(0,a.bF)(u,{onClick:t[0]||(t[0]=e=>r.addItem()),icon:"mdi:mdi-plus"})])),_:1}),(0,a.bF)(p,{group:"","max-width":"600"},{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(d.items,((e,t)=>((0,a.uX)(),(0,a.Wv)(g,{key:`item-${t}`,value:e,title:e.label,subtitle:e.api_key},{append:(0,a.k6)((()=>[(0,a.bF)(u,{disabled:d.dialog,loading:d.loading===e.id,onClick:(0,o.D$)((t=>r.deleteItem(e.id)),["stop"]),size:"small",icon:"mdi:mdi-delete"},null,8,["disabled","loading","onClick"])])),_:2},1032,["value","title","subtitle"])))),128))])),_:1})])),_:1}),(0,a.bF)(b,{modelValue:d.drawer,"onUpdate:modelValue":t[2]||(t[2]=e=>d.drawer=e),"max-width":"600"},{default:(0,a.k6)((()=>[(0,a.bF)(m,{title:"API Key"},{default:(0,a.k6)((()=>[(0,a.bF)(v,null,{default:(0,a.k6)((()=>[(0,a.bF)(f,{modelValue:d.data.label,"onUpdate:modelValue":t[1]||(t[1]=e=>d.data.label=e),label:"Label",autofocus:""},null,8,["modelValue"]),(0,a.bF)(u,{disabled:0===d.data.label.length,loading:d.dialog,color:"success",onClick:r.saveItem},{default:(0,a.k6)((()=>t[4]||(t[4]=[(0,a.eW)(" Save ")]))),_:1},8,["disabled","loading","onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.bF)(b,{modelValue:d.dialog,"onUpdate:modelValue":t[3]||(t[3]=e=>d.dialog=e),width:"600"},{default:(0,a.k6)((()=>[(0,a.bF)(m,{color:"primary"},{default:(0,a.k6)((()=>[(0,a.bF)(v,null,{default:(0,a.k6)((()=>[(0,a.eW)(" Api key: "+(0,i.v_)(d.details)+" ",1),(0,a.bF)(k,{val:d.details},null,8,["val"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.bF)(y,{ref:"confirm"},null,512)])}var d=l(74300),r=l(81815),s=l(46865),c=l(26301),u={components:{Loading:r.A,Copy:s.A,Confirm:c.A},data(){return{error:null,data:{label:""},items:[],dialog:!1,details:"",fetching:!0,loading:null,rules:{required:e=>!!e||"Required.",min:e=>e.length>=8||"Min 8 characters"},server:{name:""},drawer:!1}},created(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData(){this.error="",this.fetching=!0,d.A.get("apikeys").then((e=>{console.log(e),this.items=e.data.items,document.title="Api"})).catch((e=>{console.log(e)})).finally((()=>{this.fetching=!1}))},addItem(){this.data.label="",this.drawer=!0},saveItem(){this.details="",this.error="",d.A.post("apikeys",this.data).then((e=>{console.log(e),e.data.success?(this.dialog=!0,this.details=e.data.api_key,this.drawer=!1,this.fetchData()):this.error=e.data.error})).catch((e=>{console.log(e)}))},deleteItem:async function(e){await this.$refs.confirm.open("Are you sure you want to delete this item?")&&(this.error="",this.loading=e,d.A.post("apikeys",{delete:1,api_key:e}).then((e=>{console.log(e),e.data.error?this.error=e.data.error:this.fetchData()})).catch((e=>{console.log(e)})).finally((()=>{this.loading=null})))}}},h=l(66262);const g=(0,h.A)(u,[["render",n]]);var p=g}}]);
//# sourceMappingURL=9175.b3943bd8.js.map