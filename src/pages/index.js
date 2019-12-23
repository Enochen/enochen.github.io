import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Meme from "../images/meme.jpg"
import Container from "../components/container"

export default () => (
  <Container>
    <Link to="/about/">About</Link>
    <Header headerText="This is a Header." />
    <p>^-- THAT"S A HEADER!!1!</p>
    <img src={Meme} alt="Meme" style={{height:"inherit",width:"inherit"}}/>
    <Header headerText="This is another Header - (should probably be a footer)" />
  </Container>
)
