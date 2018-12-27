import React from 'react';
import PropTypes from 'prop-types';

import { css } from '@emotion/core';
import { StaticQuery, graphql } from 'gatsby';

import Header from './Header';
import Hero from './Hero';

import './index.css';

const styles = {
  main: css(tw`flex flex-col`),
  center: css(tw`w-3/5 mx-auto`)
};

const Layout = ({ children, showHero }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            subTitle
          }
        }
      }
    `}
    render={data => (
      <div css={styles.main}>
        <div css={styles.center}>
          <Header title={data.site.siteMetadata.title} subTitle={data.site.siteMetadata.subTitle} />
        </div>
        {showHero && <Hero />}
        <div css={styles.center}>
          {children}
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  showHero: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Layout;
