"use strict";(self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[]).push([[8833],{38833:function(e,r,t){t.r(r),t.d(r,{default:function(){return p}});t(38077),t(60228);var n=t(66252),o=t(3577),i=["innerHTML"],a=["innerHTML"];function u(e,r,t,u,l,c){var s=(0,n.up)("v-alert"),f=(0,n.up)("EditFile"),d=(0,n.up)("v-select"),g=(0,n.up)("v-text-field"),h=(0,n.up)("v-icon"),p=(0,n.up)("v-btn"),v=(0,n.up)("v-row"),m=(0,n.up)("v-card-title"),x=(0,n.up)("v-card-text"),w=(0,n.up)("v-card");return(0,n.wg)(),(0,n.iD)("div",null,[l.error?((0,n.wg)(),(0,n.j4)(s,{key:0,type:"error",text:l.error},null,8,["text"])):(0,n.kq)("",!0),(0,n.Wm)(f,{ref:"editFile",serverId:l.serverId,action:"files",onComplete:r[0]||(r[0]=function(e){return c.fetchLog()}),onError:c.handleError,onLoading:c.handleLoading},null,8,["serverId","onError","onLoading"]),(0,n.Wm)(w,{loading:l.fetching},{default:(0,n.w5)((function(){return[(0,n.Wm)(m,{"primary-title":""},{default:(0,n.w5)((function(){return[(0,n.Wm)(v,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(d,{items:l.logs,label:"Log","onUpdate:modelValue":c.fetchLog,"hide-details":"",class:"ma-1"},null,8,["items","onUpdate:modelValue"]),(0,n.Wm)(g,{label:"Filter",modelValue:l.filter,"onUpdate:modelValue":r[1]||(r[1]=function(e){return l.filter=e}),"hide-details":"",class:"ma-1"},null,8,["modelValue"]),(0,n.Wm)(p,{onClick:r[2]||(r[2]=function(e){return c.fetchLog()}),disabled:!l.log,icon:"",class:"ma-3"},{default:(0,n.w5)((function(){return[(0,n.Wm)(h,{class:(0,o.C_)(l.fetching?"fa-spin":""),size:"small"},{default:(0,n.w5)((function(){return[(0,n.Uk)("fas fa-redo-alt")]})),_:1},8,["class"])]})),_:1},8,["disabled"])]})),_:1})]})),_:1}),(0,n.Wm)(x,null,{default:(0,n.w5)((function(){return["serverstatus"==l.log?((0,n.wg)(),(0,n.iD)("div",{key:0,innerHTML:l.logContent,class:"serverstatus"},null,8,i)):((0,n.wg)(),(0,n.iD)("div",{key:1,class:"pre",innerHTML:c.filteredLog},null,8,a))]})),_:1})]})),_:1},8,["loading"])])}var l=t(50124),c=t(48534),s=(t(64043),t(7409),t(52003),t(68518),t(13440),t(12826),t(57267),t(6203),t(76801),t(43843),t(34284),t(1006)),f=t(33348),d={components:{EditFile:f.Z},data:function(){return{error:"",data:{users:{}},system_user:{user:"",password:""},cronjob:{name:"",user:"",command:"",minute:"",hour:"",dom:"",mon:"",dow:""},cronjobs:[],rules:{required:function(e){return!!e||"Required."},alpha:function(e){return/^[a-zA-Z]+$/g.test(e)||"Must contain a-z characters only"},minute:function(e){return"*"==e||e>=0&&e<60||"0-59 or *"},hour:function(e){return"*"==e||e>=0&&e<24||"0-23 or *"},dom:function(e){return"*"==e||e>=1&&e<=31||"1-31 or *"},mon:function(e){return"*"==e||e>=1&&e<12||"1-12 or *"},dow:function(e){return"*"==e||e>=1&&e<7||"1-7 or *"}},details:"",fetching:!0,userDrawer:!1,cronjobDrawer:!1,serverId:0,logs:[{value:"journal",title:"Journal"},{value:"auth",title:"Auth"},{value:"apache_access",title:"Apache Access"},{value:"other_vhosts",title:"Other Vhosts"},{value:"apache_error",title:"Apache Error"},{value:"mail",title:"Mail"},{value:"mysql",title:"MySQL"},{value:"fail2ban",title:"Fail2ban"},{value:"letsencrypt",title:"Let's Encrypt"},{value:"serverstatus",title:"Server Status"}],log:"",logContent:"",filter:""}},created:function(){this.serverId=this.$route.params.id,this.fetchData();var e=this;window.onhashchange=(0,c.Z)((0,l.Z)().mark((function r(){var t,n,o,i;return(0,l.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t=location.hash.substr(1),t){r.next=3;break}return r.abrupt("return");case 3:return n=t,o=1,-1!==n.indexOf(":")&&(i=n.split(":"),n=i[0],o=i[1]),e.fecthing=!0,r.next=9,e.$refs.editFile.open({id:n,name:n});case 9:e.$refs.editFile.goToLine(o),location.hash="";case 11:case"end":return r.stop()}}),r)})))},computed:{filteredLog:function(){var e=this,r=/(\/(var|etc)[^\s:\\']+( on line [0-9]+))/g,t=RegExp("(".concat(this.filter,")*"),"gi"),n=this.logContent.split("\n");return n.filter((function(r){return r.toLowerCase().includes(e.filter.toLowerCase())})).join("\n").replace(t,'<span class="match">$1</span>').replace(r,'<a href="'+location.pathname+'#$1">$1</a>').replace(/( on line )([0-9]+)/g,":$2").replace(/(PHP Fatal error)/g,'<span class="error">$1</span>').replace(/(PHP Parse error)/g,'<span class="error">$1</span>').replace(/(PHP Warning)/g,'<span class="warning">$1</span>')}},methods:{fetchData:function(){var e=this;this.error="",this.fetching=!0,s.Z.get("servers/"+this.serverId).then((function(r){if(console.log(r),r.data.error)return e.error=r.data.error,!1;e.data=r.data.item,document.title="Logs | "+e.data.name})).catch((function(e){console.log(e)})).finally((function(){e.fetching=!1}))},fetchLog:function(e){var r=this;if(this.fetching=!0,e)r.log=e;else if(!r.log)return;this.logContent="loading..",s.Z.post("servers/"+this.serverId+"/fetchlog",{log:r.log}).then((function(e){console.log(e),r.logContent=e.data.content})).finally((function(){r.fetching=!1}))},handleError:function(e){this.error=e},handleLoading:function(e){this.fetching=e}}},g=t(83744);const h=(0,g.Z)(d,[["render",u]]);var p=h},27017:function(e,r,t){var n=t(68844),o=t(90690),i=Math.floor,a=n("".charAt),u=n("".replace),l=n("".slice),c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,r,t,n,f,d){var g=t+e.length,h=n.length,p=s;return void 0!==f&&(f=o(f),p=c),u(d,p,(function(o,u){var c;switch(a(u,0)){case"$":return"$";case"&":return e;case"`":return l(r,0,t);case"'":return l(r,g);case"<":c=f[l(u,1,-1)];break;default:var s=+u;if(0===s)return o;if(s>h){var d=i(s/10);return 0===d?o:d<=h?void 0===n[d-1]?a(u,1):n[d-1]+a(u,1):o}c=n[s-1]}return void 0===c?"":c}))}},63477:function(e,r,t){var n=t(22615),o=t(36812),i=t(23622),a=t(69633),u=RegExp.prototype;e.exports=function(e){var r=e.flags;return void 0!==r||"flags"in u||o(e,"flags")||!i(u,e)?r:n(a,e)}},76801:function(e,r,t){var n=t(79989),o=t(84328).includes,i=t(3689),a=t(87370),u=i((function(){return!Array(1).includes()}));n({target:"Array",proto:!0,forced:u},{includes:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),a("includes")},6203:function(e,r,t){var n=t(79989),o=t(68844),i=t(94413),a=t(65290),u=t(16834),l=o([].join),c=i!==Object,s=c||!u("join",",");n({target:"Array",proto:!0,forced:s},{join:function(e){return l(a(this),void 0===e?",":e)}})},52003:function(e,r,t){var n=t(67697),o=t(19037),i=t(68844),a=t(35266),u=t(33457),l=t(75773),c=t(25391),s=t(72741).f,f=t(23622),d=t(91245),g=t(34327),h=t(63477),p=t(87901),v=t(38055),m=t(11880),x=t(3689),w=t(36812),y=t(618).enforce,E=t(14241),b=t(44201),$=t(62100),L=t(26738),k=b("match"),R=o.RegExp,S=R.prototype,I=o.SyntaxError,A=i(S.exec),C=i("".charAt),_=i("".replace),M=i("".indexOf),W=i("".slice),P=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,j=/a/g,D=/a/g,T=new R(j)!==j,F=p.MISSED_STICKY,O=p.UNSUPPORTED_Y,Z=n&&(!T||F||$||L||x((function(){return D[k]=!1,R(j)!==j||R(D)===D||"/a/i"!==String(R(j,"i"))}))),H=function(e){for(var r,t=e.length,n=0,o="",i=!1;n<=t;n++)r=C(e,n),"\\"!==r?i||"."!==r?("["===r?i=!0:"]"===r&&(i=!1),o+=r):o+="[\\s\\S]":o+=r+C(e,++n);return o},q=function(e){for(var r,t=e.length,n=0,o="",i=[],a=c(null),u=!1,l=!1,s=0,f="";n<=t;n++){if(r=C(e,n),"\\"===r)r+=C(e,++n);else if("]"===r)u=!1;else if(!u)switch(!0){case"["===r:u=!0;break;case"("===r:A(P,W(e,n+1))&&(n+=2,l=!0),o+=r,s++;continue;case">"===r&&l:if(""===f||w(a,f))throw new I("Invalid capture group name");a[f]=!0,i[i.length]=[f,s],l=!1,f="";continue}l?f+=r:o+=r}return[o,i]};if(a("RegExp",Z)){for(var U=function(e,r){var t,n,o,i,a,c,s=f(S,this),p=d(e),v=void 0===r,m=[],x=e;if(!s&&p&&v&&e.constructor===U)return e;if((p||f(S,e))&&(e=e.source,v&&(r=h(x))),e=void 0===e?"":g(e),r=void 0===r?"":g(r),x=e,$&&"dotAll"in j&&(n=!!r&&M(r,"s")>-1,n&&(r=_(r,/s/g,""))),t=r,F&&"sticky"in j&&(o=!!r&&M(r,"y")>-1,o&&O&&(r=_(r,/y/g,""))),L&&(i=q(e),e=i[0],m=i[1]),a=u(R(e,r),s?this:S,U),(n||o||m.length)&&(c=y(a),n&&(c.dotAll=!0,c.raw=U(H(e),t)),o&&(c.sticky=!0),m.length&&(c.groups=m)),e!==x)try{l(a,"source",""===x?"(?:)":x)}catch(w){}return a},V=s(R),z=0;V.length>z;)v(U,R,V[z++]);S.constructor=U,U.prototype=S,m(o,"RegExp",U,{constructor:!0})}E("RegExp")},68518:function(e,r,t){var n=t(67697),o=t(62100),i=t(6648),a=t(62148),u=t(618).get,l=RegExp.prototype,c=TypeError;n&&o&&a(l,"dotAll",{configurable:!0,get:function(){if(this!==l){if("RegExp"===i(this))return!!u(this).dotAll;throw new c("Incompatible receiver, RegExp required")}}})},13440:function(e,r,t){var n=t(67697),o=t(87901).MISSED_STICKY,i=t(6648),a=t(62148),u=t(618).get,l=RegExp.prototype,c=TypeError;n&&o&&a(l,"sticky",{configurable:!0,get:function(){if(this!==l){if("RegExp"===i(this))return!!u(this).sticky;throw new c("Incompatible receiver, RegExp required")}}})},7409:function(e,r,t){t(64043);var n=t(79989),o=t(22615),i=t(69985),a=t(85027),u=t(34327),l=function(){var e=!1,r=/[ac]/;return r.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===r.test("abc")&&e}(),c=/./.test;n({target:"RegExp",proto:!0,forced:!l},{test:function(e){var r=a(this),t=u(e),n=r.exec;if(!i(n))return o(c,r,t);var l=o(n,r,t);return null!==l&&(a(l),!0)}})},12826:function(e,r,t){var n=t(41236).PROPER,o=t(11880),i=t(85027),a=t(34327),u=t(3689),l=t(63477),c="toString",s=RegExp.prototype,f=s[c],d=u((function(){return"/a/b"!==f.call({source:"a",flags:"b"})})),g=n&&f.name!==c;(d||g)&&o(RegExp.prototype,c,(function(){var e=i(this),r=a(e.source),t=a(l(e));return"/"+r+"/"+t}),{unsafe:!0})},43843:function(e,r,t){var n=t(79989),o=t(68844),i=t(42124),a=t(74684),u=t(34327),l=t(27413),c=o("".indexOf);n({target:"String",proto:!0,forced:!l("includes")},{includes:function(e){return!!~c(u(a(this)),u(i(e)),arguments.length>1?arguments[1]:void 0)}})},57267:function(e,r,t){var n=t(61735),o=t(22615),i=t(68844),a=t(65773),u=t(3689),l=t(85027),c=t(69985),s=t(981),f=t(68700),d=t(43126),g=t(34327),h=t(74684),p=t(71514),v=t(54849),m=t(27017),x=t(66100),w=t(44201),y=w("replace"),E=Math.max,b=Math.min,$=i([].concat),L=i([].push),k=i("".indexOf),R=i("".slice),S=function(e){return void 0===e?e:String(e)},I=function(){return"$0"==="a".replace(/./,"$0")}(),A=function(){return!!/./[y]&&""===/./[y]("a","$0")}(),C=!u((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));a("replace",(function(e,r,t){var i=A?"$":"$0";return[function(e,t){var n=h(this),i=s(e)?void 0:v(e,y);return i?o(i,e,n,t):o(r,g(n),e,t)},function(e,o){var a=l(this),u=g(e);if("string"==typeof o&&-1===k(o,i)&&-1===k(o,"$<")){var s=t(r,a,u,o);if(s.done)return s.value}var h=c(o);h||(o=g(o));var v,w=a.global;w&&(v=a.unicode,a.lastIndex=0);var y,I=[];while(1){if(y=x(a,u),null===y)break;if(L(I,y),!w)break;var A=g(y[0]);""===A&&(a.lastIndex=p(u,d(a.lastIndex),v))}for(var C="",_=0,M=0;M<I.length;M++){y=I[M];for(var W,P=g(y[0]),j=E(b(f(y.index),u.length),0),D=[],T=1;T<y.length;T++)L(D,S(y[T]));var F=y.groups;if(h){var O=$([P],D,j,u);void 0!==F&&L(O,F),W=g(n(o,void 0,O))}else W=m(P,u,j,D,F,o);j>=_&&(C+=R(u,_,j)+W,_=j+P.length)}return C+R(u,_)}]}),!C||!I||A)}}]);
//# sourceMappingURL=8833-legacy.35dea2a0.js.map