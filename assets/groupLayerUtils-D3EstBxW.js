import{P as l,$ as y}from"./utils-BixsDxm5.js";import{eO as f,eR as v,eX as s,eS as d,bw as I}from"./CodeBlock-DBIw63CI.js";import{p as i}from"./resourceUtils-BlRzYiQb.js";import"./originUtils-D69mHv66.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./saveUtils-DwgtW_pa.js";import"./index-BYYG-xAB.js";import"./resourceUtils-DHLt-m6O.js";const n="Group Layer",g="group-layer-save",P="group-layer-save-as",o=s.GROUP_LAYER_MAP;function c(e){return{isValid:e.type==="group",errorMessage:"Layer.type should be 'group'"}}function R(e){return{isValid:I(e,o),errorMessage:`Layer.portalItem.typeKeywords should have '${o}'`}}function u(e,r){return{...f(e,"web-map",!0),initiator:r}}function m(e){const r=e.layerJSON;return Promise.resolve(r&&Object.keys(r).length?r:null)}async function A(e,r){r.title||(r.title=e.title),v(r,s.METADATA),d(r,o)}async function S(e,r){return l({layer:e,itemType:n,validateLayer:c,validateItem:R,createJSONContext:t=>u(t,e),createItemData:m,errorNamePrefix:g,saveResources:async(t,a)=>(e.sourceIsPortalItem||await t.removeAllResources().catch(()=>{}),i(e.resourceReferences,a))},r)}async function T(e,r,t){return y({layer:e,itemType:n,validateLayer:c,createJSONContext:a=>u(a,e),createItemData:m,errorNamePrefix:P,newItem:r,setItemProperties:A,saveResources:(a,p)=>i(e.resourceReferences,p)},t)}export{S as save,T as saveAs};
