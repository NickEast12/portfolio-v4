import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { window, document } from 'browser-monads'

import { media } from 'utils/Media'
import { Link } from 'gatsby'
import { StyledButton } from 'components/shared'

import { gsap } from 'utils/gsap'
import { MaxWidth } from '../MaxWidth'
import { Hamburger } from './Hamburger'
import { Menu } from './Menu'

const NavStyles = styled.nav`
  width: 100%;
  position: fixed;
  z-index: 999;
  /* background: rgba(255, 255, 255, 0.5); */
  padding: 0.5rem 0;
  .background {
    position: relative;
  }
  .nav {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .wrapper {
      display: flex;
      align-items: center;
      position: relative;
      z-index: 99999;
    }
    .button {
    }
  }
  @media ${media.xl} {
    margin-top: 0.5rem;
  }
`
const Nav = props => {
  const [scroll, setScroll] = useState(false)
  const [open, setOpen] = useState(false)
  const [navOpen, setNavOpen] = useState(false)

  const el = useRef()
  const tl = useRef()
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline().to('.fade-down', {
        opacity: 1,
        delay: 1,
        y: 0,
        stagger: {
          each: 0.35,
        },
      })
    }, el)
  }, [])

  return (
    <>
      <NavStyles $noAnimation={props.$noAnimation || ''} ref={el}>
        <div className={scroll ? 'background background-active' : 'background'}>
          <MaxWidth $noLazy maxWidth={1920}>
            <div className="nav">
              <div className="wrapper fade-down">
                <Hamburger navOpen={navOpen} setNavOpen={setNavOpen} />
              </div>
              <section className="fade-down">
                <div className="button">
                  <a href="/#get-in-touch">
                    <StyledButton text="Get in touch" />
                  </a>
                </div>
              </section>
              <Menu
                navOpen={navOpen}
                setNavOpen={setNavOpen}
                // setOpen={setOpen}
              />
            </div>
          </MaxWidth>
        </div>
      </NavStyles>
    </>
  )
}

export default Nav
