import { data } from "autoprefixer"
import React from "react"
import ProjectCard from "../components/project-card"

export default function Index() {
  return (
    <body className="bg-indigo-300">
      <ProjectCard
        title="Test"
        year="2021"
        thumbnail="game_profile_picture.jpg"
      >
        This is a test project to showcase the cards. It should only pickup the
        first two sentences before adding a read-more button.
      </ProjectCard>
    </body>
  )
}
