import React from 'react';
import { Row, Col } from 'antd';
import Layout from '../global/Layout'
import Header from '../navigation/Header';
import styled from 'styled-components';
import { position, layout, background } from 'styled-system'

const HeroBg = styled.div`
  background: url(/hero-bg.png) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`

const Section = styled.section`
  position: relative;
`

const Shape = styled.div`
  ${layout}
  ${position}
  ${background}
  display: block;
  background-repeat: no-repeat;
  background-size: contain;
`

type HeroProps = { 
  article: any;
  navbar: any;
  color: string;
  space: string;
}

const HeroBlog = ({ article, navbar, color, space }: HeroProps) => {

  return (
    <HeroBg>
      <Header
        navbar={navbar}
      />
      <Section>
        <Layout
          color={color}
          space={space}
        >
          <Row justify="start" align="middle">
            <Col xs={24} md={18}>
              <p>{article.category.name.toUpperCase()}</p>
              <h1>{article.title}</h1>
              <p>{article.description}</p>
            </Col>
          </Row>
        </Layout>
        <Shape
          position="absolute"
          backgroundImage="url(https://res.cloudinary.com/angulaire/image/upload/v1584704826/sqin7qhpsk0kdy8iaiex.svg)"
          width="300px"
          height="100px"
          bottom="0"
          right="20px"
        />
      </Section>
    </HeroBg>
  )
}

export default HeroBlog;