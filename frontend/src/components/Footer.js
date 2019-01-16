import React from 'react'
import styled from 'styled-components'

const FooterStyle = styled.footer`
  display: flex;
  justify-content: space-evenly;
  background: ${props => props.theme.yellow};
  margin: 0;
  position: relative;
`

const Footer = () => (
  <FooterStyle>
    <p>500 Spring Garden St. Philadelphia, PA 19123</p>
    <p>(215) 525-0175</p>
    <p>marketing@yardsbrewing.com</p>
  </FooterStyle>
)

export default Footer
