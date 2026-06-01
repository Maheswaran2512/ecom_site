"use client";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-100 font-sans">
      <main className="rounded-lg flex flex-col flex-1 w-full max-w-6xl items-center justify-around text-center py-32 px-16 bg-white gap-20 mt-20 mb-2">
        <h1 className="text-3xl text-black font-bold uppercase">Contact Page</h1>
        <ContactForm />
      </main >
    </div >
  );
}