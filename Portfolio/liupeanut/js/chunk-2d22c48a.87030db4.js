(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22c48a"],{f329:function(e,t,o){"use strict";o.r(t);var a=o("7a23");const n={class:"text-end mt-4"},l={class:"table mt-4"},i=Object(a["i"])("thead",null,[Object(a["i"])("tr",null,[Object(a["i"])("th",null,"名稱"),Object(a["i"])("th",null,"折扣百分比"),Object(a["i"])("th",null,"到期日"),Object(a["i"])("th",null,"是否啟用"),Object(a["i"])("th",null,"編輯")])],-1),c={key:0,class:"text-success"},s={key:1,class:"text-muted"},d={class:"btn-group"},p=["onClick"],u=["onClick"];function b(e,t,o,b,h,r){const m=Object(a["R"])("loading"),j=Object(a["R"])("CouponsModal"),O=Object(a["R"])("DelModalVue"),C=Object(a["R"])("Pagination");return Object(a["I"])(),Object(a["h"])(a["a"],null,[Object(a["m"])(m,{active:h.isLoading},null,8,["active"]),Object(a["i"])("div",n,[Object(a["i"])("button",{class:"btn btn-primary",onClick:t[0]||(t[0]=Object(a["hb"])(e=>r.openModal(!0),["prevent"]))}," 建立新的優惠券 ")]),Object(a["i"])("table",l,[i,Object(a["i"])("tbody",null,[(Object(a["I"])(!0),Object(a["h"])(a["a"],null,Object(a["P"])(h.coupons,t=>(Object(a["I"])(),Object(a["h"])("tr",{key:t},[Object(a["i"])("td",null,Object(a["U"])(t.title),1),Object(a["i"])("td",null,Object(a["U"])(t.percent)+"%",1),Object(a["i"])("td",null,Object(a["U"])(e.$filters.date(t.due_date)),1),Object(a["i"])("td",null,[1===t.is_enabled?(Object(a["I"])(),Object(a["h"])("span",c,"啟用")):(Object(a["I"])(),Object(a["h"])("span",s,"未啟用"))]),Object(a["i"])("td",null,[Object(a["i"])("div",d,[Object(a["i"])("button",{class:"btn btn-outline-primary btn-sm",onClick:Object(a["hb"])(e=>r.openModal(!1,t),["prevent"])},"編輯",8,p),Object(a["i"])("button",{class:"btn btn-outline-danger btn-sm",onClick:Object(a["hb"])(e=>r.openDelModal(t),["prevent"])},"刪除",8,u)])])]))),128))])]),Object(a["m"])(j,{ref:"CouponsModal",coupon:h.tempCoupon,onUpdateCoupon:r.updateCoupon},null,8,["coupon","onUpdateCoupon"]),Object(a["m"])(O,{ref:"CouponsDelModal",item:h.tempCoupon,onDelItem:r.deleteData},null,8,["item","onDelItem"]),Object(a["m"])(C,{pages:h.pagination,onChangPage:r.changPage},null,8,["pages","onChangPage"])],64)}var h=o("1799");const r={class:"modal fade",id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},m={class:"modal-dialog",role:"document"},j={class:"modal-content"},O=Object(a["i"])("div",{class:"modal-header"},[Object(a["i"])("h5",{class:"modal-title",id:"exampleModalLabel"},"優惠碼資訊"),Object(a["i"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),C={class:"modal-body"},g={class:"mb-3"},f=Object(a["i"])("label",{for:"title"},"標題",-1),v={class:"mb-3"},M=Object(a["i"])("label",{for:"coupon_code"},"優惠碼",-1),_={class:"mb-3"},y=Object(a["i"])("label",{for:"due_date"},"到期日",-1),x={class:"mb-3"},k=Object(a["i"])("label",{for:"price"},"折扣百分比",-1),w={class:"mb-3"},D={class:"form-check"},$=Object(a["i"])("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),U={class:"modal-footer"},I=Object(a["i"])("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1);function P(e,t,o,n,l,i){return Object(a["I"])(),Object(a["h"])("div",r,[Object(a["i"])("div",m,[Object(a["i"])("div",j,[O,Object(a["i"])("div",C,[Object(a["i"])("div",g,[f,Object(a["fb"])(Object(a["i"])("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":t[0]||(t[0]=e=>l.tempCoupon.title=e),placeholder:"請輸入標題"},null,512),[[a["Z"],l.tempCoupon.title]])]),Object(a["i"])("div",v,[M,Object(a["fb"])(Object(a["i"])("input",{type:"text",class:"form-control",id:"coupon_code","onUpdate:modelValue":t[1]||(t[1]=e=>l.tempCoupon.code=e),placeholder:"請輸入優惠碼"},null,512),[[a["Z"],l.tempCoupon.code]])]),Object(a["i"])("div",_,[y,Object(a["fb"])(Object(a["i"])("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":t[2]||(t[2]=e=>l.due_date=e)},null,512),[[a["Z"],l.due_date]])]),Object(a["i"])("div",x,[k,Object(a["fb"])(Object(a["i"])("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":t[3]||(t[3]=e=>l.tempCoupon.percent=e),placeholder:"請輸入折扣百分比"},null,512),[[a["Z"],l.tempCoupon.percent,void 0,{number:!0}]])]),Object(a["i"])("div",w,[Object(a["i"])("div",D,[Object(a["fb"])(Object(a["i"])("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":t[4]||(t[4]=e=>l.tempCoupon.is_enabled=e),id:"is_enabled"},null,512),[[a["Y"],l.tempCoupon.is_enabled]]),$])])]),Object(a["i"])("div",U,[I,Object(a["i"])("button",{type:"button",class:"btn btn-primary",onClick:t[5]||(t[5]=t=>e.$emit("update-coupon",l.tempCoupon))},"更新優惠券 ")])])])],512)}var V=o("e0ae"),L={name:"couponModal",props:{coupon:{type:Object,default(){return{}}}},mixins:[V["a"]],data(){return{modal:{},tempCoupon:{},due_date:""}},watch:{coupon(){this.tempCoupon=this.coupon;const e=new Date(1e3*this.tempCoupon.due_date).toISOString().split("T");[this.due_date]=e},due_date(){this.tempCoupon.due_date=Math.floor(new Date(this.due_date)/1e3)}}},N=o("6b0d"),R=o.n(N);const Z=R()(L,[["render",P]]);var J=Z,S=o("6ff1"),T={components:{Pagination:h["a"],CouponsModal:J,DelModalVue:S["a"]},data(){return{coupons:[],pagination:{},tempCoupon:{title:"",is_enabled:0,percent:100,code:""},isNew:!1,isLoading:!1}},inject:["emitter"],methods:{getCoupons(e=1){this.isLoading=!0;const t="https://vue3-course-api.hexschool.io/api/hexacervue3/admin/coupons?page="+e;this.$http.get(t).then(e=>{e.data.success&&(this.coupons=e.data.coupons,this.pagination=e.data.pagination,this.isLoading=!1)})},changPage(e){this.getCoupons(e)},openModal(e,t){this.isNew=e,this.isNew?this.tempCoupon={due_date:(new Date).getTime()/1e3}:this.tempCoupon={...t},this.$refs.CouponsModal.showModal()},openDelModal(e){this.tempCoupon={...e},this.$refs.CouponsDelModal.showModal()},updateCoupon(e){let t="https://vue3-course-api.hexschool.io/api/hexacervue3/admin/coupon",o="post",a="新增",n=e;this.isNew||(t="https://vue3-course-api.hexschool.io/api/hexacervue3/admin/coupon/"+e.id,o="put",a="修改",n=this.tempCoupon),this.$http[o](t,{data:n}).then(e=>{this.$refs.CouponsModal.hideModal(),e.data.success?(this.getCoupons(),this.$httpMessage(e,a)):this.$httpMessage(e,a)})},deleteData(){const e="https://vue3-course-api.hexschool.io/api/hexacervue3/admin/coupon/"+this.tempCoupon.id;this.$http.delete(e).then(e=>{e.data.success?(this.getCoupons(),this.$httpMessage(e,"刪除")):this.$httpMessage(e,"刪除"),this.$refs.CouponsDelModal.hideModal()})}},mounted(){this.getCoupons()}};const Y=R()(T,[["render",b]]);t["default"]=Y}}]);
//# sourceMappingURL=chunk-2d22c48a.87030db4.js.map