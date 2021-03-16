import React from "react";
import Typewriter from "typewriter-effect";
import { StaticImage } from "gatsby-plugin-image";

export default function Hero({
	heading,
	subheading,
}: {
	heading: JSX.Element;
	subheading: string[];
}): JSX.Element {
	// create a typewriter effect from props
	let typewriter = (
		<Typewriter
			onInit={typewriter => typewriter.start()}
			options={{ strings: subheading, autoStart: true, loop: true }}
		/>
	);

	// return component
	return (
		<div className="w-full p-5">
			<StaticImage
				src="../../static/assets/profile_picture.jpg"
				alt="Profile Picture"
				placeholder="blurred"
				layout="fixed"
				width={250}
				aspectRatio={1 / 1}
				className="mx-auto rounded-full mb-4 border-8 shadow-xl overflow-hidden z-0"
			/>
			<h1 className="mx-auto mb-4 max-w-lg text-4xl sm:text-6xl text-indigo-500 text-center">
				{heading}
			</h1>
			<h2 className="mx-auto max-w-md text-3xl sm:text-5xl text-gray-600 text-center h-20 md:h-28">
				{typewriter}
			</h2>
		</div>
	);
}
