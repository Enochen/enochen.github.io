import React from "react"
import Tags from "./tags"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  padding: 1.3rem;
`

const Subsection = styled.div`
  margin: 0.5rem 0px;
`

const Name = styled(Subsection)`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`

const Description = styled(Subsection)`
  line-height: 1.4;
`

export default ({ name, desc }) => (
  <Wrapper>
    <Name>{name}</Name>
    <Tags data={["React", "Gatsby"]}></Tags>
    <Description>{desc}</Description>
  </Wrapper>
)
