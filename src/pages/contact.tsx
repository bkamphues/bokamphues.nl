import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function Contact() {
	return (
		<Layout>
			<SEO
				title="Contact"
				description="Contact page to contact me through socials or email."
			/>
			<h1 className="p-4">Contact Page!</h1>
		</Layout>
	);
}
