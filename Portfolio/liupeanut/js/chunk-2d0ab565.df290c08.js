(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab565"],{"159d":function(t,e,l){"use strict";l.r(e);var i=l("7a23");const c={class:"table mt-4"},a=Object(i["i"])("thead",null,[Object(i["i"])("tr",null,[Object(i["i"])("th",null,"訂單編號"),Object(i["i"])("th",null,"訂單日期"),Object(i["i"])("th",null,"Email"),Object(i["i"])("th",null,"購買款項"),Object(i["i"])("th",null,"應付金額"),Object(i["i"])("th",null,"是否付款"),Object(i["i"])("th",null,"編輯")])],-1),d={class:"text-right"},s={class:"text-right"},r={key:0,class:"text-success"},b={key:1,class:"text-muted"},n={class:"btn-group"},O=["onClick"],o=["onClick"];function j(t,e,l,j,u,h){const p=Object(i["Q"])("loading"),m=Object(i["Q"])("OrdersModal"),g=Object(i["Q"])("DelModalVue"),y=Object(i["Q"])("Pagination");return Object(i["H"])(),Object(i["h"])(i["a"],null,[Object(i["m"])(p,{active:u.isLoading},null,8,["active"]),Object(i["i"])("div",null,[Object(i["i"])("table",c,[a,Object(i["i"])("tbody",null,[(Object(i["H"])(!0),Object(i["h"])(i["a"],null,Object(i["O"])(u.orders,e=>(Object(i["H"])(),Object(i["h"])("tr",{key:e.id},[Object(i["i"])("td",null,Object(i["T"])(e.id),1),Object(i["i"])("td",null,Object(i["T"])(t.$filters.date(e.create_at)),1),Object(i["i"])("td",null,Object(i["T"])(e.user.email),1),Object(i["i"])("td",d,[(Object(i["H"])(!0),Object(i["h"])(i["a"],null,Object(i["O"])(e.products,t=>(Object(i["H"])(),Object(i["h"])("span",{key:t,class:"ms-2"},Object(i["T"])(t.product.title)+"*"+Object(i["T"])(t.qty),1))),128))]),Object(i["i"])("td",s,Object(i["T"])(e.total),1),Object(i["i"])("td",null,[e.is_paid?(Object(i["H"])(),Object(i["h"])("span",r,"已付款")):(Object(i["H"])(),Object(i["h"])("span",b,"尚未付款"))]),Object(i["i"])("td",null,[Object(i["i"])("div",n,[Object(i["i"])("button",{class:"btn btn-outline-primary btn-sm",onClick:Object(i["eb"])(t=>h.openModal(e),["prevent"])},"檢視",8,O),Object(i["i"])("button",{class:"btn btn-outline-danger btn-sm",onClick:Object(i["eb"])(t=>h.openDelModal(e),["prevent"])},"刪除",8,o)])])]))),128))])])]),Object(i["m"])(m,{ref:"OrdersModal",order:u.tempOrder,onUpdateOrder:h.updateOrder},null,8,["order","onUpdateOrder"]),Object(i["m"])(g,{ref:"DelModal",item:u.tempOrder,onDelItem:h.deleteData},null,8,["item","onDelItem"]),Object(i["m"])(y,{pages:u.pagination,onChangPage:h.changPage},null,8,["pages","onChangPage"])],64)}var u=l("1799");const h={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},p={class:"modal-dialog modal-xl",role:"document"},m={class:"modal-content border-0"},g=Object(i["i"])("div",{class:"modal-header bg-dark text-white"},[Object(i["i"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(i["i"])("span",null,"訂單細節")]),Object(i["i"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),y={class:"modal-body"},M={class:"row"},v={class:"col-md-4"},f=Object(i["i"])("h3",null,"用戶資料",-1),x={class:"table"},k={key:0},T=Object(i["i"])("th",{style:{width:"100px"}},"姓名",-1),$=Object(i["i"])("th",null,"Email",-1),w=Object(i["i"])("th",null,"電話",-1),H=Object(i["i"])("th",null,"地址",-1),D={class:"col-md-8"},_=Object(i["i"])("h3",null,"訂單細節",-1),C={class:"table"},P=Object(i["i"])("th",{style:{width:"100px"}},"訂單編號",-1),L=Object(i["i"])("th",null,"下單時間",-1),Q=Object(i["i"])("th",null,"付款狀態",-1),U={class:"form-check-label",for:"paid"},V={key:0,class:"text-success"},q={key:1,class:"text-muted"},E=Object(i["i"])("th",null,"總金額",-1),I=Object(i["i"])("h3",null,"選購商品",-1),J={class:"table"},X=Object(i["i"])("thead",null,[Object(i["i"])("tr")],-1),z={class:"text-end"},A={class:"modal-footer"},B=Object(i["i"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function F(t,e,l,c,a,d){return Object(i["H"])(),Object(i["h"])("div",h,[Object(i["i"])("div",p,[Object(i["i"])("div",m,[g,Object(i["i"])("div",y,[Object(i["i"])("div",M,[Object(i["i"])("div",v,[f,Object(i["i"])("table",x,[a.tempOrder.user?(Object(i["H"])(),Object(i["h"])("tbody",k,[Object(i["i"])("tr",null,[T,Object(i["i"])("td",null,Object(i["T"])(a.tempOrder.user.name),1)]),Object(i["i"])("tr",null,[$,Object(i["i"])("td",null,Object(i["T"])(a.tempOrder.user.email),1)]),Object(i["i"])("tr",null,[w,Object(i["i"])("td",null,Object(i["T"])(a.tempOrder.user.tel),1)]),Object(i["i"])("tr",null,[H,Object(i["i"])("td",null,Object(i["T"])(a.tempOrder.user.address),1)])])):Object(i["g"])("",!0)])]),Object(i["i"])("div",D,[_,Object(i["i"])("table",C,[Object(i["i"])("tbody",null,[Object(i["i"])("tr",null,[P,Object(i["i"])("td",null,Object(i["T"])(a.tempOrder.id),1)]),Object(i["i"])("tr",null,[L,Object(i["i"])("td",null,Object(i["T"])(t.$filters.date(a.tempOrder.create_at)),1)]),Object(i["i"])("tr",null,[Q,Object(i["i"])("td",null,[Object(i["cb"])(Object(i["i"])("input",{type:"checkbox",class:"form-check-input me-2",id:"paid","onUpdate:modelValue":e[0]||(e[0]=t=>a.tempOrder.is_paid=t)},null,512),[[i["X"],a.tempOrder.is_paid]]),Object(i["i"])("label",U,[a.tempOrder.is_paid?(Object(i["H"])(),Object(i["h"])("strong",V,"已付款")):(Object(i["H"])(),Object(i["h"])("span",q,"尚未付款"))])])]),Object(i["i"])("tr",null,[E,Object(i["i"])("td",null,Object(i["T"])(t.$filters.currency(a.tempOrder.total)),1)])])]),I,Object(i["i"])("table",J,[X,Object(i["i"])("tbody",null,[(Object(i["H"])(!0),Object(i["h"])(i["a"],null,Object(i["O"])(a.tempOrder.products,e=>(Object(i["H"])(),Object(i["h"])("tr",{key:e.id},[Object(i["i"])("th",null,Object(i["T"])(e.product.title),1),Object(i["i"])("td",null,Object(i["T"])(e.qty)+" / "+Object(i["T"])(e.product.unit),1),Object(i["i"])("td",z,Object(i["T"])(t.$filters.currency(e.final_total)),1)]))),128))])])])])]),Object(i["i"])("div",A,[B,Object(i["i"])("button",{type:"button",class:"btn btn-primary",onClick:e[1]||(e[1]=e=>t.$emit("update-order",a.tempOrder))}," 確認 ")])])])],512)}var G=l("e0ae"),K={name:"orderModal",props:{order:{type:Object,default(){return{}}}},data(){return{status:{},modal:"",tempOrder:{},isPaid:!1}},emits:["update-order"],mixins:[G["a"]],inject:["emitter"],watch:{order(){this.tempOrder=this.order,this.isPaid=this.tempOrder.is_paid}}},N=l("6b0d"),R=l.n(N);const S=R()(K,[["render",F]]);var W=S,Y=l("6ff1"),Z={components:{Pagination:u["a"],OrdersModal:W,DelModalVue:Y["a"]},data(){return{orders:[],pagination:{},isLoading:!1,tempOrder:{}}},inject:["emitter"],methods:{getOrders(t=1){this.isLoading=!0;const e="https://vue3-course-api.hexschool.io/api/hexacervue3/admin/orders?page="+t;this.$http.get(e).then(t=>{this.isLoading=!1,t.data.success&&(this.orders=t.data.orders,this.pagination=t.data.pagination)})},changPage(t){this.getCoupons(t)},openDelModal(t){this.tempOrder={...t},this.tempOrder.title=this.tempOrder.id,this.$refs.DelModal.showModal()},deleteData(){const t="https://vue3-course-api.hexschool.io/api/hexacervue3/admin/order/"+this.tempOrder.id;this.$http.delete(t).then(t=>{t.data.success?(this.getOrders(),this.$httpMessage(t,"刪除")):this.$httpMessage(t,"刪除"),this.$refs.DelModal.hideModal()})},openModal(t){this.$refs.OrdersModal.showModal(),this.tempOrder={...t}},updateOrder(t){this.tempOrder=t;const e="https://vue3-course-api.hexschool.io/api/hexacervue3/admin/order/"+t.id,l={is_paid:t.is_paid};this.$http.put(e,{data:l}).then(t=>{this.tempOrder={},this.$refs.OrdersModal.hideModal(),t.data.success?(this.getOrders(),this.$httpMessage(t,"修改")):this.$httpMessage(t,"修改")})}},created(){this.getOrders()}};const tt=R()(Z,[["render",j]]);e["default"]=tt}}]);
//# sourceMappingURL=chunk-2d0ab565.df290c08.js.map