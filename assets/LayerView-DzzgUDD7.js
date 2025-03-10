import{eY as O,aj as T,iH as x,aL as i,aN as g,aD as P,aM as r,cV as I,c0 as q,c4 as j,f7 as E,bD as _,ed as V,lT as w,a7 as N,dZ as u,dX as M,hF as d,lU as U,lV as L,lW as k,lX as z,lY as B,iV as D,lZ as F,hz as G,eZ as W,a9 as Z,e3 as X,l_ as H}from"./index-szNj1aqA.js";import{n as Y}from"./Container-huN4r_Ys.js";let b=class extends O{constructor(){super(...arguments),this._idToCounters=new T}get size(){return this._idToCounters.size}get objectIds(){return this._idToCounters.keys()}get highlightNamesByObjectId(){return J(this._idToCounters)}add(s,e){let n=!1;for(const o of s){const l=x(this._idToCounters,o,()=>(n=!0,new Map)),p=l.get(e)??0;p||(n=!0),l.set(e,p+1)}return n}delete(s,e){let n=!1;for(const o of s){const l=this._idToCounters.get(o);if(!l)continue;let p=l.get(e);p!=null&&(p--,p>0?l.set(e,p):(l.delete(e),n=!0),l.size===0&&(this._idToCounters.delete(o),n=!0))}return n}};function*J(t){for(const[s,e]of t)yield[s,e.keys()]}b=i([g("esri.views.2d.layers.support.HighlightCounter")],b);let y=class extends P{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};i([r({readOnly:!0})],y.prototype,"version",null),y=i([g("esri.views.layers.support.ClipArea")],y);const C=y;var S;let c=S=class extends C{constructor(t){super(t),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new S({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};i([r({type:[Number,String],json:{write:!0}})],c.prototype,"left",void 0),i([r({type:[Number,String],json:{write:!0}})],c.prototype,"right",void 0),i([r({type:[Number,String],json:{write:!0}})],c.prototype,"top",void 0),i([r({type:[Number,String],json:{write:!0}})],c.prototype,"bottom",void 0),c=S=i([g("esri.views.layers.support.ClipRect")],c);const K=c;var R;const Q={base:E,key:"type",typeMap:{extent:j,polygon:q}};let f=R=class extends C{constructor(t){super(t),this.type="geometry",this.geometry=null}clone(){var t;return new R({geometry:((t=this.geometry)==null?void 0:t.clone())??null})}commitVersionProperties(){this.commitProperty("geometry")}};i([r({types:Q,json:{read:I,write:!0}})],f.prototype,"geometry",void 0),f=R=i([g("esri.views.layers.support.Geometry")],f);const ee=f;let v=class extends C{constructor(t){super(t),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};i([r({type:[[[Number]]],json:{write:!0}})],v.prototype,"path",void 0),v=i([g("esri.views.layers.support.Path")],v);const te=v,m=_.ofType({key:"type",base:null,typeMap:{rect:K,path:te,geometry:ee}}),ie=new(_.ofType(w)),ae=t=>{let s=class extends t{constructor(){super(...arguments),this._highlightCounter=new b,this.attached=!1,this.clips=new m,this.highlights=null,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this._visibleAtCurrentScale=!0}initialize(){var o,l,p;const e=((o=this.view)==null?void 0:o.spatialReferenceLocked)??!0;((l=this.view)==null?void 0:l.spatialReference)&&e&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new N("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new Y),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([u(()=>this.suspended,a=>{this.container&&(this.container.visible=!a)},d),u(()=>this.updateSuspended,a=>{this.view&&!a&&this.updateRequested&&this.view.requestUpdate()},d),u(()=>{var a;return((a=this.layer)==null?void 0:a.opacity)??1},a=>{this.container&&(this.container.opacity=a)},d),u(()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal",a=>{this.container&&(this.container.blendMode=a)},d),u(()=>this.layer&&"effect"in this.layer?this.layer.effect:null,a=>{this.container&&(this.container.effect=a)},d),u(()=>this._mergedHighlights.items.map(a=>({name:a.name,options:{fillColor:a.color,haloColor:a.haloColor,fillOpacity:a.fillOpacity,haloOpacity:a.haloOpacity,haloWidth:a.haloWidth,haloBlur:a.haloBlur}})),()=>{this.container.highlightGradient=U(this.container.highlightGradient,this._mergedHighlights.items)},d),u(()=>this._mergedHighlights.items.map(a=>a.name),()=>{this._processHighlight()}),M(()=>this.clips,"change",()=>{this.container&&(this.container.clips=this.clips)},d),u(()=>{var a;return{scale:(a=this.view)==null?void 0:a.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}},({scale:a,scaleRange:A})=>{const $=L(A,a);$!==this._visibleAtCurrentScale&&(this._visibleAtCurrentScale=$)},d)],"constructor"),(p=this.view)!=null&&p.whenLayerView?this.view.whenLayerView(this.layer).then(a=>{a===this&&this.processAttach()},()=>{}):this.when().then(()=>{this.processAttach()},()=>{}))}destroy(){this.processDetach(),this.updateRequested=!1}get highlightOptions(){return k(this)}set highlightOptions(e){z(this,e)}get hasHighlight(){return this._highlightCounter.size>0}get _mergedHighlights(){if(!this.view)return ie;if(!this.highlights)return this.view.highlights;const e=this.view.highlights.clone();for(const n of this.highlights){const o=e.find(l=>l.name===n.name);o&&o.assignFrom(n)}return e}get highlightIds(){return Array.from(this._highlightCounter.objectIds)}get scheduler(){return this.view.scheduler}get spatialReferenceSupported(){var n;const e=(n=this.view)==null?void 0:n.spatialReference;return e==null||this.supportsSpatialReference(e)}get updating(){var e;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!((e=this._updatingHandles)!=null&&e.updating)||this.container.transitioning)}get visibleAtCurrentScale(){return this._visibleAtCurrentScale}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,n){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){var e;if(!this.spatialReferenceSupported)return!1;switch((e=this.layer)==null?void 0:e.type){case"link-chart":case"knowledge-graph-sublayer":case"graphics":break;default:if(B(this.view)&&!this.view.inGeographicLayout)return!1}return!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),n=!this.spatialReferenceSupported;return n&&(e.spatialReferenceNotSupported=n),e}addAttachHandles(e){this.addHandles(e,"attach")}_addHighlights(e,n){this._highlightCounter.add(e,n)&&this._processHighlight()}_removeHighlights(e,n){this._highlightCounter.delete(e,n)&&this._processHighlight()}_processHighlight(){}_getHighlights(){const e=[];for(const[n,o]of this._highlightCounter.highlightNamesByObjectId){const l=this._getHighlightBits(o);e.push({objectId:n,highlightFlags:l})}return e}_getHighlightBits(e){const n=new Set(e);let o=1,l=0;if(!this.view)return 0;const p=this._mergedHighlights;for(const{name:a}of p)n.delete(a)&&(l=o),o<<=1;return l}};return i([r()],s.prototype,"attached",void 0),i([r({type:m,set(e){const n=V(e,this._get("clips"),m);this._set("clips",n)}})],s.prototype,"clips",void 0),i([r()],s.prototype,"container",void 0),i([r({type:w})],s.prototype,"highlightOptions",null),i([r({type:_.ofType(w)})],s.prototype,"highlights",void 0),i([r()],s.prototype,"_mergedHighlights",null),i([r()],s.prototype,"moving",void 0),i([r({readOnly:!0})],s.prototype,"spatialReferenceSupported",null),i([r({readOnly:!0})],s.prototype,"updateParameters",void 0),i([r()],s.prototype,"updateRequested",void 0),i([r()],s.prototype,"updating",null),i([r()],s.prototype,"view",void 0),i([r()],s.prototype,"_visibleAtCurrentScale",void 0),i([r({readOnly:!0})],s.prototype,"visibleAtCurrentScale",null),s=i([g("esri.views.2d.layers.LayerView2D")],s),s};let h=class extends D.IdentifiableMixin(F.EsriPromiseMixin(G.EventedMixin(O))){get spatialReferenceSupported(){return!0}constructor(t){super(t),this._updatingHandles=new W,this.layer=null,this.parent=null}initialize(){this.when().catch(t=>{var s;if(t.name!=="layerview:create-error"){const e=this.layer&&this.layer.id||"no id",n=((s=this.layer)==null?void 0:s.title)||"no title";Z.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${n}', id: '${e}')`,t)}})}destroy(){this._updatingHandles=X(this._updatingHandles)}get fullOpacity(){var t,s;return(((t=this.layer)==null?void 0:t.opacity)??1)*(((s=this.parent)==null?void 0:s.fullOpacity)??1)}get suspended(){return this.destroyed||!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var t;return!this.suspended&&((t=this.layer)==null?void 0:t.legendEnabled)===!0}get updating(){var t;return!(!((t=this._updatingHandles)!=null&&t.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get updateSuspended(){return this.suspended}get visible(){var t;return((t=this.layer)==null?void 0:t.visible)===!0}set visible(t){this._overrideIfSome("visible",t)}get visibleAtCurrentScale(){return!0}get visibleAtCurrentTimeExtent(){var e;const t=this.view.timeExtent,s=(e=this.layer)==null?void 0:e.visibilityTimeExtent;return!t||!s||!t.intersection(s).isEmpty}canResume(){var s,e;const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return this.visible&&((s=this.layer)==null?void 0:s.loaded)&&this.parent&&!this.parent.suspended&&((e=this.view)==null?void 0:e.ready)&&H(t)&&this.visibleAtCurrentScale&&this.visibleAtCurrentTimeExtent||!1}getSuspendInfo(){var n,o;const t=(n=this.parent)!=null&&n.suspended?this.parent.suspendInfo:{};(o=this.view)!=null&&o.ready||(t.viewNotReady=!0),this.layer&&this.layer.loaded||(t.layerNotLoaded=!0);const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return H(e)&&this.visibleAtCurrentScale||(t.outsideScaleRange=!0),this.visibleAtCurrentTimeExtent||(t.outsideVisibilityTimeExtent=!0),this.visible||(t.layerInvisible=!0),t}isUpdating(){return!1}};i([r({readOnly:!0})],h.prototype,"spatialReferenceSupported",null),i([r()],h.prototype,"view",void 0),i([r()],h.prototype,"fullOpacity",null),i([r()],h.prototype,"layer",void 0),i([r()],h.prototype,"parent",void 0),i([r({readOnly:!0})],h.prototype,"suspended",null),i([r({readOnly:!0})],h.prototype,"suspendInfo",null),i([r({readOnly:!0})],h.prototype,"legendEnabled",null),i([r({type:Boolean,readOnly:!0})],h.prototype,"updating",null),i([r({readOnly:!0})],h.prototype,"updatingProgress",null),i([r()],h.prototype,"updateSuspended",null),i([r()],h.prototype,"visible",null),i([r({readOnly:!0})],h.prototype,"visibleAtCurrentScale",null),i([r({readOnly:!0})],h.prototype,"visibleAtCurrentTimeExtent",null),h=i([g("esri.views.layers.LayerView")],h);const oe=h;export{ae as S,ee as a,oe as y};
