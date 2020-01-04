import React from "react"
import styled from "styled-components"

const Section = styled.div`
  justify-content: center;
  display: flex;
  box-sizing: border-box;
  min-height: 100vh;
  padding-bottom: 5vh;
`

const DefaultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  box-sizing: border-box;
`

const WideWrapper = styled(DefaultWrapper)`
  max-width: 1000px;
`

export default ({ id, children, wide = false }) => {
  const Wrapper = wide ? WideWrapper : DefaultWrapper
  return (
    <Section id={id}>
      <Wrapper>{children}</Wrapper>
    </Section>
  )
}
