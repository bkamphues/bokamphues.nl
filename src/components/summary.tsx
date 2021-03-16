import React from "react";

export default function Summary() {
	// calculate age for summary paragraph
	const birthday = new Date(1999, 5, 8);
	const diff = new Date(Date.now() - birthday.getTime());
	let age = Math.abs(diff.getUTCFullYear() - 1970);

	// return the component
	return (
		<div className="transition duration-75 transform -skew-y-2 bg-gradient-to-r from-primary to-indigo-500 mt-5">
			<div className="container mx-auto p-5 transform skew-y-2">
				<h1 className="text-center text-2xl mb-6 font-extrabold text-gray-100">
					A little about me
				</h1>
				<div className="flex flex-wrap sm:flex-nowrap justify-center text-gray-100 text-lg font-semibold space-y-5 sm:space-y-0 space-x-5">
					<div className="w-full sm:w-1/2 lg:w-1/3">
						<p className="text-center font-light">
							I'm {age} years old, live in the Netherlands and fanatic about
							anything visual effects and development. My main specialty is the
							development of visual effects pipelines, but I also love to dabble
							in frontend and backend development.
						</p>
					</div>
					<div className="w-full sm:w-1/2 lg:w-1/3">
						<h1 className="font-extrabold text-xl">Technologies</h1>
						<ul className="list-inside font-light">
							<li className="font-semibold text-pink-300">Languages</li>
							<ul className="list-disc list-inside">
								<li>Python</li>
								<li>Javascript / Typescript</li>
							</ul>
							<li className="font-semibold text-pink-300">Frameworks</li>
							<ul className="list-disc list-inside">
								<li>Shotgun Toolkit</li>
							</ul>
							<li className="font-semibold text-pink-300">Devops</li>
							<ul className="list-disc list-inside">
								<li>Docker</li>
								<li>Kubernetes</li>
							</ul>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
