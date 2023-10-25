import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../axios";

function Projects() {
    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);
    const IMG_URL =
        "https://meliuswebsite.pythonanywhere.com/api/project_pictures/";
    useEffect(() => {
        api.get("/projects").then((res) => {
            console.log(res.data);
            setProjects(res.data);
        });
    }, []);
    return (
        <div className="bg-black font-inter px-6 lg:px-24 text-white">
            <h1 className="py-5 font-poppins text-3xl pt-24 lg:text-5xl font-bold border-b-4 border-blue">
                Projects
            </h1>

            {/* Projects Container */}
            <div className="py-5 md:py-10 text-xs md:text-2xl flex flex-wrap justify-center gap-5 md:gap-10">
                {/* Project */}
                {projects.map((project) => (
                    <div
                        onClick={() => {
                            navigate(`/projects/${project.id}`);
                        }}
                        className="p-3 md:p-5 relative bg-grey/25 rounded-xl bg-contain w-[200px] h-[266px] md:w-[400px] md:h-[533px] flex-none"
                    >
                        <img
                            src={`${IMG_URL}/${project.photo}`}
                            alt=""
                            className="rounded-md h-[150px] w-[200px] md:w-[400px] md:h-[300px]"
                        />

                        {/* Project Text Info */}
                        <div className="py-2 md:py-4">
                            <h1 className="font-poppins font-bold text-base md:text-3xl">
                                {project.name}
                            </h1>
                            <h1 className="font-light">{project.partner}</h1>
                        </div>

                        {/* Buttons at bottom */}
                        <div className="absolute right-2 md:right-4 bottom-2 md:bottom-4 z-5">
                            <button className="py-1 px-3 font-bold bg-blue rounded-xl md:rounded-3xl">
                                More Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
