import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import { gsap } from 'gsap'
import styled from 'styled-components'

import { NavBlock } from 'components/Blocks/Nav'
import { StyledButton } from '../StyledButton'

const MenuStyles = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  width: 100%;
  height: 0;
  background-color: var(--black);

  section {
    width: 90%;
    height: 100%;
    margin: var(--auto);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    ul {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      list-style: none;
      margin: 0;
      padding: 0;
      li {
        opacity: 0;
        transform: translateY(20px);
        text-transform: uppercase;
        font-size: 1.5rem;
        letter-spacing: 1.2px;
        font-weight: 700;
        visibility: hidden;
        color: var(--white);
        &:hover,
        &:active {
          color: var(--main);
          text-decoration: underline 2px solid;
        }
      }
    }
  }
`
const Menu = ({ open, setOpen }) => {
  const menuRef = useRef()
  const q = gsap.utils.selector(menuRef)

  useEffect(() => {
    menuRef.current = gsap
      .timeline({ duration: 0.05, ease: 'power1.out', stagger: 0.1 })
      .to(menuRef.current, { height: '100vh' })
      .to(q('ul li'), {
        opacity: 1,
        y: 0,
        visibility: 'visible',
        stagger: 0.15,
      })
      .to(q('div div a'), {
        opacity: 1,
        y: 0,
        visibility: 'visible',
        stagger: 0.1,
      })

    return () => {
      menuRef.current?.kill()
    }
  }, [])
  useEffect(() => {
    if (!open) {
      menuRef.current.reverse()
    } else {
      menuRef.current.play()
    }
  }, [open])
  return (
    <MenuStyles ref={menuRef}>
      <section>
        <NavBlock $noButton />
        {/* <Socials $nav /> */}
      </section>
    </MenuStyles>
  )
}

export default Menu
