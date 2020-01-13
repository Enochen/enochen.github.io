import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
import { rhythm, scale, TABLET_MEDIA_QUERY } from '../utils/typography'

export const ProjectBody = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  padding: 1.3rem;
`

const BodySubsection = styled.div`
  margin: 0.5rem 0;
`

export const BodyName = styled(BodySubsection)`
  ${scale(1)};
  margin-bottom: 0.5rem;
`

export const BodyTagGroup = styled(BodySubsection)`
  flex-wrap: wrap;
  display: flex;
  margin-bottom: 0;
`

export const BodyTag = styled.div`
  ${scale(-0.3)};
  padding: 3px 10px;
  margin: 0 0.5rem 0.5rem 0;
  font-weight: 600;
  text-align: center;
  background: #e6e6e6;
  border-radius: 5px;
  transition: color 1s, background 1s;
`

export const BodyDesc = styled(BodySubsection)``

export const BodyLinkGroup = styled(BodySubsection)`
  flex-wrap: wrap;
  display: flex;
`

export const BodyLink = styled.a`
  color: #6460b8;
  text-decoration: none;
  padding: 5px 12px;
  border: 1px solid #6460b8;
  border-radius: 5px;
  margin-right: 1rem;

  &:hover {
    color: white;
    background: #6460b8;
  }
`

export const ImageLink = styled.a`
  width: 50%;
  display: block;
  overflow: auto;
`

export const Background = styled(BackgroundImage)`
  background-position: top;
  height: 100%;
`

export const ProjectWrapper = styled.div`
  display: flex;
  min-width: 300px;
  margin: 1rem;
  background: white;
  box-shadow: 0 ${rhythm(0.2)} ${rhythm(0.4)} #a2a2a2;
  flex-direction: row-reverse;

  ${TABLET_MEDIA_QUERY} {
    flex-direction: column;
    ${ProjectBody} {
      width: 100%;
      box-sizing: border-box;
    }
    ${ImageLink} {
      width: 100%;
      height: 30vh;
    }
  }
`
