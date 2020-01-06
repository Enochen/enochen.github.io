import React from "react"
import styled from "styled-components"

const DefaultSection = styled.div`
  justify-content: center;
  display: flex;
  box-sizing: border-box;
  min-height: 100vh;
  padding-bottom: 5vh;
`

const IntroSection = styled(DefaultSection)`
  padding-bottom: 0;
`

const DefaultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  box-sizing: border-box;
`

const IntroWrapper = styled(DefaultWrapper)`
  max-width: 800px;
`

export default ({ id, children, intro = false }) => {
  const Wrapper = intro ? IntroWrapper : DefaultWrapper
  const Section = intro ? IntroSection : DefaultSection
  return (
    <Section id={id}>
      <Wrapper>{children}</Wrapper>
    </Section>
  )
}
