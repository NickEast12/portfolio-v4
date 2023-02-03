import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { media } from 'utils/Media'

const ButtonStyles = styled.button`
  width: 200px;
  background: var(--main);
  border-radius: 0;
  border: solid 2px var(--main);
  padding: 0.5rem;
  border-radius: 5px;
  span {
    color: var(--black);
  }
`
const StyledButton = ({ text, external, internal, href, to, ...props }) => {
  if (external) {
    return (
      <ButtonStyles>
        <a href={href} target="_blank" rel="noreferrer">
          <span>{text}</span>
        </a>
      </ButtonStyles>
    )
  }
  if (internal) {
    return (
      <ButtonStyles>
        <Link to={to}>
          <span>{text}</span>
        </Link>
      </ButtonStyles>
    )
  }
  return (
    <ButtonStyles>
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
