import Link from "next/link";
import Image from "next/image";

export default function JobUni() {
    return (
        <div>
            <Link key={``} href={'/'} className='flex items-center my-4 gap-2 md:hidden'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4"><path fill-rule="evenodd" d="M12.5 9.75A2.75 2.75 0 0 0 9.75 7H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 1.06L4.56 5.5h5.19a4.25 4.25 0 0 1 0 8.5h-1a.75.75 0 0 1 0-1.5h1a2.75 2.75 0 0 0 2.75-2.75Z" clip-rule="evenodd" /></svg>
                <p className='text-sm font-bold'>Retourner à l'accueil</p>
            </Link>
            <h1 className='text-xl'>Parcours</h1>
            <p>Retrouvez-ici mon parcours universitaire et professionnel.</p>
            <br />
            <div className="flex gap-2 items-center mb-1">
                <Image
                    src="/academic.svg"
                    alt=""
                    className="dark:invert"
                    width={16}
                    height={16}
                />
                <h2 className="text-lg">Formation</h2>
            </div>
            <ul>
                <li className="flex gap-4 mb-3">
                    <p className="text-sm italic">2022<br />2025</p>
                    <div>
                        <p className="font-bold">Licence Informatique</p>
                        <p>Mineure économie gestion, création numérique, science des données</p>
                        <p className="text-sm font-light">Université Lumière - Lyon</p>
                    </div>
                </li>
                <li className="flex gap-4 mb-3">
                    <p className="text-sm italic">2019<br />2022</p>
                    <div>
                        <p className="font-bold">Baccalauréat Général</p>
                        <p>Mention Bien - Section Européenne<br />Mathématiques, Sciences Économiques et Sociales, Physique et Chimie</p>
                        <p className="text-sm font-light">Lycée Polyvalent Louis Armand - Villefranche-sur-saône</p>
                    </div>
                </li>
            </ul>
            <br />
            <div className="flex gap-2 items-center mb-1">
                <Image
                    src="/document_check.svg"
                    alt=""
                    className="dark:invert"
                    width={16}
                    height={16}
                />
                <h2 className="text-lg">Certifications</h2>
            </div>
            <ul>
                <li className="flex gap-4 mb-3">
                    <p className="text-sm italic">2024</p>
                    <div>
                        <p className="font-bold">Certification C#</p>
                        <p>En cours de formation</p>
                        <p className="text-sm font-light">Microsoft Learn</p>
                    </div>
                </li>
                <li className="flex gap-4 mb-3">
                    <p className="text-sm italic">2023</p>
                    <div>
                        <p className="font-bold">PIX</p>
                        <p>Certification en bureautique</p>
                        <p className="text-sm font-light">Université Lumière - Lyon</p>
                    </div>
                </li>
                <li className="flex gap-4 mb-3">
                    <p className="text-sm italic">2022</p>
                    <div>
                        <p className="font-bold">Cambridge English</p>
                        <p>Certification en Anglais, niveau B2</p>
                        <p className="text-sm font-light">Lycée Polyvalent Louis Armand - Villefranche-sur-saône</p>
                    </div>
                </li>
            </ul>
            <br />
            <div className="flex gap-2 items-center mb-1">
                <Image
                    src="/briefcase.svg"
                    alt=""
                    className="dark:invert"
                    width={16}
                    height={16}
                />
                <h2 className="text-lg">Emplois</h2>
            </div>
            <ul>
                <li className="flex gap-4 mb-3">
                    <p className="text-sm italic">2022<br />auj.</p>
                    <div>
                        <p className="font-bold">Employé Polyvalent</p>
                        <p>Entretient des locaux et espaces verts - Réception - Garde d'enfants</p>
                        <p className="text-sm font-light">Manoir de la garde - Jarnioux</p>
                    </div>
                </li>
                <li className="flex gap-4  mb-3">
                    <p className="text-sm italic">2022</p>
                    <div>
                        <p className="font-bold">Gestionnaire Locatif Junior</p>
                        <p>Service Clientèle Locative - Support téléphonique et email - Dialogues entre les bailleurs, locataires et prestataires.</p>
                        <p className="text-sm font-light">Century 21 Coquillat Immobilier - Villefranche-sur-saône</p>
                    </div>
                </li>
            </ul>
            <br />
        </div>
    );
}