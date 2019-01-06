import React from 'react'
import PropTypes from 'prop-types'

import styled from '@emotion/styled'
import Img from 'gatsby-image'

const ImageWrapper = styled.div`
  @media (min-width: ${props => props.minWidth}) {
    .gatsby-image-wrapper {
      height: ${props => props.height};
    }
  }
`
const Image = ({ image, imageAlt, minWidth, height }) => (
  <ImageWrapper minWidth={minWidth} height={height}>
    <Img fluid={image} alt={imageAlt} />
  </ImageWrapper>
)

Image.propTypes = {
  image: PropTypes.object.isRequired,
  imageAlt: PropTypes.string.isRequired,
  minWidth: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
}

export default Image
