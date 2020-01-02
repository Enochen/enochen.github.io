import React from "react"
import styled from "styled-components"

const ext = {
  target: "_blank",
  rel: "noopener noreferrer",
}

const Wrapper = styled.div`
  flex-wrap: wrap;
  display: flex;
`

const Link = styled.a`
  color: #2b9cce;
  text-decoration: none;
  padding: 5px 12px;
  border: 1px solid #2b9cce;
  border-radius: 5px;
  margin-right: 0.5rem;
`

export default ({ data }) => {
  const links = data.map(x => (
    <Link key={x.label} href={x.url} {...ext}>
      {x.label}
    </Link>
  ))
  return <Wrapper>{links}</Wrapper>
}
