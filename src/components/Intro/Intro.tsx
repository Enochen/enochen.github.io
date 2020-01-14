import React, { FC, useState } from 'react'
import { IconContext } from 'react-icons'
import { goToTop, removeHash } from 'react-scrollable-anchor'
import { IIcon, IIntro } from '../../data/data-intro'
import * as styled from './intro.styled'

interface IIconProps extends IIcon {
  action?: () => void
}

const Icon: FC<IIconProps> = ({
  icon,
  label,
  link,
  external = false,
  action,
}) => {
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
  const wrapperProps = action
    ? {
        onClick: action,
      }
    : {}

  return (
    <styled.IntroIcon {...wrapperProps}>
      <OptionalLink {...linkHref} {...linkProps}>
        <IconElement />
        <styled.IconLabel>{label}</styled.IconLabel>
      </OptionalLink>
    </styled.IntroIcon>
  )
}

const makeAbout = (data: string[]) => {
  return data.map((x, i) => (
    <p key={i} dangerouslySetInnerHTML={{ __html: x }} />
  ))
}

const makeIcons = (data: IIcon[], action: () => void, altIcon: boolean) => {
  return (
    <IconContext.Provider value={{ size: '42', className: 'icon' }}>
      {data.map((x, i) =>
        x.link ? (
          <Icon key={i} {...x}></Icon>
        ) : (
          <Icon
            key={i}
            {...x}
            action={action}
            icon={altIcon ? x.iconAlt : x.icon}
          ></Icon>
        )
      )}
    </IconContext.Provider>
  )
}

export const Intro: FC<IIntro> = ({
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
  const about = makeAbout(aboutData)
  const icons = makeIcons(iconData, toggleAboutOn, aboutOn)
  return (
    <styled.Intro aboutActive={aboutOn}>
      <styled.Header>
        <styled.Name>{name}</styled.Name>
        <styled.Desc>{desc}</styled.Desc>
        <styled.About>{about}</styled.About>
      </styled.Header>
      <styled.IconGroup>{icons}</styled.IconGroup>
    </styled.Intro>
  )
}
