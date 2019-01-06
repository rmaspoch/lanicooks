import React from 'react'
import PropTypes from 'prop-types'

import config from '../config/siteConfig'
import { Breakpoints } from './Breakpoints'
import Image from './Image'

const Hero = ({ image, imageAlt }) => {
  return (
    <Image
      image={image.fluid}
      imageAlt={imageAlt}
      minWidth={Breakpoints.xl}
      height={config.heroHeight}
    />
  )
}

Hero.propTypes = {
  image: PropTypes.object.isRequired,
  imageAlt: PropTypes.string.isRequired,
}
export default Hero
