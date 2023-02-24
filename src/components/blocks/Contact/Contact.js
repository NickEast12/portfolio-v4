import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { navigate } from 'gatsby'

import { MaxWidth } from 'components/global'

import ErrorIcon from 'svgs/error.svg'
import { media } from 'utils/Media'
import Anchor from 'components/functional/anchor'

import { gsap } from 'utils/gsap'

const ContactStyles = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 860px;
  .contact {
    height: 100%;
    h3 {
      color: var(--white);
      text-align: center;
      margin-bottom: 1rem;
      font-size: 2rem;
      text-decoration: underline var(--main);
      -webkit-text-decoration: underline var(--main);
      @media ${media.md} {
        font-size: 3.5rem;
        margin-bottom: 4rem;
      }
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
          border-radius: 0 !important;
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
          border: solid 2px var(--main);
          transition: var(--transition);
          cursor: pointer;
          span {
            font-weight: 700;
            font-size: 1.5rem;
            transition: var(--transition);
            color: var(--black);
          }
          &:hover,
          &:active {
            background: none;
            border-radius: 7.5px;
            span {
              color: var(--white);
            }
          }
        }
      }
    }
  }
  @media ${media.md} {
    max-width: 750px;
    margin: 0 auto;
  }
  @media ${media.xl} {
    max-width: 900px;
  }
`

const Contact = () => {
  const [success, setSuccess] = useState(false)
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
      fetch(`/api/send-mail`, {
        // fetch(`http://localhost:8888/.netlify/functions/send-mail`, {
        method: `POST`,
        body: JSON.stringify(data),
        headers: {
          'content-type': `application/json`,
        },
      })
        .then(res => {
          console.log(res)
          if (res.status === 200) {
            setSuccess(true)
            navigate('/thank-you', {
              state: {
                name: data.name,
              },
            })
          }
        })
        .then(body => {
          console.log(body)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  const el = useRef()
  const tl = useRef()
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: el.current,
            // start: 'top top',
            start: '-200',
            markers: false,
            toggleActions: 'play none none none',
          },
        })
        .to('.fade-up', {
          opacity: 1,
          y: 0,
          stagger: {
            each: 0.25,
          },
        })
    }, el)
  }, [])

  return (
    <ContactStyles ref={el}>
      <Anchor id="get-in-touch" />
      <MaxWidth maxWidth="900">
        <div className="contact">
          {/* <h3 className="fade-up">Send me a message!</h3> */}
          <h3 className="fade-up">What's on your mind?</h3>
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

            <div className="fade-up">
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
            <div className="fade-up">
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
            <div className="fade-up">
              <p>Your Company</p>
              <input
                type="text"
                placeholder="Your Company"
                name="company"
                id="company"
                {...register('company')}
              />
            </div>
            <div className="fade-up">
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
            <div className="button fade-up">
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
