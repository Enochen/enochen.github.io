import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `purple` }}>
    <Link to="/about/">About</Link>
    <Header headerText="This is a Header." />
    <p>^-- THAT"S A HEADER!!1!</p>
    <Header headerText="This is another Header - (should probably be a footer)" />
  </div>
)
