import{bN as p,b8 as e}from"./index-CCasRUIN.js";import{n}from"./MeshLocalVertexSpace-CdbW0z9P.js";import{B as s}from"./vertexSpaceConversion-DxhiOY_R.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4f64-Dk4dwAN8.js";import"./spatialReferenceEllipsoidUtils-3uG47glO.js";import"./computeTranslationToOriginAndRotation-BWf8TM_C.js";import"./projectPointToVector-CsbvifDl.js";import"./meshVertexSpaceUtils-Cc_LTFxS.js";import"./vec3-CAnrSJC1.js";import"./BufferView-BFWskoDl.js";import"./vec4-BQB9hcIJ.js";function j(t,i){const o=s(t,n.absolute);if(!o)return null;let r=o.position;return p(t.spatialReference,i)||(r=new Float64Array(o.position.length),e(o.position,t.spatialReference,0,r,i,0))?r:null}export{j as projectMeshVertexPositions};
