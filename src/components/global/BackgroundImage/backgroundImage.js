import React from 'react'
import styled, { css } from 'styled-components'

import BackgroundSVG from 'svgs/background.svg'
import { media } from 'utils/Media'

const StyledBackground = styled.section`
  position: absolute;
  overflow: hidden;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  z-index: 0;
  svg {
    position: absolute;
    width: 150%;
    height: 100%;
    left: 3.25rem;
    right: 0;
    top: 0;
    bottom: 0;
    transform: rotate(180deg) scale(1.2);
    g {
      opacity: 0.45;
    }
  }
  @media ${media.md} {
    svg {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      transform: scale(1.56);
      g {
        opacity: 0.25;
        /* opacity: 1; */
      }
    }
  }
  ${props =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor}!important;
    `}
`
const BackgroundImage = props => (
  <StyledBackground {...props}>
    <BackgroundSVG />
  </StyledBackground>
)

export default BackgroundImage
