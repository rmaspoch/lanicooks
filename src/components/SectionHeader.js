import React from 'react'
import PropTypes from 'prop-types'

import styled from '@emotion/styled'

const SectionTitle = styled.div`
  ${tw`font-display font-medium tracking-tight text-3xl uppercase mt-4 mb-2`}
`

const SectionHeader = ({ title }) => <SectionTitle>{title}</SectionTitle>

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
}

export default SectionHeader
