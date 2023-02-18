import React from 'react'
import styled from 'styled-components'

const StyledAnchor = styled.div`
  position: relative;
  top: -2.5rem;
`
const Anchor = ({ id }) => <StyledAnchor id={id} />

export default Anchor
