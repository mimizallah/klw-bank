(this["webpackJsonpklw-bank"]=this["webpackJsonpklw-bank"]||[]).push([[127],{1033:function(e,t,c){"use strict";var a=c(99),n=c(8),s=c(877),i=c(756),l=c(679),r=c(1606),o=c(1614),d=c(1616),j=c(1633),b=c(1131),m=c(1613),u=c(867),x=c(163),h=c(170),O=c(140),p=c(1242),g=c(25);t.a=Object(u.c)((function(e){var t=e.intl,c=e.displayMode,u=e.changeDisplayMode,f=e.handleChangeSelectAll,k=e.changeOrderBy,N=e.changePageSize,v=e.selectedPageSize,C=e.totalItemCount,w=e.selectedOrderOption,y=e.match,S=e.startIndex,I=e.endIndex,M=e.selectedItemsLength,P=e.itemsLength,z=e.onSearchKey,E=e.orderOptions,A=e.pageSizes,D=e.toggleModal,L=e.heading,_=Object(n.useState)(!1),R=Object(a.a)(_,2),B=R[0],K=R[1],F=Object(n.useState)(!1),J=Object(a.a)(F,2),q=J[0],H=J[1],T=t.messages;return Object(g.jsx)(s.a,{children:Object(g.jsxs)(x.a,{xxs:"12",children:[Object(g.jsxs)("div",{className:"mb-2",children:[Object(g.jsx)("h1",{children:Object(g.jsx)(O.a,{id:L})}),Object(g.jsxs)("div",{className:"text-zero top-right-button-container",children:[Object(g.jsx)(i.a,{color:"primary",size:"lg",className:"top-right-button",onClick:function(){return D()},children:Object(g.jsx)(O.a,{id:"pages.add-new"})}),"  ",Object(g.jsxs)(l.a,{isOpen:B,toggle:function(){return K(!B)},children:[Object(g.jsx)("div",{className:"btn btn-primary btn-lg pl-4 pr-0 check-button check-all",children:Object(g.jsx)(r.a,{className:"custom-checkbox mb-0 d-inline-block",type:"checkbox",id:"checkAll",checked:M>=P,onChange:function(){return f(!0)},label:Object(g.jsx)("span",{className:"custom-control-label ".concat(M>0&&M<P?"indeterminate":"")})})}),Object(g.jsx)(o.a,{caret:!0,color:"primary",className:"dropdown-toggle-split btn-lg"}),Object(g.jsxs)(d.a,{right:!0,children:[Object(g.jsx)(j.a,{children:Object(g.jsx)(O.a,{id:"pages.delete"})}),Object(g.jsx)(j.a,{children:Object(g.jsx)(O.a,{id:"pages.another-action"})})]})]})]}),Object(g.jsx)(h.a,{match:y})]}),Object(g.jsxs)("div",{className:"mb-2",children:[Object(g.jsxs)(i.a,{color:"empty",className:"pt-0 pl-0 d-inline-block d-md-none",onClick:function(){return H(!q)},children:[Object(g.jsx)(O.a,{id:"pages.display-options"})," ",Object(g.jsx)("i",{className:"simple-icon-arrow-down align-middle"})]}),Object(g.jsxs)(b.a,{isOpen:q,className:"d-md-block",id:"displayOptions",children:[Object(g.jsxs)("span",{className:"mr-3 d-inline-block float-md-left",children:[Object(g.jsx)("a",{href:"#/",className:"mr-2 view-icon ".concat("list"===c?"active":""),onClick:function(){return u("list")},children:Object(g.jsx)(p.a,{})}),Object(g.jsx)("a",{href:"#/",className:"mr-2 view-icon ".concat("thumblist"===c?"active":""),onClick:function(){return u("thumblist")},children:Object(g.jsx)(p.c,{})}),Object(g.jsx)("a",{href:"#/",className:"mr-2 view-icon ".concat("imagelist"===c?"active":""),onClick:function(){return u("imagelist")},children:Object(g.jsx)(p.b,{})})]}),Object(g.jsxs)("div",{className:"d-block d-md-inline-block pt-1",children:[Object(g.jsxs)(m.a,{className:"mr-1 float-md-left btn-group mb-1",children:[Object(g.jsxs)(o.a,{caret:!0,color:"outline-dark",size:"xs",children:[Object(g.jsx)(O.a,{id:"pages.orderby"}),w.label]}),Object(g.jsx)(d.a,{children:E.map((function(e,t){return Object(g.jsx)(j.a,{onClick:function(){return k(e.column)},children:e.label},t)}))})]}),Object(g.jsx)("div",{className:"search-sm d-inline-block float-md-left mr-1 mb-1 align-top",children:Object(g.jsx)("input",{type:"text",name:"keyword",id:"search",placeholder:T["menu.search"],onKeyPress:function(e){return z(e)}})})]}),Object(g.jsxs)("div",{className:"float-md-right pt-1",children:[Object(g.jsx)("span",{className:"text-muted text-small mr-1",children:"".concat(S,"-").concat(I," of ").concat(C," ")}),Object(g.jsxs)(m.a,{className:"d-inline-block",children:[Object(g.jsx)(o.a,{caret:!0,color:"outline-dark",size:"xs",children:v}),Object(g.jsx)(d.a,{right:!0,children:A.map((function(e,t){return Object(g.jsx)(j.a,{onClick:function(){return N(e)},children:e},t)}))})]})]})]})]}),Object(g.jsx)(x.b,{className:"mb-5"})]})})}))},1034:function(e,t,c){"use strict";c(8);var a=c(937),n=c(902),s=c(903),i=c(1605),l=c(487),r=c(1606),o=c(904),d=c(756),j=c(422),b=c(448),m=c(140),u=c(25);t.a=function(e){var t=e.modalOpen,c=e.toggleModal,x=e.categories;return Object(u.jsxs)(a.a,{isOpen:t,toggle:c,wrapClassName:"modal-right",backdrop:"static",children:[Object(u.jsx)(n.a,{toggle:c,children:Object(u.jsx)(m.a,{id:"pages.add-new-modal-title"})}),Object(u.jsxs)(s.a,{children:[Object(u.jsx)(i.a,{children:Object(u.jsx)(m.a,{id:"pages.product-name"})}),Object(u.jsx)(l.a,{}),Object(u.jsx)(i.a,{className:"mt-4",children:Object(u.jsx)(m.a,{id:"pages.category"})}),Object(u.jsx)(j.a,{components:{Input:b.a},className:"react-select",classNamePrefix:"react-select",name:"form-field-name",options:x}),Object(u.jsx)(i.a,{className:"mt-4",children:Object(u.jsx)(m.a,{id:"pages.description"})}),Object(u.jsx)(l.a,{type:"textarea",name:"text",id:"exampleText"}),Object(u.jsx)(i.a,{className:"mt-4",children:Object(u.jsx)(m.a,{id:"pages.status"})}),Object(u.jsx)(r.a,{type:"radio",id:"exCustomRadio",name:"customRadio",label:"ON HOLD"}),Object(u.jsx)(r.a,{type:"radio",id:"exCustomRadio2",name:"customRadio",label:"PROCESSED"})]}),Object(u.jsxs)(o.a,{children:[Object(u.jsx)(d.a,{color:"secondary",outline:!0,onClick:c,children:Object(u.jsx)(m.a,{id:"pages.cancel"})}),Object(u.jsx)(d.a,{color:"primary",onClick:c,children:Object(u.jsx)(m.a,{id:"pages.submit"})})," "]})]})}},1036:function(e,t,c){"use strict";var a=c(1353),n=c.n(a),s=c(8);t.a=function(e,t){var c=Object(s.useRef)(null);c.current=t,Object(s.useEffect)((function(){return n.a.bind(e,(function(e,t){"function"===typeof c.current&&c.current(e,t),e.preventDefault()})),function(){n.a.unbind(e)}}),[e])}},1102:function(e,t,c){"use strict";var a=c(8),n=c.n(a),s=c(877),i=c(821),l=c(581),r=c(25),o=function(e){var t=e.onContextMenu,c=e.onContextMenuClick;return Object(r.jsxs)(l.a,{id:"menu_id",onShow:function(e){return t(e,e.detail.data)},children:[Object(r.jsxs)(l.c,{onClick:c,data:{action:"copy"},children:[Object(r.jsx)("i",{className:"simple-icon-docs"})," ",Object(r.jsx)("span",{children:"Copy"})]}),Object(r.jsxs)(l.c,{onClick:c,data:{action:"move"},children:[Object(r.jsx)("i",{className:"simple-icon-drawer"})," ",Object(r.jsx)("span",{children:"Move to archive"})]}),Object(r.jsxs)(l.c,{onClick:c,data:{action:"delete"},children:[Object(r.jsx)("i",{className:"simple-icon-trash"})," ",Object(r.jsx)("span",{children:"Delete"})]})]})},d=c(290),j=c(527),b=c(1606),m=c(149),u=c(109),x=c.n(u),h=c(163),O=function(e){var t=e.product,c=e.isSelect,a=e.collect,n=e.onCheckItem;return Object(r.jsx)(h.a,{xxs:"12",className:"mb-3",children:Object(r.jsx)(l.b,{id:"menu_id",data:t.id,collect:a,children:Object(r.jsx)(d.a,{onClick:function(e){return n(e,t.id)},className:x()("d-flex flex-row",{active:c}),children:Object(r.jsxs)("div",{className:"pl-2 d-flex flex-grow-1 min-width-zero",children:[Object(r.jsxs)("div",{className:"card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center",children:[Object(r.jsx)(m.b,{to:"?p=".concat(t.id),className:"w-40 w-sm-100",children:Object(r.jsx)("p",{className:"list-item-heading mb-1 truncate",children:t.title})}),Object(r.jsx)("p",{className:"mb-1 text-muted text-small w-15 w-sm-100",children:t.category}),Object(r.jsx)("p",{className:"mb-1 text-muted text-small w-15 w-sm-100",children:t.date}),Object(r.jsx)("div",{className:"w-15 w-sm-100",children:Object(r.jsx)(j.a,{color:t.statusColor,pill:!0,children:t.status})})]}),Object(r.jsx)("div",{className:"custom-control custom-checkbox pl-1 align-self-center pr-4",children:Object(r.jsx)(b.a,{className:"item-check mb-0",type:"checkbox",id:"check_".concat(t.id),checked:c,onChange:function(){},label:""})})]})})})})},p=n.a.memo(O),g=c(1035),f=c(332),k=c(595),N=c(913),v=function(e){var t=e.product,c=e.isSelect,a=e.collect,n=e.onCheckItem;return Object(r.jsx)(h.a,{sm:"6",lg:"4",xl:"3",className:"mb-3",children:Object(r.jsx)(l.b,{id:"menu_id",data:t.id,collect:a,children:Object(r.jsxs)(d.a,{onClick:function(e){return n(e,t.id)},className:x()({active:c}),children:[Object(r.jsxs)("div",{className:"position-relative",children:[Object(r.jsx)(m.b,{to:"?p=".concat(t.id),className:"w-40 w-sm-100",children:Object(r.jsx)(g.a,{top:!0,alt:t.title,src:t.img})}),Object(r.jsx)(j.a,{color:t.statusColor,pill:!0,className:"position-absolute badge-top-left",children:t.status})]}),Object(r.jsx)(f.a,{children:Object(r.jsxs)(s.a,{children:[Object(r.jsx)(h.a,{xxs:"2",children:Object(r.jsx)(b.a,{className:"item-check mb-0",type:"checkbox",id:"check_".concat(t.id),checked:c,onChange:function(){},label:""})}),Object(r.jsxs)(h.a,{xxs:"10",className:"mb-3",children:[Object(r.jsx)(k.a,{children:t.title}),Object(r.jsx)(N.a,{className:"text-muted text-small mb-0 font-weight-light",children:t.date})]})]})})]})})},t.id)},C=n.a.memo(v),w=function(e){var t=e.product,c=e.isSelect,a=e.collect,n=e.onCheckItem;return Object(r.jsx)(h.a,{xxs:"12",className:"mb-3",children:Object(r.jsx)(l.b,{id:"menu_id",data:t.id,collect:a,children:Object(r.jsxs)(d.a,{onClick:function(e){return n(e,t.id)},className:x()("d-flex flex-row",{active:c}),children:[Object(r.jsx)(m.b,{to:"?p=".concat(t.id),className:"d-flex",children:Object(r.jsx)("img",{alt:t.title,src:t.img,className:"list-thumbnail responsive border-0 card-img-left"})}),Object(r.jsxs)("div",{className:"pl-2 d-flex flex-grow-1 min-width-zero",children:[Object(r.jsxs)("div",{className:"card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center",children:[Object(r.jsx)(m.b,{to:"?p=".concat(t.id),className:"w-40 w-sm-100",children:Object(r.jsx)("p",{className:"list-item-heading mb-1 truncate",children:t.title})}),Object(r.jsx)("p",{className:"mb-1 text-muted text-small w-15 w-sm-100",children:t.category}),Object(r.jsx)("p",{className:"mb-1 text-muted text-small w-15 w-sm-100",children:t.date}),Object(r.jsx)("div",{className:"w-15 w-sm-100",children:Object(r.jsx)(j.a,{color:t.statusColor,pill:!0,children:t.status})})]}),Object(r.jsx)("div",{className:"custom-control custom-checkbox pl-1 align-self-center pr-4",children:Object(r.jsx)(b.a,{className:"item-check mb-0",type:"checkbox",id:"check_".concat(t.id),checked:c,onChange:function(){},label:""})})]})]})})},t.id)},y=n.a.memo(w);function S(e){return{data:e.data}}var I=function(e){var t=e.items,c=e.displayMode,a=e.selectedItems,n=e.onCheckItem,l=e.currentPage,d=e.totalPage,j=e.onContextMenuClick,b=e.onContextMenu,m=e.onChangePage;return Object(r.jsxs)(s.a,{children:[t.map((function(e){return"imagelist"===c?Object(r.jsx)(C,{product:e,isSelect:a.includes(e.id),collect:S,onCheckItem:n},e.id):"thumblist"===c?Object(r.jsx)(y,{product:e,isSelect:a.includes(e.id),collect:S,onCheckItem:n},e.id):Object(r.jsx)(p,{product:e,isSelect:a.includes(e.id),onCheckItem:n,collect:S},e.id)})),Object(r.jsx)(i.a,{currentPage:l,totalPage:d,onChangePage:function(e){return m(e)}}),Object(r.jsx)(o,{onContextMenuClick:j,onContextMenu:b})]})};t.a=n.a.memo(I)},170:function(e,t,c){"use strict";c(8);var a=c(299),n=c(300),s=c(149),i=c(140),l=c(10),r=c(25),o=function(e){return"/".concat(e)===l.b?Object(r.jsx)(i.a,{id:"menu.home"}):Object(r.jsx)(i.a,{id:"menu.".concat(e)})},d=function(e,t){return e.split(t)[0]+t},j=function(e){var t=e.match.path.substr(1),c=t.split("/");return c[c.length-1].indexOf(":")>-1&&(c=c.filter((function(e){return-1===e.indexOf(":")}))),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(a.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block",children:c.map((function(e,a){return Object(r.jsx)(n.a,{active:c.length===a+1,children:c.length!==a+1?Object(r.jsx)(s.b,{to:"/".concat(d(t,e)),children:o(e)}):o(e)},a)}))})})};t.a=function(e){var t=e.heading,c=e.match;return Object(r.jsxs)(r.Fragment,{children:[t&&Object(r.jsx)("h1",{style:{marginBottom:"0rem"},children:Object(r.jsx)(i.a,{id:t})}),Object(r.jsx)(j,{match:c})]})}},1898:function(e,t,c){"use strict";c.r(t);var a=c(112),n=c(4),s=c(1),i=c(12),l=c(99),r=c(8),o=c(1182),d=c.n(o),j=c(10),b=c(1033),m=c(1034),u=c(1102),x=c(1036),h=c(25),O=function(e,t,c){for(var a=0;a<t.length;a+=1)if(t[a][c]===e)return a;return-1},p="".concat(j.q,"/cakes/paging"),g=[{column:"title",label:"Product Name"},{column:"category",label:"Category"},{column:"status",label:"Status"}],f=[4,8,12,20],k=[{label:"Cakes",value:"Cakes",key:0},{label:"Cupcakes",value:"Cupcakes",key:1},{label:"Desserts",value:"Desserts",key:2}];t.default=function(e){var t=e.match,c=Object(r.useState)(!1),o=Object(l.a)(c,2),j=o[0],N=o[1],v=Object(r.useState)("thumblist"),C=Object(l.a)(v,2),w=C[0],y=C[1],S=Object(r.useState)(1),I=Object(l.a)(S,2),M=I[0],P=I[1],z=Object(r.useState)(8),E=Object(l.a)(z,2),A=E[0],D=E[1],L=Object(r.useState)({column:"title",label:"Product Name"}),_=Object(l.a)(L,2),R=_[0],B=_[1],K=Object(r.useState)(!1),F=Object(l.a)(K,2),J=F[0],q=F[1],H=Object(r.useState)(0),T=Object(l.a)(H,2),G=T[0],Q=T[1],U=Object(r.useState)(1),V=Object(l.a)(U,2),W=V[0],X=V[1],Y=Object(r.useState)(""),Z=Object(l.a)(Y,2),$=Z[0],ee=Z[1],te=Object(r.useState)([]),ce=Object(l.a)(te,2),ae=ce[0],ne=ce[1],se=Object(r.useState)([]),ie=Object(l.a)(se,2),le=ie[0],re=ie[1],oe=Object(r.useState)(null),de=Object(l.a)(oe,2),je=de[0],be=de[1];Object(r.useEffect)((function(){P(1)}),[A,R]),Object(r.useEffect)((function(){function e(){return(e=Object(i.a)(Object(n.a)().mark((function e(){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d.a.get("".concat(p,"?pageSize=").concat(A,"&currentPage=").concat(M,"&orderBy=").concat(R.column,"&search=").concat($)).then((function(e){return e.data})).then((function(e){X(e.totalPage),re(e.data.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{img:e.img.replace("img/","img/products/")})}))),ne([]),Q(e.totalItem),N(!0)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[A,M,R,$]);var me=function(e){return ae.length>=le.length?e&&ne([]):ne(le.map((function(e){return e.id}))),document.activeElement.blur(),!1};Object(x.a)(["ctrl+a","command+a"],(function(){me(!1)})),Object(x.a)(["ctrl+d","command+d"],(function(){return ne([]),!1}));var ue=(M-1)*A,xe=M*A;return j?Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"disable-text-selection",children:[Object(h.jsx)(b.a,{heading:"menu.thumb-list",displayMode:w,changeDisplayMode:y,handleChangeSelectAll:me,changeOrderBy:function(e){B(g.find((function(t){return t.column===e})))},changePageSize:D,selectedPageSize:A,totalItemCount:G,selectedOrderOption:R,match:t,startIndex:ue,endIndex:xe,selectedItemsLength:ae?ae.length:0,itemsLength:le?le.length:0,onSearchKey:function(e){"Enter"===e.key&&ee(e.target.value.toLowerCase())},orderOptions:g,pageSizes:f,toggleModal:function(){return q(!J)}}),Object(h.jsx)(m.a,{modalOpen:J,toggleModal:function(){return q(!J)},categories:k}),Object(h.jsx)(u.a,{items:le,displayMode:w,selectedItems:ae,onCheckItem:function(e,t){if("A"===e.target.tagName||e.target.parentElement&&"A"===e.target.parentElement.tagName)return!0;null===je&&be(t);var c=Object(a.a)(ae);if(c.includes(t)?c=c.filter((function(e){return e!==t})):c.push(t),ne(c),e.shiftKey){var n=Object(a.a)(le),s=O(t,n,"id"),i=O(je,n,"id");n=n.slice(Math.min(s,i),Math.max(s,i)+1),ae.push.apply(ae,Object(a.a)(n.map((function(e){return e.id})))),c=Array.from(new Set(ae)),ne(c)}return document.activeElement.blur(),!1},currentPage:M,totalPage:W,onContextMenuClick:function(e,t){console.log("onContextMenuClick - selected items",ae),console.log("onContextMenuClick - action : ",t.action)},onContextMenu:function(e,t){var c=t.data;return ae.includes(c)||ne([c]),!0},onChangePage:P})]})}):Object(h.jsx)("div",{className:"loading"})}},448:function(e,t,c){"use strict";var a=c(1),n=(c(8),c(1286)),s=c(25);t.a=function(e){var t=Object(a.a)({},e);return delete t.autoCorrect,delete t.autoCapitalize,Object(s.jsx)(n.f.Input,Object(a.a)({},t))}},821:function(e,t,c){"use strict";c(8);var a=c(1261),n=c(1262),s=c(1627),i=c(163),l=c(25);t.a=function(e){var t=e.totalPage,c=void 0===t?0:t,r=e.currentPage,o=void 0===r?1:r,d=e.numberLimit,j=void 0===d?5:d,b=e.lastIsActive,m=void 0===b||b,u=e.firstIsActive,x=void 0===u||u,h=e.onChangePage,O=1,p=j;j>c?(O=1,p=c):o<=parseInt(j/2,10)?(O=1,p=j):o+parseInt(j/2,10)<=c?(O=o-parseInt(j/2,10),p=o+parseInt(j/2,10)):(O=c-(j-1),p=c);for(var g=[],f=O=0===O?1:O;f<=p;f+=1)g.push(f);var k=o<=1?"disabled":"",N=o>=c?"disabled":"",v=o<=1?"disabled":"",C=o>=c?"disabled":"";return c>1?Object(l.jsx)(i.a,{xxs:"12",className:"mt-3 mb-3",children:Object(l.jsxs)(a.a,{className:"pagination justify-content-center",children:[x&&Object(l.jsx)(n.a,{className:"page-item ".concat(k),children:Object(l.jsx)(s.a,{className:"page-link first c-pointer",onClick:function(){return h(1)},children:Object(l.jsx)("i",{className:"simple-icon-control-start"})})}),Object(l.jsx)(n.a,{className:"page-item ".concat(v),children:Object(l.jsx)(s.a,{className:"page-link prev c-pointer",onClick:function(){return h(o-1)},children:Object(l.jsx)("i",{className:"simple-icon-arrow-left"})})}),g.map((function(e){return Object(l.jsx)(n.a,{className:"page-item ".concat(o===e&&"active"),children:Object(l.jsx)(s.a,{className:"page-link c-pointer",onClick:function(){return h(e)},children:e})},e)})),Object(l.jsx)(n.a,{className:"page-item ".concat(C),children:Object(l.jsx)(s.a,{className:"page-link next c-pointer",onClick:function(){return h(o+1)},children:Object(l.jsx)("i",{className:"simple-icon-arrow-right"})})}),m&&Object(l.jsx)(n.a,{className:"page-item ".concat(N),children:Object(l.jsx)(s.a,{className:"page-link last c-pointer",onClick:function(){return h(c)},children:Object(l.jsx)("i",{className:"simple-icon-control-end"})})})]})}):Object(l.jsx)(i.a,{xxs:"12",className:"mt-2"})}}}]);
//# sourceMappingURL=product-thumb-list.3ede7471.chunk.js.map