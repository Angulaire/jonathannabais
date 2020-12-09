import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { InitializeColorMode } from 'theme-ui';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="fr">
        <Head>
          <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-chrome-192x192.png"/>
          <link rel="icon" type="image/png" sizes="512x512" href="/favicon/android-chrome-512x512.png"/>
          <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" href="/favicon/favicon.ico"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
          <link rel="manifest" href="/favicon/site.webmanifest"/>
          <meta name="theme-color" content="#FFF"/>
          <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
          <meta name="google-site-verification" content="Yy13w6murVGkskMeSWWCfc8RsHfvxibRsvA4hhWhdfo" />
        </Head>
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
  
}