(this["webpackJsonpklw-bank"]=this["webpackJsonpklw-bank"]||[]).push([[251],{1180:function(e,t,r){"use strict";r.d(t,"a",(function(){return w})),r.d(t,"b",(function(){return h})),r.d(t,"c",(function(){return k})),r.d(t,"d",(function(){return j})),r.d(t,"e",(function(){return m}));var n=r(4),a=r(12),l=r(92),i=r(187),o=r(277),s=r(258),u=r(129),c=r(116),b=r(128),y=r(125),f=r(392),p=r(153),v=r(416),d=r(235),O={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function j(e){var t=e.folders||[],r=t.slice(),n=new Map,a=new Map,i=new Map,o=new Map,s=new Map,u={esriGeometryPoint:a,esriGeometryPolyline:i,esriGeometryPolygon:o};(e.featureCollection&&e.featureCollection.layers||[]).forEach((function(e){var t=Object(c.a)(e);t.featureSet.features=[];var r=e.featureSet.geometryType;n.set(r,t);var l=e.layerDefinition.objectIdField;"esriGeometryPoint"===r?g(a,l,e.featureSet.features):"esriGeometryPolyline"===r?g(i,l,e.featureSet.features):"esriGeometryPolygon"===r&&g(o,l,e.featureSet.features)})),e.groundOverlays&&e.groundOverlays.forEach((function(e){s.set(e.id,e)})),t.forEach((function(t){t.networkLinkIds.forEach((function(n){var a=function(e,t,r){var n=function(e,t){var r;return t.some((function(t){return t.id===e&&(r=t,!0)})),r}(e,r);return n&&(n.parentFolderId=t,n.networkLink=n),n}(n,t.id,e.networkLinks);a&&r.push(a)}))})),r.forEach((function(e){if(e.featureInfos){e.points=Object(c.a)(n.get("esriGeometryPoint")),e.polylines=Object(c.a)(n.get("esriGeometryPolyline")),e.polygons=Object(c.a)(n.get("esriGeometryPolygon")),e.mapImages=[];var t,r=Object(l.a)(e.featureInfos);try{for(r.s();!(t=r.n()).done;){var a=t.value;switch(a.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":var i,o=u[a.type].get(a.id);o&&(null===(i=e[O[a.type]])||void 0===i||i.featureSet.features.push(o));break;case"GroundOverlay":var b=s.get(a.id);b&&e.mapImages.push(b)}}}catch(y){r.e(y)}finally{r.f()}e.fullExtent=w([e])}}));var b=w(r);return{folders:t,sublayers:r,extent:b}}function h(e,t,r,n){var a=o.c&&o.c.findCredential(e);e=Object(b.e)(e,{token:a&&a.token});var l=i.a.kmlServiceUrl;return Object(u.default)(l,{query:{url:e,model:"simple",folders:"",refresh:0!==r||void 0,outSR:JSON.stringify(t)},responseType:"json",signal:n})}function m(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],a=[],l={},i=t.sublayers,o=t.folders.map((function(e){return e.id}));return i.forEach((function(t){var i=new e;if(r?i.read(t,r):i.read(t),n.length&&o.includes(i.id)&&(i.visible=n.includes(i.id)),l[t.id]=i,null!=t.parentFolderId&&-1!==t.parentFolderId){var s,u=l[t.parentFolderId];u.sublayers||(u.sublayers=[]),null===(s=u.sublayers)||void 0===s||s.unshift(i)}else a.unshift(i)})),a}function g(e,t,r){r.forEach((function(r){e.set(r.attributes[t],r)}))}function k(e){return S.apply(this,arguments)}function S(){return(S=Object(a.a)(Object(n.a)().mark((function e(t){var r,a,i,o,u,c,b,y,f;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=d.a.fromJSON(t.featureSet).features,a=t.layerDefinition,i=Object(v.a)(a.drawingInfo.renderer),o=s.a.fromJSON(t.popupInfo),u=[],c=Object(l.a)(r),e.prev=2,c.s();case 4:if((b=c.n()).done){e.next=12;break}return y=b.value,e.next=8,i.getSymbolAsync(y);case 8:f=e.sent,y.symbol=f,y.popupTemplate=o,y.visible=!0,u.push(y);case 10:e.next=4;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),c.e(e.t0);case 17:return e.prev=17,c.f(),e.finish(17);case 20:return e.abrupt("return",u);case 21:case"end":return e.stop()}}),e,null,[[2,14,17,20]])})))).apply(this,arguments)}function w(e){var t,r=Object(f.b)(f.a),n=Object(f.b)(f.a),a=Object(l.a)(e);try{for(a.s();!(t=a.n()).done;){var i=t.value;if(i.polygons&&i.polygons.featureSet&&i.polygons.featureSet.features){var o,s=Object(l.a)(i.polygons.featureSet.features);try{for(s.s();!(o=s.n()).done;){var u=o.value;Object(p.c)(r,u.geometry),Object(f.e)(n,r)}}catch(k){s.e(k)}finally{s.f()}}if(i.polylines&&i.polylines.featureSet&&i.polylines.featureSet.features){var c,b=Object(l.a)(i.polylines.featureSet.features);try{for(b.s();!(c=b.n()).done;){var v=c.value;Object(p.c)(r,v.geometry),Object(f.e)(n,r)}}catch(k){b.e(k)}finally{b.f()}}if(i.points&&i.points.featureSet&&i.points.featureSet.features){var d,O=Object(l.a)(i.points.featureSet.features);try{for(O.s();!(d=O.n()).done;){var j=d.value;Object(p.c)(r,j.geometry),Object(f.e)(n,r)}}catch(k){O.e(k)}finally{O.f()}}if(i.mapImages){var h,m=Object(l.a)(i.mapImages);try{for(m.s();!(h=m.n()).done;){var g=h.value;Object(p.c)(r,g.extent),Object(f.e)(n,r)}}catch(k){m.e(k)}finally{m.f()}}}}catch(k){a.e(k)}finally{a.f()}return Object(f.d)(n,f.a)?void 0:{xmin:n[0],ymin:n[1],zmin:n[2],xmax:n[3],ymax:n[4],zmax:n[5],spatialReference:y.a.WGS84}}},1793:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return q}));var n,a=r(92),l=r(4),i=r(12),o=r(112),s=r(1),u=r(89),c=r(88),b=r(107),y=r(106),f=r(90),p=r(91),v=r(94),d=(r(119),r(145)),O=r(503),j=r(281),h=r(110),m=r(127),g=r(128),k=r(97),S=r(96),w=(r(98),r(93),r(136)),x=r(95),E=r(137),I=r(125),P=r(259),L=r(330),F=r(311),G=r(326),M=r(425),_=r(302),C=r(244),J=r(120),N=r(193),T=r(105),R=r(329),A=r(213),K=r(1180),z=r(130),W=n=function(e){Object(f.a)(r,e);var t=Object(p.a)(r);function r(){var e;Object(u.a)(this,r);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).description=null,e.fullExtent=null,e.id=null,e.networkLink=null,e.parent=null,e.sublayers=null,e.title=null,e.sourceJSON=null,e.layer=null,e.addHandles([Object(m.b)((function(){return e.sublayers}),"after-add",(function(t){var r=t.item;r.parent=Object(J.a)(e),r.layer=e.layer}),m.c),Object(m.b)((function(){return e.sublayers}),"after-remove",(function(e){var t=e.item;t.layer=t.parent=null}),m.c),Object(m.e)((function(){return e.sublayers}),(function(t,r){if(r){var n,l=Object(a.a)(r);try{for(l.s();!(n=l.n()).done;){var i=n.value;i.layer=i.parent=null}}catch(c){l.e(c)}finally{l.f()}}if(t){var o,s=Object(a.a)(t);try{for(s.s();!(o=s.n()).done;){var u=o.value;u.parent=Object(J.a)(e),u.layer=e.layer}}catch(c){s.e(c)}finally{s.f()}}}),m.c),Object(m.e)((function(){return e.layer}),(function(t){if(e.sublayers){var r,n=Object(a.a)(e.sublayers);try{for(n.s();!(r=n.n()).done;){r.value.layer=t}}catch(l){n.e(l)}finally{n.f()}}}),m.c)]),e}return Object(c.a)(r,[{key:"initialize",value:function(){var e=this;Object(m.g)((function(){return e.networkLink})).then((function(){return Object(m.g)((function(){return!0===e.visible}))})).then((function(){return e.load()}))}},{key:"load",value:function(e){var t,r,a=this;if(this.networkLink&&!this.networkLink.viewFormat){var l=null!=e?e.signal:null,i=this._fetchService(null!==(t=null===(r=this._get("networkLink"))||void 0===r?void 0:r.href)&&void 0!==t?t:"",l).then((function(e){var t,r=Object(K.a)(e.sublayers);a.fullExtent=z.a.fromJSON(r),a.sourceJSON=e;var l=Object(S.m)(d.a.ofType(n),Object(K.e)(n,e));a.sublayers?a.sublayers.addMany(l):a.sublayers=l,null!==(t=a.layer)&&void 0!==t&&t.emit("sublayer-update"),a.layer&&a.layer.notifyChange("visibleSublayers")}));return this.addResolvingPromise(i),Promise.resolve(this)}}},{key:"visible",get:function(){return this._get("visible")},set:function(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}},{key:"readVisible",value:function(e,t){return!!t.visibility}},{key:"_fetchService",value:function(e,t){return Object(K.b)(e,this.layer.outSpatialReference,this.layer.refreshInterval,t).then((function(e){return Object(K.d)(e.data)}))}}]),r}(N.a.EventedMixin(Object(T.b)(R.a)));Object(v.a)([Object(k.b)()],W.prototype,"description",void 0),Object(v.a)([Object(k.b)({type:z.a})],W.prototype,"fullExtent",void 0),Object(v.a)([Object(k.b)()],W.prototype,"id",void 0),Object(v.a)([Object(k.b)({readOnly:!0,value:null})],W.prototype,"networkLink",void 0),Object(v.a)([Object(k.b)({json:{write:{allowNull:!0}}})],W.prototype,"parent",void 0),Object(v.a)([Object(k.b)({type:d.a.ofType(n),json:{write:{allowNull:!0}}})],W.prototype,"sublayers",void 0),Object(v.a)([Object(k.b)({value:null,json:{read:{source:"name",reader:function(e){return Object(A.d)(e)}}}})],W.prototype,"title",void 0),Object(v.a)([Object(k.b)({value:!0})],W.prototype,"visible",null),Object(v.a)([Object(w.a)("visible",["visibility"])],W.prototype,"readVisible",null),Object(v.a)([Object(k.b)()],W.prototype,"sourceJSON",void 0),Object(v.a)([Object(k.b)()],W.prototype,"layer",void 0);var D=W=n=Object(v.a)([Object(x.a)("esri.layers.support.KMLSublayer")],W),H=["kml","xml"],V=function(e){Object(f.a)(r,e);var t=Object(p.a)(r);function r(){var e;Object(u.a)(this,r);for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(e=t.call.apply(t,[this].concat(a)))._visibleFolders=[],e.allSublayers=new O.a({getCollections:function(){return[e.sublayers]},getChildrenFunction:function(e){return e.sublayers}}),e.outSpatialReference=I.a.WGS84,e.path=null,e.legendEnabled=!1,e.operationalLayerType="KML",e.sublayers=null,e.type="kml",e.url=null,e}return Object(c.a)(r,[{key:"initialize",value:function(){var e=this;this.addHandles([Object(m.e)((function(){return e.sublayers}),(function(t,r){r&&r.forEach((function(e){e.parent=null,e.layer=null})),t&&t.forEach((function(t){t.parent=e,t.layer=e}))}),m.c),this.on("sublayer-update",(function(){return e.notifyChange("fullExtent")}))])}},{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?Object(s.a)({url:e},t):e}},{key:"readSublayersFromItemOrWebMap",value:function(e,t){this._visibleFolders=t.visibleFolders}},{key:"readSublayers",value:function(e,t,r){return Object(K.e)(D,t,r,this._visibleFolders)}},{key:"writeSublayers",value:function(e,t){for(var r=[],n=e.toArray();n.length;){var a=n[0];a.networkLink||(a.visible&&r.push(a.id),a.sublayers&&n.push.apply(n,Object(o.a)(a.sublayers.toArray()))),n.shift()}t.visibleFolders=r}},{key:"title",get:function(){var e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?Object(g.n)(this.url,H)||"KML":e||""},set:function(e){this._set("title",e)}},{key:"visibleSublayers",get:function(){var e=this.sublayers,t=[];return e&&e.forEach((function e(r){r.visible&&(t.push(r),r.sublayers&&r.sublayers.forEach(e))})),t}},{key:"fullExtent",get:function(){return this._recomputeFullExtent()}},{key:"load",value:function(e){var t=this,r=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"],supportsData:!1},e).catch(h.m).then((function(){return t._fetchService(r)}))),Promise.resolve(this)}},{key:"destroy",value:function(){Object(b.a)(Object(y.a)(r.prototype),"destroy",this).call(this),this.allSublayers.destroy()}},{key:"_fetchService",value:function(){var e=Object(i.a)(Object(l.a)().mark((function e(t){var r,n,a=this;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then((function(){var e;return a.resourceInfo?{ssl:!1,data:a.resourceInfo}:Object(K.b)(null!==(e=a.url)&&void 0!==e?e:"",a.outSpatialReference,a.refreshInterval,t)}));case 2:r=e.sent,(n=Object(K.d)(r.data))&&this.read(n,{origin:"service"});case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_recomputeFullExtent",value:function(){var e=null;null!=this.extent&&(e=this.extent.clone());return function t(r){if(r.sublayers){var n,l=Object(a.a)(r.sublayers.items);try{for(l.s();!(n=l.n()).done;){var i=n.value;t(i),i.visible&&i.fullExtent&&(null!=e?e.union(i.fullExtent):e=i.fullExtent.clone())}}catch(o){l.e(o)}finally{l.f()}}}(this),e}}]),r}(Object(L.a)(Object(M.a)(Object(_.a)(Object(F.a)(Object(G.a)(Object(j.a)(P.a)))))));Object(v.a)([Object(k.b)({readOnly:!0})],V.prototype,"allSublayers",void 0),Object(v.a)([Object(k.b)({type:I.a})],V.prototype,"outSpatialReference",void 0),Object(v.a)([Object(k.b)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],V.prototype,"path",void 0),Object(v.a)([Object(k.b)({readOnly:!0,json:{read:!1,write:!1}})],V.prototype,"legendEnabled",void 0),Object(v.a)([Object(k.b)({type:["show","hide","hide-children"]})],V.prototype,"listMode",void 0),Object(v.a)([Object(k.b)({type:["KML"]})],V.prototype,"operationalLayerType",void 0),Object(v.a)([Object(k.b)({})],V.prototype,"resourceInfo",void 0),Object(v.a)([Object(k.b)({type:d.a.ofType(D),json:{write:{ignoreOrigin:!0}}})],V.prototype,"sublayers",void 0),Object(v.a)([Object(w.a)(["web-map","portal-item"],"sublayers",["visibleFolders"])],V.prototype,"readSublayersFromItemOrWebMap",null),Object(v.a)([Object(w.a)("service","sublayers",["sublayers"])],V.prototype,"readSublayers",null),Object(v.a)([Object(E.a)("sublayers")],V.prototype,"writeSublayers",null),Object(v.a)([Object(k.b)({readOnly:!0,json:{read:!1}})],V.prototype,"type",void 0),Object(v.a)([Object(k.b)({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],V.prototype,"title",null),Object(v.a)([Object(k.b)(C.o)],V.prototype,"url",void 0),Object(v.a)([Object(k.b)({readOnly:!0})],V.prototype,"visibleSublayers",null),Object(v.a)([Object(k.b)({type:z.a})],V.prototype,"extent",void 0),Object(v.a)([Object(k.b)()],V.prototype,"fullExtent",null);var q=V=Object(v.a)([Object(x.a)("esri.layers.KMLLayer")],V)}}]);
//# sourceMappingURL=251.36a0acba.chunk.js.map