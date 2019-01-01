import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { css } from '@emotion/core'
import styled from '@emotion/styled'

import config from '../config/siteConfig'
import Layout from '../components/Layout'

const Container = styled.div`
  ${tw`w-full md:w-4/5 md:mx-auto md:px-0 px-4 pb-4`}
`
const Title = styled.h2`
  ${tw`font-display font-medium text-3xl uppercase`}
`
const baseBodyStyle = css`
  ${tw`font-body`}
  h1 {
    ${tw`font-display font-medium text-2xl`}
  }
  h2 {
    ${tw`font-display font-medium text-xl`}
  }
  h3 {
    ${tw`font-display font-medium`}
  }
`
const Body = styled.div`
  ${baseBodyStyle}
`
const RecipeTitle = styled.h3`
  ${tw`font-display text-2xl uppercase`}
`

const RecipeInstructions = styled.div`
  ${baseBodyStyle}
  ol {
    list-style: none;
    counter-reset: step-counter;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;

    li {
      counter-increment: step-counter;
      position: relative;
      border-left: 1px solid #343434;
      min-height: 2rem;
      ${tw`ml-10 mb-4 pl-4`}
    }
    li::before {
      content: counter(step-counter);
      position: absolute;
      top: 0;
      left: -1.5rem;
      width: 1.5rem;
      height: 2rem;
      padding: 0;
      ${tw`font-display font-medium leading-none text-2xl`}
    }
  }
`

const BlogPost = ({ data }) => {
  const { title, featureImage, content, recipe } = data.contentfulBlogPost
  return (
    <Layout>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <Img fluid={featureImage.fluid} />
      <Container>
        <Title>{title}</Title>
        <Body
          dangerouslySetInnerHTML={{
            __html: content.childMarkdownRemark.html,
          }}
        />
        <RecipeTitle>Ingredients</RecipeTitle>
        <Body
          dangerouslySetInnerHTML={{
            __html: recipe.ingredients.childMarkdownRemark.html,
          }}
        />
        <RecipeTitle>Instructions</RecipeTitle>
        <RecipeInstructions
          dangerouslySetInnerHTML={{
            __html: recipe.instructions.childMarkdownRemark.html,
          }}
        />
      </Container>
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BlogPost

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM DD, YYYY")
      content {
        childMarkdownRemark {
          html
        }
      }
      featureImage {
        title
        fluid(maxWidth: 1600, maxHeight: 600) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      recipe {
        ingredients {
          childMarkdownRemark {
            html
          }
        }
        instructions {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`
