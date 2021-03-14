import React from "react";
import NavigationLinks from "./navbar-links";
import NavigationLogos from "./navbar-logos";

// hamburger button
function NavigationHamburger({ eventHandler }) {
	return (
		<div className="lg:hidden min-w-200 flex-shrink-0">
			<div className="block items-center lg:hidden" onClick={eventHandler}>
				<button className="flex items-center px-4 py-3 border rounded text-primary border-primary focus:outline-none">
					<svg
						className="fill-current h-3 w-3"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>
				</button>
			</div>
		</div>
	);
}

interface NavbarInterfaceProps {}

interface NavbarInterfaceState {
	mobileActive?: boolean;
}

export default class Navbar extends React.Component<
	NavbarInterfaceProps,
	NavbarInterfaceState
> {
	// constructor hook
	constructor(props) {
		super(props);
		this.state = {
			mobileActive: false,
		};
		this.handleHamburger = this.handleHamburger.bind(this);
	}

	// hamburger callback
	handleHamburger() {
		this.setState(state => ({ mobileActive: !state.mobileActive }));
		console.log("Test!");
	}

	// render hook
	render() {
		return (
			<nav className="">
				<div className="flex flex-wrap items-center justify-between p-6 container mx-auto">
					<NavigationLogos />
					<NavigationHamburger eventHandler={this.handleHamburger} />
					<div className={this.state.mobileActive ? "w-full" : "hidden"} />
					<NavigationLinks
						mobileActiveClass={this.state.mobileActive ? "block" : "hidden"}
					/>
				</div>
			</nav>
		);
	}
}
