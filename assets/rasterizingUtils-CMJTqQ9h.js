import{o as R}from"./floatRGBA-eKHE6e6y.js";import{ha as b,hb as $,a9 as A,hc as I}from"./index-szNj1aqA.js";const z=15.5,x=4,U=64,V=1024,v=()=>A.getLogger("esri.symbols.cim.rasterizingUtils"),L=32,P=t=>t==="vertical"||t==="horizontal"||t==="cross"||t==="esriSFSCross"||t==="esriSFSVertical"||t==="esriSFSHorizontal";function O(t,i,r){const n=i.style,a=$(Math.ceil(r)),o=P(n)?8*a:16*a,e=2*a;t.width=o,t.height=o;const s=t.getContext("2d");s.strokeStyle="#ffffff",s.lineWidth=a,s.beginPath(),n!=="vertical"&&n!=="cross"&&n!=="esriSFSCross"&&n!=="esriSFSVertical"||(s.moveTo(o/2,-e),s.lineTo(o/2,o+e)),n!=="horizontal"&&n!=="cross"&&n!=="esriSFSCross"&&n!=="esriSFSHorizontal"||(s.moveTo(-e,o/2),s.lineTo(o+e,o/2)),n!=="backward-diagonal"&&n!=="diagonal-cross"&&n!=="esriSFSDiagonalCross"&&n!=="esriSFSBackwardDiagonal"||(s.moveTo(-e,-e),s.lineTo(o+e,o+e),s.moveTo(o-e,-e),s.lineTo(o+e,e),s.moveTo(-e,o-e),s.lineTo(e,o+e)),n!=="forward-diagonal"&&n!=="diagonal-cross"&&n!=="esriSFSForwardDiagonal"&&n!=="esriSFSDiagonalCross"||(s.moveTo(o+e,-e),s.lineTo(-e,o+e),s.moveTo(e,-e),s.lineTo(-e,e),s.moveTo(o+e,o-e),s.lineTo(o-e,o+e)),s.stroke();const h=s.getImageData(0,0,t.width,t.height),l=new Uint8Array(h.data);let f;for(let c=0;c<l.length;c+=4)f=l[c+3]/255,l[c]=l[c]*f,l[c+1]=l[c+1]*f,l[c+2]=l[c+2]*f;return[l,t.width,t.height,a]}function W(t){t.length%2==1&&(t=[...t,...t]);const i=t.reduce((c,u)=>c+u,0),r=Math.round(i*x),n=1,a=new Float32Array(r*n);let o=0,e=0,s=.5,h=!0;for(const c of t){for(o=e,e+=c*x;s<=e;){const u=s-.5,m=Math.min(Math.abs(s-o),Math.abs(s-e));a[u]=h?-m:m,s++}h=!h}const l=a.length,f=new Uint8Array(4*l);for(let c=0;c<l;++c){const u=a[c]/x;R(u/U*.5+.5,f,4*c)}return[f,r,n]}function j(t,i){t==null&&(t=[]);const r=i==="Butt",n=i==="Square",a=!r&&!n;t.length%2==1&&(t=[...t,...t]);const o=z,e=2*o;let s=0;for(const g of t)s+=g;const h=Math.round(s*o),l=new Float32Array(h*e),f=.5*o;let c=0,u=0,m=.5,M=!0;for(const g of t){for(c=u,u+=g*o;m<=u;){let C=.5;for(;C<e;){const D=(C-.5)*h+m-.5,d=a?(C-o)*(C-o):Math.abs(C-o);l[D]=M?r?Math.max(Math.max(c+f-m,d),Math.max(m-u+f,d)):d:a?Math.min((m-c)*(m-c)+d,(m-u)*(m-u)+d):n?Math.min(Math.max(m-c,d),Math.max(u-m,d)):Math.min(Math.max(m-c+f,d),Math.max(u+f-m,d)),C++}m++}M=!M}const F=l.length,T=new Uint8Array(4*F);for(let g=0;g<F;++g){const C=(a?Math.sqrt(l[g]):l[g])/o;R(C,T,4*g)}return[T,h,e]}function J(t,i){const{colorRamp:r,gradientType:n}=i,a=r.type==="CIMFixedColorRamp",o=i.interval||b.CIMGradientFill.interval;let e=w(r);return a&&(e=N(e,o)),n==="Discrete"||a?E(t,e,o):q(t,e)}let y;function K(t,i){const{colorRamp:r,gradientType:n}=i,a=w(r),o=r.type==="CIMFixedColorRamp";if(n==="Continuous"&&!o)return p(t,a);const e=i.interval??b.CIMGradientFill.interval;if(o)return p(t,N(a,e));const s=[];y??(y=document.createElement("canvas")),S(y,a,e,1,0);const h=y.getContext("2d").getImageData(0,0,e,1).data;for(let l=0,f=0;l<e;l++,f=4*l){const c=[h[f+0],h[f+1],h[f+2],h[f+3]];s.push({offset:l/e,color:c}),s.push({offset:(l+1)/e,color:c})}return p(t,s)}function w(t){const i=[];switch(t.type){case"CIMPolarContinuousColorRamp":case"CIMLinearContinuousColorRamp":{t.type==="CIMPolarContinuousColorRamp"&&v().warnOnce("CIMPolarContinuousColorRamp is currently unsupported. Falling back to CIMLinearContinuousColorRamp.");const r=t;i.push({offset:0,color:[r.fromColor[0],r.fromColor[1],r.fromColor[2],r.fromColor[3]/255]}),i.push({offset:1,color:[r.toColor[0],r.toColor[1],r.toColor[2],r.toColor[3]/255]});break}case"CIMFixedColorRamp":{const r=t,n=1/(r.colors.length-1);let a=0;for(const o of r.colors)i.push({offset:a,color:[o[0],o[1],o[2],o[3]/255]}),a+=n;break}case"CIMMultipartColorRamp":{const r=t,n=r.weights.reduce((o,e)=>o+e,0);let a=0;for(let o=0;o<r.colorRamps.length;o++){const e=r.colorRamps[o],s=r.weights[o],h=w(e);for(const l of h)i.push({offset:(a+l.offset*s)/n,color:l.color});a+=s}break}default:v().error(`Color ramp "${t.type}" currently unsupported.`)}return i}function N(t,i){const r=[],n=(t.length-1)/(i-1);for(let a=0;a<i;a++){const o=t[Math.round(a*n)].color;r.push({offset:a/i,color:o}),r.push({offset:(a+1)/i,color:o})}return r}function q(t,i){return S(t,i,L,1,I),k(t)}function E(t,i,r){return S(t,i,r,1,I),k(t)}function p(t,i,r=0){for(const{offset:n,color:a}of i)t.addColorStop(Math.min(Math.max(n,r),1-r),`rgba(${a[0]}, ${a[1]}, ${a[2]}, ${a[3]})`)}function S(t,i,r,n,a){const o=r+2*a;t.width=o,t.height=n;const e=(a+1)/o,s=t.getContext("2d",{willReadFrequently:!0});if(i.length>0){const h=s.createLinearGradient(0,0,o,n);p(h,i,e),s.fillStyle=h}else s.fillStyle="rgba(128, 128, 128, 1)";s.fillRect(0,0,o,n)}function k(t){const{width:i,height:r}=t,n=t.getContext("2d").getImageData(0,0,i,r),a=new Uint8Array(n.data);for(let o=0;o<a.length;o+=4){const e=a[o+3]/255;a[o]*=e,a[o+1]*=e,a[o+2]*=e}return[a,i,r]}function G(t){var a,o,e,s;const i=((o=(a=t[0])==null?void 0:a[0])==null?void 0:o[0])??0,r=((s=(e=t[0])==null?void 0:e[0])==null?void 0:s[1])??0,n={ymin:r,xmin:i,ymax:r,xmax:i,width:0,height:0};for(let h=0;h<t.length;h++){const l=t[h];for(let f=0;f<l.length;f++){const c=l[f][0],u=l[f][1];c<n.xmin&&(n.xmin=c),c>n.xmax&&(n.xmax=c),u<n.ymin&&(n.ymin=u),u>n.ymax&&(n.ymax=u)}}return n.width=Math.abs(n.xmax-n.xmin),n.height=Math.abs(n.ymax-n.ymin),n}function Q(t,i){const r=G(t),n=r.width===0?1:r.width,a=r.height===0?1:r.height,o=[];for(let e=0;e<t.length;e++){const s=t[e],h=[];for(let l=0;l<s.length;l++){let f=Math.round(s[l][0]-r.xmin),c=Math.round(s[l][1]-r.ymin);if(f=i.xmin+f*i.width/n,c=i.ymin+c*i.height/a,isNaN(f)||isNaN(c))throw new Error("Scaled shape has NaN values");h.push([f,c])}o.push(h)}return o}function X(t,i,r){const n=[];for(let a=0;a<t.length;a++){const o=t[a],e=[];for(let s=0;s<o.length;s++){const h=o[s][0]+i,l=o[s][1]+r;if(isNaN(h)||isNaN(l))throw new Error("Scaled shape has NaN values");e.push([h,l])}n.push(e)}return n}export{X as R,Q as T,U as c,V as e,O as f,J as g,W as m,K as p,x as t,j as u};
