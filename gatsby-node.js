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
  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/BlogPost.js')
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
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          })
        })
      })
    )
  })
}
