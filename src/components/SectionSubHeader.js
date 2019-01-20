import React from 'react'
import PropTypes from 'prop-types'

import styled from '@emotion/styled'

const SubSectionTitle = styled.div`
  ${tw`font-display font-medium tracking-tight text-2xl mt-3 mb-1`}
`

const SectionSubHeader = ({ title }) => (
  <SubSectionTitle>{title}</SubSectionTitle>
)

SectionSubHeader.propTypes = {
  title: PropTypes.string.isRequired,
}

export default SectionSubHeader
