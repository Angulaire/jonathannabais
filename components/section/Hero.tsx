import React from 'react';
import { Row, Col } from 'antd';
import Layout from '../global/Layout'
import Header from '../navigation/Header';
import styled from 'styled-components';
import { position, layout, background } from 'styled-system';
import {Image, Transformation, CloudinaryContext} from 'cloudinary-react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { ArrowDownOutlined } from '@ant-design/icons';
import AOS from 'aos';

const ImageGroup = styled.div`
  img {
    width: 100%
  }
`

const Shape = styled.div`
  ${layout}
  ${position}
  ${background}
  display: block;
  background-repeat: no-repeat;
  background-size: contain;
`

const HeroBg = styled.div`
  ${background}
`

const ShapeAvatar = styled.div`
  position: relative;
`

const ArrowLink = styled(Link)`
  position: absolute;
  bottom: 70px;
  left: 140px;
`

type HeroProps = { 
  title: string;
  image: {
    provider_metadata: any;
    alternativeText: string;
  }
  navbar: any;
  color: string;
  space: string;
}

class Hero extends React.Component<HeroProps> {

  componentDidMount(){
    AOS.init()
  }

  render() {
    const { title, image, navbar, color, space } = this.props
    return (
      <HeroBg
        backgroundImage="url(https://res.cloudinary.com/angulaire/image/upload/f_auto/v1586182535/suhg8eda7lfcztwpy71x.png)"
        backgroundPosition="center center"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
      >
        <Header
          navbar={navbar}
        />
        <Layout
          color={color}
          space={space}
        >
          <Row justify="center" align="middle">
            <Col xs={24} md={11}>
              <h1>{title}</h1>
            </Col>
            <Col xs={24} md={13}>
              <div data-aos="fade-up-left" data-aos-duration="500">
                <Shape
                  position="absolute"
                  top={["80px", "40px"]}
                  left={["10px", "-40px"]}
                  width={["81px", "202px"]}
                  height={["83px", "206px"]}
                  backgroundImage="url(https://res.cloudinary.com/angulaire/image/upload/v1584633151/rox4bdvcwuvmmfv7uesy.svg)"
                />
              </div>
              <div data-aos="fade-left" data-aos-duration="600">
                <Shape
                  position="absolute"
                  bottom="0"
                  left="0"
                  width={["131px", "327px"]}
                  height={["133px", "331px"]}
                  backgroundImage="url(https://res.cloudinary.com/angulaire/image/upload/v1584633151/oyrzugciumc6f0nscc0a.svg)"
                />
              </div>
              <div data-aos="fade-left" data-aos-duration="700">
                <Shape
                  position="absolute"
                  top="80px"
                  right={["0", "50px"]}
                  width={["150px", "300px"]}
                  height={["150px", "300px"]}
                  backgroundImage="url(https://res.cloudinary.com/angulaire/image/upload/v1584633151/aeiogpgsgpqsldquwzk5.svg)"
                />
              </div>
              <ShapeAvatar data-aos='zoom-out' data-aos-duration="2000">
                <ImageGroup>
                  <Image 
                    cloudName="angulaire"
                    width="auto"
                    dpr="auto"
                    responsive
                    responsiveUseBreakpoints="true"
                    fetchFormat="auto"
                    crop="scale"
                    publicId={image.provider_metadata.public_id} 
                    alt={image.alternativeText}
                  />
                </ImageGroup>
              </ShapeAvatar>
            </Col>
          </Row>
          <ArrowLink to="Mon quotidien" smooth={true} offset={50} duration={500}>
            <ArrowDownOutlined style={{ fontSize: '24px', color: "white" }}/>
          </ArrowLink>
        </Layout>
      </HeroBg>
    )

  }
}

export default Hero;