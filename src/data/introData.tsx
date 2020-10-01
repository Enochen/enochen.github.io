import React from 'react'
import { OutboundLink } from 'gatsby-plugin-gtag'
import { IconType } from 'react-icons'

import {
  FaFlask,
  FaGithub,
  FaGraduationCap,
  FaLinkedin,
  FaNewspaper,
  FaRegUser,
  FaUser,
} from 'react-icons/fa'

export interface IconInfo {
  icon: IconType
  iconAlt?: IconType
  label: string
  link?: string
  external?: boolean
}

export interface IntroInfo {
  name: string
  desc?: string
  aboutData?: JSX.Element[]
  iconData?: IconInfo[]
}

export const IntroData: IntroInfo = {
  name: 'Enoch Chen',
  desc: 'cs @ cornell',
  aboutData: [
    <>
      I am currently an undergrad at Cornell University studying Computer
      Science. I am passionate about designing effective and reliable systems,
      and I love getting the details just right. I want to make things that
      others can enjoy!
    </>,
    <>
      In my free time, you can find me juggling, tinkering with keyboards, or
      just thinking about life.
    </>,
    <>
      Check out some of my stuff{' '}
      <OutboundLink href="#projects">here</OutboundLink>.
    </>,
  ],
  iconData: [
    {
      icon: FaRegUser,
      iconAlt: FaUser,
      label: 'About',
    },
    {
      icon: FaFlask,
      label: 'Projects',
      link: '#projects',
    },
    {
      icon: FaGithub,
      label: 'Github',
      link: 'http://github.com/Enochen',
      external: true,
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/enochen728/',
      external: true,
    },
    {
      icon: FaNewspaper,
      label: 'Resume',
      link: '/misc/Enoch Chen resume.pdf',
      external: true,
    },
  ],
}
