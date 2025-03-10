import { useRef, useState } from "react";

import "@arcgis/map-components/components/arcgis-layer-list";
import "@arcgis/map-components/components/arcgis-legend";
import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-print";
import "@arcgis/map-components/components/arcgis-expand";
import "@arcgis/map-components/components/arcgis-placement";

import "@esri/calcite-components/components/calcite-input";
import "@esri/calcite-components/components/calcite-button";

import ReactCodeMirror, { basicSetup } from "@uiw/react-codemirror";
import { vscodeLight } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";

function Demo4() {
  const [printServiceUrl, setUrl] = useState<string>("");
  const [print, setPrint] = useState<HTMLArcgisPrintElement | undefined>();
  const printRef = useRef<HTMLArcgisPrintElement>(null);

  const handleArcgisViewReadyChange = (
    event: HTMLArcgisMapElement["arcgisViewReadyChange"]
  ) => {
    if (printRef.current && event.target.view.ready) {
      printRef.current.showPrintAreaEnabled = true;
      setPrint(printRef.current);
    }
  };

  const codeJs = `
  const print = document.createElement("arcgis-print");
  print.printServiceUrl = printServiceUrl;
  print.showPrintAreaEnabled = true;
  `;

  const run = () => {
    const { view } = document.querySelector(
      "arcgis-map"
    ) as HTMLArcgisMapElement;

    if (print) {
      print.destroy();
    }

    const printEl = document.createElement("arcgis-print");
    printEl.printServiceUrl = printServiceUrl;
    printEl.showPrintAreaEnabled = true;
    setPrint(printEl);

    view.ui.add(printEl, "bottom-left");
  };

  return (
    <arcgis-map
      item-id="91af6caa495d440187ec3937e43a818e"
      onarcgisViewReadyChange={handleArcgisViewReadyChange}
    >
      <arcgis-placement position="top-right">
        <div style={{ padding: "10px", background: "white" }}>
          <div style={{ display: "flex" }}>
            <calcite-input
              placeholder="printServiceUrl"
              value={printServiceUrl}
              onChange={(e) => setUrl(e.currentTarget.value)}
              style={{ flexGrow: 1 }}
            ></calcite-input>
            <calcite-button iconStart="play" onClick={() => run()}>
              Run
            </calcite-button>
          </div>

          <ReactCodeMirror
            extensions={[basicSetup(), javascript()]}
            editable={false}
            value={codeJs}
            theme={vscodeLight}
          ></ReactCodeMirror>
        </div>
      </arcgis-placement>

      <arcgis-print ref={printRef} position="bottom-left"></arcgis-print>
    </arcgis-map>
  );
}

export default Demo4;
