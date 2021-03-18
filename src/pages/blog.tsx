import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function Blog() {
	return (
		<Layout>
			<SEO title="Blog" description="Overview page of all my blog articles." />
			<h1 className="p-4">Blog Page!</h1>
		</Layout>
	);
}
