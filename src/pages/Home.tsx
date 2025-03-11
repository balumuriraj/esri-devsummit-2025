import "@esri/calcite-components/components/calcite-button";
import "@esri/calcite-components/components/calcite-icon";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        padding: "1rem",
        position: "relative",
      }}
    >
      <div style={{ position: "absolute", bottom: "50%", opacity: 0.025 }}>
        <calcite-icon
          style={{ width: "100%", height: "100%" }}
          scale="l"
          icon="print"
        />
      </div>
      <div style={{ fontSize: "20px" }}>Welcome to</div>
      <div
        style={{ fontSize: "40px", fontWeight: "bold", paddingBottom: "1rem" }}
      >
        Print for Web Developers
      </div>
      <Link to="/demo1">
        <calcite-button icon-start="print" scale="l">
          Get Started
        </calcite-button>
      </Link>
    </div>
  );
};

export default Home;
