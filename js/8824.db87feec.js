"use strict";(self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[]).push([[8824],{68824:function(r,e,t){t.r(e),t.d(e,{default:function(){return f}});var n=t(20641),o=t(90033);function a(r,e,t,a,i,u){const l=(0,n.g2)("v-alert"),c=(0,n.g2)("v-form");return(0,n.uX)(),(0,n.Wv)(c,{ref:"form",modelValue:r.valid,"onUpdate:modelValue":e[0]||(e[0]=e=>r.valid=e),"lazy-validation":""},{default:(0,n.k6)((()=>[r.error?((0,n.uX)(),(0,n.Wv)(l,{key:0,type:"error"},{default:(0,n.k6)((()=>[(0,n.eW)((0,o.v_)(r.error),1)])),_:1})):(0,n.Q3)("",!0)])),_:1},8,["modelValue"])}t(44114);var i=t(74300),u=t(75220);const l=(0,u.lq)();var c={data:()=>({valid:!0,email:"",usernameRules:[r=>!!r||"Username is required"],dialog:!1,loading:!1,error:""}),created(){this.logout()},methods:{logout(){i.A.post("auth/logout").then((r=>{if(console.log(r),r.data.success)return l.push("/auth/login"),!1;this.error=r.data.error})).catch((r=>{console.log(r)})).finally((()=>{this.dialog=!1,this.loading=!1}))}}},s=t(66262);const d=(0,s.A)(c,[["render",a]]);var f=d},34527:function(r,e,t){var n=t(43724),o=t(34376),a=TypeError,i=Object.getOwnPropertyDescriptor,u=n&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(r){return r instanceof TypeError}}();r.exports=u?function(r,e){if(o(r)&&!i(r,"length").writable)throw new a("Cannot set read only .length");return r.length=e}:function(r,e){return r.length=e}},96837:function(r){var e=TypeError,t=9007199254740991;r.exports=function(r){if(r>t)throw e("Maximum allowed index exceeded");return r}},34376:function(r,e,t){var n=t(22195);r.exports=Array.isArray||function(r){return"Array"===n(r)}},44114:function(r,e,t){var n=t(46518),o=t(48981),a=t(26198),i=t(34527),u=t(96837),l=t(79039),c=l((function(){return 4294967297!==[].push.call({length:4294967296},1)})),s=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(r){return r instanceof TypeError}},d=c||!s();n({target:"Array",proto:!0,arity:1,forced:d},{push:function(r){var e=o(this),t=a(e),n=arguments.length;u(t+n);for(var l=0;l<n;l++)e[t]=arguments[l],t++;return i(e,t),t}})}}]);
//# sourceMappingURL=8824.db87feec.js.map