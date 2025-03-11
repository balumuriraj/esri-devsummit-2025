import{bf as ze,bd as Ge,bh as Pe,bi as Fe,aI as Z,bm as ve,ae as ne,cu as Oe,cv as Be,n as G,cw as Y,cz as q,aa as K,b9 as ye,bY as Ue,v as ge,em as De,cx as $e,bl as je,i as T,k as v,bu as Qe,o as We}from"./CodeBlock-DBIw63CI.js";import{S as ee,E as He,D as Ve,C as qe,o as Je,g as Ye,a as Ke,b as Xe,c as Ze,_ as et,P as tt,A as at,v as it,d as $,e as nt,f as oe,u as Ie,i as xe}from"./KnowledgeGraphSublayer-BLf11yqJ.js";import{s as X}from"./featureConversionUtils-CKmftsHB.js";import{_ as I,I as se,t as re,S as x,o as ot}from"./constants-B4mRqufT.js";import{I as st}from"./knowledgeGraphService-DA0BXx2W.js";import"./index-BYYG-xAB.js";import"./OptimizedFeature-C7vq2Etq.js";import"./memoryEstimations-DG877__o.js";import"./GraphicsLayer-C4QugWpx.js";import"./GraphQueryStreaming-7r8WpHN5.js";import"./FeatureStore-DPYbNWJQ.js";import"./BoundsStore-DVGw3zJR.js";import"./PooledRBush-Dmne-lNb.js";import"./timeSupport-DNVL_oH4.js";import"./queryUtils-B4LAuMaE.js";import"./json-Wa8cmqdu.js";import"./optimizedFeatureQueryEngineAdapter-Bo8EOzsB.js";import"./QueryEngine-Dqq6UKEZ.js";import"./WhereClauseCache-2wi8V4lz.js";import"./WhereClause-DVOvsAur.js";import"./TimeOnly-tuNXHBy1.js";import"./QueryEngineCapabilities-B_pTbIiR.js";import"./quantizationUtils-yHnQ7Pvp.js";import"./utils-DaanhY3M.js";import"./utils-Cxh3ySg9.js";import"./utils-DduwN48O.js";import"./ClassBreaksDefinition-C9GT6nmE.js";import"./SnappingCandidate-DGkpYqI6.js";import"./FixedIntervalBinParameters-KycFlU6D.js";import"./clientSideDefaults-C7Jc-KhZ.js";import"./utils-DELMN4i8.js";import"./cimSymbolUtils-BKUa-w8i.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./Path-DZKPtwUs.js";var te;(function(e){e.MULTIPLIER="multiplier",e.ABSOLUTE="absolute-value"})(te||(te={}));let M=class extends ze(Ge(Pe(Fe(je)))){constructor(e){if(super(e),this.url=null,this.dataPreloadedInLocalCache=!1,this.initializationLinkChartConfig=null,this.membershipModified=!0,this._currentLinkChartConfig={layoutMode:"organic-standard"},this._graphTypeLookup=new Map,this.dataManager=null,this.knowledgeGraph=null,this.layers=new(Z.ofType(ee)),this.entityLinkChartDiagramLookup=new Map,this.relationshipLinkChartDiagramLookup=new Map,this.linkChartExtent=new ve({xmin:-1e-7,ymin:-1e-7,xmax:1e-7,ymax:1e-7}),this.memberEntityTypes=null,this.memberRelationshipTypes=null,this.operationalLayerType="LinkChartLayer",this.sublayerIdsCache=new Map,this.tables=new(Z.ofType(ee)),this.type="link-chart",this.chronologicalAuxiliaryGraphics=null,this._originalInclusionList=e==null?void 0:e.initializationInclusionModeDefinition,(e==null?void 0:e.dataPreloadedInLocalCache)&&!(e!=null&&e.initializationInclusionModeDefinition))throw new ne("knowledge-graph:linkchart-layer-constructor","If creating a link chart composite layer and configured that data is already loaded in the cache, you must specify an inclusion list so the Composite Layer knows what records belong to it");this.addHandles(Oe(()=>this.layers.concat(this.tables),(t,i)=>this._handleSublayersChange(t,i),Be))}normalizeCtorArgs(e){if(!e)return{};const{url:t,title:i,dataPreloadedInLocalCache:n,initializationLinkChartConfig:a}=e;return{url:t,title:i,dataPreloadedInLocalCache:n,initializationLinkChartConfig:a}}_initializeLayerProperties(e){var s,r,h,m;if(!this.title&&this.url){const d=this.url.split("/");this.title=d[d.length-2]}const t=new Set;let i=[],n=[];if(e.inclusionModeDefinition&&(!e.inclusionModeDefinition.namedTypeDefinitions||e.inclusionModeDefinition.namedTypeDefinitions.size<1))throw new ne("knowledge-graph:composite-layer-constructor","If an explicit inclusion definition is defined, at least one namedTypeDefinition must also be defined");(s=e.inclusionModeDefinition)!=null&&s.generateAllSublayers?(i=e.knowledgeGraph.dataModel.entityTypes??[],n=e.knowledgeGraph.dataModel.relationshipTypes??[]):(r=e.inclusionModeDefinition)!=null&&r.namedTypeDefinitions&&((h=e.inclusionModeDefinition)==null?void 0:h.namedTypeDefinitions.size)>0?(m=e.inclusionModeDefinition)==null||m.namedTypeDefinitions.forEach((d,g)=>{var E,N;const f=this._graphTypeLookup.get(g);if(!f)return G.getLogger(this).warn(`A named type, ${g}, was in the inclusion list that wasn't in the data model and will be removed`),void((E=e.inclusionModeDefinition)==null?void 0:E.namedTypeDefinitions.delete(g));f.type==="relationship"?t.has(g)||(t.add(g),n.push(f)):f.type==="entity"?t.has(g)||(t.add(g),i.push(f)):(G.getLogger(this).warn(`A named type, ${g}, was in the inclusion list that wasn't properly modeled and will be removed`),(N=e.inclusionModeDefinition)==null||N.namedTypeDefinitions.delete(g))}):(i=e.knowledgeGraph.dataModel.entityTypes??[],n=e.knowledgeGraph.dataModel.relationshipTypes??[]);const a=new He({knowledgeGraph:e.knowledgeGraph,inclusionModeDefinition:e.inclusionModeDefinition});this.knowledgeGraph=e.knowledgeGraph,this.memberEntityTypes=i,this.memberRelationshipTypes=n,this.dataManager=a}load(e){const t=async()=>{var a;const i=[],n=[];this.loadLayerAssumingLocalCache(),this._layersLoadedFromAuthoritativeItem()||await xe(this),this.dataManager.inclusionModeDefinition&&(this.dataManager.inclusionModeDefinition.generateAllSublayers=!1),(a=this.dataManager.inclusionModeDefinition)==null||a.namedTypeDefinitions.forEach(s=>{s.useAllData=!1}),await this._initializeDiagram(),this.layers.forEach(s=>{n.push(s.refreshCachedQueryEngine()),i.push(new Promise(r=>{s.on("layerview-create",()=>{r(null)})}))}),this.tables.forEach(s=>{n.push(s.refreshCachedQueryEngine())}),await Promise.all(n)};return this.addResolvingPromise(new Promise(i=>{st(this.url).then(async n=>{var s,r,h,m,d,g,f,E,N,y;(s=n.dataModel.entityTypes)==null||s.forEach(w=>{w.name&&this._graphTypeLookup.set(w.name,w)}),(r=n.dataModel.relationshipTypes)==null||r.forEach(w=>{w.name&&this._graphTypeLookup.set(w.name,w)});const a=(h=this.linkChart)==null?void 0:h.linkChartProperties;if((a==null?void 0:a.originIdOf("entitiesUrl"))===Y.LINK_CHART&&(this.membershipModified=!1,this._originalInclusionList=await Ve.fetchAndConvertSerializedLinkChart({entitiesUrl:a==null?void 0:a.entitiesUrl,relationshipsUrl:a==null?void 0:a.relationshipsUrl}),this._alignLayersDataModelAndInclusionDefinition(n.dataModel),this.initializationLinkChartConfig={layoutSettings:(a==null?void 0:a.layoutSettings)??void 0,layoutMode:qe(a.layoutType)}),this._initializeLayerProperties({knowledgeGraph:n,inclusionModeDefinition:this._originalInclusionList}),(d=(m=this.dataManager.inclusionModeDefinition)==null?void 0:m.namedTypeDefinitions)!=null&&d.size||(this.dataManager.inclusionModeDefinition={generateAllSublayers:!1,namedTypeDefinitions:new Map},(g=this.dataManager.knowledgeGraph.dataModel.entityTypes)==null||g.forEach(w=>{var D;w.name&&((D=this.dataManager.inclusionModeDefinition)==null||D.namedTypeDefinitions.set(w.name,{useAllData:!0}))}),(f=this.dataManager.knowledgeGraph.dataModel.relationshipTypes)==null||f.forEach(w=>{var D;w.name&&((D=this.dataManager.inclusionModeDefinition)==null||D.namedTypeDefinitions.set(w.name,{useAllData:!0}))})),this.dataPreloadedInLocalCache){const w=Je.getInstance();for(const[D,O]of((E=this.dataManager.inclusionModeDefinition)==null?void 0:E.namedTypeDefinitions)??[])for(const b of((N=O.members)==null?void 0:N.values())??[]){const ae=w.readFromStoreById(`${D}__${b.id}`);ae&&q(this.dataManager.sublayerCaches,D,()=>new Map).set(b.id,ae)}await t()}else{const w=((y=this.initializationLinkChartConfig)==null?void 0:y.layoutMode)==="geographic-organic-standard";this.addResolvingPromise(this.dataManager.refreshCacheContent(void 0,!1,w,!0).then(async()=>{K(e),await t()}))}i(null)})})),Promise.resolve(this)}set initializationInclusionModeDefinition(e){this.loadStatus!=="loaded"&&this.loadStatus!=="failed"?this._set("initializationInclusionModeDefinition",e):G.getLogger(this).error("#initializationInclusionModeDefinition","initializationInclusionModeDefinition cannot be changed after the layer is loaded.")}get linkChart(){return this.parent}async addRecords(e,t){let i=[];t!=null&&t.cascadeAddRelationshipEndNodes&&this.dataManager.knowledgeGraph.dataModel&&(i=await Ye(e,this.dataManager.knowledgeGraph));const n=e.concat(i).filter(a=>{var s;return!((s=this.sublayerIdsCache.get(a.typeName))!=null&&s.has(a.id))});n.length>0&&(this.membershipModified=!0),await this._handleNewRecords(n,t)}async removeRecords(e,{cascadeRemoveRelationships:t=!0,recalculateLayout:i=!1,overrideMembershipCheck:n=!1}={cascadeRemoveRelationships:!0,recalculateLayout:!1,overrideMembershipCheck:!1}){var r,h,m,d,g,f,E,N;let a=[];for(const y of e)(n||((m=(h=(r=this.dataManager.inclusionModeDefinition)==null?void 0:r.namedTypeDefinitions)==null?void 0:h.get(y.typeName))==null?void 0:m.useAllData)===!1&&((E=(f=(g=(d=this.dataManager.inclusionModeDefinition)==null?void 0:d.namedTypeDefinitions)==null?void 0:g.get(y.typeName))==null?void 0:f.members)!=null&&E.has(y.id)))&&a.push(y);if(t){const y=new Set,w=[];for(const D of a)if(this.dataManager.nodeConnectionsLookup.has(D.id))for(const O of this.dataManager.nodeConnectionsLookup.get(D.id))y.add(O);for(const D of y)if(this.dataManager.memberIdTypeLookup.has(D))for(const O of this.dataManager.memberIdTypeLookup.get(D))this.dataManager.relationshipTypeNames.has(O)&&w.push({id:D,typeName:O});a=a.concat(w)}this.dataManager.removeFromLayer(a);for(const y of a)(N=this.sublayerIdsCache.get(y.typeName))==null||N.delete(y.id),this.dataManager.relationshipTypeNames.has(y.typeName)?this.relationshipLinkChartDiagramLookup.delete(y.id):this.entityLinkChartDiagramLookup.delete(y.id);i&&await this._calculateLayoutWithSublayerTimeInfo(this._currentLinkChartConfig.layoutMode,{layoutSettings:this._currentLinkChartConfig.layoutSettings}),a.length>0&&(this.membershipModified=!0);const s=[];return this.layers.forEach(y=>{s.push(y.refreshCachedQueryEngine())}),await Promise.all(s),this._refreshNamedTypes(),a}async expand(e,t){let i=[];try{const n=await this.dataManager.getConnectedRecordIds(e,t==null?void 0:t.relationshipTypeNames,t);i=n.filter(a=>{var s;return!((s=this.sublayerIdsCache.get(a.typeName))!=null&&s.has(a.id))}),await this._handleNewRecords(n,t),n.length>0&&(this.membershipModified=!0),K(t==null?void 0:t.signal)}catch(n){throw ye(n)&&i.length>0&&this.removeRecords(i,{overrideMembershipCheck:!0}),n}return{records:i}}loadLayerAssumingLocalCache(){var t,i;const e=[...this.memberRelationshipTypes,...this.memberEntityTypes];this.originIdOf("layers")===Y.DEFAULTS?this._createSublayers(e,this.layers,n=>!!n.geometryType):this._updateSublayers(e,this.layers),this.originIdOf("tables")===Y.DEFAULTS?this._createSublayers(e,this.tables,n=>!n.geometryType):this._updateSublayers(e,this.tables),(i=(t=this.dataManager.inclusionModeDefinition)==null?void 0:t.namedTypeDefinitions)==null||i.forEach((n,a)=>{var r;const s=q(this.sublayerIdsCache,a,()=>new Set);(r=n.members)==null||r.forEach(({id:h,linkChartLocation:m})=>{if(s.add(h),m){const d="coords"in m&&"lengths"in m?m:X(m);this.dataManager.relationshipTypeNames.has(a)?this.relationshipLinkChartDiagramLookup.set(h,d):this.entityLinkChartDiagramLookup.set(h,d)}})})}async calculateLinkChartLayout(e="organic-standard",t){var Le,we,Me,ke,Ce,Te,Ne;const i=[],n=[],a=[];this.dataManager.sublayerCaches.forEach((o,l)=>{this.dataManager.entityTypeNames.has(l)?o.forEach(c=>{i.push({typeName:l,feature:c})}):this.dataManager.relationshipTypeNames.has(l)&&o.forEach(c=>{n.push({typeName:l,feature:c})})}),this.entityLinkChartDiagramLookup=new Map,this.relationshipLinkChartDiagramLookup=new Map;const s=new Map,r=new Map,h=new Map,m=new Map,d=new Uint8Array(i.length),g=new Float64Array(i.length),f=new Float64Array(i.length),E=new Float64Array(i.length),N=new Float64Array(i.length),y=new Uint32Array(n.length),w=new Uint32Array(n.length),D=new Float64Array(n.length),O=new Float64Array(n.length),b=[],ae="organic-standard",z=new ve({xmin:-1e-7,ymin:-1e-7,xmax:1e-7,ymax:1e-7});let W,me="organic-standard",L=0,A=0;const Ee=Ke.apply;switch(me=e==="geographic-organic-standard"?ae:e,me){case"organic-standard":W=it.apply;break;case"organic-community":W=at.apply;break;case"hierarchical-bottom-to-top":W=tt.apply;break;case"radial-root-centric":W=et.apply;break;case"tree-left-to-right":W=Ze.apply;break;default:W=Xe.apply}let le=!1;i.forEach(({typeName:o,feature:l})=>{var c,S,j,k,R;if(e!=="chronological-mono-timeline"&&e!=="chronological-multi-timeline"&&((c=t==null?void 0:t.lockedNodeLocations)!=null&&c.has(l.attributes[I]))){e==="geographic-organic-standard"&&this.dataManager.geographicLookup.has(o)?d[L]=$.IsGeographic:d[L]=$.None;const u=t.lockedNodeLocations.get(l.attributes[I]);g[L]=u.x,f[L]=u.y}else if(e==="geographic-organic-standard"&&this.dataManager.geographicLookup.has(o)){d[L]=$.IsGeographic;let u=null;const C=l.attributes[this.dataManager.geographicLookup.get(o).name];switch((S=this.dataManager.geographicLookup.get(o))==null?void 0:S.geometryType){case"esriGeometryPoint":g[L]=C==null?void 0:C.x,f[L]=C==null?void 0:C.y;break;case"esriGeometryPolygon":u=C==null?void 0:C.centroid,(u==null?void 0:u.x)!=null&&(u==null?void 0:u.y)!=null?(g[L]=u.x,f[L]=u.y):d[L]=$.IsMovable;break;case"esriGeometryPolyline":case"esriGeometryMultipoint":u=(j=C==null?void 0:C.extent)==null?void 0:j.center,(u==null?void 0:u.x)!=null&&(u==null?void 0:u.y)!=null?(g[L]=u.x,f[L]=u.y):d[L]=$.IsMovable;break;default:d[L]=$.IsMovable}(g[L]==null||f[L]==null||Number.isNaN(g[L])||Number.isNaN(f[L]))&&(d[L]=$.IsMovable,g[L]=0,f[L]=0)}else if(e==="chronological-mono-timeline"||e==="chronological-multi-timeline"){!le&&((k=t==null?void 0:t.lockedNodeLocations)!=null&&k.has(l.attributes[I]))&&(le=!0);const u=(R=t==null?void 0:t.timeInfoByTypeName)==null?void 0:R.get(o),C=u==null?void 0:u.startField,P=C&&(u!=null&&u.startField)?l.attributes[C]:null;E[L]=P?new Date(P).getTime():NaN;const B=u==null?void 0:u.endField,U=B&&(u!=null&&u.endField)?l.attributes[B]:null;N[L]=U?new Date(U).getTime():NaN,g[L]=0,f[L]=0,d[L]=$.IsMovable}else d[L]=$.IsMovable,g[L]=0,f[L]=0;m.set(l.attributes[I],L),b[L]={feature:l,typeName:o},L++}),le&&G.getLogger(this).warn("Locked node locations are not supported for chronological layout at this time.  Requested node locations were ignored");let fe=!1;const he=new Map;n.forEach(o=>{var B;const l=o.feature.attributes[se],c=o.feature.attributes[re],S=m.get(l),j=m.get(c),k=(B=t==null?void 0:t.timeInfoByTypeName)==null?void 0:B.get(o.typeName),R=t!=null&&t.timeInfoByTypeName?k==null?void 0:k.startField:null,u=R?o.feature.attributes[R]:null,C=k==null?void 0:k.endField,P=C?o.feature.attributes[C]:null;if(S!==void 0&&j!==void 0){let U=l+"-"+c;e!=="chronological-mono-timeline"&&e!=="chronological-multi-timeline"||(U=U+"-"+u+"-"+P);const H=he.get(U);(H==null?void 0:H.has(o.typeName))||(y[A]=S,w[A]=j,e!=="chronological-mono-timeline"&&e!=="chronological-multi-timeline"||(D[A]=u?new Date(u).getTime():NaN,O[A]=P?new Date(P).getTime():NaN),H===void 0?he.set(U,new Map([[o.typeName,A]])):H.set(o.typeName,A),A++),a.push(o)}else fe=!0,this.relationshipLinkChartDiagramLookup.set(l,null)}),fe&&G.getLogger(this).warn("A relationship is a member of this layer that has either origin or destination entity nodes that are not members. The diagram geometry will be set to null");const _e=this._validateOrganicLayoutSettings(e,(Le=t==null?void 0:t.layoutSettings)==null?void 0:Le.organicLayoutSettings),de=this._convertValidatedOrganicSettingsToCalculationSettings(_e);await nt();let J=oe.Error,_=null;if(e==="chronological-mono-timeline"||e==="chronological-multi-timeline"){let o;({status:J,links:_,graphics:o}=Ee(()=>{var l;return((l=t==null?void 0:t.signal)==null?void 0:l.aborted)??!1},d,g,f,E,N,y.subarray(0,A),w.subarray(0,A),D.subarray(0,A),O.subarray(0,A),e==="chronological-multi-timeline",(we=t==null?void 0:t.layoutSettings)==null?void 0:we.chronologicalLayoutSettings)),J===oe.Success&&(this.chronologicalAuxiliaryGraphics=o)}else({status:J,links:_}=W(()=>{var o;return((o=t==null?void 0:t.signal)==null?void 0:o.aborted)??!1},d,g,f,y.subarray(0,A),w.subarray(0,A),de.computationBudgetTime,de.idealEdgeLengthMultiplier,de.repulsionRadiusMultiplier));if(K(t==null?void 0:t.signal),J===oe.Error)throw new ne("knowledge-graph:layout-failed","Attempting to arrange the records in the specified layout failed");if(J===oe.Canceled)throw Ue();for(let o=0;o<b.length;o++){if(f[o]>84.9999?f[o]=84.9999:f[o]<-84.9999&&(f[o]=-84.9999),g[o]>179.9999?g[o]=179.9999:g[o]<-179.9999&&(g[o]=-179.9999),b[o].feature.attributes[x]=new ge(g[o],f[o]),s.has(b[o].typeName)){const S=s.get(b[o].typeName);S==null||S.set(b[o].feature.attributes[I],b[o].feature)}else{const S=new Map;S.set(b[o].feature.attributes[I],b[o].feature),s.set(b[o].typeName,S)}h.set(b[o].feature.attributes[I],b[o].feature);const l=X(b[o].feature.attributes[x]);this.entityLinkChartDiagramLookup.set(b[o].feature.attributes[I],b[o].feature.attributes[x]?l:null);const c=q(this.dataManager.inclusionModeDefinition.namedTypeDefinitions,b[o].typeName,()=>({useAllData:!1,members:new Map}));q(c.members,b[o].feature.attributes[I],()=>({id:b[o].feature.attributes[I],linkChartLocation:void 0})).linkChartLocation=b[o].feature.attributes[x],b[o].feature.attributes[x].x<z.xmin&&(z.xmin=b[o].feature.attributes[x].x),b[o].feature.attributes[x].x>z.xmax&&(z.xmax=b[o].feature.attributes[x].x),b[o].feature.attributes[x].y<z.ymin&&(z.ymin=b[o].feature.attributes[x].y),b[o].feature.attributes[x].y>z.ymax&&(z.ymax=b[o].feature.attributes[x].y)}if(this.linkChartExtent.xmin=z.xmin,this.linkChartExtent.xmax=z.xmax,this.linkChartExtent.ymin=z.ymin,this.linkChartExtent.ymax=z.ymax,!_)throw new ne("knowledge-graph:layout-failed","Attempting to retrieve link geometry from diagram engine failed");const ie=new Map,ue=new Map,pe=new Map,be=new Set;for(let o=0;o<a.length;o++){const l=[],c=a[o],S=c.feature.attributes[se],j=c.feature.attributes[re];let k=S+"-"+j;if(e==="chronological-mono-timeline"||e==="chronological-multi-timeline"){const p=(Me=t==null?void 0:t.timeInfoByTypeName)==null?void 0:Me.get(c.typeName),F=t!=null&&t.timeInfoByTypeName?p==null?void 0:p.startField:null,Q=F?c.feature.attributes[F]:null,V=p==null?void 0:p.endField;k+="-"+Q+"-"+(V?c.feature.attributes[V]:null)}const R=he.get(k).get(c.typeName),u=R===0?0:_==null?void 0:_.vertexEndIndex[R-1];if(!be.has(R)){if(be.add(R),_.types[R]===Ie.Recursive){const p=[_.vertices[2*u],_.vertices[2*u+1]],F=[_.vertices[2*(u+1)],_.vertices[2*(u+1)+1]],Q=[.5*(p[0]+F[0]),.5*(p[1]+F[1])],V=[Q[0]-p[0],Q[1]-p[1]],Ae=[Q[0]+V[1],Q[1]-V[0]],Re=[Q[0]-V[1],Q[1]+V[0]];l.push(p),l.push(Ae),l.push(F),l.push(Re),l.push(p)}else{if(_.types[R]!==Ie.Regular){G.getLogger(this).warn("A relationship generated an unsupported link geometry type.  It will not be rendered");continue}for(let p=u;p<_.vertexEndIndex[R];p++)l.push([_.vertices[2*p],_.vertices[2*p+1]])}if(e!=="chronological-mono-timeline"&&e!=="chronological-multi-timeline"){const p=(ke=b[m.get(S)])==null?void 0:ke.feature.attributes[x],F=(Ce=b[m.get(j)])==null?void 0:Ce.feature.attributes[x];l[0][0]===p.x&&l[0][1]===p.y||(l[0]=[p.x,p.y]),l[l.length-1][0]===F.x&&l[l.length-1][1]===F.y||(l[l.length-1]=[F.x,F.y])}for(let p=1;p<l.length-1;p++)l[p][1]>85.5?l[p][1]=85.5:l[p][1]<-85.5&&(l[p][1]=-85.5),l[p][0]>179.9999?l[p][0]=179.9999:l[p][0]<-179.9999&&(l[p][0]=-179.9999);ie.has(k)?ie.get(k).push(l):ie.set(k,[l])}const C=ie.get(k);ue.has(k)||(ue.set(k,new Map),pe.set(k,new Map));const P=ue.get(k),B=pe.get(k);P.has(c.typeName)||(P.set(c.typeName,C.shift()),B.set(c.typeName,0));const U=P.get(c.typeName);B.set(c.typeName,B.get(c.typeName)+1);const H=new De({paths:[U]});if(c.feature.attributes[x]=H,r.has(c.typeName)){const p=r.get(c.typeName);p==null||p.set(c.feature.attributes[I],c.feature)}else{const p=new Map;p.set(c.feature.attributes[I],c.feature),r.set(c.typeName,p)}h.set(c.feature.attributes[I],c.feature);const ce=X(c.feature.attributes[x]);this.relationshipLinkChartDiagramLookup.set(c.feature.attributes[I],c.feature.attributes[x]?ce:null);const Se=q(this.dataManager.inclusionModeDefinition.namedTypeDefinitions,c.typeName,()=>({useAllData:!1,members:new Map}));q(Se.members,c.feature.attributes[I],()=>({id:c.feature.attributes[I],linkChartLocation:void 0})).linkChartLocation=ce}for(const o of a)o.feature.attributes[ot]=((Te=pe.get(o.feature.attributes[se]+"-"+o.feature.attributes[re]))==null?void 0:Te.get(o.typeName))??null;return this._currentLinkChartConfig={layoutMode:e,layoutSettings:(Ne=t==null?void 0:t.layoutSettings)==null?void 0:Ne.clone()},{nodes:s,links:r,idMap:h}}async applyNewLinkChartLayout(e="organic-standard",t){const i=[];await this._calculateLayoutWithSublayerTimeInfo(e,t),this.layers.forEach(n=>{i.push(n.refreshCachedQueryEngine())}),this.membershipModified=!0,await Promise.all(i),this._refreshNamedTypes()}getCurrentNodeLocations(){var t,i;const e=new Map;for(const[n,a]of((t=this.dataManager.inclusionModeDefinition)==null?void 0:t.namedTypeDefinitions.entries())??[])this.dataManager.relationshipTypeNames.has(n)||((i=a==null?void 0:a.members)==null||i.forEach(s=>{const r=s.linkChartLocation;let h;const m=s.id;r&&(h="x"in r?{x:r.x,y:r.y}:{x:r.coords[0],y:r.coords[1]},e.set(m,new ge({x:h.x,y:h.y})))}));return e}async refreshLinkChartCache(e){await this.dataManager.refreshCacheContent(e);const t=[];this.layers.forEach(i=>{t.push(i.refreshCachedQueryEngine())}),await Promise.all(t),this._refreshNamedTypes()}async connectBetweenEntities(e,t){if(!e.length)return{records:[]};let i=[];try{let n=[];for(const a of this.dataManager.relationshipTypeNames){const s=this.sublayerIdsCache.get(a);s&&(n=n.concat(Array.from(s.keys())))}i=await this.dataManager.getRelationshipsBetweenNodes(e,n,t),await this._handleNewRecords(i,t),K(t)}catch(n){throw ye(n)&&this.removeRecords(i),n}return{records:i}}async connectFromEntities(e,t){if(!e.length)return{records:[]};let i=[];try{let n=[];for(const s of this.dataManager.relationshipTypeNames){const r=this.sublayerIdsCache.get(s);r&&(n=n.concat(Array.from(r.keys())))}let a=[];for(const s of this.dataManager.entityTypeNames){const r=this.sublayerIdsCache.get(s);r&&(a=a.concat(Array.from(r)))}i=await this.dataManager.getRelationshipsFromNodes(e,a,n,t),await this._handleNewRecords(i,t),i.length>0&&(this.membershipModified=!0),K(t)}catch(n){throw ye(n)&&this.removeRecords(i),n}return{records:i}}getCurrentLayout(){return this._currentLinkChartConfig.layoutMode}async _calculateLayoutWithSublayerTimeInfo(e="organic-standard",t){var n;const i=new Map;this.layers.forEach(a=>{i.set(a.objectType.name,a.timeInfo)}),await this.calculateLinkChartLayout(e,{timeInfoByTypeName:i,...t}),(n=this.linkChart)==null||n.handleChronologicalOverlay()}async _handleNewRecords(e,t){const i=[];this.dataManager.addToLayer(e);for(const a of e)this.sublayerIdsCache.has(a.typeName)||(this.sublayerIdsCache.set(a.typeName,new Set),i.push(a.typeName)),this.sublayerIdsCache.get(a.typeName).add(a.id);for(const a of i){const s=this._graphTypeLookup.get(a);if(s){const r=this._createSublayer(s);s.type==="entity"?this.dataManager.entityTypeNames.add(a):this.dataManager.relationshipTypeNames.add(a),r.geometryType?this.layers.push(r):this.tables.push(r),this.dataManager.sublayerCaches.set(a,new Map)}}await xe(this,i,t),await this.dataManager.refreshCacheContent(e.map(a=>a.id),void 0,void 0,void 0,t);const n={layoutSettings:this._currentLinkChartConfig.layoutSettings,lockedNodeLocations:new Map};for(const[a,s]of this.entityLinkChartDiagramLookup.entries())s&&n.lockedNodeLocations.set(a,new ge(s.coords[0],s.coords[1]));await this.applyNewLinkChartLayout(this._currentLinkChartConfig.layoutMode,n)}_createSublayers(e,t,i){e.forEach(n=>{const a=this._createSublayer(n);i(a)&&t.push(a),this._updateSublayerCaches(n)})}_updateSublayers(e,t){t.forEach(i=>{i.parentCompositeLayer=this;const n=e.find(a=>a.type===i.graphType&&a.name===i.graphTypeName);n&&(i.objectType=n,i.read({title:n.name},{origin:"service"}),this._updateSublayerCaches(n))})}_updateSublayerCaches(e){const t=this.dataManager.sublayerCaches;t.has(e.name)||t.set(e.name,new Map)}_layersLoadedFromAuthoritativeItem(){const e=this.originIdOf("layers");return e>=Y.PORTAL_ITEM&&e<Y.USER}async _initializeDiagram(){var e,t;this.initializationLinkChartConfig?this.initializationLinkChartConfig.doNotRecalculateLayout?((t=(e=this.dataManager.inclusionModeDefinition)==null?void 0:e.namedTypeDefinitions)==null||t.forEach((i,n)=>{var a;(a=i==null?void 0:i.members)==null||a.forEach(s=>{const r=s.linkChartLocation;let h;const m=s.id;if(!r)return;h="x"in r?{x:r.x,y:r.y}:{x:r.coords[0],y:r.coords[1]};const d=X(h);this.dataManager.relationshipTypeNames.has(n)?this.relationshipLinkChartDiagramLookup.set(m,d):this.entityLinkChartDiagramLookup.set(m,d),this.linkChartExtent.xmin>h.x&&(this.linkChartExtent.xmin=h.x),this.linkChartExtent.xmax<h.x&&(this.linkChartExtent.xmax=h.x),this.linkChartExtent.ymin>h.y&&(this.linkChartExtent.ymin=h.y),this.linkChartExtent.ymax<h.y&&(this.linkChartExtent.ymax=h.y)})}),this.memberRelationshipTypes.forEach(i=>{var n;i.name&&((n=this.dataManager.sublayerCaches.get(i.name))==null||n.forEach(a=>{const s=this.relationshipLinkChartDiagramLookup.get(a.attributes[se]),r=this.relationshipLinkChartDiagramLookup.get(a.attributes[re]);if(s&&r){const h=X(new De({paths:[[[s.coords[0],s.coords[1]],[r.coords[0],r.coords[1]]]]}));this.relationshipLinkChartDiagramLookup.set(a.attributes[I],h)}else this.relationshipLinkChartDiagramLookup.set(a.attributes[I],null)}))})):await this._calculateLayoutWithSublayerTimeInfo(this.initializationLinkChartConfig.layoutMode,{lockedNodeLocations:this.getCurrentNodeLocations(),...this.initializationLinkChartConfig||{}}):await this._calculateLayoutWithSublayerTimeInfo("organic-standard",{lockedNodeLocations:this.getCurrentNodeLocations()})}_refreshNamedTypes(){for(const e of this.layers)e.emit("refresh",{dataChanged:!0});for(const e of this.tables)e.emit("refresh",{dataChanged:!0})}_validateOrganicLayoutSettings(e,t){const i=y=>typeof y=="number"&&!isNaN(y),n=y=>i(y)&&y>=1,a=y=>i(y)&&y>=1,s=y=>Object.values(te).includes(y),r=y=>i(y)&&y>=0,h={};if(!new Set(["organic-standard","organic-community","geographic-organic-standard","chronological-multi-timeline","chronological-mono-timeline"]).has(e)||!t)return h;const{computationBudgetTime:m,autoRepulsionRadius:d,repulsionRadiusMultiplier:g,absoluteIdealEdgeLength:f,multiplicativeIdealEdgeLength:E,idealEdgeLengthType:N}=t;return a(m)?h.computationBudgetTime=m:m&&G.getLogger(this).warn("Invalid layout computationBudgetTime setting, will revert to default setting"),h.autoRepulsionRadius=d,!d&&n(g)?h.repulsionRadiusMultiplier=g:d||(h.autoRepulsionRadius=!0,G.getLogger(this).warn("Invalid layout repulsionRadiusMultiplier setting, will revert to default setting")),e==="geographic-organic-standard"&&(s(N)?h.idealEdgeLengthType=N:N!==void 0&&G.getLogger(this).warn('Invalid layout idealEdgeLengthType setting, will revert to "multiplier" setting'),N==="absolute-value"&&r(f)?h.absoluteIdealEdgeLength=f:N==="absolute-value"&&f!==void 0?G.getLogger(this).warn("Invalid layout idealEdgeLength setting, will revert to default setting"):N==="multiplier"&&r(E)?h.multiplicativeIdealEdgeLength=E:N==="multiplier"&&E!==void 0&&G.getLogger(this).warn("Invalid layout idealEdgeLength setting, will revert to default setting")),h}_convertValidatedOrganicSettingsToCalculationSettings(e){let t=e.idealEdgeLengthType===te.ABSOLUTE?e.absoluteIdealEdgeLength:e.multiplicativeIdealEdgeLength;return e.idealEdgeLengthType===te.ABSOLUTE&&(t===void 0?t=-1:t*=-1),{computationBudgetTime:e.computationBudgetTime??void 0,repulsionRadiusMultiplier:e.repulsionRadiusMultiplier&&!e.autoRepulsionRadius?e.repulsionRadiusMultiplier:void 0,idealEdgeLengthMultiplier:t}}_createSublayer(e){return new ee({objectType:e,parentCompositeLayer:this,graphType:e.type})}_handleSublayersChange(e,t){t&&(t.forEach(i=>{i.parent=null}),this.removeHandles("sublayers-owner")),e&&(e.forEach(i=>{i.parent=this}),this.addHandles([e.on("after-add",({item:i})=>{i.parent=this}),e.on("after-remove",({item:i})=>{i.parent=null})],"sublayers-owner"))}_alignLayersDataModelAndInclusionDefinition(e){var a;const t=new Set((e.entityTypes??[]).map(s=>s.name).concat((e.relationshipTypes??[]).map(s=>s.name))),i=new Set((e.entityTypes??[]).map(s=>s.name)),n=new Set((e.relationshipTypes??[]).map(s=>s.name));if(this.layers){for(const r of this.layers)!r.graphType&&t.has(r.graphTypeName)&&(r.graphType=i.has(r.graphTypeName)?"entity":"relationship");const s=this.layers.filter(r=>t.has(r.graphTypeName)&&(r.graphType==="entity"?i.has(r.graphTypeName):n.has(r.graphTypeName)));this.setAtOrigin("layers",s,$e(this.originIdOf("layers")))}else this.layers=new Z;if(this.layers&&this._originalInclusionList){const s=new Set(this._originalInclusionList.namedTypeDefinitions.keys()),r=((a=this.tables)==null?void 0:a.map(d=>d.graphTypeName))??[],h=this.layers.map(d=>d.graphTypeName).concat(r);for(const d of h)s.has(d)||this._originalInclusionList.namedTypeDefinitions.set(d,{useAllData:!1,members:new Map});const m=[];for(const d of this._originalInclusionList.namedTypeDefinitions.keys())h.includes(d)||(G.getLogger(this).warn(`A named type, ${d}, was in the serialized feature collection but did not have a sublayer config in the item, so will be removed`),m.push(d));for(const d of m)this._originalInclusionList.namedTypeDefinitions.delete(d)}}};T([v(Qe)],M.prototype,"url",void 0),T([v()],M.prototype,"dataPreloadedInLocalCache",void 0),T([v()],M.prototype,"initializationLinkChartConfig",void 0),T([v()],M.prototype,"membershipModified",void 0),T([v()],M.prototype,"dataManager",void 0),T([v()],M.prototype,"initializationInclusionModeDefinition",null),T([v()],M.prototype,"knowledgeGraph",void 0),T([v({type:Z.ofType(ee),json:{write:{ignoreOrigin:!0}}})],M.prototype,"layers",void 0),T([v({readOnly:!0})],M.prototype,"linkChart",null),T([v()],M.prototype,"entityLinkChartDiagramLookup",void 0),T([v()],M.prototype,"relationshipLinkChartDiagramLookup",void 0),T([v()],M.prototype,"linkChartExtent",void 0),T([v()],M.prototype,"memberEntityTypes",void 0),T([v()],M.prototype,"memberRelationshipTypes",void 0),T([v({type:["LinkChartLayer"]})],M.prototype,"operationalLayerType",void 0),T([v()],M.prototype,"sublayerIdsCache",void 0),T([v({type:Z.ofType(ee),json:{write:{ignoreOrigin:!0}}})],M.prototype,"tables",void 0),T([v({json:{read:!1}})],M.prototype,"type",void 0),T([v({json:{read:!1}})],M.prototype,"chronologicalAuxiliaryGraphics",void 0),M=T([We("esri.layers.LinkChartLayer")],M);const Ut=M;export{Ut as default};
