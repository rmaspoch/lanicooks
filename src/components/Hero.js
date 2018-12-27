import React from 'react';

import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Hero = () => (
  <StaticQuery
    query={graphql`
      query {
        heroImage: file(relativePath: { eq: "okra.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.heroImage.childImageSharp.fluid} />}
  />
);

export default Hero;

