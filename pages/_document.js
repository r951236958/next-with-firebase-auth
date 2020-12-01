import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className=" leading-tight">
        <Head>
          <meta name="color-scheme" content="dark light" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link rel="manifest" href="/favicon/manifest.json"></link>
          <link rel="shortcut icon" href="/favicon.ico"></link>
        </Head>
        <body className="min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      // useful for wrapping the whole react tree
      enhanceApp: (App) => App,
      // useful for wrapping in a per-page basis
      enhanceComponent: (Component) => Component,
    })

  // Run the parent `getInitialProps`, it now includes the custom `renderPage`
  const initialProps = await Document.getInitialProps(ctx)

  return initialProps
}

export default MyDocument
