(this["webpackJsonpklw-bank"]=this["webpackJsonpklw-bank"]||[]).push([[186],{1021:function(e,t,r){"use strict";r.d(t,"a",(function(){return g})),r.d(t,"b",(function(){return _}));var n=r(92),i=r(89),a=r(88),s=r(90),u=r(91),o=r(433),c=r(193),l=(r(93),r(483)),d=r(392),f=r(1118),h=r(1170),p=Object(d.b)();function y(e,t){return e<<16|t}function v(e){return(4294901760&e)>>>16}function b(e){return 65535&e}var _={getObjectId:function(e){return e.getObjectId()},getAttributes:function(e){return e.readAttributes()},getAttribute:function(e,t){return e.readAttribute(t)},cloneWithGeometry:function(e,t){return e},getGeometry:function(e){return e.readHydratedGeometry()},getCentroid:function(e,t){return e.readCentroid()}},g=function(e){Object(s.a)(r,e);var t=Object(u.a)(r);function r(e,n,a){var s;return Object(i.a)(this,r),(s=t.call(this,e,n)).featureAdapter=_,s.events=new c.a,s._featureSetsByInstance=new Map,s._objectIdToDisplayId=new Map,s._spatialIndexInvalid=!0,s._indexSearchCache=new o.a(50),s._index=Object(l.a)(9,(function(e){return{minX:s._storage.getXMin(e),minY:s._storage.getYMin(e),maxX:s._storage.getXMax(e),maxY:s._storage.getYMax(e)}})),s.mode=a,s}return Object(a.a)(r,[{key:"storeStatistics",get:function(){var e=0,t=0,r=0;return this.forEach((function(n){var i=n.readGeometry();i&&(t+=i.isPoint?1:i.lengths.reduce((function(e,t){return e+t}),0),r+=i.isPoint?1:i.lengths.length,e+=1)})),{featureCount:e,vertexCount:t,ringCount:r}}},{key:"hasInstance",value:function(e){return this._featureSetsByInstance.has(e)}},{key:"onTileData",value:function(e,t){if(null==t.addOrUpdate)return t;if(t.addOrUpdate.attachStorage(this._storage),"snapshot"===this.mode){for(var r=t.addOrUpdate.getCursor();r.next();){var n=r.getDisplayId();this.setComputedAttributes(this._storage,r,n,e.scale)}return t}this._featureSetsByInstance.set(t.addOrUpdate.instance,t.addOrUpdate);for(var i=t.addOrUpdate.getCursor();i.next();)this._insertFeature(i,e.scale);return this._spatialIndexInvalid=!0,this.events.emit("changed"),t}},{key:"search",value:function(e){var t=this;this._rebuildIndex();var r=e.id,i=this._indexSearchCache.find((function(e){return e.tileId===r}));if(null!=i)return i.readers;var a,s=new Map,u=this._searchIndex(e.bounds),o=[],c=Object(n.a)(u);try{for(c.s();!(a=c.n()).done;){var l=a.value,d=this._storage.getInstanceId(l),f=v(d),p=b(d);s.has(f)||s.set(f,[]),s.get(f).push(p)}}catch(y){c.e(y)}finally{c.f()}return s.forEach((function(e,r){var n=t._featureSetsByInstance.get(r);o.push(h.a.from(n,e))})),this._indexSearchCache.enqueue({tileId:r,readers:o}),o}},{key:"insert",value:function(e){for(var t=e.getCursor(),r=this._storage;t.next();){var n,i=y(t.instance,t.getIndex()),a=t.getObjectId(),s=null!==(n=this._objectIdToDisplayId.get(a))&&void 0!==n?n:this._storage.createDisplayId();t.setDisplayId(s),r.setInstanceId(s,i),this._objectIdToDisplayId.set(a,s)}this._featureSetsByInstance.set(e.instance,e),this._spatialIndexInvalid=!0}},{key:"remove",value:function(e){var t=this._objectIdToDisplayId.get(e);if(t){var r=this._storage.getInstanceId(t),n=b(r),i=v(r),a=this._featureSetsByInstance.get(i);this._objectIdToDisplayId.delete(e),this._storage.releaseDisplayId(t),a.removeAtIndex(n),a.isEmpty&&this._featureSetsByInstance.delete(i),this._spatialIndexInvalid=!0}}},{key:"forEach",value:function(e){var t=this;this._objectIdToDisplayId.forEach((function(r){var n=t._storage.getInstanceId(r),i=t._lookupFeature(n);e(i)}))}},{key:"forEachUnsafe",value:function(e){var t=this;this._objectIdToDisplayId.forEach((function(r){var n=t._storage.getInstanceId(r),i=v(n),a=b(n),s=t._getFeatureSet(i);s.setIndex(a),e(s)}))}},{key:"forEachInBounds",value:function(e,t){var r,i=this._searchIndex(e),a=Object(n.a)(i);try{for(a.s();!(r=a.n()).done;){var s=r.value;t(this.lookupFeatureByDisplayId(s,this._storage))}}catch(u){a.e(u)}finally{a.f()}}},{key:"forEachBounds",value:function(e,t){this._rebuildIndex();var r,i=Object(n.a)(e);try{for(i.s();!(r=i.n()).done;){var a=r.value;if(a.readGeometry()){var s=a.getDisplayId();Object(d.i)(p,this._storage.getXMin(s),this._storage.getYMin(s),this._storage.getXMax(s),this._storage.getYMax(s)),t(p)}}}catch(u){i.e(u)}finally{i.f()}}},{key:"sweepFeatures",value:function(e,t,r){var n=this;this._spatialIndexInvalid=!0,this._objectIdToDisplayId.forEach((function(i,a){e.has(i)||(t.releaseDisplayId(i),r&&r.unsetAttributeData(i),n._objectIdToDisplayId.delete(a))})),this.events.emit("changed")}},{key:"sweepFeatureSets",value:function(e){var t=this;this._spatialIndexInvalid=!0,this._featureSetsByInstance.forEach((function(r,n){e.has(n)||t._featureSetsByInstance.delete(n)}))}},{key:"lookupObjectId",value:function(e,t){var r=this.lookupFeatureByDisplayId(e,t);return null==r?null:r.getObjectId()}},{key:"lookupDisplayId",value:function(e){return this._objectIdToDisplayId.get(e)}},{key:"lookupFeatureByDisplayId",value:function(e,t){var r=t.getInstanceId(e);return this._lookupFeature(r)}},{key:"lookupByDisplayIdUnsafe",value:function(e){var t=this._storage.getInstanceId(e),r=v(t),n=b(t),i=this._getFeatureSet(r);return i?(i.setIndex(n),i):null}},{key:"_insertFeature",value:function(e,t){var r=this._storage,n=e.getObjectId(),i=y(e.instance,e.getIndex());r.getInstanceId(e.getDisplayId());var a=this._objectIdToDisplayId.get(n);a||(a=r.createDisplayId(),this._objectIdToDisplayId.set(n,a),this._spatialIndexInvalid=!0),e.setDisplayId(a),r.setInstanceId(a,i),this.setComputedAttributes(r,e,a,t)}},{key:"_searchIndex",value:function(e){this._rebuildIndex();var t={minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]};return this._index.search(t)}},{key:"_rebuildIndex",value:function(){var e=this;if(this._spatialIndexInvalid){var t=[];"snapshot"===this.mode?this._featureSetsByInstance.forEach((function(r){for(var n=r.getCursor();n.next();){var i=n.getDisplayId();e._storage.setBounds(i,n)&&t.push(i)}})):this._objectIdToDisplayId.forEach((function(r){var n=e._storage.getInstanceId(r);e._storage.setBounds(r,e._lookupFeature(n))&&t.push(r)})),this._index.clear(),this._index.load(t),this._indexSearchCache.clear(),this._spatialIndexInvalid=!1}}},{key:"_lookupFeature",value:function(e){var t=v(e),r=this._getFeatureSet(t);if(r){var n=r.getCursor(),i=b(e);return n.setIndex(i),n}}},{key:"_getFeatureSet",value:function(e){return this._featureSetsByInstance.get(e)}}]),r}(f.a)},1118:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var n=r(1),i=r(92),a=r(4),s=r(12),u=r(89),o=r(88),c=r(93),l=r(284),d=r(207),f=r(102);var h=function(){function e(t,r){Object(u.a)(this,e),this._canCacheExpressionValue=!1,this._sourceInfo=t,this._storage=r,this._bitsets={computed:r.getBitset(r.createBitset())}}return Object(o.a)(e,[{key:"storage",get:function(){return this._storage}},{key:"invalidate",value:function(){this._bitsets.computed.clear()}},{key:"updateSchema",value:function(){var e=Object(s.a)(Object(a.a)().mark((function e(t,r){var n,i,s,u,o,d;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=Object(l.a)(this._schema,r),this._schema=r,r&&null!=n&&Object(l.b)(n,"attributes")){e.next=3;break}return e.abrupt("return");case 3:Object(c.a)("esri-2d-update-debug")&&console.debug("Applying Update - Store:",n),this._bitsets.computed.clear(),t.targets[r.name]=!0,i=r.attributes,s=[],u=[],e.t0=Object(a.a)().keys(i);case 6:if((e.t1=e.t0()).done){e.next=20;break}o=e.t1.value,d=i[o],e.t2=d.type,e.next="field"===e.t2?12:"expression"===e.t2?13:"label-expression"===e.t2?15:"statistic"===e.t2?17:18;break;case 12:return e.abrupt("break",18);case 13:return s.push(this._createArcadeComputedField(d)),e.abrupt("break",18);case 15:return s.push(this._createLabelArcadeComputedField(d)),e.abrupt("break",18);case 17:u.push(d);case 18:e.next=6;break;case 20:return e.next=22,Promise.all(s);case 22:this._computedFields=e.sent,this._canCacheExpressionValue=!this._computedFields.some((function(e){return"expression"===e.type&&null!=e.expression&&e.expression.referencesScale()})),this._statisticFields=u;case 25:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"setComputedAttributes",value:function(e,t,r,n){var a=this._bitsets.computed;if(!this._canCacheExpressionValue||!a.has(r)){a.set(r);var s,u=Object(i.a)(this._computedFields);try{for(u.s();!(s=u.n()).done;){var o=s.value,c=this._evaluateField(t,o,n);switch(o.resultType){case"numeric":e.setComputedNumericAtIndex(r,o.fieldIndex,c);break;case"string":e.setComputedStringAtIndex(r,o.fieldIndex,c)}}}catch(l){u.e(l)}finally{u.f()}}}},{key:"_createArcadeComputedField",value:function(){var e=Object(s.a)(Object(a.a)().mark((function e(t){var r,i;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this._sourceInfo.spatialReference,i=this._sourceInfo.fieldsIndex,e.t0=n.a,e.t1=Object(n.a)({},t),e.t2={},e.next=6,Object(d.d)(t.valueExpression,r,i);case 6:return e.t3=e.sent,e.t4={expression:e.t3},e.abrupt("return",(0,e.t0)(e.t1,e.t2,e.t4));case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_createLabelArcadeComputedField",value:function(){var e=Object(s.a)(Object(a.a)().mark((function e(t){var i,s,u,o,c;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=this._sourceInfo.spatialReference,s=this._sourceInfo.fieldsIndex,e.next=4,r.e(326).then(r.bind(null,2225));case 4:return u=e.sent,o=u.createLabelFunction,e.next=8,o(t.label,s,i);case 8:return c=e.sent,e.abrupt("return",Object(n.a)(Object(n.a)({},t),{},{builder:c}));case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_evaluateField",value:function(e,t,r){switch(t.type){case"label-expression":var i=e.readArcadeFeature();return t.builder.evaluate(i)||"";case"expression":return function(e,t,r){if(null==e)return null;var i=t.readArcadeFeature();try{return e.evaluate(Object(n.a)(Object(n.a)({},r),{},{$feature:i}),e.services)}catch(a){return f.a.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",a),null}}(t.expression,e,{$view:{scale:r}})}}}]),e}()},1170:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(89),i=r(88),a=r(90),s=r(91),u=r(304),o=function(e){Object(a.a)(r,e);var t=Object(s.a)(r);function r(e,i){var a;return Object(n.a)(this,r),(a=t.call(this,u.a.createInstance(),e.fullSchema()))._currentIndex=-1,a._reader=e,a._indices=i,a}return Object(i.a)(r,[{key:"fields",get:function(){return this._reader.fields}},{key:"hasNext",get:function(){return this._currentIndex+1<this._indices.length}},{key:"getSize",value:function(){return this._indices.length}},{key:"getCursor",value:function(){return this.copy()}},{key:"copy",value:function(){var e=new r(this._reader.copy(),this._indices);return e._currentIndex=this._currentIndex,e}},{key:"next",value:function(){for(;this._nextIndex()&&!this._reader._getExists(););return this._currentIndex<this._indices.length}},{key:"_nextIndex",value:function(){return++this._currentIndex<this._indices.length&&(this._reader.setIndex(this._indices[this._currentIndex]),!0)}},{key:"setArcadeSpatialReference",value:function(e){this._reader.setArcadeSpatialReference(e)}},{key:"attachStorage",value:function(e){this._reader.attachStorage(e)}},{key:"geometryType",get:function(){return this._reader.geometryType}},{key:"hasFeatures",get:function(){return this._reader.hasFeatures}},{key:"exceededTransferLimit",get:function(){return this._reader.exceededTransferLimit}},{key:"hasZ",get:function(){return this._reader.hasZ}},{key:"hasM",get:function(){return this._reader.hasM}},{key:"getStorage",value:function(){return this._reader.getStorage()}},{key:"getComputedNumeric",value:function(e){return this._reader.getComputedNumericAtIndex(0)}},{key:"setComputedNumeric",value:function(e,t){return this._reader.setComputedNumericAtIndex(t,0)}},{key:"getComputedString",value:function(e){return this._reader.getComputedStringAtIndex(0)}},{key:"setComputedString",value:function(e,t){return this._reader.setComputedStringAtIndex(0,t)}},{key:"getComputedNumericAtIndex",value:function(e){return this._reader.getComputedNumericAtIndex(e)}},{key:"setComputedNumericAtIndex",value:function(e,t){this._reader.setComputedNumericAtIndex(e,t)}},{key:"getComputedStringAtIndex",value:function(e){return this._reader.getComputedStringAtIndex(e)}},{key:"setComputedStringAtIndex",value:function(e,t){return this._reader.setComputedStringAtIndex(e,t)}},{key:"transform",value:function(e,t,r,n){var i=this.copy();return i._reader=this._reader.transform(e,t,r,n),i}},{key:"readAttribute",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this._reader.readAttribute(e,t)}},{key:"readAttributes",value:function(){return this._reader.readAttributes()}},{key:"joinAttributes",value:function(e){return this._reader.joinAttributes(e)}},{key:"readArcadeFeature",value:function(){return this._reader.readArcadeFeature()}},{key:"geometry",value:function(){return this._reader.geometry()}},{key:"field",value:function(e){return this.readAttribute(e,!0)}},{key:"hasField",value:function(e){return this._reader.hasField(e)}},{key:"setField",value:function(e,t){return this._reader.setField(e,t)}},{key:"keys",value:function(){return this._reader.keys()}},{key:"castToText",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this._reader.castToText(e)}},{key:"getQuantizationTransform",value:function(){return this._reader.getQuantizationTransform()}},{key:"getAttributeHash",value:function(){return this._reader.getAttributeHash()}},{key:"getObjectId",value:function(){return this._reader.getObjectId()}},{key:"getDisplayId",value:function(){return this._reader.getDisplayId()}},{key:"setDisplayId",value:function(e){return this._reader.setDisplayId(e)}},{key:"getGroupId",value:function(){return this._reader.getGroupId()}},{key:"setGroupId",value:function(e){return this._reader.setGroupId(e)}},{key:"getXHydrated",value:function(){return this._reader.getXHydrated()}},{key:"getYHydrated",value:function(){return this._reader.getYHydrated()}},{key:"getX",value:function(){return this._reader.getX()}},{key:"getY",value:function(){return this._reader.getY()}},{key:"setIndex",value:function(e){return this._reader.setIndex(e)}},{key:"getIndex",value:function(){return this._reader.getIndex()}},{key:"readLegacyFeature",value:function(){return this._reader.readLegacyFeature()}},{key:"readOptimizedFeature",value:function(){return this._reader.readOptimizedFeature()}},{key:"readLegacyPointGeometry",value:function(){return this._reader.readLegacyPointGeometry()}},{key:"readLegacyGeometry",value:function(){return this._reader.readLegacyGeometry()}},{key:"readLegacyCentroid",value:function(){return this._reader.readLegacyCentroid()}},{key:"readGeometryArea",value:function(){return this._reader.readGeometryArea()}},{key:"readUnquantizedGeometry",value:function(){return this._reader.readUnquantizedGeometry()}},{key:"readHydratedGeometry",value:function(){return this._reader.readHydratedGeometry()}},{key:"readGeometry",value:function(){return this._reader.readGeometry()}},{key:"readCentroid",value:function(){return this._reader.readCentroid()}},{key:"_readAttribute",value:function(e,t){throw new Error("Error: Should not be called. Underlying _reader should be used instead")}},{key:"_readAttributes",value:function(){throw new Error("Error: Should not be called. Underlying _reader should be used instead")}}],[{key:"from",value:function(e,t){return new r(e.copy(),t)}}]),r}(u.a)},1319:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return u}));var n=r(4),i=r(12);function a(e,t){return s.apply(this,arguments)}function s(){return s=Object(i.a)(Object(n.a)().mark((function e(t,r){var i,a,s,u,o,c;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:if(i=r.featureAdapter,a=t.startTimeField,s=t.endTimeField,u=Number.POSITIVE_INFINITY,o=Number.NEGATIVE_INFINITY,!a||!s){e.next=9;break}return e.next=7,r.forEach((function(e){var t=i.getAttribute(e,a),r=i.getAttribute(e,s);null==t||isNaN(t)||(u=Math.min(u,t)),null==r||isNaN(r)||(o=Math.max(o,r))}));case 7:e.next=12;break;case 9:return c=a||s,e.next=12,r.forEach((function(e){var t=i.getAttribute(e,c);null==t||isNaN(t)||(u=Math.min(u,t),o=Math.max(o,t))}));case 12:return e.abrupt("return",{start:u,end:o});case 13:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function u(e,t,r){if(!t||!e)return null;var n=e.startTimeField,i=e.endTimeField;if(!n&&!i)return null;var a=t.start,s=t.end;return null===a&&null===s?null:void 0===a&&void 0===s?function(){return!1}:n&&i?function(e,t,r,n,i){return null!=n&&null!=i?function(a){var s=e.getAttribute(a,t),u=e.getAttribute(a,r);return(null==s||s<=i)&&(null==u||u>=n)}:null!=n?function(t){var i=e.getAttribute(t,r);return null==i||i>=n}:null!=i?function(r){var n=e.getAttribute(r,t);return null==n||n<=i}:void 0}(r,n,i,a,s):function(e,t,r,n){return null!=r&&null!=n&&r===n?function(n){return e.getAttribute(n,t)===r}:null!=r&&null!=n?function(i){var a=e.getAttribute(i,t);return a>=r&&a<=n}:null!=r?function(n){return e.getAttribute(n,t)>=r}:null!=n?function(r){return e.getAttribute(r,t)<=n}:void 0}(r,n||i,a,s)}},1591:function(e,t,r){"use strict";r.d(t,"a",(function(){return S})),r.d(t,"b",(function(){return O})),r.d(t,"c",(function(){return k}));var n=r(4),i=r(92),a=r(12),s=r(101),u=r(519),o=r(248);var c=r(122),l=r(132);function d(e,t){return e?t?4:3:t?3:2}function f(e,t,r,n,a){if(!e)return!1;var s,u=d(t,r),o=e.coords,c=e.lengths,l=!1,f=0,p=Object(i.a)(c);try{for(p.s();!(s=p.n()).done;){var y=s.value;l=h(l,o,u,f,y,n,a),f+=y*u}}catch(v){p.e(v)}finally{p.f()}return l}function h(e,t,r,n,i,a,s){for(var u=e,o=n,c=n,l=n+i*r;c<l;c+=r){(o=c+r)===l&&(o=n);var d=t[c],f=t[c+1],h=t[o],p=t[o+1];(f<s&&p>=s||p<s&&f>=s)&&d+(s-f)/(p-f)*(h-d)<a&&(u=!u)}return u}var p=r(168),y=r(169),v=r(309),b=r(598),_="feature-store:unsupported-query",g={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},m={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function I(e){return null!=e&&!0===m.queryGeometry[Object(c.c)(e)]}function x(e){return null!=e&&!0===m.layerGeometry[e]}function k(e,t,n,i,a){if(Object(c.g)(t)&&"esriGeometryPoint"===n&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){var s=Object(p.h)(new y.a,t,!1,!1);return Promise.resolve((function(e){return function(e,t,r,n){return f(e,t,r,n.coords[0],n.coords[1])}(s,!1,!1,e)}))}if(Object(c.g)(t)&&"esriGeometryMultipoint"===n){var l=Object(p.h)(new y.a,t,!1,!1);if("esriSpatialRelContains"===e)return Promise.resolve((function(e){return function(e,t,r,n,i,a){var s=d(i,a),u=n.coords,o=n.lengths;if(!o)return!1;for(var c=0,l=0;c<o.length;c++,l+=s)if(!f(e,t,r,u[l],u[l+1]))return!1;return!0}(l,!1,!1,e,i,a)}))}if(Object(c.d)(t)&&"esriGeometryPoint"===n&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return Promise.resolve((function(e){return Object(u.e)(t,Object(b.c)(n,i,a,e))}));if(Object(c.d)(t)&&"esriGeometryMultipoint"===n&&"esriSpatialRelContains"===e)return Promise.resolve((function(e){return Object(u.d)(t,Object(b.c)(n,i,a,e))}));if(Object(c.d)(t)&&"esriSpatialRelIntersects"===e){var h="mesh"===(v=n)?o.a:Object(o.c)(v);return Promise.resolve((function(e){return h(t,Object(b.c)(n,i,a,e))}))}var v;return Promise.all([r.e(7),r.e(28)]).then(r.bind(null,434)).then((function(r){var s=r[g[e]].bind(null,t.spatialReference,t);return function(e){return s(Object(b.c)(n,i,a,e))}}))}function O(e,t,r){return j.apply(this,arguments)}function j(){return(j=Object(a.a)(Object(n.a)().mark((function e(t,r,i){var a,u;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.spatialRel,!(u=t.geometry)){e.next=11;break}if(null!=(n=a)&&!0===m.spatialRelationship[n]){e.next=4;break}throw new s.a(_,"Unsupported query spatial relationship",{query:t});case 4:if(!Object(l.l)(u.spatialReference)||!Object(l.l)(i)){e.next=11;break}if(I(u)){e.next=7;break}throw new s.a(_,"Unsupported query geometry type",{query:t});case 7:if(x(r)){e.next=9;break}throw new s.a(_,"Unsupported layer geometry type",{query:t});case 9:if(!t.outSR){e.next=11;break}return e.abrupt("return",Object(v.a)(t.geometry&&t.geometry.spatialReference,t.outSR));case 11:case"end":return e.stop()}var n}),e)})))).apply(this,arguments)}function S(e){if(Object(c.d)(e))return!0;if(Object(c.g)(e)){var t,r=Object(i.a)(e.rings);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(5!==n.length)return!1;if(n[0][0]!==n[1][0]||n[0][0]!==n[4][0]||n[2][0]!==n[3][0]||n[0][1]!==n[3][1]||n[0][1]!==n[4][1]||n[1][1]!==n[2][1])return!1}}catch(a){r.e(a)}finally{r.f()}return!0}return!1}},433:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(92),i=r(89),a=r(88),s=function(){function e(t){Object(i.a)(this,e),this.size=0,this._start=0,this.maxSize=t,this._buffer=new Array(t)}return Object(a.a)(e,[{key:"entries",get:function(){return this._buffer}},{key:"enqueue",value:function(e){if(this.size===this.maxSize){var t=this._buffer[this._start];return this._buffer[this._start]=e,this._start=(this._start+1)%this.maxSize,t}return this._buffer[(this._start+this.size++)%this.maxSize]=e,null}},{key:"dequeue",value:function(){if(0===this.size)return null;var e=this._buffer[this._start];return this._buffer[this._start]=null,this.size--,this._start=(this._start+1)%this.maxSize,e}},{key:"peek",value:function(){return 0===this.size?null:this._buffer[this._start]}},{key:"find",value:function(e){if(0===this.size)return null;var t,r=Object(n.a)(this._buffer);try{for(r.s();!(t=r.n()).done;){var i=t.value;if(null!=i&&e(i))return i}}catch(a){r.e(a)}finally{r.f()}return null}},{key:"clear",value:function(e){for(var t=this.dequeue();null!=t;)e&&e(t),t=this.dequeue()}}]),e}()},598:function(e,t,r){"use strict";r.d(t,"a",(function(){return v})),r.d(t,"b",(function(){return G})),r.d(t,"c",(function(){return x})),r.d(t,"d",(function(){return k})),r.d(t,"e",(function(){return j})),r.d(t,"f",(function(){return I}));var n=r(4),i=r(12),a=r(146),s=r(194),u=r(206),o=r(716),c=r(122),l=r(217),d=r(132),f=r(168),h=r(169),p=r(309),y=new a.a({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),v=Object.freeze({}),b=new h.a,_=new h.a,g=new h.a,m={esriGeometryPoint:f.n,esriGeometryPolyline:f.p,esriGeometryPolygon:f.o,esriGeometryMultipoint:f.m};function I(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.hasZ,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:e.hasM;if(null==t)return null;var a=e.hasZ&&n,s=e.hasM&&i;if(r){var u=Object(f.u)(g,t,e.hasZ,e.hasM,"esriGeometryPoint",r,n,i);return Object(f.n)(u,a,s)}return Object(f.n)(t,a,s)}function x(e,t,r,n,i,a){var s,u,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:t,c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:r,l=t&&o,d=r&&c,h=null!=n?"coords"in n?n:n.geometry:null;if(null==h)return null;if(i){var p,y,v=Object(f.q)(_,h,t,r,e,i,o,c);return a&&(v=Object(f.u)(g,v,l,d,e,a)),null!==(p=null===(y=m[e])||void 0===y?void 0:y.call(m,v,l,d))&&void 0!==p?p:null}if(a){var I,x,k=Object(f.u)(g,h,t,r,e,a,o,c);return null!==(I=null===(x=m[e])||void 0===x?void 0:x.call(m,k,l,d))&&void 0!==I?I:null}return Object(f.x)(b,h,t,r,o,c),null!==(s=null===(u=m[e])||void 0===u?void 0:u.call(m,b,l,d))&&void 0!==s?s:null}function k(e,t,r){return O.apply(this,arguments)}function O(){return(O=Object(i.a)(Object(n.a)().mark((function e(t,r,i){var a,s,u,o,c,l,d,f;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.outFields,s=t.orderByFields,u=t.groupByFieldsForStatistics,o=t.outStatistics,a)for(c=0;c<a.length;c++)a[c]=a[c].trim();if(s)for(l=0;l<s.length;l++)s[l]=s[l].trim();if(u)for(d=0;d<u.length;d++)u[d]=u[d].trim();if(o)for(f=0;f<o.length;f++)o[f].onStatisticField&&(o[f].onStatisticField=o[f].onStatisticField.trim());return e.abrupt("return",(t.geometry&&!t.outSR&&(t.outSR=t.geometry.spatialReference),j(t,r,i)));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e,t,r){return S.apply(this,arguments)}function S(){return(S=Object(i.a)(Object(n.a)().mark((function e(t,r,i){var a,s,u,d,f,h,y,b,_;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:if(a=t.where,t.where=a=a&&a.trim(),(!a||/^1 *= *1$/.test(a)||r&&r===a)&&(t.where=null),t.geometry){e.next=5;break}return e.abrupt("return",t);case 5:return e.next=7,F(t);case 7:if(s=e.sent,t.distance=0,t.units=null,"esriSpatialRelEnvelopeIntersects"===t.spatialRel&&(u=t.geometry.spatialReference,(s=Object(o.a)(s)).spatialReference=u),!s){e.next=27;break}return e.next=12,Object(p.a)(s.spatialReference,i);case 12:return s=A(s,i),e.next=15,Object(l.a)(Object(c.a)(s));case 15:if(null!=(f=e.sent[0])){e.next=18;break}throw v;case 18:return h="quantizationParameters"in t&&(null===(d=t.quantizationParameters)||void 0===d?void 0:d.tolerance)||"maxAllowableOffset"in t&&t.maxAllowableOffset||0,y=h&&w(s,i)?{densificationStep:8*h}:void 0,b=f.toJSON(),e.next=23,Object(p.b)(b,b.spatialReference,i,y);case 23:if(_=e.sent){e.next=26;break}throw v;case 26:_.spatialReference=i,t.geometry=_;case 27:return e.abrupt("return",t);case 28:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,t){if(!e)return!1;var r=e.spatialReference;return(Object(c.d)(e)||Object(c.g)(e)||Object(c.h)(e))&&!Object(d.d)(r,t)&&!Object(u.canProjectWithoutEngine)(r,t)}function A(e,t){var r=e.spatialReference;return w(e,t)&&Object(c.d)(e)?{spatialReference:r,rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]}:e}function F(e){return R.apply(this,arguments)}function R(){return(R=Object(i.a)(Object(n.a)().mark((function e(t){var r,i,a,u,o,c;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.distance,i=t.units,a=t.geometry,null!=r&&!("vertexAttributes"in a)){e.next=3;break}return e.abrupt("return",a);case 3:if(u=a.spatialReference,o=i?y.fromJSON(i):Object(s.g)(u),!u||!Object(d.h)(u)&&!Object(d.p)(u)){e.next=9;break}e.t0=a,e.next=12;break;case 9:return e.next=11,Object(p.a)(u,d.b).then((function(){return Object(p.b)(a,d.b)}));case 11:e.t0=e.sent;case 12:return c=e.t0,e.next=15,T();case 15:return e.t1=e.sent,e.abrupt("return",(0,e.t1)(c.spatialReference,c,r,o));case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return C.apply(this,arguments)}function C(){return(C=Object(i.a)(Object(n.a)().mark((function e(){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([r.e(7),r.e(28)]).then(r.bind(null,434));case 2:return e.abrupt("return",e.sent.geodesicBuffer);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(e){return e&&E in e?JSON.parse(JSON.stringify(e,D)):e}var E="_geVersion",D=function(e,t){return e!==E?t:void 0}},619:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return I}));var n=r(4),i=r(12),a=r(92),s=r(89),u=r(88),o=r(101),c=r(102),l=r(139),d=r(153),f=r(1591),h=r(1319),p=r(598),y=r(210),v=r(1021),b=c.a.getLogger("esri.views.2d.layers.features.support.whereUtils"),_={getAttribute:function(e,t){return e.field(t)}};function g(e,t){return m.apply(this,arguments)}function m(){return(m=Object(i.a)(Object(n.a)().mark((function e(t,i){var a,s,u;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.e(4).then(r.bind(null,436));case 2:return a=e.sent,e.prev=3,(s=a.WhereClause.create(t,i)).isStandardized||(u=new o.a("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",s),b.error(u)),e.abrupt("return",(function(e){var t=e.readArcadeFeature();return s.testFeature(t,_)}));case 9:return e.prev=9,e.t0=e.catch(3),e.abrupt("return",(b.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",t),function(e){return!0}));case 12:case"end":return e.stop()}}),e,null,[[3,9]])})))).apply(this,arguments)}var I=function(){function e(t){Object(s.a)(this,e),this._geometryBounds=Object(l.h)(),this._idToVisibility=new Map,this._serviceInfo=t}return Object(u.a)(e,[{key:"hash",get:function(){return this._hash}},{key:"check",value:function(e){return this._applyFilter(e)}},{key:"clear",value:function(){var e=this._resetAllHiddenIds();return this.update(),{show:e,hide:[]}}},{key:"invalidate",value:function(){var e=this;this._idToVisibility.forEach((function(t,r){e._idToVisibility.set(r,0)}))}},{key:"setKnownIds",value:function(e){var t,r=Object(a.a)(e);try{for(r.s();!(t=r.n()).done;){var n=t.value;this._idToVisibility.set(n,1)}}catch(i){r.e(i)}finally{r.f()}}},{key:"setTrue",value:function(e){var t=this,r=[],n=[],i=new Set(e);return this._idToVisibility.forEach((function(e,a){var s=!!(1&t._idToVisibility.get(a)),u=i.has(a);!s&&u?r.push(a):s&&!u&&n.push(a),t._idToVisibility.set(a,u?3:0)})),{show:r,hide:n}}},{key:"createQuery",value:function(){var e=this.geometry,t=this.spatialRel,r=this.where,n=this.timeExtent,i=this.objectIds;return y.a.fromJSON({geometry:e,spatialRel:t,where:r,timeExtent:n,objectIds:i})}},{key:"update",value:function(){var e=Object(i.a)(Object(n.a)().mark((function e(t,r){var i;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._hash=JSON.stringify(t),e.next=3,Object(p.e)(t,null,r);case 3:return i=e.sent,e.next=6,Promise.all([this._setGeometryFilter(i),this._setIdFilter(i),this._setAttributeFilter(i),this._setTimeFilter(i)]);case 6:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_setAttributeFilter",value:function(){var e=Object(i.a)(Object(n.a)().mark((function e(t){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.where){e.next=2;break}return e.abrupt("return",(this._clause=null,void(this.where=null)));case 2:return e.next=4,g(t.where,this._serviceInfo.fieldsIndex);case 4:this._clause=e.sent,this.where=t.where;case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_setIdFilter",value:function(e){this._idsToShow=e&&e.objectIds&&new Set(e.objectIds),this._idsToHide=e&&e.hiddenIds&&new Set(e.hiddenIds),this.objectIds=e&&e.objectIds}},{key:"_setGeometryFilter",value:function(){var e=Object(i.a)(Object(n.a)().mark((function e(t){var r,i,a;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.geometry){e.next=2;break}return e.abrupt("return",(this._spatialQueryOperator=null,this.geometry=null,void(this.spatialRel=null)));case 2:return r=t.geometry,i=t.spatialRel||"esriSpatialRelIntersects",e.next=6,Object(f.c)(i,r,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM);case 6:a=e.sent,Object(d.b)(this._geometryBounds,r),this._spatialQueryOperator=a,this.geometry=r,this.spatialRel=i;case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_setTimeFilter",value:function(e){if(this.timeExtent=this._timeOperator=null,e&&e.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=e.timeExtent,this._timeOperator=Object(h.b)(this._serviceInfo.timeInfo,e.timeExtent,v.b);else{var t=new o.a("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",e.timeExtent);c.a.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter").error(t)}}},{key:"_applyFilter",value:function(e){return this._filterByGeometry(e)&&this._filterById(e)&&this._filterByTime(e)&&this._filterByExpression(e)}},{key:"_filterByExpression",value:function(e){return!this.where||this._clause(e)}},{key:"_filterById",value:function(e){return(!this._idsToHide||!this._idsToHide.size||!this._idsToHide.has(e.getObjectId()))&&(!this._idsToShow||!this._idsToShow.size||this._idsToShow.has(e.getObjectId()))}},{key:"_filterByGeometry",value:function(e){if(!this.geometry)return!0;var t=e.readHydratedGeometry();return!!t&&this._spatialQueryOperator(t)}},{key:"_filterByTime",value:function(e){return null==this._timeOperator||this._timeOperator(e)}},{key:"_resetAllHiddenIds",value:function(){var e=this,t=[];return this._idToVisibility.forEach((function(r,n){1&r||(e._idToVisibility.set(n,1),t.push(n))})),t}}]),e}()}}]);
//# sourceMappingURL=186.dd2e3cd5.chunk.js.map