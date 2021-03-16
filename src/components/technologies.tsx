import React from "react";
import { Icons as TechnologyIcons } from "./technologies-icons";
import { IconContext } from "react-icons/lib";

// react component to display all input technologies as a grayscale grid
export default function Technologies(): JSX.Element {
	return (
		<div className="pt-16 pb-5 container mx-auto">
			<h1 className="mb-10 text-3xl text-center font-extrabold text-indigo-400">
				Technologies
			</h1>
			<div className="max-w-xl mx-auto">
				<div className="grid grid-cols-3 gap-y-10 justify-items-center">
					<IconContext.Provider value={{ color: "gray", size: "4em" }}>
						{TechnologyIcons}
					</IconContext.Provider>
				</div>
			</div>
		</div>
	);
}
