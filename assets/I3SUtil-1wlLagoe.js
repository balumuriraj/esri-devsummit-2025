import{a9 as N,am as C,an as D,ao as e}from"./CodeBlock-DBIw63CI.js";import"./mat4f64-Dk4dwAN8.js";import"./projectVectorToVector-BCa8e3Oi.js";import"./sphere-Bw4Rn5R4.js";import{I as R}from"./I3SBinaryReader-D680G0lX.js";import{g as _}from"./edgeUtils-Cw4OzlhA.js";import"./NormalAttribute.glsl-2LxJz51o.js";import{I as g}from"./orientedBoundingBox-Cq7PbIc5.js";e();var l;async function P(o,s,r,c,m,S,T,f){const u=[];for(const t of s)if(t&&m.includes(t.name)){const n=`${o}/nodes/${r}/attributes/${t.key}/0`;u.push({url:n,storageInfo:t})}const i=await Promise.allSettled(u.map(t=>N(t.url,{responseType:"array-buffer",query:{...T,token:S},signal:f==null?void 0:f.signal}).then(n=>R(t.storageInfo,n.data)))),E=[];for(const t of c){const n={};for(let a=0;a<i.length;a++){const I=i[a];if(I.status==="fulfilled"){const p=I.value;n[u[a].storageInfo.name]=h(p,t)}}E.push(n)}return E}(function(o){o[o.OUTSIDE=0]="OUTSIDE",o[o.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",o[o.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",o[o.INSIDE=3]="INSIDE"})(l||(l={}));const y=-32768,d=-2147483648;function h(o,s){if(!o)return null;const r=o[s];return C(o)?r===y?null:r:D(o)?r===d?null:r:r!=r?null:r}_({color:[0,0,0,0],opacity:0});e();e();new g;new Array(72);export{P as V};
