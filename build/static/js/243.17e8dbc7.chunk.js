(this["webpackJsonpklw-bank"]=this["webpackJsonpklw-bank"]||[]).push([[243],{1548:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(89),a=r(88),i=r(90),c=r(91),s=r(94),o=r(189),u=r(97),l=(r(96),r(98),r(93),r(95)),b=function(e){Object(i.a)(r,e);var t=Object(c.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r,[{key:"initialize",value:function(){}},{key:"destroy",value:function(){}},{key:"supportsTileUpdates",get:function(){return!1}},{key:"spatialReference",get:function(){var e=this.get("tileStore.tileScheme.spatialReference");return e&&e.toJSON()||null}}]),r}(o.a);Object(s.a)([Object(u.b)({readOnly:!0})],b.prototype,"supportsTileUpdates",null),Object(s.a)([Object(u.b)({constructOnly:!0})],b.prototype,"remoteClient",void 0),Object(s.a)([Object(u.b)({constructOnly:!0})],b.prototype,"service",void 0),Object(s.a)([Object(u.b)()],b.prototype,"spatialReference",null),Object(s.a)([Object(u.b)({constructOnly:!0})],b.prototype,"tileInfo",void 0),Object(s.a)([Object(u.b)({constructOnly:!0})],b.prototype,"tileStore",void 0);var d=b=Object(s.a)([Object(l.a)("esri.views.2d.layers.features.processors.BaseProcessor")],b)},2224:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return T}));var n=r(1),a=r(99),i=r(92),c=r(4),s=r(12),o=r(90),u=r(91),l=r(88),b=r(89),d=r(94),p=(r(93),r(111)),f=(r(102),r(96),r(98),r(101),r(95)),O=r(284),h=r(307),y=r(104),j=r(1548),v=r(398),k=Object(l.a)((function e(t,r){Object(b.a)(this,e),this.offset=t,this.extent=r}));function w(e){var t=e.key,r=new Map,n=256,a=y.fb,i=e.tileInfoView.tileInfo.isWrappable;return r.set(Object(v.a)(t,-1,-1,i).id,new k([-a,-a],[a-n,a-n,a,a])),r.set(Object(v.a)(t,0,-1,i).id,new k([0,-a],[0,a-n,a,a])),r.set(Object(v.a)(t,1,-1,i).id,new k([a,-a],[0,a-n,n,a])),r.set(Object(v.a)(t,-1,0,i).id,new k([-a,0],[a-n,0,a,a])),r.set(Object(v.a)(t,1,0,i).id,new k([a,0],[0,0,n,a])),r.set(Object(v.a)(t,-1,1,i).id,new k([-a,a],[a-n,0,a,n])),r.set(Object(v.a)(t,0,1,i).id,new k([0,a],[0,0,a,n])),r.set(Object(v.a)(t,1,1,i).id,new k([a,a],[0,0,n,n])),r}var m=function(e){Object(o.a)(r,e);var t=Object(u.a)(r);function r(){var e;return Object(b.a)(this,r),(e=t.apply(this,arguments)).type="heatmap",e._tileKeyToFeatureSets=new Map,e}return Object(l.a)(r,[{key:"initialize",value:function(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])}},{key:"update",value:function(){var e=Object(s.a)(Object(c.a)().mark((function e(t,r){var n;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("heatmap"===(n=r.schema.processors[0]).type){e.next=3;break}return e.abrupt("return");case 3:Object(O.a)(this._schema,n)&&(t.mesh=!0,this._schema=n);case 4:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"onTileUpdate",value:function(e){var t,r=Object(i.a)(e.removed);try{for(r.s();!(t=r.n()).done;){var n=t.value;this._tileKeyToFeatureSets.delete(n.key.id)}}catch(a){r.e(a)}finally{r.f()}}},{key:"onTileClear",value:function(e){return this._tileKeyToFeatureSets.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:{clear:!0}})}},{key:"onTileMessage",value:function(){var e=Object(s.a)(Object(c.a)().mark((function e(t,r,i){var s,o,u,l,b,d;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._tileKeyToFeatureSets.has(t.key.id)||this._tileKeyToFeatureSets.set(t.key.id,new Map),(s=this._tileKeyToFeatureSets.get(t.key.id))&&null!=r.addOrUpdate&&r.addOrUpdate.hasFeatures&&s.set(r.addOrUpdate.instance,r),!r.end){e.next=7;break}return o=[],u=w(t),this._tileKeyToFeatureSets.forEach((function(e,r){if(r===t.key.id)e.forEach((function(e){return Object(p.b)(e.addOrUpdate,(function(e){return o.push(e)}))}));else if(u.has(r)){var n=u.get(r),i=Object(a.a)(n.offset,2),c=i[0],s=i[1];e.forEach((function(e){return Object(p.b)(e.addOrUpdate,(function(e){var t=e.transform(c,s,1,1);o.push(t)}))}))}})),l=Object(h.b)(o,this._schema.mesh,512,512),b={tileKey:t.key.id,intensityInfo:l},d=[l.matrix],e.abrupt("return",this.remoteClient.invoke("tileRenderer.onTileData",b,Object(n.a)(Object(n.a)({},i),{},{transferList:d})));case 7:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"onTileError",value:function(e,t,r){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t},r)}}]),r}(j.a),T=m=Object(d.a)([Object(f.a)("esri.views.2d.layers.features.processors.HeatmapProcessor")],m)},398:function(e,t,r){"use strict";function n(e,t,r,n){var a=e.clone(),i=1<<a.level,c=a.col+t,s=a.row+r;return n&&c<0?(a.col=c+i,a.world-=1):c>=i?(a.col=c-i,a.world+=1):a.col=c,a.row=s,a}r.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=243.17e8dbc7.chunk.js.map