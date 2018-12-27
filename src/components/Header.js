import React from 'react';
import PropTypes from 'prop-types'

import { css } from '@emotion/core';

import { Link } from 'gatsby';

import Logo from './Logo';

const styles = {
  container: css(tw`flex flex-row justify-start items-center my-4`),
  titleContainer: css(tw`flex flex-col ml-2`),
  title: css(tw`font-display font-medium tracking-tight text-title-accent text-4xl uppercase`),
  subTitle: css(tw`font-body text-lg -mt-3`)
};

const Header = ({ title, subTitle }) => (
  <div css={styles.container}>
    <Link to="/">
      <Logo />
    </Link>
    <div css={styles.titleContainer}>
      <div css={styles.title}>Lani Cooks</div>
      <div css={styles.subTitle}>and you are invited</div>
    </div>
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
}

export default Header;
