import React from 'react';
import Logo from '../global/Logo'
import Nav from './Nav'
import styled from 'styled-components'

const HeaderGroup = styled.header`
  @media only screen and (min-width: 768px) { 
    padding: 0 80px;
  }
  padding: 0 20px;
  background: transparent;
  width: 100%;
  height: 80px;
  z-index: 100;

  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`

class Header extends React.Component {
  
  
  render() {
    return (     
      <HeaderGroup >
        <a href="/">
          <Logo />
        </a>
        <Nav showNav/>
      </HeaderGroup>
    )
  }
}

export default Header;