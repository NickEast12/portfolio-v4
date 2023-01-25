import React from 'react'
import { Link } from 'gatsby'

const PageNavigation = props => (
  <ul>
    <li>
      <Link to="/tickets/">
        <span className="sr-only">Tickets</span>
            Tickets
      </Link>
    </li>
    <li>
      <Link to="/cast/">
        <span className="sr-only">Cast</span>
        Cast
      </Link>
    </li>
    <li>
      <Link to="/creative/">
        <span className="sr-only">Creative</span>
        Creative
      </Link>
    </li>
    <li>
      <Link to="/contact/">
        <span className="sr-only">Contact</span>
        Contact
      </Link>
    </li>
  </ul>
)

export default PageNavigation