import{ev as s,ex as i,ew as a,i as h,o as n}from"./CodeBlock-DBIw63CI.js";import{i as l}from"./AGraphicContainer-DwsUBWMH.js";let t=class extends l{get hasHighlight(){return this.children.some(e=>e.hasData)}renderChildren(e){this.attributeView.update(),e.drawPhase===s.HIGHLIGHT&&this.children.some(r=>r.hasData)&&(super.renderChildren(e),e.context.setColorMask(!0,!0,!0,!0),i(e,!1,r=>{this._renderChildren(r,a.Highlight)}))}};t=h([n("esri.views.2d.layers.graphics.HighlightGraphicContainer")],t);const g=t;export{g as h};
