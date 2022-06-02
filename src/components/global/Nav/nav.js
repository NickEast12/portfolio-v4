import { Link } from 'gatsby'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Logo from 'svgs/logo-row.svg'
import { MaxWidth } from '../MaxWidth'
import { StyledButton } from '../StyledButton'

const NavStyles = styled.nav`
  width: 100%;
  position: fixed;
  z-index: 999;
  .nav-background {
    transition: all 0.25s ease-in-out;
  }
  .nav-wrapper {
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      transition: all 0.25s ease-in-out;
      svg {
        cursor: pointer;
        transition: all 0.25s ease-in-out;
        width: 150px;
        fill: white;
        &:hover,
        &:active {
          fill: var(--main);
        }
      }
    }
  }
`
const Nav = () => {
  const [scroll, setScroll] = useState(false)
  const [open, setOpen] = useState(false)
  const changeScroll = () => {
    if (window.scrollY >= 20 || window.pageYOffset >= 20) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }
  window.addEventListener('scroll', changeScroll)
  // useEffect(() => {
  //   if (open) {
  //     document.body.style.overflow = 'hidden'
  //   }
  //   if (!open) {
  //     document.body.style.overflow = 'auto'
  //   }
  // }, [open])

  return (
    <NavStyles>
      <div
        className={
          scroll ? 'nav-background nav-background-active' : 'nav-background'
        }
      >
        <MaxWidth maxWidth="1440">
          <section className="nav-wrapper">
            <div className="logo">
              <Link to="/">
                <Logo />
              </Link>
            </div>
            <div className="nav">
        <ul>
          <li>
            
          </li>
        </ul>
            <div className="button">
              <StyledButton text="CONTACT" />
            </div>
            </div>
          </section>
        </MaxWidth>
      </div>
    </NavStyles>
  )
}

export default Nav
