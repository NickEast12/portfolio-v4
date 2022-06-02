import PropTypes from 'prop-types'
import React from 'react'
import styled, { css } from 'styled-components'

const StyledMaxWidth = styled.section`
  width: 100%;
  .container-max {
    width: 90%;
    max-width: var(--maxWidth);
    margin: var(--auto);
    position: relative;
    ${props =>
      props.maxWidth &&
      css`
        max-width: ${i => i.maxWidth}px!important;
      `};
  }
`
const MaxWidth = props => {
  const { children } = props
  return (
    <StyledMaxWidth {...props}>
      <div className="container-max">{children}</div>
    </StyledMaxWidth>
  )
}

MaxWidth.propTypes = {
  children: PropTypes.any,
}

export default MaxWidth
