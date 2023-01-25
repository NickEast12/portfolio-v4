import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

import { gsap } from 'gsap'
import ArrowIcon from 'svgs/down-arrow.svg'
import { media } from 'utils/Media'

const SingleFaqStyles = styled.section`
  width: 100%;
  border-top: solid 1px #000;
  cursor: pointer;
  .question {
    background: var(--grey);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
    position: relative;
    z-index: 99;
    > p {
      text-transform: uppercase;
      font-weight: 700;
      margin-bottom: 0;
      @media ${media.lg} {
        font-size: 1.2rem;
      }
    }
    svg {
      width: 15px;
      height: 15px;
      fill: var(--black);
      transform: rotate(0);
    }
  }
  .answer {
    visibility: hidden;
    /* max-height: 0; */
    overflow: hidden;
    height: 0;
    div {
      position: relative;
      padding: 1rem 0;
      p {
        color: var(--black);
      }
      strong {
        color: var(--red);
      }
      @media ${media.lg} {
        p,
        strong {
          font-size: 1.1rem;
        }
      }
    }
  }
  &:last-child {
    .question {
      border-bottom: solid 1px #000;
    }
  }
`
const SingleFaq = props => {
  const { id, data, active, toggleActive, open } = props
  const faqRef = useRef()
  const q = gsap.utils.selector(faqRef)

  useEffect(() => {
    faqRef.current = gsap
      .timeline({ ease: 'power1.out' })
      .to(q('.answer'), {
        visibility: 'visible',
        height: 'auto',
      })
      .to(
        q('svg'),
        {
          rotation: 180,
        },
        '<'
      )
  }, [])
  useEffect(() => {
    if (open === id) {
      faqRef.current.play()
    } else {
      faqRef.current.reverse()
    }
  }, [open])
  return (
    <SingleFaqStyles id={id} onClick={() => toggleActive(id)} ref={faqRef}>
      <div className="question">
        <p>{data.question}</p>
        <span>
          <ArrowIcon />
        </span>
      </div>
      <div className="answer">
        <div dangerouslySetInnerHTML={{ __html: data.answer }} />
      </div>
    </SingleFaqStyles>
  )
}

export default SingleFaq
