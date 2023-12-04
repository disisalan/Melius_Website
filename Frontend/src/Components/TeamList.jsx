import Team from "./Team";
import { React, useEffect, useState } from "react";
import api from "../axios";

function TeamList() {
    const [members, setmembers] = useState([]);

    useEffect(() => {
        api.get("/members").then((res) => {
            console.log(res.data);
            setmembers(res.data);
        });
    }, []);
    return (
        <>
            <Team />
            <div class="relative bg-black overflow-x-auto px-6 lg:px-24">
                <table class="w-full text-sm text-left text-gray-400">
                    <thead class="font-bold font-poppins text-xs uppercase bg-gray-50 dark:bg-gray-700 text-white">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Course
                            </th>
                            <th scope="col" class="px-6 py-3">
                                LinkedIn
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Instagram
                            </th>
                        </tr>
                    </thead>
                    <tbody className="font-light">
                        {members.map((member, index) => (
                            // rendering non core members only
                            !member.is_core &&
                                <tr key={index} class="border-b bg-gray-800 border-gray-700 whitespace-nowrap">
                                    <th
                                        scope="row"
                                        class="px-6 py-4 font-medium text-white "
                                    >
                                        {member.name}
                                    </th>
                                    <td class="px-6 py-4">{member.course}</td>
                                    <td class="px-6 py-4">{member.linkedin}</td>
                                    <td class="px-6 py-4">{member.instagram}</td>
                                </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default TeamList;
