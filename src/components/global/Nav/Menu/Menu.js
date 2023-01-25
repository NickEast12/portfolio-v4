import React, { useEffect, useRef } from 'react'
import PropTypes from "prop-types"
import styled from 'styled-components'

import { gsap } from 'utils/gsap'
import { media } from 'utils/media'
import { PageNavigation } from 'components/shared/TextBlocks'

const MenuStyles = styled.nav`
  width: 100%;
  height: 100vh;
  position: absolute;
  inset: 0;
  opacity: 0;
  background: rgba(45, 55, 55, 0.85);
  backdrop-filter: blur(24px);
  visibility: hidden;
  section {
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: var(--auto);
    ul {
      list-style: none;
      display: flex;
      gap: 1rem;
      flex-direction: column;
      align-items: flex-end;
      li {
        opacity: 0;
        transform: translateX(100%);
        font-weight: 800;
        font-size: 1.35rem;
        visibility: hidden;
        button {
          border: solid 2px var(--yellow);
          border-radius: 0px !important;
          padding: 0.5rem 1rem;
          background: var(--yellow);
          span {
            font-family: var(--Gotham);
            font-weight: 800;
            font-size: 1.35rem;
            text-transform: uppercase;
            color: var(--darkGrey);
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
  }
  @media ${media.md} {
    display: none;
  }
`
const Menu = ({ navOpen, setNavOpen, setOpen }) => {
  const menuRef = useRef()
  const q = gsap.utils.selector(menuRef)

  useEffect(() => {
    menuRef.current = gsap
      .timeline({ duration: 0.2, ease: 'power1.out', stagger: 0.2 })
      .to(menuRef.current, { visibility: 'visible', opacity: 1 })
      .to(q('ul li'), {
        opacity: 1,
        x: 0,
        visibility: 'visible',
        stagger: 0.15,
      })

    return () => {
      menuRef.current?.kill()
    }
  }, [])
  useEffect(() => {
    if (!navOpen) {
      menuRef.current.reverse()
    } else {
      menuRef.current.play()
    }
  }, [navOpen])
  return (
    <MenuStyles ref={menuRef}>
      <section>
        <PageNavigation setOpen={setOpen} />
      </section>
    </MenuStyles>
  )
}

Menu.propTypes = {
  navOpen: PropTypes.bool,
  setNavOpen: PropTypes.func,
  setOpen: PropTypes.func,
}

export default Menu