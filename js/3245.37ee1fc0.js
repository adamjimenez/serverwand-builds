"use strict";(self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[]).push([[3245,6260],{26301:function(e,o,l){l.d(o,{A:function(){return u}});var t=l(20641),r=l(90033),a=l(53751);function n(e,o,l,n,i,s){const d=(0,t.g2)("v-toolbar-title"),u=(0,t.g2)("v-toolbar"),c=(0,t.g2)("v-card-text"),m=(0,t.g2)("v-spacer"),h=(0,t.g2)("v-btn"),b=(0,t.g2)("v-card-actions"),g=(0,t.g2)("v-card"),v=(0,t.g2)("v-dialog");return(0,t.uX)(),(0,t.Wv)(v,{modelValue:e.dialog,"onUpdate:modelValue":o[0]||(o[0]=o=>e.dialog=o),"max-width":e.options.width,style:(0,r.Tr)({zIndex:e.options.zIndex}),onKeydown:(0,a.jR)(s.cancel,["esc"]),persistent:""},{default:(0,t.k6)((()=>[(0,t.bF)(g,null,{default:(0,t.k6)((()=>[(0,t.bF)(u,{dark:"",color:e.options.color,dense:"",flat:""},{default:(0,t.k6)((()=>[(0,t.bF)(d,{class:"text-body-2 font-weight-bold grey--text"},{default:(0,t.k6)((()=>[(0,t.eW)((0,r.v_)(e.title),1)])),_:1})])),_:1},8,["color"]),(0,t.bo)((0,t.bF)(c,{class:"pa-4 black--text",innerHTML:e.message},null,8,["innerHTML"]),[[a.aG,!!e.message]]),(0,t.bF)(b,{class:"pt-3"},{default:(0,t.k6)((()=>[(0,t.bF)(m),e.options.noconfirm?(0,t.Q3)("",!0):((0,t.uX)(),(0,t.Wv)(h,{key:0,color:"grey",text:"",class:"body-2 font-weight-bold",onClick:s.cancel},{default:(0,t.k6)((()=>o[1]||(o[1]=[(0,t.eW)("Cancel")]))),_:1},8,["onClick"])),(0,t.bF)(h,{color:"primary",class:"body-2 font-weight-bold",outlined:"",onClick:s.agree},{default:(0,t.k6)((()=>o[2]||(o[2]=[(0,t.eW)("OK")]))),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue","max-width","style","onKeydown"])}var i={data:function(){return{dialog:!1,resolve:null,reject:null,message:null,title:null,options:{color:"grey lighten-3",width:400,zIndex:10008,noconfirm:!1}}},methods:{open(e,o,l){return o||(o=e,e="Confirm"),this.dialog=!0,this.title=e,this.message=o,this.options=Object.assign(this.options,l),new Promise(((e,o)=>{this.resolve=e,this.reject=o}))},agree(){this.resolve(!0),this.dialog=!1},cancel(){this.resolve(!1),this.dialog=!1}}},s=l(66262);const d=(0,s.A)(i,[["render",n]]);var u=d},81815:function(e,o,l){l.d(o,{A:function(){return s}});var t=l(20641);function r(e,o,l,r,a,n){const i=(0,t.g2)("v-icon"),s=(0,t.g2)("v-alert"),d=(0,t.g2)("v-dialog");return(0,t.uX)(),(0,t.Wv)(d,{modelValue:e.show,"onUpdate:modelValue":o[0]||(o[0]=o=>e.show=o),persistent:"",width:"600"},{default:(0,t.k6)((()=>[(0,t.bF)(s,{title:l.message,color:"primary"},{prepend:(0,t.k6)((()=>[(0,t.bF)(i,{icon:"fas fa-magic fa-2x faa-horizontal animated"})])),_:1},8,["title"])])),_:1},8,["modelValue"])}var a={name:"Loading",data:()=>({show:!1}),props:{value:{type:Boolean,default:!1},message:{type:String,default:"Summoning..."}},watch:{value:function(e){this.show=e}}},n=l(66262);const i=(0,n.A)(a,[["render",r]]);var s=i},63245:function(e,o,l){l.r(o),l.d(o,{default:function(){return h}});var t=l(20641),r=l(53751),a=l(90033);function n(e,o,l,n,i,s){const d=(0,t.g2)("v-alert"),u=(0,t.g2)("Loading"),c=(0,t.g2)("v-btn"),m=(0,t.g2)("v-card-actions"),h=(0,t.g2)("v-icon"),b=(0,t.g2)("v-list-item-subtitle"),g=(0,t.g2)("v-list-item"),v=(0,t.g2)("v-list"),f=(0,t.g2)("v-card"),p=(0,t.g2)("v-card-title"),k=(0,t.g2)("v-switch"),j=(0,t.g2)("v-text-field"),F=(0,t.g2)("v-autocomplete"),V=(0,t.g2)("v-card-text"),w=(0,t.g2)("v-form"),y=(0,t.g2)("v-dialog"),_=(0,t.g2)("Confirm");return(0,t.uX)(),(0,t.CE)("div",null,[i.error?((0,t.uX)(),(0,t.Wv)(d,{key:0,type:"error",text:i.error},null,8,["text"])):(0,t.Q3)("",!0),(0,t.bF)(u,{value:i.loading},null,8,["value"]),(0,t.bF)(f,{loading:i.fetching},{default:(0,t.k6)((()=>[(0,t.bF)(m,null,{default:(0,t.k6)((()=>[(0,t.bF)(c,{onClick:o[0]||(o[0]=e=>s.addItem()),icon:"mdi:mdi-plus"})])),_:1}),(0,t.bF)(v,null,{default:(0,t.k6)((()=>[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(i.data.cronjobs,((e,o)=>((0,t.uX)(),(0,t.Wv)(g,{key:`item-${o}`,title:e.command,onClick:o=>s.editItem(e)},{prepend:(0,t.k6)((()=>[!1===e.active?((0,t.uX)(),(0,t.Wv)(h,{key:0,icon:"mdi:mdi-cancel"})):(0,t.Q3)("",!0)])),append:(0,t.k6)((()=>[(0,t.bF)(c,{icon:"",disabled:i.fetching,loading:i.loading===e.line,onClick:(0,r.D$)((o=>s.deleteItem(e.line)),["stop"])},{default:(0,t.k6)((()=>[(0,t.bF)(h,{size:"small",icon:"mdi:mdi-delete"})])),_:2},1032,["disabled","loading","onClick"])])),default:(0,t.k6)((()=>[(0,t.bF)(b,null,{default:(0,t.k6)((()=>[(0,t.eW)((0,a.v_)(e.user)+" "+(0,a.v_)(e.minute)+" "+(0,a.v_)(e.hour)+" "+(0,a.v_)(e.dom)+" "+(0,a.v_)(e.mon)+" "+(0,a.v_)(e.dow),1)])),_:2},1024)])),_:2},1032,["title","onClick"])))),128))])),_:1})])),_:1},8,["loading"]),(0,t.bF)(y,{modelValue:i.drawer,"onUpdate:modelValue":o[10]||(o[10]=e=>i.drawer=e),eager:"","max-width":"600"},{default:(0,t.k6)((()=>[(0,t.bF)(f,null,{default:(0,t.k6)((()=>[(0,t.bF)(w,{ref:"cronjobForm"},{default:(0,t.k6)((()=>[(0,t.bF)(p,null,{default:(0,t.k6)((()=>o[11]||(o[11]=[(0,t.eW)(" Cronjob ")]))),_:1}),(0,t.bF)(V,null,{default:(0,t.k6)((()=>[(0,t.bF)(k,{modelValue:i.cronjob.active,"onUpdate:modelValue":o[1]||(o[1]=e=>i.cronjob.active=e),label:"Active",color:"primary","hide-details":""},null,8,["modelValue"]),(0,t.bo)((0,t.bF)(j,{modelValue:i.cronjob.line,"onUpdate:modelValue":o[2]||(o[2]=e=>i.cronjob.line=e),label:"Line"},null,8,["modelValue"]),[[r.aG,!1]]),(0,t.bF)(j,{modelValue:i.cronjob.command,"onUpdate:modelValue":o[3]||(o[3]=e=>i.cronjob.command=e),label:"Command",required:"",rules:[i.rules.required],autofocus:""},null,8,["modelValue","rules"]),(0,t.bF)(F,{modelValue:i.cronjob.user,"onUpdate:modelValue":o[4]||(o[4]=e=>i.cronjob.user=e),label:"User",items:i.users},null,8,["modelValue","items"]),(0,t.bF)(j,{modelValue:i.cronjob.minute,"onUpdate:modelValue":o[5]||(o[5]=e=>i.cronjob.minute=e),label:"Minute",required:"",rules:[i.rules.required,i.rules.minute]},null,8,["modelValue","rules"]),(0,t.bF)(j,{modelValue:i.cronjob.hour,"onUpdate:modelValue":o[6]||(o[6]=e=>i.cronjob.hour=e),label:"Hour",required:"",rules:[i.rules.required,i.rules.hour]},null,8,["modelValue","rules"]),(0,t.bF)(j,{modelValue:i.cronjob.dom,"onUpdate:modelValue":o[7]||(o[7]=e=>i.cronjob.dom=e),label:"Day of month",required:"",rules:[i.rules.required,i.rules.dom]},null,8,["modelValue","rules"]),(0,t.bF)(j,{modelValue:i.cronjob.mon,"onUpdate:modelValue":o[8]||(o[8]=e=>i.cronjob.mon=e),label:"Month",required:"",rules:[i.rules.required,i.rules.mon]},null,8,["modelValue","rules"]),(0,t.bF)(j,{modelValue:i.cronjob.dow,"onUpdate:modelValue":o[9]||(o[9]=e=>i.cronjob.dow=e),label:"Day of week",required:"",rules:[i.rules.required,i.rules.dow]},null,8,["modelValue","rules"]),(0,t.bF)(c,{disabled:i.fetching,loading:i.fetching,color:"success",onClick:s.saveCronjob},{default:(0,t.k6)((()=>o[12]||(o[12]=[(0,t.eW)(" Save ")]))),_:1},8,["disabled","loading","onClick"])])),_:1})])),_:1},512)])),_:1})])),_:1},8,["modelValue"]),(0,t.bF)(_,{ref:"confirm"},null,512)])}var i=l(74300),s=l(81815),d=l(26301),u={components:{Loading:s.A,Confirm:d.A},data(){return{error:"",data:{users:{}},system_user:{user:"",password:""},cronjob:{active:!0,name:"",user:"",command:"",minute:"",hour:"",dom:"",mon:"",dow:""},cronjobs:[],rules:{required:e=>!!e||"Required",alpha:e=>/^[a-zA-Z-]+$/g.test(e)||"Must contain a-z characters only",minute:e=>/^[0-9,/*]+$/g.test(e)||"0-59 or *",hour:e=>/^[0-9,/*]+$/g.test(e)||"0-23 or *",dom:e=>/^[0-9,/*]+$/g.test(e)||"1-31 or *",mon:e=>/^[0-9,/*]+$/g.test(e)||"1-12 or *",dow:e=>/^[0-9,/*]+$/g.test(e)||"1-7 or *"},details:"",fetching:!1,loading:null,drawer:!1,serverId:0,logs:[{value:"journal",title:"Journal"},{value:"auth",title:"Auth"},{value:"apache_access",title:"Apache Access"},{value:"apache_error",title:"Apache Error"},{value:"mysql",title:"MySQL"},{value:"fail2ban",title:"Fail2ban"},{value:"letsencrypt",title:"Letsencrypt"},{value:"serverstatus",title:"Server Status"}],log:"",logContent:"",users:[]}},created(){this.serverId=this.$route.params.id,this.fetchData()},methods:{fetchData(){this.error="",this.fetching=!0,i.A.get("servers/"+this.serverId+"/cronjobs").then((e=>{if(console.log(e),e.data.error)return this.error=e.data.error,!1;this.data=e.data.item,document.title="Cronjobs | "+this.data.name})).catch((e=>{console.log(e)})).finally((()=>{this.fetching=!1})),i.A.get("servers/"+this.serverId+"/usersAndGroups").then((e=>{this.users=e.data.users}))},addItem(){this.cronjob={active:!1},this.$refs.cronjobForm.resetValidation(),this.drawer=!0},editItem(e){this.cronjob=JSON.parse(JSON.stringify(e)),this.drawer=!0},deleteItem:async function(e){await this.$refs.confirm.open("Are you sure you want to delete this item?")&&(this.loading=e,this.error="",i.A.post("servers/"+this.serverId+"/cronjobs",{line:e}).then((e=>{console.log(e),e.data.success?this.fetchData():this.error=e.data.error})).catch((e=>{console.log(e)})).finally((()=>{this.loading=null})))},saveCronjob(){this.error="",this.$refs.cronjobForm.validate()&&(this.fetching=!0,i.A.post("servers/"+this.serverId+"/cronjobs",this.cronjob).then((e=>{console.log(e),e.data.error?(this.fetching=!1,this.error=e.data.error):(this.drawer=!1,this.fetchData())})).catch((e=>{this.fetching=!1,console.log(e)})))}}},c=l(66262);const m=(0,c.A)(u,[["render",n]]);var h=m}}]);
//# sourceMappingURL=3245.37ee1fc0.js.map