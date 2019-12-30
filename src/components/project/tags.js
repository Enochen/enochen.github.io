import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  flex-wrap: wrap;
  display: flex;
`

const Tag = styled.div`
  padding: 3px 10px;
  margin: 0 0.5rem 0.5rem 0;
  font-size: 0.8rem;
  font-weight: 600;
  text-align: center;
  background: #d0cccc;
  border-radius: 5px;
  color: #404040;
  transition: color 1s, background 1s;
`

export default ({ data }) => {
  const tags = data.map(x => <Tag>{x}</Tag>)
  return <Wrapper>{tags}</Wrapper>
}
