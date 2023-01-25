import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { gsap } from 'gsap'

import { media } from 'utils/media'
import { StaticImage } from 'gatsby-plugin-image'
// import Logo from 'images/logos/logo.png'

const HamburgerStyles = styled.button`
  width: 30px;
  margin: 0 0 0 auto;
  background-color: transparent !important;
  border: none;
  cursor: pointer;
  section {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
    div {
      transform-origin: 10.5px;
      width: 100%;
      height: 2px;
      background: var(--black);
      /* &:nth-child(2) {
        width: 80%;
        margin: 0 auto 0 0;
      }
      &:nth-child(3) {
        width: 50%;
        margin: 0 auto 0 0;
      } */
    }
  }
  @media ${media.md} {
    display: none !important;
  }
`
const Hamburger = ({ navOpen, setnavOpen }) => {
  const hamburger = useRef()
  const q = gsap.utils.selector(hamburger)
  const topBun = useRef()
  const middleBun = useRef()
  const bottomBun = useRef()
  useEffect(() => {
    topBun.current = gsap
      .timeline({ duration: 0.2, ease: 'power1.out', stagger: 0.5 })
      .to(q('.top'), {
        translateY: 7,
        rotate: 45,
        // duration: 0.25,
      })
    middleBun.current = gsap
      .timeline({ duration: 0.2, ease: 'power1.out', stagger: 0.5 })
      .to(q('.middle'), {
        opacity: 0,
        x: 150,
        // duration: 0.25,
      })
    bottomBun.current = gsap
      .timeline({ duration: 0.2, ease: 'power1.out', stagger: 0.5 })
      .to(q('.bottom'), {
        margin: 0,
        translateY: -7,
        rotate: -45,
        // duration: 0.25,
      })
    return () => {
      topBun.current.kill()
      middleBun.current.kill()
      bottomBun.current.kill()
    }
  }, [])
  useEffect(() => {
    if (!navOpen) {
      topBun.current.reverse()
      middleBun.current.reverse()
      bottomBun.current.reverse()
    } else {
      topBun.current.play()
      middleBun.current.play()
      bottomBun.current.play()
    }
  }, [navOpen])

  return (
    <HamburgerStyles
      tabIndex={0}
      ref={hamburger}
      navOpen={navOpen}
      onClick={() => setnavOpen(!navOpen)}
      onKeyDown={() => setnavOpen(!navOpen)}
    >
      <section>
        <div className="top" />
        <div className="middle" />
        <div className="bottom" />
      </section>
    </HamburgerStyles>
  )
}

export default Hamburger