import React from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'

const Content = styled.main`
  padding: 0 20px 20px;

  @media (min-width: 768px) { 
    padding: 0px 40px 20px;
  }

`;

class Layout extends React.Component {

  render() {
    const { children } = this.props;
    return (
      <div>
        <Header afterScroll={true} />
        <Content>
          { children }
        </Content>
        <Footer />
      </div>
    )
  }
}

export default Layout;