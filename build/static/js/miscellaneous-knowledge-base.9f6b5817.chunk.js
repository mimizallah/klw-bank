(this["webpackJsonpklw-bank"]=this["webpackJsonpklw-bank"]||[]).push([[114],{170:function(e,t,a){"use strict";a(8);var i=a(299),n=a(300),s=a(149),l=a(140),c=a(10),r=a(25),o=function(e){return"/".concat(e)===c.b?Object(r.jsx)(l.a,{id:"menu.home"}):Object(r.jsx)(l.a,{id:"menu.".concat(e)})},u=function(e,t){return e.split(t)[0]+t},d=function(e){var t=e.match.path.substr(1),a=t.split("/");return a[a.length-1].indexOf(":")>-1&&(a=a.filter((function(e){return-1===e.indexOf(":")}))),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(i.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block",children:a.map((function(e,i){return Object(r.jsx)(n.a,{active:a.length===i+1,children:a.length!==i+1?Object(r.jsx)(s.b,{to:"/".concat(u(t,e)),children:o(e)}):o(e)},i)}))})})};t.a=function(e){var t=e.heading,a=e.match;return Object(r.jsxs)(r.Fragment,{children:[t&&Object(r.jsx)("h1",{style:{marginBottom:"0rem"},children:Object(r.jsx)(l.a,{id:t})}),Object(r.jsx)(d,{match:a})]})}},2171:function(e,t,a){"use strict";a.r(t);a(8);var i=a(877),n=a(290),s=a(332),l=a(149),c=a(170),r=a(163),o=[{title:"USING GOGO",icon:"iconsminds-director ",detail:"Systems thinking correlation, social impact; when revolutionary fully ethical life bandwidth and thought partnership.",subtitles:[{title:"Getting Started",link:"#"},{title:"Game Changing Features",link:"#"},{title:"Structure",link:"#"},{title:"Adding Content",link:"#"},{title:"Gulp & Package.json",link:"#"},{title:"Codebase",link:"#"},{title:"Styles and Themes",link:"#"},{title:"Fonts",link:"#"},{title:"Plugins",link:"#"},{title:"Changelog",link:"#"}]},{title:"SECURITY",icon:"iconsminds-security-settings ",detail:"Tellus a sem condimentum, vitae convallis sapien feugiat. Aenean non nibh nec nunc aliquam iaculis. Ut quis suscipit nunc. Duis at lectus a est aliquam venenatis vitae eget arcu.",subtitles:[{title:"Securing Your Account",link:"#"},{title:"Privacy",link:"#"},{title:"Spam",link:"#"},{title:"Sensitive Content",link:"#"},{title:"Abuse",link:"#"},{title:"Blocking Users",link:"#"},{title:"Reporting",link:"#"}]},{title:"ACCOUNT",icon:"iconsminds-male",detail:"Squid single-origincoffeenulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beerlaborewes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butchervice lomo.",subtitles:[{title:"Login and Register",link:"#"},{title:"Password Reset",link:"#"},{title:"Devices",link:"#"},{title:"Integrations",link:"#"},{title:"Notifications",link:"#"},{title:"Messages",link:"#"},{title:"Blocking Users",link:"#"},{title:"Following Users",link:"#"},{title:"Login",link:"#"},{title:"Content Filters",link:"#"}]},{title:"POLICIES",icon:"iconsminds-newspaper",detail:"Duis at lectus a est aliquam venenatis vitae eget arcu. Sed egestas felis eget convallis maximus. Curabitur maximus.",subtitles:[{title:"About",link:"#"},{title:"Policies",link:"#"},{title:"Privacy",link:"#"},{title:"Ad Choices",link:"#"},{title:"Researches and Experiments",link:"#"},{title:"General Guidelines",link:"#"},{title:"Cookies",link:"#"}]}],u=a(25);t.default=function(e){var t=e.match;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(i.a,{children:Object(u.jsxs)(r.a,{xxs:"12",children:[Object(u.jsx)(c.a,{heading:"menu.faq",match:t}),Object(u.jsx)(r.b,{className:"mb-5"})]})}),Object(u.jsx)(i.a,{className:"equal-height-container",children:o.map((function(e,t){return Object(u.jsx)(r.a,{md:"12",xl:"6",className:"mb-4 col-item",children:Object(u.jsx)(n.a,{children:Object(u.jsxs)(s.a,{children:[Object(u.jsxs)("div",{className:"text-center",children:[Object(u.jsx)("i",{className:"".concat(e.icon," large-icon")}),Object(u.jsx)("h5",{className:"mb-0 font-weight-semibold color-theme-1 mb-4",children:e.title})]}),Object(u.jsxs)("div",{className:"pl-3 pr-3 pt-3 pb-0 d-flex flex-column flex-grow-1",children:[Object(u.jsx)("p",{className:"text-muted mb-4",children:e.detail}),Object(u.jsx)("ul",{className:"list-unstyled mb-0",children:e.subtitles.map((function(e,t){return Object(u.jsx)("li",{children:Object(u.jsx)(l.b,{to:e.link,className:"btn-link",children:e.title})},"knowledgebaseSub_".concat(t))}))})]})]})})},"knowledgebase_".concat(t))}))})]})}},290:function(e,t,a){"use strict";var i=a(14),n=a(18),s=a(8),l=a.n(s),c=a(67),r=a.n(c),o=a(109),u=a.n(o),d=a(113),b=["className","cssModule","color","body","inverse","outline","tag","innerRef"],m={tag:d.tagPropType,inverse:r.a.bool,color:r.a.string,body:r.a.bool,outline:r.a.bool,className:r.a.string,cssModule:r.a.object,innerRef:r.a.oneOfType([r.a.object,r.a.string,r.a.func])},g=function(e){var t=e.className,a=e.cssModule,s=e.color,c=e.body,r=e.inverse,o=e.outline,m=e.tag,g=e.innerRef,j=Object(n.a)(e,b),p=Object(d.mapToCssModules)(u()(t,"card",!!r&&"text-white",!!c&&"card-body",!!s&&(o?"border":"bg")+"-"+s),a);return l.a.createElement(m,Object(i.a)({},j,{className:p,ref:g}))};g.propTypes=m,g.defaultProps={tag:"div"},t.a=g},299:function(e,t,a){"use strict";var i=a(14),n=a(18),s=a(8),l=a.n(s),c=a(67),r=a.n(c),o=a(109),u=a.n(o),d=a(113),b=["className","listClassName","cssModule","children","tag","listTag","aria-label"],m={tag:d.tagPropType,listTag:d.tagPropType,className:r.a.string,listClassName:r.a.string,cssModule:r.a.object,children:r.a.node,"aria-label":r.a.string},g=function(e){var t=e.className,a=e.listClassName,s=e.cssModule,c=e.children,r=e.tag,o=e.listTag,m=e["aria-label"],g=Object(n.a)(e,b),j=Object(d.mapToCssModules)(u()(t),s),p=Object(d.mapToCssModules)(u()("breadcrumb",a),s);return l.a.createElement(r,Object(i.a)({},g,{className:j,"aria-label":m}),l.a.createElement(o,{className:p},c))};g.propTypes=m,g.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=g},300:function(e,t,a){"use strict";var i=a(14),n=a(18),s=a(8),l=a.n(s),c=a(67),r=a.n(c),o=a(109),u=a.n(o),d=a(113),b=["className","cssModule","active","tag"],m={tag:d.tagPropType,active:r.a.bool,className:r.a.string,cssModule:r.a.object},g=function(e){var t=e.className,a=e.cssModule,s=e.active,c=e.tag,r=Object(n.a)(e,b),o=Object(d.mapToCssModules)(u()(t,!!s&&"active","breadcrumb-item"),a);return l.a.createElement(c,Object(i.a)({},r,{className:o,"aria-current":s?"page":void 0}))};g.propTypes=m,g.defaultProps={tag:"li"},t.a=g},332:function(e,t,a){"use strict";var i=a(14),n=a(18),s=a(8),l=a.n(s),c=a(67),r=a.n(c),o=a(109),u=a.n(o),d=a(113),b=["className","cssModule","innerRef","tag"],m={tag:d.tagPropType,className:r.a.string,cssModule:r.a.object,innerRef:r.a.oneOfType([r.a.object,r.a.string,r.a.func])},g=function(e){var t=e.className,a=e.cssModule,s=e.innerRef,c=e.tag,r=Object(n.a)(e,b),o=Object(d.mapToCssModules)(u()(t,"card-body"),a);return l.a.createElement(c,Object(i.a)({},r,{className:o,ref:s}))};g.propTypes=m,g.defaultProps={tag:"div"},t.a=g}}]);
//# sourceMappingURL=miscellaneous-knowledge-base.9f6b5817.chunk.js.map