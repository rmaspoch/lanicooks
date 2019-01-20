import React from 'react'
import PropTypes from 'prop-types'

import styled from '@emotion/styled'

import { Link } from 'gatsby'

const TagWrapper = styled.div`
  ${tw`bg-grey-lighter rounded px-2 py-1 mr-2`}
`
const TagLink = styled(Link)`
  ${tw`no-underline font-body font-semibold text-sm text-grey-darkest hover:text-accent hover:underline`}
`

const Tag = ({ title, slug }) => (
  <TagWrapper>
    <TagLink to={`/category/${slug}`}>{title}</TagLink>
  </TagWrapper>
)

Tag.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string,
}

export default Tag
