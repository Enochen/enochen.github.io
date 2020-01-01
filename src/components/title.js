import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  text-align: center;
  background: #d9a1a0;
  padding: 0.5rem;
  margin: 5vh auto;
`

const Title = styled.h1`
  padding: 0 0.5rem;
`

export default ({ text }) => (
  <Wrapper>
    <Title>{text}</Title>
  </Wrapper>
)
