import React from 'react';

import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Logo = () => (
  <StaticQuery
    query={graphql`
      query {
        logoImage: file(relativePath: { eq: "lanicooks-logo.png" }) {
          childImageSharp {
            fixed(width: 87, height: 104) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Img fixed={data.logoImage.childImageSharp.fixed} />}
  />
);

export default Logo;

