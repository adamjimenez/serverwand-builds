"use strict";(self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[]).push([[3639,6260],{26301:function(e,t,n){n.d(t,{A:function(){return c}});var o=n(20641),a=n(90033),i=n(53751);function l(e,t,n,l,r,u){var d=(0,o.g2)("v-toolbar-title"),c=(0,o.g2)("v-toolbar"),s=(0,o.g2)("v-card-text"),f=(0,o.g2)("v-spacer"),g=(0,o.g2)("v-btn"),h=(0,o.g2)("v-card-actions"),m=(0,o.g2)("v-card"),v=(0,o.g2)("v-dialog");return(0,o.uX)(),(0,o.Wv)(v,{modelValue:e.dialog,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.dialog=t}),"max-width":e.options.width,style:(0,a.Tr)({zIndex:e.options.zIndex}),onKeydown:(0,i.jR)(u.cancel,["esc"]),persistent:""},{default:(0,o.k6)((function(){return[(0,o.bF)(m,null,{default:(0,o.k6)((function(){return[(0,o.bF)(c,{dark:"",color:e.options.color,dense:"",flat:""},{default:(0,o.k6)((function(){return[(0,o.bF)(d,{class:"text-body-2 font-weight-bold grey--text"},{default:(0,o.k6)((function(){return[(0,o.eW)((0,a.v_)(e.title),1)]})),_:1})]})),_:1},8,["color"]),(0,o.bo)((0,o.bF)(s,{class:"pa-4 black--text",innerHTML:e.message},null,8,["innerHTML"]),[[i.aG,!!e.message]]),(0,o.bF)(h,{class:"pt-3"},{default:(0,o.k6)((function(){return[(0,o.bF)(f),e.options.noconfirm?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.Wv)(g,{key:0,color:"grey",text:"",class:"body-2 font-weight-bold",onClick:u.cancel},{default:(0,o.k6)((function(){return t[1]||(t[1]=[(0,o.eW)("Cancel")])})),_:1},8,["onClick"])),(0,o.bF)(g,{color:"primary",class:"body-2 font-weight-bold",outlined:"",onClick:u.agree},{default:(0,o.k6)((function(){return t[2]||(t[2]=[(0,o.eW)("OK")])})),_:1},8,["onClick"])]})),_:1})]})),_:1})]})),_:1},8,["modelValue","max-width","style","onKeydown"])}n(26099);var r={data:function(){return{dialog:!1,resolve:null,reject:null,message:null,title:null,options:{color:"grey lighten-3",width:400,zIndex:10008,noconfirm:!1}}},methods:{open:function(e,t,n){var o=this;return t||(t=e,e="Confirm"),this.dialog=!0,this.title=e,this.message=t,this.options=Object.assign(this.options,n),new Promise((function(e,t){o.resolve=e,o.reject=t}))},agree:function(){this.resolve(!0),this.dialog=!1},cancel:function(){this.resolve(!1),this.dialog=!1}}},u=n(66262);const d=(0,u.A)(r,[["render",l]]);var c=d},81815:function(e,t,n){n.d(t,{A:function(){return u}});var o=n(20641);function a(e,t,n,a,i,l){var r=(0,o.g2)("v-icon"),u=(0,o.g2)("v-alert"),d=(0,o.g2)("v-dialog");return(0,o.uX)(),(0,o.Wv)(d,{modelValue:e.show,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.show=t}),persistent:"",width:"600"},{default:(0,o.k6)((function(){return[(0,o.bF)(u,{title:n.message,color:"primary"},{prepend:(0,o.k6)((function(){return[(0,o.bF)(r,{icon:"fas fa-magic fa-2x faa-horizontal animated"})]})),_:1},8,["title"])]})),_:1},8,["modelValue"])}var i={name:"Loading",data:function(){return{show:!1}},props:{value:{type:Boolean,default:!1},message:{type:String,default:"Summoning..."}},watch:{value:function(e){this.show=e}}},l=n(66262);const r=(0,l.A)(i,[["render",a]]);var u=r},43639:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});n(62010);var o=n(20641);function a(e,t,n,a,i,l){var r=(0,o.g2)("Loading"),u=(0,o.g2)("v-btn"),d=(0,o.g2)("v-card-text"),c=(0,o.g2)("v-card"),s=(0,o.g2)("v-text-field"),f=(0,o.g2)("v-dialog"),g=(0,o.g2)("Confirm");return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.bF)(r,{value:i.loading},null,8,["value"]),(0,o.bF)(c,{loading:i.fetching},{default:(0,o.k6)((function(){return[(0,o.bF)(c,{"max-width":"600"},{default:(0,o.k6)((function(){return[(0,o.bF)(d,null,{default:(0,o.k6)((function(){return[(0,o.bF)(u,{onClick:l.editItem,block:"",class:"mb-4"},{default:(0,o.k6)((function(){return t[2]||(t[2]=[(0,o.eW)(" Edit Name ")])})),_:1},8,["onClick"]),(0,o.bF)(u,{disabled:i.dialog,loading:"delete"===i.loading,onClick:l.deleteItem,color:"error",block:""},{default:(0,o.k6)((function(){return t[3]||(t[3]=[(0,o.eW)(" Delete ")])})),_:1},8,["disabled","loading","onClick"])]})),_:1})]})),_:1})]})),_:1},8,["loading"]),(0,o.bF)(f,{modelValue:i.drawer,"onUpdate:modelValue":t[1]||(t[1]=function(e){return i.drawer=e}),"max-width":"600"},{default:(0,o.k6)((function(){return[(0,o.bF)(c,{title:"Edit Name"},{default:(0,o.k6)((function(){return[(0,o.bF)(d,null,{default:(0,o.k6)((function(){return[(0,o.bF)(s,{modelValue:i.data.name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.data.name=e}),label:"Name",required:"",autofocus:""},null,8,["modelValue"]),(0,o.bF)(u,{disabled:i.fetching,loading:"save"===i.loading,color:"success",onClick:l.validate},{default:(0,o.k6)((function(){return t[4]||(t[4]=[(0,o.eW)(" Save ")])})),_:1},8,["disabled","loading","onClick"])]})),_:1})]})),_:1})]})),_:1},8,["modelValue"]),(0,o.bF)(g,{ref:"confirm"},null,512)])}var i=n(14048),l=n(30388),r=(n(44114),n(26099),n(74300)),u=n(81815),d=n(26301),c={components:{Loading:u.A,Confirm:d.A},data:function(){return{drawer:!1,fetching:!1,loading:null,error:"",data:{users:{}},dialog:!1,details:"",id:0}},created:function(){this.id=this.$route.params.id,this.fetchData()},methods:{fetchData:function(){var e=this;this.error="",this.fetching=!0,r.A.get("teams/"+this.id).then((function(t){console.log(t),e.data=t.data.item,document.title="Settings | "+e.data.name})).catch((function(e){console.log(e)})).finally((function(){e.fetching=!1}))},editItem:function(){this.drawer=!0},deleteItem:function(){var e=(0,l.A)((0,i.A)().mark((function e(){var t=this;return(0,i.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$refs.confirm.open("Delete "+this.data.name);case 2:if(e.sent){e.next=4;break}return e.abrupt("return");case 4:this.dialog=!0,this.loading="delete",r.A.post("teams/"+this.id,{delete:1}).then((function(e){console.log(e),e.data.error?t.error=e.data.error:t.$router.push("/teams/")})).catch((function(e){console.log(e)})).finally((function(){t.dialog=!1,t.loading=null}));case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),validate:function(){var e=this;this.loading="save",r.A.post("teams/"+this.id,this.data).then((function(t){console.log(t),e.fetchData()})).catch((function(e){console.log(e)})).finally((function(){e.loading=null,e.drawer=!1}))}}},s=n(66262);const f=(0,s.A)(c,[["render",a]]);var g=f}}]);
//# sourceMappingURL=3639-legacy.924faf60.js.map