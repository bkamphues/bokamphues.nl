import React from "react"
import ImageFluid from "./image-fluid"

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
  checkPropType(props.thumbnail, "thumbnail")

  // return component
  return (
    <div className="p-2">
      <div className="bg-white rounded shadow-lg max-w-xs overflow-hidden">
        <ImageFluid className="w-full" image={props.thumbnail} />
        <div className="px-6 py-4">
          <h5 className="text-primary-light font-sans proportional-nums text-xl font-light text-blue-400">
            {props.year}
          </h5>
          <h4 className="text-primary font-sans text-2xl mb-2 font-bold text-blue-600">
            {props.title}
          </h4>
          <div
            className="text-sm font-light"
            dangerouslySetInnerHTML={{ __html: props.children }}
          ></div>
          {props.gh_link && <a href={props.gh_link}>Github</a>}
          {props.pr_link && <a href={props.pr_link}></a>}
        </div>
      </div>
    </div>
  )
}
