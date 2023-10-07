import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Navbar from "./Components/nav";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      {/* <Home />
      <About /> */}
      <Navbar/>
      <Home/>
    </React.StrictMode>
);
