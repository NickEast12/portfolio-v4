import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { media } from 'utils/Media'

const ButtonStyles = styled.button`
  pointer-events: auto !important;
  border-radius: var(--borderRadius);
  border: none;
  background: var(--main);
  cursor: pointer;
  padding: 0.75rem 1.25rem;
  transition: var(--transition);
  border: solid 2px var(--main);
  span {
    color: var(--black);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: var(--transition);
  }
  @media ${media.md} {
    padding: 0.85rem 2rem;
  }
  &:hover,
  &:active {
    background: none;
    border-radius: 50px;
    span {
      color: var(--white);
    }
    /* background: #098973;
    span {
      color: var(--white);
    } */
  }
`
const StyledButton = props => {
  console.log(props)
  const { className, text, external, internal } = props
  if (external) {
    const { href } = props
    return (
      <ButtonStyles className={className}>
        <a href={href} target="_blank" rel="noreferrer">
          <span>{text}</span>
        </a>
      </ButtonStyles>
    )
  }
  if (internal) {
    const { to } = props
    return (
      <ButtonStyles className={className}>
        <Link to={to}>
          <span>{text}</span>
        </Link>
      </ButtonStyles>
    )
  }

  return (
    <ButtonStyles className={className}>
      <a {...props}>
        <span>{text}</span>
      </a>
    </ButtonStyles>
  )
}

StyledButton.propTypes = {
  download: PropTypes.string,
  external: PropTypes.bool,
  href: PropTypes.string,
  internal: PropTypes.bool,
  text: PropTypes.string,
  to: PropTypes.string,
}

export default StyledButton
