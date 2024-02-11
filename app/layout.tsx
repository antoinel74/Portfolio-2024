import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./style/globals.css";
import "./style/animations.css";
import { Navbar } from "./components/Navbar";
import { CustomCursor } from "./components/CustomCursor";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Antoine Lansman - Front-End Dev",
  description: "Portfolio 2024 of Antoine Lansman",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen relative`}>
        <CustomCursor />
        <Navbar />
        {children}
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
