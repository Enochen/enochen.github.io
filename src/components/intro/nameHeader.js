import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  padding-top: 25vh;
  display: flex;
  flex-direction: column;
`

const Name = styled.h1`
  font-weight: normal;
  font-size: 5rem;
`

const Description = styled.h2`
  font-weight: 400;
  font-size: 2rem;
`

export default ({ name, desc }) => (
  <Wrapper>
    <Name>{name}</Name>
    <Description>{desc}</Description>
  </Wrapper>
)
