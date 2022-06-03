import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { gsap } from 'gsap'

import { media } from 'utils/Media'
import { StaticImage } from 'gatsby-plugin-image'
// import Logo from 'images/logos/logo.png'

const HamburgerStyles = styled.button`
  background-color: transparent !important;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  section {
    width: 28px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
    div {
      transform-origin: 6px;
      width: 100%;
      height: 2px;
      background: var(--white);
      /* &:nth-child(2) {
        width: 70%;
        margin: 0 auto;
      }
      &:nth-child(3) {
        width: 50%;
        margin: 0 auto;
      } */
    }
  }
  @media ${media.md} {
    display: none;
  }
`

const Hamburger = ({ open, setOpen }) => {
  const hamburger = useRef()
  const q = gsap.utils.selector(hamburger)
  const topBun = useRef()
  const middleBun = useRef()
  const bottomBun = useRef()
  useEffect(() => {
    topBun.current = gsap
      .timeline({ duration: 0.2, ease: 'power1.out', stagger: 0.5 })
      .to(q('.top'), {
        width: '75%',
        translateY: 7,
        rotate: 45,
        // duration: 0.25,
      })
    middleBun.current = gsap
      .timeline({ duration: 0.2, ease: 'power1.out', stagger: 0.5 })
      .to(q('.middle'), {
        opacity: 0,
        x: -150,
        // duration: 0.25,
      })
    bottomBun.current = gsap
      .timeline({ duration: 0.2, ease: 'power1.out', stagger: 0.5 })
      .to(q('.bottom'), {
        width: '75%',
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
    if (!open) {
      topBun.current.reverse()
      middleBun.current.reverse()
      bottomBun.current.reverse()
    } else {
      topBun.current.play()
      middleBun.current.play()
      bottomBun.current.play()
    }
  }, [open])

  return (
    <HamburgerStyles
      tabIndex={0}
      ref={hamburger}
      open={open}
      onClick={() => setOpen(!open)}
      onKeyDown={() => setOpen(!open)}
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
