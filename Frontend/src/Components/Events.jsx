import { React, useEffect, useState } from "react";
import api from "../axios";
import EventDetail from "./event_detail";
import { useNavigate } from "react-router-dom";

function Events() {
    const [events, setEvents] = useState([]);
    const IMG_URL =
        "https://meliuswebsite.pythonanywhere.com/api/blog_pictures";
    const navigate = useNavigate();
    useEffect(() => {
        api.get("/blog_posts").then((res) => {
            console.log(res.data);
            setEvents(res.data);
        });
    }, []);
    return (
        <div className="bg-black font-inter px-6 lg:px-24 text-white">
            <h1 className="py-5 font-poppins text-3xl pt-24 lg:text-5xl font-bold border-b-4 border-blue">
                Events
            </h1>

            {/* Events Container */}
            <div className=" py-5 md:py-10 flex justify-center flex-wrap gap-5 md:gap-4">
                {/* Event */}
                {events.map((event, index) => (
                    <div
                        onClick={() => navigate(`/events/${event.id}`)}
                        key={index}
                        style={{
                            backgroundImage: `url('${IMG_URL}/${event.thumbnail}')`,
                        }}
                        className={`relative  bg-contain w-[200px] h-[300px] md:w-[300px] md:h-[450px] rounded-lg aspect-[10/15] flex-none`}
                    >
                        {/* Event Text */}
                        <div className="absolute bg-black bg-opacity-50 p-2 left-2 md:left-4 bottom-2 font-poppins font-bold text-3xl md:text-4xl">
                            <h1 className="text-blue">{event.title}</h1>
                            <h1>{event.date}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Events;
