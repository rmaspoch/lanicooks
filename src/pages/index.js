import React from 'react'
import PropTypes from 'prop-types'

import { graphql } from 'gatsby'

import 'typeface-oswald'
import 'typeface-open-sans'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import PageBody from '../components/PageBody'
import SectionHeader from '../components/SectionHeader'
import PostPreviewList from '../components/PostPreviewList'

import '../styles/global'

const IndexPage = ({ data }) => {
  const heroImage = data.heroImage.childImageSharp
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
    <Layout heroImage={heroImage} heroImageAlt="Cooking ingredients">
      <SEO title="Home" keywords={[`lani cooks`, `cooking`, `blog`]} />
      <PageBody>
        <SectionHeader title="Recent Posts" />
        <PostPreviewList posts={posts} />
      </PageBody>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    heroImage: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object,
      }),
    }),
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
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query indexPageQuery {
    heroImage: file(relativePath: { eq: "cooking.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    allContentfulBlogPost(
      sort: { fields: [publishDate], order: DESC }
      limit: 8
    ) {
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
