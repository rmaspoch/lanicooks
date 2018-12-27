import React from 'react';
import PropTypes from 'prop-types';

import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { Link } from 'gatsby';
import Img from 'gatsby-image';

const styles = {
  post: css(tw`flex flex-row my-4`),
  thumbnail: css(`width: 180px`),
  details: css(tw`flex flex-col ml-4`),
  postTitle: css(tw`font-display font-medium text-2xl uppercase no-underline leading-none`),
  postDescription: css(tw`font-body`),
};

const PostLink = styled(Link)`
  ${tw`text-black hover:text-title-accent no-underline`}  
`;

const PostPreview = ({ post }) => {
  return (
    <div css={styles.post}>
      <div style={{ minWidth: '150px' }}>
        <Img alt="" sizes={post.thumbnail.sizes} />
      </div>
      <div css={styles.details}>
        <div css={styles.postTitle}>
          <PostLink to={`/blog/${post.slug}`}>{post.title}</PostLink>
        </div>
        <div
          css={styles.postDescription}
          dangerouslySetInnerHTML={{ __html: post.description.childMarkdownRemark.html }} />
      </div>
    </div>
  );
};

PostPreview.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostPreview;