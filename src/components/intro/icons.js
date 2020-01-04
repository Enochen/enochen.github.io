import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-top: auto;
  padding-top: 0%;
  padding-bottom: 12vh;
`

const IconWrapper = styled.div`
  margin: auto;
`

const Link = styled.a`
  color: hsla(0, 0%, 0%, 0.7);
`

const Label = styled.div``

const Icon = ({ icon, external = false, link, label }) => {
  const IconType = icon
  const iconSize = 42
  const ext = external
    ? {
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {}
  return (
    <IconWrapper>
      <Link href={link} {...ext}>
        <IconType size={iconSize} />
        <Label>{label}</Label>
      </Link>
    </IconWrapper>
  )
}

export default ({ data }) => {
  const icons = data.map(x => <Icon {...x}></Icon>)
  return <Wrapper>{icons}</Wrapper>
}
