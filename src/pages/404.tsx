import { graphql } from 'gatsby'
import React from 'react'
import Intro from '../components/intro'
import { SEO } from '../components/seo'

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

export default () => (
  <>
    <SEO title="Portfolio" />
    <Intro name="404" desc="whoops" />
  </>
)
