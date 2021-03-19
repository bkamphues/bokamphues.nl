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
	return (
		<Layout>
			<SEO title="Blog" description="Overview page of all my blog articles." />
			<div className="container mx-auto p-4 mb-5">
				<h1 className="py-4 text-4xl font-bold text-indigo-400">Articles</h1>
				<BlogGrid></BlogGrid>
			</div>
		</Layout>
	);
}
