import React from 'react';

import { graphql } from 'gatsby';

import 'typeface-oswald';
import 'typeface-open-sans';

import styled from '@emotion/styled';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import PostPreview from '../components/PostPreview';

import '../styles/global';

const SectionHeader = styled.div`
  ${tw`font-display font-medium tracking-tight text-3xl uppercase mt-4`}
`;

const IndexPage = ({ data }) => {
  const posts = data.allContentfulBlogPost.edges;
  return (
    <Layout showHero={true}>
      <SEO title="Home" keywords={[`lani cooks`, `cooking`, `blog`]} />
      <SectionHeader>Recent Posts</SectionHeader>
      {
        posts.map(({ node }) => {
          return (
            <PostPreview key={node.slug} post={node} />
          );
        })
      }
    </Layout>
  );
}

export default IndexPage;

export const pageQuery = graphql`
  query pageQuery {
    allContentfulBlogPost (sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          description {
            childMarkdownRemark {
              html
            }
          }
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          thumbnail {
            sizes(maxWidth: 180, maxHeight: 180, resizingBehavior: SCALE) {
              ...GatsbyContentfulSizes_withWebp
            }
          }
        }
      }
    }
  }
`;