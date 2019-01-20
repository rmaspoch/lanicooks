import React from 'react'
import PropTypes from 'prop-types'

import styled from '@emotion/styled'

import PostPreview from './PostPreview'

const PostList = styled.div`
  ${tw`flex flex-row flex-wrap -mx-3`}
`

const PostPreviewList = ({ posts }) => {
  return (
    <PostList>
      {posts.map(post => {
        return <PostPreview key={post.id} post={post} />
      })}
    </PostList>
  )
}

PostPreviewList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ).isRequired,
}

export default PostPreviewList
