"use strict";(self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[]).push([[1940,6260],{81815:function(t,e,r){r.d(e,{A:function(){return s}});var n=r(20641);function o(t,e,r,o,i,a){const u=(0,n.g2)("v-icon"),s=(0,n.g2)("v-alert"),c=(0,n.g2)("v-dialog");return(0,n.uX)(),(0,n.Wv)(c,{modelValue:t.show,"onUpdate:modelValue":e[0]||(e[0]=e=>t.show=e),persistent:"",width:"600"},{default:(0,n.k6)((()=>[(0,n.bF)(s,{title:r.message,color:"primary"},{prepend:(0,n.k6)((()=>[(0,n.bF)(u,{icon:"fas fa-magic fa-2x faa-horizontal animated"})])),_:1},8,["title"])])),_:1},8,["modelValue"])}var i={name:"Loading",data:()=>({show:!1}),props:{value:{type:Boolean,default:!1},message:{type:String,default:"Summoning..."}},watch:{value:function(t){this.show=t}}},a=r(66262);const u=(0,a.A)(i,[["render",o]]);var s=u},50246:function(t,e,r){r.d(e,{A:function(){return c}});var n=r(20641),o=r(53751);function i(t,e,r,i,a,u){const s=(0,n.g2)("v-icon");return"wordpress"===r.app?((0,n.uX)(),(0,n.Wv)(s,{key:0,onClick:(0,o.D$)(u.openLink,["stop"])},{default:(0,n.k6)((()=>e[0]||(e[0]=[(0,n.eW)("fab fa-wordpress")]))),_:1},8,["onClick"])):"git"===r.app?((0,n.uX)(),(0,n.Wv)(s,{key:1},{default:(0,n.k6)((()=>e[1]||(e[1]=[(0,n.eW)("fab fa-git")]))),_:1})):"node"===r.app?((0,n.uX)(),(0,n.Wv)(s,{key:2},{default:(0,n.k6)((()=>e[2]||(e[2]=[(0,n.eW)("fab fa-node-js")]))),_:1})):"joomla"===r.app?((0,n.uX)(),(0,n.Wv)(s,{key:3},{default:(0,n.k6)((()=>e[3]||(e[3]=[(0,n.eW)("fab fa-joomla")]))),_:1})):"drupal"===r.app?((0,n.uX)(),(0,n.Wv)(s,{key:4},{default:(0,n.k6)((()=>e[4]||(e[4]=[(0,n.eW)("fab fa-drupal")]))),_:1})):"magento"===r.app?((0,n.uX)(),(0,n.Wv)(s,{key:5},{default:(0,n.k6)((()=>e[5]||(e[5]=[(0,n.eW)("fab fa-magento")]))),_:1})):"roundcube"===r.app?((0,n.uX)(),(0,n.Wv)(s,{key:6},{default:(0,n.k6)((()=>e[6]||(e[6]=[(0,n.eW)("fas fa-envelope")]))),_:1})):"shiftlib"===r.app?((0,n.uX)(),(0,n.Wv)(s,{key:7},{default:(0,n.k6)((()=>e[7]||(e[7]=[(0,n.eW)("fas fa-user-edit")]))),_:1})):((0,n.uX)(),(0,n.Wv)(s,{key:8},{default:(0,n.k6)((()=>e[8]||(e[8]=[(0,n.eW)("fas fa-sitemap")]))),_:1}))}var a={props:{app:null,to:null},methods:{openLink(){this.to&&window.open(this.to)}}},u=r(66262);const s=(0,u.A)(a,[["render",i]]);var c=s},21940:function(t,e,r){r.r(e),r.d(e,{default:function(){return h}});var n=r(20641),o=r(90033);const i={key:0},a={key:0};function u(t,e,r,u,s,c){const f=(0,n.g2)("v-alert"),l=(0,n.g2)("Loading"),p=(0,n.g2)("v-select"),d=(0,n.g2)("v-card-text"),v=(0,n.g2)("v-card"),h=(0,n.g2)("SiteIcon"),y=(0,n.g2)("v-list-item"),g=(0,n.g2)("v-data-table"),m=(0,n.g2)("v-col"),b=(0,n.g2)("v-row"),w=(0,n.g2)("v-layout");return(0,n.uX)(),(0,n.Wv)(w,{row:""},{default:(0,n.k6)((()=>[(0,n.bF)(b,null,{default:(0,n.k6)((()=>[(0,n.bF)(m,{cols:"12"},{default:(0,n.k6)((()=>[s.error?((0,n.uX)(),(0,n.Wv)(f,{key:0,type:"error",text:s.error},null,8,["text"])):(0,n.Q3)("",!0),(0,n.bF)(l,{value:s.loading},null,8,["value"]),(0,n.bF)(v,{flat:"",loading:s.fetching},{default:(0,n.k6)((()=>[(0,n.bF)(v,{flat:""},{default:(0,n.k6)((()=>[(0,n.bF)(d,null,{default:(0,n.k6)((()=>[(0,n.bF)(p,{modelValue:s.server,"onUpdate:modelValue":e[0]||(e[0]=t=>s.server=t),items:s.server_opts,label:"Server","hide-details":"",clearable:""},null,8,["modelValue","items"])])),_:1})])),_:1}),(0,n.bF)(g,{headers:c.headers,items:s.filtered},{"item.domain":(0,n.k6)((({item:t})=>[(0,n.bF)(y,{to:"/sites/"+t.id+"/summary",title:t.domain,subtitle:s.servers[t.server],class:"px-0"},(0,n.eX)({_:2},[s.display.smAndUp?{name:"prepend",fn:(0,n.k6)((()=>[(0,n.bF)(h,{app:t.app},null,8,["app"])])),key:"0"}:void 0]),1032,["to","title","subtitle"])])),"item.usage":(0,n.k6)((({item:t})=>[t.usage>0?((0,n.uX)(),(0,n.CE)("div",i,(0,o.v_)(c.prettyBytes(1024*t.usage)),1)):(0,n.Q3)("",!0)])),"item.transfer":(0,n.k6)((({item:t})=>[t.transfer>0?((0,n.uX)(),(0,n.CE)("div",a,(0,o.v_)(c.prettyBytes(1024*t.transfer)),1)):(0,n.Q3)("",!0)])),_:1},8,["headers","items"])])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})}r(44114),r(98992),r(3949);var s=r(74300),c=r(27274),f=r(81815),l=r(50246),p={components:{Loading:f.A,SiteIcon:l.A},data(){return{fetching:!1,loading:!1,error:"",filtered:[],items:[],servers:{},server:null,server_opts:[],searchPanel:[!1],search:"",selected:[],display:{}}},computed:{headers:function(){var t=[{title:"Site",key:"domain"}];return this.display.smAndUp&&t.push({title:"IP",key:"ip"}),this.display.mdAndUp&&t.push({title:"MX",key:"mx"},{title:"MX",key:"mx"}),this.display.lgAndUp&&t.push({title:"Size",key:"usage"},{title:"Transfer",key:"transfer"}),t}},created(){this.display=this.$vuetify.display,document.title="Sites",this.fetchData()},watch:{server:function(){this.filtered=[],this.items.forEach((t=>{this.server&&t.server!=this.server||this.filtered.push(t)})),this.server?localStorage.server=this.server:delete localStorage.server}},methods:{fetchData(){this.error="",this.fetching=!0,s.A.get("sites/").then((t=>{if(console.log(t),t.data.error)return this.error=t.data.error,!1;this.items=t.data.items,t.data.items.forEach((t=>{this.filtered.push(t)})),s.A.get("servers/").then((t=>{t.data.items.forEach((t=>{this.server_opts.push({title:t.name,value:t.id}),this.servers[t.id]=t.name}))}))})).catch((t=>{console.log(t)})).finally((()=>{this.fetching=!1,localStorage.server&&(this.server=localStorage.server)}))},prettyBytes(t){return c.A.prettyBytes(t)}}},d=r(66262);const v=(0,d.A)(p,[["render",u]]);var h=v},90679:function(t,e,r){var n=r(1625),o=TypeError;t.exports=function(t,e){if(n(e,t))return t;throw new o("Incorrect invocation")}},34527:function(t,e,r){var n=r(43724),o=r(34376),i=TypeError,a=Object.getOwnPropertyDescriptor,u=n&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=u?function(t,e){if(o(t)&&!a(t,"length").writable)throw new i("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},36955:function(t,e,r){var n=r(92140),o=r(94901),i=r(22195),a=r(78227),u=a("toStringTag"),s=Object,c="Arguments"===i(function(){return arguments}()),f=function(t,e){try{return t[e]}catch(r){}};t.exports=n?i:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=f(e=s(t),u))?r:c?i(e):"Object"===(n=i(e))&&o(e.callee)?"Arguments":n}},12211:function(t,e,r){var n=r(79039);t.exports=!n((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},97040:function(t,e,r){var n=r(43724),o=r(24913),i=r(6980);t.exports=function(t,e,r){n?o.f(t,e,i(0,r)):t[e]=r}},62106:function(t,e,r){var n=r(50283),o=r(24913);t.exports=function(t,e,r){return r.get&&n(r.get,e,{getter:!0}),r.set&&n(r.set,e,{setter:!0}),o.f(t,e,r)}},96837:function(t){var e=TypeError,r=9007199254740991;t.exports=function(t){if(t>r)throw e("Maximum allowed index exceeded");return t}},76080:function(t,e,r){var n=r(27476),o=r(79306),i=r(40616),a=n(n.bind);t.exports=function(t,e){return o(t),void 0===e?t:i?a(t,e):function(){return t.apply(e,arguments)}}},27476:function(t,e,r){var n=r(22195),o=r(79504);t.exports=function(t){if("Function"===n(t))return o(t)}},1767:function(t){t.exports=function(t){return{iterator:t,next:t.next,done:!1}}},50851:function(t,e,r){var n=r(36955),o=r(55966),i=r(64117),a=r(26269),u=r(78227),s=u("iterator");t.exports=function(t){if(!i(t))return o(t,s)||o(t,"@@iterator")||a[n(t)]}},70081:function(t,e,r){var n=r(69565),o=r(79306),i=r(28551),a=r(16823),u=r(50851),s=TypeError;t.exports=function(t,e){var r=arguments.length<2?u(t):e;if(o(r))return i(n(r,t));throw new s(a(t)+" is not iterable")}},20397:function(t,e,r){var n=r(97751);t.exports=n("document","documentElement")},44209:function(t,e,r){var n=r(78227),o=r(26269),i=n("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||a[i]===t)}},34376:function(t,e,r){var n=r(22195);t.exports=Array.isArray||function(t){return"Array"===n(t)}},72652:function(t,e,r){var n=r(76080),o=r(69565),i=r(28551),a=r(16823),u=r(44209),s=r(26198),c=r(1625),f=r(70081),l=r(50851),p=r(9539),d=TypeError,v=function(t,e){this.stopped=t,this.result=e},h=v.prototype;t.exports=function(t,e,r){var y,g,m,b,w,k,x,_=r&&r.that,A=!(!r||!r.AS_ENTRIES),O=!(!r||!r.IS_RECORD),S=!(!r||!r.IS_ITERATOR),E=!(!r||!r.INTERRUPTED),W=n(e,_),j=function(t){return y&&p(y,"normal",t),new v(!0,t)},T=function(t){return A?(i(t),E?W(t[0],t[1],j):W(t[0],t[1])):E?W(t,j):W(t)};if(O)y=t.iterator;else if(S)y=t;else{if(g=l(t),!g)throw new d(a(t)+" is not iterable");if(u(g)){for(m=0,b=s(t);b>m;m++)if(w=T(t[m]),w&&c(h,w))return w;return new v(!1)}y=f(t,g)}k=O?t.next:y.next;while(!(x=o(k,y)).done){try{w=T(x.value)}catch(I){p(y,"throw",I)}if("object"==typeof w&&w&&c(h,w))return w}return new v(!1)}},9539:function(t,e,r){var n=r(69565),o=r(28551),i=r(55966);t.exports=function(t,e,r){var a,u;o(t);try{if(a=i(t,"return"),!a){if("throw"===e)throw r;return r}a=n(a,t)}catch(s){u=!0,a=s}if("throw"===e)throw r;if(u)throw a;return o(a),r}},57657:function(t,e,r){var n,o,i,a=r(79039),u=r(94901),s=r(20034),c=r(2360),f=r(42787),l=r(36840),p=r(78227),d=r(96395),v=p("iterator"),h=!1;[].keys&&(i=[].keys(),"next"in i?(o=f(f(i)),o!==Object.prototype&&(n=o)):h=!0);var y=!s(n)||a((function(){var t={};return n[v].call(t)!==t}));y?n={}:d&&(n=c(n)),u(n[v])||l(n,v,(function(){return this})),t.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:h}},26269:function(t){t.exports={}},2360:function(t,e,r){var n,o=r(28551),i=r(96801),a=r(88727),u=r(30421),s=r(20397),c=r(4055),f=r(66119),l=">",p="<",d="prototype",v="script",h=f("IE_PROTO"),y=function(){},g=function(t){return p+v+l+t+p+"/"+v+l},m=function(t){t.write(g("")),t.close();var e=t.parentWindow.Object;return t=null,e},b=function(){var t,e=c("iframe"),r="java"+v+":";return e.style.display="none",s.appendChild(e),e.src=String(r),t=e.contentWindow.document,t.open(),t.write(g("document.F=Object")),t.close(),t.F},w=function(){try{n=new ActiveXObject("htmlfile")}catch(e){}w="undefined"!=typeof document?document.domain&&n?m(n):b():m(n);var t=a.length;while(t--)delete w[d][a[t]];return w()};u[h]=!0,t.exports=Object.create||function(t,e){var r;return null!==t?(y[d]=o(t),r=new y,y[d]=null,r[h]=t):r=w(),void 0===e?r:i.f(r,e)}},96801:function(t,e,r){var n=r(43724),o=r(48686),i=r(24913),a=r(28551),u=r(25397),s=r(71072);e.f=n&&!o?Object.defineProperties:function(t,e){a(t);var r,n=u(e),o=s(e),c=o.length,f=0;while(c>f)i.f(t,r=o[f++],n[r]);return t}},42787:function(t,e,r){var n=r(39297),o=r(94901),i=r(48981),a=r(66119),u=r(12211),s=a("IE_PROTO"),c=Object,f=c.prototype;t.exports=u?c.getPrototypeOf:function(t){var e=i(t);if(n(e,s))return e[s];var r=e.constructor;return o(r)&&e instanceof r?r.prototype:e instanceof c?f:null}},71072:function(t,e,r){var n=r(61828),o=r(88727);t.exports=Object.keys||function(t){return n(t,o)}},92140:function(t,e,r){var n=r(78227),o=n("toStringTag"),i={};i[o]="z",t.exports="[object z]"===String(i)},44114:function(t,e,r){var n=r(46518),o=r(48981),i=r(26198),a=r(34527),u=r(96837),s=r(79039),c=s((function(){return 4294967297!==[].push.call({length:4294967296},1)})),f=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},l=c||!f();n({target:"Array",proto:!0,arity:1,forced:l},{push:function(t){var e=o(this),r=i(e),n=arguments.length;u(r+n);for(var s=0;s<n;s++)e[r]=arguments[s],r++;return a(e,r),r}})},18111:function(t,e,r){var n=r(46518),o=r(44576),i=r(90679),a=r(28551),u=r(94901),s=r(42787),c=r(62106),f=r(97040),l=r(79039),p=r(39297),d=r(78227),v=r(57657).IteratorPrototype,h=r(43724),y=r(96395),g="constructor",m="Iterator",b=d("toStringTag"),w=TypeError,k=o[m],x=y||!u(k)||k.prototype!==v||!l((function(){k({})})),_=function(){if(i(this,v),s(this)===v)throw new w("Abstract class Iterator not directly constructable")},A=function(t,e){h?c(v,t,{configurable:!0,get:function(){return e},set:function(e){if(a(this),this===v)throw new w("You can't redefine this property");p(this,t)?this[t]=e:f(this,t,e)}}):v[t]=e};p(v,b)||A(b,m),!x&&p(v,g)&&v[g]!==Object||A(g,_),_.prototype=v,n({global:!0,constructor:!0,forced:x},{Iterator:_})},7588:function(t,e,r){var n=r(46518),o=r(72652),i=r(79306),a=r(28551),u=r(1767);n({target:"Iterator",proto:!0,real:!0},{forEach:function(t){a(this),i(t);var e=u(this),r=0;o(e,(function(e){t(e,r++)}),{IS_RECORD:!0})}})},98992:function(t,e,r){r(18111)},3949:function(t,e,r){r(7588)}}]);
//# sourceMappingURL=1940.7e77d347.js.map