import { Row, Col, Button } from 'antd';
import styled from 'styled-components';

const Section = styled.section`
  margin-top: 100px;
  position: relative;

  @media only screen and (min-width: 768px) {
    margin-top: 200px;
  }
`

const ShapeOne = styled.div`
  @media only screen and (min-width: 768px) {
    top: -55px;
    left: -45px;
    img {
      width: 526px;
    }
  }
  z-index: -1;
  position: absolute;
  top: -60px;
  left: 20px;
  img {
    width: 80%;
  }
  
`

const ShapeTwo = styled.div`
  position: absolute;
  right: 20px;
  bottom: -100px;
  img {
    width: 131px;
  }
  @media only screen and (min-width: 768px) {
    top: -180px;
    right: 120px;
    img {
      width: 272px;
    }
  }

`

const CtaCard = styled.div`
  @media only screen and (min-width: 768px) { 
    margin-left: 40px;
    margin-top: 40px;
    padding: 80px;
    text-align: left;
  }
  padding: 40px 40px 80px;
  text-align: center;

  background-color: white;
  h2 {
    color: ${props => props.theme.text.secondary};
  }
  a {
    color: ${props => props.theme.text.secondary};
    font-size: 27px;
    text-decoration: underline;
  }
`

const CTA = () => {
  return (
    <Section>
      <ShapeOne>
        <img src="https://res.cloudinary.com/angulaire/image/upload/v1584696383/w5fiboadwzfgtibn0yf8.svg"/>
      </ShapeOne>
      <ShapeTwo>
        <img src="https://res.cloudinary.com/angulaire/image/upload/v1584696560/u3ejgxgvfc7su7y8hirf.svg"/>
      </ShapeTwo>
      <CtaCard>
        <h2>On en discute cette semaine ?</h2>
        <a>Envoyer une demande</a>
      </CtaCard>
    </Section>
  )
}
export default CTA