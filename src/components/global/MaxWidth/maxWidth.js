import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
// import LazyLoad from 'react-lazyload'

const StyledMaxWidth = styled.section`
  width: 100%;
  .container-max {
    width: 90%;
    max-width: var(--maxWidth);
    margin: var(--auto);
    ${props =>
      props.maxWidth &&
      css`
        max-width: ${props => props.maxWidth}px!important;
      `}
  }
`
const MaxWidth = ({ children, ...props }) => {
  props.$noLazy = true
  return (
    <StyledMaxWidth {...props}>
      {props.$noLazy ? (
        <div className="container-max">{children}</div>
      ) : (
        // <LazyLoad offset={100}>
        <div className="container-max">{children}</div>
        // </LazyLoad>
      )}
    </StyledMaxWidth>
  )
}

MaxWidth.propTypes = {
  children: PropTypes.any,
  $noLazy: PropTypes.any,
}

export default MaxWidth
