import React, { FC, useState } from 'react'
import { IconContext } from 'react-icons'
import { goToTop, removeHash } from 'react-scrollable-anchor'
import { IconInfo, IntroInfo } from '../../data/introData'
import * as styled from './Intro.styled'

interface IconProps extends IconInfo {
  action?: () => void
  state?: boolean
}

const Icon: FC<IconInfo> = ({ icon, label, link, external = false }) => {
  const IconElement = icon
  const OptionalLink = link ? styled.IconLink : React.Fragment

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

  return (
    <styled.IntroIcon>
      <OptionalLink {...linkHref} {...linkProps}>
        <IconElement />
        <styled.IconLabel>{label}</styled.IconLabel>
      </OptionalLink>
    </styled.IntroIcon>
  )
}

const ActionIcon: FC<IconProps> = ({ icon, iconAlt, label, action, state }) => {
  const IconElement = state ? iconAlt : icon
  const wrapperProps = action
    ? {
        onClick: action,
      }
    : {}

  return (
    <styled.IntroIcon {...wrapperProps}>
      <IconElement />
      <styled.IconLabel>{label}</styled.IconLabel>
    </styled.IntroIcon>
  )
}

const makeIcons = (data: IconInfo[], state: boolean, action: () => void) => {
  return (
    <IconContext.Provider value={{ size: '42', className: 'icon' }}>
      {data.map((x, i) =>
        x.link ? (
          <Icon key={i} {...x}></Icon>
        ) : (
          <ActionIcon key={i} {...x} action={action} state={state}></ActionIcon>
        )
      )}
    </IconContext.Provider>
  )
}

export const Intro: FC<IntroInfo> = ({
  name,
  desc,
  aboutData = [],
  iconData = [],
}) => {
  const [aboutOn, setAboutOn] = useState(false)
  const toggleAboutOn = () => {
    if (!aboutOn) {
      goToTop()
    }
    setAboutOn(!aboutOn)
  }
  const about = aboutData
  const icons = makeIcons(iconData, aboutOn, toggleAboutOn)
  return (
    <styled.Intro aboutActive={aboutOn}>
      <styled.Header>
        <styled.NameGroup onClick={toggleAboutOn}>
          <styled.Name>{name}</styled.Name>
          <styled.Desc>{desc}</styled.Desc>
        </styled.NameGroup>
        <styled.About>{about}</styled.About>
      </styled.Header>
      <styled.IconGroup>{icons}</styled.IconGroup>
    </styled.Intro>
  )
}
