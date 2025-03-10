import{hM as Q,aR as ta,hL as $e,gk as Ee,hT as oa,fP as Pa,cx as U,aE as $,mr as Ra,bZ as me,fe as ra,lJ as ne,aL as s,aM as be,aN as Fa,dL as oe,e4 as Da,e8 as je,eb as ja,e9 as Va,dZ as Ba,gV as Ha,io as Wa,iB as Ua,bt as qa,aT as E,bi as Ya,iJ as Za,nE as ka,iE as Ve,h_ as Be,at as Xa,aG as Ja,aB as Ka,cw as Te,cq as Qa,ct as He,aV as et,fN as at}from"./index-szNj1aqA.js";import{H as tt}from"./InterleavedLayout-D9ocgMqh.js";import{n as g,u as ee,t as We,o as we,r as ot}from"./ShaderOutput-DnYY5J1_.js";import{n as z,a as T,t as he}from"./NormalAttribute.glsl-Cwdzrqrw.js";import{aO as _e,aZ as h,z as ia,a_ as rt,a$ as it,b0 as G,b1 as nt,b2 as st,b3 as lt,D as se,p as ct,K as dt,q as ut,h as I,an as R,c as j,a2 as V,b4 as B,a4 as K,G as N,a6 as H,au as mt,a5 as ht,b5 as ft,ak as F,b6 as pt,J as na,as as sa,F as la,aX as ca,S as vt,P as ze,Q as fe,I as da,b7 as gt,i as le,aP as xt,T as bt,U as Me,R as re,m as ua,o as O,B as Oe,C as ce,l as Tt,b8 as wt,b9 as Mt,L as St,aa as yt,ba as ma,bb as ha,g as de,bc as fa,a3 as pa,a9 as va,a8 as ga,a7 as xa,H as ue,bd as ba,W as Ct,V as Ue,af as Nt,ag as Ot,ah as $t,ai as Et,ab as _t,ac as zt,ad as At,ae as It,aj as Gt,al as P,$ as d,v as Lt,A as Se,am as Pt,az as Rt,x as Ft,d as Dt,ao as jt,y as Vt,aJ as Bt}from"./VerticalOffset.glsl-Cr0Mwudg.js";import{i as A,B as Ae,g as Ie,b as qe,e as ae,n as pe,f as Ht}from"./renderState-ygD0POt3.js";import{e as b}from"./VertexAttribute-Cq4MnHjR.js";import{n as r,t as v}from"./glsl-BH37Aalp.js";import{a as Ge}from"./BindType-BBwFZqyN.js";import{i as ve}from"./ShaderBuilder-vfhyfMfS.js";import{e as Le,o as q}from"./mat3f64-q3fE-ZOt.js";import{o as Ye}from"./mat4f64-Dk4dwAN8.js";import"./boundedPlane-DF3TBfbG.js";import"./sphere-DTYho6l_.js";import{o as Wt,r as Ut}from"./doublePrecisionUtils-B0owpBza.js";function qt(a){a.vertex.code.add(r`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${r.int(z.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${r.int(z.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${r.int(z.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${r.int(z.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function Ko({normalTexture:a,metallicRoughnessTexture:e,metallicFactor:t,roughnessFactor:o,emissiveTexture:i,emissiveFactor:n,occlusionTexture:c}){return a==null&&e==null&&i==null&&(n==null||ta(n,$e))&&c==null&&(o==null||o===1)&&(t==null||t===1)}const Yt=Q(1,1,.5),Qo=Q(0,.6,.2),er=Q(0,1,.2);function Zt(a){const e=a.fragment.code;e.add(r`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.add(r`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.add(r`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function Pe(a,e){const t=a.fragment.code;a.include(_e),e.pbrMode!==h.Normal&&e.pbrMode!==h.Schematic&&e.pbrMode!==h.Simplified&&e.pbrMode!==h.TerrainWithWater||(t.add(r`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),t.add(r`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),e.pbrMode!==h.Normal&&e.pbrMode!==h.Schematic||(a.include(Zt),t.add(r`struct PBRShadingInfo
{
float NdotV;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),t.add(r`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),t.add(r`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),t.add(r`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}function ar(a,e){const t=a.fragment.code;a.include(_e),t.add(r`
  struct PBRShadingWater
  {
      float NdotL;   // cos angle between normal and light direction
      float NdotV;   // cos angle between normal and view direction
      float NdotH;   // cos angle between normal and half vector
      float VdotH;   // cos angle between view direction and half vector
      float LdotH;   // cos angle between light direction and half vector
      float VdotN;   // cos angle between view direction and normal vector
  };

  float dtrExponent = ${e.useCustomDTRExponentForWater?"2.2":"2.0"};
  `),t.add(r`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),t.add(r`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),t.add(r`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),t.add(r`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze) * strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}`)}const kt=3e5,Ze=5e5;function Ta(a){a.code.add(r`const float MAX_RGBA4_FLOAT =
15.0 / 16.0 +
15.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 / 16.0;
const vec4 FIXED_POINT_FACTORS_RGBA4 = vec4(1.0, 16.0, 16.0 * 16.0, 16.0 * 16.0 * 16.0);
vec4 floatToRgba4(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA4_FLOAT);
vec4 fixedPointU4 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS_RGBA4) * 16.0);
const float toU4AsFloat = 1.0 / 15.0;
return fixedPointU4 * toU4AsFloat;
}
const vec4 RGBA4_2_FLOAT_FACTORS = vec4(
15.0 / (16.0),
15.0 / (16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0 * 16.0)
);
float rgba4ToFloat(vec4 rgba) {
return dot(rgba, RGBA4_2_FLOAT_FACTORS);
}`)}let Xt=class extends ia{constructor(e,t,o){super(e,"mat4",Ge.Pass,(i,n,c)=>i.setUniformMatrix4fv(e,t(n,c)),o)}};function Jt(a,e){const t=a.fragment;switch(t.code.add(r`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),e.doubleSidedMode){case C.None:t.code.add(r`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case C.View:t.code.add(r`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case C.WindingOrder:t.code.add(r`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:Ee(e.doubleSidedMode);case C.COUNT:}}var C;(function(a){a[a.None=0]="None",a[a.View=1]="View",a[a.WindingOrder=2]="WindingOrder",a[a.COUNT=3]="COUNT"})(C||(C={}));function wa(a,e){switch(e.normalType){case T.Attribute:case T.Compressed:a.include(he,e),a.varyings.add("vNormalWorld","vec3"),a.varyings.add("vNormalView","vec3"),a.vertex.uniforms.add(new it("transformNormalGlobalFromModel",t=>t.transformNormalGlobalFromModel),new G("transformNormalViewFromGlobal",t=>t.transformNormalViewFromGlobal)),a.vertex.code.add(r`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case T.ScreenDerivative:a.vertex.code.add(r`void forwardNormal() {}`);break;default:Ee(e.normalType);case T.COUNT:}}let Kt=class extends rt{constructor(){super(...arguments),this.transformNormalViewFromGlobal=Le()}},Qt=class extends nt{constructor(){super(...arguments),this.transformNormalGlobalFromModel=Le(),this.toMapSpace=oa()}};function Ma(a){a.vertex.code.add(r`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}const ke=Le();function Sa(a,e){const t=e.hasModelTransformation,o=e.instancedDoublePrecision;t&&(a.vertex.uniforms.add(new st("model",n=>n.modelTransformation??Ye)),a.vertex.uniforms.add(new G("normalLocalOriginFromModel",n=>(Pa(ke,n.modelTransformation??Ye),ke)))),e.instanced&&o&&(a.attributes.add(b.INSTANCEMODELORIGINHI,"vec3"),a.attributes.add(b.INSTANCEMODELORIGINLO,"vec3"),a.attributes.add(b.INSTANCEMODEL,"mat3"),a.attributes.add(b.INSTANCEMODELNORMAL,"mat3"));const i=a.vertex;o&&(i.include(lt,e),i.uniforms.add(new se("viewOriginHi",n=>Wt(U(ie,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]),ie)),new se("viewOriginLo",n=>Ut(U(ie,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]),ie)))),i.code.add(r`
    vec3 getVertexInLocalOriginSpace() {
      return ${t?o?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":o?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${o?r`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),i.code.add(r`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${t?o?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":o?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),e.output===g.Normal&&(ct(i),i.code.add(r`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${t?o?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":o?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),e.hasVertexTangents&&i.code.add(r`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t?o?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":o?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const ie=$();function ya(a,e){e.hasSymbolColors?(a.include(qt),a.attributes.add(b.SYMBOLCOLOR,"vec4"),a.varyings.add("colorMixMode","mediump float"),a.vertex.code.add(r`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(a.fragment.uniforms.add(new dt("colorMixMode",t=>ut[t.colorMixMode])),a.vertex.code.add(r`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function eo(a,e){switch(e.output){case g.Shadow:case g.ShadowHighlight:case g.ShadowExcludeHighlight:case g.ViewshedShadow:a.fragment.include(Ta),a.fragment.code.add(r`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`)}}function W(a,e){ao(a,e,new I("textureAlphaCutoff",t=>t.textureAlphaCutoff))}function ao(a,e,t){const o=a.fragment,i=e.alphaDiscardMode,n=i===A.Blend;i!==A.Mask&&i!==A.MaskBlend||o.uniforms.add(t),o.code.add(r`
    void discardOrAdjustAlpha(inout vec4 color) {
      ${i===A.Opaque?"color.a = 1.0;":`if (color.a < ${n?r.float(R):"textureAlphaCutoff"}) {
              discard;
             } ${v(i===A.Mask,"else { color.a = 1.0; }")}`}
    }
  `)}function Ca(a,e){const{vertex:t,fragment:o}=a,i=e.hasColorTexture&&e.alphaDiscardMode!==A.Opaque,{output:n,normalType:c,hasColorTextureTransform:m}=e;switch(n){case g.Depth:j(t,e),a.include(V,e),a.fragment.include(H,e),a.include(B,e),i&&o.uniforms.add(new N("tex",u=>u.texture)),t.main.add(r`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),a.include(W,e),o.main.add(r`
        discardBySlice(vpos);
        ${v(i,r`vec4 texColor = texture(tex, ${m?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}`);break;case g.Shadow:case g.ShadowHighlight:case g.ShadowExcludeHighlight:case g.ViewshedShadow:case g.ObjectAndLayerIdColor:j(t,e),a.include(V,e),a.include(B,e),a.include(K,e),a.include(eo,e),a.fragment.include(H,e),a.include(ht,e),ft(a),a.varyings.add("depth","float"),i&&o.uniforms.add(new N("tex",u=>u.texture)),t.main.add(r`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),a.include(W,e),o.main.add(r`
        discardBySlice(vpos);
        ${v(i,r`vec4 texColor = texture(tex, ${m?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        ${n===g.ObjectAndLayerIdColor?r`outputObjectAndLayerIdColor();`:r`outputDepth(depth);`}`);break;case g.Normal:{j(t,e),a.include(V,e),a.include(he,e),a.include(wa,e),a.include(B,e),a.include(K,e),i&&o.uniforms.add(new N("tex",p=>p.texture)),c===T.ScreenDerivative&&a.varyings.add("vPositionView","vec3");const u=c===T.Attribute||c===T.Compressed;t.main.add(r`
        vpos = getVertexInLocalOriginSpace();
        ${u?r`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:r`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();`),a.fragment.include(H,e),a.include(W,e),o.main.add(r`
        discardBySlice(vpos);
        ${v(i,r`vec4 texColor = texture(tex, ${m?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}

        ${c===T.ScreenDerivative?r`vec3 normal = screenDerivativeNormal(vPositionView);`:r`vec3 normal = normalize(vNormalWorld);
                    if (gl_FrontFacing == false){
                      normal = -normal;
                    }`}
        fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case g.Highlight:j(t,e),a.include(V,e),a.include(B,e),a.include(K,e),i&&o.uniforms.add(new N("tex",u=>u.texture)),t.main.add(r`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),a.fragment.include(H,e),a.include(W,e),a.include(mt,e),o.main.add(r`
        discardBySlice(vpos);
        ${v(i,r`vec4 texColor = texture(tex, ${m?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        calculateOcclusionAndOutputHighlight();`)}}function to(a,e){const t=a.fragment;e.hasVertexTangents?(a.attributes.add(b.TANGENT,"vec4"),a.varyings.add("vTangent","vec4"),e.doubleSidedMode===C.WindingOrder?t.code.add(r`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):t.code.add(r`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):t.code.add(r`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),e.textureCoordinateType!==F.None&&(a.include(pt,e),t.uniforms.add(e.bindType===Ge.Pass?new N("normalTexture",o=>o.textureNormal):new na("normalTexture",o=>o.textureNormal)),e.hasNormalTextureTransform&&(t.uniforms.add(new sa("scale",o=>o.scale??Ra)),t.uniforms.add(new G("normalTextureTransformMatrix",o=>o.normalTextureTransformMatrix??q))),t.code.add(r`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),e.hasNormalTextureTransform&&t.code.add(r`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),t.code.add(r`return tangentSpace * rawNormal;
}`))}const ye=4;function Na(){const a=new ve,e=a.fragment;a.include(la);const t=(ye+1)/2,o=1/(2*t*t);return e.include(ca),e.uniforms.add(new N("depthMap",i=>i.depthTexture),new na("tex",i=>i.colorTexture),new vt("blurSize",i=>i.blurSize),new I("projScale",(i,n)=>{const c=n.camera.distance;return c>5e4?Math.max(0,i.projScale-(c-5e4)):i.projScale})),e.code.add(r`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${r.float(o)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),a.outputs.add("fragBlur","float"),e.main.add(r`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${r.int(ye)}; r <= ${r.int(ye)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),a}const oo=Object.freeze(Object.defineProperty({__proto__:null,build:Na},Symbol.toStringTag,{value:"Module"}));let Xe=class extends ze{constructor(e,t){super(e,t,new fe(oo,()=>me(()=>Promise.resolve().then(()=>Io),void 0)))}initializePipeline(){return Ae({colorWrite:Ie})}};const ro="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";class io extends da{constructor(){super(...arguments),this.projScale=1}}let no=class extends io{constructor(){super(...arguments),this.intensity=1}};class so extends da{}class lo extends so{constructor(){super(...arguments),this.blurSize=ra()}}const Je=16;function Oa(){const a=new ve,e=a.fragment;return a.include(la),a.include(gt),e.include(ca),e.uniforms.add(new le("radius",t=>ge(t.camera))).code.add(r`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),e.code.add(r`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),e.uniforms.add(new N("normalMap",t=>t.normalTexture),new N("depthMap",t=>t.depthTexture),new I("projScale",t=>t.projScale),new N("rnm",t=>t.noiseTexture),new sa("rnmScale",(t,o)=>ne(Ke,o.camera.fullWidth/t.noiseTexture.descriptor.width,o.camera.fullHeight/t.noiseTexture.descriptor.height)),new I("intensity",t=>t.intensity),new xt("screenSize",t=>ne(Ke,t.camera.fullWidth,t.camera.fullHeight))),a.outputs.add("fragOcclusion","float"),e.main.add(r`
      float depth = depthFromTexture(depthMap, uv);

      // Early out if depth is out of range, such as in the sky
      if (depth >= 1.0 || depth <= 0.0) {
        fragOcclusion = 1.0;
        return;
      }

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      if(norm4.a != 1.0) {
        fragOcclusion = 1.0;
        return;
      }
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;

      float currentPixelDepth = linearizeDepth(depth);
      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      float sum = 0.0;
      vec3 tapPixelPos;

      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${r.int(Je)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        // don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap);

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${r.int(Je)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A * A * A * A) / 2.2;

      fragOcclusion = A;`),a}function ge(a){return Math.max(10,20*a.computeScreenPixelSizeAtDist(Math.abs(4*a.relativeElevation)))}const Ke=ra(),co=Object.freeze(Object.defineProperty({__proto__:null,build:Oa,getRadius:ge},Symbol.toStringTag,{value:"Module"}));let Qe=class extends ze{constructor(e,t){super(e,t,new fe(co,()=>me(()=>Promise.resolve().then(()=>Go),void 0)))}initializePipeline(){return Ae({colorWrite:Ie})}};const J=2;let X=class extends bt{constructor(a){super(a),this.consumes={required:["normals"]},this.produces=Me.SSAO,this.isEnabled=()=>!1,this._enableTime=oe(0),this._passParameters=new no,this._drawParameters=new lo}initialize(){const a=Uint8Array.from(atob(ro),t=>t.charCodeAt(0)),e=new Da;e.wrapMode=je.CLAMP_TO_EDGE,e.pixelFormat=ja.RGB,e.wrapMode=je.REPEAT,e.hasMipmap=!0,e.width=32,e.height=32,this._passParameters.noiseTexture=new Va(this.renderingContext,e,a),this.techniques.precompile(Qe),this.techniques.precompile(Xe),this.addHandles(Ba(()=>this.isEnabled(),()=>this._enableTime=oe(0)))}destroy(){this._passParameters.noiseTexture=Ha(this._passParameters.noiseTexture)}render(a){const e=this.bindParameters,t=a.find(({name:y})=>y==="normals"),o=t==null?void 0:t.getTexture(),i=t==null?void 0:t.getTexture(Wa),n=this.fboCache,c=e.camera,m=c.fullViewport[2],u=c.fullViewport[3],p=Math.round(m/J),x=Math.round(u/J),w=this.techniques.get(Qe),M=this.techniques.get(Xe);if(!w.compiled||!M.compiled)return this._enableTime=oe(performance.now()),this.requestRender(qe.UPDATE),n.acquire(p,x,Me.SSAO,re.RED);this._enableTime===0&&(this._enableTime=oe(performance.now()));const f=this.renderingContext,L=this.view.qualitySettings.fadeDuration,S=c.relativeElevation,te=qa((Ze-S)/(Ze-kt),0,1),Y=L>0?Math.min(L,performance.now()-this._enableTime)/L:1,xe=Y*te;this._passParameters.normalTexture=o,this._passParameters.depthTexture=i,this._passParameters.projScale=1/c.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*uo/ge(c)**6*xe;const Z=n.acquire(m,u,"ssao input",re.RG);f.bindFramebuffer(Z.fbo),f.setViewport(0,0,m,u),f.bindTechnique(w,e,this._passParameters,this._drawParameters),f.screen.draw();const k=n.acquire(p,x,"ssao blur",re.RED);f.bindFramebuffer(k.fbo),this._drawParameters.colorTexture=Z.getTexture(),ne(this._drawParameters.blurSize,0,J/u),f.bindTechnique(M,e,this._passParameters,this._drawParameters),f.setViewport(0,0,p,x),f.screen.draw(),Z.release();const D=n.acquire(p,x,Me.SSAO,re.RED);return f.bindFramebuffer(D.fbo),f.setViewport(0,0,m,u),f.setClearColor(1,1,1,0),f.clear(Ua.COLOR),this._drawParameters.colorTexture=k.getTexture(),ne(this._drawParameters.blurSize,J/m,0),f.bindTechnique(M,e,this._passParameters,this._drawParameters),f.setViewport(0,0,p,x),f.screen.draw(),f.setViewport4fv(c.fullViewport),k.release(),Y<1&&this.requestRender(qe.UPDATE),D}};s([be()],X.prototype,"consumes",void 0),s([be()],X.prototype,"produces",void 0),s([be({constructOnly:!0})],X.prototype,"isEnabled",void 0),X=s([Fa("esri.views.3d.webgl-engine.effects.ssao.SSAO")],X);const uo=.5;function Re(a,e){const t=a.fragment;e.receiveAmbientOcclusion?(t.uniforms.add(new ua("ssaoTex",o=>{var i;return(i=o.ssao)==null?void 0:i.getTexture()})),t.constants.add("blurSizePixelsInverse","float",1/J),t.code.add(r`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):t.code.add(r`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function mo(a,e){const t=a.fragment,o=e.lightingSphericalHarmonicsOrder!==void 0?e.lightingSphericalHarmonicsOrder:2;o===0?(t.uniforms.add(new se("lightingAmbientSH0",({lighting:i})=>U(ea,i.sh.r[0],i.sh.g[0],i.sh.b[0]))),t.code.add(r`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):o===1?(t.uniforms.add(new O("lightingAmbientSH_R",({lighting:i})=>E(_,i.sh.r[0],i.sh.r[1],i.sh.r[2],i.sh.r[3])),new O("lightingAmbientSH_G",({lighting:i})=>E(_,i.sh.g[0],i.sh.g[1],i.sh.g[2],i.sh.g[3])),new O("lightingAmbientSH_B",({lighting:i})=>E(_,i.sh.b[0],i.sh.b[1],i.sh.b[2],i.sh.b[3]))),t.code.add(r`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):o===2&&(t.uniforms.add(new se("lightingAmbientSH0",({lighting:i})=>U(ea,i.sh.r[0],i.sh.g[0],i.sh.b[0])),new O("lightingAmbientSH_R1",({lighting:i})=>E(_,i.sh.r[1],i.sh.r[2],i.sh.r[3],i.sh.r[4])),new O("lightingAmbientSH_G1",({lighting:i})=>E(_,i.sh.g[1],i.sh.g[2],i.sh.g[3],i.sh.g[4])),new O("lightingAmbientSH_B1",({lighting:i})=>E(_,i.sh.b[1],i.sh.b[2],i.sh.b[3],i.sh.b[4])),new O("lightingAmbientSH_R2",({lighting:i})=>E(_,i.sh.r[5],i.sh.r[6],i.sh.r[7],i.sh.r[8])),new O("lightingAmbientSH_G2",({lighting:i})=>E(_,i.sh.g[5],i.sh.g[6],i.sh.g[7],i.sh.g[8])),new O("lightingAmbientSH_B2",({lighting:i})=>E(_,i.sh.b[5],i.sh.b[6],i.sh.b[7],i.sh.b[8]))),t.code.add(r`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),e.pbrMode!==h.Normal&&e.pbrMode!==h.Schematic||t.code.add(r`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const ea=$(),_=oa();function Fe(a){a.constants.add("ambientBoostFactor","float",Mt)}function De(a){a.uniforms.add(new le("lightingGlobalFactor",e=>e.lighting.globalFactor))}function $a(a,e){const t=a.fragment;switch(a.include(Re,e),e.pbrMode!==h.Disabled&&a.include(Pe,e),a.include(mo,e),a.include(_e),t.code.add(r`
    const float GAMMA_SRGB = ${r.float(Ya)};
    const float INV_GAMMA_SRGB = 0.4761904;
    ${e.pbrMode===h.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),Fe(t),De(t),Oe(t),t.code.add(r`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${e.spherical?r`normalize(vPosWorld)`:r`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),ce(t),t.code.add(r`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),e.pbrMode){case h.Disabled:case h.WaterOnIntegratedMesh:case h.Water:a.include(wt),t.code.add(r`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case h.Normal:case h.Schematic:t.code.add(r`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec4 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),t.code.add(r`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),e.useFillLights?t.uniforms.add(new Tt("hasFillLights",o=>o.enableFillLights)):t.constants.add("hasFillLights","bool",!1),t.code.add(r`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
float NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
vec3 mainLightIrradianceComponent = NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),t.uniforms.add(new le("lightingSpecularStrength",o=>o.lighting.mainLight.specularStrength),new le("lightingEnvironmentStrength",o=>o.lighting.mainLight.environmentStrength)).code.add(r`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
float NdotH = clamp(dot(normal, h), 0.0, 1.0);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),t.code.add(r`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission.rgb == vec3(0.0) ? _emission.rgb : pow(_emission.rgb, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${e.pbrMode!==h.Schematic||e.hasColorTexture?r`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:r`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case h.Simplified:case h.TerrainWithWater:Oe(t),ce(t),t.code.add(r`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:Ee(e.pbrMode);case h.COUNT:}}let ho=class extends ia{constructor(e,t,o){super(e,"mat4",Ge.Draw,(i,n,c,m)=>i.setUniformMatrix4fv(e,t(n,c,m)),o)}};function Ea(a,e){e.receiveShadows&&(a.fragment.uniforms.add(new Xt("shadowMapMatrix",(t,o)=>o.shadowMap.getShadowMapMatrices(t.origin),4)),za(a))}function _a(a,e){e.receiveShadows&&(a.fragment.uniforms.add(new ho("shadowMapMatrix",(t,o)=>o.shadowMap.getShadowMapMatrices(t.origin),4)),za(a))}function za(a){const e=a.fragment;e.include(Ta),e.uniforms.add(new ua("shadowMap",t=>t.shadowMap.depthTexture),new St("numCascades",t=>t.shadowMap.numCascades),new O("cascadeDistances",t=>t.shadowMap.cascadeDistances)).code.add(r`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMap, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMap);
}`)}function fo(a,e){e.hasColorTextureTransform?(a.varyings.add("colorUV","vec2"),a.vertex.uniforms.add(new G("colorTextureTransformMatrix",t=>t.colorTextureTransformMatrix??q)).code.add(r`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):a.vertex.code.add(r`void forwardColorUV(){}`)}function po(a,e){e.hasNormalTextureTransform&&e.textureCoordinateType!==F.None?(a.varyings.add("normalUV","vec2"),a.vertex.uniforms.add(new G("normalTextureTransformMatrix",t=>t.normalTextureTransformMatrix??q)).code.add(r`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):a.vertex.code.add(r`void forwardNormalUV(){}`)}function vo(a,e){e.hasEmissionTextureTransform&&e.textureCoordinateType!==F.None?(a.varyings.add("emissiveUV","vec2"),a.vertex.uniforms.add(new G("emissiveTextureTransformMatrix",t=>t.emissiveTextureTransformMatrix??q)).code.add(r`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):a.vertex.code.add(r`void forwardEmissiveUV(){}`)}function go(a,e){e.hasOcclusionTextureTransform&&e.textureCoordinateType!==F.None?(a.varyings.add("occlusionUV","vec2"),a.vertex.uniforms.add(new G("occlusionTextureTransformMatrix",t=>t.occlusionTextureTransformMatrix??q)).code.add(r`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):a.vertex.code.add(r`void forwardOcclusionUV(){}`)}function xo(a,e){e.hasMetallicRoughnessTextureTransform&&e.textureCoordinateType!==F.None?(a.varyings.add("metallicRoughnessUV","vec2"),a.vertex.uniforms.add(new G("metallicRoughnessTextureTransformMatrix",t=>t.metallicRoughnessTextureTransformMatrix??q)).code.add(r`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):a.vertex.code.add(r`void forwardMetallicRoughnessUV(){}`)}function Aa(a){a.include(yt),a.code.add(r`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${r.int(z.Multiply)}) {
        return allMixed;
      }
      if (mode == ${r.int(z.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${r.int(z.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${r.int(z.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${r.int(z.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}function Ia(a){const e=new ve,{vertex:t,fragment:o,varyings:i}=e,{output:n,normalType:c,offsetBackfaces:m,instancedColor:u,spherical:p,receiveShadows:x,snowCover:w,pbrMode:M,textureAlphaPremultiplied:f,instancedDoublePrecision:L,hasVertexColors:S,hasVertexTangents:te,hasColorTexture:Y,hasNormalTexture:xe,hasNormalTextureTransform:Z,hasColorTextureTransform:k}=a;if(j(t,a),e.include(ma),i.add("vpos","vec3"),e.include(K,a),e.include(Sa,a),e.include(ha,a),e.include(fo,a),!ee(n))return e.include(Ca,a),e;e.include(po,a),e.include(vo,a),e.include(go,a),e.include(xo,a),de(t,a),e.include(he,a),e.include(V,a);const D=c===T.Attribute||c===T.Compressed;return D&&m&&e.include(Ma),e.include(to,a),e.include(wa,a),u&&e.attributes.add(b.INSTANCECOLOR,"vec4"),i.add("vPositionLocal","vec3"),e.include(B,a),e.include(fa,a),e.include(ya,a),e.include(pa,a),t.uniforms.add(new va("externalColor",y=>y.externalColor)),i.add("vcolorExt","vec4"),e.include(ga,a),t.main.add(r`
    forwardNormalizedVertexColor();
    vcolorExt = externalColor;
    ${v(u,"vcolorExt *= instanceColor * 0.003921568627451;")}
    vcolorExt *= vvColor();
    vcolorExt *= getSymbolColor();
    forwardColorMixMode();

    vpos = getVertexInLocalOriginSpace();
    vPositionLocal = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    ${v(D,"vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
    vpos = addVerticalOffset(vpos, localOrigin);
    ${v(te,"vTangent = dpTransformVertexTangent(tangent);")}
    gl_Position = transformPosition(proj, view, vpos);
    ${v(D&&m,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}

    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    forwardLinearDepth();
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();

    if (vcolorExt.a < ${r.float(R)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    }
  `),e.include($a,a),e.include(Re,a),e.include(W,a),e.include(L?Ea:_a,a),e.fragment.include(H,a),e.include(xa,a),de(o,a),o.uniforms.add(t.uniforms.get("localOrigin"),new ue("ambient",y=>y.ambient),new ue("diffuse",y=>y.diffuse),new I("opacity",y=>y.opacity),new I("layerOpacity",y=>y.layerOpacity)),Y&&o.uniforms.add(new N("tex",y=>y.texture)),e.include(ba,a),e.include(Pe,a),o.include(Aa),e.include(Jt,a),Fe(o),De(o),ce(o),o.main.add(r`
    discardBySlice(vpos);
    discardByTerrainDepth();
    ${Y?r`
            vec4 texColor = texture(tex, ${k?"colorUV":"vuv0"});
            ${v(f,"texColor.rgb /= texColor.a;")}
            discardOrAdjustAlpha(texColor);`:r`vec4 texColor = vec4(1.0);`}
    shadingParams.viewDirection = normalize(vpos - cameraPosition);
    ${c===T.ScreenDerivative?r`vec3 normal = screenDerivativeNormal(vPositionLocal);`:r`shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

    vec3 posWorld = vpos + localOrigin;

      float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
      float shadow = ${x?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":v(p,"lightingGlobalFactor * (1.0 - additionalAmbientScale)","0.0")};

    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(${v(S,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
    float opacity_ = layerOpacity * mixExternalOpacity(${v(S,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, int(colorMixMode));
    ${xe?`mat3 tangentSpace = computeTangentSpace(${te?"normal":"normal, vpos, vuv0"});
            vec3 shadingNormal = computeTextureNormal(tangentSpace, ${Z?"normalUV":"vuv0"});`:"vec3 shadingNormal = normal;"}
    vec3 normalGround = ${p?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

    ${v(w,r`
          float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
          albedo = mix(albedo, vec3(1), snow);
          shadingNormal = mix(shadingNormal, normal, snow);
          ssao = mix(ssao, 1.0, snow);`)}

    vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

    ${M===h.Normal||M===h.Schematic?r`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${v(w,r`mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);`)}
            vec4 emission = ${w?"mix(getEmissions(), vec4(0.0), snow)":"getEmissions()"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:r`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
    vec4 finalColor = vec4(shadedColor, opacity_);
    outputColorHighlightOID(finalColor, vpos);
  `),e}const bo=Object.freeze(Object.defineProperty({__proto__:null,build:Ia},Symbol.toStringTag,{value:"Module"}));let To=class extends Kt{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=Yt,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=ae.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=$e,this.instancedDoublePrecision=!1,this.normalType=T.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.ambient=Q(.2,.2,.2),this.diffuse=Q(.8,.8,.8),this.externalColor=Za(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=$(),this.hasSlicePlane=!1,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=pe.Less,this.textureAlphaMode=A.Blend,this.textureAlphaCutoff=R,this.textureAlphaPremultiplied=!1,this.renderOccluded=Ct.Occlude,this.isDecoration=!1}};class dr extends Qt{constructor(){super(...arguments),this.origin=$(),this.slicePlaneLocalOrigin=this.origin}}let Ga=class extends ze{constructor(e,t,o=new fe(bo,()=>me(()=>Promise.resolve().then(()=>Lo),void 0))){super(e,t,o),this.type="DefaultMaterialTechnique"}_makePipeline(e,t){const{oitPass:o,output:i,transparent:n,cullFace:c,customDepthTest:m,hasOccludees:u,enableOffset:p}=e,x=o===Ue.NONE,w=o===Ue.FrontFace;return Ae({blending:ee(i)&&n?Et(o):null,culling:Mo(e)?Ht(c):null,depthTest:{func:$t(o,wo(m))},depthWrite:Ot(e),drawBuffers:i===g.Depth?{buffers:[ka.NONE]}:Nt(o,i),colorWrite:Ie,stencilWrite:u?It:null,stencilTest:u?t?zt:At:null,polygonOffset:x||w?null:_t(p)})}initializePipeline(e){return this._occludeePipelineState=this._makePipeline(e,!0),this._makePipeline(e,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}};function wo(a){return a===pe.Lequal?Ve.LEQUAL:Ve.LESS}function Mo(a){return a.cullFace!==ae.None||!a.hasSlicePlane&&!a.transparent&&!a.doubleSidedMode}class l extends Gt{constructor(e,t){super(),this.spherical=e,this.doublePrecisionRequiresObfuscation=t,this.alphaDiscardMode=A.Opaque,this.doubleSidedMode=C.None,this.pbrMode=h.Disabled,this.cullFace=ae.None,this.normalType=T.Attribute,this.customDepthTest=pe.Less,this.emissionSource=P.None,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1,this.occlusionPass=!1,this.hasVvInstancing=!0,this.useCustomDTRExponentForWater=!1,this.useFillLights=!0}get textureCoordinateType(){return this.hasColorTexture||this.hasMetallicRoughnessTexture||this.emissionSource===P.Texture||this.hasOcclusionTexture||this.hasNormalTexture?F.Default:F.None}get objectAndLayerIdColorInstanced(){return this.instanced}get discardInvisibleFragments(){return this.transparent}}s([d({count:A.COUNT})],l.prototype,"alphaDiscardMode",void 0),s([d({count:C.COUNT})],l.prototype,"doubleSidedMode",void 0),s([d({count:h.COUNT})],l.prototype,"pbrMode",void 0),s([d({count:ae.COUNT})],l.prototype,"cullFace",void 0),s([d({count:T.COUNT})],l.prototype,"normalType",void 0),s([d({count:pe.COUNT})],l.prototype,"customDepthTest",void 0),s([d({count:P.COUNT})],l.prototype,"emissionSource",void 0),s([d()],l.prototype,"hasVertexColors",void 0),s([d()],l.prototype,"hasSymbolColors",void 0),s([d()],l.prototype,"hasVerticalOffset",void 0),s([d()],l.prototype,"hasColorTexture",void 0),s([d()],l.prototype,"hasMetallicRoughnessTexture",void 0),s([d()],l.prototype,"hasOcclusionTexture",void 0),s([d()],l.prototype,"hasNormalTexture",void 0),s([d()],l.prototype,"hasScreenSizePerspective",void 0),s([d()],l.prototype,"hasVertexTangents",void 0),s([d()],l.prototype,"hasOccludees",void 0),s([d()],l.prototype,"hasModelTransformation",void 0),s([d()],l.prototype,"offsetBackfaces",void 0),s([d()],l.prototype,"vvSize",void 0),s([d()],l.prototype,"vvColor",void 0),s([d()],l.prototype,"receiveShadows",void 0),s([d()],l.prototype,"receiveAmbientOcclusion",void 0),s([d()],l.prototype,"textureAlphaPremultiplied",void 0),s([d()],l.prototype,"instanced",void 0),s([d()],l.prototype,"instancedColor",void 0),s([d()],l.prototype,"writeDepth",void 0),s([d()],l.prototype,"transparent",void 0),s([d()],l.prototype,"enableOffset",void 0),s([d()],l.prototype,"terrainDepthTest",void 0),s([d()],l.prototype,"cullAboveTerrain",void 0),s([d()],l.prototype,"snowCover",void 0),s([d()],l.prototype,"hasColorTextureTransform",void 0),s([d()],l.prototype,"hasEmissionTextureTransform",void 0),s([d()],l.prototype,"hasNormalTextureTransform",void 0),s([d()],l.prototype,"hasOcclusionTextureTransform",void 0),s([d()],l.prototype,"hasMetallicRoughnessTextureTransform",void 0);function La(a){const e=new ve,{vertex:t,fragment:o,varyings:i}=e,{output:n,offsetBackfaces:c,instancedColor:m,pbrMode:u,snowCover:p,spherical:x}=a,w=u===h.Normal||u===h.Schematic;if(j(t,a),e.include(ma),i.add("vpos","vec3"),e.include(K,a),e.include(Sa,a),e.include(ha,a),e.include(ga,a),ee(n)&&(de(e.vertex,a),e.include(he,a),e.include(V,a),c&&e.include(Ma),m&&e.attributes.add(b.INSTANCECOLOR,"vec4"),i.add("vNormalWorld","vec3"),i.add("localvpos","vec3"),e.include(B,a),e.include(fa,a),e.include(ya,a),e.include(pa,a),t.uniforms.add(new va("externalColor",M=>M.externalColor)),i.add("vcolorExt","vec4"),t.main.add(r`
      forwardNormalizedVertexColor();
      vcolorExt = externalColor;
      ${v(m,"vcolorExt *= instanceColor * 0.003921568627451;")}
      vcolorExt *= vvColor();
      vcolorExt *= getSymbolColor();
      forwardColorMixMode();

      bool alphaCut = vcolorExt.a < ${r.float(R)};
      vpos = getVertexInLocalOriginSpace();
      localvpos = vpos - view[3].xyz;
      vpos = subtractOrigin(vpos);
      vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
      vpos = addVerticalOffset(vpos, localOrigin);
      vec4 basePosition = transformPosition(proj, view, vpos);

      forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
      forwardLinearDepth();
      forwardTextureCoordinates();

      gl_Position = alphaCut ? vec4(1e38, 1e38, 1e38, 1.0) :
      ${v(c,"offsetBackfacingClipPosition(basePosition, vpos, vNormalWorld, cameraPosition);","basePosition;")}
    `)),ee(n)){const{hasColorTexture:M,hasColorTextureTransform:f,receiveShadows:L}=a;e.include($a,a),e.include(Re,a),e.include(W,a),e.include(a.instancedDoublePrecision?Ea:_a,a),e.fragment.include(H,a),e.include(xa,a),de(e.fragment,a),Oe(o),Fe(o),De(o),o.uniforms.add(t.uniforms.get("localOrigin"),t.uniforms.get("view"),new ue("ambient",S=>S.ambient),new ue("diffuse",S=>S.diffuse),new I("opacity",S=>S.opacity),new I("layerOpacity",S=>S.layerOpacity)),M&&o.uniforms.add(new N("tex",S=>S.texture)),e.include(ba,a),e.include(Pe,a),o.include(Aa),ce(o),o.main.add(r`
      discardBySlice(vpos);
      discardByTerrainDepth();
      vec4 texColor = ${M?`texture(tex, ${f?"colorUV":"vuv0"})`:" vec4(1.0)"};
      ${v(M,`${v(a.textureAlphaPremultiplied,"texColor.rgb /= texColor.a;")}
        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = ${L?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":x?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};
      vec3 matColor = max(ambient, diffuse);
      ${a.hasVertexColors?r`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:r`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
      ${v(p,"albedo = mix(albedo, vec3(1), 0.9);")}
      ${r`vec3 shadingNormal = normalize(vNormalWorld);
             albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}
      ${v(w,`vec3 normalGround = ${x?"normalize(vpos + localOrigin)":"vec3(0.0, 0.0, 1.0)"};`)}
      ${w?r`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                 ${v(p,r`mrr = vec3(0.0, 1.0, 0.04);`)}
            vec4 emission = ${p?"vec4(0.0)":"getEmissions()"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:r`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);`)}return e.include(Ca,a),e}const So=Object.freeze(Object.defineProperty({__proto__:null,build:La},Symbol.toStringTag,{value:"Module"}));class yo extends Ga{constructor(e,t){super(e,t,new fe(So,()=>me(()=>Promise.resolve().then(()=>Po),void 0))),this.type="RealisticTreeTechnique"}}class mr extends Lt{constructor(e,t){super(e,No),this.materialType="default",this.supportsEdges=!0,this.produces=new Map([[Se.OPAQUE_MATERIAL,o=>(We(o)||we(o))&&!this.parameters.transparent],[Se.TRANSPARENT_MATERIAL,o=>(We(o)||we(o))&&this.parameters.transparent&&this.parameters.writeDepth],[Se.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,o=>(ot(o)||we(o))&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._vertexBufferLayout=$o(this.parameters),this._configuration=new l(t.spherical,t.doublePrecisionRequiresObfuscation)}isVisibleForOutput(e){return e!==g.Shadow&&e!==g.ShadowExcludeHighlight&&e!==g.ShadowHighlight||this.parameters.castShadows}get visible(){const e=this.parameters;if(e.layerOpacity<R)return!1;const{hasInstancedColor:t,hasVertexColors:o,hasSymbolColors:i,vvColor:n}=e,c=t||n||i,m=e.colorMixMode==="replace",u=e.opacity>=R;if(o&&c)return m||u;const p=e.externalColor&&e.externalColor[3]>=R;return o?m?p:u:c?m||u:m?p:u}get hasEmissions(){return!!this.parameters.emissiveTextureId||!ta(this.parameters.emissiveFactor,$e)}getConfiguration(e,t){const o=this.parameters,{treeRendering:i,doubleSided:n,doubleSidedType:c}=o;return this._configuration.output=e,this._configuration.hasNormalTexture=!i&&!!o.normalTextureId,this._configuration.hasColorTexture=!!o.textureId,this._configuration.hasVertexTangents=!i&&o.hasVertexTangents,this._configuration.instanced=o.isInstanced,this._configuration.instancedDoublePrecision=o.instancedDoublePrecision,this._configuration.vvSize=!!o.vvSize,this._configuration.hasVerticalOffset=o.verticalOffset!=null,this._configuration.hasScreenSizePerspective=o.screenSizePerspective!=null,this._configuration.hasSlicePlane=o.hasSlicePlane,this._configuration.alphaDiscardMode=o.textureAlphaMode,this._configuration.normalType=i?T.Attribute:o.normalType,this._configuration.transparent=o.transparent,this._configuration.writeDepth=o.writeDepth,o.customDepthTest!=null&&(this._configuration.customDepthTest=o.customDepthTest),this._configuration.hasOccludees=t.hasOccludees,this._configuration.cullFace=o.hasSlicePlane?ae.None:o.cullFace,this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration.hasModelTransformation=!i&&o.modelTransformation!=null,this._configuration.hasVertexColors=o.hasVertexColors,this._configuration.hasSymbolColors=o.hasSymbolColors,this._configuration.doubleSidedMode=i?C.WindingOrder:n&&c==="normal"?C.View:n&&c==="winding-order"?C.WindingOrder:C.None,this._configuration.instancedColor=o.hasInstancedColor,ee(e)?(this._configuration.terrainDepthTest=t.terrainDepthTest,this._configuration.receiveShadows=o.receiveShadows,this._configuration.receiveAmbientOcclusion=o.receiveAmbientOcclusion&&t.ssao!=null):(this._configuration.terrainDepthTest=!1,this._configuration.receiveShadows=this._configuration.receiveAmbientOcclusion=!1),this._configuration.vvColor=!!o.vvColor,this._configuration.textureAlphaPremultiplied=!!o.textureAlphaPremultiplied,this._configuration.pbrMode=o.usePBR?o.isSchematic?h.Schematic:h.Normal:h.Disabled,this._configuration.hasMetallicRoughnessTexture=!i&&!!o.metallicRoughnessTextureId,this._configuration.emissionSource=i?P.None:o.emissiveTextureId!=null?P.Texture:o.usePBR?P.Value:P.None,this._configuration.hasOcclusionTexture=!i&&!!o.occlusionTextureId,this._configuration.offsetBackfaces=!(!o.transparent||!o.offsetTransparentBackfaces),this._configuration.oitPass=t.oitPass,this._configuration.enableOffset=t.camera.relativeElevation<Pt,this._configuration.snowCover=Oo(t),this._configuration.hasColorTextureTransform=!!o.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!o.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!o.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!o.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!o.metallicRoughnessTextureTransformMatrix,this._configuration}intersect(e,t,o,i,n,c){if(this.parameters.verticalOffset!=null){const m=o.camera;U(Ne,t[12],t[13],t[14]);let u=null;switch(o.viewingMode){case Be.Global:u=Ka(aa,Ne);break;case Be.Local:u=Xa(aa,zo)}let p=0;const x=Te(Ao,Ne,m.eye),w=Qa(x),M=He(x,x,1/w);let f=null;this.parameters.screenSizePerspective&&(f=et(u,M)),p+=Rt(m,w,this.parameters.verticalOffset,f??0,this.parameters.screenSizePerspective),He(u,u,p),at(Ce,u,o.transform.inverseRotation),i=Te(Eo,i,Ce),n=Te(_o,n,Ce)}Ft(e,o,i,n,Dt(o.verticalOffset),c)}createGLMaterial(e){return new Co(e)}createBufferWriter(){return new jt(this._vertexBufferLayout)}}class Co extends Bt{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){this._material.setParameters({receiveShadows:e.shadowMap.enabled});const t=this._material.parameters;this.updateTexture(t.textureId);const o=e.camera.viewInverseTransposeMatrix;return U(t.origin,o[3],o[7],o[11]),this._material.setParameters(this.textureBindParameters),this.getTechnique(t.treeRendering?yo:Ga,e)}}class No extends To{constructor(){super(...arguments),this.treeRendering=!1,this.hasVertexTangents=!1}}function Oo(a){return a.weather!=null&&a.weatherVisible&&a.weather.type==="snowy"&&a.weather.snowCover==="enabled"}function $o(a){const e=tt().vec3f(b.POSITION);return a.normalType===T.Compressed?e.vec2i16(b.NORMALCOMPRESSED,{glNormalized:!0}):e.vec3f(b.NORMAL),a.hasVertexTangents&&e.vec4f(b.TANGENT),(a.textureId||a.normalTextureId||a.metallicRoughnessTextureId||a.emissiveTextureId||a.occlusionTextureId)&&e.vec2f(b.UV0),a.hasVertexColors&&e.vec4u8(b.COLOR),a.hasSymbolColors&&e.vec4u8(b.SYMBOLCOLOR),Vt()&&e.vec4u8(b.OBJECTANDLAYERIDCOLOR),e}const Eo=$(),_o=$(),zo=Ja(0,0,1),aa=$(),Ce=$(),Ne=$(),Ao=$(),Io=Object.freeze(Object.defineProperty({__proto__:null,build:Na},Symbol.toStringTag,{value:"Module"})),Go=Object.freeze(Object.defineProperty({__proto__:null,build:Oa,getRadius:ge},Symbol.toStringTag,{value:"Module"})),Lo=Object.freeze(Object.defineProperty({__proto__:null,build:Ia},Symbol.toStringTag,{value:"Module"})),Po=Object.freeze(Object.defineProperty({__proto__:null,build:La},Symbol.toStringTag,{value:"Module"}));export{dr as N,Qt as a,Ze as b,eo as c,Re as d,kt as e,Jt as f,C as i,mo as m,Ko as n,Qo as o,De as p,ar as r,er as s,Yt as t,Fe as u,$a as v,_a as x,mr as z};
