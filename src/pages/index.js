import React from "react"
import Header from "../components/nameHeader"
import Meme from "../images/meme.jpg"
import Section from "../components/section"
import IconLink from "../components/iconLink.js"
import IconGroup from "../components/iconGroup"

export default () => (
  <Section>
    <Header heading="Enoch Chen" subHeading="CS @ Cornell" />
    <IconGroup>
      <IconLink
        text="Projects"
        icon="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
        link="#"
      />
      <IconLink
        text="Github"
        icon="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
        link="http://github.com/Enochen"
      />
      <IconLink
        text="LinkedIn"
        icon="https://randomuser.me/api/portraits/men/97.jpg"
        link="https://www.linkedin.com/in/enochen728/"
      />
      <IconLink
        text="Resume"
        icon="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
        link="/Enoch Chen cv.pdf"
      />
    </IconGroup>
  </Section>
)
