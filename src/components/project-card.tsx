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
      <div className="bg-white rounded shadow-lg max-w-sm">
        <h5 className="font-sans text-xl px-2 pt-2 font-light">{props.year}</h5>
        <h4 className="font-sans text-lg px-2 font-bold">{props.title}</h4>
        <p className="px-2 pb-2 text-sm">{props.children}</p>
        {props.gh_link && <a href={props.gh_link}>Github</a>}
        {props.pr_link && <a href={props.pr_link}></a>}
      </div>
    </div>
  )
}
