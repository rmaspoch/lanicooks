import React from 'react'
import PropTypes from 'prop-types'

import styled from '@emotion/styled'

import { Link } from 'gatsby'

import Logo from './Logo'
import Navigation from './Navigation'

// const Wrapper = styled.div`
//   ${tw`w-full lg:w-4/5 md:mx-auto`}
// `

const Wrapper = styled.div`
  ${tw`flex items-center justify between flex-wrap py-2 px-4`}
`
const LogoLink = styled(Link)`
  ${tw`flex flex-row justify-start items-center no-underline mr-16`}
`
const TitleWrapper = styled.div`
  ${tw`flex flex-col ml-2`}
`
const Title = styled.div`
  ${tw`font-display font-medium tracking-tight text-accent text-4xl uppercase`}
`
const Tagline = styled.div`
  ${tw`font-body text-grey-darker text-lg -mt-3`}
`

const Header = ({ title, tagline }) => (
  <Wrapper>
    <LogoLink to="/">
      <Logo />
      <TitleWrapper>
        <Title>{title}</Title>
        <Tagline>{tagline}</Tagline>
      </TitleWrapper>
    </LogoLink>
    <Navigation />
  </Wrapper>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
}

export default Header
