import React from 'react';
import { Row, Col } from 'antd';
import { ArrowDownOutlined } from '@ant-design/icons';
import Header from '../navigation/Header'
import Layout from '../global/Layout'
import styled from 'styled-components';
import { background } from 'styled-system';
import { Link, animateScroll as scroll } from 'react-scroll';
import {Image} from 'cloudinary-react';

const HeroBg = styled.div`
  ${background}
`

const ImageGroup = styled.div`
  img {
    width: 100%
  }
`

const ArrowLink = styled(Link)`
  position: absolute;
  bottom: 70px;
  left: 140px;
`

type HeroBlogProps = { 
  navbar: any;
  title: string;
  image: {
    provider_metadata: any;
    alternativeText: string;
  }
  backgroundImage: {
    url: string
  }
  color: string;
  space: string;
}

const HeroBlog = ({navbar, title, image, backgroundImage, color, space }: HeroBlogProps) => {

  return (
    <HeroBg
      backgroundImage={`url(${backgroundImage.url})`}
      backgroundPosition="center center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <Header navbar={navbar}/>
      <Layout
        color={color}
        space={space}
      >
        <Row justify="center" align="middle">
          <Col xs={24} md={12}>
          <h1>{title}</h1>
          </Col>
          <Col xs={24} md={12}>
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
          </Col>
        </Row>
        <ArrowLink to="ArticlesGrid" smooth={true} offset={50} duration={500}>
          <ArrowDownOutlined style={{ fontSize: '24px', color: "white" }}/>
        </ArrowLink>
      </Layout>
    </HeroBg>
  )
}

export default HeroBlog;