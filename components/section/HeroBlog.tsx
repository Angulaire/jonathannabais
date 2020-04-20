import React from 'react';
import { Row, Col } from 'antd';
import Layout from '../global/Layout'
import styled from 'styled-components';
import Shapes from '../global/Shapes'
import {Image} from 'cloudinary-react';

const ImageGroup = styled.div`
  img {
    width: 100%
  }
`

type HeroBlogProps = { 
  title: string;
  image: {
    provider_metadata: any;
    alternativeText: string;
  }
  color: string;
  space: string;
}

const HeroBlog = ({title, image, color, space}: HeroBlogProps) => {

  return (
    <Layout
      color={color}
      space={space}
    >
      <Row justify="start" align="middle">
        <Col xs={24} md={12}>
          <h1>{title}</h1>
        </Col>
        <Col xs={24} md={12}>
          <ImageGroup>
            <Image 
              cloudName="angulaire"
              dpr="auto"
              responsive
              responsiveUseBreakpoints="true"
              width="auto"
              crop="scale"
              publicId={image.provider_metadata.public_id} 
              alt={image.alternativeText}
            />
          </ImageGroup>
        </Col>
      </Row>
    </Layout>
  )
}

export default HeroBlog;