import React from 'react'
import styled from 'styled-components'
import { MaxWidth } from '../MaxWidth'

const FooterStyles = styled.footer`
  width: 100%;
  padding: 4rem 0;
  section {
    text-align: center;
    h4 {
      color: var(--white);
    }
  }
`
const Footer = () => (
  <FooterStyles>
    <MaxWidth>
      <section>
        <h4>Get in touch</h4>
      </section>
    </MaxWidth>
  </FooterStyles>
)

export default Footer
