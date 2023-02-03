import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { window, document } from 'browser-monads'

import { media } from 'utils/Media'
import { Link } from 'gatsby'
import { StyledButton } from 'components/shared'

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
    display: flex;
    align-items: center;
    justify-content: space-between;
    .wrapper {
      display: flex;
      align-items: center;
    }
    .button {
      button {
        width: 100px;
      }
    }
  }
`
const Nav = props => {
  // const {} = props
  const [scroll, setScroll] = useState(false)
  const [open, setOpen] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  // const changeScroll = () => {
  //   if (window.scrollY >= 20 || window.pageYOffset >= 20) {
  //     setScroll(true)
  //   } else {
  //     setScroll(false)
  //   }
  // }
  // window.addEventListener('scroll', changeScroll)
  // useEffect(() => {
  //   if (navOpen) {
  //     document.body.style.overflow = 'hidden'
  //   }
  //   if (!navOpen) {
  //     document.body.style.overflow = 'auto'
  //   }
  // }, [navOpen])
  return (
    <>
      <NavStyles $noAnimation={props.$noAnimation || ''}>
        <div className={scroll ? 'background background-active' : 'background'}>
          <MaxWidth $noLazy maxWidth={1920}>
            <div className="nav">
              <div className="wrapper">
                <Hamburger navOpen={navOpen} setnavOpen={setNavOpen} />
              </div>
              <div className="button">
                <StyledButton text="CTA" />
              </div>
            </div>
          </MaxWidth>
          <Menu navOpen={navOpen} setnavOpen={setNavOpen} setOpen={setOpen} />
        </div>
      </NavStyles>
    </>
  )
}

export default Nav
