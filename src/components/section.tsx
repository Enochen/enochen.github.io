import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

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

interface ISectionProps {
  id?: string
  className?: string
}

export const Section: FunctionComponent<ISectionProps> = ({
  id,
  children,
  className,
}) => {
  return (
    <Outer id={id} className={className}>
      {children}
    </Outer>
  )
}
