import React from "react"
import Header from "../components/nameHeader"
import Section from "../components/section"
import IconLink from "../components/iconLink.js"
import IconGroup from "../components/iconGroup"
import {
  FaGithub,
  FaNewspaper,
  FaLinkedin,
  FaUser,
  FaFlask,
} from "react-icons/fa"

const Heading = () => (
  <Section>
    <Header heading="Enoch Chen" subHeading="cs @ cornell" />
    <IconGroup>
      <IconLink text="About" icon={FaUser} link="#about" />
      <IconLink text="Projects" icon={FaFlask} link="#projects" />
      <IconLink
        text="Github"
        icon={FaGithub}
        link="http://github.com/Enochen"
        external={true}
      />
      <IconLink
        text="LinkedIn"
        icon={FaLinkedin}
        link="https://www.linkedin.com/in/enochen728/"
        external={true}
      />
      <IconLink
        text="Resume"
        icon={FaNewspaper}
        link="/Enoch Chen cv.pdf"
        external={true}
      />
    </IconGroup>
  </Section>
)

const Projects = () => <div id="projects"></div>

export default () => (
  <>
    <Heading />
    <Projects />
  </>
)
