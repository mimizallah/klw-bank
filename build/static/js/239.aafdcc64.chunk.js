(this["webpackJsonpklw-bank"]=this["webpackJsonpklw-bank"]||[]).push([[239],{169:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var s=i(99),n=i(112),r=i(89),h=i(88),o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];Object(r.a)(this,e),this.lengths=null!==t&&void 0!==t?t:[],this.coords=null!==i&&void 0!==i?i:[],this.hasIndeterminateRingOrder=s}return Object(h.a)(e,[{key:"isPoint",get:function(){return 0===this.lengths.length}},{key:"maxLength",get:function(){return Math.max.apply(Math,Object(n.a)(this.lengths))}},{key:"size",get:function(){return this.lengths.reduce((function(e,t){return e+t}))}},{key:"forEachVertex",value:function(e){var t=0;this.lengths.length||e(this.coords[0],this.coords[1]);for(var i=0;i<this.lengths.length;i++){for(var s=this.lengths[i],n=0;n<s;n++)e(this.coords[2*(n+t)],this.coords[2*(n+t)+1]);t+=s}}},{key:"clone",value:function(t){return t?(t.set(this.coords),new e(this.lengths.slice(),t,this.hasIndeterminateRingOrder)):new e(this.lengths.slice(),this.coords.slice(),this.hasIndeterminateRingOrder)}}],[{key:"fromRect",value:function(t){var i=Object(s.a)(t,4),n=i[0],r=i[1],h=i[2]-n,o=i[3]-r;return new e([5],[n,r,h,0,0,o,-h,0,0,-o])}}]),e}()},335:function(e,t,i){"use strict";i.d(t,"a",(function(){return o})),i.d(t,"b",(function(){return l})),i.d(t,"c",(function(){return a}));var s=i(90),n=i(91),r=i(89),h=i(88),o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0;Object(r.a)(this,e),this.geometry=t,this.attributes=i,this.centroid=s,this.objectId=n,this.displayId=0,this.geohashX=0,this.geohashY=0}return Object(h.a)(e,[{key:"weakClone",value:function(){var t=new e(this.geometry,this.attributes,this.centroid,this.objectId);return t.displayId=this.displayId,t.geohashX=this.geohashX,t.geohashY=this.geohashY,t}}]),e}();function a(e){return!(null==e.geometry||!e.geometry.coords||!e.geometry.coords.length)}var l=function(e){Object(s.a)(i,e);var t=Object(n.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(h.a)(i)}(o)},908:function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));var s=i(89),n=i(88),r=function(){function e(){Object(s.a)(this,e),this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}return Object(n.a)(e,[{key:"weakClone",value:function(){var t=new e;return t.objectIdFieldName=this.objectIdFieldName,t.globalIdFieldName=this.globalIdFieldName,t.geohashFieldName=this.geohashFieldName,t.geometryProperties=this.geometryProperties,t.geometryType=this.geometryType,t.spatialReference=this.spatialReference,t.hasZ=this.hasZ,t.hasM=this.hasM,t.features=this.features,t.fields=this.fields,t.transform=this.transform,t.exceededTransferLimit=this.exceededTransferLimit,t.uniqueIdField=this.uniqueIdField,t.queryGeometry=this.queryGeometry,t.queryGeometryType=this.queryGeometryType,t}}]),e}()}}]);
//# sourceMappingURL=239.aafdcc64.chunk.js.map