import React from 'react';
import App from 'next/app';
import TagManager from 'react-gtm-module';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config'
import Providers from '../components/global/Providers';
import { ApolloProvider } from "@apollo/react-hooks";  
import { ApolloClient, NormalizedCacheObject } from "apollo-boost";
import withData from "../utils/apollo";

const tagManagerArgs = {
  gtmId: 'GTM-MBFH9W2'
}

interface IProps {
  apollo: ApolloClient<NormalizedCacheObject>;
}

class MyApp extends App<IProps> {
  componentDidMount () {
    TagManager.initialize(tagManagerArgs)
  }

  render() {
    const { Component, pageProps, apollo } = this.props
    return (
      <ApolloProvider client={apollo}>
        <DefaultSeo {...SEO} />
        <Providers>
          <Component {...pageProps} />
        </Providers>
      </ApolloProvider>
    )
  }
}

export default withData(MyApp)