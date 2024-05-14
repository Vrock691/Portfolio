import Link from "next/link";
import Logo from "./logo";

export default function Home() {
  return (
    <main>
      <Logo></Logo>
      <Link key={'Mes projets'} href={"/projects"}>
        <p>Mes projets</p>
      </Link>
    </main>
  );
}
