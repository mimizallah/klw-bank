(this["webpackJsonpklw-bank"]=this["webpackJsonpklw-bank"]||[]).push([[241],{2197:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return I}));var n=r(1),a=r(92),s=r(4),i=r(12),u=r(89),c=r(88),o=r(129),l=r(339),p=r(101),d=r(102),f=r(110),h=r(122),y=r(132),b=r(168),v=r(710),g=r(309),m=r(858),j=r(637),O=r(449),x=r(1323),k=r(227),_=r(782),w=r(195),F={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}},I=function(){function e(){var t=this;Object(u.a)(this,e),this._queryEngine=null,this._snapshotFeatures=function(){var e=Object(i.a)(Object(s.a)().mark((function e(r){var n;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._fetch(r);case 2:return n=e.sent,e.abrupt("return",t._createFeatures(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}return Object(c.a)(e,[{key:"destroy",value:function(){var e;null!==(e=this._queryEngine)&&void 0!==e&&e.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}},{key:"load",value:function(){var e=Object(i.a)(Object(s.a)().mark((function e(t){var r,i,u,c,o,l,d,f,h,b,g,x,I,E,T,S,q,P,R,C,A,G,M,D,Q,Z,N,L,z,B=arguments;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=B.length>1&&void 0!==B[1]?B[1]:{},this._loadOptions={url:t.url,customParameters:t.customParameters},i=[],e.next=5,this._checkProjection(t.spatialReference);case 5:if(u=null,e.t0=t.url,!e.t0){e.next=11;break}return e.next=10,this._fetch(null===r||void 0===r?void 0:r.signal);case 10:u=e.sent;case 11:c=Object(j.c)(u,{geometryType:t.geometryType}),o=t.fields||c.fields||[],l=null!=t.hasZ?t.hasZ:c.hasZ,d=c.geometryType,f=t.objectIdField||c.objectIdFieldName||"__OBJECTID",h=t.spatialReference||y.b,b=t.timeInfo,o===c.fields&&c.unknownFields.length>0&&i.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:c.unknownFields}}),(g=new k.a(o).get(f))?("esriFieldTypeString"!==g.type&&(g.type="esriFieldTypeOID"),g.editable=!1,g.nullable=!1,f=g.name):(g={alias:f,name:f,type:"string"===c.objectIdFieldType?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},o.unshift(g)),x={},I=Object(a.a)(o),e.prev=20,I.s();case 22:if((E=I.n()).done){e.next=31;break}if(null==(T=E.value).name&&(T.name=T.alias),null==T.alias&&(T.alias=T.name),T.name){e.next=26;break}throw new p.a("geojson-layer:invalid-field-name","field name is missing",{field:T});case 26:if(_.a.jsonValues.includes(T.type)){e.next=28;break}throw new p.a("geojson-layer:invalid-field-type",'invalid type for field "'.concat(T.name,'"'),{field:T});case 28:T.name!==g.name&&void 0!==(S=Object(w.q)(T))&&(x[T.name]=S);case 29:e.next=22;break;case 31:e.next=36;break;case 33:e.prev=33,e.t1=e.catch(20),I.e(e.t1);case 36:return e.prev=36,I.f(),e.finish(36);case 39:return this._fieldsIndex=new k.a(o),(q=this._fieldsIndex.requiredFields.indexOf(g))>-1&&this._fieldsIndex.requiredFields.splice(q,1),b&&(b.startTimeField&&((P=this._fieldsIndex.get(b.startTimeField))?(b.startTimeField=P.name,P.type="esriFieldTypeDate"):b.startTimeField=null),b.endTimeField&&((R=this._fieldsIndex.get(b.endTimeField))?(b.endTimeField=R.name,R.type="esriFieldTypeDate"):b.endTimeField=null),b.trackIdField&&((C=this._fieldsIndex.get(b.trackIdField))?b.trackIdField=C.name:(b.trackIdField=null,i.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:b}}))),b.startTimeField||b.endTimeField||(i.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:b}}),b=null)),A=d?Object(O.d)(d):void 0,G={warnings:i,featureErrors:[],layerDefinition:Object(n.a)(Object(n.a)({},F),{},{drawingInfo:null!==A&&void 0!==A?A:void 0,templates:Object(O.c)(x),extent:void 0,geometryType:d,objectIdField:f,fields:o,hasZ:!!l,timeInfo:b})},this._queryEngine=new m.a({fields:o,geometryType:d,hasM:!1,hasZ:l,objectIdField:f,spatialReference:h,timeInfo:b,featureStore:new v.a({geometryType:d,hasM:!1,hasZ:l}),cacheSpatialQueries:!0}),this._createDefaultAttributes=Object(O.b)(x,f),e.next=46,this._createFeatures(u);case 46:return M=e.sent,this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,M),D=this._normalizeFeatures(M,G.warnings,G.featureErrors),this._queryEngine.featureStore.addMany(D),e.next=52,this._queryEngine.fetchRecomputedExtents();case 52:return Q=e.sent,Z=Q.fullExtent,N=Q.timeExtent,G.layerDefinition.extent=Z,N&&(L=N.start,z=N.end,G.layerDefinition.timeInfo.timeExtent=[L,z]),e.abrupt("return",G);case 57:case"end":return e.stop()}}),e,this,[[20,33,36,39]])})));return function(t){return e.apply(this,arguments)}}()},{key:"applyEdits",value:function(){var e=Object(i.a)(Object(s.a)().mark((function e(t){var r,n,a;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this._queryEngine,n=r.spatialReference,a=r.geometryType,e.next=3,Promise.all([Object(x.c)(n,a),Object(g.a)(t.adds,n),Object(g.a)(t.updates,n)]);case 3:return e.next=5,this._waitSnapshotComplete();case 5:return e.abrupt("return",this._applyEdits(t));case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"queryFeatures",value:function(){var e=Object(i.a)(Object(s.a)().mark((function e(){var t,r,n=arguments;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{},r=n.length>1&&void 0!==n[1]?n[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQuery(t,r.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryFeatureCount",value:function(){var e=Object(i.a)(Object(s.a)().mark((function e(){var t,r,n=arguments;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{},r=n.length>1&&void 0!==n[1]?n[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQueryForCount(t,r.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryObjectIds",value:function(){var e=Object(i.a)(Object(s.a)().mark((function e(){var t,r,n=arguments;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{},r=n.length>1&&void 0!==n[1]?n[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQueryForIds(t,r.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryExtent",value:function(){var e=Object(i.a)(Object(s.a)().mark((function e(){var t,r,n=arguments;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{},r=n.length>1&&void 0!==n[1]?n[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQueryForExtent(t,r.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"querySnapping",value:function(){var e=Object(i.a)(Object(s.a)().mark((function e(t){var r,n=arguments;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:{},e.next=3,this._waitSnapshotComplete();case 3:return e.abrupt("return",this._queryEngine.executeQueryForSnapping(t,r.signal));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"refresh",value:function(){var e=Object(i.a)(Object(s.a)().mark((function e(t){var r,n,a,i,u=this;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._loadOptions.customParameters=t,null!==(r=this._snapshotTask)&&void 0!==r&&r.abort(),this._snapshotTask=Object(l.a)(this._snapshotFeatures),this._snapshotTask.promise.then((function(e){u._queryEngine.featureStore.clear(),u._objectIdGenerator=u._createObjectIdGenerator(u._queryEngine,e);var t=u._normalizeFeatures(e);t&&u._queryEngine.featureStore.addMany(t)}),(function(e){u._queryEngine.featureStore.clear(),Object(f.h)(e)||d.a.getLogger("esri.layers.GeoJSONLayer").error(new p.a("geojson-layer:refresh","An error occurred during refresh",{error:e}))})),e.next=6,this._waitSnapshotComplete();case 6:return e.next=8,this._queryEngine.fetchRecomputedExtents();case 8:return n=e.sent,a=n.fullExtent,i=n.timeExtent,e.abrupt("return",{extent:a,timeExtent:i});case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_createFeatures",value:function(){var e=Object(i.a)(Object(s.a)().mark((function e(t){var r,n,i,u,c,o,l,p;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=t){e.next=2;break}return e.abrupt("return",[]);case 2:if(r=this._queryEngine,n=r.geometryType,i=r.hasZ,u=r.objectIdField,c=Object(j.a)(t,{geometryType:n,hasZ:i,objectIdField:u}),!Object(y.d)(this._queryEngine.spatialReference,y.b)){o=Object(a.a)(c);try{for(o.s();!(l=o.n()).done;)null!=(p=l.value).geometry&&(p.geometry=Object(b.d)(Object(g.b)(Object(b.l)(p.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),y.b,this._queryEngine.spatialReference)))}catch(s){o.e(s)}finally{o.f()}}return e.abrupt("return",c);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_waitSnapshotComplete",value:function(){var e=Object(i.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._snapshotTask||this._snapshotTask.finished){e.next=9;break}return e.prev=1,e.next=4,this._snapshotTask.promise;case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.abrupt("return",this._waitSnapshotComplete());case 9:case"end":return e.stop()}}),e,this,[[1,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"_fetch",value:function(){var e=Object(i.a)(Object(s.a)().mark((function e(t){var r,a,i,u;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this._loadOptions,a=r.url,i=r.customParameters,e.next=5,Object(o.default)(a,{responseType:"json",query:Object(n.a)({},i),signal:t});case 5:return u=e.sent.data,e.next=8,Object(j.d)(u);case 8:return e.abrupt("return",u);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_normalizeFeatures",value:function(e,t,r){var n,s=this._queryEngine.objectIdField,i=[],u=Object(a.a)(e);try{for(u.s();!(n=u.n()).done;){var c=n.value,o=this._createDefaultAttributes(),l=Object(x.d)(this._fieldsIndex,o,c.attributes,!0,t);l?null===r||void 0===r||r.push(l):(this._assignObjectId(o,c.attributes,!0),c.attributes=o,c.objectId=o[s],i.push(c))}}catch(p){u.e(p)}finally{u.f()}return i}},{key:"_applyEdits",value:function(){var e=Object(i.a)(Object(s.a)().mark((function e(t){var r,n,i,u,c,o,l,p,d,f;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.adds,n=t.updates,i=t.deletes,u={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}},r&&r.length&&this._applyAddEdits(u,r),n&&n.length&&this._applyUpdateEdits(u,n),i&&i.length){c=Object(a.a)(i);try{for(c.s();!(o=c.n()).done;)l=o.value,u.deleteResults.push(Object(x.b)(l))}catch(s){c.e(s)}finally{c.f()}this._queryEngine.featureStore.removeManyById(i)}return e.next=4,this._queryEngine.fetchRecomputedExtents();case 4:return p=e.sent,d=p.fullExtent,f=p.timeExtent,e.abrupt("return",{extent:d,timeExtent:f,featureEditResults:u});case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_applyAddEdits",value:function(e,t){var r,n=e.addResults,s=this._queryEngine,i=s.geometryType,u=s.hasM,c=s.hasZ,o=s.objectIdField,l=s.spatialReference,p=s.featureStore,d=[],f=Object(a.a)(t);try{for(f.s();!(r=f.n()).done;){var y=r.value;if(y.geometry&&i!==Object(h.c)(y.geometry))n.push(Object(x.a)("Incorrect geometry type."));else{var v=this._createDefaultAttributes(),m=Object(x.d)(this._fieldsIndex,v,y.attributes);if(m)n.push(m);else{if(this._assignObjectId(v,y.attributes),y.attributes=v,null!=y.uid){var j=y.attributes[o];e.uidToObjectId[y.uid]=j}if(null!=y.geometry){var O,k=null!==(O=y.geometry.spatialReference)&&void 0!==O?O:l;y.geometry=Object(g.b)(Object(x.e)(y.geometry,k),k,l)}d.push(y),n.push(Object(x.b)(y.attributes[o]))}}}}catch(_){f.e(_)}finally{f.f()}p.addMany(Object(b.c)([],d,i,c,u,o))}},{key:"_applyUpdateEdits",value:function(e,t){var r,n=e.updateResults,s=this._queryEngine,i=s.geometryType,u=s.hasM,c=s.hasZ,o=s.objectIdField,l=s.spatialReference,p=s.featureStore,d=Object(a.a)(t);try{for(d.s();!(r=d.n()).done;){var f=r.value,y=f.attributes,v=f.geometry,m=y&&y[o];if(null!=m)if(p.has(m)){var j=Object(b.j)(p.getFeature(m),i,c,u);if(null!=v){var O;if(i!==Object(h.c)(v)){n.push(Object(x.a)("Incorrect geometry type."));continue}var k=null!==(O=v.spatialReference)&&void 0!==O?O:l;j.geometry=Object(g.b)(Object(x.e)(v,k),k,l)}if(y){var _=Object(x.d)(this._fieldsIndex,j.attributes,y);if(_){n.push(_);continue}}p.add(Object(b.a)(j,i,c,u,o)),n.push(Object(x.b)(m))}else n.push(Object(x.a)("Feature with object id ".concat(m," missing")));else n.push(Object(x.a)("Identifier field ".concat(o," missing")))}}catch(w){d.e(w)}finally{d.f()}}},{key:"_createObjectIdGenerator",value:function(e,t){var r=e.fieldsIndex.get(e.objectIdField);if("esriFieldTypeString"===r.type)return function(){return r.name+"-"+Date.now().toString(16)};var n,s=Number.NEGATIVE_INFINITY,i=Object(a.a)(t);try{for(i.s();!(n=i.n()).done;){var u=n.value;u.objectId&&(s=Math.max(s,u.objectId))}}catch(c){i.e(c)}finally{i.f()}return s=Math.max(0,s)+1,function(){return s++}}},{key:"_assignObjectId",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=this._queryEngine.objectIdField;e[n]=r&&n in t?t[n]:this._objectIdGenerator()}},{key:"_checkProjection",value:function(){var e=Object(i.a)(Object(s.a)().mark((function e(t){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(g.a)(y.b,t);case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),new p.a("geojson-layer","Projection not supported");case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()}]),e}()},449:function(e,t,r){"use strict";r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return f})),r.d(t,"d",(function(){return o}));var n=r(34),a=r(1),s=r(93),i=r(116),u=r(488),c=r(382);function o(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?c.a:"esriGeometryPolyline"===e?c.c:c.b}}}var l=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/,p=1;function d(e,t){if(Object(s.a)("esri-csp-restrictions"))return function(){return Object(a.a)(Object(n.a)({},t,null),e)};try{var r="this.".concat(t," = null;");for(var i in e)r+="this".concat(l.test(i)?".".concat(i):'["'.concat(i,'"]')," = ").concat(JSON.stringify(e[i]),";");var u=new Function("\n      return class AttributesClass$".concat(p++," {\n        constructor() {\n          ").concat(r,";\n        }\n      }\n    "))();return function(){return new u}}catch(c){return function(){return Object(a.a)(Object(n.a)({},t,null),e)}}}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:Object(i.a)(e)}}]}function h(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:u.a,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1}}}},637:function(e,t,r){"use strict";r.d(t,"a",(function(){return I})),r.d(t,"b",(function(){return f})),r.d(t,"c",(function(){return F})),r.d(t,"d",(function(){return w}));var n=r(99),a=r(4),s=r(92),i=r(101),u=r(335),c=r(169),o=r(195),l=Object(a.a)().mark(h),p=Object(a.a)().mark(y),d={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function f(e){return d[e]}function h(e){var t,r,n;return Object(a.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:a.t0=e.type,a.next="Feature"===a.t0?3:"FeatureCollection"===a.t0?6:25;break;case 3:return a.next=5,e;case 5:return a.abrupt("break",25);case 6:t=Object(s.a)(e.features),a.prev=7,t.s();case 9:if((r=t.n()).done){a.next=17;break}if(n=r.value,a.t1=n,!a.t1){a.next=15;break}return a.next=15,n;case 15:a.next=9;break;case 17:a.next=22;break;case 19:a.prev=19,a.t2=a.catch(7),t.e(a.t2);case 22:return a.prev=22,t.f(),a.finish(22);case 25:case"end":return a.stop()}}),l,null,[[7,19,22,25]])}function y(e){var t,r,n,i,u,c,o,l,d;return Object(a.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!e){a.next=57;break}a.t0=e.type,a.next="Point"===a.t0?4:"LineString"===a.t0||"MultiPoint"===a.t0?7:"MultiLineString"===a.t0||"Polygon"===a.t0?9:"MultiPolygon"===a.t0?26:57;break;case 4:return a.next=6,e.coordinates;case 6:return a.abrupt("break",57);case 7:return a.delegateYield(e.coordinates,"t1",8);case 8:return a.abrupt("break",57);case 9:t=Object(s.a)(e.coordinates),a.prev=10,t.s();case 12:if((r=t.n()).done){a.next=17;break}return n=r.value,a.delegateYield(n,"t2",15);case 15:a.next=12;break;case 17:a.next=22;break;case 19:a.prev=19,a.t3=a.catch(10),t.e(a.t3);case 22:return a.prev=22,t.f(),a.finish(22);case 25:return a.abrupt("break",57);case 26:i=Object(s.a)(e.coordinates),a.prev=27,i.s();case 29:if((u=i.n()).done){a.next=49;break}c=u.value,o=Object(s.a)(c),a.prev=32,o.s();case 34:if((l=o.n()).done){a.next=39;break}return d=l.value,a.delegateYield(d,"t4",37);case 37:a.next=34;break;case 39:a.next=44;break;case 41:a.prev=41,a.t5=a.catch(32),o.e(a.t5);case 44:return a.prev=44,o.f(),a.finish(44);case 47:a.next=29;break;case 49:a.next=54;break;case 51:a.prev=51,a.t6=a.catch(27),i.e(a.t6);case 54:return a.prev=54,i.f(),a.finish(54);case 57:case"end":return a.stop()}}),p,null,[[10,19,22,25],[27,51,54,57],[32,41,44,47]])}function b(e){for(var t=0,r=0;r<e.length;r++){var n=e[r],a=e[(r+1)%e.length];t+=n[0]*a[1]-a[0]*n[1]}return t<=0}function v(e){var t=e[0],r=e[e.length-1];return t[0]===r[0]&&t[1]===r[1]&&t[2]===r[2]||e.push(t),e}function g(e,t,r){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,r){return O(e,t.coordinates,r),e}(e,t,r);case"MultiLineString":return function(e,t,r){var n,a=Object(s.a)(t.coordinates);try{for(a.s();!(n=a.n()).done;){O(e,n.value,r)}}catch(i){a.e(i)}finally{a.f()}return e}(e,t,r);case"MultiPolygon":return function(e,t,r){var n,a=Object(s.a)(t.coordinates);try{for(a.s();!(n=a.n()).done;){var i=n.value;m(e,i[0],r);for(var u=1;u<i.length;u++)j(e,i[u],r)}}catch(c){a.e(c)}finally{a.f()}return e}(e,t,r);case"Point":return function(e,t,r){return k(e,t.coordinates,r),e}(e,t,r);case"Polygon":return function(e,t,r){var n=t.coordinates;m(e,n[0],r);for(var a=1;a<n.length;a++)j(e,n[a],r);return e}(e,t,r)}}function m(e,t,r){var n=v(t);!function(e){return!b(e)}(n)?O(e,n,r):x(e,n,r)}function j(e,t,r){var n=v(t);!function(e){return b(e)}(n)?O(e,n,r):x(e,n,r)}function O(e,t,r){var n,a=Object(s.a)(t);try{for(a.s();!(n=a.n()).done;){k(e,n.value,r)}}catch(i){a.e(i)}finally{a.f()}e.lengths.push(t.length)}function x(e,t,r){for(var n=t.length-1;n>=0;n--)k(e,t[n],r);e.lengths.push(t.length)}function k(e,t,r){var a=Object(n.a)(t,3),s=a[0],i=a[1],u=a[2];e.coords.push(s,i),r.hasZ&&e.coords.push(u||0)}function _(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function w(e){if(!e)throw new i.a("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new i.a("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});var t=e.crs;if(t){var r="string"==typeof t?t:"name"===t.type?t.properties.name:"EPSG"===t.type?t.properties.code:null,n=new RegExp(".*(CRS84H?|4326)$","i");if(!r||!n.test(r))throw new i.a("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}}function F(e){var t,r,n,a,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=[],c=new Set,l=new Set,p=!1,d=null,b=!1,v=i.geometryType,g=void 0===v?null:v,m=!1,j=Object(s.a)(h(e));try{var O=function(){var e=a.value,t=e.geometry,r=e.properties,i=e.id;if((!t||(g||(g=f(t.type)),f(t.type)===g))&&(p||(p=function(e){var t,r=Object(s.a)(e);try{for(r.s();!(t=r.n()).done;)if(t.value.length>2)return!0}catch(n){r.e(n)}finally{r.f()}return!1}(y(t))),b||(b=null!=i)&&(n=typeof i,r&&(d=Object.keys(r).filter((function(e){return r[e]===i})))),r&&d&&b&&null!=i&&(d.length>1?d=d.filter((function(e){return r[e]===i})):1===d.length&&(d=r[d[0]]===i?d:[])),!m&&r)){var h=!0;for(var v in r)if(!c.has(v)){var j=r[v];if(null!=j){var O=_(j);if("unknown"!==O){l.delete(v),c.add(v);var x=Object(o.y)(v);x&&u.push({name:x,alias:v,type:O})}else l.add(v)}else h=!1,l.add(v)}m=h}};for(j.s();!(a=j.n()).done;)O()}catch(I){j.e(I)}finally{j.f()}var x=null!==(t=Object(o.y)(1===(null===(r=d)||void 0===r?void 0:r.length)&&d[0]||null))&&void 0!==t?t:void 0;if(x){var k,w=Object(s.a)(u);try{for(w.s();!(k=w.n()).done;){var F=k.value;if(F.name===x&&Object(o.v)(F)){F.type="esriFieldTypeOID";break}}}catch(I){w.e(I)}finally{w.f()}}return{fields:u,geometryType:g,hasZ:p,objectIdFieldName:x,objectIdFieldType:n,unknownFields:Array.from(l)}}function I(e,t){return Array.from(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(a.a)().mark((function r(){var n,i,o,l,p,d,h,y,b,v,m,j;return Object(a.a)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n=t.geometryType,i=t.objectIdField,o=Object(s.a)(e),r.prev=2,o.s();case 4:if((l=o.n()).done){r.next=17;break}if(d=l.value,h=d.geometry,y=d.properties,b=d.id,!h||f(h.type)===n){r.next=9;break}return r.abrupt("continue",15);case 9:return v=y||{},m=void 0,i&&(m=v[i],null==b||m||(v[i]=m=b)),j=new u.a(h?g(new c.a,h,t):null,v,null,null!==(p=m)&&void 0!==p?p:void 0),r.next=15,j;case 15:r.next=4;break;case 17:r.next=22;break;case 19:r.prev=19,r.t0=r.catch(2),o.e(r.t0);case 22:return r.prev=22,o.f(),r.finish(22);case 25:case"end":return r.stop()}}),r,null,[[2,19,22,25]])}))()}(h(e),t))}}}]);
//# sourceMappingURL=241.e2881326.chunk.js.map