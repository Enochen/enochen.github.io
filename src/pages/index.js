import React from "react"
import Header from "../components/nameHeader"
import Section from "../components/section"
import IconLink from "../components/iconLink.js"
import IconGroup from "../components/iconGroup"
import { IconContext } from "react-icons";
import { FaGithub, FaNewspaper, FaLinkedin, FaEnvelope, FaHammer } from 'react-icons/fa';

export default () => (
  <Section>
    <Header heading="Enoch Chen" subHeading="CS @ Cornell" />
    <IconGroup>
      <IconLink
        text="Projects"
        icon={FaHammer}
        link="#"
      />
      <IconLink
        text="Github"
        icon={FaGithub}
        link="http://github.com/Enochen"
      />
      <IconLink
        text="LinkedIn"
        icon={FaLinkedin}
        link="https://www.linkedin.com/in/enochen728/"
      />
      <IconLink
        text="Resume"
        icon={FaNewspaper}
        link="/Enoch Chen cv.pdf"
      />
    </IconGroup>
  </Section>
)
