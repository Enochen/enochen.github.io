import React, { FC } from 'react'
import styled from 'styled-components'
import { rhythm, scale } from '../utils/typography'

const Wrapper = styled.div`
  text-align: center;
  background: #d9a1a0;
  padding: 0.75rem;
  margin: 5vh auto;
  box-shadow: 0 ${rhythm(0.2)} ${rhythm(0.4)} #a2a2a2;
`

const Heading = styled.h1`
  ${scale(1.5)};
  padding: 0 1rem;
`

interface ITitle {
  text: string
}

export const Title: FC<ITitle> = ({ text }) => (
  <Wrapper>
    <Heading>{text}</Heading>
  </Wrapper>
)
