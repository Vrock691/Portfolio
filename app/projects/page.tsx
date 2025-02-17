'use server'

import Link from 'next/link';
import ProjectCard from './components/projectCard';
import { get } from '@vercel/edge-config';

export default async function Projects() {

  const projects = await get('projects') as Array<any>;

  return (
    <div>
      <Link key={``} href={'/'} className='flex items-center my-4 gap-2 md:hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4"><path fill-rule="evenodd" d="M12.5 9.75A2.75 2.75 0 0 0 9.75 7H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 1.06L4.56 5.5h5.19a4.25 4.25 0 0 1 0 8.5h-1a.75.75 0 0 1 0-1.5h1a2.75 2.75 0 0 0 2.75-2.75Z" clip-rule="evenodd" /></svg>
        <p className='text-sm font-bold'>Retourner à l'accueil</p>
      </Link>
      <h1 className='text-xl'>Projets</h1>
      <p>Voici une liste de mes derniers projets personnels.</p>
      {
        (projects) ? projects.map((IprojectData) =>
          <ProjectCard projectData={IprojectData}></ProjectCard>
        ) : null
      }
    </div>
  );
}
