import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// template component for blog articles
export default function Template({ data }): JSX.Element {
	// data variables from query
	const { markdownRemark } = data;
	const { frontmatter, html, excerpt, tableOfContents } = markdownRemark;
	const date = new Date(frontmatter.date);

	// get the hours and minutes from the date property to format correctly
	const hours = date.getUTCHours();
	const minutes = date.getUTCMinutes();

	// render template
	return (
		<Layout>
			<SEO title={frontmatter.title} description={excerpt} article={true} />
			<div className="container mx-auto p-5 flex gap-5">
				<div className="max-w-5xl bg-gray-100 rounded-lg shadow-md overflow-hidden">
					<GatsbyImage
						image={getImage(frontmatter.thumbnail)}
						alt="test"
						className="max-h-96"
					></GatsbyImage>
					<div className="p-5">
						<h1 className="text-4xl font-semibold text-indigo-400">
							{frontmatter.title}
						</h1>
						<h2 className="text-indigo-600 font-light text-sm">
							{`${date.toDateString()}  ${hours.toString()}:${minutes.toString()}`}
						</h2>
						<div
							className="markdown"
							dangerouslySetInnerHTML={{ __html: html }}
						></div>
					</div>
				</div>
				<div className="text-align-right rounded-lg bg-gray-100">
					<div
						className="markdown"
						dangerouslySetInnerHTML={{ __html: tableOfContents }}
					></div>
				</div>
			</div>
		</Layout>
	);
}

// page query
export const pageQuery = graphql`
	query($slug: String!) {
		markdownRemark(frontmatter: { slug: { eq: $slug } }) {
			html
			excerpt
			tableOfContents
			frontmatter {
				date
				slug
				title
				tags
				thumbnail {
					childImageSharp {
						gatsbyImageData(layout: FULL_WIDTH)
					}
				}
			}
		}
	}
`;
