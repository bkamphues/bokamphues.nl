import React from "react";
import { graphql, useStaticQuery } from "gatsby";

// component that returns the site logo in a navigation block
export default function NavigationLogos() {
	// query for the 'logo2.svg' file in the /static folder
	const data = useStaticQuery(graphql`
		{
			allContentfulAsset(filter: { title: { eq: "Site Logo" } }) {
				edges {
					node {
						file {
							url
						}
					}
				}
			}
		}
	`);

	// bind publicURL data to logo variable
	const logo = data.allContentfulAsset.edges[0].node.file.url;

	// return a <div> with an <img> tag for the logo
	return <img className="flex-shrink-0 h-10 w-10" alt="Logo" src={logo} />;
}
