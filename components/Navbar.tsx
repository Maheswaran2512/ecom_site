import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 z-2 px-0 px-15 max-tablet:px-0 w-full bg-indigo/60 backdrop-blur-sm backdrop-saturate-150 shadow-md ">
            <div className="flex items-center justify-between gap-x-3 px-3 py-3 sm:px-3 sm:py-3">
                <div className="flex items-center gap-10">
                    <Link href="/" className="flex items-center flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12">
                        <Image
                            className="rounded-full p-1 w-full h-full"
                            src="/logo.webp"
                            alt="HPRC_logo"
                            width={30}
                            height={30}
                        />
                    </Link>
                    <div className="size-xl max-tablet:hidden">
                        <Link href="/"><h1><b>H</b>ead<b>P</b>hone <b>R</b>epair <b>C</b>enter</h1></Link>
                    </div>
                </div>
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
                        <Link href="/services" target="">SERVICE</Link>
                    </li>
                    <li className="font-bold text-sm sm:text-base">
                        <Link href="/products" target="">PRODUCT</Link>
                    </li>
                    <li className="font-bold text-sm sm:text-base">
                        <Link href="/carrer" target="">CARRER</Link>
                    </li>
                    <li className="font-bold text-sm sm:text-base">
                        <Link href="/contact" target="">CONTACT</Link>
                    </li>
                    <li className="font-bold text-sm sm:text-base">
                        <Link href="/about" target="">ABOUT</Link>
                    </li>
                </ul>
                {/* <div className="w-12 sm:w-[50px]" /> */}
            </div>
        </nav>
    )
}