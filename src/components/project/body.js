import React from "react"
import styled from "styled-components"

const ext = {
  target: "_blank",
  rel: "noopener noreferrer",
}

const Wrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1.3rem;
`

const Subsection = styled.div`
  margin: 0.5rem 0px;
`

const Name = styled(Subsection)`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`

const TagWrapper = styled(Subsection)`
  flex-wrap: wrap;
  display: flex;
`

const Tag = styled.div`
  padding: 3px 10px;
  margin: 0 0.5rem 0.5rem 0;
  font-size: 0.8rem;
  font-weight: 600;
  text-align: center;
  background: #e6e6e6;
  border-radius: 5px;
  transition: color 1s, background 1s;
`

const Description = styled(Subsection)`
  line-height: 1.4;
`

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
  margin-right: 0.5rem;

  &:hover {
    color: white;
    background: #6460b8;
  }
`

export default ({ name, desc, tags = [], github, live }) => {
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
    <Wrapper>
      <Name>{name}</Name>
      <TagWrapper>{tagData}</TagWrapper>
      <Description dangerouslySetInnerHTML={{ __html: desc }}></Description>
      <LinkWrapper>{links}</LinkWrapper>
    </Wrapper>
  )
}
