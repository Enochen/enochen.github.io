import React, { FC } from 'react'
import { IntroInfo } from '../../data/introData'
import * as styled from '../Intro/Intro.styled'

export const ErrorPage: FC<IntroInfo> = ({ name, desc }) => {
  return (
    <styled.Intro>
      <styled.Header>
        <styled.BaseNameGroup>
          <styled.BaseName>{name}</styled.BaseName>
          <styled.BaseDesc>{desc}</styled.BaseDesc>
        </styled.BaseNameGroup>
      </styled.Header>
      <styled.IconGroup></styled.IconGroup>
    </styled.Intro>
  )
}
