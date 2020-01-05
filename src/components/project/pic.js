import React from "react"
import styled from "styled-components"

const ext = {
  target: "_blank",
  rel: "noopener noreferrer",
}

const Pic = styled.a(({background})=>`
  width: 50%;
  border-radius: 0 5px 5px 0;
  background: url(${background}) top / cover no-repeat rgb(0, 0, 0);
`,)

export default ({ image, live, github }) => {
  const url = live ? live : github
  return <Pic background={image} href={url} {...ext}/>
}
