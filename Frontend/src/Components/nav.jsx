export default function Navbar(){
    return(<>
        <div className=" bg-black flex justify-between items-center px-6  py-12 md:px-24">
        <div>
            <img src="../../Media/logo_black_bg-removebg-preview.png" alt="" className="w-40   lg:w-48:py-2 " />
        </div>
        <div className="[@media(max-width:890px)]:hidden">
            <ul className="text-white flex items-center gap-12 font-inter font-light ">
                <a href=""><li>About us</li></a>
                <a href=""><li>Services</li></a>
                <a href=""><li>Projects</li></a>
                <a href="" className="bg-grey py-2 px-4 rounded-lg"><li>Contact Us</li></a>
            </ul>
        </div>
        <div id="navmobile" className="hidden [@media(max-width:890px)]:block text-white ">
            <div id="menu" className="flex flex-col gap-3">
                <div className="w-12 h-1 bg-white"></div>
   
            </div>
        </div>
        </div>
    
    </>)
}