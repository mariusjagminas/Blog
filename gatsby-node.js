// const { createFilePath } = require(`gatsby-source-filesystem`)

// //Add slug to markdown file

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === `MarkdownRemark`) {
//     const slug = createFilePath({ node, getNode, basePath: `pages` })
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
//   }
// }
const path = require("path")
const fs = require("fs-extra")
const yaml = require("js-yaml")
const flatten = require("flat")
const { createFilePath } = require(`gatsby-source-filesystem`)

/**
 * Creates JSON files from .yaml for gatsby-plugin-intl
 */

exports.onPreBootstrap = () => {
  console.log("Copying locales")

  const plTranslation = loadTranslationObject("pl")
  const frTranslation = loadTranslationObject("fr")

  // Create directory structure
  fs.existsSync(path.join(__dirname, "/public/intl")) ||
    fs.mkdirSync(path.join(__dirname, "/public/intl"))

  // Save bundled translation files
  fs.writeFileSync(
    path.join(__dirname, "/public/intl/pl.json"),
    JSON.stringify(flatten(plTranslation))
  )
  fs.writeFileSync(
    path.join(__dirname, "/public/intl/fr.json"),
    JSON.stringify(flatten(frTranslation))
  )

  
  function loadTranslationObject(languageCode) {
    const srcPath = path.join(
      __dirname,
      `/src/assets/translations/${languageCode}/`
    )
    const translationObjects = fs
      .readdirSync(srcPath)
      .map(file =>
        yaml.load(fs.readFileSync(path.join(srcPath, file)), {
          encoding: "utf-8",
        })
      )
    return Object.assign({}, ...translationObjects)
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    query MyQuery {
      allContentfulArticle {
        edges {
          node {
            nodeid
            frenchTitle
            polishTitle
          }
        }
      }
    }
  `).then(result => {
    // console.log(result.data);
    result.data.allContentfulArticle.edges.forEach(({ node }) => {
      createPage({
        path: node.nodeid,
        component: path.resolve(`./src/templates/article/article.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          nodeid: node.nodeid,
        },
      })
    })
  })
}
