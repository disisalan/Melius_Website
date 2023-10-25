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
                        <img src="frontend/Media/experiences/CAPS-Logo-removebg-preview.png" alt="" className="bg-white w-[100px] p-2 lg:w-[15%] lg:p-3 aspect-[3/2] object-contain rounded-xl" />
                        <img src="../../Media/experiences/ernst-young-ey-logo.png" alt="" className="bg-white w-[100px] p-2 lg:w-[15%] lg:p-3 aspect-[3/2] object-contain rounded-xl" />
                        <img src="../../Media/experiences/Internshala_company_logo.png" alt="" className="bg-white w-[100px] p-2 lg:w-[15%] lg:p-3 aspect-[3/2] object-contain rounded-xl" />
                        <img src="../../Media/experiences/kpmg-logo-1-removebg-preview.png" alt="" className="bg-white w-[100px] p-2 lg:w-[15%] lg:p-3 aspect-[3/2] object-contain rounded-xl" />
                        <img src="../../Media/experiences/Lenskart-Logo.png" alt="" className="bg-white w-[100px] p-2 lg:w-[15%] lg:p-3 aspect-[3/2] object-contain rounded-xl" />
                        <img src="../../Media/experiences/Marks_and_Spencer_Logo.png" alt="" className="bg-white w-[100px] p-2 lg:w-[15%] lg:p-3 aspect-[3/2] object-contain rounded-xl" />
                        <img src="../../Media/experiences/Max_Life_Insurance_logo-removebg-preview.png" alt="" className="bg-white w-[100px] p-2 lg:w-[15%] lg:p-3 aspect-[3/2] object-contain rounded-xl" />
                        <img src="../../Media/experiences/mazars-logo.png" alt="" className="bg-white w-[100px] p-2 lg:w-[15%] lg:p-3 aspect-[3/2] object-contain rounded-xl" />
                        <img src="../../Media/experiences/MobiKwik-Logo.png" alt="" className="bg-white w-[100px] p-2 lg:w-[15%] lg:p-3 aspect-[3/2] object-contain rounded-xl" />
                        <img src="../../Media/experiences/Natwest-Logo-removebg-preview.png" alt="" className="bg-white w-[100px] p-2 lg:w-[15%] lg:p-3 aspect-[3/2] object-contain rounded-xl" />
                        <img src="../../Media/experiences/NITI-Aayog-logo-removebg-preview.png" alt="" className="bg-white w-[100px] p-2 lg:w-[15%] lg:p-3 aspect-[3/2] object-contain rounded-xl" />
                        <img src="../../Media/experiences/SBI_card_logo-removebg-preview.png" alt="" className="bg-white w-[100px] p-2 lg:w-[15%] lg:p-3 aspect-[3/2] object-contain rounded-xl" />
                        {/* <img src="../Media/experiences/VISTARA-LOGO.png" alt="" className="bg-white w-[100px] px-1 lg:w-[15%] lg:p-3 aspect-[3/2] object-contain rounded-xl" /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}