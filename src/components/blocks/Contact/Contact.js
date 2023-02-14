import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'

import { MaxWidth } from 'components/global'

import ErrorIcon from 'svgs/error.svg'

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
      .itsatrap {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
      }
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
          outline: none;
          &::placeholder {
            color: rgba(255, 255, 255, 0.5);
          }
        }
        textarea {
          resize: vertical;
          max-height: 300px;
          min-height: 150px;
        }
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus,
        select:-webkit-autofill,
        select:-webkit-autofill:hover,
        select:-webkit-autofill:focus {
          border-bottom: solid 2px rgba(255, 255, 255, 0.5);
          -webkit-text-fill-color: white;
          -webkit-box-shadow: 0 0 0px 1000px var(--background) inset;
          transition: background-color 5000s ease-in-out 0s;
        }
        /* input:-webkit-autofill {
          -webkit-text-fill-color:  !important;
        } */
        .input-wrapper {
          position: relative;
          svg {
            position: absolute;
            width: 20px;
            height: 20px;
            top: 2.5px;
            right: 0.5rem;
            fill: var(--red);
            display: none;
          }
        }
        .error {
          input,
          textarea {
            &::placeholder {
              color: var(--red);
            }
          }
          svg {
            display: block;
          }
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
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onSubmit',
  })
  const onSubmit = (data, e) => {
    e.preventDefault()
    if (data.itsatrap) {
      window.location.replace(
        'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'
      )
    } else {
      console.log(data)
      fetch(`/.netlify/functions/sendMail`, {
        method: `POST`,
        body: JSON.stringify(data),
        headers: {
          'content-type': `application/json`,
        },
      })
      // .then(res => res.json())
      // .then(body => {
      //   console.log(`response from API:`, body)
      // })
    }
  }

  return (
    <ContactStyles>
      <MaxWidth maxWidth="900">
        <div className="contact">
          <h3>Let’s talk about your project!</h3>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <input
              type="text"
              id="yourName"
              name="Name"
              placeholder="Your name here"
              className="itsatrap"
              autoComplete="none"
              tabIndex="-1"
              {...register('itsatrap')}
            />

            <div>
              <p>Your Name</p>
              <div
                className={
                  errors.name ? 'error input-wrapper' : 'input-wrapper'
                }
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  id="name"
                  className={errors.name ? 'error' : ''}
                  {...register('name', {
                    required: 'Your name is required',
                  })}
                />
                <ErrorIcon />
              </div>
            </div>
            <div>
              <p>Your Email</p>
              <div
                className={
                  errors.email ? 'error input-wrapper' : 'input-wrapper'
                }
              >
                <input
                  type="text"
                  placeholder="Your Email"
                  name="email"
                  id="email"
                  className={errors.email ? 'error' : ''}
                  {...register('email', {
                    required: 'A email address is required',
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: 'Invalid email address',
                    },
                  })}
                />
                <ErrorIcon />
              </div>
            </div>
            <div>
              <p>Your Company</p>
              <input
                type="text"
                placeholder="Your Company"
                name="company"
                id="company"
                {...register('company')}
              />
            </div>
            <div>
              <p>About your project</p>
              <div
                className={
                  errors.message ? 'error input-wrapper' : 'input-wrapper'
                }
              >
                <textarea
                  placeholder="Your Message"
                  name="message"
                  id="message"
                  {...register('message', {
                    required: 'You need ',
                  })}
                />
                <ErrorIcon />
              </div>
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
