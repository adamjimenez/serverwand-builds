"use strict";(self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[]).push([[6260,6622],{26301:function(e,t,n){n.d(t,{A:function(){return s}});var r=n(20641),o=n(90033),i=n(53751);function a(e,t,n,a,u,l){var c=(0,r.g2)("v-toolbar-title"),s=(0,r.g2)("v-toolbar"),d=(0,r.g2)("v-card-text"),f=(0,r.g2)("v-spacer"),h=(0,r.g2)("v-btn"),v=(0,r.g2)("v-card-actions"),g=(0,r.g2)("v-card"),m=(0,r.g2)("v-dialog");return(0,r.uX)(),(0,r.Wv)(m,{modelValue:e.dialog,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.dialog=t}),"max-width":e.options.width,style:(0,o.Tr)({zIndex:e.options.zIndex}),onKeydown:(0,i.jR)(l.cancel,["esc"]),persistent:""},{default:(0,r.k6)((function(){return[(0,r.bF)(g,null,{default:(0,r.k6)((function(){return[(0,r.bF)(s,{dark:"",color:e.options.color,dense:"",flat:""},{default:(0,r.k6)((function(){return[(0,r.bF)(c,{class:"text-body-2 font-weight-bold grey--text"},{default:(0,r.k6)((function(){return[(0,r.eW)((0,o.v_)(e.title),1)]})),_:1})]})),_:1},8,["color"]),(0,r.bo)((0,r.bF)(d,{class:"pa-4 black--text",innerHTML:e.message},null,8,["innerHTML"]),[[i.aG,!!e.message]]),(0,r.bF)(v,{class:"pt-3"},{default:(0,r.k6)((function(){return[(0,r.bF)(f),e.options.noconfirm?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.Wv)(h,{key:0,color:"grey",text:"",class:"body-2 font-weight-bold",onClick:l.cancel},{default:(0,r.k6)((function(){return t[1]||(t[1]=[(0,r.eW)("Cancel")])})),_:1},8,["onClick"])),(0,r.bF)(h,{color:"primary",class:"body-2 font-weight-bold",outlined:"",onClick:l.agree},{default:(0,r.k6)((function(){return t[2]||(t[2]=[(0,r.eW)("OK")])})),_:1},8,["onClick"])]})),_:1})]})),_:1})]})),_:1},8,["modelValue","max-width","style","onKeydown"])}n(26099);var u={data:function(){return{dialog:!1,resolve:null,reject:null,message:null,title:null,options:{color:"grey lighten-3",width:400,zIndex:10008,noconfirm:!1}}},methods:{open:function(e,t,n){var r=this;return t||(t=e,e="Confirm"),this.dialog=!0,this.title=e,this.message=t,this.options=Object.assign(this.options,n),new Promise((function(e,t){r.resolve=e,r.reject=t}))},agree:function(){this.resolve(!0),this.dialog=!1},cancel:function(){this.resolve(!1),this.dialog=!1}}},l=n(66262);const c=(0,l.A)(u,[["render",a]]);var s=c},81815:function(e,t,n){n.d(t,{A:function(){return l}});var r=n(20641);function o(e,t,n,o,i,a){var u=(0,r.g2)("v-icon"),l=(0,r.g2)("v-alert"),c=(0,r.g2)("v-dialog");return(0,r.uX)(),(0,r.Wv)(c,{modelValue:e.show,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.show=t}),persistent:"",width:"600"},{default:(0,r.k6)((function(){return[(0,r.bF)(l,{title:n.message,color:"primary"},{prepend:(0,r.k6)((function(){return[(0,r.bF)(u,{icon:"fas fa-magic fa-2x faa-horizontal animated"})]})),_:1},8,["title"])]})),_:1},8,["modelValue"])}var i={name:"Loading",data:function(){return{show:!1}},props:{value:{type:Boolean,default:!1},message:{type:String,default:"Summoning..."}},watch:{value:function(e){this.show=e}}},a=n(66262);const u=(0,a.A)(i,[["render",o]]);var l=u},26622:function(e,t,n){n.r(t),n.d(t,{default:function(){return F}});n(52675),n(89463);var r=n(20641);function o(e,t,n,o,i,a){var u=(0,r.g2)("v-alert"),l=(0,r.g2)("Loading"),c=(0,r.g2)("v-btn"),s=(0,r.g2)("Reboot"),d=(0,r.g2)("Disconnect"),f=(0,r.g2)("v-row"),h=(0,r.g2)("v-card-text"),v=(0,r.g2)("v-card"),g=(0,r.g2)("v-switch"),m=(0,r.g2)("v-col"),b=(0,r.g2)("v-text-field"),p=(0,r.g2)("v-container"),k=(0,r.g2)("v-card-actions"),y=(0,r.g2)("v-form");return(0,r.uX)(),(0,r.CE)("div",null,[i.error?((0,r.uX)(),(0,r.Wv)(u,{key:0,type:"error",text:i.error},null,8,["text"])):(0,r.Q3)("",!0),(0,r.bF)(l,{value:i.fetching},null,8,["value"]),(0,r.bF)(v,null,{default:(0,r.k6)((function(){return[(0,r.bF)(h,null,{default:(0,r.k6)((function(){return[(0,r.bF)(f,null,{default:(0,r.k6)((function(){return[(0,r.bF)(c,{onClick:a.editServer},{default:(0,r.k6)((function(){return t[0]||(t[0]=[(0,r.eW)(" Edit ")])})),_:1},8,["onClick"]),(0,r.bF)(s,{serverId:i.serverId,class:"mx-3"},null,8,["serverId"]),(0,r.bF)(d,{serverId:i.serverId,server:i.data},null,8,["serverId","server"])]})),_:1})]})),_:1})]})),_:1}),(0,r.bF)(v,{loading:i.fetching,title:"Notifications"},{default:(0,r.k6)((function(){return[(0,r.bF)(y,{ref:"form"},{default:(0,r.k6)((function(){return[(0,r.bF)(p,{fluid:""},{default:(0,r.k6)((function(){var e;return[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(null===(e=i.data.health)||void 0===e?void 0:e.checks,(function(e,t){return(0,r.uX)(),(0,r.Wv)(f,{key:"item-".concat(t)},{default:(0,r.k6)((function(){return[(0,r.bF)(m,null,{default:(0,r.k6)((function(){return[(0,r.bF)(g,{modelValue:e.active,"onUpdate:modelValue":function(t){return e.active=t},label:e.label,color:"primary",messages:e.description},null,8,["modelValue","onUpdate:modelValue","label","messages"])]})),_:2},1024),(0,r.bF)(m,null,{default:(0,r.k6)((function(){return[(0,r.bF)(b,{modelValue:e.threshold,"onUpdate:modelValue":function(t){return e.threshold=t},label:"Threshold",min:"0",max:"100",type:"number",suffix:e.suffix,disabled:!e.active},null,8,["modelValue","onUpdate:modelValue","suffix","disabled"])]})),_:2},1024)]})),_:2},1024)})),128))]})),_:1}),(0,r.bF)(k,null,{default:(0,r.k6)((function(){return[(0,r.bF)(c,{color:"success my-5",onClick:a.saveNotifications,disabled:!a.changed},{default:(0,r.k6)((function(){return t[1]||(t[1]=[(0,r.eW)("Save")])})),_:1},8,["onClick","disabled"])]})),_:1})]})),_:1},512)]})),_:1},8,["loading"])])}n(44114),n(62010),n(33110),n(79432),n(26099);var i=n(74300),a=n(81815);function u(e,t,n,o,i,a){var u=(0,r.g2)("v-btn"),l=(0,r.g2)("Confirm");return(0,r.uX)(),(0,r.CE)("div",null,[(0,r.bF)(u,{disabled:i.fetching,loading:i.fetching,onClick:a.reboot},{default:(0,r.k6)((function(){return t[0]||(t[0]=[(0,r.eW)(" Reboot ")])})),_:1},8,["disabled","loading","onClick"]),(0,r.bF)(l,{ref:"confirm"},null,512)])}var l=n(14048),c=n(30388),s=n(26301),d={components:{Confirm:s.A},props:{serverId:null},data:function(){return{fetching:!1}},methods:{reboot:function(){var e=(0,c.A)((0,l.A)().mark((function e(){var t=this;return(0,l.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$refs.confirm.open("Reboot server?");case 2:if(e.sent){e.next=4;break}return e.abrupt("return");case 4:this.fetching=!0,i.A.get("servers/"+this.serverId+"/reboot").then((function(e){console.log(e),e.data.success&&t.$router.push("/servers")})).catch((function(e){return console.log(e)})).finally((function(){return t.fetching=!1}));case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},f=n(66262);const h=(0,f.A)(d,[["render",u]]);var v=h;function g(e,t,n,o,i,a){var u=(0,r.g2)("v-btn"),l=(0,r.g2)("Confirm");return(0,r.uX)(),(0,r.CE)("div",null,[(0,r.bF)(u,{disabled:i.fetching,loading:i.fetching,onClick:a.deleteServer,color:"error"},{default:(0,r.k6)((function(){return t[0]||(t[0]=[(0,r.eW)(" Disconnect ")])})),_:1},8,["disabled","loading","onClick"]),(0,r.bF)(l,{ref:"confirm"},null,512)])}var m={components:{Confirm:s.A},props:{server:null},data:function(){return{fetching:!1}},methods:{deleteServer:function(){var e=(0,c.A)((0,l.A)().mark((function e(){var t=this;return(0,l.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$refs.confirm.open("Disconnect from server "+this.server.name+"?");case 2:if(e.sent){e.next=4;break}return e.abrupt("return");case 4:this.fetching=!0,i.A.get("servers/"+this.$route.params.id+"/delete").then((function(e){console.log(e),e.data.success&&t.$router.push("/servers/")})).catch((function(e){return console.log(e)})).finally((function(){return t.fetching=!1}));case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}};const b=(0,f.A)(m,[["render",g]]);var p=b,k={components:{Loading:a.A,Reboot:v,Disconnect:p},data:function(){return{error:"",fetching:!1,serverId:0,data:{notifications:{disk_space:{},mail_queue:{},db_connections:{}},disks:[]},orig:{}}},computed:{changed:function(){return JSON.stringify(this.data)!==JSON.stringify(this.orig)}},created:function(){this.serverId=this.$route.params.id,this.fetchData()},methods:{fetchData:function(e){var t=this;this.error="",this.fetching=!0,i.A.get("servers/"+this.serverId+"/summary",{clearCacheEntry:e}).then((function(e){console.log(e),e.data.error&&(t.error=e.data.error),e.data.item&&(t.data=e.data.item,t.orig=JSON.parse(JSON.stringify(e.data.item)),document.title="Settings | "+t.data.name)})).catch((function(e){console.log(e)})).finally((function(){t.fetching=!1}))},editServer:function(){this.$router.push("/servers/"+this.$route.params.id+"/edit")},saveNotifications:function(){var e=this;this.fetching=!0,i.A.post("servers/"+this.serverId+"/notifications",{notifications:this.data.health.checks}).then((function(t){if(t.data.error)return e.error=t.data.error,!1;e.fetchData(!0)})).catch((function(e){console.log(e)})).finally((function(){e.fetching=!1}))}}};const y=(0,f.A)(k,[["render",o]]);var F=y}}]);
//# sourceMappingURL=6622-legacy.2de46c8e.js.map