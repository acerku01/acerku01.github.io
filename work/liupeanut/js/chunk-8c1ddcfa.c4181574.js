(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8c1ddcfa"],{"4ed45":function(t,e,i){"use strict";i("bf99")},"6e22":function(t,e,i){t.exports=i.p+"img/clock.1f5b797d.svg"},bb51:function(t,e,i){"use strict";i.r(e);var c=i("7a23");const s={class:"home overflow-hidden"},a={class:"bread-crumbs"},n={itemscope:"",itemtype:"http://schema.org/breadcrumbList",id:"breadcrumbs"},r={itemprop:"itemListElement",itemscope:"",itemtype:"http://schema.org/ListItem"},l=Object(c["i"])("span",{itemprop:"name"},"首頁",-1),o=Object(c["i"])("meta",{itemprop:"position",content:1},null,-1);function b(t,e,i,b,d,p){const u=Object(c["Q"])("router-link"),g=Object(c["Q"])("SwiperCarouselVue"),j=Object(c["Q"])("indexBg"),O=Object(c["Q"])("indexArt"),m=Object(c["Q"])("indexBg2"),h=Object(c["Q"])("indexPrd");return Object(c["H"])(),Object(c["h"])("div",s,[Object(c["i"])("div",a,[Object(c["i"])("ol",n,[Object(c["i"])("li",r,[Object(c["m"])(u,{to:"/index",itemprop:"item",title:"劉記花生"},{default:Object(c["bb"])(()=>[l]),_:1}),o])])]),Object(c["m"])(g),Object(c["m"])(j),Object(c["m"])(O),Object(c["m"])(m),Object(c["m"])(h)])}const d={class:"banner_out position-relative"},p={class:"banner_box overflow-hidden"},u={class:"banner"},g=["srcset"],j=["src"],O=Object(c["i"])("div",{class:"banner_info d-none d-md-block"},[Object(c["i"])("div",{class:"banner_info_title pt-sm-4 mb-sm-5 mb-4"},"【品牌故事】"),Object(c["i"])("div",{class:"name text-center mb-3"},"吉祥物 / 劉爺爺"),Object(c["i"])("div",null," 宜蘭的「劉記花生」，自1975年創立至今，即以當地盛產的花生製作成酥糖產品聞名，將往日在家中廚房炒花生的幸福時光，原汁原味與大眾分享，純手工專業低溫烘焙，嚴選無添加之頂級食材，製作出屬於傳承與堅持的懷念好滋味。2010年以宜蘭三星蔥為名，首創「三星蔥花生糖」，充分結合地方特色，採用新鮮食材，濃郁香脆的口感，風靡全台，已成為全國最具代表性的伴手禮之一。 ")],-1);function m(t,e,i,s,a,n){const r=Object(c["Q"])("swiper-slide"),l=Object(c["Q"])("swiper");return Object(c["H"])(),Object(c["h"])("section",d,[Object(c["i"])("div",p,[Object(c["i"])("div",u,[Object(c["m"])(l,{modules:s.modules,"slides-per-view":1,"space-between":30,pagination:{type:"bullets",clickable:!0,renderBullet:s.renderBullet},autoplay:{delay:5e3,disableOnInteraction:!1},observer:!0,observeParents:!0,speed:1500,class:"default-slider"},{default:Object(c["bb"])(()=>[(Object(c["H"])(!0),Object(c["h"])(c["a"],null,Object(c["O"])(a.slide,t=>(Object(c["H"])(),Object(c["f"])(r,{key:t},{default:Object(c["bb"])(()=>[Object(c["i"])("picture",null,[Object(c["i"])("source",{srcset:"./img/"+t.photo_small,media:"(max-width: 991px)"},null,8,g),Object(c["i"])("img",{src:"./img/"+t.photo_big,alt:"",class:"w-100"},null,8,j)])]),_:2},1024))),128))]),_:1},8,["modules","pagination"])]),O])])}var h=i("4da1"),v=i("d15c"),f=i("f754"),x=(i("41fa"),{components:{Swiper:v["a"],SwiperSlide:f["a"]},data(){return{slide:[]}},mounted(){const t=this,e="./json/banner.json";this.$http.get(e).then(e=>{t.slide=e.data})},setup(){const t=(t,e)=>'<div class="'+e+'"><span>0'+(t+1)+"</span><span></span></div>";return{renderBullet:t,modules:[h["b"],h["a"]]}}}),y=i("6b0d"),_=i.n(y);const w=_()(x,[["render",m]]);var k=w;const A=t=>(Object(c["K"])("data-v-46b7daea"),t=t(),Object(c["I"])(),t),H={class:"index_bg position-relative mt-lg-5 mt-4 parallax_box"},Q=A(()=>Object(c["i"])("div",{class:"logo_vertical"},[Object(c["i"])("img",{src:"./img/logo_vertical.svg",alt:"",class:"svg"})],-1));function T(t,e,i,s,a,n){return Object(c["H"])(),Object(c["h"])("section",H,[Object(c["i"])("div",{class:"layer parallax","data-depth":"0.20",style:Object(c["y"])({backgroundImage:"url(./img/index_bgimg.jpg)"})},null,4),Q])}var I={mounted(){this.scrollAnimation()},methods:{scrollAnimation(){const t=this.gsap.timeline({scrollTrigger:{trigger:"body",start:"10% 10%",end:"70% 50%",scrub:1}});this.gsap.utils.toArray(".parallax").forEach(e=>{const i=e.dataset.depth,c=-e.offsetHeight*i;t.to(e,{y:c,ease:"none"},0)}),this.gsap.timeline({scrollTrigger:{trigger:".index_bg",start:"40% 90%",end:"50% 60%",scrub:1}}).from(".logo_vertical",{duration:2,y:200,opacity:0,stagger:.3})}}};i("4ed45");const B=_()(I,[["render",T],["__scopeId","data-v-46b7daea"]]);var P=B,C=i("6e22"),E=i.n(C);const S={class:"index_news position-relative pt-5 overflow-hidden"},L={class:"container pb-5 position-relative z-index-1"},$={class:"px-lg-5"},D=Object(c["i"])("h2",{class:"text-center"},[Object(c["i"])("span",null,"最新消息")],-1),J={class:"row news-list mx-n2"},V={class:"inner bg-white p-4"},z={class:"img mb-3"},K=["src","alt"],q={class:"title mb-2"},F={class:"info mb-2"},G=Object(c["i"])("span",null,"閱讀更多",-1),M={class:"date"},N=Object(c["i"])("img",{src:E.a,alt:"",class:"me-2"},null,-1),R={class:"text-center pt-3 pt-lg-0"};function U(t,e,i,s,a,n){const r=Object(c["Q"])("router-link");return Object(c["H"])(),Object(c["h"])("section",S,[Object(c["i"])("div",L,[Object(c["i"])("div",$,[D,Object(c["i"])("div",J,[(Object(c["H"])(!0),Object(c["h"])(c["a"],null,Object(c["O"])(a.articles,e=>(Object(c["H"])(),Object(c["h"])("div",{class:"col-lg-4 col-sm-6 mb-lg-5 mb-4 px-2 item",key:e},[Object(c["m"])(r,{to:"news/"+e.id},{default:Object(c["bb"])(()=>[Object(c["i"])("div",V,[Object(c["i"])("div",z,[Object(c["i"])("img",{src:e.image,alt:e.title,class:"w-100"},null,8,K)]),Object(c["i"])("div",q,Object(c["T"])(e.title),1),Object(c["i"])("div",F,[Object(c["l"])(Object(c["T"])(e.description)+"... ",1),G]),Object(c["i"])("div",M,[N,Object(c["l"])(Object(c["T"])(t.$filters.date(e.create_at)),1)])])]),_:2},1032,["to"])]))),128))]),Object(c["i"])("div",R,[Object(c["m"])(r,{to:"/news",class:"btn btn-outline-light mx-auto"},{default:Object(c["bb"])(()=>[Object(c["l"])("更多消息")]),_:1})])])])])}var W={data(){return{articles:[]}},mounted(){const t="https://vue3-course-api.hexschool.io/api/hexacervue3/articles";this.$http.get(t).then(t=>{t.data.success&&(this.articles=t.data.articles.slice(0,3))}).then(()=>{this.gsap.from(".item",{scrollTrigger:".news-list",duration:1.15,y:50,opacity:0,stagger:.3})})}};const X=_()(W,[["render",U]]);var Y=X;const Z={class:"index_slogan position-relative parallax_box"},tt=Object(c["i"])("div",{class:"container d-flex align-items-center h-100"},[Object(c["i"])("div",{class:"px-lg-5"},[Object(c["i"])("div",{class:"info overflow-hidden"},[Object(c["i"])("div",null,"嚴選美味．手工烘培"),Object(c["i"])("div",null,"用味覺記憶生命中的幸福時光")])])],-1);function et(t,e,i,s,a,n){return Object(c["H"])(),Object(c["h"])("section",Z,[Object(c["i"])("div",{class:"layer parallax","data-depth":"0.2",style:Object(c["y"])({backgroundImage:"url(./img/index_slogan.jpg)"})},null,4),tt])}var it={mounted(){this.scrollAnimation()},methods:{scrollAnimation(){const t=this.gsap.timeline({scrollTrigger:{trigger:"body",start:"top",scrub:1}});this.gsap.utils.toArray(".parallax").forEach(e=>{const i=e.dataset.depth,c=-e.offsetHeight*i;t.to(e,{y:c,ease:"none"},0)}),this.gsap.timeline({scrollTrigger:{trigger:".index_slogan",start:"top center"}}).from(".index_slogan .info > div",{duration:1,y:50,opacity:0,stagger:.3})}}};const ct=_()(it,[["render",et]]);var st=ct;const at={class:"index_prd py-5 bg-white"},nt={class:"container"},rt={class:"px-lg-5"},lt=Object(c["i"])("h2",{class:"text-center mb-4"},[Object(c["i"])("span",null,"商品介紹")],-1),ot={class:"nav nav-pills mb-4 mx-n2 justify-content-center justify-content-lg-start",id:"pills-tab",role:"tablist"},bt=["onClick"],dt={class:"tab-content mb-4",id:"pills-tabContent"},pt={class:"tab-pane fade show active",role:"tabpanel"},ut={class:"text-center pt-3 pt-lg-0"};function gt(t,e,i,s,a,n){const r=Object(c["Q"])("ProductList"),l=Object(c["Q"])("router-link");return Object(c["H"])(),Object(c["h"])("section",at,[Object(c["i"])("div",nt,[Object(c["i"])("div",rt,[lt,Object(c["i"])("ul",ot,[Object(c["i"])("li",{class:"nav-item",role:"presentation",onClick:e[0]||(e[0]=Object(c["eb"])(t=>a.tabActive="",["prevent"]))},[Object(c["i"])("button",{class:Object(c["w"])(["nav-link",{active:""===a.tabActive}]),id:"prd_01-tab","data-toggle":"pill","data-target":"#prd_01",type:"button",role:"tab","aria-controls":"prd_01","aria-selected":"true"}," 全部商品 ",2)]),(Object(c["H"])(!0),Object(c["h"])(c["a"],null,Object(c["O"])(a.classification,t=>(Object(c["H"])(),Object(c["h"])("li",{class:"nav-item",role:"presentation",key:t,onClick:Object(c["eb"])(e=>a.tabActive=t,["prevent"])},[Object(c["i"])("button",{class:Object(c["w"])(["nav-link",{active:a.tabActive===t}]),id:"prd_02-tab","data-toggle":"pill","data-target":"#prd_02",type:"button",role:"tab","aria-controls":"prd_02","aria-selected":"false"},Object(c["T"])(t),3)],8,bt))),128))]),Object(c["i"])("div",dt,[Object(c["i"])("div",pt,[Object(c["m"])(r,{list:n.filterData,page:a.currentPage},null,8,["list","page"]),Object(c["i"])("div",ut,[Object(c["m"])(l,{to:"/products/"+a.tabActive,class:"btn btn-outline-primary mx-auto more"},{default:Object(c["bb"])(()=>[Object(c["l"])(" 更多商品 ")]),_:1},8,["to"])])])])])])])}i("14d9");var jt=i("1c14"),Ot={components:{ProductList:jt["a"]},data(){return{products:[],classification:[],tabActive:"",currentPage:1}},computed:{filterData(){const t=this;if(""===this.tabActive){const t=[];return this.products.forEach((e,i)=>{i%6===0&&t.push([]);const c=parseInt(i/6);t[c].push(e)}),t.slice(0,1)}{var e=[];this.products.forEach((function(i){i.category===t.tabActive&&e.push(i)}));const i=[];return e.forEach((t,e)=>{e%6===0&&i.push([]);const c=parseInt(e/6);i[c].push(t)}),i.slice(0,1)}}},mounted(){const t="https://vue3-course-api.hexschool.io/api/hexacervue3/products/all";this.$http.get(t).then(t=>{if(t.data.success){const e=this;this.products=t.data.products;let i=new Set;i=this.products.filter((function(t){if(!i.has(t.category))return i.add(t.category)})),i.filter((function(t){return e.classification.push(t.category)}))}}).then(()=>{this.gsap.from(".prd-list > div",{scrollTrigger:".prd-list",duration:1.15,y:50,opacity:0,stagger:.3})})}};const mt=_()(Ot,[["render",gt]]);var ht=mt,vt={name:"Home",components:{SwiperCarouselVue:k,indexBg:P,indexArt:Y,indexBg2:st,indexPrd:ht},mounted(){const t=this.gsap.timeline({});t.from(".banner",{duration:1,x:300,opacity:0,stagger:.3}),t.from(".banner_info",{duration:1,opacity:0,stagger:.3,delay:-.2}),t.from("header .row.wrap",{duration:.8,y:-50,opacity:0,stagger:.3,delay:-.5}),t.from(".index_bg",{duration:1,y:50,opacity:0,stagger:.3,delay:-1});const e=this.gsap.timeline({scrollTrigger:{trigger:".banner_out",start:"top"}});e.to(".banner_info",{duration:1.15,y:-100,opacity:0,stagger:.3})}};const ft=_()(vt,[["render",b]]);e["default"]=ft},bf99:function(t,e,i){}}]);
//# sourceMappingURL=chunk-8c1ddcfa.c4181574.js.map