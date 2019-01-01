import React from 'react'
import PropTypes from 'prop-types'

import styled from '@emotion/styled'

const Body = styled.div`
  ${tw`w-full px-4 pb-4`}
`
const PageBody = ({ children }) => <Body>{children}</Body>

PageBody.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageBody
