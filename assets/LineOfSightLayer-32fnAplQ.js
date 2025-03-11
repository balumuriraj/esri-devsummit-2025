import{c as w,b2 as O,b4 as k,k6 as y,i as t,k as i,v as R,cE as S,o as h,cu as $,fp as L,aI as v,fm as j,kT as M,dr as N,kU as P,kV as C,fn as F,bf as H,bi as J,bl as V}from"./CodeBlock-DBIw63CI.js";import{c as U}from"./Analysis-Dt2hVSYy.js";import{c as E,b as I}from"./featureReferenceUtils-DUp9xMiB.js";import{v as f}from"./persistable-Bw6lcogO.js";import{i as X}from"./elevationInfoUtils-B5d6gWBj.js";import"./index-BYYG-xAB.js";import"./sphere-Bw4Rn5R4.js";import"./mat3f64-q3fE-ZOt.js";import"./plane-CcKX1x-D.js";import"./mat4f64-Dk4dwAN8.js";import"./quatf64-aQ5IuZRd.js";import"./IntersectorInterfaces-CmNINbyF.js";import"./boundedPlane-Req4vBz-.js";import"./lineSegment-D7Oe-tiB.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./resourceExtension-Bwvr2Hi8.js";let a=class extends w.JSONSupportMixin(O.ClonableMixin(k)){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return y(this.position,e.position)&&y(this.elevationInfo,e.elevationInfo)&&E(this.feature,e.feature)}};t([i({type:R,json:{write:{isRequired:!0}}})],a.prototype,"position",void 0),t([i({type:S}),f()],a.prototype,"elevationInfo",void 0),t([i(I)],a.prototype,"feature",void 0),a=t([h("esri.analysis.LineOfSightAnalysisObserver")],a);const q=a;let l=class extends w.JSONSupportMixin(O){constructor(s){super(s),this.position=null,this.elevationInfo=null,this.feature=null}equals(s){return y(this.position,s.position)&&y(this.elevationInfo,s.elevationInfo)&&E(this.feature,s.feature)}};t([i({type:R,json:{write:!0,origins:{"web-scene":{write:{isRequired:!0}}}}}),f()],l.prototype,"position",void 0),t([i({type:S}),f()],l.prototype,"elevationInfo",void 0),t([i(I)],l.prototype,"feature",void 0),l=t([h("esri.analysis.LineOfSightAnalysisTarget")],l);const z=l,c=v.ofType(z);let n=class extends U{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles($(()=>this._computeExtent(),e=>{(e==null?void 0:e.pending)==null&&this._set("extent",e!=null?e.extent:null)},L))}get targets(){return this._get("targets")||new c}set targets(e){this._set("targets",j(e,this.targets,c))}get spatialReference(){var e;return((e=this.observer)==null?void 0:e.position)!=null?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){var e;return[(e=this.observer)==null?void 0:e.position]}async waitComputeExtent(){const e=this._computeExtent();return e!=null?e.pending:Promise.resolve()}_computeExtent(){var x;const e=this.spatialReference;if(((x=this.observer)==null?void 0:x.position)==null||e==null)return null;const m=p=>X(p.position,p.elevationInfo)==="absolute-height",o=this.observer.position,b=M(o.x,o.y,o.z,o.x,o.y,o.z);for(const p of this.targets)if(p.position!=null){const u=N(p.position,e);if(u.pending!=null)return{pending:u.pending,extent:null};if(u.geometry!=null){const{x:A,y:T,z:_}=u.geometry;P(b,[A,T,_])}}const d=C(b,e);return m(this.observer)&&this.targets.every(m)||(d.zmin=void 0,d.zmax=void 0),{pending:null,extent:d}}clear(){this.observer=null,this.targets.removeAll()}};t([i({type:["line-of-sight"]})],n.prototype,"type",void 0),t([i({type:q,json:{read:!0,write:!0}})],n.prototype,"observer",void 0),t([i({cast:F,type:c,nonNullable:!0,json:{read:!0,write:!0}})],n.prototype,"targets",null),t([i({value:null,readOnly:!0})],n.prototype,"extent",void 0),t([i({readOnly:!0})],n.prototype,"spatialReference",null),t([i({readOnly:!0})],n.prototype,"requiredPropertiesForEditing",null),n=t([h("esri.analysis.LineOfSightAnalysis")],n);const g=n,B=v.ofType(z);let r=class extends H(J(V)){constructor(s){super(s),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new g,this.opacity=1}initialize(){this.addHandles($(()=>this.analysis,(s,e)=>{e!=null&&e.parent===this&&(e.parent=null),s!=null&&(s.parent=this)},L))}async load(){return this.analysis!=null&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){var s;return(s=this.analysis)==null?void 0:s.observer}set observer(s){const{analysis:e}=this;e&&(e.observer=s)}get targets(){return this.analysis!=null?this.analysis.targets:new v}set targets(s){var e;j(s,(e=this.analysis)==null?void 0:e.targets)}get fullExtent(){return this.analysis!=null?this.analysis.extent:null}get spatialReference(){return this.analysis!=null?this.analysis.spatialReference:null}releaseAnalysis(s){this.analysis===s&&(this.analysis=new g)}};t([i({json:{read:!1},readOnly:!0})],r.prototype,"type",void 0),t([i({type:["LineOfSightLayer"]})],r.prototype,"operationalLayerType",void 0),t([i({type:q,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],r.prototype,"observer",null),t([i({type:B,json:{read:!0,write:{ignoreOrigin:!0,isRequired:!0}}})],r.prototype,"targets",null),t([i({type:g,nonNullable:!0,json:{read:!1,write:!1}})],r.prototype,"analysis",void 0),t([i({readOnly:!0})],r.prototype,"fullExtent",null),t([i({readOnly:!0})],r.prototype,"spatialReference",null),t([i({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],r.prototype,"opacity",void 0),t([i({type:["show","hide"]})],r.prototype,"listMode",void 0),r=t([h("esri.layers.LineOfSightLayer")],r);const ye=r;export{ye as default};
