export default function Info() {
    return (
        <div className="flex bg-black text-white font-inter">
            {/* main */}
            <div className="mx-auto w-10/12 lg:w-3/4 flex flex-col gap-10 my-10">

                {/* What do consultants do */}
                <div>
                    {/* Heading */}
                    <div className="flex justify-between items-center gap-3 md:gap-5">
                        <h1 className="font-bold text-4xl w-max md:text-4xl lg:text-5xl xl:text-6xl">What do Consultants DO?</h1>
                        <div className="md:h-px md:bg-white md:flex-grow"></div>
                    </div>

                    {/* Description */} 
                    <p className="w-11/12 flex flex-wrap mx-auto my-2 text-sm font-light md:text-2xl md:my-6 md:text-center">Business consultant is like the Sherlock Holmes of corporate world, but instead of solving crimes, they're cracking the case of why your sales are as elusive as a unicorn. Armed with a magnifying glass of data and a pipe filled with wisdon (or maybe just a really good cup of coffee), they dive deep into your company's operations, em...</p>

                    {/* Read more button */}
                    <div className="flex my-5">
                        <button className="bg-blue rounded-full py-3 px-8 font-semibold md:mx-auto md:text-2xl">Read More</button>
                    </div>
                </div>

                {/* Past Experiences */}
                <div className="flex flex-col gap-5 md:gap-10">
                    {/* Heading */}
                    <div className="flex md:flex-row-reverse justify-between items-center gap-3 md:gap-5">
                        <h1 className="font-bold text-4xl w-max md:text-4xl lg:text-5xl xl:text-6xl ">Past Experiences</h1>
                        <div className="md:h-px md:bg-white md:flex-grow"></div>
                    </div>

                    <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10 2xl:gap-12">
                        <img src="../../Media/SBICARD.NS_BIG.png" alt="" className="" />
                        <img src="../../Media/SBICARD.NS_BIG.png" alt="" className="" />
                        <img src="../../Media/SBICARD.NS_BIG.png" alt="" className="" />
                        <img src="../../Media/SBICARD.NS_BIG.png" alt="" className="" />
                        <img src="../../Media/SBICARD.NS_BIG.png" alt="" className="" />
                        <img src="../../Media/SBICARD.NS_BIG.png" alt="" className="" />
                        <img src="../../Media/SBICARD.NS_BIG.png" alt="" className="" />
                        <img src="../../Media/SBICARD.NS_BIG.png" alt="" className="" />
                        <img src="../../Media/SBICARD.NS_BIG.png" alt="" className="" />
                        <img src="../../Media/SBICARD.NS_BIG.png" alt="" className="" />
                        <img src="../../Media/SBICARD.NS_BIG.png" alt="" className="" />
                        <img src="../../Media/SBICARD.NS_BIG.png" alt="" className="" />
                        <img src="../../Media/SBICARD.NS_BIG.png" alt="" className="" />
                        <img src="../../Media/SBICARD.NS_BIG.png" alt="" className="" />
                        <img src="../../Media/SBICARD.NS_BIG.png" alt="" className="" />
                    </div>
                </div>
            </div>
        </div>
    )
}