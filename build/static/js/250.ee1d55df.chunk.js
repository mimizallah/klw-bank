(this["webpackJsonpklw-bank"]=this["webpackJsonpklw-bank"]||[]).push([[250],{1790:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return q}));var r,n=a(4),i=a(12),o=a(89),l=a(88),s=a(90),c=a(91),u=a(94),b=(a(119),a(129)),p=a(101),d=a(146),y=a(281),g=a(97),h=(a(96),a(98),a(93),a(95)),v=a(125),j=a(1),f=a(130),O=a(139),w=a(259),m=a(330),k=a(425),M=a(302),x=a(515),T=a(323),S=new(a(630).a)("0/0/0",0,0,0,void 0),B=r=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.apply(this,arguments)).tileInfo=T.a.create({spatialReference:v.a.WebMercator,size:256}),e.type="base-tile",e.fullExtent=new f.a(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,v.a.WebMercator),e.spatialReference=v.a.WebMercator,e}return Object(l.a)(a,[{key:"getTileBounds",value:function(e,t,a,r){var n=r||Object(O.h)();return S.level=e,S.row=t,S.col=a,S.extent=n,this.tileInfo.updateTileInfo(S),S.extent=void 0,n}},{key:"fetchTile",value:function(e,t,a){var r=(arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}).signal,n=this.getTileUrl(e,t,a),i={responseType:"image",signal:r,query:Object(j.a)({},this.refreshParameters)};return Object(b.default)(null!==n&&void 0!==n?n:"",i).then((function(e){return e.data}))}},{key:"fetchImageBitmapTile",value:function(){var e=Object(i.a)(Object(n.a)().mark((function e(t,a,i){var o,l,s,c,u,p,d,y,g=arguments;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=(l=g.length>3&&void 0!==g[3]?g[3]:{}).signal,this.fetchTile===r.prototype.fetchTile){e.next=7;break}return e.next=5,this.fetchTile(t,a,i,l);case 5:return c=e.sent,e.abrupt("return",Object(x.b)(c,t,a,i,s));case 7:return u=null!==(o=this.getTileUrl(t,a,i))&&void 0!==o?o:"",p={responseType:"blob",signal:s,query:Object(j.a)({},this.refreshParameters)},e.next=11,Object(b.default)(u,p);case 11:return d=e.sent,y=d.data,e.abrupt("return",Object(x.b)(y,t,a,i,s));case 14:case"end":return e.stop()}}),e,this)})));return function(t,a,r){return e.apply(this,arguments)}}()},{key:"getTileUrl",value:function(){throw new p.a("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")}}]),a}(Object(m.a)(Object(M.a)(Object(k.a)(w.a))));Object(u.a)([Object(g.b)({type:T.a})],B.prototype,"tileInfo",void 0),Object(u.a)([Object(g.b)({type:["show","hide"]})],B.prototype,"listMode",void 0),Object(u.a)([Object(g.b)({readOnly:!0,value:"base-tile"})],B.prototype,"type",void 0),Object(u.a)([Object(g.b)({nonNullable:!0})],B.prototype,"fullExtent",void 0),Object(u.a)([Object(g.b)()],B.prototype,"spatialReference",void 0);var U=B=r=Object(u.a)([Object(h.a)("esri.layers.BaseTileLayer")],B),P=a(311),R=a(520),I=a(135),_=new d.a({BingMapsAerial:"aerial",BingMapsRoad:"road",BingMapsHybrid:"hybrid"}),L=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).type="bing-maps",r.tileInfo=new T.a({size:[256,256],dpi:96,origin:new I.a({x:-20037508.342787,y:20037508.342787,spatialReference:v.a.WebMercator}),spatialReference:v.a.WebMercator,lods:[new R.a({level:1,resolution:78271.5169639999,scale:295828763.795777}),new R.a({level:2,resolution:39135.7584820001,scale:147914381.897889}),new R.a({level:3,resolution:19567.8792409999,scale:73957190.948944}),new R.a({level:4,resolution:9783.93962049996,scale:36978595.474472}),new R.a({level:5,resolution:4891.96981024998,scale:18489297.737236}),new R.a({level:6,resolution:2445.98490512499,scale:9244648.868618}),new R.a({level:7,resolution:1222.99245256249,scale:4622324.434309}),new R.a({level:8,resolution:611.49622628138,scale:2311162.217155}),new R.a({level:9,resolution:305.748113140558,scale:1155581.108577}),new R.a({level:10,resolution:152.874056570411,scale:577790.554289}),new R.a({level:11,resolution:76.4370282850732,scale:288895.277144}),new R.a({level:12,resolution:38.2185141425366,scale:144447.638572}),new R.a({level:13,resolution:19.1092570712683,scale:72223.819286}),new R.a({level:14,resolution:9.55462853563415,scale:36111.909643}),new R.a({level:15,resolution:4.77731426794937,scale:18055.954822}),new R.a({level:16,resolution:2.38865713397468,scale:9027.977411}),new R.a({level:17,resolution:1.19432856685505,scale:4513.988705}),new R.a({level:18,resolution:.597164283559817,scale:2256.994353}),new R.a({level:19,resolution:.298582141647617,scale:1128.497176}),new R.a({level:20,resolution:.1492910708238085,scale:564.248588})]}),r.key=null,r.style="road",r.culture="en-US",r.region=null,r.portalUrl=null,r.hasAttributionData=!0,r}return Object(l.a)(a,[{key:"bingMetadata",get:function(){return this._get("bingMetadata")},set:function(e){this._set("bingMetadata",e)}},{key:"copyright",get:function(){return null!=this.bingMetadata?this.bingMetadata.copyright:null}},{key:"operationalLayerType",get:function(){return _.toJSON(this.style)}},{key:"bingLogo",get:function(){return null!=this.bingMetadata?this.bingMetadata.brandLogoUri:null}},{key:"load",value:function(e){var t=this;return this.key?this.addResolvingPromise(this._getMetadata()):this.portalUrl?this.addResolvingPromise(this._getPortalBingKey().then((function(){return t._getMetadata()}))):this.addResolvingPromise(Promise.reject(new p.a("bingmapslayer:load","Bing layer must have bing key."))),Promise.resolve(this)}},{key:"getTileUrl",value:function(e,t,a){if(!this.loaded||null==this.bingMetadata)return null;var r=this.bingMetadata.resourceSets[0].resources[0],n=r.imageUrlSubdomains[t%r.imageUrlSubdomains.length],i=this._getQuadKey(e,t,a);return r.imageUrl.replace("{subdomain}",n).replace("{quadkey}",i)}},{key:"fetchAttributionData",value:function(){var e=Object(i.a)(Object(n.a)().mark((function e(){var t=this;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.load().then((function(){return null==t.bingMetadata?null:{contributors:t.bingMetadata.resourceSets[0].resources[0].imageryProviders.map((function(e){return{attribution:e.attribution,coverageAreas:e.coverageAreas.map((function(e){return{zoomMin:e.zoomMin,zoomMax:e.zoomMax,score:1,bbox:[e.bbox[0],e.bbox[1],e.bbox[2],e.bbox[3]]}}))}}))}})));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_getMetadata",value:function(){var e=this,t={road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"}[this.style];return Object(b.default)("".concat("https://dev.virtualearth.net","/REST/v1/Imagery/Metadata/").concat(t),{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then((function(t){var a=t.data;if(200!==a.statusCode)throw new p.a("bingmapslayer:getmetadata",a.statusDescription);if(e.bingMetadata=a,0===e.bingMetadata.resourceSets.length)throw new p.a("bingmapslayer:getmetadata","no bing resourcesets");if(0===e.bingMetadata.resourceSets[0].resources.length)throw new p.a("bingmapslayer:getmetadata","no bing resources")})).catch((function(e){throw new p.a("bingmapslayer:getmetadata",e.message)}))}},{key:"_getPortalBingKey",value:function(){var e,t=this;return Object(b.default)(null!==(e=this.portalUrl)&&void 0!==e?e:"",{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then((function(e){if(!e.data.bingKey)throw new p.a("bingmapslayer:getportalbingkey","The referenced Portal does not contain a valid bing key");t.key=e.data.bingKey})).catch((function(e){throw new p.a("bingmapslayer:getportalbingkey",e.message)}))}},{key:"_getQuadKey",value:function(e,t,a){for(var r="",n=e;n>0;n--){var i=0,o=1<<n-1;0!=(a&o)&&(i+=1),0!=(t&o)&&(i+=2),r+=i.toString()}return r}}]),a}(Object(m.a)(Object(P.a)(Object(y.a)(U))));Object(u.a)([Object(g.b)({json:{read:!1,write:!1},value:null})],L.prototype,"bingMetadata",null),Object(u.a)([Object(g.b)({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],L.prototype,"type",void 0),Object(u.a)([Object(g.b)({type:T.a})],L.prototype,"tileInfo",void 0),Object(u.a)([Object(g.b)({type:String,readOnly:!0,json:{read:!1,write:!1}})],L.prototype,"copyright",null),Object(u.a)([Object(g.b)({type:String,json:{write:!1,read:!1}})],L.prototype,"key",void 0),Object(u.a)([Object(g.b)({type:_.apiValues,nonNullable:!0,json:{read:{source:"layerType",reader:_.read}}})],L.prototype,"style",void 0),Object(u.a)([Object(g.b)({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"]})],L.prototype,"operationalLayerType",null),Object(u.a)([Object(g.b)({type:String,json:{write:!1,read:!1}})],L.prototype,"culture",void 0),Object(u.a)([Object(g.b)({type:String,json:{write:!1,read:!1}})],L.prototype,"region",void 0),Object(u.a)([Object(g.b)({type:String,json:{write:!0,read:!0}})],L.prototype,"portalUrl",void 0),Object(u.a)([Object(g.b)({type:Boolean,json:{write:!1,read:!1}})],L.prototype,"hasAttributionData",void 0),Object(u.a)([Object(g.b)({type:String,readOnly:!0})],L.prototype,"bingLogo",null);var q=L=Object(u.a)([Object(h.a)("esri.layers.BingMapsLayer")],L)},515:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return c}));var r=a(4),n=a(12),i=a(101),o=a(110);function l(e,t,a){return s.apply(this,arguments)}function s(){return s=Object(n.a)(Object(r.a)().mark((function e(t,a,n){var l;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,createImageBitmap(t);case 3:l=e.sent,e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),new i.a("request:server","Unable to load ".concat(a),{url:a,error:e.t0});case 9:return e.abrupt("return",(Object(o.n)(n),l));case 10:case"end":return e.stop()}}),e,null,[[0,6]])}))),s.apply(this,arguments)}function c(e,t,a,r,n){return u.apply(this,arguments)}function u(){return u=Object(n.a)(Object(r.a)().mark((function e(t,a,n,l,s){var c;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,createImageBitmap(t);case 3:c=e.sent,e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),new i.a("request:server","Unable to load tile ".concat(a,"/").concat(n,"/").concat(l),{error:e.t0,level:a,row:n,col:l});case 9:return e.abrupt("return",(Object(o.n)(s),c));case 10:case"end":return e.stop()}}),e,null,[[0,6]])}))),u.apply(this,arguments)}}}]);
//# sourceMappingURL=250.ee1d55df.chunk.js.map