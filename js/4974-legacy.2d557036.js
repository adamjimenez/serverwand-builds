"use strict";(self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[]).push([[4974],{26468:function(t,e,n){n.r(e),n.d(e,{default:function(){return w}});n(68309);var r=n(66252),i=n(3577),a=n(49963);function o(t,e,n,o,u,c){var s=(0,r.up)("v-alert"),l=(0,r.up)("Loading"),f=(0,r.up)("v-icon"),d=(0,r.up)("v-btn"),h=(0,r.up)("v-col"),p=(0,r.up)("Upload"),m=(0,r.up)("v-row"),g=(0,r.up)("v-container"),v=(0,r.up)("v-list-item"),w=(0,r.up)("v-list"),k=(0,r.up)("v-card-text"),Z=(0,r.up)("v-card"),b=(0,r.up)("Confirm");return(0,r.wg)(),(0,r.iD)("div",null,[u.error?((0,r.wg)(),(0,r.j4)(s,{key:0,type:"error"},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,i.zw)(u.error),1)]})),_:1})):(0,r.kq)("",!0),(0,r.Wm)(l,{value:u.loading},null,8,["value"]),(0,r.Wm)(Z,{class:"pa-3",loading:u.fetching,ref:"results"},{default:(0,r.w5)((function(){return[(0,r.Wm)(g,{fluid:""},{default:(0,r.w5)((function(){return[(0,r.Wm)(m,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(h,{class:"flex-grow-0"},{default:(0,r.w5)((function(){return[(0,r.Wm)(d,{title:"Create backup",ref:"uploadFolderButton",onClick:e[0]||(e[0]=function(t){return c.createBackup()})},{default:(0,r.w5)((function(){return[(0,r.Wm)(f,null,{default:(0,r.w5)((function(){return[(0,r.Uk)("mdi:mdi-plus")]})),_:1})]})),_:1},512)]})),_:1}),(0,r.Wm)(p,{serverId:u.serverId,path:u.path,dropZone:t.$refs.results,onComplete:e[1]||(e[1]=function(t){return c.fetchData()}),onError:c.handleError},null,8,["serverId","path","dropZone","onError"])]})),_:1})]})),_:1}),u.data.items.length>0?((0,r.wg)(),(0,r.j4)(w,{key:0},{default:(0,r.w5)((function(){return[(0,r.Wm)(w,{group:""},{default:(0,r.w5)((function(){return[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(u.data.items,(function(t,n){return(0,r.wg)(),(0,r.j4)(v,{key:"item-".concat(n),title:t.name,subtitle:t.date+" - "+c.prettyBytes(t.size),onClick:function(e){return c.restore(t)}},{append:(0,r.w5)((function(){return[(0,r.Wm)(d,{icon:"",disabled:u.fetching,loading:u.fetching,onClick:[function(e){return c.deleteItem(t)},e[2]||(e[2]=(0,a.iM)((function(){}),["stop"]))]},{default:(0,r.w5)((function(){return[(0,r.Wm)(f,{size:"small"},{default:(0,r.w5)((function(){return[(0,r.Uk)("mdi:mdi-delete")]})),_:1})]})),_:2},1032,["disabled","loading","onClick"])]})),_:2},1032,["title","subtitle","onClick"])})),128))]})),_:1})]})),_:1})):((0,r.wg)(),(0,r.j4)(k,{key:1},{default:(0,r.w5)((function(){return[(0,r.Uk)(" Empty ")]})),_:1}))]})),_:1},8,["loading"]),(0,r.Wm)(b,{ref:"confirm"},null,512)])}var u=n(6835),c=n(48534),s=n(82482),l=(n(41539),n(1006)),f=n(48236),d=n(98686),h=n(90947),p=n(72564),m={components:{Loading:f.Z,Upload:d.Z,Confirm:h.Z},data:function(){var t;return t={path:"/",domainId:null,post:null,error:null,data:{domain:"",items:[]},loading:!1,details:""},(0,s.Z)(t,"loading",!1),(0,s.Z)(t,"fetching",!1),(0,s.Z)(t,"alias",{domain:"",dns:!1}),(0,s.Z)(t,"timer",null),(0,s.Z)(t,"serverId",0),(0,s.Z)(t,"progress",0),t},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;this.error="",this.domainId=this.$route.params.id,clearTimeout(t.timer),this.fetching=!0,this.progress=0,l.Z.get("sites/"+this.domainId+"/backups").then((function(e){if(console.log(e),e.data.error)return t.error=e.data.error,!1;t.data=e.data,document.title="Backups | "+t.data.domain,t.serverId=t.data.server.id,t.path="/var/www/vhosts/"+t.data.server.ip+"/public/backups"})).catch((function(t){console.log(t)})).finally((function(){t.fetching=!1}))},createBackup:function(){var t=this;this.fetching=!0,this.error="",l.Z.get("sites/"+this.domainId+"/backups/create").then((function(e){console.log(e),e.data.success?t.fetchData():t.error=e.data.error})).catch((function(t){console.log(t)})).finally((function(){t.fetching=!1}))},download:function(t){console.log("https://"+this.data.server.ip+"/backups/"+t.name),window.open("https://"+this.data.server.ip+"/backups/"+t.name)},deleteItem:function(){var t=(0,c.Z)((0,u.Z)().mark((function t(e){var n;return(0,u.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$refs.confirm.open("Confirm","Delete "+e.name);case 2:if(!t.sent){t.next=6;break}n=this,n.fetching=!0,l.Z.post("sites/"+this.domainId+"/backups",{ids:[e.name]}).then((function(){n.fetchData()})).catch((function(t){console.log(t),n.fetching=!1}));case 6:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),restore:function(){var t=(0,c.Z)((0,u.Z)().mark((function t(e){var n;return(0,u.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$refs.confirm.open("Confirm","Restore "+e.name);case 2:if(!t.sent){t.next=6;break}n=this,n.fetching=!0,l.Z.post("sites/"+this.domainId+"/backups",{restore:e.name}).then((function(){n.fetchData()})).catch((function(t){console.log(t),n.fetching=!1}));case 6:case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),handleError:function(t){this.error=t},handleLoading:function(t){this.fetching=t},prettyBytes:function(t){return p.Z.prettyBytes(t)}}},g=n(48118);const v=(0,g.Z)(m,[["render",o]]);var w=v}}]);
//# sourceMappingURL=4974-legacy.2d557036.js.map