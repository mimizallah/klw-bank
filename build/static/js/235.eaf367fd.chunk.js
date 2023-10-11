(this["webpackJsonpklw-bank"]=this["webpackJsonpklw-bank"]||[]).push([[235],{1791:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return _}));var n=r(92),a=r(4),o=r(12),i=r(1),s=r(89),u=r(88),c=r(107),l=r(106),p=r(90),d=r(91),b=r(94),y=(r(119),r(101)),f=r(110),v=r(128),h=r(97),O=(r(96),r(98),r(93)),j=r(136),m=r(95),g=r(412),w=r(329),k=r(452),S=r(235),x=r(130),F=function(e){Object(p.a)(r,e);var t=Object(d.a)(r);function r(e){var n;return Object(s.a)(this,r),(n=t.call(this,e)).type="csv",n.refresh=Object(f.d)(function(){var e=Object(o.a)(Object(a.a)().mark((function e(t){var r,o,i;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.load();case 2:return e.next=4,n._connection.invoke("refresh",t);case 4:return r=e.sent,o=r.extent,i=r.timeExtent,e.abrupt("return",(o&&(n.sourceJSON.extent=o),i&&(n.sourceJSON.timeInfo.timeExtent=[i.start,i.end]),{dataChanged:!0,updates:{extent:n.sourceJSON.extent,timeInfo:n.sourceJSON.timeInfo}}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),n}return Object(u.a)(r,[{key:"load",value:function(e){var t=null!=e?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}},{key:"destroy",value:function(){var e;null!==(e=this._connection)&&void 0!==e&&e.close(),this._connection=null}},{key:"openPorts",value:function(){var e=Object(o.a)(Object(a.a)().mark((function e(){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this._connection.openPorts());case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryFeatures",value:function(){var e=Object(o.a)(Object(a.a)().mark((function e(t){var r,n,o=arguments;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>1&&void 0!==o[1]?o[1]:{},e.next=3,this.load(r);case 3:return e.next=5,this._connection.invoke("queryFeatures",t?t.toJSON():null,r);case 5:return n=e.sent,e.abrupt("return",S.a.fromJSON(n));case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"queryFeaturesJSON",value:function(){var e=Object(o.a)(Object(a.a)().mark((function e(t){var r,n=arguments;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:{},e.next=3,this.load(r);case 3:return e.abrupt("return",this._connection.invoke("queryFeatures",t?t.toJSON():null,r));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"queryFeatureCount",value:function(){var e=Object(o.a)(Object(a.a)().mark((function e(t){var r,n=arguments;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:{},e.next=3,this.load(r);case 3:return e.abrupt("return",this._connection.invoke("queryFeatureCount",t?t.toJSON():null,r));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"queryObjectIds",value:function(){var e=Object(o.a)(Object(a.a)().mark((function e(t){var r,n=arguments;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:{},e.next=3,this.load(r);case 3:return e.abrupt("return",this._connection.invoke("queryObjectIds",t?t.toJSON():null,r));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"queryExtent",value:function(){var e=Object(o.a)(Object(a.a)().mark((function e(t){var r,n,o=arguments;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>1&&void 0!==o[1]?o[1]:{},e.next=3,this.load(r);case 3:return e.next=5,this._connection.invoke("queryExtent",t?t.toJSON():null,r);case 5:return n=e.sent,e.abrupt("return",{count:n.count,extent:x.a.fromJSON(n.extent)});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"querySnapping",value:function(){var e=Object(o.a)(Object(a.a)().mark((function e(t){var r,n=arguments;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:{},e.next=3,this.load(r);case 3:return e.abrupt("return",this._connection.invoke("querySnapping",t,r));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_startWorker",value:function(){var e=Object(o.a)(Object(a.a)().mark((function e(t){var r,n,o,i,s,u,c,l,p;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.b)("CSVSourceWorker",{strategy:Object(O.a)("feature-layers-workers")?"dedicated":"local",signal:t});case 2:return this._connection=e.sent,r=this.loadOptions,n=r.url,o=r.delimiter,i=r.fields,s=r.latitudeField,u=r.longitudeField,c=r.spatialReference,l=r.timeInfo,e.next=13,this._connection.invoke("load",{url:n,customParameters:this.customParameters,parsingOptions:{delimiter:o,fields:null===i||void 0===i?void 0:i.map((function(e){return e.toJSON()})),latitudeField:s,longitudeField:u,spatialReference:null===c||void 0===c?void 0:c.toJSON(),timeInfo:null===l||void 0===l?void 0:l.toJSON()}},{signal:t});case 13:p=e.sent,this.locationInfo=p.locationInfo,this.sourceJSON=p.layerDefinition,this.delimiter=p.delimiter;case 15:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),r}(w.a);Object(b.a)([Object(h.b)()],F.prototype,"type",void 0),Object(b.a)([Object(h.b)()],F.prototype,"loadOptions",void 0),Object(b.a)([Object(h.b)()],F.prototype,"customParameters",void 0),Object(b.a)([Object(h.b)()],F.prototype,"locationInfo",void 0),Object(b.a)([Object(h.b)()],F.prototype,"sourceJSON",void 0),Object(b.a)([Object(h.b)()],F.prototype,"delimiter",void 0),F=Object(b.a)([Object(m.a)("esri.layers.graphics.sources.CSVSource")],F);var C=r(449),I=r(210),q=r(215),P=r(125);function N(e,t){throw new y.a(t,"CSVLayer (title: ".concat(e.title,", id: ").concat(e.id,") cannot be saved to a portal item"))}var R=function(e){Object(p.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(s.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).geometryType="point",e.capabilities=Object(C.a)(!1,!1),e.delimiter=null,e.editingEnabled=!1,e.fields=null,e.latitudeField=null,e.locationType="coordinates",e.longitudeField=null,e.operationalLayerType="CSV",e.outFields=["*"],e.path=null,e.spatialReference=P.a.WGS84,e.source=null,e.type="csv",e}return Object(u.a)(r,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?Object(i.a)({url:e},t):e}},{key:"load",value:function(e){var t=this,r=null!=e?e.signal:null,n=this.loadFromPortal({supportedTypes:["CSV"],supportsData:!1},e).catch(f.m).then(Object(o.a)(Object(a.a)().mark((function e(){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t,e.next=3,t.createGraphicsSource(r);case 3:return e.t1=e.sent,e.abrupt("return",e.t0.initLayerProperties.call(e.t0,e.t1));case 5:case"end":return e.stop()}}),e)}))));return this.addResolvingPromise(n),Promise.resolve(this)}},{key:"isTable",get:function(){return this.loaded&&null==this.geometryType}},{key:"readWebMapLabelsVisible",value:function(e,t){return null!=t.showLabels?t.showLabels:!!(t.layerDefinition&&t.layerDefinition.drawingInfo&&t.layerDefinition.drawingInfo.labelingInfo)}},{key:"url",set:function(e){if(e){var t=Object(v.Q)(e);this._set("url",t.path),t.query&&(this.customParameters=Object(i.a)(Object(i.a)({},this.customParameters),t.query))}else this._set("url",e)}},{key:"createGraphicsSource",value:function(){var e=Object(o.a)(Object(a.a)().mark((function e(t){var r,n,o,i,s,u;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=new F({loadOptions:{delimiter:this.delimiter,fields:this.fields,latitudeField:null!==(r=this.latitudeField)&&void 0!==r?r:void 0,longitudeField:null!==(n=this.longitudeField)&&void 0!==n?n:void 0,spatialReference:null!==(o=this.spatialReference)&&void 0!==o?o:void 0,timeInfo:null!==(i=this.timeInfo)&&void 0!==i?i:void 0,url:this.url},customParameters:null!==(s=this.customParameters)&&void 0!==s?s:void 0}),this._set("source",u),e.next=4,u.load({signal:t});case 4:return this.read({locationInfo:u.locationInfo,columnDelimiter:u.delimiter},{origin:"service",url:this.parsedUrl}),e.abrupt("return",u);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"queryFeatures",value:function(e,t){var r=this;return this.load().then((function(){return r.source.queryFeatures(I.a.from(e)||r.createQuery())})).then((function(e){if(null!==e&&void 0!==e&&e.features){var t,a=Object(n.a)(e.features);try{for(a.s();!(t=a.n()).done;){var o=t.value;o.layer=o.sourceLayer=r}}catch(i){a.e(i)}finally{a.f()}}return e}))}},{key:"queryObjectIds",value:function(e,t){var r=this;return this.load().then((function(){return r.source.queryObjectIds(I.a.from(e)||r.createQuery())}))}},{key:"queryFeatureCount",value:function(e,t){var r=this;return this.load().then((function(){return r.source.queryFeatureCount(I.a.from(e)||r.createQuery())}))}},{key:"queryExtent",value:function(e,t){var r=this;return this.load().then((function(){return r.source.queryExtent(I.a.from(e)||r.createQuery())}))}},{key:"read",value:function(e,t){Object(c.a)(Object(l.a)(r.prototype),"read",this).call(this,e,t),t&&"service"===t.origin&&this.revert(["latitudeField","longitudeField"],"service")}},{key:"write",value:function(e,t){return Object(c.a)(Object(l.a)(r.prototype),"write",this).call(this,e,Object(i.a)(Object(i.a)({},t),{},{writeLayerSchema:!0}))}},{key:"clone",value:function(){throw new y.a("csv-layer:clone","CSVLayer (title: ".concat(this.title,", id: ").concat(this.id,") cannot be cloned"))}},{key:"save",value:function(){var e=Object(o.a)(Object(a.a)().mark((function e(t){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",N(this,"csv-layer:save"));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"saveAs",value:function(){var e=Object(o.a)(Object(a.a)().mark((function e(t,r){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",N(this,"csv-layer:save-as"));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"hasDataChanged",value:function(){var e=Object(o.a)(Object(a.a)().mark((function e(){var t,r,n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.source.refresh(this.customParameters);case 3:return t=e.sent,r=t.dataChanged,n=t.updates,e.abrupt("return",(null!=n&&this.read(n,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),r));case 9:e.prev=9,e.t0=e.catch(0);case 11:return e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"_verifyFields",value:function(){}},{key:"_verifySource",value:function(){}},{key:"_hasMemorySource",value:function(){return!1}}]),r}(g.default);Object(b.a)([Object(h.b)({readOnly:!0,json:{read:!1,write:!1}})],R.prototype,"capabilities",void 0),Object(b.a)([Object(h.b)({type:[","," ",";","|","\t"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],R.prototype,"delimiter",void 0),Object(b.a)([Object(h.b)({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],R.prototype,"editingEnabled",void 0),Object(b.a)([Object(h.b)({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],R.prototype,"fields",void 0),Object(b.a)([Object(h.b)({type:Boolean,readOnly:!0})],R.prototype,"isTable",null),Object(b.a)([Object(j.a)("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],R.prototype,"readWebMapLabelsVisible",null),Object(b.a)([Object(h.b)({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],R.prototype,"latitudeField",void 0),Object(b.a)([Object(h.b)({type:["show","hide"]})],R.prototype,"listMode",void 0),Object(b.a)([Object(h.b)({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],R.prototype,"locationType",void 0),Object(b.a)([Object(h.b)({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],R.prototype,"longitudeField",void 0),Object(b.a)([Object(h.b)({type:["CSV"]})],R.prototype,"operationalLayerType",void 0),Object(b.a)([Object(h.b)()],R.prototype,"outFields",void 0),Object(b.a)([Object(h.b)({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],R.prototype,"path",void 0),Object(b.a)([Object(h.b)({json:{read:!1},cast:null,type:F,readOnly:!0})],R.prototype,"source",void 0),Object(b.a)([Object(h.b)({json:{read:!1},value:"csv",readOnly:!0})],R.prototype,"type",void 0),Object(b.a)([Object(h.b)({json:{read:q.g,write:{isRequired:!0,ignoreOrigin:!0,writer:q.i}}})],R.prototype,"url",null);var _=R=Object(b.a)([Object(m.a)("esri.layers.CSVLayer")],R)},449:function(e,t,r){"use strict";r.d(t,"a",(function(){return y})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return b})),r.d(t,"d",(function(){return c}));var n=r(34),a=r(1),o=r(93),i=r(116),s=r(488),u=r(382);function c(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?u.a:"esriGeometryPolyline"===e?u.c:u.b}}}var l=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/,p=1;function d(e,t){if(Object(o.a)("esri-csp-restrictions"))return function(){return Object(a.a)(Object(n.a)({},t,null),e)};try{var r="this.".concat(t," = null;");for(var i in e)r+="this".concat(l.test(i)?".".concat(i):'["'.concat(i,'"]')," = ").concat(JSON.stringify(e[i]),";");var s=new Function("\n      return class AttributesClass$".concat(p++," {\n        constructor() {\n          ").concat(r,";\n        }\n      }\n    "))();return function(){return new s}}catch(u){return function(){return Object(a.a)(Object(n.a)({},t,null),e)}}}function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:Object(i.a)(e)}}]}function y(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:s.a,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1}}}},488:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}}}]);
//# sourceMappingURL=235.eaf367fd.chunk.js.map