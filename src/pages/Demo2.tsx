import { useEffect, useRef, useState } from "react";

import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-print";
import "@arcgis/map-components/components/arcgis-expand";
import "@arcgis/map-components/components/arcgis-placement";

import "@esri/calcite-components/components/calcite-button";

import CodeBlock from "../Components/CodeBlock";

const Demo2 = () => {
  const codeHtml = `
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
  `;
  const codeJs = `
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
  `;
  const printRef = useRef<HTMLArcgisPrintElement>(null);
  const [print, setPrint] = useState<HTMLArcgisPrintElement | undefined>();

  const handleArcgisViewReadyChange = (
    event: HTMLArcgisMapElement["arcgisViewReadyChange"]
  ) => {
    if (printRef.current && event.target.view.ready) {
      printRef.current.showPrintAreaEnabled = true;
      setPrint(printRef.current);
    }
  };

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

  useEffect(() => {
    // returned function will be called on component unmount
    return () => {
      print?.destroy();
    };
  }, [print]);

  return (
    <arcgis-map
      item-id="91af6caa495d440187ec3937e43a818e"
      onarcgisViewReadyChange={handleArcgisViewReadyChange}
    >
      <arcgis-placement position="top-left">
        <CodeBlock code={codeHtml} language={"jsx"}></CodeBlock>
      </arcgis-placement>

      <arcgis-expand position="top-left">
        <arcgis-placement>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "5px",
            }}
          >
            <div style={{ fontStyle: "oblique", padding: "5px" }}>
              // Change configuration programmatically
            </div>
            <calcite-button iconStart="play" onClick={() => run()}>
              Run
            </calcite-button>
          </div>
          <CodeBlock code={codeJs} language={"javascript"}></CodeBlock>
        </arcgis-placement>
      </arcgis-expand>

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
        printServiceUrl={
          "https://jfp1091.cloud.eaglegis.co.nz/server/rest/services/CustomPrint/ExportWebMapJP/GPServer/Export%20Web%20Map"
        }
      ></arcgis-print>
    </arcgis-map>
  );
};

export default Demo2;
