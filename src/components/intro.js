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
  font-size: ${props => (props.aboutOn ? "3.5rem" : "5rem")};
  transition: font-size 0.5s;
`

const Description = styled.h2`
  font-weight: 400;
  font-size: ${props => (props.aboutOn ? "1.5rem" : "2rem")};
  transition: font-size 0.5s;
`

const About = styled.div`
  visibility: ${props => (props.aboutOn ? "visible" : "hidden")};
  line-height: 1.4;
  text-align: justify;
  width: 80%;
  margin: 0 auto;
  padding-top: 5vh;
  height: ${props => (props.aboutOn ? "auto" : "0")};
  font-size: ${props => (props.aboutOn ? "1.1rem" : "0.5rem")};
  transition: font-size 0.5s, height 0.5s, opacity 0.5s;
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

const Icon = ({ icon, link, label, external = false, toggle }) => {
  const IconType = icon
  const iconSize = 42
  const ext = external
    ? {
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {}
  const onClick = link
    ? {}
    : {
        onClick: toggle,
      }
  const OptionalLink = link ? Link : React.Fragment
  return (
    <IconWrapper {...onClick}>
      <OptionalLink href={link} {...ext}>
        <IconType size={iconSize} />
        <Label>{label}</Label>
      </OptionalLink>
    </IconWrapper>
  )
}

export default ({ name, desc, iconData }) => {
  const [aboutOn, setAboutOn] = useState(false)
  const toggleAboutOn = () => setAboutOn(!aboutOn)
  const icons = iconData
    ? iconData.map(x => <Icon toggle={toggleAboutOn} {...x}></Icon>)
    : []
  return (
    <Section>
      <HeaderWrapper>
        <Name aboutOn={aboutOn}>{name}</Name>
        <Description aboutOn={aboutOn}>{desc}</Description>
        <About aboutOn={aboutOn}>
          <p>hi</p>
          <p>hi</p>
        </About>
      </HeaderWrapper>
      <GroupWrapper>{icons}</GroupWrapper>
    </Section>
  )
}
