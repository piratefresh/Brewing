import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Nav from './Nav'

const HeaderContainer = styled.header`
  font-family: 'Open Sans', sans-serif;
  margin: 0 auto;
  margin-bottom: 2%;
  padding: 2%;
  width: 100%;
  font-size: 1.5em;
  background: transparent;
`

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <Nav />
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
