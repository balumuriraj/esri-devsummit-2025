const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/OperatorGeodesicBuffer-DaBgj-uJ.js","assets/SimpleGeometryCursor-B92kdZ15.js","assets/ProjectionTransformation-CYBtiM9Y.js","assets/index-szNj1aqA.js","assets/index-4rsQkLC1.css","assets/GeometryCleaner-BEJM7I4l-CZEOdSCQ.js"])))=>i.map(i=>d[i]);
import{bZ as i,dk as c,dm as f,dl as _}from"./index-szNj1aqA.js";import{s as l}from"./SimpleGeometryCursor-B92kdZ15.js";let n;function m(){return!!n&&_()}async function P(){if(!m()){const[t,r]=await Promise.all([i(()=>import("./OperatorGeodesicBuffer-DaBgj-uJ.js"),__vite__mapDeps([0,1,2,3,4,5])),i(()=>import("./ProjectionTransformation-CYBtiM9Y.js").then(e=>e.bF),__vite__mapDeps([2,1,3,4])).then(e=>e.aG).then(({injectPe:e})=>e),c()]);n=new t.OperatorGeodesicBuffer,r(f)}}function v(t,r,e,o,u){return n.execute(t,r,e,o,u,!1,null)}function E(t,r,e,o,u,s){const a=n.executeMany(new l(t),r,e,o,u,!1,s,null);return Array.from(a)}function h(){return n.supportsCurves()}export{h as a,E as c,v as i,m as s,P as u};
