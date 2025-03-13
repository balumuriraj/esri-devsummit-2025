import "./App.css";

import "@esri/calcite-components/components/calcite-shell";
import "@esri/calcite-components/components/calcite-loader";

import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import NavBar from "./Components/NavBar";

const Home = lazy(() => import("./pages/Home"));
const Demo1 = lazy(() => import("./pages/Demo1"));
const Demo2 = lazy(() => import("./pages/Demo2"));
const Demo3 = lazy(() => import("./pages/Demo3"));
const Demo4 = lazy(() => import("./pages/Demo4"));
const Demo5 = lazy(() => import("./pages/Demo5"));

const Loading = () => (
  <div className="loading">
    <calcite-loader label={"loading"} />
  </div>
);

const HomePage = () => (
  <Suspense fallback={<Loading />}>
    <Home />
  </Suspense>
);

const Demo1Page = () => (
  <Suspense fallback={<Loading />}>
    <Demo1 />
  </Suspense>
);

const Demo2Page = () => (
  <Suspense fallback={<Loading />}>
    <Demo2 />
  </Suspense>
);

const Demo3Page = () => (
  <Suspense fallback={<Loading />}>
    <Demo3 />
  </Suspense>
);

const Demo4Page = () => (
  <Suspense fallback={<Loading />}>
    <Demo4 />
  </Suspense>
);

const Demo5Page = () => (
  <Suspense fallback={<Loading />}>
    <Demo5 />
  </Suspense>
);

function App() {
  return (
    <calcite-shell>
      <NavBar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="demo1" element={<Demo1Page />} />
        <Route path="demo2" element={<Demo2Page />} />
        <Route path="demo3" element={<Demo3Page />} />
        <Route path="demo4" element={<Demo4Page />} />
        <Route path="demo5" element={<Demo5Page />} />
      </Routes>
    </calcite-shell>
  );
}

export default App;
