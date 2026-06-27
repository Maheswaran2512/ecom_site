export default function AboutPage() {
	const values = [
		{ title: "Innovation", desc: "We embrace creativity and continuously explore new possibilities.", icon: "💡", },
		{ title: "Integrity", desc: "We build trust through transparency and ethical practices.", icon: "🤝", },
		{ title: "Excellence", desc: "We strive for the highest standards in every project.", icon: "🏆", },
		{ title: "Collaboration", desc: "Success comes from teamwork and mutual respect.", icon: "👥", },
		{ title: "Customer First", desc: "Every solution begins with understanding customer needs.", icon: "❤️", },
		{ title: "Learning", desc: "Technology evolves every day, and so do we.", icon: "📚", },];

	const stats = [
		{ number: "100+", label: "Projects Delivered" },
		{ number: "50+", label: "Happy Clients" },
		{ number: "20+", label: "Experts" },
		{ number: "5+", label: "Years Experience" },
	];
	return (
		<div className="min-h-screen p-8 bg-gradient-to-b from-white via-indigo-50 to-white">
			{/* <h1 className="text-3xl font-bold">About Us</h1>
			<p className="mt-4 text-lg">This page is under construction.</p>
			Background Glow */}
			<div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />
			<div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[180px]" />
			{/* Hero */}
			<section className="max-w-7xl mx-auto px-6 pb-40 pt-0">
				<div className="text-center">
					<span className="inline-block px-5 py-2 rounded-full bg-indigo-100 text-indigo-700 font-semibold">
						ABOUT US
					</span>
					<h1 className="mt-6 text-4xl md:text-6xl font-extrabold text-indigo-700">
						Driven by Innovation.
						<br />
						Inspired by People.
					</h1>
					<p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg leading-8">
						We build modern digital experiences that empower businesses,
						accelerate innovation, and create meaningful solutions through
						cutting-edge technology.
					</p>
					<button className="mt-10 px-8 py-4 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition shadow-lg">
						Learn More
					</button>
				</div>
			</section>
			<section className="max-w-7xl mx-auto px-6 pb-24">
				<div className="grid lg:grid-cols-2 gap-10">
					<div className="bg-white rounded-3xl shadow-lg border border-indigo-100 p-10">
						<h2 className="text-4xl font-bold text-indigo-700">
							Our Story
						</h2>
						<div className="mt-2 h-1 w-20 bg-indigo-600 rounded-full"></div>
						<p className="mt-8 text-gray-600 leading-8">
							Every great journey begins with a vision.
							<br /><br />
							Our mission started with one goal—to build innovative
							software solutions that help businesses grow.
							Today we continue transforming ideas into scalable
							digital products while maintaining quality,
							innovation and customer satisfaction.
						</p>
					</div>
					<div className="space-y-8">
						<div className="bg-indigo-50 rounded-3xl border border-indigo-200 p-8 shadow">
							<h3 className="text-3xl font-bold text-indigo-700">Mission</h3>
							<p className="mt-5 text-gray-600 leading-8">
								Deliver innovative technology solutions that empower
								organizations through quality, reliability and
								continuous improvement.
							</p>
						</div>
						<div className="bg-purple-50 rounded-3xl border border-purple-200 p-8 shadow">
							<h3 className="text-3xl font-bold text-purple-700">Vision</h3>
							<p className="mt-5 text-gray-600 leading-8">
								Become a globally recognized technology partner
								known for innovation, trust and customer-centric
								digital transformation.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="mx-auto max-w-7xl px-6 py-20">
				<div className="text-center mb-14">
					<h2 className="text-4xl md:text-5xl font-bold text-indigo-700">
						Our Core Values
					</h2>

					<p className="mt-4 text-gray-600">
						The principles that guide everything we build.
					</p>
				</div>
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{values.map((value) => (
						<div
							key={value.title}
							className="bg-white rounded-3xl border border-indigo-100 shadow-md p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-indigo-400"
						>
							<div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-indigo-100 text-3xl">
								{value.icon}
							</div>
							<h3 className="mt-6 text-2xl font-bold text-indigo-700">
								{value.title}
							</h3>
							<p className="mt-4 text-gray-600 leading-7">
								{value.desc}
							</p>
						</div>
					))}
				</div>
			</section>
			<section className="mx-auto max-w-7xl px-6 py-20">
				<div className="text-center mb-14">
					<h2 className="text-4xl md:text-5xl font-bold text-indigo-700">
						Our Achievements
					</h2>

					<p className="mt-4 text-gray-600">
						Numbers that reflect our dedication and success.
					</p>
				</div>
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
					{stats.map((item) => (
						<div
							key={item.label}
							className="rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-xl p-10 text-center hover:scale-105 transition"
						>

							<h3 className="text-5xl font-extrabold">
								{item.number}
							</h3>

							<p className="mt-3 text-indigo-100">
								{item.label}
							</p>
						</div>
					))}
				</div>
			</section>
			<section className="mx-auto max-w-7xl px-6 py-20">
				<div className="bg-white rounded-3xl shadow-xl border border-indigo-100 p-12">
					<div className="text-center">
						<h2 className="text-4xl md:text-5xl font-bold text-indigo-700">
							Why Choose Us?
						</h2>
						<p className="mt-4 text-gray-600">
							We combine innovation, quality, and customer satisfaction to deliver exceptional solutions.
						</p>
					</div>
					<div className="mt-12 grid gap-6 md:grid-cols-2">
						{[
							"Innovative Technology",
							"Experienced Team",
							"Agile Development",
							"Scalable Solutions",
							"Transparent Communication",
							"Quality Assurance",
							"Timely Delivery",
							"Long-Term Partnership",
						].map((item) => (
							<div
								key={item}
								className="flex items-center gap-4 rounded-2xl border border-indigo-100 bg-indigo-50 p-5 hover:bg-indigo-100 transition"
							>
								<div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
									✓
								</div>
								<span className="font-medium text-gray-700">
									{item}
								</span>
							</div>
						))}
					</div>
				</div>
			</section>
			<section className="mx-auto max-w-6xl px-6 pb-24">
				<div className="rounded-[40px] bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white p-16 shadow-2xl">
					<div className="text-center">
						<h2 className="text-4xl md:text-5xl font-bold">
							Let's Build Something Extraordinary Together
						</h2>
						<p className="mt-6 max-w-3xl mx-auto text-indigo-100 text-lg leading-8">
							Whether you're looking for innovative software solutions,
							talented professionals, or exciting career opportunities,
							we'd love to connect with you.
						</p>
						<div className="mt-10 flex flex-wrap justify-center gap-5">
							<button className="px-8 py-4 rounded-full bg-white text-indigo-700 font-semibold hover:scale-105 transition shadow-lg">
								Get Started
							</button>
							<button className="px-8 py-4 rounded-full border-2 border-white text-white hover:bg-white hover:text-indigo-700 transition">
								Contact Us
							</button>
						</div>
					</div>
				</div>
			</section>
		</div >
	);
}
