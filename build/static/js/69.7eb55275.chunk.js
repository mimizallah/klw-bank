(this["webpackJsonpklw-bank"]=this["webpackJsonpklw-bank"]||[]).push([[69],{1596:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return E}));var n=i(4),r=i(12),a=i(89),s=i(88),o=i(120),l=i(90),c=i(91),b=i(94),u=i(503),y=i(590),d=i(102),v=i(281),h=i(127),p=i(97),f=(i(96),i(98),i(93),i(338)),O=i(95),j=i(137),k=i(259),g=i(330),w=i(311),L=i(326),_=i(302),m=i(1027),M=i(883),V=i(1140),C=i(1141),T=Symbol("WebScene"),x=i(1139),S=function(e){Object(l.a)(i,e);var t=Object(c.a)(i);function i(e){var n;return Object(a.a)(this,i),(n=t.call(this,e)).allLayers=new u.a({getCollections:function(){return[n.layers]},getChildrenFunction:function(e){return"layers"in e?e.layers:null}}),n.allTables=Object(M.a)(Object(o.a)(n)),n.fullExtent=void 0,n.operationalLayerType="GroupLayer",n.spatialReference=void 0,n.type="group",n}return Object(s.a)(i,[{key:"initialize",value:function(){var e=this;this._enforceVisibility(this.visibilityMode,this.visible),this.addHandles([Object(h.e)((function(){for(var t=e.parent;t&&"parent"in t&&t.parent;)t=t.parent;return t&&T in t}),(function(t){var i="prevent-adding-tables";e.removeHandles(i),t&&(e.tables.removeAll(),e.addHandles(Object(h.b)((function(){return e.tables}),"before-add",(function(t){t.preventDefault(),d.a.getLogger(e).errorOnce("tables","Tables are not yet supported in a WebScene so they can't be added.")})),i))}),h.d),Object(h.e)((function(){return e.visible}),this._onVisibilityChange.bind(this),h.c)])}},{key:"destroy",value:function(){this.allLayers.destroy(),this.allTables.destroy()}},{key:"_writeLayers",value:function(e,t,i,n){var r=[];if(!e)return r;e.forEach((function(e){var t=Object(x.a)(e,n.webmap?n.webmap.getLayerJSONFromResourceInfo(e):null,n);null!=t&&t.layerType&&r.push(t)})),t.layers=r}},{key:"portalItem",set:function(e){this._set("portalItem",e)}},{key:"visibilityMode",set:function(e){var t=this._get("visibilityMode")!==e;this._set("visibilityMode",e),t&&this._enforceVisibility(e,this.visible)}},{key:"load",value:function(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"],layerModuleTypeMap:m.a},e)),Promise.resolve(this)}},{key:"loadAll",value:function(){var e=Object(r.a)(Object(n.a)().mark((function e(){var t=this;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(y.a)(this,(function(e){e(t.layers,t.tables)})));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"layerAdded",value:function(e){var t=this;e.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(e):"inherited"===this.visibilityMode&&(e.visible=this.visible),this.hasHandles(e.uid)?console.error("Layer readded to Grouplayer: uid=".concat(e.uid)):this.addHandles(Object(h.e)((function(){return e.visible}),(function(i){return t._onChildVisibilityChange(e,i)}),h.c),e.uid)}},{key:"layerRemoved",value:function(e){this.removeHandles(e.uid),this._enforceVisibility(this.visibilityMode,this.visible)}},{key:"_turnOffOtherLayers",value:function(e){this.layers.forEach((function(t){t!==e&&(t.visible=!1)}))}},{key:"_enforceVisibility",value:function(e,t){if(Object(f.a)(this).initialized){var i=this.layers,n=i.find((function(e){return e.visible}));switch(e){case"exclusive":i.length&&!n&&((n=i.at(0)).visible=!0),this._turnOffOtherLayers(n);break;case"inherited":i.forEach((function(e){e.visible=t}))}}}},{key:"_onVisibilityChange",value:function(e){"inherited"===this.visibilityMode&&this.layers.forEach((function(t){t.visible=e}))}},{key:"_onChildVisibilityChange",value:function(e,t){switch(this.visibilityMode){case"exclusive":t?this._turnOffOtherLayers(e):this._isAnyLayerVisible()||(e.visible=!0);break;case"inherited":e.visible=this.visible}}},{key:"_isAnyLayerVisible",value:function(){return this.layers.some((function(e){return e.visible}))}}]),i}(Object(g.a)(Object(_.a)(Object(w.a)(Object(L.a)(Object(C.a)(Object(V.a)(Object(v.a)(k.a))))))));Object(b.a)([Object(p.b)({readOnly:!0,dependsOn:[]})],S.prototype,"allLayers",void 0),Object(b.a)([Object(p.b)({readOnly:!0})],S.prototype,"allTables",void 0),Object(b.a)([Object(p.b)()],S.prototype,"fullExtent",void 0),Object(b.a)([Object(p.b)({json:{read:!0,write:!0}})],S.prototype,"blendMode",void 0),Object(b.a)([Object(p.b)({json:{read:!1,write:{ignoreOrigin:!0}}})],S.prototype,"layers",void 0),Object(b.a)([Object(j.a)("layers")],S.prototype,"_writeLayers",null),Object(b.a)([Object(p.b)({type:["GroupLayer"]})],S.prototype,"operationalLayerType",void 0),Object(b.a)([Object(p.b)({json:{origins:{"web-document":{read:!1,write:!1}}}})],S.prototype,"portalItem",null),Object(b.a)([Object(p.b)()],S.prototype,"spatialReference",void 0),Object(b.a)([Object(p.b)({json:{read:!1},readOnly:!0,value:"group"})],S.prototype,"type",void 0),Object(b.a)([Object(p.b)({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{type:["independent","exclusive"],write:function(e,t,i){"inherited"!==e&&(t[i]=e)}}}}})],S.prototype,"visibilityMode",null);var E=S=Object(b.a)([Object(O.a)("esri.layers.GroupLayer")],S)}}]);
//# sourceMappingURL=69.7eb55275.chunk.js.map