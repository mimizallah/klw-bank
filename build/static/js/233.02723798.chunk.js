(this["webpackJsonpklw-bank"]=this["webpackJsonpklw-bank"]||[]).push([[233],{1780:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return xe}));var n=r(92),a=r(4),i=r(12),o=r(1),s=r(89),c=r(88),l=r(107),u=r(106),p=r(90),d=r(91),y=r(94),f=r(172),b=r(258),v=(r(347),r(432),r(438),r(439),r(437),r(301),r(397),r(350),r(416),r(467)),h=r(129),j=r(165),O=r(145),g=r(101),m=r(102),w=r(281),I=r(110),k=r(127),x=r(128),S=r(97),L=(r(96),r(98),r(93),r(338)),F=r(136),_=r(95),E=r(292),A=r(259),T=r(541),P=r(485),R=r(783),D=r(311),N=r(326),U=r(302),q=r(1105),G=r(324),Q=r(1734),C=r(244),J=r(722),V=r(1150),z=r(1736),K=r(544),M=r(227),W=r(195),B=r(1222),Z=r(497),H=r(383),X=r(986),Y=r(105),$=function(e){Object(p.a)(r,e);var t=Object(d.a)(r);function r(){var e;return Object(s.a)(this,r),(e=t.apply(this,arguments)).name=null,e.field=null,e.currentRangeExtent=null,e.fullRangeExtent=null,e.type="rangeInfo",e}return Object(c.a)(r)}(Y.a);Object(y.a)([Object(S.b)({type:String,json:{read:!0,write:!0}})],$.prototype,"name",void 0),Object(y.a)([Object(S.b)({type:String,json:{read:!0,write:!0}})],$.prototype,"field",void 0),Object(y.a)([Object(S.b)({type:[Number],json:{read:!0,write:!0}})],$.prototype,"currentRangeExtent",void 0),Object(y.a)([Object(S.b)({type:[Number],json:{read:!0,write:!0}})],$.prototype,"fullRangeExtent",void 0),Object(y.a)([Object(S.b)({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],$.prototype,"type",void 0),$=Object(y.a)([Object(_.a)("esri.layers.support.RangeInfo")],$);var ee,te,re=r(322),ne=r(116),ae=r(700),ie=r(390),oe=r(164),se=r(206),ce=ee=function(e){Object(p.a)(r,e);var t=Object(d.a)(r);function r(e){return Object(s.a)(this,r),t.call(this,e)}return Object(c.a)(r,[{key:"clone",value:function(){return new ee(this.items.map((function(e){return e.clone()})))}},{key:"write",value:function(e,t){return this.toJSON(t)}},{key:"toJSON",value:function(e){var t,r=this,n=null===e||void 0===e||null===(t=e.layer)||void 0===t?void 0:t.spatialReference;return n?this.toArray().map((function(t){if(!n.equals(t.spatialReference)){if(!Object(se.canProjectWithoutEngine)(t.spatialReference,n))return e&&e.messages&&e.messages.push(new ie.a("scenefilter:unsupported","Scene filters with incompatible spatial references are not supported",{modification:r,spatialReference:e.layer.spatialReference,context:e})),null;var a=new oe.a;Object(se.projectPolygon)(t,a,n),t=a}var i=t.toJSON(e);return delete i.spatialReference,i})).filter((function(e){return null!=e})):(null!==e&&void 0!==e&&e.messages&&e.messages.push(new ie.a("scenefilter:unsupported","Writing Scene filters without context layer is not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),this.toArray().map((function(t){return t.toJSON(e)})))}}],[{key:"fromJSON",value:function(e,t){var r=new ee;return e.forEach((function(e){return r.add(oe.a.fromJSON(e,t))})),r}}]),r}(Object(Y.b)(O.a.ofType(oe.a))),le=ce=ee=Object(y.a)([Object(_.a)("esri.layers.support.PolygonCollection")],ce),ue=r(215),pe=te=function(e){Object(p.a)(r,e);var t=Object(d.a)(r);function r(e){var n;return Object(s.a)(this,r),(n=t.call(this,e)).spatialRelationship="disjoint",n.geometries=new le,n._geometriesSource=null,n._handles=new re.a,n}return Object(c.a)(r,[{key:"initialize",value:function(){var e=this;this._handles.add(Object(k.b)((function(){return e.geometries}),"after-changes",(function(){return e.geometries=e.geometries}),k.c))}},{key:"destroy",value:function(){this._handles.destroy()}},{key:"readGeometries",value:function(e,t,r){Array.isArray(e)?this.geometries=le.fromJSON(e,r):this._geometriesSource={url:Object(ue.d)(e,r),context:r}}},{key:"loadGeometries",value:function(){var e=Object(i.a)(Object(a.a)().mark((function e(t,r){var n,i,s,c,l,u;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=this._geometriesSource){e.next=2;break}return e.abrupt("return");case 2:return n=this._geometriesSource,i=n.url,s=n.context,e.next=7,Object(h.default)(i,{responseType:"json",signal:null===r||void 0===r?void 0:r.signal});case 7:c=e.sent,l=t.toJSON(),u=c.data.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{spatialReference:l})})),this.geometries=le.fromJSON(u,s),this._geometriesSource=null;case 11:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"clone",value:function(){var e=new te({geometries:Object(ne.a)(this.geometries),spatialRelationship:this.spatialRelationship});return e._geometriesSource=this._geometriesSource,e}}]),r}(Y.a);Object(y.a)([Object(S.b)({type:["disjoint","contains"],nonNullable:!0,json:{write:!0}})],pe.prototype,"spatialRelationship",void 0),Object(y.a)([Object(S.b)({type:le,nonNullable:!0,json:{write:!0}}),Object(ae.a)({origins:["web-scene","portal-item"],type:"resource",prefix:"geometries"})],pe.prototype,"geometries",void 0),Object(y.a)([Object(F.a)(["web-scene","portal-item"],"geometries")],pe.prototype,"readGeometries",null);var de=pe=te=Object(y.a)([Object(_.a)("esri.layers.support.SceneFilter")],pe),ye=r(724),fe=r(210),be=r(1146),ve=r(486),he=r(1772),je=r(459),Oe=r(561),ge=["3DObject","Point"],me=Object(K.a)(),we=function(e){Object(p.a)(y,e);var t=Object(d.a)(y);function y(){var e;Object(s.a)(this,y);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).featureReduction=null,e.rangeInfos=null,e.operationalLayerType="ArcGISSceneServiceLayer",e.type="scene",e.fields=null,e.floorInfo=null,e.outFields=null,e.nodePages=null,e.materialDefinitions=null,e.textureSetDefinitions=null,e.geometryDefinitions=null,e.serviceUpdateTimeStamp=null,e.excludeObjectIds=new O.a,e.definitionExpression=null,e.filter=null,e.path=null,e.labelsVisible=!0,e.labelingInfo=null,e.legendEnabled=!0,e.priority=null,e.semantic=null,e.cachedDrawingInfo={color:!1},e.popupEnabled=!0,e.popupTemplate=null,e.objectIdField=null,e.globalIdField=null,e._fieldUsageInfo={},e.screenSizePerspectiveEnabled=!0,e}return Object(c.a)(y,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?Object(o.a)({url:e},t):e}},{key:"destroy",value:function(){this._set("renderer",null)}},{key:"getField",value:function(e){return this.fieldsIndex.get(e)}},{key:"getFieldDomain",value:function(e,t){var r,n,a,i=null===(r=this.getFeatureType(null===t||void 0===t?void 0:t.feature))||void 0===r||null===(r=r.domains)||void 0===r?void 0:r[e];return i&&"inherited"!==i.type?i:null!==(n=null===(a=this.getField(e))||void 0===a?void 0:a.domain)&&void 0!==n?n:null}},{key:"getFeatureType",value:function(e){return e&&this.associatedLayer?this.associatedLayer.getFeatureType(e):null}},{key:"types",get:function(){var e,t;return null!==(e=null===(t=this.associatedLayer)||void 0===t?void 0:t.types)&&void 0!==e?e:[]}},{key:"typeIdField",get:function(){var e,t;return null!==(e=null===(t=this.associatedLayer)||void 0===t?void 0:t.typeIdField)&&void 0!==e?e:null}},{key:"templates",get:function(){var e,t;return null!==(e=null===(t=this.associatedLayer)||void 0===t?void 0:t.templates)&&void 0!==e?e:null}},{key:"formTemplate",get:function(){var e,t;return null!==(e=null===(t=this.associatedLayer)||void 0===t?void 0:t.formTemplate)&&void 0!==e?e:null}},{key:"fieldsIndex",get:function(){return new M.a(this.fields)}},{key:"readNodePages",value:function(e,t,r){return"Point"===t.layerType&&(e=t.pointNodePages),null==e||"object"!=typeof e?null:B.c.fromJSON(e,r)}},{key:"elevationInfo",set:function(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}},{key:"geometryType",get:function(){return ke[this.profile]||"mesh"}},{key:"renderer",set:function(e){Object(W.m)(e,this.fieldsIndex),this._set("renderer",e)}},{key:"readCachedDrawingInfo",value:function(e){return null!=e&&"object"==typeof e||(e={}),null==e.color&&(e.color=!1),e}},{key:"capabilities",get:function(){var e,t,r,n=null!==(e=null===(t=this.associatedLayer)||void 0===t?void 0:t.capabilities)&&void 0!==e?e:Q.a,a=n.query,i=n.editing,o=i.supportsGlobalId,s=i.supportsRollbackOnFailure,c=i.supportsUploadWithItemId,l=i.supportsGeometryUpdate,u=i.supportsReturnServiceEditsInSourceSpatialReference,p=n.data,d=p.supportsZ,y=p.supportsM,f=p.isVersioned,b=p.supportsAttachment,v=n.operations,h=v.supportsEditing,j=v.supportsAdd,O=v.supportsUpdate,g=v.supportsDelete,m=v.supportsQuery,w=v.supportsQueryAttachments,I=v.supportsAsyncConvert3D,k=n.operations.supportsChangeTracking,x=!(null===(r=this.associatedLayer)||void 0===r||!r.infoFor3D)&&Object(be.b)();return{query:a,editing:{supportsGlobalId:o,supportsReturnServiceEditsInSourceSpatialReference:u,supportsRollbackOnFailure:s,supportsGeometryUpdate:x&&l,supportsUploadWithItemId:c},data:{supportsAttachment:b,supportsZ:d,supportsM:y,isVersioned:f},operations:{supportsQuery:m,supportsQueryAttachments:w,supportsEditing:h&&k,supportsAdd:x&&j&&k,supportsDelete:x&&g&&k,supportsUpdate:O&&k,supportsAsyncConvert3D:I}}}},{key:"editingEnabled",get:function(){return this._isOverridden("editingEnabled")?this._get("editingEnabled"):this.userHasEditingPrivileges},set:function(e){this._overrideIfSome("editingEnabled",e)}},{key:"infoFor3D",get:function(){var e,t;return null!==(e=null===(t=this.associatedLayer)||void 0===t?void 0:t.infoFor3D)&&void 0!==e?e:null}},{key:"defaultPopupTemplate",get:function(){return this.associatedLayer||this.attributeStorageInfo?this.createPopupTemplate():null}},{key:"readObjectIdField",value:function(e,t){return!e&&t.fields&&t.fields.some((function(t){return"esriFieldTypeOID"===t.type&&(e=t.name),!!e})),e||void 0}},{key:"readGlobalIdField",value:function(e,t){return!e&&t.fields&&t.fields.some((function(t){return"esriFieldTypeGlobalID"===t.type&&(e=t.name),!!e})),e||void 0}},{key:"displayField",get:function(){var e,t;return null!==(e=null===(t=this.associatedLayer)||void 0===t?void 0:t.displayField)&&void 0!==e?e:null}},{key:"readProfile",value:function(e,t){var r=t.store.profile;return null!=r&&Ie[r]?Ie[r]:(m.a.getLogger(this).error("Unknown or missing profile",{profile:r,layer:this}),"mesh-pyramids")}},{key:"load",value:function(e){var t=this,r=null!=e?e.signal:null,n=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(I.m).then((function(){return t._fetchService(r)})).then((function(){return Promise.all([t._fetchIndexAndUpdateExtent(t.nodePages,r),t._setAssociatedFeatureLayer(r),t._loadFilterGeometries()])})).then((function(){return t._validateElevationInfo()})).then((function(){return t._applyAssociatedLayerOverrides()})).then((function(){return t._populateFieldUsageInfo()})).then((function(){return Object(ye.a)(t,{origin:"service"},r)})).then((function(){return Object(W.m)(t.renderer,t.fieldsIndex)})).then((function(){return t.finishLoadEditablePortalLayer(e)}));return this.addResolvingPromise(n),Promise.resolve(this)}},{key:"beforeSave",value:function(){var e=Object(i.a)(Object(a.a)().mark((function e(){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=null!=this.filter,!e.t0){e.next=5;break}return this.filter=this.filter.clone(),e.next=5,this.load();case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_loadFilterGeometries",value:function(){var e=Object(i.a)(Object(a.a)().mark((function e(){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.filter){e.next=9;break}return e.prev=1,e.next=4,this.filter.loadGeometries(this.spatialReference);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),m.a.getLogger(this).error("#_loadFilterGeometries()",this,"Failed to load filter geometries. Geometry filter will not be applied for this layer.",{error:e.t0}),this.filter=null;case 9:case"end":return e.stop()}}),e,this,[[1,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"createQuery",value:function(){var e=new fe.a;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e.outFields=["*"],e}},{key:"queryExtent",value:function(e,t){var r=this;return this._getAssociatedLayerForQuery().then((function(n){return n.queryExtent(e||r.createQuery(),t)}))}},{key:"queryFeatureCount",value:function(e,t){var r=this;return this._getAssociatedLayerForQuery().then((function(n){return n.queryFeatureCount(e||r.createQuery(),t)}))}},{key:"queryFeatures",value:function(e,t){var r=this;return this._getAssociatedLayerForQuery().then((function(n){return n.queryFeatures(e||r.createQuery(),t)})).then((function(e){if(null!==e&&void 0!==e&&e.features){var t,a=Object(n.a)(e.features);try{for(a.s();!(t=a.n()).done;){var i=t.value;i.layer=r,i.sourceLayer=r}}catch(o){a.e(o)}finally{a.f()}}return e}))}},{key:"queryCachedAttributes",value:function(){var e=Object(i.a)(Object(a.a)().mark((function e(t,r){var n,i;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=W.B,e.t1=this.fieldsIndex,e.next=4,Object(je.b)(this,Object(je.a)(this));case 4:return e.t2=e.sent,i=(0,e.t0)(e.t1,e.t2),e.abrupt("return",Object(he.a)(this.parsedUrl.path,null!==(n=this.attributeStorageInfo)&&void 0!==n?n:[],t,r,i));case 7:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryCachedFeature",value:function(){var e=Object(i.a)(Object(a.a)().mark((function e(t,r){var n,i;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.queryCachedAttributes(t,[r]);case 2:if((n=e.sent)&&0!==n.length){e.next=5;break}throw new g.a("scenelayer:feature-not-in-cached-data","Feature not found in cached data");case 5:return i=new f.a,e.abrupt("return",(i.attributes=n[0],i.layer=this,i.sourceLayer=this,i));case 7:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryObjectIds",value:function(e,t){var r=this;return this._getAssociatedLayerForQuery().then((function(n){return n.queryObjectIds(e||r.createQuery(),t)}))}},{key:"queryAttachments",value:function(e,t){return this._getAssociatedLayerForQuery().then((function(r){return r.queryAttachments(e,t)}))}},{key:"getFieldUsageInfo",value:function(e){var t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(m.a.getLogger(this).error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}},{key:"createPopupTemplate",value:function(e){return Object(ve.a)(this,e)}},{key:"_getAssociatedLayerForQuery",value:function(){var e=this.associatedLayer;return null!==e&&void 0!==e&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}},{key:"_loadAssociatedLayerForQuery",value:function(){var e=Object(i.a)(Object(a.a)().mark((function e(){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:if(this.associatedLayer){e.next=4;break}throw new g.a("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});case 4:return e.prev=4,e.next=7,this.associatedLayer.load();case 7:e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(4),new g.a("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e.t0});case 12:return e.abrupt("return",this.associatedLayer);case 13:case"end":return e.stop()}}),e,this,[[4,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"hasCachedStatistics",value:function(e){return null!=this.statisticsInfo&&this.statisticsInfo.some((function(t){return t.name===e}))}},{key:"queryCachedStatistics",value:function(){var e=Object(i.a)(Object(a.a)().mark((function e(t,r){var i,o,s,c,l;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load(r);case 2:if(this.statisticsInfo){e.next=4;break}throw new g.a("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");case 4:if(i=this.fieldsIndex.get(t)){e.next=7;break}throw new g.a("scenelayer:field-unexisting","Field '".concat(t,"' does not exist on the layer"));case 7:o=Object(n.a)(this.statisticsInfo),e.prev=8,o.s();case 10:if((s=o.n()).done){e.next=17;break}if((c=s.value).name!==i.name){e.next=15;break}return l=Object(x.D)(this.parsedUrl.path,c.href),e.abrupt("return",Object(h.default)(l,{query:{f:"json",token:this.apiKey},responseType:"json",signal:r?r.signal:null}).then((function(e){return e.data})));case 15:e.next=10;break;case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(8),o.e(e.t0);case 22:return e.prev=22,o.f(),e.finish(22);case 25:throw new g.a("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available");case 26:case"end":return e.stop()}}),e,this,[[8,19,22,25]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"saveAs",value:function(){var e=Object(i.a)(Object(a.a)().mark((function e(t,r){var n=this;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._debouncedSaveOperations(q.a.SAVE_AS,Object(o.a)(Object(o.a)({},r),{},{getTypeKeywords:function(){return n._getTypeKeywords()},portalItemLayerType:"scene"}),t));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"save",value:function(){var e=Object(i.a)(Object(a.a)().mark((function e(){var t,r=this;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={getTypeKeywords:function(){return r._getTypeKeywords()},portalItemLayerType:"scene"},e.abrupt("return",this._debouncedSaveOperations(q.a.SAVE,t));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"applyEdits",value:function(){var e=Object(i.a)(Object(a.a)().mark((function e(t,n){var i,o;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.e(25).then(r.bind(null,912));case 2:return i=e.sent,o=i.applyEdits,e.next=6,this.load();case 6:if(this.associatedLayer){e.next=8;break}throw new g.a("".concat(this.type,"-layer:not-editable"),"Service is not editable");case 8:return e.next=10,this.associatedLayer.load();case 10:return e.abrupt("return",o(this,this.associatedLayer.source,t,n));case 11:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"uploadAssets",value:function(){var e=Object(i.a)(Object(a.a)().mark((function e(t,r){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:if(null!=this.associatedLayer){e.next=4;break}throw new g.a("".concat(this.type,"-layer:not-editable"),"Service is not editable");case 4:return e.next=6,this.associatedLayer.load();case 6:return e.abrupt("return",this.associatedLayer.uploadAssets(t,r));case 7:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"on",value:function(e,t){return Object(l.a)(Object(u.a)(y.prototype),"on",this).call(this,e,t)}},{key:"validateLayer",value:function(e){if(e.layerType&&!ge.includes(e.layerType))throw new g.a("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new g.a("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});if(this.version.major>2)throw new g.a("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});!function(e,t){var r=!1,n=!1;if(null==e)r=!0,n=!0;else{var a=t&&t.isGeographic;switch(e){case"east-north-up":case"earth-centered":r=!0,n=a;break;case"vertex-reference-frame":r=!0,n=!a;break;default:r=!1}}if(!r)throw new g.a("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!n)throw new g.a("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}(this.normalReferenceFrame,this.spatialReference)}},{key:"_getTypeKeywords",value:function(){var e=[];if("points"===this.profile)e.push("Point");else{if("mesh-pyramids"!==this.profile)throw new g.a("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}},{key:"_populateFieldUsageInfo",value:function(){var e=this;if(this._fieldUsageInfo={},this.fields){var t,r=Object(n.a)(this.fields);try{var a=function(){var r,n=t.value,a=!(!e.attributeStorageInfo||!e.attributeStorageInfo.some((function(e){return e.name===n.name}))),i=!(null===(r=e.associatedLayer)||void 0===r||null===(r=r.fields)||void 0===r||!r.some((function(e){return e&&n.name===e.name}))),o={supportsLabelingInfo:a,supportsRenderer:a,supportsPopupTemplate:a||i,supportsLayerQuery:i};e._fieldUsageInfo[n.name]=o};for(r.s();!(t=r.n()).done;)a()}catch(i){r.e(i)}finally{r.f()}}}},{key:"_applyAssociatedLayerOverrides",value:function(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides(),this._applyAssociatedLayerExtentOverride()}},{key:"_applyAssociatedLayerFieldsOverrides",value:function(){var e;if(null!==(e=this.associatedLayer)&&void 0!==e&&e.fields){var t,r=null,a=Object(n.a)(this.associatedLayer.fields);try{for(a.s();!(t=a.n()).done;){var i=t.value,o=this.getField(i.name);o?(!o.domain&&i.domain&&(o.domain=i.domain.clone()),o.editable=i.editable,o.nullable=i.nullable,o.length=i.length):(r||(r=this.fields?this.fields.slice():[]),r.push(i.clone()))}}catch(s){a.e(s)}finally{a.f()}r&&this._set("fields",r)}}},{key:"_applyAssociatedLayerPopupOverrides",value:function(){if(this.associatedLayer)for(var e=["popupTemplate","popupEnabled"],t=Object(L.a)(this),r=0;r<e.length;r++){var n=e[r],a=this.originIdOf(n),i=this.associatedLayer.originIdOf(n);a<i&&(i===E.a.SERVICE||i===E.a.PORTAL_ITEM)&&t.setAtOrigin(n,this.associatedLayer[n],i)}}},{key:"_applyAssociatedLayerExtentOverride",value:function(){var e,t,r,n,a,i,o=null===(e=this.associatedLayer)||void 0===e||null===(e=e.editingInfo)||void 0===e?void 0:e.lastEditDate,s=null===(t=this.associatedLayer)||void 0===t?void 0:t.serverGens,c=null===(r=this.associatedLayer)||void 0===r?void 0:r.getAtOrigin("fullExtent","service");Object(be.b)()&&null!=(null===(n=this.associatedLayer)||void 0===n?void 0:n.infoFor3D)&&c&&Object(G.c)(null===(a=this.associatedLayer)||void 0===a?void 0:a.url)&&o&&(null===(i=this.serviceUpdateTimeStamp)||void 0===i?void 0:i.lastUpdate)!==o.getTime()&&(this.serviceUpdateTimeStamp||(null===s||void 0===s?void 0:s.minServerGen)!==(null===s||void 0===s?void 0:s.serverGen))&&Object(L.a)(this).setAtOrigin("fullExtent",c.clone(),E.a.SERVICE)}},{key:"_setAssociatedFeatureLayer",value:function(){var e=Object(i.a)(Object(a.a)().mark((function e(t){var r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(["mesh-pyramids","points"].includes(this.profile)){e.next=2;break}return e.abrupt("return");case 2:return r=new z.a(this.parsedUrl,this.portalItem,this.apiKey,t),e.prev=3,e.next=6,r.fetch();case 6:this.associatedLayer=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),Object(I.h)(e.t0)||this._logWarningOnPopupEnabled();case 12:case"end":return e.stop()}}),e,this,[[3,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"_logWarningOnPopupEnabled",value:function(){var e=Object(i.a)(Object(a.a)().mark((function e(){var t,r=this;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.g)((function(){return r.popupEnabled&&null!=r.popupTemplate}));case 2:t="this SceneLayer: ".concat(this.title),null==this.attributeStorageInfo?m.a.getLogger(this).warn("Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ".concat(t)):m.a.getLogger(this).info("Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ".concat(t));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_validateElevationInfo",value:function(){var e=this.elevationInfo;e&&("mesh-pyramids"===this.profile&&"relative-to-scene"===e.mode&&m.a.getLogger(this).warn(".elevationInfo=","Mesh scene layers don't support relative-to-scene elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&m.a.getLogger(this).warn(".elevationInfo=","Scene layers do not support featureExpressionInfo"))}}]),y}(Object(R.a)(Object(q.b)(Object(P.a)(Object(D.a)(Object(N.a)(Object(U.a)(Object(w.a)(Object(T.a)(Object(j.b)(A.a))))))))));Object(y.a)([Object(S.b)({types:{key:"type",base:J.a,typeMap:{selection:V.a}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],we.prototype,"featureReduction",void 0),Object(y.a)([Object(S.b)({type:[$],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],we.prototype,"rangeInfos",void 0),Object(y.a)([Object(S.b)({json:{read:!1}})],we.prototype,"associatedLayer",void 0),Object(y.a)([Object(S.b)({type:["show","hide"]})],we.prototype,"listMode",void 0),Object(y.a)([Object(S.b)({type:["ArcGISSceneServiceLayer"]})],we.prototype,"operationalLayerType",void 0),Object(y.a)([Object(S.b)({json:{read:!1},readOnly:!0})],we.prototype,"type",void 0),Object(y.a)([Object(S.b)(Object(o.a)(Object(o.a)({},me.fields),{},{readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}}))],we.prototype,"fields",void 0),Object(y.a)([Object(S.b)()],we.prototype,"types",null),Object(y.a)([Object(S.b)()],we.prototype,"typeIdField",null),Object(y.a)([Object(S.b)()],we.prototype,"templates",null),Object(y.a)([Object(S.b)()],we.prototype,"formTemplate",null),Object(y.a)([Object(S.b)({readOnly:!0})],we.prototype,"fieldsIndex",null),Object(y.a)([Object(S.b)({type:X.a,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],we.prototype,"floorInfo",void 0),Object(y.a)([Object(S.b)(me.outFields)],we.prototype,"outFields",void 0),Object(y.a)([Object(S.b)({type:B.c,readOnly:!0,json:{read:!1}})],we.prototype,"nodePages",void 0),Object(y.a)([Object(F.a)("service","nodePages",["nodePages","pointNodePages"])],we.prototype,"readNodePages",null),Object(y.a)([Object(S.b)({type:[B.b],readOnly:!0})],we.prototype,"materialDefinitions",void 0),Object(y.a)([Object(S.b)({type:[B.d],readOnly:!0})],we.prototype,"textureSetDefinitions",void 0),Object(y.a)([Object(S.b)({type:[B.a],readOnly:!0})],we.prototype,"geometryDefinitions",void 0),Object(y.a)([Object(S.b)({readOnly:!0})],we.prototype,"serviceUpdateTimeStamp",void 0),Object(y.a)([Object(S.b)({readOnly:!0})],we.prototype,"attributeStorageInfo",void 0),Object(y.a)([Object(S.b)({readOnly:!0})],we.prototype,"statisticsInfo",void 0),Object(y.a)([Object(S.b)({type:O.a.ofType(Number),nonNullable:!0,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.excludeObjectIds",write:{enabled:!0}}})],we.prototype,"excludeObjectIds",void 0),Object(y.a)([Object(S.b)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],we.prototype,"definitionExpression",void 0),Object(y.a)([Object(S.b)({type:de,json:{name:"layerDefinition.polygonFilter",write:{enabled:!0,allowNull:!0},origins:{service:{read:!1,write:!1}}}})],we.prototype,"filter",void 0),Object(y.a)([Object(S.b)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],we.prototype,"path",void 0),Object(y.a)([Object(S.b)(C.b)],we.prototype,"elevationInfo",null),Object(y.a)([Object(S.b)({type:String})],we.prototype,"geometryType",null),Object(y.a)([Object(S.b)(C.d)],we.prototype,"labelsVisible",void 0),Object(y.a)([Object(S.b)({type:[Z.a],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:H.a},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:H.a},write:!0}})],we.prototype,"labelingInfo",void 0),Object(y.a)([Object(S.b)(C.e)],we.prototype,"legendEnabled",void 0),Object(y.a)([Object(S.b)({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader:function(e,t){var r;if("number"==typeof e&&e>=0&&e<=1)return e;var n=null===(r=t.layerDefinition)||void 0===r||null===(r=r.drawingInfo)||void 0===r?void 0:r.transparency;return void 0!==n?Object(Oe.b)(n):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],we.prototype,"opacity",void 0),Object(y.a)([Object(S.b)({type:["Low","High"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],we.prototype,"priority",void 0),Object(y.a)([Object(S.b)({type:["Labels"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],we.prototype,"semantic",void 0),Object(y.a)([Object(S.b)({types:v.b,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],we.prototype,"renderer",null),Object(y.a)([Object(S.b)({json:{read:!1}})],we.prototype,"cachedDrawingInfo",void 0),Object(y.a)([Object(F.a)("service","cachedDrawingInfo")],we.prototype,"readCachedDrawingInfo",null),Object(y.a)([Object(S.b)({readOnly:!0,json:{read:!1}})],we.prototype,"capabilities",null),Object(y.a)([Object(S.b)({type:Boolean,json:{read:!1}})],we.prototype,"editingEnabled",null),Object(y.a)([Object(S.b)({readOnly:!0,json:{write:!1,read:!1}})],we.prototype,"infoFor3D",null),Object(y.a)([Object(S.b)(C.k)],we.prototype,"popupEnabled",void 0),Object(y.a)([Object(S.b)({type:b.a,json:{name:"popupInfo",write:!0}})],we.prototype,"popupTemplate",void 0),Object(y.a)([Object(S.b)({readOnly:!0,json:{read:!1}})],we.prototype,"defaultPopupTemplate",null),Object(y.a)([Object(S.b)({type:String,json:{read:!1}})],we.prototype,"objectIdField",void 0),Object(y.a)([Object(F.a)("service","objectIdField",["objectIdField","fields"])],we.prototype,"readObjectIdField",null),Object(y.a)([Object(S.b)({type:String,json:{read:!1}})],we.prototype,"globalIdField",void 0),Object(y.a)([Object(F.a)("service","globalIdField",["globalIdField","fields"])],we.prototype,"readGlobalIdField",null),Object(y.a)([Object(S.b)({readOnly:!0,type:String,json:{read:!1}})],we.prototype,"displayField",null),Object(y.a)([Object(S.b)({type:String,json:{read:!1}})],we.prototype,"profile",void 0),Object(y.a)([Object(F.a)("service","profile",["store.profile"])],we.prototype,"readProfile",null),Object(y.a)([Object(S.b)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],we.prototype,"normalReferenceFrame",void 0),Object(y.a)([Object(S.b)(C.n)],we.prototype,"screenSizePerspectiveEnabled",void 0),we=Object(y.a)([Object(_.a)("esri.layers.SceneLayer")],we);var Ie={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},ke={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"},xe=we},700:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var n=r(4),a=r(12),i=r(1),o=r(92),s=r(638),c=r(128),l=r(564),u=r(500),p=r(292),d=r(97),y=r(701),f=r(215);function b(e){var t,r=null!==(t=null===e||void 0===e?void 0:e.origins)&&void 0!==t?t:[void 0];return function(t,n){var a,l=function(e,t,r){var n;if("resource"===(null===e||void 0===e?void 0:e.type))return function(e,t,r){var n=Object(u.b)(t,r);return{type:String,read:function(e,t,r){var a=Object(f.g)(e,t,r);return n.type===String?a:"function"==typeof n.type?new n.type({url:a}):void 0},write:{writer:function(t,a,o,l){if(!l||!l.resources)return"string"==typeof t?void(a[o]=Object(f.h)(t,l)):void(a[o]=t.write({},l));var u=function(e){return null==e?null:"string"==typeof e?e:e.url}(t),d=Object(f.h)(u,Object(i.a)(Object(i.a)({},l),{},{verifyItemRelativeUrls:l&&l.verifyItemRelativeUrls?{writtenUrls:l.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0}),f.a.NO),b=n.type!==String&&(!Object(s.a)(this)||l&&l.origin&&this.originIdOf(r)>Object(p.e)(l.origin)),O={object:this,propertyName:r,value:t,targetUrl:d,dest:a,targetPropertyName:o,context:l,params:e};l&&l.portalItem&&d&&!Object(c.w)(d)?b?function(e){var t,r=e.context,n=e.targetUrl,a=e.params,o=e.value,s=e.dest,l=e.targetPropertyName;if(!r.portalItem)return;var u=r.portalItem.resourceFromPath(n),p=j(o,n,r),d=Object(y.a)(p),f=Object(c.q)(u.path),b=null!==(t=null===a||void 0===a?void 0:a.compress)&&void 0!==t&&t;d===f?(r.resources&&h(Object(i.a)(Object(i.a)({},e),{},{resource:u,content:p,compress:b,updates:r.resources.toUpdate})),s[l]=n):v(e)}(O):function(e){var t=e.context,r=e.targetUrl,n=e.dest,a=e.targetPropertyName;t.portalItem&&t.resources&&(t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(r),compress:!1}),n[a]=r)}(O):l&&l.portalItem&&(null==d||null!=Object(f.e)(d)||Object(c.x)(d)||b)?v(O):a[o]=d}}}}(e,t,r);switch(null!==(n=null===e||void 0===e?void 0:e.type)&&void 0!==n?n:"other"){case"other":return{read:!0,write:!0};case"url":return{read:f.b.read,write:f.b.write}}}(e,t,n),b=Object(o.a)(r);try{for(b.s();!(a=b.n()).done;){var O=a.value,g=Object(d.c)(t,O,n);for(var m in l)g[m]=l[m]}}catch(w){b.e(w)}finally{b.f()}}}function v(e){var t,r,n,a=e.targetUrl,o=e.params,s=e.value,u=e.context,p=e.dest,d=e.targetPropertyName;if(u.portalItem){var b=Object(f.f)(a),v=null!==(t=null===b||void 0===b?void 0:b.filename)&&void 0!==t?t:Object(l.b)(),g=null!==(r=null===o||void 0===o?void 0:o.prefix)&&void 0!==r?r:null===b||void 0===b?void 0:b.prefix,m=j(s,a,u),w=Object(c.D)(g,v),I="".concat(w,".").concat(Object(y.a)(m)),k=u.portalItem.resourceFromPath(I);Object(c.x)(a)&&u.resources&&u.resources.pendingOperations.push(function(e){return O.apply(this,arguments)}(a).then((function(e){k.path="".concat(w,".").concat(Object(y.a)(e)),p[d]=k.itemRelativeUrl})).catch((function(){})));var x=null!==(n=null===o||void 0===o?void 0:o.compress)&&void 0!==n&&n;u.resources&&h(Object(i.a)(Object(i.a)({},e),{},{resource:k,content:m,compress:x,updates:u.resources.toAdd})),p[d]=k.itemRelativeUrl}}function h(e){var t=e.object,r=e.propertyName,n=e.updates,a=e.resource,i=e.content,o=e.compress;n.push({resource:a,content:i,compress:o,finish:function(e){!function(e,t,r){"string"==typeof e[t]?e[t]=r.url:e[t].url=r.url}(t,r,e)}})}function j(e,t,r){return"string"==typeof e?{url:t}:new Blob([JSON.stringify(e.toJSON(r))],{type:"application/json"})}function O(){return(O=Object(a.a)(Object(n.a)().mark((function e(t){var a,i,o;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(r.bind(null,129));case 2:return a=e.sent.default,e.next=5,a(t,{responseType:"blob"});case 5:return i=e.sent,o=i.data,e.abrupt("return",o);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},701:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(128);function a(e){return i[function(e){return e instanceof Blob?e.type:function(e){var t=Object(n.q)(e);return c[t]||o}(e.url)}(e)]||s}var i={},o="text/plain",s=i[o],c={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(var l in c)i[c[l]]=l}}]);
//# sourceMappingURL=233.02723798.chunk.js.map