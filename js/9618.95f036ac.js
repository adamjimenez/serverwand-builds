"use strict";(self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[]).push([[9618],{93992:function(e,s,r){r.d(s,{Z:function(){return d}});var t=r(66252);function a(e,s,r,a,o,l){const n=(0,t.up)("v-icon");return"linode"===r.provider?((0,t.wg)(),(0,t.j4)(n,{key:0},{default:(0,t.w5)((()=>[(0,t.Uk)("fab fa-linode")])),_:1})):"digitalocean"===r.provider?((0,t.wg)(),(0,t.j4)(n,{key:1},{default:(0,t.w5)((()=>[(0,t.Uk)("fab fa-digital-ocean")])),_:1})):((0,t.wg)(),(0,t.j4)(n,{key:2},{default:(0,t.w5)((()=>[(0,t.Uk)("fas fa-server")])),_:1}))}var o={props:{provider:null}},l=r(48118);const n=(0,l.Z)(o,[["render",a]]);var d=n},59618:function(e,s,r){r.r(s),r.d(s,{default:function(){return v}});var t=r(66252);const a=["innerHTML"],o={key:0},l={key:1};function n(e,s,r,n,d,u){const i=(0,t.up)("v-alert"),c=(0,t.up)("ServerIcon"),h=(0,t.up)("v-list-item"),v=(0,t.up)("v-col"),m=(0,t.up)("v-icon"),f=(0,t.up)("v-btn"),p=(0,t.up)("v-row"),w=(0,t.up)("v-container"),g=(0,t.up)("v-tab"),_=(0,t.up)("v-tabs"),k=(0,t.up)("router-view"),U=(0,t.up)("v-card-title"),W=(0,t.up)("v-select"),y=(0,t.up)("v-card-text"),b=(0,t.up)("v-card"),I=(0,t.up)("v-dialog");return(0,t.wg)(),(0,t.iD)("div",null,[d.error?((0,t.wg)(),(0,t.j4)(i,{key:0,type:"error"},{default:(0,t.w5)((()=>[(0,t._)("div",{innerHTML:d.error},null,8,a)])),_:1})):(0,t.kq)("",!0),d.fetching?(0,t.kq)("",!0):((0,t.wg)(),(0,t.j4)(w,{key:1,fluid:""},{default:(0,t.w5)((()=>[(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t.Wm)(v,null,{default:(0,t.w5)((()=>[(0,t.Wm)(h,{title:d.data.name,subtitle:d.data.hostname},{prepend:(0,t.w5)((()=>[(0,t.Wm)(c,{provider:d.data.provider},null,8,["provider"])])),_:1},8,["title","subtitle"])])),_:1}),(0,t.Wm)(v,{class:"text-right"},{default:(0,t.w5)((()=>[(0,t.Wm)(f,{color:"success",onClick:u.terminal},{default:(0,t.w5)((()=>[(0,t.Wm)(m,{small:""},{default:(0,t.w5)((()=>[(0,t.Uk)("fas fa-terminal")])),_:1})])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})),(0,t.Wm)(_,{"show-arrows":""},{default:(0,t.w5)((()=>[(0,t.Wm)(g,{to:"/servers/"+e.serverId+"/summary"},{default:(0,t.w5)((()=>[(0,t.Uk)("Summary")])),_:1},8,["to"]),(0,t.Wm)(g,{to:"/servers/"+e.serverId+"/Files"},{default:(0,t.w5)((()=>[(0,t.Uk)("Files")])),_:1},8,["to"]),(0,t.Wm)(g,{to:"/servers/"+e.serverId+"/services"},{default:(0,t.w5)((()=>[(0,t.Uk)("Services")])),_:1},8,["to"]),(0,t.Wm)(g,{to:"/servers/"+e.serverId+"/cronjobs"},{default:(0,t.w5)((()=>[(0,t.Uk)("Cronjobs")])),_:1},8,["to"]),(0,t.Wm)(g,{to:"/servers/"+e.serverId+"/database"},{default:(0,t.w5)((()=>[(0,t.Uk)("Database")])),_:1},8,["to"]),(0,t.Wm)(g,{to:"/servers/"+e.serverId+"/systemusers"},{default:(0,t.w5)((()=>[(0,t.Uk)("System users")])),_:1},8,["to"]),(0,t.Wm)(g,{to:"/servers/"+e.serverId+"/firewall"},{default:(0,t.w5)((()=>[(0,t.Uk)("Firewall")])),_:1},8,["to"]),(0,t.Wm)(g,{to:"/servers/"+e.serverId+"/mail"},{default:(0,t.w5)((()=>[(0,t.Uk)("Mail")])),_:1},8,["to"]),(0,t.Wm)(g,{to:"/servers/"+e.serverId+"/apps"},{default:(0,t.w5)((()=>[(0,t.Uk)("Apps")])),_:1},8,["to"]),(0,t.Wm)(g,{to:"/servers/"+e.serverId+"/logs"},{default:(0,t.w5)((()=>[(0,t.Uk)("Logs")])),_:1},8,["to"]),(0,t.Wm)(g,{to:"/servers/"+e.serverId+"/backups"},{default:(0,t.w5)((()=>[(0,t.Uk)("Cloud backups")])),_:1},8,["to"]),(0,t.Wm)(g,{to:"/servers/"+e.serverId+"/settings"},{default:(0,t.w5)((()=>[(0,t.Uk)("Settings")])),_:1},8,["to"])])),_:1}),(0,t.Wm)(k),(0,t.Wm)(I,{modelValue:d.chooseUser,"onUpdate:modelValue":s[1]||(s[1]=e=>d.chooseUser=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(b,{loading:d.fetching},{default:(0,t.w5)((()=>[(0,t.Wm)(U,null,{default:(0,t.w5)((()=>[(0,t.Uk)(" Open Secure Shell ")])),_:1}),(0,t.Wm)(y,null,{default:(0,t.w5)((()=>[d.users.length?((0,t.wg)(),(0,t.iD)("div",o,[(0,t.Wm)(W,{modelValue:d.ssh_username,"onUpdate:modelValue":s[0]||(s[0]=e=>d.ssh_username=e),items:d.users,label:"User"},null,8,["modelValue","items"]),(0,t.Wm)(f,{disabled:0===d.ssh_username.length,color:"success",onClick:u.saveKeyAndContinue,right:"",class:"ml-3"},{default:(0,t.w5)((()=>[(0,t.Uk)(" Save Key and Continue ")])),_:1},8,["disabled","onClick"])])):d.fetching?(0,t.kq)("",!0):((0,t.wg)(),(0,t.iD)("div",l," No system users, add one and try again. "))])),_:1})])),_:1},8,["loading"])])),_:1},8,["modelValue"])])}var d=r(1006),u=r(93992),i={components:{ServerIcon:u.Z},data(){return{error:"",data:{users:{}},ssh_username:"",users:[],details:"",fetching:!1,chooseUser:!1}},created(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData(){var e=this;this.error="",this.serverId=this.$route.params.id,d.Z.get("servers/"+this.serverId).then((s=>{console.log(s),s.data.error&&(e.error=s.data.error),s.data.item&&(e.data=s.data.item,window.server=e.data)})).catch((e=>console.log(e))).finally((()=>e.fetching=!1))},fetchUsers(){var e=this;this.error="",this.fetching=!0,e.chooseUser=!0,d.Z.get("servers/"+this.serverId+"/systemusers").then((s=>{if(console.log(s),s.data.error)return e.error=s.data.error,!1;s.data.item.users.forEach((s=>{e.users.push({text:s.name,value:s.name})}))})).catch((e=>console.log(e))).finally((()=>e.fetching=!1))},saveKey(e){var s=this;d.Z.post("servers/"+s.serverId+"/systemusers/"+s.ssh_username,{key:e}).then((e=>{console.log(e),e.data.success?s.saveSSHUser():(s.fetching=!1,s.error=e.data.error)})).catch((e=>{s.fetching=!1,console.log(e)}))},saveSSHUser(){var e=this;e.fetching=!0,d.Z.post("servers/"+this.serverId+"/savesshuser",{ssh_username:e.ssh_username}).then((s=>{console.log(s),s.data.success?(e.data.ssh_username=e.ssh_username,e.terminal()):e.error=s.data.error})).catch((e=>console.log(e))).finally((()=>{e.fetching=!1,e.chooseUser=!1}))},saveKeyAndContinue(){var e=this;e.fetching=!0,d.Z.post("https://shiftedit.net/api/prefs").then((s=>{console.log(s),s.data.error?(e.error=s.data.error,e.chooseUser=!1):(console.log(s.data.public_key),e.saveKey(s.data.public_key))})).catch((e=>console.log(e)))},terminal(){if(this.data.ssh_username){console.log("open ssh "+this.data.ssh_username);var e="http://shiftedit.net/ssh/?host="+this.data.hostname+"&user="+this.data.ssh_username;window.ssh_path&&(e+="&path="+window.ssh_path),window.open(e)}else this.fetchUsers()}}},c=r(48118);const h=(0,c.Z)(i,[["render",n]]);var v=h}}]);
//# sourceMappingURL=9618.95f036ac.js.map