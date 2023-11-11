// import { useState } from "react"

// export default function Navbar(){
//     const [nav, setNav]=useState(false)

//     const handleNav=()=>{
//         setNav(!nav)
//     }
//     return(<>
//         <div className=" bg-black flex justify-between items-center px-6  py-12 md:px-24">
//         <div>
//             <img src="../../Media/logo_black_bg-removebg-preview.png" alt="" className="w-40   lg:w-48:py-2 " />
//         </div>
//         <div className="[@media(max-width:890px)]:hidden">
//             <ul className="text-white flex items-center gap-12 font-inter font-light ">
//                 <a href=""><li>About us</li></a>
//                 <a href=""><li>Services</li></a>
//                 <a href=""><li>Projects</li></a>
//                 <a href="" className="bg-grey py-2 px-4 rounded-lg"><li>Contact Us</li></a>
//             </ul>
//         </div>
//         <div id="navmobile" className="hidden [@media(max-width:890px)]:block text-white " onClick={handleNav}>
//             <div id="menu" className="flex flex-col gap-2">
//                 <div className="w-12 h-[2px] bg-white"></div>
//                 <div className="w-12 h-[2px] bg-white"></div>
//                 <div className="w-12 h-[2px] bg-white"></div>
//             </div>
//             <div className={ nav ? 'fixed bg-slate-600 right-0 top-0 h-full w-[60%]  flex justify-center ease-in-out duration-700' : 'fixed right-[-100%]'}>
//             <ul className="text-white font-poppins font-semibold pt-24  flex flex-col gap-6">
//                 <a href="" className="pb-2 border-b-[1px]"><li>About us</li></a>
//                 <a href="" className="pb-2 border-b-[1px]"><li>Services</li></a>
//                 <a href="" className="pb-2 border-b-[1px]"><li>Projects</li></a>
//                 <a href="" className="pb-2 border-b-[1px]"><li>Contact Us</li></a>
//             </ul>
//             </div>

//         </div>
//         </div>

//     </>)
// }

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [nav, setNav] = useState(false);
    const mobileMenuRef = useRef(null);

    document.addEventListener("scroll", () => {
        const nav = document.getElementById("nav");
        const menu = document.getElementById("menu");
        if (window.scrollY > 0) {
            nav.classList.add("scrolled");
            menu.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
            menu.classList.remove("scrolled");
        }
    });
    const handleNav = () => {
        setNav(!nav);
    };

    const closeNav = () => {
        setNav(false);
    };

    useEffect(() => {
        // Function to handle clicks outside the mobile menu
        const handleOutsideClick = (e) => {
            if (
                nav &&
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(e.target)
            ) {
                // Close the mobile menu if it's open and the click is outside
                closeNav();
            }
        };

        // Attach the event listener when the component mounts
        document.addEventListener("click", handleOutsideClick);

        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [nav]);

    return (
        <>
            <div
                id="nav"
                className="fixed z-30 w-full transition-[background] .4 ease-in"
            >
                <div className="z-30 flex justify-between items-center px-6 py-6 md:px-24">
                    <div>
                        <Link to="/">
                            <img
                                src="./../Public/bg.jpg"
                                alt=""
                                className="w-44 lg:w-48 :py-2 "
                            />
                        </Link>
                    </div>
                    <div className="[@media(max-width:890px)]:hidden">
                        {/* Desktop menu */}
                        <ul className="text-white flex items-center gap-12 font-inter font-light">
                            <a href="">
                                <li>
                                    <Link to="/about">About us</Link>
                                </li>
                            </a>
                            <a href="">
                                <li>
                                    <Link to="/events">Events</Link>
                                </li>
                            </a>
                            <a href="">
                                <li>
                                    <Link to="/projects">Projects</Link>
                                </li>
                            </a>
                            <a
                                href=""
                                className="bg-black py-2 px-4 rounded-lg"
                            >
                                <li>
                                    <Link to="/contact">Contact Us</Link>
                                </li>
                            </a>
                        </ul>
                    </div>
                    <div
                        id="navmobile"
                        className="hidden [@media(max-width:890px)]:block text-white "
                        onClick={handleNav}
                        ref={mobileMenuRef} // Ref for the mobile menu container
                    >
                        {/* Mobile menu button */}
                        <div
                            id="menu"
                            className="bg-black flex flex-col gap-2 p-4 rounded-full"
                        >
                            <div className="w-5 h-[1px] bg-white"></div>
                            <div className="w-5 h-[1px] bg-white"></div>
                            <div className="w-5 h-[1px] bg-white"></div>
                        </div>
                        <div
                            className={
                                nav
                                    ? "fixed bg-slate-600 right-0 top-0 h-[150%] w-[60%]  flex justify-center ease-in duration-300"
                                    : "fixed right-[-100%] top-0 h-full w-[60%]  flex justify-center ease-in duration-300"
                            }
                        >
                            <div id="menu" className="pt-12 ">
                                <img
                                    className="pl-20"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABPklEQVR4nO2YS07DMBRFvRwYdAtAO+A7ohSYAcNSShmyZBYApRW/gyIaKUrsyBAn2NE949i5R5aT954xQgghhBAiOoABcBlwvxEwDLWf70u3gSfgA7gOsN8O8AwsO5MpSOR8NpEBdoGXwn5LYC9savuLLzYnQVMZYB94Le31BczbSW+XebcEmAaQeGg3fTXIuUPm1mPtAbCyrF10k74aaAK8WQLNatYcRiXxF5loJXKAM4fMXeGZI4fEvYkJ4ARYW4LOk5HIAU4dJ1N7WlECHFtOpnJKJgVwy6Qj0RsR7Jc+jUveq8sOjF2Bk/n84v4hzlL6q0+SL1H4kfhVBVxT+XZbvnuU8VPPXuT/ZbA3VlmXeNOwscp4bDd931pdYKs0fGg0SdlMULofPpRkMokrk+I4qFcDOiGEEEIIYXz4BtnffLYImZRxAAAAAElFTkSuQmCC"
                                />

                                {/* Mobile menu content */}
                                <ul className="text-white font-poppins font-semibold pt-16 flex flex-col gap-6">
                                    <a href="" className="pb-2 border-b-[1px]">
                                        <li>
                                            <Link to="/about">About us</Link>
                                        </li>
                                    </a>
                                    <a
                                        href="#services"
                                        className="pb-2 border-b-[1px]"
                                    >
                                        <Link to="/events">Events</Link>
                                    </a>
                                    <a href="" className="pb-2 border-b-[1px]">
                                        <li>
                                            <Link to="/projects">Projects</Link>
                                        </li>
                                    </a>
                                    <a href="" className="pb-2 border-b-[1px]">
                                        <li>
                                            <Link to="/contact">
                                                Contact us
                                            </Link>
                                        </li>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
