import type { Metadata } from "next";
import Script from "next/script";
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
      <body className={`${inter.className} flex justify-center md:overflow-hidden`}>
        <div className="w-full lg:w-2/3 md:flex m-6 md:m-0 md:gap-12 md:px-12">
          <div className="flex flex-col md:basis-1/3 items-start scrollbar md:py-12 lg:py-24">
            <Logo />
            <div className="hidden md:block">
              <NavMenu/>
            </div>
          </div>
          <div className="md:basis-2/3 md:overflow-auto scrollbar md:py-12 lg:py-24">
            {children}
          </div>
        </div>
        <Script async defer src="https://services.vm.vld-group.com/latest.js"/>
      </body>
    </html>
  );
}
