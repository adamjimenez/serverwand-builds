(function(){"use strict";var e={86775:function(e,n,t){var r=t(95082),o=(t(66992),t(88674),t(19601),t(17727),t(41539),t(78783),t(33948),t(49963)),i=t(66252);function d(e,n){var t=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(t)])}var a=t(48118);const c={},s=(0,a.Z)(c,[["render",d]]);var u=s,f=(t(8556),t(22201)),l=(t(29773),t(41291)),m=t(12931),b=t(81251),h=t(10822),p=t(54736),v=t(66300),P={dark:!0,colors:{primary:"#A25C57",secondary:"#4C3148",accent:"#A25C57",error:"#b71c1c"}},g=(0,l.Rd)({components:(0,r.Z)((0,r.Z)({},h),p),directives:v,theme:{defaultTheme:"darkTheme",themes:{darkTheme:P}},icons:{defaultSet:"fa",aliases:m.j,sets:{fa:m.fa,mdi:b.t}}}),y=[{path:"/",redirect:"Servers",component:function(){return Promise.all([t.e(1006),t.e(3115)]).then(t.bind(t,3115))},children:[{path:"/servers",name:"servers",component:function(){return Promise.all([t.e(1006),t.e(2840)]).then(t.bind(t,82840))}},{path:"/servers/create",name:"servers-create",component:function(){return Promise.all([t.e(1006),t.e(2337)]).then(t.bind(t,62337))}},{path:"/servers/:id(.*)*/edit",name:"server-edit",component:function(){return Promise.all([t.e(1006),t.e(2337)]).then(t.bind(t,62337))}},{path:"/servers/:id(.*)*",name:"server",component:function(){return Promise.all([t.e(1006),t.e(9422)]).then(t.bind(t,89422))},children:[{path:"/servers/:id(.*)*/summary",component:function(){return Promise.all([t.e(1006),t.e(2564),t.e(8751)]).then(t.bind(t,28751))}},{path:"/servers/:id(.*)*/files",component:function(){return Promise.all([t.e(1006),t.e(2564),t.e(2888),t.e(2612),t.e(304)]).then(t.bind(t,44927))}},{path:"/servers/:id(.*)*/services",component:function(){return Promise.all([t.e(1006),t.e(450)]).then(t.bind(t,70450))}},{path:"/servers/:id(.*)*/cronjobs",component:function(){return Promise.all([t.e(1006),t.e(538)]).then(t.bind(t,20538))}},{path:"/servers/:id(.*)*/database",component:function(){return Promise.all([t.e(1006),t.e(3618),t.e(4473)]).then(t.bind(t,74600))}},{path:"/servers/:id(.*)*/systemusers",component:function(){return Promise.all([t.e(1006),t.e(9163)]).then(t.bind(t,39163))}},{path:"/servers/:id(.*)*/firewall",component:function(){return Promise.all([t.e(1006),t.e(9940)]).then(t.bind(t,39940))}},{path:"/servers/:id(.*)*/mail",component:function(){return Promise.all([t.e(1006),t.e(2564),t.e(3153)]).then(t.bind(t,73153))}},{path:"/servers/:id(.*)*/backups",component:function(){return Promise.all([t.e(1006),t.e(2564),t.e(2888),t.e(5770)]).then(t.bind(t,85770))}},{path:"/servers/:id(.*)*/settings",component:function(){return Promise.all([t.e(1006),t.e(5132)]).then(t.bind(t,85132))}},{path:"/servers/:id(.*)*/apps",component:function(){return Promise.all([t.e(1006),t.e(4957)]).then(t.bind(t,44957))}},{path:"/servers/:id(.*)*/logs",component:function(){return Promise.all([t.e(1006),t.e(2888),t.e(5679)]).then(t.bind(t,75679))}}]},{path:"/sites",name:"sites",component:function(){return Promise.all([t.e(1006),t.e(2564),t.e(8124)]).then(t.bind(t,28124))}},{path:"/sites/create",name:"sites-create",component:function(){return Promise.all([t.e(1006),t.e(3947)]).then(t.bind(t,53947))}},{path:"/sites/:id(.*)*/edit",name:"Site-edit",component:function(){return Promise.all([t.e(1006),t.e(3947)]).then(t.bind(t,53947))}},{path:"/sites/:id(.*)*",name:"site",component:function(){return Promise.all([t.e(1006),t.e(4918)]).then(t.bind(t,84918))},children:[{path:"/sites/:id(.*)*/summary",component:function(){return Promise.all([t.e(1006),t.e(2564),t.e(3618),t.e(3733)]).then(t.bind(t,7049))}},{path:"/sites/:id(.*)*/database",component:function(){return Promise.all([t.e(1006),t.e(8805)]).then(t.bind(t,78805))}},{path:"/sites/:id(.*)*/variables",component:function(){return Promise.all([t.e(1006),t.e(4638)]).then(t.bind(t,64638))}},{path:"/sites/:id(.*)*/aliases",component:function(){return Promise.all([t.e(1006),t.e(2835)]).then(t.bind(t,62835))}},{path:"/sites/:id(.*)*/email",component:function(){return Promise.all([t.e(1006),t.e(2564),t.e(4461)]).then(t.bind(t,64461))}},{path:"/sites/:id(.*)*/apps",component:function(){return Promise.all([t.e(1006),t.e(9932)]).then(t.bind(t,9932))}},{path:"/sites/:id(.*)*/dns",component:function(){return Promise.all([t.e(1006),t.e(4892)]).then(t.bind(t,94892))}},{path:"/sites/:id(.*)*/backups",component:function(){return Promise.all([t.e(1006),t.e(2564),t.e(2612),t.e(5399)]).then(t.bind(t,73787))}},{path:"/sites/:id(.*)*/settings",component:function(){return Promise.all([t.e(1006),t.e(3889)]).then(t.bind(t,33889))}}]},{path:"/domains",name:"domains",component:function(){return Promise.all([t.e(1006),t.e(95)]).then(t.bind(t,80095))}},{path:"/domains/create",name:"domains-create",component:function(){return Promise.all([t.e(1006),t.e(7758)]).then(t.bind(t,67758))}},{path:"/domains/:id(.*)*/edit",name:"Domain-edit",component:function(){return Promise.all([t.e(1006),t.e(7758)]).then(t.bind(t,67758))}},{path:"/domains/:id(.*)*",name:"domain",component:function(){return Promise.all([t.e(1006),t.e(9952)]).then(t.bind(t,69952))},children:[{path:"/domains/:id(.*)*/summary",component:function(){return Promise.all([t.e(1006),t.e(5280)]).then(t.bind(t,55280))}},{path:"/domains/:id(.*)*/dns",component:function(){return Promise.all([t.e(1006),t.e(5711)]).then(t.bind(t,35711))}},{path:"/domains/:id(.*)*/settings",component:function(){return Promise.all([t.e(1006),t.e(6769)]).then(t.bind(t,76769))}}]},{path:"/teams",component:function(){return Promise.all([t.e(1006),t.e(2182)]).then(t.bind(t,83115))}},{path:"/teams/create",component:function(){return Promise.all([t.e(1006),t.e(7542)]).then(t.bind(t,47542))}},{path:"/teams/:id/edit",component:function(){return Promise.all([t.e(1006),t.e(7542)]).then(t.bind(t,47542))}},{path:"/teams/:id(.*)*",component:function(){return Promise.all([t.e(1006),t.e(9338)]).then(t.bind(t,99338))},children:[{path:"/teams/:id(.*)*/members",component:function(){return Promise.all([t.e(1006),t.e(7378)]).then(t.bind(t,7378))}},{path:"/teams/:id(.*)*/servers",component:function(){return Promise.all([t.e(1006),t.e(9850)]).then(t.bind(t,29850))}},{path:"/teams/:id(.*)*/settings",component:function(){return Promise.all([t.e(1006),t.e(2825)]).then(t.bind(t,2825))}}]},{path:"/users",name:"users",component:function(){return Promise.all([t.e(1006),t.e(5962)]).then(t.bind(t,95962))}},{path:"/users/create",name:"users-create",component:function(){return Promise.all([t.e(1006),t.e(1881)]).then(t.bind(t,61881))}},{path:"/users/:id(.*)*/edit",component:function(){return Promise.all([t.e(1006),t.e(1881)]).then(t.bind(t,61881))}},{path:"/users/:id(.*)*",component:function(){return Promise.all([t.e(1006),t.e(737)]).then(t.bind(t,40737))},children:[{path:"/users/:id(.*)*/summary",component:function(){return Promise.all([t.e(1006),t.e(1621)]).then(t.bind(t,71621))}},{path:"/users/:id(.*)*/sites",component:function(){return Promise.all([t.e(1006),t.e(1507)]).then(t.bind(t,81507))}},{path:"/users/:id(.*)*/domains",component:function(){return Promise.all([t.e(1006),t.e(2236)]).then(t.bind(t,2236))}},{path:"/users/:id(.*)*/invoices",component:function(){return Promise.all([t.e(1006),t.e(2564),t.e(9441)]).then(t.bind(t,59441))}},{path:"/users/:id(.*)*/subscriptions",component:function(){return Promise.all([t.e(1006),t.e(2564),t.e(9941)]).then(t.bind(t,49941))}},{path:"/users/:id(.*)*/notes",component:function(){return Promise.all([t.e(1006),t.e(667)]).then(t.bind(t,20667))}},{path:"/users/:id(.*)*/settings",component:function(){return Promise.all([t.e(1006),t.e(8701)]).then(t.bind(t,68701))}}]},{path:"/settings",component:function(){return t.e(7098).then(t.bind(t,27098))},children:[{path:"/settings/profile",component:function(){return Promise.all([t.e(1006),t.e(5947)]).then(t.bind(t,95947))}},{path:"/settings/api",component:function(){return Promise.all([t.e(1006),t.e(1063)]).then(t.bind(t,71063))}},{path:"/settings/tokens",component:function(){return Promise.all([t.e(1006),t.e(2624)]).then(t.bind(t,32624))}},{path:"/settings/products",component:function(){return Promise.all([t.e(1006),t.e(2297)]).then(t.bind(t,52297))}}]}]},{path:"/auth",component:function(){return t.e(1260).then(t.bind(t,1260))},children:[{path:"/auth/login",name:"login",component:function(){return Promise.all([t.e(1006),t.e(415)]).then(t.bind(t,10415))}},{path:"/auth/forgot",name:"forgot",component:function(){return Promise.all([t.e(1006),t.e(1800)]).then(t.bind(t,21800))}},{path:"/auth/register",name:"register",component:function(){return Promise.all([t.e(1006),t.e(2278)]).then(t.bind(t,42278))}},{path:"/auth/logout",name:"logout",component:function(){return Promise.all([t.e(1006),t.e(5033)]).then(t.bind(t,45033))}}]},{path:"/loading",component:function(){return t.e(5586).then(t.bind(t,55586))}},{path:"/:notFound",component:function(){return t.e(9330).then(t.bind(t,59330))}}],k=(0,f.p7)({mode:"history",base:"/",history:(0,f.PO)(),routes:y});(0,o.ri)(u).use(g).use(k).mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,loaded:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(n,r,o,i){if(!r){var d=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],i=e[u][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||d>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(a=!1,i<d&&(d=i));if(a){e.splice(u--,1);var s=o();void 0!==s&&(n=s)}}return n}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"-legacy."+{10:"d80faa0d",95:"c28e7d9c",245:"ccf80d81",304:"f070ffbd",404:"4ce5bebe",415:"97ec31a6",450:"c4cd32df",491:"ef6f813d",516:"7733db14",538:"bb849de8",566:"16b7614c",609:"7bb10bb1",667:"43debed3",736:"42f4b452",737:"e4599f0b",974:"1e737103",1006:"842f1c86",1063:"653ae43c",1170:"21cc2917",1179:"4f0e5b53",1260:"abbff133",1494:"84610f41",1507:"4ab836d8",1621:"a6ecd118",1800:"612bfc83",1881:"ea3bbe3a",1902:"5ab1fdf7",2102:"aa25a3e4",2105:"cc1ef2f5",2123:"a44de958",2151:"ec010b91",2156:"a56afa83",2157:"49c282dd",2182:"04a7463e",2236:"541cacc3",2253:"6bf9916d",2278:"3d577e6e",2297:"666e9643",2337:"d9be1b3f",2499:"027cb8e4",2542:"f1e606d7",2564:"ed429788",2612:"45a5e81d",2624:"9e627ee2",2706:"e14e9e23",2783:"7e169b23",2825:"8437c01d",2835:"a1d51e9e",2840:"2a760f91",2888:"3ec7ef74",2935:"28b5f333",3115:"bdc68f9c",3153:"bf75be71",3155:"f0fc32e5",3243:"44bdddb3",3281:"b21ad2b3",3297:"e184f93e",3618:"0ab51839",3644:"607fa24d",3733:"93c1b0d3",3889:"701f1d4f",3947:"11d5558f",4158:"d0d0ff0c",4306:"527047c7",4321:"db62d849",4461:"fb75947f",4473:"a4949b5f",4577:"7b09c479",4638:"d375d621",4892:"3771431d",4918:"b35065cb",4957:"718b2be6",5033:"33c5db1a",5037:"f409acb2",5042:"96944be7",5132:"51aeba08",5204:"aad93f45",5220:"8d554158",5260:"5190684d",5274:"2a278dd5",5280:"b5bd9883",5380:"a6f707f9",5399:"8330ac82",5429:"d8603282",5518:"396a3bb7",5537:"53e151b1",5586:"43b17dc0",5670:"297b031e",5679:"05b18352",5711:"bba6d7e8",5748:"36bdc0c3",5770:"d539e43a",5947:"0ec07870",5962:"794517aa",5989:"9b42bdb9",6015:"8c359860",6207:"f30cf93c",6359:"0bcd35da",6367:"e4483554",6584:"17fa50ea",6664:"bb335da0",6764:"e83baf58",6769:"8eea3f12",6812:"b30feb67",6820:"8e9dbb2b",6894:"1fc37a73",6935:"01c05dce",7098:"10ee2b98",7120:"86cceafb",7200:"62e80925",7216:"d05cc403",7354:"f1f9a7e7",7378:"c57f7189",7449:"66f5bd43",7540:"15d40389",7542:"61a36128",7562:"30dcdeea",7673:"ebab14b7",7688:"ae95e6d0",7758:"456ede27",7801:"99890338",7878:"dc0fee62",8124:"2873da8b",8162:"61b7fa63",8330:"45c91a9c",8531:"c46295d6",8701:"9edc10fd",8751:"d037ee89",8805:"d5e8dd41",9045:"66c48652",9085:"6430931e",9092:"f98addce",9122:"7fcc08a6",9153:"606dbe7b",9163:"bca528ea",9208:"901ed909",9330:"34bea3b4",9338:"0a992e75",9369:"518dbe54",9422:"3eefb61f",9441:"30ff90e3",9600:"340369e4",9850:"9b870df8",9932:"4471ba5f",9940:"34852c85",9941:"4d0e4ec7",9952:"fbd3d583",9957:"2677b605",9966:"40cfd720"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{95:"d9e10cd5",304:"d9e10cd5",450:"d9e10cd5",538:"d9e10cd5",667:"d9e10cd5",737:"d9e10cd5",1063:"d9e10cd5",1507:"d9e10cd5",1621:"d9e10cd5",1881:"d9e10cd5",2182:"d9e10cd5",2236:"d9e10cd5",2297:"d9e10cd5",2337:"d9e10cd5",2624:"d9e10cd5",2825:"d9e10cd5",2835:"d9e10cd5",2840:"d9e10cd5",2888:"6405abc8",3115:"746258d9",3153:"f9f15893",3733:"d9e10cd5",3889:"d9e10cd5",3947:"d9e10cd5",4461:"d9e10cd5",4473:"d9e10cd5",4638:"d9e10cd5",4892:"d9e10cd5",4918:"0f9494b4",4957:"d9e10cd5",5132:"d9e10cd5",5280:"d9e10cd5",5399:"d9e10cd5",5586:"d9e10cd5",5679:"e5847cae",5711:"d9e10cd5",5770:"d9e10cd5",5962:"d9e10cd5",6769:"d9e10cd5",7378:"d9e10cd5",7542:"d9e10cd5",7758:"d9e10cd5",8124:"d9e10cd5",8701:"d9e10cd5",8751:"29db6762",8805:"d9e10cd5",9163:"d9e10cd5",9338:"d9e10cd5",9422:"29db6762",9441:"d9e10cd5",9850:"d9e10cd5",9932:"d9e10cd5",9940:"d9e10cd5",9941:"d9e10cd5",9952:"d91b917c"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="ServerWand:";t.l=function(r,o,i,d){if(e[r])e[r].push(o);else{var a,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var f=s[u];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==n+i){a=f;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",n+i),a.src=r),e[r]=[o];var l=function(n,t){a.onerror=a.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(t)})),n)return n(t)},m=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){t.p="/"}(),function(){var e=function(e,n,t,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)t();else{var d=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=d,c.request=a,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=i,o.href=n,document.head.appendChild(o),o},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){o=d[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var d=t.miniCssF(r),a=t.p+d;if(n(d,a))return o();e(r,a,o,i)}))},o={2143:0};t.f.miniCss=function(e,n){var t={95:1,304:1,450:1,538:1,667:1,737:1,1063:1,1507:1,1621:1,1881:1,2182:1,2236:1,2297:1,2337:1,2624:1,2825:1,2835:1,2840:1,2888:1,3115:1,3153:1,3733:1,3889:1,3947:1,4461:1,4473:1,4638:1,4892:1,4918:1,4957:1,5132:1,5280:1,5399:1,5586:1,5679:1,5711:1,5770:1,5962:1,6769:1,7378:1,7542:1,7758:1,8124:1,8701:1,8751:1,8805:1,9163:1,9338:1,9422:1,9441:1,9850:1,9932:1,9940:1,9941:1,9952:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}(),function(){var e={2143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var d=t.p+t.u(n),a=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),d=r&&r.target&&r.target.src;a.message="Loading chunk "+n+" failed.\n("+i+": "+d+")",a.name="ChunkLoadError",a.type=i,a.request=d,o[1](a)}};t.l(d,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,d=r[0],a=r[1],c=r[2],s=0;if(d.some((function(n){return 0!==e[n]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(c)var u=c(t)}for(n&&n(r);s<d.length;s++)i=d[s],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(u)},r=self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[4998],(function(){return t(86775)}));r=t.O(r)})();
//# sourceMappingURL=app-legacy.9e7315fd.js.map