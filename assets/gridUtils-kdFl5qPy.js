import{cI as $,c6 as h,bb as y,aQ as g,gg as M,dj as G,h4 as W}from"./index-szNj1aqA.js";import{y as w,R as j}from"./geodesicUtils-DIa9g3Co.js";const S=50,N=5;function d(e,a){return Math.log(e)/Math.log(a)}function P(e,a,o){const t=e===1?10:e;return t**(o?Math.round(d(S/a,t)):0)}function Q(e){const{isGeographic:a,isWebMercator:o}=e;return!a&&!o}function U(e,a,o){const t=typeof e=="number"?null:e,r=o??(t==null?void 0:t.spatialReference);if(r==null||!$(r)||Q(r))return h(r);let s=(t==null?void 0:t.x)??e,c=(t==null?void 0:t.y)??a;const f=1/Math.sqrt(2);let i=s+f,l=c+f;const{isWebMercator:x,isGeographic:b}=r;let u=b&&!w(r)?y.WGS84:r;if(x){let n=new g({x:s,y:c,spatialReference:r});M(n,!0,n),s=n.x,c=n.y,n=new g({x:i,y:l,spatialReference:r}),M(n,!0,n),i=n.x,l=n.y,u=y.WGS84}const m=new G({paths:[[[s,c],[i,l]]],spatialReference:u}),R=W(m,10);let p;try{[p]=j([R],"meters")}catch{return h(r)}return p}export{P as l,N as t,U as u};
