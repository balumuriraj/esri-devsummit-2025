import{bk as s,ae as l,a as c,eV as g,eW as m}from"./CodeBlock-DBIw63CI.js";import"./index-BYYG-xAB.js";async function u(e=null,o){var n,a;if(s.geometryServiceUrl)return s.geometryServiceUrl;if(!e)throw new l("internal:geometry-service-url-not-configured");let r;r="portal"in e?e.portal||c.getDefault():e,await r.load({signal:o});const t=(a=(n=r.helperServices)==null?void 0:n.geometry)==null?void 0:a.url;if(!t)throw new l("internal:geometry-service-url-not-configured");return t}async function w(e,o,r=null,t){const n=await u(r,t),a=new g({geometries:[e],outSpatialReference:o}),i=await m(n,a,{signal:t});if(i&&Array.isArray(i)&&i.length===1)return i[0];throw new l("internal:geometry-service-projection-failed")}export{u as getGeometryServiceURL,w as projectGeometry};
