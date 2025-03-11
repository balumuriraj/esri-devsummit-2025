import{A as ue,s as z,_ as m,I as P,v as w,G as v,Y as y,L as K,e as V,a as fe,n as h,C as S,D as Y,b as f,y as A,c as we,m as G,d as pe,W as D,f as L,g as O,H as J,h as de,i as q,r as he,j as T,B as Q,U as X,k as $,l as ge,E as me,o as ye,p as be,q as ve,t as Se,u as _,w as xe,x as Ie}from"./arcade-BgfxPaiF.js";import{a as i,r as l,u as ee}from"./unitConversion-6ZpUFgaF.js";import{registerFunctions as Fe}from"./geomasync-DWeUpMM5.js";import{a1 as re,g3 as ke,g4 as d,g5 as k,g6 as H,g7 as N,fE as C}from"./CodeBlock-DBIw63CI.js";import"./index-BYYG-xAB.js";import"./ImmutableArray-BPVd6ESQ.js";import"./shared-DXU12d8O.js";import"./TimeOnly-tuNXHBy1.js";import"./number-CfiTeRlm.js";import"./featureConversionUtils-CKmftsHB.js";import"./OptimizedFeature-C7vq2Etq.js";import"./memoryEstimations-DG877__o.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./WhereClause-DVOvsAur.js";import"./portalUtils-BCgppF_v.js";import"./operatorsWorkerConnection-tsNSUYpd.js";async function j(r,e){const n=[];for(let a=0;a<e.arguments.length;a++)n.push(await u(r,e.arguments[a]));return n}async function F(r,e,n){return e.preparsed===!0?n(r,null,e.arguments):n(r,e,await j(r,e))}class Me extends he{constructor(e,n){super(),this.definition=null,this.context=null,this.definition=e,this.context=n}createFunction(e){return(...n)=>{const a={spatialReference:this.context.spatialReference,console:this.context.console,lrucache:this.context.lrucache,timeZone:this.context.timeZone??null,exports:this.context.exports,libraryResolver:this.context.libraryResolver,interceptor:this.context.interceptor,localScope:{},depthCounter:{depth:e.depthCounter+1},globalScope:this.context.globalScope};if(a.depthCounter.depth>64)throw new i(e,l.MaximumCallDepth,null);return Z(this.definition,a,n,null)}}call(e,n){return B(e,n,(a,o,t)=>{const s={spatialReference:e.spatialReference,services:e.services,console:e.console,libraryResolver:e.libraryResolver,exports:e.exports,lrucache:e.lrucache,timeZone:e.timeZone??null,interceptor:e.interceptor,localScope:{},abortSignal:e.abortSignal,globalScope:e.globalScope,depthCounter:{depth:e.depthCounter.depth+1}};if(s.depthCounter.depth>64)throw new i(e,l.MaximumCallDepth,n);return Z(this.definition,s,t,n)})}marshalledCall(e,n,a,o){return o(e,n,async(t,s,c)=>{const x={spatialReference:e.spatialReference,globalScope:a.globalScope,depthCounter:{depth:e.depthCounter.depth+1},libraryResolver:e.libraryResolver,exports:e.exports,console:e.console,abortSignal:e.abortSignal,lrucache:e.lrucache,timeZone:e.timeZone??null,interceptor:e.interceptor,localScope:{}};return c=c.map(b=>!v(b)||b instanceof q?b:T(b,e,o)),T(await Z(this.definition,x,c,n),a,o)})}}class M extends de{constructor(e){super(),this.source=e}global(e){const n=this.executingContext.globalScope[h(e)];if(v(n.value)&&!(n.value instanceof q)){const a=new q;a.fn=n.value,a.parameterEvaluator=B,a.context=this.executingContext,n.value=a}return n.value}setGlobal(e,n){if(v(n))throw new i(null,l.AssignModuleFunction,null);this.executingContext.globalScope[h(e)]={value:n}}hasGlobal(e){return this.executingContext.exports[e]===void 0&&(e=h(e)),this.executingContext.exports[e]!==void 0}async loadModule(e){let n=e.spatialReference;n==null&&(n=new re({wkid:102100})),this.moduleScope=se({},e.customfunctions,e.timeZone),this.executingContext={spatialReference:n,services:e.services,libraryResolver:new z(e.libraryResolver._moduleSingletons,this.source.syntax.loadedModules),exports:{},abortSignal:e.abortSignal===void 0||e.abortSignal===null?{aborted:!1}:e.abortSignal,globalScope:this.moduleScope,console:e.console??ce,lrucache:e.lrucache,timeZone:e.timeZone??null,interceptor:e.interceptor,localScope:null,depthCounter:{depth:1}},await W(this.executingContext,this.source.syntax)}}async function B(r,e,n){return e.preparsed===!0?n(r,null,e.arguments):n(r,e,await j(r,e))}async function u(r,e){e.breakpoint&&await e.breakpoint();try{switch(e.type){case"UpdateExpression":return await De(r,e);case"AssignmentExpression":return await Ke(r,e);case"TemplateLiteral":return await Ye(r,e);case"Identifier":return U(r,e);case"MemberExpression":return await je(r,e);case"Literal":return e.value;case"CallExpression":return await ze(r,e);case"UnaryExpression":return await We(r,e);case"BinaryExpression":return await _e(r,e);case"LogicalExpression":return await He(r,e);case"ArrayExpression":return await Te(r,e);case"ObjectExpression":return await Ce(r,e);default:throw new i(r,l.Unrecognized,e)}}catch(n){throw ee(r,e,n)}}async function g(r,e){e.breakpoint&&await e.breakpoint();try{switch(e.type){case"ImportDeclaration":return await qe(r,e);case"ExportNamedDeclaration":return await Pe(r,e);case"VariableDeclaration":return await te(r,e,0);case"BlockStatement":return await W(r,e);case"FunctionDeclaration":return await Le(r,e);case"ReturnStatement":return await Ge(r,e);case"IfStatement":return await Ze(r,e);case"ExpressionStatement":return await Ue(r,e);case"ForStatement":return await Ae(r,e);case"WhileStatement":return await Re(r,e);case"ForInStatement":return await Be(r,e);case"ForOfStatement":return await Ee(r,e);case"BreakStatement":return y;case"EmptyStatement":return w;case"ContinueStatement":return K;default:throw new i(r,l.Unrecognized,e)}}catch(n){throw ee(r,e,n)}}async function Ce(r,e){const n=[];for(let s=0;s<e.properties.length;s++){const c=e.properties[s],x=await u(r,c.value),b=c.key.type==="Identifier"?c.key.name:await u(r,c.key);n[s]={key:b,value:x}}const a={},o=new Map;for(let s=0;s<n.length;s++){const c=n[s];if(v(c.value))throw new i(r,l.NoFunctionInDictionary,e);if(d(c.key)===!1)throw new i(r,l.KeyMustBeString,e);let x=c.key.toString();const b=x.toLowerCase();o.has(b)?x=o.get(b):o.set(b,x),c.value===w?a[x]=null:a[x]=c.value}const t=new S(a);return t.immutable=!1,t}async function Re(r,e){let n=await u(r,e.test);if(n===!1)return w;if(n!==!0)throw new i(r,l.BooleanConditionRequired,e);for(;n===!0;){const a=await g(r,e.body);if(a===y)break;if(a instanceof m)return a;if(n=await u(r,e.test),n!==!0&&n!==!1)throw new i(r,l.BooleanConditionRequired,e)}return w}async function Ae(r,e){var n;try{for(e.init!==null&&(e.init.type==="VariableDeclaration"?await g(r,e.init):await u(r,e.init));;){if(e.test!==null){const o=await u(r,e.test);if(((n=r.abortSignal)==null?void 0:n.aborted)===!0)throw new i(r,l.Cancelled,e);if(o===!1)break;if(o!==!0)throw new i(r,l.BooleanConditionRequired,e)}const a=await g(r,e.body);if(a===y)break;if(a instanceof m)return a;e.update!==null&&await u(r,e.update)}return w}catch(a){throw a}}async function E(r,e,n,a,o="i"){const t=n.length;for(let s=0;s<t;s++){if(o==="k"){if(s>=n.length)throw new i(r,l.OutOfBounds,e);a.value=n[s]}else a.value=s;const c=await g(r,e.body);if(c===y)break;if(c instanceof m)return c}return w}async function ne(r,e,n,a,o="i"){const t=n.length();for(let s=0;s<t;s++){a.value=o==="k"?n.get(s):s;const c=await g(r,e.body);if(c===y)break;if(c instanceof m)return c}return w}async function ae(r,e,n,a){const o=n.iterator(r.abortSignal);let t;for(;(t=await o.next())!=null;){const s=Y.createFromGraphicLikeObject(t.geometry,t.attributes,n,r.timeZone);s._underlyingGraphic=t,a.value=s;const c=await g(r,e.body);if(c===y)break;if(c instanceof m)return c}return w}async function Oe(r,e,n,a){for(const o of n.keys()){const t=n.field(o);a.value=new S({key:o,value:t});const s=await g(r,e.body);if(s===y)break;if(s instanceof m)return s}return w}async function Ne(r,e,n,a){for(const o of $(n)){const t=L(n,o,r,e,1);a.value=new S({key:o,value:t});const s=await g(r,e.body);if(s===y)break;if(s instanceof m)return s}return w}async function Be(r,e){const n=await u(r,e.right);e.left.type==="VariableDeclaration"&&await g(r,e.left);const a=h(e.left.type==="VariableDeclaration"?e.left.declarations[0].id:e.left);let o=null;if(r.localScope!=null&&r.localScope[a]!==void 0&&(o=r.localScope[a]),o===null&&r.globalScope[a]!==void 0&&(o=r.globalScope[a]),o===null)throw new i(r,l.InvalidIdentifier,e);return N(n)||d(n)?await E(r,e,n,o):O(n)?await ne(r,e,n,o):n instanceof S||D(n)?await E(r,e,n.keys(),o,"k"):Q(n)?await ae(r,e,n,o):X(n)?await E(r,e,$(n),o,"k"):w}async function Ee(r,e){const n=await u(r,e.right);e.left.type==="VariableDeclaration"&&await g(r,e.left);const a=h(e.left.type==="VariableDeclaration"?e.left.declarations[0].id:e.left);let o=null;if(r.localScope!=null&&r.localScope[a]!==void 0&&(o=r.localScope[a]),o===null&&r.globalScope[a]!==void 0&&(o=r.globalScope[a]),o===null)throw new i(r,l.InvalidIdentifier,e);return N(n)||d(n)?await E(r,e,n,o,"k"):O(n)?await ne(r,e,n,o,"k"):n instanceof S||D(n)?await Oe(r,e,n,o):Q(n)?await ae(r,e,n,o):X(n)?await Ne(r,e,n,o):w}async function De(r,e){const n=e.argument;if(n.type==="CallExpression")throw new i(r,l.NeverReach,e);if(n.type==="MemberExpression"){const t=await u(r,n.object);let s,c;if(n.computed===!0)s=await u(r,n.property);else{if(n.property.type!=="Identifier")throw new i(r,l.Unrecognized,e);s=n.property.name}if(N(t)){if(!C(s))throw new i(r,l.ArrayAccessorMustBeNumber,e);if(s<0&&(s=t.length+s),s<0||s>=t.length)throw new i(r,l.OutOfBounds,e);c=f(t[s]),t[s]=e.operator==="++"?c+1:c-1}else if(t instanceof S){if(d(s)===!1)throw new i(r,l.KeyAccessorMustBeString,e);if(t.hasField(s)!==!0)throw new i(r,l.FieldNotFound,e,{key:s});c=f(t.field(s)),t.setField(s,e.operator==="++"?c+1:c-1)}else if(t instanceof M){if(d(s)===!1)throw new i(r,l.ModuleAccessorMustBeString,e);if(t.hasGlobal(s)!==!0)throw new i(r,l.ModuleExportNotFound,e);c=f(t.global(s)),t.setGlobal(s,e.operator==="++"?c+1:c-1)}else{if(!J(t))throw O(t)?new i(r,l.Immutable,e):new i(r,l.InvalidParameter,e);if(d(s)===!1)throw new i(r,l.KeyAccessorMustBeString,e);if(t.hasField(s)!==!0)throw new i(r,l.FieldNotFound,e,{key:s});c=f(t.field(s)),t.setField(s,e.operator==="++"?c+1:c-1)}return e.prefix===!1?c:e.operator==="++"?c+1:c-1}const a=h(n);let o;if(r.localScope!=null&&r.localScope[a]!==void 0)return o=f(r.localScope[a].value),r.localScope[a]={value:e.operator==="++"?o+1:o-1},e.prefix===!1?o:e.operator==="++"?o+1:o-1;if(r.globalScope[a]!==void 0)return o=f(r.globalScope[a].value),r.globalScope[a]={value:e.operator==="++"?o+1:o-1},e.prefix===!1?o:e.operator==="++"?o+1:o-1;throw new i(r,l.InvalidIdentifier,e)}function I(r,e,n,a,o){switch(e){case"=":return r===w?null:r;case"/=":return f(n)/f(r);case"*=":return f(n)*f(r);case"-=":return f(n)-f(r);case"+=":return d(n)||d(r)?A(n)+A(r):f(n)+f(r);case"%=":return f(n)%f(r);default:throw new i(o,l.UnsupportedOperator,a)}}async function Ke(r,e){const n=e.left;if(n.type==="MemberExpression"){const o=await u(r,n.object);let t;if(n.computed===!0)t=await u(r,n.property);else{if(n.property.type!=="Identifier")throw new i(r,l.InvalidIdentifier,e);t=n.property.name}const s=await u(r,e.right);if(N(o)){if(!C(t))throw new i(r,l.ArrayAccessorMustBeNumber,e);if(t<0&&(t=o.length+t),t<0||t>o.length)throw new i(r,l.OutOfBounds,e);if(t===o.length){if(e.operator!=="=")throw new i(r,l.OutOfBounds,e);o[t]=I(s,e.operator,o[t],e,r)}else o[t]=I(s,e.operator,o[t],e,r)}else if(o instanceof S){if(d(t)===!1)throw new i(r,l.KeyAccessorMustBeString,e);if(o.hasField(t)===!0)o.setField(t,I(s,e.operator,o.field(t),e,r));else{if(e.operator!=="=")throw new i(r,l.FieldNotFound,e,{key:t});o.setField(t,I(s,e.operator,null,e,r))}}else if(o instanceof M){if(d(t)===!1)throw new i(r,l.KeyAccessorMustBeString,e);if(o.hasGlobal(t)!==!0)throw new i(r,l.ModuleExportNotFound,e);o.setGlobal(t,I(s,e.operator,o.global(t),e,r))}else{if(!J(o))throw O(o)?new i(r,l.Immutable,e):new i(r,l.InvalidParameter,e);if(d(t)===!1)throw new i(r,l.KeyAccessorMustBeString,e);if(o.hasField(t)===!0)o.setField(t,I(s,e.operator,o.field(t),e,r));else{if(e.operator!=="=")throw new i(r,l.FieldNotFound,e,{key:t});o.setField(t,I(s,e.operator,null,e,r))}}return w}const a=h(n);if(r.localScope!=null&&r.localScope[a]!==void 0){const o=await u(r,e.right);return r.localScope[a]={value:I(o,e.operator,r.localScope[a].value,e,r)},w}if(r.globalScope[a]!==void 0){const o=await u(r,e.right);return r.globalScope[a]={value:I(o,e.operator,r.globalScope[a].value,e,r)},w}throw new i(r,l.InvalidIdentifier,e)}async function Ue(r,e){const n=await u(r,e.expression);return n===w?w:new P(n)}async function Ze(r,e){const n=await u(r,e.test);if(n===!0)return g(r,e.consequent);if(n===!1)return e.alternate!==null?g(r,e.alternate):w;throw new i(r,l.BooleanConditionRequired,e)}async function W(r,e){return oe(r,e,0)}async function oe(r,e,n){if(n>=e.body.length)return w;const a=await g(r,e.body[n]);return a instanceof m||a===y||a===K||n===e.body.length-1?a:oe(r,e,n+1)}async function Ge(r,e){if(e.argument===null)return new m(w);const n=await u(r,e.argument);return new m(n)}async function Le(r,e){const n=h(e.id);return r.globalScope[n]={value:new Me(e,r)},w}async function qe(r,e){var t,s;const n=h(e.specifiers[0].local),a=r.libraryResolver.loadLibrary(n);let o;return(t=r.libraryResolver._moduleSingletons)!=null&&t.has(a.uri)?o=r.libraryResolver._moduleSingletons.get(a.uri):(o=new M(a),await o.loadModule(r),(s=r.libraryResolver._moduleSingletons)==null||s.set(a.uri,o)),r.globalScope[n]={value:o},w}async function Pe(r,e){if(await g(r,e.declaration),e.declaration.type==="FunctionDeclaration")r.exports[h(e.declaration.id)]="function";else if(e.declaration.type==="VariableDeclaration")for(const n of e.declaration.declarations)r.exports[h(n.id)]="variable";return w}async function te(r,e,n){return n>=e.declarations.length?w:(await Ve(r,e.declarations[n]),n===e.declarations.length-1||await te(r,e,n+1),w)}async function Ve(r,e){let n=null;if(n=e.init===null?null:await u(r,e.init),r.localScope!==null){if(n===w&&(n=null),e.id.type!=="Identifier")throw new i(r,l.InvalidIdentifier,e);const o=h(e.id);return void(r.localScope!=null&&(r.localScope[o]={value:n}))}if(e.id.type!=="Identifier")throw new i(r,l.InvalidIdentifier,e);const a=h(e.id);n===w&&(n=null),r.globalScope[a]={value:n}}async function je(r,e){const n=await u(r,e.object);if(n===null)throw new i(r,l.MemberOfNull,e);if(e.computed===!1){if(e.property.type==="Identifier"){if(n instanceof S||D(n))return n.field(e.property.name);if(n instanceof H)return L(n,e.property.name,r,e);if(n instanceof M){if(!n.hasGlobal(e.property.name))throw new i(r,l.InvalidIdentifier,e);return n.global(e.property.name)}throw new i(r,l.InvalidMemberAccessKey,e)}throw new i(r,l.InvalidMemberAccessKey,e)}let a=await u(r,e.property);if(n instanceof S||D(n)){if(d(a))return n.field(a);throw new i(r,l.InvalidMemberAccessKey,e)}if(n instanceof M){if(d(a))return n.global(a);throw new i(r,l.InvalidMemberAccessKey,e)}if(n instanceof H){if(d(a))return L(n,a,r,e);throw new i(r,l.InvalidMemberAccessKey,e)}if(N(n)){if(C(a)&&isFinite(a)&&Math.floor(a)===a){if(a<0&&(a=n.length+a),a>=n.length||a<0)throw new i(r,l.OutOfBounds,e);return n[a]}throw new i(r,l.InvalidMemberAccessKey,e)}if(O(n)){if(C(a)&&isFinite(a)&&Math.floor(a)===a){if(a<0&&(a=n.length()+a),a>=n.length()||a<0)throw new i(r,l.OutOfBounds,e);return n.get(a)}throw new i(r,l.InvalidMemberAccessKey,e)}if(d(n)){if(C(a)&&isFinite(a)&&Math.floor(a)===a){if(a<0&&(a=n.length+a),a>=n.length||a<0)throw new i(r,l.OutOfBounds,e);return n[a]}throw new i(r,l.InvalidMemberAccessKey,e)}throw new i(r,l.InvalidMemberAccessKey,e)}async function We(r,e){const n=await u(r,e.argument);if(k(n)){if(e.operator==="!")return!n;if(e.operator==="-")return-1*f(n);if(e.operator==="+")return 1*f(n);if(e.operator==="~")return~f(n);throw new i(r,l.UnsupportedUnaryOperator,e)}if(e.operator==="-")return-1*f(n);if(e.operator==="+")return 1*f(n);if(e.operator==="~")return~f(n);throw new i(r,l.UnsupportedUnaryOperator,e)}async function Te(r,e){const n=[];for(let a=0;a<e.elements.length;a++)n.push(await u(r,e.elements[a]));for(let a=0;a<n.length;a++){if(v(n[a]))throw new i(r,l.NoFunctionInArray,e);n[a]===w&&(n[a]=null)}return n}async function _e(r,e){const n=await u(r,e.left),a=await u(r,e.right);switch(e.operator){case"|":case"<<":case">>":case">>>":case"^":case"&":return pe(f(n),f(a),e.operator);case"==":return G(n,a);case"!=":return!G(n,a);case"<":case">":case"<=":case">=":return we(n,a,e.operator);case"+":return d(n)||d(a)?A(n)+A(a):f(n)+f(a);case"-":return f(n)-f(a);case"*":return f(n)*f(a);case"/":return f(n)/f(a);case"%":return f(n)%f(a);default:throw new i(r,l.UnsupportedOperator,e)}}async function He(r,e){const n=await u(r,e.left);if(!k(n))throw new i(r,l.LogicalExpressionOnlyBoolean,e);switch(e.operator){case"||":{if(n===!0)return n;const a=await u(r,e.right);if(k(a))return a;throw new i(r,l.LogicExpressionOrAnd,e)}case"&&":{if(n===!1)return n;const a=await u(r,e.right);if(k(a))return a;throw new i(r,l.LogicExpressionOrAnd,e)}default:throw new i(r,l.LogicExpressionOrAnd,e)}}function U(r,e){const n=h(e);if(r.localScope!=null&&r.localScope[n]!==void 0)return r.localScope[n].value;if(r.globalScope[n]!==void 0)return r.globalScope[n].value;throw new i(r,l.InvalidIdentifier,e)}async function ze(r,e){if(e.callee.type==="MemberExpression"){const a=await u(r,e.callee.object);if(!(a instanceof M))throw new i(r,l.FunctionNotFound,e);const o=e.callee.computed===!1?e.callee.property.name:await u(r,e.callee.property);if(!a.hasGlobal(o))throw new i(r,l.FunctionNotFound,e);const t=a.global(o);if(!v(t))throw new i(r,l.CallNonFunction,e);return t.call(r,e)}if(e.callee.type!=="Identifier")throw new i(r,l.FunctionNotFound,e);const n=h(e.callee);if(r.localScope!=null&&r.localScope[n]!==void 0){const a=r.localScope[n];if(v(a.value))return a.value.call(r,e);throw new i(r,l.CallNonFunction,e)}if(r.globalScope[n]!==void 0){const a=r.globalScope[n];if(v(a.value))return a.value.call(r,e);throw new i(r,l.CallNonFunction,e)}throw new i(r,l.FunctionNotFound,e)}async function Ye(r,e){let n="",a=0;for(const o of e.quasis)if(n+=o.value?o.value.cooked:"",o.tail===!1){if(e.expressions[a]){const t=await u(r,e.expressions[a]);if(v(t))throw new i(r,l.NoFunctionInTemplateLiteral,e);n+=A(t)}a++}return n}const p={};async function ie(r,e,n,a){const o=await u(r,e.arguments[n]);if(G(o,a))return u(r,e.arguments[n+1]);const t=e.arguments.length-n;return t===1?u(r,e.arguments[n]):t===2?null:t===3?u(r,e.arguments[n+2]):ie(r,e,n+2,a)}async function le(r,e,n,a){if(a===!0)return u(r,e.arguments[n+1]);if(e.arguments.length-n===3)return u(r,e.arguments[n+2]);const o=await u(r,e.arguments[n+2]);if(k(o)===!1)throw new i(r,l.ModuleExportNotFound,e.arguments[n+2]);return le(r,e,n+2,o)}async function Z(r,e,n,a){const o=r.body;if(n.length!==r.params.length)throw new i(e,l.WrongNumberOfParameters,null);for(let s=0;s<n.length;s++){const c=r.params[s];c.type==="Identifier"&&e.localScope!=null&&(e.localScope[h(c)]={value:n[s]})}const t=await g(e,o);if(t instanceof m)return t.value;if(t===y)throw new i(e,l.UnexpectedToken,a);if(t===K)throw new i(e,l.UnexpectedToken,a);return t instanceof P?t.value:t}ge(p,F),me(p,F),ye(p,F,U),be(p,F),ve(p,F),Se(p,F),Fe({functions:p,compiled:!1,signatures:null,evaluateIdentifier:null,mode:"async",standardFunction:F,standardFunctionAsync:B}),p.iif=async function(r,e){_(e.arguments===null?[]:e.arguments,3,3,r,e);const n=await u(r,e.arguments[0]);if(k(n)===!1)throw new i(r,l.BooleanConditionRequired,e);return u(r,n?e.arguments[1]:e.arguments[2])},p.defaultvalue=async function(r,e){_(e.arguments===null?[]:e.arguments,2,3,r,e);const n=await u(r,e.arguments[0]);if(e.arguments.length===3){const a=await u(r,e.arguments[1]),o=xe(n,a);return o!=null&&o!==""?o:u(r,e.arguments[2])}return n==null||n===""?u(r,e.arguments[1]):n},p.decode=async function(r,e){if(e.arguments.length<2)throw new i(r,l.WrongNumberOfParameters,e);if(e.arguments.length===2)return u(r,e.arguments[1]);if((e.arguments.length-1)%2==0)throw new i(r,l.WrongNumberOfParameters,e);return ie(r,e,1,await u(r,e.arguments[0]))},p.when=async function(r,e){if(e.arguments.length<3)throw new i(r,l.WrongNumberOfParameters,e);if(e.arguments.length%2==0)throw new i(r,l.WrongNumberOfParameters,e);const n=await u(r,e.arguments[0]);if(k(n)===!1)throw new i(r,l.BooleanConditionRequired,e.arguments[0]);return le(r,e,0,n)};const Je={fixSpatialReference:ue,parseArguments:j,standardFunction:F,standardFunctionAsync:B,evaluateIdentifier:U};for(const r in p)p[r]={value:new V(p[r])};const R=function(){};function se(r,e,n){const a=new R;r==null&&(r={}),e==null&&(e={});const o=new S({newline:`
`,tab:"	",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});o.immutable=!1,a.textformatting={value:o};for(const t in e)a[t]={value:new V(e[t])};for(const t in r)a[t]={value:ke(r[t])?Y.createFromGraphic(r[t],n):r[t]};return a}function ce(r){console.log(r)}R.prototype=p,R.prototype.infinity={value:Number.POSITIVE_INFINITY},R.prototype.pi={value:Math.PI};const dr=Je;function Qe(r){const e={mode:"async",compiled:!1,functions:{},signatures:[],standardFunction:F,standardFunctionAsync:B,evaluateIdentifier:U};for(let n=0;n<r.length;n++)r[n].registerFunctions(e);for(const n in e.functions)p[n]={value:new V(e.functions[n])},R.prototype[n]=p[n];for(let n=0;n<e.signatures.length;n++)fe(e.signatures[n],"async")}async function hr(r,e){let n=e.spatialReference;n==null&&(n=new re({wkid:102100}));let a=null;r.usesModules&&(a=new z(new Map,r.loadedModules));const o=se(e.vars,e.customfunctions,e.timeZone),t={spatialReference:n,services:e.services,exports:{},libraryResolver:a,abortSignal:e.abortSignal===void 0||e.abortSignal===null?{aborted:!1}:e.abortSignal,globalScope:o,console:e.console??ce,timeZone:e.timeZone??null,lrucache:e.lrucache,interceptor:e.interceptor,localScope:null,depthCounter:{depth:1}},s=await W(t,r);if(s instanceof m||s instanceof P){const c=s.value;if(c===w)return null;if(v(c))throw new i(t,l.IllegalResult,null);return c}if(s===w)return null;throw s===y?new i(t,l.IllegalResult,null):s===K?new i(t,l.IllegalResult,null):new i(t,l.NeverReach,null)}Qe([Ie]);export{hr as executeScript,Qe as extend,dr as functionHelper};
