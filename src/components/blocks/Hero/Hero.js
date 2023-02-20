import React, { Suspense, useLayoutEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { StyledButton } from 'components/shared'
import { media } from 'utils/Media'
import { gsap } from 'utils/gsap'

const BackgroundAnimation = React.lazy(() => import('./backgroundAnimation'))

const HeroStyles = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  /* max-height: 550px; */
  .hero {
    height: 100%;
    width: 90%;
    max-width: 1200px;
    min-height: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: var(--white);
    .copy {
      max-width: 950px;
      position: relative;
      z-index: 100;
      strong {
        font-size: 1.25rem;
      }
      h1 {
        margin: 0.85rem 0;
        padding: 0;
        line-height: 45px;
        font-size: 3rem;
        span {
          text-decoration: underline var(--main);
          display: inline-block;
        }
        @media ${media.xl} {
          font-size: 3.85rem;
          line-height: 3.85rem;
        }
      }
      p {
        a {
          text-decoration: underline;
          &:active,
          &:hover {
            color: var(--main);
          }
        }
      }
      button {
        margin-top: 0.85rem;
      }
      @media ${media.md} {
        p strong {
          font-size: 1.5rem;
        }
        button {
          margin-top: 2rem;
        }
      }
    }
  }
  @media ${media.md} {
    .hero {
      width: 85%;
    }
  }
  @media ${media.lg} {
    .hero {
      width: 80%;
      max-width: 750px;
    }
  }
  @media ${media.xl} {
    .hero {
      width: 100%;
      max-width: 1000px;
    }
  }
  .canvas {
    &::after {
      position: absolute;
      width: 100%;
      height: 100%;
      inset: 0;
      content: '';
      background: rgba(0, 0, 0, 0.25);
      /* backdrop-filter: blur(90px) saturate(500%); */
      backdrop-filter: blur(90px);
      z-index: 10;
      pointer-events: none;
    }
  }
`
export default function Hero() {
  const [ready, setReady] = useState(false)

  const el = useRef()
  const tl = useRef()

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline().to('.fade-up', {
        opacity: 1,
        delay: 1.5,
        y: 0,
        stagger: {
          each: 0.35,
        },
      })
    }, el)
  }, [])

  return (
    <HeroStyles>
      <div className="hero">
        <div className="copy" ref={el}>
          <p className="fade-up">
            <strong>Hi 👋, I'm Nick</strong>
          </p>
          <h1 className="fade-up">
            I build <span>Websites</span> and other cool things for the web!
          </h1>
          <section className="fade-up">
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

            <StyledButton text="Get in touch" href="/#get-in-touch" />
          </section>
        </div>
      </div>
      {/* <div className="canvas">
        <Suspense fallback={<div>Loading...</div>}>
          <BackgroundAnimation />
        </Suspense>
      </div> */}
    </HeroStyles>
  )
}
