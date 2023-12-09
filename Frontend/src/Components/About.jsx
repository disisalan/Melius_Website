import AboutImg from '../../Public/aboutImage.png';
import OurVision from '../../Public/ourVisionImage.png'
import Mission1 from '../../Public/missions.png'
import Mission2 from '../../Public/missions.png'
import Mission3 from '../../Public/missions.png'

export default function About() {
    return (
        <div className="bg-black text-white flex font-poppins">
            {/* Main */}
            <div className="w-10/12 mx-auto lg:w-3/4 my-10">

                {/* About Us Section */}
                <div className="flex flex-col justify-evenly gap-5 sm:gap-10 lg:flex-row my-10 lg:my-20">
                    {/* Image Parent Window */}
                    <div className="flex justify-center items-center">
                        <img src={AboutImg} alt="" className="" />
                    </div>

                    {/* Text Section for About Us */}
                    <div className="text-gray flex flex-col w-full gap-2 sm:gap-5 lg:gap-3 xl:gap-4">
                        <h1 className="text-4xl sm:text-6xl sm:pb-2 md:text-5xl lg:text-6xl xl:mb-5 font-bold border-b-4 border-blue pb-1 w-max">About Us</h1>
                        <p className="text-base font-light md:text-xl">
                            Melius -The Consulting and Analytics Club at Maharaja Surajmal Institute, affiliated with GGSIP University, is a student-led consulting hub. With an inclusive approach, we nurture analytical skills through live projects, case studies, and industry lectures. Founded in Nov 2022, we're driven by professionalism, delivering value, and shaping future consultants. Elevate your skills and network with us for a brighter consulting future.
                        </p>
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
                        <p className="text-base font-light md:text-xl">
                            Our Vision encompasses student-led initiatives that drive positive change within our college community and beyond, demonstrating the potential of young age professionals to make a meaningful impact through consulting. We aim to be a preferred student consultancy and strategic partner to coporates & NPOs by 2026.
                        </p>

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
                                <h1 className="font-bold text-xl md:text-2xl p-2">
                                    Hands-On Experience
                                </h1>
                                <p className="text-xs font-light md:text-base lg:text-xs flex flex-col gap-2">
                                    <p>
                                        <b>Practical Learning: </b>
                                        We believe in learning by doing. Our immersive workshops and simulations bridge the gap between theory and practical application, equipping students with the ability to turn concepts into real-world solutions.
                                    </p>
                                    <p>
                                        <b>Active Problem-Solving: </b>
                                        Our students thrive on authentic challenges. They sharpen their decision-making skills and gain practical insights by applying them in live projects and case studies. It's more than education; it's the training ground for future consultants.
                                    </p>
                                </p>
                            </div>
                        </div>
                        {/* mission 2 */}
                        <div className="mx-auto my-3 lg:my-10">
                            <img src={Mission2} alt="" className="w-[60%] mx-auto md:w-2/4 lg:w-[60%]" />

                            {/* caption for mission */}
                            <div className="text-center mt-2">
                                <h1 className="font-bold text-xl md:text-2xl p-2">
                                    Skill Development
                                </h1>
                                <p className="text-xs font-light md:text-base lg:text-xs flex flex-col gap-2">
                                    <p>
                                        <b>Tailored Growth: </b>
                                        We, at Melius, understand that every industry and client has unique demands. That's why we focus on enhancing industry-specific skills, ensuring our students are well-equipped to adapt and deliver lasting improvements tailored to each client's needs.
                                    </p>
                                    <p>
                                        <b>Lifelong Learning: </b>
                                        In a rapidly changing business landscape, adaptability is key. Our commitment to adaptable skills means that our clients thrive amidst evolving challenges, making lifelong learning a core part of our approach.
                                    </p>
                                </p>
                            </div>
                        </div>
                        {/* mission 3 */}
                        <div className="mx-auto my-3 lg:my-10">
                            <img src={Mission3} alt="" className="w-[60%] mx-auto md:w-2/4 lg:w-[60%]" />

                            {/* caption for mission */}
                            <div className="text-center mt-2">
                                <h1 className="font-bold text-xl md:text-2xl p-2">
                                    Network Building
                                </h1>
                                <p className="text-xs font-light md:text-base lg:text-xs flex flex-col gap-2">
                                    <p>
                                        <b>Strategic Connections: </b>
                                        Our students have access to a vast cross-industry network through collaborative events and workshops. It's not just about what you know but also who you know, and we make sure those connections are strategic and valuable.
                                    </p>
                                    <p>
                                        <b>Community Support: </b>
                                        We're more than just a club; we're a consulting ecosystem. Our community is dedicated to sharing insights, fostering diversity, and creating a supportive environment where our students can learn and grow together.
                                    </p>
                                </p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}