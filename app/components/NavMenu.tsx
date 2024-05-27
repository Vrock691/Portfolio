'use client'

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { availableTabs } from "../lib/ongletsdata";

export default function NavMenu() {
    return (
        <div className="md:my-6">
            <p className="text-sm font-sans mb-1">MENU</p>
            {
            availableTabs.map((element) =>             
                <NavMenuElement key={element.name} path={element.path} name={element.name} icon={element.icon}></NavMenuElement>
            )}
        </div>
    );
}

export function NavMenuElement({
    path, 
    name,
    icon,
  }: Readonly<{
    path: Object;
    name: string;
    icon: string;
  }>) {
    let pathname = usePathname()
    let selected = pathname.endsWith(path.toString());
    return (
        <Link key={`${name}`} href={path}>
            <div className="flex w-full items-center justify-between gap-2 rounded border border-[--text-color] px-4 py-4 dark:border-neutral-700 md:border-none md:p-0 my-2">
                <Image
                src={icon}
                alt=""
                className="text-text-selected-color dark:invert"
                width={16}
                height={16}
                />
                <p className={`flex-auto ${(selected) ? "font-bold" : "hover:font-semibold"}`}>{name}</p>
            </div>
        </Link>
    );
  }