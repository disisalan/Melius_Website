import React from "react";
import Team from "./Team";

function TeamList() {
    return (
        <>
        <Team />
        <div class="relative overflow-x-auto">
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
                    <tr class="border-b bg-gray-800 border-gray-700 whitespace-nowrap">
                        <th
                            scope="row"
                            class="px-6 py-4 font-medium text-white "
                        >
                            Lorem Ipsum
                        </th>
                        <td class="px-6 py-4">Merol</td>
                        <td class="px-6 py-4">Lorem Ipsum</td>
                        <td class="px-6 py-4">@LoremIpsum</td>
                    </tr>
                    <tr class="border-b bg-gray-800 border-gray-700 whitespace-nowrap">
                        <th
                            scope="row"
                            class="px-6 py-4 font-medium text-white "
                        >
                            Lorem Ipsum
                        </th>
                        <td class="px-6 py-4">Merol</td>
                        <td class="px-6 py-4">Lorem Ipsum</td>
                        <td class="px-6 py-4">@LoremIpsum</td>
                    </tr>
                    <tr class="border-b bg-gray-800 border-gray-700 whitespace-nowrap">
                        <th
                            scope="row"
                            class="px-6 py-4 font-medium text-white "
                        >
                            Lorem Ipsum
                        </th>
                        <td class="px-6 py-4">Merol</td>
                        <td class="px-6 py-4">Lorem Ipsum</td>
                        <td class="px-6 py-4">@LoremIpsum</td>
                    </tr>
                    <tr class="border-b bg-gray-800 border-gray-700 whitespace-nowrap">
                        <th
                            scope="row"
                            class="px-6 py-4 font-medium text-white "
                        >
                            Lorem Ipsum
                        </th>
                        <td class="px-6 py-4">Merol</td>
                        <td class="px-6 py-4">Lorem Ipsum</td>
                        <td class="px-6 py-4">@LoremIpsum</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    );
}

export default TeamList;
