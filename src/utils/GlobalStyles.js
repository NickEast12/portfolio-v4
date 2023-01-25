import { createGlobalStyle } from 'styled-components'

import { media } from 'utils/Media'
import Animations from './Animations'
import Typography from './Typography'
import Vars from './Vars'

const GlobalStyles = createGlobalStyle`
    ${Vars}
    ${Animations}
    ${Typography}
    *, *:after, *:before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        margin: 0;
        padding: 0;   
    }
    body {
        font-size: ${props => props.theme.font.size.base};
        font-weight: normal;
        line-height: ${props => props.theme.font.lineHeight.base};
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
        margin: 0 auto;
        height: auto;
        background: #000;
        font-family: var(--fontMain);
    }
   h1 {
        font-size: ${props => props.theme.font.h1.size};
        line-height: 100%;
        @media ${media.sm} {
            font-size: ${props => props.theme.font.h1.sm.size};
        }
        @media ${media.md} {
            font-size: ${props => props.theme.font.h1.md.size};
        }
        @media ${media.xl} {
            font-size: ${props => props.theme.font.h1.xl.size};
        }
   }

   h2 {
        font-size: ${props => props.theme.font.h2.size};
        line-height: 100%;
         @media ${media.sm} {
            font-size: ${props => props.theme.font.h2.sm.size};
        }
        
        @media ${media.xl} {
            font-size: ${props => props.theme.font.h2.xl.size};
        }
    }
    h3, .h3 {
        font-size: ${props => props.theme.font.h3.size};
        @media ${media.sm} {
            font-size: ${props => props.theme.font.h3.sm.size};
        }
        
        @media ${media.xl} {
            font-size: ${props => props.theme.font.h3.xl.size};
        }
    }
    
    h4 {    
        font-size: ${props => props.theme.font.h4.size};
        @media ${media.sm} {
            font-size: ${props => props.theme.font.h4.sm.size};
        }
    }
    
     h5, h6, p {
        font-size: ${props => props.theme.font.p.size};
        @media ${media.sm} {
            font-size: ${props => props.theme.font.p.sm.size};
        }
        
        @media ${media.xl} {
            font-size: ${props => props.theme.font.p.xl.size};
        }
    }
    a, a:focus {
        color: inherit;
        text-decoration: none;
    }
    //? For screen readers 
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0,0,0,0);
        border: 0;
    }
    ::selection {
        background: var(--black); /* WebKit/Blink Browsers */
        color: var(--main);
    }
`
export default GlobalStyles 