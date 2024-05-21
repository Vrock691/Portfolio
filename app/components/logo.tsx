import { Lexend } from "next/font/google";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend"
});

export default function Logo() {
  return (
    <div>
      <h1 className={`${lexend.className} text-3xl`}>Valentin<br className="hidden md:block" /> Mary</h1>
      <p className={`${lexend.className} md:hidden`}>Portfolio</p>
    </div>
  );
}