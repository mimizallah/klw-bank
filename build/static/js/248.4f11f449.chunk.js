(this["webpackJsonpklw-bank"]=this["webpackJsonpklw-bank"]||[]).push([[248],{1331:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return f}));var i=n(141),r=n(726),o=n(167),a=n(157),u=n(620);function c(e){return e?{origin:Object(a.d)(e.origin),vector:Object(a.d)(e.vector)}:{origin:Object(a.f)(),vector:Object(a.f)()}}function s(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c();return Object(o.h)(n.origin,e),Object(o.h)(n.vector,t),n}function d(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c();return Object(o.h)(n.origin,e),Object(o.g)(n.vector,t,e),n}function h(e,t){var n=Object(o.g)(u.b.get(),t,e.origin),r=Object(o.j)(e.vector,n),a=Object(o.j)(e.vector,e.vector),c=Object(i.e)(r/a,0,1),s=Object(o.g)(u.b.get(),Object(o.l)(u.b.get(),e.vector,c),n);return Object(o.j)(s,s)}function f(e,t,n){return function(e,t,n,r,a){var c=e.vector,s=e.origin,d=Object(o.g)(u.b.get(),t,s),h=Object(o.j)(c,d)/Object(o.u)(c);return Object(o.l)(a,c,Object(i.e)(h,n,r)),Object(o.f)(a,a,e.origin)}(e,t,0,1,n)}Object(a.f)(),Object(a.f)(),new r.a((function(){return c()}))},2263:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return ne}));var i=n(92),r=n(4),o=n(12),a=n(89),u=n(88),c=n(94),s=n(110),d=(n(102),n(96),n(98),n(93),n(101),n(95)),h=n(167),f=n(157),l=n(1331),b=n(725),O=n(291),_=n(440),v=n(726),j=(n(379),n(428),n(396)),m=n(992);function p(e){return e?{ray:Object(m.c)(e.ray),c0:e.c0,c1:e.c1}:{ray:Object(m.c)(),c0:0,c1:Number.MAX_VALUE}}var T,g,y;new v.a((function(){return p()})),n(1115),n(620);function R(e,t){for(var n=0;n<E;n++){var i=e[n];if(i[0]*t[0]+i[1]*t[1]+i[2]*t[2]+i[3]>=t[3])return!1}return!0}(y=T||(T={}))[y.LEFT=0]="LEFT",y[y.RIGHT=1]="RIGHT",y[y.BOTTOM=2]="BOTTOM",y[y.TOP=3]="TOP",y[y.NEAR=4]="NEAR",y[y.FAR=5]="FAR",function(e){e[e.NEAR_BOTTOM_LEFT=0]="NEAR_BOTTOM_LEFT",e[e.NEAR_BOTTOM_RIGHT=1]="NEAR_BOTTOM_RIGHT",e[e.NEAR_TOP_RIGHT=2]="NEAR_TOP_RIGHT",e[e.NEAR_TOP_LEFT=3]="NEAR_TOP_LEFT",e[e.FAR_BOTTOM_LEFT=4]="FAR_BOTTOM_LEFT",e[e.FAR_BOTTOM_RIGHT=5]="FAR_BOTTOM_RIGHT",e[e.FAR_TOP_RIGHT=6]="FAR_TOP_RIGHT",e[e.FAR_TOP_LEFT=7]="FAR_TOP_LEFT"}(g||(g={}));g.FAR_BOTTOM_RIGHT,g.NEAR_BOTTOM_RIGHT,g.NEAR_BOTTOM_LEFT,g.FAR_BOTTOM_LEFT,g.NEAR_BOTTOM_LEFT,g.NEAR_BOTTOM_RIGHT,g.NEAR_TOP_RIGHT,g.NEAR_TOP_LEFT,g.FAR_BOTTOM_RIGHT,g.FAR_BOTTOM_LEFT,g.FAR_TOP_LEFT,g.FAR_TOP_RIGHT,g.NEAR_BOTTOM_RIGHT,g.FAR_BOTTOM_RIGHT,g.FAR_TOP_RIGHT,g.NEAR_TOP_RIGHT,g.FAR_BOTTOM_LEFT,g.NEAR_BOTTOM_LEFT,g.NEAR_TOP_LEFT,g.FAR_TOP_LEFT,g.FAR_TOP_LEFT,g.NEAR_TOP_LEFT,g.NEAR_TOP_RIGHT,g.FAR_TOP_RIGHT;var E=6,k=(Object(j.d)(-1,-1,-1,1),Object(j.d)(1,-1,-1,1),Object(j.d)(1,1,-1,1),Object(j.d)(-1,1,-1,1),Object(j.d)(-1,-1,1,1),Object(j.d)(1,-1,1,1),Object(j.d)(1,1,1,1),Object(j.d)(-1,1,1,1),new v.a(p),Object(f.f)(),Object(f.f)(),Object(f.f)(),Object(f.f)(),Object(f.f)(),Object(f.f)(),Object(f.f)(),Object(f.f)(),n(635)),N=function(){function e(t,n){Object(a.a)(this,e),this.objectToBoundingSphere=t,this._maximumObjectsPerNode=10,this._maximumDepth=20,this._degenerateObjects=new Set,this._root=new A,this._objectCount=0,n&&(void 0!==n.maximumObjectsPerNode&&(this._maximumObjectsPerNode=n.maximumObjectsPerNode),void 0!==n.maximumDepth&&(this._maximumDepth=n.maximumDepth))}return Object(u.a)(e,[{key:"bounds",get:function(){return this._root.bounds}},{key:"halfSize",get:function(){return this._root.halfSize}},{key:"root",get:function(){return this._root.node}},{key:"maximumObjectsPerNode",get:function(){return this._maximumObjectsPerNode}},{key:"maximumDepth",get:function(){return this._maximumDepth}},{key:"objectCount",get:function(){return this._objectCount}},{key:"destroy",value:function(){this._degenerateObjects.clear(),A.clearPool(),C[0]=null,q.prune(),Q.prune()}},{key:"add",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.length;this._objectCount+=t,this._grow(e,t);for(var n=A.acquire(),i=0;i<t;i++){var r=e[i];this._isDegenerate(r)?this._degenerateObjects.add(r):(n.init(this._root),this._add(r,n))}A.release(n)}},{key:"remove",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this._objectCount-=e.length;var n,r=A.acquire(),o=Object(i.a)(e);try{for(o.s();!(n=o.n()).done;){var a=n.value,u=null!=t?t:Object(b.e)(this.objectToBoundingSphere(a),J);L(u[3])?(r.init(this._root),this._remove(a,u,r)):this._degenerateObjects.delete(a)}}catch(c){o.e(c)}finally{o.f()}A.release(r),this._shrink()}},{key:"update",value:function(e,t){if(L(t[3])||!this._isDegenerate(e)){var n=function(e){return C[0]=e,C}(e);this.remove(n,t),this.add(n)}}},{key:"forEachAlongRay",value:function(e,t,n){var i=this,r=Object(m.e)(e,t);this._forEachNode(this._root,(function(e){if(!i._intersectsNode(r,e))return!1;var t=e.node;return t.terminals.forAll((function(e){i._intersectsObject(r,e)&&n(e)})),null!==t.residents&&t.residents.forAll((function(e){i._intersectsObject(r,e)&&n(e)})),!0}))}},{key:"forEachAlongRayWithVerticalOffset",value:function(e,t,n,i){var r=this,o=Object(m.e)(e,t);this._forEachNode(this._root,(function(e){if(!r._intersectsNodeWithOffset(o,e,i))return!1;var t=e.node;return t.terminals.forAll((function(e){r._intersectsObjectWithOffset(o,e,i)&&n(e)})),null!==t.residents&&t.residents.forAll((function(e){r._intersectsObjectWithOffset(o,e,i)&&n(e)})),!0}))}},{key:"forEach",value:function(e){this._forEachNode(this._root,(function(t){var n=t.node;return n.terminals.forAll(e),null!==n.residents&&n.residents.forAll(e),!0})),this._degenerateObjects.forEach(e)}},{key:"forEachDegenerateObject",value:function(e){this._degenerateObjects.forEach(e)}},{key:"findClosest",value:function(e,t,n){var i=this,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){return!0},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1/0,a=1/0,u=1/0,c=null,s=B(e,t),d=function(s){if(--o,r(s)){var d=i.objectToBoundingSphere(s);if(R(n,d)){var h=P(e,t,Object(b.d)(d)),f=h-d[3],l=h+d[3];f<a&&(a=f,u=l,c=s)}}};return this._forEachNodeDepthOrdered(this._root,(function(i){if(o<=0||!R(n,i.bounds))return!1;if(Object(h.l)(H,s,i.halfSize),Object(h.f)(H,H,i.bounds),P(e,t,H)>u)return!1;var r=i.node;return r.terminals.forAll((function(e){return d(e)})),null!==r.residents&&r.residents.forAll((function(e){return d(e)})),!0}),e,t),c}},{key:"forEachInDepthRange",value:function(t,n,i,r,o,a,u){var c=this,s=-1/0,d=1/0,f={setRange:function(t){i===e.DepthOrder.FRONT_TO_BACK?(s=Math.max(s,t.near),d=Math.min(d,t.far)):(s=Math.max(s,-t.far),d=Math.min(d,-t.near))}};f.setRange(r);var l=P(n,i,t),O=B(n,i),_=B(n,-i),v=function(e){if(u(e)){var t=c.objectToBoundingSphere(e),r=Object(b.d)(t),h=P(n,i,r)-l,O=h-t[3],_=h+t[3];O>d||_<s||!R(a,t)||o(e,f)}};this._forEachNodeDepthOrdered(this._root,(function(e){if(!R(a,e.bounds))return!1;if(Object(h.l)(H,O,e.halfSize),Object(h.f)(H,H,e.bounds),P(n,i,H)-l>d)return!1;if(Object(h.l)(H,_,e.halfSize),Object(h.f)(H,H,e.bounds),P(n,i,H)-l<s)return!1;var t=e.node;return t.terminals.forAll((function(e){return v(e)})),null!==t.residents&&t.residents.forAll((function(e){return v(e)})),!0}),n,i)}},{key:"forEachNode",value:function(e){this._forEachNode(this._root,(function(t){return e(t.node,t.bounds,t.halfSize,t.depth)}))}},{key:"forEachNeighbor",value:function(e,t){var n=this,i=Object(b.a)(t),r=Object(b.d)(t),o=function(t){var o=n.objectToBoundingSphere(t),a=Object(b.a)(o),u=i+a;return!(Object(h.i)(Object(b.d)(o),r)-u*u<=0)||e(t)},a=!0,u=function(e){a&&(a=o(e))};this._forEachNode(this._root,(function(e){var t=Object(b.a)(e.bounds),n=i+t;if(Object(h.i)(Object(b.d)(e.bounds),r)-n*n>0)return!1;var o=e.node;return o.terminals.forAll(u),a&&null!==o.residents&&o.residents.forAll(u),a})),a&&this.forEachDegenerateObject(u)}},{key:"_intersectsNode",value:function(e,t){return F(t.bounds,2*-t.halfSize,G),F(t.bounds,2*t.halfSize,V),Object(k.b)(e.origin,e.direction,G,V)}},{key:"_intersectsNodeWithOffset",value:function(e,t,n){return F(t.bounds,2*-t.halfSize,G),F(t.bounds,2*t.halfSize,V),n.applyToMinMax(G,V),Object(k.b)(e.origin,e.direction,G,V)}},{key:"_intersectsObject",value:function(e,t){var n=this.objectToBoundingSphere(t);return!(n[3]>0)||Object(b.f)(n,e)}},{key:"_intersectsObjectWithOffset",value:function(e,t,n){var i=this.objectToBoundingSphere(t);return!(i[3]>0)||Object(b.f)(n.applyToBoundingSphere(i),e)}},{key:"_forEachNode",value:function(e,t){for(var n=A.acquire().init(e),i=[n];0!==i.length;){if(t(n=i.pop())&&!n.isLeaf())for(var r=0;r<n.node.children.length;r++)n.node.children[r]&&i.push(A.acquire().init(n).advance(r));A.release(n)}}},{key:"_forEachNodeDepthOrdered",value:function(t,n,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.DepthOrder.FRONT_TO_BACK,o=A.acquire().init(t),a=[o];for(function(e,t,n){if(!Q.length)for(var i=0;i<8;++i)Q.push({index:0,distance:0});for(var r=0;r<8;++r){var o=I[r];Q.data[r].index=r,Q.data[r].distance=P(e,t,o)}Q.sort((function(e,t){return e.distance-t.distance}));for(var a=0;a<8;++a)n[a]=Q.data[a].index}(i,r,Y);0!==a.length;){if(n(o=a.pop())&&!o.isLeaf())for(var u=7;u>=0;--u){var c=Y[u];o.node.children[c]&&a.push(A.acquire().init(o).advance(c))}A.release(o)}}},{key:"_remove",value:function(e,t,n){q.clear();var i=n.advanceTo(t,(function(e,t){q.push(e.node),q.push(t)}))?n.node.terminals:n.node.residents;if(i.removeUnordered(e),0===i.length)for(var r=q.length-2;r>=0;r-=2){var o=q.data[r],a=q.data[r+1];if(!this._purge(o,a))break}}},{key:"_nodeIsEmpty",value:function(e){if(0!==e.terminals.length)return!1;if(null!==e.residents)return 0===e.residents.length;for(var t=0;t<e.children.length;t++)if(e.children[t])return!1;return!0}},{key:"_purge",value:function(e,t){return t>=0&&(e.children[t]=null),!!this._nodeIsEmpty(e)&&(null===e.residents&&(e.residents=new _.a({shrink:!0})),!0)}},{key:"_add",value:function(e,t){t.advanceTo(this.objectToBoundingSphere(e))?t.node.terminals.push(e):(t.node.residents.push(e),t.node.residents.length>this._maximumObjectsPerNode&&t.depth<this._maximumDepth&&this._split(t))}},{key:"_split",value:function(e){var t=e.node.residents;e.node.residents=null;for(var n=0;n<t.length;n++){var i=A.acquire().init(e);this._add(t.at(n),i),A.release(i)}}},{key:"_grow",value:function(e,t){var n=this;if(0!==t&&(M(e,t,(function(e){return n.objectToBoundingSphere(e)}),W),L(W[3])&&!this._fitsInsideTree(W)))if(this._nodeIsEmpty(this._root.node))Object(b.e)(W,this._root.bounds),this._root.halfSize=1.25*this._root.bounds[3],this._root.updateBoundsRadiusFromHalfSize();else{var i=this._rootBoundsForRootAsSubNode(W);this._placingRootViolatesMaxDepth(i)?this._rebuildTree(W,i):this._growRootAsSubNode(i),A.release(i)}}},{key:"_rebuildTree",value:function(e,t){var n=this;Object(h.h)(K,t.bounds),K[3]=t.halfSize,M([e,K],2,(function(e){return e}),U);var i=A.acquire().init(this._root);this._root.initFrom(null,U,U[3]),this._root.increaseHalfSize(1.25),this._forEachNode(i,(function(e){return n.add(e.node.terminals.data,e.node.terminals.length),null!==e.node.residents&&n.add(e.node.residents.data,e.node.residents.length),!0})),A.release(i)}},{key:"_placingRootViolatesMaxDepth",value:function(e){var t=this,n=Math.log(e.halfSize/this._root.halfSize)*Math.LOG2E,i=0;return this._forEachNode(this._root,(function(e){return(i=Math.max(i,e.depth))+n<=t._maximumDepth})),i+n>this._maximumDepth}},{key:"_rootBoundsForRootAsSubNode",value:function(e){for(var t=e[3],n=e,i=-1/0,r=this._root.bounds,o=this._root.halfSize,a=0;a<3;a++){var u=r[a]-o-(n[a]-t),c=n[a]+t-(r[a]+o),s=Math.max(0,Math.ceil(u/(2*o))),d=Math.max(0,Math.ceil(c/(2*o)))+1,h=Math.pow(2,Math.ceil(Math.log(s+d)*Math.LOG2E));i=Math.max(i,h),X[a].min=s,X[a].max=d}for(var f=0;f<3;f++){var l=X[f].min,b=X[f].max,O=(i-(l+b))/2;l+=Math.ceil(O),b+=Math.floor(O);var _=r[f]-o-l*o*2;D[f]=_+(b+l)*o}var v=i*o;return D[3]=v*z,A.acquire().initFrom(null,D,v,0)}},{key:"_growRootAsSubNode",value:function(e){var t=this._root.node;Object(h.h)(W,this._root.bounds),W[3]=this._root.halfSize,this._root.init(e),e.advanceTo(W,null,!0),e.node.children=t.children,e.node.residents=t.residents,e.node.terminals=t.terminals}},{key:"_shrink",value:function(){for(;;){var e=this._findShrinkIndex();if(-1===e)break;this._root.advance(e),this._root.depth=0}}},{key:"_findShrinkIndex",value:function(){if(0!==this._root.node.terminals.length||this._root.isLeaf())return-1;for(var e=null,t=this._root.node.children,n=0,i=0;i<t.length&&null==e;)e=t[n=i++];for(;i<t.length;)if(t[i++])return-1;return n}},{key:"_isDegenerate",value:function(e){return!L(this.objectToBoundingSphere(e)[3])}},{key:"_fitsInsideTree",value:function(e){var t=this._root.bounds,n=this._root.halfSize;return e[3]<=n&&e[0]>=t[0]-n&&e[0]<=t[0]+n&&e[1]>=t[1]-n&&e[1]<=t[1]+n&&e[2]>=t[2]-n&&e[2]<=t[2]+n}},{key:"toJSON",value:function(){var e=this.maximumDepth,t=this.maximumObjectsPerNode,n=this._objectCount,i=this._nodeToJSON(this._root.node);return{maximumDepth:e,maximumObjectsPerNode:t,objectCount:n,root:{bounds:this._root.bounds,halfSize:this._root.halfSize,depth:this._root.depth,node:i}}}},{key:"_nodeToJSON",value:function(e){var t,n,i=this,r=e.children.map((function(e){return e?i._nodeToJSON(e):null})),o=null===(t=e.residents)||void 0===t?void 0:t.map((function(e){return i.objectToBoundingSphere(e)})),a=null===(n=e.terminals)||void 0===n?void 0:n.map((function(e){return i.objectToBoundingSphere(e)}));return{children:r,residents:o,terminals:a}}}],[{key:"fromJSON",value:function(t){var n=new e((function(e){return e}),{maximumDepth:t.maximumDepth,maximumObjectsPerNode:t.maximumObjectsPerNode});return n._objectCount=t.objectCount,n._root.initFrom(t.root.node,t.root.bounds,t.root.halfSize,t.root.depth),n}}]),e}(),A=function(){function e(){Object(a.a)(this,e),this.bounds=Object(b.b)(),this.halfSize=0,this.initFrom(null,null,0,0)}return Object(u.a)(e,[{key:"init",value:function(e){return this.initFrom(e.node,e.bounds,e.halfSize,e.depth)}},{key:"initFrom",value:function(t,n,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.depth;return this.node=null!=t?t:e.createEmptyNode(),null!=n&&Object(b.e)(n,this.bounds),this.halfSize=i,this.depth=r,this}},{key:"increaseHalfSize",value:function(e){this.halfSize*=e,this.updateBoundsRadiusFromHalfSize()}},{key:"updateBoundsRadiusFromHalfSize",value:function(){this.bounds[3]=this.halfSize*z}},{key:"advance",value:function(t){var n=this.node.children[t];n||(n=e.createEmptyNode(),this.node.children[t]=n),this.node=n,this.halfSize/=2,this.depth++;var i=I[t];return this.bounds[0]+=i[0]*this.halfSize,this.bounds[1]+=i[1]*this.halfSize,this.bounds[2]+=i[2]*this.halfSize,this.updateBoundsRadiusFromHalfSize(),this}},{key:"advanceTo",value:function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];;){if(this.isTerminalFor(e))return t&&t(this,-1),!0;if(this.isLeaf()){if(!n)return t&&t(this,-1),!1;this.node.residents=null}var i=this._childIndex(e);t&&t(this,i),this.advance(i)}}},{key:"isLeaf",value:function(){return null!=this.node.residents}},{key:"isTerminalFor",value:function(e){return e[3]>this.halfSize/2}},{key:"_childIndex",value:function(e){var t=this.bounds;return(t[0]<e[0]?1:0)+(t[1]<e[1]?2:0)+(t[2]<e[2]?4:0)}}],[{key:"createEmptyNode",value:function(){return{children:[null,null,null,null,null,null,null,null],terminals:new _.a({shrink:!0}),residents:new _.a({shrink:!0})}}},{key:"acquire",value:function(){return e._pool.acquire()}},{key:"release",value:function(t){e._pool.release(t)}},{key:"clearPool",value:function(){e._pool.prune()}}]),e}();function S(e,t){e[0]=Math.min(e[0],t[0]-t[3]),e[1]=Math.min(e[1],t[1]-t[3]),e[2]=Math.min(e[2],t[2]-t[3])}function x(e,t){e[0]=Math.max(e[0],t[0]+t[3]),e[1]=Math.max(e[1],t[1]+t[3]),e[2]=Math.max(e[2],t[2]+t[3])}function F(e,t,n){n[0]=e[0]+t,n[1]=e[1]+t,n[2]=e[2]+t}function M(e,t,n,i){if(1===t){var r=n(e[0]);Object(b.e)(r,i)}else{G[0]=1/0,G[1]=1/0,G[2]=1/0,V[0]=-1/0,V[1]=-1/0,V[2]=-1/0;for(var o=0;o<t;o++){var a=n(e[o]);L(a[3])&&(S(G,a),x(V,a))}Object(h.m)(i,G,V,.5),i[3]=Math.max(V[0]-G[0],V[1]-G[1],V[2]-G[2])/2}}function B(e,t){for(var n,i=1/0,r=0;r<8;++r){var o=P(e,t,w[r]);o<i&&(i=o,n=w[r])}return n}function P(e,t,n){return t*(e[0]*n[0]+e[1]*n[1]+e[2]*n[2])}function L(e){return!isNaN(e)&&e!==-1/0&&e!==1/0&&e>0}A._pool=new O.a(A),function(e){var t;(t=e.DepthOrder||(e.DepthOrder={}))[t.FRONT_TO_BACK=1]="FRONT_TO_BACK",t[t.BACK_TO_FRONT=-1]="BACK_TO_FRONT"}(N||(N={}));var I=[Object(f.i)(-1,-1,-1),Object(f.i)(1,-1,-1),Object(f.i)(-1,1,-1),Object(f.i)(1,1,-1),Object(f.i)(-1,-1,1),Object(f.i)(1,-1,1),Object(f.i)(-1,1,1),Object(f.i)(1,1,1)],w=[Object(f.i)(-1,-1,-1),Object(f.i)(-1,-1,1),Object(f.i)(-1,1,-1),Object(f.i)(-1,1,1),Object(f.i)(1,-1,-1),Object(f.i)(1,-1,1),Object(f.i)(1,1,-1),Object(f.i)(1,1,1)],z=Math.sqrt(3),C=[null];var D=Object(b.b)(),H=Object(f.f)(),G=Object(f.f)(),V=Object(f.f)(),q=new _.a,J=Object(b.b)(),W=Object(b.b)(),K=Object(b.b)(),U=Object(b.b)(),X=[{min:0,max:0},{min:0,max:0},{min:0,max:0}],Q=new _.a,Y=[0,0,0,0,0,0,0,0],Z=N,$=n(1784);function ee(e,t,n){var i=Object(b.b)(),r=Object(b.d)(i);return Object(h.a)(r,r,e,.5),Object(h.a)(r,r,t,.5),i[3]=Object(h.n)(r,e),Object(h.f)(r,r,n),i}var te=function(){function e(){Object(a.a)(this,e),this._idToComponent=new Map,this._components=new Z((function(e){return e.bounds})),this._edges=new Z((function(e){return e.bounds})),this._tmpLineSegment=Object(l.a)(),this._tmpP1=Object(f.f)(),this._tmpP2=Object(f.f)(),this._tmpP3=Object(f.f)(),this.remoteClient=null}return Object(u.a)(e,[{key:"fetchCandidates",value:function(){var e=Object(o.a)(Object(r.a)().mark((function e(t,n){var i,o=this;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve();case 2:return Object(s.n)(n),e.next=5,this._ensureEdgeLocations(t,n);case 5:return i=[],e.abrupt("return",(this._edges.forEachNeighbor((function(e){return o._addCandidates(t,e,i),i.length<1e3}),t.bounds),{result:{candidates:i}}));case 7:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_ensureEdgeLocations",value:function(){var e=Object(o.a)(Object(r.a)().mark((function e(t,n){var o,a,u,c,s,d;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=[],this._components.forEachNeighbor((function(e){if(null==e.info){var t=e.id,n=e.uid;o.push({id:t,uid:n})}return!0}),t.bounds),o.length){e.next=3;break}return e.abrupt("return");case 3:return a={components:o},e.next=6,this.remoteClient.invoke("fetchAllEdgeLocations",a,null!==n&&void 0!==n?n:{});case 6:u=e.sent,c=Object(i.a)(u.components);try{for(c.s();!(s=c.n()).done;)d=s.value,this._setFetchEdgeLocations(d)}catch(r){c.e(r)}finally{c.f()}case 9:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"add",value:function(){var e=Object(o.a)(Object(r.a)().mark((function e(t){var n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new ie(t.id,t.bounds),e.abrupt("return",(this._idToComponent.set(n.id,n),this._components.add([n]),{result:{}}));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"remove",value:function(){var e=Object(o.a)(Object(r.a)().mark((function e(t){var n,i;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=this._idToComponent.get(t.id))&&(i=[],this._edges.forEachNeighbor((function(e){return e.component===n&&i.push(e),!0}),n.bounds),this._edges.remove(i),this._components.remove([n]),this._idToComponent.delete(n.id)),e.abrupt("return",{result:{}});case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_setFetchEdgeLocations",value:function(e){var t=this._idToComponent.get(e.id);if(null!=t&&e.uid===t.uid){for(var n=$.b.createView(e.locations),i=new Array(n.count),r=Object(f.f)(),o=Object(f.f)(),a=0;a<n.count;a++){n.position0.getVec(a,r),n.position1.getVec(a,o);var u=ee(r,o,e.origin),c=new re(t,a,u);i[a]=c}this._edges.add(i);var s=e.objectIds,d=e.origin;t.info={locations:n,objectIds:s,origin:d}}}},{key:"_addCandidates",value:function(e,t,n){var i=t.component.info,r=i.origin,o=i.objectIds,a=i.locations,u=a.position0.getVec(t.index,this._tmpP1),c=a.position1.getVec(t.index,this._tmpP2);Object(h.f)(u,u,r),Object(h.f)(c,c,r);var s=o[a.componentIndex.get(t.index)];this._addEdgeCandidate(e,s,u,c,n),this._addVertexCandidate(e,s,u,n),this._addVertexCandidate(e,s,c,n)}},{key:"_addEdgeCandidate",value:function(e,t,n,i,r){if(e.returnEdge){var o=Object(b.d)(e.bounds),a=Object(l.c)(n,i,this._tmpLineSegment),u=Object(l.e)(a,o,this._tmpP3);Object(b.g)(e.bounds,u)&&r.push({type:"edge",objectId:t,target:Object(f.d)(u),distance:Object(h.n)(o,u),start:Object(f.d)(n),end:Object(f.d)(i)})}}},{key:"_addVertexCandidate",value:function(e,t,n,i){if(e.returnVertex){var r=Object(b.d)(e.bounds);Object(b.g)(e.bounds,n)&&i.push({type:"vertex",objectId:t,target:Object(f.d)(n),distance:Object(h.n)(r,n)})}}}]),e}(),ne=te=Object(c.a)([Object(d.a)("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],te),ie=Object(u.a)((function e(t,n){Object(a.a)(this,e),this.id=t,this.bounds=n,this.info=null,this.uid=++e.uid}));ie.uid=0;var re=Object(u.a)((function e(t,n,i){Object(a.a)(this,e),this.component=t,this.index=n,this.bounds=i}))}}]);
//# sourceMappingURL=248.4f11f449.chunk.js.map