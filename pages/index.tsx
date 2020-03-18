import React from 'react';
import { GetStaticProps } from 'next';
import { useRouter } from "next/router";
import HOME_QUERY from "../apollo/queries/page/home";
import { print } from 'graphql/language/printer';
import { request } from 'graphql-request'
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';
import Loading from '../components/global/Loading'
import Hero from '../components/section/Hero';
import CTA from '../components/section/CTA';
import Customers from '../components/section/Customers';
import TextGrid from '../components/section/TextGrid';
import Tools from '../components/section/Tools';

const IndexPage = ({ home }) => {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <Loading/>
  }

  return (
    <>
      {home.content.map(section => {
        if ( section.__typename === "ComponentHero") {
          return (
            <Hero
              title="Je pilote des stratégies pour les marques de demain."
              color={section.layout.color}
              space="default"
            />
          )
        }
        if ( section.__typename === "ComponentToolsList") {
          return (
            <Tools
              title={section.title}
              tools={section.tool}
              color={section.layout.color}
              space="default"
            />
          )
        }
        if ( section.__typename === "ComponentCustomersList") {
          return (
            <Customers 
              title={section.title}
              customers={section.customer}
              color={section.layout.color}
              space="default"
            />
          )
        }
        if ( section.__typename === "ComponentTextGrid") {
          return (
            <>
            <TextGrid
              title={section.title}
              textCards={section.textCard}
              color={section.layout.color}
              space={section.layout.space}
            />
            {console.log(section)}
            </>
          )
        }
      })}
      <CTA />
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async context => {
  const data = await request(`${process.env.API_BASE_URL}/graphql`, print(HOME_QUERY))
  const home = await data.home
  return { props: { home } }
}

export default IndexPage