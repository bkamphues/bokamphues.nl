import React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Summary from "../components/summary";
import Technologies from "../components/technologies";
import { graphql } from "gatsby";

export default function Index({ data }) {
	return (
		<Layout>
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
				image={data.allContentfulAsset.edges[0].node.gatsbyImageData}
			/>
			<Summary />
			<Technologies />
		</Layout>
	);
}

export const query = graphql`
	query ProfilePicture {
		allContentfulAsset(filter: { title: { eq: "Profile Picture" } }) {
			edges {
				node {
					gatsbyImageData(
						aspectRatio: 1
						placeholder: BLURRED
						width: 250
						layout: FIXED
					)
				}
			}
		}
	}
`;
