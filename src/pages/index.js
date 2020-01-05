import React from "react"
import BigName from "../components/intro/header"
import Section from "../components/section"
import IconGroup from "../components/intro/icons"
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

const Intro = ({ name, desc, iconData }) => (
  <Section>
    <BigName name={name} desc={desc} />
    <IconGroup data={iconData}></IconGroup>
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
  const introData = {
    name: "Enoch Chen",
    desc: "cs @ cornell",
    iconData: [
      {
        label: "About",
        icon: FaUser,
        link: "#about",
        external: false,
      },
      {
        label: "Projects",
        icon: FaFlask,
        link: "#projects",
        external: false,
      },
      {
        label: "Github",
        icon: FaGithub,
        link: "http://github.com/Enochen",
        external: true,
      },
      {
        label: "LinkedIn",
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/enochen728/",
        external: true,
      },
      {
        label: "Resume",
        icon: FaNewspaper,
        link: "/Enoch Chen cv.pdf",
        external: true,
      },
      {
        label: "Transcript",
        icon: FaGraduationCap,
        link: "/2020-01-04-Transcript.pdf",
        external: true,
      },
    ],
  }

  const allProjects = [
    {
      name: "Ask Palette",
      desc: "Generate color palettes from your search terms! Uses Google Cloud Vision to extract colors from search terms. Developed as a hackathon project at BigRed//Hacks.",
      tags: ["HTML/CSS", "Python", "Flask", "Google Cloud"],
      live: "https://askpalette.appspot.com/",
      github: "https://github.com/Enochen/askpalette",
      image: "https://i.imgur.com/ZZEJQvS.gif",
    },
    {
      name: "Half Bot Half Brain",
      desc:
        "It's like Mad Libs, but better. The backend generates grammatically correct text from input with the help of spaCy. Developed as a hackathon project at TeenhacksLI.",
      tags: ["HTML/CSS", "JavaScript", "Python", "spaCy"],
      live: "https://halfbothalfbrain.netlify.com/",
      github: "https://github.com/ageor0114/nyit-hackathon",
      image: "https://i.imgur.com/YAwqSVj.png",
    },
    {
      name: "Henlo3",
      desc: "whatup",
      tags: ["React", "Gatsby"],
      live: "https://google.com",
      github: "https://google.com",
      image: "https://im7.ezgif.com/tmp/ezgif-7-0ccfeec93820.gif",
    },
  ]
  return (
    <>
      <Helmet defer={false}>
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
      </Helmet>
      <GlobalStyle />
      <Intro {...introData} />
      <Projects projData={allProjects} />
    </>
  )
}
