import Caps from "../../Public/CAPS-Logo-removebg-preview.png"
import EYLogo from "../../Public/ernst-young-ey-logo.png"
import Internshala from "../../Public/Internshala_company_logo.png";
import Kpmg from "../../Public/kpmg-logo-1-removebg-preview.png";
import Lenskart from "../../Public/Lenskart-Logo.png";
import MarksNSpencer from "../../Public/Marks_and_Spencer_Logo.png";
import MaxLife from "../../Public/Max_Life_Insurance_logo-removebg-preview.png";
import Mazars from "../../Public/mazars-logo.png";
import MobiKwik from "../../Public/MobiKwik-Logo.png";
import Natwest from "../../Public/Natwest-Logo-removebg-preview.png";
import NITIAyog from "../../Public/NITI-Aayog-logo-removebg-preview.png";
import SBICard from "../../Public/SBI_card_logo-removebg-preview.png";
// import Vistara from "../../Public/experiences/VISTARA-LOGO.png"

export default function Info() {
    return (
        <div className="flex text-white bg-black font-inter">
            {/* main */}
            <div className="mx-auto w-10/12 lg:w-3/4 flex flex-col gap-10 my-10">

                {/* What do consultants do */}
                <div>
                    {/* Heading */}
                    <div className="flex justify-between items-center gap-3 md:gap-5">
                        <h1 className="font-poppins font-bold py-2 text-4xl w-max md:text-4xl lg:text-5xl xl:text-6xl">
                            What do Consultants DO?
                        </h1>
                        <div className="md:h-px md:bg-white md:flex-grow"></div>
                    </div>

                    {/* Description */}
                    <p className="w-11/12 flex flex-wrap mx-auto my-2 text-sm font-light md:text-base md:my-6 md:text-center">
                        At Melius, we are the driving force behind innovation, problem-solving, and success. Our expert consultants are your strategic partners in navigating the dynamic business landscape of today. From data-driven insights to cutting-edge strategies, we deliver tailored solutions to amplify your potential and drive transformation. We specialize in market analysis, digital transformation, and organizational optimization, guiding you towards higher profitability and sustainable growth. With a finger on the pulse of emerging trends and a commitment to excellence, our consultants empower your business to thrive in an ever-evolving world. Discover how we can revolutionize your business strategy.
                    </p>

                    {/* Read more button */}
                    <div className="flex my-5">
                        <button className="bg-blue rounded-full py-3 px-5 font-semibold mx-auto md:text-2xl">Read More</button>
                    </div>
                </div>

                {/* Past Experiences */}
                <div className="flex flex-col gap-5 md:gap-10">
                    {/* Heading */}
                    <div className="flex md:flex-row-reverse justify-between items-center gap-3 md:gap-5">
                        <h1 className="font-poppins font-bold text-4xl w-max md:text-4xl lg:text-5xl xl:text-6xl ">Past Experiences</h1>
                        <div className="md:h-px md:bg-white md:flex-grow"></div>
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center lg:gap-10">
                        <img src={Caps} alt="" className="bg-white w-[100px] p-2 lg:w-[15%] lg:p-3 aspect-[3/2] object-contain rounded-xl" />
                        <img src={EYLogo} alt="" className="bg-white w-[100px] p-2 lg:w-[15%] lg:p-3 aspect-[3/2] object-contain rounded-xl" />
                        <img src={Internshala} alt="" className="bg-white w-[100px] p-2 lg:w-[15%] lg:p-3 aspect-[3/2] object-contain rounded-xl" />
                        <img src={Kpmg} alt="" className="bg-white w-[100px] p-2 lg:w-[15%] lg:p-3 aspect-[3/2] object-contain rounded-xl" />
                        <img src={Lenskart} alt="" className="bg-white w-[100px] p-2 lg:w-[15%] lg:p-3 aspect-[3/2] object-contain rounded-xl" />
                        <img src={MarksNSpencer} alt="" className="bg-white w-[100px] p-2 lg:w-[15%] lg:p-3 aspect-[3/2] object-contain rounded-xl" />
                        <img src={MaxLife} alt="" className="bg-white w-[100px] p-2 lg:w-[15%] lg:p-3 aspect-[3/2] object-contain rounded-xl" />
                        <img src={Mazars} alt="" className="bg-white w-[100px] p-2 lg:w-[15%] lg:p-3 aspect-[3/2] object-contain rounded-xl" />
                        <img src={MobiKwik} alt="" className="bg-white w-[100px] p-2 lg:w-[15%] lg:p-3 aspect-[3/2] object-contain rounded-xl" />
                        <img src={Natwest} alt="" className="bg-white w-[100px] p-2 lg:w-[15%] lg:p-3 aspect-[3/2] object-contain rounded-xl" />
                        <img src={NITIAyog} alt="" className="bg-white w-[100px] p-2 lg:w-[15%] lg:p-3 aspect-[3/2] object-contain rounded-xl" />
                        <img src={SBICard} alt="" className="bg-white w-[100px] p-2 lg:w-[15%] lg:p-3 aspect-[3/2] object-contain rounded-xl" />
                        {/* <img src={Vistara} alt="" className="bg-white w-[100px] px-1 lg:w-[15%] lg:p-3 aspect-[3/2] object-contain rounded-xl" /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}