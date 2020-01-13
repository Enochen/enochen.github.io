import { graphql, useStaticQuery } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { IProject } from '../data/data-project'
import {
  Background,
  BodyDesc,
  BodyLink,
  BodyLinkGroup,
  BodyName,
  BodyTag,
  BodyTagGroup,
  ImageLink,
  ProjectBody,
  ProjectWrapper,
} from './projects.styled'
import { Section } from './section'
import Title from './title'

const ext = {
  target: '_blank',
  rel: 'noopener noreferrer',
}

const findImage = (name: string, images) => {
  const result = images.allFile.edges.find(
    ({ node }) => node.relativePath === name
  )
  if (result) {
    return result.node.childImageSharp.fluid
  }
  return undefined
}

const getFluid = (name: string) => {
  const imageData = useStaticQuery(
    graphql`
      query {
        allFile {
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
  const imageNode = findImage(name, imageData)
  if (imageNode) {
    return imageNode
  }
  return findImage('default.jpg', imageData)
}

interface ILink {
  label: string
  url: string
}

export const Project: FunctionComponent<IProject> = ({
  name,
  desc,
  tags = [],
  live,
  github,
  image,
}) => {
  // Image
  const fluid = getFluid(image)
  const url = live ? live : github

  // Body
  const tagData = tags.map(x => <BodyTag key={x}>{x}</BodyTag>)
  const linkData: ILink[] = [
    ...(live ? [{ label: 'Project', url: live }] : []),
    ...(github ? [{ label: 'Github', url: github }] : []),
  ]
  const links = linkData.map(x => (
    <BodyLink key={x.label} href={x.url} {...ext}>
      {x.label}
    </BodyLink>
  ))

  return (
    <ProjectWrapper>
      <ImageLink href={url} aria-label={name} {...ext}>
        <Background fluid={fluid}></Background>
      </ImageLink>
      <ProjectBody>
        <BodyName>{name}</BodyName>
        <BodyTagGroup>{tagData}</BodyTagGroup>
        <BodyDesc dangerouslySetInnerHTML={{ __html: desc }}></BodyDesc>
        <BodyLinkGroup>{links}</BodyLinkGroup>
      </ProjectBody>
    </ProjectWrapper>
  )
}

export default ({ projData = [] }) => {
  const projects = projData.map((x, i) => <Project key={i} {...x} />)
  return (
    <Section id="projects">
      <Title text="Projects"></Title>
      {projects}
    </Section>
  )
}
