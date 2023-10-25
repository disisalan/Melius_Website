import { React, useEffect, useState } from "react";
import api from "../axios";


export default function Team() {
    const [members, setmembers] = useState([]);
    const IMG_URL =
        "https://meliuswebsite.pythonanywhere.com/api/profile_pictures"
    useEffect(() => {
        api.get("/members").then((res) => {
            console.log(res.data);
            setmembers(res.data);s
        });
    }, []);
    return (
        <div className="bg-black font-inter px-6 lg:px-24 text-white">
            <h1 className="py-5 pt-24 font-poppins text-3xl lg:text-5xl font-bold border-b-4 border-blue">Meet the team</h1>
            <div className="py-10 flex flex-wrap gap-10 md:gap-16 lg:gap-28 justify-center">
            {members.map((member,index)=>(                
                <div
                key={index}
                style={{
                    backgroundImage: `url('${IMG_URL}/${member.image}')`
                }}
                 className="relative bg-cover w-[200px] h-[266.67px] sm:w-[250px] sm:h-[333px] lg:w-[300px] lg:h-[400px]">
                    <div className="absolute bg-black top-[70%] right-[-15%] lg:right-[-30%] font-bold font-poppins text-2xl lg:text-4xl">
                        <div key={index}>{member.name}</div>
                        <div className="text-blue" key={index}>{member.position}</div>
                        <div>
                            {/* link */}
                            {/* insta */}
                        </div>
                    </div>
                </div>
            ))}
            </div>

            {/* all members */}




        </div>
    )
}

// Name, course, linkedin, socialmedia