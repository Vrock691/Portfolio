import NavMenu from "./components/NavMenu";
import SmallContactBar from "./components/smallContactBar";

export default function Home() {
  return (
    <main className="my-6 md:my-0">
      <div className="">
        <p>Bienvenue sur mon portfolio ! 👋</p>
        <br />
        <p>Je m'appelle Valentin Mary, actuellement en première année de master informatique, je suis passionné par le cloud et le developpement informatique.</p>
        <br />
        <p>Actuellement à la recherche d'un stage à partir de mai 2026 et d'une alternance à partir de septembre 2026, je souhaite faire ma carrière dans le domaine DevOps et/ou CloudOps.</p>
        <br />
        <p>Vous pourrez retrouver ici <span className="font-semibold">mon parcours universitaire et professionnel, mes travaux, mes projets</span> et bien d'autres choses encore.</p>
        <br />
        <p>Merci de votre visite sur ce site, n'hésitez pas à également visiter mon profil <a href="https://github.com/Vrock691" className="font-bold underline">Github</a>.</p>
        </div>
      <br />
      <div className="hidden md:block">
        <SmallContactBar></SmallContactBar>
      </div>
      <div className="md:hidden">
        <NavMenu></NavMenu>
      </div>   
    </main>
  );
}
