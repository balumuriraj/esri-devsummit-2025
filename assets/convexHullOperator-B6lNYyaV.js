import{M as i,v as s,_ as p}from"./operatorConvexHull-B4EZL6TJ.js";import{fromGeometry as f,toGeometry as r,fromGeometries as c,fromGeometryToGXGeometry as u}from"./jsonConverter-yG-T6Xd8.js";import"./SimpleGeometryCursor-B92kdZ15.js";import"./Transformation2D-Bb72B6CZ.js";import"./ProjectionTransformation-CftieGG4.js";import"./CodeBlock-DBIw63CI.js";import"./index-BYYG-xAB.js";function B(e){const o=f(e);return r(i(o.getGeometry()),o.getSpatialReference())}function C(e,o={}){const{merge:t=!1}=o,[m,a]=c(e);return s(m,t).map(n=>r(n,a))}function P(e){return p(u(e))}export{B as execute,C as executeMany,P as isConvex};
