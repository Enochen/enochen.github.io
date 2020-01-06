import React from "react"
import Section from "./section"
import Project from "./project/project"
import Title from "./title"

export default ({ projData = [] }) => {
  const projects = projData.map(project => <Project {...project} />)
  return (
    <Section id="projects">
      <Title text="Projects"></Title>
      {projects}
    </Section>
  )
}