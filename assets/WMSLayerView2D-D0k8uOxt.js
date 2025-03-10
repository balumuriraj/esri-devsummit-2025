import{eY as F,aL as a,aM as n,aN as b,e3 as $,a7 as w,ac as C,dU as _,a9 as W,dZ as L,c4 as O}from"./index-szNj1aqA.js";import{r as I}from"./BitmapContainer-Cony9kmt.js";import{S as R,y as U}from"./LayerView-DzzgUDD7.js";import{_ as q}from"./ExportStrategy-DYZkuqlC.js";import{i as V}from"./RefreshableLayerView-CVNfH2Mh.js";import{i as N}from"./timeSupport-BXHuLygE.js";const H={visible:"visibleSublayers"};let u=class extends F{constructor(e){super(e),this.scale=0}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.sublayers.on("change",()=>this.notifyChange("visibleSublayers")),e.on("wms-sublayer-update",t=>this.notifyChange(H[t.propertyName]))],"layer"))}get layers(){return this.visibleSublayers.filter(({name:e})=>e).map(({name:e})=>e).join()}get version(){this.commitProperty("layers");const e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:t}=this,r=e==null?void 0:e.sublayers,s=[],i=y=>{const{minScale:o,maxScale:p,sublayers:h,visible:l}=y;l&&(t===0||(o===0||t<=o)&&(p===0||t>=p))&&(h?h.forEach(i):s.push(y))};return r==null||r.forEach(i),s}toJSON(){const{layer:e,layers:t}=this,{imageFormat:r,imageTransparency:s,version:i}=e;return{format:r,request:"GetMap",service:"WMS",styles:"",transparent:s?"TRUE":"FALSE",version:i,layers:t}}};a([n()],u.prototype,"layer",null),a([n({readOnly:!0})],u.prototype,"layers",null),a([n({type:Number})],u.prototype,"scale",void 0),a([n({readOnly:!0})],u.prototype,"version",null),a([n({readOnly:!0})],u.prototype,"visibleSublayers",null),u=a([b("esri.layers.support.ExportWMSImageParameters")],u);const A=e=>{let t=class extends e{initialize(){this.exportImageParameters=new u({layer:this.layer})}destroy(){this.exportImageParameters=$(this.exportImageParameters)}get exportImageVersion(){var r;return(r=this.exportImageParameters)==null||r.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}get timeExtent(){var r;return N(this.layer,(r=this.view)==null?void 0:r.timeExtent,this._get("timeExtent"))}async fetchPopupFeaturesAtLocation(r,s){const{layer:i}=this;if(!r)throw new w("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:i});const{popupEnabled:y}=i;if(!y)throw new w("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:y});const o=this.createFetchPopupFeaturesQuery(r);if(!o)return[];const{extent:p,width:h,height:l,x:c,y:d}=o;if(!(p&&h&&l))throw new w("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:p,width:h,height:l});const g=await i.fetchFeatureInfo(p,h,l,c,d);return C(s),g}};return a([n()],t.prototype,"exportImageParameters",void 0),a([n({readOnly:!0})],t.prototype,"exportImageVersion",null),a([n()],t.prototype,"layer",void 0),a([n({readOnly:!0})],t.prototype,"timeExtent",null),t=a([b("esri.views.layers.WMSLayerView")],t),t};let m=class extends A(V(R(U))){constructor(){super(...arguments),this.bitmapContainer=new I}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}update(e){this.strategy.update(e).catch(t=>{_(t)||W.getLogger(this).error(t)})}attach(){const{layer:e}=this,{imageMaxHeight:t,imageMaxWidth:r}=e;this.bitmapContainer=new I,this.container.addChild(this.bitmapContainer),this.strategy=new q({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:r,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles(L(()=>this.exportImageVersion,()=>this.requestUpdate()))}detach(){this.strategy=$(this.strategy),this.container.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(e){const{view:t,bitmapContainer:r}=this,{x:s,y:i}=e,{spatialReference:y}=t;let o,p=0,h=0;if(r.children.some(g=>{const{width:v,height:S,resolution:P,x:f,y:x}=g,E=f+P*v,M=x-P*S;return s>=f&&s<=E&&i<=x&&i>=M&&(o=new O({xmin:f,ymin:M,xmax:E,ymax:x,spatialReference:y}),p=v,h=S,!0)}),!o)return null;const l=o.width/p,c=Math.round((s-o.xmin)/l),d=Math.round((o.ymax-i)/l);return{extent:o,width:p,height:h,x:c,y:d}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,s){return this.layer.fetchImageBitmap(e,t,r,{timeExtent:this.timeExtent,...s})}};a([n()],m.prototype,"strategy",void 0),a([n()],m.prototype,"updating",void 0),m=a([b("esri.views.2d.layers.WMSLayerView2D")],m);const T=m,J=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"}));export{J as W,u as a};
