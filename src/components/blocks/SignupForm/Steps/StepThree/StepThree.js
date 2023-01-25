import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import addToMailchimp from 'gatsby-plugin-mailchimp'

import Buttons from '../Buttons'
import StepWrapper from '../StepStyled'

const StepThree = ({ setFormData, formData, step, setStep, ...props }) => {
  const [success, setSuccess] = useState(false)
  const [error, hasErrors] = useState(false)
  const { wheredidyouhear } = formData
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
      wheredidyouhear: data.wheredidyouhear,
    })
    addToMailchimp(formData.email, {
      MERGE1: formData.fullname,
      MERGE2: formData.dob,
      MERGE3: formData.postcode,
      WHEREDIDYO: data.wheredidyouhear,
    }).then(message => {
      console.log(message.msg)
      if (message.result === 'error') {
        hasErrors(true)
      } else {
        setSuccess(true)
        setStep(step + 1)
      }
    })
  }
  return (
    <StepWrapper step={step} setStep={setStep} {...props}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div
          className={
            errors.wheredidyouhear ? 'error input-wrapper' : ' input-wrapper'
          }
        >
          <label htmlFor="firstName">Where did you hear about Oklahoma!?</label>
          <div>
            <select
              id="wheredidyouhear"
              name="wheredidyouhear"
              className="last"
              {...register('wheredidyouhear')}
            >
              <option disabled defaultValue="null" value="null">
                Where did you hear about Oklahoma!?
              </option>
              <option value="theatre press">Theatre Press</option>
              <option value="national press">National Press</option>
              <option value="young vic">Young Vic</option>
              <option value="sonia friedman productions">
                Sonia Friedman Productions
              </option>
              <option value="from family or friends">
                From family or friends
              </option>
              <option value="social media post">Social Media Post</option>
              <option value="advertisement">Advertisement</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <Buttons step={step} setStep={setStep} />
      </form>
    </StepWrapper>
  )
}

export default StepThree
