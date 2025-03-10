import{eY as F,ft as E,ac as s,dZ as h,dX as $,d_ as d,fu as D,aL as n,aM as p,aN as C}from"./index-szNj1aqA.js";import{t as A}from"./memoize-DmxaQ-k8.js";import{y as I,h as G}from"./SketchOptions-C13bRAAG.js";import{o as L,i as P}from"./queryEngineUtils-ft4Z23c5.js";import{i as v,r as q,n as w}from"./symbologySnappingCandidates-BpAuHh1r.js";import"./geodesicUtils-DIa9g3Co.js";import"./plane-B-bok-4y.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4f64-Dk4dwAN8.js";import"./quatf64-aQ5IuZRd.js";import"./sphere-DTYho6l_.js";import"./projectVectorToVector-gprHIGOt.js";import"./projectPointToVector-2wdg5tcU.js";import"./RouteLayerInteraction-Bs39bHu1.js";import"./GraphicsLayer-CGIk0gza.js";import"./RouteLayerView2D-8nVUy07e.js";import"./LayerView-DzzgUDD7.js";import"./Container-huN4r_Ys.js";import"./GraphicContainer-BG4_-9KT.js";import"./AGraphicContainer-DaIDpgdk.js";import"./TechniqueInstance-BwsTBjP9.js";import"./UpdateTracking2D-C6ER-1No.js";import"./dataViewUtils-CgUbP-hL.js";import"./VertexElementDescriptor-BLyltQyJ.js";import"./BoundingBox-BjvutGDs.js";import"./FramebufferObject-HInsG0L_.js";import"./VertexArrayObject-ByzQLaW8.js";import"./memoryEstimations-CnkpdY1b.js";import"./TileContainer-DmLUgm6h.js";import"./WGLContainer-B-8KBCgQ.js";import"./ProgramTemplate-NjU0Lze9.js";import"./vec3f32-nZdmKIgz.js";import"./config-DX6_QZcn.js";import"./earcut-D9gy186-.js";import"./featureConversionUtils-3a9TqYps.js";import"./OptimizedFeatureSet-FFBqtxva.js";import"./OptimizedGeometry-BLyz1xrK.js";import"./FeatureCommandQueue-C6DlcTjW.js";import"./CIMSymbolHelper-CSFIZESX.js";import"./BidiEngine-QXap_35O.js";import"./fontUtils-DImQRU8p.js";import"./Rect-DOTjBfO0.js";import"./rasterizingUtils-CMJTqQ9h.js";import"./floatRGBA-eKHE6e6y.js";import"./TechniqueType-uMFRS8dR.js";import"./GraphShaderModule-T2C1qz5m.js";import"./ShaderBuilder-vfhyfMfS.js";import"./BindType-BBwFZqyN.js";import"./QueueProcessor-BDnCkJHv.js";import"./GraphicsView2D--hr1K6LQ.js";import"./OverrideHelper-CTXZ_4rT.js";import"./quantizationUtils-COzJRcFr.js";import"./FeatureMetadata-DpuH4vOk.js";import"./queryUtils-Cg1JM0hf.js";import"./json-Wa8cmqdu.js";import"./timeSupport-CwKTmIwF.js";import"./TimeOnly-yq9GKJdG.js";import"./dehydratedFeatures-CILUONBt.js";import"./VertexSnappingCandidate-CApb-JkI.js";import"./PointSnappingHint-3xZTnaKe.js";let o=class extends F{get availability(){return 1}get _snappingElevationAligner(){const{view:e}=this,{layer:t}=this.layerSource,i=e!=null&&e.type==="3d";if(!i||t.type==="subtype-group")return v();const r=async(a,l)=>(await E(e.whenLayerView(t),l)).elevationAlignPointsInFeatures(a,l);return v(i,{elevationInfo:t.elevationInfo,alignPointsInFeatures:r})}get _snappingElevationFilter(){const{view:e}=this,t=e!=null&&e.type==="3d"&&this.layerSource.layer.type!=="subtype-group";return q(t)}get _symbologySnappingFetcher(){const{view:e}=this,{layer:t}=this.layerSource;return e!=null&&e.type==="3d"&&t.type!=="subtype-group"?w(this._symbologySnappingSupported,async(i,r)=>{const a=await e.whenLayerView(t);return s(r),a.queryForSymbologySnapping({candidates:i,spatialReference:e.spatialReference},r)}):w()}get _layerView(){const{view:e}=this;if(e==null)return null;const{layer:t}=this.layerSource;return e.allLayerViews.find(i=>i.layer===t)}get _layerView3D(){const{view:e}=this;return e==null||e.type==="2d"?null:this._layerView}get _symbologySnappingSupported(){return this._layerView3D!=null&&this._layerView3D.symbologySnappingSupported}initialize(){const{view:e}=this,{layer:t}=this.layerSource;e!=null&&e.type==="3d"&&t.type!=="subtype-group"&&this.addHandles([e.elevationProvider.on("elevation-change",({context:i})=>{const{elevationInfo:r}=t;I(i,r)&&this._snappingElevationAligner.notifyElevationSourceChange()}),h(()=>t.elevationInfo,()=>this._snappingElevationAligner.notifyElevationSourceChange(),d),h(()=>{var i;return this._layerView3D!=null?(i=this._layerView3D.layer)==null?void 0:i.renderer:null},()=>this._symbologySnappingFetcher.notifySymbologyChange(),d),$(()=>{var i;return(i=this._layerView3D)==null?void 0:i.layer},["edits","apply-edits","graphic-update"],()=>this._symbologySnappingFetcher.notifySymbologyChange())])}constructor(e){super(e),this.view=null,this.updating=!1,this._memoizedMakeGetGroundElevation=A(P)}refresh(){}async fetchCandidates(e,t){var g,c;const{layer:i}=this.layerSource,r=i.source;if(!(r!=null&&r.querySnapping))return[];const a=i.createQuery();this._layerView&&"effectiveDisplayFilter"in this._layerView&&(a.where=D(a.where,(g=this._layerView.effectiveDisplayFilter)==null?void 0:g.where));const l=G(e,((c=this.view)==null?void 0:c.type)??"2d",a),f=await r.querySnapping(l,{signal:t});s(t);const m=e.coordinateHelper.spatialReference,y=await this._snappingElevationAligner.alignCandidates(f.candidates,m,t);s(t);const u=await this._symbologySnappingFetcher.fetch(y,t);s(t);const S=u.length===0?y:[...y,...u],_=this._snappingElevationFilter.filter(l,S),b=this._memoizedMakeGetGroundElevation(this.view,m);return _.map(V=>L(V,b))}};n([p({constructOnly:!0})],o.prototype,"layerSource",void 0),n([p({constructOnly:!0})],o.prototype,"view",void 0),n([p()],o.prototype,"_snappingElevationAligner",null),n([p()],o.prototype,"_snappingElevationFilter",null),n([p()],o.prototype,"_symbologySnappingFetcher",null),n([p()],o.prototype,"_layerView",null),n([p()],o.prototype,"_layerView3D",null),n([p()],o.prototype,"_symbologySnappingSupported",null),o=n([C("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")],o);export{o as FeatureCollectionSnappingSource};
