import{L as O,f as I,z as B,s as S,c as f,A as z,r as F,v as C,D,C as N,F as V,G as v,H as r,b as P,T as j,W as M,$ as T,J as W,U as A,K as U,M as E,N as L,O as K,P as q,g as R,d as o,x as c,Q as y,i as G,I as _,E as p,R as J,n as k,p as Q,B as X,V as Y,k as Z,e as ee,S as te}from"./index-szNj1aqA.js";/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.0.3 */const a={loader:"loader",clearButton:"clear-button",inputIcon:"icon",prefix:"prefix",suffix:"suffix",numberButtonWrapper:"number-button-wrapper",buttonItemHorizontal:"number-button-item--horizontal",wrapper:"element-wrapper",inputWrapper:"wrapper",actionWrapper:"action-wrapper",numberButtonItem:"number-button-item"},H={validationMessage:"inputNumberValidationMessage"},ie={action:"action"},ne=ee`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;padding-inline:.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .number-button-wrapper,:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;padding-inline:.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .number-button-wrapper,:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .number-button-wrapper,:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}input{transition:var(--calcite-animation-timing),block-size 0,outline-offset 0s;-webkit-appearance:none;position:relative;margin:0;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;text-overflow:ellipsis;border-radius:0;background-color:var(--calcite-color-foreground-1);font-family:inherit;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-1)}input:placeholder-shown{text-overflow:ellipsis}input{border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);color:var(--calcite-color-text-1)}input::placeholder,input:-ms-input-placeholder,input::-ms-input-placeholder{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-3)}input:focus{border-color:var(--calcite-color-brand);color:var(--calcite-color-text-1)}input[readonly]{background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium)}input[readonly]:focus{color:var(--calcite-color-text-1)}calcite-icon{color:var(--calcite-color-text-3)}input{outline-color:transparent}input:focus{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}:host([status=invalid]) input{border-color:var(--calcite-color-status-danger)}:host([status=invalid]) input:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}:host([scale=s]) .icon{inset-inline-start:.5rem}:host([scale=m]) .icon{inset-inline-start:.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3.5rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;z-index:var(--calcite-z-index);display:block;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out}.clear-button{pointer-events:initial;order:4;margin:0;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);outline-color:transparent;border-inline-start-width:0px}.clear-button:hover{background-color:var(--calcite-color-foreground-2);transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out}.clear-button:hover calcite-icon{color:var(--calcite-color-text-1);transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out}.clear-button:active{background-color:var(--calcite-color-foreground-3)}.clear-button:active calcite-icon{color:var(--calcite-color-text-1)}.clear-button:focus{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}.clear-button:disabled{opacity:var(--calcite-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium);line-height:1;color:var(--calcite-color-text-2)}.prefix{order:2;border-inline-end-width:0px;inline-size:var(--calcite-input-prefix-size, auto)}.suffix{order:5;border-inline-start-width:0px;inline-size:var(--calcite-input-suffix-size, auto)}:host([alignment=start]) input{text-align:start}:host([alignment=end]) input{text-align:end}.number-button-wrapper{pointer-events:none;order:6;box-sizing:border-box;display:flex;flex-direction:column;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out}:host([number-button-type=vertical]) .wrapper{flex-direction:row;display:flex}:host([number-button-type=vertical]) input{order:2}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=down] calcite-icon{transform:rotate(-90deg)}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=up] calcite-icon{transform:rotate(-90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down],.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:1;max-block-size:100%;min-block-size:100%;align-self:stretch}.number-button-item.number-button-item--horizontal[data-adjustment=down] calcite-icon,.number-button-item.number-button-item--horizontal[data-adjustment=up] calcite-icon{transform:rotate(90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down]{border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);border-inline-end-width:0px}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover{background-color:var(--calcite-color-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover calcite-icon{color:var(--calcite-color-text-1)}.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:5}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover{background-color:var(--calcite-color-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover calcite-icon{color:var(--calcite-color-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover{background-color:var(--calcite-color-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover calcite-icon{color:var(--calcite-color-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover{background-color:var(--calcite-color-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover calcite-icon{color:var(--calcite-color-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]{border-block-start-width:0px}.number-button-item{max-block-size:50%;min-block-size:50%;pointer-events:initial;margin:0;box-sizing:border-box;display:flex;cursor:pointer;align-items:center;align-self:center;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);padding-block:0px;padding-inline:.5rem;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out;border-inline-start-width:0px}.number-button-item calcite-icon{pointer-events:none;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out}.number-button-item:focus{background-color:var(--calcite-color-foreground-2)}.number-button-item:focus calcite-icon{color:var(--calcite-color-text-1)}.number-button-item:active{background-color:var(--calcite-color-foreground-3)}.number-button-item:disabled{pointer-events:none}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-color-border-1)}input.inline-child{background-color:transparent;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out}input.inline-child .editing-enabled{background-color:inherit}input.inline-child:not(.editing-enabled){display:flex;cursor:pointer;text-overflow:ellipsis;border-color:transparent;padding-inline-start:0}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:.5rem}:host([scale=s]) .validation-container{padding-block-start:.25rem}::slotted(input[slot=hidden-form-input]){margin:0!important;opacity:0!important;outline:none!important;padding:0!important;position:absolute!important;inset:0!important;transform:none!important;-webkit-appearance:none!important;z-index:-1!important}:host([hidden]){display:none}[hidden]{display:none}`,x=class x extends O{constructor(){super(),this.actionWrapperEl=I(),this.attributeWatch=B(["autofocus","enterkeyhint","inputmode"],this.handleGlobalAttributesChanged),this.inputWrapperEl=I(),this.onHiddenFormInputInput=e=>{e.target.name===this.name&&this.setNumberValue({value:e.target.value,origin:"direct"}),this.setFocus(),e.stopPropagation()},this.previousValueOrigin="initial",this.userChangedValue=!1,this._value="",this.slottedActionElDisabledInternally=!1,this.alignment="start",this.clearable=!1,this.disabled=!1,this.editingEnabled=!1,this.groupSeparator=!1,this.iconFlipRtl=!1,this.integer=!1,this.loading=!1,this.localeFormat=!1,this.messages=S(),this.numberButtonType="vertical",this.readOnly=!1,this.required=!1,this.scale="m",this.status="idle",this.validity={valid:!1,badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1},this.calciteInputNumberChange=f({cancelable:!1}),this.calciteInputNumberInput=f(),this.calciteInternalInputNumberBlur=f({cancelable:!1}),this.calciteInternalInputNumberFocus=f({cancelable:!1}),this.listen("click",this.clickHandler),this.listen("keydown",this.keyDownHandler)}get isClearable(){return this.clearable&&this.value.length>0}get value(){return this._value}set value(e){const t=this._value;e!==t&&(this._value=e,this.valueWatcher(e,t),e&&this._value===""&&this.setNumberValue({origin:"reset",value:t}))}async selectText(){var e;(e=this.childNumberEl)==null||e.select()}async setFocus(){var e;await F(this),(e=this.childNumberEl)==null||e.focus()}connectedCallback(){super.connectedCallback(),this.inlineEditableEl=this.el.closest("calcite-inline-editable"),this.inlineEditableEl&&(this.editingEnabled=this.inlineEditableEl.editingEnabled||!1),C(this),D(this),this.el.addEventListener(N,this.onHiddenFormInputInput)}async load(){var e,t;this.maxString=(e=this.max)==null?void 0:e.toString(),this.minString=(t=this.min)==null?void 0:t.toString(),this.requestedIcon=V({},this.icon,"number"),this.setPreviousEmittedNumberValue(this.value),this.setPreviousNumberValue(this.value),this.warnAboutInvalidNumberValue(this.value),this.value==="Infinity"||this.value==="-Infinity"?(this.displayedValue=this.value,this.previousEmittedNumberValue=this.value):this.setNumberValue({origin:"connected",value:v(this.value)?this.value:""})}willUpdate(e){var t,i;e.has("max")&&(this.maxString=((t=this.max)==null?void 0:t.toString())||null),e.has("min")&&(this.minString=((i=this.min)==null?void 0:i.toString())||null),e.has("icon")&&(this.requestedIcon=V({},this.icon,"number")),e.has("messages")&&(r.numberFormatOptions={locale:this.messages._lang,numberingSystem:this.numberingSystem,useGrouping:!1})}updated(){P(this)}loaded(){}disconnectedCallback(){super.disconnectedCallback(),j(this),M(this),this.el.removeEventListener(N,this.onHiddenFormInputInput)}handleGlobalAttributesChanged(){this.requestUpdate()}valueWatcher(e,t){if(!this.userChangedValue){if(e==="Infinity"||e==="-Infinity"){this.displayedValue=e,this.previousEmittedNumberValue=e;return}this.setNumberValue({origin:"direct",previousValue:t,value:e==null||e==""?"":v(e)?e:this.previousValue||""}),this.warnAboutInvalidNumberValue(e)}this.userChangedValue=!1}keyDownHandler(e){this.readOnly||this.disabled||e.defaultPrevented||(this.isClearable&&e.key==="Escape"&&(this.clearInputValue(e),e.preventDefault()),e.key==="Enter"&&T(this)&&e.preventDefault())}onLabelClick(){this.setFocus()}incrementOrDecrementNumberValue(e,t,i,h){const{value:n}=this;if(n==="Infinity"||n==="-Infinity")return;const l=e==="up"?1:-1,s=this.integer&&this.step!=="any"?Math.round(this.step):this.step,m=s==="any"?1:Math.abs(s||1),b=new W(n!==""?n:"0").add(`${m*l}`),d=()=>typeof i=="number"&&!isNaN(i)&&b.subtract(`${i}`).isNegative,u=()=>typeof t=="number"&&!isNaN(t)&&!b.subtract(`${t}`).isNegative,g=d()?`${i}`:u()?`${t}`:b.toString();this.setNumberValue({committing:!0,nativeEvent:h,origin:"user",value:g})}clearInputValue(e){this.setNumberValue({committing:!0,nativeEvent:e,origin:"user",value:""})}emitChangeIfUserModified(){this.previousValueOrigin==="user"&&this.value!==this.previousEmittedNumberValue&&(this.calciteInputNumberChange.emit(),this.setPreviousEmittedNumberValue(this.value))}inputNumberBlurHandler(){window.clearInterval(this.nudgeNumberValueIntervalId),this.calciteInternalInputNumberBlur.emit(),this.emitChangeIfUserModified()}clickHandler(e){if(this.disabled)return;const t=e.composedPath();!t.includes(this.inputWrapperEl.value)||t.includes(this.actionWrapperEl.value)||this.setFocus()}inputNumberFocusHandler(){this.calciteInternalInputNumberFocus.emit()}inputNumberInputHandler(e){if(this.disabled||this.readOnly||this.value==="Infinity"||this.value==="-Infinity")return;const t=e.target.value;r.numberFormatOptions={locale:this.messages._lang,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator};const i=r.delocalize(t);e.inputType==="insertFromPaste"?((!v(i)||this.integer&&(i.includes("e")||i.includes(".")))&&e.preventDefault(),this.setNumberValue({nativeEvent:e,origin:"user",value:A(i)}),this.childNumberEl.value=this.displayedValue):this.setNumberValue({nativeEvent:e,origin:"user",value:i})}inputNumberKeyDownHandler(e){if(this.disabled||this.readOnly)return;if(this.value==="Infinity"||this.value==="-Infinity"){e.preventDefault(),(e.key==="Backspace"||e.key==="Delete")&&this.clearInputValue(e);return}if(e.key==="ArrowUp"){e.preventDefault(),this.nudgeNumberValue("up",e);return}if(e.key==="ArrowDown"){this.nudgeNumberValue("down",e);return}const t=[...U,"ArrowLeft","ArrowRight","Backspace","Delete","Enter","Escape","Tab"];if(e.altKey||e.ctrlKey||e.metaKey)return;const i=e.shiftKey&&e.key==="Tab";if(t.includes(e.key)||i){e.key==="Enter"&&this.emitChangeIfUserModified();return}r.numberFormatOptions={locale:this.messages._lang,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator},!(e.key===r.decimal&&!this.integer&&(!this.value&&!this.childNumberEl.value||this.value&&this.childNumberEl.value.indexOf(r.decimal)===-1))&&(/[eE]/.test(e.key)&&!this.integer&&(!this.value&&!this.childNumberEl.value||this.value&&!/[eE]/.test(this.childNumberEl.value))||e.key==="-"&&(!this.value&&!this.childNumberEl.value||this.value&&this.childNumberEl.value.split("-").length<=2)||e.preventDefault())}nudgeNumberValue(e,t){if(t instanceof KeyboardEvent&&t.repeat)return;const i=this.maxString?parseFloat(this.maxString):null,h=this.minString?parseFloat(this.minString):null,n=150;this.incrementOrDecrementNumberValue(e,i,h,t),this.nudgeNumberValueIntervalId&&window.clearInterval(this.nudgeNumberValueIntervalId);let l=!0;this.nudgeNumberValueIntervalId=window.setInterval(()=>{if(l){l=!1;return}this.incrementOrDecrementNumberValue(e,i,h,t)},n)}nudgeButtonPointerUpHandler(e){E(e)&&window.clearInterval(this.nudgeNumberValueIntervalId)}nudgeButtonPointerOutHandler(){window.clearInterval(this.nudgeNumberValueIntervalId)}nudgeButtonPointerDownHandler(e){if(!E(e))return;e.preventDefault();const t=e.target.dataset.adjustment;this.disabled||this.nudgeNumberValue(t,e)}syncHiddenFormInput(e){L("number",this,e)}setChildNumberElRef(e){this.childNumberEl=e}setInputNumberValue(e){this.childNumberEl&&(this.childNumberEl.value=e)}setPreviousEmittedNumberValue(e){this.previousEmittedNumberValue=this.normalizeValue(e)}normalizeValue(e){return v(e)?e:""}setPreviousNumberValue(e){this.previousValue=this.normalizeValue(e)}setNumberValue({committing:e=!1,nativeEvent:t,origin:i,previousValue:h,value:n}){var g,$;r.numberFormatOptions={locale:this.messages._lang,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator};const l=((g=this.previousValue)==null?void 0:g.length)>n.length||(($=this.value)==null?void 0:$.length)>n.length,s=this.integer?n.replace(/[e.]/g,""):n,m=s.charAt(s.length-1)===".",b=m&&l?s:K(s),d=n&&!b?v(this.previousValue)?this.previousValue:"":b;let u=r.localize(d);i!=="connected"&&!m&&(u=q(u,d,r)),this.displayedValue=m&&l?`${u}${r.decimal}`:u,this.setPreviousNumberValue(h??this.value),this.previousValueOrigin=i,this.userChangedValue=i==="user"&&this.value!==d,this.value=["-","."].includes(d)?"":d,i==="direct"&&(this.setInputNumberValue(u),this.setPreviousEmittedNumberValue(u)),t&&(this.calciteInputNumberInput.emit().defaultPrevented?(this.value=this.previousValue,this.displayedValue=r.localize(this.previousValue)):e&&this.emitChangeIfUserModified())}inputNumberKeyUpHandler(){window.clearInterval(this.nudgeNumberValueIntervalId)}warnAboutInvalidNumberValue(e){e&&!v(e)&&console.warn(`The specified value "${e}" cannot be parsed, or is out of range.`)}render(){const e=R(this.el),t=c`<div class=${o(a.loader)}><calcite-progress .label=${this.messages.loading} type=indeterminate></calcite-progress></div>`,i=c`<button .ariaLabel=${this.messages.clear} class=${o(a.clearButton)} .disabled=${this.disabled||this.readOnly} @click=${this.clearInputValue} tabindex=-1 type=button><calcite-icon icon=x .scale=${y(this.scale)}></calcite-icon></button>`,h=c`<calcite-icon class=${o(a.inputIcon)} .flipRtl=${this.iconFlipRtl} .icon=${this.requestedIcon} .scale=${y(this.scale)}></calcite-icon>`,n=this.numberButtonType==="horizontal",l=c`<button aria-hidden=true class=${o({[a.numberButtonItem]:!0,[a.buttonItemHorizontal]:n})} data-adjustment=up .disabled=${this.disabled||this.readOnly} @pointerdown=${this.nudgeButtonPointerDownHandler} @pointerout=${this.nudgeButtonPointerOutHandler} @pointerup=${this.nudgeButtonPointerUpHandler} tabindex=-1 type=button><calcite-icon icon=chevron-up .scale=${y(this.scale)}></calcite-icon></button>`,s=c`<button aria-hidden=true class=${o({[a.numberButtonItem]:!0,[a.buttonItemHorizontal]:n})} data-adjustment=down .disabled=${this.disabled||this.readOnly} @pointerdown=${this.nudgeButtonPointerDownHandler} @pointerout=${this.nudgeButtonPointerOutHandler} @pointerup=${this.nudgeButtonPointerUpHandler} tabindex=-1 type=button><calcite-icon icon=chevron-down .scale=${y(this.scale)}></calcite-icon></button>`,m=c`<div class=${o(a.numberButtonWrapper)}>${l}${s}</div>`,b=c`<div class=${o(a.prefix)}>${this.prefixText}</div>`,d=c`<div class=${o(a.suffix)}>${this.suffixText}</div>`,u=G("localized-input",c`<input aria-errormessage=${H.validationMessage} .ariaInvalid=${this.status==="invalid"} .ariaLabel=${_(this)} autocomplete=${this.autocomplete??p} .autofocus=${this.el.autofocus} value=${this.defaultValue??p} .disabled=${this.disabled} enterkeyhint=${this.el.enterKeyHint??p} inputmode=${this.el.inputMode||"decimal"} maxlength=${this.maxLength??p} minlength=${this.minLength??p} name=${p} @blur=${this.inputNumberBlurHandler} @focus=${this.inputNumberFocusHandler} @input=${this.inputNumberInputHandler} @keydown=${this.inputNumberKeyDownHandler} @keyup=${this.inputNumberKeyUpHandler} placeholder=${(this.placeholder||"")??p} .readOnly=${this.readOnly} type=text .value=${J(this.displayedValue??"")} ${k(this.setChildNumberElRef)}>`);return Q({disabled:this.disabled,children:c`<div class=${o({[a.inputWrapper]:!0,[Z.rtl]:e==="rtl"})} ${k(this.inputWrapperEl)}>${this.numberButtonType==="horizontal"&&!this.readOnly?s:null}${this.prefixText?b:null}<div class=${o(a.wrapper)}>${u}${this.isClearable?i:null}${this.requestedIcon?h:null}${this.loading?t:null}</div><div class=${o(a.actionWrapper)} ${k(this.actionWrapperEl)}><slot name=${ie.action}></slot></div>${this.numberButtonType==="vertical"&&!this.readOnly?m:null}${this.suffixText?d:null}${this.numberButtonType==="horizontal"&&!this.readOnly?l:null}${X({component:this})}</div>${this.validationMessage&&this.status==="invalid"?Y({icon:this.validationIcon,id:H.validationMessage,message:this.validationMessage,scale:this.scale,status:this.status}):null}`})}};x.properties={displayedValue:16,slottedActionElDisabledInternally:16,alignment:3,autocomplete:0,clearable:7,disabled:7,editingEnabled:7,form:3,groupSeparator:7,icon:[3,{converter:z}],iconFlipRtl:7,integer:5,label:1,loading:7,localeFormat:5,max:11,maxLength:11,messageOverrides:0,min:11,minLength:11,name:3,numberButtonType:3,numberingSystem:3,placeholder:1,prefixText:1,readOnly:7,required:7,scale:3,status:3,step:3,suffixText:1,validationIcon:[3,{converter:z}],validationMessage:1,validity:0,value:1},x.styles=ne;let w=x;te("calcite-input-number",w);export{w as InputNumber};
