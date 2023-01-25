import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { window, document } from 'browser-monads'


import { media } from 'utils/media'
import { Link } from 'gatsby'
import { MaxWidth } from '../MaxWidth'

import { PageNavigation } from 'components/shared/TextBlocks'
import { Hamburger } from './Hamburger'
import { Menu } from './Menu'


const NavStyles = styled.nav`
  width: 100%;
  position: fixed;
  z-index: 999;
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    width: 100%;
    position: relative;
    z-index: 999;
    ul {
      display: none;
      @media ${media.md} {
        list-style: none;
        display: flex;
        gap: 0.5rem;
        align-items: center;
        li {
          font-weight: 700;
          font-size: 0.8rem;
          button {
            cursor: pointer;
            border: solid 2px var(--yellow);
            border-radius: 0px !important;
            padding: 0.5rem 1rem;
            background: var(--yellow);
            span {
              transition: var(--transition);
              font-family: var(--Gotham);
              font-weight: 700;
              font-size: 0.8rem;
              text-transform: uppercase;
              color: var(--darkGrey);
            }
            transition: var(--transition);
            &:hover,
            &:active {
              background: var(--blue);
              border: solid 2px var(--blue);
              span {
                color: var(--white);
              }
            }
          }
          &:nth-child(1) {
            &:hover,
            &:active {
              color: var(--yellow);
            }
          }
          &:nth-child(2) {
            &:hover,
            &:active {
              color: var(--blue);
            }
          }
          &:nth-child(3) {
            &:hover,
            &:active {
              color: var(--pink);
            }
          }
          &:nth-child(4) {
            &:hover,
            &:active {
              color: var(--teal);
            }
          }
        }
      }
      @media ${media.lg} {
        gap: 1rem;
        li {
          font-size: 1rem;
          button {
            span {
              font-size: 1rem;
            }
          }
        }
      }
      @media ${media.xl} {
        gap: 1.3rem;
        li {
          font-size: 1.1rem;
          button {
            span {
              font-size: 1.1rem;
            }
          }
        }
      }
    }
    .logo {
      svg {
        transition: var(--transition);
        fill: var(--white);
        width: 50px;
        @media ${media.s} {
          width: 75px;
        }
      }
    }
  }
  .background {
    padding: 1rem 0;
    transition: var(--transition);
    .nav {
      .logo {
        svg {
          opacity: 0;
        }
      }
    }
    &-active {
      /* background: rgba(45, 55, 55, 1); */
      /* backdrop-filter: blur(24px); */
      padding: 0.5rem 0;
      background-color: var(--grey);
      box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
      .nav {
        .logo {
          svg {
            opacity: 1;
          }
        }
        //* hamburger color change
        /* .top, .middle, .bottom {
          background-color: white!important;
        } */
      }
    }
  }
  ${props =>
    props.$noAnimation &&
    css`
      .background {
        padding: 0.5rem 0;
        .nav {
          .logo {
            svg {
              opacity: 1 !important;
            }
          }
        }
      }
    `}
`
const Nav = ({ $noAnimation }) => {
  const [scroll, setScroll] = useState(false)
  const [open, setOpen] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  const changeScroll = () => {
    if (window.scrollY >= 20 || window.pageYOffset >= 20) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }
  window.addEventListener('scroll', changeScroll)
  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = 'hidden'
    }
    if (!navOpen) {
      document.body.style.overflow = 'auto'
    }
  }, [navOpen])
  return (
    <>
      <NavStyles $noAnimation={$noAnimation || ''}>
        <div className={scroll ? 'background background-active' : 'background'}>
          <MaxWidth $noLazy>
            <div className="nav">
              <div className="logo">
                <Link to="/">
                  <p>logo</p>
                </Link>
              </div>
              <PageNavigation setOpen={setOpen} />
              <Hamburger navOpen={navOpen} setnavOpen={setNavOpen} />
            </div>
          </MaxWidth>
          <Menu navOpen={navOpen} setnavOpen={setNavOpen} setOpen={setOpen} />
        </div>
      </NavStyles>
    </>
  )
}

export default Nav