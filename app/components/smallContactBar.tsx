import Link from "next/link";

export default function SmallContactBar() {
    return (
        <div className="flex gap-2 border border-[--text-color] rounded-full w-max h-max px-3 py-2">
            <a href="https://www.linkedin.com/in/valentin-mary">
                <svg xmlns="http://www.w3.org/2000/svg" aria-label="LinkedIn" role="img" viewBox="0 0 512 512" className="size-5 fill-[--text-color]"><circle cx="142" cy="138" r="37" /><path stroke="var(--text-color)" stroke-width="66" d="M244 194v198M142 194v198" /><path d="M276 282c0-20 13-40 36-40 24 0 33 18 33 45v105h66V279c0-61-32-89-76-89-34 0-51 19-59 32" /></svg>
            </a>
            <a href="https://github.com/Vrock691">
                <svg xmlns="http://www.w3.org/2000/svg" aria-label="GitHub" role="img" viewBox="0 0 512 512" className="size-4 fill-[--text-color]"><path d="M335 499c14 0 12 17 12 17H165s-2-17 12-17c13 0 16-6 16-12l-1-44c-71 16-86-34-86-34-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 39 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-67 0 0 21-7 70 26 42-12 86-12 128 0 49-33 70-26 70-26 14 35 6 61 3 67 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48l-1 70c0 6 3 12 16 12z" /></svg>
            </a>
            <Link key={``} href={'/contact'}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 fill-[--text-color]"><path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg>
            </Link>
        </div>
    );
}