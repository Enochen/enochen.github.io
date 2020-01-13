import React, { FunctionComponent, useState } from 'react'
import { IconContext } from 'react-icons'
import { goToTop, removeHash } from 'react-scrollable-anchor'
import { IIcon, IIntro } from '../data/data-intro'
import {
  IconLink,
  IntroAbout,
  IntroDesc,
  IntroHeader,
  IntroIcon,
  IntroIconGroup,
  IconLabel,
  IntroName,
  IntroSection,
} from './intro.styled'

interface IIconProps extends IIcon {
  action?: () => void
}

const Icon: FunctionComponent<IIconProps> = ({
  icon,
  label,
  link,
  external = false,
  action,
}) => {
  const IconElement = icon
  const OptionalLink = link ? IconLink : React.Fragment

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
  const wrapperProps = action
    ? {
        onClick: action,
      }
    : {}

  return (
    <IntroIcon {...wrapperProps}>
      <OptionalLink {...linkHref} {...linkProps}>
        <IconElement />
        <IconLabel>{label}</IconLabel>
      </OptionalLink>
    </IntroIcon>
  )
}

export const Intro: FunctionComponent<IIntro> = ({
  name,
  desc,
  aboutData = [],
  iconData = [],
}) => {
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
      <IntroHeader>
        <IntroName>{name}</IntroName>
        <IntroDesc>{desc}</IntroDesc>
        <IntroAbout>{about}</IntroAbout>
      </IntroHeader>
      <IntroIconGroup>{icons}</IntroIconGroup>
    </IntroSection>
  )
}
