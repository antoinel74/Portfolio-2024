import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./style/globals.css";
import "./style/animations.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { CustomCursor } from "./components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Antoine Lansman - Front-End Dev",
  description: "Portfolio 2024 of Antoine Lansman",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
