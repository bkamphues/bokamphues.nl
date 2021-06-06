import React from "react";

export default function Footer() {
	// dynamic copyright date
	const year = new Date().getFullYear();

	return (
		<footer className="w-full bg-gray-300 shadow-inner mt-auto">
			<div className="container p-4 mx-auto">
				<p className="text-gray-400 text-center text-sm">
					Source Code Copyright 2021 - {year} ©{" "}
					<a
						className="text-indigo-300"
						href="https://github.com/bkamphues/bokamphues.nl/blob/master/LICENSE.md"
					>
						MIT
					</a>
					.
				</p>
				<p className="text-gray-400 text-center text-sm">
					Media Copyright 2021 - {year} Bo Kamphues © All rights reserved.
				</p>
			</div>
		</footer>
	);
}
