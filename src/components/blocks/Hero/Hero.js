import React, { useLayoutEffect, useState } from 'react'
import styled from 'styled-components'

import { BackgroundAnimation, StyledButton } from 'components/shared'

const HeroStyles = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  /* max-height: 550px; */
  .hero {
    height: 100%;
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: var(--white);
    .copy {
      max-width: 750px;
      position: relative;
      z-index: 100;
      h1 {
        margin: 0.85rem 0;
        padding: 0;
        line-height: 45px;
        font-size: 3rem;
        span {
          text-decoration: underline var(--main);
          display: inline-block;
        }
      }
      p {
        a {
          text-decoration: underline;
        }
      }
      button {
        margin-top: 0.85rem;
      }
    }
  }
  .canvas {
    &::after {
      position: absolute;
      width: 100%;
      height: 100%;
      inset: 0;
      content: '';
      /* background: rgba(0, 0, 0, 0.25); */
      /* backdrop-filter: blur(90px) saturate(500%); */
      backdrop-filter: blur(90px);
      z-index: 10;
    }
  }
`
export default function Hero() {
  const [ready, setReady] = useState(false)
  return (
    <HeroStyles>
      <div className="hero">
        <div className="copy">
          <p>
            <strong>Hi, I'm Nick</strong>
          </p>
          <h1>
            I build <span>Websites</span> and other cool things for the web!
          </h1>
          <p>
            I’m a Front-end Developer & UI/UX designer based in London, UK.
            Currently, designing and building exceptional digital experiences
            for the West End at{' '}
            <a
              href="http://www.dewynters.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dewynters
            </a>
            .
          </p>
          <StyledButton text="Test" />
        </div>
      </div>
      <div className="canvas">
        <BackgroundAnimation />
      </div>
    </HeroStyles>
  )
}
