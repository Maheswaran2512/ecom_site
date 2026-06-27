// import Image from "next/image";
// import Link from "next/link";

// export default function HomeHero() {
//   const services = [
//     { icon: "🔊", title: "Speaker Repair", },
//     { icon: "🔋", title: "Battery Replacement", },
//     { icon: "📶", title: "Bluetooth Fix", },
//     { icon: "🎤", title: "Mic Repair", },
//   ];

//   return (
//     <section className="relative overflow-hidden py-0">
//       <section className="relative overflow-hidden pt-10 pb-70 ">
//         <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-indigo-100 blur-3xl opacity-70"></div>
//         <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-100 blur-3xl opacity-70"></div>
//         <div className="relative">
//           <div className="text-center">
//             <span className="rounded-full bg-indigo-100 px-5 py-2 text-sm font-semibold text-indigo-700 uppercase"> Welcome to 🎧 HeadPhone Repair Centre</span>
//             <h1 className="mt-8 text-5xl md:text-6xl font-black text-slate-900">Repair.<span className="text-indigo-600"> Restore.</span>
//               <br />Enjoy Again.</h1>
//             <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
//               From diagnosis to delivery, every repair is handled with
//               precision, genuine parts, and professional care.
//             </p>
//           </div>
//         </div>
//       </section>
//       <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-100 blur-3xl opacity-70"></div>
//       <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-100 blur-3xl opacity-70"></div>
//       <div className="relative grid lg:grid-cols-2 gap-16 items-center">
//         <div>
//           <span className="inline-flex items-center rounded-full bg-indigo-100 px-5 py-2 text-sm font-semibold text-indigo-700">
//             🎧 Trusted Headphone Repair Centre </span>
//           <h1 className="mt-8 text-5xl lg:text-6xl font-black leading-tight text-slate-900"> Bring Your<br /><span className="text-indigo-600"> Sound Back.</span> </h1>
//           <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
//             We specialize in repairing wired and wireless headphones with
//             genuine spare parts, skilled technicians, and affordable
//             pricing.
//           </p>
//           <div className="mt-10 flex flex-wrap gap-5">
//             <Link href="/contact" className="rounded-full bg-indigo-600 px-8 py-4 text-white font-semibold shadow-lg hover:bg-indigo-700 transition"> Book Repair</Link>

