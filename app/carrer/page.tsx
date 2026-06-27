export default function CarrerPage() {
	const benefits = [
		{
			title: "Learn & Grow",
			desc: "Continuous learning through mentorship, workshops and real-world projects.",
			icon: "📚",
		},
		{
			title: "Flexible Culture",
			desc: "Work in an environment that values innovation and collaboration.",
			icon: "🤝",
		},
		{
			title: "Global Opportunities",
			desc: "Collaborate with clients and professionals across the globe.",
			icon: "🌍",
		},
		{
			title: "Innovation First",
			desc: "Build modern technology that solves real business problems.",
			icon: "🚀",
		},
	];

	const jobs = [
		"Frontend Developer",
		"Backend Developer",
		"Python Developer",
		"Data Analyst",
		"UI/UX Designer",
		"Digital Marketing",
		"QA Engineer",
		"DevOps Engineer",
	];
	return (
		<div className="min-h-screen p-8 bg-gradient-to-b from-white via-indigo-50 to-white">
			{/* <h1 className="text-3xl font-bold">Career</h1>
			<p className="mt-4 text-lg">This page is under construction.</p> */}
				<section className="max-w-7xl mx-auto px-6 text-center pb-40 pt-0">

					<span className="inline-block px-5 py-2 rounded-full bg-indigo-100 text-indigo-700 font-semibold">
						🚀 Careers Launching Soon
					</span>

					<h1 className="mt-6 text-5xl md:text-6xl font-extrabold text-indigo-700">
						Build the Future With Us
					</h1>

					<p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
						We're creating opportunities for passionate minds.
						Join our growing team and build products that make
						a real impact.
					</p>

					<button className="mt-10 px-8 py-4 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg transition">
						Notify Me
					</button>

				</section>

      {/* Benefits */}

			<section className="max-w-7xl mx-auto px-6 py-20">

				<div className="text-center mb-14">

					<h2 className="text-4xl font-bold text-indigo-700">
						Why Work With Us?
					</h2>

					<p className="mt-4 text-gray-600">
						We believe great people build great companies.
					</p>

				</div>

				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

					{benefits.map((item) => (

						<div
							key={item.title}
							className="bg-white rounded-3xl shadow-lg border border-indigo-100 p-8 hover:-translate-y-2 hover:shadow-xl transition"
						>

							<div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center text-3xl">
								{item.icon}
							</div>

							<h3 className="mt-6 text-2xl font-bold text-indigo-700">
								{item.title}
							</h3>

							<p className="mt-4 text-gray-600 leading-7">
								{item.desc}
							</p>

						</div>

					))}

				</div>

			</section>

			{/* Hiring Categories */}

			<section className="max-w-7xl mx-auto px-6 py-20">

				<div className="bg-white rounded-3xl shadow-xl border border-indigo-100 p-12">

					<h2 className="text-center text-4xl font-bold text-indigo-700">
						Upcoming Opportunities
					</h2>

					<p className="text-center text-gray-600 mt-4">
						Explore exciting career opportunities across different domains.
					</p>

					<div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

						{jobs.map((job) => (

							<div
								key={job}
								className="bg-indigo-50 border border-indigo-200 rounded-2xl p-5 text-center hover:bg-indigo-100 transition"
							>
								<p className="font-semibold text-gray-700">
									{job}
								</p>
							</div>

						))}

					</div>

				</div>

			</section>

			{/* Internship */}

			<section className="max-w-7xl mx-auto px-6 py-20">

				<div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-12">

					<h2 className="text-4xl font-bold">
						Internship Programs Coming Soon
					</h2>

					<p className="mt-6 text-indigo-100 leading-8">
						Gain practical industry experience through structured
						internship programs designed to bridge academic learning
						with professional excellence.
					</p>

				</div>

			</section>

			{/* Hiring Process */}

			<section className="max-w-7xl mx-auto px-6 py-20">

				<div className="text-center mb-14">

					<h2 className="text-4xl font-bold text-indigo-700">
						Hiring Process
					</h2>

				</div>

				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

					{[
						"Apply",
						"Interview",
						"Assessment",
						"Join Our Team",
					].map((step, index) => (

						<div
							key={step}
							className="bg-white rounded-3xl border border-indigo-100 shadow-lg p-8 text-center"
						>

							<div className="w-14 h-14 mx-auto rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xl">
								{index + 1}
							</div>

							<h3 className="mt-6 text-xl font-bold text-indigo-700">
								{step}
							</h3>

						</div>

					))}

				</div>

			</section>

			{/* CTA */}

			<section className="max-w-6xl mx-auto px-6 pb-24">

				<div className="rounded-[40px] bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white p-16 shadow-xl text-center">

					<h2 className="text-4xl md:text-5xl font-bold">
						Ready to Start Your Career?
					</h2>

					<p className="mt-6 text-lg text-indigo-100 max-w-3xl mx-auto leading-8">
						Be among the first to know when our careers portal goes live.
						Exciting opportunities are just around the corner.
					</p>

					<div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

						<input
							type="email"
							placeholder="Enter your email"
							className="px-6 py-4 rounded-full text-gray-700 w-full sm:w-80 outline-none"
						/>

						<button className="px-8 py-4 rounded-full bg-white text-indigo-700 font-semibold hover:scale-105 transition">
							Notify Me
						</button>

					</div>

				</div>

			</section>
		</div>
	);
}
