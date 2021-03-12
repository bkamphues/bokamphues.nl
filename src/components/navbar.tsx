import React from "react";
import NavigationLinks from "./navbar-links";
import NavigationLogos from "./navbar-logos";

export default class Navbar extends React.Component {
	// constructor hook
	constructor(props) {
		super(props);
	}

	// render hook
	render() {
		return (
			<nav className="bg-gray-800 shadow-md">
				<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
					<div className="relative flex items-center justify-between h-16">
						<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
							<NavigationLogos />
							<NavigationLinks
								activeClassName="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-bold"
								className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold"
							/>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}
