"use strict";(self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[]).push([[9709],{87474:function(t,e,n){n.d(e,{Z:function(){return d}});var a=n(66252),u=n(3577),r={ref:"container"};function o(t,e,n,o,i,l){var s=(0,a.up)("v-tooltip"),d=(0,a.up)("v-icon"),c=(0,a.up)("v-btn");return(0,a.wg)(),(0,a.iD)("span",r,[n.text?((0,a.wg)(),(0,a.j4)(s,{key:0,text:i.copyText,top:""},{activator:(0,a.w5)((function(t){var r=t.props;return[(0,a._)("span",(0,a.dG)(r,{onClick:e[0]||(e[0]=function(t){return l.copy(n.val)}),onMouseleave:e[1]||(e[1]=function(){return l.resetCopyText&&l.resetCopyText.apply(l,arguments)})}),(0,u.zw)(n.val),17)]})),_:1},8,["text"])):((0,a.wg)(),(0,a.j4)(s,{key:1,text:i.copyText,top:""},{activator:(0,a.w5)((function(t){var u=t.props;return[(0,a.Wm)(c,(0,a.dG)(u,{icon:"",onClick:e[2]||(e[2]=function(t){return l.copy(n.val)}),onMouseleave:l.resetCopyText}),{default:(0,a.w5)((function(){return[(0,a.Wm)(d,{size:"small"},{default:(0,a.w5)((function(){return[(0,a.Uk)("mdi:mdi-content-copy")]})),_:1})]})),_:2},1040,["onMouseleave"])]})),_:1},8,["text"]))],512)}var i={props:{val:null,text:Boolean},data:function(){return{copyText:"Copy"}},methods:{copy:function(t){var e=document.createElement("textarea");this.$refs["container"].appendChild(e),e.setAttribute("id","clipboard"),e.value=t,e.select(),document.execCommand("Copy"),e.parentNode.removeChild(e),this.copyText="Copied"},resetCopyText:function(){var t=this;setTimeout((function(){return t.copyText="Copy"}),500)}}},l=n(48118);const s=(0,l.Z)(i,[["render",o]]);var d=s},20122:function(t,e,n){n.d(e,{Z:function(){return p}});var a=n(66252),u=n(3577),r={key:0},o={key:1},i={key:2};function l(t,e,n,l,s,d){var c=(0,a.up)("v-icon"),f=(0,a.up)("v-btn"),p=(0,a.up)("v-card-title"),m=(0,a.up)("v-select"),h=(0,a.up)("v-text-field"),w=(0,a.up)("v-card-text"),v=(0,a.up)("v-card"),g=(0,a.up)("v-dialog");return(0,a.wg)(),(0,a.iD)("span",null,[n.yesno?((0,a.wg)(),(0,a.iD)("span",r,(0,u.zw)(n.val?"Yes":"No"),1)):n.password?((0,a.wg)(),(0,a.iD)("span",o,(0,u.zw)("******"))):n.hideText?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("span",i,(0,u.zw)(n.val),1)),(0,a.Wm)(f,{icon:"",onClick:e[0]||(e[0]=function(t){return d.edit(n.val)})},{default:(0,a.w5)((function(){return[(0,a.Wm)(c,{small:""},{default:(0,a.w5)((function(){return[(0,a.Uk)("mdi:mdi-pencil")]})),_:1})]})),_:1}),(0,a.Wm)(g,{app:"",modelValue:s.dialog,"onUpdate:modelValue":e[4]||(e[4]=function(t){return s.dialog=t})},{default:(0,a.w5)((function(){return[(0,a.Wm)(v,{loading:s.fetching},{default:(0,a.w5)((function(){return[(0,a.Wm)(p,null,{default:(0,a.w5)((function(){return[(0,a.Uk)(" Edit "+(0,u.zw)(n.label),1)]})),_:1}),(0,a.Wm)(w,null,{default:(0,a.w5)((function(){return[n.yesno?((0,a.wg)(),(0,a.j4)(m,{key:0,modelValue:s.data.val,"onUpdate:modelValue":e[1]||(e[1]=function(t){return s.data.val=t}),items:s.yesnoItems,label:n.label,autofocus:"",error:s.errors.length>0,"error-messages":s.errors},null,8,["modelValue","items","label","error","error-messages"])):((0,a.wg)(),(0,a.j4)(h,{key:1,modelValue:s.data.val,"onUpdate:modelValue":e[2]||(e[2]=function(t){return s.data.val=t}),label:n.label,autofocus:"",type:!n.password||s.showPassword?"text":"password","append-icon":n.password?s.showPassword?"mdi:mdi-eye-off":"mdi:mdi-eye":"","onClick:append":e[3]||(e[3]=function(t){return s.showPassword=!s.showPassword}),"error-messages":s.errors},null,8,["modelValue","label","type","append-icon","error-messages"])),(0,a.Wm)(f,{color:"primary",onClick:d.save},{default:(0,a.w5)((function(){return[(0,a.Uk)(" Save ")]})),_:1},8,["onClick"])]})),_:1})]})),_:1},8,["loading"])]})),_:1},8,["modelValue"])])}n(68309),n(41539);var s=n(1006),d={props:{name:null,val:null,label:null,password:Boolean,hideText:Boolean,path:null,yesno:Boolean},data:function(){return{fetching:!1,dialog:!1,data:{val:null},showPassword:!1,yesnoItems:[{title:"Yes",value:1},{title:"No",value:0}],errors:[]}},watch:{val:function(t){this.data.val=t}},methods:{edit:function(){this.data.val=this.val,this.dialog=!0},save:function(){this.fetching=!0,this.errors=[];var t={};t[this.name]=this.data.val;var e=this;s.Z.post(this.path,t).then((function(t){console.log(t),t.data.success?(e.val=e.data.val,e.dialog=!1,e.$emit("save")):e.errors.push(t.data.error)})).catch((function(t){return console.log(t)})).finally((function(){return e.fetching=!1}))}}},c=n(48118);const f=(0,c.Z)(d,[["render",l]]);var p=f},85760:function(t,e,n){n.r(e),n.d(e,{default:function(){return y}});var a=n(66252),u=n(3577),r=(0,a._)("strong",null,"Enabling SSL",-1),o=(0,a._)("strong",null,"Checking DNS..",-1),i=(0,a._)("strong",null,"DNS auth required: ",-1),l={key:1},s={key:0};function d(t,e,n,d,c,f){var p=this,m=(0,a.up)("v-alert"),h=(0,a.up)("v-btn"),w=(0,a.up)("Loading"),v=(0,a.up)("v-list-item-title"),g=(0,a.up)("v-list-item-subtitle"),k=(0,a.up)("v-list-item"),y=(0,a.up)("Copy"),_=(0,a.up)("Edit"),W=(0,a.up)("router-link"),U=(0,a.up)("v-switch"),x=(0,a.up)("v-divider"),C=(0,a.up)("IPRestrictions"),D=(0,a.up)("v-list"),b=(0,a.up)("v-card");return(0,a.wg)(),(0,a.iD)("div",null,[c.error?((0,a.wg)(),(0,a.j4)(m,{key:0,type:"error"},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,u.zw)(c.error),1)]})),_:1})):(0,a.kq)("",!0),c.enablingSSL?((0,a.wg)(),(0,a.j4)(m,{key:1,class:"ma-0"},{default:(0,a.w5)((function(){return[r]})),_:1})):(0,a.kq)("",!0),c.data.dns&&c.data.dns.updating?((0,a.wg)(),(0,a.j4)(m,{key:2,class:"ma-0"},{default:(0,a.w5)((function(){return[o]})),_:1})):(0,a.kq)("",!0),c.authRequired?((0,a.wg)(),(0,a.j4)(m,{key:3,class:"ma-0"},{default:(0,a.w5)((function(){return[i,(0,a.Wm)(h,{onClick:e[0]||(e[0]=function(t){return f.authPrompt()})},{default:(0,a.w5)((function(){return[(0,a.Uk)("Fix")]})),_:1})]})),_:1})):(0,a.kq)("",!0),(0,a.Wm)(w,{value:c.loading},null,8,["value"]),(0,a.Wm)(b,{class:"pa-3",loading:c.fetching},{default:(0,a.w5)((function(){return[(0,a.Wm)(D,{lines:"two"},{default:(0,a.w5)((function(){return[!c.authRequired&&c.data.server&&c.data.dns&&c.data.dns.A!=c.data.server.ip?((0,a.wg)(),(0,a.j4)(k,{key:0},{default:(0,a.w5)((function(){return[(0,a.Wm)(v,null,{default:(0,a.w5)((function(){return[(0,a.Uk)(" DNS mismatch ")]})),_:1}),(0,a.Wm)(g,null,{default:(0,a.w5)((function(){return[(0,a.Uk)((0,u.zw)(c.data.dns.A)+" != "+(0,u.zw)(c.data.server.ip)+" ",1),c.data.dns.not_set?((0,a.wg)(),(0,a.j4)(h,{key:0,onClick:e[1]||(e[1]=function(t){return f.fixDomainDns(c.data.domain)})},{default:(0,a.w5)((function(){return[(0,a.Uk)("Fix")]})),_:1})):(0,a.kq)("",!0)]})),_:1})]})),_:1})):(0,a.kq)("",!0),(0,a.Wm)(k,null,{default:(0,a.w5)((function(){return[(0,a.Wm)(v,null,{default:(0,a.w5)((function(){return[(0,a.Uk)(" Disk Usage ")]})),_:1}),(0,a.Wm)(g,null,{default:(0,a.w5)((function(){return[(0,a.Uk)((0,u.zw)(f.prettyBytes(1024*c.data.disk_usage)),1)]})),_:1})]})),_:1}),(0,a.Wm)(k,null,{default:(0,a.w5)((function(){return[(0,a.Wm)(v,null,{default:(0,a.w5)((function(){return[(0,a.Uk)(" FTP Host ")]})),_:1}),(0,a.Wm)(g,null,{default:(0,a.w5)((function(){return[(0,a.Uk)((0,u.zw)(c.data.domain)+" ",1),(0,a.Wm)(y,{val:c.data.domain},null,8,["val"])]})),_:1})]})),_:1}),(0,a.Wm)(k,null,{default:(0,a.w5)((function(){return[(0,a.Wm)(v,null,{default:(0,a.w5)((function(){return[(0,a.Uk)(" Username ")]})),_:1}),(0,a.Wm)(g,null,{default:(0,a.w5)((function(){return[(0,a.Uk)((0,u.zw)(c.data.domain)+" ",1),(0,a.Wm)(y,{val:c.data.domain},null,8,["val"])]})),_:1})]})),_:1}),(0,a.Wm)(k,null,{default:(0,a.w5)((function(){return[(0,a.Wm)(v,null,{default:(0,a.w5)((function(){return[(0,a.Uk)(" Password ")]})),_:1}),(0,a.Wm)(g,null,{default:(0,a.w5)((function(){return[(0,a.Wm)(_,{val:c.data.ftp_password,label:"FTP Password",name:"password",password:"",path:"sites/"+p.siteId+"/update",onSave:e[2]||(e[2]=function(t){return f.fetchData(!0)})},null,8,["val","path"])]})),_:1})]})),_:1}),(0,a.Wm)(k,null,{default:(0,a.w5)((function(){return[(0,a.Wm)(v,null,{default:(0,a.w5)((function(){return[(0,a.Uk)(" Path ")]})),_:1}),(0,a.Wm)(g,null,{default:(0,a.w5)((function(){var t;return[(0,a.Wm)(W,{to:"/servers/"+(null===(t=c.data.server)||void 0===t?void 0:t.id)+"/Files#"+f.path},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,u.zw)(f.path),1)]})),_:1},8,["to"]),(0,a.Wm)(y,{val:f.path},null,8,["val"])]})),_:1})]})),_:1}),c.data.origin?((0,a.wg)(),(0,a.iD)("div",l,[(0,a.Wm)(k,null,{default:(0,a.w5)((function(){return[(0,a.Wm)(v,null,{default:(0,a.w5)((function(){return[(0,a.Uk)(" Password protection ")]})),_:1}),(0,a.Wm)(g,null,{default:(0,a.w5)((function(){return[(0,a.Wm)(U,{modelValue:c.data.auth.active,"onUpdate:modelValue":e[3]||(e[3]=function(t){return c.data.auth.active=t}),label:"Active",onChange:e[4]||(e[4]=function(t){return f.toggleAuth()})},null,8,["modelValue"])]})),_:1})]})),_:1}),(0,a.Wm)(x),c.data.auth.active?((0,a.wg)(),(0,a.iD)("div",s,[(0,a.Wm)(k,null,{default:(0,a.w5)((function(){return[(0,a.Wm)(v,null,{default:(0,a.w5)((function(){return[(0,a.Uk)(" Username ")]})),_:1}),(0,a.Wm)(g,null,{default:(0,a.w5)((function(){return[(0,a.Uk)((0,u.zw)(c.data.auth.username)+" ",1),(0,a.Wm)(y,{val:c.data.auth.username,text:""},null,8,["val"])]})),_:1})]})),_:1}),(0,a.Wm)(k,null,{default:(0,a.w5)((function(){return[(0,a.Wm)(v,null,{default:(0,a.w5)((function(){return[(0,a.Uk)(" Password ")]})),_:1}),(0,a.Wm)(g,null,{default:(0,a.w5)((function(){return[(0,a.Uk)((0,u.zw)(c.data.auth.password)+" ",1),(0,a.Wm)(_,{val:c.data.auth.password,label:"Auth Password",name:"password",password:"",path:"sites/"+p.siteId+"/auth",onSave:e[5]||(e[5]=function(t){return f.fetchData(!0)})},null,8,["val","path"])]})),_:1})]})),_:1})])):(0,a.kq)("",!0)])):(0,a.kq)("",!0),(0,a.Wm)(C,{active:c.data.ip_restrictions.active,items:c.data.ip_restrictions.ips,path:"sites/"+p.siteId+"/iprestrictions",onSave:e[6]||(e[6]=function(t){return f.fetchData(!0)})},null,8,["active","items","path"])]})),_:1})]})),_:1},8,["loading"])])}n(41539);var c=n(1006),f=n(72564),p=n(48236),m=n(87474),h=n(20122),w=n(71644),v={components:{Loading:p.Z,Copy:m.Z,Edit:h.Z,IPRestrictions:w.Z},data:function(){return{siteId:null,post:null,error:null,data:{disk_usage:0,server:{},app:{},dns:{},auth:{},ip_restrictions:{}},details:"",loading:!1,fetching:!1,enablingSSL:!1,passwordPanel:[!1],passwordFormValid:!0,showPassword:!1,password:"",rules:{required:function(t){return!!t||"Required."},min:function(t){return t.length>=8||"Min 8 characters"},emailMatch:function(){return"The email and password you entered don't match"}},alias:{domain:"",dns:!0},copyText:"Copy",timer:null,authRequired:!1}},created:function(){this.fetchData()},watch:{$route:"fetchData"},computed:{path:function(){return"/var/www/vhosts/"+this.data.domain+"/"}},methods:{fetchData:function(t){var e=this;this.error="",this.siteId=this.$route.params.id,clearTimeout(e.timer),this.fetching=!0,c.Z.get("sites/"+this.siteId+"/summary",{clearCacheEntry:t}).then((function(t){console.log(t),t.data.item&&(e.data=t.data.item),e.data.domain&&(document.title="Summary | "+e.data.domain)})).catch((function(t){console.log(t)})).finally((function(){e.fetching=!1,e.data.dns&&e.data.dns.updating&&(console.log("checking dns"),e.timer=setTimeout((function(){e.fetchData(!0)}),1e4))}))},fixDomainDns:function(){var t=this;this.error="",this.loading=!0,c.Z.post("sites/"+t.siteId+"/fixdns",{}).then((function(e){console.log(e),t.loading=!1,e.data.success?t.fetchData(!0):"auth"==e.data.error?t.authRequired=!0:t.error=e.data.error})).catch((function(t){console.log(t)}))},authPrompt:function(){this.authRequired=!1,window.open("https://serverwand.com/account/services/"+this.data.server.dns)},toggleAuth:function(){var t=this;this.fetching=!0,this.error="",c.Z.post("sites/"+this.siteId+"/auth",{status:this.data.auth.active}).then((function(e){console.log(e),e.data.success?t.fetchData(!0):t.error=e.data.error})).catch((function(t){console.log(t)})).finally((function(){t.fetching=!1}))},prettyBytes:function(t){return f.Z.prettyBytes(t)}}},g=n(48118);const k=(0,g.Z)(v,[["render",d]]);var y=k}}]);
//# sourceMappingURL=9709-legacy.77329b89.js.map