(this["webpackJsonpklw-bank"]=this["webpackJsonpklw-bank"]||[]).push([[0,239],{168:function(e,r,t){"use strict";t.d(r,"a",(function(){return K})),t.d(r,"b",(function(){return oe})),t.d(r,"c",(function(){return Q})),t.d(r,"d",(function(){return ee})),t.d(r,"e",(function(){return W})),t.d(r,"f",(function(){return B})),t.d(r,"g",(function(){return E})),t.d(r,"h",(function(){return J})),t.d(r,"i",(function(){return C})),t.d(r,"j",(function(){return $})),t.d(r,"k",(function(){return ne})),t.d(r,"l",(function(){return re})),t.d(r,"m",(function(){return Y})),t.d(r,"n",(function(){return k})),t.d(r,"o",(function(){return _})),t.d(r,"p",(function(){return V})),t.d(r,"q",(function(){return se})),t.d(r,"r",(function(){return he})),t.d(r,"s",(function(){return ye})),t.d(r,"t",(function(){return ie})),t.d(r,"u",(function(){return ue})),t.d(r,"v",(function(){return O})),t.d(r,"w",(function(){return G})),t.d(r,"x",(function(){return de})),t.d(r,"y",(function(){return ae})),t.d(r,"z",(function(){return fe}));var n=t(112),o=t(99),a=t(92),i=t(101),u=t(102),s=t(111),l=t(392),c=t(139),h=t(122),f=t(335),d=t(908),v=t(169);function y(e,r){return e?r?4:3:r?3:2}var g=u.a.getLogger("esri.layers.graphics.featureConversionUtils"),m={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0,esriGeometryEnvelope:0},b=function(e,r,t,n,o,a){e[t]=o,e[t+1]=a},p=function(e,r,t,n,o,a){e[t]=o,e[t+1]=a,e[t+2]=r[n+2]},j=function(e,r,t,n,o,a){e[t]=o,e[t+1]=a,e[t+2]=r[n+3]},w=function(e,r,t,n,o,a){e[t]=o,e[t+1]=a,e[t+2]=r[n+2],e[t+3]=r[n+3]};function I(e,r,t,n){if(e){if(t)return r&&n?w:p;if(r&&n)return j}else if(r&&n)return p;return b}function O(e,r){var t=e.scale,n=e.translate;return Math.round((r-n[0])/t[0])}function G(e,r){var t=e.scale,n=e.translate;return Math.round((n[1]-r)/t[1])}function M(e,r,t){var n=e.scale,o=e.translate;return r*n[t]+o[t]}function k(e,r,t){return e?r?t?q(e):F(e):t?x(e):T(e):null}function T(e){var r=e.coords;return{x:r[0],y:r[1]}}function N(e,r){return e.coords[0]=r.x,e.coords[1]=r.y,e}function F(e){var r=e.coords;return{x:r[0],y:r[1],z:r[2]}}function P(e,r){return e.coords[0]=r.x,e.coords[1]=r.y,e.coords[2]=r.z,e}function x(e){var r=e.coords;return{x:r[0],y:r[1],m:r[2]}}function Z(e,r){return e.coords[0]=r.x,e.coords[1]=r.y,e.coords[2]=r.m,e}function q(e){var r=e.coords;return{x:r[0],y:r[1],z:r[2],m:r[3]}}function R(e,r){return e.coords[0]=r.x,e.coords[1]=r.y,e.coords[2]=r.z,e.coords[3]=r.m,e}function L(e,r){return e&&r?R:e?P:r?Z:N}function z(e,r,t,n,o){var i,u=L(t,n),s=Object(a.a)(r);try{for(s.s();!(i=s.n()).done;){var l=i.value,c=l.geometry,h=l.attributes,d=null!=c?u(new v.a,c):null;e.push(new f.a(d,h,null,o?h[o]:void 0))}}catch(y){s.e(y)}finally{s.f()}return e}function E(e,r){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:L(null!=r.z,null!=r.m))(e,r)}function Y(e,r,t){if(null==e)return null;for(var n=y(r,t),o=[],a=0;a<e.coords.length;a+=n){for(var i=[],u=0;u<n;u++)i.push(e.coords[a+u]);o.push(i)}return r?t?{points:o,hasZ:r,hasM:t}:{points:o,hasZ:r}:t?{points:o,hasM:t}:{points:o}}function U(e,r,t,n,o){var i,u=y(t,n),s=Object(a.a)(r);try{for(s.s();!(i=s.n()).done;){var l=i.value,c=l.geometry,h=l.attributes,d=null!=c?S(new v.a,c,u):null;e.push(new f.a(d,h,null,o?h[o]:void 0))}}catch(g){s.e(g)}finally{s.f()}return e}function S(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:y(r.hasZ,r.hasM);e.lengths[0]=r.points.length;var n,o=e.coords,i=0,u=Object(a.a)(r.points);try{for(u.s();!(n=u.n()).done;)for(var s=n.value,l=0;l<t;l++)o[i++]=s[l]}catch(c){u.e(c)}finally{u.f()}return e}function V(e,r,t){if(!e)return null;var n,o=y(r,t),i=e.coords,u=e.lengths,s=[],l=0,c=Object(a.a)(u);try{for(c.s();!(n=c.n()).done;){for(var h=n.value,f=[],d=0;d<h;d++){for(var v=[],g=0;g<o;g++)v.push(i[l++]);f.push(v)}s.push(f)}}catch(m){c.e(m)}finally{c.f()}return r?t?{paths:s,hasZ:r,hasM:t}:{paths:s,hasZ:r}:t?{paths:s,hasM:t}:{paths:s}}function A(e,r,t,n,o){var i,u=y(t,n),s=Object(a.a)(r);try{for(s.s();!(i=s.n()).done;){var l=i.value,c=l.geometry,h=l.attributes,d=null!=c?C(new v.a,c,u):null;e.push(new f.a(d,h,null,o?h[o]:void 0))}}catch(g){s.e(g)}finally{s.f()}return e}function C(e,r){var t,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:y(r.hasZ,r.hasM),o=e.lengths,i=e.coords,u=0,s=Object(a.a)(r.paths);try{for(s.s();!(t=s.n()).done;){var l,c=t.value,h=Object(a.a)(c);try{for(h.s();!(l=h.n()).done;)for(var f=l.value,d=0;d<n;d++)i[u++]=f[d]}catch(v){h.e(v)}finally{h.f()}o.push(c.length)}}catch(v){s.e(v)}finally{s.f()}return e}function _(e,r,t){if(!e)return null;var n,o=y(r,t),i=e.coords,u=e.lengths,s=[],l=0,c=Object(a.a)(u);try{for(c.s();!(n=c.n()).done;){for(var h=n.value,f=[],d=0;d<h;d++){for(var v=[],g=0;g<o;g++)v.push(i[l++]);f.push(v)}s.push(f)}}catch(m){c.e(m)}finally{c.f()}return r?t?{rings:s,hasZ:r,hasM:t}:{rings:s,hasZ:r}:t?{rings:s,hasM:t}:{rings:s}}function X(e,r,t,n,o){var i,u=Object(a.a)(r);try{for(u.s();!(i=u.n()).done;){var s=i.value,l=s.geometry,c=s.centroid,h=s.attributes,d=null!=l?J(new v.a,l,t,n):null,y=o?h[o]:void 0;null!=c?e.push(new f.a(d,h,N(new v.a,c),y)):e.push(new f.a(d,h,null,y))}}catch(g){u.e(g)}finally{u.f()}return e}function J(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r.hasZ,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r.hasM;return B(e,r.rings,t,n)}function B(e,r,t,n){var o=y(t,n),i=e.lengths,u=e.coords,s=0;ge(e);var l,c=Object(a.a)(r);try{for(c.s();!(l=c.n()).done;){var h,f=l.value,d=Object(a.a)(f);try{for(d.s();!(h=d.n()).done;)for(var v=h.value,g=0;g<o;g++)u[s++]=v[g]}catch(m){d.e(m)}finally{d.f()}i.push(f.length)}}catch(m){c.e(m)}finally{c.f()}return e}var D=[],H=[];function K(e,r,t,n,a){D[0]=e;var i=Q(H,D,r,t,n,a),u=Object(o.a)(i,1)[0];return me(D),me(H),u}function Q(e,r,t,n,o,u){if(me(e),!t){var s,l=Object(a.a)(r);try{for(l.s();!(s=l.n()).done;){var c=s.value,h=u?c.attributes[u]:void 0;e.push(new f.a(null,c.attributes,null,h))}}catch(d){l.e(d)}finally{l.f()}return e}switch(t){case"esriGeometryPoint":return z(e,r,n,o,u);case"esriGeometryMultipoint":return U(e,r,n,o,u);case"esriGeometryPolyline":return A(e,r,n,o,u);case"esriGeometryPolygon":return X(e,r,n,o,u);default:g.error("convertToFeatureSet:unknown-geometry",new i.a("Unable to parse unknown geometry type '".concat(t,"'"))),me(e)}return e}function W(e,r,t,n,o,a){var u=e.length;switch(t){case"esriGeometryPoint":z(e,r,n,o,a);break;case"esriGeometryMultipoint":U(e,r,n,o,a);break;case"esriGeometryPolyline":A(e,r,n,o,a);break;case"esriGeometryPolygon":X(e,r,n,o,a);break;default:g.error("convertToFeatureSet:unknown-geometry",new i.a("Unable to parse unknown geometry type '".concat(t,"'")))}for(var s=0;s<r.length;s++)e[s+u].geometryType=t,e[s+u].insertAfter=r[s].insertAfter,e[s+u].groupId=r[s].groupId;return e}function $(e,r,t,n){H[0]=e,te(D,H,r,t,n);var o=D[0];return me(D),me(H),o}function ee(e,r,t){if(null==e)return null;var n=new v.a;return"hasZ"in e&&null==r&&(r=e.hasZ),"hasM"in e&&null==t&&(t=e.hasM),Object(h.f)(e)?L(null!=r?r:null!=e.z,null!=t?t:null!=e.m)(n,e):Object(h.g)(e)?J(n,e,r,t):Object(h.h)(e)?C(n,e,y(r,t)):Object(h.e)(e)?S(n,e,y(r,t)):void g.error("convertFromGeometry:unknown-geometry",new i.a("Unable to parse unknown geometry type '".concat(e,"'")))}function re(e,r,t,n){var o=e&&("coords"in e?e:e.geometry);if(null==o)return null;switch(r){case"esriGeometryPoint":var a=T;return t&&n?a=q:t?a=F:n&&(a=x),a(o);case"esriGeometryMultipoint":return Y(o,t,n);case"esriGeometryPolyline":return V(o,t,n);case"esriGeometryPolygon":return _(o,t,n);default:return g.error("convertToGeometry:unknown-geometry",new i.a("Unable to parse unknown geometry type '".concat(r,"'"))),null}}function te(e,r,t,n,o){if(me(e),null==t)return function(e,r){var t,n=Object(a.a)(r);try{for(n.s();!(t=n.n()).done;){var o=t.value;e.push({attributes:o.attributes})}}catch(i){n.e(i)}finally{n.f()}return e}(e,r);switch(t){case"esriGeometryPoint":return function(e,r,t,n){var o=T;t&&n?o=q:t?o=F:n&&(o=x);var i,u=Object(a.a)(r);try{for(u.s();!(i=u.n()).done;){var s=i.value,l=s.geometry,c=s.attributes,h=null!=l?o(l):null;e.push({attributes:c,geometry:h})}}catch(f){u.e(f)}finally{u.f()}return e}(e,r,n,o);case"esriGeometryMultipoint":return function(e,r,t,n){var o,i=Object(a.a)(r);try{for(i.s();!(o=i.n()).done;){var u=o.value,s=u.geometry,l=u.attributes;e.push({attributes:l,geometry:null!=s?Y(s,t,n):null})}}catch(c){i.e(c)}finally{i.f()}return e}(e,r,n,o);case"esriGeometryPolyline":return function(e,r,t,n){var o,i=Object(a.a)(r);try{for(i.s();!(o=i.n()).done;){var u=o.value,s=u.geometry,l=u.attributes;e.push({attributes:l,geometry:null!=s?V(s,t,n):null})}}catch(c){i.e(c)}finally{i.f()}return e}(e,r,n,o);case"esriGeometryPolygon":return function(e,r,t,n){var o,i=Object(a.a)(r);try{for(i.s();!(o=i.n()).done;){var u=o.value,s=u.geometry,l=u.attributes,c=u.centroid,h=null!=s?_(s,t,n):null;if(null!=c){var f=T(c);e.push({attributes:l,centroid:f,geometry:h})}else e.push({attributes:l,geometry:h})}}catch(d){i.e(d)}finally{i.f()}return e}(e,r,n,o);default:g.error("convertToFeatureSet:unknown-geometry",new i.a("Unable to parse unknown geometry type '".concat(t,"'")))}return e}function ne(e){var r=e.objectIdFieldName,t=e.spatialReference,n=e.transform,o=e.fields,a=e.hasM,i=e.hasZ,u=e.features,s=e.geometryType,l=e.exceededTransferLimit,c=e.uniqueIdField,h=e.queryGeometry,f=e.queryGeometryType,d={features:te([],u,s,i,a),fields:o,geometryType:s,objectIdFieldName:r,spatialReference:t,uniqueIdField:c,queryGeometry:re(h,f,!1,!1)};return n&&(d.transform=n),l&&(d.exceededTransferLimit=l),a&&(d.hasM=a),i&&(d.hasZ=i),d}function oe(e,r){var t,n=new d.a,o=e.hasM,a=e.hasZ,u=e.features,s=e.objectIdFieldName,l=e.spatialReference,c=e.geometryType,h=e.exceededTransferLimit,f=e.transform,v=e.fields;return v&&(n.fields=v),n.geometryType=null!==c&&void 0!==c?c:null,n.objectIdFieldName=null!==(t=null!==s&&void 0!==s?s:r)&&void 0!==t?t:null,n.spatialReference=null!==l&&void 0!==l?l:null,n.objectIdFieldName?(u&&Q(n.features,u,c,a,o,n.objectIdFieldName),h&&(n.exceededTransferLimit=h),o&&(n.hasM=o),a&&(n.hasZ=a),f&&(n.transform=f),n):(g.error(new i.a("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),n)}function ae(e){var r=e.transform,t=e.features,n=e.hasM,o=e.hasZ;if(!r)return e;var i,u=Object(a.a)(t);try{for(u.s();!(i=u.n()).done;){var s=i.value;null!=s.geometry&&fe(s.geometry,s.geometry,n,o,r),null!=s.centroid&&fe(s.centroid,s.centroid,n,o,r)}}catch(l){u.e(l)}finally{u.f()}return e.transform=null,e}function ie(e,r){var t=r.geometryType,n=r.features,o=r.hasM,a=r.hasZ;if(!e)return r;for(var i=0;i<n.length;i++){var u=n[i],s=u.weakClone();s.geometry=new v.a,ue(s.geometry,u.geometry,o,a,t,e),u.centroid&&(s.centroid=new v.a,ue(s.centroid,u.centroid,o,a,"esriGeometryPoint",e)),n[i]=s}return r.transform=e,r}function ue(e,r,t,n,o,i){var u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:t,s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:n;if(ge(e),null==r||!r.coords.length)return null;var l=m[o],c=r.coords,h=r.lengths,f=y(t,n),d=y(t&&u,n&&s),v=I(t,n,u,s);if(!h.length)return v(e.coords,c,0,0,O(i,c[0]),G(i,c[1])),ge(e,f,0),e;var g,b,p,j,w,M=0,k=0,T=k,N=Object(a.a)(h);try{for(N.s();!(w=N.n()).done;){var F=w.value;if(!(F<l)){var P=0;k=T,p=g=O(i,c[M]),j=b=G(i,c[M+1]),v(e.coords,c,k,M,p,j),P++,M+=f,k+=d;for(var x=1;x<F;x++,M+=f)p=O(i,c[M]),j=G(i,c[M+1]),p===g&&j===b||(v(e.coords,c,k,M,p-g,j-b),k+=d,P++,g=p,b=j);P>=l&&(e.lengths.push(P),T=k)}}}catch(Z){N.e(Z)}finally{N.f()}return me(e.coords,T),e.coords.length?e:null}function se(e,r,t,n,o,i){var u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:t,s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:n;if(ge(e),!r||!r.coords.length)return null;var l=m[o],c=r.coords,h=r.lengths,f=y(t,n),d=y(t&&u,n&&s),v=I(t,n,u,s);if(!h.length)return v(e.coords,c,0,0,c[0],c[1]),ge(e,f,0),e;var g,b=0,p=i*i,j=Object(a.a)(h);try{for(j.s();!(g=j.n()).done;){var w=g.value;if(w<l)b+=w*f;else{var O=e.coords.length/d,G=b,M=b+(w-1)*f;v(e.coords,c,e.coords.length,G,c[G],c[G+1]),ce(e.coords,c,f,p,v,G,M),v(e.coords,c,e.coords.length,M,c[M],c[M+1]);var k=e.coords.length/d-O;k>=l?e.lengths.push(k):me(e.coords,O*d),b+=w*f}}}catch(T){j.e(T)}finally{j.f()}return e.coords.length?e:null}function le(e,r,t,n){var o=e[r],a=e[r+1],i=e[t],u=e[t+1],s=e[n],l=e[n+1],c=i,h=u,f=s-c,d=l-h;if(0!==f||0!==d){var v=((o-c)*f+(a-h)*d)/(f*f+d*d);v>1?(c=s,h=l):v>0&&(c+=f*v,h+=d*v)}return(f=o-c)*f+(d=a-h)*d}function ce(e,r,t,n,o,a,i){for(var u,s=n,l=0,c=a+t;c<i;c+=t)(u=le(r,c,a,i))>s&&(l=c,s=u);s>n&&(l-a>t&&ce(e,r,t,n,o,a,l),o(e,r,e.length,l,r[l],r[l+1]),i-l>t&&ce(e,r,t,n,o,l,i))}function he(e,r,t,n){if(null==r||!r.coords||!r.coords.length)return null;var o=y(t,n),a=Number.POSITIVE_INFINITY,i=Number.POSITIVE_INFINITY,u=Number.NEGATIVE_INFINITY,s=Number.NEGATIVE_INFINITY;if(r&&r.coords)for(var h=r.coords,f=0;f<h.length;f+=o){var d=h[f],v=h[f+1];a=Math.min(a,d),u=Math.max(u,d),i=Math.min(i,v),s=Math.max(s,v)}return Object(l.k)(e)?Object(l.i)(e,a,i,u,s):Object(c.o)(a,i,u,s,e),e}function fe(e,r,t,n,o){var a,i,u,l,c,h,f,d,v=r.coords,g=r.lengths,m=y(t,n);if(!v.length)return e!==r&&ge(e),e;Object(s.c)(o);var b=o.originPosition,p=o.scale,j=o.translate,w=be;w.originPosition=b;var I=w.scale;I[0]=null!==(a=p[0])&&void 0!==a?a:1,I[1]=-(null!==(i=p[1])&&void 0!==i?i:1),I[2]=null!==(u=p[2])&&void 0!==u?u:1,I[3]=null!==(l=p[3])&&void 0!==l?l:1;var O=w.translate;if(O[0]=null!==(c=j[0])&&void 0!==c?c:0,O[1]=null!==(h=j[1])&&void 0!==h?h:0,O[2]=null!==(f=j[2])&&void 0!==f?f:0,O[3]=null!==(d=j[3])&&void 0!==d?d:0,!g.length){for(var G=0;G<m;++G)e.coords[G]=M(w,v[G],G);return e!==r&&ge(e,m,0),e}for(var k=0,T=0;T<g.length;T++){var N=g[T];e.lengths[T]=N;for(var F=0;F<m;++F)e.coords[k+F]=M(w,v[k+F],F);var P=e.coords[k],x=e.coords[k+1];k+=m;for(var Z=1;Z<N;Z++,k+=m){P+=v[k]*I[0],x+=v[k+1]*I[1],e.coords[k]=P,e.coords[k+1]=x;for(var q=2;q<m;++q)e.coords[k+q]=M(w,v[k+q],q)}}return e!==r&&ge(e,v.length,g.length),e}function de(e,r,t,o,a,i){var u;if(ge(e),(u=e.lengths).push.apply(u,Object(n.a)(r.lengths)),t===a&&o===i)for(var s=0;s<r.coords.length;s++)e.coords.push(r.coords[s]);else for(var l=y(t,o),c=I(t,o,a,i),h=r.coords,f=0;f<h.length;f+=l)c(e.coords,h,e.coords.length,f,h[f],h[f+1]);return e}function ve(e,r,t,n){for(var o=0,a=e[n*r],i=e[n*(r+1)],u=1;u<t;u++){var s=a+e[n*(r+u)],l=i+e[n*(r+u)+1],c=(s-a)*(l+i);a=s,i=l,o+=c}return.5*o}function ye(e,r){for(var t=e.coords,n=e.lengths,o=0,a=0,i=0;i<n.length;i++){var u=n[i];a+=ve(t,o,u,r),o+=u}return Math.abs(a)}function ge(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;me(e.lengths,t),me(e.coords,r)}function me(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e.length!==r&&(e.length=r)}var be={originPosition:"lowerLeft",scale:[1,1,1,1],translate:[0,0,0,0]}},169:function(e,r,t){"use strict";t.d(r,"a",(function(){return u}));var n=t(99),o=t(112),a=t(89),i=t(88),u=function(){function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];Object(a.a)(this,e),this.lengths=null!==r&&void 0!==r?r:[],this.coords=null!==t&&void 0!==t?t:[],this.hasIndeterminateRingOrder=n}return Object(i.a)(e,[{key:"isPoint",get:function(){return 0===this.lengths.length}},{key:"maxLength",get:function(){return Math.max.apply(Math,Object(o.a)(this.lengths))}},{key:"size",get:function(){return this.lengths.reduce((function(e,r){return e+r}))}},{key:"forEachVertex",value:function(e){var r=0;this.lengths.length||e(this.coords[0],this.coords[1]);for(var t=0;t<this.lengths.length;t++){for(var n=this.lengths[t],o=0;o<n;o++)e(this.coords[2*(o+r)],this.coords[2*(o+r)+1]);r+=n}}},{key:"clone",value:function(r){return r?(r.set(this.coords),new e(this.lengths.slice(),r,this.hasIndeterminateRingOrder)):new e(this.lengths.slice(),this.coords.slice(),this.hasIndeterminateRingOrder)}}],[{key:"fromRect",value:function(r){var t=Object(n.a)(r,4),o=t[0],a=t[1],i=t[2]-o,u=t[3]-a;return new e([5],[o,a,i,0,0,u,-i,0,0,-u])}}]),e}()},335:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return l})),t.d(r,"c",(function(){return s}));var n=t(90),o=t(91),a=t(89),i=t(88),u=function(){function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0;Object(a.a)(this,e),this.geometry=r,this.attributes=t,this.centroid=n,this.objectId=o,this.displayId=0,this.geohashX=0,this.geohashY=0}return Object(i.a)(e,[{key:"weakClone",value:function(){var r=new e(this.geometry,this.attributes,this.centroid,this.objectId);return r.displayId=this.displayId,r.geohashX=this.geohashX,r.geohashY=this.geohashY,r}}]),e}();function s(e){return!(null==e.geometry||!e.geometry.coords||!e.geometry.coords.length)}var l=function(e){Object(n.a)(t,e);var r=Object(o.a)(t);function t(){return Object(a.a)(this,t),r.apply(this,arguments)}return Object(i.a)(t)}(u)},908:function(e,r,t){"use strict";t.d(r,"a",(function(){return a}));var n=t(89),o=t(88),a=function(){function e(){Object(n.a)(this,e),this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}return Object(o.a)(e,[{key:"weakClone",value:function(){var r=new e;return r.objectIdFieldName=this.objectIdFieldName,r.globalIdFieldName=this.globalIdFieldName,r.geohashFieldName=this.geohashFieldName,r.geometryProperties=this.geometryProperties,r.geometryType=this.geometryType,r.spatialReference=this.spatialReference,r.hasZ=this.hasZ,r.hasM=this.hasM,r.features=this.features,r.fields=this.fields,r.transform=this.transform,r.exceededTransferLimit=this.exceededTransferLimit,r.uniqueIdField=this.uniqueIdField,r.queryGeometry=this.queryGeometry,r.queryGeometryType=this.queryGeometryType,r}}]),e}()}}]);
//# sourceMappingURL=0.cee82584.chunk.js.map