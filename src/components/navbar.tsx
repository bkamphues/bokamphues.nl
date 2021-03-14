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
			<nav className="">
				<div className="flex items-center justify-between p-6 container mx-auto">
					<NavigationLogos />
					<NavigationLinks />
				</div>
			</nav>
		);
	}
}
