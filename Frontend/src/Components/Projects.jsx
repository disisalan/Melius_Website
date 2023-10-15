import React from 'react'

function Projects() {
  return (
    <div className="bg-black font-inter px-6 lg:px-24 text-white">
      <h1 className="py-5 font-poppins text-3xl lg:text-5xl font-bold border-b-4 border-blue">Events</h1>

      {/* Projects Container */}
      <div className="py-5 md:py-10 text-xs md:text-2xl flex flex-wrap justify-center gap-5 md:gap-5">

        {/* Project */}
        <div className="p-3 md:p-5 relative bg-grey/25 rounded-xl bg-contain w-[200px] h-[266px] md:w-[400px] md:h-[533px] flex-none">
          
          <img src="../Media/bg-1.png" alt="" className="rounded-md w-[200px] aspect-[16/12] md:w-[400px]" />
          
          {/* Project Text Info */}
          <div className="py-2 md:py-4">
            <h1 className="font-poppins font-bold text-base md:text-3xl">Project Name Here</h1>
            <h1 className="font-light text-xl">Project Description Here</h1>
          </div>

          {/* Buttons at bottom */}
          <div className="absolute right-2 md:right-4 bottom-2 md:bottom-4 z-5">
            <button className="py-2 px-3 font-semibold text-md bg-blue rounded-md md:rounded-3xl">More Details</button>
          </div>
        </div>
        <div className="p-3 md:p-5 relative bg-grey/25 rounded-xl bg-contain w-[200px] h-[266px] md:w-[400px] md:h-[533px] flex-none">
          
          <img src="../Media/bg-1.png" alt="" className="rounded-md w-[200px] aspect-[16/12] md:w-[400px]" />
          
          {/* Project Text Info */}
          <div className="py-2 md:py-4">
            <h1 className="font-poppins font-bold text-base md:text-3xl">Project Name Here</h1>
            <h1 className="font-light text-xl">Project Description Here</h1>
          </div>

          {/* Buttons at bottom */}
          <div className="absolute right-2 md:right-4 bottom-2 md:bottom-4 z-5">
            <button className="py-2 px-3 font-semibold text-md bg-blue rounded-md md:rounded-3xl">More Details</button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Projects