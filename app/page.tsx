import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const services = [
    { icon: "🔊", title: "Speaker Repair", },
    { icon: "🔋", title: "Battery Replacement", },
    { icon: "📶", title: "Bluetooth Fix", },
    { icon: "🎤", title: "Mic Repair", },
  ];

  return (
    <section className="relative overflow-hidden py-0 max-w-[98%]">
      <section className="relative overflow-hidden pt-10 pb-70 ">
        {/* <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-indigo-100 blur-3xl opacity-50 z-10"></div> */}
        {/* <div className="absolute bottom-70 max-tablet:right-15 right-140 h-60 w-60 rounded-full bg-violet-400 blur-2xl opacity-50 z-10"></div> */}
        {/* <div className="absolute h-60 w-60 right-200 top-20 rounded-full bg-blue-500 blur-2xl opacity-60 z-10"></div> */}
        <div className="absolute h-100 w-[100%] bottom-20 bg-blue-500 bg-gradient-to-t from-indigo-500 via-violet-100 to-white blur-4xl rounded-full opacity-500 z-10"></div>
        <div className="absolute h-100 w-[100%] -bottom-70 bg-blue-500 bg-gradient-to-t from-white via-white to-white blur-4xl rounded-full opacity-500 z-10"></div>
        <div className="absolute h-100 w-[100%] bottom-40 bg-blue-500 bg-gradient-to-t from-gray-200 via-violet-100 to-white blur-4xl rounded-full opacity-500 z-10"></div>
        <div className="absolute h-100 w-[100%] bottom-60 bg-blue-500 bg-gradient-to-t from-blue-200 via-white to-white blur-4xl rounded-full opacity-500 z-10"></div>
        <div className="relative z-20">
          <div className="text-center">
            <span className="rounded-full bg-indigo-100 px-5 py-2 text-sm font-semibold text-indigo-700 uppercase"> Welcome to 🎧 HeadPhone Repair Centre</span>
            <h1 className="mt-8 text-5xl md:text-6xl font-black text-slate-900">Repair.<span className="text-indigo-600"> Restore.</span>
              <br />Enjoy Again.</h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-900">
              From diagnosis to delivery, every repair is handled with
              precision, genuine parts, and professional care.
            </p>
          </div>
        </div>
      </section>
      {/* <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-100 blur-3xl opacity-50 z-10"></div> */}
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-100 blur-3xl opacity-20"></div>
      <div className="relative grid lg:grid-cols-2 gap-16 items-center max-tablet:scale-70 max-tablet:grid-cols-1">
        <div>
          <span className="inline-flex items-center rounded-full bg-indigo-100 px-5 py-2 text-sm font-semibold text-indigo-700">
            🎧 Trusted Headphone Repair Centre </span>
          <h1 className="mt-8 text-5xl lg:text-6xl font-black leading-tight text-slate-900"> Bring Your<br /><span className="text-indigo-600"> Sound Back.</span> </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
            We specialize in repairing wired and wireless headphones with
            genuine spare parts, skilled technicians, and affordable
            pricing.
          </p>
          <div className="mt-10 flex flex-wrap gap-5 justify-center">
            <Link href="/contact" className="rounded-full bg-indigo-600 px-8 py-4 text-white font-semibold shadow-lg hover:bg-indigo-700 transition"> Book Repair</Link>

            <Link href="/services" className="rounded-full border border-indigo-200 px-8 py-4 text-indigo-700 font-semibold hover:bg-indigo-50 transition">Our Services</Link>
          </div>
          <div className="mt-14 grid grid-cols-3 gap-8 ">
            <div>
              <h2 className="text-4xl font-black text-indigo-600">500+</h2>
              <p className="mt-2 text-slate-500">Repairs</p>
            </div>
            <div><h2 className="text-4xl font-black text-indigo-600">98%</h2>
              <p className="mt-2 text-slate-500">Success</p>
            </div>
            <div>
              <h2 className="text-4xl font-black text-indigo-600">15+</h2>
              <p className="mt-2 text-slate-500">Brands</p>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="relative">
            <div className="w-[420px] h-[420px] rounded-full bg-white border-8 border-indigo-100 shadow-2xl flex items-center justify-center">
              <Image
                src="/logo.webp"
                alt="Logo"
                width={180}
                height={180}
                priority
              />
            </div>
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white border border-indigo-100 shadow-lg rounded-2xl px-5 py-3">
              🔧 Repair</div>
            <div className="absolute top-1/2 -left-10 -translate-y-1/2 bg-white border border-indigo-100 shadow-lg rounded-2xl px-5 py-3">
              ⚡ Fast</div>
            <div className="absolute top-1/2 -right-10 -translate-y-1/2 bg-white border border-indigo-100 shadow-lg rounded-2xl px-5 py-3">
              ⭐ Quality</div>
            <div className="absolute bottom-0 left-1/2 translate-y-8 -translate-x-1/2 bg-white border border-indigo-100 shadow-lg rounded-2xl px-5 py-3">
              💯 Genuine Parts</div>
          </div>
        </div>
      </div>
      <div className="mt-28">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">What Can We Repair?</h2>
          <p className="mt-4 text-slate-600">Professional repair solutions for all common headphone issues</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((item) => (
            <div key={item.title} className="rounded-3xl bg-white border border-indigo-100 p-8 shadow-md hover:-translate-y-2 hover:shadow-xl transition">
              <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center text-3xl"> {item.icon}</div>
              <h3 className="mt-6 text-2xl font-bold text-slate-900"> {item.title}</h3>
              <p className="mt-4 text-slate-500"> Fast diagnosis, genuine replacement parts and expert workmanship.</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-24 rounded-[40px] bg-gradient-to-r from-indigo-700 via-violet-900 to-purple-800 p-12 text-center text-white shadow-2xl max-tablet:">
        <h2 className="text-4xl font-black"> Ready to Restore Your Headphones </h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg text-indigo-100"> Don't let damaged headphones stop your music. Our experienced technicians are ready to bring them back to life </p>
        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <Link href="/contact" className="rounded-full bg-white px-8 py-4 font-semibold text-indigo-700 hover:scale-105 transition"> Book a Repair </Link>
          <Link href="/services" className="rounded-full border-2 border-white px-8 py-4 font-semibold hover:bg-white hover:text-indigo-700 transition"> View Services</Link>
        </div>
      </div>
    </section>
  );
}