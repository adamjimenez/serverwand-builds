(function(){"use strict";var e={58401:function(e,n,t){var a=t(49963),o=t(66252);function d(e,n){const t=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(t)])}var i=t(48118);const r={},c=(0,i.Z)(r,[["render",d]]);var s=c,l=(t(8556),t(22201)),m=(t(29773),t(41291)),p=t(12931),h=t(81251),f=t(80910),b=t(52346),u=t(66300);const v={dark:!0,colors:{primary:"#A25C57",secondary:"#4C3148",accent:"#A25C57",error:"#b71c1c"}},P=(0,m.Rd)({components:{...f,...b},directives:u,theme:{defaultTheme:"darkTheme",themes:{darkTheme:v}},icons:{defaultSet:"fa",aliases:p.j,sets:{fa:p.fa,mdi:h.t}}}),g=[{path:"/",redirect:"servers",component:()=>Promise.all([t.e(1006),t.e(7658),t.e(588)]).then(t.bind(t,60588)),children:[{path:"/servers",name:"servers",component:()=>Promise.all([t.e(1006),t.e(7658),t.e(3795)]).then(t.bind(t,3795))},{path:"/servers/create",name:"servers-create",component:()=>Promise.all([t.e(1006),t.e(7658),t.e(9710)]).then(t.bind(t,69710))},{path:"/servers/:id(.*)*/edit",name:"server-edit",component:()=>Promise.all([t.e(1006),t.e(7658),t.e(9710)]).then(t.bind(t,69710))},{path:"/servers/:id(.*)*",name:"server",component:()=>Promise.all([t.e(1006),t.e(7658),t.e(3394)]).then(t.bind(t,3394)),children:[{path:"/servers/:id(.*)*/summary",component:()=>Promise.all([t.e(1006),t.e(7658),t.e(2564),t.e(3506)]).then(t.bind(t,63506))},{path:"/servers/:id(.*)*/files",component:()=>Promise.all([t.e(1006),t.e(7658),t.e(2564),t.e(1027),t.e(5106),t.e(3023)]).then(t.bind(t,21826))},{path:"/servers/:id(.*)*/services",component:()=>Promise.all([t.e(1006),t.e(8269)]).then(t.bind(t,38269))},{path:"/servers/:id(.*)*/cronjobs",component:()=>Promise.all([t.e(1006),t.e(4192)]).then(t.bind(t,14192))},{path:"/servers/:id(.*)*/database",component:()=>Promise.all([t.e(1006),t.e(7500)]).then(t.bind(t,57500))},{path:"/servers/:id(.*)*/systemusers",component:()=>Promise.all([t.e(1006),t.e(7539)]).then(t.bind(t,67539))},{path:"/servers/:id(.*)*/firewall",component:()=>Promise.all([t.e(1006),t.e(8811)]).then(t.bind(t,28811))},{path:"/servers/:id(.*)*/mail",component:()=>Promise.all([t.e(1006),t.e(7658),t.e(2564),t.e(5074)]).then(t.bind(t,95074))},{path:"/servers/:id(.*)*/backups",component:()=>Promise.all([t.e(1006),t.e(7658),t.e(2564),t.e(1027),t.e(466)]).then(t.bind(t,70466))},{path:"/servers/:id(.*)*/settings",component:()=>Promise.all([t.e(1006),t.e(7658),t.e(2204)]).then(t.bind(t,82204))},{path:"/servers/:id(.*)*/apps",component:()=>Promise.all([t.e(1006),t.e(7658),t.e(6073)]).then(t.bind(t,96073))},{path:"/servers/:id(.*)*/logs",component:()=>Promise.all([t.e(1006),t.e(1027),t.e(5488)]).then(t.bind(t,15488))}]},{path:"/sites",name:"sites",component:()=>Promise.all([t.e(1006),t.e(7658),t.e(2564),t.e(2992)]).then(t.bind(t,82992))},{path:"/sites/create",name:"sites-create",component:()=>Promise.all([t.e(1006),t.e(7658),t.e(8153)]).then(t.bind(t,58153))},{path:"/sites/:id(.*)*/edit",name:"Site-edit",component:()=>Promise.all([t.e(1006),t.e(7658),t.e(8153)]).then(t.bind(t,58153))},{path:"/sites/:id(.*)*",name:"site",component:()=>Promise.all([t.e(1006),t.e(5948)]).then(t.bind(t,95948)),children:[{path:"/sites/:id(.*)*/summary",component:()=>Promise.all([t.e(1006),t.e(7658),t.e(2564),t.e(5336)]).then(t.bind(t,45336))},{path:"/sites/:id(.*)*/database",component:()=>Promise.all([t.e(1006),t.e(7658),t.e(819)]).then(t.bind(t,10819))},{path:"/sites/:id(.*)*/variables",component:()=>Promise.all([t.e(1006),t.e(751)]).then(t.bind(t,90751))},{path:"/sites/:id(.*)*/aliases",component:()=>Promise.all([t.e(1006),t.e(3019)]).then(t.bind(t,3019))},{path:"/sites/:id(.*)*/email",component:()=>Promise.all([t.e(1006),t.e(2564),t.e(7024)]).then(t.bind(t,7024))},{path:"/sites/:id(.*)*/apps",component:()=>Promise.all([t.e(1006),t.e(7658),t.e(1965)]).then(t.bind(t,41965))},{path:"/sites/:id(.*)*/dns",component:()=>Promise.all([t.e(1006),t.e(2162)]).then(t.bind(t,2162))},{path:"/sites/:id(.*)*/backups",component:()=>Promise.all([t.e(1006),t.e(2564),t.e(5106),t.e(3954)]).then(t.bind(t,14057))},{path:"/sites/:id(.*)*/settings",component:()=>Promise.all([t.e(1006),t.e(7658),t.e(9206)]).then(t.bind(t,79206))}]},{path:"/domains",name:"domains",component:()=>Promise.all([t.e(1006),t.e(7658),t.e(4110)]).then(t.bind(t,74110))},{path:"/domains/create",name:"domains-create",component:()=>Promise.all([t.e(1006),t.e(7658),t.e(2297)]).then(t.bind(t,42297))},{path:"/domains/:id(.*)*/edit",name:"Domain-edit",component:()=>Promise.all([t.e(1006),t.e(7658),t.e(2297)]).then(t.bind(t,42297))},{path:"/domains/:id(.*)*",name:"domain",component:()=>Promise.all([t.e(1006),t.e(2950)]).then(t.bind(t,72950)),children:[{path:"/domains/:id(.*)*/summary",component:()=>Promise.all([t.e(1006),t.e(7658),t.e(6231)]).then(t.bind(t,66231))},{path:"/domains/:id(.*)*/dns",component:()=>Promise.all([t.e(1006),t.e(8475)]).then(t.bind(t,71554))},{path:"/domains/:id(.*)*/settings",component:()=>Promise.all([t.e(1006),t.e(7658),t.e(8055)]).then(t.bind(t,68055))}]},{path:"/teams",component:()=>Promise.all([t.e(1006),t.e(9049)]).then(t.bind(t,99049))},{path:"/teams/create",component:()=>Promise.all([t.e(1006),t.e(7658),t.e(323)]).then(t.bind(t,10323))},{path:"/teams/:id/edit",component:()=>Promise.all([t.e(1006),t.e(7658),t.e(323)]).then(t.bind(t,10323))},{path:"/teams/:id(.*)*",component:()=>Promise.all([t.e(1006),t.e(350)]).then(t.bind(t,60350)),children:[{path:"/teams/:id(.*)*/members",component:()=>Promise.all([t.e(1006),t.e(9583)]).then(t.bind(t,29583))},{path:"/teams/:id(.*)*/servers",component:()=>Promise.all([t.e(1006),t.e(7658),t.e(694)]).then(t.bind(t,20694))},{path:"/teams/:id(.*)*/settings",component:()=>Promise.all([t.e(1006),t.e(7658),t.e(259)]).then(t.bind(t,20259))}]},{path:"/users",name:"users",component:()=>Promise.all([t.e(1006),t.e(7658),t.e(6503)]).then(t.bind(t,56503))},{path:"/users/create",name:"users-create",component:()=>Promise.all([t.e(1006),t.e(7658),t.e(8004)]).then(t.bind(t,88004))},{path:"/users/:id(.*)*/edit",component:()=>Promise.all([t.e(1006),t.e(7658),t.e(8004)]).then(t.bind(t,88004))},{path:"/users/:id(.*)*",component:()=>Promise.all([t.e(1006),t.e(9193)]).then(t.bind(t,9193)),children:[{path:"/users/:id(.*)*/summary",component:()=>Promise.all([t.e(1006),t.e(8781)]).then(t.bind(t,98781))},{path:"/users/:id(.*)*/sites",component:()=>Promise.all([t.e(1006),t.e(7658),t.e(2492)]).then(t.bind(t,2492))},{path:"/users/:id(.*)*/domains",component:()=>Promise.all([t.e(1006),t.e(7658),t.e(876)]).then(t.bind(t,80876))},{path:"/users/:id(.*)*/invoices",component:()=>Promise.all([t.e(1006),t.e(7658),t.e(2564),t.e(4112)]).then(t.bind(t,54112))},{path:"/users/:id(.*)*/subscriptions",component:()=>Promise.all([t.e(1006),t.e(7658),t.e(2564),t.e(6986)]).then(t.bind(t,36986))},{path:"/users/:id(.*)*/notes",component:()=>Promise.all([t.e(1006),t.e(2479)]).then(t.bind(t,52479))},{path:"/users/:id(.*)*/settings",component:()=>Promise.all([t.e(1006),t.e(7658),t.e(1784)]).then(t.bind(t,91784))}]},{path:"/settings",component:()=>t.e(3626).then(t.bind(t,23626)),children:[{path:"/settings/profile",component:()=>Promise.all([t.e(1006),t.e(7658),t.e(8842)]).then(t.bind(t,28842))},{path:"/settings/api",component:()=>Promise.all([t.e(1006),t.e(75)]).then(t.bind(t,10075))},{path:"/settings/tokens",component:()=>Promise.all([t.e(1006),t.e(4716)]).then(t.bind(t,4716))},{path:"/settings/products",component:()=>Promise.all([t.e(1006),t.e(8551)]).then(t.bind(t,88551))}]}]},{path:"/auth",component:()=>t.e(1260).then(t.bind(t,1260)),children:[{path:"/auth/login",name:"login",component:()=>Promise.all([t.e(1006),t.e(7658),t.e(6239)]).then(t.bind(t,26239))},{path:"/auth/forgot",name:"forgot",component:()=>Promise.all([t.e(1006),t.e(7658),t.e(3816)]).then(t.bind(t,33816))},{path:"/auth/register",name:"register",component:()=>Promise.all([t.e(1006),t.e(7658),t.e(8648)]).then(t.bind(t,38648))},{path:"/auth/logout",name:"logout",component:()=>Promise.all([t.e(1006),t.e(7658),t.e(807)]).then(t.bind(t,60807))}]},{path:"/loading",component:()=>t.e(1421).then(t.bind(t,91421))},{path:"/:notFound",component:()=>t.e(9330).then(t.bind(t,59330))}],y=(0,l.p7)({mode:"history",base:"/",history:(0,l.PO)(),routes:g});(0,a.ri)(s).use(P).use(y).mount("#app")}},n={};function t(a){var o=n[a];if(void 0!==o)return o.exports;var d=n[a]={id:a,loaded:!1,exports:{}};return e[a].call(d.exports,d,d.exports,t),d.loaded=!0,d.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(n,a,o,d){if(!a){var i=1/0;for(l=0;l<e.length;l++){a=e[l][0],o=e[l][1],d=e[l][2];for(var r=!0,c=0;c<a.length;c++)(!1&d||i>=d)&&Object.keys(t.O).every((function(e){return t.O[e](a[c])}))?a.splice(c--,1):(r=!1,d<i&&(i=d));if(r){e.splice(l--,1);var s=o();void 0!==s&&(n=s)}}return n}d=d||0;for(var l=e.length;l>0&&e[l-1][2]>d;l--)e[l]=e[l-1];e[l]=[a,o,d]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,a){return t.f[a](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{10:"ba161724",75:"e7cec501",245:"38379ae1",259:"e1a659d2",284:"b2eca94b",323:"948adbce",350:"566075e4",404:"fcc56cda",466:"482c85bc",491:"44020a52",516:"6c585d37",566:"867a87e8",588:"cd8b3ecf",609:"fd31d027",694:"5415de4e",736:"7ade982f",751:"6d5ba4c0",807:"b6d56f71",819:"460d77cd",876:"25c73ea2",974:"2913b2d5",1006:"b385aea6",1027:"e9e35b7d",1170:"338471ec",1179:"04f9f69e",1260:"9fda8787",1421:"307fdfba",1494:"583a613e",1784:"ac560fb4",1902:"3eea0ea4",1965:"990121a1",2102:"34903a4b",2105:"d6b56cd1",2123:"410c26b5",2151:"c17f0664",2156:"6b69a6aa",2157:"cad9cf78",2162:"ce6c030d",2204:"eae3108e",2253:"c85be7d2",2297:"b91ff7d9",2479:"095f8948",2492:"5dc5c3fd",2499:"dc63bf14",2542:"ac36ca97",2564:"74ac9dba",2706:"692e90ad",2783:"50e1560d",2935:"65229761",2950:"c99ecda4",2992:"1c02449a",3019:"d89e3f79",3023:"2d1aaefa",3042:"7695373b",3155:"cfbf1280",3243:"e85da5c5",3281:"879a3ac0",3297:"c58e5fa7",3394:"119e9950",3506:"8f564384",3626:"f5fa63ab",3644:"fbf8f418",3795:"2563e10b",3816:"e92ab73f",3954:"da5e1d42",4110:"21c98fc4",4112:"cedf8583",4158:"faf6361a",4192:"420cf0d9",4212:"b0c204e5",4306:"a18deb5e",4321:"b831bf1f",4577:"bb1cf9e4",4716:"ac2230cd",5037:"07687468",5042:"43ec48b1",5074:"725194b9",5106:"ade87145",5204:"4351cfbc",5220:"ff35e338",5260:"ee45b099",5274:"7aab0f1a",5336:"9fd1de94",5380:"2ea048ff",5429:"c6c2a15e",5488:"e2677661",5518:"36dec76e",5537:"d594f5e5",5670:"58e43fb7",5748:"36c18ceb",5948:"131d1f5d",6015:"5450fc51",6073:"8f08644b",6207:"eac03937",6231:"e0060a29",6239:"fc55ad0e",6359:"2583aae4",6367:"8cf6881e",6503:"38841656",6584:"9ad82c27",6664:"d5cda6be",6764:"5f80b873",6812:"91177813",6820:"7c6a0d0b",6894:"9620894a",6935:"d0cd5379",6986:"7b09039d",7024:"0ed954bf",7120:"060795e3",7200:"bd435670",7216:"477e0e2d",7354:"c4e54896",7449:"fcc3524e",7500:"3d7e93ac",7539:"cca7fd49",7540:"2a217878",7562:"6eebfa3e",7658:"2da95371",7673:"f2641410",7688:"ae1ac5b1",7801:"39e3493f",7878:"03cf93fe",8004:"a7c408ba",8055:"27353012",8124:"83e70f17",8153:"a7b13db5",8162:"ce5b07aa",8269:"0126d696",8330:"d21ee7d4",8475:"87046de5",8531:"9c4a350e",8551:"c6448da4",8648:"b0787079",8781:"bf21da2c",8811:"febb915b",8842:"29a721ec",9045:"96615eaa",9049:"965c3712",9085:"cebf053d",9092:"fbaf9b02",9122:"fe634954",9153:"a3a6ef60",9193:"e65ce8dc",9206:"80108e45",9208:"4a1424e9",9330:"3b09d942",9369:"6472763a",9583:"8ab497c7",9600:"1a324431",9710:"755bd97a",9957:"80c6346f",9966:"a055410f"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{75:"d9e10cd5",259:"d9e10cd5",323:"d9e10cd5",350:"d9e10cd5",466:"d9e10cd5",694:"d9e10cd5",751:"d9e10cd5",819:"d9e10cd5",876:"d9e10cd5",1027:"d2ace9f7",1421:"d9e10cd5",1784:"d9e10cd5",1965:"d9e10cd5",2162:"d9e10cd5",2204:"d9e10cd5",2297:"d9e10cd5",2479:"d9e10cd5",2492:"d9e10cd5",2950:"d91b917c",2992:"d9e10cd5",3019:"d9e10cd5",3023:"d9e10cd5",3795:"d9e10cd5",3954:"d9e10cd5",4110:"d9e10cd5",4112:"d9e10cd5",4192:"d9e10cd5",4716:"d9e10cd5",5074:"f9f15893",5336:"d9e10cd5",5488:"e5847cae",5948:"b70a80a7",6073:"d9e10cd5",6231:"d9e10cd5",6503:"d9e10cd5",6986:"d9e10cd5",7024:"d9e10cd5",7500:"d9e10cd5",7539:"d9e10cd5",8004:"d9e10cd5",8055:"d9e10cd5",8153:"d9e10cd5",8269:"d9e10cd5",8475:"d9e10cd5",8551:"d9e10cd5",8781:"d9e10cd5",8811:"d9e10cd5",9049:"d9e10cd5",9193:"d9e10cd5",9206:"d9e10cd5",9583:"d9e10cd5",9710:"d9e10cd5"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="ServerWand:";t.l=function(a,o,d,i){if(e[a])e[a].push(o);else{var r,c;if(void 0!==d)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var m=s[l];if(m.getAttribute("src")==a||m.getAttribute("data-webpack")==n+d){r=m;break}}r||(c=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,t.nc&&r.setAttribute("nonce",t.nc),r.setAttribute("data-webpack",n+d),r.src=a),e[a]=[o];var p=function(n,t){r.onerror=r.onload=null,clearTimeout(h);var o=e[a];if(delete e[a],r.parentNode&&r.parentNode.removeChild(r),o&&o.forEach((function(e){return e(t)})),n)return n(t)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=p.bind(null,r.onerror),r.onload=p.bind(null,r.onload),c&&document.head.appendChild(r)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){t.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,a,o){var d=document.createElement("link");d.rel="stylesheet",d.type="text/css";var i=function(t){if(d.onerror=d.onload=null,"load"===t.type)a();else{var i=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=r,d.parentNode&&d.parentNode.removeChild(d),o(c)}};return d.onerror=d.onload=i,d.href=n,t?t.parentNode.insertBefore(d,t.nextSibling):document.head.appendChild(d),d},n=function(e,n){for(var t=document.getElementsByTagName("link"),a=0;a<t.length;a++){var o=t[a],d=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(d===e||d===n))return o}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){o=i[a],d=o.getAttribute("data-href");if(d===e||d===n)return o}},a=function(a){return new Promise((function(o,d){var i=t.miniCssF(a),r=t.p+i;if(n(i,r))return o();e(a,r,null,o,d)}))},o={2143:0};t.f.miniCss=function(e,n){var t={75:1,259:1,323:1,350:1,466:1,694:1,751:1,819:1,876:1,1027:1,1421:1,1784:1,1965:1,2162:1,2204:1,2297:1,2479:1,2492:1,2950:1,2992:1,3019:1,3023:1,3795:1,3954:1,4110:1,4112:1,4192:1,4716:1,5074:1,5336:1,5488:1,5948:1,6073:1,6231:1,6503:1,6986:1,7024:1,7500:1,7539:1,8004:1,8055:1,8153:1,8269:1,8475:1,8551:1,8781:1,8811:1,9049:1,9193:1,9206:1,9583:1,9710:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=a(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={2143:0};t.f.j=function(n,a){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)a.push(o[2]);else{var d=new Promise((function(t,a){o=e[n]=[t,a]}));a.push(o[2]=d);var i=t.p+t.u(n),r=new Error,c=function(a){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var d=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;r.message="Loading chunk "+n+" failed.\n("+d+": "+i+")",r.name="ChunkLoadError",r.type=d,r.request=i,o[1](r)}};t.l(i,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,a){var o,d,i=a[0],r=a[1],c=a[2],s=0;if(i.some((function(n){return 0!==e[n]}))){for(o in r)t.o(r,o)&&(t.m[o]=r[o]);if(c)var l=c(t)}for(n&&n(a);s<i.length;s++)d=i[s],t.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return t.O(l)},a=self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))}();var a=t.O(void 0,[4998],(function(){return t(58401)}));a=t.O(a)})();
//# sourceMappingURL=app.acdfcc57.js.map