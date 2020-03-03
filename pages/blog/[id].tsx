import React from 'react';
import { useRouter } from "next/router";
import { NextSeo } from 'next-seo';
import { Row, Col, Button, Tag, Avatar} from 'antd';
import styled from 'styled-components';
import Query from "../../components/global/Query"; 
import ARTICLE_QUERY from "../../apollo/queries/article/article";
import { Markdown } from 'react-showdown';
import { Image, Transformation} from 'cloudinary-react';
import ArticleAuthor from '../../components/data-display/ArticleAuthor';
import Header from '../../components/navigation/Header';
import Footer from '../../components/navigation/Footer';

const Article = () => {
  const router = useRouter();
  return (
    <Query query={ARTICLE_QUERY} slug={router.query.id} >
      {({ data: { articles } }) => {
        const article = articles[0]
        return (
          <>
            <NextSeo
              title={article.title}
              description={article.description}
              canonical={`https://kernn.io/blog/${article.slug}`}
              openGraph={{
                title: article.title,
                description: article.description,
                url: `https://kernn.io/blog/${article.slug}`,
                type: 'article',
                article: {
                  publishedTime: article.published_at,
                  modifiedTime: '2018-01-21T18:04:43Z',
                  expirationTime: '2022-12-21T22:04:11Z',
                  authors: [
                    `https://www.kernn.io/authors/${article.user.username}`,
                  ],
                  tags: [article.category.name]
                },
                images: [
                  {
                    url: `https://res.cloudinary.com/angulaire/image/upload/c_scale,h_630,w_1200/${article.image.media.provider_metadata.public_id}${article.image.media.ext}`,
                    alt: article.image.alt,
                    width: 1200,
                    height: 630,
                  }
                ]
              }}
            />
            <Header />
            <Row justify="center" align="top" style={{padding: "100px 0"}}>
              <Col xs={24} md={16}>
                <Tag color={article.category.color}>{article.category.name}</Tag>
                <h1>{article.title}</h1>
                <p>{article.description}</p>
                <ArticleAuthor article={article} />
              </Col>
            </Row>
            <Image 
              cloudName="angulaire" 
              publicId={article.image.media.provider_metadata.public_id} 
              alt={article.image.alt}
              secure="true"
              width="100%"
            >
              <Transformation 
                quality="auto" 
                fetchFormat="auto"
              />
            </Image>
            <Row justify="center" align="top">
              <Col xs={24} md={16} style={{padding: "80px 0"}}>
                <Markdown markup={article.content} />
              </Col>
            </Row>
            <Footer />
          </>
        );
      }}
    </Query>
  );
};

export default Article; 