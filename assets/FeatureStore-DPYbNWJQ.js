import{cB as f,b5 as y,cC as l,n as u,ae as h,ao as d,cn as g}from"./CodeBlock-DBIw63CI.js";import{p as m}from"./featureConversionUtils-CKmftsHB.js";import{o as _}from"./BoundsStore-DVGw3zJR.js";import{h as c}from"./timeSupport-DNVL_oH4.js";import{e as I}from"./optimizedFeatureQueryEngineAdapter-Bo8EOzsB.js";const B=g();class C{constructor(e){this.geometryInfo=e,this._boundsStore=new _,this._featuresById=new Map,this._usedMemory=0,this.events=new f,this.featureAdapter=I}get usedMemory(){return this._usedMemory}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let e=0;return this._featuresById.forEach(t=>{t.geometry!=null&&t.geometry.coords&&(e+=t.geometry.coords.length)}),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}getFullExtent(e){if(this.fullBounds==null)return null;const[t,s,r,o]=this.fullBounds;return{xmin:t,ymin:s,xmax:r,ymax:o,spatialReference:c(e)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}upsertMany(e){const t=e.map(s=>this._upsert(s));return this._emitChanged(),t.filter(y)}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged(),this._usedMemory=0}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const s=this._featuresById.get(t);s&&this._remove(s)}this._emitChanged()}forEachBounds(e,t){for(const s of e){const r=this._boundsStore.get(s.objectId);r&&t(l(B,r))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach(t=>e(t))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,s=>{t(this._featuresById.get(s))})}_emitChanged(){this.events.emit("changed",void 0)}_add(e){var o,i,n,a;if(!e)return;const t=e.objectId;if(t==null)return void u.getLogger("esri.layers.graphics.data.FeatureStore").error(new h("featurestore:invalid-feature","feature id is missing",{feature:e}));const s=this._featuresById.get(t);let r;if(s?(e.displayId=s.displayId,r=this._boundsStore.get(t),this._boundsStore.delete(t),this._usedMemory-=((o=this.estimateFeatureUsedMemory)==null?void 0:o.call(this,s))??0):this.onFeatureAdd!=null&&this.onFeatureAdd(e),!((n=(i=e.geometry)==null?void 0:i.coords)!=null&&n.length))return this._boundsStore.set(t,null),void this._featuresById.set(t,e);r=m(r??d(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),r!=null&&this._boundsStore.set(t,r),this._featuresById.set(t,e),this._usedMemory+=((a=this.estimateFeatureUsedMemory)==null?void 0:a.call(this,e))??0}_upsert(e){var i,n;const t=e==null?void 0:e.objectId;if(t==null)return u.getLogger("esri.layers.graphics.data.FeatureStore").error(new h("featurestore:invalid-feature","feature id is missing",{feature:e})),null;const s=this._featuresById.get(t);if(!s)return this._add(e),e;this._usedMemory-=((i=this.estimateFeatureUsedMemory)==null?void 0:i.call(this,s))??0;const{geometry:r,attributes:o}=e;for(const a in o)s.attributes[a]=o[a];return r&&(s.geometry=r,this._boundsStore.set(t,m(d(),r,this.geometryInfo.hasZ,this.geometryInfo.hasM)??null)),this._usedMemory+=((n=this.estimateFeatureUsedMemory)==null?void 0:n.call(this,s))??0,s}_remove(e){var s;this.onFeatureRemove!=null&&this.onFeatureRemove(e);const t=e.objectId;return this._boundsStore.delete(t),this._featuresById.delete(t),this._usedMemory-=((s=this.estimateFeatureUsedMemory)==null?void 0:s.call(this,e))??0,e}}export{C as f};
