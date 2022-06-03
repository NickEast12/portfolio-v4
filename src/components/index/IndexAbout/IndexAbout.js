import { MaxWidth } from 'components/global'
import React from 'react'
import styled from 'styled-components'

import DesignIcon from 'svgs/design.svg'
import CodeIcon from 'svgs/code.svg'
import ProblemSolverIcon from 'svgs/code-error.svg'
import { media } from 'utils/Media'

const IndexAboutStyles = styled.section`
  width: 100%;
  height: 100vh;
  background: var(--black);
  padding: 2rem 0;
  color: var(--white);
  .left {
    h3 {
      background: var(--main);
      /* border-radius: 4.5px; */
      padding: 0.5rem;
      width: 150px;
      color: var(--black);
      text-transform: uppercase;
      font-size: 1.2rem;
      text-align: center;
    }
    .title {
      width: 100%;
      position: relative;
      display: flex;
      align-items: center;
      gap: 1rem;

      h2 {
        color: var(--main);
      }
      hr {
        width: 30%;
        border: none;
        background: var(--main);
        height: 1px;
        content: '';
        @media ${media.lg} {
          width: 40%;
        }
        @media ${media.xl} {
          width: 25%;
        }
      }
    }
    p {
      margin-top: 1rem;
      color: #eae6e5;
      a {
        color: var(--main);
        text-decoration: solid 1px var(--main);
        &:hover,
        &:active {
          color: var(--secondary);
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
        color: #eae6e5;
        margin-bottom: 10px;
        padding-left: 20px;
        font-size: 0.95rem;
        @media ${media.md} {
          font-size: 1rem;
        }
        &::before {
          content: '▹';
          position: absolute;
          left: 0;
          top: 5px;
          color: var(--main);
          font-size: 25px;
          line-height: 12px;
        }
      }
    }
  }
  .right {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .box {
      background-color: #fff;
      padding: 1rem;
      box-shadow: 0px 10px -14px 14px #fff;
      width: 100%;
      text-align: center;
      color: var(--black);
      max-width: 400px;
      margin: 0 auto;
      svg {
        width: 80px;
      }
      h3 {
        font-size: 1.25rem;
        font-weight: 700;
        margin: 0.45rem 0;
      }
    }
  }
  @media ${media.sm} {
    .right {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      .box {
        grid-column: span 2;
        &:nth-last-child(1):nth-child(odd) {
          grid-column: 2 / span 2;
        }
      }
    }
  }
  @media ${media.md} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    .right {
      display: flex;
      flex-direction: column;
    }
  }
  @media ${media.lg} {
    padding: 4rem 0;
    grid-template-columns: 45% 1fr;
    width: 90%;
    margin: var(--auto);
  }
  @media ${media.xxl} {
    .right {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(2, 280px);
      .box {
        grid-column: span 2;
        &:nth-last-child(1):nth-child(odd) {
          grid-column: 2 / span 2;
          max-height: 250px;
        }
      }
    }
  }
`
const IndexAbout = ({ data }) => {
  const i = true
  return (
    <MaxWidth>
      <IndexAboutStyles>
        <div className="left">
          {/* <h3>ABOUT ME</h3> */}
          <div className="title">
            <h2>About me</h2>
            <hr />
          </div>
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
            <a href="http://www.dewynters.com" target="_blank" rel="noreferrer">
              Dewynters
            </a>{' '}
            creating exceptional digital experiences for the West End within a
            team of talented developers.
          </p>
          <p>
            I'm open to new freelancing opportunities so please feel free to
            drop me an{' '}
            <a href="mailto:contact@nick-east.com?subject=Freelance Enquiry">
              email
            </a>
            .
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul>
            {data.map((item, i) => (
              <li key={i}>{item.tech}</li>
            ))}
          </ul>
        </div>
        <div className="right">
          <div className="box">
            <CodeIcon />
            <h3>Front-end Developer</h3>
            <p>
              Bringing ideas to life using mordern technologies to build
              lightning-fast, responsive websites and apps ⚡
            </p>
          </div>
          <div className="box">
            <DesignIcon />
            <h3>UX/UI Designer</h3>
            <p>
              Writing clean, modern design trends and patterns using UX
              techniques that deliver a punch 🤜
            </p>
          </div>
          <div className="box">
            <ProblemSolverIcon />
            <h3>Problem solver</h3>
            <p id="experience">
              Identifying and finding unique, creative ways to solve problems
              and crush bugs 🐛
            </p>
          </div>
        </div>
      </IndexAboutStyles>
    </MaxWidth>
  )
}

export default IndexAbout
