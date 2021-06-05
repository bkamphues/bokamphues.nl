import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
	return (
		<div className="flex flex-col min-h-screen bg-gray-200 overflow-hidden">
			<div className="flex-grow">{children}</div>
			<Footer />
		</div>
	);
}
