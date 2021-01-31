import React from "react"

export default function ProjectCard(props) {
  // project card component
  return (
    <div>
      <h5 className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
        {props.year}
      </h5>
      <h4 className="text-lg leading-tight font-medium text-black">
        {props.title}
      </h4>
      <p className="text-gray-500">{props.children}</p>
      {props.gh_link && <a href={props.gh_link}>Github</a>}
      {props.pr_link && <a href={props.pr_link}></a>}
    </div>
  )
}
