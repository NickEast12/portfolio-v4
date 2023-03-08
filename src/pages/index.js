import React, { useState } from 'react'

import { Layout } from 'components/global'
import { About, Contact, Hero, Projects } from 'components/blocks'

const IndexPage = () => {
  const [open, setOpen] = useState(false)
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default IndexPage
