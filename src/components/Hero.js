import React from 'react'
import PropTypes from 'prop-types'

import config from '../config/siteConfig'
import { Breakpoints } from './Breakpoints'
import Image from './Image'

const Hero = ({ image }) => {
  console.log(Breakpoints)
  return (
    <Image
      image={image.fluid}
      minWidth={Breakpoints.xl}
      height={config.heroHeight}
    />
  )
}

Hero.propTypes = {
  image: PropTypes.object.isRequired,
}
export default Hero
