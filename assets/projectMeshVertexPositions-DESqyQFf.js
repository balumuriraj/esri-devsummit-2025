import{bN as p,b8 as e}from"./index-szNj1aqA.js";import{n}from"./MeshLocalVertexSpace-BBHGEkLu.js";import{B as s}from"./vertexSpaceConversion-CYqxfFUw.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4f64-Dk4dwAN8.js";import"./spatialReferenceEllipsoidUtils-CAOHNdSO.js";import"./computeTranslationToOriginAndRotation-C7bKRKRu.js";import"./projectPointToVector-2wdg5tcU.js";import"./meshVertexSpaceUtils-1R5NIM1z.js";import"./vec3-DHQwVjNs.js";import"./BufferView-DhtpgA30.js";import"./vec4-BH3uAGyE.js";function j(t,i){const o=s(t,n.absolute);if(!o)return null;let r=o.position;return p(t.spatialReference,i)||(r=new Float64Array(o.position.length),e(o.position,t.spatialReference,0,r,i,0))?r:null}export{j as projectMeshVertexPositions};
