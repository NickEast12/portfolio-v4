import React from 'react'
// import ButtonArrow from 'svgs/arrow.svg'

const Buttons = ({ step, setStep }) => (
  <div className="buttons">
    {step === 0 ? (
      <div className="filler" />
    ) : (
      <button type="button" className="prev" onClick={() => setStep(step - 1)}>
        {/* <ButtonArrow /> */}
        <span>Back</span>
      </button>
    )}

    {step !== 2 ? (
      <button type="submit" className="next">
        <span>Continue</span>
        {/* <ButtonArrow /> */}
      </button>
    ) : (
      <button type="submit" className="next">
        <span>SUBMIT</span>
        {/* <ButtonArrow /> */}
      </button>
    )}
  </div>
)

// onClick={() => setStep(step + 1)}

export default Buttons
