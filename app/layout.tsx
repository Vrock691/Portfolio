import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import "./globals.css";
import Logo from "./components/logo";
import NavMenu from "./components/NavMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Valentin Mary - Portfolio",
  description: "Portefolio et projets de Valentin Mary",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} flex justify-center`}>
        <div className="w-full lg:w-2/3 md:flex m-6 md:m-12 lg:my-24 ">
          <div className="flex flex-col md:basis-1/3 items-start">
            <Logo />
            <div className="hidden md:block">
              <NavMenu/>
            </div>
          </div>
          <div className="md:basis-2/3">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
