"use strict";(self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[]).push([[6260,6784],{26301:function(t,e,n){n.d(e,{A:function(){return u}});var o=n(20641),r=n(90033),i=n(53751);function a(t,e,n,a,l,s){const c=(0,o.g2)("v-toolbar-title"),u=(0,o.g2)("v-toolbar"),d=(0,o.g2)("v-card-text"),f=(0,o.g2)("v-spacer"),h=(0,o.g2)("v-btn"),g=(0,o.g2)("v-card-actions"),p=(0,o.g2)("v-card"),m=(0,o.g2)("v-dialog");return(0,o.uX)(),(0,o.Wv)(m,{modelValue:t.dialog,"onUpdate:modelValue":e[0]||(e[0]=e=>t.dialog=e),"max-width":t.options.width,style:(0,r.Tr)({zIndex:t.options.zIndex}),onKeydown:(0,i.jR)(s.cancel,["esc"]),persistent:""},{default:(0,o.k6)((()=>[(0,o.bF)(p,null,{default:(0,o.k6)((()=>[(0,o.bF)(u,{dark:"",color:t.options.color,dense:"",flat:""},{default:(0,o.k6)((()=>[(0,o.bF)(c,{class:"text-body-2 font-weight-bold grey--text"},{default:(0,o.k6)((()=>[(0,o.eW)((0,r.v_)(t.title),1)])),_:1})])),_:1},8,["color"]),(0,o.bo)((0,o.bF)(d,{class:"pa-4 black--text",innerHTML:t.message},null,8,["innerHTML"]),[[i.aG,!!t.message]]),(0,o.bF)(g,{class:"pt-3"},{default:(0,o.k6)((()=>[(0,o.bF)(f),t.options.noconfirm?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.Wv)(h,{key:0,color:"grey",text:"",class:"body-2 font-weight-bold",onClick:s.cancel},{default:(0,o.k6)((()=>e[1]||(e[1]=[(0,o.eW)("Cancel")]))),_:1},8,["onClick"])),(0,o.bF)(h,{color:"primary",class:"body-2 font-weight-bold",outlined:"",onClick:s.agree},{default:(0,o.k6)((()=>e[2]||(e[2]=[(0,o.eW)("OK")]))),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue","max-width","style","onKeydown"])}var l={data:function(){return{dialog:!1,resolve:null,reject:null,message:null,title:null,options:{color:"grey lighten-3",width:400,zIndex:10008,noconfirm:!1}}},methods:{open(t,e,n){return e||(e=t,t="Confirm"),this.dialog=!0,this.title=t,this.message=e,this.options=Object.assign(this.options,n),new Promise(((t,e)=>{this.resolve=t,this.reject=e}))},agree(){this.resolve(!0),this.dialog=!1},cancel(){this.resolve(!1),this.dialog=!1}}},s=n(66262);const c=(0,s.A)(l,[["render",a]]);var u=c},81815:function(t,e,n){n.d(e,{A:function(){return s}});var o=n(20641);function r(t,e,n,r,i,a){const l=(0,o.g2)("v-icon"),s=(0,o.g2)("v-alert"),c=(0,o.g2)("v-dialog");return(0,o.uX)(),(0,o.Wv)(c,{modelValue:t.show,"onUpdate:modelValue":e[0]||(e[0]=e=>t.show=e),persistent:"",width:"600"},{default:(0,o.k6)((()=>[(0,o.bF)(s,{title:n.message,color:"primary"},{prepend:(0,o.k6)((()=>[(0,o.bF)(l,{icon:"fas fa-magic fa-2x faa-horizontal animated"})])),_:1},8,["title"])])),_:1},8,["modelValue"])}var i={name:"Loading",data:()=>({show:!1}),props:{value:{type:Boolean,default:!1},message:{type:String,default:"Summoning..."}},watch:{value:function(t){this.show=t}}},a=n(66262);const l=(0,a.A)(i,[["render",r]]);var s=l},6784:function(t,e,n){n.r(e),n.d(e,{default:function(){return g}});var o=n(20641),r=n(53751),i=n(90033);const a={slot:"item","slot-scope":"data"};function l(t,e,n,l,s,c){const u=(0,o.g2)("Loading"),d=(0,o.g2)("v-btn"),f=(0,o.g2)("v-card-actions"),h=(0,o.g2)("v-icon"),g=(0,o.g2)("v-list-item"),p=(0,o.g2)("v-list"),m=(0,o.g2)("v-card"),v=(0,o.g2)("v-list-item-title"),b=(0,o.g2)("v-list-item-subtitle"),y=(0,o.g2)("v-select"),w=(0,o.g2)("v-card-text"),x=(0,o.g2)("v-dialog"),k=(0,o.g2)("Confirm");return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.bF)(u,{value:s.loading},null,8,["value"]),(0,o.bF)(m,{class:"pa-3",loading:s.fetching},{default:(0,o.k6)((()=>[(0,o.bF)(f,null,{default:(0,o.k6)((()=>[(0,o.bF)(d,{onClick:e[0]||(e[0]=t=>c.addItem()),icon:"mdi:mdi-plus"})])),_:1}),(0,o.bF)(p,null,{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(s.user_domains,((t,n)=>((0,o.uX)(),(0,o.Wv)(g,{key:`item-${n}`,title:t.domain},{append:(0,o.k6)((()=>[(0,o.bF)(d,{icon:"",disabled:s.fetching,loading:s.loading===t.domain,onClick:[e=>c.deleteItem(t),e[1]||(e[1]=(0,r.D$)((()=>{}),["stop"]))]},{default:(0,o.k6)((()=>[(0,o.bF)(h,{size:"small"},{default:(0,o.k6)((()=>e[4]||(e[4]=[(0,o.eW)("mdi:mdi-delete")]))),_:1})])),_:2},1032,["disabled","loading","onClick"])])),_:2},1032,["title"])))),128))])),_:1})])),_:1},8,["loading"]),(0,o.bF)(x,{modelValue:s.drawer,"onUpdate:modelValue":e[3]||(e[3]=t=>s.drawer=t),"max-width":"600"},{default:(0,o.k6)((()=>[(0,o.bF)(m,{title:"Domain"},{default:(0,o.k6)((()=>[(0,o.bF)(w,null,{default:(0,o.k6)((()=>[(0,o.bF)(y,{modelValue:s.data.domain,"onUpdate:modelValue":e[2]||(e[2]=t=>s.data.domain=t),items:s.domains,label:"Domain"},{default:(0,o.k6)((()=>[(0,o.Lk)("template",a,[(0,o.bF)(v,null,{default:(0,o.k6)((()=>[(0,o.eW)((0,i.v_)(s.data.item.text),1)])),_:1}),(0,o.bF)(b)])])),_:1},8,["modelValue","items"]),(0,o.bF)(d,{disabled:!s.data.domain,loading:s.dialog,color:"success",onClick:c.saveItem},{default:(0,o.k6)((()=>e[5]||(e[5]=[(0,o.eW)(" Save ")]))),_:1},8,["disabled","loading","onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.bF)(k,{ref:"confirm"},null,512)])}n(44114),n(98992),n(3949);var s=n(74300),c=n(81815),u=n(26301),d={components:{Loading:c.A,Confirm:u.A},data(){return{fetching:!1,loading:null,id:null,error:null,data:{},user_domains:[],domains:[],servers:{},dialog:!1,details:"",rules:{required:t=>!!t||"Required.",min:t=>t.length>=8||"Min 8 characters"},domain:{name:""},drawer:!1}},created(){this.id=this.$route.params.id,this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData(){this.error="",this.fetching=!0,s.A.get("users/"+this.id+"/domains").then((t=>{console.log(t),this.user_domains=t.data.domains,document.title="Domains"})).catch((t=>{console.log(t)})).finally((()=>{this.fetching=!1})),s.A.get("domains/").then((t=>{console.log(t),t.data.items.forEach((t=>{this.domains.push({title:t.domain,value:t.id,server:t.server})})),s.A.get("servers/")})).catch((t=>{console.log(t)})).finally((()=>{this.loading=!1}))},addItem(){this.domain.name="",this.drawer=!0},saveItem(){this.data.domain&&(this.details="",this.dialog=!0,this.error="",s.A.post("users/"+this.id+"/domains",this.data).then((t=>{console.log(t),t.data.success?(this.drawer=!1,this.fetchData()):this.error=t.data.error})).catch((t=>{console.log(t),this.dialog=!1})).finally((()=>{this.dialog=!1})))},deleteItem:async function(t){await this.$refs.confirm.open("Delete "+t.domain)&&(this.error="",this.dialog=!0,this.loading=t.domain,s.A.post("users/"+this.id+"/domains",{delete:1,domain:t.id}).then((t=>{console.log(t),t.data.error?this.error=t.data.error:this.fetchData()})).catch((t=>{console.log(t)})).finally((()=>{this.dialog=!1,this.loading=null})))}}},f=n(66262);const h=(0,f.A)(d,[["render",l]]);var g=h},90679:function(t,e,n){var o=n(1625),r=TypeError;t.exports=function(t,e){if(o(e,t))return t;throw new r("Incorrect invocation")}},34527:function(t,e,n){var o=n(43724),r=n(34376),i=TypeError,a=Object.getOwnPropertyDescriptor,l=o&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=l?function(t,e){if(r(t)&&!a(t,"length").writable)throw new i("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},36955:function(t,e,n){var o=n(92140),r=n(94901),i=n(22195),a=n(78227),l=a("toStringTag"),s=Object,c="Arguments"===i(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(n){}};t.exports=o?i:function(t){var e,n,o;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=u(e=s(t),l))?n:c?i(e):"Object"===(o=i(e))&&r(e.callee)?"Arguments":o}},12211:function(t,e,n){var o=n(79039);t.exports=!o((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},97040:function(t,e,n){var o=n(43724),r=n(24913),i=n(6980);t.exports=function(t,e,n){o?r.f(t,e,i(0,n)):t[e]=n}},62106:function(t,e,n){var o=n(50283),r=n(24913);t.exports=function(t,e,n){return n.get&&o(n.get,e,{getter:!0}),n.set&&o(n.set,e,{setter:!0}),r.f(t,e,n)}},96837:function(t){var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},76080:function(t,e,n){var o=n(27476),r=n(79306),i=n(40616),a=o(o.bind);t.exports=function(t,e){return r(t),void 0===e?t:i?a(t,e):function(){return t.apply(e,arguments)}}},27476:function(t,e,n){var o=n(22195),r=n(79504);t.exports=function(t){if("Function"===o(t))return r(t)}},1767:function(t){t.exports=function(t){return{iterator:t,next:t.next,done:!1}}},50851:function(t,e,n){var o=n(36955),r=n(55966),i=n(64117),a=n(26269),l=n(78227),s=l("iterator");t.exports=function(t){if(!i(t))return r(t,s)||r(t,"@@iterator")||a[o(t)]}},70081:function(t,e,n){var o=n(69565),r=n(79306),i=n(28551),a=n(16823),l=n(50851),s=TypeError;t.exports=function(t,e){var n=arguments.length<2?l(t):e;if(r(n))return i(o(n,t));throw new s(a(t)+" is not iterable")}},20397:function(t,e,n){var o=n(97751);t.exports=o("document","documentElement")},44209:function(t,e,n){var o=n(78227),r=n(26269),i=o("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||a[i]===t)}},34376:function(t,e,n){var o=n(22195);t.exports=Array.isArray||function(t){return"Array"===o(t)}},72652:function(t,e,n){var o=n(76080),r=n(69565),i=n(28551),a=n(16823),l=n(44209),s=n(26198),c=n(1625),u=n(70081),d=n(50851),f=n(9539),h=TypeError,g=function(t,e){this.stopped=t,this.result=e},p=g.prototype;t.exports=function(t,e,n){var m,v,b,y,w,x,k,_=n&&n.that,F=!(!n||!n.AS_ENTRIES),O=!(!n||!n.IS_RECORD),A=!(!n||!n.IS_ITERATOR),I=!(!n||!n.INTERRUPTED),E=o(e,_),T=function(t){return m&&f(m,"normal",t),new g(!0,t)},j=function(t){return F?(i(t),I?E(t[0],t[1],T):E(t[0],t[1])):I?E(t,T):E(t)};if(O)m=t.iterator;else if(A)m=t;else{if(v=d(t),!v)throw new h(a(t)+" is not iterable");if(l(v)){for(b=0,y=s(t);y>b;b++)if(w=j(t[b]),w&&c(p,w))return w;return new g(!1)}m=u(t,v)}x=O?t.next:m.next;while(!(k=r(x,m)).done){try{w=j(k.value)}catch(C){f(m,"throw",C)}if("object"==typeof w&&w&&c(p,w))return w}return new g(!1)}},9539:function(t,e,n){var o=n(69565),r=n(28551),i=n(55966);t.exports=function(t,e,n){var a,l;r(t);try{if(a=i(t,"return"),!a){if("throw"===e)throw n;return n}a=o(a,t)}catch(s){l=!0,a=s}if("throw"===e)throw n;if(l)throw a;return r(a),n}},57657:function(t,e,n){var o,r,i,a=n(79039),l=n(94901),s=n(20034),c=n(2360),u=n(42787),d=n(36840),f=n(78227),h=n(96395),g=f("iterator"),p=!1;[].keys&&(i=[].keys(),"next"in i?(r=u(u(i)),r!==Object.prototype&&(o=r)):p=!0);var m=!s(o)||a((function(){var t={};return o[g].call(t)!==t}));m?o={}:h&&(o=c(o)),l(o[g])||d(o,g,(function(){return this})),t.exports={IteratorPrototype:o,BUGGY_SAFARI_ITERATORS:p}},26269:function(t){t.exports={}},2360:function(t,e,n){var o,r=n(28551),i=n(96801),a=n(88727),l=n(30421),s=n(20397),c=n(4055),u=n(66119),d=">",f="<",h="prototype",g="script",p=u("IE_PROTO"),m=function(){},v=function(t){return f+g+d+t+f+"/"+g+d},b=function(t){t.write(v("")),t.close();var e=t.parentWindow.Object;return t=null,e},y=function(){var t,e=c("iframe"),n="java"+g+":";return e.style.display="none",s.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(v("document.F=Object")),t.close(),t.F},w=function(){try{o=new ActiveXObject("htmlfile")}catch(e){}w="undefined"!=typeof document?document.domain&&o?b(o):y():b(o);var t=a.length;while(t--)delete w[h][a[t]];return w()};l[p]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(m[h]=r(t),n=new m,m[h]=null,n[p]=t):n=w(),void 0===e?n:i.f(n,e)}},96801:function(t,e,n){var o=n(43724),r=n(48686),i=n(24913),a=n(28551),l=n(25397),s=n(71072);e.f=o&&!r?Object.defineProperties:function(t,e){a(t);var n,o=l(e),r=s(e),c=r.length,u=0;while(c>u)i.f(t,n=r[u++],o[n]);return t}},42787:function(t,e,n){var o=n(39297),r=n(94901),i=n(48981),a=n(66119),l=n(12211),s=a("IE_PROTO"),c=Object,u=c.prototype;t.exports=l?c.getPrototypeOf:function(t){var e=i(t);if(o(e,s))return e[s];var n=e.constructor;return r(n)&&e instanceof n?n.prototype:e instanceof c?u:null}},71072:function(t,e,n){var o=n(61828),r=n(88727);t.exports=Object.keys||function(t){return o(t,r)}},92140:function(t,e,n){var o=n(78227),r=o("toStringTag"),i={};i[r]="z",t.exports="[object z]"===String(i)},44114:function(t,e,n){var o=n(46518),r=n(48981),i=n(26198),a=n(34527),l=n(96837),s=n(79039),c=s((function(){return 4294967297!==[].push.call({length:4294967296},1)})),u=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},d=c||!u();o({target:"Array",proto:!0,arity:1,forced:d},{push:function(t){var e=r(this),n=i(e),o=arguments.length;l(n+o);for(var s=0;s<o;s++)e[n]=arguments[s],n++;return a(e,n),n}})},18111:function(t,e,n){var o=n(46518),r=n(44576),i=n(90679),a=n(28551),l=n(94901),s=n(42787),c=n(62106),u=n(97040),d=n(79039),f=n(39297),h=n(78227),g=n(57657).IteratorPrototype,p=n(43724),m=n(96395),v="constructor",b="Iterator",y=h("toStringTag"),w=TypeError,x=r[b],k=m||!l(x)||x.prototype!==g||!d((function(){x({})})),_=function(){if(i(this,g),s(this)===g)throw new w("Abstract class Iterator not directly constructable")},F=function(t,e){p?c(g,t,{configurable:!0,get:function(){return e},set:function(e){if(a(this),this===g)throw new w("You can't redefine this property");f(this,t)?this[t]=e:u(this,t,e)}}):g[t]=e};f(g,y)||F(y,b),!k&&f(g,v)&&g[v]!==Object||F(v,_),_.prototype=g,o({global:!0,constructor:!0,forced:k},{Iterator:_})},7588:function(t,e,n){var o=n(46518),r=n(72652),i=n(79306),a=n(28551),l=n(1767);o({target:"Iterator",proto:!0,real:!0},{forEach:function(t){a(this),i(t);var e=l(this),n=0;r(e,(function(e){t(e,n++)}),{IS_RECORD:!0})}})},98992:function(t,e,n){n(18111)},3949:function(t,e,n){n(7588)}}]);
//# sourceMappingURL=6784.de69c488.js.map