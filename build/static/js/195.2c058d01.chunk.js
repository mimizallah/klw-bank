(this["webpackJsonpklw-bank"]=this["webpackJsonpklw-bank"]||[]).push([[195],{1023:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u}));var r=n(4),a=n(92),i=Object(r.a)().mark(o);function u(e,t){if(e&&t){var n,r=Object(a.a)(e.children);try{for(r.s();!(n=r.n()).done;){var i=n.value;if(i.localName in t){var o=t[i.localName];if("function"==typeof o){var c=o(i);c&&u(i,c)}else u(i,o)}}}catch(s){r.e(s)}finally{r.f()}}}function o(e,t){var n,u,c,s;return Object(r.a)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n=Object(a.a)(e.children),r.prev=1,n.s();case 3:if((u=n.n()).done){r.next=15;break}if(!((c=u.value).localName in t)){r.next=13;break}if("function"!=typeof(s=t[c.localName])){r.next=12;break}return r.next=10,s(c);case 10:r.next=13;break;case 12:return r.delegateYield(o(c,s),"t0",13);case 13:r.next=3;break;case 15:r.next=20;break;case 17:r.prev=17,r.t1=r.catch(1),n.e(r.t1);case 20:return r.prev=20,n.f(),r.finish(20);case 23:case"end":return r.stop()}}),i,null,[[1,17,20,23]])}},1251:function(e,t,n){"use strict";n.d(t,"a",(function(){return T})),n.d(t,"b",(function(){return Y})),n.d(t,"c",(function(){return M})),n.d(t,"d",(function(){return ae})),n.d(t,"e",(function(){return z})),n.d(t,"f",(function(){return Z}));var r=n(4),a=n(1),i=n(99),u=n(92),o=n(112),c=n(569),s=n(12),l=(n(119),n(129)),p=n(101),f=n(652),d=n(110),b=n(128),y=n(206),v=n(132),h=n(364),m=n(637);function g(e){var t;return null!==(t=function(e){var t,n,r,a,i=j.exec(e);if(null===i||void 0===i||!i.groups)return null;var u=i.groups,o=+u.year,c=+u.month-1,s=+u.day,l=+(null!==(t=u.hours)&&void 0!==t?t:"0"),p=+(null!==(n=u.minutes)&&void 0!==n?n:"0"),f=+(null!==(r=u.seconds)&&void 0!==r?r:"0");if(l>23)return null;if(p>59)return null;if(f>59)return null;var d,b=null!==(a=u.ms)&&void 0!==a?a:"0",y=b?+b.padEnd(3,"0").substring(0,3):0;if(u.isUTC)d=Date.UTC(o,c,s,l,p,f,y);else if(u.offsetSign){var v=+u.offsetHours,h=+u.offsetMinutes;d=6e4*("+"===u.offsetSign?-1:1)*(60*v+h)+Date.UTC(o,c,s,l,p,f,y)}else d=new Date(o,c,s,l,p,f,y).getTime();return Number.isNaN(d)?null:d}(e))&&void 0!==t?t:function(e){var t=new Date(e).getTime();return Number.isNaN(t)?null:t}(e)}var j=Object(c.a)(/^(?:(\x2D?\d{4,})\x2D(\d{2})\x2D(\d{2}))(?:T(\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?)?(?:(Z)|(?:(\+|\x2D)(\d{2}):(\d{2})))?$/,{year:1,month:2,day:3,hours:4,minutes:5,seconds:6,ms:7,isUTC:8,offsetSign:9,offsetHours:10,offsetMinutes:11}),O=n(1023),w=n(325),x=n(125),k=n(130),F="xlink:href",S="2.0.0",T="__esri_wfs_id__",E="wfs-layer:getWFSLayerTypeInfo-error",P="wfs-layer:empty-service",C="wfs-layer:feature-type-not-found",_="wfs-layer:geojson-not-supported",N="wfs-layer:kvp-encoding-not-supported",R="wfs-layer:malformed-json",G="wfs-layer:unknown-geometry-type",q="wfs-layer:unknown-field-type",A="wfs-layer:unsupported-spatial-reference",I="wfs-layer:unsupported-wfs-version";function M(e,t){return D.apply(this,arguments)}function D(){return(D=Object(s.a)(Object(r.a)().mark((function e(t,n){var i;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=L,e.next=3,Object(l.default)(t,{responseType:"text",query:Object(a.a)({SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:S},null===n||void 0===n?void 0:n.customParameters),signal:null===n||void 0===n?void 0:n.signal});case 3:return e.t1=e.sent.data,i=(0,e.t0)(e.t1),e.abrupt("return",(V(t,i),i));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e){var t=oe(e);(function(e){var t,n=null===(t=e.firstElementChild)||void 0===t?void 0:t.getAttribute("version");if(n&&n!==S)throw new p.a(I,"Unsupported WFS version ".concat(n,". Supported version: ").concat(S))})(t),se(t);var n=t.firstElementChild,r=Object(f.a)(function(e){return Object(O.a)(e,{FeatureTypeList:{FeatureType:function(e){var t,n={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",supportedSpatialReferences:[]},r=new Set([4326]),a=function(e){var t,n,a=parseInt(null!==(t=null===(n=e.textContent)||void 0===n||null===(n=n.match(Object(c.a)(/(\d+$)/i,{wkid:1})))||void 0===n||null===(n=n.groups)||void 0===n?void 0:n.wkid)&&void 0!==t?t:"",10);Number.isNaN(a)||r.add(a)};return Object(O.b)(e,{Name:function(e){var t=ce(e.textContent),r=t.name,a=t.prefix;n.typeName="".concat(a,":").concat(r),n.name=r,n.namespacePrefix=a,n.namespaceUri=e.lookupNamespaceURI(a)},Abstract:function(e){n.description=e.textContent},Title:function(e){n.title=e.textContent},WGS84BoundingBox:function(e){n.extent=function(e){var t,n,r,a,o,c=Object(u.a)(e.children);try{for(c.s();!(o=c.n()).done;){var s=o.value;switch(s.localName){case"LowerCorner":var l=s.textContent.split(" ").map((function(e){return Number.parseFloat(e)})),p=Object(i.a)(l,2);t=p[0],n=p[1];break;case"UpperCorner":var f=s.textContent.split(" ").map((function(e){return Number.parseFloat(e)})),d=Object(i.a)(f,2);r=d[0],a=d[1]}}}catch(b){c.e(b)}finally{c.f()}return{xmin:t,ymin:n,xmax:r,ymax:a,spatialReference:v.b}}(e)},DefaultSRS:a,DefaultCRS:a,OtherSRS:a,OtherCRS:a}),n.title||(n.title=n.name),(t=n.supportedSpatialReferences).push.apply(t,Object(o.a)(r)),n}}})}(n));return{operations:W(n),get featureTypes(){return Array.from(r())},readFeatureTypes:r}}var U=new Set(["json","application/json","geojson","application/json; subtype=geojson"]);function W(e){var t=!1,n={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}};if(Object(O.b)(e,{OperationsMetadata:{Operation:function(e){switch(e.getAttribute("name")){case"GetCapabilities":return{DCP:{HTTP:{Get:function(e){n.GetCapabilities.url=e.getAttribute(F)}}}};case"DescribeFeatureType":return{DCP:{HTTP:{Get:function(e){n.DescribeFeatureType.url=e.getAttribute(F)}}}};case"GetFeature":return{DCP:{HTTP:{Get:function(e){n.GetFeature.url=e.getAttribute(F)}}},Parameter:function(e){if("outputFormat"===e.getAttribute("name"))return{AllowedValues:{Value:function(e){var t=e.textContent;t&&U.has(t.toLowerCase())&&(n.GetFeature.outputFormat=t)}}}}}}},Constraint:function(e){switch(e.getAttribute("name")){case"KVPEncoding":return{DefaultValue:function(e){t="true"===e.textContent.toLowerCase()}};case"ImplementsResultPaging":return{DefaultValue:function(e){n.GetFeature.supportsPagination="true"===e.textContent.toLowerCase()}}}}}}),!t)throw new p.a(N,"WFS service doesn't support key/value pair (KVP) encoding");if(null==n.GetFeature.outputFormat)throw new p.a(_,"WFS service doesn't support GeoJSON output format");return n}function V(e,t){Object(b.z)(e)&&(Object(b.u)(e,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=Object(b.P)(t.operations.DescribeFeatureType.url)),Object(b.u)(e,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=Object(b.P)(t.operations.GetFeature.url)))}function Y(e,t,n){return Object(f.b)(e,(function(e){return n?e.name===t&&e.namespaceUri===n:e.typeName===t||e.name===t}))}function z(e,t,n){return J.apply(this,arguments)}function J(){return J=Object(s.a)(Object(r.a)().mark((function e(t,n,a){var i,u,o,c,s,l,p,f,d,b,y,v=arguments;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=v.length>3&&void 0!==v[3]?v[3]:{},e.next=3,X(t,n,a,u);case 3:return o=e.sent,c=o.featureType,s=o.extent,e.next=8,Q(t,c.typeName,u);case 8:return l=e.sent,p=l.fields,f=l.geometryType,d=l.swapXY,b=l.objectIdField,y=l.geometryField,e.abrupt("return",{url:t.operations.GetCapabilities.url,name:c.name,namespaceUri:c.namespaceUri,fields:p,geometryField:y,geometryType:f,objectIdField:b,spatialReference:null!==(i=u.spatialReference)&&void 0!==i?i:x.a.WGS84,extent:s,swapXY:d,wfsCapabilities:t,customParameters:u.customParameters});case 15:case"end":return e.stop()}}),e)}))),J.apply(this,arguments)}function X(e,t,n){return $.apply(this,arguments)}function $(){return $=Object(s.a)(Object(r.a)().mark((function e(t,n,i){var u,o,c,s,l,f,d=arguments;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=(u=d.length>3&&void 0!==d[3]?d[3]:{}).spatialReference,c=void 0===o?x.a.WGS84:o,s=t.readFeatureTypes(),null!=(l=n?Y(s,n,i):s.next().value)){e.next=4;break}throw n?new p.a(C,"The type '".concat(n,"' could not be found in the service")):new p.a(P,"The service is empty");case 4:if(f=new k.a(Object(a.a)(Object(a.a)({},l.extent),{},{spatialReference:c})),Object(v.d)(c,v.b)){e.next=15;break}return e.prev=6,e.next=9,Object(y.initializeProjection)(v.b,c,void 0,u);case 9:f=Object(y.project)(f,v.b),e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(6),new p.a(A,"Projection not supported");case 15:return e.abrupt("return",{extent:f,spatialReference:c,featureType:l});case 16:case"end":return e.stop()}}),e,null,[[6,12]])}))),$.apply(this,arguments)}function Q(e,t){return H.apply(this,arguments)}function H(){return H=Object(s.a)(Object(r.a)().mark((function e(t,n){var u,o,c,s,l,f,b,y,v,h,m,g,j,O,w,x=arguments;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f=x.length>2&&void 0!==x[2]?x[2]:{},e.next=3,Object(d.e)([ee(t.operations.DescribeFeatureType.url,n,f),B(t,n,f)]);case 3:if(b=e.sent,y=Object(i.a)(b,2),v=y[0],h=y[1],!v.error&&!h.error){e.next=9;break}throw new p.a(E,"An error occurred while getting info about the feature type '".concat(n,"'"),{error:v.error||h.error});case 9:if(m=null!==(u=v.value)&&void 0!==u?u:{},g=m.fields,j=m.errors,O=(null===(o=v.value)||void 0===o?void 0:o.geometryType)||(null===(c=h.value)||void 0===c?void 0:c.geometryType),w=null!==(s=null===(l=h.value)||void 0===l?void 0:l.swapXY)&&void 0!==s&&s,null!=O){e.next=12;break}throw new p.a(G,"The geometry type could not be determined for type '".concat(n),{typeName:n,geometryType:O,fields:g,errors:j});case 12:return e.abrupt("return",Object(a.a)(Object(a.a)({},Z(null!==g&&void 0!==g?g:[])),{},{geometryType:O,swapXY:w}));case 13:case"end":return e.stop()}}),e)}))),H.apply(this,arguments)}function Z(e){var t,n=e.find((function(e){return"geometry"===e.type})),r=e.find((function(e){return"oid"===e.type}));return e=e.filter((function(e){return"geometry"!==e.type})),r||(r=new w.a({name:T,type:"oid",alias:T}),e.unshift(r)),{geometryField:null!==(t=null===n||void 0===n?void 0:n.name)&&void 0!==t?t:null,objectIdField:r.name,fields:e}}function B(e,t){return K.apply(this,arguments)}function K(){return K=Object(s.a)(Object(r.a)().mark((function e(t,n){var u,o,c,s,p,f,d,b,y,v,g,j,O,w,x=arguments;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=x.length>2&&void 0!==x[2]?x[2]:{},s=!1,e.next=4,Promise.all([ae(t.operations.GetFeature.url,n,t.operations.GetFeature.outputFormat,Object(a.a)(Object(a.a)({},o),{},{count:1})),Object(l.default)(t.operations.GetFeature.url,{responseType:"text",query:ue(n,void 0,Object(a.a)(Object(a.a)({},o),{},{count:1})),signal:null===o||void 0===o?void 0:o.signal})]);case 4:if(p=e.sent,f=Object(i.a)(p,2),d=f[0],b=f[1],!(y="FeatureCollection"===d.type&&(null===(u=d.features[0])||void 0===u?void 0:u.geometry))){e.next=22;break}e.t0=(c=h.a.fromJSON(Object(m.b)(y.type)),y.type),e.next="Point"===e.t0?13:"LineString"===e.t0||"MultiPoint"===e.t0?15:"MultiLineString"===e.t0||"Polygon"===e.t0?17:"MultiPolygon"===e.t0?19:20;break;case 13:return v=y.coordinates,e.abrupt("break",20);case 15:return v=y.coordinates[0],e.abrupt("break",20);case 17:return v=y.coordinates[0][0],e.abrupt("break",20);case 19:v=y.coordinates[0][0][0];case 20:(g=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(b.data))&&(j=v[0].toFixed(3),O=v[1].toFixed(3),w=parseFloat(g[1]).toFixed(3),j===parseFloat(g[2]).toFixed(3)&&O===w&&(s=!0));case 22:return e.abrupt("return",{geometryType:c,swapXY:s});case 23:case"end":return e.stop()}}),e)}))),K.apply(this,arguments)}function ee(e,t,n){return te.apply(this,arguments)}function te(){return(te=Object(s.a)(Object(r.a)().mark((function e(t,n,i){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=ne,e.t1=n,e.next=4,Object(l.default)(t,{responseType:"text",query:Object(a.a)({SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:S,TYPENAME:n},null===i||void 0===i?void 0:i.customParameters),signal:null===i||void 0===i?void 0:i.signal});case 4:return e.t2=e.sent.data,e.abrupt("return",(0,e.t0)(e.t1,e.t2));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ne(e,t){var n=ce(e).name,r=oe(t);se(r);var a=Object(f.b)(Object(O.a)(r.firstElementChild,{element:function(e){return{name:e.getAttribute("name"),typeName:ce(e.getAttribute("type")).name}}}),(function(e){return e.name===n}));if(null!=a){var i=Object(f.b)(Object(O.a)(r.firstElementChild,{complexType:function(e){return e}}),(function(e){return e.getAttribute("name")===a.typeName}));if(null!=i)return function(e){var t,n,r=[],a=[],i=Object(O.a)(e,{complexContent:{extension:{sequence:{element:function(e){return e}}}}}),o=Object(u.a)(i);try{var c=function(){var i,u,o,c,s=n.value,l=s.getAttribute("name");if(!l)return 0;if(s.hasAttribute("type")?o=ce(s.getAttribute("type")).name:Object(O.b)(s,{simpleType:{restriction:function(e){return o=ce(e.getAttribute("base")).name,{maxLength:function(e){c=+e.getAttribute("value")}}}}}),!o)return 0;var f="true"===s.getAttribute("nillable"),d=!1;switch(o.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":a.push(new w.a({name:l,alias:l,type:"integer",nullable:f}));break;case"float":case"double":case"decimal":a.push(new w.a({name:l,alias:l,type:"double",nullable:f}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":a.push(new w.a({name:l,alias:l,type:"string",nullable:f,length:null!==(i=c)&&void 0!==i?i:255}));break;case"datetime":case"date":a.push(new w.a({name:l,alias:l,type:"date",nullable:f,length:null!==(u=c)&&void 0!==u?u:36}));break;case"pointpropertytype":t="point",d=!0;break;case"multipointpropertytype":t="multipoint",d=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":t="polyline",d=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":t="polygon",d=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":d=!0,r.push(new p.a(G,"geometry type '".concat(o,"' is not supported"),{type:(new XMLSerializer).serializeToString(e)}));break;default:r.push(new p.a(q,"Unknown field type '".concat(o,"'"),{type:(new XMLSerializer).serializeToString(e)}))}d&&a.push(new w.a({name:l,alias:l,type:"geometry",nullable:f}))};for(o.s();!(n=o.n()).done;)c()}catch(d){o.e(d)}finally{o.f()}for(var s=0,l=a;s<l.length;s++){var f=l[s];if("integer"===f.type&&!f.nullable&&re.has(f.name.toLowerCase())){f.type="oid";break}}return{geometryType:t,fields:a,errors:r}}(i)}throw new p.a(C,"Type '".concat(e,"' not found in document"),{document:(new XMLSerializer).serializeToString(r)})}var re=new Set(["objectid","fid"]);function ae(e,t,n,r){return ie.apply(this,arguments)}function ie(){return(ie=Object(s.a)(Object(r.a)().mark((function e(t,n,a,i){var u,o,c,s;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.default)(t,{responseType:"text",query:ue(n,a,i),signal:null===i||void 0===i?void 0:i.signal});case 2:if(u=e.sent,o=(o=u.data).replaceAll(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3'),e.prev=5,null===i||void 0===i||null===(c=i.dateFields)||void 0===c||!c.length){e.next=9;break}return s=new Set(i.dateFields),e.abrupt("return",JSON.parse(o,(function(e,t){return s.has(e)?g(t):t})));case 9:return e.abrupt("return",JSON.parse(o));case 12:throw e.prev=12,e.t0=e.catch(5),new p.a(R,"Error while parsing the\xa0response",{response:o,error:e.t0});case 15:case"end":return e.stop()}}),e,null,[[5,12]])})))).apply(this,arguments)}function ue(e,t,n){return Object(a.a)({SERVICE:"WFS",REQUEST:"GetFeature",VERSION:S,TYPENAMES:e,OUTPUTFORMAT:t,SRSNAME:"EPSG:4326",STARTINDEX:null===n||void 0===n?void 0:n.startIndex,COUNT:null===n||void 0===n?void 0:n.count},null===n||void 0===n?void 0:n.customParameters)}function oe(e){return(new DOMParser).parseFromString(e.trim(),"text/xml")}function ce(e){var t=e.split(":"),n=Object(i.a)(t,2),r=n[0],a=n[1];return{prefix:a?r:"",name:null!==a&&void 0!==a?a:r}}function se(e){var t="",n="";if(Object(O.b)(e.firstElementChild,{Exception:function(e){return t=e.getAttribute("exceptionCode"),{ExceptionText:function(e){n=e.textContent}}}}),t)throw new p.a("wfs-layer:".concat(t),n)}},2201:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));var r=n(4),a=n(92),i=n(12),u=n(89),o=n(88),c=n(339),s=n(101),l=n(102),p=n(110),f=n(132),d=n(168),b=n(710),y=n(309),v=n(858),h=n(637),m=n(1323),g=n(1251),j=n(227),O=function(){function e(){var t=this;Object(u.a)(this,e),this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=function(){var e=Object(i.a)(Object(r.a)().mark((function e(n){var i,u,o,c,s,l,b,v,j,O,w,x;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=t._queryEngine.objectIdField,e.next=3,Object(g.d)(null!==(i=t._getFeatureUrl)&&void 0!==i?i:"",t._featureType.typeName,t._getFeatureOutputFormat,{customParameters:t._customParameters,dateFields:t._queryEngine.fieldsIndex.dateFields.map((function(e){return e.name})),signal:n});case 3:return o=e.sent,e.next=6,Object(h.d)(o);case 6:if(Object(p.n)(n),c=Object(h.a)(o,{geometryType:t._queryEngine.geometryType,hasZ:!1,objectIdField:u}),!Object(f.d)(t._queryEngine.spatialReference,f.b)){s=Object(a.a)(c);try{for(s.s();!(l=s.n()).done;)null!=(b=l.value).geometry&&(b.geometry=Object(d.d)(Object(y.b)(Object(d.l)(b.geometry,t._queryEngine.geometryType,!1,!1),f.b,t._queryEngine.spatialReference)))}catch(r){s.e(r)}finally{s.f()}}v=1,j=Object(a.a)(c);try{for(j.s();!(O=j.n()).done;)w=O.value,x={},Object(m.d)(t._fieldsIndex,x,w.attributes,!0),w.attributes=x,null==w.attributes[u]&&(w.objectId=w.attributes[u]=v++)}catch(r){j.e(r)}finally{j.f()}return e.abrupt("return",c);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}return Object(o.a)(e,[{key:"destroy",value:function(){var e;null!==(e=this._queryEngine)&&void 0!==e&&e.destroy(),this._queryEngine=null}},{key:"load",value:function(){var e=Object(i.a)(Object(r.a)().mark((function e(t,n){var a,i,u,o,c,s,l,f,d;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.getFeatureUrl,i=t.getFeatureOutputFormat,u=t.spatialReference,o=t.fields,c=t.geometryType,s=t.featureType,l=t.objectIdField,f=t.customParameters,this._featureType=s,this._customParameters=f,this._getFeatureUrl=a,this._getFeatureOutputFormat=i,this._fieldsIndex=new j.a(o),e.next=8,this._checkProjection(u);case 8:return Object(p.n)(n),this._queryEngine=new v.a({fields:o,geometryType:c,hasM:!1,hasZ:!1,objectIdField:l,spatialReference:u,timeInfo:null,featureStore:new b.a({geometryType:c,hasM:!1,hasZ:!1})}),e.next=12,this._snapshotFeatures(n.signal);case 12:return d=e.sent,this._queryEngine.featureStore.addMany(d),e.next=16,this._queryEngine.fetchRecomputedExtents();case 16:return e.t0=e.sent.fullExtent,e.abrupt("return",{extent:e.t0});case 18:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"applyEdits",value:function(){var e=Object(i.a)(Object(r.a)().mark((function e(){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:throw new s.a("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"queryFeatures",value:function(){var e=Object(i.a)(Object(r.a)().mark((function e(){var t,n,a=arguments;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{},n=a.length>1&&void 0!==a[1]?a[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQuery(t,n.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryFeatureCount",value:function(){var e=Object(i.a)(Object(r.a)().mark((function e(){var t,n,a=arguments;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{},n=a.length>1&&void 0!==a[1]?a[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQueryForCount(t,n.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryObjectIds",value:function(){var e=Object(i.a)(Object(r.a)().mark((function e(){var t,n,a=arguments;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{},n=a.length>1&&void 0!==a[1]?a[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQueryForIds(t,n.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryExtent",value:function(){var e=Object(i.a)(Object(r.a)().mark((function e(){var t,n,a=arguments;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{},n=a.length>1&&void 0!==a[1]?a[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQueryForExtent(t,n.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"querySnapping",value:function(){var e=Object(i.a)(Object(r.a)().mark((function e(t){var n,a=arguments;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:{},e.next=3,this._waitSnapshotComplete();case 3:return e.abrupt("return",this._queryEngine.executeQueryForSnapping(t,n.signal));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"refresh",value:function(){var e=Object(i.a)(Object(r.a)().mark((function e(t){var n,a=this;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._customParameters=t,null!==(n=this._snapshotTask)&&void 0!==n&&n.abort(),this._snapshotTask=Object(c.a)(this._snapshotFeatures),this._snapshotTask.promise.then((function(e){a._queryEngine.featureStore.clear(),e&&a._queryEngine.featureStore.addMany(e)}),(function(e){a._queryEngine.featureStore.clear(),Object(p.h)(e)||l.a.getLogger("esri.layers.WFSLayer").error(new s.a("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:e}))})),e.next=6,this._waitSnapshotComplete();case 6:return e.next=8,this._queryEngine.fetchRecomputedExtents();case 8:return e.t0=e.sent.fullExtent,e.abrupt("return",{extent:e.t0});case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_waitSnapshotComplete",value:function(){var e=Object(i.a)(Object(r.a)().mark((function e(){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._snapshotTask||this._snapshotTask.finished){e.next=9;break}return e.prev=1,e.next=4,this._snapshotTask.promise;case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.abrupt("return",this._waitSnapshotComplete());case 9:case"end":return e.stop()}}),e,this,[[1,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"_checkProjection",value:function(){var e=Object(i.a)(Object(r.a)().mark((function e(t){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(y.a)(f.b,t);case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),new s.a("unsupported-projection","Projection not supported",{spatialReference:t});case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()}]),e}()},569:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(19),a=n(534),i=n(90);function u(){u=function(e,t){return new n(e,void 0,t)};var e=RegExp.prototype,t=new WeakMap;function n(e,r,i){var u=new RegExp(e,r);return t.set(u,i||t.get(e)),Object(a.a)(u,n.prototype)}function o(e,n){var r=t.get(n);return Object.keys(r).reduce((function(t,n){var a=r[n];if("number"==typeof a)t[n]=e[a];else{for(var i=0;void 0===e[a[i]]&&i+1<a.length;)i++;t[n]=e[a[i]]}return t}),Object.create(null))}return Object(i.a)(n,RegExp),n.prototype.exec=function(t){var n=e.exec.call(this,t);if(n){n.groups=o(n,this);var r=n.indices;r&&(r.groups=o(r,this))}return n},n.prototype[Symbol.replace]=function(n,a){if("string"==typeof a){var i=t.get(this);return e[Symbol.replace].call(this,n,a.replace(/\$<([^>]+)>/g,(function(e,t){var n=i[t];return"$"+(Array.isArray(n)?n.join("$"):n)})))}if("function"==typeof a){var u=this;return e[Symbol.replace].call(this,n,(function(){var e=arguments;return"object"!=Object(r.a)(e[e.length-1])&&(e=[].slice.call(e)).push(o(e,u)),a.apply(this,e)}))}return e[Symbol.replace].call(this,n,a)},u.apply(this,arguments)}},637:function(e,t,n){"use strict";n.d(t,"a",(function(){return T})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return S})),n.d(t,"d",(function(){return F}));var r=n(99),a=n(4),i=n(92),u=n(101),o=n(335),c=n(169),s=n(195),l=Object(a.a)().mark(b),p=Object(a.a)().mark(y),f={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function d(e){return f[e]}function b(e){var t,n,r;return Object(a.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:a.t0=e.type,a.next="Feature"===a.t0?3:"FeatureCollection"===a.t0?6:25;break;case 3:return a.next=5,e;case 5:return a.abrupt("break",25);case 6:t=Object(i.a)(e.features),a.prev=7,t.s();case 9:if((n=t.n()).done){a.next=17;break}if(r=n.value,a.t1=r,!a.t1){a.next=15;break}return a.next=15,r;case 15:a.next=9;break;case 17:a.next=22;break;case 19:a.prev=19,a.t2=a.catch(7),t.e(a.t2);case 22:return a.prev=22,t.f(),a.finish(22);case 25:case"end":return a.stop()}}),l,null,[[7,19,22,25]])}function y(e){var t,n,r,u,o,c,s,l,f;return Object(a.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!e){a.next=57;break}a.t0=e.type,a.next="Point"===a.t0?4:"LineString"===a.t0||"MultiPoint"===a.t0?7:"MultiLineString"===a.t0||"Polygon"===a.t0?9:"MultiPolygon"===a.t0?26:57;break;case 4:return a.next=6,e.coordinates;case 6:return a.abrupt("break",57);case 7:return a.delegateYield(e.coordinates,"t1",8);case 8:return a.abrupt("break",57);case 9:t=Object(i.a)(e.coordinates),a.prev=10,t.s();case 12:if((n=t.n()).done){a.next=17;break}return r=n.value,a.delegateYield(r,"t2",15);case 15:a.next=12;break;case 17:a.next=22;break;case 19:a.prev=19,a.t3=a.catch(10),t.e(a.t3);case 22:return a.prev=22,t.f(),a.finish(22);case 25:return a.abrupt("break",57);case 26:u=Object(i.a)(e.coordinates),a.prev=27,u.s();case 29:if((o=u.n()).done){a.next=49;break}c=o.value,s=Object(i.a)(c),a.prev=32,s.s();case 34:if((l=s.n()).done){a.next=39;break}return f=l.value,a.delegateYield(f,"t4",37);case 37:a.next=34;break;case 39:a.next=44;break;case 41:a.prev=41,a.t5=a.catch(32),s.e(a.t5);case 44:return a.prev=44,s.f(),a.finish(44);case 47:a.next=29;break;case 49:a.next=54;break;case 51:a.prev=51,a.t6=a.catch(27),u.e(a.t6);case 54:return a.prev=54,u.f(),a.finish(54);case 57:case"end":return a.stop()}}),p,null,[[10,19,22,25],[27,51,54,57],[32,41,44,47]])}function v(e){for(var t=0,n=0;n<e.length;n++){var r=e[n],a=e[(n+1)%e.length];t+=r[0]*a[1]-a[0]*r[1]}return t<=0}function h(e){var t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function m(e,t,n){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,n){return O(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function(e,t,n){var r,a=Object(i.a)(t.coordinates);try{for(a.s();!(r=a.n()).done;){O(e,r.value,n)}}catch(u){a.e(u)}finally{a.f()}return e}(e,t,n);case"MultiPolygon":return function(e,t,n){var r,a=Object(i.a)(t.coordinates);try{for(a.s();!(r=a.n()).done;){var u=r.value;g(e,u[0],n);for(var o=1;o<u.length;o++)j(e,u[o],n)}}catch(c){a.e(c)}finally{a.f()}return e}(e,t,n);case"Point":return function(e,t,n){return x(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function(e,t,n){var r=t.coordinates;g(e,r[0],n);for(var a=1;a<r.length;a++)j(e,r[a],n);return e}(e,t,n)}}function g(e,t,n){var r=h(t);!function(e){return!v(e)}(r)?O(e,r,n):w(e,r,n)}function j(e,t,n){var r=h(t);!function(e){return v(e)}(r)?O(e,r,n):w(e,r,n)}function O(e,t,n){var r,a=Object(i.a)(t);try{for(a.s();!(r=a.n()).done;){x(e,r.value,n)}}catch(u){a.e(u)}finally{a.f()}e.lengths.push(t.length)}function w(e,t,n){for(var r=t.length-1;r>=0;r--)x(e,t[r],n);e.lengths.push(t.length)}function x(e,t,n){var a=Object(r.a)(t,3),i=a[0],u=a[1],o=a[2];e.coords.push(i,u),n.hasZ&&e.coords.push(o||0)}function k(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function F(e){if(!e)throw new u.a("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new u.a("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});var t=e.crs;if(t){var n="string"==typeof t?t:"name"===t.type?t.properties.name:"EPSG"===t.type?t.properties.code:null,r=new RegExp(".*(CRS84H?|4326)$","i");if(!n||!r.test(n))throw new u.a("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}}function S(e){var t,n,r,a,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=[],c=new Set,l=new Set,p=!1,f=null,v=!1,h=u.geometryType,m=void 0===h?null:h,g=!1,j=Object(i.a)(b(e));try{var O=function(){var e=a.value,t=e.geometry,n=e.properties,u=e.id;if((!t||(m||(m=d(t.type)),d(t.type)===m))&&(p||(p=function(e){var t,n=Object(i.a)(e);try{for(n.s();!(t=n.n()).done;)if(t.value.length>2)return!0}catch(r){n.e(r)}finally{n.f()}return!1}(y(t))),v||(v=null!=u)&&(r=typeof u,n&&(f=Object.keys(n).filter((function(e){return n[e]===u})))),n&&f&&v&&null!=u&&(f.length>1?f=f.filter((function(e){return n[e]===u})):1===f.length&&(f=n[f[0]]===u?f:[])),!g&&n)){var b=!0;for(var h in n)if(!c.has(h)){var j=n[h];if(null!=j){var O=k(j);if("unknown"!==O){l.delete(h),c.add(h);var w=Object(s.y)(h);w&&o.push({name:w,alias:h,type:O})}else l.add(h)}else b=!1,l.add(h)}g=b}};for(j.s();!(a=j.n()).done;)O()}catch(T){j.e(T)}finally{j.f()}var w=null!==(t=Object(s.y)(1===(null===(n=f)||void 0===n?void 0:n.length)&&f[0]||null))&&void 0!==t?t:void 0;if(w){var x,F=Object(i.a)(o);try{for(F.s();!(x=F.n()).done;){var S=x.value;if(S.name===w&&Object(s.v)(S)){S.type="esriFieldTypeOID";break}}}catch(T){F.e(T)}finally{F.f()}}return{fields:o,geometryType:m,hasZ:p,objectIdFieldName:w,objectIdFieldType:r,unknownFields:Array.from(l)}}function T(e,t){return Array.from(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(a.a)().mark((function n(){var r,u,s,l,p,f,b,y,v,h,g,j;return Object(a.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=t.geometryType,u=t.objectIdField,s=Object(i.a)(e),n.prev=2,s.s();case 4:if((l=s.n()).done){n.next=17;break}if(f=l.value,b=f.geometry,y=f.properties,v=f.id,!b||d(b.type)===r){n.next=9;break}return n.abrupt("continue",15);case 9:return h=y||{},g=void 0,u&&(g=h[u],null==v||g||(h[u]=g=v)),j=new o.a(b?m(new c.a,b,t):null,h,null,null!==(p=g)&&void 0!==p?p:void 0),n.next=15,j;case 15:n.next=4;break;case 17:n.next=22;break;case 19:n.prev=19,n.t0=n.catch(2),s.e(n.t0);case 22:return n.prev=22,s.f(),n.finish(22);case 25:case"end":return n.stop()}}),n,null,[[2,19,22,25]])}))()}(b(e),t))}}}]);
//# sourceMappingURL=195.2c058d01.chunk.js.map