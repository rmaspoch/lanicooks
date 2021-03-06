import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { graphql } from 'gatsby'

import { css } from '@emotion/core'
import styled from '@emotion/styled'

import config from '../config/siteConfig'
import Layout from '../components/Layout'
import PageBody from '../components/PageBody'
import SectionHeader from '../components/SectionHeader'
import PostPreviewList from '../components/PostPreviewList'

const CategoryTemplate = ({ data }) => {
  const { title, blog_post: blogPosts } = data.contentfulCategory
  const posts =
    blogPosts && blogPosts.length > 0
      ? blogPosts.map(post => ({
          id: post.id,
          slug: post.slug,
          title: post.title,
          publishDate: post.publishDate,
          description: post.description.description,
          featureImage: post.featureImage,
          categories: post.categories,
        }))
      : []

  return (
    <Layout>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <PageBody>
        <SectionHeader title={title} />
        <PostPreviewList posts={posts} />
      </PageBody>
    </Layout>
  )
}

CategoryTemplate.propTypes = {
  data: PropTypes.shape({
    contentfulCategory: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      slug: PropTypes.string,
      blog_post: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          title: PropTypes.string,
          description: PropTypes.shape({
            description: PropTypes.string,
          }),
          slug: PropTypes.string,
          publishDate: PropTypes.string,
          featureImage: PropTypes.shape({
            title: PropTypes.string.isRequired,
            fluid: PropTypes.object.isRequired,
          }),
          categories: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.string,
              slug: PropTypes.string,
              title: PropTypes.string,
            }).isRequired
          ),
        })
      ),
    }),
  }),
}

export default CategoryTemplate

export const pageQuery = graphql`
  query categoryQuery($slug: String!) {
    contentfulCategory(slug: { eq: $slug }) {
      id
      title
      slug
      blog_post {
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
`
