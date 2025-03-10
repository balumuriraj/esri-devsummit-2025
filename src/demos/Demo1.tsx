import { useRef } from "react";

import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-print";

import ReactCodeMirror, { basicSetup } from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { vscodeLight } from "@uiw/codemirror-theme-vscode";

function Demo1() {
  const printRef = useRef<HTMLArcgisPrintElement>(null);
  const handleArcgisViewReadyChange = (
    event: HTMLArcgisMapElement["arcgisViewReadyChange"]
  ) => {
    if (printRef.current && event.target.view.ready) {
      printRef.current.showPrintAreaEnabled = true;
    }
  };
  const codeHtml = `
<arcgis-print ref={printRef} position="top-right"></arcgis-print>   
`;

  return (
    <arcgis-map
      item-id="91af6caa495d440187ec3937e43a818e"
      onarcgisViewReadyChange={handleArcgisViewReadyChange}
    >
      <arcgis-placement position="top-left">
        <ReactCodeMirror
          extensions={[basicSetup(), html()]}
          editable={false}
          value={codeHtml}
          theme={vscodeLight}
        ></ReactCodeMirror>
      </arcgis-placement>

      <arcgis-print ref={printRef} position="top-right"></arcgis-print>
    </arcgis-map>
  );
}

export default Demo1;
