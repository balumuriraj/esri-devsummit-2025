import "./App.css";

import "@esri/calcite-components/components/calcite-navigation";
import "@esri/calcite-components/components/calcite-navigation-logo";
import "@esri/calcite-components/components/calcite-shell";
import "@esri/calcite-components/components/calcite-menu";
import "@esri/calcite-components/components/calcite-menu-item";

import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const Demo1 = lazy(() => import("./pages/Demo1"));
const Demo2 = lazy(() => import("./pages/Demo2"));
const Demo3 = lazy(() => import("./pages/Demo3"));
const Demo4 = lazy(() => import("./pages/Demo4"));

const HomePage = () => {
  const location = useLocation();
  return (
    <Suspense fallback={<div className="loading">Page is Loading...</div>}>
      <Home key={location.key} />
    </Suspense>
  );
};

const Demo1Page = () => {
  const location = useLocation();
  return (
    <Suspense fallback={<div className="loading">Page is Loading...</div>}>
      <Demo1 key={location.key} />
    </Suspense>
  );
};

const Demo2Page = () => {
  const location = useLocation();
  return (
    <Suspense fallback={<div className="loading">Page is Loading...</div>}>
      <Demo2 key={location.key} />
    </Suspense>
  );
};

const Demo3Page = () => {
  const location = useLocation();
  return (
    <Suspense fallback={<div className="loading">Page is Loading...</div>}>
      <Demo3 key={location.key} />
    </Suspense>
  );
};

const Demo4Page = () => {
  const location = useLocation();
  return (
    <Suspense fallback={<div className="loading">Page is Loading...</div>}>
      <Demo4 key={location.key} />
    </Suspense>
  );
};

function App() {
  const pathname = window.location.pathname;
  const navigate = useNavigate();

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
            onClick={() => navigate("/", { replace: true })}
          ></calcite-menu-item>
          <calcite-menu-item
            active={pathname === "/demo1"}
            text="Demo 1"
            icon-start="book"
            text-enabled
            label={""}
            onClick={() => navigate("/demo1", { replace: true })}
          ></calcite-menu-item>
          <calcite-menu-item
            active={pathname === "/demo2"}
            text-enabled
            text="Demo 2"
            icon-start="book"
            label={""}
            onClick={() => navigate("/demo2", { replace: true })}
          ></calcite-menu-item>
          <calcite-menu-item
            active={pathname === "/demo3"}
            text-enabled
            text="Demo 3"
            icon-start="book"
            label={""}
            onClick={() => navigate("/demo3", { replace: true })}
          ></calcite-menu-item>
          <calcite-menu-item
            active={pathname === "/demo4"}
            text-enabled
            text="Demo 4"
            icon-start="book"
            label={""}
            onClick={() => navigate("/demo4", { replace: true })}
          ></calcite-menu-item>
        </calcite-menu>
      </calcite-navigation>

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="demo1" element={<Demo1Page />} />
        <Route path="demo2" element={<Demo2Page />} />
        <Route path="demo3" element={<Demo3Page />} />
        <Route path="demo4" element={<Demo4Page />} />
      </Routes>
    </calcite-shell>
  );
}

export default App;
