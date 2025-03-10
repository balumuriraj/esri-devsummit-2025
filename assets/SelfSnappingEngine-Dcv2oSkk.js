import{c6 as B,lr as G,aE as C,ls as K,lt as H,lu as b,lv as z,hC as A,fe as I,fd as J,lw as W,lx as X,ly as Z,hv as ee,cw as te,cx as ie,lz as se,eY as re,bD as ne,aL as L,aM as M,aN as oe}from"./index-szNj1aqA.js";import{p as P,N as f,u as y,n as m,s as c,t as $,b as F,r as Q,v as R,M as U,J as ae,w as he,I as q,e as j,m as pe,x as le,k as de,E as ce}from"./SketchOptions-C13bRAAG.js";import{s as x,r as ge,g as fe,p as S,d as ue,o as me,h as xe}from"./RouteLayerInteraction-Bs39bHu1.js";import{u as Y}from"./geodesicLengthMeasurementUtils-EpxbJAYY.js";import"./geodesicUtils-DIa9g3Co.js";import"./plane-B-bok-4y.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4f64-Dk4dwAN8.js";import"./quatf64-aQ5IuZRd.js";import"./sphere-DTYho6l_.js";import"./projectVectorToVector-gprHIGOt.js";import"./projectPointToVector-2wdg5tcU.js";import"./GraphicsLayer-CGIk0gza.js";import"./RouteLayerView2D-8nVUy07e.js";import"./LayerView-DzzgUDD7.js";import"./Container-huN4r_Ys.js";import"./GraphicContainer-BG4_-9KT.js";import"./AGraphicContainer-DaIDpgdk.js";import"./TechniqueInstance-BwsTBjP9.js";import"./UpdateTracking2D-C6ER-1No.js";import"./dataViewUtils-CgUbP-hL.js";import"./VertexElementDescriptor-BLyltQyJ.js";import"./BoundingBox-BjvutGDs.js";import"./FramebufferObject-HInsG0L_.js";import"./VertexArrayObject-ByzQLaW8.js";import"./memoryEstimations-CnkpdY1b.js";import"./TileContainer-DmLUgm6h.js";import"./WGLContainer-B-8KBCgQ.js";import"./ProgramTemplate-NjU0Lze9.js";import"./vec3f32-nZdmKIgz.js";import"./config-DX6_QZcn.js";import"./earcut-D9gy186-.js";import"./featureConversionUtils-3a9TqYps.js";import"./OptimizedFeatureSet-FFBqtxva.js";import"./OptimizedGeometry-BLyz1xrK.js";import"./FeatureCommandQueue-C6DlcTjW.js";import"./CIMSymbolHelper-CSFIZESX.js";import"./BidiEngine-QXap_35O.js";import"./fontUtils-DImQRU8p.js";import"./Rect-DOTjBfO0.js";import"./rasterizingUtils-CMJTqQ9h.js";import"./floatRGBA-eKHE6e6y.js";import"./TechniqueType-uMFRS8dR.js";import"./GraphShaderModule-T2C1qz5m.js";import"./ShaderBuilder-vfhyfMfS.js";import"./BindType-BBwFZqyN.js";import"./QueueProcessor-BDnCkJHv.js";import"./GraphicsView2D--hr1K6LQ.js";import"./OverrideHelper-CTXZ_4rT.js";import"./quantizationUtils-COzJRcFr.js";import"./FeatureMetadata-DpuH4vOk.js";import"./queryUtils-Cg1JM0hf.js";import"./json-Wa8cmqdu.js";import"./timeSupport-CwKTmIwF.js";import"./TimeOnly-yq9GKJdG.js";import"./dehydratedFeatures-CILUONBt.js";import"./geometryEngineBase-B0ZyeKAX.js";import"./_commonjsHelpers-DCkdB7M8.js";import"./hydrated-CNT_kZ8I.js";class k{constructor(i,e){this.view=i,this.options=e,this.squaredShortLineThreshold=P.shortLineThreshold*P.shortLineThreshold}snap(i,e){return e.vertexHandle!=null?e.vertexHandle.type!=="vertex"?[]:this.snapExistingVertex(i,e):this.snapNewVertex(i,e)}edgeExceedsShortLineThreshold(i,e){return this.exceedsShortLineThreshold(f(i.leftVertex.pos,this.view,e),f(i.rightVertex.pos,this.view,e),e)}exceedsShortLineThreshold(i,e,{spatialReference:t}){return this.squaredShortLineThreshold===0||y(x(e,t,m,this.view),x(i,t,m,this.view))>this.squaredShortLineThreshold}isVertical(i,e,{spatialReference:t}){const s=B(t);return G(c(i),c(e))*s<P.verticalLineThresholdMeters}squaredProximityThreshold(i){return i==="touch"?this._squaredTouchProximityThreshold:this._squaredMouseProximityThreshold}get _squaredMouseProximityThreshold(){return this.options.distance*this.options.distance}get _squaredTouchProximityThreshold(){const{distance:i,touchSensitivityMultiplier:e}=this.options,t=i*e;return t*t}}class ve extends k{snapNewVertex(i,e){const t=e.editGeometryOperations.data.components[0],s=t.edges.length,r=[];if(s<1)return r;const{spatialReference:n}=e,a=x(i,n,m,this.view),{view:o}=this,h=t.edges[s-1];let p=h;do{if(this.edgeExceedsShortLineThreshold(p,e)){const g=$(p,o,e);this._processCandidateProposal(g.left,g.right,i,a,e,r)}p=p.leftVertex.leftEdge}while(p&&p!==h);return r}snapExistingVertex(i,e){const t=[],s=e.vertexHandle,r=s.component;if(r.edges.length<2)return t;const{view:n}=this,{spatialReference:a}=e,o=x(i,a,m,n),h=s.leftEdge,p=s.rightEdge;h&&p&&this.edgeExceedsShortLineThreshold(h,e)&&this.edgeExceedsShortLineThreshold(p,e)&&this._processCandidateProposal(f(h.leftVertex.pos,n,e),f(p.rightVertex.pos,n,e),i,o,e,t);const g=r.edges[0];let d=g;do{if(d!==s.leftEdge&&d!==s.rightEdge&&this.edgeExceedsShortLineThreshold(d,e)){const u=$(d,n,e);this._processCandidateProposal(u.left,u.right,i,o,e,t)}d=d.rightVertex.rightEdge}while(d&&d!==g);return t}_processCandidateProposal(i,e,t,s,r,n){var g;const{spatialReference:a,pointer:o}=r,h=C();Ee(h,i,e,t,r);const p=F(Q(h));y(s,x(p,a,m,this.view))<this.squaredProximityThreshold(o)&&n.push(new ge({lineStart:i,lineEnd:e,targetPoint:p,isDraped:((g=r.elevationInfo)==null?void 0:g.mode)==="on-the-ground"}))}}function Ee(l,i,e,t,s){we(l,i,e,t,s)||Ve(l,t,i,e)}function we(l,i,e,t,{spatialReference:s}){const r=R(i,e,s,s);if(r==null)return!1;const n=R(e,t,s,s);if(n==null)return!1;const a=Y(e,t,s);if(a==null)return!1;const o=Math.abs(K.shortestSignedDiff(r,n))>Math.PI/2?H.normalize(r+Math.PI):r;return U(l,e,s,b(a,"meters"),z(o,"radians","geographic"),"geodesic"),l[2]=t[2],!0}function Ve(l,i,e,t){ae(i,{start:e,end:t,type:he.LINE},l),l[2]=i[2]}let Pe=class extends k{snapNewVertex(i,e){const t=e.editGeometryOperations.data.components[0],s=t.edges.length,r=t.vertices.length,n=[];if(s<2)return n;const{view:a}=this,o=x(i,e.spatialReference,m,a),h=f(t.vertices[r-1].pos,a,e),p=f(t.vertices[0].pos,a,e),g=t.edges[s-1];let d=g;do{if(this.edgeExceedsShortLineThreshold(d,e)){const u=$(d,a,e);this._checkEdgeForParallelLines(u,h,i,o,e,n),this._checkEdgeForParallelLines(u,p,i,o,e,n)}d=d.leftVertex.leftEdge}while(d&&d!==g);return n}snapExistingVertex(i,e){const t=[],s=e.vertexHandle,r=s.component;if(r.edges.length<3)return t;const{view:n}=this,a=x(i,e.spatialReference,m,n),o=s.leftEdge,h=s.rightEdge,p=r.vertices[0],g=f(p.pos,n,e),d=r.vertices.length,u=r.vertices[d-1],w=f(u.pos,n,e),_=r.edges[0];let v=_;do{if(v!==o&&v!==h&&this.edgeExceedsShortLineThreshold(v,e)){const T=$(v,n,e);o&&this._checkEdgeForParallelLines(T,f(o.leftVertex.pos,n,e),i,a,e,t),h&&this._checkEdgeForParallelLines(T,f(h.rightVertex.pos,n,e),i,a,e,t),s===p?this._checkEdgeForParallelLines(T,w,i,a,e,t):s===u&&this._checkEdgeForParallelLines(T,g,i,a,e,t)}v=v.rightVertex.rightEdge}while(v&&v!==_);return t}_checkEdgeForParallelLines(i,e,t,s,r,n){var d;const a=i.left,o=i.right;if(q(E,c(e),c(a),c(o)),A(E,c(e))<P.parallelLineThreshold)return;q(E,c(t),c(a),c(o),c(e));const{spatialReference:h,pointer:p}=r,g=F(j(E[0],E[1],t[2]));if(y(s,x(g,h,m,this.view))<this.squaredProximityThreshold(p)){if(this.isVertical(g,e,r)||this.isVertical(a,o,r)||ye(i,n))return;n.push(new fe({referenceLine:i,lineStart:e,targetPoint:g,isDraped:((d=r.elevationInfo)==null?void 0:d.mode)==="on-the-ground"}))}}};function ye(l,i){const e=l.left,t=l.right;for(const s of i)if(q(E,c(t),c(s.constraint.start),c(s.constraint.end),c(e)),A(E,c(t))<P.parallelLineThreshold)return s.addReferenceLine(l),!0;return!1}const E=I();class _e extends k{snapNewVertex(i,e){const t=e.editGeometryOperations.data.components[0],s=[];if(t.vertices.length<2)return s;const{view:r}=this,n=x(i,e.spatialReference,m,r),a=t.vertices.at(-1);this._checkForSnappingCandidate(S.LastVertex,s,a.leftEdge,a,a.leftEdge.leftVertex,i,n,e);const o=t.vertices[0];return this._checkForSnappingCandidate(S.FirstVertex,s,o.rightEdge,o,o.rightEdge.rightVertex,i,n,e),s}snapExistingVertex(i,e){const t=[],s=e.vertexHandle;if(s.component.vertices.length<3)return t;const{view:r}=this,n=x(i,e.spatialReference,m,r),a=s.leftEdge,o=s.rightEdge;if(a!=null&&a.leftVertex.leftEdge){const h=a.leftVertex.leftEdge;this._checkForSnappingCandidate(S.ExistingEdge,t,h,h.rightVertex,h.leftVertex,i,n,e)}if(o!=null&&o.rightVertex.rightEdge){const h=o.rightVertex.rightEdge;this._checkForSnappingCandidate(S.ExistingEdge,t,h,h.leftVertex,h.rightVertex,i,n,e)}return t}_checkForSnappingCandidate(i,e,t,s,r,n,a,o){if(!this.edgeExceedsShortLineThreshold(t,o))return;const h=this.view,p=f(s.pos,h,o),g=f(r.pos,h,o);Te(O,g,p,n,o),this._checkForSnappingCandidateAlongProjectedRay(i,e,g,p,O,n,a,o)}_checkForSnappingCandidateAlongProjectedRay(i,e,t,s,r,n,a,o){var v;const{spatialReference:h,pointer:p}=o,g=J(N,c(n),c(s)),d=W(r,g)/X(r),u=Z(N,c(s),r,d),w=F(j(u[0],u[1],n[2]));if(y(a,x(w,h,m,this.view))>this.squaredProximityThreshold(p)||this.isVertical(w,s,o)||this.isVertical(s,t,o))return;const _=ee(C(),s,r,Math.sign(d));e.push(new ue({targetPoint:w,constraint:new pe(s,Q(_)),previousVertex:t,otherVertex:s,otherVertexType:me.CENTER,selfSnappingType:i,isDraped:((v=o.elevationInfo)==null?void 0:v.mode)==="on-the-ground"}))}}function Te(l,i,e,t,s){Le(l,i,e,t,s)||Se(l,i,e)}function Le(l,i,e,t,{spatialReference:s}){const r=R(i,e,s,s);if(r==null)return!1;const n=R(e,t,s,s);if(n==null)return!1;const a=Math.sign(H.shortestSignedDiff(r,n))*Math.PI*.5,o=z(r+a,"radians","geographic"),h=C(),p=Y(e,t,s);return p!=null&&(U(h,e,s,b(p,"meters"),o,"geodesic"),te(l,h,e),!0)}function Se(l,i,e){const t=J(N,c(e),c(i));ie(l,t[1],-t[0],0)}const N=I(),O=C();let $e=class extends k{snapNewVertex(i,e){const t=e.editGeometryOperations.data.components[0],s=[],r=t.vertices.length;if(e.editGeometryOperations.data.type!=="polygon"||r<2)return s;const{view:n}=this,a=t.vertices[0],o=t.vertices[r-1],h=f(a.pos,n,e),p=f(o.pos,n,e);return this._processCandidateProposal(h,p,i,e,s),s}snapExistingVertex(i,e){const t=[],s=e.vertexHandle,r=s.component;if(r.edges.length<2||e.editGeometryOperations.data.type==="polyline"&&(s.index===0||s.index===r.vertices.length-1))return t;const{view:n}=this,a=f(s.leftEdge.leftVertex.pos,n,e),o=f(s.rightEdge.rightVertex.pos,n,e);return this._processCandidateProposal(a,o,i,e,t),t}_processCandidateProposal(i,e,t,s,r){var u;if(!this.exceedsShortLineThreshold(i,e,s))return;const n=se(D,c(i),c(e),.5),a=.5*G(c(i),c(e)),o=le(D,c(t),n,a),h=F(j(o[0],o[1],t[2])),{spatialReference:p,pointer:g}=s,d=x(t,p,m,this.view);if(y(d,x(h,p,m,this.view))<this.squaredProximityThreshold(g)){if(this.isVertical(i,h,s)||this.isVertical(h,e,s))return;r.push(new xe({targetPoint:h,point1:i,point2:e,isDraped:((u=s.elevationInfo)==null?void 0:u.mode)==="on-the-ground"}))}}};const D=I();let V=class extends re{constructor(l){super(l),this.updating=!1,this._snappers=new ne,this._domain=de.SELF}initialize(){this._snappers.push(new Pe(this.view,this.options),new ve(this.view,this.options),new _e(this.view,this.options),new $e(this.view,this.options))}set options(l){this._set("options",l);for(const i of this._snappers)i.options=l}async fetchCandidates(l,i,e){if(!(i&this._domain&&this.options.effectiveSelfEnabled))return[];const t=[];for(const s of this._snappers.items)for(const r of s.snap(l,e))t.push(r);return ce(l,t),t}};L([M({readOnly:!0})],V.prototype,"updating",void 0),L([M({constructOnly:!0})],V.prototype,"view",void 0),L([M()],V.prototype,"options",null),V=L([oe("esri.views.interactive.snapping.SelfSnappingEngine")],V);export{V as SelfSnappingEngine};
