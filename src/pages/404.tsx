import { graphql } from 'gatsby'
import React from 'react'
import { ErrorPage } from '../components/misc/ErrorPage'
import { SEO } from '../components/misc/SEO'

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
    <SEO />
    <ErrorPage name="404" desc="whoops" />
  </>
)
