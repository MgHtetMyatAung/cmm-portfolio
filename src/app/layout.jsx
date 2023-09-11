import NavBar from "@/components/layout/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Create with next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#171718] text-gray-100`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
