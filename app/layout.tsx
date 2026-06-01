import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Notification from "@/components/Notification";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HeadPhone Repair Centre",
  description: "Designed by Mr.H❣",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      <body className="min-h-full flex flex-col">\
        <Notification />
        <Navbar />
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-100 font-sans">
          <main className="rounded-lg flex flex-col flex-1 w-full max-w-[90%] items-center justify-around text-center py-32 px-12 bg-white gap-20 mt-20 mb-10">
            {children}
          </main>
        </div>
        <Footer />
        {/* <Notification /> */}
      </body>
    </html>
  );
}
