import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 z-2 px-20 w-full bg-indigo/60 backdrop-blur-md backdrop-saturate-150 shadow-md">
            <div className="flex items-center justify-between gap-x-3 px-3 py-3 sm:px-3 sm:py-3">
                <Link href="/" className="flex items-center flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12">
                    <Image
                        className="rounded-full p-1 w-full h-full"
                        src="/logo.webp"
                        alt="HPRC_logo"
                        width={30}
                        height={30}
                    />
                </Link>
                {/* <style>
                    hover:li{
                        text-decoration:underline;
                    } */}
                {/* </style> */}
                <ul className="flex justify-center gap-3 sm:gap-4 list-none overflow-x-auto text-black">
                    <li className="font-bold text-sm sm:text-base">
                        <Link href="/">HOME</Link>
                    </li>
                    <li className="font-bold text-sm sm:text-base">
                        <Link href="/service">SERVICE</Link>
                    </li>
                    <li className="font-bold text-sm sm:text-base">
                        <Link href="/product">PRODUCT</Link>
                    </li>
                    <li className="font-bold text-sm sm:text-base">
                        <Link href="/carrer">CARRER</Link>
                    </li>
                    <li className="font-bold text-sm sm:text-base">
                        <Link href="/contact">CONTACT</Link>
                    </li>
                    <li className="font-bold text-sm sm:text-base">
                        <Link href="/about">ABOUT</Link>
                    </li>
                </ul>
                {/* <div className="w-12 sm:w-[50px]" /> */}
            </div>
        </nav>
    )
}