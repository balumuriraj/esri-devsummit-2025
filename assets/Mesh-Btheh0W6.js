const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/loadGLTFMesh-DWq7nC9O.js","assets/CodeBlock-DBIw63CI.js","assets/index-BYYG-xAB.js","assets/index-CSP37mtf.css","assets/CodeBlock-CnI_Xe9l.css","assets/mat3f64-q3fE-ZOt.js","assets/MeshComponent-Ck8Vs5Sx.js","assets/meshProperties-C4iW0Ukm.js","assets/MeshVertexAttributes-BKYpM7jM.js","assets/meshVertexSpaceUtils-4Zq1VFQR.js","assets/MeshLocalVertexSpace-Bnv_Z6Nx.js","assets/BufferView-DLlhWng3.js","assets/vec3-mzinxiM7.js","assets/vec4-zzTQ7O0s.js","assets/types-D0PSWh4d.js","assets/loader-D9lE21UJ.js","assets/mat4f64-Dk4dwAN8.js","assets/quat-dahqodmP.js","assets/quatf64-aQ5IuZRd.js","assets/resourceUtils-DMXqOsaX.js","assets/basicInterfaces-CZwQPxTp.js","assets/indexUtils-zHzpRm2c.js","assets/Indices-hL4FAGed.js","assets/vertexSpaceConversion-DR_Oqnf_.js","assets/spatialReferenceEllipsoidUtils-BhfYBIg5.js","assets/computeTranslationToOriginAndRotation-DVeTEIZT.js","assets/projectPointToVector-CoPmnzvV.js","assets/gltfexport-Bg6RsF-N.js"])))=>i.map(i=>d[i]);
import{_ as ae}from"./index-BYYG-xAB.js";import{ae as te,ej as at,n as ne,d as w,cf as lt,cg as ct,e as le,n7 as ut,kV as xe,n8 as ce,X as pt,bm as ft,Z as ht,gx as mt,gp as Fe,aa as re,v as _,fH as dt,n9 as gt,gq as xt,jn as vt,bY as yt,b2 as wt,aI as $t,f7 as At,i as d,k as g,o as Oe,gz as ue,A as bt,d5 as pe,na as Le,gM as Ee,nb as De,gJ as ze,nc as Pe,nd as Ce,gD as Rt,j5 as se,d4 as St,ch as Mt,hD as _t,d3 as Ft,h1 as Ot,mF as Lt,g6 as Et,cu as Dt,cn as zt,bG as Pt,ne as Ct}from"./CodeBlock-DBIw63CI.js";import{z as je,w as J,k as Te,j as Be,d as jt}from"./axisAngleDegrees-Dd17NqqY.js";import{f as k}from"./MeshComponent-Ck8Vs5Sx.js";import{a as fe,n as K}from"./MeshLocalVertexSpace-Bnv_Z6Nx.js";import{N}from"./MeshTransform-BNFrd2kM.js";import{p as X}from"./MeshVertexAttributes-BKYpM7jM.js";import{t as H,l as Y,c as Ie,u as Tt}from"./meshVertexSpaceUtils-4Zq1VFQR.js";import{f as Bt}from"./triangulationUtils-DANtO503.js";import{c as M}from"./projectPointToVector-CoPmnzvV.js";import{F as v,B as he,O as E,n as It,k as ke,g as Ue,E as Ge,w as Ve,h as Ne,R as qe,G as He}from"./vertexSpaceConversion-DR_Oqnf_.js";import{e as oe}from"./mat4f64-Dk4dwAN8.js";import{a as de}from"./spatialReferenceEllipsoidUtils-BhfYBIg5.js";import{m as We}from"./computeTranslationToOriginAndRotation-DVeTEIZT.js";import{r as ve,a as kt}from"./vec3-mzinxiM7.js";import{o as ye,h as Ut,m as Gt}from"./External-DNnbEP4G.js";import{e as Ze}from"./mat3f64-q3fE-ZOt.js";import{b as Vt}from"./quat-dahqodmP.js";import{e as Nt,r as qt}from"./quatf64-aQ5IuZRd.js";import"./meshProperties-C4iW0Ukm.js";import"./earcut-D9gy186-.js";import"./Indices-hL4FAGed.js";import"./plane-CcKX1x-D.js";import"./deduplicate-Bd2W-fYI.js";import"./BufferView-DLlhWng3.js";import"./vec4-zzTQ7O0s.js";const Ht="Mesh must be loaded before applying operations",Wt="Provided component is not part of the list of components",Zt="Expected polygon to be a Polygon instance",V="Expected location to be a Point instance";class Jt extends te{constructor(){super("invalid-input:location",V)}}function ge(e,t,n,r){if(r!==void 0){at(e(),"option: geographic",{replacement:"Use mesh `vertexSpace` and spatial reference to control how operations are performed instead.",version:"4.30",warnOnce:!0});const s=t.type==="local";if(!H(t)||r===s)return n.isGeographic||n.isWebMercator&&r;e().warnOnce(`Specifying the 'geographic' parameter (${r}) for a Mesh vertex space of type "${t.type}" is not supported. This parameter will be ignored.`)}switch(t.type){case"georeferenced":return n.isGeographic;case"local":return n.isGeographic||n.isWebMercator}}const q=()=>ne.getLogger("esri.geometry.support.meshUtils.centerAt");function Kt(e,t,n){var i;if(!((i=e.vertexAttributes)!=null&&i.position))return;const{vertexSpace:r}=e,s=(n==null?void 0:n.origin)??e.origin,o=ge(q,r,s.spatialReference,n==null?void 0:n.geographic);H(r)?Xt(e,t,s):o?Yt(e,t,s):Qt(e,t,s)}function Xt(e,t,n){const{vertexSpace:r}=e;if(!H(r))return;const s=Ke,o=Je;if(!M(t,o,e.spatialReference))return void v(q(),t.spatialReference,e.spatialReference,E);if(!M(n,s,e.spatialReference)){const a=e.origin;return s[0]=a.x,s[1]=a.y,s[2]=a.z,void v(q(),n.spatialReference,e.spatialReference,E)}const i=lt(tn,o,s);r.origin=ct(w(),r.origin,i)}function Yt(e,t,n){const r=le(n.x,n.y,n.z??0),s=he(e,new fe({origin:r}));if(!s)return;const o=le(t.x,t.y,t.z??0),i=he({vertexAttributes:s,spatialReference:e.spatialReference,vertexSpace:new fe({origin:o})},K.absolute);if(!i)return;const{position:a,normal:l,tangent:u}=i;e.vertexAttributes.position=a,e.vertexAttributes.normal=l,e.vertexAttributes.tangent=u,e.vertexAttributesChanged()}function Qt(e,t,n){const r=Ke,s=Je;if(M(t,s,e.spatialReference)){if(!M(n,r,e.spatialReference)){const o=e.origin;return r[0]=o.x,r[1]=o.y,r[2]=o.z,void v(q(),n.spatialReference,e.spatialReference,E)}en(e.vertexAttributes.position,s,r),e.vertexAttributesChanged()}else v(q(),t.spatialReference,e.spatialReference,E)}function en(e,t,n){if(e)for(let r=0;r<e.length;r+=3)for(let s=0;s<3;s++)e[r+s]+=t[s]-n[s]}const Je=w(),Ke=w(),tn=w();function nn(e){const{spatialReference:t,vertexSpace:n,untransformedBounds:r}=e,s=ut(r,rn);if(H(n)&&e.transform&&ve(s,s,e.transform.localMatrix),n.type==="georeferenced"){const a=n.origin;return a&&kt(s,s,a),xe(ce(s),t)}const o=de(t),i=n.origin;if(!pt(o,t)){const[a,l,u]=i;return new ft({xmin:a,ymin:l,zmin:u,xmax:a,ymax:l,zmax:u,spatialReference:t})}return We(t,i,we,o),ve(s,s,we),ht(s,o,0,s,t,0),xe(ce(s),t)}const we=oe(),rn=mt(24);async function sn(e,t,n){const{source:r}=t,{loadGLTFMesh:s}=await Fe(ae(()=>import("./loadGLTFMesh-DWq7nC9O.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26])),n),o=await an(r,n);re(n);const i=s(new _({x:0,y:0,z:0,spatialReference:e.spatialReference}),o.url,{resolveFile:on(o),signal:n==null?void 0:n.signal,expectedType:o.type,unitConversionDisabled:t.unitConversionDisabled});i.then(()=>o.dispose(),()=>o.dispose());const{vertexAttributes:a,components:l}=await i;e.vertexAttributes=a,e.components=l}function on(e){const t=dt(e.url);return n=>{const r=gt(n,t,t),s=r?r.replace(/^ *\.\//,""):null;return(s?e.files.get(s):null)??n}}async function an(e,t){if(Array.isArray(e)){if(!e.length)throw new te("mesh-load-external:missing-assets","There must be at least one file to load");return e[0]instanceof File?cn(e):un(e,t)}return Xe(e)}async function ln(e,t){const{parts:n,assetMimeType:r,assetName:s}=e;if(n.length===1)return new Q(n[0].partUrl);const o=await e.toBlob(t);return re(t),Q.fromBlob(o,nt(s,r))}function Xe(e){return Q.fromBlob(e,nt(e.name,e.type))}function cn(e){return et(e.map(t=>({name:t.name,mimeType:t.type,source:Xe(t)})))}async function un(e,t){const n=await xt(e.map(async r=>{const s=await ln(r);return re(t),{name:r.assetName,mimeType:r.assetMimeType,source:s}}));if(vt(t))throw n.forEach(r=>r.source.dispose()),yt();return et(n)}const Ye=/^model\/gltf\+json$/,Qe=/^model\/gltf-binary$/,me=/\.gltf$/i,pn=/\.glb$/i;function $e({mimeType:e,source:t,name:n}){return Ye.test(e)||me.test(n)?{url:t.url,type:"gltf"}:Qe.test(e)||pn.test(n)?{url:t.url,type:"glb"}:null}function et(e){const t=new Map;let n=null,r=null;for(const o of e){const{source:i,name:a}=o;n??(n=$e(o)),a==="ESRI3DO_NORM.glb"&&(r=$e(o)),t.set(a,i.url),i.files.forEach((l,u)=>t.set(u,l))}const s=r??n;if(s==null)throw new te("mesh-load-external:missing-files","Missing files to load external mesh source");return new Q(s.url,()=>e.forEach(({source:o})=>o.dispose()),t,s.type)}let Q=class tt{constructor(t,n=()=>{},r=new Map,s){this.url=t,this.dispose=n,this.files=r,this.type=s}static fromBlob(t,n){const r=URL.createObjectURL(t);return new tt(r,()=>URL.revokeObjectURL(r),void 0,n)}};function nt(e,t){return Ye.test(t)||me.test(e)?"gltf":Qe.test(t)||me.test(e)?"glb":void 0}let S=class extends wt{constructor(e){super(e),this.externalSources=new $t,this._explicitDisplaySource=null,this.georeferenced=!1,this.addHandles(At(()=>this.externalSources,"after-remove",({item:t})=>{t===this._explicitDisplaySource&&(this._explicitDisplaySource=null)},{sync:!0,onListenerRemove:()=>this._explicitDisplaySource=null}))}get displaySource(){return this._explicitDisplaySource??this._implicitDisplaySource}set displaySource(e){if(e!=null&&!ye(e))throw new Error("Cannot use this source for display: it is not in a supported format.");this._explicitDisplaySource=e,e&&this.externalSources.every(t=>!Ut(t,e))&&this.externalSources.add(e)}clearSources(){this.externalSources.removeAll()}getExternalSourcesOnService(e){return this.externalSources.items.filter(t=>Gt(t,e))}get _implicitDisplaySource(){return this.externalSources.find(ye)}};d([g()],S.prototype,"externalSources",void 0),d([g()],S.prototype,"displaySource",null),d([g()],S.prototype,"_implicitDisplaySource",null),d([g()],S.prototype,"_explicitDisplaySource",void 0),d([g()],S.prototype,"georeferenced",void 0),S=d([Oe("esri.geometry.support.meshUtils.Metadata")],S);function fn(){const{faceDescriptions:e,faceVertexOffsets:t,uvScales:n}=$n,r=4*e.length,s=new Float64Array(3*r),o=new Float32Array(3*r),i=new Float32Array(2*r),a=new Uint32Array(2*e.length*3);let l=0,u=0,c=0,f=0;for(let h=0;h<e.length;h++){const p=e[h],x=l/3;for(const A of t)a[f++]=x+A;const D=p.corners;for(let A=0;A<4;A++){const z=D[A];let $=0;i[c++]=.25*n[A][0]+p.uvOrigin[0],i[c++]=p.uvOrigin[1]-.25*n[A][1];for(let R=0;R<3;R++)p.axis[R]!==0?(s[l++]=.5*p.axis[R],o[u++]=p.axis[R]):(s[l++]=.5*z[$++],o[u++]=0)}}return{position:s,normal:o,uv:i,faces:a}}function hn(e,t){const n=e.components[0],r=n.faces,s=An[t],o=6*s,i=new Array(6),a=new Array(r.length-6);let l=0,u=0;for(let c=0;c<r.length;c++)c>=o&&c<o+6?i[l++]=r[c]:a[u++]=r[c];if(e.vertexAttributes.uv!=null){const c=new Float32Array(e.vertexAttributes.uv),f=4*s*2,h=[0,1,1,1,1,0,0,0];for(let p=0;p<h.length;p++)c[f+p]=h[p];e.vertexAttributes.uv=c}return e.components=[new k({faces:i,material:n.material}),new k({faces:a})],e}function mn(e=0){const t=Math.round(8*2**e),n=2*t,r=(t-1)*(n+1)+2*n,s=new Float64Array(3*r),o=new Float32Array(3*r),i=new Float32Array(2*r),a=new Uint32Array(3*((t-1)*n*2));let l=0,u=0,c=0,f=0;for(let h=0;h<=t;h++){const p=h/t*Math.PI+.5*Math.PI,x=Math.cos(p),D=Math.sin(p);m[2]=D;const A=h===0||h===t,z=A?n-1:n;for(let $=0;$<=z;$++){const R=$/z*2*Math.PI;m[0]=-Math.sin(R)*x,m[1]=Math.cos(R)*x;for(let F=0;F<3;F++)s[l]=.5*m[F],o[l]=m[F],++l;i[u++]=($+(A?.5:0))/n,i[u++]=h/t,h!==0&&$!==n&&(h!==t&&(a[c++]=f,a[c++]=f+1,a[c++]=f-n),h!==1&&(a[c++]=f,a[c++]=f-n,a[c++]=f-n-1)),f++}}return{position:s,normal:o,uv:i,faces:a}}function dn(e=0){const n=Math.round(16*2**e),r=4*(n+1)+2*n,s=new Float64Array(3*r),o=new Float32Array(3*r),i=new Float32Array(2*r),a=new Uint32Array(3*(4*n));let l=0,u=0,c=0,f=0,h=0;for(let p=0;p<=5;p++){const x=p===0||p===5,D=p<=1||p>=4,A=p===2||p===4,z=x?n-1:n;for(let $=0;$<=z;$++){const R=$/z*2*Math.PI,F=x?0:.5;m[0]=F*Math.sin(R),m[1]=F*-Math.cos(R),m[2]=p<=2?.5:-.5;for(let j=0;j<3;j++)s[l++]=m[j],o[u++]=D?j===2?p<=1?1:-1:0:j===2?0:m[j]/F;i[c++]=($+(x?.5:0))/n,i[c++]=p<=1?1*p/3:p<=3?1*(p-2)/3+1/3:1*(p-4)/3+2/3,A||p===0||$===n||(p!==5&&(a[f++]=h,a[f++]=h+1,a[f++]=h-n),p!==1&&(a[f++]=h,a[f++]=h-n,a[f++]=h-n-1)),h++}}return{position:s,normal:o,uv:i,faces:a}}function gn(e,t){const n=typeof t=="number"?t:t!=null?t.width:1,r=typeof t=="number"?t:t!=null?t.height:1;switch(e){case"up":case"down":return{width:n,depth:r};case"north":case"south":return{width:n,height:r};case"east":case"west":return{depth:n,height:r}}}function xn(e){const t=G.facingAxisOrderSwap[e],n=G.position,r=G.normal,s=new Float64Array(n.length),o=new Float32Array(r.length);let i=0;for(let a=0;a<4;a++){const l=i;for(let u=0;u<3;u++){const c=t[u],f=Math.abs(c)-1,h=c>=0?1:-1;s[i]=n[l+f]*h,o[i]=r[l+f]*h,i++}}return{position:s,normal:o,uv:new Float32Array(G.uv),faces:new Uint32Array(G.faces),isPlane:!0}}const W=1,U=2,ie=3,G={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[ie,W,U],west:[-3,-1,U],north:[-1,ie,U],south:[W,-3,U],up:[W,U,ie],down:[W,-2,-3]}};function Z(e,t,n){e.isPlane||vn(e),wn(e,yn(n==null?void 0:n.size,n==null?void 0:n.unit,t.spatialReference));const r=Y(t,n),s=t.spatialReference.isGeographic?Y(t):r,o=he({vertexAttributes:e,vertexSpace:s,spatialReference:t.spatialReference},r,{allowBufferReuse:!0});return{vertexAttributes:new X({...o,uv:e.uv}),vertexSpace:r,components:[new k({faces:e.faces,material:(n==null?void 0:n.material)||null})],spatialReference:t.spatialReference}}function vn(e){for(let t=0;t<e.position.length;t+=3)e.position[t+2]+=.5}function yn(e,t,n){const r=It(t,n);if(e==null&&r===1)return null;if(e==null)return[r,r,r];if(typeof e=="number"){const s=e*r;return[s,s,s]}return[e.width!=null?e.width*r:r,e.depth!=null?e.depth*r:r,e.height!=null?e.height*r:r]}function wn(e,t){if(t!=null){O[0]=t[0],O[4]=t[1],O[8]=t[2];for(let n=0;n<e.position.length;n+=3){for(let r=0;r<3;r++)m[r]=e.position[n+r];ue(m,m,O);for(let r=0;r<3;r++)e.position[n+r]=m[r]}if(t[0]!==t[1]||t[1]!==t[2]){O[0]=1/t[0],O[4]=1/t[1],O[8]=1/t[2];for(let n=0;n<e.normal.length;n+=3){for(let r=0;r<3;r++)m[r]=e.normal[n+r];ue(m,m,O),bt(m,m);for(let r=0;r<3;r++)e.normal[n+r]=m[r]}}}}const $n={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},An={south:0,east:1,north:2,west:3,up:4,down:5},m=w(),O=Ze(),P=()=>ne.getLogger("esri.geometry.support.meshUtils.rotate");function bn(e,t,n){var l;if(!((l=e.vertexAttributes)!=null&&l.position)||t[3]===0)return;const{spatialReference:r,vertexSpace:s}=e,o=(n==null?void 0:n.origin)??e.origin,i=n==null?void 0:n.geographic,a=ge(P,s,r,i);Ie(e)?Rn(e,t,o):a?Sn(e,t,o):Mn(e,t,o)}function Rn(e,t,n){e.transform??(e.transform=new N);const{vertexSpace:r,transform:s,spatialReference:o}=e,[i,a,l]=r.origin,u=new _({x:i,y:a,z:l,spatialReference:o}),c=T;if(u.equals(n))pe(c,0,0,0);else if(!ke(c,n,e))return void v(P(),n.spatialReference,o,E);Vt(Se,J(t),je(t));const f=Le(Ae,Se,se,_t,c),{localMatrix:h}=s,p=Ee(Ae,f,h);s.scale=De(w(),p),ze(p,p,Pe(T,s.scale));const x=s.rotationAxis;s.rotation=Te(p),s.rotationAngle===0&&(s.rotationAxis=x),s.translation=Ce(w(),p)}function Sn(e,t,n){const r=e.spatialReference,s=de(r),o=rt;if(!M(n,o,s)&&(v(P(),n.spatialReference,s,"Falling back to mesh origin"),!M(e.origin,o,s)))return void v(P(),e.origin.spatialReference,s);const i=e.vertexAttributes.position,a=e.vertexAttributes.normal,l=e.vertexAttributes.tangent,u=new Float64Array(i.length),c=a!=null?new Float32Array(a.length):null,f=l!=null?new Float32Array(l.length):null;We(s,o,ee,s),Rt(Re,ee);const h=be;ue(J(be),J(t),Re),h[3]=t[3],Ue(i,r,u,s)&&(a==null||c==null||Ge(a,i,r,u,s,c))&&(l==null||f==null||Ve(l,i,r,u,s,f))?(I(u,h,3,o),Ne(u,s,i,r)&&(a==null||c==null||(I(c,h,3),qe(c,i,r,u,s,a)))&&(l==null||f==null||(I(f,h,4),He(f,i,r,u,s,l)))?e.vertexAttributesChanged():v(P(),s,r)):v(P(),r,s)}function Mn(e,t,n){const r=rt;if(!M(n,r,e.spatialReference)){const s=e.origin;return r[0]=s.x,r[1]=s.y,r[2]=s.z,void v(P(),n.spatialReference,e.spatialReference,E)}I(e.vertexAttributes.position,t,3,r),I(e.vertexAttributes.normal,t,3),I(e.vertexAttributes.tangent,t,4),e.vertexAttributesChanged()}function I(e,t,n,r=se){if(e!=null){St(ee,je(t),J(t));for(let s=0;s<e.length;s+=n){for(let o=0;o<3;o++)T[o]=e[s+o]-r[o];Mt(T,T,ee);for(let o=0;o<3;o++)e[s+o]=T[o]+r[o]}}}const T=w(),Ae=oe(),be=Be(),ee=oe(),Re=Ze(),rt=w(),Se=Nt(),C=()=>ne.getLogger("esri.geometry.support.meshUtils.scale");function _n(e,t,n){var l;if(!((l=e.vertexAttributes)!=null&&l.position))return;const{vertexSpace:r,spatialReference:s}=e,o=(n==null?void 0:n.origin)??e.origin,i=n==null?void 0:n.geographic,a=ge(C,r,s,i);Ie(e)?Fn(e,t,o):a?On(e,t,o):Ln(e,t,o)}function Fn(e,t,n){e.transform??(e.transform=new N);const{vertexSpace:r,transform:s,spatialReference:o}=e,[i,a,l]=r.origin,u=new _({x:i,y:a,z:l,spatialReference:o}),c=B;if(u.equals(n))pe(c,0,0,0);else if(!ke(c,n,e))return void v(C(),n.spatialReference,o,E);const f=pe(En,t,t,t),h=Le(Me,qt,se,f,c),{localMatrix:p}=s,x=Ee(Me,h,p);s.scale=De(w(),x),ze(x,x,Pe(B,s.scale));const D=s.rotationAxis;s.rotation=Te(x),s.rotationAngle===0&&(s.rotationAxis=D),s.translation=Ce(w(),x)}function On(e,t,n){const r=e.spatialReference,s=de(r),o=ot;if(!M(n,o,s)&&(v(C(),n.spatialReference,s,"Falling back to mesh origin"),!M(e.origin,o,s)))return void v(C(),e.origin.spatialReference,s);const i=e.vertexAttributes.position,a=e.vertexAttributes.normal,l=e.vertexAttributes.tangent,u=new Float64Array(i.length),c=a!=null?new Float32Array(a.length):null,f=l!=null?new Float32Array(l.length):null;Ue(i,r,u,s)&&(a==null||c==null||Ge(a,i,r,u,s,c))&&(l==null||f==null||Ve(l,i,r,u,s,f))?(st(u,t,o),Ne(u,s,i,r)&&(a==null||c==null||qe(c,i,r,u,s,a))&&(l==null||f==null||He(f,i,r,u,s,l))?e.vertexAttributesChanged():v(C(),s,r)):v(C(),r,s)}function Ln(e,t,n){const r=ot;if(!M(n,r,e.spatialReference)){const s=e.origin;return r[0]=s.x,r[1]=s.y,r[2]=s.z,void v(C(),n.spatialReference,e.spatialReference,E)}st(e.vertexAttributes.position,t,r),e.vertexAttributesChanged()}function st(e,t,n=se){if(e)for(let r=0;r<e.length;r+=3){for(let s=0;s<3;s++)B[s]=e[r+s]-n[s];Ft(B,B,t);for(let s=0;s<3;s++)e[r+s]=B[s]+n[s]}}const B=w(),En=w(),Me=oe(),ot=w();var b;const it="esri.geometry.Mesh";function L(){return ne.getLogger(it)}const Dn={base:null,key:"type",defaultKeyValue:"georeferenced",typeMap:{georeferenced:K,local:fe}};let y=b=class extends Ot.LoadableMixin(Lt.EsriPromiseMixin(Et)){constructor(e){super(e),this.components=null,this.vertexSpace=new K,this.transform=null,this.metadata=new S,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new X,this.type="mesh"}initialize(){(this.metadata.externalSources.length===0||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when(()=>{this.addHandles(Dt(()=>{var e;return{vertexAttributes:this.vertexAttributes,components:(e=this.components)==null?void 0:e.map(t=>t.clone())}},()=>this._clearSources(),{once:!0,sync:!0}))})}get hasExtent(){var e;return this.loaded?this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0):((e=this.metadata.displaySource)==null?void 0:e.extent)!=null}get _transformedExtent(){const{spatialReference:e,vertexSpace:t}=this,n=this;return nn({get transform(){return n.transform},vertexSpace:t,spatialReference:e,untransformedBounds:this._untransformedBounds})}get _untransformedBounds(){const{vertexAttributes:{position:e},components:t}=this;return e.length===0||(t==null?void 0:t.length)===0?zt(Ct):ce(e)}get origin(){const e=Tt(this.vertexSpace,this.spatialReference);if(e!=null)return e;const{center:t,zmin:n}=this._transformedExtent;return new _({x:t.x,y:t.y,z:n,spatialReference:this.spatialReference})}get extent(){var e,t;return this.loaded||((t=(e=this.metadata)==null?void 0:e.displaySource)==null?void 0:t.extent)==null?this._transformedExtent:this.metadata.displaySource.extent.clone()}addComponent(e){this._checkIfLoaded("addComponent()")&&(this.components||(this.components=[]),this.components.push(k.from(e)),this.notifyChange("components"))}removeComponent(e){if(this._checkIfLoaded("removeComponent()")){if(this.components){const t=this.components.indexOf(e);if(t!==-1)return this.components.splice(t,1),void this.notifyChange("components")}L().error("removeComponent()",Wt)}}rotate(e,t,n,r){return jt(e,t,n,_e),bn(this,_e,r),this}offset(e,t,n){if(!this._checkIfLoaded("offset()"))return this;const{vertexSpace:r,vertexAttributes:s}=this,o=s==null?void 0:s.position;if(!o)return this;if(H(r)){const[i,a,l]=r.origin;r.origin=le(i+e,a+t,l+n)}else{for(let i=0;i<o.length;i+=3)o[i]+=e,o[i+1]+=t,o[i+2]+=n;this.vertexAttributesChanged()}return this}scale(e,t){return this._checkIfLoaded("scale()")?(_n(this,e,t),this):this}centerAt(e,t){return this._checkIfLoaded("centerAt()")?(Kt(this,e,t),this):this}load(e){const{metadata:{displaySource:t}}=this;return t&&this.addResolvingPromise(sn(this,t,e)),Promise.resolve(this)}addExternalSources(e){this.metadata.externalSources.addMany(e)}updateDisplaySource(e){this.metadata.displaySource=e}clone(){return this.cloneAndModifyVertexAttributes(this.vertexAttributes.clone(),this.vertexSpace.clone(),{preserveMetadata:!0})}cloneAndModifyVertexAttributes(e,t,n){var o;let r=null;if(this.components){const i=new Map,a=new Map;r=this.components.map(l=>l.cloneWithDeduplication(i,a))}const s={components:r,spatialReference:this.spatialReference,vertexAttributes:e,vertexSpace:t,transform:((o=this.transform)==null?void 0:o.clone())??null,metadata:n!=null&&n.preserveMetadata?this.metadata.clone():new S};return new b(s)}cloneShallow(){return new b({components:this.components,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes,vertexSpace:this.vertexSpace.clone(),transform:this.transform,metadata:this.metadata})}vertexAttributesChanged(){this.notifyChange("vertexAttributes")}async toBinaryGLTF(e){const[{toBinaryGLTF:t}]=await Promise.all([ae(()=>import("./gltfexport-Bg6RsF-N.js"),__vite__mapDeps([27,1,2,3,4,17,5,18,6,7,23,16,24,25,26,9,10,12,11,13,19,20])),this.load(e)]);return re(e),await t(this,e)}get usedMemory(){return this.components?this.components.reduce((e,t)=>e+t.memoryUsage,this.vertexAttributes.usedMemory):this.vertexAttributes.usedMemory}_clearSources(){this.metadata.clearSources()}_checkIfLoaded(e){return!!this.loaded||(L().error(e,Ht),!1)}static createBox(e,t){if(!(e instanceof _))return L().error(".createBox()",V),null;const n=new b(Z(fn(),e,t));return t!=null&&t.imageFace&&t.imageFace!=="all"?hn(n,t.imageFace):n}static createSphere(e,t){return e instanceof _?new b(Z(mn((t==null?void 0:t.densificationFactor)||0),e,t)):(L().error(".createSphere()",V),null)}static createCylinder(e,t){return e instanceof _?new b(Z(dn((t==null?void 0:t.densificationFactor)||0),e,t)):(L().error(".createCylinder()",V),null)}static createPlane(e,t){if(!(e instanceof _))return L().error(".createPlane()",V),null;const n=(t==null?void 0:t.facing)??"up",r=gn(n,t==null?void 0:t.size);return new b(Z(xn(n),e,{...t,size:r}))}static createFromPolygon(e,t){if(!(e instanceof Pt))return L().error(".createFromPolygon()",Zt),null;const n=Bt(e);return new b({vertexAttributes:new X({position:n.position}),components:[new k({faces:n.faces,shading:"flat",material:(t==null?void 0:t.material)??null})],spatialReference:e.spatialReference,vertexSpace:new K})}static async createFromGLTF(e,t,n){if(!(e instanceof _)){const s=new Jt;throw L().error(".createfromGLTF()",s.message),s}const{loadGLTFMesh:r}=await Fe(ae(()=>import("./loadGLTFMesh-DWq7nC9O.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26])),n);return new b(await r(e,t,n))}static createWithExternalSource(e,t,n){var c;const r=(n==null?void 0:n.extent)??null,{spatialReference:s}=e,o=((c=n==null?void 0:n.transform)==null?void 0:c.clone())??new N,i=Y(e,n),a=n==null?void 0:n.unitConversionDisabled,l={source:t,extent:r,unitConversionDisabled:a},u=new S;return u.externalSources.push(l),new b({metadata:u,transform:o,vertexSpace:i,spatialReference:s})}static createIncomplete(e,t){var i;const{spatialReference:n}=e,r=((i=t==null?void 0:t.transform)==null?void 0:i.clone())??new N,s=Y(e,t),o=new b({transform:r,vertexSpace:s,spatialReference:n});return o.addResolvingPromise(Promise.reject(new te("mesh-incomplete","Mesh resources are not complete"))),o}};d([g({type:[k],json:{write:!0}})],y.prototype,"components",void 0),d([g({nonNullable:!0,types:Dn,constructOnly:!0,json:{write:!0}})],y.prototype,"vertexSpace",void 0),d([g({type:N,json:{write:!0}})],y.prototype,"transform",void 0),d([g({constructOnly:!0})],y.prototype,"metadata",void 0),d([g()],y.prototype,"hasExtent",null),d([g()],y.prototype,"_transformedExtent",null),d([g()],y.prototype,"_untransformedBounds",null),d([g()],y.prototype,"origin",null),d([g({readOnly:!0,json:{read:!1}})],y.prototype,"extent",null),d([g({readOnly:!0,json:{read:!1,write:!0,default:!0}})],y.prototype,"hasZ",void 0),d([g({readOnly:!0,json:{read:!1,write:!0,default:!1}})],y.prototype,"hasM",void 0),d([g({type:X,nonNullable:!0,json:{write:!0}})],y.prototype,"vertexAttributes",void 0),y=b=d([Oe(it)],y);const _e=Be(),or=y;export{or as default};
