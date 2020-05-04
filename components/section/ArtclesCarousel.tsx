import { Row, Col } from 'antd'
import styled from 'styled-components'
import Layout from '../../components/global/Layout'
import ArticleCard from '../../components/data-display/ArticleCard'

type IProps = {
  articles: any;
  color: string
  space: any
};

const ArticlesGrid = ({ color, space, articles }: IProps) => {
  return (
    <section id="ArticlesGrid">
      <Layout
        color={color}
        space={space}
      >
        <h2>Ces articles vous seront utiles</h2>
        <Row justify="start" align="top">
          {articles.map(article => (
            <Col xs={24} md={8}>
              <ArticleCard article={article}/>
            </Col>
          ))}
        </Row>
      </Layout>
    </section>
  )
};

export default ArticlesGrid;