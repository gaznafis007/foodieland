
import "./globals.css";
import Navbar from "@/components/Navabr/Navbar";

import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Foodieland",
  description: "A website for foodies where you can fulfill your cravings with different cuisine.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-white text-black`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