//             <Link href="/services" className="rounded-full border border-indigo-200 px-8 py-4 text-indigo-700 font-semibold hover:bg-indigo-50 transition">Our Services</Link>
//           </div>
//           <div className="mt-14 grid grid-cols-3 gap-8">
//             <div>
//               <h2 className="text-4xl font-black text-indigo-600">500+</h2>
//               <p className="mt-2 text-slate-500">Repairs</p>
//             </div>
//             <div><h2 className="text-4xl font-black text-indigo-600">98%</h2>
//               <p className="mt-2 text-slate-500">Success</p>
//             </div>
//             <div>
//               <h2 className="text-4xl font-black text-indigo-600">15+</h2>
//               <p className="mt-2 text-slate-500">Brands</p>
//             </div>
//           </div>
//         </div>
//         <div className="relative flex justify-center">
//           <div className="relative">
//             <div className="w-[420px] h-[420px] rounded-full bg-white border-8 border-indigo-100 shadow-2xl flex items-center justify-center">
//               <Image
//                 src="/logo.webp"
//                 alt="Logo"
//                 width={180}
//                 height={180}
//                 priority
//               />
//             </div>
//             <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white border border-indigo-100 shadow-lg rounded-2xl px-5 py-3">
//               🔧 Repair</div>
//             <div className="absolute top-1/2 -left-10 -translate-y-1/2 bg-white border border-indigo-100 shadow-lg rounded-2xl px-5 py-3">
//               ⚡ Fast</div>
//             <div className="absolute top-1/2 -right-10 -translate-y-1/2 bg-white border border-indigo-100 shadow-lg rounded-2xl px-5 py-3">
//               ⭐ Quality</div>
//             <div className="absolute bottom-0 left-1/2 translate-y-8 -translate-x-1/2 bg-white border border-indigo-100 shadow-lg rounded-2xl px-5 py-3">
//               💯 Genuine Parts</div>
//           </div>
//         </div>
//       </div>
//       <div className="mt-28">
//         <div className="text-center">
//           <h2 className="text-4xl font-bold text-slate-900">What Can We Repair?</h2>
//           <p className="mt-4 text-slate-600">Professional repair solutions for all common headphone issues</p>
//         </div>
//         <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//           {services.map((item) => (
//             <div key={item.title} className="rounded-3xl bg-white border border-indigo-100 p-8 shadow-md hover:-translate-y-2 hover:shadow-xl transition">
//               <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center text-3xl"> {item.icon}</div>
//               <h3 className="mt-6 text-2xl font-bold text-slate-900"> {item.title}</h3>
//               <p className="mt-4 text-slate-500"> Fast diagnosis, genuine replacement parts and expert workmanship.</p>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="mt-24 rounded-[40px] bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 p-12 text-center text-white shadow-2xl">
//         <h2 className="text-4xl font-black"> Ready to Restore Your Headphones </h2>
//         <p className="mx-auto mt-5 max-w-3xl text-lg text-indigo-100"> Don't let damaged headphones stop your music. Our experienced technicians are ready to bring them back to life </p>
//         <div className="mt-10 flex flex-wrap justify-center gap-5">
//           <Link href="/contact" className="rounded-full bg-white px-8 py-4 font-semibold text-indigo-700 hover:scale-105 transition"> Book a Repair </Link>
//           <Link href="/services" className="rounded-full border-2 border-white px-8 py-4 font-semibold hover:bg-white hover:text-indigo-700 transition"> View Services</Link>
//         </div>
//       </div>
//     </section>
//   );
// }

//desgin 1
// import Image from "next/image";
// import Link from "next/link";
// export default function HomeHero() {
//   const services = [
//     { icon: "🔋", title: "Battery" },
//     { icon: "🎧", title: "Speaker" },
//     { icon: "📶", title: "Bluetooth" },
//     { icon: "🎤", title: "Microphone" },
//   ];

//   return (
//     <section className="relative overflow-hidden py-16">

//       {/* Background */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-indigo-100 blur-3xl opacity-70"></div>
//         <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-100 blur-3xl opacity-70"></div>
//       </div>

//       <div className="grid items-center gap-16 lg:grid-cols-2">

//         {/* LEFT */}

//         <div>

//           <span className="inline-flex rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
//             Welcome to HeadPhone Repair Centre
//           </span>

//           <h1 className="mt-6 text-5xl font-black leading-tight text-slate-900 md:text-6xl">
//             Restore Your
//             <br />
//             <span className="text-indigo-600">
//               Perfect Sound
//             </span>
//           </h1>

//           <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
//             Professional repair services for wired and wireless
//             headphones. We bring your favorite audio devices
//             back to life with genuine parts and expert care.
//           </p>

//           <div className="mt-10 flex flex-wrap gap-4">

//             <Link
//               href="/contact"
//               className="rounded-full bg-indigo-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-indigo-700"
//             >
//               Book Repair
//             </Link>

//             <Link
//               href="/services"
//               className="rounded-full border border-indigo-200 px-8 py-4 font-semibold text-indigo-700 transition hover:bg-indigo-50"
//             >
//               Explore Services
//             </Link>

//           </div>

//           {/* Stats */}

//           <div className="mt-14 grid grid-cols-3 gap-6">

//             <div>
//               <h2 className="text-4xl font-black text-indigo-600">
//                 500+
//               </h2>

//               <p className="text-slate-500">
//                 Repairs
//               </p>
//             </div>

//             <div>
//               <h2 className="text-4xl font-black text-indigo-600">
//                 98%
//               </h2>

//               <p className="text-slate-500">
//                 Satisfaction
//               </p>
//             </div>

//             <div>
//               <h2 className="text-4xl font-black text-indigo-600">
//                 15+
//               </h2>

//               <p className="text-slate-500">
//                 Brands
//               </p>
//             </div>

