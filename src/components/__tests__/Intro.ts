import React from 'react'
import renderer from 'react-test-renderer'
import { Intro } from '../Intro'
import { IntroData } from '../../data'
describe('Intro', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Intro {...IntroData}/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
