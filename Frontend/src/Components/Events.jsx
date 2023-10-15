import React from "react";

function Events() {
    return (
        <div className="bg-black font-inter px-6 lg:px-24 text-white">
            <h1 className="py-5 font-poppins text-3xl lg:text-5xl font-bold border-b-4 border-blue">Events</h1>  

            {/* Events Container */}
            <div className=" py-5 md:py-10 flex justify-center flex-wrap gap-5 md:gap-4">
                
                {/* Event */}
                <div className="relative bg-[url('../Media/bg-2.png')] bg-contain w-[200px] rounded-lg  md:w-[300px] aspect-[10/15] flex-none">
                    {/* Event Text */}
                    <div className="absolute bg-black bg-opacity-50 p-2 left-2 md:left-4 bottom-2 font-poppins font-bold text-3xl md:text-4xl">
                        <h1>Event</h1>
                        <h1 className="text-blue">Shiksha</h1>
                    </div>
                </div>
                <div className="relative bg-[url('../Media/bg-2.png')] bg-contain w-[200px] rounded-lg  md:w-[300px] aspect-[10/15] flex-none">
                    {/* Event Text */}
                    <div className="absolute bg-black bg-opacity-50 p-2 left-2 md:left-4 bottom-2 font-poppins font-bold text-3xl md:text-4xl">
                        <h1>Event</h1>
                        <h1 className="text-blue">Shiksha</h1>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
}

export default Events;
