import { css } from 'styled-components'

import GothamBookWOFF2 from 'utils/Fonts/GothamBook.woff2'
import GothamBookWOFF from 'utils/Fonts/GothamBook.woff'

const Typography = css`
  @font-face {
    font-family: 'Gotham';
    src: url(${GothamBookWOFF2}) format('woff2'),
      url(${GothamBookWOFF}) format('woff');
    font-weight: 400;
    font-style: normal;
  }
`

export default Typography
