import Navbar from "./nav";
import Home from "./Home";
import Services from "./Services";
import Info from "./Info";
import Team from "./Team";
import Contact from "./Contact";

export default function Hompage() {
    return (
        <>
            <div className="relative ">
                <div className="absolute h-[100%] w-[100%] bg-[url('./pexels-charlotte-may-5825604.jpg')] bg-cover rotate-180 -z-10"></div>
                <Home />
            </div>
            <Services />
            <Info />
            <Team />
            <Contact />
        </>
    );
}
