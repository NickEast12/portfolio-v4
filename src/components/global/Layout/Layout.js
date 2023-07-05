import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

//* CSS
import 'normalize.css'

//* Local Imports
import GlobalStyles from 'utils/GlobalStyles'
import theme from 'utils/Theme'
import Seo from 'utils/Seo'
import { Nav } from '../Nav'

// import 'utils/dat.gui.min'
// import 'utils/fluid-background'

//* Smooth scroll on all links
if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]')
}

const icon = 'favicon.png'

const Layout = ({ children, title, description }) => {
  const { allSite } = useStaticQuery(graphql`
    query SiteQuery {
      allSite {
        nodes {
          siteMetadata {
            title
            siteUrl
            siteName
            description
            author
          }
        }
      }
    }
  `)
  const settings = allSite.nodes[0].siteMetadata
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    name: `${settings.title}`,
    description: `${settings.description}`,
    url: `${settings.siteUrl}`,
    logo: `${settings.siteUrl}/${icon}`,
  }
  return (
    <ThemeProvider theme={theme}>
      <Seo schemaMarkup={schema} title={title} description={description} />
      <>
        <GlobalStyles />
        <Nav />
        <main>
          {children}
          <canvas id="fluid-background" />
        </main>
      </>
    </ThemeProvider>
  )
}

export default Layout
