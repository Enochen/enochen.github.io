import React, { useState } from "react"
import styled from "styled-components"
import Section from "./section"

const ext = {
  target: "_blank",
  rel: "noopener noreferrer",
}

const HeaderWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding-top: 25vh;
  transition: padding-top 0.5s;

  ${props =>
    props.aboutOn &&
    `
      padding-top:15%;
      ${Name} {
        font-size: 3.5rem;
      }
      ${Desc} {
        font-size: 1.5rem;
      }
      ${About} {
        visibility: visible;
        height: auto;
        font-size: 1.1rem;
      }
    `}
`

const Name = styled.h1`
  font-weight: normal;
  font-size: 5rem;
  transition: font-size 0.5s;
`

const Desc = styled.h2`
  font-weight: 400;
  font-size: 2rem;
  transition: font-size 0.5s;
`

const About = styled.div`
  visibility: hidden;
  line-height: 1.4;
  text-align: justify;
  width: 80%;
  margin: 0 auto;
  padding-top: 10vh;
  height: 0;
  font-size: 0.5rem;
  transition: font-size 0.2s, height 0.5s;
`

const GroupWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-top: auto;
  padding-top: 0;
  padding-bottom: 10vh;
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

const Label = styled.div`
  user-select: none;
`

const Icon = ({ icon, link, label, external = false, toggle }) => {
  const IconType = icon
  const iconSize = 42
  const OptionalLink = link ? Link : React.Fragment

  const linkProps = external
    ? {
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {}
  const wrapperProps = link
    ? {}
    : {
        onClick: toggle,
      }

  return (
    <IconWrapper {...wrapperProps}>
      <OptionalLink href={link} {...linkProps}>
        <IconType size={iconSize} />
        <Label>{label}</Label>
      </OptionalLink>
    </IconWrapper>
  )
}

export default ({ name, desc, aboutData, iconData }) => {
  const [aboutOn, setAboutOn] = useState(false)
  const toggleAboutOn = () => setAboutOn(!aboutOn)
  const icons = iconData
    ? iconData.map(x =>
        x.link ? (
          <Icon {...x}></Icon>
        ) : (
          <Icon
            {...x}
            toggle={toggleAboutOn}
            icon={aboutOn ? x.icon : x.icon2}
          ></Icon>
        )
      )
    : []
  const about = aboutData.map(x => (
    <p dangerouslySetInnerHTML={{ __html: x }} />
  ))
  return (
    <Section intro={true}>
      <HeaderWrapper aboutOn={aboutOn}>
        <Name>{name}</Name>
        <Desc>{desc}</Desc>
        <About>{about}</About>
      </HeaderWrapper>
      <GroupWrapper>{icons}</GroupWrapper>
    </Section>
  )
}
