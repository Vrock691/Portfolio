import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Accueil</h1>
      <Link key={'Mes projets'} href={"/projects"}>
        <p>Mes projets</p>
      </Link>
    </main>
  );
}
