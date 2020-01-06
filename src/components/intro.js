import React, { useState } from "react"
import styled from "styled-components"
import Section from "./section"

const HeaderWrapper = styled.div`
  text-align: center;
  padding-top: 25vh;
  display: flex;
  flex-direction: column;
`

const Name = styled.h1`
  font-weight: normal;
  font-size: 5rem;
`

const Description = styled.h2`
  font-weight: 400;
  font-size: 2rem;
`

const GroupWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-top: auto;
  padding-top: 0%;
  padding-bottom: 12vh;
`

const IconWrapper = styled.div`
  margin: auto;
  &:hover {
    color: #6460b8;
    cursor: pointer;
  }
`

const Link = styled.a`
  color: hsla(0, 0%, 0%, 0.7);
`

const Label = styled.div``

const Icon = ({ icon, link, label, external = false }) => {
  const IconType = icon
  const iconSize = 42
  const ext = external
    ? {
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {}
  const OptionalLink = link ? Link : React.Fragment
  return (
    <IconWrapper>
      <OptionalLink href={link} {...ext}>
        <IconType size={iconSize} />
        <Label>{label}</Label>
      </OptionalLink>
    </IconWrapper>
  )
}

export default ({ name, desc, iconData }) => {

  const icons = iconData ? iconData.map(x => <Icon {...x}></Icon>) : []
  return (
    <Section>
      <HeaderWrapper>
        <Name>{name}</Name>
        <Description>{desc}</Description>
      </HeaderWrapper>
      <GroupWrapper>{icons}</GroupWrapper>
    </Section>
  )
}
