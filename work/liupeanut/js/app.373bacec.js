(function(e){function t(t){for(var c,a,r=t[0],i=t[1],l=t[2],d=0,u=[];d<r.length;d++)a=r[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&u.push(o[a][0]),o[a]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);b&&b(t);while(u.length)u.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],c=!0,a=1;a<n.length;a++){var r=n[a];0!==o[r]&&(c=!1)}c&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var c={},a={app:0},o={app:0},s=[];function r(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0583f95d":"d220bc17","chunk-1f55858c":"03275769","chunk-2d0ab565":"df290c08","chunk-2d0b37ce":"0c67f7b9","chunk-2d2261a6":"ac7d2921","chunk-2d22c48a":"bdf31e61","chunk-1fce6f64":"cbf642e0","chunk-1fd12c32":"1bb6b0b3","chunk-1fd2a00a":"2ea521e4","chunk-2d0d63f1":"e43a9a1e","chunk-2d0e5e97":"744848de","chunk-2d2086b7":"fd2fa4cb","chunk-3cb0f418":"0ae66751","chunk-564227a1":"f2f1e790","chunk-583bf2d8":"5b3f8db2","chunk-59bbc85e":"bfa43fa8","chunk-5f949cc9":"b14e6a46","chunk-74ff2292":"787f9828","chunk-cae79e4a":"56790ebb","chunk-8c1ddcfa":"c4181574","chunk-997522dc":"f0e6a474"}[e]+".js"}function i(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-583bf2d8":1,"chunk-cae79e4a":1,"chunk-8c1ddcfa":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var c="css/"+({}[e]||e)+"."+{"chunk-0583f95d":"31d6cfe0","chunk-1f55858c":"31d6cfe0","chunk-2d0ab565":"31d6cfe0","chunk-2d0b37ce":"31d6cfe0","chunk-2d2261a6":"31d6cfe0","chunk-2d22c48a":"31d6cfe0","chunk-1fce6f64":"31d6cfe0","chunk-1fd12c32":"31d6cfe0","chunk-1fd2a00a":"31d6cfe0","chunk-2d0d63f1":"31d6cfe0","chunk-2d0e5e97":"31d6cfe0","chunk-2d2086b7":"31d6cfe0","chunk-3cb0f418":"31d6cfe0","chunk-564227a1":"31d6cfe0","chunk-583bf2d8":"4915ed73","chunk-59bbc85e":"31d6cfe0","chunk-5f949cc9":"31d6cfe0","chunk-74ff2292":"31d6cfe0","chunk-cae79e4a":"3b439e06","chunk-8c1ddcfa":"aed4ae30","chunk-997522dc":"31d6cfe0"}[e]+".css",o=i.p+c,s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var l=s[r],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===c||d===o))return t()}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){l=u[r],d=l.getAttribute("data-href");if(d===c||d===o)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var c=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=c,delete a[e],b.parentNode.removeChild(b),n(s)},b.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(b)})).then((function(){a[e]=0})));var c=o[e];if(0!==c)if(c)t.push(c[2]);else{var s=new Promise((function(t,n){c=o[e]=[t,n]}));t.push(c[2]=s);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=r(e);var u=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(b);var n=o[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",u.name="ChunkLoadError",u.type=c,u.request=a,n[1](u)}o[e]=void 0}};var b=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=c,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(n,c,function(t){return e[t]}.bind(null,c));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/work/liupeanut/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var b=d;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1b36":function(e,t,n){"use strict";n.r(t);var c=n("e017"),a=n.n(c),o=n("21a1"),s=n.n(o),r=new a.a({id:"icon-less",use:"icon-less-usage",viewBox:"0 0 15 15",content:'<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" id="icon-less">\r\n<style type="text/css">\r\n\t#icon-less .value-button_st0{fill:none;stroke-miterlimit:10;}\r\n</style>\r\n<line class="value-button_st0" x1="0" y1="7.5" x2="15" y2="7.5" />\r\n</symbol>'});s.a.add(r);t["default"]=r},2095:function(e,t,n){"use strict";n("da86")},2349:function(e,t,n){var c={"./add.svg":"76c1","./cart.svg":"5d2e","./less.svg":"1b36"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}a.keys=function(){return Object.keys(c)},a.resolve=o,e.exports=a,a.id="2349"},"3abd":function(e,t,n){"use strict";n("88cd")},"459d":function(e,t,n){"use strict";var c=n("7a23");const a={class:"toast-container position-fixed p-3 end-0"};function o(e,t,n,o,s,r){const i=Object(c["Q"])("Toast");return Object(c["H"])(),Object(c["h"])("div",a,[(Object(c["H"])(!0),Object(c["h"])(c["a"],null,Object(c["O"])(s.messages,(e,t)=>(Object(c["H"])(),Object(c["f"])(i,{key:t,msg:e},null,8,["msg"]))),128))])}n("14d9");const s={class:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true",ref:"toast"},r={class:"toast-header"},i={class:"me-auto"},l=Object(c["i"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1),d={key:0,class:"toast-body"};function u(e,t,n,a,o,u){return Object(c["H"])(),Object(c["h"])("div",s,[Object(c["i"])("div",r,[Object(c["i"])("span",{class:Object(c["w"])(["bg-"+n.msg.style,"p-2 rounded me-2 d-inline-block"])},null,2),Object(c["i"])("strong",i,Object(c["T"])(n.msg.title),1),l]),n.msg.content?(Object(c["H"])(),Object(c["h"])("div",d,Object(c["T"])(n.msg.content),1)):Object(c["g"])("",!0)],512)}var b=n("6ea1"),h=n.n(b),f={name:"Toast",props:["msg"],mounted(){const e=this.$refs.toast,t=new h.a(e,{delay:3e3});t.show()}},p=n("6b0d"),m=n.n(p);const g=m()(f,[["render",u]]);var O=g,j={components:{Toast:O},data(){return{messages:[]}},inject:["emitter"],mounted(){this.emitter.on("push-message",e=>{const{style:t="success",title:n,content:c}=e;this.messages.push({style:t,title:n,content:c})})}};const v=m()(j,[["render",o]]);t["a"]=v},"56d7":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),a=n("cee4"),o=n("130e"),s=n("be33"),r=n("11ca"),i=n("ad3d"),l=n("8a14");n("fe26"),n("efec");const d=["xlink:href","fill"];function u(e,t,n,a,o,s){return Object(c["H"])(),Object(c["h"])("svg",Object(c["u"])({class:a.svgClass},e.$attrs),[Object(c["i"])("use",{"xlink:href":a.iconName,fill:n.color},null,8,d)],16)}var b=n("5c40"),h={props:{name:{type:String,required:!0},color:{type:String,default:""}},setup(e){const t=Object(b["f"])(()=>"#icon-"+e.name),n=Object(b["f"])(()=>e.name?"svg-icon icon-"+e.name:"svg-icon");return{iconName:t,svgClass:n}}},f=(n("3abd"),n("6b0d")),p=n.n(f);const m=p()(h,[["render",u]]);var g=m,O=n("cffa"),j=n("1dac");function v(e,t){const n=Object(c["Q"])("router-view");return Object(c["H"])(),Object(c["f"])(n)}n("2095");const k={},w=p()(k,[["render",v]]);var y=w,x=n("6605");const T={class:"user"};function C(e,t,n,a,o,s){const r=Object(c["Q"])("ToastMessage"),i=Object(c["Q"])("Header"),l=Object(c["Q"])("router-view"),d=Object(c["Q"])("Footer");return Object(c["H"])(),Object(c["h"])("div",T,[Object(c["m"])(r),Object(c["m"])(i),Object(c["m"])(l),Object(c["m"])(d)])}var P=n("71c2"),_=n("fd2d"),S=n("cfb9"),H=n("459d"),N={name:"Home",components:{Header:P["a"],Footer:_["a"],ToastMessage:H["a"]},provide(){return{emitter:S["a"]}}};const E=p()(N,[["render",C]]);var L=E;const D=[{path:"/",component:L,children:[{name:"index",path:"index",component:()=>Promise.all([n.e("chunk-cae79e4a"),n.e("chunk-8c1ddcfa")]).then(n.bind(null,"bb51"))},{name:"Prd",path:"products/:categoryName?",component:()=>n.e("chunk-0583f95d").then(n.bind(null,"3e2b"))},{name:"PrdDetail",path:"product/:productId",component:()=>Promise.all([n.e("chunk-cae79e4a"),n.e("chunk-997522dc")]).then(n.bind(null,"c98b"))},{name:"News",path:"news",component:()=>n.e("chunk-74ff2292").then(n.bind(null,"06fc"))},{name:"NewsDetail",path:"news/:newsId",component:()=>n.e("chunk-3cb0f418").then(n.bind(null,"56ef5"))},{name:"Login",path:"login",component:()=>n.e("chunk-59bbc85e").then(n.bind(null,"43f8"))},{name:"Register",path:"register",component:()=>n.e("chunk-5f949cc9").then(n.bind(null,"5d67"))},{name:"Forget",path:"forget",component:()=>n.e("chunk-564227a1").then(n.bind(null,"4447"))},{name:"About",path:"about",component:()=>n.e("chunk-1fd2a00a").then(n.bind(null,"0d5c"))},{name:"Notice",path:"notice",component:()=>n.e("chunk-1fce6f64").then(n.bind(null,"691c"))},{name:"Cart",path:"cart",component:()=>n.e("chunk-583bf2d8").then(n.bind(null,"76db"))},{name:"Completed",path:"completed/:orderId",component:()=>n.e("chunk-1fd12c32").then(n.bind(null,"37f0"))}]},{path:"/login_",component:()=>n.e("chunk-2d2086b7").then(n.bind(null,"a55b"))},{path:"/dashboard",component:()=>n.e("chunk-2d0d63f1").then(n.bind(null,"7277")),children:[{path:"products",component:()=>Promise.all([n.e("chunk-1f55858c"),n.e("chunk-2d2261a6")]).then(n.bind(null,"e6dc"))},{path:"orders",component:()=>Promise.all([n.e("chunk-1f55858c"),n.e("chunk-2d0ab565")]).then(n.bind(null,"159d"))},{path:"coupons",component:()=>Promise.all([n.e("chunk-1f55858c"),n.e("chunk-2d22c48a")]).then(n.bind(null,"f329"))},{path:"articles",component:()=>Promise.all([n.e("chunk-1f55858c"),n.e("chunk-2d0b37ce")]).then(n.bind(null,"291b"))}]},{path:"/:pathMatch(.*)*",component:()=>n.e("chunk-2d0e5e97").then(n.bind(null,"9703"))}],M=Object(x["a"])({history:Object(x["b"])(),linkActiveClass:"active",routes:D,scrollBehavior(e,t,n){return new Promise((t,n)=>{"Prd"!==e.name&&setTimeout(()=>{t({left:0,top:0,behavior:"smooth"})},0)})}});var $=M;function A(e){const t=parseInt(e,10);return""+t.toFixed(0).replace(/./g,(e,t,n)=>t&&"."!==e&&(n.length-t)%3===0?(", "+e).replace(/\s/g,""):e)}function B(e){const t=new Date(1e3*e);return t.toLocaleDateString()}var F=function(e,t="更新"){if(e.data.success)S["a"].emit("push-message",{style:"success",title:t+"成功"});else{const n="string"===typeof e.data.message?[e.data.message]:e.data.message;S["a"].emit("push-message",{style:"danger",title:t+"失敗",content:n.join("、")})}};O["a"].registerPlugin(j["a"]),s["c"].add(r["a"]);const Q=Object(c["e"])(y);Q.config.globalProperties.$filters={currency:A,date:B},Q.config.globalProperties.$httpMessage=F,Q.use(o["a"],a["a"]),Q.use($),Q.component("svg-icon",g),Q.component("font-awesome-icon",i["a"]),Q.component("Loading",l["a"]),Q.mixin({created(){this.gsap=O["a"],this.ScrollTrigger=j["a"]}}),Q.mount("#app")},"5d2e":function(e,t,n){"use strict";n.r(t);var c=n("e017"),a=n.n(c),o=n("21a1"),s=n.n(o),r=new a.a({id:"icon-cart",use:"icon-cart-usage",viewBox:"0 0 512 512",content:'<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" id="icon-cart">\r\n<style type="text/css">\r\n\t#icon-cart .st0{fill:#EC6500;}\r\n</style>\r\n<g>\r\n\t<circle class="st0" cx="426.7" cy="469.3" r="42.7" />\r\n\t<path class="st0" d="M184.7,330.3c1.5-6.1,7-10.3,13.3-10.3h228.7c9.2,0,17.3-5.9,20.2-14.6l56.9-170.7\r\n\t\tc4.6-13.8-5.7-28.1-20.2-28.1H139.8c-6.4,0-12-4.1-14-10.1l-20.2-60.6c-2.9-8.7-11.1-14.6-20.2-14.6h-64C9.6,21.3,0,30.9,0,42.7\r\n\t\tC0,54.4,9.6,64,21.3,64h38c6.4,0,12,4.1,14,10.1l70.3,211c3.1,9.4,3.5,19.5,1.1,29l-5.8,23.2c-8.5,34,18,67.9,53,67.9h256\r\n\t\tc11.8,0,21.3-9.6,21.3-21.3s-9.6-21.3-21.3-21.3H192c-8.3,0-13.6-6.8-11.6-14.9L184.7,330.3z M242,221.4c3.2-3.8,8.9-4.3,12.7-1\r\n\t\tl49.7,42.1V148.9c0-5,4-9,9-9s9,4,9,9v113.6l49.7-42.1c3.8-3.2,9.5-2.7,12.7,1c3.2,3.8,2.7,9.5-1,12.7l-64.5,54.6\r\n\t\tc-0.3,0.2-0.5,0.4-0.8,0.6c-0.1,0-0.1,0.1-0.2,0.1c-0.3,0.2-0.7,0.4-1,0.6c0,0,0,0,0,0c0,0,0,0-0.1,0c-0.3,0.1-0.5,0.2-0.8,0.3\r\n\t\tc-0.1,0-0.2,0.1-0.3,0.1c-0.2,0.1-0.4,0.1-0.6,0.2c-0.1,0-0.2,0-0.3,0.1c-0.2,0-0.4,0.1-0.6,0.1c-0.1,0-0.2,0-0.3,0\r\n\t\tc-0.3,0-0.6,0-0.9,0c0,0,0,0,0,0c0,0,0,0,0,0s0,0,0,0c0,0,0,0,0,0c-0.3,0-0.6,0-0.9,0c-0.1,0-0.2,0-0.3,0c-0.2,0-0.4-0.1-0.6-0.1\r\n\t\tc-0.1,0-0.2,0-0.3-0.1c-0.2,0-0.4-0.1-0.6-0.2c-0.1,0-0.2-0.1-0.3-0.1c-0.3-0.1-0.5-0.2-0.8-0.3c0,0,0,0-0.1,0c0,0,0,0,0,0\r\n\t\tc-0.3-0.2-0.7-0.4-1-0.6c-0.1,0-0.1-0.1-0.2-0.1c-0.3-0.2-0.6-0.4-0.8-0.6l-64.5-54.6C239.3,230.9,238.8,225.2,242,221.4z" />\r\n\t\r\n\t\t<ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -281.8817 258.1441)" class="st0" cx="170.7" cy="469.3" rx="42.7" ry="42.7" />\r\n</g>\r\n</symbol>'});s.a.add(r);t["default"]=r},"71c2":function(e,t,n){"use strict";var c=n("7a23"),a=n("9b19"),o=n.n(a);const s={ref:"header"},r={class:"row wrap align-items-center"},i={class:"col"},l=Object(c["i"])("img",{src:"./img/user.svg",alt:"",class:"me-2"},null,-1),d={class:"mobile-sub wsmenu-list",itemscope:"",itemtype:"http://www.schema.org/SiteNavigationElement"},u=["onClick"],b=Object(c["i"])("i",{class:"wsmenu-arrow fa fa-angle-down d-inline-flex d-xl-none"},null,-1),h=[b],f=["href"],p={class:"col-auto logo_out"},m=Object(c["i"])("img",{class:"svg",src:o.a,alt:""},null,-1),g=Object(c["i"])("span",null,null,-1),O=[g],j={class:"col d-flex justify-content-end align-items-center position-relative"},v={class:"dropdown cart_box pe-3 pe-xl-0"},k={id:"cart",ref:"dropdown","data-bs-toggle":"dropdown","data-bs-auto-close":"outside","aria-expanded":"false"},w={id:"cartInfo-wrap",class:"dropdown-menu dropdown-menu-right","aria-labelledby":"dropdownMenuClickableInside"},y={class:"wrapper"},x={class:"cartList"},T={class:"img"},C=["src"],P={class:"quantity"},_={class:"price"},S={class:"total"},H={key:1,class:"text-center"},N=Object(c["i"])("h6",{class:"my-4"},"購物車無商品!",-1);function E(e,t,n,a,o,b){const g=Object(c["Q"])("router-link"),E=Object(c["Q"])("svg-icon");return Object(c["H"])(),Object(c["h"])("header",s,[Object(c["i"])("div",{class:Object(c["w"])(["wsmenucontent overlapblackbg",{menuopen:o.menuState,menuclose:!o.menuState}]),onClick:t[0]||(t[0]=Object(c["eb"])(e=>o.menuState=!o.menuState,["prevent"]))},null,2),Object(c["i"])("div",r,[Object(c["i"])("div",i,[Object(c["i"])("nav",{class:Object(c["w"])(["wsmenu slideLeft",{menuopen:o.menuState,menuclose:!o.menuState}])},[Object(c["m"])(g,{to:"/login",class:"login_btn d-flex d-xl-none"},{default:Object(c["bb"])(()=>[l,Object(c["l"])(" 會員登入 ")]),_:1}),Object(c["i"])("ul",d,[(Object(c["H"])(!0),Object(c["h"])(c["a"],null,Object(c["O"])(o.items,e=>(Object(c["H"])(),Object(c["h"])("li",{class:Object(c["w"])({active:e.isOpen}),key:e},[e.child?(Object(c["H"])(),Object(c["h"])("span",{key:0,class:"wsmenu-click",onClick:Object(c["eb"])(t=>e.isOpen=!e.isOpen,["prevent"])},h,8,u)):Object(c["g"])("",!0),e.otherLink?(Object(c["H"])(),Object(c["h"])("a",{key:2,href:e.href,class:"nav-link",target:"_blank"},Object(c["T"])(e.title)+" ",9,f)):(Object(c["H"])(),Object(c["f"])(g,{key:1,class:"nav-link",to:e.href},{default:Object(c["bb"])(()=>[Object(c["l"])(Object(c["T"])(e.title)+" ",1)]),_:2},1032,["to"]))],2))),128))])],2)]),Object(c["i"])("div",p,[Object(c["i"])("div",null,[Object(c["m"])(g,{to:"/index",class:"logo"},{default:Object(c["bb"])(()=>[m]),_:1})]),Object(c["i"])("a",{id:"navToggle",class:Object(c["w"])(["animated-arrow slideLeft d-xl-none",{menuopen:o.menuState,menuclose:!o.menuState}]),onClick:t[1]||(t[1]=Object(c["eb"])(e=>o.menuState=!o.menuState,["prevent"]))},O,2)]),Object(c["i"])("div",j,[Object(c["m"])(g,{to:"/login",class:"header_a d-none d-xl-inline-block me-4 position-relative"},{default:Object(c["bb"])(()=>[Object(c["l"])(" 會員登入 ")]),_:1}),Object(c["i"])("div",v,[Object(c["i"])("div",k,[Object(c["i"])("span",null,Object(c["T"])(o.cartNum),1),Object(c["m"])(E,{name:"cart"})],512),Object(c["i"])("div",w,[Object(c["i"])("div",y,[0!=o.cartNum?(Object(c["H"])(),Object(c["h"])(c["a"],{key:0},[Object(c["i"])("div",x,[(Object(c["H"])(!0),Object(c["h"])(c["a"],null,Object(c["O"])(o.cart.carts,e=>(Object(c["H"])(),Object(c["h"])("div",{class:"row_",key:e.id},[Object(c["i"])("div",T,[Object(c["i"])("img",{src:e.product.imageUrl,alt:""},null,8,C),Object(c["i"])("span",null,Object(c["T"])(e.product.title),1)]),Object(c["i"])("div",P,"數量 : "+Object(c["T"])(e.qty),1),Object(c["i"])("div",_,"$ "+Object(c["T"])(e.total),1)]))),128))]),Object(c["i"])("div",S,[Object(c["i"])("span",null,"總計 : $ "+Object(c["T"])(o.cart.final_total),1),Object(c["i"])("a",{class:"btn btn-primary",href:"#",onClick:t[2]||(t[2]=Object(c["eb"])((...e)=>b.goCartPage&&b.goCartPage(...e),["prevent"]))},"結帳")])],64)):(Object(c["H"])(),Object(c["h"])("div",H,[N,Object(c["i"])("a",{href:"#",class:"btn btn-primary",onClick:t[3]||(t[3]=Object(c["eb"])((...e)=>b.goPrd&&b.goPrd(...e),["prevent"]))},"繼續選購")]))])])])])])],512)}n("14d9");var L=n("8147"),D=n.n(L),M={data(){return{menuState:!1,items:[],isActive:!1,dropdown:{},cart:[],cartNum:0}},inject:["emitter"],methods:{getData(){const e="https://vue3-course-api.hexschool.io/api/hexacervue3/cart";this.$http.get(e).then(e=>{if(e.data.success){this.cart=e.data.data;let t=0;this.cart.carts.forEach((function(e){t+=e.qty})),this.cartNum=t}})},goCartPage(){this.dropdown.hide(),this.$router.push("/cart")},goPrd(){this.dropdown.hide(),this.$router.push("/products")}},mounted(){const e=this,t="./json/menu.json";this.$http.get(t).then(t=>{e.items=t.data}),this.dropdown=new D.a(this.$refs.dropdown),this.getData()},watch:{$route(){!0===this.menuState&&(this.menuState=!1)}},created(){this.emitter.on("getData",()=>{this.getData()})}},$=n("6b0d"),A=n.n($);const B=A()(M,[["render",E]]);t["a"]=B},"76c1":function(e,t,n){"use strict";n.r(t);var c=n("e017"),a=n.n(c),o=n("21a1"),s=n.n(o),r=new a.a({id:"icon-add",use:"icon-add-usage",viewBox:"0 0 15 15",content:'<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" id="icon-add">\r\n<style type="text/css">\r\n\t#icon-add .value-button_st0{fill:none;stroke-miterlimit:10;}\r\n</style>\r\n<line class="value-button_st0" x1="0" y1="7.5" x2="15" y2="7.5" />\r\n<line class="value-button_st0" x1="7.5" y1="15" x2="7.5" y2="0" />\r\n</symbol>'});s.a.add(r);t["default"]=r},"88cd":function(e,t,n){},"9b19":function(e,t,n){e.exports=n.p+"img/logo.d3b3a62c.svg"},cfb9:function(e,t,n){"use strict";var c=n("1344");const a=Object(c["a"])();t["a"]=a},da86:function(e,t,n){},efec:function(e,t,n){const c=e=>e.keys().map(e),a=n("2349");c(a)},fd2d:function(e,t,n){"use strict";var c=n("7a23"),a=n("9b19"),o=n.n(a);const s=Object(c["k"])('<footer class="footer text-center py-5"><div class="container"><div class="row align-items-center justify-content-between"><span class="footer_logo mb-3 col-xl col-lg-3 text-lg-start"><div class="ps-lg-5"><img src="'+o.a+'" alt="" class="svg"></div></span><div class="mb-3 col-xl-auto col-lg"><span class="d-block d-lg-inline-block me-lg-4"> 宜蘭縣冬山鄉大進村大進路466號 </span><span class="d-block d-sm-inline-block me-sm-3"> 訂購專線 : (03)961-3676 </span><span class="d-block d-sm-inline-block"> 傳真 : (03)951-2752 </span></div></div><div class="copy-right"> Copyright © 2022 Full Foods Co., Ltd. All right reserved. </div></div></footer>',1),r=Object(c["i"])("span",{class:"topicon"},"TOP",-1),i=[r];function l(e,t,n,a,o,r){return Object(c["H"])(),Object(c["h"])(c["a"],null,[s,Object(c["i"])("div",{class:Object(c["w"])(["goTop iconfont ml-gotop",o.isTop?"goTopAfter":""]),onClick:t[0]||(t[0]=e=>r.goTop())},i,2)],64)}var d={data(){return{scrollNum:0,isTop:!1}},methods:{goTop(){document.documentElement.scrollTop=0}},mounted(){window.addEventListener("scroll",()=>{const e=document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset;this.scrollNum=e,this.isTop=e>=800})}},u=n("6b0d"),b=n.n(u);const h=b()(d,[["render",l]]);t["a"]=h}});
//# sourceMappingURL=app.373bacec.js.map