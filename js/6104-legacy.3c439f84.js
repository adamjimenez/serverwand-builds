"use strict";(self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[]).push([[6104],{66104:function(e,r,t){t.r(r),t.d(r,{default:function(){return f}});var a=t(66252),n=t(3577),u=(0,a._)("h1",{style:{"text-align":"center",width:"100%"}},"ServerWand",-1),l={style:{margin:"0 8px"}};function o(e,r,t,o,d,i){var s=(0,a.up)("v-card-title"),c=(0,a.up)("v-subheader"),f=(0,a.up)("v-alert"),m=(0,a.up)("v-text-field"),p=(0,a.up)("v-card-text"),w=(0,a.up)("v-btn"),v=(0,a.up)("router-link"),h=(0,a.up)("v-form");return(0,a.wg)(),(0,a.j4)(h,{ref:"form",modelValue:e.valid,"onUpdate:modelValue":r[2]||(r[2]=function(r){return e.valid=r}),"lazy-validation":""},{default:(0,a.w5)((function(){return[(0,a.Wm)(s,{"primary-title":""},{default:(0,a.w5)((function(){return[u]})),_:1}),(0,a.Wm)(c,null,{default:(0,a.w5)((function(){return[(0,a.Uk)(" Password reminder ")]})),_:1}),e.error?((0,a.wg)(),(0,a.j4)(f,{key:0,type:"error"},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,n.zw)(e.error),1)]})),_:1})):(0,a.kq)("",!0),(0,a.Wm)(p,null,{default:(0,a.w5)((function(){return[""==e.data.code?((0,a.wg)(),(0,a.j4)(m,{key:0,modelValue:e.data.email,"onUpdate:modelValue":r[0]||(r[0]=function(r){return e.data.email=r}),rules:e.usernameRules,label:"Email",required:""},null,8,["modelValue","rules"])):(0,a.kq)("",!0),""!=e.data.code?((0,a.wg)(),(0,a.j4)(m,{key:1,type:"password",modelValue:e.data.password,"onUpdate:modelValue":r[1]||(r[1]=function(r){return e.data.password=r}),rules:e.passwordRules,label:"New password",required:""},null,8,["modelValue","rules"])):(0,a.kq)("",!0)]})),_:1}),(0,a._)("div",l,[(0,a.Wm)(w,{disabled:e.loading,loading:e.loading,color:"success",onClick:i.validate},{default:(0,a.w5)((function(){return[(0,a.Uk)(" Submit ")]})),_:1},8,["disabled","loading","onClick"])]),(0,a.Wm)(c,null,{default:(0,a.w5)((function(){return[(0,a.Wm)(v,{to:"/auth/login"},{default:(0,a.w5)((function(){return[(0,a.Uk)("Go back to login")]})),_:1})]})),_:1})]})),_:1},8,["modelValue"])}t(60228),t(70560);var d=t(1006),i={data:function(){return{valid:!0,data:{email:"",password:"",code:""},usernameRules:[function(e){return!!e||"Username is required"}],passwordRules:[function(e){return!!e||"Password is required"}],loading:!1,error:""}},created:function(){this.$route.query.c&&(this.data.code=this.$route.query.c)},methods:{validate:function(){var e=this;this.$refs.form.validate()&&(this.loading=!0,d.Z.post("auth/forgot",this.data).then((function(r){console.log(r),r.data.success?e.$router.push("/auth/login"):e.error=r.data.error})).catch((function(e){return console.log(e)})).finally((function(){return e.loading=!1})))}}},s=t(83744);const c=(0,s.Z)(i,[["render",o]]);var f=c}}]);
//# sourceMappingURL=6104-legacy.3c439f84.js.map