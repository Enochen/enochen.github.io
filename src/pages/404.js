import React from "react"
import BigName from "../components/intro/nameHeader"
import Section from "../components/section"
import IconLink from "../components/intro/iconLink"
import IconGroup from "../components/intro/iconGroup"
import Title from "../components/title"
import Project from "../components/project/project"
import {
  FaGithub,
  FaNewspaper,
  FaLinkedin,
  FaUser,
  FaFlask,
} from "react-icons/fa"
import { createGlobalStyle } from "styled-components"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

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
    <Helmet defaultTitle="Enoch Chen - 404" defer={false}>
      <title>{data.site.siteMetadata.title} - 404</title>
      <meta name="description" content={data.site.siteMetadata.description} />
    </Helmet>
    <GlobalStyle />
    <Section>
      <BigName name="404" desc="whoops" />
    </Section>
  </>
)
