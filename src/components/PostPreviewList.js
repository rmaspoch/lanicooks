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
      {posts.map(({ node }) => {
        return <PostPreview key={node.id} post={node} />
      })}
    </PostList>
  )
}

PostPreviewList.propTypes = {
  posts: PropTypes.array.isRequired,
}

export default PostPreviewList
