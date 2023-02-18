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
  @keyframes scale-rotate {
    0% {
      transform: rotate(0);
      transform: scale(1);
    }
    100% {
      transform: rotate(25deg);
      transform: scale(1.1);
    }
  }
`

export default Animations
