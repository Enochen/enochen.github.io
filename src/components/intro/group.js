import React from "react"
import styled from "styled-components"

const IconGroup = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-top: auto;
  padding-top: 0%;
  padding-bottom: 12vh;
`

export default ({ children }) => <IconGroup>{children}</IconGroup>
