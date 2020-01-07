import React from "react"
import SEO from "../components/seo"
import Intro from "../components/intro"
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

export default ({ data }) => (
  <>
    <SEO title="Portfolio" />
    <GlobalStyle />
    <Intro name="404" desc="whoops" />
  </>
)
