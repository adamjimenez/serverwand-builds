(function(){"use strict";var e={38590:function(e,n,t){var o=t(53751),a=t(20641);function i(e,n){const t=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.bF)(t)])}var d=t(66262);const r={},c=(0,d.A)(r,[["render",i]]);var s=c,l=(t(54301),t(75220)),m=(t(35524),t(34825)),h=t(34777),p=t(51050),b=t(99429),f=t(60527),u=t(33379);const v={dark:!0,colors:{primary:"#A25C57",secondary:"#4C3148",accent:"#A25C57",error:"#b71c1c"}},P=(0,m.$N)({components:{...b,...f},directives:u,theme:{defaultTheme:"darkTheme",themes:{darkTheme:v}},icons:{defaultSet:"fa",aliases:h.z,sets:{fa:h.fa,mdi:p.r}}}),g=[{path:"/",redirect:"servers",component:()=>Promise.all([t.e(4300),t.e(6518),t.e(9097),t.e(446)]).then(t.bind(t,20446)),children:[{path:"/servers",name:"servers",component:()=>Promise.all([t.e(4300),t.e(6518),t.e(5018),t.e(6284)]).then(t.bind(t,66284))},{path:"/servers/create",name:"servers-create",component:()=>Promise.all([t.e(4300),t.e(6518),t.e(3998),t.e(6260)]).then(t.bind(t,33998))},{path:"/servers/:id(.*)*/edit",name:"server-edit",component:()=>Promise.all([t.e(4300),t.e(6518),t.e(3998),t.e(6260)]).then(t.bind(t,33998))},{path:"/servers/:id(.*)*",name:"server",component:()=>Promise.all([t.e(4300),t.e(6518),t.e(5018),t.e(9226)]).then(t.bind(t,59226)),children:[{path:"/servers/:id(.*)*/summary",component:()=>Promise.all([t.e(4300),t.e(6518),t.e(7274),t.e(1757),t.e(5695)]).then(t.bind(t,95695))},{path:"/servers/:id(.*)*/files",component:()=>Promise.all([t.e(4300),t.e(6518),t.e(7274),t.e(1757),t.e(3445),t.e(5074)]).then(t.bind(t,87399))},{path:"/servers/:id(.*)*/services",component:()=>Promise.all([t.e(4300),t.e(5062)]).then(t.bind(t,45062))},{path:"/servers/:id(.*)*/banned",component:()=>Promise.all([t.e(4300),t.e(6518),t.e(4215)]).then(t.bind(t,4215))},{path:"/servers/:id(.*)*/cronjobs",component:()=>Promise.all([t.e(4300),t.e(3245)]).then(t.bind(t,63245))},{path:"/servers/:id(.*)*/database",component:()=>Promise.all([t.e(4300),t.e(8838)]).then(t.bind(t,68838))},{path:"/servers/:id(.*)*/systemusers",component:()=>Promise.all([t.e(4300),t.e(6769)]).then(t.bind(t,96769))},{path:"/servers/:id(.*)*/firewall",component:()=>Promise.all([t.e(4300),t.e(7315)]).then(t.bind(t,59696))},{path:"/servers/:id(.*)*/mail",component:()=>Promise.all([t.e(4300),t.e(6518),t.e(7274),t.e(731)]).then(t.bind(t,50731))},{path:"/servers/:id(.*)*/backups",component:()=>Promise.all([t.e(4300),t.e(6518),t.e(7274),t.e(1757),t.e(7431)]).then(t.bind(t,47431))},{path:"/servers/:id(.*)*/settings",component:()=>Promise.all([t.e(4300),t.e(6518),t.e(262)]).then(t.bind(t,20262))},{path:"/servers/:id(.*)*/apps",component:()=>Promise.all([t.e(4300),t.e(6518),t.e(5645)]).then(t.bind(t,95645))}]},{path:"/sites",name:"sites",component:()=>Promise.all([t.e(4300),t.e(6518),t.e(7274),t.e(1940)]).then(t.bind(t,21940))},{path:"/sites/create",name:"sites-create",component:()=>Promise.all([t.e(4300),t.e(6518),t.e(3396),t.e(3796)]).then(t.bind(t,36737))},{path:"/sites/:id(.*)*/edit",name:"Site-edit",component:()=>Promise.all([t.e(4300),t.e(6518),t.e(3396),t.e(3796)]).then(t.bind(t,36737))},{path:"/sites/:id(.*)*",name:"site",component:()=>Promise.all([t.e(4300),t.e(7350)]).then(t.bind(t,37350)),children:[{path:"/sites/:id(.*)*/summary",component:()=>Promise.all([t.e(4300),t.e(7274),t.e(9202)]).then(t.bind(t,79202))},{path:"/sites/:id(.*)*/database",component:()=>Promise.all([t.e(4300),t.e(882)]).then(t.bind(t,90882))},{path:"/sites/:id(.*)*/variables",component:()=>Promise.all([t.e(4300),t.e(5452)]).then(t.bind(t,35452))},{path:"/sites/:id(.*)*/aliases",component:()=>Promise.all([t.e(4300),t.e(6518),t.e(5415)]).then(t.bind(t,55415))},{path:"/sites/:id(.*)*/email",component:()=>Promise.all([t.e(4300),t.e(7274),t.e(484)]).then(t.bind(t,90484))},{path:"/sites/:id(.*)*/app",component:()=>Promise.all([t.e(4300),t.e(6518),t.e(3396),t.e(8383)]).then(t.bind(t,18876))},{path:"/sites/:id(.*)*/dns",component:()=>Promise.all([t.e(4300),t.e(6663)]).then(t.bind(t,36663))},{path:"/sites/:id(.*)*/backups",component:()=>Promise.all([t.e(4300),t.e(7274),t.e(3445),t.e(8167)]).then(t.bind(t,66663))},{path:"/sites/:id(.*)*/settings",component:()=>Promise.all([t.e(4300),t.e(6518),t.e(614)]).then(t.bind(t,70614))}]},{path:"/domains",name:"domains",component:()=>Promise.all([t.e(4300),t.e(6518),t.e(8309)]).then(t.bind(t,28309))},{path:"/domains/create",name:"domains-create",component:()=>Promise.all([t.e(4300),t.e(6518),t.e(4848)]).then(t.bind(t,44848))},{path:"/domains/:id(.*)*/edit",name:"Domain-edit",component:()=>Promise.all([t.e(4300),t.e(6518),t.e(4848)]).then(t.bind(t,44848))},{path:"/domains/:id(.*)*",name:"domain",component:()=>Promise.all([t.e(4300),t.e(9373)]).then(t.bind(t,29373)),children:[{path:"/domains/:id(.*)*/summary",component:()=>Promise.all([t.e(4300),t.e(9616)]).then(t.bind(t,99616))},{path:"/domains/:id(.*)*/dns",component:()=>Promise.all([t.e(4300),t.e(6797)]).then(t.bind(t,36797))},{path:"/domains/:id(.*)*/settings",component:()=>Promise.all([t.e(4300),t.e(6518),t.e(3902)]).then(t.bind(t,23902))}]},{path:"/teams",component:()=>Promise.all([t.e(4300),t.e(8415)]).then(t.bind(t,68415))},{path:"/teams/create",component:()=>Promise.all([t.e(4300),t.e(6518),t.e(1614)]).then(t.bind(t,51614))},{path:"/teams/:id/edit",component:()=>Promise.all([t.e(4300),t.e(6518),t.e(1614)]).then(t.bind(t,51614))},{path:"/teams/:id(.*)*",component:()=>Promise.all([t.e(4300),t.e(4262)]).then(t.bind(t,14262)),children:[{path:"/teams/:id(.*)*/members",component:()=>Promise.all([t.e(4300),t.e(6089)]).then(t.bind(t,6089))},{path:"/teams/:id(.*)*/servers",component:()=>Promise.all([t.e(4300),t.e(6518),t.e(9293)]).then(t.bind(t,39293))},{path:"/teams/:id(.*)*/settings",component:()=>Promise.all([t.e(4300),t.e(6518),t.e(7673)]).then(t.bind(t,77673))}]},{path:"/users",name:"users",component:()=>Promise.all([t.e(4300),t.e(6518),t.e(5463)]).then(t.bind(t,75463))},{path:"/users/create",name:"users-create",component:()=>Promise.all([t.e(4300),t.e(6518),t.e(2361)]).then(t.bind(t,42361))},{path:"/users/:id(.*)*/edit",component:()=>Promise.all([t.e(4300),t.e(6518),t.e(2361)]).then(t.bind(t,42361))},{path:"/users/:id(.*)*",component:()=>Promise.all([t.e(4300),t.e(9655)]).then(t.bind(t,39655)),children:[{path:"/users/:id(.*)*/summary",component:()=>Promise.all([t.e(4300),t.e(555)]).then(t.bind(t,40555))},{path:"/users/:id(.*)*/sites",component:()=>Promise.all([t.e(4300),t.e(6518),t.e(5489)]).then(t.bind(t,15489))},{path:"/users/:id(.*)*/domains",component:()=>Promise.all([t.e(4300),t.e(6518),t.e(6784)]).then(t.bind(t,6784))},{path:"/users/:id(.*)*/invoices",component:()=>Promise.all([t.e(4300),t.e(6518),t.e(7274),t.e(3842)]).then(t.bind(t,93842))},{path:"/users/:id(.*)*/subscriptions",component:()=>Promise.all([t.e(4300),t.e(6518),t.e(7274),t.e(7292)]).then(t.bind(t,87292))},{path:"/users/:id(.*)*/notes",component:()=>Promise.all([t.e(4300),t.e(494)]).then(t.bind(t,50494))},{path:"/users/:id(.*)*/settings",component:()=>Promise.all([t.e(4300),t.e(6518),t.e(3655)]).then(t.bind(t,33655))}]},{path:"/settings",component:()=>t.e(101).then(t.bind(t,40101)),children:[{path:"/settings/profile",component:()=>Promise.all([t.e(4300),t.e(6518),t.e(9097),t.e(762)]).then(t.bind(t,30762))},{path:"/settings/api",component:()=>Promise.all([t.e(4300),t.e(9175)]).then(t.bind(t,59175))},{path:"/settings/tokens",component:()=>Promise.all([t.e(4300),t.e(3311)]).then(t.bind(t,53311))},{path:"/settings/products",component:()=>Promise.all([t.e(4300),t.e(4329)]).then(t.bind(t,34329))}]}]},{path:"/auth",component:()=>t.e(8703).then(t.bind(t,28703)),children:[{path:"/auth/login",name:"login",component:()=>Promise.all([t.e(4300),t.e(6518),t.e(5859)]).then(t.bind(t,45859))},{path:"/auth/forgot",name:"forgot",component:()=>Promise.all([t.e(4300),t.e(6518),t.e(2104)]).then(t.bind(t,42104))},{path:"/auth/register",name:"register",component:()=>Promise.all([t.e(4300),t.e(6518),t.e(7799)]).then(t.bind(t,67799))},{path:"/auth/logout",name:"logout",component:()=>Promise.all([t.e(4300),t.e(6518),t.e(8824)]).then(t.bind(t,68824))}]},{path:"/loading",component:()=>t.e(7405).then(t.bind(t,47405))},{path:"/:notFound",component:()=>t.e(3151).then(t.bind(t,83151))}],y=(0,l.aE)({mode:"history",base:"/",history:(0,l.LA)(),routes:g});(0,o.Ef)(s).use(P).use(y).mount("#app")}},n={};function t(o){var a=n[o];if(void 0!==a)return a.exports;var i=n[o]={id:o,loaded:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(n,o,a,i){if(!o){var d=1/0;for(l=0;l<e.length;l++){o=e[l][0],a=e[l][1],i=e[l][2];for(var r=!0,c=0;c<o.length;c++)(!1&i||d>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[c])}))?o.splice(c--,1):(r=!1,i<d&&(d=i));if(r){e.splice(l--,1);var s=a();void 0!==s&&(n=s)}}return n}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[o,a,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{21:"7efd326c",33:"531a8d16",101:"28bb5466",149:"a8e1bd07",193:"fc8a2b98",241:"347c4301",249:"8d0e981b",262:"25ae01c9",446:"2a75e1a5",484:"9e53ba08",494:"84c0dfc9",555:"bf09ea3e",614:"61ca1572",731:"5279a38e",739:"ea35c4bb",757:"a0f2dbbf",762:"5a8dc654",798:"90505348",882:"dd3bb49d",945:"528e5464",961:"ba1ec295",1233:"a5893610",1247:"1f430313",1303:"f1da5022",1614:"29b98981",1757:"e82bda3d",1853:"138704ef",1921:"da1ade1e",1940:"7e77d347",2104:"2e6697d9",2337:"84a9c644",2343:"c8b1297c",2361:"cf255a49",2443:"819b5c40",2499:"b08fb586",2745:"a0a133c7",2753:"db31b557",2923:"5b458812",3075:"5b24b6db",3151:"c790a410",3153:"f1aa26e6",3169:"be72c03b",3221:"41a17e05",3245:"37ee1fc0",3311:"3cb3cfdb",3396:"22b75ac7",3445:"1d637e29",3513:"f4304676",3569:"154eb845",3621:"037fb3f7",3627:"8c757612",3655:"1fea8386",3785:"35cc7185",3796:"6f60100c",3842:"7f874e5f",3902:"72cc8ec3",3998:"1a54208e",4073:"0e74f9cc",4085:"2527de50",4147:"b8f7bb81",4215:"e9f4ad0d",4262:"1ade6d5d",4300:"4afc8ed4",4329:"8f800395",4382:"e4f4bc0c",4417:"d66ec503",4465:"323e7e7d",4584:"a5dc3c1e",4621:"1fb983ff",4625:"d5de0c63",4749:"97425765",4790:"9ab55100",4848:"c397ee32",5018:"cdfc1bfd",5062:"604548ca",5074:"37ac4890",5115:"b3192b44",5121:"bf356c0b",5185:"f00962cc",5223:"714f1c56",5335:"a9da3bf1",5415:"8ffb658d",5452:"ab2cd97e",5463:"a5e07d60",5489:"c8e8b664",5537:"b5f8a42f",5585:"2d265b6c",5645:"6138a275",5695:"5227af1f",5859:"081d69d6",6065:"f1f0522b",6089:"818ea34c",6284:"bf8e756c",6401:"0a61e01c",6518:"35989d61",6593:"5d18803d",6641:"b1490eee",6663:"29ae26e7",6769:"1ac6f8ea",6784:"de69c488",6797:"655b6248",6847:"dc487281",6865:"5cb81933",7041:"3e19be03",7069:"81739505",7073:"40f2917d",7121:"c8f62e41",7233:"b55e87bf",7263:"b9fb1358",7274:"e27c36a5",7292:"920b91a1",7315:"4459a864",7341:"c4d6d768",7350:"cef729a5",7405:"97edadcc",7431:"211b2a14",7505:"09d6e424",7553:"14d9116f",7659:"5b93e248",7673:"c47f2a02",7799:"8348a18e",7977:"6e081c24",8001:"6c89d57f",8008:"a8a0ce60",8073:"3d7936c7",8167:"70d56356",8189:"88f2332c",8309:"f7c7cc7f",8321:"de990e95",8343:"f98e6cef",8373:"cf1aa8dc",8383:"778261a0",8409:"1838c899",8415:"1c1472e0",8417:"773cb494",8703:"1af62083",8824:"db87feec",8838:"c634a766",8875:"c47d4c81",8993:"1776b0ef",9017:"a952680c",9057:"a524759d",9097:"ff8189ea",9175:"b3943bd8",9202:"f3b7083f",9226:"2049a38d",9293:"8d2bb291",9373:"b6f78fd7",9589:"c864ba95",9616:"87875977",9655:"2885ed97",9953:"7ce469d8"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{262:"d9e10cd5",484:"d9e10cd5",494:"d9e10cd5",555:"d9e10cd5",614:"d9e10cd5",731:"f9f15893",882:"d9e10cd5",1614:"d9e10cd5",1757:"bb4db3eb",1940:"d9e10cd5",2361:"d9e10cd5",3245:"d9e10cd5",3311:"d9e10cd5",3655:"d9e10cd5",3796:"d9e10cd5",3842:"d9e10cd5",3902:"d9e10cd5",4215:"7a658720",4262:"d9e10cd5",4329:"d9e10cd5",4848:"d9e10cd5",5074:"d9e10cd5",5415:"d9e10cd5",5463:"d9e10cd5",5489:"d9e10cd5",5645:"d9e10cd5",5695:"930f5969",6089:"d9e10cd5",6260:"d9e10cd5",6284:"d9e10cd5",6663:"d9e10cd5",6769:"d9e10cd5",6784:"d9e10cd5",6797:"d9e10cd5",7292:"d9e10cd5",7315:"d9e10cd5",7350:"b70a80a7",7405:"d9e10cd5",7431:"d9e10cd5",7673:"d9e10cd5",8167:"d9e10cd5",8309:"d9e10cd5",8383:"d9e10cd5",8415:"d9e10cd5",8838:"d9e10cd5",9175:"d9e10cd5",9202:"d9e10cd5",9293:"d9e10cd5",9373:"d91b917c",9616:"d9e10cd5",9655:"d9e10cd5"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="ServerWand:";t.l=function(o,a,i,d){if(e[o])e[o].push(a);else{var r,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var m=s[l];if(m.getAttribute("src")==o||m.getAttribute("data-webpack")==n+i){r=m;break}}r||(c=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,t.nc&&r.setAttribute("nonce",t.nc),r.setAttribute("data-webpack",n+i),r.src=o),e[o]=[a];var h=function(n,t){r.onerror=r.onload=null,clearTimeout(p);var a=e[o];if(delete e[o],r.parentNode&&r.parentNode.removeChild(r),a&&a.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=h.bind(null,r.onerror),r.onload=h.bind(null,r.onload),c&&document.head.appendChild(r)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){t.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,o,a,i){var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",t.nc&&(d.nonce=t.nc);var r=function(t){if(d.onerror=d.onload=null,"load"===t.type)a();else{var o=t&&t.type,r=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+r+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=o,c.request=r,d.parentNode&&d.parentNode.removeChild(d),i(c)}};return d.onerror=d.onload=r,d.href=n,o?o.parentNode.insertBefore(d,o.nextSibling):document.head.appendChild(d),d},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var a=t[o],i=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(i===e||i===n))return a}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){a=d[o],i=a.getAttribute("data-href");if(i===e||i===n)return a}},o=function(o){return new Promise((function(a,i){var d=t.miniCssF(o),r=t.p+d;if(n(d,r))return a();e(o,r,null,a,i)}))},a={3524:0};t.f.miniCss=function(e,n){var t={262:1,484:1,494:1,555:1,614:1,731:1,882:1,1614:1,1757:1,1940:1,2361:1,3245:1,3311:1,3655:1,3796:1,3842:1,3902:1,4215:1,4262:1,4329:1,4848:1,5074:1,5415:1,5463:1,5489:1,5645:1,5695:1,6089:1,6260:1,6284:1,6663:1,6769:1,6784:1,6797:1,7292:1,7315:1,7350:1,7405:1,7431:1,7673:1,8167:1,8309:1,8383:1,8415:1,8838:1,9175:1,9202:1,9293:1,9373:1,9616:1,9655:1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=o(e).then((function(){a[e]=0}),(function(n){throw delete a[e],n})))}}}(),function(){var e={3524:0};t.f.j=function(n,o){var a=t.o(e,n)?e[n]:void 0;if(0!==a)if(a)o.push(a[2]);else if(6260!=n){var i=new Promise((function(t,o){a=e[n]=[t,o]}));o.push(a[2]=i);var d=t.p+t.u(n),r=new Error,c=function(o){if(t.o(e,n)&&(a=e[n],0!==a&&(e[n]=void 0),a)){var i=o&&("load"===o.type?"missing":o.type),d=o&&o.target&&o.target.src;r.message="Loading chunk "+n+" failed.\n("+i+": "+d+")",r.name="ChunkLoadError",r.type=i,r.request=d,a[1](r)}};t.l(d,c,"chunk-"+n,n)}else e[n]=0},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var a,i,d=o[0],r=o[1],c=o[2],s=0;if(d.some((function(n){return 0!==e[n]}))){for(a in r)t.o(r,a)&&(t.m[a]=r[a]);if(c)var l=c(t)}for(n&&n(o);s<d.length;s++)i=d[s],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(l)},o=self["webpackChunkServerWand"]=self["webpackChunkServerWand"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[504],(function(){return t(38590)}));o=t.O(o)})();
//# sourceMappingURL=app.75c2cbeb.js.map