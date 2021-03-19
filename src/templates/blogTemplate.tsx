import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

// template component for blog articles
export default function Template({ data }): JSX.Element {
	// data variables from query
	const { markdownRemark } = data;
	const { frontmatter, html, excerpt } = markdownRemark;

	// render template
	return (
		<Layout>
			<SEO title={frontmatter.title} description={excerpt} article={true} />
			<div className="container mx-auto p-5">
				<div className="max-w-4xl bg-gray-100 flex p-5 rounded-md border-2 border-indigo-300 shadow-md">
					<div dangerouslySetInnerHTML={{ __html: html }}></div>
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
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				slug
				title
				tags
				thumbnail {
					childImageSharp {
						gatsbyImageData
					}
				}
			}
		}
	}
`;
