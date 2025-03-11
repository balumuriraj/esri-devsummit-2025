import{fw as M,S as I,aI as A}from"./CodeBlock-DBIw63CI.js";import{e as b}from"./loadUtils-CfwUGfxF.js";import{a as n}from"./lazyLayerLoader-BEIau6J8.js";import{selectLayerClassPath as w}from"./portalLayers-C-ODhVcV.js";import"./index-BYYG-xAB.js";import"./fetchService-9yeHDqq1.js";import"./associatedFeatureServiceUtils-8oVtguFa.js";function v(e){return S(e,"notes")}function C(e){return S(e,"markup")}function h(e){return S(e,"route")}function S(e,r){return!(!e.layerType||e.layerType!=="ArcGISFeatureLayer")&&e.featureCollectionType===r}async function W(e,r,a){if(!r)return;const y=r.map(t=>x(t,a)),i=await Promise.allSettled(y);for(const t of i)t.status==="rejected"||t.value&&e.add(t.value)}const F={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISSceneServiceLayer:"SceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BuildingSceneLayer:"BuildingSceneLayer",CatalogLayer:"CatalogLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",IntegratedMesh3DTilesLayer:"IntegratedMesh3DTilesLayer",Object3DTilesLayer:"UnsupportedLayer",IntegratedMeshLayer:"IntegratedMeshLayer",KML:"KMLLayer",LineOfSightLayer:"LineOfSightLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",PointCloudLayer:"PointCloudLayer",RasterDataLayer:"UnsupportedLayer",VectorTileLayer:"VectorTileLayer",ViewshedLayer:"ViewshedLayer",Voxel:"VoxelLayer",WCS:"WCSLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},O={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},V={ArcGISFeatureLayer:"FeatureLayer"},k={ArcGISImageServiceLayer:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",ArcGISSceneServiceLayer:"SceneLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",DefaultTileLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WCS:"UnsupportedLayer",WMS:"UnsupportedLayer",WebTiledLayer:"WebTileLayer"},g={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",CatalogLayer:"CatalogLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoJSON:"GeoJSONLayer",GeoRSS:"GeoRSSLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",KnowledgeGraphLayer:"KnowledgeGraphLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WCS:"WCSLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},T={ArcGISFeatureLayer:"FeatureLayer",SubtypeGroupTable:"SubtypeGroupLayer"},m={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",DefaultTileLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WCS:"WCSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},B={...g,LinkChartLayer:"LinkChartLayer"},D={...T},U={...m};async function x(e,r){return E(await R(e,r),e,r)}async function E(e,r,a){const y=new e;return y.read(r,a.context),y.type==="group"&&(r.layerType==="GroupLayer"?await N(y,r,a):u(r)?J(y,r,a.context):G(r)&&await P(y,r,a.context)),await M(y,a.context),y}async function R(e,r){var c,o;const a=r.context,y=K(a);let i=e.layerType||e.type;!i&&(r!=null&&r.defaultLayerType)&&(i=r.defaultLayerType);const t=y[i];let L=t?n[t]:n.UnknownLayer;if(u(e)){const s=a==null?void 0:a.portal;if(e.itemId){const l=new I({id:e.itemId,portal:s});await l.load();const p=(await w(l,new b)).className||"UnknownLayer";L=n[p]}}else i==="ArcGISFeatureLayer"?v(e)||C(e)?L=n.MapNotesLayer:h(e)?L=n.RouteLayer:G(e)&&(L=n.GroupLayer):(c=e.wmtsInfo)!=null&&c.url&&e.wmtsInfo.layerIdentifier?L=n.WMTSLayer:i==="WFS"&&((o=e.wfsInfo)==null?void 0:o.version)!=="2.0.0"&&(L=n.UnsupportedLayer);return L()}function G(e){var r,a;return e.layerType!=="ArcGISFeatureLayer"||u(e)?!1:(((a=(r=e.featureCollection)==null?void 0:r.layers)==null?void 0:a.length)??0)>1}function u(e){return e.type==="Feature Collection"}function K(e){let r;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":r=k;break;case"ground":r=O;break;case"tables":r=V;break;default:r=F}break;case"link-chart":switch(e.layerContainerType){case"basemap":r=U;break;case"tables":r=D;break;default:r=B}break;default:switch(e.layerContainerType){case"basemap":r=m;break;case"tables":r=T;break;default:r=g}}return r}async function N(e,r,a){const y=new A,i=W(y,Array.isArray(r.layers)?r.layers:[],a);try{try{if(await i,e.type==="group")return e.layers.addMany(y),e}catch(t){e.destroy();for(const L of y)L.destroy();throw t}}catch(t){throw t}}function J(e,r,a){r.itemId&&(e.portalItem=new I({id:r.itemId,portal:a==null?void 0:a.portal}),e.when(()=>{var i,t;const y=L=>{var s,l;const c=L.layerId;f(L,e,r,c,a);const o=(l=(s=r.featureCollection)==null?void 0:s.layers)==null?void 0:l[c];o&&L.read(o,a)};(i=e.layers)==null||i.forEach(y),(t=e.tables)==null||t.forEach(y)}))}async function P(e,r,a){var o;const y=n.FeatureLayer,i=await y(),t=r.featureCollection,L=t==null?void 0:t.showLegend,c=(o=t==null?void 0:t.layers)==null?void 0:o.map((s,l)=>{const p=new i;p.read(s,a);const d={...a,ignoreDefaults:!0};return f(p,e,r,l,d),L!=null&&p.read({showLegend:L},d),p});e.layers.addMany(c??[])}function f(e,r,a,y,i){var t;e.read({id:`${r.id}-sublayer-${y}`,visibility:((t=a.visibleLayers)==null?void 0:t.includes(y))??!0},i)}export{N as populateGroupLayer,W as populateOperationalLayers};
