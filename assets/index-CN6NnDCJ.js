import{L as T,w as S,f as P,s as I,c as f,m as A,r as M,eS as v,d as u,n as D,i as B,x as y,e as R,S as L}from"./index-szNj1aqA.js";import"./customElement-D4s9jwHT.js";import"./index-CX2nmwGn.js";import"./index-BH9ByCLW.js";import{n as c}from"./index-BI5xs0DS.js";import{Y as z}from"./interact.min-g6-tpPva.js";import{r as U}from"./dynamicClasses-pKEMtFzB.js";import{s as F}from"./openCloseComponent-DVaD6WAk.js";import{F as j}from"./useFocusTrap-C0AR3LnM.js";import"./floating-ui-81BasKC_.js";import"./debounce-D0G5qrda.js";import"./FloatingArrow-DH-Z1LIH.js";import"./array-BbE1dLa5.js";/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.0.3 */const p={dialog:"dialog",panel:"panel",scrim:"scrim",container:"container",containerOpen:"container--open",containerEmbedded:"container--embedded",assistiveText:"assistive-text",openingActive:"dialog--opening-active"},n={actionBar:"action-bar",alerts:"alerts",content:"content",customContent:"custom-content",contentTop:"content-top",contentBottom:"content-bottom",headerActionsStart:"header-actions-start",headerActionsEnd:"header-actions-end",headerMenuActions:"header-menu-actions",headerContent:"header-content",fab:"fab",footer:"footer",footerStart:"footer-start",footerEnd:"footer-end"},m=25,w=25,C={x:0,y:0},E={top:0,right:0,bottom:0,left:0},H=R`:host{--calcite-dialog-scrim-background-color: rgba(0, 0, 0, .85);pointer-events:none;inset:0;z-index:var(--calcite-z-index-overlay);display:flex;--calcite-internal-dialog-animation-offset: 20px}:host([modal]){position:absolute}.container{pointer-events:auto;position:fixed;inset:0;z-index:var(--calcite-z-index-overlay);display:flex;align-items:center;justify-content:center;overflow:hidden;color:var(--calcite-color-text-2);opacity:0;visibility:hidden;transition:visibility 0ms linear var(--calcite-internal-animation-timing-slow),opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(.215,.44,.42,.88)}:host([placement=top]) .container{align-items:flex-start;justify-content:center}:host([placement=top-start]) .container{align-items:flex-start;justify-content:flex-start}:host([placement=top-end]) .container{align-items:flex-start;justify-content:flex-end}:host([placement=bottom]) .container{align-items:flex-end;justify-content:center}:host([placement=bottom-start]) .container{align-items:flex-end;justify-content:flex-start}:host([placement=bottom-end]) .container{align-items:flex-end;justify-content:flex-end}:host(:not([modal])) .container{pointer-events:none}:host([scale=s]){--calcite-internal-dialog-content-padding: var(--calcite-dialog-content-space, var(--calcite-spacing-sm));--calcite-internal-dialog-min-size-x: 198px;--calcite-internal-dialog-min-size-y: 140px}:host([scale=m]){--calcite-internal-dialog-content-padding: var(--calcite-dialog-content-space, var(--calcite-spacing-md));--calcite-internal-dialog-min-size-x: 288px;--calcite-internal-dialog-min-size-y: 180px}:host([scale=l]){--calcite-internal-dialog-content-padding: var(--calcite-dialog-content-space, var(--calcite-spacing-md-plus));--calcite-internal-dialog-min-size-x: 388px;--calcite-internal-dialog-min-size-y: 220px}.scrim{--calcite-scrim-background: var(--calcite-dialog-scrim-background-color, var(--calcite-color-transparent-scrim));--calcite-scrim-background-color: var( --calcite-dialog-scrim-background-color, var(--calcite-color-transparent-scrim) );position:fixed;inset:0;display:flex;overflow-y:hidden}calcite-panel{--calcite-panel-content-space: var(--calcite-dialog-content-space, var(--calcite-internal-dialog-content-padding));--calcite-panel-footer-space: var(--calcite-dialog-footer-space);--calcite-panel-border-color: var(--calcite-dialog-border-color);--calcite-panel-background-color: var(--calcite-dialog-background-color, var(--calcite-color-foreground-1))}::slotted(*){--calcite-panel-background-color: initial}.dialog{pointer-events:none;position:relative;z-index:var(--calcite-z-index-modal);margin:1.5rem;box-sizing:border-box;display:flex;inline-size:100%;flex-direction:column;border-radius:.25rem;opacity:0;--tw-shadow: 0 2px 12px -4px rgba(0, 0, 0, .2), 0 2px 4px -2px rgba(0, 0, 0, .16);--tw-shadow-colored: 0 2px 12px -4px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);-webkit-overflow-scrolling:touch;visibility:hidden;transition:inset-block var(--calcite-internal-animation-timing-slow) cubic-bezier(.215,.44,.42,.88),opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(.215,.44,.42,.88);min-inline-size:var(--calcite-dialog-min-size-x, var(--calcite-internal-dialog-min-size-x));max-inline-size:var(--calcite-dialog-max-size-x, 100%);min-block-size:var(--calcite-dialog-min-size-y, var(--calcite-internal-dialog-min-size-y));max-block-size:var(--calcite-dialog-max-size-y, 100%);--calcite-internal-dialog-hidden-position: calc( var(--calcite-dialog-offset-y, 0px) + var(--calcite-internal-dialog-animation-offset) );--calcite-internal-dialog-shown-position: var(--calcite-dialog-offset-y, 0);inset-inline-start:var(--calcite-dialog-offset-x, 0);inset-block-start:var(--calcite-internal-dialog-hidden-position)}.dialog--opening-active{inset-block-start:var(--calcite-internal-dialog-shown-position)}:host([menu-open]) .dialog{transition:visibility 0ms linear var(--calcite-internal-animation-timing-slow),opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(.215,.44,.42,.88)}.panel{border-radius:.25rem}.container--open{opacity:1;visibility:visible;transition-delay:0ms}.container--open .dialog{pointer-events:auto;visibility:visible;opacity:1;transition:inset-block var(--calcite-internal-animation-timing-slow) cubic-bezier(.215,.44,.42,.88),opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(.215,.44,.42,.88);transition-delay:0ms}.width-s{inline-size:auto;inline-size:var(--calcite-dialog-size-x, 32rem);block-size:var(--calcite-dialog-size-y, auto)}@media screen and (max-width: 35rem){.width-s{margin:0;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%;inset-inline-start:0;inset-block-start:var(--calcite-internal-dialog-animation-offset)}.width-s.dialog--opening-active{inset-block-start:0}}.width-m{inline-size:var(--calcite-dialog-size-x, 48rem);block-size:var(--calcite-dialog-size-y, auto)}@media screen and (max-width: 51rem){.width-m{margin:0;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%;inset-inline-start:0;inset-block-start:var(--calcite-internal-dialog-animation-offset)}.width-m.dialog--opening-active{inset-block-start:0}}.width-l{inline-size:var(--calcite-dialog-size-x, 94rem);block-size:var(--calcite-dialog-size-y, auto)}@media screen and (max-width: 97rem){.width-l{margin:0;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%;inset-inline-start:0;inset-block-start:var(--calcite-internal-dialog-animation-offset)}.width-l.dialog--opening-active{inset-block-start:0}}:host([placement=cover]) .dialog{margin:0;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%;border-radius:0}:host([placement=cover]) .panel{border-radius:0}:host([kind]) .panel{border-start-start-radius:0px;border-start-end-radius:0px}:host([kind=brand]) .dialog{border-color:var(--calcite-color-brand)}:host([kind=danger]) .dialog{border-color:var(--calcite-color-status-danger)}:host([kind=info]) .dialog{border-color:var(--calcite-color-status-info)}:host([kind=success]) .dialog{border-color:var(--calcite-color-status-success)}:host([kind=warning]) .dialog{border-color:var(--calcite-color-status-warning)}:host([kind=brand][open]) .dialog,:host([kind=danger][open]) .dialog,:host([kind=info][open]) .dialog,:host([kind=success][open]) .dialog,:host([kind=warning][open]) .dialog{border-width:0px;border-block-start-width:4px;border-style:solid}.container--embedded{position:absolute;pointer-events:auto}.container--embedded calcite-scrim{position:absolute}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}:host([hidden]){display:none}[hidden]{display:none}`;let k=0,O="";const x=class x extends T{constructor(){super(...arguments),this.dragPosition={...C},this.focusTrap=j({triggerProp:"open",focusTrapOptions:{clickOutsideDeactivates:()=>!this.modal,escapeDeactivates:e=>(!e.defaultPrevented&&!this.escapeDisabled&&(this.open=!1,e.preventDefault()),!1)}})(this),this.ignoreOpenChange=!1,this.mutationObserver=S("mutation",()=>this.handleMutationObserver()),this._open=!1,this.openEnd=()=>{this.setFocus(),this.el.removeEventListener("calciteDialogOpen",this.openEnd)},this.openProp="opened",this.transitionProp="opacity",this.panelEl=P(),this.resizePosition={...E},this.assistiveText=null,this.hasContentBottom=!1,this.hasContentTop=!1,this.hasFooter=!0,this.opened=!1,this.closeDisabled=!1,this.dragEnabled=!1,this.embedded=!1,this.escapeDisabled=!1,this.loading=!1,this.menuOpen=!1,this.messages=I(),this.modal=!1,this.focusTrapDisabled=!1,this.outsideCloseDisabled=!1,this.overlayPositioning="absolute",this.placement="center",this.resizable=!1,this.scale="m",this.widthScale="m",this.calciteDialogBeforeClose=f({cancelable:!1}),this.calciteDialogBeforeOpen=f({cancelable:!1}),this.calciteDialogClose=f({cancelable:!1}),this.calciteDialogOpen=f({cancelable:!1}),this.calciteDialogScroll=f({cancelable:!1})}get open(){return this._open}set open(e){const t=this._open;e!==t&&(this._open=e,this.toggleDialog(e))}async scrollContentTo(e){var t;await((t=this.panelEl.value)==null?void 0:t.scrollContentTo(e))}async setFocus(){var e;return await M(this),((e=this.panelEl.value)==null?void 0:e.setFocus())??A(this.el)}async updateFocusTrapElements(e){this.focusTrap.setExtraContainers(e),this.focusTrap.updateContainerElements()}focusTrapDisabledOverride(){return!this.modal&&this.focusTrapDisabled}connectedCallback(){var e;super.connectedCallback(),(e=this.mutationObserver)==null||e.observe(this.el,{childList:!0,subtree:!0}),this.setupInteractions()}async load(){}willUpdate(e){e.has("modal")&&(this.hasUpdated||this.modal!==!1)&&this.updateOverflowHiddenClass(),(e.has("open")&&(this.hasUpdated||this.open!==!1)||e.has("placement")&&(this.hasUpdated||this.placement!=="center")||e.has("resizable")&&(this.hasUpdated||this.resizable!==!1)||e.has("dragEnabled")&&(this.hasUpdated||this.dragEnabled!==!1))&&this.setupInteractions(),(e.has("messages")||e.has("dragEnabled")&&(this.hasUpdated||this.dragEnabled!==!1)||e.has("resizable")&&(this.hasUpdated||this.resizable!==!1))&&this.updateAssistiveText(),e.has("opened")&&(this.hasUpdated||this.opened!==!1)&&this.handleOpenedChange(this.opened)}loaded(){}disconnectedCallback(){var e;super.disconnectedCallback(),this.removeOverflowHiddenClass(),(e=this.mutationObserver)==null||e.disconnect(),this.embedded=!1,this.cleanupInteractions()}updateAssistiveText(){const{messages:e}=this;this.assistiveText=e&&(this.dragEnabled||this.resizable)?`${this.dragEnabled?e.dragEnabled:""} ${this.resizable?e.resizeEnabled:""}`:null}onBeforeOpen(){this.calciteDialogBeforeOpen.emit()}onOpen(){this.calciteDialogOpen.emit(),this.focusTrap.activate()}onBeforeClose(){this.calciteDialogBeforeClose.emit()}onClose(){this.calciteDialogClose.emit(),this.focusTrap.deactivate()}toggleDialog(e){this.ignoreOpenChange||(e?this.openDialog():this.closeDialog())}handleOpenedChange(e){const{transitionEl:t}=this;t&&(t.classList.toggle(p.openingActive,e),F(this))}async triggerInteractModifiers(){const{interaction:e}=this;e&&(await e.reflow({name:"drag"}),await e.reflow({name:"resize"}))}getTransitionElDOMRect(){return this.transitionEl.getBoundingClientRect()}handleKeyDown(e){const{key:t,shiftKey:i,defaultPrevented:a}=e,{dragEnabled:o,resizable:l,resizePosition:r,dragPosition:s,transitionEl:d}=this;if(!(a||!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t)))switch(t){case"ArrowUp":i&&l&&d?(this.updateSize({size:this.getTransitionElDOMRect().height-m,type:"blockSize"}),r.bottom-=m,this.updateTransform(),this.triggerInteractModifiers(),e.preventDefault()):o&&(s.y-=w,this.updateTransform(),this.triggerInteractModifiers(),e.preventDefault());break;case"ArrowDown":i&&l&&d?(this.updateSize({size:this.getTransitionElDOMRect().height+m,type:"blockSize"}),r.bottom+=m,this.updateTransform(),this.triggerInteractModifiers(),e.preventDefault()):o&&(s.y+=w,this.updateTransform(),this.triggerInteractModifiers(),e.preventDefault());break;case"ArrowLeft":i&&l&&d?(this.updateSize({size:this.getTransitionElDOMRect().width-m,type:"inlineSize"}),r.right-=m,this.updateTransform(),this.triggerInteractModifiers(),e.preventDefault()):o&&(s.x-=w,this.updateTransform(),this.triggerInteractModifiers(),e.preventDefault());break;case"ArrowRight":i&&l&&d?(this.updateSize({size:this.getTransitionElDOMRect().width+m,type:"inlineSize"}),r.right+=m,this.updateTransform(),this.triggerInteractModifiers(),e.preventDefault()):o&&(s.x+=w,this.updateTransform(),this.triggerInteractModifiers(),e.preventDefault());break}}updateTransform(){const{dragPosition:{x:e,y:t},resizePosition:i,transitionEl:a,dragEnabled:o,resizable:l}=this;if(!a)return;if(!o&&!l){a.style.transform=null;return}const{top:r,right:s,bottom:d,left:b}=this.getAdjustedResizePosition(i),g=Math.round(e+b+s),h=Math.round(t+r+d);a.style.transform=g||h?`translate(${g}px, ${h}px)`:null}updateSize({type:e,size:t}){const{transitionEl:i}=this;i&&(i.style[e]=t!==null?`${Math.round(t)}px`:null)}cleanupInteractions(){var e;(e=this.interaction)==null||e.unset(),this.updateSize({size:null,type:"inlineSize"}),this.updateSize({size:null,type:"blockSize"}),this.dragPosition={...C},this.resizePosition={...E},this.updateTransform()}setupInteractions(){this.cleanupInteractions();const{el:e,transitionEl:t,resizable:i,dragEnabled:a,resizePosition:o,dragPosition:l}=this;if(!(!t||!this.open)){if((i||a)&&(this.interaction=z(t,{context:e.ownerDocument})),i){const{minInlineSize:r,minBlockSize:s,maxInlineSize:d,maxBlockSize:b}=window.getComputedStyle(t);this.interaction.resizable({edges:{top:!0,right:!0,bottom:!0,left:!0},modifiers:[z.modifiers.restrictSize({min:{width:v(r)?parseInt(r):0,height:v(s)?parseInt(s):0},max:{width:v(d)?parseInt(d):window.innerWidth,height:v(b)?parseInt(b):window.innerHeight}}),z.modifiers.restrict({restriction:"parent"})],listeners:{move:({rect:g,deltaRect:h})=>{h&&(o.top+=h.top,o.right+=h.right,o.bottom+=h.bottom,o.left+=h.left),this.updateSize({size:g.width,type:"inlineSize"}),this.updateSize({size:g.height,type:"blockSize"}),this.updateTransform()}}})}a&&this.interaction.draggable({modifiers:[z.modifiers.restrictRect({restriction:"parent"})],listeners:{move:({dx:r,dy:s})=>{l.x+=r,l.y+=s,this.updateTransform()}}})}}getAdjustedResizePosition({top:e,right:t,bottom:i,left:a}){const o=e/2,l=t/2,r=i/2,s=a/2;switch(this.placement){case"top":return{top:e,right:l,bottom:0,left:s};case"top-start":return{top:e,right:0,bottom:0,left:a};case"top-end":return{top:e,right:t,bottom:0,left:0};case"bottom":return{top:0,right:l,bottom:i,left:s};case"bottom-start":return{top:0,right:0,bottom:i,left:a};case"bottom-end":return{top:0,right:t,bottom:i,left:0};case"cover":case"center":default:return{top:o,right:l,bottom:r,left:s}}}setTransitionEl(e){this.transitionEl=e,this.setupInteractions()}handleInternalPanelScroll(e){e.target===this.panelEl.value&&(e.stopPropagation(),this.calciteDialogScroll.emit())}handleInternalPanelCloseClick(e){e.target===this.panelEl.value&&(e.stopPropagation(),this.open=!1)}handlePanelKeyDown(e){this.escapeDisabled&&e.key==="Escape"&&e.preventDefault()}async openDialog(){await this.componentOnReady(),this.el.addEventListener("calciteDialogOpen",this.openEnd),this.opened=!0,this.updateOverflowHiddenClass()}handleOutsideClose(){this.outsideCloseDisabled||(this.open=!1)}async closeDialog(){if(this.beforeClose)try{await this.beforeClose()}catch{requestAnimationFrame(()=>{this.ignoreOpenChange=!0,this.open=!0,this.ignoreOpenChange=!1});return}k--,this.opened=!1,this.updateOverflowHiddenClass()}updateOverflowHiddenClass(){this.opened&&!this.embedded&&this.modal?this.addOverflowHiddenClass():this.removeOverflowHiddenClass()}addOverflowHiddenClass(){k===0&&(O=document.documentElement.style.overflow),k++,document.documentElement.style.setProperty("overflow","hidden")}removeOverflowHiddenClass(){document.documentElement.style.setProperty("overflow",O)}handleMutationObserver(){this.focusTrap.updateContainerElements()}render(){const{assistiveText:e,description:t,heading:i,opened:a}=this;return y`<div class=${u({[p.container]:!0,[p.containerOpen]:a,[p.containerEmbedded]:this.embedded})}>${this.modal?y`<calcite-scrim class=${u(p.scrim)} @click=${this.handleOutsideClose}></calcite-scrim>`:null}<div .ariaDescription=${t} .ariaLabel=${i} .ariaModal=${this.modal} class=${u({[p.dialog]:!0,[U("width",this.width,this.widthScale)]:!!(this.width||this.widthScale)})} @keydown=${this.handleKeyDown} role=dialog ${D(this.setTransitionEl)}>${e?B("assistive-text",y`<div aria-live=polite class=${u(p.assistiveText)}>${e}</div>`):null}<slot name=${n.customContent}><slot name=${n.content}><calcite-panel .beforeClose=${this.beforeClose} class=${u(p.panel)} .closable=${!this.closeDisabled} .closed=${!a} .description=${t} .heading=${i} .headingLevel=${this.headingLevel} .loading=${this.loading} .menuOpen=${this.menuOpen} .messageOverrides=${this.messageOverrides} @keydown=${this.handlePanelKeyDown} @calcitePanelClose=${this.handleInternalPanelCloseClick} @calcitePanelScroll=${this.handleInternalPanelScroll} .overlayPositioning=${this.overlayPositioning} .scale=${this.scale} ${D(this.panelEl)}><slot name=${n.actionBar} slot=${c.actionBar}></slot><slot name=${n.alerts} slot=${c.alerts}></slot><slot name=${n.headerActionsStart} slot=${c.headerActionsStart}></slot><slot name=${n.headerActionsEnd} slot=${c.headerActionsEnd}></slot><slot name=${n.headerContent} slot=${c.headerContent}></slot><slot name=${n.headerMenuActions} slot=${c.headerMenuActions}></slot><slot name=${n.fab} slot=${c.fab}></slot><slot name=${n.contentTop} slot=${c.contentTop}></slot><slot name=${n.contentBottom} slot=${c.contentBottom}></slot><slot name=${n.footerStart} slot=${c.footerStart}></slot><slot name=${n.footer} slot=${c.footer}></slot><slot name=${n.footerEnd} slot=${c.footerEnd}></slot><slot></slot></calcite-panel></slot></slot></div></div>`}};x.properties={assistiveText:16,hasContentBottom:16,hasContentTop:16,hasFooter:16,opened:16,beforeClose:0,closeDisabled:7,description:1,dragEnabled:7,embedded:5,escapeDisabled:7,focusTrapOptions:0,heading:1,headingLevel:11,kind:3,loading:7,menuOpen:7,messageOverrides:0,modal:7,focusTrapDisabled:7,open:7,outsideCloseDisabled:7,overlayPositioning:3,placement:3,resizable:7,scale:3,widthScale:3,width:3},x.styles=H;let $=x;L("calcite-dialog",$);export{$ as Dialog};
