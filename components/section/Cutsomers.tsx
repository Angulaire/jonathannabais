import { Row, Col, Button } from 'antd';
import styled from 'styled-components';

const Section = styled.section`
  @media only screen and (min-width: 768px) { 
    margin: 80px;
  }
`

const CustomerCard = styled.div`
  background-color: #172D5F;
  padding: 40px 65px;

`

const CardImage = styled.div`
  width: 100%;
  height: 100%;
  img {
    -webkit-transition: all 1s ease; /* Safari et Chrome */
    -moz-transition: all 1s ease; /* Firefox */
    -ms-transition: all 1s ease; /* Internet Explorer 9 */
    -o-transition: all 1s ease; /* Opera */
    transition: all 1s ease;
  }
  
  img:hover {
    -webkit-transform:scale(1.1); /* Safari et Chrome */
    -moz-transform:scale(1.1); /* Firefox */
    -ms-transform:scale(1.1); /* Internet Explorer 9 */
    -o-transform:scale(1.1); /* Opera */
    transform:scale(1.1);
  }
`

const Customers = () => {
  return (
    <Section>
      <h2>Quelques clients</h2>
      <Row justify="center" align="middle">
        <Col xs={24} md={8}>
          <CustomerCard>
            <CardImage>
              <img src="/logo-edhec.png" alt="Logo EDHEC"/>
            </CardImage>
          </CustomerCard>
        </Col>
        <Col xs={24} md={8}>
          <CustomerCard>
            <img src="/logo-edflex.png" alt="Logo EDHEC"/>
          </CustomerCard>
        </Col>
        <Col xs={24} md={8}>
          <CustomerCard>
            <img src="/logo-blvck.png" alt="Logo EDHEC"/>
          </CustomerCard>
        </Col>
        <Col xs={24} md={8}>
          <CustomerCard>
            <img src="/logo-perenco.png" alt="Logo EDHEC" width="100%"/>
          </CustomerCard>
        </Col>
        <Col xs={24} md={8}>
          <CustomerCard>
            <img src="/logo-moodz.png" alt="Logo EDHEC" width="100%"/>
          </CustomerCard>
        </Col>
        <Col xs={24} md={8}>
          <CustomerCard>
            <img src="/logo-lagardere.png" alt="Logo EDHEC" width="100%"/>
          </CustomerCard>
        </Col>
      </Row>
    </Section>
  )
}
export default Customers