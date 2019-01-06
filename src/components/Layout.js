import React from 'react'
import PropTypes from 'prop-types'

import styled from '@emotion/styled'

import config from '../config/siteConfig'
import Header from './Header'
import Hero from './Hero'

import './index.css'

const Wrapper = styled.div`
  ${tw`flex flex-col`}
`

const Layout = ({ children, heroImage, heroImageAlt }) => (
  <Wrapper>
    <Header title={config.siteTitle} tagline={config.siteTagline} />
    {heroImage && <Hero image={heroImage} imageAlt={heroImageAlt || ''} />}
    {children}
  </Wrapper>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  heroImage: PropTypes.object,
  heroImageAlt: PropTypes.string,
}

export default Layout
