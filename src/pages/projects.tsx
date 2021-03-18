import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function Projects() {
	return (
		<Layout>
			<SEO title="Projects" description="Overview page of all my projects." />
			<div className="container mx-auto">
				<h1 className="py-4 text-4xl font-bold text-indigo-400">Projects</h1>
			</div>
		</Layout>
	);
}
