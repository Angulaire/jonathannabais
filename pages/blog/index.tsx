import React from 'react';
import { GetStaticProps } from 'next';
import { print } from 'graphql/language/printer';
import { request } from 'graphql-request'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import Layout from '../../components/global/Layout'
import ArticleCard from '../../components/data-display/ArticleCard'
import ARTICLES_QUERY from "../../apollo/queries/article/articles";
import Header from "../../components/navigation/Header";
import Footer from "../../components/navigation/Footer";

const BlogIndex = ({ articles, navigation }) => {  

  return (
    <>
      <Header
        navbar={navigation.navbar}
      />
      <Layout
        color="secondary"
        space="default"
      >
        <Row justify="start" align="top">
          {articles.map(article => (
            <Col xs={24} md={8}>
              <ArticleCard article={article}/>
            </Col>
          ))}
        </Row>
      </Layout>
      <Footer 
        navigation={navigation.footer}
      />
    </>
  );
};

export const getStaticProps: GetStaticProps = async context => {
  const data = await request(`${process.env.API_BASE_URL}/graphql`, print(ARTICLES_QUERY))
  const articles = await data.articles
  const navigation = await data.navigation
  return { props: { articles, navigation } }
}

export default BlogIndex; 