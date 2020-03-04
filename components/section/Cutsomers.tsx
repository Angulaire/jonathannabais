import { Row, Col, Button } from 'antd';
import styled from 'styled-components';

const Section = styled.section`
  @media only screen and (min-width: 768px) { 
    margin: 60px;
  }
  margin: 20px;
`

const CustomerCard = styled.div`
  margin: 10px;
  background-color: #172D5F;
  padding: 40px 65px;
  height: 160px;

`

const CardImage = styled.div`
  width: 100%;
  height: 100%;

  a {
    display: block;
    width: 100%;
    height: 100%;
    -webkit-background-size: fill; /* Safari et Chrome */
    -moz-background-size: fill; /* Firefox */
    -o-background-size: fill; /* Opera */
    background-size: fill;
    background-position: center center;
    background-repeat: no-repeat;
    -webkit-transition: all 1s ease; /* Safari et Chrome */
    -moz-transition: all 1s ease; /* Firefox */
    -ms-transition: all 1s ease; /* Internet Explorer 9 */
    -o-transition: all 1s ease; /* Opera */
    transition: all 1s ease;
  }
  
  a:hover {
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
              <a style={{backgroundImage: "url(/logo-edhec.png)"}}/>
            </CardImage>
          </CustomerCard>
        </Col>
        <Col xs={24} md={8}>
          <CustomerCard>
            <CardImage>
              <a style={{backgroundImage: "url(/logo-edflex.png)"}}/>
            </CardImage>
          </CustomerCard>
        </Col>
        <Col xs={24} md={8}>
          <CustomerCard>
            <CardImage>
              <a style={{backgroundImage: "url(/logo-blvck.png)"}}/>
            </CardImage>
          </CustomerCard>
        </Col>
        <Col xs={24} md={8}>
          <CustomerCard>
            <CardImage>
              <a style={{backgroundImage: "url(/logo-perenco.png)"}}/>
            </CardImage>
          </CustomerCard>
        </Col>
        <Col xs={24} md={8}>
          <CustomerCard>
            <CardImage>
              <a style={{backgroundImage: "url(/logo-moodz.png)"}}/>
            </CardImage>
          </CustomerCard>
        </Col>
        <Col xs={24} md={8}>
          <CustomerCard>
            <CardImage>
              <a style={{backgroundImage: "url(/logo-lagardere.png)"}}/>
            </CardImage>
          </CustomerCard>
        </Col>
      </Row>
    </Section>
  )
}
export default Customers