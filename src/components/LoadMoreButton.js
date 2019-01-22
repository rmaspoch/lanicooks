import React from 'react'
import PropTypes from 'prop-types'

import styled from '@emotion/styled'

import ChevronDownIcon from '../images/chevron-down.svg'

const Wrapper = styled.div`
  ${tw`flex justify-center items-center p-3`}
`
const ShowMoreButton = styled.a`
  ${tw`font-body text-lg font-semibold py-2 px-4 hover:text-accent flex flex-col items-center cursor-pointer`}
`
const Icon = styled(ChevronDownIcon)`
  ${tw`ml-1`}
  fill: currentColor;
`

const LoadMoreButton = ({ loadMore }) => {
  return (
    <Wrapper>
      <ShowMoreButton onClick={loadMore}>
        <div>Show More</div>
        <Icon />
      </ShowMoreButton>
    </Wrapper>
  )
}

LoadMoreButton.propTypes = {
  loadMore: PropTypes.func.isRequired,
}

export default LoadMoreButton
