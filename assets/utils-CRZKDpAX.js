import{eL as f}from"./CodeBlock-DBIw63CI.js";function y(t){const r=t.map(({name:o,count:e,type:i})=>`${o}.${e}.${i}`).join(",");return f(r)}function m(t,r,o,e,i,l,c){if(t.primitiveName===r){let a=e==null?void 0:e.readWithDefault(i,l,t[o]&&c);return t.type==="text"&&(a=a.toString()),void(t[o]=a)}if("type"in t&&t.type!=null){if(t.effects)for(const a of t.effects)m(a,r,o,e,i,l,c);switch(t.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(t.symbolLayers)for(const a of t.symbolLayers)m(a,r,o,e,i,l,c);break;case"CIMTextSymbol":t.symbol&&m(t.symbol,r,o,e,i,l,c);break;case"CIMHatchFill":t.lineSymbol&&m(t.lineSymbol,r,o,e,i,l,c);break;case"CIMPictureMarker":case"CIMCharacterMarker":case"CIMVectorMarker":if(t.markerPlacement&&m(t.markerPlacement,r,o,e,i,l,c),t.type==="CIMVectorMarker"&&t.markerGraphics)for(const a of t.markerGraphics)m(a,r,o,e,i,l,c),m(a.symbol,r,o,e,i,l,c)}}}const n=400;function b(t){const r=t.width;return t.effects!=null?n:Math.max(1.25*r,8)}export{b as a,y as r,m as t};
