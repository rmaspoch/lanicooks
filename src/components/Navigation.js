import React from 'react'

import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { Link } from 'gatsby'

import PinterestIcon from '../images/pinterest.svg'
import InstagramIcon from '../images/instagram.svg'
import FacebookIcon from '../images/facebook.svg'

const NavWrapper = styled.div`
  ${tw`w-full block flex-grow md:flex md:items-center md:w-auto ml-2`}
`
const Nav = styled.div`
  ${tw`md:flex-grow`}
`
const NavLink = styled(Link)`
  ${tw`block mt-4 md:inline-block md:mt-0 font-display font-medium text-xl text-grey-darkest hover:text-accent uppercase no-underline mr-4`}
`
const SocialNav = styled.div`
  ${tw`flex my-4 md:my-0`}
`
const SocialIconLink = styled(Link)`
  width: 24px;
  height: 24px;
  ${tw`mr-2`}
`
const Navigation = () => (
  <NavWrapper>
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/">Recipes</NavLink>
      <NavLink to="/">Store</NavLink>
      <NavLink to="/">About</NavLink>
    </Nav>
    <SocialNav>
      <SocialIconLink to="/">
        <PinterestIcon />
      </SocialIconLink>
      <SocialIconLink to="/">
        <InstagramIcon />
      </SocialIconLink>
      <SocialIconLink to="/">
        <FacebookIcon />
      </SocialIconLink>
    </SocialNav>
  </NavWrapper>
)

export default Navigation
