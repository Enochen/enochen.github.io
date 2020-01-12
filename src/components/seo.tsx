import React, { FunctionComponent } from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

type MetaTag =
  | { name: string; content: any }
  | { property: string; content: any }

interface Props {
  title?: string
  description?: string
  lang?: string
  meta?: MetaTag[]
}

export const SEO: FunctionComponent<Props> = ({
  title = ``,
  description = ``,
  lang = `en`,
  meta = [],
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )
  const metaTitle = title || site.siteMetadata.title
  const titleTemplate = title ? `%s | ${site.siteMetadata.title}` : metaTitle
  const metaDescription = description || site.siteMetadata.description
  return (
    <Helmet
      defer={false}
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={titleTemplate}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}
