import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
	return (
		<div className="flex flex-col min-h-screen bg-gray-100 overflow-hidden">
			<Navbar />
			<div className="flex-grow">{children}</div>
			<Footer />
		</div>
	);
}
