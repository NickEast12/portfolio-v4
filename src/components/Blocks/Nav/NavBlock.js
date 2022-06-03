import { StyledButton } from 'components/global'
import { Link } from 'gatsby'
import React from 'react'

const Nav = props => (
  <ul>
    <li>
      <Link to="/ticket-info/">About</Link>
    </li>
    <li>
      <Link to="/faqs/">Experience</Link>
    </li>
    <li>
      <Link to="/faqs/">Work</Link>
    </li>
    <li>
      <Link to="/faqs/">Contact</Link>
    </li>
    {props.$noButton ? (
      ''
    ) : (
      <li>
        <StyledButton text="Start a project" {...props} />
      </li>
    )}
  </ul>
)

export default Nav
