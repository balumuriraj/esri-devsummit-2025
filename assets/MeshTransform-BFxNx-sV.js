import{aD as u,aE as p,aF as h,aG as c,aH as e,aI as m,aJ as x,aK as y,aL as r,aM as a,aN as A}from"./index-szNj1aqA.js";import{e as s}from"./mat4f64-Dk4dwAN8.js";import{b as g}from"./quat-BZedS7IX.js";import{e as N}from"./quatf64-aQ5IuZRd.js";import{B as b,q as M,w as n,y as v,z as d}from"./axisAngleDegrees-BiDce1yX.js";var i;let o=i=class extends u{constructor(t){super(t),this.translation=p(),this.rotationAxis=h(b),this.rotationAngle=0,this.scale=c(1,1,1)}get rotation(){return M(this.rotationAxis,this.rotationAngle)}set rotation(t){this.rotationAxis=e(n(t)),this.rotationAngle=v(t)}get localMatrix(){const t=s();return g(l,n(this.rotation),d(this.rotation)),m(t,l,this.translation,this.scale),t}get localMatrixInverse(){return x(s(),this.localMatrix)}equals(t){return this===t||t!=null&&y(this.localMatrix,t.localMatrix)}clone(){const t={translation:e(this.translation),rotationAxis:e(this.rotationAxis),rotationAngle:this.rotationAngle,scale:e(this.scale)};return new i(t)}};r([a({type:[Number],nonNullable:!0,json:{write:!0}})],o.prototype,"translation",void 0),r([a({type:[Number],nonNullable:!0,json:{write:!0}})],o.prototype,"rotationAxis",void 0),r([a({type:Number,nonNullable:!0,json:{write:!0}})],o.prototype,"rotationAngle",void 0),r([a({type:[Number],nonNullable:!0,json:{write:!0}})],o.prototype,"scale",void 0),r([a()],o.prototype,"rotation",null),r([a()],o.prototype,"localMatrix",null),r([a()],o.prototype,"localMatrixInverse",null),o=i=r([A("esri.geometry.support.MeshTransform")],o);const l=N(),q=o;export{q as N};
