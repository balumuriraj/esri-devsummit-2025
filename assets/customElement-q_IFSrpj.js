import{e as S,L as v,s as T,c as i,r as D,b as I,p as P,d as u,n as y,E as c,x as n,i as l,S as H}from"./index-szNj1aqA.js";import{o as C}from"./floating-ui-81BasKC_.js";/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.0.3 */const b={handle:"handle",dropdown:"dropdown"},$={drag:"drag",blank:"blank"},p={label:"{label}",position:"{position}",total:"{total}"},g=["top","up","down","bottom"],O=S`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}.dropdown{block-size:100%}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}`,r=class r extends v{constructor(){super(...arguments),this.disabled=!1,this.messages=T({blocking:!0}),this.moveToItems=[],this.open=!1,this.overlayPositioning="absolute",this.placement=C,this.scale="m",this.calciteSortHandleBeforeClose=i({cancelable:!1}),this.calciteSortHandleBeforeOpen=i({cancelable:!1}),this.calciteSortHandleClose=i({cancelable:!1}),this.calciteSortHandleMove=i({cancelable:!1}),this.calciteSortHandleOpen=i({cancelable:!1}),this.calciteSortHandleReorder=i({cancelable:!1})}get hasSetInfo(){return typeof this.setPosition=="number"&&typeof this.setSize=="number"}get isSetDisabled(){const{setPosition:e,setSize:t,moveToItems:o}=this;return this.hasSetInfo?e<1||t<1||t<2&&o.length<1:!1}async setFocus(){var e;await D(this),(e=this.dropdownEl)==null||e.setFocus()}async load(){}willUpdate(e){e.has("open")&&(this.hasUpdated||this.open!==!1)&&this.openHandler()}updated(){I(this)}loaded(){}openHandler(){if(this.disabled){this.open=!1;return}this.dropdownEl&&(this.dropdownEl.open=this.open)}setDropdownEl(e){e&&(this.dropdownEl=e,this.openHandler())}getLabel(){const{label:e,messages:t,setPosition:o,setSize:s}=this;if(!this.hasSetInfo)return e??"";let a=e?t.repositionLabel.replace(p.label,e):t.reposition;return a=a.replace(p.position,o?o.toString():""),a.replace(p.total,s?s.toString():"")}handleBeforeOpen(e){e.stopPropagation(),this.calciteSortHandleBeforeOpen.emit()}handleOpen(e){e.stopPropagation(),this.calciteSortHandleOpen.emit(),this.open=!0}handleBeforeClose(e){e.stopPropagation(),this.calciteSortHandleBeforeClose.emit()}handleClose(e){e.stopPropagation(),this.calciteSortHandleClose.emit(),this.open=!1}handleReorder(e){this.calciteSortHandleReorder.emit({reorder:e.target.dataset.value})}handleMoveTo(e){const t=e.target.dataset.id,o=this.moveToItems.find(s=>s.id===t);this.calciteSortHandleMove.emit({moveTo:o})}render(){const{disabled:e,flipPlacements:t,open:o,overlayPositioning:s,placement:a,scale:m,widthScale:f}=this,d=this.getLabel(),w=e||this.isSetDisabled;return P({disabled:e,children:n`<calcite-dropdown class=${u(b.dropdown)} .disabled=${w} .flipPlacements=${t} @calciteDropdownBeforeClose=${this.handleBeforeClose} @calciteDropdownBeforeOpen=${this.handleBeforeOpen} @calciteDropdownClose=${this.handleClose} @calciteDropdownOpen=${this.handleOpen} .overlayPositioning=${s} .placement=${a} .scale=${m} .widthScale=${f} ${y(this.setDropdownEl)}><calcite-action .active=${o} appearance=transparent class=${u(b.handle)} .dragHandle=${!0} .icon=${e?$.blank:$.drag} .label=${d} .scale=${m} slot=trigger .text=${d} title=${d??c}></calcite-action>${this.renderGroup()}${this.renderMoveToGroup()}</calcite-dropdown>`})}renderMoveToItem(e){return l(e.id,n`<calcite-dropdown-item data-id=${e.id??c} .label=${e.label} @calciteDropdownItemSelect=${this.handleMoveTo}>${e.label}</calcite-dropdown-item>`)}renderGroup(){return this.hasSetInfo?l("reorder",n`<calcite-dropdown-group .groupTitle=${this.messages.reorder} .scale=${this.scale} selection-mode=none>${this.renderTop()}${this.renderUp()}${this.renderDown()}${this.renderBottom()}</calcite-dropdown-group>`):null}renderMoveToGroup(){const{messages:e,moveToItems:t,scale:o}=this;return t.length?l("move-to-items",n`<calcite-dropdown-group .groupTitle=${e.moveTo} .scale=${o} selection-mode=none>${t.map(s=>this.renderMoveToItem(s))}</calcite-dropdown-group>`):null}renderDropdownItem(e,t){return l(g[e],n`<calcite-dropdown-item data-value=${g[e]??c} .label=${t} @calciteDropdownItemSelect=${this.handleReorder}>${t}</calcite-dropdown-item>`)}renderTop(){const{setPosition:e}=this;return e!==1&&e!==2?this.renderDropdownItem(0,this.messages.moveToTop):null}renderUp(){return this.setPosition!==1?this.renderDropdownItem(1,this.messages.moveUp):null}renderDown(){return this.setPosition!==this.setSize?this.renderDropdownItem(2,this.messages.moveDown):null}renderBottom(){const{setPosition:e,setSize:t}=this;return e!==t&&e!==t-1?this.renderDropdownItem(3,this.messages.moveToBottom):null}};r.properties={hasSetInfo:16,isSetDisabled:16,disabled:7,flipPlacements:0,label:1,messageOverrides:0,messages:0,moveToItems:0,open:7,overlayPositioning:3,placement:3,scale:3,setPosition:9,setSize:9,widthScale:3},r.styles=O;let h=r;H("calcite-sort-handle",h);
