import GetImage from 'components/functional/getImage'
import React, { useLayoutEffect, useRef } from 'react'
import styled, { css } from 'styled-components'

import LinkIcon from 'svgs/link.svg'
import { media } from 'utils/Media'

import { gsap } from 'utils/gsap'

const SingleProjectsStyles = styled.div`
  width: 100%;
  cursor: pointer;
  background-color: #d9d9d9;
  border-radius: 7.5px;
  /* height: 250px; */
  position: relative;
  overflow: hidden;
  background-color: var(--background);
  @media ${media.md} {
    grid-area: ${props => props.area};
  }
  &:after {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background-color: var(--background);
    content: '';
    z-index: 0;
    opacity: 0;
    transition: var(--transition);
  }
  .image {
    width: 100%;
    height: 100%;
    .mobile {
      width: 100%;
      height: 100%;
      border-radius: 7.5px;
      /* height: 300px; */
      transition: all 0.25s ease-in-out;
      .gatsby-image-wrapper {
        transition: all 0.25s ease-in-out !important;
        width: 100%;
        /* height: 100%; */
        border-radius: 7.5px;
      }
      @media ${media.md} {
        display: none;
      }
    }
    .desktop {
      display: none;
      transition: all 0.25s ease-in-out !important;
      @media ${media.md} {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 7.5px;
        .gatsby-image-wrapper {
          width: 100%;
          height: 100%;
          border-radius: 7.5px;
          transition: all 0.25s ease-in-out !important;
        }
      }
    }
  }
  .text {
    position: absolute;
    bottom: 1rem;
    left: 5%;
    width: 90%;
    z-index: 5;
    color: var(--white);
    transition: var(--transition);
    h4 {
      opacity: 0;
      transform: translateY(25px);
      transition: var(--transition);
    }
    ul {
      list-style: none;
      display: flex;
      gap: 5px;
      opacity: 0;
      transition: var(--transition);
      transform: translateY(25px);
      li {
        &:last-child {
          span {
            display: none;
          }
        }
      }
    }
  }
  .icon {
    transition: all 0.25s ease-in-out;
    opacity: 0;
    position: absolute;
    z-index: 5;
    top: -2rem;
    right: 1rem;

    svg {
      stroke: var(--white);
      transition: var(--transition);
    }
    &:hover,
    &:active {
      svg {
        stroke: var(--main) !important;
      }
    }
  }
  .dewynters {
    position: absolute;
    z-index: 5;
    top: 1rem;
    left: 1rem;
    transition: var(--transition);
    opacity: 0;
    transform: translateY(-10px);
    p {
      color: var(--white);
      a {
        text-decoration: underline;
        &:hover,
        &:active {
          color: var(--main);
        }
      }
    }
  }
  &:hover,
  &:active {
    .gatsby-image-wrapper {
      /* animation: scale-rotate 0.25s ease-in-out;
      animation-fill-mode: both; */
      transform: scale(1.1);
      /* transform: rotate(10deg) scale(1.25); */
    }
    &:after {
      opacity: 0.45;
    }
    .icon {
      opacity: 1;
      top: 1rem;
    }
    h4 {
      transform: translateY(0);
      opacity: 1;
    }
    ul {
      opacity: 1;
      transform: translateY(0);
    }
    .dewynters {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`
const SingleProjects = ({ data }) => {
  const { name, tech, dewynters, image, mobImage, area, link } = data
  return (
    <SingleProjectsStyles area={area} className="fade-up">
      <div className="image">
        <div className="mobile">
          {mobImage && <GetImage data={mobImage} alt="" />}
        </div>
        <div className="desktop">
          {image && <GetImage data={image} alt="" />}
        </div>
      </div>
      <div className="text">
        <h4>{name}</h4>
        <ul>
          {tech.map((item, i) => (
            <li key={i}>
              {item}
              <span>,</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="icon">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <p className="sr-only">{name}</p>
          <LinkIcon />
        </a>
      </div>
      {dewynters && (
        <div className="dewynters">
          <p>
            Developed at{' '}
            <a
              href="http://www.dewynters.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dewynters
            </a>
          </p>
        </div>
      )}
    </SingleProjectsStyles>
  )
}

export default SingleProjects
