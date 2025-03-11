import "@esri/calcite-components/components/calcite-navigation";
import "@esri/calcite-components/components/calcite-navigation-logo";
import "@esri/calcite-components/components/calcite-menu";
import "@esri/calcite-components/components/calcite-menu-item";

import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <calcite-navigation slot="header">
      <calcite-navigation-logo
        slot="logo"
        heading="Print for Web Developers"
        description={pathname}
      ></calcite-navigation-logo>
      <calcite-menu slot="content-end" label={""}>
        <Link to="/">
          <calcite-menu-item
            active={pathname === "/"}
            text="Home"
            icon-start="home"
            text-enabled
            label={"Home"}
          ></calcite-menu-item>
        </Link>
        <Link to="/demo1">
          <calcite-menu-item
            active={pathname === "/demo1"}
            text="Demo 1"
            icon-start="book"
            text-enabled
            label={"Demo1"}
          ></calcite-menu-item>
        </Link>
        <Link to="/demo2">
          <calcite-menu-item
            active={pathname === "/demo2"}
            text-enabled
            text="Demo 2"
            icon-start="book"
            label={"Demo2"}
          ></calcite-menu-item>
        </Link>
        <Link to="/demo3">
          <calcite-menu-item
            active={pathname === "/demo3"}
            text-enabled
            text="Demo 3"
            icon-start="book"
            label={"Demo3"}
          ></calcite-menu-item>
        </Link>
        <Link to="/demo4">
          <calcite-menu-item
            active={pathname === "/demo4"}
            text-enabled
            text="Demo 4"
            icon-start="book"
            label={"Demo4"}
          ></calcite-menu-item>
        </Link>
      </calcite-menu>
    </calcite-navigation>
  );
};

export default NavBar;
