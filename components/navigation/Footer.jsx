import { Row, Col, Button, Icon } from 'antd'
import styled from 'styled-components'
import Logo from '../global/Logo'

const FooterGroup = styled.footer`
  background: ${props => props.theme.bg.matt};
  padding: 140px 80px 30px;
`

const Footer = () => {
  return (
    <FooterGroup>
      <Row justify="left" align="middle">
        <Col xs={24} md={8}>
          <h3>Jonathan</h3>
          <p>In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat.</p>  
        </Col>
        <Col xs={24} md={4}>
          <h4>SERVICES</h4>
          <ul>
            <li>
              <a>Index</a>
            </li>
            <li>
              <a>Marketing</a>
            </li>
            <li>
              <a>Tarifs</a>
            </li>
          </ul>
        </Col>
        <Col xs={24} md={4}>
          <h4>EN SAVOIR PLUS</h4>
          <ul>
            <li>
              <a>Crème</a>
            </li>
            <li>
              <a>Malt</a>
            </li>
            <li>
              <a>Hall of Fame</a>
            </li>
          </ul>
        </Col>
        <Col xs={24} md={4}>
          <h4>INFORMATIONS</h4>
          <ul>
            <li>
              <a>Journal</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>RGPB</a>
            </li>
          </ul>
        </Col>
        <Col xs={24} md={4}>
          <h4>CONTACT</h4>
          <ul>
            <li>
              <a>Rendez-vous</a>
            </li>
            <li>
              <a>Email</a>
            </li>
            <li>
              <a>Devis</a>
            </li>
          </ul>
        </Col>
      </Row>
      <Row justify="space-between" align="middle">
        <Col xs={24} md={12}>
           <Logo />
        </Col>
        <Col xs={24} md={12}>
          <p>© Made with ❤️ by <a>Angulaire</a></p>
        </Col>
      </Row>
    </FooterGroup>
  )
}
export default Footer