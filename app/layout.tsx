import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Notification from "@/components/Notification";

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
    <html lang="en" suppressHydrationWarning className="h-full antialiased">
      <body suppressHydrationWarning className="min-h-screen flex flex-col bg-gradient-to-b from-white via-indigo-100/40 to-white">
        <Notification />
        <div className="flex flex-col flex-1 items-center justify-center bg-indigo-50 font-sans">
          <Navbar />
          <main className="rounded-lg z-1 flex flex-col flex-1 items-center justify-around text-center
          w-full max-w-[90%] py-32 px-8 gap-20 mt-25 mb-10 max-tablet:max-w-[97%] max-tablet:px-5 
          bg-white backdrop-blur-sm backdrop-saturate-500 shadow-lg ">
            {children}
          </main>
        </div>
        <Footer />
        {/* <Notification /> */}
      </body>
    </html>
  );
}
