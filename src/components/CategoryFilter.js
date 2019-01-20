import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'
import styled from '@emotion/styled'

import SectionSubHeader from './SectionSubHeader'

const CategoryFilterWrapper = styled.div`
  ${tw`flex flex-col mb-3`}
`
const CategoryListWrapper = styled.div`
  ${tw`bg-grey-lighter rounded px-2 py-1`}
`
const CategoryList = styled.ul`
  ${tw`list-reset flex flex-wrap m-1`}
`
const Category = styled.li`
  ${tw`mr-4`}
`
const CategoryLink = styled(Link)`
  ${tw`no-underline font-body font-semibold text-sm text-grey-darkest hover:text-accent hover:underline`}
`

const CategoryFilter = ({ categories }) => {
  return (
    <CategoryFilterWrapper>
      <SectionSubHeader title="Filter by category" />
      <CategoryListWrapper>
        <CategoryList>
          {categories.map(category => {
            return (
              <Category key={category.id}>
                <CategoryLink to={`/category/${category.slug}`}>
                  {`${category.title} (${category.count})`}
                </CategoryLink>
              </Category>
            )
          })}
        </CategoryList>
      </CategoryListWrapper>
    </CategoryFilterWrapper>
  )
}

CategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      slug: PropTypes.string,
      title: PropTypes.string,
      count: PropTypes.number,
    })
  ).isRequired,
}

export default CategoryFilter
