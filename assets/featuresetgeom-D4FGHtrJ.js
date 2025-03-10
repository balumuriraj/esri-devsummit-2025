import{a as u,r as c}from"./unitConversion-CbAjq8hg.js";import{n as d}from"./TimeOnly-yq9GKJdG.js";import{T as O,u as J,U as s,y as m,B as l}from"./arcade-DwlcQ58F.js";import{u as f,l as w}from"./SpatialFilter-CVnIhxxO.js";import{a}from"./operatorsWorkerConnection-jQ9jlED1.js";import"./index-szNj1aqA.js";import"./ImmutableArray-BPVd6ESQ.js";import"./shared-juD_3GjT.js";import"./number-DcdX0Dnp.js";import"./featureConversionUtils-3a9TqYps.js";import"./OptimizedFeatureSet-FFBqtxva.js";import"./memoryEstimations-CnkpdY1b.js";import"./OptimizedGeometry-BLyz1xrK.js";import"./WhereClause-DuA0lbKQ.js";function o(i){return async(r,n,e)=>{if(J(e,2,2,r,n),(e=O(e))[0]===null&&e[1]===null)return!1;if(l(e[0])){if(s(e[1]))return new w({parentfeatureset:e[0],relation:i,relationGeom:e[1]});if(e[1]===null)return new f({parentfeatureset:e[0]});throw new u(r,c.InvalidParameter,n)}if(s(e[0])){if(s(e[1])){switch(i){case"esriSpatialRelEnvelopeIntersects":{const p=d(e[0]),t=d(e[1]);return p!=null&&t!=null&&a("intersects",[p.toJSON(),t.toJSON()])}case"esriSpatialRelIntersects":return a("intersects",[e[0].toJSON(),e[1].toJSON()]);case"esriSpatialRelContains":return a("contains",[e[0].toJSON(),e[1].toJSON()]);case"esriSpatialRelOverlaps":return a("overlaps",[e[0].toJSON(),e[1].toJSON()]);case"esriSpatialRelWithin":return a("within",[e[0].toJSON(),e[1].toJSON()]);case"esriSpatialRelTouches":return a("touches",[e[0].toJSON(),e[1].toJSON()]);case"esriSpatialRelCrosses":return a("crosses",[e[0].toJSON(),e[1].toJSON()])}throw new u(r,c.InvalidParameter,n)}if(l(e[1]))return new w({parentfeatureset:e[1],relation:i,relationGeom:e[0]});if(e[1]===null)return!1;throw new u(r,c.InvalidParameter,n)}if(e[0]===null){if(l(e[1]))return new f({parentfeatureset:e[1]});if(s(e[1])||e[1]===null)return!1}throw new u(r,c.InvalidParameter,n)}}function G(i){i.mode==="async"&&(i.functions.intersects=function(r,n){return i.standardFunctionAsync(r,n,o("esriSpatialRelIntersects"))},i.functions.envelopeintersects=function(r,n){return i.standardFunctionAsync(r,n,o("esriSpatialRelEnvelopeIntersects"))},i.signatures.push({name:"envelopeintersects",min:2,max:2}),i.functions.contains=function(r,n){return i.standardFunctionAsync(r,n,o("esriSpatialRelContains"))},i.functions.overlaps=function(r,n){return i.standardFunctionAsync(r,n,o("esriSpatialRelOverlaps"))},i.functions.within=function(r,n){return i.standardFunctionAsync(r,n,o("esriSpatialRelWithin"))},i.functions.touches=function(r,n){return i.standardFunctionAsync(r,n,o("esriSpatialRelTouches"))},i.functions.crosses=function(r,n){return i.standardFunctionAsync(r,n,o("esriSpatialRelCrosses"))},i.functions.relate=function(r,n){return i.standardFunctionAsync(r,n,async(e,p,t)=>{if(t=O(t),J(t,3,3,r,n),s(t[0])&&s(t[1]))return a("relate",[t[0].toJSON(),t[1].toJSON(),m(t[2])]);if(s(t[0])&&t[1]===null||s(t[1])&&t[0]===null)return!1;if(l(t[0])&&t[1]===null)return new f({parentfeatureset:t[0]});if(l(t[1])&&t[0]===null)return new f({parentfeatureset:t[1]});if(l(t[0])&&s(t[1]))return t[0].relate(t[1],m(t[2]));if(l(t[1])&&s(t[0]))return t[1].relate(t[0],m(t[2]));if(t[0]===null&&t[1]===null)return!1;throw new u(r,c.InvalidParameter,n)})})}export{G as registerFunctions};
