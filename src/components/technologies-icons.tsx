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
	<FaPython title="Python" />,
	<SiHoudini title="Houdini" />,
	<SiNuke title="Nuke" />,
	<FaReact title="React" />,
	<GrGatsbyjs title="Gatsby" />,
	<SiTailwindcss title="Tailwind" />,
	<FaDocker title="Docker" />,
	<SiCplusplus title="C++" />,
	<SiAutodesk title={`Shotgun ${htmlEntities.decode("\u0026")} Autodesk`} />,
];

export { Icons };
