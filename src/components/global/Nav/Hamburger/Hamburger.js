import React, { useEffect, useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { gsap } from 'gsap'

import { media } from 'utils/Media'

import Logo from 'svgs/logo-flat.svg'
import JustLogo from 'svgs/just-logo.svg'

const HamburgerStyles = styled.button`
  background-color: transparent !important;
  border: none;
  cursor: pointer;
  position: relative;
  z-index: 9999999;
  section {
    a {
      display: flex;
      background: var(--white);
      border-radius: 50px;
      padding: 7.5px;
      align-items: center;
      justify-content: center;
      svg {
        width: 40px;
      }
    }
  }
`
const Hamburger = ({ navOpen, setNavOpen }) => {
  const target = useRef()
  const tl = useRef()

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline().to('.logo', {
        rotate: '+720',
        duration: 1,
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
    <HamburgerStyles
      tabIndex={0}
      navOpen={navOpen}
      onClick={() => setNavOpen(!navOpen)}
      onKeyDown={() => setNavOpen(!navOpen)}
    >
      <section ref={target}>
        <a>
          <span className="sr-only">Open menu</span>
          <JustLogo className="logo" />
        </a>
      </section>
    </HamburgerStyles>
  )
}

export default Hamburger
