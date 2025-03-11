import{cT as y,b4 as G,cE as w,cB as x,cu as D,cv as z,iF as H,iG as f,iH as _,X as I,bH as M,d6 as E,d as L,iI as k,i as a,k as n,o as O}from"./CodeBlock-DBIw63CI.js";import{c as X}from"./projectPointToVector-CoPmnzvV.js";import{l as R}from"./elevationInfoUtils-B5d6gWBj.js";import{i as Y}from"./drapedUtils-CqZKHERx.js";function F(e){let s=0,i=0,t=0;return e?(e.type==="cim"&&e.data.symbol&&"symbolLayers"in e.data.symbol&&e.data.symbol.symbolLayers&&e.data.symbol.symbolLayers.map(l=>{l.type==="CIMVectorMarker"&&l.anchorPoint&&(Math.abs(l.anchorPoint.x)>s&&(s=l.anchorPoint.x),Math.abs(l.anchorPoint.y)>i&&(i=l.anchorPoint.y),l.size!=null&&l.size>t&&(t=l.size))}),s=y(s),i=y(i),t=y(t),{offsetX:s,offsetY:i,size:t}):{offsetX:s,offsetY:i,size:t}}let o=class extends G{set graphic(e){this._circleCollisionCache=null,this._originalSymbol=e.symbol,this._set("graphic",e),this.attachSymbolChanged()}get elevationInfo(){const{layer:e}=this.graphic,s=e&&"elevationInfo"in e?e.elevationInfo:null,i=R(this.graphic),t=s?s.offset:0;return new w({mode:i,offset:t})}set focusedSymbol(e){e!==this._get("focusedSymbol")&&(this._set("focusedSymbol",e),this._updateGraphicSymbol(),this._circleCollisionCache=null)}grabbableForEvent(){return!0}set grabbing(e){e!==this._get("grabbing")&&(this._set("grabbing",e),this._updateGraphicSymbol())}set hovering(e){e!==this._get("hovering")&&(this._set("hovering",e),this._updateGraphicSymbol())}set selected(e){e!==this._get("selected")&&(this._set("selected",e),this._updateGraphicSymbol(),this.events.emit("select-changed",{action:e?"select":"deselect"}))}get _focused(){return this._get("hovering")||this._get("grabbing")}constructor(e){super(e),this.layer=null,this.interactive=!0,this.selectable=!1,this.grabbable=!0,this.dragging=!1,this.cursor=null,this.consumesClicks=!0,this.events=new x.EventEmitter,this._circleCollisionCache=null,this._graphicSymbolChangedHandle=null,this._originalSymbol=null}destroy(){this.detachSymbolChanged(),this._resetGraphicSymbol(),this._set("view",null)}intersectionDistance(e){const s=this.graphic;if(s.visible===!1)return null;const i=s.geometry;if(i==null)return null;const t=this._get("focusedSymbol"),l=t??s.symbol;return this.view.type==="2d"?this._intersectDistance2D(this.view,e,i,l):this._intersectDistance3D(this.view,e,s)}attach(){this.attachSymbolChanged(),this.layer!=null&&this.layer.add(this.graphic)}detach(){this.detachSymbolChanged(),this._resetGraphicSymbol(),this.layer!=null&&this.layer.remove(this.graphic)}attachSymbolChanged(){this.detachSymbolChanged(),this._graphicSymbolChangedHandle=D(()=>{var e;return(e=this.graphic)==null?void 0:e.symbol},e=>{e!=null&&e!==this.focusedSymbol&&e!==this._originalSymbol&&(this._originalSymbol=e,this._focused&&this.focusedSymbol!=null&&(this.graphic.symbol=this.focusedSymbol))},z)}detachSymbolChanged(){this._graphicSymbolChangedHandle!=null&&(this._graphicSymbolChangedHandle.remove(),this._graphicSymbolChangedHandle=null)}onElevationChange(){}onViewChange(){}_updateGraphicSymbol(){this.graphic.symbol=this._focused&&this.focusedSymbol!=null?this.focusedSymbol:this._originalSymbol}_resetGraphicSymbol(){this.graphic.symbol=this._originalSymbol}_intersectDistance2D(e,s,i,t){var m,g;if((t=t||H(i))==null)return null;const l=1;let h=this._circleCollisionCache;if(i.type==="point"&&t.type==="cim"&&((m=t.data.symbol)==null?void 0:m.type)==="CIMPointSymbol"&&t.data.symbol.symbolLayers){const{offsetX:c,offsetY:r,size:u}=F(t),b=f(s,v),p=u/2,d=e.toScreen(i),C=d.x+c,P=d.y+r;return _(b,[C,P])<p*p?l:null}if(i.type!=="point"||t.type!=="simple-marker")return Y(s,i,e)?l:null;if(h==null||!h.originalPoint.equals(i)){const c=i,r=e.spatialReference;if(I(c.spatialReference,r)){const u=M(c,r);h={originalPoint:c.clone(),mapPoint:u,radiusPx:y(t.size)},this._circleCollisionCache=h}}if(h!=null){const c=f(s,v),r=(g=e.toScreen)==null?void 0:g.call(e,h.mapPoint);if(!r)return null;const u=h.radiusPx,b=r.x+y(t.xoffset),p=r.y-y(t.yoffset);return _(c,[b,p])<u*u?l:null}return null}_intersectDistance3D(e,s,i){const t=e.toMap(s,{include:[i]});return t&&X(t,S,e.renderSpatialReference)?E(S,e.state.camera.eye):null}};a([n({constructOnly:!0,nonNullable:!0})],o.prototype,"graphic",null),a([n()],o.prototype,"elevationInfo",null),a([n({constructOnly:!0,nonNullable:!0})],o.prototype,"view",void 0),a([n({value:null})],o.prototype,"focusedSymbol",null),a([n({constructOnly:!0})],o.prototype,"layer",void 0),a([n()],o.prototype,"interactive",void 0),a([n()],o.prototype,"selectable",void 0),a([n()],o.prototype,"grabbable",void 0),a([n({value:!1})],o.prototype,"grabbing",null),a([n()],o.prototype,"dragging",void 0),a([n()],o.prototype,"hovering",null),a([n({value:!1})],o.prototype,"selected",null),a([n()],o.prototype,"cursor",void 0),o=a([O("esri.views.interactive.GraphicManipulator")],o);const S=L(),v=k();export{o as S,F as s};
