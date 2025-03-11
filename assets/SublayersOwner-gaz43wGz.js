const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CodeBlock-DBIw63CI.js","assets/index-BYYG-xAB.js","assets/index-CSP37mtf.css","assets/CodeBlock-CnI_Xe9l.css"])))=>i.map(i=>d[i]);
import{i as a,k as n,b7 as I,bm as Z,bn as ie,hp as se,a1 as Y,o as B,js as ae,jt as U,aa as J,cw as y,au as H,a9 as M,af as K,cz as le,bi as oe,b3 as ne,h1 as ue,ae as b,aC as ye,ju as pe,dG as de,jv as ce,aA as he,hg as fe,fL as be,n as x,jw as $,eb as me,aI as k,dS as ge,hz as A,hi as Se,aD as Ie,p as T,j1 as we,jx as ve,dl as Ee,jy as Le,e0 as N,dv as xe,jz as Oe,dj as q,hn as Fe,cA as L,jA as Te,iX as _e,ct as De,jB as Pe,hq as Ae,hr as je,jC as W,e2 as z,q as qe,hM as Ce,c4 as O,fo as Re,cu as G,cv as X,cx as Ve}from"./CodeBlock-DBIw63CI.js";import{_ as Me}from"./index-BYYG-xAB.js";import{F as $e}from"./QueryTask-BI0ZlqSc.js";import{o as Ne}from"./sublayerUtils-D8U0wlxd.js";const We=r=>{let t=class extends r{constructor(){super(...arguments),this.capabilities=void 0,this.copyright=null,this.fullExtent=null,this.legendEnabled=!0,this.spatialReference=null,this.version=void 0,this._allLayersAndTablesMap=null}readCapabilities(e,i){const s=i.capabilities&&i.capabilities.split(",").map(re=>re.toLowerCase().trim());if(!s)return{operations:{supportsExportMap:!1,supportsExportTiles:!1,supportsIdentify:!1,supportsQuery:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};const l=this.type,u=l!=="tile"&&!!i.supportsDynamicLayers,p=s.includes("query"),d=s.includes("map"),f=!!i.exportTilesAllowed,m=s.includes("tilemap"),c=s.includes("data"),g=l!=="tile"&&(!i.tileInfo||u),S=l!=="tile"&&(!i.tileInfo||u),h=l!=="tile",w=l!=="tile"&&u&&i.currentVersion>=11.1,v=i.cimVersion?ae.parse(i.cimVersion):null,F=(v==null?void 0:v.greaterEqual(1,4))??!1,te=(v==null?void 0:v.greaterEqual(2,0))??!1;return{operations:{supportsExportMap:d,supportsExportTiles:f,supportsIdentify:p,supportsQuery:c,supportsTileMap:m},exportMap:d?{supportsArcadeExpressionForLabeling:F,supportsCIMSymbols:te,supportsDynamicLayers:u,supportsSublayerOrderBy:w,supportsSublayerDefinitionExpression:S,supportsSublayerVisibility:g,supportsSublayersChanges:h}:null,exportTiles:f?{maxExportTilesCount:+i.maxExportTilesCount}:null}}readVersion(e,i){let s=i.currentVersion;return s||(s=i.hasOwnProperty("capabilities")||i.hasOwnProperty("tables")?10:i.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),s}async fetchRelatedService(e){const i=this.portalItem;if(!i||!U(i))return null;this._relatedFeatureServicePromise||(this._relatedFeatureServicePromise=i.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},e).then(l=>l.find(u=>u.type==="Feature Service")??null,()=>null));const s=await this._relatedFeatureServicePromise;return J(e),s?{itemId:s.id,url:s.url}:null}async fetchSublayerInfo(e,i){var p;const{source:s}=e;if(this!=null&&this.portalItem&&this.type==="tile"&&(s==null?void 0:s.type)==="map-layer"&&U(this.portalItem)&&e.originIdOf("url")<y.SERVICE){const d=await this.fetchRelatedService(i);d&&(e.url=H(d.url,s.mapLayerId.toString()),e.layerItemId=d.itemId)}const{url:l}=e;let u;if(s.type==="data-layer")u=(await M(l,{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey},...i})).data;else if(l&&e.originIdOf("url")>y.SERVICE)try{const d=await this._fetchAllLayersAndTablesFromService(l),f=((p=K(l))==null?void 0:p.sublayer)??s.mapLayerId;u=d.get(f)}catch{}else{let d=e.id;(s==null?void 0:s.type)==="map-layer"&&(d=s.mapLayerId);try{u=(await this.fetchAllLayersAndTables(i)).get(d)}catch{}}return u}async fetchAllLayersAndTables(e){var i;return this._fetchAllLayersAndTablesFromService((i=this.parsedUrl)==null?void 0:i.path,e)}async _fetchAllLayersAndTablesFromService(e,i){await this.load(i),this._allLayersAndTablesMap||(this._allLayersAndTablesMap=new Map);const s=K(e),l=le(this._allLayersAndTablesMap,s==null?void 0:s.url.path,()=>M(H(s==null?void 0:s.url.path,"/layers"),{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey}}).then(p=>{const d=new Map,{layers:f,tables:m}=p.data,c=[...f??[],...m??[]];for(const g of c)d.set(g.id,g);return{result:d}},p=>({error:p}))),u=await l;if(J(i),"result"in u)return u.result;throw u.error}};return a([n({readOnly:!0})],t.prototype,"capabilities",void 0),a([I("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],t.prototype,"readCapabilities",null),a([n({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),a([n({type:Z})],t.prototype,"fullExtent",void 0),a([n(ie)],t.prototype,"id",void 0),a([n({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],t.prototype,"legendEnabled",void 0),a([n(se)],t.prototype,"popupEnabled",void 0),a([n({type:Y})],t.prototype,"spatialReference",void 0),a([n({readOnly:!0})],t.prototype,"version",void 0),a([I("service","version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],t.prototype,"readVersion",null),t=a([B("esri.layers.mixins.ArcGISMapService")],t),t};var j;function C(r){return(r==null?void 0:r.type)==="esriSMS"}function R(r,t,e){var s;const i=this.originIdOf(t)>=O(e.origin);return{ignoreOrigin:!0,allowNull:i,enabled:!!e&&((s=e.layer)==null?void 0:s.type)==="map-image"&&(e.writeSublayerStructure||i)}}function V(r,t,e){var i;return{enabled:!!e&&((i=e.layer)==null?void 0:i.type)==="tile"&&(e.origin&&this.originIdOf(t)>=O(e.origin)||this._isOverridden(t))}}function E(r,t,e){return{ignoreOrigin:!0,enabled:e&&e.writeSublayerStructure||!1}}function _(r,t,e){return{ignoreOrigin:!0,enabled:!!(e!=null&&e.writeSublayerStructure)&&this.originIdOf(t)>y.SERVICE}}function D(r,t,e){return{ignoreOrigin:!0,enabled:!!e&&(e.writeSublayerStructure||this.originIdOf(t)>=O(e.origin))}}let Be=0;const ke=new Set(["layer","parent","loaded","loadStatus","loadError","loadWarnings"]);let o=j=class extends oe(ne.IdentifiableMixin(ue)){constructor(r){super(r),this.capabilities=void 0,this.maxScaleRange={minScale:0,maxScale:0},this.fields=null,this.fullExtent=null,this.geometryType=null,this.globalIdField=null,this.isTable=!1,this.legendEnabled=!0,this.objectIdField=null,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.relationships=null,this.sourceJSON=null,this.spatialReference=null,this.title=null,this.typeIdField=null,this.type="sublayer",this.types=null,this._lastParsedUrl=null}async load(r){return this.addResolvingPromise((async()=>{const{layer:t,url:e}=this;if(!t&&!e)throw new b("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:this});const i=t?await t.fetchSublayerInfo(this,r):(await M(e,{responseType:"json",query:{f:"json"},...r})).data;i&&(this.sourceJSON=i,this.read({layerDefinition:i},{origin:"service",layer:t,url:ye(e)}))})()),this}readCapabilities(r,t){t=t.layerDefinition||t;const{attachment:e,operations:{supportsQuery:i,supportsQueryAttachments:s},query:{supportsFormatPBF:l,supportsOrderBy:u,supportsPagination:p},data:{supportsAttachment:d},queryRelated:f}=pe(t,this.url);return{attachment:{supportsOrderByFields:(e==null?void 0:e.supportsOrderByFields)??!1,supportsResize:(e==null?void 0:e.supportsResize)??!1},exportMap:{supportsModification:!!t.canModifyLayer},operations:{supportsQuery:i,supportsQueryAttachments:s},data:{supportsAttachment:d},query:{supportsFormatPBF:l,supportsOrderBy:u,supportsPagination:p},queryRelated:f}}get defaultPopupTemplate(){return this.createPopupTemplate()}set definitionExpression(r){this._setAndNotifyLayer("definitionExpression",r)}get effectiveScaleRange(){const{minScale:r,maxScale:t}=this;return{minScale:r,maxScale:t}}readMaxScaleRange(r,t){return{minScale:(t=t.layerDefinition||t).minScale??0,maxScale:t.maxScale??0}}get fieldsIndex(){return new de(this.fields||[])}set floorInfo(r){this._setAndNotifyLayer("floorInfo",r)}readGlobalIdFieldFromService(r,t){if((t=t.layerDefinition||t).globalIdField)return t.globalIdField;if(t.fields){for(const e of t.fields)if(e.type==="esriFieldTypeGlobalID")return e.name}}get id(){return this._get("id")??Be++}set id(r){var t,e,i;this._get("id")!==r&&(((i=(e=(t=this.layer)==null?void 0:t.capabilities)==null?void 0:e.exportMap)==null?void 0:i.supportsDynamicLayers)!==!1?this._set("id",r):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"))}readIsTable(r,t){return t.type==="Table"}set labelingInfo(r){this._setAndNotifyLayer("labelingInfo",r)}writeLabelingInfo(r,t,e,i){r&&r.length&&(t.layerDefinition={drawingInfo:{labelingInfo:r.map(s=>s.write({},i))}})}set labelsVisible(r){this._setAndNotifyLayer("labelsVisible",r)}set layer(r){var t;this._set("layer",r),(t=this.sublayers)==null||t.forEach(e=>e.layer=r)}set listMode(r){this._set("listMode",r)}set minScale(r){this._setAndNotifyLayer("minScale",r)}readMinScale(r,t){var e;return t.minScale||((e=t.layerDefinition)==null?void 0:e.minScale)||0}set maxScale(r){this._setAndNotifyLayer("maxScale",r)}readMaxScale(r,t){var e;return t.maxScale||((e=t.layerDefinition)==null?void 0:e.maxScale)||0}readObjectIdFieldFromService(r,t){var i;if((t=t.layerDefinition||t).objectIdField)return t.objectIdField;const e=(i=t.fields)==null?void 0:i.find(s=>s.type==="esriFieldTypeOID");return e==null?void 0:e.name}set opacity(r){this._setAndNotifyLayer("opacity",r)}readOpacity(r,t){var i;const{layerDefinition:e}=t;return 1-.01*((e==null?void 0:e.transparency)??((i=e==null?void 0:e.drawingInfo)==null?void 0:i.transparency)??0)}writeOpacity(r,t,e,i){t.layerDefinition={drawingInfo:{transparency:100-100*r}}}set orderBy(r){this._setAndNotifyLayer("orderBy",r)}writeParent(r,t){this.parent&&this.parent!==this.layer?t.parentLayerId=ce(this.parent.id):t.parentLayerId=-1}get queryTask(){var p;if(!this.layer)return null;const{capabilities:r,fieldsIndex:t,layer:e,url:i}=this,{spatialReference:s}=e,l="gdbVersion"in e?e.gdbVersion:void 0,u=he("featurelayer-pbf")&&(r==null?void 0:r.query.supportsFormatPBF);return new $e({fieldsIndex:t,gdbVersion:l,pbfSupported:u,queryAttachmentsSupported:((p=r==null?void 0:r.operations)==null?void 0:p.supportsQueryAttachments)??!1,sourceSpatialReference:s,url:i})}set renderer(r){if(fe(r,this.fieldsIndex),r){for(const t of r.symbols)if(be(t)){x.getLogger(this).warn("Sublayer renderer should use 2D symbols");break}}this._setAndNotifyLayer("renderer",r)}get source(){return this._get("source")||new $({mapLayerId:this.id})}set source(r){this._setAndNotifyLayer("source",r)}set sublayers(r){this._handleSublayersChange(r,this._get("sublayers")),this._set("sublayers",r)}castSublayers(r){return me(k.ofType(j),r)}writeSublayers(r,t,e){var i;(i=this.sublayers)!=null&&i.length&&(t[e]=this.sublayers.map(s=>s.id).toArray().reverse())}readTitle(r,t){var e;return((e=t.layerDefinition)==null?void 0:e.name)??t.name}readTypeIdField(r,t){let e=(t=t.layerDefinition||t).typeIdField;if(e&&t.fields){e=e.toLowerCase();const i=t.fields.find(s=>s.name.toLowerCase()===e);i&&(e=i.name)}return e}get url(){var i;const r=((i=this.layer)==null?void 0:i.parsedUrl)??this._lastParsedUrl,t=this.source;if(!r)return null;if(this._lastParsedUrl=r,(t==null?void 0:t.type)==="map-layer")return`${r.path}/${t.mapLayerId}`;const e={layer:JSON.stringify({source:this.source})};return`${r.path}/dynamicLayer?${ge(e)}`}set url(r){this._overrideIfSome("url",r)}set visible(r){this._setAndNotifyLayer("visible",r)}writeVisible(r,t,e,i){t[e]=this.getAtOrigin("defaultVisibility","service")||r}clone(){const{store:r}=A(this),t=new j;return A(t).store=r.clone(ke),this.commitProperty("url"),t._lastParsedUrl=this._lastParsedUrl,t}createPopupTemplate(r){return Se(this,r)}createQuery(){return new Ie({returnGeometry:!0,where:this.definitionExpression||"1=1"})}async createFeatureLayer(){var s;if(this.hasOwnProperty("sublayers"))return null;const r=(await Me(async()=>{const{default:l}=await import("./CodeBlock-DBIw63CI.js").then(u=>u.uq);return{default:l}},__vite__mapDeps([0,1,2,3]))).default,{layer:t,url:e}=this;let i;if(e&&this.originIdOf("url")>y.SERVICE)i=new r({url:e});else{if(!(t!=null&&t.parsedUrl))throw new b("createFeatureLayer:missing-information","Cannot create a FeatureLayer without a url or a parent layer");{const l=t.parsedUrl;i=new r({url:l.path}),l&&this.source&&(this.source.type==="map-layer"?i.layerId=this.source.mapLayerId:i.dynamicDataSource=this.source)}}return(t==null?void 0:t.refreshInterval)!=null&&(i.refreshInterval=t.refreshInterval),this.definitionExpression&&(i.definitionExpression=this.definitionExpression),this.floorInfo&&(i.floorInfo=T(this.floorInfo)),this.originIdOf("labelingInfo")>y.SERVICE&&(i.labelingInfo=T(this.labelingInfo)),this.originIdOf("labelsVisible")>y.DEFAULTS&&(i.labelsVisible=this.labelsVisible),this.originIdOf("legendEnabled")>y.DEFAULTS&&(i.legendEnabled=this.legendEnabled),this.originIdOf("visible")>y.DEFAULTS&&(i.visible=this.visible),this.originIdOf("minScale")>y.DEFAULTS&&(i.minScale=this.minScale),this.originIdOf("maxScale")>y.DEFAULTS&&(i.maxScale=this.maxScale),this.originIdOf("opacity")>y.DEFAULTS&&(i.opacity=this.opacity),this.originIdOf("popupTemplate")>y.DEFAULTS&&(i.popupTemplate=T(this.popupTemplate)),this.originIdOf("renderer")>y.SERVICE&&(i.renderer=T(this.renderer)),((s=this.source)==null?void 0:s.type)==="data-layer"&&(i.dynamicDataSource=this.source.clone()),this.originIdOf("title")>y.DEFAULTS&&(i.title=this.title),(t==null?void 0:t.type)==="map-image"&&t.originIdOf("customParameters")>y.DEFAULTS&&(i.customParameters=t.customParameters),(t==null?void 0:t.type)==="tile"&&t.originIdOf("customParameters")>y.DEFAULTS&&(i.customParameters=t.customParameters),i}getField(r){return this.fieldsIndex.get(r)}getFeatureType(r){return we(this.types,this.typeIdField,r)}getFieldDomain(r,t){const e=t==null?void 0:t.feature,i=this.getFeatureType(e);if(i){const s=i.domains&&i.domains[r];if(s&&s.type!=="inherited")return s}return this._getLayerDomain(r)}async queryAttachments(r,t){var m,c,g,S;await this.load(),r=ve.from(r);const e=this.capabilities;if(!((m=e==null?void 0:e.data)!=null&&m.supportsAttachment))throw new b("queryAttachments:not-supported","this layer doesn't support attachments");const{attachmentTypes:i,objectIds:s,globalIds:l,num:u,size:p,start:d,where:f}=r;if(!((c=e==null?void 0:e.operations)!=null&&c.supportsQueryAttachments)&&((i==null?void 0:i.length)>0||(l==null?void 0:l.length)>0||(p==null?void 0:p.length)>0||u||d||f))throw new b("queryAttachments:option-not-supported","when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported",r);if(!(s!=null&&s.length||l!=null&&l.length||f))throw new b("queryAttachments:invalid-query","'objectIds', 'globalIds', or 'where' are required to perform attachment query",r);return!((g=e==null?void 0:e.attachment)!=null&&g.supportsOrderByFields)&&((S=r.orderByFields)!=null&&S.length)&&((r=r.clone()).orderByFields=null),this.queryTask.executeAttachmentQuery(r,t)}async queryFeatureCount(r=this.createQuery(),t){var i,s;if(await this.load(),!this.capabilities.operations.supportsQuery)throw new b("queryFeatureCount:not-supported","this layer doesn't support queries.");if(!this.url)throw new b("queryFeatureCount:not-supported","this layer has no url.");const e=(i=this.layer)==null?void 0:i.apiKey;return await this.queryTask.executeForCount(r,{...t,query:{...(s=this.layer)==null?void 0:s.customParameters,token:e}})}async queryFeatures(r=this.createQuery(),t){var i,s;if(await this.load(),!this.capabilities.operations.supportsQuery)throw new b("queryFeatures:not-supported","this layer doesn't support queries.");if(!this.url)throw new b("queryFeatures:not-supported","this layer has no url.");const e=await this.queryTask.execute(r,{...t,query:{...(i=this.layer)==null?void 0:i.customParameters,token:(s=this.layer)==null?void 0:s.apiKey}});if(e!=null&&e.features)for(const l of e.features)l.sourceLayer=this;return e}async queryObjectIds(r=this.createQuery(),t){var i,s;if(await this.load(),!this.capabilities.operations.supportsQuery)throw new b("queryObjectIds:not-supported","this layer doesn't support queries.");if(!this.url)throw new b("queryObjectIds:not-supported","this layer has no url.");const e=(i=this.layer)==null?void 0:i.apiKey;return await this.queryTask.executeForIds(r,{...t,query:{...(s=this.layer)==null?void 0:s.customParameters,token:e}})}async queryRelatedFeatures(r,t){var i,s;if(await this.load(),!this.capabilities.operations.supportsQuery)throw new b("queryRelatedFeatures:not-supported","this layer doesn't support queries.");if(!this.url)throw new b("queryRelatedFeatures:not-supported","this layer has no url.");const e=(i=this.layer)==null?void 0:i.apiKey;return await this.queryTask.executeRelationshipQuery(r,{...t,query:{...(s=this.layer)==null?void 0:s.customParameters,token:e}})}async queryRelatedFeaturesCount(r,t){var i,s;if(await this.load(),!this.capabilities.operations.supportsQuery)throw new b("queryRelatedFeaturesCount:not-supported","this layer doesn't support queries.");if(!this.capabilities.queryRelated.supportsCount)throw new b("queryRelatedFeaturesCount:not-supported","this layer doesn't support query related counts.");if(!this.url)throw new b("queryRelatedFeaturesCount:not-supported","this layer has no url.");const e=(i=this.layer)==null?void 0:i.apiKey;return await this.queryTask.executeRelationshipQueryForCount(r,{...t,query:{...(s=this.layer)==null?void 0:s.customParameters,token:e}})}toExportImageJSON(r){var l,u,p,d,f,m;const t={id:this.id,source:((l=this.source)==null?void 0:l.toJSON())||{mapLayerId:this.id,type:"mapLayer"}},e=Ee(r,this.definitionExpression);e!=null&&(t.definitionExpression=e);const i=["renderer","labelingInfo","opacity","labelsVisible"].reduce((c,g)=>(c[g]=this.originIdOf(g),c),{});if(Object.keys(i).some(c=>i[c]>y.SERVICE)){const c=t.drawingInfo={};if(i.renderer>y.SERVICE&&(c.renderer=this.renderer?this.renderer.toJSON():null),i.labelsVisible>y.SERVICE&&(c.showLabels=this.labelsVisible),this.labelsVisible&&i.labelingInfo>y.SERVICE)if(this.labelingInfo){!this.loaded&&((u=this.labelingInfo)!=null&&u.some(S=>!S.labelPlacement))&&x.getLogger(this).warnOnce(`A Sublayer (title: ${this.title}, id: ${this.id}) has an undefined 'labelPlacement' and so labels cannot be displayed. Either define a valid 'labelPlacement' or call Sublayer.load() to use a default value based on geometry type.`,{sublayer:this});let g=this.labelingInfo;this.geometryType!=null&&(g=Le(this.labelingInfo,N.toJSON(this.geometryType))),c.showLabels=!0,c.labelingInfo=g.filter(S=>S.labelPlacement).map(S=>S.toJSON({origin:"service",layer:this.layer}))}else c.showLabels=!1;i.opacity>y.SERVICE&&(c.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(c.renderer)}return(((f=(d=(p=this.layer)==null?void 0:p.capabilities)==null?void 0:d.exportMap)==null?void 0:f.supportsSublayerOrderBy)??!1)&&this.originIdOf("orderBy")>y.SERVICE&&(t.orderBy=((m=this.orderBy)==null?void 0:m.map(c=>c.toJSON()))??null),t}_assignDefaultSymbolColors(r){this._forEachSimpleMarkerSymbols(r,t=>{var e;t.color||t.style!=="esriSMSX"&&t.style!=="esriSMSCross"||((e=t.outline)!=null&&e.color?t.color=t.outline.color:t.color=[0,0,0,0])})}_forEachSimpleMarkerSymbols(r,t){if(r){const e=("uniqueValueInfos"in r?r.uniqueValueInfos:"classBreakInfos"in r?r.classBreakInfos:null)??[];for(const i of e)C(i.symbol)&&t(i.symbol);"symbol"in r&&C(r.symbol)&&t(r.symbol),"defaultSymbol"in r&&C(r.defaultSymbol)&&t(r.defaultSymbol)}}_setAndNotifyLayer(r,t){var p,d,f,m;const e=this.layer,i=this._get(r);let s,l;switch(r){case"definitionExpression":case"floorInfo":s="supportsSublayerDefinitionExpression";break;case"minScale":case"maxScale":case"visible":s="supportsSublayerVisibility";break;case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":s="supportsDynamicLayers",l="supportsModification";break;case"orderBy":s="supportsSublayerOrderBy",l="supportsModification"}const u=A(this).getDefaultOrigin();if(u!=="service"){if(s&&((f=(d=(p=this.layer)==null?void 0:p.capabilities)==null?void 0:d.exportMap)==null?void 0:f[s])===!1)return void this._logLockedError(r,`capability not available 'layer.capabilities.exportMap.${s}'`);if(l&&((m=this.capabilities)==null?void 0:m.exportMap[l])===!1)return void this._logLockedError(r,`capability not available 'capabilities.exportMap.${l}'`)}r!=="source"||this.loadStatus==="not-loaded"?(this._set(r,t),u!=="service"&&i!==t&&e&&e.emit&&e.emit("sublayer-update",{propertyName:r,target:this})):this._logLockedError(r,"'source' can't be changed after calling sublayer.load()")}_handleSublayersChange(r,t){t&&(t.forEach(e=>{e.parent=null,e.layer=null}),this.removeAllHandles()),r&&(r.forEach(e=>{e.parent=this,e.layer=this.layer}),this.addHandles([r.on("after-add",({item:e})=>{e.parent=this,e.layer=this.layer}),r.on("after-remove",({item:e})=>{e.parent=null,e.layer=null}),r.on("before-changes",e=>{var i,s,l;(((l=(s=(i=this.layer)==null?void 0:i.capabilities)==null?void 0:s.exportMap)==null?void 0:l.supportsSublayersChanges)??1)||(x.getLogger(this).error(new b("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:this,layer:this.layer})),e.preventDefault())})]))}_logLockedError(r,t){const{layer:e,declaredClass:i}=this;x.getLogger(i).error(new b("sublayer:locked",`Property '${String(r)}' can't be changed on Sublayer from the layer '${e==null?void 0:e.id}'`,{reason:t,sublayer:this,layer:e}))}_getLayerDomain(r){var t;return((t=this.fieldsIndex.get(r))==null?void 0:t.domain)??null}};o.test={isMapImageLayerOverridePolicy:r=>r===_||r===E||r===R,isTileImageLayerOverridePolicy:r=>r===V},a([n({readOnly:!0})],o.prototype,"capabilities",void 0),a([I("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],o.prototype,"readCapabilities",null),a([n()],o.prototype,"defaultPopupTemplate",null),a([n({type:String,value:null,json:{name:"layerDefinition.definitionExpression",write:{allowNull:!0,overridePolicy:R}}})],o.prototype,"definitionExpression",null),a([n({readOnly:!0})],o.prototype,"effectiveScaleRange",null),a([I("service","maxScaleRange",["minScale","maxScale"])],o.prototype,"readMaxScaleRange",null),a([n({type:[xe],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],o.prototype,"fields",void 0),a([n({readOnly:!0})],o.prototype,"fieldsIndex",null),a([n({type:Oe,value:null,json:{name:"layerDefinition.floorInfo",read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo",overridePolicy:R},origins:{"web-scene":{read:!1,write:!1}}}})],o.prototype,"floorInfo",null),a([n({type:Z,json:{read:{source:"layerDefinition.extent"}}})],o.prototype,"fullExtent",void 0),a([n({type:N.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:N.read}}}}})],o.prototype,"geometryType",void 0),a([n({type:String})],o.prototype,"globalIdField",void 0),a([I("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],o.prototype,"readGlobalIdFieldFromService",null),a([n({type:q,json:{write:{ignoreOrigin:!0}}})],o.prototype,"id",null),a([n({readOnly:!0})],o.prototype,"isTable",void 0),a([I("service","isTable",["type"])],o.prototype,"readIsTable",null),a([n({value:null,type:[Fe],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:_}}})],o.prototype,"labelingInfo",null),a([L("labelingInfo")],o.prototype,"writeLabelingInfo",null),a([n({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:E}}})],o.prototype,"labelsVisible",null),a([n({value:null})],o.prototype,"layer",null),a([n({type:String,json:{write:{overridePolicy:V}}})],o.prototype,"layerItemId",void 0),a([n({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:D}}})],o.prototype,"legendEnabled",void 0),a([n({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],o.prototype,"listMode",null),a([n({type:Number,value:0,json:{write:{overridePolicy:E}}})],o.prototype,"minScale",null),a([I("minScale",["minScale","layerDefinition.minScale"])],o.prototype,"readMinScale",null),a([n({type:Number,value:0,json:{write:{overridePolicy:E}}})],o.prototype,"maxScale",null),a([I("maxScale",["maxScale","layerDefinition.maxScale"])],o.prototype,"readMaxScale",null),a([n()],o.prototype,"objectIdField",void 0),a([I("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],o.prototype,"readObjectIdFieldFromService",null),a([n({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:E}}})],o.prototype,"opacity",null),a([I("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],o.prototype,"readOpacity",null),a([L("opacity")],o.prototype,"writeOpacity",null),a([n({value:null,type:[_e],json:{name:"layerDefinition.orderBy",read:{reader:Te}}})],o.prototype,"orderBy",null),a([n({json:{type:q,write:{target:"parentLayerId",writerEnsuresNonNull:!0,overridePolicy:E}}})],o.prototype,"parent",void 0),a([L("parent")],o.prototype,"writeParent",null),a([n({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:(r,t)=>!t.disablePopup},write:{target:"disablePopup",overridePolicy:D,writer(r,t,e){t[e]=!r}}}})],o.prototype,"popupEnabled",void 0),a([n({type:De,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:D}}})],o.prototype,"popupTemplate",void 0),a([n({readOnly:!0})],o.prototype,"queryTask",null),a([n({type:[Pe],readOnly:!0,json:{origins:{service:{read:{source:"layerDefinition.relationships"}}}}})],o.prototype,"relationships",void 0),a([n({types:je,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:_},origins:{"web-scene":{types:Ae,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:_}}}}})],o.prototype,"renderer",null),a([n({types:{key:"type",base:null,typeMap:{"data-layer":W,"map-layer":$}},cast(r){if(r){if("mapLayerId"in r)return z($,r);if("dataSource"in r)return z(W,r)}return r},json:{name:"layerDefinition.source",write:{overridePolicy:E}}})],o.prototype,"source",null),a([n()],o.prototype,"sourceJSON",void 0),a([n({type:Y,json:{origins:{service:{read:{source:"layerDefinition.extent.spatialReference"}}}}})],o.prototype,"spatialReference",void 0),a([n({value:null,json:{type:[q],write:{target:"subLayerIds",allowNull:!0,overridePolicy:E}}})],o.prototype,"sublayers",null),a([qe("sublayers")],o.prototype,"castSublayers",null),a([L("sublayers")],o.prototype,"writeSublayers",null),a([n({type:String,json:{name:"name",write:{overridePolicy:D}}})],o.prototype,"title",void 0),a([I("service","title",["name","layerDefinition.name"])],o.prototype,"readTitle",null),a([n({type:String})],o.prototype,"typeIdField",void 0),a([n({json:{read:!1},readOnly:!0,value:"sublayer"})],o.prototype,"type",void 0),a([I("typeIdField",["layerDefinition.typeIdField"])],o.prototype,"readTypeIdField",null),a([n({type:[Ce],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],o.prototype,"types",void 0),a([n({type:String,json:{name:"layerUrl",write:{overridePolicy:V}}})],o.prototype,"url",null),a([n({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:E}}})],o.prototype,"visible",null),a([L("visible")],o.prototype,"writeVisible",null),o=j=a([B("esri.layers.support.Sublayer")],o);const Q=o;function Qe(r,t){const e=[],i={};return r&&r.forEach(s=>{const l=new Q;if(l.read(s,t),i[l.id]=l,s.parentLayerId!=null&&s.parentLayerId!==-1){const u=i[s.parentLayerId];u.sublayers||(u.sublayers=[]),u.sublayers.unshift(l)}else e.unshift(l)}),e}const P=k.ofType(Q);function ee(r,t){r&&r.forEach(e=>{t(e),e.sublayers&&e.sublayers.length&&ee(e.sublayers,t)})}const ze=r=>{let t=class extends r{constructor(...e){super(...e),this.allSublayers=new Re({getCollections:()=>[this.sublayers],getChildrenFunction:i=>i.sublayers}),this.sublayersSourceJSON={[y.SERVICE]:{},[y.PORTAL_ITEM]:{},[y.WEB_SCENE]:{},[y.WEB_MAP]:{},[y.LINK_CHART]:{}},this.subtables=null,this.addHandles([G(()=>this.sublayers,(i,s)=>this._handleSublayersChange(i,s),X),G(()=>this.subtables,(i,s)=>this._handleSublayersChange(i,s),X)])}destroy(){this.allSublayers.destroy()}readSublayers(e,i){if(!i||!e)return;const{sublayersSourceJSON:s}=this,l=O(i.origin);if(l<y.SERVICE||(s[l]={context:i,visibleLayers:e.visibleLayers||s[l].visibleLayers,layers:e.layers||s[l].layers},l>y.SERVICE))return;this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);const{sublayers:u,origin:p}=this.createSublayersForOrigin("web-document"),d=A(this);d.setDefaultOrigin(p),this._set("sublayers",new P(u)),d.setDefaultOrigin("user")}findSublayerById(e){return this.allSublayers.find(i=>i.id===e)}createServiceSublayers(){return this.createSublayersForOrigin("service").sublayers}createSublayersForOrigin(e){const i=O(e==="web-document"?"web-map":e);let s=y.SERVICE,l=this.sublayersSourceJSON[y.SERVICE].layers,u=this.sublayersSourceJSON[y.SERVICE].context,p=null;const d=[y.PORTAL_ITEM,y.WEB_SCENE,y.WEB_MAP].filter(h=>h<=i);for(const h of d){const w=this.sublayersSourceJSON[h];Ne(w.layers)&&(s=h,l=w.layers,u=w.context,w.visibleLayers&&(p={visibleLayers:w.visibleLayers,context:w.context}))}const f=[y.PORTAL_ITEM,y.WEB_SCENE,y.WEB_MAP].filter(h=>h>s&&h<=i);let m=null;for(const h of f){const{layers:w,visibleLayers:v,context:F}=this.sublayersSourceJSON[h];w&&(m={layers:w,context:F}),v&&(p={visibleLayers:v,context:F})}const c=Qe(l,u),g=new Map,S=new Set;if(m)for(const h of m.layers)g.set(h.id,h);if(p!=null&&p.visibleLayers)for(const h of p.visibleLayers)S.add(h);return ee(c,h=>{m&&h.read(g.get(h.id),m.context),p&&h.read({defaultVisibility:S.has(h.id)},p.context)}),{origin:Ve(s),sublayers:new P({items:c})}}read(e,i){super.read(e,i),this.readSublayers(e,i)}_handleSublayersChange(e,i){i&&(i.forEach(s=>{s.parent=null,s.layer=null}),this.removeHandles("sublayers-owner")),e&&(e.forEach(s=>{s.parent=this,s.layer=this}),this.addHandles([e.on("after-add",({item:s})=>{s.parent=this,s.layer=this}),e.on("after-remove",({item:s})=>{s.parent=null,s.layer=null})],"sublayers-owner"),this.type==="tile"&&this.addHandles(e.on("before-changes",s=>{x.getLogger("esri.layers.TileLayer").error(new b("tilelayer:sublayers-non-modifiable","ISublayer can't be added, moved, or removed from the layer's sublayers",{layer:this})),s.preventDefault()}),"sublayers-owner"))}};return a([n({readOnly:!0})],t.prototype,"allSublayers",void 0),a([n({readOnly:!0,type:k.ofType(Q)})],t.prototype,"serviceSublayers",void 0),a([n({value:null,type:P,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],t.prototype,"sublayers",void 0),a([n({readOnly:!0})],t.prototype,"sublayersSourceJSON",void 0),a([n({type:P,json:{read:{source:"tables"}}})],t.prototype,"subtables",void 0),t=a([B("esri.layers.mixins.SublayersOwner")],t),t};export{We as f,ze as m,Q as s};
