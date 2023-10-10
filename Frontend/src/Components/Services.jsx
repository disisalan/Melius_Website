export default function Services() {
    return (
        <div className="flex py-5 bg-black text-white font-inter">

            {/* main */}
            <div className="px-2 lg:px-12 mx-auto lg:flex flex-col gap-20 lg:flex-row lg:justify-center">

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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:w-3/5 py-3">
                    {/* Research 1 */}
                    <div className="flex flex-col p-5 md:gap-2 lg:gap-5 bg-grey/20 rounded-md">
                        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl font-poppins xl:text-5xl">Research</h1>
                        <p className="font-light text-sm md:text-xl md:text-white lg:text-xl xl:text-2xl">The research will be conducted together with you to ensure that broad industry characterstics are blah blah blah</p>
                    </div>
                    {/* Research 1 */}
                    <div className="flex flex-col p-5 md:gap-2 lg:gap-5 bg-grey/20 rounded-md">
                        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl font-poppins xl:text-5xl">Research</h1>
                        <p className="font-light text-sm md:text-xl md:text-white lg:text-xl xl:text-2xl">The research will be conducted together with you to ensure that broad industry characterstics are blah blah blah</p>
                    </div>
                    {/* Research 1 */}
                    <div className="flex flex-col p-5 md:gap-2 lg:gap-5 bg-grey/20 rounded-md">
                        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl font-poppins xl:text-5xl">Research</h1>
                        <p className="font-light text-sm md:text-xl md:text-white lg:text-xl xl:text-2xl">The research will be conducted together with you to ensure that broad industry characterstics are blah blah blah</p>
                    </div>
                    {/* Research 1 */}
                    <div className="flex flex-col p-5 md:gap-2 lg:gap-5 bg-grey/20 rounded-md">
                        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl font-poppins xl:text-5xl">Research</h1>
                        <p className="font-light text-sm md:text-xl md:text-white lg:text-xl xl:text-2xl">The research will be conducted together with you to ensure that broad industry characterstics are blah blah blah</p>
                    </div>
                </div>
            </div>

        </div>
    )
}