import React from 'react'
import styled from 'styled-components'
import { media } from 'utils/Media'
import StepWrapper from '../StepStyled'

const SuccessStyles = styled.section`
  width: 100%;
  height: 100%;
  div {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h4 {
      text-align: center;
      line-height: 2rem;
      @media ${media.ls} {
        line-height: 2.5rem;
      }
      @media ${media.md} {
        line-height: 4.5rem;
      }
    }
    button {
      margin-top: 1rem;
      display: block;
      background: var(--black);
      border: solid 2px var(--black);
      padding: 0.85rem 2rem;
      span {
        color: var(--white);
      }
      @media ${media.md} {
        padding: 0.95rem 2.5rem;
        margin-top: 2.5rem;
      }
    }
  }
`
const StepFour = ({ setOpen, ...props }) => {
  const i = true
  return (
    <StepWrapper {...props} $successStep>
      <SuccessStyles>
        <div>
          <h4>THANKS FOR SIGNING UP! YOUR INFORMATION HAS BEEN SUBMITTED</h4>
          <button type="button" onClick={() => setOpen(false)}>
            <span>CLOSE</span>
          </button>
        </div>
      </SuccessStyles>
    </StepWrapper>
  )
}

export default StepFour
