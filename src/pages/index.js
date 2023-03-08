import React, { useState } from 'react'

import { Layout } from 'components/global'
import { About, Contact, Hero, Projects } from 'components/blocks'

const IndexPage = () => {
  const [open, setOpen] = useState(false)
  return (
    <Layout>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        voluptates error fuga laborum non ipsam rem maxime eveniet, tempore unde
        sunt recusandae deleniti voluptas aliquid.
      </p>
      {/* <Hero /> */}
      <About />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default IndexPage
