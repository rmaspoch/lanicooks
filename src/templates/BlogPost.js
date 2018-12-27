import React from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';

import Layout from '../components/Layout';

const BlogPost = ({ data }) => (
  <Layout>
    <h1>{data.contentfulBlogPost.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: data.contentfulBlogPost.content.childContentfulRichText.html }} />
  </Layout>
);

BlogPost.propTypes = {
  data: PropTypes.object.isRequired
};

export default BlogPost;

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      content {
        childContentfulRichText {
          html
        }
      }
}
  }
`;