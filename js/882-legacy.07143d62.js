"use strict";(self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[]).push([[882,6260],{46865:function(t,e,a){a.d(e,{A:function(){return s}});var n=a(20641),o=a(90033),r={ref:"container"};function l(t,e,a,l,i,u){var d=(0,n.g2)("v-tooltip"),s=(0,n.g2)("v-icon"),c=(0,n.g2)("v-btn");return(0,n.uX)(),(0,n.CE)("span",r,[a.text?((0,n.uX)(),(0,n.Wv)(d,{key:0,text:i.copyText,top:""},{activator:(0,n.k6)((function(t){var r=t.props;return[(0,n.Lk)("span",(0,n.v6)(r,{onClick:e[0]||(e[0]=function(t){return u.copy(a.val)}),onMouseleave:e[1]||(e[1]=function(){return u.resetCopyText&&u.resetCopyText.apply(u,arguments)})}),(0,o.v_)(a.label?a.label:a.val),17)]})),_:1},8,["text"])):((0,n.uX)(),(0,n.Wv)(d,{key:1,text:i.copyText,top:""},{activator:(0,n.k6)((function(t){var o=t.props;return[(0,n.bF)(c,(0,n.v6)(o,{icon:"",onClick:e[2]||(e[2]=function(t){return u.copy(a.val)}),onMouseleave:u.resetCopyText}),{default:(0,n.k6)((function(){return[(0,n.bF)(s,{size:"small"},{default:(0,n.k6)((function(){return e[3]||(e[3]=[(0,n.eW)("mdi:mdi-content-copy")])})),_:1})]})),_:2},1040,["onMouseleave"])]})),_:1},8,["text"]))],512)}var i={props:{title:null,label:null,val:null,text:Boolean},data:function(){return{defaultText:"Copy",copyText:""}},methods:{copy:function(t){var e=document.createElement("textarea");this.$refs["container"].appendChild(e),e.setAttribute("id","clipboard"),e.value=t,e.select(),document.execCommand("Copy"),e.parentNode.removeChild(e),this.copyText="Copied"},resetCopyText:function(){var t=this;setTimeout((function(){return t.copyText=t.defaultText}),500)}},mounted:function(){this.title&&(this.defaultText=this.title),this.copyText=this.defaultText}},u=a(66262);const d=(0,u.A)(i,[["render",l]]);var s=d},92649:function(t,e,a){a.d(e,{A:function(){return m}});var n=a(20641),o=a(90033),r={key:0},l={key:0},i={key:1},u={key:2};function d(t,e,a,d,s,c){var f=(0,n.g2)("v-icon"),v=(0,n.g2)("v-btn"),p=(0,n.g2)("v-card-title"),m=(0,n.g2)("v-alert"),h=(0,n.g2)("v-select"),b=(0,n.g2)("PasswordField"),g=(0,n.g2)("v-text-field"),y=(0,n.g2)("v-card-text"),k=(0,n.g2)("v-card"),w=(0,n.g2)("v-dialog");return(0,n.uX)(),(0,n.CE)("span",null,[a.hideText?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.CE)("span",r,[a.yesno?((0,n.uX)(),(0,n.CE)("span",l,(0,o.v_)(a.val?"Yes":"No"),1)):a.password?((0,n.uX)(),(0,n.CE)("span",i,(0,o.v_)("******"))):((0,n.uX)(),(0,n.CE)("span",u,(0,o.v_)(a.val),1))])),(0,n.bF)(v,{icon:"",onClick:e[0]||(e[0]=function(t){return c.edit(a.val)})},{default:(0,n.k6)((function(){return[(0,n.bF)(f,{size:"small"},{default:(0,n.k6)((function(){return e[5]||(e[5]=[(0,n.eW)("mdi:mdi-pencil")])})),_:1})]})),_:1}),(0,n.bF)(w,{app:"",modelValue:s.dialog,"onUpdate:modelValue":e[4]||(e[4]=function(t){return s.dialog=t}),"max-width":"600"},{default:(0,n.k6)((function(){return[(0,n.bF)(k,{loading:s.fetching},{default:(0,n.k6)((function(){return[(0,n.bF)(p,null,{default:(0,n.k6)((function(){return[(0,n.eW)(" Edit "+(0,o.v_)(a.label),1)]})),_:1}),(0,n.bF)(y,null,{default:(0,n.k6)((function(){return[s.error?((0,n.uX)(),(0,n.Wv)(m,{key:0,type:"error",text:s.error},null,8,["text"])):(0,n.Q3)("",!0),a.yesno?((0,n.uX)(),(0,n.Wv)(h,{key:1,modelValue:s.data.val,"onUpdate:modelValue":e[1]||(e[1]=function(t){return s.data.val=t}),items:s.yesnoItems,label:a.label,autofocus:"",error:s.errors.length>0,"error-messages":s.errors},null,8,["modelValue","items","label","error","error-messages"])):a.password?((0,n.uX)(),(0,n.Wv)(b,{key:2,modelValue:s.data.val,"onUpdate:modelValue":e[2]||(e[2]=function(t){return s.data.val=t}),bind:"$attrs"},null,8,["modelValue"])):((0,n.uX)(),(0,n.Wv)(g,{key:3,modelValue:s.data.val,"onUpdate:modelValue":e[3]||(e[3]=function(t){return s.data.val=t}),label:a.label,autofocus:"","error-messages":s.errors},null,8,["modelValue","label","error-messages"])),(0,n.bF)(v,{color:"primary",onClick:c.save},{default:(0,n.k6)((function(){return e[6]||(e[6]=[(0,n.eW)(" Save ")])})),_:1},8,["onClick"])]})),_:1})]})),_:1},8,["loading"])]})),_:1},8,["modelValue"])])}a(62010),a(26099);var s=a(74300),c=a(61912),f={components:{PasswordField:c.A},props:{name:null,val:null,label:null,password:Boolean,hideText:Boolean,path:null,yesno:Boolean},data:function(){return{error:"",fetching:!1,dialog:!1,data:{val:null},showPassword:!1,yesnoItems:[{title:"Yes",value:1},{title:"No",value:0}],errors:[]}},watch:{val:function(t){this.data.val=t}},methods:{edit:function(){this.data.val=this.val,this.dialog=!0},save:function(){var t=this;this.fetching=!0,this.error="";var e={};e[this.name]=this.data.val,s.A.post(this.path,e).then((function(e){console.log(e),e.data.success?(t.dialog=!1,t.$emit("save")):t.error=e.data.error})).catch((function(t){return console.log(t)})).finally((function(){return t.fetching=!1}))}}},v=a(66262);const p=(0,v.A)(f,[["render",d]]);var m=p},81815:function(t,e,a){a.d(e,{A:function(){return u}});var n=a(20641);function o(t,e,a,o,r,l){var i=(0,n.g2)("v-icon"),u=(0,n.g2)("v-alert"),d=(0,n.g2)("v-dialog");return(0,n.uX)(),(0,n.Wv)(d,{modelValue:t.show,"onUpdate:modelValue":e[0]||(e[0]=function(e){return t.show=e}),persistent:"",width:"600"},{default:(0,n.k6)((function(){return[(0,n.bF)(u,{title:a.message,color:"primary"},{prepend:(0,n.k6)((function(){return[(0,n.bF)(i,{icon:"fas fa-magic fa-2x faa-horizontal animated"})]})),_:1},8,["title"])]})),_:1},8,["modelValue"])}var r={name:"Loading",data:function(){return{show:!1}},props:{value:{type:Boolean,default:!1},message:{type:String,default:"Summoning..."}},watch:{value:function(t){this.show=t}}},l=a(66262);const i=(0,l.A)(r,[["render",o]]);var u=i},61912:function(t,e,a){a.d(e,{A:function(){return u}});var n=a(20641);function o(t,e,a,o,r,l){var i=(0,n.g2)("v-text-field");return(0,n.uX)(),(0,n.Wv)(i,(0,n.v6)(t.$attrs,{type:r.showPassword?"text":"password","append-icon":r.showPassword?"mdi:mdi-eye-off":"mdi:mdi-eye","onClick:append":e[0]||(e[0]=function(t){return r.showPassword=!r.showPassword})}),null,16,["type","append-icon"])}var r={data:function(){return{showPassword:!1}}},l=a(66262);const i=(0,l.A)(r,[["render",o]]);var u=i},90882:function(t,e,a){a.r(e),a.d(e,{default:function(){return h}});var n=a(20641),o={key:0},r=["action"],l=["value"],i=["value"];function u(t,e,a,u,d,s){var c=this,f=(0,n.g2)("v-alert"),v=(0,n.g2)("Loading"),p=(0,n.g2)("v-btn"),m=(0,n.g2)("v-icon"),h=(0,n.g2)("v-list-item"),b=(0,n.g2)("Copy"),g=(0,n.g2)("Edit"),y=(0,n.g2)("v-list"),k=(0,n.g2)("v-card");return(0,n.uX)(),(0,n.CE)("div",null,[d.error?((0,n.uX)(),(0,n.Wv)(f,{key:0,type:"error",text:d.error},null,8,["text"])):(0,n.Q3)("",!0),(0,n.bF)(v,{value:d.loading},null,8,["value"]),(0,n.bF)(k,{class:"pa-3",loading:d.fetching},{default:(0,n.k6)((function(){return[0==d.data.db_name?((0,n.uX)(),(0,n.CE)("div",o,[(0,n.bF)(p,{disabled:""!=d.loading,loading:"database"==d.loading,onClick:s.addDatabase},{default:(0,n.k6)((function(){return e[0]||(e[0]=[(0,n.eW)(" Add Database ")])})),_:1},8,["disabled","loading","onClick"])])):((0,n.uX)(),(0,n.Wv)(k,{key:1,"max-width":"300"},{default:(0,n.k6)((function(){return[(0,n.bF)(y,{lines:"two"},{default:(0,n.k6)((function(){return[d.data.server.ip?((0,n.uX)(),(0,n.Wv)(h,{key:0,title:"PhpMyAdmin"},{append:(0,n.k6)((function(){return[(0,n.Lk)("form",{action:"http://"+d.data.server.ip+"/phpmyadmin/",method:"post",target:"_blank"},[(0,n.Lk)("input",{type:"hidden",name:"pma_username",value:d.data.db_name},null,8,l),(0,n.Lk)("input",{type:"hidden",name:"pma_password",value:d.data.db_password},null,8,i),(0,n.bF)(p,{type:"submit",icon:""},{default:(0,n.k6)((function(){return[(0,n.bF)(m,{right:""},{default:(0,n.k6)((function(){return e[1]||(e[1]=[(0,n.eW)("mdi:mdi-open-in-new")])})),_:1})]})),_:1})],8,r)]})),_:1})):(0,n.Q3)("",!0),(0,n.bF)(h,{title:"DB Name",subtitle:d.data.db_name},{subtitle:(0,n.k6)((function(){return[(0,n.bF)(b,{val:d.data.db_name,text:""},null,8,["val"])]})),_:1},8,["subtitle"]),(0,n.bF)(h,{title:"DB Username",subtitle:d.data.db_name},{subtitle:(0,n.k6)((function(){return[(0,n.bF)(b,{val:d.data.db_name,text:""},null,8,["val"])]})),_:1},8,["subtitle"]),(0,n.bF)(h,{title:"DB Password",subtitle:"******"},{subtitle:(0,n.k6)((function(){return[(0,n.bF)(b,{val:d.data.db_password,text:"",label:"******"},null,8,["val"])]})),append:(0,n.k6)((function(){return[(0,n.bF)(g,{val:d.data.db_password,label:"DB Password",name:"password",password:"",hideText:"",path:"sites/"+c.domainId+"/database"},null,8,["val","path"])]})),_:1})]})),_:1})]})),_:1}))]})),_:1},8,["loading"])])}a(26099);var d=a(74300),s=a(81815),c=a(46865),f=a(92649),v={components:{Loading:s.A,Copy:c.A,Edit:f.A},data:function(){return{domainId:null,post:null,error:null,data:{disk_usage:0,server:{},app:{}},details:"",loading:!1,fetching:!1,dbPasswordPanel:[!1],dbPasswordFormValid:!0,showDbPassword:!1,password:"",dbPassword:"",rules:{required:function(t){return!!t||"Required."},min:function(t){return t.length>=8||"Min 8 characters"},emailMatch:function(){return"The email and password you entered don't match"}},copyText:"Copy"}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.error="",this.fetching=!0,this.domainId=this.$route.params.id,d.A.get("sites/"+this.domainId+"/database").then((function(e){console.log(e),t.data=e.data.item,document.title="Database | "+t.data.domain})).catch((function(t){console.log(t)})).finally((function(){t.fetching=!1}))},addDatabase:function(){var t=this;this.error="",this.loading=!0,d.A.post("sites/"+this.domainId+"/database",{save:1}).then((function(e){console.log(e),e.data.error?t.error=e.data.error:t.fetchData()})).catch((function(t){console.log(t)})).finally((function(){t.fetching=!1,t.loading=!1}))}}},p=a(66262);const m=(0,p.A)(v,[["render",u]]);var h=m}}]);
//# sourceMappingURL=882-legacy.07143d62.js.map