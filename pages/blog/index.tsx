import React, { useRef } from 'react';
import { GetStaticProps } from 'next';
import { print } from 'graphql/language/printer';
import { request } from 'graphql-request'
import ARTICLES_QUERY from "../../apollo/queries/article/articles";
import Header from "../../components/navigation/Header";
import Footer from "../../components/navigation/Footer";
import Hero from '../../components/section/Hero';
import ArticlesGrid from '../../components/section/ArticlesGrid';
import CTA from '../../components/section/CTA'

const BlogIndex = ({ blog, articles, navigation }) => {  

  return (
    <>
      {blog.content.map((section, i) => {
        if ( section.__typename === "ComponentSectionHero") {
          return (
            <>
            <Hero
              key={i}
              navbar={navigation.navbar}
              title={section.title}
              image={section.image}
              color={section.layout.color}
              space={section.layout.space}
              backgroundImage={section.backgroundImage}
              scrollId="ArticlesGrid"
            />
            </>
          )
        }
        if ( section.__typename === "ComponentSectionBlogGrid") {
          return (
            <ArticlesGrid 
              articles={articles}
              color={section.layout.color}
              space={section.layout.space}
            />
          )
        }
        if ( section.__typename === "ComponentSectionCta") {
          return (
            <CTA 
              key={i} 
              title={section.cta.ctaTitle}
              buttons={section.cta.buttons}
              color={section.cta.layout.color}
              space={section.cta.layout.space}
              shapes={section.cta.shapes}
            />
          )
        }
      })}
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
  const blog = await data.blog
  return { props: { blog, articles, navigation } }
}

export default BlogIndex; 