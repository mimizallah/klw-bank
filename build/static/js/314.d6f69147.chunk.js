(this["webpackJsonpklw-bank"]=this["webpackJsonpklw-bank"]||[]).push([[314],{1654:function(e,t,a){"use strict";a.r(t),a.d(t,"execute",(function(){return b}));var r,n=a(4),s=a(1),u=a(12),c=a(101);function b(e,t){var a=t.responseType;a?"array-buffer"!==a&&"blob"!==a&&"json"!==a&&"native"!==a&&"native-request-init"!==a&&"text"!==a&&(a="text"):a="json",t.responseType=a;var b=t.signal;return delete t.signal,globalThis.invokeStaticMessage("request",{url:e,options:t},{signal:b}).then(function(){var i=Object(u.a)(Object(n.a)().mark((function u(i){var o,p,l,k,f,x,v;return Object(n.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!i.data){n.next=23;break}if(!(i.data instanceof ArrayBuffer)){n.next=16;break}if("json"!==a&&"text"!==a&&"blob"!==a||(o=new Blob([i.data]),"json"!==a&&"text"!==a||(r||(r=new FileReaderSync),k=r.readAsText(o),"json"!==a))){n.next=14;break}n.prev=3,p=JSON.parse(k||null),n.next=11;break;case 7:throw n.prev=7,n.t0=n.catch(3),x=Object(s.a)(Object(s.a)({},n.t0),{},{url:e,requestOptions:t}),new c.a("request:server",n.t0.message,x);case 11:if(!p.error){n.next=14;break}throw v=Object(s.a)(Object(s.a)({},p.error),{},{url:e,requestOptions:t}),new c.a("request:server",p.error.message,v);case 14:n.next=23;break;case 16:if(n.t1="native"===a,!n.t1){n.next=23;break}return i.data.signal=b,n.next=21,fetch(i.data.url,i.data);case 21:l=n.sent,i.httpStatus=l.status;case 23:n.t2=a,n.next="blob"===n.t2?26:"json"===n.t2?28:"native"===n.t2?30:"text"===n.t2?32:34;break;case 26:return f=o,n.abrupt("break",35);case 28:return f=p,n.abrupt("break",35);case 30:return f=l,n.abrupt("break",35);case 32:return f=k,n.abrupt("break",35);case 34:f=i.data;case 35:return n.abrupt("return",{data:f,httpStatus:i.httpStatus,requestOptions:t,ssl:i.ssl,url:e});case 36:case"end":return n.stop()}}),u,null,[[3,7]])})));return function(e){return i.apply(this,arguments)}}())}}}]);
//# sourceMappingURL=314.d6f69147.chunk.js.map