const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/loader-DtLKTYzP.js","assets/index-szNj1aqA.js","assets/index-4rsQkLC1.css","assets/mat4f64-Dk4dwAN8.js","assets/quat-BZedS7IX.js","assets/mat3f64-q3fE-ZOt.js","assets/quatf64-aQ5IuZRd.js","assets/BufferView-DhtpgA30.js","assets/VerticalOffset.glsl-Cr0Mwudg.js","assets/Indices-CDUY2NQC.js","assets/InterleavedLayout-D9ocgMqh.js","assets/triangle-N268Nvdp.js","assets/sphere-DTYho6l_.js","assets/plane-B-bok-4y.js","assets/lineSegment-C4yU_3Dq.js","assets/renderState-ygD0POt3.js","assets/VertexAttribute-Cq4MnHjR.js","assets/ShaderOutput-DnYY5J1_.js","assets/BindType-BBwFZqyN.js","assets/glsl-BH37Aalp.js","assets/boundedPlane-DF3TBfbG.js","assets/requestImageUtils-nTXuUtsO.js","assets/TextureFormat-1mYWTFa-.js","assets/orientedBoundingBox-CiT2qspG.js","assets/spatialReferenceEllipsoidUtils-CAOHNdSO.js","assets/computeTranslationToOriginAndRotation-C7bKRKRu.js","assets/vec3-DHQwVjNs.js","assets/vec4-BH3uAGyE.js","assets/memoryEstimations-CnkpdY1b.js","assets/NestedMap-GuqgquCN.js","assets/RealisticTree.glsl-D4M_odbs.js","assets/NormalAttribute.glsl-Cwdzrqrw.js","assets/ShaderBuilder-vfhyfMfS.js","assets/doublePrecisionUtils-B0owpBza.js"])))=>i.map(i=>d[i]);
import{mh as Ae,mi as $e,ac as Be,af as le,jL as W,a7 as ce,bp as Q,jU as fe,aF as Y,a9 as Me,e8 as ee,hd as de,mj as D,ad as Ie,mk as Se,ml as Ee,mm as Oe,bx as Pe,dG as V,gR as _e,mn as Le,mo as Ue,ix as te,mp as je,bZ as ke,aJ as Ce,aE as z,cs as re,cw as Ne,mq as se,cq as qe,aB as Fe,iK as De,bi as me,mr as Ge,fP as Ve,fQ as ne,fR as ze}from"./index-szNj1aqA.js";import{t as K,e as pe}from"./mat3f64-q3fE-ZOt.js";import{e as Ke}from"./mat4f64-Dk4dwAN8.js";import{N as he,f as ge,n as F}from"./VerticalOffset.glsl-Cr0Mwudg.js";import{i as ye,c as xe,x as He,L as Je,O as We,E as Qe}from"./BufferView-DhtpgA30.js";import{r as Xe,n as Ze,d as ae,l as oe}from"./vec3-DHQwVjNs.js";import{o as Ye,d as ie}from"./vec4-BH3uAGyE.js";import{o as be,i as et}from"./Indices-CDUY2NQC.js";import{e as J,i as B,u as we,n as tt}from"./renderState-ygD0POt3.js";import{u as rt}from"./memoryEstimations-CnkpdY1b.js";import{t as st}from"./NestedMap-GuqgquCN.js";import{t as nt}from"./requestImageUtils-nTXuUtsO.js";import{t as j}from"./orientedBoundingBox-CiT2qspG.js";import{e as _}from"./VertexAttribute-Cq4MnHjR.js";import{z as G,n as at,o as ot,s as it,t as ut}from"./RealisticTree.glsl-D4M_odbs.js";import{a as ue}from"./NormalAttribute.glsl-Cwdzrqrw.js";let lt=class{constructor(t){this._streamDataRequester=t}async loadJSON(t,n){return this._load("json",t,n)}async loadBinary(t,n){return $e(t)?(Be(n),Ae(t)):this._load("binary",t,n)}async loadImage(t,n){return this._load("image",t,n)}async _load(t,n,r){if(this._streamDataRequester==null)return(await le(n,{responseType:ct[t]})).data;const o=await W(this._streamDataRequester.request(n,t,r));if(o.ok===!0)return o.value;throw Q(o.error),new ce("glt-loader-request-error",`Request for resource failed: ${o.error}`)}};const ct={image:"image",binary:"array-buffer",json:"json","image+type":void 0},M=()=>Me.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");class ft{constructor(t,n,r){this.resource=t,this.textures=n,this.cachedMemory=r}}async function dt(e,t){const n=await mt(e,t),r=await xt(n.textureDefinitions??{},t);let o=0;for(const a in r)if(r.hasOwnProperty(a)){const i=r[a];o+=i!=null&&i.image?i.image.width*i.image.height*4:0}return new ft(n,r,o+rt(n))}async function mt(e,t){const n=t==null?void 0:t.streamDataRequester;if(n)return pt(e,n,t);const r=await W(le(e,t));if(r.ok===!0)return r.value.data;Q(r.error),Te(r.error)}async function pt(e,t,n){const r=await W(t.request(e,"json",n));if(r.ok===!0)return r.value;Q(r.error),Te(r.error.details.url)}function Te(e){throw new ce("",`Request for object resource failed: ${e}`)}function ht(e){const t=e.params,n=t.topology;let r=!0;switch(t.vertexAttributes||(M().warn("Geometry must specify vertex attributes"),r=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const a=t.faces;if(a){if(t.vertexAttributes)for(const i in t.vertexAttributes){const u=a[i];u!=null&&u.values?(u.valueType!=null&&u.valueType!=="UInt32"&&(M().warn(`Unsupported indexed geometry indices type '${u.valueType}', only UInt32 is currently supported`),r=!1),u.valuesPerElement!=null&&u.valuesPerElement!==1&&(M().warn(`Unsupported indexed geometry values per element '${u.valuesPerElement}', only 1 is currently supported`),r=!1)):(M().warn(`Indexed geometry does not specify face indices for '${i}' attribute`),r=!1)}}else M().warn("Indexed geometries must specify faces"),r=!1;break}default:M().warn(`Unsupported topology '${n}'`),r=!1}e.params.material||(M().warn("Geometry requires material"),r=!1);const o=e.params.vertexAttributes;for(const a in o)o[a].values||(M().warn("Geometries with externally defined attributes are not yet supported"),r=!1);return r}function gt(e,t){var d,w;const n=new Array,r=new Array,o=new Array,a=new st,i=e.resource,u=fe.parse(i.version||"1.0","wosr");wt.validate(u);const s=i.model.name,l=i.model.geometries,c=i.materialDefinitions??{},f=e.textures;let p=0;const h=new Map;for(let y=0;y<l.length;y++){const x=l[y];if(!ht(x))continue;const A=bt(x),b=x.params.vertexAttributes,g=[],E=m=>{if(x.params.topology==="PerAttributeArray")return null;const v=x.params.faces;for(const T in v)if(T===m)return v[T].values;return null},k=b[_.POSITION],N=k.values.length/k.valuesPerElement;for(const m in b){const v=b[m],T=v.values,$=E(m)??be(N);g.push([m,new j(T,$,v.valuesPerElement,!0)])}const I=A.texture,R=f&&f[I];if(R&&!h.has(I)){const{image:m,parameters:v}=R,T=new he(m,v);r.push(T),h.set(I,T)}const q=h.get(I),L=q?q.id:void 0,O=A.material;let S=a.get(O,I);if(S==null){const m=c[O.slice(O.lastIndexOf("/")+1)].params;m.transparency===1&&(m.transparency=0);const v=R&&R.alphaChannelUsage,T=m.transparency>0||v==="transparency"||v==="maskAndTransparency",$=R?ve(R.alphaChannelUsage):void 0,Z={ambient:Y(m.diffuse),diffuse:Y(m.diffuse),opacity:1-(m.transparency||0),transparent:T,textureAlphaMode:$,textureAlphaCutoff:.33,textureId:L,doubleSided:!0,cullFace:J.None,colorMixMode:m.externalColorMixMode||"tint",textureAlphaPremultiplied:(R==null?void 0:R.parameters.preMultiplyAlpha)??!1};t!=null&&t.materialParameters&&Object.assign(Z,t.materialParameters),S=new G(Z,t),a.set(O,I,S)}o.push(S);const P=new ge(S,g);p+=((w=(d=g.find(m=>m[0]===_.POSITION))==null?void 0:d[1])==null?void 0:w.indices.length)??0,n.push(P)}return{engineResources:[{name:s,stageResources:{textures:r,materials:o,geometries:n},pivotOffset:i.model.pivotOffset,numberOfVertices:p,lodThreshold:null}],referenceBoundingBox:yt(n)}}function yt(e){const t=de();return e.forEach(n=>{const r=n.boundingInfo;r!=null&&(D(t,r.bbMin),D(t,r.bbMax))}),t}async function xt(e,t){const n=new Array;for(const a in e){const i=e[a],u=i.images[0].data;if(!u){M().warn("Externally referenced texture data is not yet supported");continue}const s=i.encoding+";base64,"+u,l="/textureDefinitions/"+a,c=i.channels==="rgba"?i.alphaChannelUsage||"transparency":"none",f={noUnpackFlip:!0,wrap:{s:ee.REPEAT,t:ee.REPEAT},preMultiplyAlpha:ve(c)!==B.Opaque},p=t!=null&&t.disableTextures?Promise.resolve(null):nt(s,t);n.push(p.then(h=>({refId:l,image:h,parameters:f,alphaChannelUsage:c})))}const r=await Promise.all(n),o={};for(const a of r)o[a.refId]=a;return o}function ve(e){switch(e){case"mask":return B.Mask;case"maskAndTransparency":return B.MaskBlend;case"none":return B.Opaque;default:return B.Blend}}function bt(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const wt=new fe(1,2,"wosr");function Tt(e,t){X(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function X(e,t,n=2,r=n){const o=t.length/2;let a=0,i=0;if(!Ie(t)||Se(t)){for(let s=0;s<o;++s)e[a]=t[i],e[a+1]=t[i+1],a+=n,i+=r;return}const u=Ee(t);if(Oe(t))for(let s=0;s<o;++s)e[a]=Math.max(t[i]/u,-1),e[a+1]=Math.max(t[i+1]/u,-1),a+=n,i+=r;else for(let s=0;s<o;++s)e[a]=t[i]/u,e[a+1]=t[i+1]/u,a+=n,i+=r}function vt(e,t,n,r){const o=e.typedBuffer,a=e.typedBufferStride,i=(r==null?void 0:r.count)??e.count;let u=((r==null?void 0:r.dstIndex)??0)*a;for(let s=0;s<i;++s)o[u]=t,o[u+1]=n,u+=a}Object.freeze(Object.defineProperty({__proto__:null,fill:vt,normalizeIntegerBuffer:X,normalizeIntegerBufferView:Tt},Symbol.toStringTag,{value:"Module"}));let Rt=class{constructor(t){this.data=t,this.type="encoded-mesh-texture",this.encoding=we.KTX2_ENCODING}};function H(e){return(e==null?void 0:e.type)==="encoded-mesh-texture"}async function er(e){const t=new Blob([e]),n=await t.text();return JSON.parse(n)}async function tr(e,t){if(t===we.KTX2_ENCODING)return new Rt(e);const n=new Blob([e],{type:t});let r=URL.createObjectURL(n);switch(t){case"image/jpeg":r+="#.jpg";break;case"image/png":r+="#.png"}const o=new Image;if(Pe("esri-iPhone"))return new Promise((a,i)=>{const u=()=>{l(),a(o)},s=c=>{l(),i(c)},l=()=>{URL.revokeObjectURL(r),o.removeEventListener("load",u),o.removeEventListener("error",s)};o.addEventListener("load",u),o.addEventListener("error",s),o.src=r});try{o.src=r,await o.decode()}catch{console.warn("Failed decoding HTMLImageElement")}return URL.revokeObjectURL(r),o}function At(e,t){switch(t){case V.TRIANGLES:return $t(e);case V.TRIANGLE_STRIP:return Bt(e);case V.TRIANGLE_FAN:return Mt(e)}}function $t(e){return typeof e=="number"?be(e):_e(e)?new Uint16Array(e):e}function Bt(e){const t=typeof e=="number"?e:e.length;if(t<3)return[];const n=t-2,r=et(3*n);if(typeof e=="number"){let o=0;for(let a=0;a<n;a+=1)a%2==0?(r[o++]=a,r[o++]=a+1,r[o++]=a+2):(r[o++]=a+1,r[o++]=a,r[o++]=a+2)}else{let o=0;for(let a=0;a<n;a+=1)a%2==0?(r[o++]=e[a],r[o++]=e[a+1],r[o++]=e[a+2]):(r[o++]=e[a+1],r[o++]=e[a],r[o++]=e[a+2])}return r}function Mt(e){const t=typeof e=="number"?e:e.length;if(t<3)return new Uint16Array(0);const n=t-2,r=n<=65536?new Uint16Array(3*n):new Uint32Array(3*n);if(typeof e=="number"){let u=0;for(let s=0;s<n;++s)r[u++]=0,r[u++]=s+1,r[u++]=s+2;return r}const o=e[0];let a=e[1],i=0;for(let u=0;u<n;++u){const s=e[u+2];r[i++]=o,r[i++]=a,r[i++]=s,a=s}return r}function C(e){if(e==null)return null;const t=e.offset!=null?e.offset:Le,n=e.rotation!=null?e.rotation:0,r=e.scale!=null?e.scale:Ue,o=K(1,0,0,0,1,0,t[0],t[1],1),a=K(Math.cos(n),-Math.sin(n),0,Math.sin(n),Math.cos(n),0,0,0,1),i=K(r[0],0,0,0,r[1],0,0,0,1),u=pe();return te(u,a,i),te(u,o,u),u}class It{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class St{constructor(t,n,r){this.name=t,this.lodThreshold=n,this.pivotOffset=r,this.stageResources=new It,this.numberOfVertices=0}}async function Et(e,t){var f;const n=Re(je(e));if(n.fileType==="wosr"){const p=await(t.cache?t.cache.loadWOSR(n.url,t):dt(n.url,t)),{engineResources:h,referenceBoundingBox:d}=gt(p,t);return{lods:h,referenceBoundingBox:d,isEsriSymbolResource:!1,isWosr:!0}}let r;if(t.cache)r=await t.cache.loadGLTF(n.url,t,!!t.usePBR);else{const{loadGLTF:p}=await ke(()=>import("./loader-DtLKTYzP.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]));r=await p(new lt(t.streamDataRequester),n.url,t,t.usePBR)}const o=(f=r.model.meta)==null?void 0:f.ESRI_proxyEllipsoid,a=r.meta.isEsriSymbolResource&&o!=null&&r.meta.ESRI_webstyle==="EsriRealisticTreesStyle";a&&!r.customMeta.esriTreeRendering&&(r.customMeta.esriTreeRendering=!0,Ut(r,o));const i=!!t.usePBR,u=r.meta.isEsriSymbolResource?{usePBR:i,isSchematic:!1,treeRendering:a,mrrFactors:it}:{usePBR:i,isSchematic:!1,treeRendering:!1,mrrFactors:ut},s={...t.materialParameters,treeRendering:a},{engineResources:l,referenceBoundingBox:c}=Ot(r,u,s,t,n.specifiedLodIndex);return{lods:l,referenceBoundingBox:c,isEsriSymbolResource:r.meta.isEsriSymbolResource,isWosr:!1}}function Re(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:t[4]!=null?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function Ot(e,t,n,r,o){const a=e.model,i=new Array,u=new Map,s=new Map,l=a.lods.length,c=de();return a.lods.forEach((f,p)=>{const h=r.skipHighLods===!0&&(l>1&&p===0||l>3&&p===1)||r.skipHighLods===!1&&o!=null&&p!==o;if(h&&p!==0)return;const d=new St(f.name,f.lodThreshold,[0,0,0]);f.parts.forEach(w=>{const y=h?new G({},r):Pt(a,w,d,t,n,u,s,r),{geometry:x,vertexCount:A}=_t(w,y??new G({},r)),b=x.boundingInfo;b!=null&&p===0&&(D(c,b.bbMin),D(c,b.bbMax)),y!=null&&(d.stageResources.geometries.push(x),d.numberOfVertices+=A)}),h||i.push(d)}),{engineResources:i,referenceBoundingBox:c}}function Pt(e,t,n,r,o,a,i,u){var A,b;const s=e.materials.get(t.material);if(s==null)return null;const{normal:l,color:c,texCoord0:f,tangent:p}=t.attributes,h=t.material+(l?"_normal":"")+(c?"_color":"")+(f?"_texCoord0":"")+(p?"_tangent":""),d=t.attributes.texCoord0!=null,w=t.attributes.normal!=null,y=Lt(s.alphaMode);if(!a.has(h)){if(d){const P=(m,v=!1)=>{if(m!=null&&!i.has(m)){const T=e.textures.get(m);if(T){const $=T.data;i.set(m,new he(H($)?$.data:$,{...T.parameters,preMultiplyAlpha:!H($)&&v,encoding:H($)?$.encoding:void 0}))}}};P(s.colorTexture,y!==B.Opaque),P(s.normalTexture),P(s.occlusionTexture),P(s.emissiveTexture),P(s.metallicRoughnessTexture)}const g=1/me,E=s.color[0]**g,k=s.color[1]**g,N=s.color[2]**g,I=s.emissiveFactor[0]**g,R=s.emissiveFactor[1]**g,q=s.emissiveFactor[2]**g,L=s.colorTexture!=null&&d?i.get(s.colorTexture):null,O=at(s),S=((A=s.normalTextureTransform)==null?void 0:A.scale)!=null?(b=s.normalTextureTransform)==null?void 0:b.scale:Ge;a.set(h,new G({...r,transparent:y===B.Blend,customDepthTest:tt.Lequal,textureAlphaMode:y,textureAlphaCutoff:s.alphaCutoff,diffuse:[E,k,N],ambient:[E,k,N],opacity:s.opacity,doubleSided:s.doubleSided,doubleSidedType:"winding-order",cullFace:s.doubleSided?J.None:J.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:w?ue.Attribute:ue.ScreenDerivative,castShadows:!0,receiveShadows:s.receiveShadows,receiveAmbientOcclusion:s.receiveAmbientOcclustion,textureId:L!=null?L.id:void 0,colorMixMode:s.colorMixMode,normalTextureId:s.normalTexture!=null&&d?i.get(s.normalTexture).id:void 0,textureAlphaPremultiplied:L!=null&&!!L.parameters.preMultiplyAlpha,occlusionTextureId:s.occlusionTexture!=null&&d?i.get(s.occlusionTexture).id:void 0,emissiveTextureId:s.emissiveTexture!=null&&d?i.get(s.emissiveTexture).id:void 0,metallicRoughnessTextureId:s.metallicRoughnessTexture!=null&&d?i.get(s.metallicRoughnessTexture).id:void 0,emissiveFactor:[I,R,q],mrrFactors:O?ot:[s.metallicFactor,s.roughnessFactor,r.mrrFactors[2]],isSchematic:O,colorTextureTransformMatrix:C(s.colorTextureTransform),normalTextureTransformMatrix:C(s.normalTextureTransform),scale:[S[0],S[1]],occlusionTextureTransformMatrix:C(s.occlusionTextureTransform),emissiveTextureTransformMatrix:C(s.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:C(s.metallicRoughnessTextureTransform),...o},u))}const x=a.get(h);if(n.stageResources.materials.push(x),d){const g=E=>{E!=null&&n.stageResources.textures.push(i.get(E))};g(s.colorTexture),g(s.normalTexture),g(s.occlusionTexture),g(s.emissiveTexture),g(s.metallicRoughnessTexture)}return x}function _t(e,t){const n=e.attributes.position.count,r=At(e.indices||n,e.primitiveType),o=F(3*n),{typedBuffer:a,typedBufferStride:i}=e.attributes.position;Xe(o,a,e.transform,3,i);const u=[[_.POSITION,new j(o,r,3,!0)]];if(e.attributes.normal!=null){const l=F(3*n),{typedBuffer:c,typedBufferStride:f}=e.attributes.normal;Ve(U,e.transform),Ze(l,c,U,3,f),ne(U)&&ae(l,l),u.push([_.NORMAL,new j(l,r,3,!0)])}if(e.attributes.tangent!=null){const l=F(4*n),{typedBuffer:c,typedBufferStride:f}=e.attributes.tangent;ze(U,e.transform),Ye(l,c,U,4,f),ne(U)&&ae(l,l,4),u.push([_.TANGENT,new j(l,r,4,!0)])}if(e.attributes.texCoord0!=null){const l=F(2*n),{typedBuffer:c,typedBufferStride:f}=e.attributes.texCoord0;X(l,c,2,f),u.push([_.UV0,new j(l,r,2,!0)])}const s=e.attributes.color;if(s!=null){const l=new Uint8Array(4*n);s.elementCount===4?s instanceof xe?ie(l,s,1,255):(s instanceof He||s instanceof Je)&&ie(l,s,1/255,255):(l.fill(255),s instanceof ye?oe(l,s.typedBuffer,1,255,4,s.typedBufferStride):(e.attributes.color instanceof We||e.attributes.color instanceof Qe)&&oe(l,s.typedBuffer,1/255,255,4,e.attributes.color.typedBufferStride)),u.push([_.COLOR,new j(l,r,4,!0)])}return{geometry:new ge(t,u),vertexCount:n}}const U=pe();function Lt(e){switch(e){case"BLEND":return B.Blend;case"MASK":return B.Mask;case"OPAQUE":case null:case void 0:return B.Opaque}}function Ut(e,t){for(let n=0;n<e.model.lods.length;++n){const r=e.model.lods[n];for(const o of r.parts){const a=o.attributes.normal;if(a==null)return;const i=o.attributes.position,u=i.count,s=z(),l=z(),c=z(),f=new Float32Array(4*u),p=new Float32Array(3*u),h=Ce(Ke(),o.transform);let d=0,w=0;for(let y=0;y<u;y++){i.getVec(y,l),a.getVec(y,s),re(l,l,o.transform),Ne(c,l,t.center),se(c,c,t.radius);const x=c[2],A=qe(c),b=Math.min(.45+.55*A*A,1)**me;se(c,c,t.radius),h!==null&&re(c,c,h),Fe(c,c),n+1!==e.model.lods.length&&e.model.lods.length>1&&De(c,c,s,x>-1?.2:Math.min(-4*x-3.8,1)),p[d]=c[0],p[d+1]=c[1],p[d+2]=c[2],d+=3,f[w]=b,f[w+1]=b,f[w+2]=b,f[w+3]=1,w+=4}o.attributes.normal=new ye(p),o.attributes.color=new xe(f)}}}const rr=Object.freeze(Object.defineProperty({__proto__:null,fetch:Et,parseUrl:Re},Symbol.toStringTag,{value:"Module"}));export{Et as Y,lt as a,At as b,Tt as c,rr as d,vt as l,H as n,tr as o,er as r,C as s,Rt as t};
