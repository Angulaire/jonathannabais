import React from 'react';
import { Row, Col } from 'antd';
import Layout from '../global/Layout'
import Header from '../navigation/Header';
import styled from 'styled-components';
import AOS from 'aos';

const HeroBg = styled.div`
  background: url(/hero-bg.png) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`

const ShapeOne = styled.div`
  position: absolute;
  top: 80px;
  left: 10px;
  img {
    width: 81px;
  }
  @media only screen and (min-width: 768px) {
    top: 40px;
    left: -40px;
    img {
      width: 202px;
    }
  }
`

const ShapeTwo = styled.div`
  position: absolute;
  bottom: 0;
  img {
    width: 131px;
  }

  @media only screen and (min-width: 768px) {
    img {
      width: 310px;
    }
  }
`

const ShapeTree = styled.div`
  position: absolute;
  right: 0;
  top: 80px;
  img {
    width: 150px;
  }
  @media only screen and (min-width: 768px) {
    img {
      width: 300px;
      right: 50px;
    }
  }
`

const ShapeAvatar = styled.div`
  position: relative;
`

type HeroProps = { 
  title: string;
  imageUrl: string;
  color: string;
  space: string;
}

class Hero extends React.Component<HeroProps> {

  componentDidMount(){
    AOS.init()
  }

  render() {
    const { title, imageUrl, color, space } = this.props
    return (
      <HeroBg>
        <Header/>
        <Layout
          color={color}
          space={space}
        >
          <Row justify="center" align="middle">
            <Col xs={24} md={11}>
              <h1>{title}</h1>
            </Col>
            <Col xs={24} md={13}>
              <ShapeOne data-aos="fade-up-left" data-aos-duration="500">
                <img src="https://res.cloudinary.com/angulaire/image/upload/v1584633151/rox4bdvcwuvmmfv7uesy.svg"/>
              </ShapeOne>
              <ShapeTwo data-aos="fade-left" data-aos-duration="600">
                <img src="https://res.cloudinary.com/angulaire/image/upload/v1584633151/oyrzugciumc6f0nscc0a.svg"/>
              </ShapeTwo>
              <ShapeTree data-aos="fade-left" data-aos-duration="700">
                <img src="https://res.cloudinary.com/angulaire/image/upload/v1584633151/aeiogpgsgpqsldquwzk5.svg"/>
              </ShapeTree>
              <ShapeAvatar data-aos='zoom-out' data-aos-duration="2000">
                <img src={imageUrl} width="100%" alt="Jonathan Nabais, CEO @Angulaire"/>
              </ShapeAvatar>
            </Col>
          </Row>
        </Layout>
      </HeroBg>
    )

  }
}

export default Hero;