import React from "react";
import { truncate } from "../util/siteLib";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { Link } from "gatsby";

interface BlogCardProps {
	title: string;
	date: Date;
	children: string;
	image: IGatsbyImageData;
	imageAlt: string;
	link: string;
}

// react component to render an article card
export default function BlogCard(props: BlogCardProps) {
	// get the hours and minutes from the date property to format correctly
	const hours = props.date.getUTCHours();
	const minutes = props.date.getUTCMinutes();

	// truncate the input children string for accurate display in the card.
	const description = truncate(props.children, 180);
	const title = truncate(props.title, 80);

	// component render
	return (
		<Link to={props.link}>
			<div className="overflow-hidden transition duration-75 ease-in-out transform hover:scale-105 shadow-lg max-w-xs h-full rounded-xl bg-gray-100 mx-auto md:mx-0">
				<GatsbyImage image={props.image} alt={props.imageAlt} />
				<div className="p-5">
					<h1 className="text-indigo-400 font-semibold text-xl">{title}</h1>
					<h2 className="text-indigo-600 font-light text-sm mb-2">
						{`${props.date.toDateString()}  ${hours.toString()}:${minutes.toString()}`}
					</h2>
					<p className="text-gray-500">{description}</p>
				</div>
			</div>
		</Link>
	);
}
