import React from 'react'
import PropTypes from 'prop-types'

import Img from 'gatsby-image'

const Hero = ({ image }) => <Img fluid={image.fluid} />

Hero.propTypes = {
  image: PropTypes.object.isRequired,
}
export default Hero
