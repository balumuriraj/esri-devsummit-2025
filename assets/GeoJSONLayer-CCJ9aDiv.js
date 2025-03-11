const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/editingSupport-CnZVXFSI.js","assets/CodeBlock-DBIw63CI.js","assets/index-BYYG-xAB.js","assets/index-CSP37mtf.css","assets/CodeBlock-CnI_Xe9l.css"])))=>i.map(i=>d[i]);
import{_ as $}from"./index-BYYG-xAB.js";import{h1 as w,fZ as j,aB as J,bm as O,ae as f,bG as N,ba as R,aA as q,e0 as F,n as m,i as r,k as s,o as I,hb as T,hc as P,cd as k,hd as D,he as G,bd as Z,dc as z,hf as C,bh as Q,be as A,bf as L,bg as B,bi as V,a1 as E,ag as W,hg as g,hh as U,dJ as b,hi as M,aD as h,bl as H,hj as K,di as X,cl as Y,dv as ee,hk as te,bn as re,hl as se,hm as ie,hn as oe,bo as ne,ho as ae,hp as le,ct as ue,hq as de,hr as pe,hs as he,ht as ce,bu as ye}from"./CodeBlock-DBIw63CI.js";import{y as fe}from"./clientSideDefaults-C7Jc-KhZ.js";import"./QueryEngineCapabilities-B_pTbIiR.js";let u=class extends w{constructor(){super(...arguments),this.type="geojson",this.refresh=j(async e=>{await this.load();const{extent:t,timeExtent:o}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,o&&(this.sourceJSON.timeInfo.timeExtent=[o.start,o.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}})}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;(e=this._connection)==null||e.close(),this._connection=null}applyEdits(e){return this.load().then(()=>this._applyEdits(e))}openPorts(){return this.load().then(()=>this._connection.openPorts())}queryFeatures(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)).then(o=>J.fromJSON(o))}queryFeaturesJSON(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))}queryFeatureCount(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t))}queryObjectIds(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t))}queryExtent(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t)).then(o=>({count:o.count,extent:O.fromJSON(o.extent)}))}querySnapping(e,t={}){return this.load(t).then(()=>this._connection.invoke("querySnapping",e,t))}async queryAttributeBins(e,t={}){return await this.load(),this._connection.invoke("queryAttributeBins",e==null?void 0:e.toJSON(),t)}_applyEdits(e){if(!this._connection)throw new f("geojson-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField,o=[],n=[],l=[];if(e.addFeatures)for(const a of e.addFeatures)o.push(this._serializeFeature(a));if(e.deleteFeatures)for(const a of e.deleteFeatures)"objectId"in a&&a.objectId!=null?n.push(a.objectId):"attributes"in a&&a.attributes[t]!=null&&n.push(a.attributes[t]);if(e.updateFeatures)for(const a of e.updateFeatures)l.push(this._serializeFeature(a));return this._connection.invoke("applyEdits",{adds:o,updates:l,deletes:n}).then(({extent:a,timeExtent:d,featureEditResults:c})=>(this.sourceJSON.extent=a,d&&(this.sourceJSON.timeInfo.timeExtent=[d.start,d.end]),this._createEditsResult(c)))}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const t=e.success===!0?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new f("geojson-layer-source:edit-failure",t.description,{code:t.code}):null}}_serializeFeature(e){const{attributes:t}=e,o=this._geometryForSerialization(e);return o?{geometry:o.toJSON(),attributes:t}:{attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;return t==null?null:t.type==="mesh"||t.type==="extent"?N.fromExtent(t.extent):t}async _startWorker(e){this._connection=await R("GeoJSONSourceWorker",{strategy:q("feature-layers-workers")?"dedicated":"local",signal:e,registryTarget:this});const{fields:t,spatialReference:o,hasZ:n,geometryType:l,objectIdField:a,url:d,timeInfo:c,customParameters:S}=this.layer,x=this.layer.originOf("spatialReference")==="defaults",_={url:d,customParameters:S,fields:t&&t.map(y=>y.toJSON()),geometryType:F.toJSON(l),hasZ:n,objectIdField:a,timeInfo:c?c.toJSON():null,spatialReference:x?null:o&&o.toJSON()},p=await this._connection.invoke("load",_,{signal:e});for(const y of p.warnings)m.getLogger(this.layer).warn("#load()",`${y.message} (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{warning:y});p.featureErrors.length&&m.getLogger(this.layer).warn("#load()",`Encountered ${p.featureErrors.length} validation errors while loading features. (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{errors:p.featureErrors}),this.sourceJSON=p.layerDefinition,this.capabilities=fe(this.sourceJSON.hasZ,!0)}};r([s()],u.prototype,"capabilities",void 0),r([s()],u.prototype,"type",void 0),r([s({constructOnly:!0})],u.prototype,"layer",void 0),r([s()],u.prototype,"sourceJSON",void 0),u=r([I("esri.layers.graphics.sources.GeoJSONSource")],u);const v=te();let i=class extends T(P(k(D(G(Z(z(C(Q(A(L(B(V(H))))))))))))){constructor(e){super(e),this.attributeTableTemplate=null,this.copyright=null,this.dateFieldsTimeZone=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new u({layer:this}),this.spatialReference=E.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson"}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){const t=this.loadFromPortal({supportedTypes:["GeoJson"],supportsData:!1},e).catch(W).then(()=>this.source.load(e)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),g(this.renderer,this.fieldsIndex),U(this.timeInfo,this.fieldsIndex)});return this.addResolvingPromise(t),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&this.geometryType==null}get parsedUrl(){return this.url?b(this.url):null}set renderer(e){g(e,this.fieldsIndex),this._set("renderer",e)}set url(e){if(!e)return void this._set("url",e);const t=b(e);this._set("url",t.path),t.query&&(this.customParameters={...this.customParameters,...t.query})}async applyEdits(e,t){const{applyEdits:o}=await $(()=>import("./editingSupport-CnZVXFSI.js"),__vite__mapDeps([0,1,2,3,4]));await this.load();const n=await o(this,this.source,e,t);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),n}on(e,t){return super.on(e,t)}createPopupTemplate(e){return M(this,e)}createQuery(){var l;const e=new h,t=(l=this.capabilities)==null?void 0:l.data;e.returnGeometry=!0,t&&t.supportsZ&&(e.returnZ=!0),e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:o,timeExtent:n}=this;return e.timeExtent=o!=null&&n!=null?n.offset(-o.value,o.unit):n||null,e}getFieldDomain(e,t){var o;return(o=this.getField(e))==null?void 0:o.domain}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(h.from(e)||this.createQuery(),t)).then(o=>{if(o!=null&&o.features)for(const n of o.features)n.layer=n.sourceLayer=this;return o})}queryObjectIds(e,t){return this.load().then(()=>this.source.queryObjectIds(h.from(e)||this.createQuery(),t))}queryFeatureCount(e,t){return this.load().then(()=>this.source.queryFeatureCount(h.from(e)||this.createQuery(),t))}queryExtent(e,t){return this.load().then(()=>this.source.queryExtent(h.from(e)||this.createQuery(),t))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return t!=null&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}};r([s(K)],i.prototype,"attributeTableTemplate",void 0),r([s({readOnly:!0,json:{read:!1,write:!1}})],i.prototype,"capabilities",null),r([s({type:String})],i.prototype,"copyright",void 0),r([s({readOnly:!0})],i.prototype,"createQueryVersion",null),r([s(X("dateFieldsTimeReference"))],i.prototype,"dateFieldsTimeZone",void 0),r([s({readOnly:!0})],i.prototype,"defaultPopupTemplate",null),r([s({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),r([s({type:String})],i.prototype,"displayField",void 0),r([s({type:Boolean})],i.prototype,"editingEnabled",void 0),r([s(Y)],i.prototype,"elevationInfo",void 0),r([s({type:[ee],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],i.prototype,"fields",void 0),r([s(v.fieldsIndex)],i.prototype,"fieldsIndex",void 0),r([s({type:O,json:{name:"extent"}})],i.prototype,"fullExtent",void 0),r([s({type:["point","polygon","polyline","multipoint"],json:{read:{reader:F.read}}})],i.prototype,"geometryType",void 0),r([s({type:Boolean})],i.prototype,"hasZ",void 0),r([s(re)],i.prototype,"id",void 0),r([s({type:Boolean,readOnly:!0})],i.prototype,"isTable",null),r([s(se)],i.prototype,"labelsVisible",void 0),r([s({type:[oe],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:ie},write:!0}})],i.prototype,"labelingInfo",void 0),r([s(ne)],i.prototype,"legendEnabled",void 0),r([s({type:["show","hide"]})],i.prototype,"listMode",void 0),r([s({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],i.prototype,"objectIdField",void 0),r([s(ae)],i.prototype,"opacity",void 0),r([s({type:["GeoJSON"]})],i.prototype,"operationalLayerType",void 0),r([s(v.outFields)],i.prototype,"outFields",void 0),r([s({readOnly:!0})],i.prototype,"parsedUrl",null),r([s(le)],i.prototype,"popupEnabled",void 0),r([s({type:ue,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),r([s({types:pe,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:de}}}})],i.prototype,"renderer",null),r([s(he)],i.prototype,"screenSizePerspectiveEnabled",void 0),r([s({readOnly:!0})],i.prototype,"source",void 0),r([s({type:E})],i.prototype,"spatialReference",void 0),r([s({type:[ce]})],i.prototype,"templates",void 0),r([s()],i.prototype,"title",void 0),r([s({json:{read:!1},readOnly:!0})],i.prototype,"type",void 0),r([s(ye)],i.prototype,"url",null),i=r([I("esri.layers.GeoJSONLayer")],i);const Oe=i;export{Oe as default};
