import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { print } from 'graphql/language/printer';
import { request } from 'graphql-request'
import { NextSeo } from 'next-seo';
import ARTICLES_QUERY from "../../apollo/queries/article/articles";
import ARTICLE_QUERY from "../../apollo/queries/article/article";
import Footer from '../../components/navigation/Footer';
import HeroArticle from '../../components/section/HeroArticle';
import CTA from '../../components/section/CTA'
import ArticleText from '../../components/section/ArticleText';
import ArticlesCarousel from '../../components/section/ArtclesCarousel';

const Article = ({ article, navigation }) => {

  return (
    <>
      <NextSeo
        title={article.title}
        description={article.description}
        canonical={`https://jonathannabais.fr/blog/${article.slug}`}
        openGraph={{
          title: article.title,
          description: article.description,
          url: `https://jonathannabais.fr/blog/${article.slug}`,
          type: 'article',
          article: {
            publishedTime: article.published_at,
            modifiedTime: '2018-01-21T18:04:43Z',
            expirationTime: '2022-12-21T22:04:11Z',
            authors: [
              `https://jonathannabais.fr/authors/jonathan-nabais`,
            ],
            tags: [article.category.name]
          },
          images: [
            {
              url: 'https://res.cloudinary.com/angulaire/image/upload/c_scale,h_630,w_1200/',
              alt: article.title,
              width: 1200,
              height: 630,
            }
          ]
        }}
      />
      <HeroArticle
        navbar={navigation.navbar}
        article={article}
        color="transparent"
        space="default"
        backgroundImageUrl="https://res.cloudinary.com/angulaire/image/upload/v1586182535/suhg8eda7lfcztwpy71x.png"
        shapes={[
          {
            image: {
              url: "https://res.cloudinary.com/angulaire/image/upload/v1588580900/green-dots-rectangle-6-shape_8dfbf1af5d.svg"
            },
            position: {
              bottom: ["0", "120px"],
              right: ["0", "-45px"]
            },
            size: {
              height: ["60px", "80px"],
              width: ["245px", "265px"]
            }
          }
        ]}
      />
      {article.content.map((section, i) => {
        if ( section.__typename === "ComponentSectionRichText") {
          return (
            <ArticleText 
              body={section.body}
              signature={section.signature}
              author={article.user}
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
        if ( section.__typename === "ComponentSectionRelatedArticles") {
          return (
            <ArticlesCarousel
              color={section.layout.color}
              space={{
                p: ["40px 20px", "80px 140px 80px 70px"],
                ml: ["0", "70px"],
                mt: ["20px", "80px"]
              }}
              articles={section.collection.articles}
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

export const getStaticPaths: GetStaticPaths = async () => {
  const endpoint = `${process.env.API_BASE_URL}/graphql`
  const query = print(ARTICLES_QUERY)
  // Call an external API endpoint to get articles
  const data = await request(endpoint, query)
  const articles = await data.articles


  // Get the paths we want to pre-render based on articles
  const paths = articles.map((article: any) => `/blog/${article.slug}`)
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }

}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const endpoint = `${process.env.API_BASE_URL}/graphql`
  const query = print(ARTICLE_QUERY)
  const variables = {
    slug: params.id,
  }
  const data = await request(endpoint, query, variables)
  const article = await data.articles[0]
  const navigation = await data.navigation

  // Pass post data to the page via props
  return { props: { article, navigation }}
}

export default Article; 