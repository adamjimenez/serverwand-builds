"use strict";(self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[]).push([[3570],{76284:function(t,n,e){e.d(n,{Z:function(){return s}});var r=e(66252),o=e(3577),i=e(49963);function a(t,n,e,a,u,l){var c=(0,r.up)("v-toolbar-title"),s=(0,r.up)("v-toolbar"),d=(0,r.up)("v-card-text"),f=(0,r.up)("v-spacer"),m=(0,r.up)("v-btn"),h=(0,r.up)("v-card-actions"),g=(0,r.up)("v-card"),p=(0,r.up)("v-dialog");return(0,r.wg)(),(0,r.j4)(p,{modelValue:t.dialog,"onUpdate:modelValue":n[0]||(n[0]=function(n){return t.dialog=n}),"max-width":t.options.width,style:(0,o.j5)({zIndex:t.options.zIndex}),onKeydown:(0,i.D2)(l.cancel,["esc"]),persistent:""},{default:(0,r.w5)((function(){return[(0,r.Wm)(g,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(s,{dark:"",color:t.options.color,dense:"",flat:""},{default:(0,r.w5)((function(){return[(0,r.Wm)(c,{class:"text-body-2 font-weight-bold grey--text"},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,o.zw)(t.title),1)]})),_:1})]})),_:1},8,["color"]),(0,r.wy)((0,r.Wm)(d,{class:"pa-4 black--text",innerHTML:t.message},null,8,["innerHTML"]),[[i.F8,!!t.message]]),(0,r.Wm)(h,{class:"pt-3"},{default:(0,r.w5)((function(){return[(0,r.Wm)(f),t.options.noconfirm?(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)(m,{key:0,color:"grey",text:"",class:"body-2 font-weight-bold",onClick:l.cancel},{default:(0,r.w5)((function(){return[(0,r.Uk)("Cancel")]})),_:1},8,["onClick"])),(0,r.Wm)(m,{color:"primary",class:"body-2 font-weight-bold",outlined:"",onClick:l.agree},{default:(0,r.w5)((function(){return[(0,r.Uk)("OK")]})),_:1},8,["onClick"])]})),_:1})]})),_:1})]})),_:1},8,["modelValue","max-width","style","onKeydown"])}e(41539);var u={data:function(){return{dialog:!1,resolve:null,reject:null,message:null,title:null,options:{color:"grey lighten-3",width:400,zIndex:10008,noconfirm:!1}}},methods:{open:function(t,n,e){var r=this;return n||(n=t,t="Confirm"),this.dialog=!0,this.title=t,this.message=n,this.options=Object.assign(this.options,e),new Promise((function(t,n){r.resolve=t,r.reject=n}))},agree:function(){this.resolve(!0),this.dialog=!1},cancel:function(){this.resolve(!1),this.dialog=!1}}},l=e(48118);const c=(0,l.Z)(u,[["render",a]]);var s=c},11912:function(t,n,e){e.d(n,{Z:function(){return d}});var r=e(66252),o=e(3577),i=(0,r._)("i",{class:"fas fa-magic fa-2x faa-horizontal animated"},null,-1),a={class:"ml-2"};function u(t,n,e,u,l,c){var s=(0,r.up)("v-layout"),d=(0,r.up)("v-card-text"),f=(0,r.up)("v-card"),m=(0,r.up)("v-container"),h=(0,r.up)("v-dialog");return(0,r.wg)(),(0,r.j4)(h,{modelValue:t.show,"onUpdate:modelValue":n[0]||(n[0]=function(n){return t.show=n}),persistent:"",content:"","content-class":"centered-dialog"},{default:(0,r.w5)((function(){return[(0,r.Wm)(m,{"fill-height":""},{default:(0,r.w5)((function(){return[(0,r.Wm)(f,{color:"primary"},{default:(0,r.w5)((function(){return[(0,r.Wm)(d,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(s,{row:""},{default:(0,r.w5)((function(){return[i,(0,r._)("h2",a,(0,o.zw)(e.message),1)]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1},8,["modelValue"])}var l={name:"Loading",data:function(){return{show:!1}},props:{value:{type:Boolean,default:!1},message:{type:String,default:"Summoning..."}},watch:{value:function(t){this.show=t}}},c=e(48118);const s=(0,c.Z)(l,[["render",u]]);var d=s},83570:function(t,n,e){e.r(n),e.d(n,{default:function(){return m}});var r=e(66252);function o(t,n,e,o,i,a){var u=(0,r.up)("Loading"),l=(0,r.up)("v-btn"),c=(0,r.up)("v-card-title"),s=(0,r.up)("v-card"),d=(0,r.up)("Confirm");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(u,{value:i.loading},null,8,["value"]),(0,r.Wm)(s,{class:"pa-3",loading:i.fetching},{default:(0,r.w5)((function(){return[(0,r.Wm)(s,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(c,{"primary-title":""},{default:(0,r.w5)((function(){return[(0,r.Wm)(l,{onClick:a.editItem},{default:(0,r.w5)((function(){return[(0,r.Uk)(" Edit ")]})),_:1},8,["onClick"])]})),_:1})]})),_:1}),(0,r.Wm)(s,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(c,{"primary-title":""},{default:(0,r.w5)((function(){return[(0,r.Wm)(l,{disabled:i.dialog,loading:i.dialog,onClick:a.deleteItem,color:"error"},{default:(0,r.w5)((function(){return[(0,r.Uk)(" Delete ")]})),_:1},8,["disabled","loading","onClick"])]})),_:1})]})),_:1})]})),_:1},8,["loading"]),(0,r.Wm)(d,{ref:"confirm"},null,512)])}var i=e(50124),a=e(48534),u=(e(41539),e(68309),e(57658),e(1006)),l=e(11912),c=e(76284),s={components:{Loading:l.Z,Confirm:c.Z},data:function(){return{fetching:!1,loading:!1,error:"",data:{users:{}},dialog:!1,details:"",id:0}},created:function(){this.id=this.$route.params.id,this.fetchData()},methods:{fetchData:function(){var t=this;this.error="",this.fetching=!0,u.Z.get("users/"+this.id).then((function(n){console.log(n),t.data=n.data.item,document.title="Settings | "+t.data.name})).catch((function(t){return console.log(t)})).finally((function(){return t.fetching=!1}))},editItem:function(){this.$router.push("/users/"+this.$route.params.id+"/edit")},deleteItem:function(){var t=(0,a.Z)((0,i.Z)().mark((function t(){var n;return(0,i.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$refs.confirm.open("Delete "+this.data.name);case 2:if(t.sent){t.next=4;break}return t.abrupt("return");case 4:n=this,this.dialog=!0,this.loading=!0,u.Z.post("users/"+this.id,{delete:1}).then((function(t){console.log(t),t.data.error?n.error=t.data.error:n.$router.push("/users/")})).catch((function(t){return console.log(t)})).finally((function(){n.dialog=!1,n.loading=!1}));case 8:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}()}},d=e(48118);const f=(0,d.Z)(s,[["render",o]]);var m=f}}]);
//# sourceMappingURL=3570-legacy.d414783c.js.map