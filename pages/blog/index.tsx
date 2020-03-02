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
import CTA from "../../components/section/CTA";

const StyledRow = styled(Row)`
  padding-top: 50px;
  @media only screen and (min-width: 768px) {
    background-color: #0E2A3E;
    padding: 200px 0;
    position: relative;
  }
`

const OverDiv = styled.div`
  @media only screen and (min-width: 768px) {
    height: 34rem
  }
`

const OverGroup = styled.div`
  @media only screen and (min-width: 768px) {
    margin-top: -100px;
    position: absolute;
    padding: 0 60px;
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

const BlogIndex = () => {  
  return (
    <Query query={ARTICLES_QUERY}>
      {({ data: { articles } }) => {
        const lastArticle = articles.slice(0, 1)[0];
        const otherArticles = articles.slice(1, articles.length);
        return (
          <>
            <Header afterScroll defaultTheme="light"/>
            <Link href={'/blog/[id]'} as={`/blog/${lastArticle.slug}`}>
              <a>
                <StyledRow type="flex" justify="start" align="middle">
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
            <Row type="flex" justify="start" align="top">
              <OverDiv/>
              <OverGroup>
                {otherArticles.map(article => (
                  <Col xs={24} md={8}>
                    <ArticleCard article={article}/>
                  </Col>
                ))}
              </OverGroup>
            </Row>
            <CTA 
              title="Livre blanc"
              description="Comment optimiser son profil LinkedIn pour être visible par les recruteurs"
              button="Recevoir le livre blanc"
            />
            <Footer/>
          </>
        );
      }}
    </Query>
  );
};

export default BlogIndex; 