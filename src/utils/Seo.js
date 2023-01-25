import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'

export default function Seo({ title, description, schemaMarkup, img }) {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `)
  const settings = site.siteMetadata
  const shareImage = 'Dewynters-Share.jpg'
  return (
    <Helmet>
      <html lang="en" />
      <title>{title || settings.title}</title>
      <meta name="description" content={description || settings.description} />
      <link rel="icon" href="./static/favicon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta property="og:url" content={`${settings.siteUrl}${pathname}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || settings.title} />
      <meta
        property="og:description"
        content={description || settings.description}
      />
      <meta
        property="og:image"
        content={img || `${settings.siteUrl}/${shareImage}`}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={`${settings.siteUrl}`} />
      <meta property="twitter:url" content={`${settings.siteUrl}${pathname}`} />
      <meta name="twitter:creator" content={settings.twitter} />
      <meta name="twitter:title" content={title || settings.title} />
      <meta
        name="twitter:description"
        content={description || settings.description}
      />
      <meta
        name="twitter:image"
        content={img || `${settings.siteUrl}/${shareImage}`}
      />
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </Helmet>
  )
}
