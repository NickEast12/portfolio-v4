import { MaxWidth } from 'components/global'
import React, { useEffect } from 'react'
import styled from 'styled-components'

const ContactStyles = styled.section`
  width: 100%;
  min-height: 100vh;
  .contact {
    h3 {
      color: var(--white);
      text-align: center;
      margin-bottom: 1rem;
      font-size: 2rem;
      text-decoration: underline var(--main);
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
      <MaxWidth>
        <div className="contact">
          <h3>Get in touch title</h3>
        </div>
      </MaxWidth>
    </ContactStyles>
  )
}

export default Contact
