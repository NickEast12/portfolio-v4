import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'

const GetImage = ({ data, alt }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title } = site.siteMetadata
  const image = getImage(data)
  return <GatsbyImage image={image} alt={`${alt || title} `} />
}

export default GetImage
