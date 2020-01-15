import { graphql, useStaticQuery } from 'gatsby'
import React, { FC } from 'react'
import { ProjectInfo, ProjectList } from '../../data/projectData'
import { ImagesGraph, Fluid } from '../../utils/types'
import { Section } from '../Section'
import * as styled from './Projects.styled'

const ext = {
  target: '_blank',
  rel: 'noopener noreferrer',
}

const findImage = (name: string, imagesGraph: ImagesGraph) => {
  const result = imagesGraph.allFile.edges.find(
    ({ node }) => node.relativePath === name
  )
  if (result) {
    return result.node.childImageSharp.fluid
  }
  return undefined
}

const getFluid = (name: string, imagesGraph: ImagesGraph) => {
  const imageNode = findImage(name, imagesGraph)
  if (imageNode) {
    return imageNode
  }
  return findImage('default.jpg', imagesGraph)
}

interface LinkProps {
  label: string
  url: string
}

const makeTags = (data: string[]) => {
  return data.map(x => <styled.Tag key={x}>{x}</styled.Tag>)
}

const makeLinks = (data: LinkProps[]) => {
  return data.map(x => (
    <styled.BodyLink key={x.label} href={x.url} {...ext}>
      {x.label}
    </styled.BodyLink>
  ))
}

interface ProjectFluid extends ProjectInfo {
  fluid: Fluid
}

export const Project: FC<ProjectFluid> = ({
  name,
  desc,
  tags = [],
  live,
  github,
  fluid,
}) => {
  // Image
  const imageURL = live ? live : github

  // Body
  const tagData = makeTags(tags)
  const links: LinkProps[] = [
    ...(live ? [{ label: 'Project', url: live }] : []),
    ...(github ? [{ label: 'Github', url: github }] : []),
  ]
  const linkData = makeLinks(links)

  return (
    <styled.Wrapper>
      <styled.ImageLink href={imageURL} aria-label={name} {...ext}>
        <styled.Background fluid={fluid}></styled.Background>
      </styled.ImageLink>
      <styled.Body>
        <styled.Name>{name}</styled.Name>
        <styled.TagGroup>{tagData}</styled.TagGroup>
        <styled.Desc dangerouslySetInnerHTML={{ __html: desc }}></styled.Desc>
        <styled.LinkGroup>{linkData}</styled.LinkGroup>
      </styled.Body>
    </styled.Wrapper>
  )
}

export const makeProjects = (data: ProjectInfo[], imagesGraph: ImagesGraph) => {
  return data.map((x, i) => (
    <Project key={i} fluid={getFluid(x.image, imagesGraph)} {...x} />
  ))
}

export const Projects: FC<ProjectList> = ({ data }) => {
  const images: ImagesGraph = useStaticQuery(
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
  const projects = makeProjects(data, images)
  return (
    <Section id="projects" title="Projects">
      {projects}
    </Section>
  )
}
