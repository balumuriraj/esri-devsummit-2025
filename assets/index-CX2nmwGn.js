import{L as P,f as C,a3 as $,w as D,s as L,c as n,r as A,m as z,vf as B,a5 as H,i as f,d as s,n as u,Q as O,x as v,h as F,a4 as R,e as T,t as U,vg as S,S as q}from"./index-szNj1aqA.js";import{u as g,f as I,Y as X,l as M,c as Q,X as _,s as b}from"./floating-ui-81BasKC_.js";import{s as j}from"./openCloseComponent-DVaD6WAk.js";import{S as G}from"./FloatingArrow-DH-Z1LIH.js";import{F as N}from"./useFocusTrap-C0AR3LnM.js";import"./debounce-D0G5qrda.js";/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.0.3 */class Y{constructor(){this.registeredElements=new Map,this.registeredElementCount=0,this.queryPopover=e=>{const{registeredElements:t}=this,i=e.find(r=>t.has(r));return t.get(i)},this.togglePopovers=e=>{const t=e.composedPath(),i=this.queryPopover(t);i&&!i.triggerDisabled&&(i.open=!i.open),Array.from(this.registeredElements.values()).filter(r=>r!==i&&r.autoClose&&r.open&&!t.includes(r)).forEach(r=>r.open=!1)},this.keyDownHandler=e=>{e.defaultPrevented||(e.key==="Escape"?this.closeAllPopovers():U(e.key)&&this.togglePopovers(e))},this.clickHandler=e=>{S(e)||e.defaultPrevented||this.togglePopovers(e)}}registerElement(e,t){this.registeredElementCount++,this.registeredElements.set(e,t),this.registeredElementCount===1&&this.addListeners()}unregisterElement(e){this.registeredElements.delete(e)&&this.registeredElementCount--,this.registeredElementCount===0&&this.removeListeners()}closeAllPopovers(){Array.from(this.registeredElements.values()).forEach(e=>e.open=!1)}addListeners(){window.addEventListener("click",this.clickHandler),window.addEventListener("keydown",this.keyDownHandler)}removeListeners(){window.removeEventListener("click",this.clickHandler),window.removeEventListener("keydown",this.keyDownHandler)}}const a={positionContainer:"position-container",container:"container",closeButtonContainer:"close-button-container",closeButton:"close-button",content:"content",hasHeader:"has-header",header:"header",headerContainer:"headerContainer",heading:"heading"},E="auto",w="aria-controls",x="aria-expanded",K=T`:host{display:contents;--calcite-floating-ui-z-index: var(--calcite-popover-z-index, var(--calcite-z-index-popup))}.position-container{inline-size:max-content;display:none;inset-block-start:0;left:0;z-index:var(--calcite-floating-ui-z-index)}.position-container .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:inset,left,opacity;opacity:0;box-shadow:0 0 16px #00000029;z-index:var(--calcite-z-index);border-radius:.25rem}.position-container[data-placement^=bottom] .calcite-floating-ui-anim{inset-block-start:-5px}.position-container[data-placement^=top] .calcite-floating-ui-anim{inset-block-start:5px}.position-container[data-placement^=left] .calcite-floating-ui-anim{left:5px}.position-container[data-placement^=right] .calcite-floating-ui-anim{left:-5px}.position-container[data-placement] .calcite-floating-ui-anim--active{opacity:1;inset-block-start:0;left:0}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-z-index) * -1);fill:var(--calcite-color-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-color-border-3)}:host([scale=s]) .heading{padding:.5rem .75rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) .heading{padding:.75rem 1rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) .heading{padding:1rem 1.25rem;font-size:var(--calcite-font-size-1);line-height:1.375}.position-container .calcite-floating-ui-anim{border-width:1px;border-style:solid;background-color:var(--calcite-popover-background-color, var(--calcite-color-foreground-1));border-color:var(--calcite-popover-border-color, var(--calcite-color-border-3));border-radius:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-round))}.calcite-floating-ui-arrow{fill:var(--calcite-popover-background-color, var(--calcite-color-foreground-1))}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-popover-border-color, var(--calcite-color-border-3))}.header{display:flex;flex:1 1 auto;align-items:stretch;justify-content:flex-start;border-width:0px;border-bottom-width:1px;border-style:solid;border-block-end-color:var(--calcite-popover-border-color, var(--calcite-color-border-3))}.heading{margin:0;display:block;flex:1 1 auto;align-self:center;white-space:normal;font-weight:var(--calcite-font-weight-medium);word-wrap:break-word;word-break:break-word;color:var(--calcite-popover-text-color, var(--calcite-color-text-1))}.headerContainer{position:relative;display:flex;height:100%;flex-direction:row;flex-wrap:nowrap;border-radius:.25rem;color:var(--calcite-popover-text-color, var(--calcite-color-text-1))}.headerContainer.has-header{flex-direction:column}.content{display:flex;height:100%;width:100%;flex-direction:column;flex-wrap:nowrap;align-self:center;word-wrap:break-word;word-break:break-word}.close-button-container{display:flex;overflow:hidden;flex:0 0 auto;border-start-end-radius:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-round));border-end-end-radius:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-round));--calcite-action-corner-radius-start-end: var(--calcite-popover-corner-radius, var(--calcite-corner-radius-sharp));--calcite-action-corner-radius-end-end: var(--calcite-popover-corner-radius, var(--calcite-corner-radius-sharp))}::slotted(calcite-panel),::slotted(calcite-flow){height:100%}:host([hidden]){display:none}[hidden]{display:none}`,y=new Y,l=class l extends P{constructor(){super(...arguments),this.closeButtonEl=C(),this.focusTrap=N({triggerProp:"open",focusTrapOptions:{allowOutsideClick:!0,escapeDeactivates:e=>(e.defaultPrevented||(this.open=!1,e.preventDefault()),!1)}})(this),this.guid=`calcite-popover-${$()}`,this.hasLoaded=!1,this.mutationObserver=D("mutation",()=>this.focusTrap.updateContainerElements()),this.transitionProp="opacity",this.floatingLayout="vertical",this.autoClose=!1,this.closable=!1,this.flipDisabled=!1,this.focusTrapDisabled=!1,this.messages=L(),this.offsetDistance=g,this.offsetSkidding=0,this.open=!1,this.overlayPositioning="absolute",this.placement=E,this.pointerDisabled=!1,this.scale="m",this.triggerDisabled=!1,this.calcitePopoverBeforeClose=n({cancelable:!1}),this.calcitePopoverBeforeOpen=n({cancelable:!1}),this.calcitePopoverClose=n({cancelable:!1}),this.calcitePopoverOpen=n({cancelable:!1})}async reposition(e=!1){const{referenceEl:t,placement:i,overlayPositioning:r,flipDisabled:c,filteredFlipPlacements:d,offsetDistance:o,offsetSkidding:h,arrowEl:p,floatingEl:k}=this;return I(this,{floatingEl:k,referenceEl:t,overlayPositioning:r,placement:i,flipDisabled:c,flipPlacements:d,offsetDistance:o,offsetSkidding:h,arrowEl:p,type:"popover"},e)}async setFocus(){await A(this),this.requestUpdate(),z(this.el)}async updateFocusTrapElements(){this.focusTrap.updateContainerElements()}connectedCallback(){var e;super.connectedCallback(),(e=this.mutationObserver)==null||e.observe(this.el,{childList:!0,subtree:!0}),this.setFilteredPlacements(),requestAnimationFrame(()=>this.setUpReferenceElement(this.hasLoaded))}async load(){}willUpdate(e){e.has("flipPlacements")&&this.flipPlacementsHandler(),e.has("open")&&(this.hasUpdated||this.open!==!1)&&this.openHandler(),(e.has("offsetDistance")&&(this.hasUpdated||this.offsetDistance!==g)||e.has("offsetSkidding")&&(this.hasUpdated||this.offsetSkidding!==0)||e.has("overlayPositioning")&&(this.hasUpdated||this.overlayPositioning!=="absolute")||e.has("placement")&&(this.hasUpdated||this.placement!==E))&&this.reposition(!0),e.has("referenceElement")&&this.referenceElementHandler()}loaded(){this.referenceElement&&!this.referenceEl&&this.setUpReferenceElement(),this.hasLoaded=!0}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.mutationObserver)==null||e.disconnect(),this.removeReferences(),X(this)}flipPlacementsHandler(){this.setFilteredPlacements(),this.reposition(!0)}openHandler(){j(this),this.reposition(!0),this.setExpandedAttr()}referenceElementHandler(){this.setUpReferenceElement(),this.reposition(!0)}setFloatingEl(e){this.floatingEl=e,e&&requestAnimationFrame(()=>this.setUpReferenceElement())}setTransitionEl(e){this.transitionEl=e}setFilteredPlacements(){const{el:e,flipPlacements:t}=this;this.filteredFlipPlacements=t?M(t,e):null}setUpReferenceElement(e=!0){this.removeReferences(),this.referenceEl=this.getReferenceElement(),Q(this);const{el:t,referenceElement:i,referenceEl:r}=this;e&&i&&!r&&console.warn(`${t.tagName}: reference-element id "${i}" was not found.`,{el:t}),this.addReferences()}getId(){return this.el.id||this.guid}setExpandedAttr(){const{referenceEl:e,open:t}=this;e&&"setAttribute"in e&&e.setAttribute(x,B(t))}addReferences(){const{referenceEl:e}=this;if(!e)return;const t=this.getId();"setAttribute"in e&&e.setAttribute(w,t),y.registerElement(e,this.el),this.setExpandedAttr()}removeReferences(){const{referenceEl:e}=this;e&&("removeAttribute"in e&&(e.removeAttribute(w),e.removeAttribute(x)),y.unregisterElement(e))}getReferenceElement(){const{referenceElement:e,el:t}=this;return(typeof e=="string"?H(t,{id:e}):e)||null}hide(){this.open=!1}onBeforeOpen(){this.calcitePopoverBeforeOpen.emit()}onOpen(){this.calcitePopoverOpen.emit(),this.focusTrap.activate()}onBeforeClose(){this.calcitePopoverBeforeClose.emit()}onClose(){this.calcitePopoverClose.emit(),_(this),this.focusTrap.deactivate()}storeArrowEl(e){this.arrowEl=e,this.reposition(!0)}renderCloseButton(){const{messages:e,closable:t}=this;return t?f(a.closeButtonContainer,v`<div class=${s(a.closeButtonContainer)}><calcite-action appearance=transparent class=${s(a.closeButton)} @click=${this.hide} .scale=${this.scale} .text=${e.close} ${u(this.closeButtonEl)}><calcite-icon icon=x .scale=${O(this.scale)}></calcite-icon></calcite-action></div>`):null}renderHeader(){const{heading:e,headingLevel:t}=this,i=e?F({class:a.heading,level:t,children:e}):null;return i?f(a.header,v`<div class=${s(a.header)}>${i}${this.renderCloseButton()}</div>`):null}render(){const{referenceEl:e,heading:t,label:i,open:r,pointerDisabled:c,floatingLayout:d}=this,o=e&&r,h=!o,p=c?null:f("floating-arrow",G({floatingLayout:d,ref:this.storeArrowEl}));return this.el.inert=h,this.el.ariaLabel=i,this.el.ariaLive="polite",R(this.el,"id",this.getId()),this.el.role="dialog",v`<div class=${s(a.positionContainer)} ${u(this.setFloatingEl)}><div class=${s({[a.container]:!0,[b.animation]:!0,[b.animationActive]:o})} ${u(this.setTransitionEl)}>${p}<div class=${s({[a.hasHeader]:!!t,[a.headerContainer]:!0})}>${this.renderHeader()}<div class=${s(a.content)}><slot></slot></div>${t?null:this.renderCloseButton()}</div></div></div>`}};l.properties={floatingLayout:16,referenceEl:16,autoClose:7,closable:7,flipDisabled:7,flipPlacements:0,focusTrapDisabled:7,focusTrapOptions:0,heading:1,headingLevel:11,label:1,messageOverrides:0,offsetDistance:11,offsetSkidding:11,open:7,overlayPositioning:3,placement:3,pointerDisabled:7,referenceElement:1,scale:3,triggerDisabled:7},l.styles=K;let m=l;q("calcite-popover",m);export{m as Popover};
