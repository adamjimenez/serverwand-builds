(function(){"use strict";var e={86775:function(e,n,t){var r=t(95082),o=(t(66992),t(88674),t(19601),t(17727),t(41539),t(78783),t(33948),t(49963)),i=t(66252);function d(e,n){var t=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(t)])}var c=t(48118);const a={},s=(0,c.Z)(a,[["render",d]]);var u=s,f=(t(8556),t(22201)),l=(t(29773),t(41291)),m=t(12931),h=t(81251),p=t(10822),b=t(54736),v=t(66300),P={dark:!0,colors:{primary:"#A25C57",secondary:"#4C3148",accent:"#A25C57",error:"#b71c1c"}},g=(0,l.Rd)({components:(0,r.Z)((0,r.Z)({},p),b),directives:v,theme:{defaultTheme:"darkTheme",themes:{darkTheme:P}},icons:{defaultSet:"fa",aliases:m.j,sets:{fa:m.fa,mdi:h.t}}}),y=[{path:"/",redirect:"Servers",component:function(){return Promise.all([t.e(1006),t.e(3470)]).then(t.bind(t,33470))},children:[{path:"/servers",name:"servers",component:function(){return Promise.all([t.e(1006),t.e(8369)]).then(t.bind(t,68369))}},{path:"/servers/create",name:"servers-create",component:function(){return Promise.all([t.e(1006),t.e(1266)]).then(t.bind(t,31266))}},{path:"/servers/:id(.*)*/edit",name:"server-edit",component:function(){return Promise.all([t.e(1006),t.e(1266)]).then(t.bind(t,31266))}},{path:"/servers/:id(.*)*",name:"server",component:function(){return Promise.all([t.e(1006),t.e(9618)]).then(t.bind(t,59618))},children:[{path:"/servers/:id(.*)*/summary",component:function(){return Promise.all([t.e(1006),t.e(2564),t.e(9257)]).then(t.bind(t,99257))}},{path:"/servers/:id(.*)*/files",component:function(){return Promise.all([t.e(1006),t.e(2564),t.e(2888),t.e(9379),t.e(6283)]).then(t.bind(t,79277))}},{path:"/servers/:id(.*)*/services",component:function(){return Promise.all([t.e(1006),t.e(2786)]).then(t.bind(t,32786))}},{path:"/servers/:id(.*)*/cronjobs",component:function(){return Promise.all([t.e(1006),t.e(4787)]).then(t.bind(t,44787))}},{path:"/servers/:id(.*)*/database",component:function(){return Promise.all([t.e(1006),t.e(2233),t.e(769)]).then(t.bind(t,61435))}},{path:"/servers/:id(.*)*/systemusers",component:function(){return Promise.all([t.e(1006),t.e(4528)]).then(t.bind(t,94528))}},{path:"/servers/:id(.*)*/firewall",component:function(){return Promise.all([t.e(1006),t.e(3032)]).then(t.bind(t,83032))}},{path:"/servers/:id(.*)*/mail",component:function(){return Promise.all([t.e(1006),t.e(2564),t.e(3304)]).then(t.bind(t,63304))}},{path:"/servers/:id(.*)*/backups",component:function(){return Promise.all([t.e(1006),t.e(2564),t.e(2888),t.e(8747)]).then(t.bind(t,48747))}},{path:"/servers/:id(.*)*/settings",component:function(){return Promise.all([t.e(1006),t.e(6091)]).then(t.bind(t,26091))}},{path:"/servers/:id(.*)*/apps",component:function(){return Promise.all([t.e(1006),t.e(2847)]).then(t.bind(t,62847))}},{path:"/servers/:id(.*)*/logs",component:function(){return Promise.all([t.e(1006),t.e(2888),t.e(9798)]).then(t.bind(t,99798))}}]},{path:"/sites",name:"sites",component:function(){return Promise.all([t.e(1006),t.e(2564),t.e(1606)]).then(t.bind(t,42978))}},{path:"/sites/create",name:"sites-create",component:function(){return Promise.all([t.e(1006),t.e(7644)]).then(t.bind(t,27644))}},{path:"/sites/:id(.*)*/edit",name:"Site-edit",component:function(){return Promise.all([t.e(1006),t.e(7644)]).then(t.bind(t,27644))}},{path:"/sites/:id(.*)*",name:"site",component:function(){return Promise.all([t.e(1006),t.e(7922)]).then(t.bind(t,87922))},children:[{path:"/sites/:id(.*)*/summary",component:function(){return Promise.all([t.e(1006),t.e(2564),t.e(2233),t.e(9709)]).then(t.bind(t,85760))}},{path:"/sites/:id(.*)*/database",component:function(){return Promise.all([t.e(1006),t.e(6129)]).then(t.bind(t,86129))}},{path:"/sites/:id(.*)*/variables",component:function(){return Promise.all([t.e(1006),t.e(6633)]).then(t.bind(t,66633))}},{path:"/sites/:id(.*)*/aliases",component:function(){return Promise.all([t.e(1006),t.e(4659)]).then(t.bind(t,54659))}},{path:"/sites/:id(.*)*/email",component:function(){return Promise.all([t.e(1006),t.e(2564),t.e(316)]).then(t.bind(t,80316))}},{path:"/sites/:id(.*)*/apps",component:function(){return Promise.all([t.e(1006),t.e(8418)]).then(t.bind(t,58418))}},{path:"/sites/:id(.*)*/dns",component:function(){return Promise.all([t.e(1006),t.e(2752)]).then(t.bind(t,52752))}},{path:"/sites/:id(.*)*/backups",component:function(){return Promise.all([t.e(1006),t.e(2564),t.e(9379),t.e(4974)]).then(t.bind(t,26468))}},{path:"/sites/:id(.*)*/settings",component:function(){return Promise.all([t.e(1006),t.e(9266)]).then(t.bind(t,19266))}}]},{path:"/domains",name:"domains",component:function(){return Promise.all([t.e(1006),t.e(3041)]).then(t.bind(t,43041))}},{path:"/domains/create",name:"domains-create",component:function(){return Promise.all([t.e(1006),t.e(2978)]).then(t.bind(t,32978))}},{path:"/domains/:id(.*)*/edit",name:"Domain-edit",component:function(){return Promise.all([t.e(1006),t.e(2978)]).then(t.bind(t,32978))}},{path:"/domains/:id(.*)*",name:"domain",component:function(){return Promise.all([t.e(1006),t.e(9952)]).then(t.bind(t,69952))},children:[{path:"/domains/:id(.*)*/summary",component:function(){return Promise.all([t.e(1006),t.e(6810)]).then(t.bind(t,86810))}},{path:"/domains/:id(.*)*/dns",component:function(){return Promise.all([t.e(1006),t.e(7023)]).then(t.bind(t,47023))}},{path:"/domains/:id(.*)*/settings",component:function(){return Promise.all([t.e(1006),t.e(6769)]).then(t.bind(t,76769))}}]},{path:"/teams",component:function(){return Promise.all([t.e(1006),t.e(7135)]).then(t.bind(t,87135))}},{path:"/teams/create",component:function(){return Promise.all([t.e(1006),t.e(8156)]).then(t.bind(t,18156))}},{path:"/teams/:id/edit",component:function(){return Promise.all([t.e(1006),t.e(8156)]).then(t.bind(t,18156))}},{path:"/teams/:id(.*)*",component:function(){return Promise.all([t.e(1006),t.e(9338)]).then(t.bind(t,99338))},children:[{path:"/teams/:id(.*)*/members",component:function(){return Promise.all([t.e(1006),t.e(4835)]).then(t.bind(t,64835))}},{path:"/teams/:id(.*)*/servers",component:function(){return Promise.all([t.e(1006),t.e(1804)]).then(t.bind(t,41804))}},{path:"/teams/:id(.*)*/settings",component:function(){return Promise.all([t.e(1006),t.e(2825)]).then(t.bind(t,2825))}}]},{path:"/users",name:"users",component:function(){return Promise.all([t.e(1006),t.e(3751)]).then(t.bind(t,43751))}},{path:"/users/create",name:"users-create",component:function(){return Promise.all([t.e(1006),t.e(9361)]).then(t.bind(t,19361))}},{path:"/users/:id(.*)*/edit",component:function(){return Promise.all([t.e(1006),t.e(9361)]).then(t.bind(t,19361))}},{path:"/users/:id(.*)*",component:function(){return Promise.all([t.e(1006),t.e(737)]).then(t.bind(t,40737))},children:[{path:"/users/:id(.*)*/summary",component:function(){return Promise.all([t.e(1006),t.e(1621)]).then(t.bind(t,71621))}},{path:"/users/:id(.*)*/sites",component:function(){return Promise.all([t.e(1006),t.e(1507)]).then(t.bind(t,81507))}},{path:"/users/:id(.*)*/domains",component:function(){return Promise.all([t.e(1006),t.e(2236)]).then(t.bind(t,2236))}},{path:"/users/:id(.*)*/invoices",component:function(){return Promise.all([t.e(1006),t.e(2564),t.e(9441)]).then(t.bind(t,59441))}},{path:"/users/:id(.*)*/subscriptions",component:function(){return Promise.all([t.e(1006),t.e(2564),t.e(9941)]).then(t.bind(t,49941))}},{path:"/users/:id(.*)*/notes",component:function(){return Promise.all([t.e(1006),t.e(667)]).then(t.bind(t,20667))}},{path:"/users/:id(.*)*/settings",component:function(){return Promise.all([t.e(1006),t.e(8701)]).then(t.bind(t,68701))}}]},{path:"/settings",component:function(){return t.e(7098).then(t.bind(t,27098))},children:[{path:"/settings/profile",component:function(){return Promise.all([t.e(1006),t.e(3998)]).then(t.bind(t,23998))}},{path:"/settings/api",component:function(){return Promise.all([t.e(1006),t.e(9651)]).then(t.bind(t,79651))}},{path:"/settings/tokens",component:function(){return Promise.all([t.e(1006),t.e(3131)]).then(t.bind(t,93131))}},{path:"/settings/products",component:function(){return Promise.all([t.e(1006),t.e(6312)]).then(t.bind(t,36312))}}]}]},{path:"/auth",component:function(){return t.e(1260).then(t.bind(t,1260))},children:[{path:"/auth/login",name:"login",component:function(){return Promise.all([t.e(1006),t.e(415)]).then(t.bind(t,10415))}},{path:"/auth/forgot",name:"forgot",component:function(){return Promise.all([t.e(1006),t.e(1800)]).then(t.bind(t,21800))}},{path:"/auth/register",name:"register",component:function(){return Promise.all([t.e(1006),t.e(2278)]).then(t.bind(t,42278))}},{path:"/auth/logout",name:"logout",component:function(){return Promise.all([t.e(1006),t.e(5033)]).then(t.bind(t,45033))}}]},{path:"/loading",component:function(){return t.e(5586).then(t.bind(t,55586))}},{path:"/:notFound",component:function(){return t.e(9330).then(t.bind(t,59330))}}],k=(0,f.p7)({mode:"history",base:"/",history:(0,f.PO)(),routes:y});(0,o.ri)(u).use(g).use(k).mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,loaded:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(n,r,o,i){if(!r){var d=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],i=e[u][2];for(var c=!0,a=0;a<r.length;a++)(!1&i||d>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[a])}))?r.splice(a--,1):(c=!1,i<d&&(d=i));if(c){e.splice(u--,1);var s=o();void 0!==s&&(n=s)}}return n}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"-legacy."+{10:"d80faa0d",245:"ccf80d81",316:"be7a50ce",404:"4ce5bebe",415:"c7a65d63",491:"ef6f813d",516:"7733db14",566:"16b7614c",609:"7bb10bb1",667:"01067272",736:"42f4b452",737:"2159f18c",769:"c17548d2",974:"1e737103",1006:"842f1c86",1170:"21cc2917",1179:"4f0e5b53",1260:"16733b4f",1266:"e0b468c1",1494:"84610f41",1507:"9390947e",1606:"f3b8cfe8",1621:"5f0acfa2",1800:"b8fa8fc7",1804:"46dd02b4",1902:"5ab1fdf7",2102:"aa25a3e4",2105:"cc1ef2f5",2123:"a44de958",2151:"ec010b91",2156:"a56afa83",2157:"49c282dd",2233:"c66a5c3e",2236:"b7433276",2253:"6bf9916d",2278:"e7665a2f",2499:"027cb8e4",2542:"f1e606d7",2564:"ed429788",2706:"e14e9e23",2752:"9e0c1225",2783:"7e169b23",2786:"dacb4f63",2825:"c170d25c",2847:"de60bb9e",2888:"ada5eebd",2935:"28b5f333",2978:"08774695",3032:"521dae08",3041:"c7478b2b",3131:"112f8be0",3155:"f0fc32e5",3243:"44bdddb3",3281:"b21ad2b3",3297:"e184f93e",3304:"9aa6a340",3470:"9d938614",3644:"607fa24d",3751:"a197e351",3998:"04930c7d",4158:"d0d0ff0c",4306:"527047c7",4321:"db62d849",4528:"43ec7def",4577:"7b09c479",4659:"502b711e",4787:"d1227430",4835:"bc3dceb2",4974:"2d557036",5033:"11bf0efe",5037:"f409acb2",5042:"96944be7",5204:"aad93f45",5220:"8d554158",5260:"5190684d",5274:"2a278dd5",5380:"a6f707f9",5429:"d8603282",5518:"396a3bb7",5537:"53e151b1",5586:"169150a9",5670:"297b031e",5748:"36bdc0c3",6015:"8c359860",6091:"7e5fda9e",6129:"da2c55cb",6207:"f30cf93c",6283:"0ef3c63f",6312:"e3c27b82",6359:"0bcd35da",6367:"e4483554",6584:"17fa50ea",6633:"164ae300",6664:"bb335da0",6764:"e83baf58",6769:"86fa53f6",6810:"a3605779",6812:"b30feb67",6820:"8e9dbb2b",6894:"1fc37a73",6935:"01c05dce",7023:"f049ddae",7098:"79756de9",7120:"86cceafb",7135:"c081d962",7200:"62e80925",7216:"d05cc403",7354:"f1f9a7e7",7449:"66f5bd43",7540:"15d40389",7562:"30dcdeea",7644:"1c537f0e",7673:"ebab14b7",7688:"ae95e6d0",7801:"99890338",7878:"dc0fee62",7922:"6f0ff491",8124:"9c665859",8156:"e081f957",8162:"61b7fa63",8330:"45c91a9c",8369:"625c0dac",8418:"183318d7",8531:"c46295d6",8701:"861530d9",8747:"3011ec22",9045:"66c48652",9085:"6430931e",9092:"f98addce",9122:"7fcc08a6",9153:"606dbe7b",9208:"901ed909",9257:"6bc13535",9266:"9a3c7576",9330:"3c5abb9d",9338:"2dc02840",9361:"8ef6894d",9369:"518dbe54",9379:"0948bcde",9441:"b915090a",9600:"340369e4",9618:"c1a5e84f",9651:"bdf5dc12",9709:"77329b89",9798:"41c1ea9e",9941:"152a52a7",9952:"c86d7829",9957:"2677b605",9966:"40cfd720"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{316:"d9e10cd5",667:"d9e10cd5",737:"d9e10cd5",769:"d9e10cd5",1266:"d9e10cd5",1507:"d9e10cd5",1606:"56b105fc",1621:"d9e10cd5",1804:"d9e10cd5",2236:"d9e10cd5",2752:"d9e10cd5",2786:"d9e10cd5",2825:"d9e10cd5",2847:"d9e10cd5",2888:"6405abc8",2978:"d9e10cd5",3032:"d9e10cd5",3041:"56b105fc",3131:"d9e10cd5",3304:"f9f15893",3470:"746258d9",3751:"56b105fc",4528:"d9e10cd5",4659:"d9e10cd5",4787:"d9e10cd5",4835:"d9e10cd5",4974:"d9e10cd5",5586:"d9e10cd5",6091:"d9e10cd5",6129:"d9e10cd5",6283:"d9e10cd5",6312:"d9e10cd5",6633:"d9e10cd5",6769:"d9e10cd5",6810:"d9e10cd5",7023:"d9e10cd5",7135:"dee19639",7644:"d9e10cd5",7922:"0f9494b4",8156:"d9e10cd5",8369:"ee103936",8418:"d9e10cd5",8701:"d9e10cd5",8747:"d9e10cd5",9257:"8d7d2adb",9266:"d9e10cd5",9338:"d9e10cd5",9361:"d9e10cd5",9441:"d9e10cd5",9651:"d9e10cd5",9709:"d9e10cd5",9798:"e5847cae",9941:"d9e10cd5",9952:"d91b917c"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="ServerWand:";t.l=function(r,o,i,d){if(e[r])e[r].push(o);else{var c,a;if(void 0!==i)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var f=s[u];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==n+i){c=f;break}}c||(a=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,t.nc&&c.setAttribute("nonce",t.nc),c.setAttribute("data-webpack",n+i),c.src=r),e[r]=[o];var l=function(n,t){c.onerror=c.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(t)})),n)return n(t)},m=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),a&&document.head.appendChild(c)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){t.p="/"}(),function(){var e=function(e,n,t,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)t();else{var d=i&&("load"===i.type?"missing":i.type),c=i&&i.target&&i.target.href||n,a=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");a.code="CSS_CHUNK_LOAD_FAILED",a.type=d,a.request=c,o.parentNode.removeChild(o),r(a)}};return o.onerror=o.onload=i,o.href=n,document.head.appendChild(o),o},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){o=d[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var d=t.miniCssF(r),c=t.p+d;if(n(d,c))return o();e(r,c,o,i)}))},o={2143:0};t.f.miniCss=function(e,n){var t={316:1,667:1,737:1,769:1,1266:1,1507:1,1606:1,1621:1,1804:1,2236:1,2752:1,2786:1,2825:1,2847:1,2888:1,2978:1,3032:1,3041:1,3131:1,3304:1,3470:1,3751:1,4528:1,4659:1,4787:1,4835:1,4974:1,5586:1,6091:1,6129:1,6283:1,6312:1,6633:1,6769:1,6810:1,7023:1,7135:1,7644:1,7922:1,8156:1,8369:1,8418:1,8701:1,8747:1,9257:1,9266:1,9338:1,9361:1,9441:1,9651:1,9709:1,9798:1,9941:1,9952:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}(),function(){var e={2143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var d=t.p+t.u(n),c=new Error,a=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),d=r&&r.target&&r.target.src;c.message="Loading chunk "+n+" failed.\n("+i+": "+d+")",c.name="ChunkLoadError",c.type=i,c.request=d,o[1](c)}};t.l(d,a,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,d=r[0],c=r[1],a=r[2],s=0;if(d.some((function(n){return 0!==e[n]}))){for(o in c)t.o(c,o)&&(t.m[o]=c[o]);if(a)var u=a(t)}for(n&&n(r);s<d.length;s++)i=d[s],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(u)},r=self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[4998],(function(){return t(86775)}));r=t.O(r)})();
//# sourceMappingURL=app-legacy.dce1365f.js.map