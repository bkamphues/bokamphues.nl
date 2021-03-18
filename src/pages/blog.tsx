import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import BlogGrid from "../components/blog-grid";
import BlogCard from "../components/blog-card";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

export const pageQuery = graphql`
	query testImage {
		allFile(filter: { extension: { eq: "jpg" } }) {
			nodes {
				childrenImageSharp {
					gatsbyImageData(
						placeholder: BLURRED
						layout: FULL_WIDTH
						formats: AUTO
					)
				}
			}
		}
	}
`;

export default function Blog({ data }) {
	const testImage = data.allFile.nodes[0].childrenImageSharp[0].gatsbyImageData;
	const testImage2 =
		data.allFile.nodes[1].childrenImageSharp[0].gatsbyImageData;

	return (
		<Layout>
			<SEO title="Blog" description="Overview page of all my blog articles." />
			<div className="container mx-auto p-4 mb-5">
				<h1 className="py-4 text-4xl font-bold text-indigo-400">Articles</h1>
				<BlogGrid>
					<BlogCard
						title="Test title To see"
						date={new Date()}
						imageAlt="test"
						image={testImage}
						link="/projects/"
					>
						This is a test article. It allows for a maximum of 180 characters to
						display beneath the card to ensure a decent description. Let's see
						where it will stop to check what the 180 mark is.
					</BlogCard>
					<BlogCard
						image={testImage2}
						title="How I made my website using Gatsby"
						date={new Date()}
						imageAlt="test"
						link="/projects/"
					>
						This is a test article. It allows for a maximum of 180 characters to
						display beneath the card to ensure a decent description. Let's see
						where it will stop to check what the 180 mark is.
					</BlogCard>
					<BlogCard
						image={testImage}
						title="How I made my website using Gatsby"
						date={new Date()}
						imageAlt="test"
						link="/projects/"
					>
						This is a test article. It allows for a maximum of 180 characters to
						display beneath the card to ensure a decent description. Let's see
						where it will stop to check what the 180 mark is.
					</BlogCard>
					<BlogCard
						image={testImage2}
						title="How I made my website using Gatsby"
						date={new Date()}
						imageAlt="test"
						link="/projects/"
					>
						This is a test article. It allows for a maximum of 180 characters to
						display beneath the card to ensure a decent description. Let's see
						where it will stop to check what the 180 mark is.
					</BlogCard>
				</BlogGrid>
			</div>
		</Layout>
	);
}
