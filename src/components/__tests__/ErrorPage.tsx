import React from 'react'
import renderer from 'react-test-renderer'
import { IntroInfo } from '../../data'
import { ErrorPage } from '../misc/ErrorPage'
describe('Error Page', () => {
  it('renders correctly', () => {
    const errorData: IntroInfo = {
      name: 'Whoopsiess',
      desc: '40404 we did a whoooopsiess',
    }
    const tree = renderer.create(<ErrorPage {...errorData} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
