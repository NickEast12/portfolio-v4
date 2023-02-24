import React, { useEffect, useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'

import { gsap } from 'utils/gsap'
import { media } from 'utils/Media'

const MenuStyles = styled.nav`
  width: 80%;
  height: 60vh;
  max-width: 300px;
  max-height: 380px;
  position: absolute;
  top: -2.5px;
  left: -2.5px;
  /* background: rgba(45, 55, 55, 0.85); */
  /* background: transparent; */
  /* backdrop-filter: blur(24px); */
  visibility: hidden;
  border-radius: 7.5px;
  overflow: hidden;
  section {
    position: relative;
    z-index: 99;
    width: 80%;
    margin: 0 auto;
    padding-top: 1.5rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    ul {
      list-style: none;
      display: flex;
      gap: 1rem;
      flex-direction: column;
      overflow: hidden;
      li {
        overflow: hidden;
        font-weight: 800;
        font-size: 1.25rem;
        color: var(--background);
        span {
          display: block;
          opacity: 0;
          transform: translateY(100%);
          visibility: hidden;
        }
        &:hover,
        &:active {
          text-decoration: underline var(--main) 3px;
        }
        @media ${media.s} {
          font-size: 1.8rem;
        }
        @media ${media.ls} {
          font-size: 2rem;
        }
      }
    }
  }
  .lights {
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    z-index: 999;
    overflow-x: hidden;
    div {
      opacity: 0;
      transform: translateX(100px);
      width: 20px;
      height: 20px;
      border-radius: 50px;
      content: '';
      &:nth-child(1) {
        background-color: #8efdb0;
      }
      &:nth-child(2) {
        background-color: #fde58e;
      }
      &:nth-child(3) {
        background-color: #fd8e8e;
      }
    }
  }
  .morph {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 100%;
    background: white;
    /* transition: clip-path 20ms ease-in-out; */
    clip-path: circle(0px at 11.5% 4.5%);
    /* clip-path: circle(25px at 40px 40px); */
    border-radius: 7.5px;
    /* visibility: hidden; */
  }
  @media ${media.md} {
    /* left: 2rem; */
    height: 400px;
    .morph {
      width: 105%;
      height: 105%;
      clip-path: circle(0px at 5% 5%);
    }
  }
`
const Menu = ({ navOpen, setNavOpen, setOpen }) => {
  const target = useRef()
  const tl = useRef()
  console.log(setNavOpen)
  const handleClick = () => {
    if (navOpen) {
      setNavOpen(false)
    }
  }
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .to(target.current, {
          visibility: 'visible',
        })
        .to('.morph', {
          visibility: 'visible',
          opacity: 1,
          // clipPath: 'circle(100% at 10% 40%)',
          clipPath: 'circle(100% at 50% 50%)',
        })
        .to('.lights div', {
          opacity: 1,
          x: 0,
          stagger: {
            each: 0.2,
          },
        })
        .to(
          'ul li span',
          {
            opacity: 1,
            y: 0,
            visibility: 'visible',
            stagger: {
              // axis: 'null',
              each: 0.2,
            },
          },
          '<'
        )
    }, target)
  }, [])

  useEffect(() => {
    //* Need to find a better way to handle tl speed and direction
    if (!navOpen) {
      tl.current.timeScale(1.5).reverse()
      // tl.current.reverse()
    } else {
      tl.current.timeScale(0.85).play()
      // tl.current.play()
    }
  }, [navOpen])
  return (
    <MenuStyles ref={target}>
      <div className="lights">
        <div />
        <div />
        <div />
      </div>
      <section>
        <ul onClick={() => handleClick()}>
          <li>
            <a href="/#about-me">
              <span>About me</span>
            </a>
          </li>
          <li>
            <a href="/#recent-work">
              <span>Recent work</span>
            </a>
          </li>
          <li>
            <a href="/#articles">
              <span>Articles</span>
            </a>
          </li>
          <li>
            <a href="/#get-in-touch">
              <span>Get in touch</span>
            </a>
          </li>
        </ul>
      </section>
      <div className="morph" />
    </MenuStyles>
  )
}

export default Menu
