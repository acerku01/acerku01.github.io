(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1fd12c32"],{"37f0":function(e,t,i){"use strict";i.r(t);var c=i("7a23");const s={class:"login pages position-relative overflow-hidden"},l={class:"container position-relative z-index-1 box_"},a={class:"bread-crumbs py-3 px-lg-5"},o={itemscope:"",itemtype:"http://schema.org/breadcrumbList",id:"breadcrumbs"},b={itemprop:"itemListElement",itemscope:"",itemtype:"http://schema.org/ListItem"},r=Object(c["i"])("span",{itemprop:"name"},"首頁",-1),d=Object(c["i"])("meta",{itemprop:"position",content:"1"},null,-1),n={itemprop:"itemListElement",itemscope:"",itemtype:"http://schema.org/ListItem"},j=Object(c["i"])("span",{class:"mx-2"},"/",-1),O={key:0,itemprop:"name"},p={key:1,itemprop:"name"},m=Object(c["i"])("meta",{itemprop:"position",content:"2"},null,-1),v={class:"main-box bg-white px-lg-5 px-4 py-lg-5 py-4 mb-4"},h={class:"row justify-content-center"},u={class:"col-lg-8 p-0 cart3"},g={class:"text-center mb-4"},x={class:"d-flex align-items-center justify-content-center"},y=Object(c["i"])("span",{class:"me-2"},[Object(c["i"])("i",{class:"bi bi-check-circle text-danger"})],-1),_=Object(c["i"])("span",{class:"me-2"},[Object(c["i"])("i",{class:"bi bi-cash-coin"})],-1),f={key:0},w={key:1},k={class:"bc_box_c p-4 mb-4"},I=Object(c["i"])("div",{class:"title mb-2"},"訂單資訊",-1),$={class:"row mb-1 mx-0"},L=Object(c["i"])("div",{class:"item_col p-0"},"訂單編號：",-1),T={class:"col"},U={class:"row mb-1 mx-0"},B=Object(c["i"])("div",{class:"item_col p-0"},"訂單日期：",-1),E={class:"col"},P=Object(c["i"])("div",{class:"row mb-1 mx-0"},[Object(c["i"])("div",{class:"item_col p-0"},"訂單狀態："),Object(c["i"])("div",{class:"col"},"處理中")],-1),S={class:"bc_box_c p-4 mb-4"},z=Object(c["i"])("div",{class:"title mb-2"},"商品資訊",-1),D={class:"table align-middle"},J=Object(c["i"])("thead",null,[Object(c["i"])("th",null,"品名"),Object(c["i"])("th",null,"數量"),Object(c["i"])("th",{class:"text-end"},"小計")],-1),N={class:"text-end"},R=Object(c["i"])("td",{colspan:"2",class:"text-end"},"總計",-1),q={class:"text-end"},C={class:"bc_box_c p-4 mb-4"},H=Object(c["i"])("div",{class:"title mb-2"},"付款資訊",-1),A=Object(c["i"])("div",{class:"row mb-1 mx-0"},[Object(c["i"])("div",{class:"item_col p-0"},"付款方式："),Object(c["i"])("div",{class:"col"},"信用卡付款")],-1),F={class:"row mb-1 mx-0"},G=Object(c["i"])("div",{class:"item_col p-0"},"付款狀態：",-1),K={class:"col"},M={key:0},Q={key:1},V=Object(c["k"])('<div class="row mb-1 mx-0"><div class="item_col p-0">發票號碼：</div><div class="col">BJ-11111111</div></div><div class="row mb-1 mx-0"><div class="item_col p-0">發票狀態：</div><div class="col">已開立</div></div><div class="row mb-1 mx-0"><div class="item_col p-0">發票類型：</div><div class="col">二聯式</div></div>',3),W={class:"bc_box_c p-4 mb-4"},X=Object(c["i"])("div",{class:"title mb-2"},"收件資訊",-1),Y={class:"row mb-1 mx-0"},Z=Object(c["i"])("div",{class:"item_col p-0"},"收件人：",-1),ee={class:"col"},te={class:"row mb-1 mx-0"},ie=Object(c["i"])("div",{class:"item_col p-0"},"收件人電話：",-1),ce={class:"col"},se=Object(c["i"])("div",{class:"row mb-1 mx-0"},[Object(c["i"])("div",{class:"item_col p-0"},"配送方式："),Object(c["i"])("div",{class:"col"},"宅配")],-1),le={class:"row mb-1 mx-0"},ae=Object(c["i"])("div",{class:"item_col p-0"},"配送地址：",-1),oe={class:"col"},be=Object(c["k"])('<div class="row mb-1 mx-0"><div class="item_col p-0">配送狀態：</div><div class="col">備貨中</div></div><div class="row mb-1 mx-0"><div class="item_col p-0">配送說明：</div><div class="col"><strong class="d-block mb-1">「當日配送注意事項」</strong><ul class="pl-4"><li>配送地區：限台北市區</li><li>單筆訂單滿NT$ 2,500以上，運費NT$ 380</li><li>單筆訂單滿 NT$ 5,000 以上，免運</li></ul></div></div>',2),re={class:"text-center btn-box"};function de(e,t,i,de,ne,je){const Oe=Object(c["R"])("loading"),pe=Object(c["R"])("pagesBanner"),me=Object(c["R"])("router-link");return Object(c["I"])(),Object(c["h"])(c["a"],null,[Object(c["m"])(Oe,{active:ne.isLoading},null,8,["active"]),Object(c["m"])(pe),Object(c["i"])("section",s,[Object(c["i"])("div",l,[Object(c["i"])("div",a,[Object(c["i"])("ol",o,[Object(c["i"])("li",b,[Object(c["m"])(me,{to:"/index",itemprop:"item",title:"劉記花生"},{default:Object(c["eb"])(()=>[r]),_:1}),d]),Object(c["i"])("li",n,[j,Object(c["m"])(me,{to:"/completed/"+ne.order.id,itemprop:"item",title:ne.order.is_paid?"訂購完成":"模擬付款"},{default:Object(c["eb"])(()=>[ne.order.is_paid?(Object(c["I"])(),Object(c["h"])("span",O,"訂購完成")):(Object(c["I"])(),Object(c["h"])("span",p,"模擬付款"))]),_:1},8,["to","title"]),m])])]),Object(c["i"])("div",v,[Object(c["i"])("div",h,[Object(c["i"])("div",u,[Object(c["i"])("div",g,[Object(c["i"])("h2",x,[ne.order.is_paid?(Object(c["I"])(),Object(c["h"])(c["a"],{key:0},[y,Object(c["l"])("訂購完成 ")],64)):(Object(c["I"])(),Object(c["h"])(c["a"],{key:1},[_,Object(c["l"])("模擬付款 ")],64))]),ne.order.is_paid?(Object(c["I"])(),Object(c["h"])("div",f,"謝謝您，您的訂單已經成立！")):(Object(c["I"])(),Object(c["h"])("div",w,"模擬付款中！"))]),Object(c["i"])("div",k,[I,Object(c["i"])("div",$,[L,Object(c["i"])("div",T,Object(c["U"])(ne.order.id),1)]),Object(c["i"])("div",U,[B,Object(c["i"])("div",E,Object(c["U"])(e.$filters.date(ne.order.create_at)),1)]),P]),Object(c["i"])("div",S,[z,Object(c["i"])("table",D,[J,Object(c["i"])("tbody",null,[(Object(c["I"])(!0),Object(c["h"])(c["a"],null,Object(c["P"])(ne.order.products,t=>(Object(c["I"])(),Object(c["h"])("tr",{key:t.id},[Object(c["i"])("td",null,Object(c["U"])(t.product.title),1),Object(c["i"])("td",null,Object(c["U"])(t.qty)+"/"+Object(c["U"])(t.product.unit),1),Object(c["i"])("td",N,Object(c["U"])(e.$filters.currency(t.final_total)),1)]))),128))]),Object(c["i"])("tfoot",null,[Object(c["i"])("tr",null,[R,Object(c["i"])("td",q,Object(c["U"])(e.$filters.currency(ne.order.total)),1)])])])]),Object(c["i"])("div",C,[H,A,Object(c["i"])("div",F,[G,Object(c["i"])("div",K,[ne.order.is_paid?(Object(c["I"])(),Object(c["h"])("span",M,"已付款")):(Object(c["I"])(),Object(c["h"])("span",Q,"未付款"))])]),V]),Object(c["i"])("div",W,[X,Object(c["i"])("div",Y,[Z,Object(c["i"])("div",ee,Object(c["U"])(ne.order.user.name),1)]),Object(c["i"])("div",te,[ie,Object(c["i"])("div",ce,Object(c["U"])(ne.order.user.tel),1)]),se,Object(c["i"])("div",le,[ae,Object(c["i"])("div",oe,Object(c["U"])(ne.order.user.address),1)]),be]),Object(c["i"])("div",re,[ne.order.is_paid?(Object(c["I"])(),Object(c["f"])(me,{key:0,to:"/index",class:"btn btn-primary"},{default:Object(c["eb"])(()=>[Object(c["l"])("回首頁")]),_:1})):(Object(c["I"])(),Object(c["h"])("div",{key:1,class:"btn btn-primary",onClick:t[0]||(t[0]=Object(c["hb"])((...e)=>je.goPay&&je.goPay(...e),["prevent"]))},"進行付款"))])])])])])])],64)}var ne=i("d037"),je={components:{pagesBanner:ne["a"]},data(){return{isLoading:!1,orderId:"",order:{user:{}}}},methods:{simpleScrollTrigger(){this.gsap.from(".box_",{y:50,opacity:0,duration:1,delay:.5,scrollTrigger:{trigger:".box_",start:"top 90%"}})},getData(){this.isLoading=!0;const e="https://vue3-course-api.hexschool.io/api/hexacervue3/order/"+this.orderId;this.$http.get(e).then(e=>{this.isLoading=!1,e.data.success&&(this.order=e.data.order)})},goPay(){this.isLoading=!0;const e="https://vue3-course-api.hexschool.io/api/hexacervue3/pay/"+this.orderId;this.$http.post(e).then(e=>{this.isLoading=!1,e.data.success&&(document.documentElement.scrollTop=0,this.getData())})}},created(){this.orderId=this.$route.params.orderId},mounted(){this.getData(),this.simpleScrollTrigger()}},Oe=i("6b0d"),pe=i.n(Oe);const me=pe()(je,[["render",de]]);t["default"]=me},d037:function(e,t,i){"use strict";var c=i("7a23");const s={class:"banner_page position-relative"},l={class:"container h-100 position-relative z-index-1"},a={class:"row h-100 mx-0 align-items-center"},o={key:0,class:"overflow-hidden px-lg-5 px-0"},b={class:"page-title box"};function r(e,t,i,r,d,n){return Object(c["I"])(),Object(c["h"])("section",s,[Object(c["i"])("div",{class:"top_img parallax","data-depth":"0.40",style:Object(c["z"])(`background-image: url(./img/${d.slide.photo})`),ref:"parallax"},null,4),Object(c["i"])("div",l,[Object(c["i"])("div",a,[d.slide?(Object(c["I"])(),Object(c["h"])("div",o,[Object(c["i"])("h2",b,"【 "+Object(c["U"])(d.slide.name)+" 】",1)])):Object(c["g"])("",!0)])])])}var d={data(){return{slide:{}}},methods:{simpleScrollTrigger(){const e=this.$refs.parallax.dataset.depth,t=-this.$refs.parallax.offsetHeight*e;this.gsap.to(".parallax",{y:t,ease:"none",scrollTrigger:{trigger:"body",start:"top",scrub:1}}),this.gsap.from(".box",{y:50,opacity:0,duration:1.5,scrollTrigger:{trigger:".box",start:"top 90%"}})}},mounted(){const e=this,t="./json/pagesBanner.json";this.$http.get(t).then(t=>{e.slide=t.data,e.slide.forEach((function(t){t.type===e.$route.name&&(e.slide=t)})),this.simpleScrollTrigger()})}},n=i("6b0d"),j=i.n(n);const O=j()(d,[["render",r]]);t["a"]=O}}]);
//# sourceMappingURL=chunk-1fd12c32.f884918e.js.map