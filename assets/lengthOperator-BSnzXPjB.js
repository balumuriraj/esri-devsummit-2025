import{f2 as a}from"./index-szNj1aqA.js";import{fromGeometryToGXGeometry as c,getSpatialReference as i}from"./jsonConverter-Bc1JlvGM.js";import"./ProjectionTransformation-CYBtiM9Y.js";import"./SimpleGeometryCursor-B92kdZ15.js";function u(t,m={}){const{unit:o}=m;let e=c(t).calculateLength2D();const r=i(t);return e&&o&&r&&(e=a(e,r,o)),e}export{u as execute};
