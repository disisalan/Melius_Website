import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Hompage from "./Components/Homepage";
import Info from "./Components/Info";
import About from "./Components/About";
import Services from "./Components/Services";
import Team from "./Components/Team";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <Hompage />
      <Services />
      <About />
      <Info />
      <Team />
    </React.StrictMode>
);
