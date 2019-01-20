const Promise = require('bluebird')
const path = require('path')

exports.onCreateBabelConfig = ({ actions: { setBabelPlugin } }) => {
  setBabelPlugin({ name: 'babel-plugin-emotion' })
  setBabelPlugin({
    name: 'babel-plugin-tailwind-components',
    options: {
      config: './tailwind.config.js',
      format: 'auto',
    },
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const createBlogPosts = new Promise((resolve, reject) => {
    const postTemplate = path.resolve('./src/templates/Post.js')
    resolve(
      graphql(`
        {
          allContentfulBlogPost {
            edges {
              node {
                title
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/${post.node.slug}/`,
            component: postTemplate,
            context: {
              slug: post.node.slug,
            },
          })
        })
      })
    )
  })

  const createCategories = new Promise((resolve, reject) => {
    const categoryTemplate = path.resolve('./src/templates/Category.js')
    resolve(
      graphql(`
        {
          allContentfulCategory {
            edges {
              node {
                title
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        const categories = result.data.allContentfulCategory.edges
        categories.forEach((category, index) => {
          createPage({
            path: `/category/${category.node.slug}/`,
            component: categoryTemplate,
            context: {
              slug: category.node.slug,
            },
          })
        })
      })
    )
  })

  return Promise.all([createBlogPosts, createCategories])
}
