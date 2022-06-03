import { Link } from 'gatsby'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Logo from 'svgs/logo-row.svg'
import { media } from 'utils/Media'
import { NavBlock } from 'components/Blocks/Nav'
import { Hamburger } from '../Hamburger'
import { MaxWidth } from '../MaxWidth'
import { Menu } from '../Menu'
import { StyledButton } from '../StyledButton'

const NavStyles = styled.nav`
  width: 100%;
  position: fixed;
  z-index: 9999;
  .nav-background {
    transition: all 0.25s ease-in-out;
    padding: 1.25rem 0;
  }

  .nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &__logo {
      display: flex;
      /* justify-content: flex-start; */
      align-items: center;
      transition: all 0.25s ease-in-out;

      @media ${media.md} {
        padding-left: 0;
      }
      a {
        width: 100%;
        padding-left: 1rem;
        svg {
          /* max-width: 120px; */
          cursor: pointer;
          transition: all 0.25s ease-in-out;
          width: 140px;
          fill: white;
          &:hover,
          &:active {
            fill: var(--main);
          }
        }
      }
    }
    &__links {
      ul {
        li {
          display: none;
        }
        @media ${media.s} {
          li {
            &:nth-child(5) {
              display: block;
            }
          }
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
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    }
    if (!open) {
      document.body.style.overflow = 'auto'
    }
  }, [open])

  return (
    <>
      <NavStyles>
        <div
          className={
            scroll ? 'nav-background nav-background-active' : 'nav-background'
          }
        >
          <MaxWidth maxWidth="1600">
            <div className="nav">
              <section className="nav__logo">
                <Hamburger open={open} setOpen={setOpen} />
                <div className="logo">
                  <Link to="/">
                    <Logo />
                  </Link>
                </div>
              </section>
              <div className="nav__links">
                <NavBlock $smallerBtn />
              </div>
            </div>
          </MaxWidth>
        </div>
      </NavStyles>
      <Menu open={open} setOpen={setOpen} />
    </>
  )
}

export default Nav
