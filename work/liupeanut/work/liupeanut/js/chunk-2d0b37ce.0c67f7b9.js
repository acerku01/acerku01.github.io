(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b37ce"],{"291b":function(t,e,l){"use strict";l.r(e);var a=l("7a23");const i={class:"text-end mt-4"},c={class:"table mt-4"},s=Object(a["i"])("thead",null,[Object(a["i"])("tr",null,[Object(a["i"])("th",null,"標題"),Object(a["i"])("th",null,"作者"),Object(a["i"])("th",null,"建立時間"),Object(a["i"])("th",null,"是否開啟"),Object(a["i"])("th",null,"編輯")])],-1),o={key:0,class:"text-success"},r={key:1,class:"text-muted"},n={class:"btn-group"},b=["onClick"],d=["onClick"];function p(t,e,l,p,h,m){const u=Object(a["Q"])("loading"),O=Object(a["Q"])("Pagination"),j=Object(a["Q"])("ArticlesModal"),g=Object(a["Q"])("DeleteModal");return Object(a["H"])(),Object(a["h"])(a["a"],null,[Object(a["m"])(u,{active:h.isLoading},null,8,["active"]),Object(a["i"])("div",i,[Object(a["i"])("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=Object(a["eb"])(t=>m.openModal(!0),["prevent"]))}," 新增文章 ")]),Object(a["i"])("div",null,[Object(a["i"])("table",c,[s,Object(a["i"])("tbody",null,[(Object(a["H"])(!0),Object(a["h"])(a["a"],null,Object(a["O"])(h.articles,e=>(Object(a["H"])(),Object(a["h"])("tr",{key:e},[Object(a["i"])("td",null,Object(a["T"])(e.title),1),Object(a["i"])("td",null,Object(a["T"])(e.author),1),Object(a["i"])("td",null,Object(a["T"])(t.$filters.date(e.create_at)),1),Object(a["i"])("td",null,[e.isPublic?(Object(a["H"])(),Object(a["h"])("span",o,"啟用")):(Object(a["H"])(),Object(a["h"])("span",r,"未啟用"))]),Object(a["i"])("td",null,[Object(a["i"])("div",n,[Object(a["i"])("button",{class:"btn btn-outline-primary btn-sm",onClick:Object(a["eb"])(t=>m.openModal(!1,e),["prevent"])},"檢視",8,b),Object(a["i"])("button",{class:"btn btn-outline-danger btn-sm",onClick:t=>m.openDeleteModal(e)},"刪除",8,d)])])]))),128))])]),Object(a["m"])(O,{pages:h.pagination,onChangPage:m.changPage},null,8,["pages","onChangPage"]),Object(a["m"])(j,{ref:"ArticlesModal",article:h.tempArticle,onUpdateArticle:m.updateArticle},null,8,["article","onUpdateArticle"]),Object(a["m"])(g,{ref:"ArticlesDelModal",item:h.tempArticle,onDelItem:m.deleteData},null,8,["item","onDelItem"])])],64)}var h=l("1799");const m={class:"modal fade",id:"ArticlesModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},u={class:"modal-dialog modal-xl",role:"document"},O={class:"modal-content"},j=Object(a["i"])("div",{class:"modal-header"},[Object(a["i"])("h5",{class:"modal-title",id:"exampleModalLabel"},"文章資訊"),Object(a["i"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),g={class:"modal-body"},f={class:"row"},v={class:"col-sm-4"},A={class:"mb-3"},x=Object(a["i"])("label",{for:"price",class:"form-label"},"上傳圖片",-1),M=["src"],y={class:"col-sm-8"},w={class:"mb-3"},D=Object(a["i"])("label",{for:"title",class:"form-label"},"標題",-1),k={class:"row gx-2"},$={class:"mb-3 col-md-6"},P=Object(a["i"])("label",{for:"origin_price",class:"form-label"},"作者",-1),_={class:"mb-3 col-md-6"},C=Object(a["i"])("label",{for:"price",class:"form-label"},"建立日期",-1),U=Object(a["i"])("hr",null,null,-1),V={class:"mb-3"},H=Object(a["i"])("label",{for:"tag",class:"form-label"},"標籤",-1),L={class:"mb-3"},Y=Object(a["i"])("label",{for:"description",class:"form-label"},"簡介",-1),F={class:"mb-3"},I=Object(a["i"])("label",{for:"content",class:"form-label"},"內容",-1),T={class:"mb-3"},N={class:"form-check text-start"},Q=Object(a["i"])("label",{class:"form-check-label",for:"isPublic"}," 是否啟用 ",-1),J={class:"modal-footer"},S=Object(a["i"])("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1);function X(t,e,l,i,c,s){return Object(a["H"])(),Object(a["h"])("div",m,[Object(a["i"])("div",u,[Object(a["i"])("div",O,[j,Object(a["i"])("div",g,[Object(a["i"])("div",f,[Object(a["i"])("div",v,[Object(a["i"])("div",A,[x,Object(a["i"])("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:e[0]||(e[0]=(...t)=>s.uploadFile&&s.uploadFile(...t))},null,544),Object(a["i"])("img",{class:"img-fluid mb-3 pt-3",src:c.tempArticle.image,alt:""},null,8,M)])]),Object(a["i"])("div",y,[Object(a["i"])("div",w,[D,Object(a["cb"])(Object(a["i"])("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[1]||(e[1]=t=>c.tempArticle.title=t),placeholder:"請輸入標題"},null,512),[[a["Y"],c.tempArticle.title]])]),Object(a["i"])("div",k,[Object(a["i"])("div",$,[P,Object(a["cb"])(Object(a["i"])("input",{type:"text",class:"form-control",id:"author","onUpdate:modelValue":e[2]||(e[2]=t=>c.tempArticle.author=t),placeholder:"請輸入作者"},null,512),[[a["Y"],c.tempArticle.author]])]),Object(a["i"])("div",_,[C,Object(a["cb"])(Object(a["i"])("input",{type:"date",class:"form-control",id:"create_at","onUpdate:modelValue":e[3]||(e[3]=t=>c.create_at=t)},null,512),[[a["Y"],c.create_at]])])]),U,Object(a["i"])("div",V,[H,Object(a["cb"])(Object(a["i"])("input",{type:"text",class:"form-control",id:"tag","onUpdate:modelValue":e[4]||(e[4]=t=>c.tempArticle.tag=t),placeholder:"請輸入文章標籤"},null,512),[[a["Y"],c.tempArticle.tag]])]),Object(a["i"])("div",L,[Y,Object(a["cb"])(Object(a["i"])("textarea",{type:"text",class:"form-control",id:"description",placeholder:"請輸入文章描述","onUpdate:modelValue":e[5]||(e[5]=t=>c.tempArticle.description=t)},null,512),[[a["Y"],c.tempArticle.description]])]),Object(a["i"])("div",F,[I,Object(a["cb"])(Object(a["i"])("textarea",{name:"",class:"form-control",id:"tag",cols:"30",rows:"10","onUpdate:modelValue":e[6]||(e[6]=t=>c.tempArticle.content=t),placeholder:"請輸入內容"},null,512),[[a["Y"],c.tempArticle.content]])]),Object(a["i"])("div",T,[Object(a["i"])("div",N,[Object(a["cb"])(Object(a["i"])("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":e[7]||(e[7]=t=>c.tempArticle.isPublic=t),id:"isPublic"},null,512),[[a["X"],c.tempArticle.isPublic]]),Q])])])])]),Object(a["i"])("div",J,[S,Object(a["i"])("button",{type:"button",class:"btn btn-primary",onClick:e[8]||(e[8]=e=>t.$emit("update-article",c.tempArticle))},"更新 ")])])])],512)}var q=l("e0ae"),z={name:"ArticlesModal",props:{article:{type:Object,default(){return{}}}},mixins:[q["a"]],data(){return{modal:{},tempArticle:{},create_at:""}},watch:{article(){this.tempArticle=this.article;const t=new Date(1e3*this.tempArticle.create_at).toISOString().split("T");[this.create_at]=t},create_at(){this.tempArticle.create_at=Math.floor(new Date(this.create_at)/1e3)}},methods:{uploadFile(){const t=this.$refs.fileInput.files[0],e=new FormData;e.append("file-to-upload",t);const l="https://vue3-course-api.hexschool.io/api/hexacervue3/admin/upload";this.$http.post(l,e).then(t=>{t.data.success&&(this.tempArticle.image=t.data.imageUrl)})}}},B=l("6b0d"),E=l.n(B);const G=E()(z,[["render",X]]);var K=G,R=l("6ff1"),W={components:{Pagination:h["a"],ArticlesModal:K,DeleteModal:R["a"]},data(){return{articles:[],pagination:{},tempArticle:{title:"",description:"",image:"",tag:[],author:"",isPublic:!1,content:""},isLoading:!1,isNew:!1}},methods:{getData(t=1){this.isLoading=!0;const e="https://vue3-course-api.hexschool.io/api/hexacervue3/admin/articles?page="+t;this.$http.get(e).then(t=>{this.isLoading=!1,t.data.success&&(this.articles=t.data.articles,this.pagination=t.data.pagination)})},changPage(t){this.getData(t)},openModal(t,e){if(this.isNew=t,this.isNew)this.tempArticle={create_at:(new Date).getTime()/1e3};else{const t="https://vue3-course-api.hexschool.io/api/hexacervue3/admin/article/"+e.id;this.$http.get(t).then(t=>{this.tempArticle={...t.data.article}})}this.$refs.ArticlesModal.showModal()},openDeleteModal(t){this.tempArticle={...t},this.$refs.ArticlesDelModal.showModal()},updateArticle(t){this.tempArticle=t;let e="https://vue3-course-api.hexschool.io/api/hexacervue3/admin/article",l="post",a="新增";this.isNew||(e="https://vue3-course-api.hexschool.io/api/hexacervue3/admin/article/"+t.id,l="put",a="修改"),this.$http[l](e,{data:this.tempArticle}).then(t=>{this.$refs.ArticlesModal.hideModal(),t.data.success?(this.getData(),this.$httpMessage(t,a)):this.$httpMessage(t,a)})},deleteData(){const t="https://vue3-course-api.hexschool.io/api/hexacervue3/admin/article/"+this.tempArticle.id;this.$http.delete(t).then(t=>{t.data.success?(this.getData(),this.$httpMessage(t,"刪除")):this.$httpMessage(t,"刪除"),this.$refs.ArticlesDelModal.hideModal()})}},created(){this.getData()}};const Z=E()(W,[["render",p]]);e["default"]=Z}}]);
//# sourceMappingURL=chunk-2d0b37ce.0c67f7b9.js.map