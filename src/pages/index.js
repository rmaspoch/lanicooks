import React from 'react'

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
  const posts = data.allContentfulBlogPost.edges

  return (
    <Layout heroImage={heroImage}>
      <SEO title="Home" keywords={[`lani cooks`, `cooking`, `blog`]} />
      <PageBody>
        <SectionHeader title="Recent Posts" />
        <PostPreviewList posts={posts} />
      </PageBody>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    heroImage: file(relativePath: { eq: "cooking.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
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
        }
      }
    }
  }
`
