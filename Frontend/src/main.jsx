import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Components/Home";
import About from "./Components/About";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <Home />
      {/* <About /> */}
    </React.StrictMode>
);
