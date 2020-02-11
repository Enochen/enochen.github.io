import React from 'react'
import { FaFlask, FaRegUser, FaUser } from 'react-icons/fa'
import renderer from 'react-test-renderer'
import { IntroInfo } from '../../data'
import { Intro } from '../Intro/Intro'
describe('Intro Section', () => {
  it('renders correctly', () => {
    const introData: IntroInfo = {
      name: 'George Washington',
      desc: 'SWE @ Apple',
      aboutData: [
        <p>I am the first President of the United States.</p>,
        <p>I am very honest. I robbed an Apple store when I was 6 years old. When my dad confronted me about it, I told the truth. That's how I became the President of the United States.</p>,
        <p>My website can be found <a href = "https://www.georgie.com">here</a>.</p>,
      ],
      iconData: [
        {
          icon: FaUser,
          iconAlt: FaRegUser,
          label: 'About Me!',
        },
        {
          icon: FaFlask,
          label: 'My Science Experiments',
          link: '#science',
        },
      ],
    }
    const tree = renderer.create(<Intro {...introData} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
