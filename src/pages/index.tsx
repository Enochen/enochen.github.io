import React, { useEffect } from 'react'
import { removeHash } from 'react-scrollable-anchor'
import {Intro} from '../components/Intro'
import Projects from '../components/projects'
import { SEO } from '../components/seo'

import { IntroData } from '../data/data-intro'
import { ProjectData } from '../data/data-project'

const handleScroll = () => {
  if (window.scrollY <= window.innerHeight * 0.25) {
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
      <Projects projData={ProjectData} />
    </>
  )
}
