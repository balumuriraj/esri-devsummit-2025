import{bg as n,bi as p,bZ as l,ae as d,bl as u,i as t,k as i,o as y}from"./CodeBlock-DBIw63CI.js";import"./index-BYYG-xAB.js";let s=class extends n(p(u)){constructor(e){super(e),this.resourceInfo=null,this.persistenceEnabled=!0,this.type="unsupported"}initialize(){this.addResolvingPromise(new Promise((e,o)=>{l(()=>{const r=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let a="Unsupported layer type";r&&(a+=" "+r),o(new d("layer:unsupported-layer-type",a,{layerType:r}))})}))}read(e,o){const r={resourceInfo:e};e.id!=null&&(r.id=e.id),e.title!=null&&(r.title=e.title),super.read(r,o)}write(e,o){return Object.assign(e||{},this.resourceInfo,{id:this.id})}};t([i({readOnly:!0})],s.prototype,"resourceInfo",void 0),t([i({type:["show","hide"]})],s.prototype,"listMode",void 0),t([i({type:Boolean,readOnly:!1})],s.prototype,"persistenceEnabled",void 0),t([i({json:{read:!1},readOnly:!0,value:"unsupported"})],s.prototype,"type",void 0),s=t([y("esri.layers.UnsupportedLayer")],s);const h=s;export{h as default};
