import React from 'react'
import PropTypes from 'prop-types'

import styled from '@emotion/styled'

import Tag from './Tag'

const TagListWrapper = styled.div`
  ${tw`flex flex-row flex-wrap`}
`

const TagList = ({ tags }) => {
  return (
    <TagListWrapper>
      {tags.map(({ id, title, slug }) => {
        return <Tag key={id} title={title} slug={slug} />
      })}
    </TagListWrapper>
  )
}

TagList.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      slug: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
}

export default TagList
