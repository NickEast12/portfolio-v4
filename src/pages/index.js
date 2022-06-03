import React from 'react'

import { Layout } from 'utils/Layout'
import * as comp from 'components/index'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
  const { tech } = data
  console.log(tech)
  return (
    <Layout>
      <comp.IndexHeader />
      <comp.IndexIntro />
      <comp.IndexAbout data={tech.nodes} />
    </Layout>
  )
}

export default IndexPage

export const IndexQuery = graphql`
  query IndexQuery {
    tech: allTechJson {
      nodes {
        tech
      }
    }
  }
`
