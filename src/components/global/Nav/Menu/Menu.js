import React, { useEffect, useLayoutEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { gsap } from 'utils/gsap'
import { media } from 'utils/Media'

const MenuStyles = styled.nav`
  width: 70%;
  height: 60vh;
  max-width: 400px;
  max-height: 500px;
  position: absolute;
  top: 0;
  left: 1rem;
  /* background: rgba(45, 55, 55, 0.85); */
  /* background: transparent; */
  /* backdrop-filter: blur(24px); */
  visibility: hidden;
  border-radius: 7.5px;
  section {
    position: relative;
    z-index: 99;
    width: 80%;
    margin: 0 auto;
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
        font-size: 1.85rem;
        color: black;
        span {
          display: block;
          opacity: 0;
          transform: translateY(100%);
          visibility: hidden;
        }
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
`
const Menu = ({ navOpen, setNavOpen, setOpen }) => {
  const target = useRef()
  const tl = useRef()

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
          duration: 0.5,
          clipPath: 'circle(100% at 10% 40%)',
        })
        .to('ul li span', {
          opacity: 1,
          y: 0,
          visibility: 'visible',
          stagger: {
            // from: 'random',
            // axis: 'null',
            each: 0.15,
          },
        })
    }, target)
  }, [])

  useEffect(() => {
    //* Need to find a better way to handle tl speed and direction
    if (!navOpen) {
      tl.current.timeScale(1.15)
      tl.current.reverse()
    } else {
      tl.current.timeScale(1)
      tl.current.play()
    }
  }, [navOpen])
  return (
    <MenuStyles ref={target}>
      <section>
        <ul>
          <li>
            <a href="/">
              <span>About me</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span>Recent work</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span>Articles</span>
            </a>
          </li>
          <li>
            <a href="/">
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
