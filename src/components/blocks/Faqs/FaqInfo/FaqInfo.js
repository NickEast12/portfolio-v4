import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'

import ArrowIcon from 'svgs/down-arrow.svg'
import { media } from 'utils/Media'

const FaqInfoStyles = styled.aside`
  width: 100%;
  height: 10rem;
  p {
    strong {
      font-size: 1.2rem;
    }
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      text-decoration: underline;
      transition: color 0.25s ease-in-out;
      will-change: color;
      cursor: pointer;
      &:hover,
      &:active {
        color: var(--red);
      }
      a {
        font-size: 1.1rem;
        font-weight: 400;
      }
    }
  }
  .select {
    margin-top: 2rem;
    position: relative;
    z-index: 99;
    .box {
      border: solid 2px #000;
      padding: 0.5rem 1rem;
      display: flex;
      justify-content: space-between;
      > p {
        margin: 0;
        font-weight: 700;
      }
      svg {
        fill: #000;
        width: 15px;
        height: 15px;
      }
    }
    &__dropdown {
      opacity: 0;
      background: #000;
      position: absolute;
      bottom: -5.15rem;
      left: 0;
      width: 100%;
      padding: 0.5rem 0.85rem;
      visibility: hidden;
      p {
        color: #fff;
        text-transform: uppercase;
        font-weight: 700;
      }
      .active {
        color: var(--red);
      }
    }
  }
  .desktop__select {
    display: none;
    @media ${media.md} {
      display: block;
      margin-bottom: 2rem;
      p {
        margin-bottom: 0;
        color: #000;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 1.2rem;
        transition: color 0.25s ease-in-out;
        will-change: color;
        cursor: pointer;
        &:hover,
        &:active {
          color: var(--red);
        }
      }
      .active {
        color: var(--red);
      }
    }
  }
  @media ${media.md} {
    position: sticky;
    top: 7.5rem;
    left: 0;
    .select {
      display: none;
    }
  }
`
const FaqInfo = ({ data, activeTab, setActiveTab }) => {
  const [category, setCategory] = useState(data[0])
  const [open, setOpen] = useState(false)

  const toggleActive = i => {
    setCategory(i)
    setActiveTab(i)
    setOpen(false)
  }

  //* animations
  const menuRef = useRef()
  const q = gsap.utils.selector(menuRef)
  useEffect(() => {
    menuRef.current = gsap
      .timeline({ ease: 'power1.out' })

      .to(q('.select__dropdown'), {
        opacity: 1,
        visibility: 'visible',
      })
      .to(
        q('svg'),
        {
          rotation: 180,
        },
        '<'
      )

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
    <FaqInfoStyles>
      <div className="desktop__select">
        {data.map((single, i) => (
          <p
            key={i}
            tabIndex={i}
            onClick={() => toggleActive(single)}
            onKeyDown={() => toggleActive(single)}
            className={category === single ? 'active' : ''}
          >
            {single}
          </p>
        ))}
      </div>
      <p>
        <strong>Support Emails:</strong>
      </p>
      <ul>
        <li>
          <a href="mailto:info@arkhamrises.com"> info@arkhamrises.com</a>
        </li>
        <li>
          <a href="mailto:access@arkhamrises.com"> access@arkhamrises.com</a>
        </li>
      </ul>
      <div className="select" ref={menuRef}>
        <div className="box" onClick={() => setOpen(!open)}>
          <p>{category}</p>
          <span>
            <ArrowIcon />
          </span>
        </div>
        <div className="select__dropdown">
          {data.map((single, index) => (
            <p
              role="button"
              key={index}
              tabIndex={index}
              onClick={() => toggleActive(single)}
              onKeyDown={() => toggleActive(single)}
              className={category === single ? 'active' : ''}
            >
              {single}
            </p>
          ))}
        </div>
      </div>
    </FaqInfoStyles>
  )
}

export default FaqInfo
