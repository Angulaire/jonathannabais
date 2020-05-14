import { Row, Col } from 'antd'
import Layout from '../../components/global/Layout'
import ArticleCard from '../../components/data-display/ArticleCard'

type IProps = {
  color: string;
  space: any;
  articles: any;
};

const ArticlesGrid = ({ color, space, articles }: IProps) => {
  return (
    <section id="ArticlesGrid">
      <Layout
        color={color}
        space={space}
      >
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