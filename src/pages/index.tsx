import React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";

export default function Index() {
	return (
		<div className="bg-gray-100 h-full">
			<Layout>
				<Hero></Hero>
				<div className="h-screen">
					<h1 className="p-4">Home page!</h1>
				</div>
			</Layout>
		</div>
	);
}
