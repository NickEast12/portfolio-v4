import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'

import { StaticImage } from 'gatsby-plugin-image'
import { media } from 'utils/Media'
import { MaxWidth } from 'components/global'
import Anchor from 'components/functional/anchor'

import { gsap } from 'utils/gsap'

const AboutStyles = styled.section`
  width: 100%;
  /* min-height: 100vh; */
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1150px;
  margin: 0 auto;
  .about {
    padding: 3rem 0;
    opacity: 0;
    transform: translateY(100px);
    .text {
      h2 {
        margin-bottom: 1rem;
        font-size: 2.8rem;
        text-decoration: underline var(--main);
        @media ${media.md} {
          font-size: 3.5rem;
        }
      }
      p {
        margin-bottom: 1rem;
        a {
          color: var(--main);
          text-decoration: underline;
          &:hover,
          &:active {
            text-decoration: underline var(--white) 1px;
          }
        }
      }
      ul {
        display: grid;
        grid-template-columns: repeat(2, minmax(140px, 200px));
        gap: 0px 10px;
        padding: 0px;
        margin: 20px 0px 0px;
        overflow: hidden;
        list-style: none;
        li {
          position: relative;
          margin-bottom: 10px;
          padding-left: 20px;

          &:before {
            content: '▹';
            top: 4px;
            left: 2px;
            position: absolute;
            color: var(--main);
            line-height: 12px;
          }
        }
      }
    }
    .image {
      position: relative;
      width: 90%;
      max-width: 375px;
      margin: 1.5rem auto;
      .gatsby-image-wrapper {
        border-radius: var(--borderRadius);
      }
      .border {
        position: absolute;
        z-index: -1;
        top: 20px;
        left: 20px;
        transition: var(--transition);
        width: 100%;
        height: 100%;
        content: '';
        background: none;
        border: solid 2px var(--main);
        border-radius: var(--borderRadius);
        max-width: 375px;
        max-height: 375px;
      }
      @media ${media.md} {
        margin: 0 auto;
      }
      &:hover,
      &:active {
        .border {
          top: 8.5px;
          left: 8.5px;
        }
      }
    }
    @media ${media.md} {
      display: grid;
      grid-template-columns: 1fr 1fr;
      .image {
        width: 300px;
        height: 300px;
      }
    }
    @media ${media.lg} {
      .image {
        width: 350px;
        height: 350px;
      }
    }
    @media ${media.xl} {
      display: grid;
      grid-template-columns: 55% 1fr;
      gird-gap: 4rem;
      .image {
        margin-top: 4rem;
      }
    }
  }
  @media ${media.md} {
    max-width: 850px;
  }
  @media ${media.xl} {
    max-width: 1000px;
  }
`
const About = () => {
  const el = useRef()
  const tl = useRef()
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: el.current,
            // start: '-400px top',
            start: '-200',
            markers: false,
            toggleActions: 'play none none none',
          },
        })
        .to('.about', {
          opacity: 1,
          y: 0,
        })
    }, el)
  }, [])
  return (
    <>
      <Anchor id="about-me" />
      <AboutStyles ref={el}>
        {/* <MaxWidth maxWidth="1100"> */}
        <MaxWidth>
          <div className="about">
            <div className="text">
              <h2>About me</h2>
              <p>
                Hi, my name is Nick and I'm a self-taught Front-end Developer
                and UX/UI Designer based in London and Surrey. My interest in
                web development started around 2016, hacking together websites
                using HTML and CSS. 
              </p>
              <p>
                Fast-forward to today and I've had the privilege of working for
                a diverse array of clientele across many different sectors. I'm
                currently working at{' '}
                <a
                  href="http://www.dewynters.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Dewynters
                </a>{' '}
                creating exceptional digital experiences for the West End within
                a team of talented developers.
              </p>
              <p>
                I'm open to new freelancing opportunities so please feel free to
                drop me an{' '}
                <a href="mailto:contact@nick-east.com?subject=Hi Nick, I'd like to work with you 😃">
                  email
                </a>
                .
              </p>
              <p>
                Here are a few technologies I&rsquo;ve been working with
                recently:
              </p>
              <ul>
                <li>JavaScript (ES6+)</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>Astro</li>
                <li>Tailwind</li>
              </ul>
            </div>
            <div className="image">
              <StaticImage
                src="../../../images/about-me/henri-cropped.jpeg"
                alt=""
              />
              <div className="border" />
            </div>
          </div>
        </MaxWidth>
      </AboutStyles>
    </>
  )
}

export default About
