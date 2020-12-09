import React from 'react'
import { Row, Col, Tag } from 'antd'
import { ClockCircleOutlined } from '@ant-design/icons'
import styled from '@emotion/styled';
import Link from 'next/link'
import readingTime from 'reading-time';

const options = { year: 'numeric', month: 'short', day: 'numeric' };

const CardGroup = styled.article`
  h3 {
    margin: 10px 0 24px;
  }
  a {
    color: black;
  }
`

const Footer = styled(Row)`
  border-top: 1px solid #D8D8D8;
  padding-top: 12px;
  p {
    margin-bottom: 0;
  }
  .anticon {
    margin-top : 4px;
  }
`
const StyledCol = styled(Col)`
  border-right: 2px solid black; 
`

type ArticleCardProps = { 
    article: any
}

const ArticleCard = ({ article }: ArticleCardProps) => {  
  return (
    <CardGroup>
      <Link href={'/blog/[id]'} as={`/blog/${article.slug}`}>
        <a>
          <Tag color={article.category.color}>{article.category.name}</Tag>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <Footer justify="start" align="middle">
            <Col span={2}>
              <ClockCircleOutlined style={{fontSize: "17px"}}/>
            </Col>
            <StyledCol span={6}>
              <p>{Math.round(readingTime(article.content).minutes)} min</p>
            </StyledCol>
            <Col span={12} offset={2}>
              <p>{new Date(article.published_at).toLocaleDateString('fr-FR', options)}</p>
            </Col>
          </Footer>

        </a>
      </Link>
    </CardGroup>
  );
};

export default ArticleCard