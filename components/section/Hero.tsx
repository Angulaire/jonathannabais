import React from 'react';
import { Row, Col } from 'antd';
import Layout from '../global/Layout'
import Header from '../navigation/Header';
import styled from 'styled-components';
import { position, layout, background } from 'styled-system';
import { Image } from 'cloudinary-react';
import Shapes from '../global/Shapes'
import { Link, animateScroll as scroll } from 'react-scroll';
import { ArrowDownOutlined } from '@ant-design/icons';
import AOS from 'aos';

const ImageGroup = styled.div`
  position: relative;
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

const ArrowLink = styled(Link)`
  position: absolute;
  bottom: 70px;
  left: 140px;
`

type HeroProps = typeof Hero.defaultProps & { 
  title: string;
  image: {
    provider_metadata: any;
    alternativeText: string;
  }
  backgroundImage: {
    url: string
  }
  navbar: any;
  color: string;
  space: string;
  shapes: any;
  scrollId: string
}

class Hero extends React.Component<HeroProps> {

  static defaultProps = {
    shapes: [],
    backgroundImage: {
      url: ""
    }
  };

  componentDidMount(){
    AOS.init()
  }

  render() {
    const { navbar, title, image, backgroundImage, color, space, shapes, scrollId } = this.props
    return (
      <HeroBg
        backgroundImage={`url(${backgroundImage.url})`}
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
          <Shapes shapes={shapes}/>
          <Row justify="center" align="middle">
            <Col xs={24} md={11}>
              <h1>{title}</h1>
            </Col>
            <Col xs={24} md={13}>
              <ImageGroup data-aos='zoom-out' data-aos-duration="2000">
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
            </Col>
          </Row>
          <ArrowLink to={scrollId} smooth={true} offset={50} duration={500}>
            <ArrowDownOutlined style={{ fontSize: '24px', color: "white" }}/>
          </ArrowLink>
        </Layout>
      </HeroBg>
    )

  }
}

export default Hero;