import React from "react"
import ProjectCard from "../components/project-card"

export default function Index() {
  return (
    <body className="bg-indigo-100">
      <ProjectCard title="Test" year="2021">
        This is a test project to showcase the cards.
      </ProjectCard>
    </body>
  )
}
