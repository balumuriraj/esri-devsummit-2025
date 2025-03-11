import{r as n,j as t}from"./index-BYYG-xAB.js";import{C as c,a as x,S as f}from"./CodeBlock-DBIw63CI.js";import"./customElement-D7hPmC3w.js";import"./index-DhVZbVWa.js";import"./input-DXXlUtOs.js";import"./index-Eq-Toaef.js";import"./index-Bg9OplAB.js";import"./widget-D7ZMvL-q.js";import"./key-CZcQa38B.js";import"./Validation-DpEX_57_.js";import"./form-BSrwdpUC.js";import"./label-rGH0IiJo.js";const O=()=>{const[a,p]=n.useState(""),[l,d]=n.useState("277e16e68d4b426183c760e9435f7fac"),[e,s]=n.useState(),i=n.useRef(null),u=r=>{i.current&&r.target.view.ready&&(i.current.showPrintAreaEnabled=!0,s(i.current))},m=`
const { view } = document.querySelector("arcgis-map") as HTMLArcgisMapElement;
const printEl = document.createElement("arcgis-print");
printEl.portal = new Portal({
  url: "${a}sharing",
  authMode: "immediate",
  authorizedCrossOriginDomains: [portalUrl],
});
printEl.showPrintAreaEnabled = true;
view.ui.add(printEl, "bottom-left");
  `,h=`
const applyPrintTemplate = () => {
  if (print) {
    print.showPrintAreaEnabled = false;
    const layoutItem = new PortalItem({
      portal: print.portal,
      id: "${l}",
    });
    layoutItem.load().then(() => {
      print.templateOptions = { layoutItem } as __esri.TemplateOptions;
      print.showPrintAreaEnabled = true;
    });
  }
};
  `,g=()=>{const{view:r}=document.querySelector("arcgis-map");e&&e.destroy();const o=document.createElement("arcgis-print");o.portal=new x({url:`${a}sharing`,authMode:"immediate",authorizedCrossOriginDomains:[a]}),o.showPrintAreaEnabled=!0,s(o),r.ui.add(o,"bottom-left")},y=()=>{if(e){e.showPrintAreaEnabled=!1;const r=new f({portal:e.portal,id:l});r.load().then(()=>{e.templateOptions={layoutItem:r},e.showPrintAreaEnabled=!0})}};return t.jsxs("arcgis-map",{"item-id":"91af6caa495d440187ec3937e43a818e",onarcgisViewReadyChange:u,children:[t.jsx("arcgis-placement",{position:"top-right",children:t.jsxs("div",{style:{padding:"10px",background:"white"},children:[t.jsxs("div",{style:{display:"flex"},children:[t.jsx("calcite-input",{placeholder:"portalUrl",value:a,onInput:r=>p(r.currentTarget.value),style:{flexGrow:1}}),t.jsx("calcite-button",{iconStart:"play",onClick:()=>g(),children:"Apply Portal"})]}),t.jsx(c,{code:m,language:"javascript"})]})}),t.jsx("arcgis-expand",{position:"top-right",children:t.jsx("arcgis-placement",{children:t.jsxs("div",{style:{padding:"10px",background:"white"},children:[t.jsxs("div",{style:{display:"flex"},children:[t.jsx("calcite-input",{disabled:!a||!(e!=null&&e.portal.url.includes(a)),placeholder:"layoutItemId",value:l,onInput:r=>d(r.currentTarget.value),style:{flexGrow:1}}),t.jsx("calcite-button",{disabled:!a||!(e!=null&&e.portal.url.includes(a)),iconStart:"play",onClick:()=>y(),children:"Apply Layout Item"})]}),t.jsx(c,{code:h,language:"javascript"})]})})}),t.jsx("arcgis-print",{ref:i,position:"bottom-left"})]})};export{O as default};
