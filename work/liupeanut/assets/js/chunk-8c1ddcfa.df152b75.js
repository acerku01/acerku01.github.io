(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8c1ddcfa"],{"4ed45":function(t,e,i){"use strict";i("bf99")},"6e22":function(t,e,i){t.exports=i.p+"assets/img/clock.1f5b797d.svg"},bb51:function(t,e,i){"use strict";i.r(e);var s=i("7a23");const c={class:"home overflow-hidden"},a={class:"bread-crumbs"},n={itemscope:"",itemtype:"http://schema.org/breadcrumbList",id:"breadcrumbs"},r={itemprop:"itemListElement",itemscope:"",itemtype:"http://schema.org/ListItem"},l=Object(s["i"])("span",{itemprop:"name"},"首頁",-1),o=Object(s["i"])("meta",{itemprop:"position",content:1},null,-1);function b(t,e,i,b,d,p){const u=Object(s["Q"])("router-link"),g=Object(s["Q"])("SwiperCarouselVue"),j=Object(s["Q"])("indexBg"),O=Object(s["Q"])("indexArt"),m=Object(s["Q"])("indexBg2"),h=Object(s["Q"])("indexPrd");return Object(s["H"])(),Object(s["h"])("div",c,[Object(s["i"])("div",a,[Object(s["i"])("ol",n,[Object(s["i"])("li",r,[Object(s["m"])(u,{to:"/index",itemprop:"item",title:"劉記花生"},{default:Object(s["bb"])(()=>[l]),_:1}),o])])]),Object(s["m"])(g),Object(s["m"])(j),Object(s["m"])(O),Object(s["m"])(m),Object(s["m"])(h)])}const d={class:"banner_out position-relative"},p={class:"banner_box overflow-hidden"},u={class:"banner"},g=["srcset"],j=["src"],O=Object(s["i"])("div",{class:"banner_info d-none d-md-block"},[Object(s["i"])("div",{class:"banner_info_title pt-sm-4 mb-sm-5 mb-4"},"【品牌故事】"),Object(s["i"])("div",{class:"name text-center mb-3"},"吉祥物 / 劉爺爺"),Object(s["i"])("div",null," 宜蘭的「劉記花生」，自1975年創立至今，即以當地盛產的花生製作成酥糖產品聞名，將往日在家中廚房炒花生的幸福時光，原汁原味與大眾分享，純手工專業低溫烘焙，嚴選無添加之頂級食材，製作出屬於傳承與堅持的懷念好滋味。2010年以宜蘭三星蔥為名，首創「三星蔥花生糖」，充分結合地方特色，採用新鮮食材，濃郁香脆的口感，風靡全台，已成為全國最具代表性的伴手禮之一。 ")],-1);function m(t,e,i,c,a,n){const r=Object(s["Q"])("swiper-slide"),l=Object(s["Q"])("swiper");return Object(s["H"])(),Object(s["h"])("section",d,[Object(s["i"])("div",p,[Object(s["i"])("div",u,[Object(s["m"])(l,{modules:c.modules,"slides-per-view":1,"space-between":30,pagination:{type:"bullets",clickable:!0,renderBullet:c.renderBullet},autoplay:{delay:5e3,disableOnInteraction:!1},observer:!0,observeParents:!0,speed:1500,class:"default-slider"},{default:Object(s["bb"])(()=>[(Object(s["H"])(!0),Object(s["h"])(s["a"],null,Object(s["O"])(a.slide,t=>(Object(s["H"])(),Object(s["f"])(r,{key:t},{default:Object(s["bb"])(()=>[Object(s["i"])("picture",null,[Object(s["i"])("source",{srcset:"/img/"+t.photo_small,media:"(max-width: 991px)"},null,8,g),Object(s["i"])("img",{src:"/img/"+t.photo_big,alt:"",class:"w-100"},null,8,j)])]),_:2},1024))),128))]),_:1},8,["modules","pagination"])]),O])])}var h=i("4da1"),v=i("d15c"),f=i("f754"),x=(i("41fa"),{components:{Swiper:v["a"],SwiperSlide:f["a"]},data(){return{slide:[]}},mounted(){const t=this,e="/json/banner.json";this.$http.get(e).then(e=>{t.slide=e.data})},setup(){const t=(t,e)=>'<div class="'+e+'"><span>0'+(t+1)+"</span><span></span></div>";return{renderBullet:t,modules:[h["b"],h["a"]]}}}),y=i("6b0d"),_=i.n(y);const w=_()(x,[["render",m]]);var k=w;const A=t=>(Object(s["K"])("data-v-46b7daea"),t=t(),Object(s["I"])(),t),H={class:"index_bg position-relative mt-lg-5 mt-4 parallax_box"},Q=A(()=>Object(s["i"])("div",{class:"logo_vertical"},[Object(s["i"])("img",{src:"/img/logo_vertical.svg",alt:"",class:"svg"})],-1));function T(t,e,i,c,a,n){return Object(s["H"])(),Object(s["h"])("section",H,[Object(s["i"])("div",{class:"layer parallax","data-depth":"0.20",style:Object(s["y"])({backgroundImage:"url(/img/index_bgimg.jpg)"})},null,4),Q])}var I={mounted(){this.scrollAnimation()},methods:{scrollAnimation(){const t=this.gsap.timeline({scrollTrigger:{trigger:"body",start:"10% 10%",end:"70% 50%",scrub:1}});this.gsap.utils.toArray(".parallax").forEach(e=>{const i=e.dataset.depth,s=-e.offsetHeight*i;t.to(e,{y:s,ease:"none"},0)}),this.gsap.timeline({scrollTrigger:{trigger:".index_bg",start:"40% 90%",end:"50% 60%",scrub:1}}).from(".logo_vertical",{duration:2,y:200,opacity:0,stagger:.3})}}};i("4ed45");const B=_()(I,[["render",T],["__scopeId","data-v-46b7daea"]]);var P=B,C=i("6e22"),E=i.n(C);const S={class:"index_news position-relative pt-5 overflow-hidden"},L={class:"container pb-5 position-relative z-index-1"},$={class:"px-lg-5"},D=Object(s["i"])("h2",{class:"text-center"},[Object(s["i"])("span",null,"最新消息")],-1),J={class:"row news-list mx-n2"},V={class:"inner bg-white p-4"},z={class:"img mb-3"},K=["src","alt"],q={class:"title mb-2"},F={class:"info mb-2"},G=Object(s["i"])("span",null,"閱讀更多",-1),M={class:"date"},N=Object(s["i"])("img",{src:E.a,alt:"",class:"me-2"},null,-1),R={class:"text-center pt-3 pt-lg-0"};function U(t,e,i,c,a,n){const r=Object(s["Q"])("router-link");return Object(s["H"])(),Object(s["h"])("section",S,[Object(s["i"])("div",L,[Object(s["i"])("div",$,[D,Object(s["i"])("div",J,[(Object(s["H"])(!0),Object(s["h"])(s["a"],null,Object(s["O"])(a.articles,e=>(Object(s["H"])(),Object(s["h"])("div",{class:"col-lg-4 col-sm-6 mb-lg-5 mb-4 px-2 item",key:e},[Object(s["m"])(r,{to:"news/"+e.id},{default:Object(s["bb"])(()=>[Object(s["i"])("div",V,[Object(s["i"])("div",z,[Object(s["i"])("img",{src:e.image,alt:e.title,class:"w-100"},null,8,K)]),Object(s["i"])("div",q,Object(s["T"])(e.title),1),Object(s["i"])("div",F,[Object(s["l"])(Object(s["T"])(e.description)+"... ",1),G]),Object(s["i"])("div",M,[N,Object(s["l"])(Object(s["T"])(t.$filters.date(e.create_at)),1)])])]),_:2},1032,["to"])]))),128))]),Object(s["i"])("div",R,[Object(s["m"])(r,{to:"/news",class:"btn btn-outline-light mx-auto"},{default:Object(s["bb"])(()=>[Object(s["l"])("更多消息")]),_:1})])])])])}var W={data(){return{articles:[]}},mounted(){const t="https://vue3-course-api.hexschool.io/api/hexacervue3/articles";this.$http.get(t).then(t=>{t.data.success&&(this.articles=t.data.articles.slice(0,3))}).then(()=>{this.gsap.from(".item",{scrollTrigger:".news-list",duration:1.15,y:50,opacity:0,stagger:.3})})}};const X=_()(W,[["render",U]]);var Y=X;const Z={class:"index_slogan position-relative parallax_box"},tt=Object(s["i"])("div",{class:"container d-flex align-items-center h-100"},[Object(s["i"])("div",{class:"px-lg-5"},[Object(s["i"])("div",{class:"info overflow-hidden"},[Object(s["i"])("div",null,"嚴選美味．手工烘培"),Object(s["i"])("div",null,"用味覺記憶生命中的幸福時光")])])],-1);function et(t,e,i,c,a,n){return Object(s["H"])(),Object(s["h"])("section",Z,[Object(s["i"])("div",{class:"layer parallax","data-depth":"0.2",style:Object(s["y"])({backgroundImage:"url(/img/index_slogan.jpg)"})},null,4),tt])}var it={mounted(){this.scrollAnimation()},methods:{scrollAnimation(){const t=this.gsap.timeline({scrollTrigger:{trigger:"body",start:"top",scrub:1}});this.gsap.utils.toArray(".parallax").forEach(e=>{const i=e.dataset.depth,s=-e.offsetHeight*i;t.to(e,{y:s,ease:"none"},0)}),this.gsap.timeline({scrollTrigger:{trigger:".index_slogan",start:"top center"}}).from(".index_slogan .info > div",{duration:1,y:50,opacity:0,stagger:.3})}}};const st=_()(it,[["render",et]]);var ct=st;const at={class:"index_prd py-5 bg-white"},nt={class:"container"},rt={class:"px-lg-5"},lt=Object(s["i"])("h2",{class:"text-center mb-4"},[Object(s["i"])("span",null,"商品介紹")],-1),ot={class:"nav nav-pills mb-4 mx-n2 justify-content-center justify-content-lg-start",id:"pills-tab",role:"tablist"},bt=["onClick"],dt={class:"tab-content mb-4",id:"pills-tabContent"},pt={class:"tab-pane fade show active",role:"tabpanel"},ut={class:"text-center pt-3 pt-lg-0"};function gt(t,e,i,c,a,n){const r=Object(s["Q"])("ProductList"),l=Object(s["Q"])("router-link");return Object(s["H"])(),Object(s["h"])("section",at,[Object(s["i"])("div",nt,[Object(s["i"])("div",rt,[lt,Object(s["i"])("ul",ot,[Object(s["i"])("li",{class:"nav-item",role:"presentation",onClick:e[0]||(e[0]=Object(s["eb"])(t=>a.tabActive="",["prevent"]))},[Object(s["i"])("button",{class:Object(s["w"])(["nav-link",{active:""===a.tabActive}]),id:"prd_01-tab","data-toggle":"pill","data-target":"#prd_01",type:"button",role:"tab","aria-controls":"prd_01","aria-selected":"true"}," 全部商品 ",2)]),(Object(s["H"])(!0),Object(s["h"])(s["a"],null,Object(s["O"])(a.classification,t=>(Object(s["H"])(),Object(s["h"])("li",{class:"nav-item",role:"presentation",key:t,onClick:Object(s["eb"])(e=>a.tabActive=t,["prevent"])},[Object(s["i"])("button",{class:Object(s["w"])(["nav-link",{active:a.tabActive===t}]),id:"prd_02-tab","data-toggle":"pill","data-target":"#prd_02",type:"button",role:"tab","aria-controls":"prd_02","aria-selected":"false"},Object(s["T"])(t),3)],8,bt))),128))]),Object(s["i"])("div",dt,[Object(s["i"])("div",pt,[Object(s["m"])(r,{list:n.filterData,page:a.currentPage},null,8,["list","page"]),Object(s["i"])("div",ut,[Object(s["m"])(l,{to:"/products/"+a.tabActive,class:"btn btn-outline-primary mx-auto more"},{default:Object(s["bb"])(()=>[Object(s["l"])(" 更多商品 ")]),_:1},8,["to"])])])])])])])}i("14d9");var jt=i("1c14"),Ot={components:{ProductList:jt["a"]},data(){return{products:[],classification:[],tabActive:"",currentPage:1}},computed:{filterData(){const t=this;if(""===this.tabActive){const t=[];return this.products.forEach((e,i)=>{i%6===0&&t.push([]);const s=parseInt(i/6);t[s].push(e)}),t.slice(0,1)}{var e=[];this.products.forEach((function(i){i.category===t.tabActive&&e.push(i)}));const i=[];return e.forEach((t,e)=>{e%6===0&&i.push([]);const s=parseInt(e/6);i[s].push(t)}),i.slice(0,1)}}},mounted(){const t="https://vue3-course-api.hexschool.io/api/hexacervue3/products/all";this.$http.get(t).then(t=>{if(t.data.success){const e=this;this.products=t.data.products;let i=new Set;i=this.products.filter((function(t){if(!i.has(t.category))return i.add(t.category)})),i.filter((function(t){return e.classification.push(t.category)}))}}).then(()=>{this.gsap.from(".prd-list > div",{scrollTrigger:".prd-list",duration:1.15,y:50,opacity:0,stagger:.3})})}};const mt=_()(Ot,[["render",gt]]);var ht=mt,vt={name:"Home",components:{SwiperCarouselVue:k,indexBg:P,indexArt:Y,indexBg2:ct,indexPrd:ht},mounted(){const t=this.gsap.timeline({});t.from(".banner",{duration:1,x:300,opacity:0,stagger:.3}),t.from(".banner_info",{duration:1,opacity:0,stagger:.3,delay:-.2}),t.from("header .row.wrap",{duration:.8,y:-50,opacity:0,stagger:.3,delay:-.5}),t.from(".index_bg",{duration:1,y:50,opacity:0,stagger:.3,delay:-1});const e=this.gsap.timeline({scrollTrigger:{trigger:".banner_out",start:"top"}});e.to(".banner_info",{duration:1.15,y:-100,opacity:0,stagger:.3})}};const ft=_()(vt,[["render",b]]);e["default"]=ft},bf99:function(t,e,i){}}]);