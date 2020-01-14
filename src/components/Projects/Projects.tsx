import { graphql, useStaticQuery } from 'gatsby'
import React, { FC } from 'react'
import { IProject } from '../../data/data-project'
import { Section } from '../Section'
import * as styled from './projects.styled'

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

const makeTags = (data: string[]) => {
  return data.map(x => <styled.Tag key={x}>{x}</styled.Tag>)
}

const makeLinks = (data: ILink[]) => {
  return data.map(x => (
    <styled.BodyLink key={x.label} href={x.url} {...ext}>
      {x.label}
    </styled.BodyLink>
  ))
}

export const Project: FC<IProject> = ({
  name,
  desc,
  tags = [],
  live,
  github,
  image,
}) => {
  // Image
  const imageFluid = getFluid(image)
  const imageURL = live ? live : github

  // Body
  const tagData = makeTags(tags)
  const links: ILink[] = [
    ...(live ? [{ label: 'Project', url: live }] : []),
    ...(github ? [{ label: 'Github', url: github }] : []),
  ]
  const linkData = makeLinks(links)

  return (
    <styled.Wrapper>
      <styled.ImageLink href={imageURL} aria-label={name} {...ext}>
        <styled.Background fluid={imageFluid}></styled.Background>
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

export const Projects: FC<IProject[]> = ({ projData = [] }) => {
  const projects = projData.map((x, i) => <Project key={i} {...x} />)
  return (
    <Section id="projects" title="Projects">
      {projects}
    </Section>
  )
}
