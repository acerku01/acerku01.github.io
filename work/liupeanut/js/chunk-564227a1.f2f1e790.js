(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-564227a1"],{4447:function(e,t,i){"use strict";i.r(t);var a=i("7a23"),s=i("7d2c"),c=i.n(s);const r={class:"login pages position-relative overflow-hidden"},o={class:"container position-relative z-index-1 box_"},l={class:"bread-crumbs py-3 px-lg-5"},n={itemscope:"",itemtype:"http://schema.org/breadcrumbList",id:"breadcrumbs"},p={itemprop:"itemListElement",itemscope:"",itemtype:"http://schema.org/ListItem"},d=Object(a["i"])("span",{itemprop:"name"},"首頁",-1),b=Object(a["i"])("meta",{itemprop:"position",content:"1"},null,-1),m={itemprop:"itemListElement",itemscope:"",itemtype:"http://schema.org/ListItem"},g=Object(a["i"])("span",{class:"mx-2"},"/",-1),v=Object(a["i"])("span",{itemprop:"name"},"忘記密碼",-1),h=Object(a["i"])("meta",{itemprop:"position",content:"2"},null,-1),u=Object(a["k"])('<div class="main-box bg-white px-lg-5 px-4 py-lg-5 py-4 mb-4"><div class="row justify-content-center"><div class="col-xl-6 col-lg-8 col-md-9 py-lg-4"><div class="inner_border px-lg-5 px-4 py-3"><div class="px-lg-3"><h3 class="pb-3 mb-3">忘記密碼</h3><div class="info mb-3"> 請輸入您註冊的電子信箱。按下後系統將會發送認證信至您的信箱，請開啟信箱並點擊確認連結修改您的密碼。 </div><div><form class="form-group"><div class="mb-3 position-relative"><input name="Email" id="Email" type="text" required value=""><label alt="Placeholder" placeholder="使用者信箱"></label><div class="icon_"><img src="'+c.a+'" alt=""></div></div><div class="mb-3"><div class="g-recaptcha d-flex justify-content-center" data-sitekey="6LeLxiEjAAAAAE-usht2BcO1jLgelpSTkvicaQ6o" data-callback="verify" data-expired-callback="expired" data-error-callback="error"></div></div><div class="mb-4 text-center"><button class="main_btn_o btn py-2 px-5" href="#"> 送出 </button></div></form></div></div></div></div></div></div>',1);function j(e,t,i,s,c,j){const x=Object(a["Q"])("pagesBanner"),O=Object(a["Q"])("router-link");return Object(a["H"])(),Object(a["h"])(a["a"],null,[Object(a["m"])(x),Object(a["i"])("section",r,[Object(a["i"])("div",o,[Object(a["i"])("div",l,[Object(a["i"])("ol",n,[Object(a["i"])("li",p,[Object(a["m"])(O,{to:"/index",itemprop:"item",title:"劉記花生"},{default:Object(a["bb"])(()=>[d]),_:1}),b]),Object(a["i"])("li",m,[g,Object(a["m"])(O,{to:"/forget",itemprop:"item",title:"忘記密碼"},{default:Object(a["bb"])(()=>[v]),_:1}),h])])]),u])])],64)}var x=i("d037"),O={components:{pagesBanner:x["a"]},methods:{simpleScrollTrigger(){this.gsap.from(".box_",{y:50,opacity:0,duration:1,delay:.5,scrollTrigger:{trigger:".box_",start:"top 90%"}})}},mounted(){this.simpleScrollTrigger()}},f=i("6b0d"),y=i.n(f);const k=y()(O,[["render",j]]);t["default"]=k},"7d2c":function(e,t,i){e.exports=i.p+"img/user_.1ca44bbc.svg"},d037:function(e,t,i){"use strict";var a=i("7a23");const s={class:"banner_page position-relative"},c={class:"container h-100 position-relative z-index-1"},r={class:"row h-100 mx-0 align-items-center"},o={key:0,class:"overflow-hidden px-lg-5"},l={class:"page-title box"};function n(e,t,i,n,p,d){return Object(a["H"])(),Object(a["h"])("section",s,[Object(a["i"])("div",{class:"top_img parallax","data-depth":"0.40",style:Object(a["y"])(`background-image: url(/img/${p.slide.photo})`),ref:"parallax"},null,4),Object(a["i"])("div",c,[Object(a["i"])("div",r,[p.slide?(Object(a["H"])(),Object(a["h"])("div",o,[Object(a["i"])("h2",l,"【 "+Object(a["T"])(p.slide.name)+" 】",1)])):Object(a["g"])("",!0)])])])}var p={data(){return{slide:{}}},methods:{simpleScrollTrigger(){const e=this.$refs.parallax.dataset.depth,t=-this.$refs.parallax.offsetHeight*e;this.gsap.to(".parallax",{y:t,ease:"none",scrollTrigger:{trigger:"body",start:"top",scrub:1}}),this.gsap.from(".box",{y:50,opacity:0,duration:1.5,scrollTrigger:{trigger:".box",start:"top 90%"}})}},mounted(){const e=this,t="/json/pagesBanner.json";this.$http.get(t).then(t=>{e.slide=t.data,e.slide.forEach((function(t){t.type===e.$route.name&&(e.slide=t)})),this.simpleScrollTrigger()})}},d=i("6b0d"),b=i.n(d);const m=b()(p,[["render",n]]);t["a"]=m}}]);
//# sourceMappingURL=chunk-564227a1.f2f1e790.js.map