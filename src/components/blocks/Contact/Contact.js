import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'

import { MaxWidth } from 'components/global'

const ContactStyles = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .contact {
    h3 {
      color: var(--white);
      text-align: center;
      margin-bottom: 1rem;
      font-size: 2rem;
      text-decoration: underline var(--main);
    }
    form {
      margin-top: 3rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding-bottom: 3rem;
      div {
        p {
          color: var(--white);
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        input,
        textarea {
          background: none;
          width: 100%;
          border: none;
          border-bottom: solid 2px rgba(255, 255, 255, 0.5);
          color: var(--white);
          font-size: 1.5rem;
          padding-bottom: 1rem;
          &::placeholder {
            color: rgba(255, 255, 255, 0.5);
          }
        }
        textarea {
          resize: vertical;
          max-height: 300px;
          min-height: 150px;
        }
      }
      .button {
        max-width: 500px;
        margin: 0 auto;
        width: 100%;
        button {
          width: 100%;
          border-radius: 100px;
          background-color: var(--main);
          padding: 1.25rem 0;
          border: none;

          span {
            font-weight: 700;
            font-size: 1.5rem;
          }
        }
      }
    }
  }
`

const Contact = () => {
  useEffect(() => {
    async function apiCall(parameter) {
      console.log('called')
      //   const url = `/.netlify/functions/functionname?parameter=${parameter}`
      const url = `/functions/sendMail.js`
      try {
        const response = await fetch(url)
        const data = await response.json()
        return data
      } catch (err) {
        console.log(err)
      }
    }
  })
  return (
    <ContactStyles>
      <MaxWidth maxWidth="900">
        <div className="contact">
          <h3>Let’s talk about your project!</h3>
          <form action="">
            <div>
              <p>Your Name</p>
              <input type="text" placeholder="Your Name" />
            </div>
            <div>
              <p>Your Email</p>
              <input type="text" placeholder="Your Email" />
            </div>
            <div>
              <p>Your Company</p>
              <input type="text" placeholder="Your Company" />
            </div>
            <div>
              <p>About your project</p>
              <textarea placeholder="Your Message" />
            </div>
            <div className="button">
              <button type="submit">
                <span>SUBMIT</span>
              </button>
            </div>
          </form>
        </div>
      </MaxWidth>
    </ContactStyles>
  )
}

export default Contact
