import{e4 as O,e5 as C,e6 as A,e7 as _,e8 as T,e9 as h,ea as E,eb as d,ec as r}from"./index-szNj1aqA.js";function L(e,t,a="nearest",i=!1){const n=!(i&&t.pixelType==="u8"),o=n?A.FLOAT:A.UNSIGNED_BYTE,u=t.pixels==null||t.pixels.length===0?null:n?t.getAsRGBAFloat():t.getAsRGBA(),f=e.capabilities.textureFloatLinear,s=new O;return s.width=t.width,s.height=t.height,s.internalFormat=n?C.RGBA32F:d.RGBA,s.samplingMode=!f||a!=="bilinear"&&a!=="cubic"?_.NEAREST:_.LINEAR,s.dataType=o,s.wrapMode=T.CLAMP_TO_EDGE,new h(e,s,u)}function U(e,t){const{spacing:a,offsets:i,coefficients:n,size:[o,u]}=t,f=a[0]>1,s=new O;s.width=f?4*o:o,s.height=u,s.internalFormat=C.RGBA32F,s.dataType=A.FLOAT,s.samplingMode=_.NEAREST,s.wrapMode=T.CLAMP_TO_EDGE;const m=new Float32Array(f?o*u*16:2*i.length);if(f&&n!=null)for(let c=0,l=0;c<n.length;c++)m[l++]=n[c],c%3==2&&(m[l++]=1);else for(let c=0;c<u;c++)for(let l=0;l<o;l++){const g=4*(c*o+l),p=2*(l*u+c);m[g]=i[p],m[g+1]=i[p+1],m[g+3]=i[p]===-1?0:1}return new h(e,s,m)}function F(e,t){const a=new O;return a.internalFormat=d.RGBA,a.width=t.length/4,a.height=1,a.samplingMode=_.NEAREST,a.wrapMode=T.CLAMP_TO_EDGE,new h(e,a,t)}function x(e,t,a,i=1,n=!0){return{u_flipY:n,u_applyTransform:!!e,u_opacity:i,u_transformSpacing:e?e.spacing:E,u_transformGridSize:e?e.size:E,u_targetImageSize:t,u_srcImageSize:a}}function M(e,t){return{u_colormapOffset:t||0,u_colormapMaxIndex:e?e.length/4-1:0}}function G(e,t){return{u_scale:e,u_offset:t}}function V(e){return{u_bandCount:e.bandCount,u_minOutput:e.minOutput,u_maxOutput:e.maxOutput,u_minCutOff:e.minCutOff,u_maxCutOff:e.maxCutOff,u_factor:e.factor,u_useGamma:e.useGamma,u_gamma:e.gamma,u_gammaCorrection:e.gammaCorrection}}function k(e){return{u_hillshadeType:e.hillshadeType,u_sinZcosAs:e.sinZcosAs,u_sinZsinAs:e.sinZsinAs,u_cosZs:e.cosZs,u_weights:e.weights,u_factor:e.factor,u_minValue:e.minValue,u_maxValue:e.maxValue}}function N(e,t){const a=e.gl,i=t.glName,n=new Map;if(i==null)return n;const o=a.getProgramParameter(i,a.ACTIVE_UNIFORMS);let u;for(let f=0;f<o;f++)u=a.getActiveUniform(i,f),u&&n.set(u.name,{location:a.getUniformLocation(i,u.name),info:u});return n}function v(e,t,a){Object.keys(a).forEach(i=>{const n=t.get(i)||t.get(i+"[0]");n&&b(e,i,a[i],n)})}function B(e,t,a,i){a.length===i.length&&(i.some(n=>n==null)||a.some(n=>n==null)||a.forEach((n,o)=>{t.setUniform1i(n,o),e.bindTexture(i[o],o)}))}function b(e,t,a,i){if(i===null||a==null)return!1;const{info:n}=i;switch(n.type){case r.FLOAT:n.size>1?e.setUniform1fv(t,a):e.setUniform1f(t,a);break;case r.FLOAT_VEC2:e.setUniform2fv(t,a);break;case r.FLOAT_VEC3:e.setUniform3fv(t,a);break;case r.FLOAT_VEC4:e.setUniform4fv(t,a);break;case r.FLOAT_MAT3:e.setUniformMatrix3fv(t,a);break;case r.FLOAT_MAT4:e.setUniformMatrix4fv(t,a);break;case r.INT:n.size>1?e.setUniform1iv(t,a):e.setUniform1i(t,a);break;case r.BOOL:e.setUniform1i(t,a?1:0);break;case r.INT_VEC2:case r.BOOL_VEC2:e.setUniform2iv(t,a);break;case r.INT_VEC3:case r.BOOL_VEC3:e.setUniform3iv(t,a);break;case r.INT_VEC4:case r.BOOL_VEC4:e.setUniform4iv(t,a);break;default:return!1}return!0}export{k as A,v as O,N as T,M as _,F as c,L as f,G as g,B as h,x as l,U as m,V as p};
