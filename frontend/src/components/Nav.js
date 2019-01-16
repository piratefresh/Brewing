import React from 'react'
import styled from 'styled-components'

import Link from './StyledLink'

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100vw;
  a {
    color: ${props => props.theme.yellow};
    text-decoration: none;
    line-height: 1.8em;
    text-transform: uppercase;
    vertical-align: baseline;
    padding: 20px 40px;
  }
`

const Nav = () => (
  <Navigation>
    <Link to="/beers/">Beers</Link>
    <Link to="/taproom">Visit</Link>
    <Link to="/">Logo</Link>
    <Link to="/contact">Contact</Link>
    <a href="http://yardsbrewing.web-stores.biz">Shop</a>
  </Navigation>
)

export default Nav
