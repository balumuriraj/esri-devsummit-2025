import{i as t,k as a,o as n,aI as l}from"./CodeBlock-DBIw63CI.js";import{S as y,y as d}from"./LayerView-YA8wSiVK.js";import"./index-BYYG-xAB.js";import"./Container-x89fyags.js";const p=s=>{let e=class extends s{constructor(...r){super(...r),this.layerViews=new l}get dynamicGroupLayerView(){return this.layerViews.find(r=>{var i;return r.layer===((i=this.layer)==null?void 0:i.dynamicGroupLayer)})}get footprintLayerView(){return this.layerViews.find(r=>{var i;return r.layer===((i=this.layer)==null?void 0:i.footprintLayer)})}isUpdating(){return!this.dynamicGroupLayerView||!this.footprintLayerView||this.dynamicGroupLayerView.updating||this.footprintLayerView.updating}};return t([a()],e.prototype,"layer",void 0),t([a()],e.prototype,"layerViews",void 0),t([a({readOnly:!0})],e.prototype,"dynamicGroupLayerView",null),t([a({readOnly:!0})],e.prototype,"footprintLayerView",null),e=t([n("esri.views.layers.CatalogLayerView")],e),e};let o=class extends p(y(d)){constructor(){super(...arguments),this.layerViews=new l}update(s){}viewChange(){}moveEnd(){}attach(){this.addAttachHandles([this._updatingHandles.addOnCollectionChange(()=>this.layerViews,()=>this._updateStageChildren(),{initial:!0})])}detach(){this.container.removeAllChildren()}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((s,e)=>this.container.addChildAt(s.container,e))}};t([a()],o.prototype,"layerViews",void 0),o=t([n("esri.views.2d.layers.CatalogLayerView2D")],o);const V=o;export{V as default};
