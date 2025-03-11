import{E as g,o as y}from"./VertexArrayObject-BmXtwjFc.js";import{x as F,s as v}from"./FramebufferObject-gEuafnU1.js";import{r as c}from"./ProgramTemplate-Br6yXss1.js";import{e as P,a as w}from"./ProgramTemplate-Br6yXss1.js";import{fi as C}from"./CodeBlock-DBIw63CI.js";import{t as p}from"./NestedMap-GuqgquCN.js";import"./memoryEstimations-DG877__o.js";import"./index-BYYG-xAB.js";class x{constructor(e){this._rctx=e,this._store=new p}dispose(){this._store.forAll(e=>e.dispose()),this._store.clear()}acquire(e,t,o,n){const r=this._store.get(e,t);if(r!=null)return r.ref(),r;const s=new c(this._rctx,e,t,o,n);return s.ref(),this._store.set(e,t,s),s}get test(){}}function l(i){const{options:e,value:t}=i;return typeof e[t]=="number"}function b(i){let e="";for(const t in i){const o=i[t];if(typeof o=="boolean")o&&(e+=`#define ${t}
`);else if(typeof o=="number")e+=`#define ${t} ${o.toFixed()}
`;else if(typeof o=="object")if(l(o)){const{value:n,options:r,namespace:s}=o,f=s?`${s}_`:"";for(const a in r)e+=`#define ${f}${a} ${r[a].toFixed()}
`;e+=`#define ${t} ${f}${n}
`}else{const n=o.options;let r=0;for(const s in n)e+=`#define ${n[s]} ${(r++).toFixed()}
`;e+=`#define ${t} ${n[o.value]}
`}}return e}export{g as BufferObject,F as FramebufferObject,c as Program,x as ProgramCache,v as Renderbuffer,P as ShaderCompiler,C as Texture,y as VertexArrayObject,w as createProgram,b as glslifyDefineMap};
