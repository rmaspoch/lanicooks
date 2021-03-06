import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { graphql } from 'gatsby'

import { css } from '@emotion/core'
import styled from '@emotion/styled'

import config from '../config/siteConfig'
import { Breakpoints } from '../components/Breakpoints'
import Layout from '../components/Layout'
import Image from '../components/Image'
import TagList from '../components/TagList'

const Container = styled.div`
  ${tw`w-full md:w-4/5 md:mx-auto md:px-0 px-4 pb-4`}
`
const Title = styled.h2`
  ${tw`font-display font-medium text-3xl uppercase mt-4 mb-2`}
`
const PostDate = styled.div`
  ${tw`font-body text-grey-dark text-sm mb-2`}
`
const PostCategories = styled.div`
  ${tw`my-2`}
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
  hr {
    ${tw`border-grey-lightest`}
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
      left: -1.75rem;
      width: 2rem;
      height: 2rem;
      padding: 0;
      ${tw`font-display font-medium leading-none text-2xl`}
    }
  }
`
const RecipeMetadata = styled.div`
  ${tw`mt-2`}
`
const RecipeMetaSection = styled.p`
  ${tw`flex flex-col md:flex-row font-body font-medium text-sm my-0`}
  span {
    ${tw`mr-3`}
  }
`
const PostTemplate = ({ data }) => {
  const {
    title,
    publishDate,
    categories,
    featureImage,
    content,
    recipe,
  } = data.contentfulBlogPost
  return (
    <Layout>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <Image
        image={featureImage.fluid}
        imageAlt={featureImage.title}
        minWidth={Breakpoints.xl}
        height={config.heroHeight}
      />
      <Container>
        <Title>{title}</Title>
        <PostDate>{publishDate}</PostDate>
        <PostCategories>
          <TagList tags={categories} />
        </PostCategories>
        <Body
          dangerouslySetInnerHTML={{
            __html: content.childMarkdownRemark.html,
          }}
        />
        <RecipeTitle>{title}</RecipeTitle>
        <RecipeMetadata>
          {recipe.cuisine && (
            <RecipeMetaSection>{`Cuisine: ${
              recipe.cuisine
            }`}</RecipeMetaSection>
          )}
          <RecipeMetaSection>{`Serves: ${recipe.servings}`}</RecipeMetaSection>
        </RecipeMetadata>
        <RecipeMetadata>
          <RecipeMetaSection>
            <span>Prep time: {`${recipe.prepTime}`}</span>
            {recipe.cookingTime && (
              <span>Cook time: {`${recipe.cookingTime}`}</span>
            )}
            <span>Total time: {`${recipe.totalTime}`}</span>
          </RecipeMetaSection>
        </RecipeMetadata>
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
        {recipe.notes && (
          <React.Fragment>
            <RecipeTitle>Notes</RecipeTitle>
            <Body
              dangerouslySetInnerHTML={{
                __html: recipe.notes.childMarkdownRemark.html,
              }}
            />
          </React.Fragment>
        )}
      </Container>
    </Layout>
  )
}

PostTemplate.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    publishDate: PropTypes.string,
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        slug: PropTypes.string,
      }).isRequired
    ),
    content: PropTypes.shape({
      childMarkdownRemark: PropTypes.shape({
        html: PropTypes.string,
      }),
    }),
    featureImage: PropTypes.shape({
      title: PropTypes.string.isRequired,
      fluid: PropTypes.object.isRequired,
    }),
    recipe: PropTypes.shape({
      cuisine: PropTypes.string,
      servings: PropTypes.string,
      prepTime: PropTypes.string,
      cookingTime: PropTypes.string,
      totalTime: PropTypes.string,
      ingredients: PropTypes.shape({
        childMarkdownRemark: PropTypes.shape({
          html: PropTypes.string,
        }),
      }),
    }),
    instructions: PropTypes.shape({
      childMarkdownRemark: PropTypes.shape({
        html: PropTypes.string,
      }),
    }),
    notes: PropTypes.shape({
      childMarkdownRemark: PropTypes.shape({
        html: PropTypes.string,
      }),
    }),
  }).isRequired,
}

export default PostTemplate

export const pageQuery = graphql`
  query postQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM DD, YYYY")
      categories {
        id
        title
        slug
      }
      content {
        childMarkdownRemark {
          html
        }
      }
      featureImage {
        title
        fluid(maxWidth: 1600, quality: 80) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      recipe {
        cuisine
        servings
        prepTime
        cookingTime
        totalTime
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
        notes {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`
