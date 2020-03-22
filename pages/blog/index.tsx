import React from 'react';
import { Row, Col, Tag } from 'antd'
import styled from 'styled-components'
import ArticleCard from '../../components/data-display/ArticleCard'
import Query from '../../components/global/Query'
import ARTICLES_QUERY from "../../apollo/queries/article/articles";
import ArticleAuthor from '../../components/data-display/ArticleAuthor'
import Link from 'next/link'
import { Image, Transformation} from 'cloudinary-react';
import Header from "../../components/navigation/Header";
import Footer from "../../components/navigation/Footer";

const StyledRow = styled(Row)`
  padding-top: 50px;
  @media only screen and (min-width: 768px) {
    background-color: #061F5C;
    padding: 200px 0;
    position: relative;
  }
`

const ImageGroup = styled.div`
  margin-bottom: 12px;
  img {
    height: 26rem;
    object-fit: cover;
  }
`
const LastArticleContentGroup = styled.div`
  h1 {
    color: white;
    font-size: 2.8rem;
    margin: 18px 0;
  }
`

const ArticlesGrid = styled(Row)`
  background-color: white;
`

const BlogIndex = () => {  
  return (
    <Query query={ARTICLES_QUERY}>
      {({ data: { articles } }) => {
        const lastArticle = articles.slice(0, 1)[0];
        const otherArticles = articles.slice(1, articles.length);
        return (
          <>
            <Link href={'/blog/[id]'} as={`/blog/${lastArticle.slug}`}>
              <a>
                <StyledRow justify="start" align="middle">
                  <Col xs={0} md={8}>
                    <ImageGroup>
                      <Image 
                        cloudName={process.env.CLOUDINARY_CLOUD_NAME} 
                        publicId={lastArticle.image.media.provider_metadata.public_id} 
                        alt={lastArticle.image.alt}
                        secure="true"
                        width="100%"
                      >
                        <Transformation 
                          fetchFormat="auto"
                        />
                      </Image>
                    </ImageGroup>
                  </Col>
                  <Col xs={0} md={{span: 10, offset: 1}}>
                    <LastArticleContentGroup>
                      <Tag color={lastArticle.category.color}>{lastArticle.category.name}</Tag>
                      <h1>{lastArticle.title}</h1>
                      <p style={{fontSize: "1.4rem"}}>{lastArticle.description}</p>
                      <ArticleAuthor article={lastArticle}/>
                    </LastArticleContentGroup>
                  </Col>
                  <Col xs={24} md={0}>
                    <ArticleCard article={lastArticle}/>
                  </Col>
                </StyledRow>
              </a>
            </Link>
            <ArticlesGrid justify="start" align="top">
              {otherArticles.map(article => (
                <Col xs={24} md={8}>
                  <ArticleCard article={article}/>
                </Col>
              ))}
            </ArticlesGrid>
            <Footer/>
          </>
        );
      }}
    </Query>
  );
};

export default BlogIndex; 