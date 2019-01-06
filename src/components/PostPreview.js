import React from 'react'
import PropTypes from 'prop-types'

import styled from '@emotion/styled'

import { Link } from 'gatsby'
import Img from 'gatsby-image'

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
  ${tw`font-display font-medium text-xl text-black uppercase leading-none mb-2`}
`
const PostDescription = styled.div`
  ${tw`font-body text-grey-darkest`}
`
const PostPreview = ({ post }) => {
  return (
    <PostContainer>
      <PostCard>
        <PostLink to={`/blog/${post.slug}`}>
          <Img fluid={post.featureImage.fluid} alt={post.featureImage.title} />
          <PostBody>
            <PostTitle>{post.title}</PostTitle>
            <PostDescription>{post.description.description}</PostDescription>
          </PostBody>
        </PostLink>
      </PostCard>
    </PostContainer>
  )
}

PostPreview.propTypes = {
  post: PropTypes.object.isRequired,
}

export default PostPreview
