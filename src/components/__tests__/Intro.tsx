import React from 'react'
import renderer from 'react-test-renderer'
import { IntroData } from '../../data'
import { Intro } from '../Intro'
describe('Intro Section', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Intro {...IntroData} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
