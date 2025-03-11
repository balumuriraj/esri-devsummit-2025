const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/intersectsOperator-DRnqghSb.js","assets/OperatorIntersects-DXGiYk7V.js","assets/ProjectionTransformation-CftieGG4.js","assets/Transformation2D-Bb72B6CZ.js","assets/SimpleGeometryCursor-B92kdZ15.js","assets/CodeBlock-DBIw63CI.js","assets/index-BYYG-xAB.js","assets/index-CSP37mtf.css","assets/CodeBlock-CnI_Xe9l.css","assets/jsonConverter-yG-T6Xd8.js","assets/containsOperator-qq3-DrMc.js","assets/crossesOperator-CEYewJwf.js","assets/OperatorCrosses-CdnOv26z.js","assets/disjointOperator-DMkWd-rB.js","assets/overlapsOperator-iZU8ZIbM.js","assets/OperatorOverlaps-DPraFV8b.js","assets/touchesOperator-Dlc3zwJY.js","assets/OperatorTouches-BsWZbiI1.js","assets/withinOperator-BO-z6WxO.js","assets/OperatorWithin-CHyq1zUU.js"])))=>i.map(i=>d[i]);
import{_ as y}from"./index-BYYG-xAB.js";import{lo as $,lp as V,aW as A,dz as M,lq as q,lr as D,ae as h,dO as T,fC as x,cJ as I}from"./CodeBlock-DBIw63CI.js";import{m as L,R as F,K as j,C as W,j as E,d as P,b as J,W as w}from"./featureConversionUtils-CKmftsHB.js";import{e as d}from"./OptimizedFeature-C7vq2Etq.js";import{x as U}from"./queryUtils-B4LAuMaE.js";const N=new d,Z=new d,g=new d,c={esriGeometryPoint:E,esriGeometryPolyline:W,esriGeometryPolygon:j,esriGeometryMultipoint:F};function fe(e,t,r,i=e.hasZ,s=e.hasM){if(t==null)return null;const l=e.hasZ&&i,n=e.hasM&&s;if(r){const o=P(g,t,e.hasZ,e.hasM,"esriGeometryPoint",r,i,s);return E(o,l,n)}return E(t,l,n)}function S(e,t,r,i,s,l,n=t,o=r){var R,m,_;const u=t&&n,a=r&&o,f=i!=null?"coords"in i?i:i.geometry:null;if(f==null)return null;if(s){let p=L(Z,f,t,r,e,s,n,o);return l&&(p=P(g,p,u,a,e,l)),((R=c[e])==null?void 0:R.call(c,p,u,a))??null}if(l){const p=P(g,f,t,r,e,l,n,o);return((m=c[e])==null?void 0:m.call(c,p,u,a))??null}return J(N,f,t,r,n,o),((_=c[e])==null?void 0:_.call(c,N,u,a))??null}function pe(e){return e&&O in e?JSON.parse(JSON.stringify(e,Y)):e}const O="_geVersion",Y=(e,t)=>e===O?void 0:t;function z(e){return e==="mesh"?$:V(e)}function b(e,t){return e?t?4:3:t?3:2}function K(e,t,r,i){return C(e,t,r,i.coords[0],i.coords[1])}function k(e,t,r,i,s,l){const n=b(s,l),{coords:o,lengths:u}=i;if(!u)return!1;for(let a=0,f=0;a<u.length;a++,f+=n)if(!C(e,t,r,o[f],o[f+1]))return!1;return!0}function C(e,t,r,i,s){if(!e)return!1;const l=b(t,r),{coords:n,lengths:o}=e;let u=!1,a=0;for(const f of o)u=B(u,n,l,a,f,i,s),a+=f*l;return u}function B(e,t,r,i,s,l,n){let o=e,u=i;for(let a=i,f=i+s*r;a<f;a+=r){u=a+r,u===f&&(u=i);const R=t[a],m=t[a+1],_=t[u],p=t[u+1];(m<n&&p>=n||p<n&&m>=n)&&R+(n-m)/(p-m)*(_-R)<l&&(o=!o)}return o}const G="unsupported-query",v={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultiPatch:!1,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultiPatch:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function H(e){return e!=null&&v.spatialRelationship[e]===!0}function Q(e){return e!=null&&v.queryGeometry[x(e)]===!0}function X(e){return e!=null&&v.layerGeometry[e]===!0}const ee={esriSpatialRelIntersects:()=>y(()=>import("./intersectsOperator-DRnqghSb.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])),esriSpatialRelContains:()=>y(()=>import("./containsOperator-qq3-DrMc.js"),__vite__mapDeps([10,2,3,4,5,6,7,8,9])),esriSpatialRelCrosses:()=>y(()=>import("./crossesOperator-CEYewJwf.js"),__vite__mapDeps([11,12,2,3,4,5,6,7,8,9])),esriSpatialRelDisjoint:()=>y(()=>import("./disjointOperator-DMkWd-rB.js"),__vite__mapDeps([13,2,3,4,5,6,7,8,9])),esriSpatialRelEnvelopeIntersects:null,esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:()=>y(()=>import("./overlapsOperator-iZU8ZIbM.js"),__vite__mapDeps([14,15,2,3,4,5,6,7,8,9])),esriSpatialRelTouches:()=>y(()=>import("./touchesOperator-Dlc3zwJY.js"),__vite__mapDeps([16,17,2,3,4,5,6,7,8,9])),esriSpatialRelWithin:()=>y(()=>import("./withinOperator-BO-z6WxO.js"),__vite__mapDeps([18,19,2,3,4,5,6,7,8,9])),esriSpatialRelRelation:null};function te(e){const t=ee[e];if(t==null)throw new Error(`Cannot load unsupported spatial operator: ${e}`);return t()}async function ce(e,t,r,i,s){if(A(t)){if(r==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains")){const n=w(new d,t,!1,!1);return o=>K(n,!1,!1,o)}if(r==="esriGeometryMultipoint"){const n=w(new d,t,!1,!1);if(e==="esriSpatialRelContains")return o=>k(n,!1,!1,o,i,s)}}if(M(t)){if(r==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains"))return n=>q(t,S(r,i,s,n));if(r==="esriGeometryMultipoint"&&e==="esriSpatialRelContains")return n=>D(t,S(r,i,s,n));if(e==="esriSpatialRelIntersects"){const n=z(r);return o=>n(t,S(r,i,s,o))}}e==="esriSpatialRelEnvelopeIntersects"&&(e="esriSpatialRelIntersects");const l=await te(e);return n=>l.execute(t,S(r,i,s,n))}async function me(e,t,r){var l;const{spatialRel:i,geometry:s}=e;if(s){if(!H(i))throw new h(G,"Unsupported query spatial relationship",{query:e});if(T(s.spatialReference)&&T(r)){if(!Q(s))throw new h(G,"Unsupported query geometry type",{query:e});if(!X(t))throw new h(G,"Unsupported layer geometry type",{query:e});if(e.outSR)return U((l=e.geometry)==null?void 0:l.spatialReference,e.outSR)}}}function ye(e){if(M(e))return!0;if(A(e)){for(const t of e.rings)if(t.length!==5||t[0][0]!==t[1][0]||t[0][0]!==t[4][0]||t[2][0]!==t[3][0]||t[0][1]!==t[3][1]||t[0][1]!==t[4][1]||t[1][1]!==t[2][1])return!1;return!0}return!1}async function Re(e,t){if(!e)return null;const r=t.featureAdapter,{startTimeField:i,endTimeField:s}=e;let l=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;if(i&&s)await t.forEach(o=>{const u=r.getAttribute(I(o),i),a=r.getAttribute(I(o),s);u==null||isNaN(u)||(l=Math.min(l,u)),a==null||isNaN(a)||(n=Math.max(n,a))});else{const o=i||s;await t.forEach(u=>{const a=r.getAttribute(I(u),o);a==null||isNaN(a)||(l=Math.min(l,a),n=Math.max(n,a))})}return{start:l,end:n}}function de(e,t,r){var u;if(!t||!e)return null;const{startTimeField:i,endTimeField:s}=e;if(!i&&!s)return null;const{start:l,end:n}=t;if(l===null&&n===null)return null;if(l===void 0&&n===void 0)return ie();const o=((u=r.getAttributeAsTimestamp)==null?void 0:u.bind(r))??r.getAttribute.bind(r);return i&&s?re(o,i,s,l,n):ne(o,i||s,l,n)}function re(e,t,r,i,s){return i!=null&&s!=null?l=>{const n=e(l,t),o=e(l,r);return(n==null||n<=s)&&(o==null||o>=i)}:i!=null?l=>{const n=e(l,r);return n==null||n>=i}:s!=null?l=>{const n=e(l,t);return n==null||n<=s}:void 0}function ne(e,t,r,i){return r!=null&&i!=null&&r===i?s=>e(s,t)===r:r!=null&&i!=null?s=>{const l=e(s,t);return l!=null&&l>=r&&l<=i}:r!=null?s=>{const l=e(s,t);return l!=null&&l>=r}:i!=null?s=>{const l=e(s,t);return l!=null&&l<=i}:void 0}function ie(){return()=>!1}export{ce as I,S as a,ye as d,pe as h,de as l,Re as n,me as w,fe as y};
