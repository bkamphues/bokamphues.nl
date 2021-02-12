import React from "react"

function checkPropType(prop, type) {
  if (prop == null) {
    throw new Error(`No data was given for ${type}`)
  }
}

export default function ProjectCard(props) {
  // project card component

  // check data
  checkPropType(props.year, "year")
  checkPropType(props.title, "title")
  checkPropType(props.children, "children")

  // return component
  return (
    <div className="p-2">
      <div className="bg-white rounded shadow-lg max-w-sm max-h-md">
        <div className="px-6 py-4">
          <h5 className="font-sans proportional-nums text-xl font-light text-blue-400">
            {props.year}
          </h5>
          <h4 className="font-sans text-2xl mb-2 font-bold text-blue-600">
            {props.title}
          </h4>
          <p className="text-sm font-light">{props.children}</p>
          {props.gh_link && <a href={props.gh_link}>Github</a>}
          {props.pr_link && <a href={props.pr_link}></a>}
        </div>
      </div>
    </div>
  )
}
