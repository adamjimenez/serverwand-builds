"use strict";(self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[]).push([[6260,9293],{26301:function(t,e,r){r.d(e,{A:function(){return u}});var n=r(20641),o=r(90033),i=r(53751);function a(t,e,r,a,s,l){const c=(0,n.g2)("v-toolbar-title"),u=(0,n.g2)("v-toolbar"),d=(0,n.g2)("v-card-text"),f=(0,n.g2)("v-spacer"),h=(0,n.g2)("v-btn"),p=(0,n.g2)("v-card-actions"),g=(0,n.g2)("v-card"),v=(0,n.g2)("v-dialog");return(0,n.uX)(),(0,n.Wv)(v,{modelValue:t.dialog,"onUpdate:modelValue":e[0]||(e[0]=e=>t.dialog=e),"max-width":t.options.width,style:(0,o.Tr)({zIndex:t.options.zIndex}),onKeydown:(0,i.jR)(l.cancel,["esc"]),persistent:""},{default:(0,n.k6)((()=>[(0,n.bF)(g,null,{default:(0,n.k6)((()=>[(0,n.bF)(u,{dark:"",color:t.options.color,dense:"",flat:""},{default:(0,n.k6)((()=>[(0,n.bF)(c,{class:"text-body-2 font-weight-bold grey--text"},{default:(0,n.k6)((()=>[(0,n.eW)((0,o.v_)(t.title),1)])),_:1})])),_:1},8,["color"]),(0,n.bo)((0,n.bF)(d,{class:"pa-4 black--text",innerHTML:t.message},null,8,["innerHTML"]),[[i.aG,!!t.message]]),(0,n.bF)(p,{class:"pt-3"},{default:(0,n.k6)((()=>[(0,n.bF)(f),t.options.noconfirm?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.Wv)(h,{key:0,color:"grey",text:"",class:"body-2 font-weight-bold",onClick:l.cancel},{default:(0,n.k6)((()=>e[1]||(e[1]=[(0,n.eW)("Cancel")]))),_:1},8,["onClick"])),(0,n.bF)(h,{color:"primary",class:"body-2 font-weight-bold",outlined:"",onClick:l.agree},{default:(0,n.k6)((()=>e[2]||(e[2]=[(0,n.eW)("OK")]))),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue","max-width","style","onKeydown"])}var s={data:function(){return{dialog:!1,resolve:null,reject:null,message:null,title:null,options:{color:"grey lighten-3",width:400,zIndex:10008,noconfirm:!1}}},methods:{open(t,e,r){return e||(e=t,t="Confirm"),this.dialog=!0,this.title=t,this.message=e,this.options=Object.assign(this.options,r),new Promise(((t,e)=>{this.resolve=t,this.reject=e}))},agree(){this.resolve(!0),this.dialog=!1},cancel(){this.resolve(!1),this.dialog=!1}}},l=r(66262);const c=(0,l.A)(s,[["render",a]]);var u=c},81815:function(t,e,r){r.d(e,{A:function(){return l}});var n=r(20641);function o(t,e,r,o,i,a){const s=(0,n.g2)("v-icon"),l=(0,n.g2)("v-alert"),c=(0,n.g2)("v-dialog");return(0,n.uX)(),(0,n.Wv)(c,{modelValue:t.show,"onUpdate:modelValue":e[0]||(e[0]=e=>t.show=e),persistent:"",width:"600"},{default:(0,n.k6)((()=>[(0,n.bF)(l,{title:r.message,color:"primary"},{prepend:(0,n.k6)((()=>[(0,n.bF)(s,{icon:"fas fa-magic fa-2x faa-horizontal animated"})])),_:1},8,["title"])])),_:1},8,["modelValue"])}var i={name:"Loading",data:()=>({show:!1}),props:{value:{type:Boolean,default:!1},message:{type:String,default:"Summoning..."}},watch:{value:function(t){this.show=t}}},a=r(66262);const s=(0,a.A)(i,[["render",o]]);var l=s},39293:function(t,e,r){r.r(e),r.d(e,{default:function(){return h}});var n=r(20641),o=r(53751);const i={key:0,style:{"font-size":"12px"},class:"mt-3"};function a(t,e,r,a,s,l){const c=(0,n.g2)("v-alert"),u=(0,n.g2)("Loading"),d=(0,n.g2)("v-btn"),f=(0,n.g2)("v-card-actions"),h=(0,n.g2)("v-icon"),p=(0,n.g2)("v-list-item"),g=(0,n.g2)("v-list"),v=(0,n.g2)("v-card"),m=(0,n.g2)("v-select"),y=(0,n.g2)("v-card-text"),w=(0,n.g2)("v-dialog"),b=(0,n.g2)("Confirm");return(0,n.uX)(),(0,n.CE)("div",null,[s.error?((0,n.uX)(),(0,n.Wv)(c,{key:0,type:"error",text:s.error},null,8,["text"])):(0,n.Q3)("",!0),(0,n.bF)(u,{value:s.loading},null,8,["value"]),(0,n.bF)(v,{loading:s.fetching},{default:(0,n.k6)((()=>[(0,n.bF)(f,null,{default:(0,n.k6)((()=>[(0,n.bF)(d,{onClick:e[0]||(e[0]=t=>l.addItem()),icon:"mdi:mdi-plus"})])),_:1}),(0,n.bF)(g,{"max-width":"600"},{default:(0,n.k6)((()=>[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(s.data.servers,((t,r)=>((0,n.uX)(),(0,n.Wv)(p,{key:`item-${r}`,title:t.name},{append:(0,n.k6)((()=>[(0,n.bF)(d,{icon:"",disabled:s.fetching,loading:s.loading===t.name,onClick:[e=>l.deleteItem(t),e[1]||(e[1]=(0,o.D$)((()=>{}),["stop"]))]},{default:(0,n.k6)((()=>[(0,n.bF)(h,{size:"small"},{default:(0,n.k6)((()=>e[4]||(e[4]=[(0,n.eW)("mdi:mdi-delete")]))),_:1})])),_:2},1032,["disabled","loading","onClick"])])),_:2},1032,["title"])))),128))])),_:1})])),_:1},8,["loading"]),(0,n.bF)(w,{modelValue:s.drawer,"onUpdate:modelValue":e[3]||(e[3]=t=>s.drawer=t),"max-width":"600"},{default:(0,n.k6)((()=>[(0,n.bF)(v,{title:"Server"},{default:(0,n.k6)((()=>[(0,n.bF)(y,null,{default:(0,n.k6)((()=>[(0,n.bF)(m,{modelValue:s.data.server,"onUpdate:modelValue":e[2]||(e[2]=t=>s.data.server=t),items:s.servers,label:"Server",autofocus:""},null,8,["modelValue","items"]),(0,n.bF)(d,{disabled:!s.data.server,loading:s.dialog,color:"success",onClick:l.saveItem},{default:(0,n.k6)((()=>e[5]||(e[5]=[(0,n.eW)(" Save ")]))),_:1},8,["disabled","loading","onClick"]),s.useMasterPassword?((0,n.uX)(),(0,n.CE)("p",i," Note: Server keys shared with other users will not be encrypted with your master password ")):(0,n.Q3)("",!0)])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,n.bF)(b,{ref:"confirm"},null,512)])}r(44114),r(98992),r(3949);var s=r(74300),l=r(81815),c=r(26301),u={components:{Loading:l.A,Confirm:c.A},data(){return{fetching:!1,loading:null,id:null,error:null,data:{},servers:[],dialog:!1,details:"",rules:{required:t=>!!t||"Required.",min:t=>t.length>=8||"Min 8 characters"},server:{name:""},drawer:!1,useMasterPassword:!1}},created(){this.id=this.$route.params.id,this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData(){this.error="",this.fetching=!0,s.A.get("teams/"+this.id).then((t=>{console.log(t),this.data=t.data.item,document.title="Servers | "+this.data.name})).catch((t=>console.log(t))).finally((()=>this.fetching=!1)),s.A.get("servers/").then((t=>{console.log(t),t.data.items.forEach((t=>{this.servers.push({title:t.name,value:t.id})}))})).catch((t=>console.log(t))).finally((()=>this.loading=!1)),s.A.get("settings/profile").then((t=>this.useMasterPassword=t.data.profile.prefs.useMasterPassword))},addItem(){this.server.name="",this.drawer=!0},saveItem(){this.data.server&&(this.details="",this.dialog=!0,this.error="",s.A.post("teams/"+this.id+"/servers",{server:this.data.server}).then((t=>{console.log(t),t.data.success?(this.drawer=!1,this.fetchData()):this.error=t.data.error})).catch((t=>{console.log(t),this.dialog=!1})).finally((()=>this.dialog=!1)))},deleteItem:async function(t){await this.$refs.confirm.open("Delete "+t.name)&&(this.error="",this.dialog=!0,this.loading=t.name,s.A.post("teams/"+this.id+"/servers",{delete:1,server:t.id}).then((t=>{console.log(t),t.data.error?this.error=t.data.error:this.fetchData()})).catch((t=>console.log(t))).finally((()=>{this.dialog=!1,this.loading=null})))}}},d=r(66262);const f=(0,d.A)(u,[["render",a]]);var h=f},90679:function(t,e,r){var n=r(1625),o=TypeError;t.exports=function(t,e){if(n(e,t))return t;throw new o("Incorrect invocation")}},34527:function(t,e,r){var n=r(43724),o=r(34376),i=TypeError,a=Object.getOwnPropertyDescriptor,s=n&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=s?function(t,e){if(o(t)&&!a(t,"length").writable)throw new i("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},36955:function(t,e,r){var n=r(92140),o=r(94901),i=r(22195),a=r(78227),s=a("toStringTag"),l=Object,c="Arguments"===i(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(r){}};t.exports=n?i:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=u(e=l(t),s))?r:c?i(e):"Object"===(n=i(e))&&o(e.callee)?"Arguments":n}},12211:function(t,e,r){var n=r(79039);t.exports=!n((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},97040:function(t,e,r){var n=r(43724),o=r(24913),i=r(6980);t.exports=function(t,e,r){n?o.f(t,e,i(0,r)):t[e]=r}},62106:function(t,e,r){var n=r(50283),o=r(24913);t.exports=function(t,e,r){return r.get&&n(r.get,e,{getter:!0}),r.set&&n(r.set,e,{setter:!0}),o.f(t,e,r)}},96837:function(t){var e=TypeError,r=9007199254740991;t.exports=function(t){if(t>r)throw e("Maximum allowed index exceeded");return t}},76080:function(t,e,r){var n=r(27476),o=r(79306),i=r(40616),a=n(n.bind);t.exports=function(t,e){return o(t),void 0===e?t:i?a(t,e):function(){return t.apply(e,arguments)}}},27476:function(t,e,r){var n=r(22195),o=r(79504);t.exports=function(t){if("Function"===n(t))return o(t)}},1767:function(t){t.exports=function(t){return{iterator:t,next:t.next,done:!1}}},50851:function(t,e,r){var n=r(36955),o=r(55966),i=r(64117),a=r(26269),s=r(78227),l=s("iterator");t.exports=function(t){if(!i(t))return o(t,l)||o(t,"@@iterator")||a[n(t)]}},70081:function(t,e,r){var n=r(69565),o=r(79306),i=r(28551),a=r(16823),s=r(50851),l=TypeError;t.exports=function(t,e){var r=arguments.length<2?s(t):e;if(o(r))return i(n(r,t));throw new l(a(t)+" is not iterable")}},20397:function(t,e,r){var n=r(97751);t.exports=n("document","documentElement")},44209:function(t,e,r){var n=r(78227),o=r(26269),i=n("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||a[i]===t)}},34376:function(t,e,r){var n=r(22195);t.exports=Array.isArray||function(t){return"Array"===n(t)}},72652:function(t,e,r){var n=r(76080),o=r(69565),i=r(28551),a=r(16823),s=r(44209),l=r(26198),c=r(1625),u=r(70081),d=r(50851),f=r(9539),h=TypeError,p=function(t,e){this.stopped=t,this.result=e},g=p.prototype;t.exports=function(t,e,r){var v,m,y,w,b,x,k,O=r&&r.that,_=!(!r||!r.AS_ENTRIES),A=!(!r||!r.IS_RECORD),F=!(!r||!r.IS_ITERATOR),I=!(!r||!r.INTERRUPTED),E=n(e,O),T=function(t){return v&&f(v,"normal",t),new p(!0,t)},j=function(t){return _?(i(t),I?E(t[0],t[1],T):E(t[0],t[1])):I?E(t,T):E(t)};if(A)v=t.iterator;else if(F)v=t;else{if(m=d(t),!m)throw new h(a(t)+" is not iterable");if(s(m)){for(y=0,w=l(t);w>y;y++)if(b=j(t[y]),b&&c(g,b))return b;return new p(!1)}v=u(t,m)}x=A?t.next:v.next;while(!(k=o(x,v)).done){try{b=j(k.value)}catch(C){f(v,"throw",C)}if("object"==typeof b&&b&&c(g,b))return b}return new p(!1)}},9539:function(t,e,r){var n=r(69565),o=r(28551),i=r(55966);t.exports=function(t,e,r){var a,s;o(t);try{if(a=i(t,"return"),!a){if("throw"===e)throw r;return r}a=n(a,t)}catch(l){s=!0,a=l}if("throw"===e)throw r;if(s)throw a;return o(a),r}},57657:function(t,e,r){var n,o,i,a=r(79039),s=r(94901),l=r(20034),c=r(2360),u=r(42787),d=r(36840),f=r(78227),h=r(96395),p=f("iterator"),g=!1;[].keys&&(i=[].keys(),"next"in i?(o=u(u(i)),o!==Object.prototype&&(n=o)):g=!0);var v=!l(n)||a((function(){var t={};return n[p].call(t)!==t}));v?n={}:h&&(n=c(n)),s(n[p])||d(n,p,(function(){return this})),t.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:g}},26269:function(t){t.exports={}},2360:function(t,e,r){var n,o=r(28551),i=r(96801),a=r(88727),s=r(30421),l=r(20397),c=r(4055),u=r(66119),d=">",f="<",h="prototype",p="script",g=u("IE_PROTO"),v=function(){},m=function(t){return f+p+d+t+f+"/"+p+d},y=function(t){t.write(m("")),t.close();var e=t.parentWindow.Object;return t=null,e},w=function(){var t,e=c("iframe"),r="java"+p+":";return e.style.display="none",l.appendChild(e),e.src=String(r),t=e.contentWindow.document,t.open(),t.write(m("document.F=Object")),t.close(),t.F},b=function(){try{n=new ActiveXObject("htmlfile")}catch(e){}b="undefined"!=typeof document?document.domain&&n?y(n):w():y(n);var t=a.length;while(t--)delete b[h][a[t]];return b()};s[g]=!0,t.exports=Object.create||function(t,e){var r;return null!==t?(v[h]=o(t),r=new v,v[h]=null,r[g]=t):r=b(),void 0===e?r:i.f(r,e)}},96801:function(t,e,r){var n=r(43724),o=r(48686),i=r(24913),a=r(28551),s=r(25397),l=r(71072);e.f=n&&!o?Object.defineProperties:function(t,e){a(t);var r,n=s(e),o=l(e),c=o.length,u=0;while(c>u)i.f(t,r=o[u++],n[r]);return t}},42787:function(t,e,r){var n=r(39297),o=r(94901),i=r(48981),a=r(66119),s=r(12211),l=a("IE_PROTO"),c=Object,u=c.prototype;t.exports=s?c.getPrototypeOf:function(t){var e=i(t);if(n(e,l))return e[l];var r=e.constructor;return o(r)&&e instanceof r?r.prototype:e instanceof c?u:null}},71072:function(t,e,r){var n=r(61828),o=r(88727);t.exports=Object.keys||function(t){return n(t,o)}},92140:function(t,e,r){var n=r(78227),o=n("toStringTag"),i={};i[o]="z",t.exports="[object z]"===String(i)},44114:function(t,e,r){var n=r(46518),o=r(48981),i=r(26198),a=r(34527),s=r(96837),l=r(79039),c=l((function(){return 4294967297!==[].push.call({length:4294967296},1)})),u=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},d=c||!u();n({target:"Array",proto:!0,arity:1,forced:d},{push:function(t){var e=o(this),r=i(e),n=arguments.length;s(r+n);for(var l=0;l<n;l++)e[r]=arguments[l],r++;return a(e,r),r}})},18111:function(t,e,r){var n=r(46518),o=r(44576),i=r(90679),a=r(28551),s=r(94901),l=r(42787),c=r(62106),u=r(97040),d=r(79039),f=r(39297),h=r(78227),p=r(57657).IteratorPrototype,g=r(43724),v=r(96395),m="constructor",y="Iterator",w=h("toStringTag"),b=TypeError,x=o[y],k=v||!s(x)||x.prototype!==p||!d((function(){x({})})),O=function(){if(i(this,p),l(this)===p)throw new b("Abstract class Iterator not directly constructable")},_=function(t,e){g?c(p,t,{configurable:!0,get:function(){return e},set:function(e){if(a(this),this===p)throw new b("You can't redefine this property");f(this,t)?this[t]=e:u(this,t,e)}}):p[t]=e};f(p,w)||_(w,y),!k&&f(p,m)&&p[m]!==Object||_(m,O),O.prototype=p,n({global:!0,constructor:!0,forced:k},{Iterator:O})},7588:function(t,e,r){var n=r(46518),o=r(72652),i=r(79306),a=r(28551),s=r(1767);n({target:"Iterator",proto:!0,real:!0},{forEach:function(t){a(this),i(t);var e=s(this),r=0;o(e,(function(e){t(e,r++)}),{IS_RECORD:!0})}})},98992:function(t,e,r){r(18111)},3949:function(t,e,r){r(7588)}}]);
//# sourceMappingURL=9293.8d2bb291.js.map