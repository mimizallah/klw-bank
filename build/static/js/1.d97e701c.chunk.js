(this["webpackJsonpklw-bank"]=this["webpackJsonpklw-bank"]||[]).push([[1],{100:function(e,t,_){"use strict";var r,i,E,n,a,R,T,o,A,s,u,c,N,I,S,O,d,l,C,M;_.d(t,"a",(function(){return p})),_.d(t,"b",(function(){return E})),_.d(t,"c",(function(){return n})),_.d(t,"d",(function(){return a})),_.d(t,"e",(function(){return r})),_.d(t,"f",(function(){return U})),_.d(t,"g",(function(){return D})),_.d(t,"h",(function(){return A})),_.d(t,"i",(function(){return P})),_.d(t,"j",(function(){return T})),_.d(t,"k",(function(){return o})),_.d(t,"l",(function(){return F})),_.d(t,"m",(function(){return R})),_.d(t,"n",(function(){return M})),_.d(t,"o",(function(){return I})),_.d(t,"p",(function(){return O})),_.d(t,"q",(function(){return i})),_.d(t,"r",(function(){return d})),_.d(t,"s",(function(){return h})),_.d(t,"t",(function(){return C})),_.d(t,"u",(function(){return S})),_.d(t,"v",(function(){return s})),_.d(t,"w",(function(){return m})),_.d(t,"x",(function(){return u})),_.d(t,"y",(function(){return N})),_.d(t,"z",(function(){return c})),_.d(t,"A",(function(){return L})),_.d(t,"B",(function(){return l})),function(e){e[e.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",e[e.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",e[e.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT"}(r||(r={})),function(e){e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(i||(i={})),function(e){e[e.ZERO=0]="ZERO",e[e.ONE=1]="ONE",e[e.SRC_COLOR=768]="SRC_COLOR",e[e.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",e[e.SRC_ALPHA=770]="SRC_ALPHA",e[e.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",e[e.DST_ALPHA=772]="DST_ALPHA",e[e.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",e[e.DST_COLOR=774]="DST_COLOR",e[e.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",e[e.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",e[e.CONSTANT_COLOR=32769]="CONSTANT_COLOR",e[e.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",e[e.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",e[e.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA"}(E||(E={})),function(e){e[e.ADD=32774]="ADD",e[e.MIN=32775]="MIN",e[e.MAX=32776]="MAX",e[e.SUBTRACT=32778]="SUBTRACT",e[e.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT"}(n||(n={})),function(e){e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",e[e.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",e[e.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",e[e.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",e[e.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",e[e.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER"}(a||(a={})),function(e){e[e.FRONT=1028]="FRONT",e[e.BACK=1029]="BACK",e[e.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(R||(R={})),function(e){e[e.CW=2304]="CW",e[e.CCW=2305]="CCW"}(T||(T={})),function(e){e[e.BYTE=5120]="BYTE",e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.SHORT=5122]="SHORT",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.INT=5124]="INT",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.FLOAT=5126]="FLOAT"}(o||(o={})),function(e){e[e.NEVER=512]="NEVER",e[e.LESS=513]="LESS",e[e.EQUAL=514]="EQUAL",e[e.LEQUAL=515]="LEQUAL",e[e.GREATER=516]="GREATER",e[e.NOTEQUAL=517]="NOTEQUAL",e[e.GEQUAL=518]="GEQUAL",e[e.ALWAYS=519]="ALWAYS"}(A||(A={})),function(e){e[e.ZERO=0]="ZERO",e[e.KEEP=7680]="KEEP",e[e.REPLACE=7681]="REPLACE",e[e.INCR=7682]="INCR",e[e.DECR=7683]="DECR",e[e.INVERT=5386]="INVERT",e[e.INCR_WRAP=34055]="INCR_WRAP",e[e.DECR_WRAP=34056]="DECR_WRAP"}(s||(s={})),function(e){e[e.NEAREST=9728]="NEAREST",e[e.LINEAR=9729]="LINEAR",e[e.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",e[e.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",e[e.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",e[e.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(u||(u={})),function(e){e[e.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",e[e.REPEAT=10497]="REPEAT",e[e.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(c||(c={})),function(e){e[e.TEXTURE_2D=3553]="TEXTURE_2D",e[e.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",e[e.TEXTURE_3D=32879]="TEXTURE_3D",e[e.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",e[e.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",e[e.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",e[e.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",e[e.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY"}(N||(N={})),function(e){e[e.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",e[e.DEPTH_STENCIL=34041]="DEPTH_STENCIL",e[e.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",e[e.ALPHA=6406]="ALPHA",e[e.RGB=6407]="RGB",e[e.RGBA=6408]="RGBA",e[e.LUMINANCE=6409]="LUMINANCE",e[e.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",e[e.RED=6403]="RED",e[e.RG=33319]="RG",e[e.RED_INTEGER=36244]="RED_INTEGER",e[e.RG_INTEGER=33320]="RG_INTEGER",e[e.RGB_INTEGER=36248]="RGB_INTEGER",e[e.RGBA_INTEGER=36249]="RGBA_INTEGER"}(I||(I={})),function(e){e[e.RGBA4=32854]="RGBA4",e[e.R16F=33325]="R16F",e[e.RG16F=33327]="RG16F",e[e.RGB32F=34837]="RGB32F",e[e.RGBA16F=34842]="RGBA16F",e[e.R32F=33326]="R32F",e[e.RG32F=33328]="RG32F",e[e.RGBA32F=34836]="RGBA32F",e[e.R11F_G11F_B10F=35898]="R11F_G11F_B10F",e[e.RGB8=32849]="RGB8",e[e.RGBA8=32856]="RGBA8",e[e.RGB5_A1=32855]="RGB5_A1",e[e.R8=33321]="R8",e[e.RG8=33323]="RG8",e[e.R8I=33329]="R8I",e[e.R8UI=33330]="R8UI",e[e.R16I=33331]="R16I",e[e.R16UI=33332]="R16UI",e[e.R32I=33333]="R32I",e[e.R32UI=33334]="R32UI",e[e.RG8I=33335]="RG8I",e[e.RG8UI=33336]="RG8UI",e[e.RG16I=33337]="RG16I",e[e.RG16UI=33338]="RG16UI",e[e.RG32I=33339]="RG32I",e[e.RG32UI=33340]="RG32UI",e[e.RGB16F=34843]="RGB16F",e[e.RGB9_E5=35901]="RGB9_E5",e[e.SRGB8=35905]="SRGB8",e[e.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",e[e.RGB565=36194]="RGB565",e[e.RGBA32UI=36208]="RGBA32UI",e[e.RGB32UI=36209]="RGB32UI",e[e.RGBA16UI=36214]="RGBA16UI",e[e.RGB16UI=36215]="RGB16UI",e[e.RGBA8UI=36220]="RGBA8UI",e[e.RGB8UI=36221]="RGB8UI",e[e.RGBA32I=36226]="RGBA32I",e[e.RGB32I=36227]="RGB32I",e[e.RGBA16I=36232]="RGBA16I",e[e.RGB16I=36233]="RGB16I",e[e.RGBA8I=36238]="RGBA8I",e[e.RGB8I=36239]="RGB8I",e[e.R8_SNORM=36756]="R8_SNORM",e[e.RG8_SNORM=36757]="RG8_SNORM",e[e.RGB8_SNORM=36758]="RGB8_SNORM",e[e.RGBA8_SNORM=36759]="RGBA8_SNORM",e[e.RGB10_A2=32857]="RGB10_A2",e[e.RGB10_A2UI=36975]="RGB10_A2UI"}(S||(S={})),function(e){e[e.FLOAT=5126]="FLOAT",e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",e[e.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",e[e.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",e[e.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",e[e.BYTE=5120]="BYTE",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.SHORT=5122]="SHORT",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.INT=5124]="INT",e[e.HALF_FLOAT=5131]="HALF_FLOAT",e[e.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",e[e.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",e[e.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",e[e.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV"}(O||(O={})),function(e){e[e.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",e[e.STENCIL_INDEX8=36168]="STENCIL_INDEX8",e[e.DEPTH_STENCIL=34041]="DEPTH_STENCIL",e[e.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",e[e.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",e[e.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",e[e.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8"}(d||(d={})),function(e){e[e.STATIC_DRAW=35044]="STATIC_DRAW",e[e.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",e[e.STREAM_DRAW=35040]="STREAM_DRAW",e[e.STATIC_READ=35045]="STATIC_READ",e[e.DYNAMIC_READ=35049]="DYNAMIC_READ",e[e.STREAM_READ=35041]="STREAM_READ",e[e.STATIC_COPY=35046]="STATIC_COPY",e[e.DYNAMIC_COPY=35050]="DYNAMIC_COPY",e[e.STREAM_COPY=35042]="STREAM_COPY"}(l||(l={})),function(e){e[e.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",e[e.VERTEX_SHADER=35633]="VERTEX_SHADER"}(C||(C={})),function(e){e[e.FRAMEBUFFER=36160]="FRAMEBUFFER",e[e.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",e[e.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER"}(M||(M={}));var h,D,p=33984;!function(e){e[e.Texture=0]="Texture",e[e.BufferObject=1]="BufferObject",e[e.VertexArrayObject=2]="VertexArrayObject",e[e.Shader=3]="Shader",e[e.Program=4]="Program",e[e.FramebufferObject=5]="FramebufferObject",e[e.Renderbuffer=6]="Renderbuffer",e[e.Sync=7]="Sync",e[e.COUNT=8]="COUNT"}(h||(h={})),function(e){e[e.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",e[e.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",e[e.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",e[e.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",e[e.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",e[e.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",e[e.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",e[e.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",e[e.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",e[e.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",e[e.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",e[e.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",e[e.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",e[e.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",e[e.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",e[e.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15"}(D||(D={}));var P,L,G,f,U,m,B,F=33306;!function(e){e[e.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",e[e.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",e[e.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",e[e.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",e[e.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",e[e.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",e[e.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",e[e.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",e[e.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",e[e.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",e[e.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"}(P||(P={})),function(e){e[e.FLOAT=5126]="FLOAT",e[e.FLOAT_VEC2=35664]="FLOAT_VEC2",e[e.FLOAT_VEC3=35665]="FLOAT_VEC3",e[e.FLOAT_VEC4=35666]="FLOAT_VEC4",e[e.INT=5124]="INT",e[e.INT_VEC2=35667]="INT_VEC2",e[e.INT_VEC3=35668]="INT_VEC3",e[e.INT_VEC4=35669]="INT_VEC4",e[e.BOOL=35670]="BOOL",e[e.BOOL_VEC2=35671]="BOOL_VEC2",e[e.BOOL_VEC3=35672]="BOOL_VEC3",e[e.BOOL_VEC4=35673]="BOOL_VEC4",e[e.FLOAT_MAT2=35674]="FLOAT_MAT2",e[e.FLOAT_MAT3=35675]="FLOAT_MAT3",e[e.FLOAT_MAT4=35676]="FLOAT_MAT4",e[e.SAMPLER_2D=35678]="SAMPLER_2D",e[e.SAMPLER_CUBE=35680]="SAMPLER_CUBE",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",e[e.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",e[e.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",e[e.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",e[e.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",e[e.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",e[e.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",e[e.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",e[e.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",e[e.SAMPLER_3D=35679]="SAMPLER_3D",e[e.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",e[e.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",e[e.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",e[e.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",e[e.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",e[e.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",e[e.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",e[e.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",e[e.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",e[e.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",e[e.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",e[e.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY"}(L||(L={})),function(e){e[e.OBJECT_TYPE=37138]="OBJECT_TYPE",e[e.SYNC_CONDITION=37139]="SYNC_CONDITION",e[e.SYNC_STATUS=37140]="SYNC_STATUS",e[e.SYNC_FLAGS=37141]="SYNC_FLAGS"}(G||(G={})),function(e){e[e.UNSIGNALED=37144]="UNSIGNALED",e[e.SIGNALED=37145]="SIGNALED"}(f||(f={})),function(e){e[e.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",e[e.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",e[e.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",e[e.WAIT_FAILED=37149]="WAIT_FAILED"}(U||(U={})),function(e){e[e.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE"}(m||(m={})),function(e){e[e.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"}(B||(B={}))},147:function(e,t,_){"use strict";_.d(t,"a",(function(){return a})),_.d(t,"b",(function(){return R}));var r=_(88),i=_(89),E=_(100),n=_(798),a=Object(r.a)((function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,_=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;Object(i.a)(this,e),this.width=t,this.height=_,this.target=E.y.TEXTURE_2D,this.pixelFormat=E.o.RGBA,this.dataType=E.p.UNSIGNED_BYTE,this.samplingMode=E.x.LINEAR,this.wrapMode=E.z.REPEAT,this.maxAnisotropy=1,this.flipped=!1,this.hasMipmap=!1,this.isOpaque=!1,this.unpackAlignment=4,this.preMultiplyAlpha=!1,this.depth=1,this.isImmutable=!1}));function R(e){return e.width<=0||e.height<=0||null==e.internalFormat?0:e.width*e.height*(e.hasMipmap?4/3:1)*Object(n.b)(e.internalFormat)}},148:function(e,t,_){"use strict";_.d(t,"a",(function(){return I}));var r=_(89),i=_(88),E=_(101),n=(_(93),_(141)),a=_(333),R=_(185),T=_(100),o=_(905),A=_(147),s=_(120),u=_(90),c=_(91),N=function(e){Object(u.a)(_,e);var t=Object(c.a)(_);function _(e,i){var E;switch(Object(r.a)(this,_),(E=t.call(this)).context=e,Object.assign(Object(s.a)(E),i),E.internalFormat){case T.u.R16F:case T.u.R16I:case T.u.R16UI:case T.u.R32F:case T.u.R32I:case T.u.R32UI:case T.u.R8_SNORM:case T.u.R8:case T.u.R8I:case T.u.R8UI:E.pixelFormat=T.o.RED}return E}return Object(i.a)(_,null,[{key:"validate",value:function(e,t){return new _(e,t)}}]),_}(A.a),I=function(){function e(t){var _=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(Object(r.a)(this,e),this.type=o.a.Texture,this._glName=null,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._wasImmutablyAllocated=!1,"context"in t)this._descriptor=t,i=_;else{var n=N.validate(t,_);if(!n)throw new E.a("Texture descriptor invalid");this._descriptor=n}if(this._descriptor.context.instanceCounter.increment(T.s.Texture,this),this._descriptor.context.type!==R.a.WEBGL2&&(this._descriptor.isImmutable&&(this._descriptor.isImmutable=!1),M(this._descriptor.target)))throw new E.a("3D and array textures are not supported in WebGL1");this._descriptor.target===T.y.TEXTURE_CUBE_MAP?this._setDataCubeMap(i):this.setData(i)}return Object(i.a)(e,[{key:"glName",get:function(){return this._glName}},{key:"descriptor",get:function(){return this._descriptor}},{key:"gpuMemoryUsage",get:function(){return D.delete(this),Object(A.b)(this._descriptor)}},{key:"isDirty",get:function(){return this._samplingModeDirty||this._wrapModeDirty}},{key:"dispose",value:function(){this._descriptor.context.gl&&this._glName&&(this._descriptor.context.unbindTexture(this),this._descriptor.context.gl.deleteTexture(this._glName),this._glName=null,this._descriptor.context.instanceCounter.decrement(T.s.Texture,this))}},{key:"release",value:function(){this.dispose()}},{key:"resize",value:function(e,t){var _=this._descriptor;if(_.width!==e||_.height!==t){if(this._wasImmutablyAllocated)throw new E.a("Immutable textures can't be resized!");_.width=e,_.height=t,this._descriptor.target===T.y.TEXTURE_CUBE_MAP?this._setDataCubeMap(null):this.setData(null)}}},{key:"_setDataCubeMap",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=T.y.TEXTURE_CUBE_MAP_POSITIVE_X;t<=T.y.TEXTURE_CUBE_MAP_NEGATIVE_Z;t++)this._setData(e,t)}},{key:"setData",value:function(e){this._setData(e)}},{key:"_setData",value:function(t,_){var r,i=this;if(this._descriptor.context&&this._descriptor.context.gl){var n=this._descriptor.context.gl;Object(a.a)(n),this._glName||(this._glName=n.createTexture()),void 0===t&&(t=null);var R=this._descriptor,o=null!==_&&void 0!==_?_:R.target,A=M(o);null===t&&(R.width=R.width||4,R.height=R.height||4,A&&(R.depth=null!==(r=R.depth)&&void 0!==r?r:1));var s=this._descriptor.context.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(e.TEXTURE_UNIT_FOR_UPDATES),S(this._descriptor.context,R),this._configurePixelStorage(),Object(a.a)(n);var u=this._deriveInternalFormat();if(C(t)){var c=t.width,N=t.height;t instanceof HTMLVideoElement&&(c=t.videoWidth,N=t.videoHeight),R.width&&R.height,A&&R.depth,R.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(o,u,R.hasMipmap,c,N,1),this._texImage(o,0,u,c,N,1,t),Object(a.a)(n),R.hasMipmap&&this.generateMipmap(),R.width||(R.width=c),R.height||(R.height=N),A&&!R.depth&&(R.depth=1)}else{var I=R.width,D=R.height,p=R.depth;if(null==I||null==D)throw new E.a("Width and height must be specified!");if(A&&null==p)throw new E.a("Depth must be specified!");if(R.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(o,u,R.hasMipmap,I,D,p),l(t)){var P=t.levels,L=h(o,I,D,p),G=Math.min(L-1,P.length-1);null!=this._descriptor.context.gl2?n.texParameteri(R.target,this._descriptor.context.gl2.TEXTURE_MAX_LEVEL,G):R.hasMipmap=R.hasMipmap&&L===P.length;var f=u;if(!(f in T.i))throw new E.a("Attempting to use compressed data with an uncompressed format!");this._forEachMipmapLevel((function(e,t,_,r){var E=P[Math.min(e,P.length-1)];i._compressedTexImage(o,e,f,t,_,r,E)}),G)}else this._texImage(o,0,u,I,D,p,t),Object(a.a)(n),R.hasMipmap&&this.generateMipmap()}O(n,this._descriptor),d(n,this._descriptor),function(e,t){var _,r=e.capabilities.textureFilterAnisotropic;if(!r)return;e.gl.texParameterf(t.target,r.TEXTURE_MAX_ANISOTROPY,null!==(_=t.maxAnisotropy)&&void 0!==_?_:1)}(this._descriptor.context,this._descriptor),Object(a.a)(n),this._descriptor.context.bindTexture(s,e.TEXTURE_UNIT_FOR_UPDATES)}}},{key:"updateData",value:function(t,_,r,i,n,a){var R=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0;a||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");var T=this._descriptor.context.gl,o=this._descriptor.context.gl2,A=this._descriptor,s=this._deriveInternalFormat(),u=A.pixelFormat,c=A.dataType,N=A.target;if(A.isImmutable&&!this._wasImmutablyAllocated)throw new E.a("Cannot update immutable texture before allocation!");var I=this._descriptor.context.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES,!0);if((_<0||r<0||i>A.width||n>A.height||_+i>A.width||r+n>A.height)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),R){if(!o)return void console.error("Webgl2 must be enabled to use dataRowOffset!");T.pixelStorei(o.UNPACK_SKIP_ROWS,R)}if(C(a)?o?o.texSubImage2D(N,t,_,r,i,n,u,c,a):T.texSubImage2D(N,t,_,r,u,c,a):l(a)?T.compressedTexSubImage2D(N,t,_,r,i,n,s,a.levels[t]):T.texSubImage2D(N,t,_,r,i,n,u,c,a),R){if(!o)return void console.error("Webgl2 must be enabled to use dataRowOffset!");T.pixelStorei(o.UNPACK_SKIP_ROWS,0)}this._descriptor.context.bindTexture(I,e.TEXTURE_UNIT_FOR_UPDATES)}},{key:"updateData3D",value:function(t,_,r,i,n,a,R,T){T||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");var o=this._descriptor.context.gl2;if(null==o)throw new E.a("3D textures are not supported in WebGL1");var A=this._descriptor,s=this._deriveInternalFormat(),u=A.pixelFormat,c=A.dataType,N=A.isImmutable,I=A.target;if(N&&!this._wasImmutablyAllocated)throw new E.a("Cannot update immutable texture before allocation!");M(I)||console.warn("Attempting to set 3D texture data on a non-3D texture");var S=this._descriptor.context.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES);if(this._descriptor.context.setActiveTexture(e.TEXTURE_UNIT_FOR_UPDATES),(_<0||r<0||i<0||n>A.width||a>A.height||R>A.depth||_+n>A.width||r+a>A.height||i+R>A.depth)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),l(T))T=T.levels[t],o.compressedTexSubImage3D(I,t,_,r,i,n,a,R,s,T);else{var O=T;o.texSubImage3D(I,t,_,r,i,n,a,R,u,c,O)}this._descriptor.context.bindTexture(S,e.TEXTURE_UNIT_FOR_UPDATES)}},{key:"generateMipmap",value:function(){var t=this._descriptor;if(!t.hasMipmap){if(this._wasImmutablyAllocated)throw new E.a("Cannot add mipmaps to immutable texture after allocation");t.hasMipmap=!0,this._samplingModeDirty=!0,S(this._descriptor.context,t)}t.samplingMode===T.x.LINEAR?(this._samplingModeDirty=!0,t.samplingMode=T.x.LINEAR_MIPMAP_NEAREST):t.samplingMode===T.x.NEAREST&&(this._samplingModeDirty=!0,t.samplingMode=T.x.NEAREST_MIPMAP_NEAREST);var _=this._descriptor.context.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(e.TEXTURE_UNIT_FOR_UPDATES),this._descriptor.context.gl.generateMipmap(t.target),this._descriptor.context.bindTexture(_,e.TEXTURE_UNIT_FOR_UPDATES)}},{key:"setSamplingMode",value:function(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}},{key:"setWrapMode",value:function(e){e!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=e,S(this._descriptor.context,this._descriptor),this._wrapModeDirty=!0)}},{key:"applyChanges",value:function(){var e=this._descriptor.context.gl,t=this._descriptor;this._samplingModeDirty&&(O(e,t),this._samplingModeDirty=!1),this._wrapModeDirty&&(d(e,t),this._wrapModeDirty=!1)}},{key:"_deriveInternalFormat",value:function(){if(this._descriptor.context.type===R.a.WEBGL1)return this._descriptor.internalFormat=this._descriptor.pixelFormat;if(null!=this._descriptor.internalFormat)return this._descriptor.internalFormat===T.o.DEPTH_STENCIL&&(this._descriptor.internalFormat=T.o.DEPTH24_STENCIL8),this._descriptor.internalFormat;switch(this._descriptor.dataType){case T.p.FLOAT:switch(this._descriptor.pixelFormat){case T.o.RGBA:return this._descriptor.internalFormat=T.u.RGBA32F;case T.o.RGB:return this._descriptor.internalFormat=T.u.RGB32F;default:throw new E.a("Unable to derive format")}case T.p.UNSIGNED_BYTE:switch(this._descriptor.pixelFormat){case T.o.RGBA:return this._descriptor.internalFormat=T.u.RGBA8;case T.o.RGB:return this._descriptor.internalFormat=T.u.RGB8}}return this._descriptor.internalFormat=this._descriptor.pixelFormat===T.o.DEPTH_STENCIL?T.o.DEPTH24_STENCIL8:this._descriptor.pixelFormat}},{key:"_configurePixelStorage",value:function(){var e=this._descriptor.context.gl,t=this._descriptor,_=t.unpackAlignment,r=t.flipped,i=t.preMultiplyAlpha;e.pixelStorei(e.UNPACK_ALIGNMENT,_),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r?1:0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i?1:0)}},{key:"_texStorage",value:function(e,t,_,r,i,n){var a=this._descriptor.context.gl2;if(null==a)throw new E.a("Immutable textures are not supported in WebGL1");if(!(t in T.u))throw new E.a("Immutable textures must have a sized internal format");if(this._descriptor.isImmutable){var R=_?h(e,r,i,n):1;if(M(e)){if(null==n)throw new E.a("Missing depth dimension for 3D texture upload");a.texStorage3D(e,R,t,r,i,n)}else a.texStorage2D(e,R,t,r,i);this._wasImmutablyAllocated=!0}}},{key:"_texImage",value:function(e,t,_,r,i,n,a){var T=this._descriptor.context.gl,o=M(e),A=this._descriptor,s=A.isImmutable,u=A.pixelFormat,c=A.dataType,N=this._descriptor.context.type===R.a.WEBGL2,I=N?T:null;if(N||!C(a))if(s){if(null!=a){var S=a;if(o){if(null==n)throw new E.a("Missing depth dimension for 3D texture upload");I.texSubImage3D(e,t,0,0,0,r,i,n,u,c,S)}else T.texSubImage2D(e,t,0,0,r,i,u,c,S)}}else{var O=a;if(o){if(null==n)throw new E.a("Missing depth dimension for 3D texture upload");I.texImage3D(e,t,_,r,i,n,0,u,c,O)}else T.texImage2D(e,t,_,r,i,0,u,c,O)}else T.texImage2D(e,0,_,u,c,a)}},{key:"_compressedTexImage",value:function(e,t,_,r,i,n,a){var T=this._descriptor.context.gl,o=null,A=M(e),s=this._descriptor.isImmutable;if(A){if(this._descriptor.context.type!==R.a.WEBGL2)throw new E.a("3D textures are not supported in WebGL1");o=T}if(s){if(null!=a)if(A){if(null==n)throw new E.a("Missing depth dimension for 3D texture upload");o.compressedTexSubImage3D(e,t,0,0,0,r,i,n,_,a)}else T.compressedTexSubImage2D(e,t,0,0,r,i,_,a)}else if(A){if(null==n)throw new E.a("Missing depth dimension for 3D texture upload");o.compressedTexImage3D(e,t,_,r,i,n,0,a)}else T.compressedTexImage2D(e,t,_,r,i,0,a)}},{key:"_forEachMipmapLevel",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1/0,_=this._descriptor,r=_.width,i=_.height,n=_.depth,a=_.hasMipmap,R=_.target===T.y.TEXTURE_3D;if(null==r||null==i||R&&null==n)throw new E.a("Missing texture dimensions for mipmap calculation");for(var o=0;e(o,r,i,n),a&&(1!==r||1!==i||R&&1!==n)&&!(o>=t);++o)r=Math.max(1,r>>1),i=Math.max(1,i>>1),R&&(n=Math.max(1,n>>1))}}]),e}();function S(e,t){(null!=t.width&&t.width<0||null!=t.height&&t.height<0||null!=t.depth&&t.depth<0)&&console.error("Negative dimension parameters are not allowed!");var _=e.type===R.a.WEBGL2;_||!t.isImmutable&&!M(t.target)||console.error("Immutable and 3D-like textures are not supported in WebGL1!"),_||null!=t.width&&Object(n.j)(t.width)&&null!=t.height&&Object(n.j)(t.height)||("number"==typeof t.wrapMode?t.wrapMode!==T.z.CLAMP_TO_EDGE&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):t.wrapMode.s===T.z.CLAMP_TO_EDGE&&t.wrapMode.t===T.z.CLAMP_TO_EDGE||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),t.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}function O(e,t){var _=t.samplingMode,r=t.samplingMode;_===T.x.LINEAR_MIPMAP_NEAREST||_===T.x.LINEAR_MIPMAP_LINEAR?(_=T.x.LINEAR,t.hasMipmap||(r=T.x.LINEAR)):_!==T.x.NEAREST_MIPMAP_NEAREST&&_!==T.x.NEAREST_MIPMAP_LINEAR||(_=T.x.NEAREST,t.hasMipmap||(r=T.x.NEAREST)),e.texParameteri(t.target,e.TEXTURE_MAG_FILTER,_),e.texParameteri(t.target,e.TEXTURE_MIN_FILTER,r)}function d(e,t){"number"==typeof t.wrapMode?(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode)):(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode.s),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode.t))}function l(e){return null!=e&&"type"in e&&"compressed"===e.type}function C(e){return null!=e&&!l(e)&&!function(e){return null!=e&&"byteLength"in e}(e)}function M(e){return e===T.y.TEXTURE_3D||e===T.y.TEXTURE_2D_ARRAY}function h(e,t,_){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,i=Math.max(t,_);return e===T.y.TEXTURE_3D&&(i=Math.max(i,r)),Math.round(Math.log(i)/Math.LN2)+1}I.TEXTURE_UNIT_FOR_UPDATES=0;var D=new Map},333:function(e,t,_){"use strict";_.d(t,"a",(function(){return T})),_.d(t,"b",(function(){return a})),_.d(t,"c",(function(){return R}));var r=_(101),i=_(93),E=_(102).a.getLogger("esri.views.webgl.checkWebGLError");var n=!!Object(i.a)("enable-feature:webgl-debug");function a(){return n}function R(){return n}function T(e){if(a()){var t=e.getError();if(t){var _=function(e,t){switch(t){case e.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case e.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case e.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case e.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case e.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case e.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}(e,t),i=(new Error).stack;E.error(new r.a("webgl-error","WebGL error occured",{message:_,stack:i}))}}}},798:function(e,t,_){"use strict";_.d(t,"a",(function(){return a})),_.d(t,"b",(function(){return T})),_.d(t,"c",(function(){return E})),_.d(t,"d",(function(){return R})),_.d(t,"e",(function(){return n}));var r=_(92),i=(_(93),_(100));function E(e){var t=e.gl;switch(t.getError()){case t.NO_ERROR:return null;case t.INVALID_ENUM:return"An unacceptable value has been specified for an enumerated argument";case t.INVALID_VALUE:return"An unacceptable value has been specified for an argument";case t.INVALID_OPERATION:return"The specified command is not allowed for the current state";case t.INVALID_FRAMEBUFFER_OPERATION:return"The currently bound framebuffer is not framebuffer complete";case t.OUT_OF_MEMORY:return"Not enough memory is left to execute the command";case t.CONTEXT_LOST_WEBGL:return"WebGL context is lost"}return"Unknown error"}function n(e,t){return e.vertexBuffers[t].byteLength/function(e){return e[0].stride}(e.layout[t])}function a(e,t,_,i){var E=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,n=e.gl,a=e.capabilities.instancing;e.bindBuffer(_);var R,T=Object(r.a)(i);try{for(T.s();!(R=T.n()).done;){var o=R.value,A=t.get(o.name);void 0===A&&console.error("There is no location for vertex attribute '".concat(o.name,"' defined."));var s=E*o.stride;if(o.count<=4)n.vertexAttribPointer(A,o.count,o.type,o.normalized,o.stride,o.offset+s),n.enableVertexAttribArray(A),o.divisor>0&&a&&a.vertexAttribDivisor(A,o.divisor);else if(9===o.count)for(var u=0;u<3;u++)n.vertexAttribPointer(A+u,3,o.type,o.normalized,o.stride,o.offset+12*u+s),n.enableVertexAttribArray(A+u),o.divisor>0&&a&&a.vertexAttribDivisor(A+u,o.divisor);else if(16===o.count)for(var c=0;c<4;c++)n.vertexAttribPointer(A+c,4,o.type,o.normalized,o.stride,o.offset+16*c+s),n.enableVertexAttribArray(A+c),o.divisor>0&&a&&a.vertexAttribDivisor(A+c,o.divisor);else console.error("Unsupported vertex attribute element count: "+o.count)}}catch(N){T.e(N)}finally{T.f()}}function R(e,t,_,E){var n=e.gl,a=e.capabilities.instancing;e.bindBuffer(_);var R,T=Object(r.a)(E);try{for(T.s();!(R=T.n()).done;){var o=R.value,A=t.get(o.name);if(o.count<=4)n.disableVertexAttribArray(A),o.divisor&&o.divisor>0&&a&&a.vertexAttribDivisor(A,0);else if(9===o.count)for(var s=0;s<3;s++)n.disableVertexAttribArray(A+s),o.divisor&&o.divisor>0&&a&&a.vertexAttribDivisor(A+s,0);else if(16===o.count)for(var u=0;u<4;u++)n.disableVertexAttribArray(A+u),o.divisor&&o.divisor>0&&a&&a.vertexAttribDivisor(A+u,0);else console.error("Unsupported vertex attribute element count: "+o.count)}}catch(c){T.e(c)}finally{T.f()}e.unbindBuffer(i.d.ARRAY_BUFFER)}function T(e){switch(e){case i.o.ALPHA:case i.o.LUMINANCE:case i.o.RED:case i.o.RED_INTEGER:case i.u.R8:case i.u.R8I:case i.u.R8UI:case i.u.R8_SNORM:case i.r.STENCIL_INDEX8:return 1;case i.o.LUMINANCE_ALPHA:case i.o.RG:case i.o.RG_INTEGER:case i.u.RGBA4:case i.u.R16F:case i.u.R16I:case i.u.R16UI:case i.u.RG8:case i.u.RG8I:case i.u.RG8UI:case i.u.RG8_SNORM:case i.u.RGB565:case i.u.RGB5_A1:case i.r.DEPTH_COMPONENT16:return 2;case i.o.DEPTH_COMPONENT:case i.o.RGB:case i.o.RGB_INTEGER:case i.u.RGB8:case i.u.RGB8I:case i.u.RGB8UI:case i.u.RGB8_SNORM:case i.u.SRGB8:case i.r.DEPTH_COMPONENT24:return 3;case i.o.DEPTH_STENCIL:case i.o.DEPTH24_STENCIL8:case i.o.RGBA:case i.o.RGBA_INTEGER:case i.u.RGBA8:case i.u.R32F:case i.u.R11F_G11F_B10F:case i.u.RG16F:case i.u.R32I:case i.u.R32UI:case i.u.RG16I:case i.u.RG16UI:case i.u.RGBA8I:case i.u.RGBA8UI:case i.u.RGBA8_SNORM:case i.u.SRGB8_ALPHA8:case i.u.RGB9_E5:case i.u.RGB10_A2UI:case i.u.RGB10_A2:case i.r.DEPTH_STENCIL:case i.r.DEPTH_COMPONENT32F:case i.r.DEPTH24_STENCIL8:return 4;case i.r.DEPTH32F_STENCIL8:return 5;case i.u.RGB16F:case i.u.RGB16I:case i.u.RGB16UI:return 6;case i.u.RG32F:case i.u.RG32I:case i.u.RG32UI:case i.u.RGBA16F:case i.u.RGBA16I:case i.u.RGBA16UI:return 8;case i.u.RGB32F:case i.u.RGB32I:case i.u.RGB32UI:return 12;case i.u.RGBA32F:case i.u.RGBA32I:case i.u.RGBA32UI:return 16;case i.i.COMPRESSED_RGB_S3TC_DXT1_EXT:case i.i.COMPRESSED_RGBA_S3TC_DXT1_EXT:return.5;case i.i.COMPRESSED_RGBA_S3TC_DXT3_EXT:case i.i.COMPRESSED_RGBA_S3TC_DXT5_EXT:return 1;case i.i.COMPRESSED_R11_EAC:case i.i.COMPRESSED_SIGNED_R11_EAC:case i.i.COMPRESSED_RGB8_ETC2:case i.i.COMPRESSED_SRGB8_ETC2:case i.i.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:case i.i.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:return.5;case i.i.COMPRESSED_RG11_EAC:case i.i.COMPRESSED_SIGNED_RG11_EAC:case i.i.COMPRESSED_RGBA8_ETC2_EAC:case i.i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:return 1}return 0}},905:function(e,t,_){"use strict";var r;_.d(t,"a",(function(){return r})),function(e){e[e.Texture=0]="Texture",e[e.RenderBuffer=1]="RenderBuffer"}(r||(r={}))}}]);
//# sourceMappingURL=1.d97e701c.chunk.js.map