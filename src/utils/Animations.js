import { css } from 'styled-components'
import { media } from 'utils/Media'

const Animations = css`
  @keyframes slide-in-blurred-bottom {
    0% {
      transform: translateY(100px);
      filter: blur(40px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      filter: blur(0);
      opacity: 1;
    }
  }
`

export default Animations
