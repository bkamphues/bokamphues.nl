import React from "react";
import ImageFluid from "./image-fluid";

interface ProjectCardProps {
	title: string;
	year: number;
	children: string;
	thumbnail: string;
	tags: Array<string>;
	gh_link?: string;
	pr_link?: string;
}

export default function ProjectCard(props: ProjectCardProps) {
	// project card component

	// return component
	return (
		<div className="p-4 w-full sm:w-1/4 overflow-hidden">
			<div className="mx-auto group transform hover:scale-105 transition ease-in-out duration-300 bg-white rounded-xl shadow-md max-w-xs overflow-hidden">
				<ImageFluid className="w-full" image={props.thumbnail} />
				<div className="px-6 py-4">
					<h5 className="font-sans proportional-nums text-primary-light text-xl font-light">
						<span className="transition duration-500 ease-in-out bg-clip-text group-hover:text-transparent bg-gradient-to-r from-primary via-secondary to-rose">
							{props.year}
						</span>
					</h5>
					<h4 className="font-sans text-2xl mb-2 font-bold text-primary">
						{props.title}
					</h4>
					<div
						className="text-sm font-light"
						dangerouslySetInnerHTML={{ __html: props.children }}
					></div>
					{props.gh_link && <a href={props.gh_link}>Github</a>}
					{props.pr_link && <a href={props.pr_link}></a>}
					<div className="space-x-1">
						{props.tags.map(tag => (
							<div className="inline-block py-4">
								<div className="rounded-lg shadow-inner p-1.5 bg-primary">
									<div className="text-xs font-light text-gray-100">{tag}</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
