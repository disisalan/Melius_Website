


export default function EventDetail(){
    return(
    <div className="bg-black font-inter px-6  lg:px-24 text-white">
        <div className="p-5">
        <h1 className="py-5  text-White text-3xl font-poppins border-b-2 border-blue lg:text-5xl font-bold"> Event Heading</h1>
        <div className=" py-5 lg:flex gap-8 font-inter">
            <img src="../Media/bg-1.png" alt="" className="w-[200px] lg:w-[300px] aspect-[10/16] rounded-3xl"/>
            
            <div className="text-lg">
            <div className=" mb-10 lg:mb-16    ">
                <h2 className="text-2xl font-poppins font-semibold my-4 text-blue">About the Event </h2>
                <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est perspiciatis beatae veritatis dicta soluta sit ipsum aut enim. Quibusdam voluptatum doloremque placeat at saepe beatae et ut pariatur maiores velit?</p>
            </div>
            <div className="flex items-center gap-3">
                <p className="text-xl font-poppins font-semibold text-blue ">Date and Time :</p><span> 20th Octber , 2023</span>
            </div>
            <div  className="flex items-center gap-3">
                <p className="text-xl font-poppins font-semibold text-blue">Venue : </p><span>MSI Auditorium</span>
            </div>
            <div  className="flex items-center gap-3">
                <p className="text-xl font-poppins font-semibold text-blue">Mode : </p><span>MSI Auditorium</span>
            </div>
            <div  className="flex items-center gap-3">
                <p className="text-xl font-poppins font-semibold text-blue">Prize Pool :</p> <span>MSI Auditorium</span>
            </div>
            <div id="social-mob" className="py-8 gap-2 flex items-center [&>svg]:w-9 [&>svg]:h-9  fill-white ">
            <p className="text-xl font-poppins font-semibold text-blue">Socials :</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="96"
              height="96"
              viewBox="0 0 24 24"
            >
              <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
            </svg>
                        <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
            >
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
            </svg>
          </div>
          <div  className="flex items-center gap-3 mb-3">
                <p className="text-xl font-poppins font-semibold text-blue">View Pictures :</p> <span>Click to View Photos</span>
            </div>
            <div className="w-full flex justify-center">
                <button className="bg-blue py-4 px-12 rounded-2xl">JOIN NOW</button>
            </div>
        </div>
        </div>
        <div>
        <h1 className="py-5  text-White text-3xl font-poppins lg:text-4xl font-bold">Project Report</h1>
        <iframe src="" width="100%" height="480" allow="autoplay"></iframe>
        </div>
        </div>
    </div>
    )
}