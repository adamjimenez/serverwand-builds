(function(){"use strict";var e={2612:function(e,n,t){var r=t(95082),o=(t(752),t(73964),t(60429),t(36409),t(60228),t(21694),t(76265),t(49963)),i=t(66252);function d(e,n){var t=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(t)])}var a=t(83744);const c={},s=(0,a.Z)(c,[["render",d]]);var u=s,f=(t(8556),t(22201)),l=(t(29773),t(41291)),m=t(12931),p=t(81251),h=t(39069),b=t(88383),v=t(66300),P={dark:!0,colors:{primary:"#A25C57",secondary:"#4C3148",accent:"#A25C57",error:"#b71c1c"}},g=(0,l.Rd)({components:(0,r.Z)((0,r.Z)({},h),b),directives:v,theme:{defaultTheme:"darkTheme",themes:{darkTheme:P}},icons:{defaultSet:"fa",aliases:m.j,sets:{fa:m.fa,mdi:p.t}}}),y=[{path:"/",redirect:"servers",component:function(){return Promise.all([t.e(1006),t.e(7280)]).then(t.bind(t,37280))},children:[{path:"/servers",name:"servers",component:function(){return Promise.all([t.e(1006),t.e(2414)]).then(t.bind(t,32414))}},{path:"/servers/create",name:"servers-create",component:function(){return Promise.all([t.e(1006),t.e(2207)]).then(t.bind(t,82207))}},{path:"/servers/:id(.*)*/edit",name:"server-edit",component:function(){return Promise.all([t.e(1006),t.e(2207)]).then(t.bind(t,82207))}},{path:"/servers/:id(.*)*",name:"server",component:function(){return Promise.all([t.e(1006),t.e(8452)]).then(t.bind(t,38452))},children:[{path:"/servers/:id(.*)*/summary",component:function(){return Promise.all([t.e(1006),t.e(2564),t.e(9471)]).then(t.bind(t,69471))}},{path:"/servers/:id(.*)*/files",component:function(){return Promise.all([t.e(1006),t.e(2564),t.e(6102),t.e(2248),t.e(7217)]).then(t.bind(t,95222))}},{path:"/servers/:id(.*)*/services",component:function(){return Promise.all([t.e(1006),t.e(336)]).then(t.bind(t,70336))}},{path:"/servers/:id(.*)*/cronjobs",component:function(){return Promise.all([t.e(1006),t.e(5979)]).then(t.bind(t,85979))}},{path:"/servers/:id(.*)*/database",component:function(){return Promise.all([t.e(1006),t.e(5516),t.e(6494)]).then(t.bind(t,31763))}},{path:"/servers/:id(.*)*/systemusers",component:function(){return Promise.all([t.e(1006),t.e(1591)]).then(t.bind(t,91591))}},{path:"/servers/:id(.*)*/firewall",component:function(){return Promise.all([t.e(1006),t.e(7388)]).then(t.bind(t,97388))}},{path:"/servers/:id(.*)*/mail",component:function(){return Promise.all([t.e(1006),t.e(2564),t.e(6265)]).then(t.bind(t,6265))}},{path:"/servers/:id(.*)*/backups",component:function(){return Promise.all([t.e(1006),t.e(2564),t.e(6102),t.e(6776)]).then(t.bind(t,86776))}},{path:"/servers/:id(.*)*/settings",component:function(){return Promise.all([t.e(1006),t.e(2287)]).then(t.bind(t,82287))}},{path:"/servers/:id(.*)*/apps",component:function(){return Promise.all([t.e(1006),t.e(4094)]).then(t.bind(t,24094))}},{path:"/servers/:id(.*)*/logs",component:function(){return Promise.all([t.e(1006),t.e(6102),t.e(8833)]).then(t.bind(t,38833))}}]},{path:"/sites",name:"sites",component:function(){return Promise.all([t.e(1006),t.e(2564),t.e(1453)]).then(t.bind(t,51453))}},{path:"/sites/create",name:"sites-create",component:function(){return Promise.all([t.e(1006),t.e(6006)]).then(t.bind(t,56006))}},{path:"/sites/:id(.*)*/edit",name:"Site-edit",component:function(){return Promise.all([t.e(1006),t.e(6006)]).then(t.bind(t,56006))}},{path:"/sites/:id(.*)*",name:"site",component:function(){return Promise.all([t.e(1006),t.e(6659)]).then(t.bind(t,56659))},children:[{path:"/sites/:id(.*)*/summary",component:function(){return Promise.all([t.e(1006),t.e(2564),t.e(5516),t.e(9367)]).then(t.bind(t,28391))}},{path:"/sites/:id(.*)*/database",component:function(){return Promise.all([t.e(1006),t.e(9283)]).then(t.bind(t,69283))}},{path:"/sites/:id(.*)*/variables",component:function(){return Promise.all([t.e(1006),t.e(9170)]).then(t.bind(t,19170))}},{path:"/sites/:id(.*)*/aliases",component:function(){return Promise.all([t.e(1006),t.e(7365)]).then(t.bind(t,47365))}},{path:"/sites/:id(.*)*/email",component:function(){return Promise.all([t.e(1006),t.e(2564),t.e(344)]).then(t.bind(t,70344))}},{path:"/sites/:id(.*)*/apps",component:function(){return Promise.all([t.e(1006),t.e(2400)]).then(t.bind(t,92400))}},{path:"/sites/:id(.*)*/dns",component:function(){return Promise.all([t.e(1006),t.e(9744)]).then(t.bind(t,49744))}},{path:"/sites/:id(.*)*/backups",component:function(){return Promise.all([t.e(1006),t.e(2564),t.e(2248),t.e(8737)]).then(t.bind(t,79511))}},{path:"/sites/:id(.*)*/settings",component:function(){return Promise.all([t.e(1006),t.e(9371)]).then(t.bind(t,49371))}}]},{path:"/domains",name:"domains",component:function(){return Promise.all([t.e(1006),t.e(1995)]).then(t.bind(t,71995))}},{path:"/domains/create",name:"domains-create",component:function(){return Promise.all([t.e(1006),t.e(2489)]).then(t.bind(t,2489))}},{path:"/domains/:id(.*)*/edit",name:"Domain-edit",component:function(){return Promise.all([t.e(1006),t.e(2489)]).then(t.bind(t,2489))}},{path:"/domains/:id(.*)*",name:"domain",component:function(){return Promise.all([t.e(1006),t.e(3029)]).then(t.bind(t,73029))},children:[{path:"/domains/:id(.*)*/summary",component:function(){return Promise.all([t.e(1006),t.e(7486)]).then(t.bind(t,47486))}},{path:"/domains/:id(.*)*/dns",component:function(){return Promise.all([t.e(1006),t.e(4989)]).then(t.bind(t,44989))}},{path:"/domains/:id(.*)*/settings",component:function(){return Promise.all([t.e(1006),t.e(3587)]).then(t.bind(t,83587))}}]},{path:"/teams",component:function(){return Promise.all([t.e(1006),t.e(4251)]).then(t.bind(t,94251))}},{path:"/teams/create",component:function(){return Promise.all([t.e(1006),t.e(8547)]).then(t.bind(t,58547))}},{path:"/teams/:id/edit",component:function(){return Promise.all([t.e(1006),t.e(8547)]).then(t.bind(t,58547))}},{path:"/teams/:id(.*)*",component:function(){return Promise.all([t.e(1006),t.e(7745)]).then(t.bind(t,7745))},children:[{path:"/teams/:id(.*)*/members",component:function(){return Promise.all([t.e(1006),t.e(6041)]).then(t.bind(t,16041))}},{path:"/teams/:id(.*)*/servers",component:function(){return Promise.all([t.e(1006),t.e(8860)]).then(t.bind(t,48860))}},{path:"/teams/:id(.*)*/settings",component:function(){return Promise.all([t.e(1006),t.e(8472)]).then(t.bind(t,78472))}}]},{path:"/users",name:"users",component:function(){return Promise.all([t.e(1006),t.e(4876)]).then(t.bind(t,54876))}},{path:"/users/create",name:"users-create",component:function(){return Promise.all([t.e(1006),t.e(2450)]).then(t.bind(t,12450))}},{path:"/users/:id(.*)*/edit",component:function(){return Promise.all([t.e(1006),t.e(2450)]).then(t.bind(t,12450))}},{path:"/users/:id(.*)*",component:function(){return Promise.all([t.e(1006),t.e(6555)]).then(t.bind(t,6555))},children:[{path:"/users/:id(.*)*/summary",component:function(){return Promise.all([t.e(1006),t.e(2347)]).then(t.bind(t,62347))}},{path:"/users/:id(.*)*/sites",component:function(){return Promise.all([t.e(1006),t.e(5003)]).then(t.bind(t,45003))}},{path:"/users/:id(.*)*/domains",component:function(){return Promise.all([t.e(1006),t.e(3558)]).then(t.bind(t,33558))}},{path:"/users/:id(.*)*/invoices",component:function(){return Promise.all([t.e(1006),t.e(2564),t.e(9136)]).then(t.bind(t,29136))}},{path:"/users/:id(.*)*/subscriptions",component:function(){return Promise.all([t.e(1006),t.e(2564),t.e(1781)]).then(t.bind(t,41781))}},{path:"/users/:id(.*)*/notes",component:function(){return Promise.all([t.e(1006),t.e(6446)]).then(t.bind(t,6446))}},{path:"/users/:id(.*)*/settings",component:function(){return Promise.all([t.e(1006),t.e(7329)]).then(t.bind(t,47329))}}]},{path:"/settings",component:function(){return t.e(9609).then(t.bind(t,99609))},children:[{path:"/settings/profile",component:function(){return Promise.all([t.e(1006),t.e(3413)]).then(t.bind(t,63413))}},{path:"/settings/api",component:function(){return Promise.all([t.e(1006),t.e(7073)]).then(t.bind(t,27073))}},{path:"/settings/tokens",component:function(){return Promise.all([t.e(1006),t.e(3720)]).then(t.bind(t,3720))}},{path:"/settings/products",component:function(){return Promise.all([t.e(1006),t.e(1654)]).then(t.bind(t,61654))}}]}]},{path:"/auth",component:function(){return t.e(7416).then(t.bind(t,67416))},children:[{path:"/auth/login",name:"login",component:function(){return Promise.all([t.e(1006),t.e(3659)]).then(t.bind(t,93659))}},{path:"/auth/forgot",name:"forgot",component:function(){return Promise.all([t.e(1006),t.e(6104)]).then(t.bind(t,66104))}},{path:"/auth/register",name:"register",component:function(){return Promise.all([t.e(1006),t.e(8803)]).then(t.bind(t,48803))}},{path:"/auth/logout",name:"logout",component:function(){return Promise.all([t.e(1006),t.e(2919)]).then(t.bind(t,42919))}}]},{path:"/loading",component:function(){return t.e(8294).then(t.bind(t,28294))}},{path:"/:notFound",component:function(){return t.e(8257).then(t.bind(t,28257))}}],k=(0,f.p7)({mode:"history",base:"/",history:(0,f.PO)(),routes:y});(0,o.ri)(u).use(g).use(k).mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,loaded:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(n,r,o,i){if(!r){var d=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],i=e[u][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||d>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(a=!1,i<d&&(d=i));if(a){e.splice(u--,1);var s=o();void 0!==s&&(n=s)}}return n}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"-legacy."+{10:"d51cce3c",245:"6ac5cefb",336:"23186c10",344:"525f60b0",404:"e5fcfad0",491:"1c8f10df",516:"9de14dd5",566:"76c2f651",609:"8ec718bf",736:"72c24709",974:"94250880",1006:"dc6e376e",1170:"0877815a",1179:"c0e5d431",1453:"c33875ab",1494:"1c321e9d",1591:"8f57cfa1",1654:"f38f40d8",1781:"e88fe597",1902:"7d659619",1995:"81e9b138",2102:"6175999b",2105:"15b1a7cb",2123:"4652f43d",2151:"0c1b7cae",2156:"a996c55c",2157:"3ba3f3f7",2207:"bb820229",2248:"ba59a3c4",2253:"233d32be",2287:"531568df",2347:"92a698c7",2400:"3ca4559d",2414:"f0edb068",2450:"e6b8e8cb",2489:"013c463f",2499:"fd9f4d62",2542:"c134a4c9",2564:"5b297417",2706:"edf44dd2",2783:"f3627f7d",2919:"1f45f951",2935:"3b5112d0",3029:"aae209b1",3155:"c155d6ae",3243:"9d1ac5cb",3281:"677df4a4",3297:"eb2d5cf9",3413:"21b0745e",3558:"8cca021a",3587:"e76ebce8",3644:"1d012e0e",3659:"3e60a5cb",3720:"47ddf430",4094:"56461d0f",4158:"ad8553a2",4251:"ee5c95d3",4306:"a91d06e7",4321:"17771e4d",4577:"011a0599",4876:"e864ed62",4989:"3647eb38",5003:"66874775",5037:"e4d4302d",5042:"2a86ae55",5204:"d4d62888",5220:"8c3d128c",5260:"f6d6d045",5274:"733daa8b",5380:"d5e63dc8",5429:"589c2893",5516:"50f8a3e2",5518:"0cd1c02c",5537:"bce9e952",5670:"f692e1c5",5748:"98337e5e",5979:"7eb0bffb",6006:"09b13260",6015:"05e04fdc",6041:"cd6ff456",6102:"bdca6b56",6104:"decedc53",6207:"e1b53542",6265:"e8190cfc",6359:"5a246b03",6367:"95c753a8",6446:"5b5f8d8c",6494:"ae4ca0ea",6555:"c0214464",6584:"3bedd50d",6659:"847d42e4",6664:"fb2dbb3e",6764:"0930e138",6776:"dea137f3",6812:"f85caefa",6820:"9e2982c6",6894:"c3a5beab",6935:"7c976f10",7073:"fb5ee6f6",7120:"4ab85de4",7200:"366c8bd5",7216:"1a77aa3c",7217:"4fe41678",7280:"d025852f",7329:"dbb5d822",7354:"3b0d49ba",7365:"a366a9f6",7388:"648b2ddd",7416:"adad38bd",7449:"65ab03d4",7486:"bbcf6fc0",7540:"27643ecc",7562:"91851be5",7673:"69b25105",7688:"b4e219e6",7745:"ddd7f7b4",7801:"3913370d",7878:"bbd09e5c",8124:"510848fe",8162:"e069efa2",8257:"31c44060",8294:"df1d9afb",8330:"92920046",8452:"57e48111",8472:"feef8870",8531:"739b6ed5",8547:"50fa2082",8737:"bffa3f13",8803:"18c219ed",8833:"35dea2a0",8860:"6c370ac2",9045:"398f0b60",9085:"5ff134a1",9092:"3b27802d",9122:"d7eff65a",9136:"36e1ba82",9153:"f1844ff7",9170:"a003b39b",9208:"f8d2f3a6",9283:"fa342aeb",9367:"834afbd1",9369:"3d7230d7",9371:"79db4e59",9471:"c3d23721",9600:"cbb11d5a",9609:"c3a1b57a",9744:"5896adcb",9957:"9d2e9289",9966:"62f88d5b"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{344:"d9e10cd5",1453:"d9e10cd5",1591:"d9e10cd5",1654:"d9e10cd5",1781:"d9e10cd5",1995:"d9e10cd5",2207:"d9e10cd5",2287:"d9e10cd5",2347:"d9e10cd5",2400:"d9e10cd5",2414:"d9e10cd5",2450:"d9e10cd5",2489:"d9e10cd5",3029:"d91b917c",3558:"d9e10cd5",3587:"d9e10cd5",3720:"d9e10cd5",4094:"d9e10cd5",4251:"d9e10cd5",4876:"d9e10cd5",4989:"d9e10cd5",5003:"d9e10cd5",5979:"d9e10cd5",6006:"d9e10cd5",6041:"d9e10cd5",6102:"9718e271",6265:"f9f15893",6446:"d9e10cd5",6494:"d9e10cd5",6555:"d9e10cd5",6659:"b70a80a7",6776:"d9e10cd5",7073:"d9e10cd5",7217:"d9e10cd5",7329:"d9e10cd5",7365:"d9e10cd5",7388:"d9e10cd5",7486:"d9e10cd5",7745:"d9e10cd5",8294:"d9e10cd5",8472:"d9e10cd5",8547:"d9e10cd5",8737:"d9e10cd5",8833:"636a25d7",8860:"d9e10cd5",9136:"d9e10cd5",9170:"d9e10cd5",9283:"d9e10cd5",9367:"d9e10cd5",9371:"d9e10cd5",9744:"d9e10cd5"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="ServerWand:";t.l=function(r,o,i,d){if(e[r])e[r].push(o);else{var a,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var f=s[u];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==n+i){a=f;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",n+i),a.src=r),e[r]=[o];var l=function(n,t){a.onerror=a.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(t)})),n)return n(t)},m=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){t.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var d=function(t){if(i.onerror=i.onload=null,"load"===t.type)r();else{var d=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=d,c.request=a,i.parentNode&&i.parentNode.removeChild(i),o(c)}};return i.onerror=i.onload=d,i.href=n,t?t.parentNode.insertBefore(i,t.nextSibling):document.head.appendChild(i),i},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){o=d[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var d=t.miniCssF(r),a=t.p+d;if(n(d,a))return o();e(r,a,null,o,i)}))},o={2143:0};t.f.miniCss=function(e,n){var t={344:1,1453:1,1591:1,1654:1,1781:1,1995:1,2207:1,2287:1,2347:1,2400:1,2414:1,2450:1,2489:1,3029:1,3558:1,3587:1,3720:1,4094:1,4251:1,4876:1,4989:1,5003:1,5979:1,6006:1,6041:1,6102:1,6265:1,6446:1,6494:1,6555:1,6659:1,6776:1,7073:1,7217:1,7329:1,7365:1,7388:1,7486:1,7745:1,8294:1,8472:1,8547:1,8737:1,8833:1,8860:1,9136:1,9170:1,9283:1,9367:1,9371:1,9744:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={2143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var d=t.p+t.u(n),a=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),d=r&&r.target&&r.target.src;a.message="Loading chunk "+n+" failed.\n("+i+": "+d+")",a.name="ChunkLoadError",a.type=i,a.request=d,o[1](a)}};t.l(d,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,d=r[0],a=r[1],c=r[2],s=0;if(d.some((function(n){return 0!==e[n]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(c)var u=c(t)}for(n&&n(r);s<d.length;s++)i=d[s],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(u)},r=self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[4998],(function(){return t(2612)}));r=t.O(r)})();
//# sourceMappingURL=app-legacy.31b90bf2.js.map