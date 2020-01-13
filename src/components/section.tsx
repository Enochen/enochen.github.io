import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { rhythm, scale } from '../utils/typography'

const Outer = styled.div`
  margin: auto;
  justify-content: center;
  display: flex;
  box-sizing: border-box;
  min-height: 100vh;
  padding-bottom: 5vh;
  max-width: 55rem;
  flex-direction: column;
`

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

interface ISectionProps {
  id?: string
  title?: string
  className?: string
}

const Title = ({ title }) => {
  if (title) {
    return (
      <Wrapper>
        <Heading>{title}</Heading>
      </Wrapper>
    )
  }
  return null
}

export const Section: FunctionComponent<ISectionProps> = ({
  id,
  title,
  className,
  children,
}) => {
  return (
    <Outer id={id} className={className}>
      <Title title={title} />
      {children}
    </Outer>
  )
}
