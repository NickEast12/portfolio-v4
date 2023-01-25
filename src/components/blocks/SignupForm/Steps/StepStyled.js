import React from 'react'
import styled, { css } from 'styled-components'

import CloseIcon from 'svgs/close.svg'
import { media } from 'utils/Media'

const StepedStyled = styled.div`
  width: 100%;
  background-color: var(--main);
  max-width: 745px;
  .wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    min-height: 450px;
    padding: 1rem;
    /* padding: 1rem 1rem 1rem 1rem; */
    @media ${media.s} {
      width: 90%;
      padding: 0;
    }
    h4 {
      font-weight: 400;
      font-size: 1.5rem;
    }
    form {
      /* margin-top: 1rem; */
      .input-wrapper {
        div {
          position: relative;
          input[type='text'],
          input[type='email'],
          input[type='date'],
          select {
            width: 100%;
            border: none;
            border-radius: 0 !important;
            padding: 0.75rem 0.5rem;
            margin-bottom: 0.5rem;
            outline: none;
            border: solid white 2px;
            height: 45px;
            &::placeholder {
              font-size: 12px;
              font-weight: 400;
              color: #757575;
              @media ${media.ls} {
                font-size: 15px;
              }
              @media ${media.md} {
                font-size: 18px;
              }
            }
          }
          select {
            font-size: 0.65rem;
            outline: none;
            @media ${media.ls} {
              font-size: 15px;
            }
          }
          input[type='date'] {
            font-size: 0.95rem;
            &::placeholder {
              font-size: 0.5rem;
            }
          }
        }
        label {
          font-weight: 500;
          font-size: 14px;
          margin-bottom: 0.35rem;
          display: block;
          @media ${media.ls} {
            font-size: 15px;
          }
          @media ${media.md} {
            font-size: 1rem;
          }
        }
        svg {
          width: 20px;
          height: 20px;
          position: absolute;
          top: 0.75rem;
          right: 0.5rem;
          fill: red;
          display: none;
          @media ${media.md} {
            top: 1.5rem;
            right: 1rem;
          }
        }
      }
      .error {
        label {
          color: red !important;
        }
        input {
          border: solid red 2px !important;
        }
        svg {
          display: block;
        }
      }
      //? remove margin from last input
      .last {
        margin-bottom: 0 !important;
      }
    }
    .buttons {
      position: absolute;
      bottom: 2rem;
      left: 5%;
      width: 90%;
      display: flex;
      gap: 1rem;
      margin: 2rem 0 1rem 0;
      justify-content: space-between;
      align-items: flex-end;
      button {
        cursor: pointer;
        width: 50%;
        padding: 0.85rem 0.75rem;
        border-radius: 0 !important;
        span {
          text-transform: uppercase;
          font-size: 0.85rem;
          @media ${media.md} {
            font-size: 20px;
          }
        }
        @media ${media.md} {
          padding: 1.25rem;
        }
      }
      .filler {
        visibility: hidden;
        width: 50%;
        padding: 0.85rem 0.75rem;
      }
      .prev {
        background: none;
        border: solid black 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        span {
          line-height: 0;
        }
        svg {
          margin-right: 10px;
          width: 8px;
          height: auto;
        }
      }
      .next {
        background: black;
        border: solid black 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        span {
          color: #fff;
          line-height: 0;
        }
        svg {
          margin-left: 10px;
          width: 8px;
          height: auto;
          transform: rotate(180deg);
          path {
            stroke: #fff;
          }
        }
      }
      @media ${media.s} {
        width: 100%;
        left: 0;
        right: 0;
      }
    }
    .close {
      cursor: pointer;
      position: absolute;
      top: 1.25rem;
      right: 1rem;
      background: var(--black);
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        width: 20px;
        height: 20px;
      }
      @media ${media.s} {
        top: 1rem;
        right: 0;
      }
    }
    ${props =>
      props.$successStep &&
      css`
        display: flex;
        align-items: center;
        justify-content: center;
      `}
  }
  @media ${media.md} {
    .wrapper {
      min-height: 581px;
      height: 100%;
      h4 {
        font-size: 3rem;
        margin-top: 2rem;
      }
      form {
        .input-wrapper {
          div {
            input[type='text'],
            input[type='email'],
            input[type='date'],
            select {
              height: 65px;
              padding-left: 1rem;
              font-size: 1rem;
            }
          }
        }
      }
    }
    .buttons {
      bottom: 0;
      button {
        max-width: 225px;
        span {
          font-size: 24px;
        }
      }
    }
  }
`

const StepWrapper = ({ children, step, setOpen, ...props }) => {
  console.log(`current step = ${step}`)
  return (
    <StepedStyled {...props}>
      <div className="wrapper">
        <div className="close" onClick={() => setOpen(false)} role="button">
          <CloseIcon />
        </div>
        {props.$successStep ? '' : <StepCounter step={step} />}
        {props.$successStep ? '' : <h4>SIGN UP FOR PRIORITY ACCESS</h4>}
        {children}
      </div>
    </StepedStyled>
  )
}

export default StepWrapper

const StepCounterStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 10px;
  margin: 3rem 0 1rem 0;
  div {
    width: 100%;
    p {
      visibility: hidden;
      font-size: 11.5px;
      text-transform: uppercase;
      margin-bottom: 5px;
    }
    hr {
      width: 100%;
      border: none;
      background-color: #fff;
      height: 3px;
    }
  }
  .active {
    p {
      visibility: visible;
    }
    hr {
      background-color: #000;
    }
  }
  @media ${media.s} {
    margin-top: 0;
    padding-top: 4.5rem;
    div {
      p {
        text-align: center;
        font-size: 14px;
      }
    }
  }
  @media ${media.md} {
    padding-top: 1.5rem;
    margin: 0;
    justify-content: flex-start;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
    div {
      width: 100px;
      p {
        font-size: 20px;
      }
    }
  }
`

const StepCounter = ({ step }) => (
  <StepCounterStyled>
    <div className={step === 0 ? 'active' : ''}>
      <p>Step 1</p>
      <hr />
    </div>
    <div className={step === 1 ? 'active' : ''}>
      <p>Step 2</p>
      <hr />
    </div>
    <div className={step === 2 ? 'active' : ''}>
      <p>Step 3</p>
      <hr />
    </div>
  </StepCounterStyled>
)
