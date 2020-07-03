(function(t){function e(e){for(var r,o,s=e[0],l=e[1],c=e[2],p=0,f=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(f.length)f.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,s=1;s<a.length;s++){var l=a[s];0!==i[l]&&(r=!1)}r&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},i={app:0},n=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("85ec"),i=a.n(r);i.a},"0449":function(t,e,a){"use strict";var r=a("1aba"),i=a.n(r);i.a},"1aba":function(t,e,a){},"2b06":function(t,e,a){"use strict";var r=a("83ba"),i=a.n(r);i.a},"382b":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("router-view")],1)},n=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[r("b-navbar-brand",{attrs:{to:"/"}},[r("img",{attrs:{src:a("9b19")}})]),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-navbar-nav",[r("b-nav-item",{attrs:{to:"/"}},[t._v(" Home ")]),r("b-nav-item",{attrs:{to:"/#/about"}},[t._v(" About ")]),r("b-nav-item",{attrs:{to:"/#/login"}},[t._v(" Login ")])],1),r("b-nav-form",[r("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",placeholder:"Search"}}),r("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",type:"submit"}},[t._v("Search")])],1)],1)],1)],1)],1)},s=[],l=(a("c99b"),a("2877")),c={},u=Object(l["a"])(c,o,s,!1,null,"87be1476",null),p=u.exports,f={components:{Header:p}},v=f,_=(a("034f"),Object(l["a"])(v,i,n,!1,null,null,null)),d=_.exports,h=a("8c4f"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},t._l(t.articles,(function(e){return a("article",[a("div",{staticClass:"item",on:{click:function(a){return t.routerToArticle(e.id)}}},[a("div",{staticClass:"img",style:{"background-image":"url("+e.banner+")"}}),a("div",{staticClass:"info"},[a("h3",[t._v(t._s(e.title))]),a("i",[t._v(t._s(e.date))]),a("span",[t._v(t._s(t._f("subContent")(e.content)))])])])])})),0)},b=[],w=a("7338"),k=a.n(w),g={name:"Home",mounted:function(){var t=this,e="https://us-central1-expressapi-8c039.cloudfunctions.net/app/article";k.a.get(e).then((function(e){t.articles=e.data.data}))},data:function(){return{articles:null}},methods:{routerToArticle:function(t){this.$router.push({name:"Article",params:{id:t}})}},filters:{subContent:function(t){return t.substring(0,150)}}},A=g,y=(a("a2e5"),Object(l["a"])(A,m,b,!1,null,"1fe181e2",null)),S=y.exports,C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("h1",[t._v("About Apple")]),r("div",{staticClass:"info"},[r("p",[r("b",[t._v("Apple Inc.")]),t._v(" is an American "),r("a",{attrs:{href:"/wiki/Multinational_corporation",title:"Multinational corporation"}},[t._v("multinational")]),t._v(" "),r("a",{attrs:{href:"/wiki/Technology_company",title:"Technology company"}},[t._v("technology company")]),t._v(" headquartered in "),r("a",{attrs:{href:"/wiki/Cupertino,_California",title:"Cupertino, California"}},[t._v("Cupertino, California")]),t._v(", that designs, develops, and sells "),r("a",{attrs:{href:"/wiki/Consumer_electronics",title:"Consumer electronics"}},[t._v("consumer electronics")]),t._v(", "),r("a",{attrs:{href:"/wiki/Software",title:"Software"}},[t._v("computer software")]),t._v(", and "),r("a",{staticClass:"mw-redirect",attrs:{href:"/wiki/Online_services",title:"Online services"}},[t._v("online services")]),t._v(". It is considered one of the "),r("a",{attrs:{href:"/wiki/Big_Tech",title:"Big Tech"}},[t._v("Big Tech")]),t._v(" technology companies, alongside "),r("a",{attrs:{href:"/wiki/Amazon_(company)",title:"Amazon (company)"}},[t._v("Amazon")]),t._v(", "),r("a",{attrs:{href:"/wiki/Google",title:"Google"}},[t._v("Google")]),t._v(", "),r("a",{attrs:{href:"/wiki/Microsoft",title:"Microsoft"}},[t._v("Microsoft")]),t._v(" and "),r("a",{attrs:{href:"/wiki/Facebook,_Inc.",title:"Facebook, Inc."}},[t._v("Facebook")]),t._v("."),r("sup",{staticClass:"reference",attrs:{id:"cite_ref-6"}},[r("a",{attrs:{href:"#cite_note-6"}},[t._v("[6]")])]),r("sup",{staticClass:"reference",attrs:{id:"cite_ref-7"}},[r("a",{attrs:{href:"#cite_note-7"}},[t._v("[7]")])]),r("sup",{staticClass:"reference",attrs:{id:"cite_ref-8"}},[r("a",{attrs:{href:"#cite_note-8"}},[t._v("[8]")])])]),r("p",[t._v(" The company's "),r("a",{attrs:{href:"/wiki/Computer_hardware",title:"Computer hardware"}},[t._v("hardware")]),t._v(" products include the "),r("a",{attrs:{href:"/wiki/IPhone",title:"IPhone"}},[t._v("iPhone")]),t._v(" smartphone, the "),r("a",{attrs:{href:"/wiki/IPad",title:"IPad"}},[t._v("iPad")]),t._v(" tablet computer, the "),r("a",{attrs:{href:"/wiki/Macintosh",title:"Macintosh"}},[t._v("Mac")]),t._v(" personal computer, the "),r("a",{attrs:{href:"/wiki/IPod",title:"IPod"}},[t._v("iPod")]),t._v(" portable media player, the "),r("a",{attrs:{href:"/wiki/Apple_Watch",title:"Apple Watch"}},[t._v("Apple Watch")]),t._v(" smartwatch, the "),r("a",{attrs:{href:"/wiki/Apple_TV",title:"Apple TV"}},[t._v("Apple TV")]),t._v(" digital media player, the "),r("a",{attrs:{href:"/wiki/AirPods",title:"AirPods"}},[t._v("AirPods")]),t._v(" wireless earbuds and the "),r("a",{attrs:{href:"/wiki/HomePod",title:"HomePod"}},[t._v("HomePod")]),t._v(" smart speaker. Apple's software includes "),r("a",{attrs:{href:"/wiki/MacOS",title:"MacOS"}},[t._v("macOS")]),t._v(", "),r("a",{attrs:{href:"/wiki/IOS",title:"IOS"}},[t._v("iOS")]),t._v(", "),r("a",{attrs:{href:"/wiki/IPadOS",title:"IPadOS"}},[t._v("iPadOS")]),t._v(", "),r("a",{attrs:{href:"/wiki/WatchOS",title:"WatchOS"}},[t._v("watchOS")]),t._v(", and "),r("a",{attrs:{href:"/wiki/TvOS",title:"TvOS"}},[t._v("tvOS")]),t._v(" operating systems, the "),r("a",{attrs:{href:"/wiki/ITunes",title:"ITunes"}},[t._v("iTunes")]),t._v(" media player, the "),r("a",{attrs:{href:"/wiki/Safari_(web_browser)",title:"Safari (web browser)"}},[t._v("Safari")]),t._v(" web browser, the "),r("a",{attrs:{href:"/wiki/Shazam_(application)",title:"Shazam (application)"}},[t._v("Shazam")]),t._v(" music identifier, and the "),r("a",{attrs:{href:"/wiki/ILife",title:"ILife"}},[t._v("iLife")]),t._v(" and "),r("a",{attrs:{href:"/wiki/IWork",title:"IWork"}},[t._v("iWork")]),t._v(" creativity and productivity suites, as well as professional applications like "),r("a",{attrs:{href:"/wiki/Final_Cut_Pro",title:"Final Cut Pro"}},[t._v("Final Cut Pro")]),t._v(", "),r("a",{attrs:{href:"/wiki/Logic_Pro",title:"Logic Pro"}},[t._v("Logic Pro")]),t._v(", and "),r("a",{attrs:{href:"/wiki/Xcode",title:"Xcode"}},[t._v("Xcode")]),t._v(". Its online services include the "),r("a",{attrs:{href:"/wiki/ITunes_Store",title:"ITunes Store"}},[t._v("iTunes Store")]),t._v(", the "),r("a",{attrs:{href:"/wiki/App_Store_(iOS)",title:"App Store (iOS)"}},[t._v("iOS App Store")]),t._v(", "),r("a",{staticClass:"mw-redirect",attrs:{href:"/wiki/Mac_App_Store",title:"Mac App Store"}},[t._v("Mac App Store")]),t._v(", "),r("a",{attrs:{href:"/wiki/Apple_Music",title:"Apple Music"}},[t._v("Apple Music")]),t._v(", "),r("a",{attrs:{href:"/wiki/Apple_TV%2B",title:"Apple TV+"}},[t._v("Apple TV+")]),t._v(", "),r("a",{attrs:{href:"/wiki/IMessage",title:"IMessage"}},[t._v("iMessage")]),t._v(", and "),r("a",{attrs:{href:"/wiki/ICloud",title:"ICloud"}},[t._v("iCloud")]),t._v(". Other services include "),r("a",{attrs:{href:"/wiki/Apple_Store",title:"Apple Store"}},[t._v("Apple Store")]),t._v(", "),r("a",{attrs:{href:"/wiki/Genius_Bar",title:"Genius Bar"}},[t._v("Genius Bar")]),t._v(", "),r("a",{attrs:{href:"/wiki/AppleCare",title:"AppleCare"}},[t._v("AppleCare")]),t._v(", "),r("a",{attrs:{href:"/wiki/Apple_Pay",title:"Apple Pay"}},[t._v("Apple Pay")]),t._v(", "),r("a",{staticClass:"mw-redirect",attrs:{href:"/wiki/Apple_Pay_Cash",title:"Apple Pay Cash"}},[t._v("Apple Pay Cash")]),t._v(", and "),r("a",{attrs:{href:"/wiki/Apple_Card",title:"Apple Card"}},[t._v("Apple Card")]),t._v(". ")]),r("div",{staticClass:"row"},[r("p",{staticClass:"col-md-6"},[r("img",{attrs:{src:a("edeb"),alt:""}})])])])])}],P={},I=Object(l["a"])(P,C,O,!1,null,null,null),T=I.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("h1",[t._v("Login")]),a("b-form",[a("b-form-group",{attrs:{id:"input-group-1",label:"請輸入管理員帳號","label-for":"input-1"}},[a("b-form-input",{attrs:{id:"input-1",type:"text",required:"",placeholder:"Enter account"},model:{value:t.form.account,callback:function(e){t.$set(t.form,"account",e)},expression:"form.account"}})],1),a("b-form-group",{attrs:{id:"input-group-2",label:"請輸入密碼:","label-for":"input-2"}},[a("b-form-input",{attrs:{id:"input-2",type:"password",required:"",placeholder:"Enter password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),a("b-button",{attrs:{type:"submit",variant:"primary"},on:{click:function(e){return e.preventDefault(),t.routerToAdmin(e)}}},[t._v("Login")])],1)],1)},x=[],j={data:function(){return{form:{account:"",password:""}}},methods:{routerToAdmin:function(){this.$router.push({name:"Admin"})}}},$=j,H=(a("2b06"),Object(l["a"])($,M,x,!1,null,"3e991d9c",null)),E=H.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[t.articles.length?a("article",[a("h1",[t._v(t._s(t.filterById.title))]),a("i",[t._v(t._s(t.filterById.date))]),a("span",{domProps:{innerHTML:t._s(t.filterById.content)}})]):t._e()])},L=[],F=(a("4de4"),{mounted:function(){var t=this,e=this.$route.params.id;this.artId=e;var a="https://us-central1-expressapi-8c039.cloudfunctions.net/app/article";k.a.get(a).then((function(e){t.articles=e.data.data}))},data:function(){return{artId:null,articles:[]}},computed:{filterById:function(){var t=this;return this.articles.filter((function(e){return e.id==t.artId}))[0]}}}),G=F,z=(a("fecc"),Object(l["a"])(G,B,L,!1,null,"4eeacf06",null)),W=z.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("router-link",{attrs:{to:"/admin"}},[t._v("admin-home")]),a("router-link",{attrs:{to:"/admin/add"}},[t._v("admin-add")]),a("router-view")],1)},q=[],N={},X=Object(l["a"])(N,V,q,!1,null,null,null),J=X.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-link",{attrs:{to:"/"}},[t._v("Admin-home")])},K=[],Q={},R=Object(l["a"])(Q,D,K,!1,null,null,null),U=R.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"NotFound"},[a("h1",[t._v("404")]),a("h4",[t._v("The Page Is NotFound!")]),a("b-button",{on:{click:t.GoHome}},[t._v("Go Home")])],1)},Z=[],tt={methods:{GoHome:function(){this.$router.push({name:"Home"})}}},et=tt,at=(a("0449"),Object(l["a"])(et,Y,Z,!1,null,"108a1757",null)),rt=at.exports;r["a"].use(h["a"]);var it=[{path:"/",name:"Home",component:S},{path:"/about",name:"About",component:T},{path:"/login",name:"Login",component:E},{path:"/article/:id",name:"Article",component:W},{path:"/admin",name:"Admin",component:J,children:[{path:"/",name:"Admin-Home",component:J},{path:"/add",name:"Admin-Add",component:U}]},{path:"*",name:"NotFound404",component:rt}],nt=new h["a"]({routes:it}),ot=nt,st=a("2f62");r["a"].use(st["a"]);var lt=new st["a"].Store({state:{},mutations:{},actions:{},modules:{}}),ct=a("7e05"),ut=a("aa2f");a("5b3d"),a("7db1");r["a"].use(ct["a"]),r["a"].use(ut["a"]),r["a"].config.productionTip=!1,new r["a"]({router:ot,store:lt,render:function(t){return t(d)}}).$mount("#app")},6775:function(t,e,a){},"78f2":function(t,e,a){},"83ba":function(t,e,a){},"85ec":function(t,e,a){},"9b19":function(t,e,a){t.exports=a.p+"img/logo.c0cc9a05.svg"},a2e5:function(t,e,a){"use strict";var r=a("382b"),i=a.n(r);i.a},c99b:function(t,e,a){"use strict";var r=a("78f2"),i=a.n(r);i.a},edeb:function(t,e,a){t.exports=a.p+"img/about.449689b0.jpeg"},fecc:function(t,e,a){"use strict";var r=a("6775"),i=a.n(r);i.a}});
//# sourceMappingURL=app.60b79496.js.map