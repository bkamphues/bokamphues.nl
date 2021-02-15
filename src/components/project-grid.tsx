import React from "react";
import ProjectCard from "./project-card";
import path from "path";

interface ProjectGridProps {
  projects: object;
}

interface ProjectGridState {
  projects: object;
}

export default class ProjectGrid extends React.Component<
  ProjectGridProps,
  ProjectGridState
> {
  // react component to create a grid of all projects

  constructor(props) {
    super(props);
    this.state = { projects: props.projects };
  }

  render() {
    return <pre>{JSON.stringify(this.state.projects, null, 4)}</pre>;
  }
}
