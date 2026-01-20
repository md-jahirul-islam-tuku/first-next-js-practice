import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import NextAuthProvider from "@/providers/NextAuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "First NextJS",
    template: "%s | First NextJS",
  },
  description: "This is my First Next JS projects for learning...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <body
          className={`text-xl ${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <NavBar />
          <main className="min-h-screen text-center">{children}</main>
          <footer className="bg-gray-300 text-black text-center">
            This is footer for first next js project
          </footer>
        </body>
      </NextAuthProvider>
    </html>
  );
}
