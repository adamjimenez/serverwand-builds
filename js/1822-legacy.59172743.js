"use strict";(self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[]).push([[1822,6260],{81815:function(e,t,n){n.d(t,{A:function(){return s}});var a=n(20641);function r(e,t,n,r,o,i){var l=(0,a.g2)("v-icon"),s=(0,a.g2)("v-alert"),u=(0,a.g2)("v-dialog");return(0,a.uX)(),(0,a.Wv)(u,{modelValue:e.show,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.show=t}),persistent:"",width:"600"},{default:(0,a.k6)((function(){return[(0,a.bF)(s,{title:n.message,color:"primary"},{prepend:(0,a.k6)((function(){return[(0,a.bF)(l,{icon:"fas fa-magic fa-2x faa-horizontal animated"})]})),_:1},8,["title"])]})),_:1},8,["modelValue"])}var o={name:"Loading",data:function(){return{show:!1}},props:{value:{type:Boolean,default:!1},message:{type:String,default:"Summoning..."}},watch:{value:function(e){this.show=e}}},i=n(66262);const l=(0,i.A)(o,[["render",r]]);var s=l},41822:function(e,t,n){n.r(t),n.d(t,{default:function(){return D}});n(62010);var a=n(20641),r=n(53751),o=n(90033),i={key:0},l={key:0},s={key:1},u=["onClick"];function c(e,t,n,c,d,f){var h=(0,a.g2)("v-alert"),m=(0,a.g2)("Loading"),p=(0,a.g2)("EditFile"),g=(0,a.g2)("v-btn"),v=(0,a.g2)("Snapshot"),b=(0,a.g2)("Restore"),k=(0,a.g2)("v-switch"),y=(0,a.g2)("v-row"),F=(0,a.g2)("v-icon"),_=(0,a.g2)("v-col"),C=(0,a.g2)("v-text-field"),w=(0,a.g2)("v-data-table"),V=(0,a.g2)("v-container"),A=(0,a.g2)("v-card"),S=(0,a.g2)("v-card-title"),I=(0,a.g2)("v-select"),W=(0,a.g2)("v-card-text"),D=(0,a.g2)("v-navigation-drawer"),E=(0,a.g2)("Confirm");return(0,a.uX)(),(0,a.CE)("div",null,[d.error?((0,a.uX)(),(0,a.Wv)(h,{key:0,type:"error",text:d.error},null,8,["text"])):(0,a.Q3)("",!0),d.message?((0,a.uX)(),(0,a.Wv)(h,{key:1,type:"info",text:d.message},null,8,["text"])):(0,a.Q3)("",!0),(0,a.bF)(m,{value:d.loading},null,8,["value"]),(0,a.bF)(p,{ref:"editFile",serverId:d.serverId,path:d.path,selected:f.selected,action:"backups",save:"false",onComplete:t[0]||(t[0]=function(e){return f.list()}),onError:f.handleError},null,8,["serverId","path","selected","onError"]),(0,a.bF)(A,{loading:d.fetching},{default:(0,a.k6)((function(){return[(0,a.bF)(V,{fluid:""},{default:(0,a.k6)((function(){return[(0,a.bF)(y,null,{default:(0,a.k6)((function(){return[(0,a.bF)(g,{onClick:f.configure,title:"Configure S3",icon:"mdi:mdi-settings"},null,8,["onClick"]),d.s3.access_key?((0,a.uX)(),(0,a.Wv)(v,{key:0,serverId:d.serverId,onComplete:f.handleComplete,onError:f.handleError},null,8,["serverId","onComplete","onError"])):(0,a.Q3)("",!0),(0,a.bF)(b,{serverId:d.serverId,path:d.path,selected:f.selected,onComplete:f.handleComplete,onError:f.handleError},null,8,["serverId","path","selected","onComplete","onError"]),(0,a.bF)(k,{modelValue:d.s3.active,"onUpdate:modelValue":t[1]||(t[1]=function(e){return d.s3.active=e}),label:"Nightly backups",class:"my-0",onChange:t[2]||(t[2]=function(e){return f.toggleBackups()}),"hide-details":"",color:"primary"},null,8,["modelValue"])]})),_:1}),d.s3.access_key?((0,a.uX)(),(0,a.CE)("div",i,["/"!==d.path?((0,a.uX)(),(0,a.CE)("div",l,[(0,a.bF)(y,null,{default:(0,a.k6)((function(){return[(0,a.bF)(_,{class:"flex-grow-0"},{default:(0,a.k6)((function(){return[(0,a.bF)(g,{icon:"",onClick:t[3]||(t[3]=function(e){return f.upLevel()}),disabled:"/"===d.path},{default:(0,a.k6)((function(){return[(0,a.bF)(F,{size:"small",icon:"mdi:mdi-arrow-up"})]})),_:1},8,["disabled"])]})),_:1}),(0,a.bF)(_,null,{default:(0,a.k6)((function(){return[(0,a.bF)(C,{modelValue:d.path,"onUpdate:modelValue":t[4]||(t[4]=function(e){return d.path=e}),class:"ma-0 pa-0",onChange:f.list,onKeydown:(0,r.jR)(f.list,["enter"]),"hide-details":""},null,8,["modelValue","onChange","onKeydown"])]})),_:1})]})),_:1}),(0,a.bF)(y,null,{default:(0,a.k6)((function(){return[(0,a.bF)(_,{cols:"12"},{default:(0,a.k6)((function(){return[(0,a.bF)(w,{headers:d.headers,items:d.items,class:"results",ref:"results","mobile-breakpoint":"0","onClick:row":t[5]||(t[5]=function(e,t){f.open(t.item)}),modelValue:d.selectedIds,"onUpdate:modelValue":t[6]||(t[6]=function(e){return d.selectedIds=e}),"show-select":""},{"item.modified":(0,a.k6)((function(e){var t=e.item;return[(0,a.eW)((0,o.v_)(f.formatDate(t.modified)),1)]})),_:1},8,["headers","items","modelValue"])]})),_:1})]})),_:1})])):((0,a.uX)(),(0,a.CE)("div",s,[(0,a.bF)(y,null,{default:(0,a.k6)((function(){return[(0,a.bF)(_,{cols:"12"},{default:(0,a.k6)((function(){return[(0,a.bF)(w,{headers:d.backupHeaders,items:d.backups,"mobile-breakpoint":"0","onClick:row":t[8]||(t[8]=function(e,t){f.browse(t.item)})},{"item.name":(0,a.k6)((function(e){var t=e.item;return[(0,a.Lk)("span",{onClick:function(e){return f.browse(t)}},(0,o.v_)(t.name),9,u)]})),"item.timestamp":(0,a.k6)((function(e){var t=e.item;return[(0,a.eW)((0,o.v_)(f.formatDate(t.timestamp)),1)]})),"item.complete":(0,a.k6)((function(e){var t=e.item;return[(0,a.eW)((0,o.v_)(t.complete?"Complete":"Incomplete"),1)]})),"item.automatic":(0,a.k6)((function(e){var t=e.item;return[(0,a.eW)((0,o.v_)(t.automatic?"Automatic":"Manual"),1)]})),"item.duration":(0,a.k6)((function(e){var t=e.item;return[(0,a.eW)((0,o.v_)(Math.round(t.duration/60))+"m ",1)]})),"item.size":(0,a.k6)((function(e){var t=e.item;return[(0,a.eW)((0,o.v_)(f.prettyBytes(t.size)),1)]})),"item.actions":(0,a.k6)((function(e){var n=e.item;return[(0,a.bF)(g,{icon:"",disabled:d.loading,loading:d.loading===n.name,onClick:[function(e){return f.deleteSnapshot(n.name)},t[7]||(t[7]=(0,r.D$)((function(){}),["stop"]))]},{default:(0,a.k6)((function(){return[(0,a.bF)(F,{size:"small"},{default:(0,a.k6)((function(){return t[14]||(t[14]=[(0,a.eW)("mdi:mdi-delete")])})),_:1})]})),_:2},1032,["disabled","loading","onClick"])]})),_:1},8,["headers","items"])]})),_:1})]})),_:1})]))])):(0,a.Q3)("",!0)]})),_:1})]})),_:1},8,["loading"]),(0,a.bF)(D,{app:"",modelValue:d.s3Drawer,"onUpdate:modelValue":t[13]||(t[13]=function(e){return d.s3Drawer=e}),temporary:"",location:"right"},{default:(0,a.k6)((function(){return[(0,a.bF)(A,null,{default:(0,a.k6)((function(){return[(0,a.bF)(S,null,{default:(0,a.k6)((function(){return t[15]||(t[15]=[(0,a.eW)(" S3 Settings ")])})),_:1}),(0,a.bF)(W,null,{default:(0,a.k6)((function(){return[(0,a.bF)(I,{modelValue:d.s3.host,"onUpdate:modelValue":t[9]||(t[9]=function(e){return d.s3.host=e}),items:d.hosts,label:"Host"},null,8,["modelValue","items"]),(0,a.bF)(C,{modelValue:d.s3.access_key,"onUpdate:modelValue":t[10]||(t[10]=function(e){return d.s3.access_key=e}),label:"Access Key",required:""},null,8,["modelValue"]),(0,a.bF)(C,{modelValue:d.s3.secret_key,"onUpdate:modelValue":t[11]||(t[11]=function(e){return d.s3.secret_key=e}),label:"Secret Key",required:""},null,8,["modelValue"]),(0,a.bF)(C,{modelValue:d.s3.bucket,"onUpdate:modelValue":t[12]||(t[12]=function(e){return d.s3.bucket=e}),label:"Bucket",required:""},null,8,["modelValue"]),(0,a.bF)(g,{disabled:d.fetching,loading:d.loading,color:"success",onClick:f.save},{default:(0,a.k6)((function(){return t[16]||(t[16]=[(0,a.eW)(" Save ")])})),_:1},8,["disabled","loading","onClick"])]})),_:1})]})),_:1})]})),_:1},8,["modelValue"]),(0,a.bF)(E,{ref:"confirm"},null,512)])}var d=n(14048),f=n(30388),h=(n(50113),n(44114),n(26099),n(99449),n(98992),n(72577),n(3949),n(23500),n(74300)),m=n(81815),p={key:0};function g(e,t,n,r,o,i){var l=(0,a.g2)("v-icon"),s=(0,a.g2)("v-btn"),u=(0,a.g2)("Confirm");return n.selected.length?((0,a.uX)(),(0,a.CE)("div",p,[(0,a.bF)(s,{onClick:t[0]||(t[0]=function(e){return i.restore()}),title:"Restore",icon:"",loading:o.fetching},{default:(0,a.k6)((function(){return[(0,a.bF)(l,null,{default:(0,a.k6)((function(){return t[1]||(t[1]=[(0,a.eW)("mdi:mdi-restore")])})),_:1})]})),_:1},8,["loading"]),(0,a.bF)(u,{ref:"confirm"},null,512)])):(0,a.Q3)("",!0)}var v=n(26301),b={components:{Confirm:v.A},props:{serverId:null,path:null,selected:null},watch:{path:function(e){this.data.path=e},selected:function(e){this.data.selected=e}},data:function(){return{fetching:!1,data:{},error:"",dialog:!1}},methods:{restore:function(){var e=(0,f.A)((0,d.A)().mark((function e(){var t,n=this;return(0,d.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$refs.confirm.open("Restore selected files?");case 2:if(e.sent){e.next=4;break}return e.abrupt("return");case 4:this.fetching=!0,t=[],this.selected.forEach((function(e){t.push(e.name)})),h.A.post("servers/"+this.serverId+"/backups",{cmd:"restore",path:this.path,files:t}).then((function(e){if(console.log(e),e.data.success)n.$emit("complete",e.data.result);else{var t=e.data.error?e.data.error:e.data;n.$emit("error",t)}})).catch((function(e){return console.log(e)})).finally((function(){return n.fetching=!1}));case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},k=n(66262);const y=(0,k.A)(b,[["render",g]]);var F=y;function _(e,t,n,r,o,i){var l=(0,a.g2)("v-icon"),s=(0,a.g2)("v-btn"),u=(0,a.g2)("v-card-title"),c=(0,a.g2)("v-text-field"),d=(0,a.g2)("v-card-text"),f=(0,a.g2)("v-card"),h=(0,a.g2)("v-dialog"),m=(0,a.g2)("v-textarea"),p=(0,a.g2)("v-divider"),g=(0,a.g2)("v-spacer"),v=(0,a.g2)("v-card-actions");return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.bF)(s,{onClick:i.newSnapshot,title:"Create snapshot",icon:""},{default:(0,a.k6)((function(){return[(0,a.bF)(l,null,{default:(0,a.k6)((function(){return t[4]||(t[4]=[(0,a.eW)("mdi:mdi-cloud-upload")])})),_:1})]})),_:1},8,["onClick"]),(0,a.bF)(h,{app:"",modelValue:o.dialog,"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.dialog=e})},{default:(0,a.k6)((function(){return[(0,a.bF)(f,{loading:o.fetching},{default:(0,a.k6)((function(){return[(0,a.bF)(u,null,{default:(0,a.k6)((function(){return t[5]||(t[5]=[(0,a.eW)(" Snapshot ")])})),_:1}),(0,a.bF)(d,null,{default:(0,a.k6)((function(){return[(0,a.bF)(c,{modelValue:o.name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return o.name=e}),label:"Name",autofocus:""},null,8,["modelValue"]),(0,a.bF)(s,{color:"primary",onClick:i.createSnapshot,disabled:0===o.name.length},{default:(0,a.k6)((function(){return t[6]||(t[6]=[(0,a.eW)(" Create snapshot ")])})),_:1},8,["onClick","disabled"])]})),_:1})]})),_:1},8,["loading"])]})),_:1},8,["modelValue"]),(0,a.bF)(h,{app:"",scrollable:"",persistent:"",modelValue:o.showMessage,"onUpdate:modelValue":t[3]||(t[3]=function(e){return o.showMessage=e})},{default:(0,a.k6)((function(){return[(0,a.bF)(f,{loading:o.fetching},{default:(0,a.k6)((function(){return[(0,a.bF)(u,null,{default:(0,a.k6)((function(){return t[7]||(t[7]=[(0,a.eW)(" Response ")])})),_:1}),(0,a.bF)(d,{id:"messageBody"},{default:(0,a.k6)((function(){return[(0,a.bF)(m,{value:o.message,readonly:"","auto-grow":"",loading:o.fetching},null,8,["value","loading"])]})),_:1}),(0,a.bF)(p),(0,a.bF)(v,null,{default:(0,a.k6)((function(){return[(0,a.bF)(g),(0,a.bF)(s,{onClick:t[2]||(t[2]=function(t){e.$emit("closed"),o.showMessage=!1}),disabled:o.fetching},{default:(0,a.k6)((function(){return t[8]||(t[8]=[(0,a.eW)(" Close ")])})),_:1},8,["disabled"])]})),_:1})]})),_:1},8,["loading"])]})),_:1},8,["modelValue"])])}var C={props:{serverId:null},data:function(){return{message:"",fetching:!1,name:"",dialog:!1,showMessage:!1}},methods:{newSnapshot:function(){this.dialog=!0},createSnapshot:function(){var e=this;this.fetching=!0,h.A.post("servers/"+this.serverId+"/backups",{cmd:"snapshot",name:this.name}).then((function(t){if(console.log(t),e.dialog=!1,t.data.success)e.$emit("complete",t.data.result);else{var n=t.data.error?t.data.error:t.data;e.$emit("error",n)}})).catch((function(e){return console.log(e)})).finally((function(){return e.fetching=!1}))}}};const w=(0,k.A)(C,[["render",_]]);var V=w,A=n(4537),S=n(27274),I={components:{Loading:m.A,Restore:F,Snapshot:V,EditFile:A.A,Confirm:v.A},data:function(){return{path:"/",error:"",message:"",backups:[],items:[],data:{},details:"",loading:null,fetching:!1,serverId:0,s3Drawer:!1,s3:{access_key:"",active:!1},selectedIds:[],hosts:[{title:"AWS",value:""},{title:"Linode (Atlanta, GA)",value:"https://us-southeast-1.linodeobjects.com"},{title:"Linode (Frankfurt, DE)",value:"https://eu-central-1.linodeobjects.com"},{title:"Linode (Newark, NJ)",value:"https://us-east-1.linodeobjects.com"},{title:"Linode (Singapore, SG)",value:"https://ap-south-1.linodeobjects.com"},{title:"Digital Ocean (NYC3)",value:"https://nyc3.digitaloceanspaces.com"},{title:"Digital Ocean (SFO3)",value:"https://sfo3.digitaloceanspaces.com"},{title:"Digital Ocean (AMS3)",value:"https://ams3.digitaloceanspaces.com"},{title:"Digital Ocean (SGP1)",value:"https://sgp1.digitaloceanspaces.com"},{title:"Digital Ocean (FRA1)",value:"https://fra1.digitaloceanspaces.com"},{title:"Vultr",value:"https://ewr1.vultrobjects.com"}],headers:[{title:"Name ",key:"name"},{title:"Size ",key:"size"},{title:"Last modified ",key:"modified"}],backupHeaders:[{title:"Name",key:"name"},{title:"Date",key:"date"},{title:"Status",key:"complete",class:"d-none d-sm-table-cell",cellClass:"d-none d-sm-table-cell"},{title:"Type",key:"automatic",class:"d-none d-sm-table-cell",cellClass:"d-none d-sm-table-cell"},{title:"Duration",key:"duration",class:"d-none d-sm-table-cell",cellClass:"d-none d-sm-table-cell"},{title:"Size",key:"size",class:"d-none d-sm-table-cell",cellClass:"d-none d-sm-table-cell"},{title:" ",key:"action"}]}},computed:{dir:function(){var e=this.path;if(!e.endsWith("/")){var t=e.lastIndexOf("/");-1!==t&&(e=e.substr(0,t))}return e},selected:function(){var e=this,t=[];return this.selectedIds.forEach((function(n){var a=e.items.find((function(e){return e.id===n}));a&&t.push(a)})),t}},created:function(){this.serverId=this.$route.params.id,this.fetchData()},methods:{fetchData:function(){var e=this;this.error="",this.message="",this.fetching=!0,h.A.post("servers/"+this.serverId+"/backups",{path:this.path}).then((function(t){console.log(t),t.data.error?e.error=t.data.error:(e.s3=t.data.s3,e.server=t.data.item,t.data.backups&&t.data.backups.length&&(e.backups=t.data.backups),document.title="Backups | "+e.server.name,e.list())})).catch((function(e){console.log(e)})).finally((function(){e.fetching=!1}))},browse:function(e){console.log(e),this.path="/"+e.name,this.list()},list:function(){var e=this;this.error="",this.message="",this.fetching=!0,h.A.post("servers/"+this.serverId+"/backups?cmd=list",{path:this.path}).then((function(t){console.log(t),t.data.error?e.error=t.data.error:(e.items=[],t.data.files.forEach((function(t){e.items.push({id:t.id,name:t.name,size:t.size?t.size:0,type:t.type,modified:t.modified,perms:t.perms,permsn:t.permsn,owner:t.owner,group:t.group,selected:!1})})))})).catch((function(e){console.log(e)})).finally((function(){e.fetching=!1}))},open:function(e){"folder"===e.type||"link"===e.type?(this.path=e.id,this.list()):"file"===e.type&&this.$refs.editFile.open(e)},upLevel:function(){console.log(this.path);var e=this.path.lastIndexOf("/");-1!==e&&(this.path=this.path.substr(0,e),this.path||(this.path="/")),this.list()},configure:function(){this.s3Drawer=!0},save:function(){var e=this;this.fetching=!0,h.A.post("servers/"+this.serverId+"/backups",this.s3).then((function(){e.fetchData(),e.s3Drawer=!1})).catch((function(t){console.log(t),e.fetching=!1}))},deleteSnapshot:function(e){var t=this;return(0,f.A)((0,d.A)().mark((function n(){return(0,d.A)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$refs.confirm.open("Delete "+e+"?");case 2:if(n.sent){n.next=4;break}return n.abrupt("return");case 4:return t.loading=e,t.error="",h.A.post("servers/"+t.serverId+"/backups",{cmd:"deleteSnapshot",name:e}).then((function(e){console.log(e),e.data.success?t.fetchData():(t.error=e.data.error,t.fetching=!1)})).catch((function(e){console.log(e)})).finally((function(){t.loading=null})),n.abrupt("return",!1);case 8:case"end":return n.stop()}}),n)})))()},handleError:function(e){this.error=e},handleComplete:function(e){console.log(e),this.message=e},toggleBackups:function(){var e=this;this.fetching=!0,this.error="",h.A.post("servers/"+this.serverId+"/backups",{active:this.s3.active}).then((function(t){console.log(t),t.data.success?e.fetchData():e.error=t.data.error})).catch((function(e){console.log(e)})).finally((function(){e.fetching=!1}))},formatDate:function(e){return S.A.formatDate(e)},prettyBytes:function(e){return S.A.prettyBytes(e)}}};const W=(0,k.A)(I,[["render",c]]);var D=W},99449:function(e,t,n){var a=n(46518),r=n(27476),o=n(77347).f,i=n(18014),l=n(655),s=n(60511),u=n(67750),c=n(41436),d=n(96395),f=r("".slice),h=Math.min,m=c("endsWith"),p=!d&&!m&&!!function(){var e=o(String.prototype,"endsWith");return e&&!e.writable}();a({target:"String",proto:!0,forced:!p&&!m},{endsWith:function(e){var t=l(u(this));s(e);var n=arguments.length>1?arguments[1]:void 0,a=t.length,r=void 0===n?a:h(i(n),a),o=l(e);return f(t,r-o.length,r)===o}})}}]);
//# sourceMappingURL=1822-legacy.59172743.js.map