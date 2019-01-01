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

const Layout = ({ children, heroImage }) => (
  <Wrapper>
    <Header title={config.siteTitle} tagline={config.siteTagline} />
    {heroImage && <Hero image={heroImage} />}
    {children}
  </Wrapper>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  heroImage: PropTypes.object,
}

export default Layout
