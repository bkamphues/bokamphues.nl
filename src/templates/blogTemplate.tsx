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
			<div dangerouslySetInnerHTML={{ __html: html }}></div>
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
