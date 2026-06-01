import Image from "next/image";
// import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl text-black font-bold uppercase mt-10">Welcome to my <br /> E-commerce Site</h1>
      <Image
        className="border-1 dark:none-invert"
        src="/logo.webp"
        alt="logo"
        width={100}
        height={20}
        priority
      />
      <p className="text-black mt-4 text-lg font-bold">Discover the best products at unbeatable prices!</p>
    </div>
    // </div >
    // <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans text-blue-500 dark:invert">
    //   <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start mt-20">
    //     <h1 className="text-3xl font-bold mt-10 ">Welcome to my E-commerce Site</h1>
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={100}
    //       height={20}
    //       priority
    //     />
    //     <p className="mt-4 text-lg">Discover the best products at unbeatable prices!</p>
    //   </main>
    // </div>
  );
}