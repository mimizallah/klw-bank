(this["webpackJsonpklw-bank"]=this["webpackJsonpklw-bank"]||[]).push([[326],{2225:function(e,r,t){"use strict";t.r(r),t.d(r,"createLabelFunction",(function(){return h})),t.d(r,"formatField",(function(){return y}));var n=t(4),a=t(92),u=t(12),i=t(101),c=t(102),l=t(455),s=t(502),o=t(195),f=t(892),b=t(207),p=c.a.getLogger("esri.layers.support.labelFormatUtils"),d={type:"simple",evaluate:function(){return null}},v={getAttribute:function(e,r){return e.field(r)}};function h(e,r,t){return w.apply(this,arguments)}function w(){return w=Object(u.a)(Object(n.a)().mark((function e(r,a,u){var c,l,s,o,h,w,x;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r&&r.symbol&&a){e.next=2;break}return e.abrupt("return",d);case 2:if(c=r.where,l=Object(f.b)(r),!c){e.next=10;break}return e.next=7,t.e(4).then(t.bind(null,436));case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=null;case 11:if(s=e.t0,"arcade"!==l.type){e.next=21;break}return e.next=15,Object(b.c)(l.expression,u,a);case 15:if(null!=(h=e.sent)){e.next=18;break}return e.abrupt("return",d);case 18:o={type:"arcade",evaluate:function(e){try{var r=h.evaluate({$feature:"attributes"in e?h.repurposeFeature(e):e},h.services);if(null!=r)return r.toString()}catch(u){p.error(new i.a("arcade-expression-error","Encountered an error when evaluating label expression for feature",{error:u,feature:e,expression:l}))}return null},needsHydrationToEvaluate:function(){return null==Object(f.e)(l.expression)}},e.next=22;break;case 21:o={type:"simple",evaluate:function(e){return l.expression.replaceAll(/{[^}]*}/g,(function(r){var t=r.slice(1,-1),n=a.get(t);if(!n)return r;var u=null;return"attributes"in e?e&&e.attributes&&(u=e.attributes[n.name]):u=e.field(n.name),null==u?"":y(u,n)}))}};case 22:if(!c){e.next=32;break}e.prev=23,w=s.WhereClause.create(c,a),e.next=30;break;case 27:return e.prev=27,e.t1=e.catch(23),e.abrupt("return",(p.error(new i.a("bad-where-clause","Encountered an error when evaluating where clause, ignoring",{where:c,error:e.t1})),d));case 30:x=o.evaluate,o.evaluate=function(e){var r="attributes"in e?void 0:v;try{if(w.testFeature(e,r))return x(e)}catch(t){p.error(new i.a("bad-where-clause","Encountered an error when evaluating where clause for feature",{where:c,feature:e,error:t}))}return null};case 32:return e.abrupt("return",o);case 33:case"end":return e.stop()}}),e,null,[[23,27]])}))),w.apply(this,arguments)}function y(e,r){if(null==e)return"";var t=r.domain;if(t)if("codedValue"===t.type||"coded-value"===t.type){var n,u=e,i=Object(a.a)(t.codedValues);try{for(i.s();!(n=i.n()).done;){var c=n.value;if(c.code===u)return c.name}}catch(v){i.e(v)}finally{i.f()}}else if("range"===t.type){var f=+e,b="range"in t?t.range[0]:t.minValue,p="range"in t?t.range[1]:t.maxValue;if(b<=f&&f<=p)return t.name}var d=e;return"date"===r.type||"esriFieldTypeDate"===r.type?d=Object(l.c)(d,Object(l.a)("short-date")):Object(o.v)(r)&&(d=Object(s.b)(+d)),d||""}}}]);
//# sourceMappingURL=326.350ced6f.chunk.js.map