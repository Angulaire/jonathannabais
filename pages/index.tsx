import React from 'react';
import { GetStaticProps } from 'next';
import { useRouter } from "next/router";
import HOME_QUERY from "../apollo/queries/page/home";
import { print } from 'graphql/language/printer';
import { request } from 'graphql-request'
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';
import Hero from '../components/section/Hero';
import CTA from '../components/section/CTA';
import Customers from '../components/section/Customers';
import TextGrid from '../components/section/TextGrid';
import Testimonials from '../components/section/Testimonials'
import Tools from '../components/section/Tools';

const IndexPage = ({ home, navigation }) => {
  const router = useRouter()

  return (
    <>
      {home.content.map((section, i) => {
        if ( section.__typename === "ComponentSectionHero") {
          return (
            <Hero
              key={i}
              title={section.heroTitle}
              image={section.image}
              navbar={navigation.navbar}
              color={section.layout.color}
              space={section.layout.space}
              shapes={section.shapes}
              backgroundImage={section.backgroundImage}
              scrollId="Mon quotidien"
            />
          )
        }
        if ( section.__typename === "ComponentSectionToolsList") {
          return (
            <Tools
              key={i}
              title={section.title}
              tools={section.tool}
              color={section.layout.color}
              space={section.layout.space}
            />
          )
        }
        if ( section.__typename === "ComponentSectionCustomersList") {
          return (
            <Customers 
              key={i} 
              title={section.title}
              customers={section.customer}
              color={section.layout.color}
              space={section.layout.space}
            />
          )
        }
        if ( section.__typename === "ComponentSectionTextGrid") {
          return (
            <TextGrid
              key={i} 
              title={section.title}
              textCards={section.textCard}
              color={section.layout.color}
              space={section.layout.space}
              shapes={section.shapes}
            />
          )
        }
        if ( section.__typename === "ComponentSectionTestimonialsSlider") {
          return (
            <Testimonials
              key={i} 
              testimonials={section.testimonials}
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
  )
}

export const getStaticProps: GetStaticProps = async context => {
  const data = await request(`${process.env.API_BASE_URL}/graphql`, print(HOME_QUERY))
  const home = await data.home
  const navigation = await data.navigation
  return { props: { home, navigation } }
}

export default IndexPage