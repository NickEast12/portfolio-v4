import React from 'react'
import styled from 'styled-components'

import { StaticImage } from 'gatsby-plugin-image'
import { media } from 'utils/Media'
import { MaxWidth } from 'components/global'

const AboutStyles = styled.section`
  width: 100%;
  min-height: 100vh;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  .about {
    padding: 3rem 0;
    .text {
      h2 {
        margin-bottom: 1rem;
        font-size: 2.8rem;
        text-decoration: underline var(--main);
      }
      p {
        margin-bottom: 1rem;
        a {
          color: var(--main);
          text-decoration: underline;
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
      width: 90%;
      margin: 2rem auto 0 auto;
      position: relative;
      max-width: 450px;
      max-height: 450px;
      cursor: pointer;
      transition: var(--transition);
      &:before {
        top: 0px;
        left: 0px;
        background-color: var(--main);
        /* mix-blend-mode: screen; */
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 7.5px;
        transition: var(--transition);
      }
      .gatsby-image-wrapper {
        position: relative;
        border-radius: 7.5px;
        mix-blend-mode: multiply;
        filter: grayscale(100%) contrast(1);
        transition: var(--transition);
        opacity: 1;
      }
      .border {
        border: 2px solid var(--main);
        top: 20px;
        left: 20px;
        z-index: -5;
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 7.5px;
        transition: var(--transition);
        /* opacity: 1; */
      }
      @media ${media.md} {
        margin: 0 auto;
      }
      &:hover,
      &:active {
        .gatsby-image-wrapper {
          filter: grayscale(0%);
          mix-blend-mode: unset;
        }
        &:after {
          mix-blend-mode: unset;
        }
        .border {
          top: 15px;
          left: 15px;
        }
      }
    }
    @media ${media.md} {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
`
const About = () => {
  const i = true
  return (
    <AboutStyles>
      <MaxWidth maxWidth="1100">
        <div className="about">
          <div className="text">
            <h2>About me</h2>
            <p>
              Hi, my name is Nick and I'm a self taught Front-end Developer and
              UX/UI Designer based in London and Surrey. My interest in web
              development started around 2016, as a hobby but developed into not
              only a passion but a
            </p>
            <p>
              Fast-forward to today and I've had the privilege of working for a
              diverse array of clientele across many different sectors. I'm
              currently working at{' '}
              <a
                href="http://www.dewynters.com"
                target="_blank"
                rel="noreferrer"
              >
                Dewynters
              </a>{' '}
              creating exceptional digital experiences for the West End within a
              team of talented developers.
              <br />
              I'm open to new freelancing opportunities so please feel free to
              drop me an{' '}
              <a href="mailto:contact@nick-east.com?subject=Hi Nick, I'd like to work with you 😃">
                email
              </a>
              .
            </p>
            <p>
              Here are a few technologies I&rsquo;ve been working with recently:
            </p>
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Gatsby</li>
              <li>Node.js</li>
              <li>Tailwind</li>
              <li>Netlify</li>
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
  )
}

export default About
