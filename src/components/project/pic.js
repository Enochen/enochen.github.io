import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const ext = {
  target: "_blank",
  rel: "noopener noreferrer",
}

const Link = styled.a`
  width: 50%;
  border-radius: 0 5px 5px 0;
  display: block;
  overflow: auto;
`

const Pic = styled(BackgroundImage)`
  background-position: top;
  height: 100%;
`

export default ({ name, image, live, github }) => {
  const data = useStaticQuery(
    graphql`
      query {
        img: allFile {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `
  )
  const imageData = data.img.edges.find(
    ({ node }) => node.relativePath === image
  ).node.childImageSharp.fluid
  const url = live ? live : github
  return (
    <Link href={url} alt={name} {...ext}>
      <Pic fluid={imageData}></Pic>
    </Link>
  )
}
// export default ({ name, image, live, github }) => (
//   <StaticQuery
//     query={graphql`
//       query {
//         img: allFile(filter: {sourceInstanceName: {glob: "*"} }) {
//           edges {
//             node {
//               relativePath
//               childImageSharp {
//                 fluid(quality: 100) {
//                   ...GatsbyImageSharpFluid_withWebp
//                 }
//               }
//             }
//           }
//         }
//       }
//     `}
//     render={data => {
//       console.log(data.img.edges)
//       const imageData = data.img.edges.find(
//         ({ node }) => node.relativePath === image
//       ).node.childImageSharp.fluid
//       const url = live ? live : github
//       return (
//         <BackgroundImage fluid={imageData}>
//           <Pic href={url} alt={name} {...ext} />
//         </BackgroundImage>
//       )
//     }}
//   />
// )
