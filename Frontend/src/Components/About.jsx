export default function About() {
    return (
        <div className="bg-[#000000] text-white flex justify-center">
            <div className="w-3/4">

                {/* Main */}
                <div className="flex justify-evenly my-20">
                    {/* About Us Window */}
                    <div className="h-96 w-96 flex justify-center items-center">
                        {/* Image Parent Window */}
                        <div className="container mx-auto">
                            {/* Ima3ge holder */}
                            <img src="../../Media/bg-1.png" alt="" className="h-96 w-96"/>
                        </div>
                    </div>

                    <div className="w-1/2">
                        {/* Text Section for About Us */}
                        <h1 className="text-6xl font-bold h-20 border-b-4 border-[#264af9] mb-5">About Us</h1>
                        <p className="text-xl mt-10">Melius- The Consulting & Analytics Club at Maharaja Surajmal Institute, affiliated with GGSIPU University, is a student-led consulting club.</p>
                        <p className="text-xl">We're driven by professionalism, delivering value and shaping future consultants. With an inclusive approach, we nurture analytical skills through live projects, case studies, and industry lectures.</p>
                    </div>
                </div>

                <div className="flex justify-evenly my-20">
                    {/* Our Visions Window*/}
                    <div className="w-1/2">
                        {/* Text Section for Our Visions */}
                        <h1 className="text-6xl font-bold h-20 border-b-4 border-[#264af9] mb-5">Our Visions</h1>
                        <p className="text-xl mt-10">Our Vision encompasses student-led initiatives that drive positive change within our college community and beyond, demonstrating the potential of young age professionals to make a meaningful impact through consulting. We aim to be a preferred student consultancy and strategic partner to coporates & NPOs by 2026.</p>
                        
                    </div>
                    <div className="h-96 w-96 flex justify-center items-center">
                        {/* Image Parent Window */}
                        <div className="">
                            {/* Image holder */}
                            <img src="../../Media/bg-2.png" alt="" className="h-96 w-96"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}