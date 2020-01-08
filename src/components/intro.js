import React, { useState } from "react"
import styled, { css } from "styled-components"
import Section, { Wrapper } from "./section"
import { IconContext } from "react-icons"
import { scale, TABLET_MEDIA_QUERY } from "../utils/typography"

const HeaderWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding-top: 25vh;
  transition: padding-top 0.5s;
`

const Name = styled.h1`
  font-weight: normal;
  ${scale(2.3)};
  transition: font-size 0.5s;
`

const Desc = styled.h2`
  font-weight: 400;
  ${scale(1)};
  transition: font-size 0.5s;
`

const About = styled.div`
  visibility: hidden;
  text-align: justify;
  width: 80%;
  margin: 0 auto;
  padding-top: 5vh;
  height: 0;
  ${scale(0.2)};
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
  const OptionalLink = link ? Link : React.Fragment

  const linkHref = link
    ? {
        href: link,
      }
    : {}
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
      <OptionalLink {...linkHref} {...linkProps}>
        <IconType />
        <Label>{label}</Label>
      </OptionalLink>
    </IconWrapper>
  )
}

const IntroSection = styled(Section)`
  padding-bottom: 0;

  ${Wrapper} {
    max-width: 800px;
  }

  ${props =>
    props.aboutOn &&
    css`
      ${HeaderWrapper} {
        padding-top: 15vh;
      }
      ${Name} {
        ${scale(1.8)};
      }
      ${Desc} {
        ${scale(0.6)};
      }
      ${About} {
        visibility: visible;
        height: auto;
        ${scale(0.2)};
      }
    `}

  ${TABLET_MEDIA_QUERY} {
    .icon {
      display: none;
    }
    ${Name} {
      ${scale(1.8)};
    }
    ${Desc} {
      ${scale(0.6)};
    }
    ${GroupWrapper} {
      flex-wrap: wrap;
    }
    ${IconWrapper} {
      display: flex;
      justify-content: center;
      width: 30%;
      padding: 0.5rem 2rem;
    }
    ${Label} {
      text-transform: uppercase;
      font-weight: 600;
      padding: 0.5rem 2rem;
    }
    ${props =>
      props.aboutOn &&
      css`
        ${Name} {
          font-size: 3rem;
        }
        ${Desc} {
          font-size: 1.2rem;
        }
        ${About} {
          font-size: 1.2rem;
        }
      `}
  }
`

export default ({ name, desc, aboutData = [], iconData = [] }) => {
  const [aboutOn, setAboutOn] = useState(false)
  const toggleAboutOn = () => setAboutOn(!aboutOn)
  const about = aboutData.map((x, i) => (
    <p key={i} dangerouslySetInnerHTML={{ __html: x }} />
  ))
  const icons = (
    <IconContext.Provider value={{ size: "42", className: "icon" }}>
      {iconData.map((x, i) =>
        x.link ? (
          <Icon key={i} {...x}></Icon>
        ) : (
          <Icon
            key={i}
            {...x}
            toggle={toggleAboutOn}
            icon={aboutOn ? x.icon : x.icon2}
          ></Icon>
        )
      )}
    </IconContext.Provider>
  )
  return (
    <IntroSection aboutOn={aboutOn}>
      <HeaderWrapper>
        <Name>{name}</Name>
        <Desc>{desc}</Desc>
        <About>{about}</About>
      </HeaderWrapper>
      <GroupWrapper>{icons}</GroupWrapper>
    </IntroSection>
  )
}
