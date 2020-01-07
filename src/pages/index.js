import React from "react"
import SEO from "../components/seo"
import Intro from "../components/intro"
import Projects from "../components/projects"
import {
  FaGithub,
  FaNewspaper,
  FaLinkedin,
  FaUser,
  FaFlask,
  FaGraduationCap,
  FaRegUser,
} from "react-icons/fa"
import { createGlobalStyle } from "styled-components"
import { graphql } from "gatsby"

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

export default () => {
  const introData = {
    name: "Enoch Chen",
    desc: "cs @ cornell",
    aboutData: [
      "I am currently an undergrad at Cornell University studying Computer Science. I am passionate about designing effective and reliable systems. My goal is to make things that others can enjoy well.",
      "In my free time, I like tinkering with keyboards.",
      "Check out some of my stuff <a href = '#projects'>here</a>.",
    ],
    iconData: [
      {
        label: "About",
        icon: FaUser,
        icon2: FaRegUser,
        special: true,
      },
      {
        label: "Projects",
        icon: FaFlask,
        link: "#projects",
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
        label: "Transcript",
        icon: FaGraduationCap,
        link: "/misc/2020-01-04-Transcript.pdf",
        external: true,
      },
      {
        label: "Resume",
        icon: FaNewspaper,
        link: "/misc/Enoch Chen resume.pdf",
        external: true,
      },
    ],
  }

  const allProjects = [
    {
      name: "cue",
      desc:
        "I joined <a href='https://cornelldti.org' target='_blank' rel='noopener'>Cornell Design & Tech Initiative</a> in Fall 2019 as a Full Stack Developer. My team is responsible for cue, an event-discovery app for Cornell students at Ithaca. I developed a set of scripts to facilitate populating our event database with external data.",
      tags: ["HTML/CSS", "Javascript", "Python", "ReactJS", "Django"],
      live: "https://www.cornelldti.org/Projects/events",
      github: "https://github.com/cornell-dti/events-backend/",
      image:
        "/projects/cue.jpg",
    },
    {
      name: "Ask Palette",
      desc:
        "Generate color palettes from your search terms! Uses Google Cloud Vision to extract colors from search terms. Developed as a hackathon project at <a href='https://bigredhacks.com' target='_blank' rel='noopener'>BigRed//Hacks</a>.",
      tags: ["HTML/CSS", "Python", "Flask", "Google Cloud"],
      live: "https://askpalette.appspot.com/",
      github: "https://github.com/Enochen/askpalette",
      image: "/projects/askpalette.gif",
    },
    {
      name: "Half Bot Half Brain",
      desc:
        "It's like Mad Libs, but better. The backend generates grammatically correct text from input with the help of spaCy. Developed as a hackathon project at <a href='https://teenhacksli.com/' target='_blank' rel='noopener'>TeenhacksLI</a>.",
      tags: ["HTML/CSS", "JavaScript", "Python", "spaCy"],
      live: "https://halfbothalfbrain.netlify.com/",
      github: "https://github.com/ageor0114/nyit-hackathon",
      image: "/projects/hbhb.png",
    },
  ]
  return (
    <>
      <SEO />
      <GlobalStyle />
      <Intro {...introData} />
      <Projects projData={allProjects} />
    </>
  )
}
