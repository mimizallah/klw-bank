(this["webpackJsonpklw-bank"]=this["webpackJsonpklw-bank"]||[]).push([[53],{175:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(246);function a(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return new n.a(e,r+t.shaders.vertexShader,r+t.shaders.fragmentShader,t.attributes)}},2194:function(e,t,r){"use strict";r.r(t);var n=r(131);r.d(t,"BufferObject",(function(){return n.a}));var a=r(186);r.d(t,"FramebufferObject",(function(){return a.a}));var o=r(246);r.d(t,"Program",(function(){return o.a}));var i=r(906);r.d(t,"ProgramCache",(function(){return i.a}));var s=r(253);r.d(t,"Renderbuffer",(function(){return s.a}));var c=r(250);r.d(t,"ShaderCompiler",(function(){return c.a}));var l=r(148);r.d(t,"Texture",(function(){return l.a}));var u=r(134);r.d(t,"VertexArrayObject",(function(){return u.a}));var f=r(800);r.d(t,"glslifyDefineMap",(function(){return f.a}));var h=r(175);r.d(t,"createProgram",(function(){return h.a}));var d=r(185);r.d(t,"createContextForView",(function(){return d.c}))},246:function(e,t,r){"use strict";r.d(t,"a",(function(){return I}));var n=r(99),a=r(92),o=r(89),i=r(88),s=r(98),c=(r(93),r(333)),l=r(185),u=r(100),f=["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uint","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"],h={enableCache:!1},d=r(255),g=999,m=9999,_=0,p=1,v=2,x=3,y=4,T=5,b=6,S=7,M=8,w=9,k=10,U=11,D=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function E(){var e,t,r,n=0,a=0,o=g,i=[],s=[],c=1,l=0,u=0,f=!1,h=!1,E="";return function(e){return s=[],null!==e?L(e.replace?e.replace(/\r\n/g,"\n"):e):(i.length&&P(i.join("")),o=k,P("(eof)"),s)};function P(e){e.length&&s.push({type:D[o],data:e,position:u,line:c,column:l})}function L(t){var i;for(n=0,r=(E+=t).length;e=E[n],n<r;){switch(i=n,o){case _:n=O();break;case p:case v:n=A();break;case x:n=F();break;case y:n=V();break;case U:n=B();break;case T:n=I();break;case m:n=N();break;case w:n=j();break;case g:n=C()}i!==n&&("\n"===E[i]?(l=0,++c):++l)}return a+=n,E=E.slice(n),s}function C(){return i=i.length?[]:i,"/"===t&&"*"===e?(u=a+n-1,o=_,t=e,n+1):"/"===t&&"/"===e?(u=a+n-1,o=p,t=e,n+1):"#"===e?(o=v,u=a+n,n):/\s/.test(e)?(o=w,u=a+n,n):(f=/\d/.test(e),h=/[^\w_]/.test(e),u=a+n,o=f?y:h?x:m,n)}function j(){return/[^\s]/g.test(e)?(P(i.join("")),o=g,n):(i.push(e),t=e,n+1)}function A(){return"\r"!==e&&"\n"!==e||"\\"===t?(i.push(e),t=e,n+1):(P(i.join("")),o=g,n)}function O(){return"/"===e&&"*"===t?(i.push(e),P(i.join("")),o=g,n+1):(i.push(e),t=e,n+1)}function F(){if("."===t&&/\d/.test(e))return o=T,n;if("/"===t&&"*"===e)return o=_,n;if("/"===t&&"/"===e)return o=p,n;if("."===e&&i.length){for(;R(i););return o=T,n}if(";"===e||")"===e||"("===e){if(i.length)for(;R(i););return P(e),o=g,n+1}var r=2===i.length&&"="!==e;if(/[\w_\d\s]/.test(e)||r){for(;R(i););return o=g,n}return i.push(e),t=e,n+1}function R(e){for(var t,r,n=0;;){if(t=d.c.indexOf(e.slice(0,e.length+n).join("")),r=d.c[t],-1===t){if(n--+e.length>0)continue;r=e.slice(0,1).join("")}return P(r),u+=r.length,(i=i.slice(r.length)).length}}function B(){return/[^a-fA-F0-9]/.test(e)?(P(i.join("")),o=g,n):(i.push(e),t=e,n+1)}function V(){return"."===e||/[eE]/.test(e)?(i.push(e),o=T,t=e,n+1):"x"===e&&1===i.length&&"0"===i[0]?(o=U,i.push(e),t=e,n+1):/[^\d]/.test(e)?(P(i.join("")),o=g,n):(i.push(e),t=e,n+1)}function I(){return"f"===e&&(i.push(e),t=e,n+=1),/[eE]/.test(e)||"-"===e&&/[eE]/.test(t)?(i.push(e),t=e,n+1):/[^\d]/.test(e)?(P(i.join("")),o=g,n):(i.push(e),t=e,n+1)}function N(){if(/[^\d\w_]/.test(e)){var r=i.join("");return o=d.b.indexOf(r)>-1?M:d.a.indexOf(r)>-1?S:b,P(i.join("")),o=g,n}return i.push(e),t=e,n+1}}function P(e){return function(e){var t=E(),r=[];return(r=r.concat(t(e))).concat(t(null))}(e)}var L=["GL_OES_standard_derivatives","GL_EXT_frag_depth","GL_EXT_draw_buffers","GL_EXT_shader_texture_lod"];function C(e,t){for(var r=t-1;r>=0;r--){var n=e[r];if("whitespace"!==n.type&&"block-comment"!==n.type){if("keyword"!==n.type)break;if("attribute"===n.data||"in"===n.data)return!0}}return!1}function j(e,t,r,n){n=n||r;var o,i=Object(a.a)(e);try{for(i.s();!(o=i.n()).done;){var s=o.value;if("ident"===s.type&&s.data===r)return n in t?t[n]++:t[n]=0,j(e,t,n+"_"+t[n],n)}}catch(c){i.e(c)}finally{i.f()}return r}function A(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"afterVersion";function n(e,t){for(var r=t;r<e.length;r++){var n=e[r];if("operator"===n.type&&";"===n.data)return r}return null}var o={data:"\n",type:"whitespace"},i=function(t){return t<e.length&&/[^\r\n]$/.test(e[t].data)},s=function(e){for(var t=-1,a=0,o=-1,i=0;i<e.length;i++){var s=e[i];if("preprocessor"===s.type&&(/\#(if|ifdef|ifndef)\s+.+/.test(s.data)?++a:/\#endif\s*.*/.test(s.data)&&--a),"afterVersion"!==r&&"afterPrecision"!==r||"preprocessor"===s.type&&/^#version/.test(s.data)&&(o=Math.max(o,i)),"afterPrecision"===r&&"keyword"===s.type&&"precision"===s.data){var c=n(e,i);if(null===c)throw new Error("precision statement not followed by any semicolons!");o=Math.max(o,c)}t<o&&0===a&&(t=i)}return t+1}(e);i(s-1)&&e.splice(s++,0,o);var c,l=Object(a.a)(t);try{for(l.s();!(c=l.n()).done;){var u=c.value;e.splice(s++,0,u)}}catch(f){l.e(f)}finally{l.f()}i(s-1)&&i(s)&&e.splice(s,0,o)}function O(e,t,r){A(e,[{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:arguments.length>3&&void 0!==arguments[3]?arguments[3]:"lowp"},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:t},{type:"operator",data:";"}],"afterPrecision")}function F(e,t,r,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"lowp";A(e,[{type:"keyword",data:"layout"},{type:"operator",data:"("},{type:"keyword",data:"location"},{type:"whitespace",data:" "},{type:"operator",data:"="},{type:"whitespace",data:" "},{type:"integer",data:n.toString()},{type:"operator",data:")"},{type:"whitespace",data:" "},{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:a},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:t},{type:"operator",data:";"}],"afterPrecision")}function R(e,t){for(var r,n,a=-1,o=t;o<e.length;o++){var i=e[o];if("operator"===i.type&&("["===i.data&&(r=o),"]"===i.data)){n=o;break}"integer"===i.type&&(a=parseInt(i.data,10))}return r&&n&&e.splice(r,n-r+1),a}function B(e,t){if(e.startsWith("#version 300"))return e;var r,n=(r=e,h.enableCache?V.get(r):null);if(null!=n)return n;var o=P(e);if("300 es"===function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"100",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"300 es",o=/^\s*\#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/,i=Object(a.a)(e);try{for(i.s();!(t=i.n()).done;){var s=t.value;if("preprocessor"===s.type){var c=o.exec(s.data);if(c){var l=c[1].replaceAll(/\s\s+/g," ");if(l===n)return l;if(l===r)return s.data="#version "+n,r;throw new Error("unknown glsl version: "+l)}}}}catch(u){i.e(u)}finally{i.f()}return e.splice(0,0,{type:"preprocessor",data:"#version "+n},{type:"whitespace",data:"\n"}),null}(o,"100","300 es"))return e;for(var i=null,s=null,c={},l={},d=0;d<o.length;++d){var g=o[d];switch(g.type){case"keyword":t===u.t.VERTEX_SHADER&&"attribute"===g.data?g.data="in":"varying"===g.data&&(g.data=t===u.t.VERTEX_SHADER?"out":"in");break;case"builtin":if(/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(g.data.trim())&&(g.data=g.data.replaceAll(/(2D|Cube|EXT)/g,"")),t===u.t.FRAGMENT_SHADER&&"gl_FragColor"===g.data&&(i||O(o,i=j(o,c,"fragColor"),"vec4"),g.data=i),t===u.t.FRAGMENT_SHADER&&"gl_FragData"===g.data){var m=R(o,d+1),_=j(o,c,"fragData");F(o,_,"vec4",m,"mediump"),g.data=_}else t===u.t.FRAGMENT_SHADER&&"gl_FragDepthEXT"===g.data&&(s||(s=j(o,c,"gl_FragDepth")),g.data=s);break;case"ident":if(f.includes(g.data)){if(t===u.t.VERTEX_SHADER&&C(o,d))throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");g.data in l||(l[g.data]=j(o,c,g.data)),g.data=l[g.data]}}}for(var p=o.length-1;p>=0;--p){var v=o[p];if("preprocessor"===v.type){var x=v.data.match(/\#extension\s+(.*)\:/);if(x&&x[1]&&L.includes(x[1].trim())){var y=o[p+1];o.splice(p,y&&"whitespace"===y.type?2:1)}var T=v.data.match(/\#ifdef\s+(.*)/);T&&T[1]&&L.includes(T[1].trim())&&(v.data="#if 1");var b=v.data.match(/\#ifndef\s+(.*)/);b&&b[1]&&L.includes(b[1].trim())&&(v.data="#if 0")}}return function(e,t){return h.enableCache&&V.set(e,t),t}(e,function(e){return e.map((function(e){return"eof"!==e.type?e.data:""})).join("")}(o))}var V=new Map;var I=function(){function e(t,r,i,s){var f=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new Map;Object(o.a)(this,e),this._context=t,this._locations=s,this._uniformBlockBindings=f,this._refCount=1,this._compiled=!1,this._nameToUniformLocation={},this._nameToUniform1={},this._nameToUniform1v=new Map,this._nameToUniform2=new Map,this._nameToUniform3=new Map,this._nameToUniform4=new Map,this._nameToUniformMatrix3=new Map,this._nameToUniformMatrix4=new Map,t||console.error("RenderingContext isn't initialized!"),0===r.length&&console.error("Shaders source should not be empty!"),this._context.type===l.a.WEBGL2&&(r=B(r,u.t.VERTEX_SHADER),i=B(i,u.t.FRAGMENT_SHADER)),this._vShader=N(this._context,u.t.VERTEX_SHADER,r),this._fShader=N(this._context,u.t.FRAGMENT_SHADER,i),this._vShader&&this._fShader||console.error("Error loading shaders!"),this._context.instanceCounter.increment(u.s.Shader,this),Object(c.c)()&&(this.vertexShader=r,this.fragmentShader=i);var h=this._context.gl,d=h.createProgram();if(h.attachShader(d,this._vShader),h.attachShader(d,this._fShader),this._locations.forEach((function(e,t){return h.bindAttribLocation(d,e,t)})),h.linkProgram(d),Object(c.c)()&&!h.getProgramParameter(d,h.LINK_STATUS)&&console.error("Could not link shader\nvalidated: ".concat(h.getProgramParameter(d,h.VALIDATE_STATUS),", gl error ").concat(h.getError(),", vertex: ").concat(h.getShaderParameter(this._vShader,h.COMPILE_STATUS),", fragment: ").concat(h.getShaderParameter(this._fShader,h.COMPILE_STATUS),", info log: ").concat(h.getProgramInfoLog(d),", vertex source: ").concat(this.vertexShader,", fragment source: ").concat(this.fragmentShader)),this._context.type===l.a.WEBGL2){var g,m=h,_=Object(a.a)(this._uniformBlockBindings);try{for(_.s();!(g=_.n()).done;){var p=Object(n.a)(g.value,2),v=p[0],x=p[1],y=m.getUniformBlockIndex(d,v);y<4294967295&&m.uniformBlockBinding(d,y,x)}}catch(T){_.e(T)}finally{_.f()}}this._glName=d,this._context.instanceCounter.increment(u.s.Program,this)}return Object(i.a)(e,[{key:"glName",get:function(){return this._glName}},{key:"hasGLName",get:function(){return null!=this._glName}},{key:"compiled",get:function(){if(this._compiled)return!0;var e=this._context.gl.getExtension("KHR_parallel_shader_compile");return null==e||null==this.glName?(this._compiled=!0,!0):(this._compiled=!!this._context.gl.getProgramParameter(this.glName,e.COMPLETION_STATUS_KHR),this._compiled)}},{key:"dispose",value:function(){if(!(--this._refCount>0)){var e=this._context.gl;this._vShader&&(e.deleteShader(this._vShader),this._vShader=null,this._context.instanceCounter.decrement(u.s.Shader,this)),this._fShader&&(e.deleteShader(this._fShader),this._fShader=null),this._glName&&(e.deleteProgram(this._glName),this._glName=null,this._context.instanceCounter.decrement(u.s.Program,this))}}},{key:"ref",value:function(){++this._refCount}},{key:"_getUniformLocation",value:function(e){return void 0===this._nameToUniformLocation[e]&&null!=this.glName&&(++X.numUniforms,this._nameToUniformLocation[e]=this._context.gl.getUniformLocation(this.glName,e)),this._nameToUniformLocation[e]}},{key:"hasUniform",value:function(e){return null!==this._getUniformLocation(e)}},{key:"setUniform1i",value:function(e,t){var r=this._nameToUniform1[e];void 0!==r&&t===r||(this._context.gl.uniform1i(this._getUniformLocation(e),t),this._nameToUniform1[e]=t)}},{key:"setUniform1iv",value:function(e,t){G(this._nameToUniform1v,e,t)&&this._context.gl.uniform1iv(this._getUniformLocation(e),t)}},{key:"setUniform2iv",value:function(e,t){G(this._nameToUniform2,e,t)&&this._context.gl.uniform2iv(this._getUniformLocation(e),t)}},{key:"setUniform3iv",value:function(e,t){G(this._nameToUniform3,e,t)&&this._context.gl.uniform3iv(this._getUniformLocation(e),t)}},{key:"setUniform4iv",value:function(e,t){G(this._nameToUniform4,e,t)&&this._context.gl.uniform4iv(this._getUniformLocation(e),t)}},{key:"setUniform1f",value:function(e,t){var r=this._nameToUniform1[e];void 0!==r&&t===r||(this._context.gl.uniform1f(this._getUniformLocation(e),t),this._nameToUniform1[e]=t)}},{key:"setUniform1fv",value:function(e,t){G(this._nameToUniform1v,e,t)&&this._context.gl.uniform1fv(this._getUniformLocation(e),t)}},{key:"setUniform2f",value:function(e,t,r){var n=this._nameToUniform2.get(e);void 0===n?(this._context.gl.uniform2f(this._getUniformLocation(e),t,r),this._nameToUniform2.set(e,[t,r])):t===n[0]&&r===n[1]||(this._context.gl.uniform2f(this._getUniformLocation(e),t,r),n[0]=t,n[1]=r)}},{key:"setUniform2fv",value:function(e,t){G(this._nameToUniform2,e,t)&&this._context.gl.uniform2fv(this._getUniformLocation(e),t)}},{key:"setUniform3f",value:function(e,t,r,n){var a=this._nameToUniform3.get(e);void 0===a?(this._context.gl.uniform3f(this._getUniformLocation(e),t,r,n),this._nameToUniform3.set(e,[t,r,n])):t===a[0]&&r===a[1]&&n===a[2]||(this._context.gl.uniform3f(this._getUniformLocation(e),t,r,n),a[0]=t,a[1]=r,a[2]=n)}},{key:"setUniform3fv",value:function(e,t){G(this._nameToUniform3,e,t)&&this._context.gl.uniform3fv(this._getUniformLocation(e),t)}},{key:"setUniform4f",value:function(e,t,r,n,a){var o=this._nameToUniform4.get(e);void 0===o?(this._context.gl.uniform4f(this._getUniformLocation(e),t,r,n,a),this._nameToUniform4.set(e,[t,r,n,a])):void 0!==o&&t===o[0]&&r===o[1]&&n===o[2]&&a===o[3]||(this._context.gl.uniform4f(this._getUniformLocation(e),t,r,n,a),o[0]=t,o[1]=r,o[2]=n,o[3]=a)}},{key:"setUniform4fv",value:function(e,t){G(this._nameToUniform4,e,t)&&this._context.gl.uniform4fv(this._getUniformLocation(e),t)}},{key:"setUniformMatrix3fv",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];G(this._nameToUniformMatrix3,e,t)&&this._context.gl.uniformMatrix3fv(this._getUniformLocation(e),r,t)}},{key:"setUniformMatrix4fv",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];G(this._nameToUniformMatrix4,e,t)&&this._context.gl.uniformMatrix4fv(this._getUniformLocation(e),r,t)}},{key:"stop",value:function(){}}]),e}();function N(e,t,r){var n=e.gl,a=n.createShader(t);return n.shaderSource(a,r),n.compileShader(a),Object(c.c)()&&!n.getShaderParameter(a,n.COMPILE_STATUS)&&(console.error("Compile error in ".concat(t===u.t.VERTEX_SHADER?"vertex":"fragment"," shader")),console.error(n.getShaderInfoLog(a)),console.error(function(e){var t=2;return e.replaceAll("\n",(function(){return"\n"+function(e){return e>=1e3?e.toString():("  "+e).slice(-3)}(t++)+":"}))}(r))),X.enabled&&(X.compiledLOC+=r.match(/\n/g).length+1),a}function G(e,t,r){var n=e.get(t);return n?Object(s.p)(n,r):(e.set(t,Array.from(r)),!0)}var X={compiledLOC:0,numUniforms:0,enabled:!1}},250:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(89),a=r(88),o=function(){function e(t){Object(n.a)(this,e),this._readFile=t}return Object(a.a)(e,[{key:"resolveIncludes",value:function(e){return this._resolve(e)}},{key:"_resolve",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Map;if(r.has(e))return r.get(e);var n=this._read(e);if(!n)throw new Error("cannot find shader file ".concat(e));for(var a=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm,o=a.exec(n),i=[];null!=o;)i.push({path:o[1],start:o.index,length:o[0].length}),o=a.exec(n);var s=0,c="";return i.forEach((function(e){c+=n.slice(s,e.start),c+=r.has(e.path)?"":t._resolve(e.path,r),s=e.start+e.length})),c+=n.slice(s),r.set(e,c),c}},{key:"_read",value:function(e){return this._readFile(e)}}]),e}()},255:function(e,t,r){"use strict";r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return u}));var n,a=r(201),o={exports:{}};o.exports,void 0!==(n=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"])&&(o.exports=n);var i,s=Object(a.b)(o.exports),c={exports:{}};i=c,function(e){var t=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"];void 0!==t&&(i.exports=t)}();var l,u=Object(a.b)(c.exports),f={exports:{}};l=f,function(e){var t=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT","textureSize","texelFetch"];void 0!==t&&(l.exports=t)}();var h=Object(a.b)(f.exports)},799:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(89),a=r(88),o=function(){function e(){Object(n.a)(this,e),this._outer=new Map}return Object(a.a)(e,[{key:"clear",value:function(){this._outer.clear()}},{key:"empty",get:function(){return 0===this._outer.size}},{key:"get",value:function(e,t){var r;return null===(r=this._outer.get(e))||void 0===r?void 0:r.get(t)}},{key:"set",value:function(e,t,r){var n=this._outer.get(e);n?n.set(t,r):this._outer.set(e,new Map([[t,r]]))}},{key:"delete",value:function(e,t){var r=this._outer.get(e);r&&(r.delete(t),0===r.size&&this._outer.delete(e))}},{key:"forEach",value:function(e){this._outer.forEach((function(t,r){return e(t,r)}))}}]),e}()},800:function(e,t,r){"use strict";function n(e){return"number"==typeof e.options[e.value]}function a(e){var t="";for(var r in e){var a=e[r];if("boolean"==typeof a)a&&(t+="#define ".concat(r,"\n"));else if("number"==typeof a)t+="#define ".concat(r," ").concat(a.toFixed(),"\n");else if("object"==typeof a)if(n(a)){var o=a.value,i=a.options,s=a.namespace,c=s?"".concat(s,"_"):"";for(var l in i)t+="#define ".concat(c).concat(l," ").concat(i[l].toFixed(),"\n");t+="#define ".concat(r," ").concat(c).concat(o,"\n")}else{var u=a.options,f=0;for(var h in u)t+="#define ".concat(u[h]," ").concat((f++).toFixed(),"\n");t+="#define ".concat(r," ").concat(u[a.value],"\n")}}return t}r.d(t,"a",(function(){return a}))},906:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(89),a=r(88),o=r(799),i=r(246),s=function(){function e(t){Object(n.a)(this,e),this._rctx=t,this._store=new o.a}return Object(a.a)(e,[{key:"dispose",value:function(){this._store.forEach((function(e){return e.forEach((function(e){return e.dispose()}))})),this._store.clear()}},{key:"acquire",value:function(e,t,r,n){var a=this._store.get(e,t);if(null!=a)return a.ref(),a;var o=new i.a(this._rctx,e,t,r,n);return o.ref(),this._store.set(e,t,o),o}},{key:"test",get:function(){var e=0;return this._store.forEach((function(t){return t.forEach((function(t){return e+=t.hasGLName?2:1}))})),{cachedWebGLObjects:e}}}]),e}()}}]);
//# sourceMappingURL=53.72d86d53.chunk.js.map