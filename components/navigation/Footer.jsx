import { Row, Col, Button, Icon } from 'antd'
import styled from 'styled-components'
import DarkModeToggle from '../global/DarkModeToggle'

const FooterGroup = styled.footer`
  background: ${props => props.theme.bg.matt};
  border-top: 1px solid ${props => props.theme.bg.border};
  padding: 140px 80px 30px;
`

const LeftGroup = styled.div`
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`
const RightGroup = styled.div`
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
`

const CopyrightGroup = styled.div`
  h4 {
    text-align: center;
  }

  p, a {
    text-align: center;
    font-weight: 400;
    font-size: 12px;
    color: ${props => props.theme.bg.greyDark};
  }

  a:hover {
    color: rgb(68, 68, 68);
  }

`

const Footer = () => {
  return (
    <FooterGroup>
      <Row type="flex" justify="center" align="middle">
        <Col xs={24} md={8}>
          <LeftGroup>
            <DarkModeToggle />
          </LeftGroup>
        </Col>
        <Col xs={24} md={8}>
          <CopyrightGroup>
            <h4>Le showroom du site carrière</h4>
            <p>Kernn est un site démo que nous avons conçus pour vous présenter les différents aspects nécessaires pour atteindre vos objectifs aussi bien auprès des recruteurs que des candidats.</p>
            <p>Made with ❤️ in Paris</p>
          </CopyrightGroup>
        </Col>
        <Col xs={24} md={8}>
          <RightGroup/>
        </Col>
      </Row>
      
    </FooterGroup>
  )
}
export default Footer