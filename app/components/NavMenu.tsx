import Link from "next/link";

export default function NavMenu() {
    return (
        <div className="my-6 hidden md:block">
            <p className="">MENU</p>
            <Link key={'Mes projets'} href={"/projects"}>
                <p>Mes projets</p>
            </Link>
        </div>
    );
}