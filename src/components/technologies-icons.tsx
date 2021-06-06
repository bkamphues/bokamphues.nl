import React from "react";
import { Html5Entities } from "html-entities";
import { FaReact, FaPython, FaDocker } from "react-icons/fa";
import { GrGatsbyjs } from "react-icons/gr";
import {
	SiTailwindcss,
	SiHoudini,
	SiNuke,
	SiCplusplus,
	SiAutodesk,
} from "react-icons/si";

const htmlEntities = new Html5Entities();

let Icons = [
	<a href="https://www.python.org">
		<FaPython title="Python" />
	</a>,
	<a href="https://sidefx.com">
		<SiHoudini title="Houdini" />
	</a>,
	<a href="https://www.foundry.com/products/nuke">
		<SiNuke title="Nuke" />
	</a>,
	<a href="https://reactjs.org/">
		<FaReact title="React" />
	</a>,
	<a href="https://gatsbyjs.com">
		<GrGatsbyjs title="Gatsby" />
	</a>,
	<a href="https://tailwindcss.com">
		<SiTailwindcss title="Tailwind" />
	</a>,
	<a href="https://docker.com">
		<FaDocker title="Docker" />
	</a>,
	<a href="https://isocpp.org/">
		<SiCplusplus title="C++" />
	</a>,
	<a href="https://autodesk.com/maya">
		<SiAutodesk title={`Shotgun ${htmlEntities.decode("\u0026")} Autodesk`} />
	</a>,
];

export { Icons };
