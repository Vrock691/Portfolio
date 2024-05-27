import Link from "next/link";

export default function Contact() {  
    return (
      <div>
        <Link key={``} href={'/'} className='flex items-center my-4 gap-2 md:hidden'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4"><path fill-rule="evenodd" d="M12.5 9.75A2.75 2.75 0 0 0 9.75 7H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 1.06L4.56 5.5h5.19a4.25 4.25 0 0 1 0 8.5h-1a.75.75 0 0 1 0-1.5h1a2.75 2.75 0 0 0 2.75-2.75Z" clip-rule="evenodd" /></svg>
          <p className='text-sm font-bold'>Retourner à l'accueil</p>
        </Link>
        <h1 className='text-xl'>Coordonnées</h1>
        <p>Je serai ravi de discuter/connecter avec vous.</p>
        <br />
        <a href="https://www.linkedin.com/in/valentin-mary" className="flex items-center gap-2 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" aria-label="LinkedIn" role="img" viewBox="0 0 512 512" className="size-7 fill-[--text-color] basis-10"><circle cx="142" cy="138" r="37" /><path stroke="var(--text-color)" stroke-width="66" d="M244 194v198M142 194v198" /><path d="M276 282c0-20 13-40 36-40 24 0 33 18 33 45v105h66V279c0-61-32-89-76-89-34 0-51 19-59 32" /></svg>
            <p>Profil LinkedIn</p>
        </a>
        <a href="mailto:valentin.mary@proton.me" className="flex items-center gap-2 mb-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-6 basis-10">
                <path fillRule="evenodd" d="M5.404 14.596A6.5 6.5 0 1 1 16.5 10a1.25 1.25 0 0 1-2.5 0 4 4 0 1 0-.571 2.06A2.75 2.75 0 0 0 18 10a8 8 0 1 0-2.343 5.657.75.75 0 0 0-1.06-1.06 6.5 6.5 0 0 1-9.193 0ZM10 7.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" clipRule="evenodd" />
            </svg>
            <p>Email</p>
        </a>
        <a href="https://github.com/Vrock691" className="flex items-center gap-2 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" aria-label="GitHub" role="img" viewBox="0 0 512 512" className="size-6 fill-[--text-color] basis-10"><path d="M335 499c14 0 12 17 12 17H165s-2-17 12-17c13 0 16-6 16-12l-1-44c-71 16-86-34-86-34-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 39 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-67 0 0 21-7 70 26 42-12 86-12 128 0 49-33 70-26 70-26 14 35 6 61 3 67 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48l-1 70c0 6 3 12 16 12z" /></svg>
            <p className="pt-1">Github</p>
        </a>
      </div>
    );
  }