//           </div>

//         </div>

//         {/* RIGHT */}

//         <div className="relative flex justify-center">

//           <div className="relative">

//             {/* Circle */}

//             <div className="flex h-96 w-96 items-center justify-center rounded-full border-8 border-indigo-100 bg-white shadow-2xl">

//               <Image
//                 src="/logo.webp"
//                 alt="Logo"
//                 width={180}
//                 height={180}
//                 priority
//               />

//             </div>

//             {/* Floating Cards */}

//             <div className="absolute -top-6 left-1/2 -translate-x-1/2 rounded-2xl bg-white border border-indigo-100 px-5 py-3 shadow-lg">
//               🔧 Repair
//             </div>

//             <div className="absolute left-0 top-1/2 -translate-x-12 rounded-2xl bg-white border border-indigo-100 px-5 py-3 shadow-lg">
//               ⚡ Fast
//             </div>

//             <div className="absolute right-0 top-1/2 translate-x-12 rounded-2xl bg-white border border-indigo-100 px-5 py-3 shadow-lg">
//               ⭐ Quality
//             </div>

//             <div className="absolute bottom-0 left-1/2 translate-y-10 -translate-x-1/2 rounded-2xl bg-white border border-indigo-100 px-5 py-3 shadow-lg">
//               🎧 Trusted
//             </div>

//           </div>

//         </div>

//       </div>

//       {/* Service Cards */}

//       <div className="mt-24 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

//         {services.map((item) => (

//           <div
//             key={item.title}
//             className="rounded-3xl border border-indigo-100 bg-white p-8 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl"
//           >

//             <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100 text-3xl">
//               {item.icon}
//             </div>

//             <h3 className="mt-6 text-xl font-bold text-slate-900">
//               {item.title}
//             </h3>

//             <p className="mt-2 text-slate-500">
//               Professional repair service.
//             </p>

//           </div>

//         ))}

//       </div>

//     </section>
//   );
// }
//desgin 7
// "use client";
// import { useState } from "react";
// export default function HomeHero() {
//   const [selected, setSelected] = useState("Speaker Issue");

//   const services = [
//     {
//       title: "Speaker Issue",
//       icon: "🔊",
//       time: "30 - 45 Minutes",
//       cost: "₹299 onwards",
//     },
//     {
//       title: "Battery Problem",
//       icon: "🔋",
//       time: "45 - 60 Minutes",
//       cost: "₹499 onwards",
//     },
//     {
//       title: "Bluetooth Issue",
//       icon: "📶",
//       time: "20 - 40 Minutes",
//       cost: "₹399 onwards",
//     },
//     {
//       title: "Charging Port",
//       icon: "🔌",
//       time: "30 Minutes",
//       cost: "₹349 onwards",
//     },
//     {
//       title: "Microphone",
//       icon: "🎤",
//       time: "30 Minutes",
//       cost: "₹299 onwards",
//     },
//     {
//       title: "Headband Repair",
//       icon: "🎧",
//       time: "1 Hour",
//       cost: "₹599 onwards",
//     },
//   ];

//   const current =
//     services.find((item) => item.title === selected) || services[0];

//   return (
//     <section className="py-16">

//       <div className="text-center">

//         <span className="bg-indigo-100 text-indigo-700 px-5 py-2 rounded-full font-semibold">
//           Welcome to HeadPhone Repair Centre
//         </span>

//         <h1 className="mt-6 text-5xl md:text-6xl font-black text-slate-900">
//           What's Wrong With
//           <span className="text-indigo-600"> Your Headphones?</span>
//         </h1>

//         <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-lg leading-8">
//           Choose your issue below and we'll show an estimated repair time
//           and starting price.
//         </p>

//       </div>

//       {/* Service Selector */}

//       <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

//         {services.map((item) => (

//           <button
//             key={item.title}
//             onClick={() => setSelected(item.title)}
//             className={`rounded-3xl border p-8 transition duration-300 text-left ${
//               selected === item.title
//                 ? "bg-indigo-600 text-white border-indigo-600 shadow-xl"
//                 : "bg-white border-indigo-100 hover:border-indigo-400 hover:-translate-y-2"
//             }`}
//           >

