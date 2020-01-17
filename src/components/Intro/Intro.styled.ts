import styled, { css } from 'styled-components'
import { rhythm, scale, TABLET_MEDIA_QUERY } from '../../utils/typography'
import { Section } from '../Section'

export const Header = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding-top: 25vh;
  transition: padding-top 0.5s;
`

export const NameGroup = styled.div`
  margin: auto;
  &:hover {
    color: #6460b8;
    cursor: pointer;
  }
`

const NameStyle = css`
  color: inherit;
  &:hover {
    cursor: pointer;
  }
`

export const Name = styled.h1`
  ${scale(2.3)};
  font-weight: normal;
  padding-bottom: 0.5rem;
  transition: font-size 0.5s;
  ${NameStyle}
`

export const Desc = styled.h2`
  ${scale(1)};
  font-weight: 400;
  transition: font-size 0.5s;
  ${NameStyle}
`

export const About = styled.div`
  ${scale(-2)};
  visibility: hidden;
  text-align: justify;
  width: 80%;
  margin: 0 auto;
  padding-top: ${rhythm(1.7)};
  height: 0;
  transition: font-size 0.4s, height 0.5s;
`

export const IconGroup = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-top: auto;
  padding-top: 0;
  padding-bottom: 10vh;
`

export const IntroIcon = styled.div`
  margin: auto;
  &:hover {
    color: #6460b8;
    cursor: pointer;
  }
`

export const IconLink = styled.a`
  color: hsla(0, 0%, 0%, 0.7);
`

export const IconLabel = styled.div`
  user-select: none;
`

interface SectionProps {
  readonly aboutActive: boolean
}

export const Intro = styled(Section)<SectionProps>`
  padding-bottom: 0;
  max-width: 45rem;

  ${props =>
    props.aboutActive &&
    css`
      ${Header} {
        padding-top: 15vh;
      }
      ${Name} {
        ${scale(1.8)};
      }
      ${Desc} {
        ${scale(0.6)};
      }
      ${About} {
        visibility: visible;
        height: auto;
        ${scale(0.2)};
      }
    `}

  ${TABLET_MEDIA_QUERY} {
    .icon {
      display: none;
    }
    ${Name} {
      ${scale(1.8)};
    }
    ${Desc} {
      ${scale(0.6)};
    }
    ${About} {
      padding-top: ${rhythm(1)};
    }
    ${IconGroup} {
      flex-wrap: wrap;
      padding-bottom: 13vh;
    }
    ${IntroIcon} {
      display: flex;
      justify-content: center;
      width: 30%;
      padding: 0.5rem 2rem;
    }
    ${IconLabel} {
      text-transform: uppercase;
      font-weight: 600;
      padding: 0.5rem 2rem;
    }
    ${props =>
      props.aboutActive &&
      css`
        ${Name} {
          font-size: 3rem;
        }
        ${Desc} {
          font-size: 1.2rem;
        }
        ${About} {
          ${scale(0.2)};
        }
      `}
  }
`
