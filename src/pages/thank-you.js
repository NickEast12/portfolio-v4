import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { Layout } from 'components/global'
import { StyledButton } from 'components/shared'

const ThankYouPageStyles = styled.div`
  width: 100%;
  .thankyou {
    max-height: 100vh;
    height: 100vh;
    min-height: 450px;
    width: 90%;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
    h1 {
      color: var(--white);
      margin: 0;
      padding: 0;
      font-size: 2.5rem;
      font-size: clamp(2.5rem, 2.1rem + 2vw, 4.5rem);
      span {
        text-decoration: underline var(--main);
        display: inline-block;
      }
    }
    p {
      color: var(--white);
      max-width: 650px;
      margin: 0 auto;
    }
    /* button {
      width: 200px;
      height: 50px;
      border-radius: var(--borderRadius);
      border: none;
      background: var(--main);
      cursor: pointer;
      span {
        color: var(--black);
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      &:hover,
      &:active {
        background: none;
        border-radius: 50px;
        span {
          color: var(--white);
        }
      }
    } */
  }
`

const ThankYouPage = ({ location }) => {
  let name
  if (location?.state?.name) {
    name = location.state.name.split(' ')[0]
  }
  return (
    <Layout>
      <ThankYouPageStyles>
        <div className="thankyou">
          {location?.state ? (
            <h1>
              Hey, thanks <span>{name}</span> for your message!
            </h1>
          ) : (
            <h1>
              Hey, thanks for your <span>message!</span>
            </h1>
          )}
          <p>
            I will try and get back to you as soon as possible, in the meantime
            feel free to check out some posts I've written recently.
          </p>
          <StyledButton to="/" internal text="return home" />
        </div>
      </ThankYouPageStyles>
    </Layout>
  )
}

export default ThankYouPage
