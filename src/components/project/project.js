import React from "react"
import Body from "./body"
import Pic from "./pic"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  border-radius: 5px;
  min-width: 300px;
  margin: 1rem;
  background: white;
  box-shadow: 0 5px 10px #a2a2a2;
  flex-direction: row-reverse;
`

export default data => (
  <Wrapper>
    <Pic {...data} />
    <Body {...data}></Body>
  </Wrapper>
)
