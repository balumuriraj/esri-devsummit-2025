import "./App.css";

import "@esri/calcite-components/components/calcite-navigation";
import "@esri/calcite-components/components/calcite-navigation-logo";
import "@esri/calcite-components/components/calcite-shell";
import "@esri/calcite-components/components/calcite-menu";
import "@esri/calcite-components/components/calcite-menu-item";

import { Route, Routes } from "react-router";
import Demo1 from "./demos/Demo1";
import Demo2 from "./demos/Demo2";
import Home from "./Home";
import Demo3 from "./demos/Demo3";
import Demo4 from "./demos/Demo4";

function App() {
  const pathname = window.location.pathname;
  return (
    <calcite-shell>
      <calcite-navigation slot="header">
        <calcite-navigation-logo
          slot="logo"
          heading="Print for Web Developers"
          description={pathname}
        ></calcite-navigation-logo>
        <calcite-menu slot="content-end" label={""}>
          <calcite-menu-item
            active={pathname === "/"}
            text="Home"
            icon-start="home"
            text-enabled
            label={""}
            href="./"
          ></calcite-menu-item>
          <calcite-menu-item
            active={pathname === "/demo1"}
            text="Demo 1"
            icon-start="book"
            text-enabled
            label={""}
            href="./demo1"
          ></calcite-menu-item>
          <calcite-menu-item
            active={pathname === "/demo2"}
            text-enabled
            text="Demo 2"
            icon-start="book"
            label={""}
            href="./demo2"
          ></calcite-menu-item>
          <calcite-menu-item
            active={pathname === "/demo3"}
            text-enabled
            text="Demo 3"
            icon-start="book"
            label={""}
            href="./demo3"
          ></calcite-menu-item>
          <calcite-menu-item
            active={pathname === "/demo4"}
            text-enabled
            text="Demo 4"
            icon-start="book"
            label={""}
            href="./demo4"
          ></calcite-menu-item>
        </calcite-menu>
      </calcite-navigation>

      <Routes>
        <Route index element={<Home />} />
        <Route path="demo1" element={<Demo1 />} />
        <Route path="demo2" element={<Demo2 />} />
        <Route path="demo3" element={<Demo3 />} />
        <Route path="demo4" element={<Demo4 />} />
      </Routes>
    </calcite-shell>
  );
}

export default App;
