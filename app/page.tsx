import Link from "next/link";
import Logo from "./components/logo";
import Card from "./components/card";

export default function Home() {
  return (
    <main className="my-6 md:my-0">
      <div className="">
        <p>Bienvenue sur mon portfolio !</p>
        <br />
        <p>Je m'appelle Valentin Mary, actuellement en dernière année de licence d'informatique, je suis passioné de code et d'UI design.</p>
        <br />
        <p>Vous pourrez retrouver ici mon parcours universitaire et professionel, mes travaux, mes projets et bien d'autres choses encore.</p>
        <br />
        <Card>coucou</Card>
      </div>
    </main>
  );
}
