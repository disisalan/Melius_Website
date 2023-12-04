import Navbar from "./nav";
import Home from "./Home";
import Services from "./Services";
import Info from "./Info";
import Team from "./Team";
import Contact from "./Contact";
import HomePageImg from "/bg.jpg";

export default function Hompage() {
    return (
        <>
            <div className="relative ">
                <div 
                    className="absolute h-[100%] w-[100%] bg-cover -z-10"
                    style={{ backgroundImage: `url(${HomePageImg})` }}
                ></div>
                <Home />
            </div>
            <Services />
            <Info />
            <Team />
            <Contact />
        </>
    );
}
