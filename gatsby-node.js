const path = require('path')

//* Relative path webpack config
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}

//* Creating pages via DSG -Deferred Static Generation
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: '/using-dsg',
    component: require.resolve('./src/templates/using-dsg.js'),
    context: {},
    defer: true,
  })
}


// async function createLegalPages({ graphql, actions }) {
//   const legalTemplate = path.resolve('./src/templates/legalTemplate.js')
//   const { data } = await graphql(`
//     query LegalPageQuery {
//       pages: allLegalPagesJson {
//         nodes {
//           title
//           slug
//         }
//       }
//     }
//   `)
//   data.pages.nodes.forEach(page => {
//     console.log(`creating a page for ${page.title}`)
//     actions.createPage({
//       path: `${page.slug}`,
//       component: legalTemplate,
//       context: {
//         slug: page.slug,
//       },
//     })
//   })
// }
// async function createMainPages({ graphql, actions }) {
//   const pageTemplate = path.resolve('./src/templates/whatsOnTemplate.js')
//   const { data } = await graphql(`
//     query CreatePagesQuery {
//       pages: allPagesJson {
//         nodes {
//           meta {
//             title
//             slug
//           }
//         }
//       }
//     }
//   `)
//   data.pages.nodes.forEach(page => {
//     console.log(`creating a page for ${page.meta[0].title}`)
//     actions.createPage({
//       path: `${page.meta[0].slug}`,
//       component: pageTemplate,
//       context: {
//         slug: page.meta[0].slug,
//       },
//     })
//   })
// }
// exports.createPages = async params => {
//   await Promise.all([createMainPages(params), createLegalPages(params)])
// }