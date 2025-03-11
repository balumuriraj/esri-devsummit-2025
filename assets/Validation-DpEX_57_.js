import{a0 as l,a1 as c,a2 as t,a3 as T,a4 as n,E as r,a5 as d,e as p,x as u}from"./index-BYYG-xAB.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v=l(class extends c{constructor(e){if(super(e),e.type!==t.PROPERTY&&e.type!==t.ATTRIBUTE&&e.type!==t.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!T(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[a]){if(a===n||a===r)return a;const i=e.element,s=e.name;if(e.type===t.PROPERTY){if(a===i[s])return n}else if(e.type===t.BOOLEAN_ATTRIBUTE){if(!!a===i.hasAttribute(s))return n}else if(e.type===t.ATTRIBUTE&&i.getAttribute(s)===a+"")return n;return d(e),a}});/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.0.3 */const f={validationContainer:"validation-container"},m=({scale:e,status:a,id:i,icon:s,message:o})=>u`<div class=${p(f.validationContainer)}><calcite-input-message aria-live=polite .icon=${s} id=${i??r} .scale=${e} .status=${a}>${o}</calcite-input-message></div>`;export{v as l,m};
