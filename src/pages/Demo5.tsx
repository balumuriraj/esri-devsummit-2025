import { useEffect, useRef, useState } from "react";

import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-print";
import "@arcgis/map-components/components/arcgis-placement";
import "@arcgis/map-components/components/arcgis-expand";

import CodeBlock from "../Components/CodeBlock";

const Demo5 = () => {
  const [print, setPrint] = useState<HTMLArcgisPrintElement | undefined>();
  const printRef = useRef<HTMLArcgisPrintElement>(null);
  const codeHtml = `
  <arcgis-map
    item-id="91af6caa495d440187ec3937e43a818e"
    onarcgisViewReadyChange={handleArcgisViewReadyChange}
  >
    <arcgis-print 
      ref={printRef} 
      position="top-right" 
      onarcgisComplete={handleArcgisComplete}
    ></arcgis-print>
  </arcgis-map>
  `;

  const handleArcgisViewReadyChange = (
    event: HTMLArcgisMapElement["arcgisViewReadyChange"]
  ) => {
    const print = printRef.current;

    if (print && event.target.view) {
      print.showPrintAreaEnabled = true;
      const links = localStorage.getItem("printLinks");
      print.exportedLinks = links ? JSON.parse(links) : [];
      setPrint(print);
    }
  };

  const codeHandleArcgisViewReadyChange = `
  const handleArcgisViewReadyChange = (
    event: HTMLArcgisMapElement["arcgisViewReadyChange"]
  ) => {
    const print = printRef.current;

    if (print && event.target.view) {
      print.showPrintAreaEnabled = true;
      const links = localStorage.getItem("printLinks");
      print.exportedLinks = links ? JSON.parse(links) : [];
      setPrint(print);
    }
  };
  `;

  const handleArcgisComplete = (
    event: HTMLArcgisPrintElement["arcgisComplete"]
  ) => {
    const result = event.detail as unknown as __esri.PrintCompleteEventResults;
    const link = result.link as unknown as __esri.FileLink;

    if (link && link.state === "ready") {
      const links = JSON.parse(localStorage.getItem("printLinks") || "[]");
      links.push({
        name: link.name,
        url: link.url,
        state: link.state,
        count: link.count,
        extension: link.extension,
      });
      localStorage.setItem("printLinks", JSON.stringify(links));
    }
  };

  const codeHandleArcgisComplete = `
  const handleArcgisComplete = (
    event: HTMLArcgisPrintElement["arcgisComplete"]
  ) => {
    const result = event.detail as unknown as __esri.PrintCompleteEventResults;
    const link = result.link as unknown as __esri.FileLink;

    if (link && link.state === "ready") {
      const links = JSON.parse(localStorage.getItem("printLinks") || "[]");
      links.push({
        name: link.name,
        url: link.url,
        state: link.state,
        count: link.count,
        extension: link.extension,
      });
      localStorage.setItem("printLinks", JSON.stringify(links));
    }
  };
  `;

  const codeRemoveLink = `
  const handle = print?.exportedLinks.on("after-remove", (event) => {
    const links = JSON.parse(localStorage.getItem("printLinks") || "[]");
    const removedLink = event.item;
    const newLinks = links.filter(
      (link: { url: string }) => link.url !== removedLink.url
    );
    localStorage.setItem("printLinks", JSON.stringify(newLinks));
  });
  `;

  useEffect(() => {
    const handle = print?.exportedLinks.on("after-remove", (event) => {
      const links = JSON.parse(localStorage.getItem("printLinks") || "[]");
      const removedLink = event.item;
      const newLinks = links.filter(
        (link: { url: string }) => link.url !== removedLink.url
      );
      localStorage.setItem("printLinks", JSON.stringify(newLinks));
    });

    // returned function will be called on component unmount
    return () => {
      print?.destroy();
      handle?.remove();
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
          <CodeBlock
            code={codeHandleArcgisComplete}
            language={"javascript"}
          ></CodeBlock>
        </arcgis-placement>
      </arcgis-expand>

      <arcgis-expand position="top-left">
        <arcgis-placement>
          <CodeBlock
            code={codeHandleArcgisViewReadyChange}
            language={"javascript"}
          ></CodeBlock>
        </arcgis-placement>
      </arcgis-expand>

      <arcgis-expand position="top-left">
        <arcgis-placement>
          <CodeBlock
            code={codeRemoveLink}
            language={"javascript"}
          ></CodeBlock>
        </arcgis-placement>
      </arcgis-expand>

      <arcgis-print
        ref={printRef}
        position="top-right"
        onarcgisComplete={handleArcgisComplete}
      ></arcgis-print>
    </arcgis-map>
  );
};

export default Demo5;
