import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
`

const Link = styled.a`
  color: hsla(0, 0%, 0%, 0.7);
`

const Label = styled.div``

export default ({ icon, external, link, label }) => {
  const Icon = icon
  const iconSize = 42
  const ext = external
    ? {
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {}
  return (
    <Wrapper>
      <Link href={link} {...ext}>
        <Icon size={iconSize} />
        <Label>{label}</Label>
      </Link>
    </Wrapper>
  )
}
