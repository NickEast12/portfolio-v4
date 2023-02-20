import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

import { MaxWidth } from 'components/global'
import { SingleProjects } from 'components/shared'
import { media } from 'utils/Media'
import Anchor from 'components/functional/anchor'

import { gsap } from 'utils/gsap'

const StyledProject = styled.section`
  width: 100%;
  .projects {
    /* opacity: 0;
    transform: translateY(100px); */
    min-height: 100vh;
    padding: 3rem 0;
    max-width: 900px;
    margin: 0 auto;
    h3 {
      color: var(--white);
      text-align: center;
      margin-bottom: 1rem;
      font-size: 2rem;
      text-decoration: underline var(--main);
      @media ${media.md} {
        font-size: 3.5rem;
        margin-bottom: 2rem;
      }
    }
    .wrapper {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 1rem;
      margin: 1rem auto;
      @media ${media.md} {
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(5, 310px);
        grid-template-areas:
          'a a a a'
          'b b c c'
          'b b d d'
          'e e d d'
          'f f f f';
      }
    }
    @media ${media.md} {
      max-width: 750px;
    }
    @media ${media.xl} {
      max-width: 900px;
    }
  }
`

const Projects = () => {
  const { projects } = useStaticQuery(graphql`
    query ProjectsQuery {
      projects: allProjectsJson {
        nodes {
          name
          tech
          area
          dewynters
          link
          image {
            childImageSharp {
              gatsbyImageData(quality: 100)
            }
          }
          mobImage {
            childImageSharp {
              gatsbyImageData(quality: 100)
            }
          }
        }
      }
    }
  `)
  const data = projects.nodes

  // const el = useRef()
  // const tl = useRef()
  // useLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //     tl.current = gsap
  //       .timeline({
  //         scrollTrigger: {
  //           trigger: el.current,
  //           // start: 'top top',
  //           start: '-200',
  //           markers: false,
  //           toggleActions: 'play none none none',
  //         },
  //       })
  //       .to('.projects', {
  //         opacity: 1,
  //         y: 0,
  //       })
  //       .to('.fade-up', {
  //         opacity: 1,
  //         y: 0,
  //         stagger: {
  //           each: 0.25,
  //         },
  //       })
  //   }, el)
  // }, [])
  return (
    // <StyledProject ref={el}>
    <StyledProject>
      <Anchor id="recent-work" />
      <MaxWidth>
        <div className="projects">
          {/* <h3>Some things I have built</h3>
          <h3>Some things I’ve built</h3> */}
          {/* <h3>My recent work</h3> */}
          <h3>My recent projects</h3>
          <div className="wrapper">
            {data.map((projects, i) => (
              <SingleProjects data={projects} key={i} />
            ))}
          </div>
        </div>
      </MaxWidth>
    </StyledProject>
  )
}

export default Projects
