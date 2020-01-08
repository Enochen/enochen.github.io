import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { scale, rhythm, TABLET_MEDIA_QUERY } from "../utils/typography"

const ext = {
  target: "_blank",
  rel: "noopener noreferrer",
}

const BodyWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  padding: 1.3rem;
`

const Subsection = styled.div`
  margin: 0.5rem 0;
`

const Name = styled(Subsection)`
  ${scale(1)};
  margin-bottom: 0.5rem;
`

const TagWrapper = styled(Subsection)`
  flex-wrap: wrap;
  display: flex;
  margin-bottom: 0;
`

const Tag = styled.div`
  ${scale(-0.3)};
  padding: 3px 10px;
  margin: 0 0.5rem 0.5rem 0;
  font-weight: 600;
  text-align: center;
  background: #e6e6e6;
  border-radius: 5px;
  transition: color 1s, background 1s;
`

const Description = styled(Subsection)``

const LinkWrapper = styled(Subsection)`
  flex-wrap: wrap;
  display: flex;
`

const Link = styled.a`
  color: #6460b8;
  text-decoration: none;
  padding: 5px 12px;
  border: 1px solid #6460b8;
  border-radius: 5px;
  margin-right: 1rem;

  &:hover {
    color: white;
    background: #6460b8;
  }
`

const ImageLink = styled.a`
  width: 50%;
  display: block;
  overflow: auto;
`

const Background = styled(BackgroundImage)`
  background-position: top;
  height: 100%;
`

const Body = ({ name, desc, tags = [], github, live }) => {
  const tagData = tags.map(x => <Tag key={x}>{x}</Tag>)
  const linkData = [
    ...(live ? [{ label: "Project", url: live }] : []),
    ...(github ? [{ label: "Github", url: github }] : []),
  ]
  const links = linkData.map(x => (
    <Link key={x.label} href={x.url} {...ext}>
      {x.label}
    </Link>
  ))
  return (
    <BodyWrapper>
      <Name>{name}</Name>
      <TagWrapper>{tagData}</TagWrapper>
      <Description dangerouslySetInnerHTML={{ __html: desc }}></Description>
      <LinkWrapper>{links}</LinkWrapper>
    </BodyWrapper>
  )
}

const Image = ({ name, image, live, github }) => {
  const data = useStaticQuery(
    graphql`
      query {
        img: allFile {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `
  )
  const imageData = data.img.edges.find(
    ({ node }) => node.relativePath === image
  ).node.childImageSharp.fluid
  const url = live ? live : github
  return (
    <ImageLink href={url} aria-label={name} {...ext}>
      <Background fluid={imageData}></Background>
    </ImageLink>
  )
}

const Wrapper = styled.div`
  display: flex;
  min-width: 300px;
  margin: 1rem;
  background: white;
  box-shadow: 0 ${rhythm(0.2)} ${rhythm(0.4)} #a2a2a2;
  flex-direction: row-reverse;
  
  ${TABLET_MEDIA_QUERY} {
    flex-direction: column;
    ${BodyWrapper} {
      width: 100%;
      box-sizing: border-box;
    }
    ${ImageLink} {
      width: 100%;
      height: 30vh;
    }
  }
`

export default data => (
  <Wrapper>
    <Image {...data} />
    <Body {...data}></Body>
  </Wrapper>
)
