import { graphql } from "gatsby";
import React from "react";
import Typewriter from "typewriter-effect";

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
			<h1 className="mx-auto mb-4 max-w-md text-4xl sm:text-6xl text-indigo-500 text-center">
				{heading}
			</h1>
			<h2 className="mx-auto max-w-md text-3xl sm:text-5xl text-gray-600 text-center h-20 md:h-24">
				{typewriter}
			</h2>
		</div>
	);
}

const query = graphql`query`;
