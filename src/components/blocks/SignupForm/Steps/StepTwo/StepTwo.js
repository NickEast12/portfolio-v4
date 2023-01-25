import React from 'react'
import { useForm } from 'react-hook-form'

import WarningSvg from 'svgs/alert.svg'
import Buttons from '../Buttons'
import StepWrapper from '../StepStyled'

const StepTwo = ({ setFormData, formData, step, setStep, ...props }) => {
  const { dob, postcode } = formData
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onSubmit',
  })
  function onSubmit(data, e) {
    e.preventDefault()
    const formatDate = data.dob.split('-').reverse().join('-')
    setFormData({
      ...formData,
      dob: formatDate,
      postcode: data.postcode,
    })
    setStep(step + 1)
  }
  return (
    <StepWrapper step={step} {...props}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={errors.dob ? 'error input-wrapper' : ' input-wrapper'}>
          <label htmlFor="dob">Date Of Birth*</label>
          <div>
            <input
              type="date"
              id="dob"
              name="dob"
              min="1900-01-01"
              max="2022-01-01"
              defaultValue={dob.split('-').reverse().join('-') || null}
              {...register('dob', {
                required: 'Your date of birth is required',
              })}
            />
          </div>
        </div>
        <div
          className={errors.postcode ? 'error input-wrapper' : ' input-wrapper'}
        >
          <label htmlFor="postcode">Postcode*</label>
          <div>
            <input
              type="text"
              name="postcode"
              id="postcode"
              placeholder="Postcode*"
              className="last"
              defaultValue={postcode || null}
              {...register('postcode', {
                required: 'Your postcode is required',
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

export default StepTwo
