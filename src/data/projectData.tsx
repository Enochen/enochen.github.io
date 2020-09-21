import React from 'react'
import { OutboundLink } from 'gatsby-plugin-gtag'

export interface ProjectInfo {
  name: string
  desc: JSX.Element
  tags: string[]
  live?: string
  github?: string
  image: string
}

export interface ProjectList {
  data: ProjectInfo[]
}

export const ProjectData: ProjectList = {
  data: [
    {
      name: 'Moody',
      desc: (
        <>
          Mood-tracking app with a chatbot that sends you memes! What began as
          an offhand comment became a wacky twist on the mental health tech
          space. Hackathon Finalist at{' '}
          <OutboundLink
            href="https://hackourcampus.com/"
            target="_blank"
            rel="noopener"
          >
            HackOurCampus
          </OutboundLink>
          .
        </>
      ),
      tags: ['TypeScript', 'React Native', 'Google Cloud DialogFlow'],
      github: 'https://github.com/Enochen/hoc20-mobile',
      image: 'moody.jpg',
    },
    {
      name: '#outbreak;;',
      desc: (
        <>
          Pick a disease, pick a starting country, and buy upgrades to infect the whole
          world before a vaccine is found! Plague Inc-inspired game with a React
          web frontend and a backend server written in OCaml. Developed by a
          team of 3 for the final project of CS 3110 (Functional Programming).
        </>
      ),
      tags: ['OCaml', 'React', 'HTML/CSS', 'JavaScript'],
      github: 'https://github.com/ptwu/outbreak',
      image: 'outbreak.png',
    },
    {
      name: 'eve',
      desc: (
        <>
          I joined{' '}
          <OutboundLink
            href="https://cornelldti.org"
            target="_blank"
            rel="noopener"
          >
            Cornell Design & Tech Initiative
          </OutboundLink>{' '}
          in Fall 2019 as a Full Stack Developer. My team is responsible for
          eve, an event-discovery app for Cornell students at Ithaca. I've had a
          hand in many parts of the project, from helpful external scripts to an
          authentication system.
        </>
      ),
      tags: ['TypeScript', 'Express', 'Firebase', 'React'],
      live: 'https://www.cornelldti.org/Projects/events',
      github: 'https://github.com/cornell-dti/events-backend/',
      image: 'eve.jpg',
    },
    {
      name: 'Ask Palette',
      desc: (
        <>
          Generate color palettes from your search terms! Uses Google Cloud
          Vision to extract colors from search terms. Developed as a hackathon
          project at{' '}
          <OutboundLink
            href="https://bigredhacks.com"
            target="_blank"
            rel="noopener"
          >
            BigRed//Hacks
          </OutboundLink>
          .
        </>
      ),
      tags: ['HTML/CSS', 'Python', 'Flask', 'Google Cloud Vision'],
      live: 'https://askpalette.appspot.com/',
      github: 'https://github.com/Enochen/askpalette',
      image: 'askpalette.png',
    },
    {
      name: 'This Website',
      desc: (
        <>
          Over winter break, I decided to learn some new technologies and use
          them to put something together. It seemed like a good idea to make a
          personal website, and this is what came out of that idea.
        </>
      ),
      tags: ['HTML/CSS', 'TypeScript', 'GatsbyJS', 'GraphQL', 'React'],
      github: 'https://github.com/Enochen/portfolio',
      image: 'portfolio.png',
    },
    {
      name: 'Half Bot Half Brain',
      desc: (
        <>
          It\'s like Mad Libs, but better. The backend generates grammatically
          correct text from input with the help of spaCy. Developed as a
          hackathon project at{' '}
          <OutboundLink
            href="https://teenhacksli.com/"
            target="_blank"
            rel="noopener"
          >
            TeenhacksLI
          </OutboundLink>
          .
        </>
      ),
      tags: ['HTML/CSS', 'JavaScript', 'Python', 'spaCy'],
      live: 'https://halfbothalfbrain.netlify.com/',
      github: 'https://github.com/ageor0114/nyit-hackathon',
      image: 'hbhb.png',
    },
  ],
}
