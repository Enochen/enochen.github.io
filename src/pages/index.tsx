import React, { useEffect } from 'react'
import { removeHash } from 'react-scrollable-anchor'
import { Intro } from '../components/Intro'
import { Projects } from '../components/Projects'
import { SEO } from '../components/SEO'

import { IntroData } from '../data/introData'
import { ProjectData } from '../data/projectData'

const handleScroll = () => {
  if (window.scrollY <= window.innerHeight * 0.20) {
    removeHash()
  }
}

export default () => {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <>
      <SEO />
      <Intro {...IntroData} />
      <Projects {...ProjectData} />
    </>
  )
}
