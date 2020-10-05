import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
import Section from "./Section"
import Container from "./Container"
import { ProjectsWrapper } from "../elements/ProjectElements"

const Projects = ({ projects, title, showLink }) => {
  return (
    <Section>
      <Title title={title} />
      <Container>
        <ProjectsWrapper>
          {projects.map((project, index) => {
            return <Project key={project.id} index={index} {...project} />
          })}
        </ProjectsWrapper>
        {showLink ? <Link to="/projects">Projects</Link> : ""}
      </Container>
    </Section>
  )
}

export default Projects
