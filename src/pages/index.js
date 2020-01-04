import React from "react"
import BigName from "../components/intro/nameHeader"
import Section from "../components/section"
import IconLink from "../components/intro/iconLink"
import IconGroup from "../components/intro/iconGroup"
import Title from "../components/title"
import Project from "../components/project/project"
import {
  FaGithub,
  FaNewspaper,
  FaLinkedin,
  FaUser,
  FaFlask,
  FaGraduationCap,
} from "react-icons/fa"
import { createGlobalStyle } from "styled-components"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const GlobalStyle = createGlobalStyle`
  html {
    background-color: #f3f3f3;
  }
`

const Heading = () => (
  <Section>
    <BigName name="Enoch Chen" desc="cs @ cornell" />
    <IconGroup>
      <IconLink label="About" icon={FaUser} link="#about" />
      <IconLink label="Projects" icon={FaFlask} link="#projects" />
      <IconLink
        label="Github"
        icon={FaGithub}
        link="http://github.com/Enochen"
        external={true}
      />
      <IconLink
        label="LinkedIn"
        icon={FaLinkedin}
        link="https://www.linkedin.com/in/enochen728/"
        external={true}
      />
      <IconLink
        label="Resume"
        icon={FaNewspaper}
        link="/Enoch Chen cv.pdf"
        external={true}
      />
      <IconLink
        label="Transcript"
        icon={FaGraduationCap}
        link="/2019-12-31-Transcript.pdf"
        external={true}
      />
    </IconGroup>
  </Section>
)

const Projects = ({ projData }) => {
  const projects = projData.map(project => <Project {...project} />)
  return (
    <Section id="projects" wide={true}>
      <Title text="Projects"></Title>
      {projects}
    </Section>
  )
}

export default ({ data }) => {
  const projData = [
    {
      name: "Ask Palette",
      desc: "Ever wonder what \"Power\" looks like? What about ",
      tags: ["React", "Gatsby"],
      live: "http://askpalette.appspot.com/",
      github: "https://github.com/Enochen/askpalette",
      image:
        "https://maximpekarsky.com/assets/images/project_images/hackterms.gif",
      url: "https://google.com",
    },
    {
      name: "Henlo2",
      desc: "whatup",
      tags: ["React", "Gatsby"],
      live: "https://google.com",
      github: "https://google.com",
      image:
        "https://maximpekarsky.com/assets/images/project_images/hackterms.gif",
      url: "https://google.com",
    },
    {
      name: "Henlo3",
      desc: "whatup",
      tags: ["React", "Gatsby"],
      live: "https://google.com",
      github: "https://google.com",
      image:
        "https://maximpekarsky.com/assets/images/project_images/hackterms.gif",
      url: "https://google.com",
    },
  ]
  return (
    <>
      <Helmet defer={false}>
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
      </Helmet>
      <GlobalStyle />
      <Heading />
      <Projects projData={projData} />
    </>
  )
}
