import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { media } from 'utils/Media'

const ButtonStyles = styled.button`
  border-radius: var(--borderRadius);
  border: none;
  background: var(--main);
  cursor: pointer;
  padding: 0.85rem 2rem;
  transition: var(--transition);
  border: solid 2px var(--main);
  span {
    color: var(--black);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: var(--transition);
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
const StyledButton = ({
  className,
  text,
  external,
  internal,
  href,
  to,
  ...props
}) => {
  if (external) {
    return (
      <ButtonStyles className={className}>
        <a href={href} target="_blank" rel="noreferrer">
          <span>{text}</span>
        </a>
      </ButtonStyles>
    )
  }
  if (internal) {
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
