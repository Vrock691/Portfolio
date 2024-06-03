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
        <div className="w-full h-max my-10 flex flex-row gap-4 md:flex-row">
            <div className="w-12 h-12 p-2 bg-[#D5CEA3] dark:bg-[#3C2A21] rounded flex items-center justify-center shrink-0">
                <img src={projectData.iconPath} alt="" className={`rounded ${(projectData.invertLogo) ? "invert dark:invert-0" : ""}`} />
            </div>
            <div>
                <div className="flex flex-wrap items-center gap-2">
                    <p className="font-semibold">{projectData.name}</p>
                    {(projectData.active) ? <div className="flex items-center gap-1 border border-green-700 dark:border-green-500  w-max h-max px-1 rounded-full">
                        <div className="w-2 h-2 bg-green-700 dark:bg-green-500 rounded-full"></div>
                        <p className="text-xs text-green-700 dark:text-green-500">PROJET ACTIF</p>    
                    </div> : null}
                </div>
                <p className="mt-1">{projectData.desc}</p>
                <div className="flex flex-wrap items-center gap-2 mt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                        <path fill-rule="evenodd" d="M4.78 4.97a.75.75 0 0 1 0 1.06L2.81 8l1.97 1.97a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0ZM11.22 4.97a.75.75 0 0 0 0 1.06L13.19 8l-1.97 1.97a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0ZM8.856 2.008a.75.75 0 0 1 .636.848l-1.5 10.5a.75.75 0 0 1-1.484-.212l1.5-10.5a.75.75 0 0 1 .848-.636Z" clip-rule="evenodd" />
                    </svg>
                    {
                        projectData.languages.map((l: string) => 
                            <div className="px-2 border rounded-full border-[--text-color]">
                                <p className="text-xs">{l}</p>
                            </div>
                        )
                    }
                </div>
                {
                    (projectData.people != null && !peopleVisibility)
                    ?   <button className="flex flex-wrap mt-3" onClick={(e) => changePeopleVisibility(true)}>
                            <div className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
                                    <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
                                </svg>
                                <p className="text-sm">{projectData.people.length} - <span className="underline">Voir les collaborateurs</span></p>
                            </div>
                        </button>
                    : null
                }
                {
                    (projectData.people != null && peopleVisibility) 
                    ? <div className="flex flex-wrap items-center gap-2 mt-3">
                        <div className="flex flex-wrap items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
                                <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
                            </svg>
                            <p className="text-sm">{projectData.people.length}</p>
                        </div>
                        {
                            projectData.people.map((p: any) => 
                                <a href={p.url} className="flex items-center gap-1 px-2 border border-[--text-color] rounded-full text-xs">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-3">
                                        <path fill-rule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm-5-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 9c-1.825 0-3.422.977-4.295 2.437A5.49 5.49 0 0 0 8 13.5a5.49 5.49 0 0 0 4.294-2.063A4.997 4.997 0 0 0 8 9Z" clip-rule="evenodd" />
                                    </svg>
                                    {p.name}
                                </a>
                            )
                        }
                    </div>
                    : null
                }
                <div className={`flex flex-wrap items-center gap-4 ${(projectData.source != null || projectData.website != null || projectData.store != null || (projectData.figma != null && projectData.figma != undefined)) ? "mt-3" : ""}`}>
                    {
                        (projectData.source != null) 
                        ?   <div className="w-max h-max">
                                <a href={projectData.source} className="flex items-center gap-1 text-sm underline">
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-label="GitHub" role="img" viewBox="0 0 512 512" className="size-4 fill-[--text-color]"><path d="M335 499c14 0 12 17 12 17H165s-2-17 12-17c13 0 16-6 16-12l-1-44c-71 16-86-34-86-34-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 39 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-67 0 0 21-7 70 26 42-12 86-12 128 0 49-33 70-26 70-26 14 35 6 61 3 67 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48l-1 70c0 6 3 12 16 12z" /></svg>
                                    Github
                                </a>
                            </div>
                        : null
                    }
                    {
                        (projectData.website != null) 
                        ?   <div className="w-max h-max">
                                <a href={projectData.website} className="flex items-center gap-1 text-sm underline">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                        <path fill-rule="evenodd" d="M3.757 4.5c.18.217.376.42.586.608.153-.61.354-1.175.596-1.678A5.53 5.53 0 0 0 3.757 4.5ZM8 1a6.994 6.994 0 0 0-7 7 7 7 0 1 0 7-7Zm0 1.5c-.476 0-1.091.386-1.633 1.427-.293.564-.531 1.267-.683 2.063A5.48 5.48 0 0 0 8 6.5a5.48 5.48 0 0 0 2.316-.51c-.152-.796-.39-1.499-.683-2.063C9.09 2.886 8.476 2.5 8 2.5Zm3.657 2.608a8.823 8.823 0 0 0-.596-1.678c.444.298.842.659 1.182 1.07-.18.217-.376.42-.586.608Zm-1.166 2.436A6.983 6.983 0 0 1 8 8a6.983 6.983 0 0 1-2.49-.456 10.703 10.703 0 0 0 .202 2.6c.72.231 1.49.356 2.288.356.798 0 1.568-.125 2.29-.356a10.705 10.705 0 0 0 .2-2.6Zm1.433 1.85a12.652 12.652 0 0 0 .018-2.609c.405-.276.78-.594 1.117-.947a5.48 5.48 0 0 1 .44 2.262 7.536 7.536 0 0 1-1.575 1.293Zm-2.172 2.435a9.046 9.046 0 0 1-3.504 0c.039.084.078.166.12.244C6.907 13.114 7.523 13.5 8 13.5s1.091-.386 1.633-1.427c.04-.078.08-.16.12-.244Zm1.31.74a8.5 8.5 0 0 0 .492-1.298c.457-.197.893-.43 1.307-.696a5.526 5.526 0 0 1-1.8 1.995Zm-6.123 0a8.507 8.507 0 0 1-.493-1.298 8.985 8.985 0 0 1-1.307-.696 5.526 5.526 0 0 0 1.8 1.995ZM2.5 8.1c.463.5.993.935 1.575 1.293a12.652 12.652 0 0 1-.018-2.608 7.037 7.037 0 0 1-1.117-.947 5.48 5.48 0 0 0-.44 2.262Z" clip-rule="evenodd" />
                                    </svg>
                                    Site internet
                                </a>
                            </div>
                        : null
                    }
                    {
                        (projectData.store != null) 
                        ?   <div className="w-max h-max">
                                <a href={projectData.store} className="flex items-center gap-1 text-sm underline">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                        <path d="M7.25 11.5a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z" />
                                        <path fill-rule="evenodd" d="M6 1a2.5 2.5 0 0 0-2.5 2.5v9A2.5 2.5 0 0 0 6 15h4a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 10 1H6Zm4 1.5h-.5V3a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5v-.5H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1Z" clip-rule="evenodd" />
                                    </svg>
                                    Google Playstore
                                </a>
                            </div>
                        : null
                    }
                    {
                        (projectData.figma != undefined && projectData.figma != null) 
                        ?   <div className="w-max h-max">
                                <a href={projectData.figma} className="flex items-center gap-1 text-sm underline">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
                                        <path fillRule="evenodd" d="M2.5 3A1.5 1.5 0 0 0 1 4.5v4A1.5 1.5 0 0 0 2.5 10h6A1.5 1.5 0 0 0 10 8.5v-4A1.5 1.5 0 0 0 8.5 3h-6Zm11 2A1.5 1.5 0 0 0 12 6.5v7a1.5 1.5 0 0 0 1.5 1.5h4a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 17.5 5h-4Zm-10 7A1.5 1.5 0 0 0 2 13.5v2A1.5 1.5 0 0 0 3.5 17h6a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 9.5 12h-6Z" clipRule="evenodd" />
                                    </svg>
                                    Design Figma
                                </a>
                            </div>
                        : null
                    }
                </div>
            </div>
        </div>
    );
}