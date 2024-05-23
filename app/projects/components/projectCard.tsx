'use client'

import { useState } from "react";
import Card from "@/app/components/card";

export default function ProjectCard({
    projectData
}: Readonly<{
    projectData: any;
}>) {
    const [peopleVisibility, changePeopleVisibility] = useState(false);
    return (
        <div className="w-full my-6 flex flex-row gap-3 md:flex-row">
            <div className="w-12 h-12 p-2 bg-[#3C2A21] rounded flex items-center shrink-0">
                <img src={projectData.iconPath} alt="" className="rounded" />
            </div>
            <div>
                <div className="flex flex-wrap items-center gap-2">
                    <p className="font-semibold">{projectData.name}</p>
                    {(projectData.active) ? <div className="flex items-center gap-1 border border-green-500 w-max h-max px-1 rounded-full">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <p className="text-xs text-green-500">PROJET ACTIF</p>    
                    </div> : null}
                </div>
                <p>{projectData.desc}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                    {
                        projectData.languages.map((l: string) => 
                            <div className="px-2 border rounded-full">
                                <p className="text-xs">{l}</p>
                            </div>
                        )
                    }
                </div>
                {
                    (projectData.people != null)
                    ?   <button className="flex flex-wrap my-2">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
                                    <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
                                </svg>
                                <p className="text-sm">{projectData.people.length} - <span className="underline">Voir les collaborateurs</span></p>
                            </div>
                        </button>
                    : null
                }
                
            </div>
        </div>
    );
}