import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

import { MaxWidth } from 'components/global'
import { SingleProjects } from 'components/shared'
import { media } from 'utils/Media'

const StyledProject = styled.section`
  width: 100%;
  .projects {
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
  console.log(data)
  return (
    <StyledProject>
      <MaxWidth>
        <div className="projects">
          <h3>Some things I’ve built</h3>
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
