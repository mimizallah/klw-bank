(this["webpackJsonpklw-bank"]=this["webpackJsonpklw-bank"]||[]).push([[227],{1179:function(e,t,r){"use strict";r.r(t),r.d(t,"getFirstLayerOrTableId",(function(){return P})),r.d(t,"getNumLayersAndTables",(function(){return N})),r.d(t,"getSubtypeGroupLayerIds",(function(){return C})),r.d(t,"load",(function(){return m})),r.d(t,"preprocessFSItemData",(function(){return G}));var n=r(112),a=r(99),u=r(4),i=r(12),o=r(101),l=r(259),c=r(324),s=r(817),p=r(197),d=r(496),f=r(818),b=r(674),y=r(724),v=r(601);function m(e,t){return h.apply(this,arguments)}function h(){return(h=Object(i.a)(Object(u.a)().mark((function e(t,r){var n;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=t.instance.portalItem)||!n.id){e.next=6;break}return e.next=4,n.load(r);case 4:return O(t),e.abrupt("return",j(t,r));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){var t=e.instance.portalItem;if(null===t||void 0===t||!t.type||!e.supportedTypes.includes(t.type))throw new o.a("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:null===t||void 0===t?void 0:t.type,expectedType:e.supportedTypes.join(", ")})}function j(e,t){return x.apply(this,arguments)}function x(){return(x=Object(i.a)(Object(u.a)().mark((function e(t,r){var n,a,i,o,l,c,s;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.instance,i=a.portalItem){e.next=3;break}return e.abrupt("return");case 3:if(o=i.url,l=i.title,c=Object(f.a)(i),"group"!==a.type){e.next=6;break}return e.abrupt("return",(a.read({title:l},c),w(a,t)));case 6:return o&&a.read({url:o},c),e.next=9,F(t,r);case 9:return s=e.sent,e.abrupt("return",(s&&a.read(s,c),a.resourceReferences={portalItem:i,paths:null!==(n=c.readResourcePaths)&&void 0!==n?n:[]},"subtype-group"!==a.type&&a.read({title:l},c),Object(y.a)(a,c)));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,t){return k.apply(this,arguments)}function k(){return k=Object(i.a)(Object(u.a)().mark((function e(t,r){var n,i,l,c,s,p,d,f,y,v,m,h,O;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=t.portalItem){e.next=3;break}return e.abrupt("return");case 3:c=l.type,s=r.layerModuleTypeMap,p=null!==(n=Object(b.e)(l,"Oriented Imagery Layer"))&&void 0!==n&&n,e.t0=c,e.next="Feature Service"===e.t0?7:"Stream Service"===e.t0?9:"Scene Service"===e.t0?11:"Feature Collection"===e.t0?13:15;break;case 7:return i=p?s.OrientedImageryLayer:s.FeatureLayer,e.abrupt("break",16);case 9:return i=s.StreamLayer,e.abrupt("break",16);case 11:return i=s.SceneLayer,e.abrupt("break",16);case 13:return i=s.FeatureLayer,e.abrupt("break",16);case 15:throw new o.a("portal:unsupported-item-type-as-group","The item type '".concat(c,"' is not supported as a 'IGroupLayer'"));case 16:return e.next=18,Promise.all([i(),F(r)]);case 18:if(d=e.sent,f=Object(a.a)(d,2),y=f[0],v=f[1],m=function(){return y},"Feature Service"!==c){e.next=46;break}if(!l.url){e.next=30;break}return e.next=27,G(v,l.url);case 27:e.t1=e.sent,e.next=31;break;case 30:e.t1={};case 31:if(!C(v=e.t1).length){e.next=38;break}return h=s.SubtypeGroupLayer,e.next=36,h();case 36:O=e.sent,m=function(e){return"SubtypeGroupLayer"===e.layerType?O:y};case 38:return e.t2=S,e.t3=t,e.t4=m,e.t5=v,e.next=44,E(l.url);case 44:return e.t6=e.sent,e.abrupt("return",(0,e.t2)(e.t3,e.t4,e.t5,e.t6));case 46:return e.abrupt("return",N(v)>0?S(t,m,v):g(t,m));case 47:case"end":return e.stop()}}),e)}))),k.apply(this,arguments)}function g(e,t){return I.apply(this,arguments)}function I(){return(I=Object(i.a)(Object(u.a)().mark((function e(t,r){var n,a,i,o;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(i=t.portalItem)&&void 0!==i&&i.url){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,Object(v.a)(i.url);case 5:(o=e.sent)&&S(t,r,{layers:null===(n=o.layers)||void 0===n?void 0:n.map(L),tables:null===(a=o.tables)||void 0===a?void 0:a.map(L)});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e){return{id:e.id,name:e.name}}function S(e,t,r,n){var a,u=r.layers||[],i=r.tables||[];if("Feature Collection"===(null===(a=e.portalItem)||void 0===a?void 0:a.type)&&(u.forEach((function(e){var t;"Table"===(null===e||void 0===e||null===(t=e.layerDefinition)||void 0===t?void 0:t.type)&&i.push(e)})),u=u.filter((function(e){var t;return"Table"!==(null===e||void 0===e||null===(t=e.layerDefinition)||void 0===t?void 0:t.type)}))),"coverage"in r){var s=function(e){var t=e.coverage;if(!t)return null;var r=new URL(t);if(t.toLowerCase().includes("item.html")){var n=r.searchParams.get("id"),a=r.origin;return l.a.fromPortalItem({portalItem:new d.default({id:n,url:a})})}if(Object(c.b)(t))return l.a.fromArcGISServerUrl({url:t});throw new o.a("portal:oriented-imagery-layer-coverage","the provided coverage url couldn't be loaded as a layer")}(r);s&&e.add(s)}u.reverse().forEach((function(a){var u=null===n||void 0===n?void 0:n(a);if(u||!n){var i=T(e,t(a),r,a,u);e.add(i)}})),i.reverse().forEach((function(a){var u=null===n||void 0===n?void 0:n(a);if(u||!n){var i=T(e,t(a),r,a,u);e.tables.add(i)}}))}function T(e,t,r,n,a){var u=e.portalItem,i=new t({portalItem:u.clone(),layerId:n.id});if("sourceJSON"in i&&(i.sourceJSON=a),"subtype-group"!==i.type&&(i.sublayerTitleMode="service-name"),"Feature Collection"===u.type){var o={origin:"portal-item",portal:u.portal||p.a.getDefault()};i.read(n,o);var l=r.showLegend;null!=l&&i.read({showLegend:l},o)}return i}function F(e,t){return D.apply(this,arguments)}function D(){return(D=Object(i.a)(Object(u.a)().mark((function e(t,r){var n,a,i,o,l,c;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!1!==t.supportsData){e.next=2;break}return e.abrupt("return");case 2:if(n=t.instance,a=n.portalItem){e.next=5;break}return e.abrupt("return");case 5:return i=null,e.prev=6,e.next=9,a.fetchData("json",r);case 9:i=e.sent,e.next=14;break;case 12:e.prev=12,e.t0=e.catch(6);case 14:if(!U(n)){e.next=18;break}return o=null,l=!0,i&&N(i)>0&&(null==n.layerId&&(c=C(i),n.layerId="subtype-group"===n.type?null===c||void 0===c?void 0:c[0]:P(i)),(o=M(i,n))&&(1===N(i)&&(l=!1),null!=i.showLegend&&(o.showLegend=i.showLegend))),e.abrupt("return",(l&&"sublayerTitleMode"in n&&"service-name"!==n.sublayerTitleMode&&(n.sublayerTitleMode="item-title-and-service-name"),o));case 18:return e.abrupt("return",i);case 19:case"end":return e.stop()}}),e,null,[[6,12]])})))).apply(this,arguments)}function G(e,t){return J.apply(this,arguments)}function J(){return(J=Object(i.a)(Object(u.a)().mark((function e(t,r){var n,a,i;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=(null===(n=t)||void 0===n?void 0:n.layers)&&null!=(null===(a=t)||void 0===a?void 0:a.tables)){e.next=5;break}return e.next=3,Object(v.a)(r);case 3:i=e.sent,(t=t||{}).layers=t.layers||(null===i||void 0===i?void 0:i.layers),t.tables=t.tables||(null===i||void 0===i?void 0:i.tables);case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e){var t=e.layers;if(t&&t.length)return t[0].id;var r=e.tables;return r&&r.length?r[0].id:null}function M(e,t){var r,n,a=t.layerId,u=(null===(r=e.layers)||void 0===r?void 0:r.find((function(e){return e.id===a})))||(null===(n=e.tables)||void 0===n?void 0:n.find((function(e){return e.id===a})));return u&&function(e,t){return!("feature"===t.type&&"layerType"in e&&"SubtypeGroupLayer"===e.layerType||"subtype-group"===t.type&&!("layerType"in e))}(u,t)?u:null}function N(e){var t,r,n,a;return(null!==(t=null===e||void 0===e||null===(r=e.layers)||void 0===r?void 0:r.length)&&void 0!==t?t:0)+(null!==(n=null===e||void 0===e||null===(a=e.tables)||void 0===a?void 0:a.length)&&void 0!==n?n:0)}function U(e){return"stream"!==e.type&&"oriented-imagery"!==e.type&&"layerId"in e}function C(e){var t,r=[];return null!==e&&void 0!==e&&null!==(t=e.layers)&&void 0!==t&&t.forEach((function(e){"SubtypeGroupLayer"===e.layerType&&r.push(e.id)})),r}function E(e){return R.apply(this,arguments)}function R(){return(R=Object(i.a)(Object(u.a)().mark((function e(t){var r,a,i;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.a)(t);case 2:if(r=e.sent,a=r.layersJSON){e.next=6;break}return e.abrupt("return",null);case 6:return i=[].concat(Object(n.a)(a.layers),Object(n.a)(a.tables)),e.abrupt("return",(function(e){return i.find((function(t){return t.id===e.id}))}));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},601:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(4),a=r(1),u=r(12),i=r(129);function o(e,t){return l.apply(this,arguments)}function l(){return l=Object(u.a)(Object(n.a)().mark((function e(t,r){var u,o;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.default)(t,{responseType:"json",query:Object(a.a)(Object(a.a)({f:"json"},null===r||void 0===r?void 0:r.customParameters),{},{token:null===r||void 0===r?void 0:r.apiKey})});case 2:return u=e.sent,o=u.data,e.abrupt("return",o);case 5:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}},817:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(4),a=r(12),u=r(601);function i(e,t){return o.apply(this,arguments)}function o(){return o=Object(a.a)(Object(n.a)().mark((function e(t,r){var a,i,o,c;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.a)(t,r);case 2:if((i=e.sent).layers=i.layers.filter(l),o={serviceJSON:i},!((null!==(a=i.currentVersion)&&void 0!==a?a:0)<10.5)){e.next=7;break}return e.abrupt("return",o);case 7:return e.next=9,Object(u.a)(t+"/layers",r);case 9:return c=e.sent,e.abrupt("return",(o.layersJSON={layers:c.layers.filter(l),tables:c.tables},o));case 11:case"end":return e.stop()}}),e)}))),o.apply(this,arguments)}function l(e){return!e.type||"Feature Layer"===e.type}},818:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return i}));var n=r(128),a=r(197);function u(e){return{origin:"portal-item",url:Object(n.Q)(e.itemUrl),portal:e.portal||a.a.getDefault(),portalItem:e,readResourcePaths:[]}}function i(e){return{origin:"portal-item",messages:[],writtenProperties:[],url:e.itemUrl?Object(n.Q)(e.itemUrl):null,portal:e.portal||a.a.getDefault(),portalItem:e}}}}]);
//# sourceMappingURL=227.fd28dd77.chunk.js.map