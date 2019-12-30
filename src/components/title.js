import React from "react"
import styled from "styled-components"

const Title = styled.div`
  text-align: center;
  background: #d9a1a0;
  padding: 0.5rem;
  margin: 5vh auto;
  width: 25%;
`

export default ({ text }) => (
  <Title>
    <h1>{text}</h1>
  </Title>
)
