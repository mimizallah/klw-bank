(this["webpackJsonpklw-bank"]=this["webpackJsonpklw-bank"]||[]).push([[76],{170:function(e,t,a){"use strict";a(8);var n=a(299),s=a(300),o=a(149),c=a(140),i=a(10),l=a(25),r=function(e){return"/".concat(e)===i.b?Object(l.jsx)(c.a,{id:"menu.home"}):Object(l.jsx)(c.a,{id:"menu.".concat(e)})},d=function(e,t){return e.split(t)[0]+t},u=function(e){var t=e.match.path.substr(1),a=t.split("/");return a[a.length-1].indexOf(":")>-1&&(a=a.filter((function(e){return-1===e.indexOf(":")}))),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(n.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block",children:a.map((function(e,n){return Object(l.jsx)(s.a,{active:a.length===n+1,children:a.length!==n+1?Object(l.jsx)(o.b,{to:"/".concat(d(t,e)),children:r(e)}):r(e)},n)}))})})};t.a=function(e){var t=e.heading,a=e.match;return Object(l.jsxs)(l.Fragment,{children:[t&&Object(l.jsx)("h1",{style:{marginBottom:"0rem"},children:Object(l.jsx)(c.a,{id:t})}),Object(l.jsx)(u,{match:a})]})}},2163:function(e,t,a){"use strict";a.r(t);var n=a(112),s=a(99),o=a(8),c=a.n(o),i=a(877),l=a(756),r=a(679),d=a(1606),u=a(1614),p=a(1616),b=a(1633),m=a(1131),h=a(1613),j=a(867),f=a(36),O=a(140),g=a(163),x=a(170),C=a(2),v=a(290),y=a(332),N=a(527),k=a(149),T=a(25),E=function(e){var t=e.item,a=e.handleCheckChange,n=e.isSelected;return Object(T.jsx)(g.a,{xxs:"12",children:Object(T.jsxs)(v.a,{className:"card d-flex mb-3",children:[Object(T.jsxs)("div",{className:"d-flex flex-grow-1 min-width-zero",children:[Object(T.jsxs)(y.a,{className:"align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center",children:[Object(T.jsxs)(k.b,{to:"#",location:{},id:"toggler".concat(t.id),className:"list-item-heading mb-0 truncate w-40 w-xs-100  mb-1 mt-1",children:[Object(T.jsx)("i",{className:"".concat("COMPLETED"===t.status?"simple-icon-check heading-icon":"simple-icon-refresh heading-icon")}),Object(T.jsx)("span",{className:"align-middle d-inline-block",children:t.title})]}),Object(T.jsx)("p",{className:"mb-1 text-muted text-small w-15 w-xs-100",children:t.category}),Object(T.jsx)("p",{className:"mb-1 text-muted text-small w-15 w-xs-100",children:t.createDate}),Object(T.jsx)("div",{className:"w-15 w-xs-100",children:Object(T.jsx)(N.a,{color:t.labelColor,pill:!0,children:t.label})})]}),Object(T.jsx)("div",{className:"custom-control custom-checkbox pl-1 align-self-center mr-4",children:Object(T.jsx)(d.a,{className:"itemCheck mb-0",type:"checkbox",id:"check_".concat(t.id),checked:n,onChange:function(e){return a(e,t.id)},label:""})})]}),Object(T.jsx)("div",{className:"card-body pt-1",children:Object(T.jsx)("p",{className:"mb-0",children:t.detail})})]})})},M=c.a.memo(E),w=a(1),P=a(937),_=a(902),A=a(903),D=a(1605),I=a(487),F=a(904),S=a(422),B=a(448),z={title:"",detail:"",label:{},category:{},status:"PENDING"},L=Object(f.b)((function(e){var t=e.todoApp;return{labels:t.labels,categories:t.categories}}),{addTodoItemAction:C.fb})((function(e){var t=e.modalOpen,a=e.toggleModal,n=e.labels,c=e.categories,i=e.addTodoItemAction,r=Object(o.useState)(z),u=Object(s.a)(r,2),p=u[0],b=u[1];return Object(T.jsxs)(P.a,{isOpen:t,toggle:a,wrapClassName:"modal-right",backdrop:"static",children:[Object(T.jsx)(_.a,{toggle:a,children:Object(T.jsx)(O.a,{id:"todo.add-new-title"})}),Object(T.jsxs)(A.a,{children:[Object(T.jsx)(D.a,{className:"mt-4",children:Object(T.jsx)(O.a,{id:"todo.title"})}),Object(T.jsx)(I.a,{type:"text",defaultValue:p.title,onChange:function(e){return b(Object(w.a)(Object(w.a)({},p),{},{title:e.target.value}))}}),Object(T.jsx)(D.a,{className:"mt-4",children:Object(T.jsx)(O.a,{id:"todo.detail"})}),Object(T.jsx)(I.a,{type:"textarea",defaultValue:p.detail,onChange:function(e){return b(Object(w.a)(Object(w.a)({},p),{},{detail:e.target.value}))}}),Object(T.jsx)(D.a,{className:"mt-4",children:Object(T.jsx)(O.a,{id:"todo.category"})}),Object(T.jsx)(S.a,{components:{Input:B.a},className:"react-select",classNamePrefix:"react-select",name:"form-field-name",options:c.map((function(e,t){return{label:e,value:e,key:t}})),value:p.category,onChange:function(e){return b(Object(w.a)(Object(w.a)({},p),{},{category:e}))}}),Object(T.jsx)(D.a,{className:"mt-4",children:Object(T.jsx)(O.a,{id:"todo.label"})}),Object(T.jsx)(S.a,{components:{Input:B.a},className:"react-select",classNamePrefix:"react-select",name:"form-field-name",options:n.map((function(e,t){return{label:e.label,value:e.label,key:t,color:e.color}})),value:p.label,onChange:function(e){return b(Object(w.a)(Object(w.a)({},p),{},{label:e}))}}),Object(T.jsx)(D.a,{className:"mt-4",children:Object(T.jsx)(O.a,{id:"todo.status"})}),Object(T.jsx)(d.a,{type:"radio",id:"exCustomRadio",name:"customRadio",label:"COMPLETED",checked:"COMPLETED"===p.status,onChange:function(e){return b(Object(w.a)(Object(w.a)({},p),{},{status:"on"===e.target.value?"COMPLETED":"PENDING"}))}}),Object(T.jsx)(d.a,{type:"radio",id:"exCustomRadio2",name:"customRadio2",label:"PENDING",defaultChecked:"PENDING"===p.status,onChange:function(e){return b(Object(w.a)(Object(w.a)({},p),{},{status:"on"!==e.target.value?"COMPLETED":"PENDING"}))}})]}),Object(T.jsxs)(F.a,{children:[Object(T.jsx)(l.a,{color:"secondary",outline:!0,onClick:a,children:Object(T.jsx)(O.a,{id:"todo.cancel"})}),Object(T.jsx)(l.a,{color:"primary",onClick:function(){return function(){var e={title:p.title,detail:p.detail,label:p.label.value,labelColor:p.label.color,category:p.category.value,status:p.status};i(e),a(),b(z)}()},children:Object(T.jsx)(O.a,{id:"todo.submit"})})," "]})]})})),R=a(1262),G=a(558),K=a.n(G),W=a(109),U=a.n(W),V=a(797),q=Object(f.b)((function(e){var t=e.todoApp;return{todoItems:t.todoItems,filter:t.filter,allTodoItems:t.allTodoItems,loading:t.loading,labels:t.labels,categories:t.categories}}),{getTodoListWithFilterAction:C.xb})((function(e){var t=e.todoItems,a=e.filter,n=e.allTodoItems,s=e.loading,o=e.labels,c=e.categories,i=e.getTodoListWithFilterAction,l=function(e,t){i(e,t)};return Object(T.jsx)(V.a,{children:Object(T.jsx)(K.a,{options:{suppressScrollX:!0,wheelPropagation:!1},children:Object(T.jsxs)("div",{className:"p-4",children:[Object(T.jsx)("p",{className:"text-muted text-small",children:Object(T.jsx)(O.a,{id:"todo.status"})}),Object(T.jsxs)("ul",{className:"list-unstyled mb-5",children:[Object(T.jsx)(R.a,{className:U()({active:!a}),children:Object(T.jsxs)(k.b,{to:"#",onClick:function(){return l("","")},location:{},children:[Object(T.jsx)("i",{className:"simple-icon-reload"}),Object(T.jsx)(O.a,{id:"todo.all-tasks"}),Object(T.jsx)("span",{className:"float-right",children:s&&n.length})]})}),Object(T.jsx)(R.a,{className:U()({active:a&&"status"===a.column&&"PENDING"===a.value}),children:Object(T.jsxs)(k.b,{location:{},to:"#",onClick:function(){return l("status","PENDING")},children:[Object(T.jsx)("i",{className:"simple-icon-refresh"}),Object(T.jsx)(O.a,{id:"todo.pending-tasks"}),Object(T.jsx)("span",{className:"float-right",children:s&&t.filter((function(e){return"PENDING"===e.status})).length})]})}),Object(T.jsx)(R.a,{className:U()({active:a&&"status"===a.column&&"COMPLETED"===a.value}),children:Object(T.jsxs)(k.b,{to:"#",location:{},onClick:function(){return l("status","COMPLETED")},children:[Object(T.jsx)("i",{className:"simple-icon-check"}),Object(T.jsx)(O.a,{id:"todo.completed-tasks"}),Object(T.jsx)("span",{className:"float-right",children:s&&t.filter((function(e){return"COMPLETED"===e.status})).length})]})})]}),Object(T.jsx)("p",{className:"text-muted text-small",children:Object(T.jsx)(O.a,{id:"todo.categories"})}),Object(T.jsx)("ul",{className:"list-unstyled mb-5",children:c.map((function(e,t){return Object(T.jsx)(R.a,{children:Object(T.jsx)("div",{onClick:function(){return l("category",e)},children:Object(T.jsxs)("div",{className:"custom-control custom-radio",children:[Object(T.jsx)("input",{type:"radio",className:"custom-control-input",defaultChecked:a&&"category"===a.column&&a.value===e}),Object(T.jsx)("label",{className:"custom-control-label",children:e})]})})},t)}))}),Object(T.jsx)("p",{className:"text-muted text-small",children:Object(T.jsx)(O.a,{id:"todo.labels"})}),Object(T.jsx)("div",{children:o.map((function(e,t){return Object(T.jsx)("p",{className:"d-sm-inline-block mb-1",children:Object(T.jsx)(k.b,{to:"#",location:{},onClick:function(){return l("label",e.label)},children:Object(T.jsx)(N.a,{className:"mb-1",color:"".concat(a&&"label"===a.column&&a.value===e.label?e.color:"outline-".concat(e.color)),pill:!0,children:e.label})})},t)}))})]})})})})),J=function(e,t,a){for(var n=0;n<t.length;n+=1)if(t[n][a]===e)return n;return-1};t.default=Object(j.c)(Object(f.b)((function(e){var t=e.todoApp;return{todoItems:t.todoItems,searchKeyword:t.searchKeyword,loading:t.loading,orderColumn:t.orderColumn,orderColumns:t.orderColumns,selectedItems:t.selectedItems}}),{getTodoListAction:C.vb,getTodoListWithOrderAction:C.yb,getTodoListSearchAction:C.wb,selectedTodoItemsChangeAction:C.Gb})((function(e){var t=e.match,a=e.intl,c=e.todoItems,j=e.searchKeyword,f=e.loading,C=e.orderColumn,v=e.orderColumns,y=e.selectedItems,N=e.getTodoListAction,k=e.getTodoListWithOrderAction,E=e.getTodoListSearchAction,w=e.selectedTodoItemsChangeAction,P=Object(o.useState)(!1),_=Object(s.a)(P,2),A=_[0],D=_[1],I=Object(o.useState)(!1),F=Object(s.a)(I,2),S=F[0],B=F[1],z=Object(o.useState)(!1),R=Object(s.a)(z,2),G=R[0],K=R[1],W=Object(o.useState)(null),U=Object(s.a)(W,2),V=U[0],X=U[1];Object(o.useEffect)((function(){return document.body.classList.add("right-menu"),N(),function(){document.body.classList.remove("right-menu")}}),[N]);var $=function(e,t){null==V&&X(t);var a=Object.assign([],y);if(a.includes(t)?a=a.filter((function(e){return e!==t})):a.push(t),w(a),e.shiftKey){var s,o=c,i=J(t,o,"id"),l=J(V,o,"id");o=o.slice(Math.min(i,l),Math.max(i,l)+1),(s=a).push.apply(s,Object(n.a)(o.map((function(e){return e.id})))),a=Array.from(new Set(a)),w(a)}},H=function(){f&&(y.length>=c.length?w([]):w(c.map((function(e){return e.id}))))},Q=a.messages;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(i.a,{className:"app-row survey-app",children:Object(T.jsxs)(g.a,{xxs:"12",children:[Object(T.jsxs)("div",{className:"mb-2",children:[Object(T.jsx)("h1",{children:Object(T.jsx)(O.a,{id:"menu.todo"})}),f&&Object(T.jsxs)("div",{className:"text-zero top-right-button-container",children:[Object(T.jsx)(l.a,{color:"primary",size:"lg",className:"top-right-button",onClick:function(){return D(!0)},children:Object(T.jsx)(O.a,{id:"todo.add-new"})})," ",Object(T.jsxs)(r.a,{isOpen:S,toggle:function(){return B(!S)},children:[Object(T.jsx)("div",{className:"btn btn-primary btn-lg pl-4 pr-0 check-button check-all",children:Object(T.jsx)(d.a,{className:"custom-checkbox mb-0 d-inline-block",type:"checkbox",id:"checkAll",checked:y.length>=c.length,onClick:function(){return H()},onChange:function(){return H()},label:Object(T.jsx)("span",{className:"custom-control-label ".concat(y.length>0&&y.length<c.length?"indeterminate":"")})})}),Object(T.jsx)(u.a,{caret:!0,color:"primary",className:"dropdown-toggle-split btn-lg"}),Object(T.jsxs)(p.a,{right:!0,children:[Object(T.jsx)(b.a,{children:Object(T.jsx)(O.a,{id:"todo.action"})}),Object(T.jsx)(b.a,{children:Object(T.jsx)(O.a,{id:"todo.another-action"})})]})]})]}),Object(T.jsx)(x.a,{match:t})]}),Object(T.jsxs)("div",{className:"mb-2",children:[Object(T.jsxs)(l.a,{color:"empty",className:"pt-0 pl-0 d-inline-block d-md-none",onClick:function(){return K(!G)},children:[Object(T.jsx)(O.a,{id:"todo.display-options"})," ",Object(T.jsx)("i",{className:"simple-icon-arrow-down align-middle"})]}),Object(T.jsx)(m.a,{id:"displayOptions",className:"d-md-block",isOpen:G,children:Object(T.jsxs)("div",{className:"d-block mb-2 d-md-inline-block",children:[Object(T.jsxs)(h.a,{className:"mr-1 float-md-left btn-group mb-1",children:[Object(T.jsxs)(u.a,{caret:!0,color:"outline-dark",size:"xs",children:[Object(T.jsx)(O.a,{id:"todo.orderby"}),C?C.label:""]}),Object(T.jsx)(p.a,{children:v.map((function(e,t){return Object(T.jsx)(b.a,{onClick:function(){return k(e.column)},children:e.label},t)}))})]}),Object(T.jsx)("div",{className:"search-sm d-inline-block float-md-left mr-1 mb-1 align-top",children:Object(T.jsx)("input",{type:"text",name:"keyword",id:"search",placeholder:Q["menu.search"],defaultValue:j,onKeyPress:function(e){"Enter"===e.key&&E(e.target.value)}})})]})})]}),Object(T.jsx)(g.b,{className:"mb-5"}),Object(T.jsx)(i.a,{children:f?c.map((function(e,t){return Object(T.jsx)(M,{item:e,handleCheckChange:$,isSelected:!!f&&y.includes(e.id)},"todo_item_".concat(t))})):Object(T.jsx)("div",{className:"loading"})})]})}),f&&Object(T.jsx)(q,{}),Object(T.jsx)(L,{toggleModal:function(){return D(!A)},modalOpen:A})]})})))},448:function(e,t,a){"use strict";var n=a(1),s=(a(8),a(1286)),o=a(25);t.a=function(e){var t=Object(n.a)({},e);return delete t.autoCorrect,delete t.autoCapitalize,Object(o.jsx)(s.f.Input,Object(n.a)({},t))}},487:function(e,t,a){"use strict";var n=a(14),s=a(18),o=a(120),c=a(190),i=a(8),l=a.n(i),r=a(67),d=a.n(r),u=a(109),p=a.n(u),b=a(113),m=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:b.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},j=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(o.a)(a)),a.focus=a.focus.bind(Object(o.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.type,c=e.bsSize,i=e.valid,r=e.invalid,d=e.tag,u=e.addon,h=e.plaintext,j=e.innerRef,f=Object(s.a)(e,m),O=["radio","checkbox"].indexOf(o)>-1,g=new RegExp("\\D","g"),x=d||("select"===o||"textarea"===o?o:"input"),C="form-control";h?(C+="-plaintext",x=d||"input"):"file"===o?C+="-file":"range"===o?C+="-range":O&&(C=u?null:"form-check-input"),f.size&&g.test(f.size)&&(Object(b.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=f.size,delete f.size);var v=Object(b.mapToCssModules)(p()(t,r&&"is-invalid",i&&"is-valid",!!c&&"form-control-"+c,C),a);return("input"===x||d&&"function"===typeof d)&&(f.type=o),f.children&&!h&&"select"!==o&&"string"===typeof x&&"select"!==x&&(Object(b.warnOnce)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete f.children),l.a.createElement(x,Object(n.a)({},f,{ref:j,className:v,"aria-invalid":r}))},t}(l.a.Component);j.propTypes=h,j.defaultProps={type:"text"},t.a=j},527:function(e,t,a){"use strict";var n=a(14),s=a(18),o=a(8),c=a.n(o),i=a(67),l=a.n(i),r=a(109),d=a.n(r),u=a(113),p=["className","cssModule","color","innerRef","pill","tag"],b={color:l.a.string,pill:l.a.bool,tag:u.tagPropType,innerRef:l.a.oneOfType([l.a.object,l.a.func,l.a.string]),children:l.a.node,className:l.a.string,cssModule:l.a.object},m=function(e){var t=e.className,a=e.cssModule,o=e.color,i=e.innerRef,l=e.pill,r=e.tag,b=Object(s.a)(e,p),m=Object(u.mapToCssModules)(d()(t,"badge","badge-"+o,!!l&&"badge-pill"),a);return b.href&&"span"===r&&(r="a"),c.a.createElement(r,Object(n.a)({},b,{className:m,ref:i}))};m.propTypes=b,m.defaultProps={color:"secondary",pill:!1,tag:"span"},t.a=m},679:function(e,t,a){"use strict";var n=a(14),s=a(8),o=a.n(s),c=a(67),i=a.n(c),l=a(583),r={children:i.a.node},d=function(e){return o.a.createElement(l.a,Object(n.a)({group:!0},e))};d.propTypes=r,t.a=d},797:function(e,t,a){"use strict";var n=a(99),s=a(8),o=a(1627),c=a(25);t.a=function(e){var t=e.children,a=Object(s.useRef)(),i=Object(s.useState)(!1),l=Object(n.a)(i,2),r=l[0],d=l[1],u=function(e){if(r){var t=a.current;if(t.contains(e.target)||t===e.target)return;d(!1)}};return Object(s.useEffect)((function(){return["click","touchstart"].forEach((function(e){return document.addEventListener(e,u,!1)})),function(){["click","touchstart"].forEach((function(e){return document.removeEventListener(e,u,!1)}))}}),[r]),Object(c.jsxs)("div",{ref:a,className:"app-menu ".concat(r?"shown":""),children:[t,Object(c.jsx)(o.a,{className:"app-menu-button d-inline-block d-xl-none",onClick:function(){return d(!r)},children:Object(c.jsx)("i",{className:"simple-icon-options"})})]})}},902:function(e,t,a){"use strict";var n=a(14),s=a(18),o=a(8),c=a.n(o),i=a(67),l=a.n(i),r=a(109),d=a.n(r),u=a(113),p=["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","charCode","close"],b={tag:u.tagPropType,wrapTag:u.tagPropType,toggle:l.a.func,className:l.a.string,cssModule:l.a.object,children:l.a.node,closeAriaLabel:l.a.string,charCode:l.a.oneOfType([l.a.string,l.a.number]),close:l.a.object},m=function(e){var t,a=e.className,o=e.cssModule,i=e.children,l=e.toggle,r=e.tag,b=e.wrapTag,m=e.closeAriaLabel,h=e.charCode,j=e.close,f=Object(s.a)(e,p),O=Object(u.mapToCssModules)(d()(a,"modal-header"),o);if(!j&&l){var g="number"===typeof h?String.fromCharCode(h):h;t=c.a.createElement("button",{type:"button",onClick:l,className:Object(u.mapToCssModules)("close",o),"aria-label":m},c.a.createElement("span",{"aria-hidden":"true"},g))}return c.a.createElement(b,Object(n.a)({},f,{className:O}),c.a.createElement(r,{className:Object(u.mapToCssModules)("modal-title",o)},i),j||t)};m.propTypes=b,m.defaultProps={tag:"h5",wrapTag:"div",closeAriaLabel:"Close",charCode:215},t.a=m},903:function(e,t,a){"use strict";var n=a(14),s=a(18),o=a(8),c=a.n(o),i=a(67),l=a.n(i),r=a(109),d=a.n(r),u=a(113),p=["className","cssModule","tag"],b={tag:u.tagPropType,className:l.a.string,cssModule:l.a.object},m=function(e){var t=e.className,a=e.cssModule,o=e.tag,i=Object(s.a)(e,p),l=Object(u.mapToCssModules)(d()(t,"modal-body"),a);return c.a.createElement(o,Object(n.a)({},i,{className:l}))};m.propTypes=b,m.defaultProps={tag:"div"},t.a=m},904:function(e,t,a){"use strict";var n=a(14),s=a(18),o=a(8),c=a.n(o),i=a(67),l=a.n(i),r=a(109),d=a.n(r),u=a(113),p=["className","cssModule","tag"],b={tag:u.tagPropType,className:l.a.string,cssModule:l.a.object},m=function(e){var t=e.className,a=e.cssModule,o=e.tag,i=Object(s.a)(e,p),l=Object(u.mapToCssModules)(d()(t,"modal-footer"),a);return c.a.createElement(o,Object(n.a)({},i,{className:l}))};m.propTypes=b,m.defaultProps={tag:"div"},t.a=m},937:function(e,t,a){"use strict";var n=a(34),s=a(14),o=a(120),c=a(190),i=a(8),l=a.n(i),r=a(67),d=a.n(r),u=a(109),p=a.n(u),b=a(27),m=a.n(b),h=a(113),j={children:d.a.node.isRequired,node:d.a.any},f=function(e){function t(){return e.apply(this,arguments)||this}Object(c.a)(t,e);var a=t.prototype;return a.componentWillUnmount=function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null},a.render=function(){return h.canUseDOM?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),m.a.createPortal(this.props.children,this.props.node||this.defaultNode)):null},t}(l.a.Component);f.propTypes=j;var O=f,g=a(584);function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function C(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function v(){}var y=d.a.shape(g.a.propTypes),N={isOpen:d.a.bool,autoFocus:d.a.bool,centered:d.a.bool,scrollable:d.a.bool,size:d.a.string,toggle:d.a.func,keyboard:d.a.bool,role:d.a.string,labelledBy:d.a.string,backdrop:d.a.oneOfType([d.a.bool,d.a.oneOf(["static"])]),onEnter:d.a.func,onExit:d.a.func,onOpened:d.a.func,onClosed:d.a.func,children:d.a.node,className:d.a.string,wrapClassName:d.a.string,modalClassName:d.a.string,backdropClassName:d.a.string,contentClassName:d.a.string,external:d.a.node,fade:d.a.bool,cssModule:d.a.object,zIndex:d.a.oneOfType([d.a.number,d.a.string]),backdropTransition:y,modalTransition:y,innerRef:d.a.oneOfType([d.a.object,d.a.string,d.a.func]),unmountOnClose:d.a.bool,returnFocusAfterClose:d.a.bool,container:h.targetPropType,trapFocus:d.a.bool},k=Object.keys(N),T={isOpen:!1,autoFocus:!0,centered:!1,scrollable:!1,role:"dialog",backdrop:!0,keyboard:!0,zIndex:1050,fade:!0,onOpened:v,onClosed:v,modalTransition:{timeout:h.TransitionTimeouts.Modal},backdropTransition:{mountOnEnter:!0,timeout:h.TransitionTimeouts.Fade},unmountOnClose:!0,returnFocusAfterClose:!0,container:"body",trapFocus:!1},E=function(e){function t(t){var a;return(a=e.call(this,t)||this)._element=null,a._originalBodyPadding=null,a.getFocusableChildren=a.getFocusableChildren.bind(Object(o.a)(a)),a.handleBackdropClick=a.handleBackdropClick.bind(Object(o.a)(a)),a.handleBackdropMouseDown=a.handleBackdropMouseDown.bind(Object(o.a)(a)),a.handleEscape=a.handleEscape.bind(Object(o.a)(a)),a.handleStaticBackdropAnimation=a.handleStaticBackdropAnimation.bind(Object(o.a)(a)),a.handleTab=a.handleTab.bind(Object(o.a)(a)),a.onOpened=a.onOpened.bind(Object(o.a)(a)),a.onClosed=a.onClosed.bind(Object(o.a)(a)),a.manageFocusAfterClose=a.manageFocusAfterClose.bind(Object(o.a)(a)),a.clearBackdropAnimationTimeout=a.clearBackdropAnimationTimeout.bind(Object(o.a)(a)),a.trapFocus=a.trapFocus.bind(Object(o.a)(a)),a.state={isOpen:!1,showStaticBackdropAnimation:!1},a}Object(c.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this.props,t=e.isOpen,a=e.autoFocus,n=e.onEnter;t&&(this.init(),this.setState({isOpen:!0}),a&&this.setFocus()),n&&n(),document.addEventListener("focus",this.trapFocus,!0),this._isMounted=!0},a.componentDidUpdate=function(e,t){if(this.props.isOpen&&!e.isOpen)return this.init(),void this.setState({isOpen:!0});this.props.autoFocus&&this.state.isOpen&&!t.isOpen&&this.setFocus(),this._element&&e.zIndex!==this.props.zIndex&&(this._element.style.zIndex=this.props.zIndex)},a.componentWillUnmount=function(){this.clearBackdropAnimationTimeout(),this.props.onExit&&this.props.onExit(),this._element&&(this.destroy(),(this.props.isOpen||this.state.isOpen)&&this.close()),document.removeEventListener("focus",this.trapFocus,!0),this._isMounted=!1},a.trapFocus=function(e){if(this.props.trapFocus&&this._element&&(!this._dialog||this._dialog.parentNode!==e.target)&&!(this.modalIndex<t.openCount-1)){for(var a=this.getFocusableChildren(),n=0;n<a.length;n++)if(a[n]===e.target)return;a.length>0&&(e.preventDefault(),e.stopPropagation(),a[0].focus())}},a.onOpened=function(e,t){this.props.onOpened(),(this.props.modalTransition.onEntered||v)(e,t)},a.onClosed=function(e){var t=this.props.unmountOnClose;this.props.onClosed(),(this.props.modalTransition.onExited||v)(e),t&&this.destroy(),this.close(),this._isMounted&&this.setState({isOpen:!1})},a.setFocus=function(){this._dialog&&this._dialog.parentNode&&"function"===typeof this._dialog.parentNode.focus&&this._dialog.parentNode.focus()},a.getFocusableChildren=function(){return this._element.querySelectorAll(h.focusableElements.join(", "))},a.getFocusedChild=function(){var e,t=this.getFocusableChildren();try{e=document.activeElement}catch(a){e=t[0]}return e},a.handleBackdropClick=function(e){if(e.target===this._mouseDownElement){e.stopPropagation();var t=this._dialog?this._dialog.parentNode:null;if(t&&e.target===t&&"static"===this.props.backdrop&&this.handleStaticBackdropAnimation(),!this.props.isOpen||!0!==this.props.backdrop)return;t&&e.target===t&&this.props.toggle&&this.props.toggle(e)}},a.handleTab=function(e){if(9===e.which&&!(this.modalIndex<t.openCount-1)){var a=this.getFocusableChildren(),n=a.length;if(0!==n){for(var s=this.getFocusedChild(),o=0,c=0;c<n;c+=1)if(a[c]===s){o=c;break}e.shiftKey&&0===o?(e.preventDefault(),a[n-1].focus()):e.shiftKey||o!==n-1||(e.preventDefault(),a[0].focus())}}},a.handleBackdropMouseDown=function(e){this._mouseDownElement=e.target},a.handleEscape=function(e){this.props.isOpen&&e.keyCode===h.keyCodes.esc&&this.props.toggle&&(this.props.keyboard?(e.preventDefault(),e.stopPropagation(),this.props.toggle(e)):"static"===this.props.backdrop&&(e.preventDefault(),e.stopPropagation(),this.handleStaticBackdropAnimation()))},a.handleStaticBackdropAnimation=function(){var e=this;this.clearBackdropAnimationTimeout(),this.setState({showStaticBackdropAnimation:!0}),this._backdropAnimationTimeout=setTimeout((function(){e.setState({showStaticBackdropAnimation:!1})}),100)},a.init=function(){try{this._triggeringElement=document.activeElement}catch(e){this._triggeringElement=null}this._element||(this._element=document.createElement("div"),this._element.setAttribute("tabindex","-1"),this._element.style.position="relative",this._element.style.zIndex=this.props.zIndex,this._mountContainer=Object(h.getTarget)(this.props.container),this._mountContainer.appendChild(this._element)),this._originalBodyPadding=Object(h.getOriginalBodyPadding)(),Object(h.conditionallyUpdateScrollbar)(),0===t.openCount&&(document.body.className=p()(document.body.className,Object(h.mapToCssModules)("modal-open",this.props.cssModule))),this.modalIndex=t.openCount,t.openCount+=1},a.destroy=function(){this._element&&(this._mountContainer.removeChild(this._element),this._element=null),this.manageFocusAfterClose()},a.manageFocusAfterClose=function(){if(this._triggeringElement){var e=this.props.returnFocusAfterClose;this._triggeringElement.focus&&e&&this._triggeringElement.focus(),this._triggeringElement=null}},a.close=function(){if(t.openCount<=1){var e=Object(h.mapToCssModules)("modal-open",this.props.cssModule),a=new RegExp("(^| )"+e+"( |$)");document.body.className=document.body.className.replace(a," ").trim()}this.manageFocusAfterClose(),t.openCount=Math.max(0,t.openCount-1),Object(h.setScrollbarWidth)(this._originalBodyPadding)},a.renderModalDialog=function(){var e,t=this,a=Object(h.omit)(this.props,k),n="modal-dialog";return l.a.createElement("div",Object(s.a)({},a,{className:Object(h.mapToCssModules)(p()(n,this.props.className,(e={},e["modal-"+this.props.size]=this.props.size,e[n+"-centered"]=this.props.centered,e[n+"-scrollable"]=this.props.scrollable,e)),this.props.cssModule),role:"document",ref:function(e){t._dialog=e}}),l.a.createElement("div",{className:Object(h.mapToCssModules)(p()("modal-content",this.props.contentClassName),this.props.cssModule)},this.props.children))},a.render=function(){var e=this.props.unmountOnClose;if(this._element&&(this.state.isOpen||!e)){var t=!!this._element&&!this.state.isOpen&&!e;this._element.style.display=t?"none":"block";var a=this.props,n=a.wrapClassName,o=a.modalClassName,c=a.backdropClassName,i=a.cssModule,r=a.isOpen,d=a.backdrop,u=a.role,b=a.labelledBy,m=a.external,j=a.innerRef,f={onClick:this.handleBackdropClick,onMouseDown:this.handleBackdropMouseDown,onKeyUp:this.handleEscape,onKeyDown:this.handleTab,style:{display:"block"},"aria-labelledby":b,role:u,tabIndex:"-1"},x=this.props.fade,v=C(C(C({},g.a.defaultProps),this.props.modalTransition),{},{baseClass:x?this.props.modalTransition.baseClass:"",timeout:x?this.props.modalTransition.timeout:0}),y=C(C(C({},g.a.defaultProps),this.props.backdropTransition),{},{baseClass:x?this.props.backdropTransition.baseClass:"",timeout:x?this.props.backdropTransition.timeout:0}),N=d&&(x?l.a.createElement(g.a,Object(s.a)({},y,{in:r&&!!d,cssModule:i,className:Object(h.mapToCssModules)(p()("modal-backdrop",c),i)})):l.a.createElement("div",{className:Object(h.mapToCssModules)(p()("modal-backdrop","show",c),i)}));return l.a.createElement(O,{node:this._element},l.a.createElement("div",{className:Object(h.mapToCssModules)(n)},l.a.createElement(g.a,Object(s.a)({},f,v,{in:r,onEntered:this.onOpened,onExited:this.onClosed,cssModule:i,className:Object(h.mapToCssModules)(p()("modal",o,this.state.showStaticBackdropAnimation&&"modal-static"),i),innerRef:j}),m,this.renderModalDialog()),N))}return null},a.clearBackdropAnimationTimeout=function(){this._backdropAnimationTimeout&&(clearTimeout(this._backdropAnimationTimeout),this._backdropAnimationTimeout=void 0)},t}(l.a.Component);E.propTypes=N,E.defaultProps=T,E.openCount=0;t.a=E}}]);
//# sourceMappingURL=application-todo.b6acf94e.chunk.js.map