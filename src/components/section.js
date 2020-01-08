import React from "react"
import styled from "styled-components"
import ScrollableAnchor from 'react-scrollable-anchor'

const Section = styled.div`
  justify-content: center;
  display: flex;
  box-sizing: border-box;
  min-height: 100vh;
  padding-bottom: 5vh;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  box-sizing: border-box;
`

export default ({ id, children, className }) => {
  return (
    <Section id={id} className={className}>
      <Wrapper>{children}</Wrapper>
    </Section>
  )
}
