import Navbar from "./nav";
import Home from "./Home";

export default function Hompage(){
    return(
    <div className="relative " >
        <div className="absolute h-[100%] w-[100%] bg-[url('../../Media/pexels-charlotte-may-5825604.jpg')] bg-cover rotate-180 -z-10"></div>
        <Navbar/>
        <Home/>
    </div>
    )
}