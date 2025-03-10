import{c0 as Y,dj as K,fM as F,aQ as f,di as ct,hz as nt,fk as lt,fj as O,hE as D,fm as T,fl as j,fn as V,e2 as pt,dZ as I,hF as _t,e3 as U,d_ as mt,bF as E,fo as dt,aL as d,aM as u,aN as ut}from"./index-szNj1aqA.js";import{i as x,s as z,a as gt,m as yt}from"./drawUtils-B2xHvS9F.js";import{p as vt,j as ft}from"./GraphicMover-DJ-gkC30.js";import{e as Gt}from"./RouteLayerInteraction-Bs39bHu1.js";import{h as bt}from"./settings-C2xM_IUG.js";import{i as Q}from"./SketchOptions-C13bRAAG.js";import{R as xt,m as wt}from"./automaticLengthMeasurementUtils-DpNSjeFL.js";import{s as St,o as kt,i as Rt}from"./ExtentScaleTooltipInfo-kucXTaV-.js";import{i as Mt}from"./TranslateTooltipInfo-CKi456wO.js";import"./GraphicsLayer-CGIk0gza.js";import"./featureUtils-C0n8rGdj.js";import"./GraphicManipulator-CNyBhkIs.js";import"./projectPointToVector-2wdg5tcU.js";import"./drapedUtils-DG6CF9IF.js";import"./RouteLayerView2D-8nVUy07e.js";import"./LayerView-DzzgUDD7.js";import"./Container-huN4r_Ys.js";import"./GraphicContainer-BG4_-9KT.js";import"./AGraphicContainer-DaIDpgdk.js";import"./TechniqueInstance-BwsTBjP9.js";import"./UpdateTracking2D-C6ER-1No.js";import"./dataViewUtils-CgUbP-hL.js";import"./VertexElementDescriptor-BLyltQyJ.js";import"./BoundingBox-BjvutGDs.js";import"./FramebufferObject-HInsG0L_.js";import"./VertexArrayObject-ByzQLaW8.js";import"./memoryEstimations-CnkpdY1b.js";import"./TileContainer-DmLUgm6h.js";import"./WGLContainer-B-8KBCgQ.js";import"./ProgramTemplate-NjU0Lze9.js";import"./vec3f32-nZdmKIgz.js";import"./config-DX6_QZcn.js";import"./earcut-D9gy186-.js";import"./featureConversionUtils-3a9TqYps.js";import"./OptimizedFeatureSet-FFBqtxva.js";import"./OptimizedGeometry-BLyz1xrK.js";import"./FeatureCommandQueue-C6DlcTjW.js";import"./CIMSymbolHelper-CSFIZESX.js";import"./BidiEngine-QXap_35O.js";import"./fontUtils-DImQRU8p.js";import"./Rect-DOTjBfO0.js";import"./rasterizingUtils-CMJTqQ9h.js";import"./floatRGBA-eKHE6e6y.js";import"./TechniqueType-uMFRS8dR.js";import"./GraphShaderModule-T2C1qz5m.js";import"./ShaderBuilder-vfhyfMfS.js";import"./BindType-BBwFZqyN.js";import"./QueueProcessor-BDnCkJHv.js";import"./GraphicsView2D--hr1K6LQ.js";import"./OverrideHelper-CTXZ_4rT.js";import"./quantizationUtils-COzJRcFr.js";import"./FeatureMetadata-DpuH4vOk.js";import"./queryUtils-Cg1JM0hf.js";import"./json-Wa8cmqdu.js";import"./timeSupport-CwKTmIwF.js";import"./TimeOnly-yq9GKJdG.js";import"./mat3f64-q3fE-ZOt.js";import"./dehydratedFeatures-CILUONBt.js";import"./projectVectorToVector-gprHIGOt.js";import"./geodesicUtils-DIa9g3Co.js";import"./plane-B-bok-4y.js";import"./mat4f64-Dk4dwAN8.js";import"./quatf64-aQ5IuZRd.js";import"./sphere-DTYho6l_.js";import"./MeshTransform-BFxNx-sV.js";import"./quat-BZedS7IX.js";import"./axisAngleDegrees-BiDce1yX.js";import"./meshVertexSpaceUtils-1R5NIM1z.js";import"./MeshLocalVertexSpace-BBHGEkLu.js";import"./memoize-DmxaQ-k8.js";import"./spatialReferenceEllipsoidUtils-CAOHNdSO.js";import"./geodesicLengthMeasurementUtils-EpxbJAYY.js";import"./geometryEngineBase-B0ZyeKAX.js";import"./_commonjsHelpers-DCkdB7M8.js";import"./hydrated-CNT_kZ8I.js";function N(t,i,e,s){const o=[];for(const r of t){const h=r.slice();o.push(h);const c=i*(r[0]-s.x)-e*(r[1]-s.y)+s.x,a=e*(r[0]-s.x)+i*(r[1]-s.y)+s.y;h[0]=c,h[1]=a}return o}function L(t,i,e){const{hasM:s,hasZ:o,spatialReference:r}=t,h=i*Math.PI/180,c=Math.cos(h),a=Math.sin(h);if("xmin"in t&&(e=e??t.center,t=new Y({spatialReference:r,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]})),"paths"in t){e=e??t.extent.center;const n=[];for(const l of t.paths)n.push(N(l,c,a,e));return new K({hasM:s,hasZ:o,spatialReference:r,paths:n})}if("rings"in t){e=e??t.extent.center;const n=[];for(const l of t.rings){const w=F(l),v=N(l,c,a,e);F(v)!==w&&v.reverse(),n.push(v)}return new Y({hasM:s,hasZ:o,spatialReference:r,rings:n})}if("x"in t){e=e??t;const n=new f({x:c*(t.x-e.x)-a*(t.y-e.y)+e.x,y:a*(t.x-e.x)+c*(t.y-e.y)+e.y,spatialReference:r});return t.z!=null&&(n.z=t.z),t.m!=null&&(n.m=t.m),n}return"points"in t?(e=e??t.extent.center,new ct({hasM:s,hasZ:o,points:N(t.points,c,a,e),spatialReference:r})):null}class It{constructor(i,e,s,o){this.graphics=i,this.mover=e,this.dx=s,this.dy=o,this.type="move-start"}}class Ct{constructor(i,e,s,o){this.graphics=i,this.mover=e,this.dx=s,this.dy=o,this.type="move"}}class Z{constructor(i,e,s,o){this.graphics=i,this.mover=e,this.dx=s,this.dy=o,this.type="move-stop"}}class Ht{constructor(i,e,s){this.graphics=i,this.mover=e,this.angle=s,this.type="rotate-start"}}class Ot{constructor(i,e,s){this.graphics=i,this.mover=e,this.angle=s,this.type="rotate"}}class q{constructor(i,e,s){this.graphics=i,this.mover=e,this.angle=s,this.type="rotate-stop"}}class Tt{constructor(i,e,s,o){this.graphics=i,this.mover=e,this.xScale=s,this.yScale=o,this.type="scale-start"}}class Et{constructor(i,e,s,o){this.graphics=i,this.mover=e,this.xScale=s,this.yScale=o,this.type="scale"}}class J{constructor(i,e,s,o){this.graphics=i,this.mover=e,this.xScale=s,this.yScale=o,this.type="scale-stop"}}const _=bt.transformGraphics,zt={centerIndicator:new O({style:"cross",size:_.center.size,color:_.center.color}),fill:{default:new D({color:_.fill.color,outline:{color:_.fill.outlineColor,join:"round",width:1}}),active:new D({color:_.fill.stagedColor,outline:{color:_.fill.outlineColor,join:"round",style:"dash",width:1}})},handles:{default:new O({style:"square",size:_.vertex.size,color:_.vertex.color,outline:{color:_.vertex.outlineColor,width:1}}),hover:new O({style:"square",size:_.vertex.hoverSize,color:_.vertex.hoverColor,outline:{color:_.vertex.hoverOutlineColor,width:1}})},rotator:{default:new O({style:"circle",size:_.vertex.size,color:_.vertex.color,outline:{color:_.vertex.outlineColor,width:1}}),hover:new O({style:"circle",size:_.vertex.hoverSize,color:_.vertex.hoverColor,outline:{color:_.vertex.hoverOutlineColor,width:1}})},rotatorLine:new lt({color:_.line.color,width:1})};let m=class extends nt.EventedAccessor{constructor(t){super(t),this._activeHandleGraphic=null,this._graphicAttributes={esriSketchTool:"box"},this._mover=null,this._centerGraphic=null,this._backgroundGraphic=null,this._vertexGraphics=[],this._rotateHandleGraphic=null,this._rotateGraphicOffset=20,this._angleOfRotation=0,this._rotateLineGraphic=null,this._startInfo=null,this._totalDx=0,this._totalDy=0,this._xScale=1,this._yScale=1,this.tooltip=null,this.type="box",this.callbacks={onMoveStart(){},onMove(){},onMoveStop(){},onScaleStart(){},onScale(){},onScaleStop(){},onRotateStart(){},onRotate(){},onRotateStop(){},onGraphicClick(){}},this.enableMovement=!0,this.enableRotation=!0,this.enableScaling=!0,this.graphics=[],this.highlightsEnabled=!0,this.layer=null,this.preserveAspectRatio=!1,this.showCenterGraphic=!0,this.symbols=zt,this.sketchOptions=new Q,this.view=null,this._getBounds=(()=>{const i=T();return(e,s)=>{e[0]=Number.POSITIVE_INFINITY,e[1]=Number.POSITIVE_INFINITY,e[2]=Number.NEGATIVE_INFINITY,e[3]=Number.NEGATIVE_INFINITY;for(const o of s){if(!o)continue;let r,h,c,a;if(o.type==="point")r=c=o.x,h=a=o.y;else if(o.type==="multipoint"){const n=j(o);[r,h,c,a]=V(i,[n])}else if(o.type==="extent")[r,h,c,a]=[o.xmin,o.ymin,o.xmax,o.ymax];else{const n=j(o);[r,h,c,a]=V(i,n)}e[0]=Math.min(r,e[0]),e[1]=Math.min(h,e[1]),e[2]=Math.max(c,e[2]),e[3]=Math.max(a,e[3])}return e}})()}initialize(){const t=this.view;this._highlightHelper=new vt({view:t}),this._setup(),this.addHandles([pt(()=>t==null?void 0:t.ready,()=>{const{layer:i,view:e}=this;Gt(e,i)},{once:!0,initial:!0}),I(()=>this.preserveAspectRatio,()=>{this._activeHandleGraphic&&(this._scaleGraphic(this._activeHandleGraphic),this._updateGraphics(),this._updateTooltip(this._activeHandleGraphic))}),I(()=>t==null?void 0:t.scale,()=>{this._updateRotateGraphic(),this._updateRotateLineGraphic()}),I(()=>this.graphics,()=>this.refresh()),I(()=>this.layer,(i,e)=>{e&&this._resetGraphics(e),this.refresh()}),I(()=>this.highlightsEnabled,()=>{var i;(i=this._highlightHelper)==null||i.removeAll(),this._setUpHighlights()}),I(()=>this.sketchOptions.tooltips.effectiveEnabled,i=>{this.tooltip=i?xt(()=>({view:t,options:this.sketchOptions.tooltips})):U(this.tooltip)},_t),I(()=>this.view.effectiveTheme.accentColor,()=>this._updateSymbolsForTheme(),mt),this.on("move-start",i=>{var e,s;return(s=(e=this.callbacks)==null?void 0:e.onMoveStart)==null?void 0:s.call(e,i)}),this.on("move",i=>{var e,s;return(s=(e=this.callbacks)==null?void 0:e.onMove)==null?void 0:s.call(e,i)}),this.on("move-stop",i=>{var e,s;return(s=(e=this.callbacks)==null?void 0:e.onMoveStop)==null?void 0:s.call(e,i)}),this.on("rotate-start",i=>{var e,s;return(s=(e=this.callbacks)==null?void 0:e.onRotateStart)==null?void 0:s.call(e,i)}),this.on("rotate",i=>{var e,s;return(s=(e=this.callbacks)==null?void 0:e.onRotate)==null?void 0:s.call(e,i)}),this.on("rotate-stop",i=>{var e,s;return(s=(e=this.callbacks)==null?void 0:e.onRotateStop)==null?void 0:s.call(e,i)}),this.on("scale-start",i=>{var e,s;return(s=(e=this.callbacks)==null?void 0:e.onScaleStart)==null?void 0:s.call(e,i)}),this.on("scale",i=>{var e,s;return(s=(e=this.callbacks)==null?void 0:e.onScale)==null?void 0:s.call(e,i)}),this.on("scale-stop",i=>{var e,s;return(s=(e=this.callbacks)==null?void 0:e.onScaleStop)==null?void 0:s.call(e,i)})])}destroy(){this._reset(),this.tooltip=U(this.tooltip)}get state(){var e;const t=((e=this.view)==null?void 0:e.ready)??!1,i=this.graphics.length&&this.layer;return t&&i?"active":t?"ready":"disabled"}isUIGraphic(t){return this._vertexGraphics.includes(t)||t===this._backgroundGraphic||t===this._centerGraphic||t===this._rotateHandleGraphic||t===this._rotateLineGraphic}move(t,i){if(this._mover&&this.graphics.length){for(const e of this.graphics){const s=e.geometry,o=x(s,t,i,this.view);e.geometry=o}this.refresh(),this.emit("move-stop",new Z(this.graphics,null,t,i))}}scale(t,i){if(this._mover&&this.graphics.length){for(const e of this.graphics){const s=e.geometry,o=z(s,t,i);e.geometry=o}this.refresh(),this.emit("scale-stop",new J(this.graphics,null,t,i))}}rotate(t,i){if(this._mover&&this.graphics.length){if(!i){const e=this._vertexGraphics[1].geometry.x,s=this._vertexGraphics[3].geometry.y;i=new f(e,s,this.view.spatialReference)}for(const e of this.graphics){const s=e.geometry,o=L(s,t,i);e.geometry=o}this.refresh(),this.emit("rotate-stop",new q(this.graphics,null,t))}}refresh(){this._reset(),this._setup()}reset(){this.graphics=[]}_setup(){this.state==="active"&&(this._setUpHighlights(),this._setupGraphics(),this._setupMover(),this._updateGraphics())}_reset(){var t;(t=this._highlightHelper)==null||t.removeAll(),this._resetGraphicStateVars(),this._resetGraphics(),this._updateTooltip(),this._mover&&this._mover.destroy(),this._mover=null,this.view.cursor="default"}_resetGraphicStateVars(){this._startInfo=null,this._activeHandleGraphic=null,this._totalDx=0,this._totalDy=0,this._xScale=1,this._yScale=1,this._angleOfRotation=0}_resetGraphics(t){(t=t||this.layer)&&(t.removeMany(this._vertexGraphics),t.remove(this._backgroundGraphic),t.remove(this._centerGraphic),t.remove(this._rotateHandleGraphic),t.remove(this._rotateLineGraphic)),this._vertexGraphics.forEach(i=>!i.destroyed&&i.destroy()),!this._backgroundGraphic.destroyed&&this._backgroundGraphic.destroy(),!this._centerGraphic.destroyed&&this._centerGraphic.destroy(),!this._rotateHandleGraphic.destroyed&&this._rotateHandleGraphic.destroy(),!this._rotateLineGraphic.destroyed&&this._rotateLineGraphic.destroy(),this._vertexGraphics=[],this._backgroundGraphic=null,this._centerGraphic=null,this._rotateHandleGraphic=null,this._rotateLineGraphic=null}_setupMover(){let t=[];this.enableScaling&&(t=t.concat(this._vertexGraphics)),this.enableRotation&&t.push(this._rotateHandleGraphic),this.enableMovement&&(t=t.concat(this.graphics,this._backgroundGraphic)),this.showCenterGraphic&&t.push(this._centerGraphic),this._mover=new ft({enableMoveAllGraphics:!1,highlightsEnabled:!1,indicatorsEnabled:!1,view:this.view,graphics:t,callbacks:{onGraphicClick:i=>this._onGraphicClickCallback(i),onGraphicMoveStart:i=>this._onGraphicMoveStartCallback(i),onGraphicMove:i=>this._onGraphicMoveCallback(i),onGraphicMoveStop:i=>this._onGraphicMoveStopCallback(i),onGraphicPointerOver:i=>this._onGraphicPointerOverCallback(i),onGraphicPointerOut:i=>this._onGraphicPointerOutCallback(i)}})}_getStartInfo(t){const[i,e,s,o]=this._getBoxBounds(T()),r=Math.abs(s-i),h=Math.abs(o-e),c=(s+i)/2,a=(o+e)/2,{x:n,y:l}=t.geometry;return{width:r,height:h,centerX:c,centerY:a,startX:n,startY:l,graphicInfos:this._getGraphicInfos(),box:this._backgroundGraphic.geometry,rotate:this._rotateHandleGraphic.geometry}}_getGraphicInfos(){return this.graphics.map(t=>this._getGraphicInfo(t))}_getGraphicInfo(t){const i=t.geometry,[e,s,o,r]=this._getBounds(T(),[i]);return{width:Math.abs(o-e),height:Math.abs(r-s),centerX:(o+e)/2,centerY:(r+s)/2,geometry:i}}_onGraphicClickCallback(t){t.viewEvent.stopPropagation(),this.emit("graphic-click",t),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(t)}_onGraphicMoveStartCallback(t){const{_angleOfRotation:i,_xScale:e,_yScale:s,_backgroundGraphic:o,_vertexGraphics:r,_rotateHandleGraphic:h,symbols:c}=this,a=t.graphic;this._resetGraphicStateVars(),this._hideGraphicsBeforeUpdate(),o.symbol=c.fill.active,this._startInfo=this._getStartInfo(a),this._updateTooltip(a,t.viewEvent),a===h?(this.view.cursor="grabbing",this.emit("rotate-start",new Ht(this.graphics,a,i))):r.includes(a)?(this._activeHandleGraphic=a,this.emit("scale-start",new Tt(this.graphics,a,e,s))):this.emit("move-start",new It(this.graphics,a,t.dx,t.dy))}_onGraphicMoveCallback(t){const i=t.graphic;if(this._startInfo)if(this._vertexGraphics.includes(i))this._scaleGraphic(i),this._updateTooltip(i,t.viewEvent),this.emit("scale",new Et(this.graphics,i,this._xScale,this._yScale));else if(i===this._rotateHandleGraphic)this._rotateGraphic(i),this._updateTooltip(i,t.viewEvent),this.emit("rotate",new Ot(this.graphics,i,this._angleOfRotation));else{const{dx:e,dy:s}=t;this._totalDx+=e,this._totalDy+=s,this._moveGraphic(i,e,s),this._updateTooltip(i,t.viewEvent),this.emit("move",new Ct(this.graphics,i,e,s))}}_onGraphicMoveStopCallback(t){const i=t.graphic;if(!this._startInfo)return void this.refresh();const{_angleOfRotation:e,_totalDx:s,_totalDy:o,_xScale:r,_yScale:h,_vertexGraphics:c,_rotateHandleGraphic:a}=this;this.refresh(),i===a?(this.view.cursor="pointer",this.emit("rotate-stop",new q(this.graphics,i,e))):c.includes(i)?this.emit("scale-stop",new J(this.graphics,i,r,h)):this.emit("move-stop",new Z(this.graphics,i,s,o))}_onGraphicPointerOverCallback(t){const{_backgroundGraphic:i,_vertexGraphics:e,graphics:s,_rotateHandleGraphic:o,symbols:r,view:h}=this,c=t.graphic;if(this._hoveredGraphic=c,c===o)return o.symbol=r.rotator.hover,h.cursor="pointer",void this._updateTooltip(c);if(s.includes(c)||c===i)return void(h.cursor="move");if(!e.includes(c))return void(h.cursor="pointer");this._updateTooltip(c),t.graphic.symbol=r.handles.hover;const a=h.rotation;let n,l=t.index;switch(l<8&&(a>=0&&a<45?l%=8:l=a>=45&&a<90?(l+1)%8:a>=90&&a<135?(l+2)%8:a>=135&&a<180?(l+3)%8:a>=180&&a<225?(l+4)%8:a>=225&&a<270?(l+5)%8:a>=270&&a<315?(l+6)%8:(l+7)%8),l){case 0:case 4:n="nwse-resize";break;case 1:case 5:n="ns-resize";break;case 2:case 6:n="nesw-resize";break;case 3:case 7:n="ew-resize";break;default:n="pointer"}h.cursor=n}_onGraphicPointerOutCallback(t){const{_vertexGraphics:i,_rotateHandleGraphic:e,symbols:s,view:o}=this;this._hoveredGraphic=null,t.graphic===e?e.symbol=s.rotator.default:i.includes(t.graphic)&&(t.graphic.symbol=s.handles.default),o.cursor="default",this._updateTooltip()}_scaleGraphic(t){const{_startInfo:i,_vertexGraphics:e,preserveAspectRatio:s,view:o}=this,{centerX:r,centerY:h,graphicInfos:c,height:a,startX:n,startY:l,width:w}=i,{resolution:v,transform:p}=o.state,g=e.indexOf(t);g!==1&&g!==5||this._updateX(t,r),g!==3&&g!==7||this._updateY(t,h);const{x:k,y:H}=t.geometry,W=p[0]*k+p[2]*H+p[4],tt=p[1]*k+p[3]*H+p[5],R=(c==null?void 0:c.map(y=>y.geometry))??[],et=R.every(y=>y.type==="point");if((w===0||a===0)&&et){const y=C((k-n)/v),G=C((l-H)/v);for(let S=0;S<R.length;S++)this.graphics[S].geometry=x(R[S],y,G,o,!0);return this._centerGraphic.geometry=new f(k,H,o.spatialReference),void(this._backgroundGraphic.geometry=x(i.box,y,G,o,!0))}if(s){const y=C(p[0]*r+p[2]*h+p[4],2),G=C(p[1]*r+p[3]*h+p[5],2),S=C(p[0]*n+p[2]*l+p[4],2),$=C(p[1]*n+p[3]*l+p[5],2);let b=gt(y,G,S,$,W,tt);b!==0&&Math.abs(b)!==1/0||(b=1),this._xScale=this._yScale=b;for(const M of R){const B=R.indexOf(M);this.graphics[B].geometry=z(M,this._xScale,this._yScale,[r,h])}this._updateBackgroundGraphic()}else{let y=k-n,G=l-H;if(g===1||g===5?y=0:g!==3&&g!==7||(G=0),y===0&&G===0)return;const S=r+y/2,$=h+G/2;let b=(w+(n>r?y:-1*y))/w,M=(a+(l<h?G:-1*G))/a;g!==1&&g!==5&&b!==0&&Math.abs(b)!==1/0||(b=1),g!==3&&g!==7&&M!==0&&Math.abs(M)!==1/0||(M=1),this._xScale=b,this._yScale=M;const B=(S-r)/v,it=($-h)/v,st=z(i.box,this._xScale,this._yScale);this._backgroundGraphic.geometry=x(st,B,it,o,!0);const{centerX:A,centerY:P}=this._getGraphicInfo(this._backgroundGraphic),ot=(A-r)/v,rt=-1*(P-h)/v;for(const X of R){const at=R.indexOf(X),ht=z(X,this._xScale,this._yScale,[r,h]);this.graphics[at].geometry=x(ht,ot,rt,o,!0)}this._centerGraphic.geometry=new f(A,P,o.spatialReference)}}_rotateGraphic(t){var v;const{centerX:i,centerY:e,startX:s,startY:o,box:r,rotate:h}=this._startInfo,c=this.view.spatialReference,a=new f(s,o,c),n=new f(i,e,c),l=t.geometry;this._angleOfRotation=yt(a,l,n);const w=((v=this._startInfo.graphicInfos)==null?void 0:v.map(p=>p.geometry))??[];for(const p of w){const g=w.indexOf(p),k=L(p,this._angleOfRotation,n);this.graphics[g].geometry=k}this._backgroundGraphic.geometry=L(r,this._angleOfRotation,n),this._rotateHandleGraphic.geometry=L(h,this._angleOfRotation,n)}_moveGraphic(t,i,e){if(this.graphics.includes(t)){const s=this._backgroundGraphic.geometry;this._backgroundGraphic.geometry=x(s,i,e,this.view);for(const o of this.graphics)o!==t&&(o.geometry=x(o.geometry,i,e,this.view))}else if(t===this._centerGraphic){const s=this._backgroundGraphic.geometry;this._backgroundGraphic.geometry=x(s,i,e,this.view)}if(t===this._backgroundGraphic||t===this._centerGraphic)for(const s of this.graphics)s.geometry=x(s.geometry,i,e,this.view)}_setUpHighlights(){var t;this.highlightsEnabled&&this.graphics.length&&((t=this._highlightHelper)==null||t.add(this.graphics))}_setupGraphics(){const{_graphicAttributes:t,symbols:i}=this;this._centerGraphic=new E({symbol:i.centerIndicator,attributes:t}),this.showCenterGraphic&&this.layer.add(this._centerGraphic),this._backgroundGraphic=new E({symbol:i.fill.default,attributes:t}),this.layer.add(this._backgroundGraphic),this._rotateLineGraphic=new E({symbol:i.rotatorLine,attributes:t}),this._rotateHandleGraphic=new E({symbol:i.rotator.default,attributes:t}),this.enableRotation&&!this._hasExtentGraphic()&&this.layer.addMany([this._rotateLineGraphic,this._rotateHandleGraphic]);for(let e=0;e<8;e++)this._vertexGraphics.push(new E({symbol:i.handles.default,attributes:t}));this.enableScaling&&this.layer.addMany(this._vertexGraphics)}_updateSymbolsForTheme(){var i,e;const t=this.view.effectiveTheme.accentColor;this.symbols={...this.symbols,fill:{active:(i=this.symbols.fill.active)==null?void 0:i.clone().set("outline.color",t),default:(e=this.symbols.fill.default)==null?void 0:e.clone().set("outline.color",t)},handles:{...this.symbols.handles,default:this.symbols.handles.default.clone().set("outline.color",t)},rotator:{...this.symbols.rotator,default:this.symbols.rotator.default.clone().set("outline.color",t)},rotatorLine:this.symbols.rotatorLine.clone().set("color",t)};for(const s of this._vertexGraphics)s.symbol=s===this._hoveredGraphic?this.symbols.handles.hover:this.symbols.handles.default;this._backgroundGraphic.symbol=this.symbols.fill.default,this._rotateHandleGraphic.symbol=this._rotateHandleGraphic===this._hoveredGraphic?this.symbols.rotator.hover:this.symbols.rotator.default,this._rotateLineGraphic.symbol=this.symbols.rotatorLine}_updateGraphics(){this._updateBackgroundGraphic(),this._updateHandleGraphics(),this._updateCenterGraphic(),this._updateRotateGraphic(),this._updateRotateLineGraphic()}_hideGraphicsBeforeUpdate(){this._centerGraphic.visible=!1,this._rotateHandleGraphic.visible=!1,this._rotateLineGraphic.visible=!1,this._vertexGraphics.forEach(t=>t.visible=!1)}_updateHandleGraphics(){const t=this._getCoordinates(!0);this._vertexGraphics.forEach((i,e)=>{const[s,o]=t[e];this._updateXY(i,s,o)})}_updateBackgroundGraphic(){const t=this._getCoordinates().map(([i,e])=>[i,e]);this._backgroundGraphic.geometry=new Y({rings:[t],spatialReference:this.view.spatialReference})}_updateCenterGraphic(){const[t,i,e,s]=this._getBoxBounds(T()),o=(e+t)/2,r=(s+i)/2;this._centerGraphic.geometry=new f(o,r,this.view.spatialReference)}_updateRotateGraphic(){if(!this._vertexGraphics.length)return;const{x:t,y:i}=this._vertexGraphics[1].geometry,e=i+this.view.state.resolution*this._rotateGraphicOffset;this._rotateHandleGraphic.geometry=new f(t,e,this.view.spatialReference)}_updateRotateLineGraphic(){var e;if(!this._vertexGraphics.length||!((e=this._rotateHandleGraphic)!=null&&e.geometry))return;const t=this._vertexGraphics[1].geometry,i=this._rotateHandleGraphic.geometry;this._rotateLineGraphic.geometry=new K({paths:[[[t.x,t.y],[i.x,i.y]]],spatialReference:this.view.spatialReference})}_updateXY(t,i,e){t.geometry=new f(i,e,this.view.spatialReference)}_updateX(t,i){const e=t.geometry.y;t.geometry=new f(i,e,this.view.spatialReference)}_updateY(t,i){const e=t.geometry.x;t.geometry=new f(e,i,this.view.spatialReference)}_hasExtentGraphic(){return this.graphics.some(t=>(t==null?void 0:t.geometry)!=null&&t.geometry.type==="extent")}_getBoxBounds(t){const i=this.graphics.map(e=>e.geometry);return this._getBounds(t,i)}_getCoordinates(t){const[i,e,s,o]=this._getBoxBounds(T());if(t){const r=(i+s)/2,h=(o+e)/2;return[[i,o],[r,o],[s,o],[s,h],[s,e],[r,e],[i,e],[i,h]]}return[[i,o],[s,o],[s,e],[i,e]]}_updateTooltip(t,i){if(this.tooltip==null)return;if(!t)return void this.tooltip.clear();const{_backgroundGraphic:e,graphics:s,_vertexGraphics:o,_rotateHandleGraphic:r}=this;t===r?this._updateRotateTooltip():o.includes(t)?this._updateScaleTooltip():(s.includes(t)||t===e)&&this._updateMoveTooltip(i)}_updateRotateTooltip(){this.tooltip!=null&&(this.tooltip.info=new St({sketchOptions:this.sketchOptions,angle:-this._angleOfRotation}))}_updateScaleTooltip(){const{tooltip:t,_xScale:i,_yScale:e,sketchOptions:s,view:o}=this;if(t==null)return;const r=this._getCoordinates(),h=kt({topLeft:r[0],topRight:r[1],bottomRight:r[2],bottomLeft:r[3],spatialReference:o.spatialReference});if(h==null)return;const{xSize:c,ySize:a}=h,n=Math.abs(i),l=Math.abs(e);t.info=new Rt({sketchOptions:s,xScale:n,yScale:l,xSize:c,ySize:a})}_updateMoveTooltip(t){const{tooltip:i,sketchOptions:e,view:s}=this;if(i==null)return;const o=new Mt({sketchOptions:e});if(t){const{x:r,y:h}=t.origin,c=s.toMap(t),a=s.toMap({x:r,y:h}),n=wt(a,c);o.distance=n??dt}i.info=o}};function C(t,i=2){return Number.parseFloat(t.toFixed(i))}d([u()],m.prototype,"tooltip",void 0),d([u({readOnly:!0})],m.prototype,"type",void 0),d([u()],m.prototype,"callbacks",void 0),d([u()],m.prototype,"enableMovement",void 0),d([u()],m.prototype,"enableRotation",void 0),d([u()],m.prototype,"enableScaling",void 0),d([u()],m.prototype,"graphics",void 0),d([u()],m.prototype,"highlightsEnabled",void 0),d([u()],m.prototype,"layer",void 0),d([u()],m.prototype,"preserveAspectRatio",void 0),d([u()],m.prototype,"showCenterGraphic",void 0),d([u({readOnly:!0})],m.prototype,"state",null),d([u()],m.prototype,"symbols",void 0),d([u({type:Q})],m.prototype,"sketchOptions",void 0),d([u({constructOnly:!0})],m.prototype,"view",void 0),m=d([ut("esri.views.draw.support.Box")],m);const ii=m;export{ii as default};
