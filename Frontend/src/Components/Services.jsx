export default function Services() {
    return (
        <div className="flex py-5 bg-black text-white font-inter" id="services">

            {/* main */}
            <div className="px-6 md:px-12 lg:px-24 lg:flex flex-col gap-20 lg:flex-row lg:justify-center">

                {/* heading */}
                <div className="flex flex-row gap-20 lg:justify-center lg:items-center lg:flex-col-reverse ">
                    {/* Line */}
                    <div className="lg:w-px lg:bg-white lg:h-1/3 hidden lg:inline-block"></div>

                    {/* Text */}
                    <div className="my-5 lg:my-0 font-bold font-poppins text-4xl md:text-4xl lg:text-5xl flex flex-row lg:flex-col gap-2 border-b-4 border-blue pb-1 lg:border-0 lg:pb-0 lg:-rotate-90">
                        <p>Our</p>
                        <p className="lg:text-blue">Services</p>
                    </div>
                </div>

                {/* Researches */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:w-4/5 py-3">
                    {/* Research 1 */}
                    <div className="flex flex-col p-5 md:gap-2 lg:gap-5 bg-grey/20 rounded-md">
                        <h1 className="font-bold text-2xl md:text-3xl font-poppins">
                            Non Profit Organisation
                        </h1>
                        <p className="font-light text-sm md:text-base md:text-white">
                            Melius provides nonprofits a comprehensive suite of services. We develop effective fundraising strategies, optimize resource allocation, and enhance operational efficiency for financial sustainability. Our compelling marketing strategies and campaigns inspire action and raise awareness, engaging the community emotionally. Rigorous impact measurement ensures that nonprofit efforts drive lasting change. Together, we empower positive transformations with a lasting impact.
                        </p>
                    </div>
                    {/* Research 2 */}
                    <div className="flex flex-col p-5 md:gap-2 lg:gap-5 bg-grey/20 rounded-md">
                        <h1 className="font-bold text-2xl md:text-3xl font-poppins">
                            Startups
                        </h1>
                        <p className="font-light text-sm md:text-base md:text-white">
                            Melius offers comprehensive services tailored for startups. We specialize in crafting effective market entry and go-to-market (GTM) strategies, meticulously identifying and segmenting customer bases, and executing growth-focused marketing tactics. Our aim is to maximize revenue while simultaneously enhancing operational efficiency, ensuring startups can scale and thrive in the competitive business landscape.
                        </p>
                    </div>
                    {/* Research 3 */}
                    <div className="flex flex-col p-5 md:gap-2 lg:gap-5 bg-grey/20 rounded-md">
                        <h1 className="font-bold text-2xl md:text-3xl font-poppins">
                            Data Analytics
                        </h1>
                        <p className="font-light text-sm md:text-base md:text-white">
                            Melius offers vital data analytics services to businesses, aiding in their day-to-day operations. We take on data analytics projects with a commitment to providing actionable insights, improving decision-making, and enhancing overall operational efficiency. By leveraging data-driven solutions, we empower businesses to adapt, grow, and stay competitive in today's dynamic and data-rich environment.
                        </p>
                    </div>
                    {/* Research 1 */}
                    <div className="flex flex-col p-5 md:gap-2 lg:gap-5 bg-grey/20 rounded-md">
                        <h1 className="font-bold text-2xl md:text-3xl font-poppins">
                            Other Services
                        </h1>
                        <p className="font-light text-sm md:text-base md:text-white">
                            In addition to our core services, Melius extends its expertise to businesses with an array of supplementary offerings. These include comprehensive content strategy, adept social media management, professional video editing, and meticulous domain research. By availing these services, businesses can bolster their online presence, engage with their audience effectively, and ensure their digital content is both engaging and strategically aligned with their goals.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}