(this["webpackJsonpklw-bank"]=this["webpackJsonpklw-bank"]||[]).push([[74],{170:function(e,t,a){"use strict";a(8);var n=a(299),s=a(300),o=a(149),c=a(140),i=a(10),r=a(25),l=function(e){return"/".concat(e)===i.b?Object(r.jsx)(c.a,{id:"menu.home"}):Object(r.jsx)(c.a,{id:"menu.".concat(e)})},d=function(e,t){return e.split(t)[0]+t},u=function(e){var t=e.match.path.substr(1),a=t.split("/");return a[a.length-1].indexOf(":")>-1&&(a=a.filter((function(e){return-1===e.indexOf(":")}))),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(n.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block",children:a.map((function(e,n){return Object(r.jsx)(s.a,{active:a.length===n+1,children:a.length!==n+1?Object(r.jsx)(o.b,{to:"/".concat(d(t,e)),children:l(e)}):l(e)},n)}))})})};t.a=function(e){var t=e.heading,a=e.match;return Object(r.jsxs)(r.Fragment,{children:[t&&Object(r.jsx)("h1",{style:{marginBottom:"0rem"},children:Object(r.jsx)(c.a,{id:t})}),Object(r.jsx)(u,{match:a})]})}},2164:function(e,t,a){"use strict";a.r(t);var n=a(112),s=a(99),o=a(8),c=a.n(o),i=a(36),r=a(867),l=a(877),d=a(756),u=a(679),p=a(1606),b=a(1614),m=a(1616),h=a(1633),j=a(1131),f=a(1613),O=a(140),g=a(163),x=a(170),v=a(2),y=a(290),C=a(332),N=a(527),k=a(149),T=a(10),E=a(25),M=function(e){var t=e.item,a=e.handleCheckChange,n=e.isSelected;return Object(E.jsx)(g.a,{xxs:"12",children:Object(E.jsx)(y.a,{className:"card d-flex flex-row mb-3",children:Object(E.jsxs)("div",{className:"d-flex flex-grow-1 min-width-zero",children:[Object(E.jsxs)(C.a,{className:"align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center",children:[Object(E.jsxs)(k.b,{to:"".concat(T.b,"/applications/survey/").concat(t.id),className:"list-item-heading mb-0 truncate w-40 w-xs-100  mb-1 mt-1",children:[Object(E.jsx)("i",{className:"".concat("COMPLETED"===t.status?"simple-icon-check heading-icon":"simple-icon-refresh heading-icon")}),Object(E.jsx)("span",{className:"align-middle d-inline-block",children:t.title})]}),Object(E.jsx)("p",{className:"mb-1 text-muted text-small w-15 w-xs-100",children:t.category}),Object(E.jsx)("p",{className:"mb-1 text-muted text-small w-15 w-xs-100",children:t.createDate}),Object(E.jsx)("div",{className:"w-15 w-xs-100",children:Object(E.jsx)(N.a,{color:t.labelColor,pill:!0,children:t.label})})]}),Object(E.jsx)("div",{className:"custom-control custom-checkbox pl-1 align-self-center mr-4",children:Object(E.jsx)(p.a,{className:"itemCheck mb-0",type:"checkbox",id:"check_".concat(t.id),checked:n,onChange:function(e){return a(e,t.id)},label:""})})]})})})},w=c.a.memo(M),A=a(1),S=a(937),_=a(902),P=a(903),I=a(1605),F=a(487),D=a(904),B=a(422),L=a(448),z={title:"",label:{},category:{},status:"ACTIVE"},R=Object(i.b)((function(e){var t=e.surveyListApp;return{labels:t.labels,categories:t.categories}}),{addSurveyItemAction:v.eb})((function(e){var t=e.modalOpen,a=e.toggleModal,n=e.labels,c=e.categories,i=e.addSurveyItemAction,r=Object(o.useState)(z),l=Object(s.a)(r,2),u=l[0],b=l[1];return Object(E.jsxs)(S.a,{isOpen:t,toggle:a,wrapClassName:"modal-right",backdrop:"static",children:[Object(E.jsx)(_.a,{toggle:a,children:Object(E.jsx)(O.a,{id:"survey.add-new-title"})}),Object(E.jsxs)(P.a,{children:[Object(E.jsx)(I.a,{className:"mt-4",children:Object(E.jsx)(O.a,{id:"survey.title"})}),Object(E.jsx)(F.a,{type:"text",defaultValue:u.title,onChange:function(e){return b(Object(A.a)(Object(A.a)({},u),{},{title:e.target.value}))}}),Object(E.jsx)(I.a,{className:"mt-4",children:Object(E.jsx)(O.a,{id:"survey.category"})}),Object(E.jsx)(B.a,{components:{Input:L.a},className:"react-select",classNamePrefix:"react-select",name:"form-field-name",options:c.map((function(e,t){return{label:e,value:e,key:t}})),value:u.category,onChange:function(e){return b(Object(A.a)(Object(A.a)({},u),{},{category:e}))}}),Object(E.jsx)(I.a,{className:"mt-4",children:Object(E.jsx)(O.a,{id:"survey.label"})}),Object(E.jsx)(B.a,{components:{Input:L.a},className:"react-select",classNamePrefix:"react-select",name:"form-field-name",options:n.map((function(e,t){return{label:e.label,value:e.label,key:t,color:e.color}})),value:u.label,onChange:function(e){return b(Object(A.a)(Object(A.a)({},u),{},{label:e}))}}),Object(E.jsx)(I.a,{className:"mt-4",children:Object(E.jsx)(O.a,{id:"survey.status"})}),Object(E.jsx)(p.a,{type:"radio",id:"exCustomRadio",name:"customRadio",label:"COMPLETED",checked:"COMPLETED"===u.status,onChange:function(e){return b(Object(A.a)(Object(A.a)({},u),{},{status:"on"===e.target.value?"COMPLETED":"ACTIVE"}))}}),Object(E.jsx)(p.a,{type:"radio",id:"exCustomRadio2",name:"customRadio2",label:"ACTIVE",checked:"ACTIVE"===u.status,onChange:function(e){return b(Object(A.a)(Object(A.a)({},u),{},{status:"on"!==e.target.value?"COMPLETED":"ACTIVE"}))}})]}),Object(E.jsxs)(D.a,{children:[Object(E.jsx)(d.a,{color:"secondary",outline:!0,onClick:a,children:Object(E.jsx)(O.a,{id:"survey.cancel"})}),Object(E.jsx)(d.a,{color:"primary",onClick:function(){return function(){var e={title:u.title,label:u.label.value,labelColor:u.label.color,category:u.category.value,status:u.status};i(e),a(),b(z)}()},children:Object(E.jsx)(O.a,{id:"survey.submit"})})]})]})})),V=a(1262),K=a(558),W=a.n(K),U=a(109),q=a.n(U),J=a(797),X=Object(i.b)((function(e){var t=e.surveyListApp;return{surveyItems:t.surveyItems,filter:t.filter,allSurveyItems:t.allSurveyItems,loading:t.loading,labels:t.labels,categories:t.categories}}),{getSurveyListWithFilterAction:v.tb})((function(e){var t=e.surveyItems,a=e.filter,n=e.allSurveyItems,s=e.loading,o=e.labels,c=e.categories,i=e.getSurveyListWithFilterAction,r=function(e,t){i(e,t)};return Object(E.jsx)(J.a,{children:Object(E.jsx)(W.a,{options:{suppressScrollX:!0,wheelPropagation:!1},children:Object(E.jsxs)("div",{className:"p-4",children:[Object(E.jsxs)("p",{className:"text-muted text-small",children:[Object(E.jsx)(O.a,{id:"survey.status"}),"Status"]}),Object(E.jsxs)("ul",{className:"list-unstyled mb-5",children:[Object(E.jsx)(V.a,{className:q()({active:!a}),children:Object(E.jsxs)(k.b,{to:"#",onClick:function(){return r("","")},location:{},children:[Object(E.jsx)("i",{className:"simple-icon-reload"}),Object(E.jsx)(O.a,{id:"survey.all-surveys"}),Object(E.jsx)("span",{className:"float-right",children:s&&n.length})]})}),Object(E.jsx)(V.a,{className:q()({active:a&&"status"===a.column&&"ACTIVE"===a.value}),children:Object(E.jsxs)(k.b,{to:"#",location:{},onClick:function(){return r("status","ACTIVE")},children:[Object(E.jsx)("i",{className:"simple-icon-refresh"}),Object(E.jsx)(O.a,{id:"survey.active-surveys"}),Object(E.jsx)("span",{className:"float-right",children:s&&t.filter((function(e){return"ACTIVE"===e.status})).length})]})}),Object(E.jsx)(V.a,{className:q()({active:a&&"status"===a.column&&"COMPLETED"===a.value}),children:Object(E.jsxs)(k.b,{to:"#",location:{},onClick:function(){return r("status","COMPLETED")},children:[Object(E.jsx)("i",{className:"simple-icon-check"}),Object(E.jsx)(O.a,{id:"survey.completed-surveys"}),Object(E.jsx)("span",{className:"float-right",children:s&&t.filter((function(e){return"COMPLETED"===e.status})).length})]})})]}),Object(E.jsx)("p",{className:"text-muted text-small",children:Object(E.jsx)(O.a,{id:"survey.categories"})}),Object(E.jsx)("ul",{className:"list-unstyled mb-5",children:c.map((function(e,t){return Object(E.jsx)(V.a,{children:Object(E.jsx)("div",{onClick:function(){return r("category",e)},children:Object(E.jsxs)("div",{className:"custom-control custom-radio",children:[Object(E.jsx)("input",{type:"radio",className:"custom-control-input",defaultChecked:a&&"category"===a.column&&a.value===e}),Object(E.jsx)("label",{className:"custom-control-label",children:e})]})})},t)}))}),Object(E.jsx)("p",{className:"text-muted text-small",children:Object(E.jsx)(O.a,{id:"survey.labels"})}),Object(E.jsx)("div",{children:o.map((function(e,t){return Object(E.jsx)("p",{className:"d-sm-inline-block mb-1",children:Object(E.jsx)(k.b,{to:"#",location:{},onClick:function(){return r("label",e.label)},children:Object(E.jsx)(N.a,{className:"mb-1",color:"".concat(a&&"label"===a.column&&a.value===e.label?e.color:"outline-".concat(e.color)),pill:!0,children:e.label})})},t)}))})]})})})})),$=function(e,t,a){for(var n=0;n<t.length;n+=1)if(t[n][a]===e)return n;return-1};t.default=Object(r.c)(Object(i.b)((function(e){var t=e.surveyListApp;return{surveyItems:t.surveyItems,searchKeyword:t.searchKeyword,loading:t.loading,orderColumn:t.orderColumn,orderColumns:t.orderColumns,selectedItems:t.selectedItems}}),{getSurveyListAction:v.rb,getSurveyListWithOrderAction:v.ub,getSurveyListSearchAction:v.sb,selectedSurveyItemsChangeAction:v.Fb})((function(e){var t=e.match,a=e.intl,c=e.surveyItems,i=e.searchKeyword,r=e.loading,v=e.orderColumn,y=e.orderColumns,C=e.selectedItems,N=e.getSurveyListAction,k=e.getSurveyListWithOrderAction,T=e.getSurveyListSearchAction,M=e.selectedSurveyItemsChangeAction,A=Object(o.useState)(!1),S=Object(s.a)(A,2),_=S[0],P=S[1],I=Object(o.useState)(!1),F=Object(s.a)(I,2),D=F[0],B=F[1],L=Object(o.useState)(null),z=Object(s.a)(L,2),V=z[0],K=z[1],W=Object(o.useState)(!1),U=Object(s.a)(W,2),q=U[0],J=U[1];Object(o.useEffect)((function(){return document.body.classList.add("right-menu"),N(),function(){document.body.classList.remove("right-menu")}}),[N]);var G=function(e,t){null==V&&K(t);var a=Object.assign([],C);if(a.includes(t)?a=a.filter((function(e){return e!==t})):a.push(t),M(a),e.shiftKey){var s,o=c,i=$(t,o,"id"),r=$(V,o,"id");o=o.slice(Math.min(i,r),Math.max(i,r)+1),(s=a).push.apply(s,Object(n.a)(o.map((function(e){return e.id})))),a=Array.from(new Set(a)),M(a)}},H=function(){r&&(C.length>=c.length?M([]):M(c.map((function(e){return e.id}))))},Q=a.messages;return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(l.a,{className:"app-row survey-app",children:Object(E.jsxs)(g.a,{xxs:"12",children:[Object(E.jsxs)("div",{className:"mb-2",children:[Object(E.jsx)("h1",{children:Object(E.jsx)(O.a,{id:"menu.survey"})}),r&&Object(E.jsxs)("div",{className:"text-zero top-right-button-container",children:[Object(E.jsx)(d.a,{color:"primary",size:"lg",className:"top-right-button mr-1",onClick:function(){return P(!0)},children:Object(E.jsx)(O.a,{id:"survey.add-new"})}),Object(E.jsxs)(u.a,{isOpen:D,toggle:function(){return B(!D)},children:[Object(E.jsx)("div",{className:"btn btn-primary btn-lg pl-4 pr-0 check-button check-all",children:Object(E.jsx)(p.a,{className:"custom-checkbox mb-0 d-inline-block",type:"checkbox",id:"checkAll",checked:C.length>=c.length,onClick:function(){return H()},onChange:function(){return H()},label:Object(E.jsx)("span",{className:"custom-control-label ".concat(C.length>0&&C.length<c.length?"indeterminate":"")})})}),Object(E.jsx)(b.a,{caret:!0,color:"primary",className:"dropdown-toggle-split btn-lg"}),Object(E.jsxs)(m.a,{right:!0,children:[Object(E.jsx)(h.a,{children:Object(E.jsx)(O.a,{id:"survey.delete"})}),Object(E.jsx)(h.a,{children:Object(E.jsx)(O.a,{id:"survey.another-action"})})]})]})]}),Object(E.jsx)(x.a,{match:t})]}),Object(E.jsxs)("div",{className:"mb-2",children:[Object(E.jsxs)(d.a,{color:"empty",className:"pt-0 pl-0 d-inline-block d-md-none",onClick:function(){J(!q)},children:[Object(E.jsx)(O.a,{id:"survey.display-options"})," ",Object(E.jsx)("i",{className:"simple-icon-arrow-down align-middle"})]}),Object(E.jsx)(j.a,{id:"displayOptions",className:"d-md-block mb-2",isOpen:q,children:Object(E.jsxs)("div",{className:"d-block d-md-inline-block",children:[Object(E.jsxs)(f.a,{className:"mr-1 float-md-left btn-group mb-1",children:[Object(E.jsxs)(b.a,{caret:!0,color:"outline-dark",size:"xs",children:[Object(E.jsx)(O.a,{id:"survey.orderby"}),v?v.label:""]}),Object(E.jsx)(m.a,{children:y.map((function(e,t){return Object(E.jsx)(h.a,{onClick:function(){return k(e.column)},children:e.label},t)}))})]}),Object(E.jsx)("div",{className:"search-sm d-inline-block float-md-left mr-1 mb-1 align-top",children:Object(E.jsx)("input",{type:"text",name:"keyword",id:"search",placeholder:Q["menu.search"],defaultValue:i,onKeyPress:function(e){"Enter"===e.key&&T(e.target.value)}})})]})})]}),Object(E.jsx)(g.b,{className:"mb-5"}),Object(E.jsx)(l.a,{children:r?c.map((function(e,t){return Object(E.jsx)(w,{item:e,handleCheckChange:G,isSelected:!!r&&C.includes(e.id)},"todo_item_".concat(t))})):Object(E.jsx)("div",{className:"loading"})})]})}),r&&Object(E.jsx)(X,{}),Object(E.jsx)(R,{toggleModal:function(){return P(!_)},modalOpen:_})]})})))},448:function(e,t,a){"use strict";var n=a(1),s=(a(8),a(1286)),o=a(25);t.a=function(e){var t=Object(n.a)({},e);return delete t.autoCorrect,delete t.autoCapitalize,Object(o.jsx)(s.f.Input,Object(n.a)({},t))}},487:function(e,t,a){"use strict";var n=a(14),s=a(18),o=a(120),c=a(190),i=a(8),r=a.n(i),l=a(67),d=a.n(l),u=a(109),p=a.n(u),b=a(113),m=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:b.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},j=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(o.a)(a)),a.focus=a.focus.bind(Object(o.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.type,c=e.bsSize,i=e.valid,l=e.invalid,d=e.tag,u=e.addon,h=e.plaintext,j=e.innerRef,f=Object(s.a)(e,m),O=["radio","checkbox"].indexOf(o)>-1,g=new RegExp("\\D","g"),x=d||("select"===o||"textarea"===o?o:"input"),v="form-control";h?(v+="-plaintext",x=d||"input"):"file"===o?v+="-file":"range"===o?v+="-range":O&&(v=u?null:"form-check-input"),f.size&&g.test(f.size)&&(Object(b.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=f.size,delete f.size);var y=Object(b.mapToCssModules)(p()(t,l&&"is-invalid",i&&"is-valid",!!c&&"form-control-"+c,v),a);return("input"===x||d&&"function"===typeof d)&&(f.type=o),f.children&&!h&&"select"!==o&&"string"===typeof x&&"select"!==x&&(Object(b.warnOnce)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete f.children),r.a.createElement(x,Object(n.a)({},f,{ref:j,className:y,"aria-invalid":l}))},t}(r.a.Component);j.propTypes=h,j.defaultProps={type:"text"},t.a=j},527:function(e,t,a){"use strict";var n=a(14),s=a(18),o=a(8),c=a.n(o),i=a(67),r=a.n(i),l=a(109),d=a.n(l),u=a(113),p=["className","cssModule","color","innerRef","pill","tag"],b={color:r.a.string,pill:r.a.bool,tag:u.tagPropType,innerRef:r.a.oneOfType([r.a.object,r.a.func,r.a.string]),children:r.a.node,className:r.a.string,cssModule:r.a.object},m=function(e){var t=e.className,a=e.cssModule,o=e.color,i=e.innerRef,r=e.pill,l=e.tag,b=Object(s.a)(e,p),m=Object(u.mapToCssModules)(d()(t,"badge","badge-"+o,!!r&&"badge-pill"),a);return b.href&&"span"===l&&(l="a"),c.a.createElement(l,Object(n.a)({},b,{className:m,ref:i}))};m.propTypes=b,m.defaultProps={color:"secondary",pill:!1,tag:"span"},t.a=m},679:function(e,t,a){"use strict";var n=a(14),s=a(8),o=a.n(s),c=a(67),i=a.n(c),r=a(583),l={children:i.a.node},d=function(e){return o.a.createElement(r.a,Object(n.a)({group:!0},e))};d.propTypes=l,t.a=d},797:function(e,t,a){"use strict";var n=a(99),s=a(8),o=a(1627),c=a(25);t.a=function(e){var t=e.children,a=Object(s.useRef)(),i=Object(s.useState)(!1),r=Object(n.a)(i,2),l=r[0],d=r[1],u=function(e){if(l){var t=a.current;if(t.contains(e.target)||t===e.target)return;d(!1)}};return Object(s.useEffect)((function(){return["click","touchstart"].forEach((function(e){return document.addEventListener(e,u,!1)})),function(){["click","touchstart"].forEach((function(e){return document.removeEventListener(e,u,!1)}))}}),[l]),Object(c.jsxs)("div",{ref:a,className:"app-menu ".concat(l?"shown":""),children:[t,Object(c.jsx)(o.a,{className:"app-menu-button d-inline-block d-xl-none",onClick:function(){return d(!l)},children:Object(c.jsx)("i",{className:"simple-icon-options"})})]})}},902:function(e,t,a){"use strict";var n=a(14),s=a(18),o=a(8),c=a.n(o),i=a(67),r=a.n(i),l=a(109),d=a.n(l),u=a(113),p=["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","charCode","close"],b={tag:u.tagPropType,wrapTag:u.tagPropType,toggle:r.a.func,className:r.a.string,cssModule:r.a.object,children:r.a.node,closeAriaLabel:r.a.string,charCode:r.a.oneOfType([r.a.string,r.a.number]),close:r.a.object},m=function(e){var t,a=e.className,o=e.cssModule,i=e.children,r=e.toggle,l=e.tag,b=e.wrapTag,m=e.closeAriaLabel,h=e.charCode,j=e.close,f=Object(s.a)(e,p),O=Object(u.mapToCssModules)(d()(a,"modal-header"),o);if(!j&&r){var g="number"===typeof h?String.fromCharCode(h):h;t=c.a.createElement("button",{type:"button",onClick:r,className:Object(u.mapToCssModules)("close",o),"aria-label":m},c.a.createElement("span",{"aria-hidden":"true"},g))}return c.a.createElement(b,Object(n.a)({},f,{className:O}),c.a.createElement(l,{className:Object(u.mapToCssModules)("modal-title",o)},i),j||t)};m.propTypes=b,m.defaultProps={tag:"h5",wrapTag:"div",closeAriaLabel:"Close",charCode:215},t.a=m},903:function(e,t,a){"use strict";var n=a(14),s=a(18),o=a(8),c=a.n(o),i=a(67),r=a.n(i),l=a(109),d=a.n(l),u=a(113),p=["className","cssModule","tag"],b={tag:u.tagPropType,className:r.a.string,cssModule:r.a.object},m=function(e){var t=e.className,a=e.cssModule,o=e.tag,i=Object(s.a)(e,p),r=Object(u.mapToCssModules)(d()(t,"modal-body"),a);return c.a.createElement(o,Object(n.a)({},i,{className:r}))};m.propTypes=b,m.defaultProps={tag:"div"},t.a=m},904:function(e,t,a){"use strict";var n=a(14),s=a(18),o=a(8),c=a.n(o),i=a(67),r=a.n(i),l=a(109),d=a.n(l),u=a(113),p=["className","cssModule","tag"],b={tag:u.tagPropType,className:r.a.string,cssModule:r.a.object},m=function(e){var t=e.className,a=e.cssModule,o=e.tag,i=Object(s.a)(e,p),r=Object(u.mapToCssModules)(d()(t,"modal-footer"),a);return c.a.createElement(o,Object(n.a)({},i,{className:r}))};m.propTypes=b,m.defaultProps={tag:"div"},t.a=m},937:function(e,t,a){"use strict";var n=a(34),s=a(14),o=a(120),c=a(190),i=a(8),r=a.n(i),l=a(67),d=a.n(l),u=a(109),p=a.n(u),b=a(27),m=a.n(b),h=a(113),j={children:d.a.node.isRequired,node:d.a.any},f=function(e){function t(){return e.apply(this,arguments)||this}Object(c.a)(t,e);var a=t.prototype;return a.componentWillUnmount=function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null},a.render=function(){return h.canUseDOM?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),m.a.createPortal(this.props.children,this.props.node||this.defaultNode)):null},t}(r.a.Component);f.propTypes=j;var O=f,g=a(584);function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function y(){}var C=d.a.shape(g.a.propTypes),N={isOpen:d.a.bool,autoFocus:d.a.bool,centered:d.a.bool,scrollable:d.a.bool,size:d.a.string,toggle:d.a.func,keyboard:d.a.bool,role:d.a.string,labelledBy:d.a.string,backdrop:d.a.oneOfType([d.a.bool,d.a.oneOf(["static"])]),onEnter:d.a.func,onExit:d.a.func,onOpened:d.a.func,onClosed:d.a.func,children:d.a.node,className:d.a.string,wrapClassName:d.a.string,modalClassName:d.a.string,backdropClassName:d.a.string,contentClassName:d.a.string,external:d.a.node,fade:d.a.bool,cssModule:d.a.object,zIndex:d.a.oneOfType([d.a.number,d.a.string]),backdropTransition:C,modalTransition:C,innerRef:d.a.oneOfType([d.a.object,d.a.string,d.a.func]),unmountOnClose:d.a.bool,returnFocusAfterClose:d.a.bool,container:h.targetPropType,trapFocus:d.a.bool},k=Object.keys(N),T={isOpen:!1,autoFocus:!0,centered:!1,scrollable:!1,role:"dialog",backdrop:!0,keyboard:!0,zIndex:1050,fade:!0,onOpened:y,onClosed:y,modalTransition:{timeout:h.TransitionTimeouts.Modal},backdropTransition:{mountOnEnter:!0,timeout:h.TransitionTimeouts.Fade},unmountOnClose:!0,returnFocusAfterClose:!0,container:"body",trapFocus:!1},E=function(e){function t(t){var a;return(a=e.call(this,t)||this)._element=null,a._originalBodyPadding=null,a.getFocusableChildren=a.getFocusableChildren.bind(Object(o.a)(a)),a.handleBackdropClick=a.handleBackdropClick.bind(Object(o.a)(a)),a.handleBackdropMouseDown=a.handleBackdropMouseDown.bind(Object(o.a)(a)),a.handleEscape=a.handleEscape.bind(Object(o.a)(a)),a.handleStaticBackdropAnimation=a.handleStaticBackdropAnimation.bind(Object(o.a)(a)),a.handleTab=a.handleTab.bind(Object(o.a)(a)),a.onOpened=a.onOpened.bind(Object(o.a)(a)),a.onClosed=a.onClosed.bind(Object(o.a)(a)),a.manageFocusAfterClose=a.manageFocusAfterClose.bind(Object(o.a)(a)),a.clearBackdropAnimationTimeout=a.clearBackdropAnimationTimeout.bind(Object(o.a)(a)),a.trapFocus=a.trapFocus.bind(Object(o.a)(a)),a.state={isOpen:!1,showStaticBackdropAnimation:!1},a}Object(c.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this.props,t=e.isOpen,a=e.autoFocus,n=e.onEnter;t&&(this.init(),this.setState({isOpen:!0}),a&&this.setFocus()),n&&n(),document.addEventListener("focus",this.trapFocus,!0),this._isMounted=!0},a.componentDidUpdate=function(e,t){if(this.props.isOpen&&!e.isOpen)return this.init(),void this.setState({isOpen:!0});this.props.autoFocus&&this.state.isOpen&&!t.isOpen&&this.setFocus(),this._element&&e.zIndex!==this.props.zIndex&&(this._element.style.zIndex=this.props.zIndex)},a.componentWillUnmount=function(){this.clearBackdropAnimationTimeout(),this.props.onExit&&this.props.onExit(),this._element&&(this.destroy(),(this.props.isOpen||this.state.isOpen)&&this.close()),document.removeEventListener("focus",this.trapFocus,!0),this._isMounted=!1},a.trapFocus=function(e){if(this.props.trapFocus&&this._element&&(!this._dialog||this._dialog.parentNode!==e.target)&&!(this.modalIndex<t.openCount-1)){for(var a=this.getFocusableChildren(),n=0;n<a.length;n++)if(a[n]===e.target)return;a.length>0&&(e.preventDefault(),e.stopPropagation(),a[0].focus())}},a.onOpened=function(e,t){this.props.onOpened(),(this.props.modalTransition.onEntered||y)(e,t)},a.onClosed=function(e){var t=this.props.unmountOnClose;this.props.onClosed(),(this.props.modalTransition.onExited||y)(e),t&&this.destroy(),this.close(),this._isMounted&&this.setState({isOpen:!1})},a.setFocus=function(){this._dialog&&this._dialog.parentNode&&"function"===typeof this._dialog.parentNode.focus&&this._dialog.parentNode.focus()},a.getFocusableChildren=function(){return this._element.querySelectorAll(h.focusableElements.join(", "))},a.getFocusedChild=function(){var e,t=this.getFocusableChildren();try{e=document.activeElement}catch(a){e=t[0]}return e},a.handleBackdropClick=function(e){if(e.target===this._mouseDownElement){e.stopPropagation();var t=this._dialog?this._dialog.parentNode:null;if(t&&e.target===t&&"static"===this.props.backdrop&&this.handleStaticBackdropAnimation(),!this.props.isOpen||!0!==this.props.backdrop)return;t&&e.target===t&&this.props.toggle&&this.props.toggle(e)}},a.handleTab=function(e){if(9===e.which&&!(this.modalIndex<t.openCount-1)){var a=this.getFocusableChildren(),n=a.length;if(0!==n){for(var s=this.getFocusedChild(),o=0,c=0;c<n;c+=1)if(a[c]===s){o=c;break}e.shiftKey&&0===o?(e.preventDefault(),a[n-1].focus()):e.shiftKey||o!==n-1||(e.preventDefault(),a[0].focus())}}},a.handleBackdropMouseDown=function(e){this._mouseDownElement=e.target},a.handleEscape=function(e){this.props.isOpen&&e.keyCode===h.keyCodes.esc&&this.props.toggle&&(this.props.keyboard?(e.preventDefault(),e.stopPropagation(),this.props.toggle(e)):"static"===this.props.backdrop&&(e.preventDefault(),e.stopPropagation(),this.handleStaticBackdropAnimation()))},a.handleStaticBackdropAnimation=function(){var e=this;this.clearBackdropAnimationTimeout(),this.setState({showStaticBackdropAnimation:!0}),this._backdropAnimationTimeout=setTimeout((function(){e.setState({showStaticBackdropAnimation:!1})}),100)},a.init=function(){try{this._triggeringElement=document.activeElement}catch(e){this._triggeringElement=null}this._element||(this._element=document.createElement("div"),this._element.setAttribute("tabindex","-1"),this._element.style.position="relative",this._element.style.zIndex=this.props.zIndex,this._mountContainer=Object(h.getTarget)(this.props.container),this._mountContainer.appendChild(this._element)),this._originalBodyPadding=Object(h.getOriginalBodyPadding)(),Object(h.conditionallyUpdateScrollbar)(),0===t.openCount&&(document.body.className=p()(document.body.className,Object(h.mapToCssModules)("modal-open",this.props.cssModule))),this.modalIndex=t.openCount,t.openCount+=1},a.destroy=function(){this._element&&(this._mountContainer.removeChild(this._element),this._element=null),this.manageFocusAfterClose()},a.manageFocusAfterClose=function(){if(this._triggeringElement){var e=this.props.returnFocusAfterClose;this._triggeringElement.focus&&e&&this._triggeringElement.focus(),this._triggeringElement=null}},a.close=function(){if(t.openCount<=1){var e=Object(h.mapToCssModules)("modal-open",this.props.cssModule),a=new RegExp("(^| )"+e+"( |$)");document.body.className=document.body.className.replace(a," ").trim()}this.manageFocusAfterClose(),t.openCount=Math.max(0,t.openCount-1),Object(h.setScrollbarWidth)(this._originalBodyPadding)},a.renderModalDialog=function(){var e,t=this,a=Object(h.omit)(this.props,k),n="modal-dialog";return r.a.createElement("div",Object(s.a)({},a,{className:Object(h.mapToCssModules)(p()(n,this.props.className,(e={},e["modal-"+this.props.size]=this.props.size,e[n+"-centered"]=this.props.centered,e[n+"-scrollable"]=this.props.scrollable,e)),this.props.cssModule),role:"document",ref:function(e){t._dialog=e}}),r.a.createElement("div",{className:Object(h.mapToCssModules)(p()("modal-content",this.props.contentClassName),this.props.cssModule)},this.props.children))},a.render=function(){var e=this.props.unmountOnClose;if(this._element&&(this.state.isOpen||!e)){var t=!!this._element&&!this.state.isOpen&&!e;this._element.style.display=t?"none":"block";var a=this.props,n=a.wrapClassName,o=a.modalClassName,c=a.backdropClassName,i=a.cssModule,l=a.isOpen,d=a.backdrop,u=a.role,b=a.labelledBy,m=a.external,j=a.innerRef,f={onClick:this.handleBackdropClick,onMouseDown:this.handleBackdropMouseDown,onKeyUp:this.handleEscape,onKeyDown:this.handleTab,style:{display:"block"},"aria-labelledby":b,role:u,tabIndex:"-1"},x=this.props.fade,y=v(v(v({},g.a.defaultProps),this.props.modalTransition),{},{baseClass:x?this.props.modalTransition.baseClass:"",timeout:x?this.props.modalTransition.timeout:0}),C=v(v(v({},g.a.defaultProps),this.props.backdropTransition),{},{baseClass:x?this.props.backdropTransition.baseClass:"",timeout:x?this.props.backdropTransition.timeout:0}),N=d&&(x?r.a.createElement(g.a,Object(s.a)({},C,{in:l&&!!d,cssModule:i,className:Object(h.mapToCssModules)(p()("modal-backdrop",c),i)})):r.a.createElement("div",{className:Object(h.mapToCssModules)(p()("modal-backdrop","show",c),i)}));return r.a.createElement(O,{node:this._element},r.a.createElement("div",{className:Object(h.mapToCssModules)(n)},r.a.createElement(g.a,Object(s.a)({},f,y,{in:l,onEntered:this.onOpened,onExited:this.onClosed,cssModule:i,className:Object(h.mapToCssModules)(p()("modal",o,this.state.showStaticBackdropAnimation&&"modal-static"),i),innerRef:j}),m,this.renderModalDialog()),N))}return null},a.clearBackdropAnimationTimeout=function(){this._backdropAnimationTimeout&&(clearTimeout(this._backdropAnimationTimeout),this._backdropAnimationTimeout=void 0)},t}(r.a.Component);E.propTypes=N,E.defaultProps=T,E.openCount=0;t.a=E}}]);
//# sourceMappingURL=application-survey.f087bca2.chunk.js.map