import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload'

const StyledMaxWidth = styled.section`
  width: 100%;
  .container-max {
    width: 85%;
    max-width: var(--maxWidth);
    margin: var(--auto);
  }
`
const MaxWidth = ({ children, ...props }) => (
  <StyledMaxWidth>
    {props.$noLazy ? (
      <div className="container-max">{children}</div>
    ) : (
      <LazyLoad offset={250}>
        <div className="container-max">{children}</div>
      </LazyLoad>
    )}
  </StyledMaxWidth>
)

MaxWidth.propTypes = {
  children: PropTypes.any,
}

export default MaxWidth