//             <div className="text-5xl">
//               {item.icon}
//             </div>

//             <h3 className="mt-6 text-2xl font-bold">
//               {item.title}
//             </h3>

//           </button>

//         ))}

//       </div>

//       {/* Result */}

//       <div className="mt-16 bg-white rounded-[35px] border border-indigo-100 shadow-xl p-10">

//         <h2 className="text-4xl font-bold text-indigo-700">
//           Estimated Repair
//         </h2>

//         <div className="grid md:grid-cols-3 gap-8 mt-10">

//           <div className="bg-indigo-50 rounded-3xl p-8">

//             <p className="text-slate-500">
//               Selected Problem
//             </p>

//             <h3 className="mt-3 text-2xl font-bold text-slate-900">
//               {current.title}
//             </h3>

//           </div>

//           <div className="bg-indigo-50 rounded-3xl p-8">

//             <p className="text-slate-500">
//               Estimated Time
//             </p>

//             <h3 className="mt-3 text-2xl font-bold text-slate-900">
//               {current.time}
//             </h3>

//           </div>

//           <div className="bg-indigo-50 rounded-3xl p-8">

//             <p className="text-slate-500">
//               Starting Price
//             </p>

//             <h3 className="mt-3 text-2xl font-bold text-slate-900">
//               {current.cost}
//             </h3>

//           </div>

//         </div>

//         <div className="mt-12 flex flex-wrap justify-center gap-5">

//           <button className="px-8 py-4 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">
//             Book Repair
//           </button>

//           <button className="px-8 py-4 rounded-full border border-indigo-200 text-indigo-700 hover:bg-indigo-50 transition">
//             Contact Expert
//           </button>

//         </div>

//       </div>

//       {/* Bottom */}

//       <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6">

//         <div className="bg-white border border-indigo-100 rounded-3xl shadow-md p-8 text-center">
//           <h3 className="text-4xl font-bold text-indigo-600">500+</h3>
//           <p className="mt-2 text-slate-500">Repairs Completed</p>
//         </div>

//         <div className="bg-white border border-indigo-100 rounded-3xl shadow-md p-8 text-center">
//           <h3 className="text-4xl font-bold text-indigo-600">98%</h3>
//           <p className="mt-2 text-slate-500">Customer Satisfaction</p>
//         </div>

//         <div className="bg-white border border-indigo-100 rounded-3xl shadow-md p-8 text-center">
//           <h3 className="text-4xl font-bold text-indigo-600">24H</h3>
//           <p className="mt-2 text-slate-500">Quick Turnaround</p>
//         </div>

//         <div className="bg-white border border-indigo-100 rounded-3xl shadow-md p-8 text-center">
//           <h3 className="text-4xl font-bold text-indigo-600">15+</h3>
//           <p className="mt-2 text-slate-500">Supported Brands</p>
//         </div>

//       </div>

//     </section>
//   );
// }
//design 2
// import Image from "next/image";
// import Link from "next/link";
// export default function HomeHero() {
//   return (
//     <section className="py-10">
//       <div className="mb-12 text-center">
//         <span className="rounded-full bg-indigo-100 px-5 py-2 text-sm font-semibold text-indigo-700">
//           🎧 Welcome to HeadPhone Repair Centre
//         </span>

//         <h1 className="mt-6 text-5xl font-black text-slate-900 md:text-6xl">
//           Professional
//           <span className="block text-indigo-600">
//             Audio Repair Solutions
//           </span>
//         </h1>

//         <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
//           We repair premium wired and wireless headphones with genuine
//           replacement parts, expert technicians, and fast turnaround.
//         </p>
//       </div>

//       <div className="grid auto-rows-[220px] gap-6 lg:grid-cols-4">

//         {/* Logo Card */}

//         <div className="lg:col-span-2 rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-600 to-violet-700 p-8 text-white shadow-xl">

//           <div className="flex h-full flex-col justify-between">

