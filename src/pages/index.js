import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Meme from "../images/meme.jpg"
import Container from "../components/container"
import IconLink from "../components/iconLink.js"

export default () => (
  <Container>
    <Link to="/about/">About</Link>
    <Header headerText="This is a Header." />
    <p>^-- THAT"S A HEADER!!1!</p>
    <img
      src={Meme}
      alt="Meme"
      style={{ height: "inherit", width: "inherit" }}
    />
    <h1>Users</h1>
    <div style={{ display: "flex", justifyContent: "space-between", textAlign:"center" }}>
      <IconLink
        text="Google"
        icon="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
        link="http://google.com"
      />
      <IconLink
        text="Github"
        icon="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
        link="http://github.com"
      />
      <IconLink
        text="LinkedIn"
        icon="https://randomuser.me/api/portraits/men/97.jpg"
        link="http://github.com/Enochen"
      />
      <IconLink
        text="Resume"
        icon="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
        link="http://bing.com"
      />
    </div>
    <Header headerText="This is another Header - (should probably be a footer)" />
  </Container>
)
