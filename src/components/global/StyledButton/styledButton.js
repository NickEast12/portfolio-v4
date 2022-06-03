import PropTypes from 'prop-types'
import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

const StyledLink = styled(Link)`
  display: inline-block;
  border: solid 2px var(--main);
  background: var(--main);
  padding: 0.5rem 0.95rem;
  transition: var(--transition);
  cursor: pointer;
  span {
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: -0.05px;
    color: var(--black);
    text-transform: uppercase;
  }
  &:active,
  &:hover {
    background: var(--white);
    border: solid 2px var(--white);
  }
  ${props =>
    props.$smallerBtn &&
    css`
      padding: 0.3rem 0.45rem;
      span {
        font-size: 0.85rem;
      }
    `}
`
const StyledOutboundLink = styled.a`
  cursor: pointer;
  display: inline-block;
  border: solid 2px var(--main);
  background: var(--main);
  padding: 0.5rem 0.95rem;
  transition: var(--transition);
  font-size: 0.9rem;
  span {
    font-size: 1rem;
    font-weight: 800;
    letter-spacing: -0.05px;
    color: var(--black);
    text-transform: uppercase;
  }
  &:active,
  &:hover {
    background: var(--white);
    border: solid 2px var(--white);
  }
`
const StyledButton = props => {
  const { text, outbound, to } = props
  return (
    <>
      {outbound ? (
        <StyledOutboundLink {...props} href={outbound}>
          <span>{text}</span>
        </StyledOutboundLink>
      ) : (
        <StyledLink to={to || '/'} {...props}>
          <span>{text}</span>
        </StyledLink>
      )}
    </>
  )
}

export default StyledButton
