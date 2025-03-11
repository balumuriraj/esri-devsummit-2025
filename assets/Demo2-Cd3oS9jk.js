import{r as c,j as e}from"./index-BYYG-xAB.js";import{C as i}from"./CodeBlock-DBIw63CI.js";import"./customElement-D7hPmC3w.js";import"./index-Bg9OplAB.js";import"./widget-D7ZMvL-q.js";import"./form-BSrwdpUC.js";import"./label-rGH0IiJo.js";const y=()=>{const n=`
  <arcgis-print
    ref={printRef}
    position="top-right"
    allowedFormats={["pdf", "png32"]}
    templateOptions={
      {
        layout: "a4-landscape",
        legendEnabled: false,
        dpi: 200,
      } as __esri.TemplateOptions
    }
    printServiceUrl={"customUrl"}
  ></arcgis-print>
  `,p=`
  const run = () => {
    const { view } = document.querySelector(
      "arcgis-map"
    ) as HTMLArcgisMapElement;
    const map = view.map as __esri.WebMap;

    if (printRef.current && view.ready) {
      printRef.current.templateOptions.legendEnabled = true;
      printRef.current.templateOptions.dpi = 100;
      printRef.current.templateOptions.fileName = map.portalItem?.title;
    }
  };
  `,t=c.useRef(null),s=r=>{t.current&&r.target.view.ready&&(t.current.showPrintAreaEnabled=!0)},o=()=>{var a;const{view:r}=document.querySelector("arcgis-map"),l=r.map;t.current&&r.ready&&(t.current.templateOptions.legendEnabled=!0,t.current.templateOptions.dpi=100,t.current.templateOptions.fileName=(a=l.portalItem)==null?void 0:a.title)};return e.jsxs("arcgis-map",{"item-id":"91af6caa495d440187ec3937e43a818e",onarcgisViewReadyChange:s,children:[e.jsx("arcgis-placement",{position:"top-left",children:e.jsx(i,{code:n,language:"jsx"})}),e.jsx("arcgis-expand",{position:"top-left",children:e.jsxs("arcgis-placement",{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"5px"},children:[e.jsx("div",{style:{fontStyle:"oblique",padding:"5px"},children:"// Change configuration programmatically"}),e.jsx("calcite-button",{iconStart:"play",onClick:()=>o(),children:"Run"})]}),e.jsx(i,{code:p,language:"javascript"})]})}),e.jsx("arcgis-print",{ref:t,position:"top-right",allowedFormats:["pdf","png32"],templateOptions:{layout:"a4-landscape",legendEnabled:!1,dpi:200},printServiceUrl:"https://jfp1091.cloud.eaglegis.co.nz/server/rest/services/CustomPrint/ExportWebMapJP/GPServer/Export%20Web%20Map"})]})};export{y as default};
