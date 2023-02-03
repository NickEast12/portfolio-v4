import { MaxWidth } from 'components/global'
import React from 'react'
import styled from 'styled-components'

const StyledProject = styled.section`
  width: 100%;
  .projects {
    min-height: 100vh;
    padding: 3rem 0;
    h3 {
      color: var(--white);
      text-align: center;
    }
  }
`

const Projects = () => {
  const i = true
  return (
    <StyledProject>
      <MaxWidth>
        <div className="projects">
          <h3>Some things I’ve built</h3>
        </div>
      </MaxWidth>
    </StyledProject>
  )
}

export default Projects
