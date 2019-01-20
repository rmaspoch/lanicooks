import React from 'react'
import PropTypes from 'prop-types'

import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import PageBody from '../components/PageBody'
import SectionHeader from '../components/SectionHeader'
import CategoryFilter from '../components/CategoryFilter'
import PostPreviewList from '../components/PostPreviewList'

const RecipesPage = ({ data }) => {
  const categories = data.allContentfulCategory.edges.map(({ node }) => ({
    id: node.id,
    title: node.title,
    slug: node.slug,
    count: node.blog_post ? node.blog_post.length : 0,
  }))
  const posts = data.allContentfulBlogPost.edges.map(({ node }) => ({
    id: node.id,
    slug: node.slug,
    title: node.title,
    publishDate: node.publishDate,
    description: node.description.description,
    featureImage: node.featureImage,
    categories: node.categories,
  }))

  return (
    <Layout>
      <SEO
        title="Recipes"
        keywords={[`lani cooks`, `cooking`, `blog`, `recipes`]}
      />
      <PageBody>
        <SectionHeader title="Recipes" />
        <CategoryFilter categories={categories} />
        <PostPreviewList posts={posts} />
      </PageBody>
    </Layout>
  )
}

RecipesPage.propTypes = {
  data: PropTypes.shape({
    allContentfulCategory: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string,
            slug: PropTypes.string,
            title: PropTypes.string,
            blog_post: PropTypes.arrayOf(
              PropTypes.shape({
                id: PropTypes.string,
              })
            ),
          }),
        })
      ),
    }).isRequired,
    allContentfulBlogPost: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            description: PropTypes.shape({
              description: PropTypes.string,
            }),
            slug: PropTypes.string,
            publishDate: PropTypes.string,
            featureImage: PropTypes.shape({
              title: PropTypes.string,
              fluid: PropTypes.object,
            }),
            categories: PropTypes.arrayOf(
              PropTypes.shape({
                id: PropTypes.string,
                slug: PropTypes.string,
                title: PropTypes.string,
              })
            ),
          }),
        })
      ),
    }).isRequired,
  }).isRequired,
}

export default RecipesPage

export const pageQuery = graphql`
  query recipesPageQuery {
    allContentfulCategory(sort: { fields: [title], order: ASC }) {
      edges {
        node {
          id
          slug
          title
          blog_post {
            id
          }
        }
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          id
          title
          description {
            description
          }
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          featureImage {
            title
            fluid(maxWidth: 1920) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          categories {
            id
            slug
            title
          }
        }
      }
    }
  }
`
