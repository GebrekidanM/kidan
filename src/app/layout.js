import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

  const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gebrekidan M. - Full-Stack Developer",
  description: "Portfolio of Gebrekidan Mequanint, a MERN Stack Developer.",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" className="scroll-smooth">
      <body inject_svd="true" className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar/>
          <main className="flex-grow">
             {children}
          </main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
