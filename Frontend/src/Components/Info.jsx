import Caps from "/CAPS-Logo-removebg-preview.png"
import EYLogo from "/ernst-young-ey-logo.png"
import Internshala from "/Internshala_company_logo.png";
import Kpmg from "/kpmg-logo-1-removebg-preview.png";
import Lenskart from "/Lenskart-Logo.png";
import MarksNSpencer from "/Marks_and_Spencer_Logo.png";
import MaxLife from "/Max_Life_Insurance_logo-removebg-preview.png";
import Mazars from "/mazars-logo.png";
import MobiKwik from "/MobiKwik-Logo.png";
import Natwest from "/Natwest-Logo-removebg-preview.png";
import NITIAyog from "/NITI-Aayog-logo-removebg-preview.png";
import SBICard from "/SBI_card_logo-removebg-preview.png";

export default function Info() {
    return (
        <div className="flex text-white bg-black font-inter">
            {/* main */}
            <div className="mx-auto w-10/12 lg:w-3/4 flex flex-col gap-10 my-10">

                {/* What do consultants do */}
                <div>
                    {/* Heading */}
                    <div className="flex justify-between items-center gap-3 md:gap-5">
                        <h1 className="font-poppins font-bold py-2 text-4xl w-max md:text-4xl lg:text-5xl xl:text-6xl">What do Consultants DO?</h1>
                        <div className="md:h-px md:bg-white md:flex-grow"></div>
                    </div>

                    {/* Description */} 
                    <p className="w-11/12 flex flex-wrap mx-auto my-2 text-sm font-light md:text-2xl md:my-6 md:text-center">Business consultant is like the Sherlock Holmes of corporate world, but instead of solving crimes, they're cracking the case of why your sales are as elusive as a unicorn. Armed with a magnifying glass of data and a pipe filled with wisdon (or maybe just a really good cup of coffee), they dive deep into your company's operations, em...</p>

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
                        {/* <img src="../Media/experiences/VISTARA-LOGO.png" alt="" className="bg-white w-[100px] px-1 lg:w-[15%] lg:p-3 aspect-[3/2] object-contain rounded-xl" /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}