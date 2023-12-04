import AboutImg from '/aboutImage.png';
import OurVision from '/ourVisionImage.png'
import Mission1 from '/missions.png'
import Mission2 from '/missions.png'
import Mission3 from '/missions.png'

export default function About() {
    return (
        <div className="bg-black text-white flex font-poppins">
            {/* Main */}
            <div className="w-10/12 mx-auto lg:w-3/4">

                {/* About Us Section */}
                <div className="flex flex-col justify-evenly gap-5 sm:gap-10 lg:flex-row my-10 lg:my-20">
                    {/* Image Parent Window */}
                    <div className="flex justify-center items-center">
                        <img src={AboutImg} alt="" className="" />
                    </div>

                    {/* Text Section for About Us */}
                    <div className="text-gray flex flex-col w-full gap-2 sm:gap-5 lg:gap-3 xl:gap-4">
                        <h1 className="text-4xl sm:text-6xl sm:pb-2 md:text-5xl lg:text-6xl xl:mb-5 font-bold border-b-4 border-blue pb-1 w-max">About Us</h1>
                        <p className="text-base font-light md:text-xl">Melius- The Consulting & Analytics Club at Maharaja Surajmal Institute, affiliated with GGSIPU University, is a student-led consulting club.</p>
                        <p className="text-base font-light md:text-xl">We're driven by professionalism, delivering value and shaping future consultants. With an inclusive approach, we nurture analytical skills through live projects, case studies, and industry lectures.</p>
                    </div>
                </div>

                {/* Our visions Section */}
                <div className="flex flex-col justify-evenly gap-5 sm:gap-10 lg:flex-row-reverse my-10 lg:my-20">
                    {/* Image Parent Window */}
                    <div className="flex justify-center items-center">
                        <img src={OurVision} alt="" className="" />
                    </div>

                    {/* Text Section for Our visions */}
                    <div className="text-gray flex flex-col w-full gap-2 sm:gap-5 lg:gap-3 xl:gap-4">
                        <h1 className="text-4xl sm:text-6xl sm:pb-2 md:text-5xl lg:text-6xl xl:mb-5 font-bold border-b-4 border-blue pb-1 w-max">Our Vision</h1>
                        <p className="text-base font-light md:text-xl">Our Vision encompasses student-led initiatives that drive positive change within our college community and beyond, demonstrating the potential of young age professionals to make a meaningful impact through consulting. We aim to be a preferred student consultancy and strategic partner to coporates & NPOs by 2026.</p>

                    </div>
                </div>

                {/* Our Mission Section */}
                <div className="">
                    <div className="flex justify-center">
                        <h1 className="inline-block text-4xl font-bold pb-1 border-b-4 border-blue md:text-6xl">Our Mission</h1>
                    </div>

                    {/* Our mission contents */}
                    <div className="flex flex-col lg:flex-row lg:gap-3">

                        {/* mission 1 */}
                        <div className="mx-auto my-3 lg:my-10">
                            <img src={Mission1} alt="" className="w-[60%] mx-auto md:w-2/4 lg:w-[60%]" />

                            {/* caption for mission */}
                            <div className="text-center mt-2">
                                <h1 className="font-bold text-xl md:text-4xl">Lorem Ipsum</h1>
                                <p className="text-xs font-light md:text-2xl lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, atque ex. Nulla, tempora corporis dolor non sunt quas est eveniet et, quisquam omnis error quaerat in nobis blanditiis, illum soluta? </p>
                            </div>
                        </div>

                        {/* mission 2 */}
                        <div className="mx-auto my-3 lg:my-10">
                            <img src={Mission2} alt="" className="w-[60%] mx-auto md:w-2/4 lg:w-[60%]" />

                            {/* caption for mission */}
                            <div className="text-center mt-2">
                                <h1 className="font-bold text-xl md:text-4xl">Lorem Ipsum</h1>
                                <p className="text-xs font-light md:text-2xl lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, atque ex. Nulla, tempora corporis dolor non sunt quas est eveniet et, quisquam omnis error quaerat in nobis blanditiis, illum soluta? </p>
                            </div>
                        </div>

                        {/* mission 3 */}
                        <div className="mx-auto my-3q lg:my-10">
                            <img src={Mission3} alt="" className="w-[60%] mx-auto md:w-2/4 lg:w-[60%]" />

                            {/* caption for mission */}
                            <div className="text-center mt-2">
                                <h1 className="font-bold text-xl md:text-4xl">Lorem Ipsum</h1>
                                <p className="text-xs font-light md:text-2xl lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, atque ex. Nulla, tempora corporis dolor non sunt quas est eveniet et, quisquam omnis error quaerat in nobis blanditiis, illum soluta? </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}