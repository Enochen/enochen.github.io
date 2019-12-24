import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Meme from "../images/meme.jpg"
import Container from "../components/container"
import IconLink from "../components/iconLink.js"

export default () => (
  <Container>
    <Link to="/about/">About</Link>
    <Header headerText="Enoch Chen" />
    <p>cs @ cornell</p>
    <img
      src={Meme}
      alt="Meme"
      style={{ height: "inherit", width: "inherit" }}
    />
    <div style={{ display: "flex", justifyContent: "space-between", textAlign:"center" }}>
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
    </div>
  </Container>
)
