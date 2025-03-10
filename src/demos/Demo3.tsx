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

import Portal from "@arcgis/core/portal/Portal";
import PortalItem from "@arcgis/core/portal/PortalItem";

function Demo3() {
  const [portalUrl, setPortalUrl] = useState<string>("");
  const [layoutItemId, setLayoutItemId] = useState<string>(
    "277e16e68d4b426183c760e9435f7fac"
  );
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
const { view } = document.querySelector("arcgis-map") as HTMLArcgisMapElement;
const printEl = document.createElement("arcgis-print");
printEl.portal = new Portal({
  url: "${portalUrl}sharing",
  authMode: "immediate",
  authorizedCrossOriginDomains: [portalUrl],
});
printEl.showPrintAreaEnabled = true;
view.ui.add(printEl, "bottom-left");
  `;

  const codeApplyPrintTemplate = `
const applyPrintTemplate = () => {
  if (print) {
    print.showPrintAreaEnabled = false;
    const layoutItem = new PortalItem({
      portal: print.portal,
      id: "${layoutItemId}",
    });
    layoutItem.load().then(() => {
      print.templateOptions = { layoutItem } as __esri.TemplateOptions;
      print.showPrintAreaEnabled = true;
    });
  }
};
  `;

  const run = () => {
    const { view } = document.querySelector(
      "arcgis-map"
    ) as HTMLArcgisMapElement;

    if (print) {
      print.destroy();
    }

    const printEl = document.createElement("arcgis-print");
    printEl.portal = new Portal({
      url: `${portalUrl}sharing`,
      authMode: "immediate",
      authorizedCrossOriginDomains: [portalUrl],
    });
    printEl.showPrintAreaEnabled = true;
    setPrint(printEl);

    view.ui.add(printEl, "bottom-left");
  };

  const applyPrintTemplate = () => {
    if (print) {
      print.showPrintAreaEnabled = false;
      const layoutItem = new PortalItem({
        portal: print.portal,
        id: layoutItemId,
      });
      layoutItem.load().then(() => {
        print.templateOptions = { layoutItem } as __esri.TemplateOptions;
        print.showPrintAreaEnabled = true;
      });
    }
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
              placeholder="portalUrl"
              value={portalUrl}
              onInput={(e) => setPortalUrl(e.currentTarget.value)}
              style={{ flexGrow: 1 }}
            ></calcite-input>
            <calcite-button iconStart="play" onClick={() => run()}>
              Apply Portal
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

      <arcgis-expand position="top-right">
        <arcgis-placement>
          <div style={{ padding: "10px", background: "white" }}>
            <div style={{ display: "flex" }}>
              <calcite-input
                disabled={!portalUrl || !print?.portal.url.includes(portalUrl)}
                placeholder="layoutItemId"
                value={layoutItemId}
                onInput={(e) => setLayoutItemId(e.currentTarget.value)}
                style={{ flexGrow: 1 }}
              ></calcite-input>
              <calcite-button
                disabled={!portalUrl || !print?.portal.url.includes(portalUrl)}
                iconStart="play"
                onClick={() => applyPrintTemplate()}
              >
                Apply Layout Item
              </calcite-button>
            </div>

            <ReactCodeMirror
              extensions={[basicSetup(), javascript()]}
              editable={false}
              value={codeApplyPrintTemplate}
              theme={vscodeLight}
            ></ReactCodeMirror>
          </div>
        </arcgis-placement>
      </arcgis-expand>

      <arcgis-print ref={printRef} position="bottom-left"></arcgis-print>
    </arcgis-map>
  );
}

export default Demo3;
