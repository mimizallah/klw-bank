(this["webpackJsonpklw-bank"]=this["webpackJsonpklw-bank"]||[]).push([[19],{1667:function(e,t,r){"use strict";r.r(t),r.d(t,"addOrUpdateResource",(function(){return p})),r.d(t,"contentToBlob",(function(){return j})),r.d(t,"fetchResources",(function(){return i})),r.d(t,"getSiblingOfSameType",(function(){return w})),r.d(t,"getSiblingOfSameTypeI",(function(){return y})),r.d(t,"removeAllResources",(function(){return b})),r.d(t,"removeResource",(function(){return f})),r.d(t,"splitPrefixFileNameAndExtension",(function(){return O}));var n=r(4),a=r(99),u=r(12),s=r(129),c=r(101),o=r(128);function i(e){return l.apply(this,arguments)}function l(){return l=Object(u.a)(Object(n.a)().mark((function e(t){var r,a,u,s,c,i,l,p,d,f,h,b,v=arguments;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=v.length>1&&void 0!==v[1]?v[1]:{},a=v.length>2?v[2]:void 0,e.next=4,t.load(a);case 4:return u=Object(o.D)(t.itemUrl,"resources"),s=r.start,c=void 0===s?1:s,i=r.num,l=void 0===i?10:i,p=r.sortOrder,d=void 0===p?"asc":p,f=r.sortField,h={query:{start:c,num:l,sortOrder:d,sortField:void 0===f?"created":f,token:t.apiKey},signal:null===a||void 0===a?void 0:a.signal},e.next=16,t.portal.request(u,h);case 16:return b=e.sent,e.abrupt("return",{total:b.total,nextStart:b.nextStart,resources:b.resources.map((function(e){var r=e.created,n=e.size,a=e.resource;return{created:new Date(r),size:n,resource:t.resourceFromPath(a)}}))});case 18:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function p(e,t,r,n){return d.apply(this,arguments)}function d(){return d=Object(u.a)(Object(n.a)().mark((function e(t,r,u,s){var i,l,p,d,f,h,b,v;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.hasPath()){e.next=2;break}throw new c.a("portal-item-resource-".concat(r,":invalid-path"),"Resource does not have a valid path");case 2:return i=t.portalItem,e.next=5,i.load(s);case 5:return l=Object(o.D)(i.userItemUrl,"add"===r?"addResources":"updateResources"),p=m(t.path),d=Object(a.a)(p,2),f=d[0],h=d[1],e.next=12,j(u);case 12:return b=e.sent,v=new FormData,f&&"."!==f&&v.append("resourcesPrefix",f),null!=s&&s.compress&&v.append("compress","true"),v.append("fileName",h),v.append("file",b,h),v.append("f","json"),null!=s&&s.access&&v.append("access",s.access),e.next=22,i.portal.request(l,{method:"post",body:v,signal:null===s||void 0===s?void 0:s.signal});case 22:return e.abrupt("return",t);case 23:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function f(e,t,r){return h.apply(this,arguments)}function h(){return h=Object(u.a)(Object(n.a)().mark((function e(t,r,a){var u;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.hasPath()){e.next=2;break}throw new c.a("portal-item-resources-remove:invalid-path","Resource does not have a valid path");case 2:return e.next=4,t.load(a);case 4:return u=Object(o.D)(t.userItemUrl,"removeResources"),e.next=7,t.portal.request(u,{method:"post",query:{resource:r.path},signal:null===a||void 0===a?void 0:a.signal});case 7:r.portalItem=null;case 8:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function b(e,t){return v.apply(this,arguments)}function v(){return(v=Object(u.a)(Object(n.a)().mark((function e(t,r){var a;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.load(r);case 2:return a=Object(o.D)(t.userItemUrl,"removeResources"),e.abrupt("return",t.portal.request(a,{method:"post",query:{deleteAll:!0},signal:null===r||void 0===r?void 0:r.signal}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){var t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function O(e){var t=function(e){var t=Object(o.q)(e);return null==t?[e,""]:[e.slice(0,e.length-t.length-1),".".concat(t)]}(e),r=Object(a.a)(t,2),n=r[0],u=r[1],s=m(n),c=Object(a.a)(s,2);return[c[0],c[1],u]}function j(e){return x.apply(this,arguments)}function x(){return(x=Object(u.a)(Object(n.a)().mark((function e(t){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t instanceof Blob)){e.next=2;break}return e.abrupt("return",t);case 2:return e.next=4,Object(s.default)(t.url,{responseType:"blob"});case 4:return e.abrupt("return",e.sent.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,t){if(!e.hasPath())return null;var r=O(e.path),n=Object(a.a)(r,3),u=n[0],s=n[2];return e.portalItem.resourceFromPath(Object(o.D)(u,t+s))}function y(e,t){if(!e.hasPath())return null;var r=O(e.path),n=Object(a.a)(r,3),u=n[0],s=n[2];return e.portalItem.resourceFromPath(Object(o.D)(u,t+s))}}}]);
//# sourceMappingURL=19.eab03118.chunk.js.map