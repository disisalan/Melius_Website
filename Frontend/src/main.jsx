import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Components/Home";
import Info from "./Components/Info";
import About from "./Components/About";
import Navbar from "./Components/nav";
import Services from "./Components/Services";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <Home />
      <Services />
      <About />
      <Info />
    </React.StrictMode>
);
