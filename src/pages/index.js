import React, { useEffect } from "react"
import SEO from "../components/seo"
import Intro from "../components/intro"
import Projects from "../components/projects"
import { graphql } from "gatsby"
import { removeHash } from "react-scrollable-anchor"

import introData from "../data/introData"
import projectData from "../data/projectData"

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

const handleScroll = () => {
  window.scrollY <= window.innerHeight * 0.25 && removeHash()
}

export default () => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  return (
    <>
      <SEO />
      <Intro {...introData} />
      <Projects projData={projectData} />
    </>
  )
}
