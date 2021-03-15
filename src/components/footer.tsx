import React from "react";

export default function Footer() {
	return (
		<footer className="w-full bg-gray-300 shadow-inner mt-auto">
			<div className="container p-4 mx-auto">
				<p className="text-gray-200 text-center text-sm">
					Source Copyright 2021 ©{" "}
					<a
						className="text-indigo-300"
						href="https://github.com/bkamphues/bokamphues.nl/blob/master/LICENSE.md"
					>
						MIT
					</a>
					.
				</p>
				<p className="text-gray-200 text-center text-sm">
					Media Copyright 2021 Bo Kamphues © All rights reserved.
				</p>
			</div>
		</footer>
	);
}
