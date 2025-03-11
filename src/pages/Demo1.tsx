import { useEffect, useRef, useState } from "react";

import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-print";
import "@arcgis/map-components/components/arcgis-placement";

import CodeBlock from "../Components/CodeBlock";

const Demo1 = () => {
  const [print, setPrint] = useState<HTMLArcgisPrintElement | undefined>();
  const printRef = useRef<HTMLArcgisPrintElement>(null);
  const codeHtml = `<arcgis-print ref={printRef} position="top-right"></arcgis-print>`;

  const handleArcgisViewReadyChange = (
    event: HTMLArcgisMapElement["arcgisViewReadyChange"]
  ) => {
    if (printRef.current && event.target.view) {
      printRef.current.showPrintAreaEnabled = true;
      setPrint(printRef.current);
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

      <arcgis-print ref={printRef} position="top-right"></arcgis-print>
    </arcgis-map>
  );
};

export default Demo1;
