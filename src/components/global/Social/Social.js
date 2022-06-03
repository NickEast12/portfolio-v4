import React from 'react'
import styled, { css } from 'styled-components'

import LinkedinIcon from 'svgs/linkedin.svg'
import TwitterIcon from 'svgs/twitter.svg'
import GitHubIcon from 'svgs/github.svg'
import SpotifyIcon from 'svgs/spotify.svg'
import { media } from 'utils/Media'
import { MaxWidth } from '../MaxWidth'

const SocialButtons = styled.aside`
  width: 100%;
  ${props =>
    props.$desktop &&
    css`
      display: none;
      @media ${media.md} {
        display: flex;
      }
      position: absolute;
      z-index: 999;
      bottom: 0;
      left: 0;
      flex-direction: column;
      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        &:after {
          content: '';
          display: block;
          width: 1px;
          height: 90px;
          margin: 0 0 0 11px;
          background-color: var(--main);
        }
        li {
          a {
            padding: 0.35rem 0;
            display: inline-block;
            transition: var(--transition);
            svg {
              transition: var(--transition);
              &:hover,
              &:active {
                transform: translateY(-5px);
                fill: var(--main);
              }
            }
          }
        }
      }
      @media ${media.lg} {
        position: fixed;
      }
    `}
  svg {
    width: 25px;
    /* fill: var(--main); */
  }
`
const Social = props => (
  <SocialButtons {...props}>
    <MaxWidth maxWidth="1600">
      <ul>
        <li>
          <a href="https://www.linkedin.com/">
            <span className="sr-only">Linkedin</span>
            <LinkedinIcon />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/">
            <span className="sr-only">Twitter</span>
            <TwitterIcon />
          </a>
        </li>
        <li>
          <a href="https://www.github.com/">
            <span className="sr-only">Github</span>
            <GitHubIcon />
          </a>
        </li>
        <li>
          <a href="https://www.spotify.com/">
            <span className="sr-only">Spotify</span>
            <SpotifyIcon />
          </a>
        </li>
      </ul>
    </MaxWidth>
  </SocialButtons>
)

export default Social
