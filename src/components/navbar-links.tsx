import React from "react";
import { Link } from "gatsby";
import { validURL } from "../util/siteLib";

interface ILink {
	link_url: string;
	link_name: string;
}

const links: ILink[] = [
	{ link_url: "/", link_name: "Home" },
	{ link_url: "/test-article", link_name: "Test Article" },
];

// component that retrieves links from site-wide settings and returns navbar items
export default function NavigationLinks() {
	// styling
	const className: string =
		"block mt-4 lg:inline-block hover:text-gray-400 lg:mt-0 mr-10 outline-none";
	const activeClassName: string =
		"block mt-4 lg:inline-block text-indigo-500 lg:mt-0 mr-10";

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
		<div className={"hidden lg:flex text-lg text-gray-600"}>
			{navigationLinks}
		</div>
	);
}

// component that retrieves links from site-wide settings and returns navbar items
export function NavigationLinksMobile() {
	// styling
	const className: string =
		"block mt-4 lg:inline-block hover:text-gray-400 lg:mt-0 mr-10 outline-none";
	const activeClassName: string =
		"block mt-4 lg:inline-block text-indigo-500 lg:mt-0 mr-10";

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
		<div className={"lg:flex text-lg text-gray-600"}>{navigationLinks}</div>
	);
}
