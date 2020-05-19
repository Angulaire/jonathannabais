import React from 'react';
import App from 'next/app';
import TagManager from 'react-gtm-module';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config'
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';

const tagManagerArgs = {
  gtmId: 'GTM-MBFH9W2'
}

class MyApp extends App {
  componentDidMount () {
    TagManager.initialize(tagManagerArgs)
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

export default MyApp