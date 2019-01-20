import React from 'react'
import PropTypes from 'prop-types'

import styled from '@emotion/styled'

import { Link } from 'gatsby'
import Img from 'gatsby-image'

import TagList from './TagList'

const PostContainer = styled.div`
  ${tw`w-full md:w-1/2 lg:w-1/3 xl:w-1/4 flex-no-grow flex-no-shrink mb-5 px-3`}
`
const PostCard = styled.div`
  ${tw`rounded shadow-md overflow-hidden`}
  &:hover {
    ${tw`bg-grey-lighter shadow-lg`}
    a {
      .gatsby-image-wrapper {
        ${tw`opacity-50`}
      }
    }
  }
`
const PostLink = styled(Link)`
  ${tw`no-underline`}
`
const PostBody = styled.div`
  ${tw`px-3 py-4`}
`
const PostTitle = styled.div`
  ${tw`font-display font-medium text-xl text-black uppercase leading-none mb-1`}
`
const PostDate = styled.div`
  ${tw`font-body text-grey-dark text-sm mb-2`}
`
const PostDescription = styled.div`
  ${tw`font-body text-grey-darkest`}
`
const Categories = styled.div`
  ${tw`mx-3 mb-4`}
`

const PostPreview = ({ post }) => {
  return (
    <PostContainer>
      <PostCard>
        <PostLink to={`/${post.slug}`}>
          <Img fluid={post.featureImage.fluid} alt={post.featureImage.title} />
          <PostBody>
            <PostTitle>{post.title}</PostTitle>
            <PostDate>{`On ${post.publishDate}`}</PostDate>
            <PostDescription>{post.description}</PostDescription>
          </PostBody>
        </PostLink>
        <Categories>
          <TagList tags={post.categories} />
        </Categories>
      </PostCard>
    </PostContainer>
  )
}

PostPreview.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    slug: PropTypes.string,
    title: PropTypes.string,
    publishDate: PropTypes.string,
    description: PropTypes.string,
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
  }).isRequired,
}

export default PostPreview
