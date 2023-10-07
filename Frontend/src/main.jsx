import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Components/Home";
import Info from "./Components/Info";
import About from "./Components/About";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <Home />
      <Info />
      <About />
    </React.StrictMode>
);
