import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import WarningSvg from 'svgs/alert.svg'
import Buttons from '../Buttons'
import StepWrapper from '../StepStyled'

const StepOne = ({
  setFormData,
  formData,
  step,
  setStep,
  setOpen,
  ...props
}) => {
  const { fullname, email } = formData
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onSubmit',
  })

  function onSubmit(data, e) {
    e.preventDefault()
    setFormData({
      ...formData,
      fullname: data.fullname,
      email: data.email,
    })
    setStep(step + 1)
  }
  return (
    <StepWrapper step={step} setStep={setStep} setOpen={setOpen} {...props}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div
          className={errors.fullname ? 'error input-wrapper' : ' input-wrapper'}
        >
          <label htmlFor="firstName">Full Name*</label>
          <div>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Full Name"
              defaultValue={fullname || null}
              {...register('fullname', {
                required: 'Your full name is required',
              })}
            />
            <WarningSvg />
          </div>
        </div>
        <div
          className={errors.email ? 'error input-wrapper' : ' input-wrapper'}
        >
          <label htmlFor="email">Email*</label>
          <div>
            <input
              placeholder="Email*"
              type="text"
              name="email"
              id="email"
              defaultValue={email || null}
              {...register('email', {
                required: 'A email address is required',
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: 'Invalid email address',
                },
              })}
            />
            <WarningSvg />
          </div>
        </div>
        <Buttons step={step} setStep={setStep} />
      </form>
    </StepWrapper>
  )
}

export default StepOne