//             <div>
//               <span className="rounded-full bg-white/20 px-3 py-1 text-sm">
//                 Since 2022
//               </span>

//               <h2 className="mt-6 text-4xl font-black">
//                 HeadPhone
//                 <br />
//                 Repair Centre
//               </h2>

//               <p className="mt-5 text-indigo-100">
//                 Fast, Reliable & Affordable
//               </p>
//             </div>

//             <div className="flex justify-end">
//               <Image
//                 src="/logo.webp"
//                 alt="Logo"
//                 width={120}
//                 height={120}
//                 priority
//               />
//             </div>

//           </div>

//         </div>

//         {/* Repairs */}

//         <div className="rounded-3xl border border-indigo-100 bg-white p-8 shadow-md transition hover:-translate-y-2">

//           <div className="text-5xl">🔧</div>

//           <h3 className="mt-6 text-4xl font-black text-indigo-600">
//             500+
//           </h3>

//           <p className="mt-2 text-slate-600">
//             Successful Repairs
//           </p>

//         </div>

//         {/* Rating */}

//         <div className="rounded-3xl border border-indigo-100 bg-white p-8 shadow-md transition hover:-translate-y-2">

//           <div className="text-5xl">⭐</div>

//           <h3 className="mt-6 text-4xl font-black text-indigo-600">
//             4.9
//           </h3>

//           <p className="mt-2 text-slate-600">
//             Customer Rating
//           </p>

//         </div>

//         {/* Services */}

//         <div className="lg:col-span-2 rounded-3xl border border-indigo-100 bg-white p-8 shadow-md">

//           <h3 className="text-2xl font-bold text-slate-900">
//             Repair Services
//           </h3>

//           <div className="mt-8 grid grid-cols-2 gap-4">

//             {[
//               "🔊 Speaker",
//               "🔋 Battery",
//               "📶 Bluetooth",
//               "🎤 Microphone",
//               "🔌 Charging",
//               "🎧 Headband",
//             ].map((item) => (
//               <div
//                 key={item}
//                 className="rounded-2xl bg-indigo-50 p-4 text-center font-semibold text-slate-700 transition hover:bg-indigo-600 hover:text-white"
//               >
//                 {item}
//               </div>
//             ))}

//           </div>

//         </div>

//         {/* Brands */}

//         <div className="rounded-3xl border border-indigo-100 bg-indigo-50 p-8">

//           <h3 className="text-xl font-bold text-indigo-700">
//             Supported Brands
//           </h3>

//           <div className="mt-6 flex flex-wrap gap-3">

//             {[
//               "Sony",
//               "Apple",
//               "Boat",
//               "JBL",
//               "Bose",
//               "Noise",
//             ].map((brand) => (
//               <span
//                 key={brand}
//                 className="rounded-full bg-white px-4 py-2 text-sm shadow"
//               >
//                 {brand}
//               </span>
//             ))}

//           </div>

//         </div>

//         {/* Turnaround */}

//         <div className="rounded-3xl border border-indigo-100 bg-white p-8 shadow-md">

//           <div className="text-5xl">⚡</div>

//           <h3 className="mt-5 text-3xl font-black text-indigo-600">
//             24 Hrs
//           </h3>

//           <p className="mt-2 text-slate-600">
//             Average Repair Time
//           </p>

//         </div>

//         {/* CTA */}

//         <div className="lg:col-span-4 rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 p-10 text-white shadow-xl">

//           <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

//             <div>

//               <h2 className="text-4xl font-black">
//                 Ready to Restore Your Sound?
//               </h2>

//               <p className="mt-4 max-w-2xl text-indigo-100">
//                 Book your repair today and let our experts bring your
//                 headphones back to life.
//               </p>

//             </div>

//             <div className="flex gap-4">

//               <Link
//                 href="/services"
//                 className="rounded-full bg-white px-8 py-4 font-semibold text-indigo-700 transition hover:scale-105"
//               >
//                 Our Services
//               </Link>

//               <Link
//                 href="/contact"
//                 className="rounded-full border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-indigo-700"
//               >
//                 Book Repair
//               </Link>

//             </div>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }
// suggestion