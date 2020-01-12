import React, { useState } from 'react'
import { IconContext } from 'react-icons'
import { goToTop, removeHash } from 'react-scrollable-anchor'
import styled, { css } from 'styled-components'
import { rhythm, scale, TABLET_MEDIA_QUERY } from '../utils/typography'
import { Section } from './section'

const HeaderWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding-top: 25vh;
  transition: padding-top 0.5s;
`

const Name = styled.h1`
  ${scale(2.3)};
  font-weight: normal;
  padding-bottom: 0.5rem;
  transition: font-size 0.5s;
`

const Desc = styled.h2`
  ${scale(1)};
  font-weight: 400;
  transition: font-size 0.5s;
`

const About = styled.div`
  ${scale(-2)};
  visibility: hidden;
  text-align: justify;
  width: 80%;
  margin: 0 auto;
  padding-top: ${rhythm(1.7)};
  height: 0;
  transition: font-size 0.4s, height 0.5s;
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

const Icon = ({ icon, label, link, external = false, action }) => {
  const IconType = icon
  const OptionalLink = link ? Link : React.Fragment

  const linkHref = link
    ? {
        href: link,
      }
    : {}
  const linkProps = external
    ? {
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {}
  const wrapperProps = link
    ? {}
    : {
        onClick: action,
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

interface IIntroProps {
  readonly aboutActive: boolean
}

const IntroSection = styled(Section)<IIntroProps>`
  padding-bottom: 0;
  max-width: 45rem;

  ${props =>
    props.aboutActive &&
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
    ${About} {
      padding-top: ${rhythm(1)};
    }
    ${GroupWrapper} {
      flex-wrap: wrap;
      padding-bottom: 13vh;
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
      props.aboutActive &&
      css`
        ${Name} {
          font-size: 3rem;
        }
        ${Desc} {
          font-size: 1.2rem;
        }
        ${About} {
          ${scale(0.2)};
        }
      `}
  }
`

export default ({ name, desc, aboutData = [], iconData = [] }) => {
  const [aboutOn, setAboutOn] = useState(false)
  const toggleAboutOn = () => {
    setAboutOn(!aboutOn)
    goToTop()
    removeHash()
  }
  const about = aboutData.map((x, i) => (
    <p key={i} dangerouslySetInnerHTML={{ __html: x }} />
  ))
  const icons = (
    <IconContext.Provider value={{ size: '42', className: 'icon' }}>
      {iconData.map((x, i) =>
        x.link ? (
          <Icon key={i} {...x}></Icon>
        ) : (
          <Icon
            key={i}
            {...x}
            action={toggleAboutOn}
            icon={aboutOn ? x.icon : x.icon2}
          ></Icon>
        )
      )}
    </IconContext.Provider>
  )
  return (
    <IntroSection aboutActive={aboutOn}>
      <HeaderWrapper>
        <Name>{name}</Name>
        <Desc>{desc}</Desc>
        <About>{about}</About>
      </HeaderWrapper>
      <GroupWrapper>{icons}</GroupWrapper>
    </IntroSection>
  )
}
