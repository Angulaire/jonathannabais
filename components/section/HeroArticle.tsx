import React from 'react';
import { Row, Col, Tag } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import Header from '../navigation/Header'
import Layout from '../global/Layout'
import Shapes from '../global/Shapes'
import styled from 'styled-components';
import { background } from 'styled-system';
import readingTime from 'reading-time';

const options = { year: 'numeric', month: 'short', day: 'numeric' };

const HeroBg = styled.div`
  ${background}
`

const Infos = styled(Row)`
  p {
    margin-bottom: 0;
    line-height: 1;
  }
  .ant-tag {
    font-size: 17px;
    padding-right: 20px;
  }
  .timeLogo {
    font-size: 17px;
    padding-right: 12px;
  }
  .time {
    padding-right: 20px;
    border-right: 2px solid ${props => props.theme.colors.primary.text}; 
  }
  .date {
    padding-left: 20px;
  }
`

type HeroArticleProps = { 
  navbar: any;
  article: any;
  backgroundImageUrl: string;
  color: string;
  space: string;
  shapes: any;
}

const defaultProps = {
  shapes: []
};

const HeroArticle = ({ navbar, article, backgroundImageUrl, color, space, shapes }: HeroArticleProps) => {

  return (
    <HeroBg
      backgroundImage={`url(${backgroundImageUrl})`}
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
        <Row justify="center" align="top">
          <Col xs={24} md={18}>
            <Infos justify="start" align="middle">
              <Tag color={article.category.color}>{article.category.name}</Tag>
              <ClockCircleOutlined className="timeLogo"/>
              <p className="time">{Math.round(readingTime(article.content).minutes)} min</p>
              <p className="date">{new Date(article.published_at).toLocaleDateString('fr-FR', options)}</p>
            </Infos>
            <h1>{article.title}</h1>
            <p>{article.description}</p>
          </Col>
        </Row>
      </Layout>
      <Shapes shapes={shapes}/>
    </HeroBg>
  )
}

HeroArticle.defaultProps = defaultProps;
export default HeroArticle;