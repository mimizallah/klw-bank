(this["webpackJsonpklw-bank"]=this["webpackJsonpklw-bank"]||[]).push([[50],{1084:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(88),a=r(89),o=Object(n.a)((function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r;Object(a.a)(this,e),this.data=t,this.size=r,this.exclusive=n,this.stride=o}))},1171:function(e,t,r){"use strict";function n(){var e=new Float32Array(4);return e[3]=1,e}function a(e){var t=new Float32Array(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function o(e,t){return new Float32Array(e,t,4)}r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return n}));Object.freeze(Object.defineProperty({__proto__:null,clone:a,create:n,createView:o,fromValues:function(e,t,r,n){var a=new Float32Array(4);return a[0]=e,a[1]=t,a[2]=r,a[3]=n,a}},Symbol.toStringTag,{value:"Module"}))},1172:function(e,t,r){"use strict";r.d(t,"a",(function(){return v})),r.d(t,"b",(function(){return f})),r.d(t,"c",(function(){return s}));var n=r(101),a=!0,o={identifierOffset:0,identifierLength:10,versionOffset:10,checksumOffset:12,byteCount:16};function i(e,t,r){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,r+o.identifierOffset,o.identifierLength)),version:t.getUint16(r+o.versionOffset,a),checksum:t.getUint32(r+o.checksumOffset,a)}}var u={sizeLo:0,sizeHi:4,minX:8,minY:16,minZ:24,maxX:32,maxY:40,maxZ:48,errorX:56,errorY:64,errorZ:72,count:80,reserved:84,byteCount:88};function c(e,t){return{sizeLo:e.getUint32(t+u.sizeLo,a),sizeHi:e.getUint32(t+u.sizeHi,a),minX:e.getFloat64(t+u.minX,a),minY:e.getFloat64(t+u.minY,a),minZ:e.getFloat64(t+u.minZ,a),maxX:e.getFloat64(t+u.maxX,a),maxY:e.getFloat64(t+u.maxY,a),maxZ:e.getFloat64(t+u.maxZ,a),errorX:e.getFloat64(t+u.errorX,a),errorY:e.getFloat64(t+u.errorY,a),errorZ:e.getFloat64(t+u.errorZ,a),count:e.getUint32(t+u.count,a),reserved:e.getUint32(t+u.reserved,a)}}function s(e){var t=new DataView(e,0),r=0,a=i(e,t,r),s=a.identifier,l=a.version;if(r+=o.byteCount,"LEPCC     "!==s)throw new n.a("lepcc-decode-error","Bad identifier");if(l>1)throw new n.a("lepcc-decode-error","Unknown version");var b=c(t,r);if(r+=u.byteCount,b.sizeHi*Math.pow(2,32)+b.sizeLo!==e.byteLength)throw new n.a("lepcc-decode-error","Bad size");var d=new Float64Array(3*b.count),f=[],O=[],y=[],v=[];if(r=p(e,r,f),r=p(e,r,O),r=p(e,r,y),(r=p(e,r,v))!==e.byteLength)throw new n.a("lepcc-decode-error","Bad length");for(var h=0,j=0,g=0;g<f.length;g++){j+=f[g];for(var m=0,I=0;I<O[g];I++){m+=y[h];var w=v[h];d[3*h]=Math.min(b.maxX,b.minX+2*b.errorX*m),d[3*h+1]=Math.min(b.maxY,b.minY+2*b.errorY*j),d[3*h+2]=Math.min(b.maxZ,b.minZ+2*b.errorZ*w),h++}}return{errorX:b.errorX,errorY:b.errorY,errorZ:b.errorZ,result:d}}function p(e,t,r){var n=[];t=l(e,t,n);for(var a=[],o=0;o<n.length;o++){a.length=0,t=l(e,t,a);for(var i=0;i<a.length;i++)r.push(a[i]+n[o])}return t}function l(e,t,r){var o=new DataView(e,t),i=o.getUint8(0),u=31&i,c=!!(32&i),s=(192&i)>>6,p=0;if(0===s)p=o.getUint32(1,a),t+=5;else if(1===s)p=o.getUint16(1,a),t+=3;else{if(2!==s)throw new n.a("lepcc-decode-error","Bad count type");p=o.getUint8(1),t+=2}if(c)throw new n.a("lepcc-decode-error","LUT not implemented");for(var l=Math.ceil(p*u/8),b=new Uint8Array(e,t,l),d=0,f=0,O=0,y=-1>>>32-u,v=0;v<p;v++){for(;f<u;)d|=b[O]<<f,f+=8,O+=1;r[v]=d&y,d>>>=u,(f-=u)+u>32&&(d|=b[O-1]>>8-f)}return t+O}var b={sizeLo:0,sizeHi:4,count:8,colorMapCount:12,lookupMethod:14,compressionMethod:15,byteCount:16};function d(e,t){return{sizeLo:e.getUint32(t+b.sizeLo,a),sizeHi:e.getUint32(t+b.sizeHi,a),count:e.getUint32(t+b.count,a),colorMapCount:e.getUint16(t+b.colorMapCount,a),lookupMethod:e.getUint8(t+b.lookupMethod),compressionMethod:e.getUint8(t+b.compressionMethod)}}function f(e){var t=new DataView(e,0),r=0,a=i(e,t,r),u=a.identifier,c=a.version;if(r+=o.byteCount,"ClusterRGB"!==u)throw new n.a("lepcc-decode-error","Bad identifier");if(c>1)throw new n.a("lepcc-decode-error","Unknown version");var s=d(t,r);if(r+=b.byteCount,s.sizeHi*Math.pow(2,32)+s.sizeLo!==e.byteLength)throw new n.a("lepcc-decode-error","Bad size");if((2===s.lookupMethod||1===s.lookupMethod)&&0===s.compressionMethod){if(3*s.colorMapCount+s.count+r!==e.byteLength||s.colorMapCount>256)throw new n.a("lepcc-decode-error","Bad count");for(var p=new Uint8Array(e,r,3*s.colorMapCount),l=new Uint8Array(e,r+3*s.colorMapCount,s.count),f=new Uint8Array(3*s.count),O=0;O<s.count;O++){var y=l[O];f[3*O]=p[3*y],f[3*O+1]=p[3*y+1],f[3*O+2]=p[3*y+2]}return f}if(0===s.lookupMethod&&0===s.compressionMethod){if(3*s.count+r!==e.byteLength||0!==s.colorMapCount)throw new n.a("lepcc-decode-error","Bad count");return new Uint8Array(e,r).slice()}if(s.lookupMethod<=2&&1===s.compressionMethod){if(r+3!==e.byteLength||1!==s.colorMapCount)throw new n.a("lepcc-decode-error","Bad count");for(var v=t.getUint8(r),h=t.getUint8(r+1),j=t.getUint8(r+2),g=new Uint8Array(3*s.count),m=0;m<s.count;m++)g[3*m]=v,g[3*m+1]=h,g[3*m+2]=j;return g}throw new n.a("lepcc-decode-error","Bad method "+s.lookupMethod+","+s.compressionMethod)}var O={sizeLo:0,sizeHi:4,count:8,scaleFactor:12,bitsPerPoint:14,reserved:15,byteCount:16};function y(e,t){return{sizeLo:e.getUint32(t+O.sizeLo,a),sizeHi:e.getUint32(t+O.sizeHi,a),count:e.getUint32(t+O.count,a),scaleFactor:e.getUint16(t+O.scaleFactor,a),bitsPerPoint:e.getUint8(t+O.bitsPerPoint),reserved:e.getUint8(t+O.reserved)}}function v(e){var t=new DataView(e,0),r=0,a=i(e,t,r),u=a.identifier,c=a.version;if(r+=o.byteCount,"Intensity "!==u)throw new n.a("lepcc-decode-error","Bad identifier");if(c>1)throw new n.a("lepcc-decode-error","Unknown version");var s=y(t,r);if(r+=O.byteCount,s.sizeHi*Math.pow(2,32)+s.sizeLo!==e.byteLength)throw new n.a("lepcc-decode-error","Bad size");var p=new Uint16Array(s.count);if(8===s.bitsPerPoint){if(s.count+r!==e.byteLength)throw new n.a("lepcc-decode-error","Bad size");for(var b=new Uint8Array(e,r,s.count),d=0;d<s.count;d++)p[d]=b[d]*s.scaleFactor}else if(16===s.bitsPerPoint){if(2*s.count+r!==e.byteLength)throw new n.a("lepcc-decode-error","Bad size");for(var f=new Uint16Array(e,r,s.count),v=0;v<s.count;v++)p[v]=f[v]*s.scaleFactor}else{var h=[];if(l(e,r,h)!==e.byteLength)throw new n.a("lepcc-decode-error","Bad size");for(var j=0;j<s.count;j++)p[j]=h[j]*s.scaleFactor}return p}},1222:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return O})),r.d(t,"c",(function(){return b})),r.d(t,"d",(function(){return v}));var n=r(88),a=r(89),o=r(90),i=r(91),u=r(94),c=r(105),s=r(97),p=(r(96),r(98),r(93),r(138)),l=r(95),b=function(e){Object(o.a)(r,e);var t=Object(i.a)(r);function r(){var e;return Object(a.a)(this,r),(e=t.apply(this,arguments)).nodesPerPage=null,e.rootIndex=0,e.lodSelectionMetricType=null,e}return Object(n.a)(r)}(c.a);Object(u.a)([Object(s.b)({type:Number})],b.prototype,"nodesPerPage",void 0),Object(u.a)([Object(s.b)({type:Number})],b.prototype,"rootIndex",void 0),Object(u.a)([Object(s.b)({type:String})],b.prototype,"lodSelectionMetricType",void 0),b=Object(u.a)([Object(l.a)("esri.layer.support.I3SNodePageDefinition")],b);var d=function(e){Object(o.a)(r,e);var t=Object(i.a)(r);function r(){var e;return Object(a.a)(this,r),(e=t.apply(this,arguments)).factor=1,e}return Object(n.a)(r)}(c.a);Object(u.a)([Object(s.b)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],d.prototype,"id",void 0),Object(u.a)([Object(s.b)({type:Number})],d.prototype,"factor",void 0),d=Object(u.a)([Object(l.a)("esri.layer.support.I3SMaterialTexture")],d);var f=function(e){Object(o.a)(r,e);var t=Object(i.a)(r);function r(){var e;return Object(a.a)(this,r),(e=t.apply(this,arguments)).baseColorFactor=[1,1,1,1],e.baseColorTexture=null,e.metallicRoughnessTexture=null,e.metallicFactor=1,e.roughnessFactor=1,e}return Object(n.a)(r)}(c.a);Object(u.a)([Object(s.b)({type:[Number]})],f.prototype,"baseColorFactor",void 0),Object(u.a)([Object(s.b)({type:d})],f.prototype,"baseColorTexture",void 0),Object(u.a)([Object(s.b)({type:d})],f.prototype,"metallicRoughnessTexture",void 0),Object(u.a)([Object(s.b)({type:Number})],f.prototype,"metallicFactor",void 0),Object(u.a)([Object(s.b)({type:Number})],f.prototype,"roughnessFactor",void 0),f=Object(u.a)([Object(l.a)("esri.layer.support.I3SMaterialPBRMetallicRoughness")],f);var O=function(e){Object(o.a)(r,e);var t=Object(i.a)(r);function r(){var e;return Object(a.a)(this,r),(e=t.apply(this,arguments)).alphaMode="opaque",e.alphaCutoff=.25,e.doubleSided=!1,e.cullFace="none",e.normalTexture=null,e.occlusionTexture=null,e.emissiveTexture=null,e.emissiveFactor=null,e.pbrMetallicRoughness=null,e}return Object(n.a)(r)}(c.a);Object(u.a)([Object(p.a)({opaque:"opaque",mask:"mask",blend:"blend"})],O.prototype,"alphaMode",void 0),Object(u.a)([Object(s.b)({type:Number})],O.prototype,"alphaCutoff",void 0),Object(u.a)([Object(s.b)({type:Boolean})],O.prototype,"doubleSided",void 0),Object(u.a)([Object(p.a)({none:"none",back:"back",front:"front"})],O.prototype,"cullFace",void 0),Object(u.a)([Object(s.b)({type:d})],O.prototype,"normalTexture",void 0),Object(u.a)([Object(s.b)({type:d})],O.prototype,"occlusionTexture",void 0),Object(u.a)([Object(s.b)({type:d})],O.prototype,"emissiveTexture",void 0),Object(u.a)([Object(s.b)({type:[Number]})],O.prototype,"emissiveFactor",void 0),Object(u.a)([Object(s.b)({type:f})],O.prototype,"pbrMetallicRoughness",void 0),O=Object(u.a)([Object(l.a)("esri.layer.support.I3SMaterialDefinition")],O);var y=function(e){Object(o.a)(r,e);var t=Object(i.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(n.a)(r)}(c.a);Object(u.a)([Object(s.b)({type:String,json:{read:{source:["name","index"],reader:function(e,t){return null!=e?e:"".concat(t.index)}}}})],y.prototype,"name",void 0),Object(u.a)([Object(p.a)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],y.prototype,"format",void 0),y=Object(u.a)([Object(l.a)("esri.layer.support.I3STextureFormat")],y);var v=function(e){Object(o.a)(r,e);var t=Object(i.a)(r);function r(){var e;return Object(a.a)(this,r),(e=t.apply(this,arguments)).atlas=!1,e}return Object(n.a)(r)}(c.a);Object(u.a)([Object(s.b)({type:[y]})],v.prototype,"formats",void 0),Object(u.a)([Object(s.b)({type:Boolean})],v.prototype,"atlas",void 0),v=Object(u.a)([Object(l.a)("esri.layer.support.I3STextureSetDefinition")],v);var h=function(e){Object(o.a)(r,e);var t=Object(i.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(n.a)(r)}(c.a);Object(u.a)([Object(p.a)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],h.prototype,"type",void 0),Object(u.a)([Object(s.b)({type:Number})],h.prototype,"component",void 0),h=Object(u.a)([Object(l.a)("esri.layer.support.I3SGeometryAttribute")],h);var j=function(e){Object(o.a)(r,e);var t=Object(i.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(n.a)(r)}(c.a);Object(u.a)([Object(p.a)({draco:"draco"})],j.prototype,"encoding",void 0),Object(u.a)([Object(s.b)({type:[String]})],j.prototype,"attributes",void 0),j=Object(u.a)([Object(l.a)("esri.layer.support.I3SGeometryCompressedAttributes")],j);var g=function(e){Object(o.a)(r,e);var t=Object(i.a)(r);function r(){var e;return Object(a.a)(this,r),(e=t.apply(this,arguments)).offset=0,e}return Object(n.a)(r)}(c.a);Object(u.a)([Object(s.b)({type:Number})],g.prototype,"offset",void 0),Object(u.a)([Object(s.b)({type:h})],g.prototype,"position",void 0),Object(u.a)([Object(s.b)({type:h})],g.prototype,"normal",void 0),Object(u.a)([Object(s.b)({type:h})],g.prototype,"uv0",void 0),Object(u.a)([Object(s.b)({type:h})],g.prototype,"color",void 0),Object(u.a)([Object(s.b)({type:h})],g.prototype,"uvRegion",void 0),Object(u.a)([Object(s.b)({type:h})],g.prototype,"featureId",void 0),Object(u.a)([Object(s.b)({type:h})],g.prototype,"faceRange",void 0),Object(u.a)([Object(s.b)({type:j})],g.prototype,"compressedAttributes",void 0),g=Object(u.a)([Object(l.a)("esri.layer.support.I3SGeometryBuffer")],g);var m=function(e){Object(o.a)(r,e);var t=Object(i.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(n.a)(r)}(c.a);Object(u.a)([Object(p.a)({triangle:"triangle"})],m.prototype,"topology",void 0),Object(u.a)([Object(s.b)()],m.prototype,"geometryBuffers",void 0),m=Object(u.a)([Object(l.a)("esri.layer.support.I3SGeometryDefinition")],m)},1223:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o}));var n,a;r(141);function o(e){switch(e){case"multiply":default:return n.Multiply;case"ignore":return n.Ignore;case"replace":return n.Replace;case"tint":return n.Tint}}(a=n||(n={}))[a.Multiply=1]="Multiply",a[a.Ignore=2]="Ignore",a[a.Replace=3]="Replace",a[a.Tint=4]="Tint"},1327:function(e,t,r){"use strict";r.d(t,"a",(function(){return v})),r.d(t,"b",(function(){return f})),r.d(t,"c",(function(){return j}));var n=r(1),a=r(92),o=r(101),i=r(116),u=r(102),c=r(1172),s=r(336),p=u.a.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function l(e,t,r){for(var n="",a=0;a<r;){var i=e[t+a];if(i<128)n+=String.fromCharCode(i),a++;else if(i>=192&&i<224){if(a+1>=r)throw new o.a("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");var u=(31&i)<<6|63&e[t+a+1];n+=String.fromCharCode(u),a+=2}else if(i>=224&&i<240){if(a+2>=r)throw new o.a("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");var c=(15&i)<<12|(63&e[t+a+1])<<6|63&e[t+a+2];n+=String.fromCharCode(c),a+=3}else{if(!(i>=240&&i<248))throw new o.a("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");if(a+3>=r)throw new o.a("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");var s=(7&i)<<18|(63&e[t+a+1])<<12|(63&e[t+a+2])<<6|63&e[t+a+3];if(s>=65536){var p=55296+(s-65536>>10),l=56320+(1023&s);n+=String.fromCharCode(p,l)}else n+=String.fromCharCode(s);a+=4}}return n}function b(e,t){for(var r={byteOffset:0,byteCount:0,fields:Object.create(null)},n=0,a=0;a<t.length;a++){var o=t[a],i=o.valueType||o.type,u=m[i];r.fields[o.property]=u(e,n),n+=g[i].BYTES_PER_ELEMENT}return r.byteCount=n,r}function d(e,t,r){var n,a,i=[],u=0;for(a=0;a<e;a+=1){if((n=t[a])>0){if(i.push(l(r,u,n-1)),0!==r[u+n-1])throw new o.a("string-array-error","Invalid string array: missing null termination.")}else i.push(null);u+=n}return i}function f(e,t){return new(0,g[t.valueType])(e,t.byteOffset,t.count*t.valuesPerElement)}function O(e,t,r){for(var n=null!=t.header?b(e,t.header):{byteOffset:0,byteCount:0,fields:{count:r}},a={header:n,byteOffset:n.byteCount,byteCount:0,entries:Object.create(null)},u=n.byteCount,c=0;c<t.ordering.length;c++){var s,p,l=t.ordering[c],d=Object(i.a)(t[l]);if(d.count=null!==(s=n.fields.count)&&void 0!==s?s:0,"String"===d.valueType){if(d.byteOffset=u,d.byteCount=n.fields[l+"ByteCount"],"UTF-8"!==d.encoding)throw new o.a("unsupported-encoding","Unsupported String encoding.",{encoding:d.encoding});if(d.timeEncoding&&"ECMA_ISO8601"!==d.timeEncoding)throw new o.a("unsupported-time-encoding","Unsupported time encoding.",{timeEncoding:d.timeEncoding})}else{if(!I(d.valueType))throw new o.a("unsupported-value-type","Unsupported binary valueType",{valueType:d.valueType});var f=w(d.valueType);u+=u%f!=0?f-u%f:0,d.byteOffset=u,d.byteCount=f*d.valuesPerElement*d.count}u+=null!==(p=d.byteCount)&&void 0!==p?p:0,a.entries[l]=d}return a.byteCount=u-a.byteOffset,a}function y(e,t,r){if(t!==e&&p.error("Invalid ".concat(r," buffer size\n expected: ").concat(e,", actual: ").concat(t,")")),t<e)throw new o.a("buffer-too-small","Binary buffer is too small",{expectedSize:e,actualSize:t})}function v(e,t){var r,o=b(e,t&&t.header),i=o.byteCount,u={isDraco:!1,header:o,byteOffset:o.byteCount,byteCount:0,vertexAttributes:{}},c=o.fields,s=null!=c.vertexCount?c.vertexCount:c.count,p=Object(a.a)(t.ordering);try{for(p.s();!(r=p.n()).done;){var l=r.value;if(t.vertexAttributes[l]){var d=Object(n.a)(Object(n.a)({},t.vertexAttributes[l]),{},{byteOffset:i,count:s}),f=h[l]||"_"+l;u.vertexAttributes[f]=d,i+=w(d.valueType)*d.valuesPerElement*s}}}catch(U){p.e(U)}finally{p.f()}var O=c.faceCount;if(t.faces&&O){u.faces={};var v,j=Object(a.a)(t.ordering);try{for(j.s();!(v=j.n()).done;){var g=v.value;if(t.faces[g]){var m=Object(n.a)(Object(n.a)({},t.faces[g]),{},{byteOffset:i,count:O});u.faces[g]=m,i+=w(m.valueType)*m.valuesPerElement*O}}}catch(U){j.e(U)}finally{j.f()}}var I=c.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&I){u.featureAttributes={};var T,S=Object(a.a)(t.featureAttributeOrder);try{for(S.s();!(T=S.n()).done;){var A=T.value;if(t.featureAttributes[A]){var E=Object(n.a)(Object(n.a)({},t.featureAttributes[A]),{},{byteOffset:i,count:I});u.featureAttributes[A]=E,i+=("UInt64"===E.valueType?8:w(E.valueType))*E.valuesPerElement*I}}}catch(U){S.e(U)}finally{S.f()}}return y(i,e.byteLength,"geometry"),u.byteCount=i-u.byteOffset,u}var h={position:s.a.POSITION,normal:s.a.NORMAL,color:s.a.COLOR,uv0:s.a.UV0,region:s.a.UVREGION};function j(e,t,r){if("lepcc-rgb"===e.encoding)return Object(c.b)(t);if("lepcc-intensity"===e.encoding)return Object(c.a)(t);if(null!=e.encoding&&""!==e.encoding)throw new o.a("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");e["attributeByteCounts "]&&!e.attributeByteCounts&&(p.warn("Warning: Trailing space in 'attributeByteCounts '."),e.attributeByteCounts=e["attributeByteCounts "]),"ObjectIds"===e.ordering[0]&&e.hasOwnProperty("objectIds")&&(p.warn("Warning: Case error in objectIds"),e.ordering[0]="objectIds");var n=O(t,e,r);y(n.byteOffset+n.byteCount,t.byteLength,"attribute");var a=n.entries.attributeValues||n.entries.objectIds;if(a){if("String"===a.valueType){var i=n.entries.attributeByteCounts,u=f(t,i),s=function(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}(t,a);return a.timeEncoding?function(e,t,r){return d(e,t,r).map((function(e){var t=e?Date.parse(e):null;return t&&!Number.isNaN(t)?t:null}))}(i.count,u,s):d(i.count,u,s)}return f(t,a)}throw new o.a("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}var g={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},m={Float32:function(e,t){return new DataView(e,0).getFloat32(t,!0)},Float64:function(e,t){return new DataView(e,0).getFloat64(t,!0)},UInt8:function(e,t){return new DataView(e,0).getUint8(t)},Int8:function(e,t){return new DataView(e,0).getInt8(t)},UInt16:function(e,t){return new DataView(e,0).getUint16(t,!0)},Int16:function(e,t){return new DataView(e,0).getInt16(t,!0)},UInt32:function(e,t){return new DataView(e,0).getUint32(t,!0)},Int32:function(e,t){return new DataView(e,0).getInt32(t,!0)}};function I(e){return g.hasOwnProperty(e)}function w(e){return I(e)?g[e].BYTES_PER_ELEMENT:0}},1734:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n={analytics:{supportsCacheHint:!1},attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1,supportsCacheHint:!1,supportsResize:!1},data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsAsyncApplyEdits:!1},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsCompactGeometry:!1,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsStatistics:!1,tileMaxRecordCount:0}}},1736:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var n=r(99),a=r(4),o=r(12),i=r(89),u=r(88),c=r(277),s=r(129),p=r(110),l=r(412),b=r(197),d=r(496),f=function(){function e(t,r,n,a){var o;Object(i.a)(this,e),this._parsedUrl=t,this._portalItem=r,this._apiKey=n,this.signal=a,this._rootDocument=null;var u=null===(o=this._parsedUrl)||void 0===o?void 0:o.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);u&&(this._urlParts={root:u[1],layerId:parseInt(u[2],10)})}return Object(u.a)(e,[{key:"fetch",value:function(){var e=Object(o.a)(Object(a.a)().mark((function e(){var t,r,n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._urlParts){e.next=2;break}return e.abrupt("return",null);case 2:if(null===(t=this._portalItem)||void 0===t){e.next=6;break}e.t0=t,e.next=9;break;case 6:return e.next=8,this._portalItemFromServiceItemId();case 8:e.t0=e.sent;case 9:if(null!=(r=e.t0)){e.next=12;break}return e.abrupt("return",this._loadFromUrl());case 12:return e.next=14,this._findAndLoadRelatedPortalItem(r);case 14:return n=e.sent,e.abrupt("return",null==n?null:this._loadFeatureLayerFromPortalItem(n));case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchPortalItem",value:function(){var e=Object(o.a)(Object(a.a)().mark((function e(){var t,r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._urlParts){e.next=2;break}return e.abrupt("return",null);case 2:if(null===(t=this._portalItem)||void 0===t){e.next=6;break}e.t0=t,e.next=9;break;case 6:return e.next=8,this._portalItemFromServiceItemId();case 8:e.t0=e.sent;case 9:return r=e.t0,e.abrupt("return",null==r?null:this._findAndLoadRelatedPortalItem(r));case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_fetchRootDocument",value:function(){var e=Object(o.a)(Object(a.a)().mark((function e(){var t,r,n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==this._rootDocument){e.next=2;break}return e.abrupt("return",this._rootDocument);case 2:if(null!=this._urlParts){e.next=4;break}return e.abrupt("return",(this._rootDocument={},{}));case 4:return t={query:{f:"json",token:this._apiKey},responseType:"json",signal:this.signal},r="".concat(this._urlParts.root,"/SceneServer"),e.prev=5,e.next=8,Object(s.default)(r,t);case 8:n=e.sent,this._rootDocument=n.data,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),this._rootDocument={};case 15:return e.abrupt("return",this._rootDocument);case 16:case"end":return e.stop()}}),e,this,[[5,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"_fetchServiceOwningPortalUrl",value:function(){var e=Object(o.a)(Object(a.a)().mark((function e(){var t,r,n,o,i;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=null===(t=this._parsedUrl)||void 0===t?void 0:t.path,null===(n=r?null===c.c||void 0===c.c?void 0:c.c.findServerInfo(r):null)||void 0===n||!n.owningSystemUrl){e.next=3;break}return e.abrupt("return",n.owningSystemUrl);case 3:return o=r?r.replace(/(.*\/rest)\/.*/i,"$1")+"/info":null,e.prev=4,e.next=7,Object(s.default)(o,{query:{f:"json"},responseType:"json",signal:this.signal});case 7:if(!(i=e.sent.data.owningSystemUrl)){e.next=10;break}return e.abrupt("return",i);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),Object(p.m)(e.t0);case 15:return e.abrupt("return",null);case 16:case"end":return e.stop()}}),e,this,[[4,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"_findAndLoadRelatedPortalItem",value:function(){var e=Object(o.a)(Object(a.a)().mark((function e(t){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:this.signal});case 3:if(e.t0=e.sent.find((function(e){return"Feature Service"===e.type})),e.t0){e.next=6;break}e.t0=null;case 6:return e.abrupt("return",e.t0);case 9:return e.prev=9,e.t1=e.catch(0),e.abrupt("return",(Object(p.m)(e.t1),null));case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"_loadFeatureLayerFromPortalItem",value:function(){var e=Object(o.a)(Object(a.a)().mark((function e(t){var r,n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.load({signal:this.signal});case 2:return e.next=4,this._findMatchingAssociatedSublayerUrl(null!==(r=t.url)&&void 0!==r?r:"");case 4:return n=e.sent,e.abrupt("return",new l.default({url:n,portalItem:t}).load({signal:this.signal}));case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_loadFromUrl",value:function(){var e=Object(o.a)(Object(a.a)().mark((function e(){var t,r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._findMatchingAssociatedSublayerUrl("".concat(null===(t=this._urlParts)||void 0===t?void 0:t.root,"/FeatureServer"));case 2:return r=e.sent,e.abrupt("return",new l.default({url:r}).load({signal:this.signal}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_findMatchingAssociatedSublayerUrl",value:function(){var e=Object(o.a)(Object(a.a)().mark((function e(t){var r,o,i,u,c,p,l,b,d,f,O,y,v,h=this;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i,"$1"),i=null===(r=this._urlParts)||void 0===r?void 0:r.layerId,u=this._fetchRootDocument(),c=function(e){var t={query:{f:"json"},responseType:"json",authMode:e,signal:h.signal};return Object(s.default)(o,t)},p=c("anonymous").catch((function(){return c("no-prompt")})),e.next=7,Promise.all([p,u]);case 7:if(l=e.sent,b=Object(n.a)(l,2),d=b[0],f=b[1],O=f&&f.layers,y=d.data&&d.data.layers,Array.isArray(y)){e.next=15;break}throw new Error("expected layers array");case 15:if(!Array.isArray(O)){e.next=25;break}v=0;case 17:if(!(v<Math.min(O.length,y.length))){e.next=23;break}if(O[v].id!==i){e.next=20;break}return e.abrupt("return","".concat(o,"/").concat(y[v].id));case 20:v++,e.next=17;break;case 23:e.next=27;break;case 25:if(!(null!=i&&i<y.length)){e.next=27;break}return e.abrupt("return","".concat(o,"/").concat(y[i].id));case 27:throw new Error("could not find matching associated sublayer");case 28:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_portalItemFromServiceItemId",value:function(){var e=Object(o.a)(Object(a.a)().mark((function e(){var t,r,n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._fetchRootDocument();case 2:if(t=e.sent.serviceItemId){e.next=5;break}return e.abrupt("return",null);case 5:return r=new d.default({id:t,apiKey:this._apiKey}),e.next=8,this._fetchServiceOwningPortalUrl();case 8:return null!=(n=e.sent)&&(r.portal=new b.a({url:n})),e.prev=10,e.abrupt("return",r.load({signal:this.signal}));case 14:return e.prev=14,e.t0=e.catch(10),e.abrupt("return",(Object(p.m)(e.t0),null));case 17:case"end":return e.stop()}}),e,this,[[10,14]])})));return function(){return e.apply(this,arguments)}}()}]),e}()},1772:function(e,t,r){"use strict";r.d(t,"a",(function(){return T}));r(4),r(88),r(89),r(12);var n=r(92),a=r(129),o=(r(98),r(101),r(93),r(111),r(110)),i=r(312),u=(r(178),r(340)),c=(r(379),r(331)),s=(r(468),r(1171)),p=(r(167),r(157)),l=(r(560),r(206),r(125),r(547),r(139)),b=(r(132),r(210),r(1327));var d,f=r(1),O=(r(143),r(108),r(396));function y(e){return Object(f.a)(Object(f.a)(Object(f.a)({},v),e),{},{type:"solid"})}!function(e){e[e.INVISIBLE=0]="INVISIBLE",e[e.TRANSPARENT=1]="TRANSPARENT",e[e.OPAQUE=2]="OPAQUE"}(d||(d={}));var v={color:Object(O.d)(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:d.OPAQUE,hasSlicePlane:!1},h=(Object(O.d)(0,0,0,.2),d.OPAQUE,r(1223),r(447)),j=r(356),g=(r(428),r(392),r(1115),r(466),r(1084));Object(h.b)(),Object(p.f)(),Object(p.f)(),Object(O.c)(),Object(u.b)();function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[0,0,0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[-1,-1,-1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Object(h.b)();return{center:Object(p.d)(e),halfSize:Object(j.b)(t),quaternion:Object(s.b)(r)}}!function(){var e=new Int8Array(162),t=0,r=function(r){for(var n=0;n<r.length;n++)e[t+n]=r[n];t+=6};r([6,2,3,1,5,4]),r([0,2,3,1,5,4]),r([0,2,3,7,5,4]),r([0,1,3,2,6,4]),r([0,1,3,2,0,0]),r([0,1,5,7,3,2]),r([0,1,3,7,6,4]),r([0,1,3,7,6,2]),r([0,1,5,7,6,2]),r([0,1,5,4,6,2]),r([0,1,5,4,0,0]),r([0,1,3,7,5,4]),r([0,2,6,4,0,0]),r([0,0,0,0,0,0]),r([1,3,7,5,0,0]),r([2,3,7,6,4,0]),r([2,3,7,6,0,0]),r([2,3,1,5,7,6]),r([0,1,5,7,6,2]),r([0,1,5,7,6,4]),r([0,1,3,7,6,4]),r([4,5,7,6,2,0]),r([4,5,7,6,0,0]),r([4,5,1,3,7,6]),r([0,2,3,7,5,4]),r([6,2,3,7,5,4]),r([6,2,3,1,5,4])}();Object(p.f)(),Object(p.f)(),Object(p.f)(),Object(h.b)();var I,w;Object(l.h)();function T(e,t,r,i,u){var c,s=[],p=Object(n.a)(t);try{for(p.s();!(c=p.n()).done;){var l=c.value;if(l&&u.includes(l.name)){var d="".concat(e,"/nodes/").concat(r,"/attributes/").concat(l.key,"/0");s.push({url:d,storageInfo:l})}}}catch(f){p.e(f)}finally{p.f()}return Object(o.e)(s.map((function(e){return Object(a.default)(e.url,{responseType:"array-buffer"}).then((function(t){return Object(b.c)(e.storageInfo,t.data)}))}))).then((function(e){var t,r=[],a=Object(n.a)(i);try{for(a.s();!(t=a.n()).done;){for(var o=t.value,u={},c=0;c<e.length;c++){var p=e[c].value;null!=p&&(u[s[c].storageInfo.name]=E(p,o))}r.push(u)}}catch(f){a.e(f)}finally{a.f()}return r}))}(w=I||(I={}))[w.OUTSIDE=0]="OUTSIDE",w[w.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",w[w.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",w[w.INSIDE=3]="INSIDE";var S=-32768,A=-Math.pow(2,31);function E(e,t){if(!e)return null;var r=e[t];return Object(i.h)(e)?r===S?null:r:Object(i.i)(e)?r===A?null:r:r!=r?null:r}y({color:[0,0,0,0],opacity:0});var U=new Array(24);new g.a(U,3,!0),Object(p.f)(),Object(p.f)(),Object(u.b)();Object(c.d)(),Object(s.c)(),Object(l.h)(),Object(l.h)(),m(),Object(p.f)(),new Array(72),Object(c.d)()},336:function(e,t,r){"use strict";var n;r.d(t,"a",(function(){return n})),function(e){e.POSITION="position",e.NORMAL="normal",e.NORMALCOMPRESSED="normalCompressed",e.UV0="uv0",e.AUXPOS1="auxpos1",e.AUXPOS2="auxpos2",e.COLOR="color",e.SYMBOLCOLOR="symbolColor",e.SIZE="size",e.TANGENT="tangent",e.OFFSET="offset",e.SUBDIVISIONFACTOR="subdivisionFactor",e.COLORFEATUREATTRIBUTE="colorFeatureAttribute",e.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",e.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",e.DISTANCETOSTART="distanceToStart",e.UVMAPSPACE="uvMapSpace",e.BOUNDINGRECT="boundingRect",e.UVREGION="uvRegion",e.PROFILERIGHT="profileRight",e.PROFILEUP="profileUp",e.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",e.FEATUREVALUE="featureValue",e.MODELORIGINHI="modelOriginHi",e.MODELORIGINLO="modelOriginLo",e.MODEL="model",e.MODELNORMAL="modelNormal",e.INSTANCECOLOR="instanceColor",e.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",e.LOCALTRANSFORM="localTransform",e.GLOBALTRANSFORM="globalTransform",e.BOUNDINGSPHERE="boundingSphere",e.MODELORIGIN="modelOrigin",e.MODELSCALEFACTORS="modelScaleFactors",e.FEATUREATTRIBUTE="featureAttribute",e.STATE="state",e.LODLEVEL="lodLevel",e.POSITION0="position0",e.POSITION1="position1",e.NORMALA="normalA",e.NORMALB="normalB",e.COMPONENTINDEX="componentIndex",e.VARIANTOFFSET="variantOffset",e.VARIANTSTROKE="variantStroke",e.VARIANTEXTENSION="variantExtension",e.U8PADDING="u8padding",e.U16PADDING="u16padding",e.SIDENESS="sideness",e.START="start",e.END="end",e.UP="up",e.EXTRUDE="extrude",e.OBJECTANDLAYERIDCOLOR="objectAndLayerIdColor",e.INSTANCEOBJECTANDLAYERIDCOLOR="instanceObjectAndLayerIdColor"}(n||(n={}))},356:function(e,t,r){"use strict";function n(){return new Float32Array(3)}function a(e){var t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function o(e,t,r){var n=new Float32Array(3);return n[0]=e,n[1]=t,n[2]=r,n}function i(e,t){return new Float32Array(e,t,3)}function u(){return n()}function c(){return o(1,1,1)}function s(){return o(1,0,0)}function p(){return o(0,1,0)}function l(){return o(0,0,1)}r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return n})),r.d(t,"d",(function(){return o}));var b=u(),d=c(),f=s(),O=p(),y=l();Object.freeze(Object.defineProperty({__proto__:null,ONES:d,UNIT_X:f,UNIT_Y:O,UNIT_Z:y,ZEROS:b,clone:a,create:n,createView:i,fromValues:o,ones:c,unitX:s,unitY:p,unitZ:l,zeros:u},Symbol.toStringTag,{value:"Module"}))},459:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return u}));var n=r(4),a=r(112),o=r(12),i=r(195);function u(e){return c.apply(this,arguments)}function c(){return c=Object(o.a)(Object(n.a)().mark((function e(t){var r,o,u,c,s,p,l,b,d,f,O,y=arguments;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=(u=y.length>1&&void 0!==y[1]?y[1]:t.popupTemplate)){e.next=3;break}return e.abrupt("return",[]);case 3:return e.next=5,u.getRequiredFields(t.fieldsIndex);case 5:if(c=e.sent,s=u.lastEditInfoEnabled,p=t.objectIdField,l=t.typeIdField,b=t.globalIdField,d=t.relationships,!c.includes("*")){e.next=13;break}return e.abrupt("return",["*"]);case 13:if(!s){e.next=19;break}return e.next=16,Object(i.p)(t);case 16:e.t0=e.sent,e.next=20;break;case 19:e.t0=[];case 20:return f=e.t0,O=Object(i.l)(t.fieldsIndex,[].concat(Object(a.a)(c),Object(a.a)(f))),e.abrupt("return",(l&&O.push(l),O&&p&&null!==(r=t.fieldsIndex)&&void 0!==r&&r.has(p)&&!O.includes(p)&&O.push(p),O&&b&&null!==(o=t.fieldsIndex)&&void 0!==o&&o.has(b)&&!O.includes(b)&&O.push(b),d&&d.forEach((function(e){var r,n=e.keyField;O&&n&&(null===(r=t.fieldsIndex)||void 0===r?void 0:r.has(n))&&!O.includes(n)&&O.push(n)})),O));case 23:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}function s(e,t){return e.popupTemplate?e.popupTemplate:null!=t&&t.defaultPopupTemplateEnabled&&null!=e.defaultPopupTemplate?e.defaultPopupTemplate:null}},547:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(560),a=r(125),o=r(132),i=new a.a(n.a),u=new a.a(n.b),c=new a.a(n.c);new a.a(n.d);function s(e){return e&&(Object(o.i)(e)||Object(o.d)(e,u))?u:e&&(Object(o.j)(e)||Object(o.d)(e,c))?c:i}}}]);
//# sourceMappingURL=50.2d3a9094.chunk.js.map