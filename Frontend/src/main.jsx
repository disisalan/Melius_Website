import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Hompage from "./Components/Homepage";
import Contact from "./Components/Contact";
import Events from "./Components/Events";
import About from "./Components/About";
import TeamList from "./Components/TeamList";
import Footer from "./Components/Footer";
import Navbar from "./Components/nav";
import Projects from "./Components/Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventDetail from "./Components/event_detail";
import ProjectDetail from "./Components/ProjectDetail";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Hompage />} />
                <Route path="/about" element={<About />} />
                <Route path="/team" element={<TeamList />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:id" element={<ProjectDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/events" element={<Events />} />
                <Route path="/events/:id" element={<EventDetail />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </React.StrictMode>
);
