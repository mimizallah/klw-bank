(this["webpackJsonpklw-bank"]=this["webpackJsonpklw-bank"]||[]).push([[64,315],{1664:function(e,n,t){"use strict";t.r(n),t.d(n,"hydratedAdapter",(function(){return c}));var r=t(130),i=t(363),a=t(135),u=t(164),o=t(192),c={convertToGEGeometry:function(e,n){if(null==n)return null;var t="cache"in n?n.cache._geVersion:void 0;return null==t&&(t=e.convertJSONToGeometry(n),"cache"in n&&(n.cache._geVersion=t)),t},exportPoint:function(e,n,t){var r=e.hasZ(n),i=e.hasM(n),u=new a.a({x:e.getPointX(n),y:e.getPointY(n),spatialReference:t});return r&&(u.z=e.getPointZ(n)),i&&(u.m=e.getPointM(n)),u.cache._geVersion=n,u},exportPolygon:function(e,n,t){var r=new u.a({rings:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return r.cache._geVersion=n,r},exportPolyline:function(e,n,t){var r=new o.a({paths:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return r.cache._geVersion=n,r},exportMultipoint:function(e,n,t){var r=new i.a({hasZ:e.hasZ(n),hasM:e.hasM(n),points:e.exportPoints(n),spatialReference:t});return r.cache._geVersion=n,r},exportExtent:function(e,n,t){var i=e.hasZ(n),a=e.hasM(n),u=new r.a({xmin:e.getXMin(n),ymin:e.getYMin(n),xmax:e.getXMax(n),ymax:e.getYMax(n),spatialReference:t});if(i){var o=e.getZExtent(n);u.zmin=o.vmin,u.zmax=o.vmax}if(a){var c=e.getMExtent(n);u.mmin=c.vmin,u.mmax=c.vmax}return u.cache._geVersion=n,u}}},2218:function(e,n,t){"use strict";t.r(n),t.d(n,"buffer",(function(){return T})),t.d(n,"changeDefaultSpatialReferenceTolerance",(function(){return K})),t.d(n,"clearDefaultSpatialReferenceTolerance",(function(){return Q})),t.d(n,"clip",(function(){return l})),t.d(n,"contains",(function(){return p})),t.d(n,"convexHull",(function(){return P})),t.d(n,"crosses",(function(){return y})),t.d(n,"cut",(function(){return h})),t.d(n,"densify",(function(){return I})),t.d(n,"difference",(function(){return S})),t.d(n,"disjoint",(function(){return m})),t.d(n,"distance",(function(){return v})),t.d(n,"equals",(function(){return g})),t.d(n,"extendedSpatialReferenceInfo",(function(){return s})),t.d(n,"flipHorizontal",(function(){return L})),t.d(n,"flipVertical",(function(){return H})),t.d(n,"generalize",(function(){return N})),t.d(n,"geodesicArea",(function(){return B})),t.d(n,"geodesicBuffer",(function(){return j})),t.d(n,"geodesicDensify",(function(){return X})),t.d(n,"geodesicLength",(function(){return C})),t.d(n,"intersect",(function(){return Z})),t.d(n,"intersectLinesToPoints",(function(){return F})),t.d(n,"intersects",(function(){return G})),t.d(n,"isSimple",(function(){return M})),t.d(n,"nearestCoordinate",(function(){return z})),t.d(n,"nearestVertex",(function(){return _})),t.d(n,"nearestVertices",(function(){return k})),t.d(n,"offset",(function(){return D})),t.d(n,"overlaps",(function(){return w})),t.d(n,"planarArea",(function(){return Y})),t.d(n,"planarLength",(function(){return q})),t.d(n,"relate",(function(){return R})),t.d(n,"rotate",(function(){return J})),t.d(n,"simplify",(function(){return V})),t.d(n,"symmetricDifference",(function(){return b})),t.d(n,"touches",(function(){return A})),t.d(n,"union",(function(){return O})),t.d(n,"within",(function(){return x}));var r=t(88),i=t(89),a=t(90),u=t(91),o=t(297),c=t(909),d=t(1664);function f(e){return Array.isArray(e)?e[0].spatialReference:e&&e.spatialReference}function s(e){return c.G.extendedSpatialReferenceInfo(e)}function l(e,n){return c.G.clip(d.hydratedAdapter,f(e),e,n)}function h(e,n){return c.G.cut(d.hydratedAdapter,f(e),e,n)}function p(e,n){return c.G.contains(d.hydratedAdapter,f(e),e,n)}function y(e,n){return c.G.crosses(d.hydratedAdapter,f(e),e,n)}function v(e,n,t){return c.G.distance(d.hydratedAdapter,f(e),e,n,t)}function g(e,n){return c.G.equals(d.hydratedAdapter,f(e),e,n)}function G(e,n){return c.G.intersects(d.hydratedAdapter,f(e),e,n)}function A(e,n){return c.G.touches(d.hydratedAdapter,f(e),e,n)}function x(e,n){return c.G.within(d.hydratedAdapter,f(e),e,n)}function m(e,n){return c.G.disjoint(d.hydratedAdapter,f(e),e,n)}function w(e,n){return c.G.overlaps(d.hydratedAdapter,f(e),e,n)}function R(e,n,t){return c.G.relate(d.hydratedAdapter,f(e),e,n,t)}function M(e){return c.G.isSimple(d.hydratedAdapter,f(e),e)}function V(e){return c.G.simplify(d.hydratedAdapter,f(e),e)}function P(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return c.G.convexHull(d.hydratedAdapter,f(e),e,n)}function S(e,n){return c.G.difference(d.hydratedAdapter,f(e),e,n)}function b(e,n){return c.G.symmetricDifference(d.hydratedAdapter,f(e),e,n)}function Z(e,n){return c.G.intersect(d.hydratedAdapter,f(e),e,n)}function O(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return c.G.union(d.hydratedAdapter,f(e),e,n)}function D(e,n,t,r,i,a){return c.G.offset(d.hydratedAdapter,f(e),e,n,t,r,i,a)}function T(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return c.G.buffer(d.hydratedAdapter,f(e),e,n,t,r)}function j(e,n,t,r,i,a){return c.G.geodesicBuffer(d.hydratedAdapter,f(e),e,n,t,r,i,a)}function z(e,n){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return c.G.nearestCoordinate(d.hydratedAdapter,f(e),e,n,t)}function _(e,n){return c.G.nearestVertex(d.hydratedAdapter,f(e),e,n)}function k(e,n,t,r){return c.G.nearestVertices(d.hydratedAdapter,f(e),e,n,t,r)}function E(e){var n,t;return"xmin"in e?"center"in e?e.center:null:"x"in e?e:"extent"in e&&null!==(n=null===(t=e.extent)||void 0===t?void 0:t.center)&&void 0!==n?n:null}function J(e,n,t){var r;if(null==e)throw new U;var i=e.spatialReference;if(null==(t=null!==(r=t)&&void 0!==r?r:E(e)))throw new U;var a=e.constructor.fromJSON(c.G.rotate(e,n,t));return a.spatialReference=i,a}function L(e,n){var t;if(null==e)throw new U;var r=e.spatialReference;if(null==(n=null!==(t=n)&&void 0!==t?t:E(e)))throw new U;var i=e.constructor.fromJSON(c.G.flipHorizontal(e,n));return i.spatialReference=r,i}function H(e,n){var t;if(null==e)throw new U;var r=e.spatialReference;if(null==(n=null!==(t=n)&&void 0!==t?t:E(e)))throw new U;var i=e.constructor.fromJSON(c.G.flipVertical(e,n));return i.spatialReference=r,i}function N(e,n,t,r){return c.G.generalize(d.hydratedAdapter,f(e),e,n,t,r)}function I(e,n,t){return c.G.densify(d.hydratedAdapter,f(e),e,n,t)}function X(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return c.G.geodesicDensify(d.hydratedAdapter,f(e),e,n,t,r)}function Y(e,n){return c.G.planarArea(d.hydratedAdapter,f(e),e,n)}function q(e,n){return c.G.planarLength(d.hydratedAdapter,f(e),e,n)}function B(e,n,t){return c.G.geodesicArea(d.hydratedAdapter,f(e),e,n,t)}function C(e,n,t){return c.G.geodesicLength(d.hydratedAdapter,f(e),e,n,t)}function F(e,n){return c.G.intersectLinesToPoints(d.hydratedAdapter,f(e),e,n)}function K(e,n){c.G.changeDefaultSpatialReferenceTolerance(e,n)}function Q(e){c.G.clearDefaultSpatialReferenceTolerance(e)}var U=function(e){Object(a.a)(t,e);var n=Object(u.a)(t);function t(){return Object(i.a)(this,t),n.call(this,"Illegal Argument Exception")}return Object(r.a)(t)}(Object(o.a)(Error))}}]);
//# sourceMappingURL=64.5bcaaf1c.chunk.js.map