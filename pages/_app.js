import App from 'next/app';
import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';
//import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "tailwindcss/tailwind.css";
import { AuthProvider } from '../auth';
//import '../styles/tailwind.css';
import '../styles/index.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <React.Fragment>
    <Head>
      <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>

        <script
          defer
          src="https://use.fontawesome.com/releases/v5.14.0/js/all.js"
        ></script>
    </Head>
    <AuthProvider>
    <Component {...pageProps} />
    </AuthProvider>
    </React.Fragment>
    )
  }
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}

export default MyApp