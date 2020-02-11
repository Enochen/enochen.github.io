import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
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
    <p>
      I am currently an undergrad at Cornell University studying Computer
      Science. I am passionate about designing effective and reliable systems,
      and I love getting the details just right. My goal is to make things that
      others can enjoy well.
    </p>,
    <p>In my free time, I like tinkering with keyboards.</p>,
    <p>
      Check out some of my stuff{' '}
      <OutboundLink href="#projects">here</OutboundLink>.
    </p>,
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
      icon: FaGraduationCap,
      label: 'Transcript',
      link: '/misc/2020-02-02-Transcript.pdf',
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
