import React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Summary from "../components/summary";
import Technologies from "../components/technologies";
import SEO from "../components/seo";

export default function Index() {
	return (
		<Layout>
			<SEO title="Home" />
			<Hero
				heading={
					<p>
						Hey, my name is <br />
						<b>Bo Kamphues</b>.
					</p>
				}
				subheading={[
					"Pipeline Technical Director",
					"Frontend Developer",
					"Visual Effects Artist",
				]}
			/>
			<Summary />
			<Technologies />
		</Layout>
	);
}
