import React from 'react'
import styled from 'styled-components'

import {
  BackgroundImage,
  MaxWidth,
  Social,
  StyledButton,
} from 'components/global'
import { media } from 'utils/Media'

const IndexHeaderStyles = styled.header`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  .title {
    position: relative;
    z-index: 5;
    color: var(--white);
    font-weight: 700;
    p {
      font-weight: 400;
      &:nth-child(1) {
        font-size: 1.4rem;
        color: var(--main);
        font-weight: 700;
      }
      a {
        color: var(--main);
        &:hover,
        &:active {
          color: var(--white);
          span {
            text-decoration: underline solid 1px;
          }
        }
        span {
          display: inline-block;
        }
      }
    }
    .intro {
      max-width: 850px;
    }
    h1 {
      @media (max-width: 370px) {
        font-size: 2.2rem;
      }
      margin: 0.5rem 0;
      /* line-height: 2rem; */
      @media ${media.ls} {
      }
      span {
        display: inline-block;
        text-decoration: underline 3px var(--main);
        text-underline-offset: 0.25rem;
      }
    }
    a {
      margin-top: 1rem;
    }
  }
`
const IndexHeader = () => {
  const i = true
  return (
    <IndexHeaderStyles>
      <MaxWidth>
        <div className="title">
          <p className="name">Hi, i'm Nick</p>
          <h1>
            I build <span>Websites</span> and other cool things for the web!
          </h1>
          <p className="intro">
            I’m a Front-end Developer &amp; UI/UX designer based in London, UK.
            Currently, designing and building exceptional digital experiences
            for the West End at{' '}
            <a href="http://www.dewynters.com" target="_blank" rel="noreferrer">
              <span>Dewynters.</span>
            </a>
          </p>
          <StyledButton text="Get in touch" to="/privacy" />
        </div>
      </MaxWidth>
      <BackgroundImage />
      <Social $desktop />
    </IndexHeaderStyles>
  )
}

export default IndexHeader
