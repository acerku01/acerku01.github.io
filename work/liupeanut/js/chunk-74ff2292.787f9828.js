(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74ff2292"],{"06fc":function(t,e,i){"use strict";i.r(e);var s=i("7a23"),o=i("6e22"),c=i.n(o);const n={class:"news pages position-relative overflow-hidden"},a={class:"container position-relative z-index-1"},l={class:"bread-crumbs py-3 px-lg-5"},r={itemscope:"",itemtype:"http://schema.org/breadcrumbList",id:"breadcrumbs"},m={itemprop:"itemListElement",itemscope:"",itemtype:"http://schema.org/ListItem"},h=Object(s["i"])("span",{itemprop:"name"},"首頁",-1),b=Object(s["i"])("meta",{itemprop:"position",content:"1"},null,-1),d={itemprop:"itemListElement",itemscope:"",itemtype:"http://schema.org/ListItem"},p=Object(s["i"])("span",{class:"mx-2"},"/",-1),g=Object(s["i"])("span",{itemprop:"name"},"最新消息",-1),j=Object(s["i"])("meta",{itemprop:"position",content:"2"},null,-1),O={class:"main-box bg-white px-lg-5 px-4 pt-lg-5 pt-4 pb-3 mb-4"},u=Object(s["i"])("div",{class:"text-center mb-lg-5 mb-3"},[Object(s["i"])("h2",{class:"c_h2"},"最新消息")],-1),w={class:"row news-list mx-n2",ref:"newsItem"},v={class:"inner bg-white p-4"},f={class:"img mb-3"},x=["src","alt"],T={class:"title mb-2"},y={class:"info mb-2"},L=Object(s["i"])("span",null,"閱讀更多",-1),S={class:"date"},k=Object(s["i"])("img",{src:c.a,alt:"",class:"me-2"},null,-1),H={key:0,id:"gallery-btn",class:"text-center col-12 mb-5"},E=Object(s["i"])("div",{class:"scroll_line mb-3"},null,-1),$=Object(s["i"])("span",{class:"mouse"},null,-1),_=[E,$];function z(t,e,i,o,c,E){const $=Object(s["Q"])("loading"),z=Object(s["Q"])("pagesBanner"),W=Object(s["Q"])("router-link");return Object(s["H"])(),Object(s["h"])(s["a"],null,[Object(s["m"])($,{active:c.isLoading},null,8,["active"]),Object(s["m"])(z),Object(s["i"])("section",n,[Object(s["i"])("div",a,[Object(s["i"])("div",l,[Object(s["i"])("ol",r,[Object(s["i"])("li",m,[Object(s["m"])(W,{to:"/index",itemprop:"item",title:"劉記花生"},{default:Object(s["bb"])(()=>[h]),_:1}),b]),Object(s["i"])("li",d,[p,Object(s["m"])(W,{to:"/news",itemprop:"item",title:"最新消息"},{default:Object(s["bb"])(()=>[g]),_:1}),j])])]),Object(s["i"])("div",O,[u,Object(s["i"])("div",w,[(Object(s["H"])(!0),Object(s["h"])(s["a"],null,Object(s["O"])(E.companiesLoaded,(e,i)=>(Object(s["H"])(),Object(s["h"])("div",{class:"col-lg-4 col-sm-6 mb-lg-5 mb-4 px-2 item",key:i},[Object(s["m"])(W,{to:"/news/"+e.id},{default:Object(s["bb"])(()=>[Object(s["i"])("div",v,[Object(s["i"])("div",f,[Object(s["i"])("img",{src:e.image,alt:e.title,class:"w-100"},null,8,x)]),Object(s["i"])("div",T,Object(s["T"])(e.title),1),Object(s["i"])("div",y,[Object(s["l"])(Object(s["T"])(e.description)+"... ",1),L]),Object(s["i"])("div",S,[k,Object(s["l"])(Object(s["T"])(t.$filters.date(e.create_at)),1)])])]),_:2},1032,["to"])]))),128))],512),c.commentsToShow<c.articles.length||c.articles.length>c.commentsToShow?(Object(s["H"])(),Object(s["h"])("div",H,_)):Object(s["g"])("",!0)])])])],64)}var W=i("d037"),N={components:{pagesBanner:W["a"]},data(){return{articles:[],isLoading:!1,windowWidth:window.innerWidth,commentsToShow:3,showNum:3,totalComments:0,bottom:!1}},created(){window.addEventListener("scroll",()=>{this.bottom=this.bottomVisible()}),this.getData()},watch:{windowWidth(){this.windowWidth<=991?this.showNum=4:this.showNum=3},bottom(t){t&this.commentsToShow<this.totalComments&&this.showMore()}},methods:{getData(t=1){this.isLoading=!0;const e="https://vue3-course-api.hexschool.io/api/hexacervue3/articles?page="+t;this.$http.get(e).then(t=>{this.isLoading=!1,t.data.success&&(this.articles=t.data.articles,this.totalComments=t.data.articles.length)}).then(()=>{this.gsap.from(".item",{scrollTrigger:".news-list",duration:1.15,y:50,opacity:0,stagger:.3})})},onResize(){this.windowWidth=window.innerWidth},showMore(){this.commentsToShow>this.articles.length||(this.commentsToShow=this.commentsToShow+this.showNum)},bottomVisible(){const t=window.scrollY,e=document.documentElement.clientHeight,i=document.documentElement.scrollHeight,s=e+t>=i;return s||i<e}},computed:{companiesLoaded(){return this.articles.slice(0,this.commentsToShow)}},mounted(){this.windowWidth<=991?(this.showNum=4,this.commentsToShow=4):(this.showNum=3,this.commentsToShow=3),this.$nextTick(()=>{window.addEventListener("resize",this.onResize)}),this.totalComments=this.articles.length},beforeUnmount(){window.removeEventListener("resize",this.onResize)}},C=i("6b0d"),B=i.n(C);const I=B()(N,[["render",z]]);e["default"]=I},"6e22":function(t,e,i){t.exports=i.p+"img/clock.1f5b797d.svg"},d037:function(t,e,i){"use strict";var s=i("7a23");const o={class:"banner_page position-relative"},c={class:"container h-100 position-relative z-index-1"},n={class:"row h-100 mx-0 align-items-center"},a={key:0,class:"overflow-hidden px-lg-5"},l={class:"page-title box"};function r(t,e,i,r,m,h){return Object(s["H"])(),Object(s["h"])("section",o,[Object(s["i"])("div",{class:"top_img parallax","data-depth":"0.40",style:Object(s["y"])(`background-image: url(../img/${m.slide.photo})`),ref:"parallax"},null,4),Object(s["i"])("div",c,[Object(s["i"])("div",n,[m.slide?(Object(s["H"])(),Object(s["h"])("div",a,[Object(s["i"])("h2",l,"【 "+Object(s["T"])(m.slide.name)+" 】",1)])):Object(s["g"])("",!0)])])])}var m={data(){return{slide:{}}},methods:{simpleScrollTrigger(){const t=this.$refs.parallax.dataset.depth,e=-this.$refs.parallax.offsetHeight*t;this.gsap.to(".parallax",{y:e,ease:"none",scrollTrigger:{trigger:"body",start:"top",scrub:1}}),this.gsap.from(".box",{y:50,opacity:0,duration:1.5,scrollTrigger:{trigger:".box",start:"top 90%"}})}},mounted(){const t=this,e="./json/pagesBanner.json";this.$http.get(e).then(e=>{t.slide=e.data,t.slide.forEach((function(e){e.type===t.$route.name&&(t.slide=e)})),this.simpleScrollTrigger()})}},h=i("6b0d"),b=i.n(h);const d=b()(m,[["render",r]]);e["a"]=d}}]);
//# sourceMappingURL=chunk-74ff2292.787f9828.js.map