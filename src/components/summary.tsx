import React from "react";

export default function Summary() {
	// calculate age for summary paragraph
	const birthday = new Date(1999, 5, 8);
	const diff = new Date(Date.now() - birthday.getTime());
	const age = Math.abs(diff.getUTCFullYear() - 1970);

	// return the component
	return (
		<div className="bg-gradient-to-r from-primary to-indigo-500 mt-5 transform -skew-y-2">
			<div className="container mx-auto p-5 transform skew-y-2">
				<h1 className="text-center text-2xl font-extrabold text-gray-100">
					A little about me
				</h1>
				<div className="flex justify-center text-gray-100 text-lg font-semibold space-x-5">
					<p>I'm {age} years old.</p>
					<ul>
						<li>test</li>
						<li>test 2</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
