import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { validURL } from "../util/siteLib";

function LinkData() {
	// retrieve link data from site settings
	const data = useStaticQuery(graphql`
		query {
			allSiteSettingsYaml {
				edges {
					node {
						id
						nav_links {
							link_name
							link_url
						}
					}
				}
			}
		}
	`);

	return data;
}

// component that retrieves links from site-wide settings and returns navbar items
export default function NavigationLinks({ mobileActiveClass }) {
	const data = LinkData();

	const className: string =
		"block mt-4 lg:inline-block hover:text-gray-400 lg:mt-0 mr-10";
	const activeClassName: string =
		"block mt-4 lg:inline-block text-indigo-500 lg:mt-0 mr-10";

	// filter the data for navigation links
	let links = data.allSiteSettingsYaml.edges.filter(
		setting => setting.node.nav_links != null
	)[0].node.nav_links;

	// validate each URL and return html
	let navigationLinks = [];
	links.forEach(link => {
		// if the URL is valid push an a tag to the links array
		if (validURL(link.link_url)) {
			navigationLinks.push(
				<a
					href={link.link_url}
					target="_blank"
					rel="noopener noreferrer"
					className={className}
				>
					{link.link_name}
				</a>
			);
		}
		// if the URL is not valid push a link tag to the links array
		else {
			navigationLinks.push(
				<Link
					className={className}
					activeClassName={activeClassName}
					partiallyActive={false}
					to={link.link_url}
				>
					{link.link_name}
				</Link>
			);
		}
	});

	// return link item
	return (
		<div className={"lg:flex text-lg text-gray-600 " + mobileActiveClass}>
			{navigationLinks}
		</div>
	);
}
