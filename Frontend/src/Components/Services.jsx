export default function Services() {
    return (
        <div className="flex bg-black text-white font-inter">

            {/* main */}
            <div className="w-10/12 mx-auto lg:w-3/4 flex flex-col lg:flex-row lg:justify-between">

                {/* heading */}
                <div className="flex flex-row gap-20 lg:items-center lg:flex-col-reverse lg:w-1/12">
                    {/* Line */}
                    <div className="lg:w-px lg:bg-white lg:h-1/2 hidden lg:inline-block"></div>

                    {/* Text */}
                    <div className="font-bold font-poppins text-4xl md:text-5xl lg:text-6xl flex flex-row lg:flex-col gap-2 border-b-4 border-blue pb-1 lg:border-0 lg:pb-0 lg:-rotate-90">
                        <p>Our</p>
                        <p className="lg:text-blue">Services</p>
                    </div>
                </div>

                {/* Researches */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-20 my-5 lg:w-3/5 py-3">

                    {/* Research 1 */}
                    <div className="flex flex-col md:gap-2 lg:gap-5 bg-grey/20 rounded-xl">
                        <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl">Research</h1>
                        <p className="font-light md:text-2xl md:text-white lg:text-3xl">The research will be conducted together with you to ensure that broad industry characterstics are blah blah blah</p>
                    </div>
                    {/* Research 1 */}
                    <div className="flex flex-col md:gap-2 lg:gap-5 bg-grey/20 rounded-xl">
                        <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl">Research</h1>
                        <p className="font-light md:text-2xl md:text-white lg:text-3xl">The research will be conducted together with you to ensure that broad industry characterstics are blah blah blah</p>
                    </div>
                    {/* Research 1 */}
                    <div className="flex flex-col md:gap-2 lg:gap-5 bg-grey/20 rounded-xl">
                        <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl">Research</h1>
                        <p className="font-light md:text-2xl md:text-white lg:text-3xl">The research will be conducted together with you to ensure that broad industry characterstics are blah blah blah</p>
                    </div>
                    {/* Research 1 */}
                    <div className="flex flex-col md:gap-2 lg:gap-5 bg-grey/20 rounded-xl">
                        <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl">Research</h1>
                        <p className="font-light md:text-2xl md:text-white lg:text-3xl">The research will be conducted together with you to ensure that broad industry characterstics are blah blah blah</p>
                    </div>
                </div>
            </div>

        </div>
    )
}