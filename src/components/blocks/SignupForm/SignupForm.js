import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { document } from 'browser-monads'

import { gsap } from 'utils/gsap'
import { StepFour, StepOne, StepThree, StepTwo } from './Steps'

const SignupFormStyles = styled.section`
  opacity: 0;
  visibility: hidden;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  section {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @supports (inset: 0) {
    inset: 0;
  }
  @supports not (inset: 0) {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  //* fall back for older safari
`
const SignupForm = ({ open, setOpen }) => {
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    dob: '',
    postcode: '',
    wheredidyouhear: '',
  })
  //* Pop up animations
  const popUpRef = useRef()
  const q = gsap.utils.selector(popUpRef)
  const popUpAnimation = useRef()

  useEffect(() => {
    popUpAnimation.current = gsap
      .timeline({ duration: 0.5, ease: 'power1.out', stagger: 0.5 })
      .to(popUpRef.current, {
        opacity: '1',
        visibility: 'visible',
        // duration: 0.25,
      })
      .from(q('.background'), {
        y: '-500px',
        opacity: '0',
        // duration: 0.25,
      })

    return () => {
      popUpAnimation.current.kill()
    }
  }, [])

  useEffect(() => {
    if (!open) {
      popUpAnimation.current.reverse()
      document.body.style.overflowY = 'auto'
    } else {
      popUpAnimation.current.play()
      document.body.style.overflow = 'hidden'
    }
  }, [open])

  return (
    <SignupFormStyles ref={popUpRef}>
      <section className="background">
        {step === 0 ? (
          <StepOne
            step={step}
            setStep={setStep}
            formData={formData}
            setFormData={setFormData}
            setOpen={setOpen}
          />
        ) : (
          ''
        )}
        {step === 1 ? (
          <StepTwo
            step={step}
            setStep={setStep}
            formData={formData}
            setFormData={setFormData}
            setOpen={setOpen}
          />
        ) : (
          ''
        )}
        {step === 2 ? (
          <StepThree
            step={step}
            setStep={setStep}
            formData={formData}
            setFormData={setFormData}
            setOpen={setOpen}
          />
        ) : (
          ''
        )}
        {step === 3 ? (
          <StepFour
            step={step}
            setStep={setStep}
            formData={formData}
            setFormData={setFormData}
            setOpen={setOpen}
          />
        ) : (
          ''
        )}
      </section>
    </SignupFormStyles>
  )
}

export default SignupForm
