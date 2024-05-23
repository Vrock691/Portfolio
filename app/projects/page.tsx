import Link from 'next/link';
import { useState } from 'react';

export default function Projects() {
    const [filter, setFilter] = useState('');

    return (
      <main className="">
        <h1 className='text-xl'>Projets</h1>
        <br />
        <p>Voici une liste non-exaustive de mes derniers projets personnels.</p>
        
      </main>
    );
  }
  