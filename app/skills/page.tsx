import Link from "next/link";
import Image from "next/image";
import { get } from "@vercel/edge-config";

export default async function Skills() {
    const OS_software: Array<any> = await get("OS_software") ?? []
    const languages : Array<any> = await get("languages") ?? []
    const lib_framework : Array<any> = await get("libframework") ?? []
    const providers : Array<any> = await get("providers") ?? []

    return (
        <div>
            <Link key={``} href={'/'} className='flex items-center my-4 gap-2 md:hidden'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4"><path fill-rule="evenodd" d="M12.5 9.75A2.75 2.75 0 0 0 9.75 7H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 1.06L4.56 5.5h5.19a4.25 4.25 0 0 1 0 8.5h-1a.75.75 0 0 1 0-1.5h1a2.75 2.75 0 0 0 2.75-2.75Z" clip-rule="evenodd" /></svg>
                <p className='text-sm font-bold'>Retourner à l'accueil</p>
            </Link>
            <h1 className='text-xl'>Compétences</h1>
            <p>Voici une liste des langages et technologies que je maitrise.</p>
            <br />
            <div className="flex gap-2 items-center mb-1">
                <Image
                    src="/languages.svg"
                    alt=""
                    className="dark:invert"
                    width={16}
                    height={16}
                />
                <h2 className="text-lg">Langues</h2>
            </div>
            <div className="flex flex-wrap gap-4 my-2">
                <p className="border border-[--text-color] rounded-full px-3">
                    Français
                </p>
                <p className="border border-[--text-color] rounded-full px-3">
                    Anglais
                </p>
            </div>
            <br />
            <div className="flex gap-2 items-center mb-1">
                <Image
                    src="/code.svg"
                    alt=""
                    className="dark:invert"
                    width={16}
                    height={16}
                />
                <h2 className="text-lg">Langages</h2>
            </div>
            <div className="flex flex-wrap gap-4 my-2">
                {
                    languages.map((l: string) =>
                        <p className="border border-[--text-color] rounded-full px-3">
                            {l}
                        </p>
                    )
                }
            </div>
            <br />
            <div className="flex gap-2 items-center mb-1">
                <Image
                    src="/code_square.svg"
                    alt=""
                    className="dark:invert"
                    width={16}
                    height={16}
                />
                <h2 className="text-lg">Librairies et Frameworks</h2>
            </div>
            <div className="flex flex-wrap gap-4 my-2">
                {
                    lib_framework.map((l: string) =>
                        <p className="border border-[--text-color] rounded-full px-3">
                            {l}
                        </p>
                    )
                }
            </div>
            <br />
            <div className="flex gap-2 items-center mb-1">
                <Image
                    src="/cloud.svg"
                    alt=""
                    className="dark:invert"
                    width={16}
                    height={16}
                />
                <h2 className="text-lg">Services et Cloud</h2>
            </div>
            <div className="flex flex-wrap gap-4 my-2">
                {
                    providers.map((l: string) =>
                        <p className="border border-[--text-color] rounded-full px-3">
                            {l}
                        </p>
                    )
                }
            </div>
            <br />
            <div className="flex gap-2 items-center mb-1">
                <Image
                    src="/command_line.svg"
                    alt=""
                    className="dark:invert"
                    width={16}
                    height={16}
                />
                <h2 className="text-lg">Outils et OS</h2>
            </div>
            <div className="flex flex-wrap gap-4 my-2">
                {
                    OS_software.map((l: string) =>
                        <p className="border border-[--text-color] rounded-full px-3">
                            {l}
                        </p>
                    )
                }
            </div>
            <br />
        </div>
    );
}
