(this["webpackJsonpklw-bank"]=this["webpackJsonpklw-bank"]||[]).push([[89],{170:function(e,t,n){"use strict";n(8);var c=n(299),a=n(300),i=n(149),s=n(140),r=n(10),l=n(25),j=function(e){return"/".concat(e)===r.b?Object(l.jsx)(s.a,{id:"menu.home"}):Object(l.jsx)(s.a,{id:"menu.".concat(e)})},b=function(e,t){return e.split(t)[0]+t},d=function(e){var t=e.match.path.substr(1),n=t.split("/");return n[n.length-1].indexOf(":")>-1&&(n=n.filter((function(e){return-1===e.indexOf(":")}))),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(c.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block",children:n.map((function(e,c){return Object(l.jsx)(a.a,{active:n.length===c+1,children:n.length!==c+1?Object(l.jsx)(i.b,{to:"/".concat(b(t,e)),children:j(e)}):j(e)},c)}))})})};t.a=function(e){var t=e.heading,n=e.match;return Object(l.jsxs)(l.Fragment,{children:[t&&Object(l.jsx)("h1",{style:{marginBottom:"0rem"},children:Object(l.jsx)(s.a,{id:t})}),Object(l.jsx)(d,{match:n})]})}},2022:function(e,t,n){"use strict";n.r(t);var c=n(99),a=n(8),i=n(877),s=n(290),r=n(332),l=n(368),j=n(2023),b=n.n(j),d=n(163),u=n(170),o=n(140),h=(n(2030),n(2031),n(25)),x={toolbar:[["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image"],["clean"]]},O=["header","bold","italic","underline","strike","blockquote","list","bullet","indent","link","image"];t.default=function(e){var t=e.match,n=Object(a.useState)(""),j=Object(c.a)(n,2),m=j[0],f=j[1],g=Object(a.useState)(""),k=Object(c.a)(g,2),p=k[0],v=k[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(i.a,{children:Object(h.jsxs)(d.a,{xxs:"12",children:[Object(h.jsx)(u.a,{heading:"menu.editors",match:t}),Object(h.jsx)(d.b,{className:"mb-5"})]})}),Object(h.jsx)(i.a,{className:"mb-4",children:Object(h.jsx)(d.a,{xxs:"12",children:Object(h.jsx)(s.a,{children:Object(h.jsxs)(r.a,{children:[Object(h.jsx)(l.a,{children:Object(h.jsx)(o.a,{id:"editors.quill-standart"})}),Object(h.jsx)(b.a,{theme:"snow",value:m,onChange:function(e){return f(e)},modules:x,formats:O})]})})})}),Object(h.jsx)(i.a,{className:"mb-4",children:Object(h.jsx)(d.a,{xxs:"12",children:Object(h.jsx)(s.a,{children:Object(h.jsxs)(r.a,{children:[Object(h.jsx)(l.a,{children:Object(h.jsx)(o.a,{id:"editors.quill-bubble"})}),Object(h.jsx)(b.a,{theme:"bubble",value:p,onChange:function(e){return v(e)}})]})})})})]})}}}]);
//# sourceMappingURL=components-editors.97657446.chunk.js.map